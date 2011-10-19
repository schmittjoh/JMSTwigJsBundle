<?php

namespace JMS\TwigJsBundle\Tests\TwigJs\Compiler;

use JMS\TwigJsBundle\TwigJs\Compiler\TransFilterCompiler;
use TwigJs\JsCompiler;
use Symfony\Bundle\TwigBundle\Extension\AssetsExtension;

abstract class BaseTestCase extends \PHPUnit_Framework_TestCase
{
    protected $env;
    protected $compiler;

    protected function compile($source, $name = null)
    {
        return $this->env->compileSource($source, $name);
    }

    protected function getNodes($source, $name = null)
    {
        return $this->env->parse($this->env->tokenize($source, $name));
    }

    protected function setUp()
    {
        $this->env = $env = new \Twig_Environment();
        $env->addExtension(new \Twig_Extension_Core());
        $env->setCompiler($this->compiler = new JsCompiler($env));
    }
}