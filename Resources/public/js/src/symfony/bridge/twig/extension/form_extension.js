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

goog.provide('symfony.bridge.twig.extension.FormExtension');

goog.require('goog.array');
goog.require('goog.object');

goog.require('php.array');

goog.require('twig.Extension');
goog.require('twig.Template');

/**
 * @constructor
 * @extends {twig.Extension}
 * @param {*=} opt_csrfProvider
 * @param {Array.<*>=} opt_resources
 */
symfony.bridge.twig.extension.FormExtension = function(opt_csrfProvider, opt_resources) {
    this.csrfProvider = opt_csrfProvider;

    /**
     * Note: "number" type is actually symfony.component.form.FormView, however, 
     * a UID for the symfony.component.form.FormView is used so that it can be 
     * stored in a hash.
     *
     * @type {Object.<number, Object>}
     */
    this.themes = {};

    this.varStack = {};

    this.template = null;

    /**
     * Note: "Object" type is actually symfony.component.form.FormView, however, 
     * a UID for the symfony.component.form.FormView is used so that it can be 
     * stored in a hash.
     *
     * @type {Object.<number, Object>}
     */
    this.blocks = {};

    /**
     * @type {twig.Environment}
     * @private
     **/
    this.env_ = null;

    /**
     * @type {Array}
     */
    this.resources = opt_resources || [];
};

twig.inherits(symfony.bridge.twig.extension.FormExtension, twig.Extension);

/**
 * @param {twig.Environment} environment
 */
symfony.bridge.twig.extension.FormExtension.prototype.initRuntime = function(environment) {
    this.env_ = environment;
};

/**
 * Renders a row for the view.
 *
 * @param {symfony.component.form.FormView} view The view to render as a row
 * @param {Object=} opt_variables An array of variables
 *
 * @return {string} The HTML markup
 */
symfony.bridge.twig.extension.FormExtension.prototype.renderRow = function(view, opt_variables) {
    return this.render(view, "row", opt_variables);
};

/**
 * Renders the errors of the given view.
 *
 * @param {symfony.component.form.FormView} view The view to render the errors for
 *
 * @return {string} The HTML markup
 */
symfony.bridge.twig.extension.FormExtension.prototype.renderErrors = function(view) {
    return this.render(view, "errors");
};

/**
 * @param {symfony.component.form.FormView} view
 * @param {string} section
 * @param {Object=} opt_variables
 * @return {string}
 */
symfony.bridge.twig.extension.FormExtension.prototype.render = function(view, section, opt_variables) {
    opt_variables = opt_variables || {};

    var mainTemplate = section in ["widget", "row"];

    if (mainTemplate && view.isRendered()) {
        return "";
    }

    if (null === this.template) {
        this.template = this.resources[0];

        if (!(this.template instanceof twig.Template)) {
            this.template = this.env_.createTemplate(goog.getObjectByName(this.template));
        }
    }

    /**
     * todo Made default empty string here if no "id", but perhaps this must be
     * done in the FormView object construction?
     */
    /** @type {string} */
    var custom = "_" + view.get("id") || "";

    /** @type {string} */
    var rendering = custom + section;

    var blocks = this.getBlocks(view);

    /** @type {number} */
    var typeIndex;

    /** @type {Array} */
    var types = [];

    if (this.varStack[rendering]) {
        typeIndex = this.varStack[rendering]["typeIndex"] - 1;
        types = this.varStack[rendering]["types"];
        this.varStack[rendering]["variables"] = php.array.replaceRecursive(this.varStack[rendering]["variables"], opt_variables);
    } else {
        /**
         * todo Made the default array here, but perhaps this must be done in the FormView object construction?
         */
        types = /** @type {Array} */ (view.get("types") || []);
        types.push(custom);
        typeIndex = types.length - 1;
        this.varStack[rendering] = {
            "variables": php.array.replaceRecursive(view.all(), opt_variables),
            "types": types
        };
    }

    do {
        types[typeIndex] += "_" + section;

        if (blocks[types[typeIndex]]) {
            this.varStack[rendering]["typeIndex"] = typeIndex;

            /**
             * todo displayBlock was changed to renderBlock because displayBlock does not (yet?) exist in twig.js
             */
            var html = this.template.renderBlock(types[typeIndex], this.varStack[rendering]["variables"], blocks);

            if (mainTemplate) {
                view.setRendered();
            }

            delete this.varStack[rendering];

            return html;
        }
    } while (--typeIndex >= 0);

    throw Error('Unable to render the form as none of the following blocks exist: "' + types.slice().reverse().toString() + '".');
};

/**
 * @inheritDoc
 */
symfony.bridge.twig.extension.FormExtension.prototype.getName = function() {
    return "form";
};

/**
 * Returns the blocks used to render the view.
 *
 * Templates are looked for in the resources in the following order:
 *   * resources from the themes (and its parents)
 *   * resources from the themes of parent views (up to the root view)
 *   * default resources
 *
 * @param {Object.<symfony.component.form.FormView>} view
 * @return {Object.<twig.Template>}
 */
symfony.bridge.twig.extension.FormExtension.prototype.getBlocks = function(view) {
    if (!goog.object.contains(this.blocks, goog.getUid(view))) {
        /** @type {boolean} */
        var rootView = !view.hasParent();

        /** @type {Object} */
        var templates = rootView ? this.resources : {};

        if (this.themes[goog.getUid(view)]) {
            templates = php.array.merge(templates, this.themes[goog.getUid(view)]);
        }

        /** @type {Object} */
        var blocks = {};
        
        /** @type {twig.Environment} */
        var env = this.env_;

        twig.forEach(/** @type {Array.<twig.Template|string>} */ templates, function(template) {
            if (!(template instanceof twig.Template)) {
                template = env.createTemplate(goog.getObjectByName(template));
            }

            var templateBlocks = {};

            do {
                templateBlocks = php.array.merge(template.getBlocks(), templateBlocks)
            } while (false !== (template = template.getParent([])));


            blocks = php.array.merge(blocks, templateBlocks);
        });

        if (!rootView) {
            blocks = php.array.merge(this.getBlocks(view.getParent()), blocks);
        }

        this.blocks[goog.getUid(view)] = blocks;
    } else {
        blocks = this.blocks[goog.getUid(view)];
    }

    return blocks;
};
