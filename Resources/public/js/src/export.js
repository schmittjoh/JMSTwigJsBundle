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

/**
 * @fileoverview Exports symbols which should be usuable from uncompiled code.
 * 
 * If you intend to compile the source libraries into your javascript on your
 * own, then you do not need this default export file.
 */

goog.exportSymbol('goog.provide', goog.provide);

goog.require('php');

goog.exportSymbol('php.array.merge', php.array.merge);
goog.exportSymbol('php.array.replaceRecursive', php.array.replaceRecursive);

goog.require('symfony');
goog.require('symfony.component.form.FormView');
goog.require('symfony.bridge.twig.extension.FormExtension');

goog.exportSymbol('symfony.bridge.twig.extension.FormExtension', symfony.bridge.twig.extension.FormExtension);
goog.exportSymbol('symfony.component.form.FormView', symfony.component.form.FormView);

goog.exportProperty(symfony.component.form.FormView.prototype, 'set', symfony.component.form.FormView.prototype.set);
goog.exportProperty(symfony.component.form.FormView.prototype, 'get', symfony.component.form.FormView.prototype.get);
goog.exportProperty(symfony.component.form.FormView.prototype, 'has', symfony.component.form.FormView.prototype.has);
goog.exportProperty(symfony.component.form.FormView.prototype, 'all', symfony.component.form.FormView.prototype.all);
goog.exportProperty(symfony.component.form.FormView.prototype, 'isRendered', symfony.component.form.FormView.prototype.isRendered);
goog.exportProperty(symfony.component.form.FormView.prototype, 'setRendered', symfony.component.form.FormView.prototype.setRendered);
goog.exportProperty(symfony.component.form.FormView.prototype, 'hasParent', symfony.component.form.FormView.prototype.hasParent);
goog.exportProperty(symfony.component.form.FormView.prototype, 'toString', symfony.component.form.FormView.prototype.toString);

goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'initRuntime', symfony.bridge.twig.extension.FormExtension.prototype.initRuntime);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'renderEnctype', symfony.bridge.twig.extension.FormExtension.prototype.renderEnctype);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'renderRow', symfony.bridge.twig.extension.FormExtension.prototype.renderRow);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'renderRest', symfony.bridge.twig.extension.FormExtension.prototype.renderRest);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'renderWidget', symfony.bridge.twig.extension.FormExtension.prototype.renderWidget);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'renderErrors', symfony.bridge.twig.extension.FormExtension.prototype.renderErrors);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'renderLabel', symfony.bridge.twig.extension.FormExtension.prototype.renderLabel);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'render', symfony.bridge.twig.extension.FormExtension.prototype.render);
goog.exportProperty(symfony.bridge.twig.extension.FormExtension.prototype, 'getBlocks', symfony.bridge.twig.extension.FormExtension.prototype.getBlocks);

/**
 * For now, we add a hard-coded form extension.
 * 
 * Later, this will be configurable (e.g. resources array).
 * 
 * FIXME
 */

window["Twig"].addExtension(
    new symfony.bridge.twig.extension.FormExtension(null, ["form_div_layout.html"])
);
