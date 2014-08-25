{
	"id":"symfony",
	
	"paths":["../../src/"],
	"inputs": ["../../src/twig_export.js", "../../src/export.js"],
	"output-file":"../../symfony.js",
	"output-wrapper": "/**\n * symfony.js\n * https://github.com/schmittjoh/JMSTwigJsBundle\n *\n * (C) 2011 Johannes M. Schmitt <schmittjoh@gmail.com>\n * Licensed under the Apache 2.0 License.\n *\n * Portions of this code are from the Google Closure Library received\n * from the Closure Authors under the Apache 2.0 License.\n */\n(function() {%output%})();\n",
	"externs": ["./../../src/externs.js", "//webkit_console.js"],
	
	"mode":"ADVANCED",
	"level":"VERBOSE",
	"debug":false,
	"pretty-print":false,
	
	"define": {
		"goog.DEBUG":false
	}
}