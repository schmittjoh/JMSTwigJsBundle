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

goog.provide('symfony.component.form.FormView');

goog.require('goog.object');

/**
 * @constructor
 */
symfony.component.form.FormView = function() {
    /**
     * @type {Object.<*>}
     * @private
     */
    this.vars = {
        "value": null,
        "attr": []
    };
    
    /**
     * @type {symfony.component.form.FormView}
     * @private
     */
    this.parent = null;

    /**
     * @type {Array.<string, symfony.component.form.FormView>}
     * @private 
     */
    this.children = [];
    
    /**
     * @type {boolean}
     * @private
     */
    this.rendered = false;
};

/**
 * @param {string} name
 * @param {*} value
 *
 * @return {symfony.component.form.FormView} The current view
 */
symfony.component.form.FormView.prototype.set = function(name, value) {
    this.vars[name] = value;

    return this;
};

/**
 * @param {string} name
 *
 * @return {boolean}
 */
symfony.component.form.FormView.prototype.has = function(name) {
    return goog.object.containsKey(this.vars, name);
};

/**
 * @param {string} name
 * @param {*=} opt_default
 *
 * @return {*}
 */
symfony.component.form.FormView.prototype.get = function(name, opt_default) {
    if (false === this.has(name)) {
        opt_default = opt_default || null;

        return opt_default;
    }

    return this.vars[name];
};

/**
 * @return {Object.<string,*>}
 */
symfony.component.form.FormView.prototype.all = function() {
    return this.vars;
};

/**
 * @return {boolean}
 */
symfony.component.form.FormView.prototype.isRendered = function() {
    var hasChildren = 0 < this.children.length;

    if (true === this.rendered || !hasChildren) {
        return this.rendered;
    }

    if (hasChildren) {
        /** @type {string} */
        var i;
        /** @type {symfony.component.form.FormView} */
        var child;

        for (i in this.children) {
            child = this.children[i];

            if (!child.isRendered()) {
                return false;
            }
        }

        return this.rendered = true;
    }

    return false;
};

/**
 * @return {Object.<symfony.component.form.FormView>}
 */
symfony.component.form.FormView.prototype.setRendered = function() {
    this.rendered = true;
    
    return this;
};

/**
 * Returns whether this view has a parent.
 * 
 * @return {boolean} Whether this view has a parent
 */
symfony.component.form.FormView.prototype.hasParent = function() {
    return null !== this.parent;
};
