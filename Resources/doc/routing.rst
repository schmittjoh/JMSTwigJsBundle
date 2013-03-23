===================
Routing Integration
===================

Routing information from your symfony application can be integrated your
compiled javascript templates either through inline route compilation or by
integrating an javascript routing solution (such as the FOSJsRoutingBundle_).

.. _FOSJsRoutingBundle: https://github.com/FriendsOfSymfony/FOSJsRoutingBundle

Inline Route Compilation
========================

The easiest method of integration routing information is to take advantage of
the built in inline route compilation functionality. This funcionality
interprets a route and produces a javascript function which will generate a url
the same as symfony would.

How to enable this feature
--------------------------

Add the following lines to your application configuration:

::

    # app/config/config.yml
    twig_js:

        route_compilation: true
