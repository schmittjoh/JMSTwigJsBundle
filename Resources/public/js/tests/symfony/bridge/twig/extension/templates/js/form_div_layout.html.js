/**
 * @fileoverview Compiled template for file
 *
 * form_div_layout.html.twig
 */

goog.provide('form_div_layout.html');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
form_div_layout.html = function(env) {
    twig.Template.call(this, env);

    this.setBlocks({
        'form_widget': twig.bind(this.block_form_widget, this),
        'collection_widget': twig.bind(this.block_collection_widget, this),
        'textarea_widget': twig.bind(this.block_textarea_widget, this),
        'widget_choice_options': twig.bind(this.block_widget_choice_options, this),
        'choice_widget': twig.bind(this.block_choice_widget, this),
        'checkbox_widget': twig.bind(this.block_checkbox_widget, this),
        'radio_widget': twig.bind(this.block_radio_widget, this),
        'datetime_widget': twig.bind(this.block_datetime_widget, this),
        'date_widget': twig.bind(this.block_date_widget, this),
        'time_widget': twig.bind(this.block_time_widget, this),
        'number_widget': twig.bind(this.block_number_widget, this),
        'integer_widget': twig.bind(this.block_integer_widget, this),
        'money_widget': twig.bind(this.block_money_widget, this),
        'url_widget': twig.bind(this.block_url_widget, this),
        'search_widget': twig.bind(this.block_search_widget, this),
        'percent_widget': twig.bind(this.block_percent_widget, this),
        'field_widget': twig.bind(this.block_field_widget, this),
        'password_widget': twig.bind(this.block_password_widget, this),
        'hidden_widget': twig.bind(this.block_hidden_widget, this),
        'email_widget': twig.bind(this.block_email_widget, this),
        'generic_label': twig.bind(this.block_generic_label, this),
        'field_label': twig.bind(this.block_field_label, this),
        'form_label': twig.bind(this.block_form_label, this),
        'repeated_row': twig.bind(this.block_repeated_row, this),
        'field_row': twig.bind(this.block_field_row, this),
        'hidden_row': twig.bind(this.block_hidden_row, this),
        'field_enctype': twig.bind(this.block_field_enctype, this),
        'field_errors': twig.bind(this.block_field_errors, this),
        'field_rest': twig.bind(this.block_field_rest, this),
        'field_rows': twig.bind(this.block_field_rows, this),
        'widget_attributes': twig.bind(this.block_widget_attributes, this),
        'widget_container_attributes': twig.bind(this.block_widget_container_attributes, this)
    });
};
twig.inherits(form_div_layout.html, twig.Template);

/**
 * @inheritDoc
 */
form_div_layout.html.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
form_div_layout.html.prototype.render_ = function(sb, context, blocks) {
    // line 2
    sb.append("\n");
    // line 3
    sb.append(this.renderBlock("form_widget", context, blocks));
    // line 11
    sb.append("\n");
    // line 12
    sb.append(this.renderBlock("collection_widget", context, blocks));
    // line 20
    sb.append("\n");
    // line 21
    sb.append(this.renderBlock("textarea_widget", context, blocks));
    // line 26
    sb.append("\n");
    // line 27
    sb.append(this.renderBlock("widget_choice_options", context, blocks));
    // line 42
    sb.append("\n");
    // line 43
    sb.append(this.renderBlock("choice_widget", context, blocks));
    // line 70
    sb.append("\n");
    // line 71
    sb.append(this.renderBlock("checkbox_widget", context, blocks));
    // line 76
    sb.append("\n");
    // line 77
    sb.append(this.renderBlock("radio_widget", context, blocks));
    // line 82
    sb.append("\n");
    // line 83
    sb.append(this.renderBlock("datetime_widget", context, blocks));
    // line 97
    sb.append("\n");
    // line 98
    sb.append(this.renderBlock("date_widget", context, blocks));
    // line 113
    sb.append("\n");
    // line 114
    sb.append(this.renderBlock("time_widget", context, blocks));
    // line 125
    sb.append("\n");
    // line 126
    sb.append(this.renderBlock("number_widget", context, blocks));
    // line 133
    sb.append("\n");
    // line 134
    sb.append(this.renderBlock("integer_widget", context, blocks));
    // line 140
    sb.append("\n");
    // line 141
    sb.append(this.renderBlock("money_widget", context, blocks));
    // line 146
    sb.append("\n");
    // line 147
    sb.append(this.renderBlock("url_widget", context, blocks));
    // line 153
    sb.append("\n");
    // line 154
    sb.append(this.renderBlock("search_widget", context, blocks));
    // line 160
    sb.append("\n");
    // line 161
    sb.append(this.renderBlock("percent_widget", context, blocks));
    // line 167
    sb.append("\n");
    // line 168
    sb.append(this.renderBlock("field_widget", context, blocks));
    // line 174
    sb.append("\n");
    // line 175
    sb.append(this.renderBlock("password_widget", context, blocks));
    // line 181
    sb.append("\n");
    // line 182
    sb.append(this.renderBlock("hidden_widget", context, blocks));
    // line 186
    sb.append("\n");
    // line 187
    sb.append(this.renderBlock("email_widget", context, blocks));
    // line 193
    sb.append("\n");
    // line 195
    sb.append("\n");
    // line 196
    sb.append(this.renderBlock("generic_label", context, blocks));
    // line 204
    sb.append("\n");
    // line 205
    sb.append(this.renderBlock("field_label", context, blocks));
    // line 211
    sb.append("\n");
    // line 212
    sb.append(this.renderBlock("form_label", context, blocks));
    // line 217
    sb.append("\n");
    // line 219
    sb.append("\n");
    // line 220
    sb.append(this.renderBlock("repeated_row", context, blocks));
    // line 225
    sb.append("\n");
    // line 226
    sb.append(this.renderBlock("field_row", context, blocks));
    // line 235
    sb.append("\n");
    // line 236
    sb.append(this.renderBlock("hidden_row", context, blocks));
    // line 239
    sb.append("\n");
    // line 241
    sb.append("\n");
    // line 242
    sb.append(this.renderBlock("field_enctype", context, blocks));
    // line 247
    sb.append("\n");
    // line 248
    sb.append(this.renderBlock("field_errors", context, blocks));
    // line 259
    sb.append("\n");
    // line 260
    sb.append(this.renderBlock("field_rest", context, blocks));
    // line 269
    sb.append("\n");
    // line 271
    sb.append("\n");
    // line 272
    sb.append(this.renderBlock("field_rows", context, blocks));
    // line 280
    sb.append("\n");
    // line 281
    sb.append(this.renderBlock("widget_attributes", context, blocks));
    // line 287
    sb.append("\n");
    // line 288
    sb.append(this.renderBlock("widget_container_attributes", context, blocks));
};

// line 3
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_form_widget = function(sb, context, blocks) {
    // line 4
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 5
    sb.append("    <div ");
    sb.append(this.renderBlock("widget_container_attributes", context, blocks));
    sb.append(">\n        ");
    // line 6
    sb.append(this.renderBlock("field_rows", context, blocks));
    sb.append("\n        ");
    // line 7
    sb.append(this.env_.getExtension("form").renderRest("form" in context ? context["form"] : null));
    sb.append("\n    <\/div>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 12
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_collection_widget = function(sb, context, blocks) {
    // line 13
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 14
    sb.append("    ");
    if (("prototype" in context)) {
        // line 15
        sb.append("        ");
        context["attr"] = twig.filter.merge("attr" in context ? context["attr"] : null, {"data-prototype": this.env_.getExtension("form").renderRow("prototype" in context ? context["prototype"] : null)});
        // line 16
        sb.append("    ");
    }
    // line 17
    sb.append("    ");
    sb.append(this.renderBlock("form_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 21
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_textarea_widget = function(sb, context, blocks) {
    // line 22
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 23
    sb.append("    <textarea ");
    sb.append(this.renderBlock("widget_attributes", context, blocks));
    sb.append(">");
    sb.append(twig.filter.escape(this.env_, "value" in context ? context["value"] : null, "html", null, true));
    sb.append("<\/textarea>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 27
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_widget_choice_options = function(sb, context, blocks) {
    // line 28
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 29
    sb.append("    ");
    context['_parent'] = context;
    var seq = "options" in context ? context["options"] : null;
    twig.forEach(seq, function(v, k) {
        context["choice"] = k;
        context["label"] = v;
        // line 30
        sb.append("        ");
        if (this.env_.getExtension("form").isChoiceGroup("label" in context ? context["label"] : null)) {
            // line 31
            sb.append("            <optgroup label=\"");
            sb.append(twig.filter.escape(this.env_, this.env_.filter("trans", "choice" in context ? context["choice"] : null, {}, "translation_domain" in context ? context["translation_domain"] : null), "html", null, true));
            sb.append("\">\n                ");
            // line 32
            var seq1 = "label" in context ? context["label"] : null;
            twig.forEach(seq1, function(v1, k1) {
                context["nestedChoice"] = k1;
                context["nestedLabel"] = v1;
                // line 33
                sb.append("                    <option value=\"");
                sb.append(twig.filter.escape(this.env_, "nestedChoice" in context ? context["nestedChoice"] : null, "html", null, true));
                sb.append("\"");
                if (this.env_.getExtension("form").isChoiceSelected("form" in context ? context["form"] : null, "nestedChoice" in context ? context["nestedChoice"] : null)) {
                    sb.append(" selected=\"selected\"");
                }
                sb.append(">");
                sb.append(twig.filter.escape(this.env_, this.env_.filter("trans", "nestedLabel" in context ? context["nestedLabel"] : null, {}, "translation_domain" in context ? context["translation_domain"] : null), "html", null, true));
                sb.append("<\/option>\n                ");
            }, this);
            // line 35
            sb.append("            <\/optgroup>\n        ");
        } else {
            // line 37
            sb.append("            <option value=\"");
            sb.append(twig.filter.escape(this.env_, "choice" in context ? context["choice"] : null, "html", null, true));
            sb.append("\"");
            if (this.env_.getExtension("form").isChoiceSelected("form" in context ? context["form"] : null, "choice" in context ? context["choice"] : null)) {
                sb.append(" selected=\"selected\"");
            }
            sb.append(">");
            sb.append(twig.filter.escape(this.env_, this.env_.filter("trans", "label" in context ? context["label"] : null, {}, "translation_domain" in context ? context["translation_domain"] : null), "html", null, true));
            sb.append("<\/option>\n        ");
        }
        // line 39
        sb.append("    ");
    }, this);
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 43
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_choice_widget = function(sb, context, blocks) {
    // line 44
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 45
    sb.append("    ");
    if ("expanded" in context ? context["expanded"] : null) {
        // line 46
        sb.append("        <div ");
        sb.append(this.renderBlock("widget_container_attributes", context, blocks));
        sb.append(">\n        ");
        // line 47
        context['_parent'] = context;
        var seq = "form" in context ? context["form"] : null;
        twig.forEach(seq, function(v, k) {
            context["_key"] = k;
            context["child"] = v;
            // line 48
            sb.append("            ");
            sb.append(this.env_.getExtension("form").renderWidget("child" in context ? context["child"] : null));
            sb.append("\n            ");
            // line 49
            sb.append(this.env_.getExtension("form").renderLabel("child" in context ? context["child"] : null));
            sb.append("\n        ");
        }, this);
        // line 51
        sb.append("        <\/div>\n    ");
    } else {
        // line 53
        sb.append("    <select ");
        sb.append(this.renderBlock("widget_attributes", context, blocks));
        if ("multiple" in context ? context["multiple"] : null) {
            sb.append(" multiple=\"multiple\"");
        }
        sb.append(">\n        ");
        // line 54
        if ((!null === "empty_value" in context ? context["empty_value"] : null)) {
            // line 55
            sb.append("            <option value=\"\">");
            sb.append(twig.filter.escape(this.env_, this.env_.filter("trans", "empty_value" in context ? context["empty_value"] : null, {}, "translation_domain" in context ? context["translation_domain"] : null), "html", null, true));
            sb.append("<\/option>\n        ");
        }
        // line 57
        sb.append("        ");
        if ((twig.filter.length(this.env_, "preferred_choices" in context ? context["preferred_choices"] : null) > 0)) {
            // line 58
            sb.append("            ");
            context["options"] = "preferred_choices" in context ? context["preferred_choices"] : null;
            // line 59
            sb.append("            ");
            sb.append(this.renderBlock("widget_choice_options", context, blocks));
            sb.append("\n            ");
            // line 60
            if (((twig.filter.length(this.env_, "choices" in context ? context["choices"] : null) > 0) && (!null === "separator" in context ? context["separator"] : null))) {
                // line 61
                sb.append("                <option disabled=\"disabled\">");
                sb.append(twig.filter.escape(this.env_, "separator" in context ? context["separator"] : null, "html", null, true));
                sb.append("<\/option>\n            ");
            }
            // line 63
            sb.append("        ");
        }
        // line 64
        sb.append("        ");
        context["options"] = "choices" in context ? context["choices"] : null;
        // line 65
        sb.append("        ");
        sb.append(this.renderBlock("widget_choice_options", context, blocks));
        sb.append("\n    <\/select>\n    ");
    }
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 71
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_checkbox_widget = function(sb, context, blocks) {
    // line 72
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 73
    sb.append("    <input type=\"checkbox\" ");
    sb.append(this.renderBlock("widget_attributes", context, blocks));
    if (("value" in context)) {
        sb.append(" value=\"");
        sb.append(twig.filter.escape(this.env_, "value" in context ? context["value"] : null, "html", null, true));
        sb.append("\"");
    }
    if ("checked" in context ? context["checked"] : null) {
        sb.append(" checked=\"checked\"");
    }
    sb.append(" \/>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 77
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_radio_widget = function(sb, context, blocks) {
    // line 78
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 79
    sb.append("    <input type=\"radio\" ");
    sb.append(this.renderBlock("widget_attributes", context, blocks));
    if (("value" in context)) {
        sb.append(" value=\"");
        sb.append(twig.filter.escape(this.env_, "value" in context ? context["value"] : null, "html", null, true));
        sb.append("\"");
    }
    if ("checked" in context ? context["checked"] : null) {
        sb.append(" checked=\"checked\"");
    }
    sb.append(" \/>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 83
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_datetime_widget = function(sb, context, blocks) {
    // line 84
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 85
    sb.append("    ");
    if (("widget" in context ? context["widget"] : null == "single_text")) {
        // line 86
        sb.append("        ");
        sb.append(this.renderBlock("field_widget", context, blocks));
        sb.append("\n    ");
    } else {
        // line 88
        sb.append("        <div ");
        sb.append(this.renderBlock("widget_container_attributes", context, blocks));
        sb.append(">\n            ");
        // line 89
        sb.append(this.env_.getExtension("form").renderErrors(twig.attr("form" in context ? context["form"] : null, "date")));
        sb.append("\n            ");
        // line 90
        sb.append(this.env_.getExtension("form").renderErrors(twig.attr("form" in context ? context["form"] : null, "time")));
        sb.append("\n            ");
        // line 91
        sb.append(this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "date")));
        sb.append("\n            ");
        // line 92
        sb.append(this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "time")));
        sb.append("\n        <\/div>\n    ");
    }
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 98
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_date_widget = function(sb, context, blocks) {
    // line 99
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 100
    sb.append("    ");
    if (("widget" in context ? context["widget"] : null == "single_text")) {
        // line 101
        sb.append("        ");
        sb.append(this.renderBlock("field_widget", context, blocks));
        sb.append("\n    ");
    } else {
        // line 103
        sb.append("        <div ");
        sb.append(this.renderBlock("widget_container_attributes", context, blocks));
        sb.append(">\n            ");
        // line 104
        sb.append(twig.filter.replace("date_pattern" in context ? context["date_pattern"] : null, {"{{ year }}": this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "year")), "{{ month }}": this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "month")), "{{ day }}": this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "day"))}));
        // line 108
        sb.append("\n        <\/div>\n    ");
    }
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 114
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_time_widget = function(sb, context, blocks) {
    // line 115
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 116
    sb.append("    ");
    if (("widget" in context ? context["widget"] : null == "single_text")) {
        // line 117
        sb.append("        ");
        sb.append(this.renderBlock("field_widget", context, blocks));
        sb.append("\n    ");
    } else {
        // line 119
        sb.append("        <div ");
        sb.append(this.renderBlock("widget_container_attributes", context, blocks));
        sb.append(">\n            ");
        // line 120
        sb.append(this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "hour"), {"attr": {"size": "1"}}));
        sb.append(":");
        sb.append(this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "minute"), {"attr": {"size": "1"}}));
        if ("with_seconds" in context ? context["with_seconds"] : null) {
            sb.append(":");
            sb.append(this.env_.getExtension("form").renderWidget(twig.attr("form" in context ? context["form"] : null, "second"), {"attr": {"size": "1"}}));
        }
        // line 121
        sb.append("        <\/div>\n    ");
    }
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 126
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_number_widget = function(sb, context, blocks) {
    // line 127
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 128
    sb.append("    ");
    // line 129
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "text")) : ("text"));
    // line 130
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 134
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_integer_widget = function(sb, context, blocks) {
    // line 135
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 136
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "number")) : ("number"));
    // line 137
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 141
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_money_widget = function(sb, context, blocks) {
    // line 142
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 143
    sb.append("    ");
    sb.append(twig.filter.replace("money_pattern" in context ? context["money_pattern"] : null, {"{{ widget }}": this.renderBlock("field_widget", context, blocks)}));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 147
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_url_widget = function(sb, context, blocks) {
    // line 148
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 149
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "url")) : ("url"));
    // line 150
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 154
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_search_widget = function(sb, context, blocks) {
    // line 155
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 156
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "search")) : ("search"));
    // line 157
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 161
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_percent_widget = function(sb, context, blocks) {
    // line 162
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 163
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "text")) : ("text"));
    // line 164
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append(" %\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 168
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_widget = function(sb, context, blocks) {
    // line 169
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 170
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "text")) : ("text"));
    // line 171
    sb.append("    <input type=\"");
    sb.append(twig.filter.escape(this.env_, "type" in context ? context["type"] : null, "html", null, true));
    sb.append("\" ");
    sb.append(this.renderBlock("widget_attributes", context, blocks));
    sb.append(" ");
    if ((!twig.empty("value" in context ? context["value"] : null))) {
        sb.append("value=\"");
        sb.append(twig.filter.escape(this.env_, "value" in context ? context["value"] : null, "html", null, true));
        sb.append("\" ");
    }
    sb.append("\/>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 175
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_password_widget = function(sb, context, blocks) {
    // line 176
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 177
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "password")) : ("password"));
    // line 178
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 182
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_hidden_widget = function(sb, context, blocks) {
    // line 183
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "hidden")) : ("hidden"));
    // line 184
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
};

// line 187
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_email_widget = function(sb, context, blocks) {
    // line 188
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 189
    sb.append("    ");
    context["type"] = ((("type" in context)) ? (twig.filter.def("type" in context ? context["type"] : null, "email")) : ("email"));
    // line 190
    sb.append("    ");
    sb.append(this.renderBlock("field_widget", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 196
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_generic_label = function(sb, context, blocks) {
    // line 197
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 198
    sb.append("    ");
    if ("required" in context ? context["required"] : null) {
        // line 199
        sb.append("        ");
        context["attr"] = twig.filter.merge("attr" in context ? context["attr"] : null, {"class": (((twig.attr(twig.filter.def("attr" in context ? context["attr"] : null), "class", undefined, undefined, true)) ? (twig.filter.def(twig.attr("attr" in context ? context["attr"] : null, "class"), "")) : ("")) + " required")});
        // line 200
        sb.append("    ");
    }
    // line 201
    sb.append("    <label");
    context['_parent'] = context;
    var seq = "attr" in context ? context["attr"] : null;
    twig.forEach(seq, function(v, k) {
        context["attrname"] = k;
        context["attrvalue"] = v;
        sb.append(" ");
        sb.append(twig.filter.escape(this.env_, "attrname" in context ? context["attrname"] : null, "html", null, true));
        sb.append("=\"");
        sb.append(twig.filter.escape(this.env_, "attrvalue" in context ? context["attrvalue"] : null, "html", null, true));
        sb.append("\"");
    }, this);
    sb.append(">");
    sb.append(twig.filter.escape(this.env_, this.env_.filter("trans", "label" in context ? context["label"] : null, {}, "translation_domain" in context ? context["translation_domain"] : null), "html", null, true));
    sb.append("<\/label>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 205
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_label = function(sb, context, blocks) {
    // line 206
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 207
    sb.append("    ");
    context["attr"] = twig.filter.merge("attr" in context ? context["attr"] : null, {"for": "id" in context ? context["id"] : null});
    // line 208
    sb.append("    ");
    sb.append(this.renderBlock("generic_label", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 212
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_form_label = function(sb, context, blocks) {
    // line 213
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 214
    sb.append("    ");
    sb.append(this.renderBlock("generic_label", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 220
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_repeated_row = function(sb, context, blocks) {
    // line 221
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 222
    sb.append("    ");
    sb.append(this.renderBlock("field_rows", context, blocks));
    sb.append("\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 226
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_row = function(sb, context, blocks) {
    // line 227
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 228
    sb.append("    <div>\n        ");
    // line 229
    sb.append(this.env_.getExtension("form").renderLabel("form" in context ? context["form"] : null, ((("label" in context)) ? (twig.filter.def("label" in context ? context["label"] : null, null)) : (null))));
    sb.append("\n        ");
    // line 230
    sb.append(this.env_.getExtension("form").renderErrors("form" in context ? context["form"] : null));
    sb.append("\n        ");
    // line 231
    sb.append(this.env_.getExtension("form").renderWidget("form" in context ? context["form"] : null));
    sb.append("\n    <\/div>\n");
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 236
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_hidden_row = function(sb, context, blocks) {
    // line 237
    sb.append("    ");
    sb.append(this.env_.getExtension("form").renderWidget("form" in context ? context["form"] : null));
    sb.append("\n");
};

// line 242
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_enctype = function(sb, context, blocks) {
    // line 243
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 244
    sb.append("    ");
    if ("multipart" in context ? context["multipart"] : null) {
        sb.append("enctype=\"multipart\/form-data\"");
    }
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 248
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_errors = function(sb, context, blocks) {
    // line 249
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 250
    sb.append("    ");
    if ((twig.filter.length(this.env_, "errors" in context ? context["errors"] : null) > 0)) {
        // line 251
        sb.append("    <ul>\n        ");
        // line 252
        context['_parent'] = context;
        var seq = "errors" in context ? context["errors"] : null;
        twig.forEach(seq, function(v, k) {
            context["_key"] = k;
            context["error"] = v;
            // line 253
            sb.append("            <li>");
            sb.append(twig.filter.escape(this.env_, this.env_.filter("trans", twig.attr("error" in context ? context["error"] : null, "messageTemplate"), twig.attr("error" in context ? context["error"] : null, "messageParameters"), "validators"), "html", null, true));
            sb.append("<\/li>\n        ");
        }, this);
        // line 255
        sb.append("    <\/ul>\n    ");
    }
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 260
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_rest = function(sb, context, blocks) {
    // line 261
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 262
    sb.append("    ");
    context['_parent'] = context;
    var seq = "form" in context ? context["form"] : null;
    twig.forEach(seq, function(v, k) {
        context["_key"] = k;
        context["child"] = v;
        // line 263
        sb.append("        ");
        if ((!twig.attr("child" in context ? context["child"] : null, "rendered"))) {
            // line 264
            sb.append("            ");
            sb.append(this.env_.getExtension("form").renderRow("child" in context ? context["child"] : null));
            sb.append("\n        ");
        }
        // line 266
        sb.append("    ");
    }, this);
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 272
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_field_rows = function(sb, context, blocks) {
    // line 273
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 274
    sb.append("    ");
    sb.append(this.env_.getExtension("form").renderErrors("form" in context ? context["form"] : null));
    sb.append("\n    ");
    // line 275
    context['_parent'] = context;
    var seq = "form" in context ? context["form"] : null;
    twig.forEach(seq, function(v, k) {
        context["_key"] = k;
        context["child"] = v;
        // line 276
        sb.append("        ");
        sb.append(this.env_.getExtension("form").renderRow("child" in context ? context["child"] : null));
        sb.append("\n    ");
    }, this);
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 281
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_widget_attributes = function(sb, context, blocks) {
    // line 282
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 283
    sb.append("    id=\"");
    sb.append(twig.filter.escape(this.env_, "id" in context ? context["id"] : null, "html", null, true));
    sb.append("\" name=\"");
    sb.append(twig.filter.escape(this.env_, "full_name" in context ? context["full_name"] : null, "html", null, true));
    sb.append("\"");
    if ("read_only" in context ? context["read_only"] : null) {
        sb.append(" disabled=\"disabled\"");
    }
    if ("required" in context ? context["required"] : null) {
        sb.append(" required=\"required\"");
    }
    if ("max_length" in context ? context["max_length"] : null) {
        sb.append(" maxlength=\"");
        sb.append(twig.filter.escape(this.env_, "max_length" in context ? context["max_length"] : null, "html", null, true));
        sb.append("\"");
    }
    if ("pattern" in context ? context["pattern"] : null) {
        sb.append(" pattern=\"");
        sb.append(twig.filter.escape(this.env_, "pattern" in context ? context["pattern"] : null, "html", null, true));
        sb.append("\"");
    }
    // line 284
    sb.append("    ");
    context['_parent'] = context;
    var seq = "attr" in context ? context["attr"] : null;
    twig.forEach(seq, function(v, k) {
        context["attrname"] = k;
        context["attrvalue"] = v;
        sb.append(twig.filter.escape(this.env_, "attrname" in context ? context["attrname"] : null, "html", null, true));
        sb.append("=\"");
        sb.append(twig.filter.escape(this.env_, "attrvalue" in context ? context["attrvalue"] : null, "html", null, true));
        sb.append("\" ");
    }, this);
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

// line 288
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
form_div_layout.html.prototype.block_widget_container_attributes = function(sb, context, blocks) {
    // line 289
    var slSb = sb;
    sb = new twig.StringBuffer;    // line 290
    sb.append("    ");
    if ((!twig.empty("id" in context ? context["id"] : null))) {
        sb.append("id=\"");
        sb.append(twig.filter.escape(this.env_, "id" in context ? context["id"] : null, "html", null, true));
        sb.append("\" ");
    }
    // line 291
    sb.append("    ");
    context['_parent'] = context;
    var seq = "attr" in context ? context["attr"] : null;
    twig.forEach(seq, function(v, k) {
        context["attrname"] = k;
        context["attrvalue"] = v;
        sb.append(twig.filter.escape(this.env_, "attrname" in context ? context["attrname"] : null, "html", null, true));
        sb.append("=\"");
        sb.append(twig.filter.escape(this.env_, "attrvalue" in context ? context["attrvalue"] : null, "html", null, true));
        sb.append("\" ");
    }, this);
    slSb.append(twig.spaceless(sb.toString()));
    sb = slSb;
};

/**
 * @inheritDoc
 */
form_div_layout.html.prototype.getTemplateName = function() {
    return "form_div_layout.html";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
form_div_layout.html.prototype.isTraitable = function() {
    return false;
};
