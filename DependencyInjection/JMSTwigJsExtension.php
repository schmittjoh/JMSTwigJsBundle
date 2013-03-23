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

namespace JMS\TwigJsBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class JMSTwigJsExtension extends Extension
{
    /**
     * {@inheritDoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $loader = new Loader\XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.xml');
        $loader->load('filters.xml');
        $loader->load('functions.xml');

        // Load the route compilation if it is defined
        if (array_key_exists('route_compilation', $config)) {
            $this->loadRouteCompilationConfig($config['route_compilation'], $container);
        }
    }

    /**
     * Configure the service container for route compilation
     *
     * @param array            $config    Route compilation configuration
     * @param ContainerBuilder $container Service container
     */
    protected function loadRouteCompilationConfig(array $config, ContainerBuilder $container)
    {
        $routingCompiler = $container->getDefinition('twig_js.functions.routing_compiler');

        if ($config['path']) {
            $routingCompiler->addTag('twig_js.function_compiler', array('function' => 'path'));
        }

        if ($config['url']) {
            $routingCompiler->addTag('twig_js.function_compiler', array('function' => 'url'));
        }
    }

    public function getAlias()
    {
        return 'twig_js';
    }
}
