========
Overview
========

This integrates twig.js_ into your Symfony2 application.

twig.js allows you to render your Twig templates as Javascript for use
on the client-side.

Installation
------------
Add the following to your ``deps`` file::

    [JMSTwigJsBundle]
        git=https://github.com/schmittjoh/JMSTwigJsBundle.git
        target=/bundles/JMS/TwigJsBundle
        
    [twig.js]
        git=https://github.com/schmittjoh/twig.js.git
    
Then register the bundle with your kernel::

    // in AppKernel::registerBundles()
    $bundles = array(
        // ...
        new JMS\TwigJsBundle\JMSTwigJsBundle(),
        // ...
    );

Make sure that you also register the namespaces with the autoloader::

    // app/autoload.php
    $loader->registerNamespaces(array(
        // ...
        'JMS'              => __DIR__.'/../vendor/bundles',
        'TwigJs'           => __DIR__.'/../vendor/twig.js/src',
        // ...
    ));

Usage
-----

via an Assetic filter
~~~~~~~~~~~~~~~~~~~~~
twig.js is seamlessly integrated with Assetic. Simply, add the twig_js filter
to the assets that you want to run through twig.js::

    {% javascripts "@AcmeFooBundle/Resources/views/my_template.html.twig"
           filter="twig_js, ?yui_js" %}
        <script language="javascript" src="{{ asset_url }}"></script>
    {% endjavascripts %}

If your template has dependencies on parent templates, or traits, make sure
to specify all of them. 

See twig.js_ documentation for how to render your templates.

Custom Integration
~~~~~~~~~~~~~~~~~~
If you need to customize your integration, this bundle makes a service named
"twig_js.compilation_request_handler" available, which is the entry point
for compilation.

You can also have a look at the DemoCompilationController for a starting point.


.. _twig.js: https://github.com/schmittjoh/twig.js