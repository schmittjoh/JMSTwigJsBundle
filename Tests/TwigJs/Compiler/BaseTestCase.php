<?php

namespace JMS\TwigJsBundle\Tests\TwigJs\Compiler;

use TwigJs\JsCompiler;

abstract class BaseTestCase extends \PHPUnit_Framework_TestCase
{
    /**
     * @var \Twig_Environment
     */
    protected $env;

    /**
     * @var JsCompiler
     */
    protected $compiler;

    /**
     * @param string $source
     * @param string|null $name
     * @return string
     */
    protected function compile($source, $name = null)
    {
        return $this->env->compileSource($source, $name);
    }

    /**
     * @param string $source
     * @param string|null $name
     * @return \Twig_Node_Module
     */
    protected function getNodes($source, $name = null)
    {
        return $this->env->parse($this->env->tokenize($source, $name));
    }

    /**
     * {@inheritdoc}
     */
    protected function setUp()
    {
        $this->env = $env = new \Twig_Environment();
        $env->addExtension(new \Twig_Extension_Core());
        $env->setCompiler($this->compiler = new JsCompiler($env));
    }
}
