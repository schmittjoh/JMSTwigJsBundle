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

namespace JMS\TwigJsBundle\Controller;

use TwigJs\CompileRequest;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerAware;

/**
 * Demo Compilation Controller.
 *
 * The preferred way of integrating twig.js is by using Assetic with the
 * "twig_js" filter. However, if you need to customize your integration,
 * this controller gives you a good starting point.
 *
 * It is not recommended to use this in production as the passed template
 * name is not validated, and thus, any templates could be rendered.
 *
 * @author Johannes M. Schmitt <schmittjoh@gmail.com>
 */
class DemoCompilationController extends ContainerAware
{
    public function compileAction(Request $request)
    {
        $compileRequest = new CompileRequest($request->query->get('name'), null);

        return new Response(
            $this->container->get('twig_js.compile_request_handler')
                    ->process($compileRequest),
            200,
            array('Content-Type' => 'application/javascript')
        );
    }
}