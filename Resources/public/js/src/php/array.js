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

goog.provide('php.array');

/**
 * Merges an array with another one.
 *
 * @param {...Object} var_args
 * 
 * @return {Object} The merged array
 */
php.array.merge = function(var_args) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Nate
    // +   input by: josh
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: arr1 = {"color": "red", 0: 2, 1: 4}
    // *     example 1: arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
    // *     example 1: array_merge(arr1, arr2)
    // *     returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
    // *     example 2: arr1 = []
    // *     example 2: arr2 = {1: "data"}
    // *     example 2: array_merge(arr1, arr2)
    // *     returns 2: {0: "data"}
    
    var args = Array.prototype.slice.call(arguments),
        argl = args.length,
        arg, retObj = {},
        k = '',
        argil = 0,
        j = 0,
        i = 0,
        ct = 0,
        toStr = Object.prototype.toString,
        retArr = true;

    for (i = 0; i < argl; i++) {
        if (toStr.call(args[i]) !== '[object Array]') {
            retArr = false;
            
            break;
        }
    }

    if (retArr) {
        retArr = [];
        
        for (i = 0; i < argl; i++) {
            retArr = retArr.concat(args[i]);
        }
        
        return retArr;
    }

    for (i = 0, ct = 0; i < argl; i++) {
        arg = args[i];
        
        if (toStr.call(arg) === '[object Array]') {
            for (j = 0, argil = arg.length; j < argil; j++) {
                retObj[ct++] = arg[j];
            }
        } else {
            for (k in arg) {
                if (arg.hasOwnProperty(k)) {
                    if (parseInt(k, 10) + '' === k) {
                        retObj[ct++] = arg[k];
                    } else {
                        retObj[k] = arg[k];
                    }
                }
            }
        }
    }

    return retObj;
};

/**
 * @param {Object} arr
 * @param {...Object} var_args
 * @return {Object}
 */
php.array.replaceRecursive = function(arr, var_args) {
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: php.array.replaceRecursive({'citrus' : ["orange"], 'berries' : ["blackberry", "raspberry"]}, {'citrus' : ['pineapple'], 'berries' : ['blueberry']});
    // *     returns 1: {citrus : ['pineapple'], berries : ['blueberry', 'raspberry']}
    var retObj = {},
        i = 0,
        p = '',
        argl = arguments.length;

    if (argl < 2) {
        throw new Error('There should be at least 2 arguments passed to php.array.arrayReplaceRecursive()');
    }

    // Although docs state that the arguments are passed in by reference, it seems they are not altered, but rather the copy that is returned (just guessing), so we make a copy here, instead of acting on arr itself
    for (p in arr) {
        retObj[p] = arr[p];
    }

    for (i = 1; i < argl; i++) {
        for (p in arguments[i]) {
            if (retObj[p] && typeof retObj[p] === 'object') {
                retObj[p] = php.array.replaceRecursive(retObj[p], arguments[i][p]);
            } else {
                retObj[p] = arguments[i][p];
            }
        }
    }

    return retObj;
};
