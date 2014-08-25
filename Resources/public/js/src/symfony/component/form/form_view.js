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
goog.require('goog.structs.Map');
goog.require('goog.iter.Iterator');

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
     * @type {Object.<symfony.component.form.FormView>}
     * @private
     */
    this.children_ = {};

    /**
     * @type {!Array.<string>}
     * @private
     */
    this.childrenKeys_ = [];

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
        return opt_default || null;
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
    var hasChildren = 0 < this.childrenKeys_.length;

    if (true === this.rendered || !hasChildren) {
        return this.rendered;
    }

    if (hasChildren) {
        /** @type {string} */
        var i;
        /** @type {symfony.component.form.FormView} */
        var child;

        for (i in this.children_) {
            child = this.children_[i];

            if (!child.isRendered()) {
                return false;
            }
        }

        return this.rendered = true;
    }

    return false;
};

/**
 * @return {symfony.component.form.FormView}
 */
symfony.component.form.FormView.prototype.setRendered = function() {
    this.rendered = true;

    return this;
};

/**
 * Sets the parent view.
 *
 * @param {symfony.component.form.FormView} parent The parent view
 *
 * @return {symfony.component.form.FormView} The current view
 */
symfony.component.form.FormView.prototype.setParent = function(parent) {
    this.parent = parent;

    return this;
};

/**
 * Returns the parent view.
 *
 * @return {symfony.component.form.FormView} The parent view
 */
symfony.component.form.FormView.prototype.getParent = function() {
    return this.parent;
};

/**
 * Returns whether this view has a parent.
 *
 * @return {boolean} Whether this view has a parent
 */
symfony.component.form.FormView.prototype.hasParent = function() {
    return null !== this.parent;
};

/**
 * Sets the children view.
 *
 * @param {Object.<symfony.component.form.FormView>} children
 *
 * @return {symfony.component.form.FormView} The current view
 */
symfony.component.form.FormView.prototype.setChildren = function(children) {
    goog.object.forEach(children, function(name, child) {
        // FIXME: use goog.object.containsKey? What's the prefferred one / difference between the two?
        if (!(goog.structs.Map.hasKey_(this.children_, name))) {
            this.childrenKeys_.push(name);
        }

        this.children_[name] = child;
    }, this);

    return this;
};

/**
 * Returns the children.
 *
 * @return {Object.<symfony.component.form.FormView>} The children as instances of FormView
 */
symfony.component.form.FormView.prototype.getChildren = function() {
    return this.children_;
};

/**
 * Returns the children.
 *
 * @param {string} name The name of the child
 *
 * @return {symfony.component.form.FormView} The children view
 */
symfony.component.form.FormView.prototype.getChild = function(name) {
    return this.children_[name];
};

/**
 * Returns whether this view has children.
 *
 * @return {boolean} Whether this view has children
 */
symfony.component.form.FormView.prototype.hasChildren = function() {
    return this.childrenKeys_.length > 0;
};

/**
 * Returns an iterator that iterates over the values or the keys in the map.
 *
 * This throws an exception if the map was mutated since the iterator was
 * created.
 *
 * @param {boolean=} opt_keys True to iterate over the keys. False to iterate over the values.  The default value is false
 *
 * @return {!goog.iter.Iterator} An iterator over the values or keys in the map
 */
symfony.component.form.FormView.prototype.__iterator__ = function(opt_keys) {
    var newIter = new goog.iter.Iterator();

    var i = 0;
    var children = this.children_;
    var childrenKeys = this.childrenKeys_;

    newIter.next = function() {
        if (i >= childrenKeys.length) {
            throw goog.iter.StopIteration;
        }

        var key = childrenKeys[i++];

        return opt_keys ? key : children[key];
    };

    return newIter;
};