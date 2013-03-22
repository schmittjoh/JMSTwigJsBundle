<?php

/*
 * Copyright 2013 Josiah Truasheim <josiah@jjs.id.au>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace JMS\TwigJsBundle\TwigJs\Compiler;

use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Routing\Route;
use Twig_Node_Expression_Function;
use Twig_Node_Expression_Constant;
use Twig_NodeInterface;
use TwigJs\FunctionCompilerInterface;
use TwigJs\JsCompiler;

/**
 * Routing Function Compiler
 *
 * Compiles routing functions (`path` and `url`) into javascript inline closures
 * which will generate routes in isolation.
 *
 * @author Josiah <josiah@jjs.id.au>
 */
class RoutingFunctionCompiler implements FunctionCompilerInterface
{
    /**
     * Router
     * 
     * @var RouterInterface
     */
    protected $router;

    /**
     * @param RouterInterface $router Router
     */
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * Compiles a twig function for use in javascript and compiles a method call
     * appropriate for the specified node.
     * 
     * @param JsCompiler                    $compiler Javascript twig compiler
     * @param Twig_Node_Expression_Function $node     Node for compilation
     */
    public function compile(JsCompiler $compiler, Twig_Node_Expression_Function $functionNode)
    {
        // Function arguments
        $argumentNodes = iterator_to_array($functionNode->getNode('arguments'));

        // Ensure that the argument list is not empty
        if (empty($argumentNodes)) {
            throw new \RuntimeException(sprintf(
                "Can't compile %s function for javascript when no arguments are provided.",
                $functionNode->getAttribute('name')
            ));
        }

        // First argument will be the route
        $routeNode = array_shift($argumentNodes);

        // Only text nodes are supported as the routing path
        if ($routeNode instanceof Twig_Node_Expression_Constant) {
            $routeName = $routeNode->getAttribute('value');
        } else {
            $compiler
                ->raw("(function(){throw ")
                ->string(sprintf(
                    "Only static route names can be compiled for javascript %s. Node type '%s' is not supported.",
                    $node->getAttribute('name'),
                    get_class($routeNode)
                ))
                ->raw(";})()")
            ;
            return;
        }

        // Get the route name from the node
        $route = $this->router->getRouteCollection()->get($routeName);

        // When no route exists throw an exception
        if (!$route) {
            $compiler
                ->raw("(function(){throw ")
                ->string(sprintf("Can't find route named '%s'", $routeName))
                ->raw(";})()")
            ;
            return;
        }

        // Open lambda
        $compiler->raw('(');

        // Compile the route into javascript function
        $this->compileRouteFunction($compiler, $route, $functionNode->getAttribute('name') === 'url');

        // Close lambda
        $compiler->raw(')');

        // Compile remaining arguments
        $compiler->raw('(');
        foreach ($argumentNodes as $index => $argumentNode) {
            if ($index) {
                $compiler->raw(', ');
            }
            $compiler->subcompile($argumentNode);
        }
        $compiler->raw(')');
    }

    /**
     * Compiles the specified route for use as a javascript closure
     * 
     * @param JsCompiler $compiler  Javascipt twig compiler
     * @param string     $routeName Route name
     * @param boolean    $url       TRUE if the route should be compiled as a
     *                              full url; FALSE otherwise.
     */
    protected function compileRouteFunction(JsCompiler $compiler, Route $route, $url = false)
    {
        // Compile the route
        $compiledRoute = $route->compile();
        $defaults = $route->getDefaults();

        // Open the route function
        $compiler->raw("function (params) {\n");
        $compiler->indent();

        // Store url informatio in a variable
        $compiler->write("var url = '';\n");

        // Start the route with the static prefix
        foreach ($compiledRoute->getTokens() as $token) {
            list($type, $variable, $requirement, $name) = $token;

            if ($type === 'variable') {
                // Check route parameters
                // TODO: Emulate the parameter checking in the url generator
                
                // Parameter variables
                $compiler
                    ->write("url = ")
                    ->raw("(encodeURIComponent(params[")
                    ->string($name)
                    ->raw(")]||")
                ;

                // Default value
                if (array_key_exists($name, $defaults)) {
                    $compiler->string($this->recodeUrl($defaults[$name]));
                } else {
                    $compiler->string("");
                }

                // Prepend to the url
                $compiler->raw("))+url;\n");
            } else {
                // Static text
                $compiler
                    ->write("url = ")
                    ->string($this->recodeUrl($variable))
                    ->raw("+url;\n")
                ;
                
            }
        }

        // Empty urls should be replaced with a slash
        $compiler
            ->write("url = url || ")
            ->string("/")
            ->raw(";\n")
        ;

        // Scheme and server are required for full urls
        // TODO: Add support for the 'url' function
        
        // Return the generated url
        $compiler->write("return url;\n");

        // Close the route function
        $compiler->outdent();
        $compiler->write('}');
    }

    /**
     * Recodes the url to match with the expectations of symfony
     * 
     * @param string $url Url
     * @return string
     */
    protected function recodeUrl($url)
    {
        // Base url is already encoded
        //  see Symfony\Component\HttpFoundation\Request
        //  and Symfony\Component\Routing\Generator\UrlGenerator->doGenerate()
        //  and Symfony\Component\Routing\Generator\UrlGenerator->$decodedChars
        return strtr(rawurlencode($url), array(
            '%2F' => '/',
            '%40' => '@',
            '%3A' => ':',
            '%3B' => ';',
            '%2C' => ',',
            '%3D' => '=',
            '%2B' => '+',
            '%21' => '!',
            '%2A' => '*',
            '%7C' => '|',
        ));
    }
}