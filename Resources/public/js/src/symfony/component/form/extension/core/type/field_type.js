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

goog.provide("symfony.component.form.extension.core.type.FieldType");

goog.require('goog.array');

goog.require('symfony.component.form.AbstractType');

/**
 * @constructor
 * @extends {symfony.component.form.AbstractType}
 */
symfony.component.form.extension.core.type.FieldType = function() {

};

/**
 * @param {symfony.component.form.FormView} view
 * @param {symfony.component.form.FormInterface} form
 */
symfony.component.form.extension.core.type.FieldType.prototype.buildView = function(view, form) {
    /** @type {string} */
    var name = form.getName();

    var id;
    var fullName;

    if (view.hasParent()) {
        if ("" === name) {
            throw Error("Form node with empty name can be used only as root form node.");
        }

        var parentFullName;

        if ("" !== (parentFullName = view.getParent().get("full_name"))) {
            id = view.getParent().get("id") + "_" + name;
            fullName = parentFullName + "[" + name + "]";
        } else {
            id = name;
            fullName = name;
        }
    } else {
        id = name;
        fullName = name;
    }

    var types = [];

    goog.array.forEach(form.getTypes(), function(type) {
        types.push(type.getName());
    });

    view
        .set("form", view)
        .set("id", id)
        .set("name", name)
        .set("full_name", fullName)
        .set("errors", form.getErrors())
        .set("value", form.getClientData())
        .set("read_only", form.isReadOnly())
        .set("required", form.isRequired())
        .set("max_length", form.getAttribute("max_length"))
        .set("pattern", form.getAttribute("pattern"))
        .set("size", null)
        .set("label", form.getAttribute("label"))
        .set("multipart", false)
        .set("attr", form.getAttribute("attr"))
        .set("types", types)
        .set("translation_domain", form.getAttribute("translation_domain"))
    ;
};

/**
 * @inheritDoc
 */
symfony.component.form.extension.core.type.FieldType.prototype.getName = function() {
    return "field";
};