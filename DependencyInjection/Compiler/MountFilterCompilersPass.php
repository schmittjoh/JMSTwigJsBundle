<?php
namespace JMS\TwigJsBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;

/**
 * Class MountFilterCompilersPass
 * @package JMS\TwigJsBundle\DependencyInjection\Compiler
 */
class MountFilterCompilersPass implements CompilerPassInterface
{
    /**
     * @param ContainerBuilder $container
     */
    public function process(ContainerBuilder $container)
    {
        if (!$container->hasDefinition('twig_js.compiler')) {
            return;
        }

        $compiler = $container->getDefinition('twig_js.compiler');

        foreach ($container->findTaggedServiceIds('twig_js.filter_compiler') as $id => $attr) {
            $compiler->addMethodCall('addFilterCompiler', array(new Reference($id)));
        }
    }
}