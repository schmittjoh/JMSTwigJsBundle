<?php

/*
 * Copyright 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
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

namespace JMS\TwigJsBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;

/**
 * Mount Function Compiler Pass
 *
 * This compiler pass finds services which are tagged as function compilers and
 * adds them to the twig js compiler.
 *
 * @author Josiah <josiah@jjs.id.au>
 * @author Johannes M. Schmitt <schmittjoh@gmail.com>
 */
class MountFunctionCompilersPass implements CompilerPassInterface
{
    /** {@inheritdoc} */
    public function process(ContainerBuilder $container)
    {
        if (!$container->hasDefinition('twig_js.compiler')) {
            return;
        }

        $compiler = $container->getDefinition('twig_js.compiler');

        // Find the tagged function compilers and add them to the javascript
        // compiler
        foreach ($container->findTaggedServiceIds('twig_js.function_compiler')
            as $id => $tags) {
            foreach ($tags as $tag) {
                if (!array_key_exists('function', $tag)) {
                    throw new \LogicException("When defining a TwigJS function complier you must specify the function name in the service tags 'function' attribute.");
                }

                // Function parameters
                $params = array($tag['function'], new Reference($id));

                // Add the priority if it has been set on the tag
                if (array_key_exists('priority', $tag)) {
                    $params[] = (int) $tag['priority'];
                }

                // Add the function compiler dependancy
                $compiler->addMethodCall('addFunctionCompiler', $params);
            }
        }
    }
}