/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db-config.json":
/*!************************!*\
  !*** ./db-config.json ***!
  \************************/
/*! exports provided: OPEN_WEATHER_KEY, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"OPEN_WEATHER_KEY\":\"52dd2a6798a51432a71eb6fb1137fcc0\"}");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: renderForecast, submit, getInput, resetHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderForecast", function() { return renderForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return getInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHTML", function() { return resetHTML; });
var kelvinToCelsius = function kelvinToCelsius(k) {
  return (k - 273.15).toFixed(0);
};

var kelvinToFahrenheit = function kelvinToFahrenheit(k) {
  return ((k - 273.15) * 9 / 5 + 32).toFixed(0);
};

var $weatherDivAll = document.querySelectorAll('.weather');
var $inputCity = document.getElementById('city');
var $inputToggle = document.getElementById('unit');
var $search = document.getElementById('search');
var $searchNoInfo = document.querySelector('.no-info');
var $loadingAnimation = document.getElementById('loading-animation');
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var getIconUrl = function getIconUrl(icon) {
  return "https://openweathermap.org/img/wn/".concat(icon, "@2x.png");
};

var $kelvinTemperatureAll;

var customUnit = function customUnit() {
  return $inputToggle.checked ? '°C' : '°F';
};

var kelvinToCustomUnit = function kelvinToCustomUnit(k) {
  return $inputToggle.checked ? kelvinToCelsius(k) : kelvinToFahrenheit(k);
};

var locationDate = function locationDate(city, time) {
  var offsetDiff = new Date().getTimezoneOffset() * 60 + city.timezone;
  return new Date((time + offsetDiff) * 1000);
};

var getSunTime = function getSunTime(city, _ref) {
  var sunOption = _ref.sunOption;
  var date = locationDate(city, city[sunOption]);
  var hours = date.getHours();
  var sec = date.getSeconds();
  var min = "0".concat(date.getMinutes() + (sec >= 30)); // round for second

  return {
    hours: hours,
    min: min
  };
};

var sunriseTime = function sunriseTime(city) {
  var _getSunTime = getSunTime(city, {
    sunOption: 'sunrise'
  }),
      hours = _getSunTime.hours,
      min = _getSunTime.min;

  return "".concat(hours, ":").concat(min.substr(-2));
};

var sunsetTime = function sunsetTime(forecast) {
  var _getSunTime2 = getSunTime(forecast, {
    sunOption: 'sunset'
  }),
      hours = _getSunTime2.hours,
      min = _getSunTime2.min;

  return "".concat(hours, ":").concat(min.substr(-2));
};

var drawText = function drawText(_ref2) {
  var tag = _ref2.tag,
      classes = _ref2.classes,
      text = _ref2.text;
  var obj = document.createElement(tag);
  if (classes) classes.split(' ').forEach(function (c) {
    return obj.classList.add(c);
  });
  obj.appendChild(document.createTextNode(text));
  return obj;
};

var daylight = function daylight(city) {
  var text = "Daylight: ".concat(sunriseTime(city), " - ").concat(sunsetTime(city));
  return drawText({
    tag: 'div',
    text: text
  });
};

Date.prototype.mmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based

  var dd = this.getDate();
  return [(mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join(' / ');
};

var createCityHTML = function createCityHTML(city) {
  var container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  var header = drawText({
    tag: 'h3',
    text: weekDays[new Date().getDay()]
  });
  container.appendChild(header);
  container.appendChild(drawText({
    tag: 'div',
    text: locationDate(city, city.sunrise).mmdd()
  }));
  container.appendChild(drawText({
    tag: 'div',
    text: "".concat(city.name, ", ").concat(city.country)
  }));
  container.appendChild(daylight(city));
  return container;
};

var drawIconImage = function drawIconImage(weather) {
  var icon = weather.icon;
  if (icon === '01n') icon = '01d';
  var image = document.createElement('img');
  image.src = getIconUrl(icon);
  return image;
};

var drawTemperature = function drawTemperature(_ref3) {
  var min = _ref3.min,
      max = _ref3.max;
  return "".concat(kelvinToCustomUnit(min), " / ").concat(kelvinToCustomUnit(max), " ").concat(customUnit());
};

var minMaxDegree = function minMaxDegree(listAll, index) {
  var max;
  var min;

  for (var i = index; i < index + 8; i++) {
    var currMax = listAll[i].main.temp_max;
    var currMin = listAll[i].main.temp_min;
    if (!max || max < currMax) max = currMax;
    if (!min || min > currMin) min = currMin;
    if (listAll[i].dt_txt.split(' ')[1].split(':')[0] === '21') break;
  }

  $kelvinTemperatureAll.push({
    min: min,
    max: max
  });
  return {
    min: min,
    max: max
  };
};

var toggleTemperatureUnit = function toggleTemperatureUnit() {
  var targetAll = document.querySelectorAll('.temperature');
  targetAll.forEach(function (target, i) {
    var _$kelvinTemperatureAl = $kelvinTemperatureAll[i],
        min = _$kelvinTemperatureAl.min,
        max = _$kelvinTemperatureAl.max;
    target.innerHTML = drawTemperature({
      min: min,
      max: max
    });
  });
};

var drawWindDirection = function drawWindDirection(deg) {
  var direction = document.createElement('i');
  direction.classList.add('fas', 'fa-location-arrow');
  direction.style.transform = "rotate(".concat(deg + 180 - 45, "deg)"); // wind from(180), original icon(45)

  return direction;
};

var drawWind = function drawWind(wind) {
  var deg = wind.deg;
  var windSpeed = wind.speed;
  var container = document.createElement('div');
  container.appendChild(drawWindDirection(deg));
  container.appendChild(document.createTextNode("".concat(windSpeed, " m/s")));
  return container;
};

var drawHumidity = function drawHumidity(main) {
  var container = document.createElement('div');
  var icon = document.createElement('i');
  var percentage = document.createTextNode("".concat(main.humidity, " %"));
  icon.classList.add('fas', 'fa-tint');
  container.appendChild(percentage);
  container.appendChild(icon);
  return container;
};

var drawPressure = function drawPressure(main) {
  return "".concat(main.pressure, " hPa");
};

var createWeatherHTML = function createWeatherHTML(listAll) {
  var container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  var list = listAll[0];
  var temperature = drawTemperature(minMaxDegree(listAll, 0));
  container.appendChild(drawIconImage(list.weather[0]));
  container.appendChild(drawText({
    tag: 'h2',
    classes: 'temperature',
    text: temperature
  }));
  container.appendChild(drawText({
    tag: 'div',
    text: list.weather[0].main
  }));
  container.appendChild(drawWind(list.wind));
  container.appendChild(drawHumidity(list.main));
  container.appendChild(drawText({
    tag: 'div',
    text: drawPressure(list.main)
  }));
  return container;
};

var createNthDayHtml = function createNthDayHtml(listAll, i) {
  var list = listAll[i];
  var date = new Date().getDay() + Math.floor(i / 8);
  var first = document.createElement('div');
  var second = document.createElement('div');
  var temperature = drawTemperature(minMaxDegree(listAll, i));
  first.appendChild(drawIconImage(list.weather[0]));
  second.appendChild(drawText({
    tag: 'div',
    text: weekDays[date % 7]
  }));
  second.appendChild(drawText({
    tag: 'div',
    classes: 'temperature',
    text: temperature
  }));
  second.appendChild(drawWind(list.wind));
  second.appendChild(drawHumidity(list.main));
  second.appendChild(drawText({
    tag: 'div',
    text: drawPressure(list.main)
  }));
  return {
    first: first,
    second: second
  };
};

$inputToggle.addEventListener('click', function () {
  toggleTemperatureUnit();
});
var renderForecast = function renderForecast(forecast) {
  $loadingAnimation.classList.add('d-none');

  if (!forecast) {
    $searchNoInfo.classList.remove('d-none');
    return;
  } // main


  var cityContent = createCityHTML(forecast.city);
  var weatherContent = createWeatherHTML(forecast.list);
  $weatherDivAll[0].appendChild(cityContent);
  $weatherDivAll[0].appendChild(weatherContent);
  $weatherDivAll[0].style.visibility = 'visible'; // next days

  for (var i = 1; i < 5; i++) {
    var _createNthDayHtml = createNthDayHtml(forecast.list, i * 8),
        first = _createNthDayHtml.first,
        second = _createNthDayHtml.second;

    $weatherDivAll[i].appendChild(first);
    $weatherDivAll[i].appendChild(second);
    $weatherDivAll[i].style.visibility = 'visible';
  }
};
var submit = function submit() {
  return $inputCity;
};
var getInput = function getInput() {
  var value = $inputCity.value;
  $inputCity.value = '';
  return value;
};
var resetHTML = function resetHTML() {
  $search.style.padding = 0;
  $search.querySelector('#search .header').style.display = 'none';
  $weatherDivAll.forEach(function (div) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    div.style.visibility = 'hidden';
  });
  $searchNoInfo.classList.add('d-none');
  $loadingAnimation.classList.remove('d-none');
  $kelvinTemperatureAll = [];
};
$inputCity.focus();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var dbConfig = __webpack_require__(/*! ./../db-config.json */ "./db-config.json");

var openWeatherKey = dbConfig.OPEN_WEATHER_KEY;
var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';

var getForecast =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var urlToFetch, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlToFetch = "".concat(weatherUrl, "?q=").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getInput"])(), "&APPID=").concat(openWeatherKey);
            _context.next = 3;
            return fetch(urlToFetch);

          case 3:
            response = _context.sent;
            _context.prev = 4;

            if (!response.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.json();

          case 8:
            jsonResponse = _context.sent;
            return _context.abrupt("return", jsonResponse);

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 12]]);
  }));

  return function getForecast() {
    return _ref.apply(this, arguments);
  };
}();

var executeSearch = function executeSearch() {
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["resetHTML"])();
  getForecast().then(function (forecast) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["renderForecast"])(forecast);
  });
};

Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["submit"])().addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    executeSearch();
  }
});

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi regenerator-runtime/runtime ./src/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsia2VsdmluVG9DZWxzaXVzIiwiayIsInRvRml4ZWQiLCJrZWx2aW5Ub0ZhaHJlbmhlaXQiLCIkd2VhdGhlckRpdkFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIiRpbnB1dENpdHkiLCJnZXRFbGVtZW50QnlJZCIsIiRpbnB1dFRvZ2dsZSIsIiRzZWFyY2giLCIkc2VhcmNoTm9JbmZvIiwicXVlcnlTZWxlY3RvciIsIiRsb2FkaW5nQW5pbWF0aW9uIiwid2Vla0RheXMiLCJnZXRJY29uVXJsIiwiaWNvbiIsIiRrZWx2aW5UZW1wZXJhdHVyZUFsbCIsImN1c3RvbVVuaXQiLCJjaGVja2VkIiwia2VsdmluVG9DdXN0b21Vbml0IiwibG9jYXRpb25EYXRlIiwiY2l0eSIsInRpbWUiLCJvZmZzZXREaWZmIiwiRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidGltZXpvbmUiLCJnZXRTdW5UaW1lIiwic3VuT3B0aW9uIiwiZGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJzZWMiLCJnZXRTZWNvbmRzIiwibWluIiwiZ2V0TWludXRlcyIsInN1bnJpc2VUaW1lIiwic3Vic3RyIiwic3Vuc2V0VGltZSIsImZvcmVjYXN0IiwiZHJhd1RleHQiLCJ0YWciLCJjbGFzc2VzIiwidGV4dCIsIm9iaiIsImNyZWF0ZUVsZW1lbnQiLCJzcGxpdCIsImZvckVhY2giLCJjIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImRheWxpZ2h0IiwicHJvdG90eXBlIiwibW1kZCIsIm1tIiwiZ2V0TW9udGgiLCJkZCIsImdldERhdGUiLCJqb2luIiwiY3JlYXRlQ2l0eUhUTUwiLCJjb250YWluZXIiLCJoZWFkZXIiLCJnZXREYXkiLCJzdW5yaXNlIiwibmFtZSIsImNvdW50cnkiLCJkcmF3SWNvbkltYWdlIiwid2VhdGhlciIsImltYWdlIiwic3JjIiwiZHJhd1RlbXBlcmF0dXJlIiwibWF4IiwibWluTWF4RGVncmVlIiwibGlzdEFsbCIsImluZGV4IiwiaSIsImN1cnJNYXgiLCJtYWluIiwidGVtcF9tYXgiLCJjdXJyTWluIiwidGVtcF9taW4iLCJkdF90eHQiLCJwdXNoIiwidG9nZ2xlVGVtcGVyYXR1cmVVbml0IiwidGFyZ2V0QWxsIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiZHJhd1dpbmREaXJlY3Rpb24iLCJkZWciLCJkaXJlY3Rpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsImRyYXdXaW5kIiwid2luZCIsIndpbmRTcGVlZCIsInNwZWVkIiwiZHJhd0h1bWlkaXR5IiwicGVyY2VudGFnZSIsImh1bWlkaXR5IiwiZHJhd1ByZXNzdXJlIiwicHJlc3N1cmUiLCJjcmVhdGVXZWF0aGVySFRNTCIsImxpc3QiLCJ0ZW1wZXJhdHVyZSIsImNyZWF0ZU50aERheUh0bWwiLCJNYXRoIiwiZmxvb3IiLCJmaXJzdCIsInNlY29uZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJGb3JlY2FzdCIsInJlbW92ZSIsImNpdHlDb250ZW50Iiwid2VhdGhlckNvbnRlbnQiLCJ2aXNpYmlsaXR5Iiwic3VibWl0IiwiZ2V0SW5wdXQiLCJ2YWx1ZSIsInJlc2V0SFRNTCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZGl2IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZm9jdXMiLCJkYkNvbmZpZyIsInJlcXVpcmUiLCJvcGVuV2VhdGhlcktleSIsIk9QRU5fV0VBVEhFUl9LRVkiLCJ3ZWF0aGVyVXJsIiwiZ2V0Rm9yZWNhc3QiLCJ1cmxUb0ZldGNoIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImpzb25SZXNwb25zZSIsImV4ZWN1dGVTZWFyY2giLCJ0aGVuIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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TyxDQUFDLDZDQUFELENBQXhCOztBQUVBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDRyxnQkFBaEM7QUFDQSxJQUFNQyxVQUFVLEdBQUcsa0RBQW5COztBQUVBLElBQU1DLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyxzQkFEWSxhQUNJRixVQURKLGdCQUNvQmIseURBQVEsRUFENUIsb0JBQ3dDVyxjQUR4QztBQUFBO0FBQUEsbUJBRUtLLEtBQUssQ0FBQ0QsVUFBRCxDQUZWOztBQUFBO0FBRVpFLG9CQUZZO0FBQUE7O0FBQUEsaUJBSVpBLFFBQVEsQ0FBQ0MsRUFKRztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUthRCxRQUFRLENBQUNFLElBQVQsRUFMYjs7QUFBQTtBQUtSQyx3QkFMUTtBQUFBLDZDQU1QQSxZQU5POztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYTixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCOztBQWFBLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQm5CLDREQUFTO0FBQ1RZLGFBQVcsR0FBR1EsSUFBZCxDQUFtQixVQUFBckcsUUFBUTtBQUFBLFdBQUl5RSwrREFBYyxDQUFDekUsUUFBRCxDQUFsQjtBQUFBLEdBQTNCO0FBQ0QsQ0FIRDs7QUFLQThFLHVEQUFNLEdBQUdOLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUM4QixDQUFELEVBQU87QUFDM0MsTUFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEJELEtBQUMsQ0FBQ0UsY0FBRjtBQUNBSixpQkFBYTtBQUNkO0FBQ0YsQ0FMRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImNvbnN0IGtlbHZpblRvQ2Vsc2l1cyA9IGsgPT4gKGsgLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG5jb25zdCBrZWx2aW5Ub0ZhaHJlbmhlaXQgPSBrID0+ICgoayAtIDI3My4xNSkgKiA5IC8gNSArIDMyKS50b0ZpeGVkKDApO1xuY29uc3QgJHdlYXRoZXJEaXZBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcicpO1xuY29uc3QgJGlucHV0Q2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5jb25zdCAkaW5wdXRUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdCcpO1xuY29uc3QgJHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0ICRzZWFyY2hOb0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8taW5mbycpO1xuY29uc3QgJGxvYWRpbmdBbmltYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1hbmltYXRpb24nKTtcbmNvbnN0IHdlZWtEYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuY29uc3QgZ2V0SWNvblVybCA9IGljb24gPT4gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG5sZXQgJGtlbHZpblRlbXBlcmF0dXJlQWxsO1xuXG5jb25zdCBjdXN0b21Vbml0ID0gKCkgPT4gKCRpbnB1dFRvZ2dsZS5jaGVja2VkID8gJ8KwQycgOiAnwrBGJyk7XG5cbmNvbnN0IGtlbHZpblRvQ3VzdG9tVW5pdCA9IChrKSA9PiAoJGlucHV0VG9nZ2xlLmNoZWNrZWQgPyBrZWx2aW5Ub0NlbHNpdXMoaykgOiBrZWx2aW5Ub0ZhaHJlbmhlaXQoaykpO1xuXG5jb25zdCBsb2NhdGlvbkRhdGUgPSAoY2l0eSwgdGltZSkgPT4ge1xuICBjb25zdCBvZmZzZXREaWZmID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKyBjaXR5LnRpbWV6b25lO1xuICByZXR1cm4gbmV3IERhdGUoKHRpbWUgKyBvZmZzZXREaWZmKSAqIDEwMDApO1xufTtcblxuY29uc3QgZ2V0U3VuVGltZSA9IChjaXR5LCB7IHN1bk9wdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBsb2NhdGlvbkRhdGUoY2l0eSwgY2l0eVtzdW5PcHRpb25dKTtcbiAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IHNlYyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICBjb25zdCBtaW4gPSBgMCR7ZGF0ZS5nZXRNaW51dGVzKCkgKyAoc2VjID49IDMwKX1gOyAvLyByb3VuZCBmb3Igc2Vjb25kXG4gIHJldHVybiB7IGhvdXJzLCBtaW4gfTtcbn07XG5cbmNvbnN0IHN1bnJpc2VUaW1lID0gKGNpdHkpID0+IHtcbiAgY29uc3QgeyBob3VycywgbWluIH0gPSBnZXRTdW5UaW1lKGNpdHksIHsgc3VuT3B0aW9uOiAnc3VucmlzZScgfSk7XG4gIHJldHVybiBgJHtob3Vyc306JHttaW4uc3Vic3RyKC0yKX1gO1xufTtcblxuY29uc3Qgc3Vuc2V0VGltZSA9IChmb3JlY2FzdCkgPT4ge1xuICBjb25zdCB7IGhvdXJzLCBtaW4gfSA9IGdldFN1blRpbWUoZm9yZWNhc3QsIHsgc3VuT3B0aW9uOiAnc3Vuc2V0JyB9KTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbi5zdWJzdHIoLTIpfWA7XG59O1xuXG5jb25zdCBkcmF3VGV4dCA9ICh7IHRhZywgY2xhc3NlcywgdGV4dCB9KSA9PiB7XG4gIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKGNsYXNzZXMpIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGMgPT4gb2JqLmNsYXNzTGlzdC5hZGQoYykpO1xuICBvYmouYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICByZXR1cm4gb2JqO1xufTtcblxuY29uc3QgZGF5bGlnaHQgPSAoY2l0eSkgPT4ge1xuICBjb25zdCB0ZXh0ID0gYERheWxpZ2h0OiAke3N1bnJpc2VUaW1lKGNpdHkpfSAtICR7c3Vuc2V0VGltZShjaXR5KX1gO1xuICByZXR1cm4gZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0IH0pO1xufTtcblxuRGF0ZS5wcm90b3R5cGUubW1kZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbW0gPSB0aGlzLmdldE1vbnRoKCkgKyAxOyAvLyBnZXRNb250aCgpIGlzIHplcm8tYmFzZWRcbiAgY29uc3QgZGQgPSB0aGlzLmdldERhdGUoKTtcblxuICByZXR1cm4gWyhtbSA+IDkgPyAnJyA6ICcwJykgKyBtbSxcbiAgICAoZGQgPiA5ID8gJycgOiAnMCcpICsgZGQsXG4gIF0uam9pbignIC8gJyk7XG59O1xuXG5jb25zdCBjcmVhdGVDaXR5SFRNTCA9IChjaXR5KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLW1kLTYnLCAnd2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBoZWFkZXIgPSBkcmF3VGV4dCh7IHRhZzogJ2gzJywgdGV4dDogd2Vla0RheXNbKG5ldyBEYXRlKCkpLmdldERheSgpXSB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogbG9jYXRpb25EYXRlKGNpdHksIGNpdHkuc3VucmlzZSkubW1kZCgpIH0pKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogYCR7Y2l0eS5uYW1lfSwgJHtjaXR5LmNvdW50cnl9YCB9KSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlsaWdodChjaXR5KSk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBkcmF3SWNvbkltYWdlID0gKHdlYXRoZXIpID0+IHtcbiAgbGV0IHsgaWNvbiB9ID0gd2VhdGhlcjtcbiAgaWYgKGljb24gPT09ICcwMW4nKSBpY29uID0gJzAxZCc7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNyYyA9IGdldEljb25VcmwoaWNvbik7XG4gIHJldHVybiBpbWFnZTtcbn07XG5cbmNvbnN0IGRyYXdUZW1wZXJhdHVyZSA9ICh7IG1pbiwgbWF4IH0pID0+IGAke2tlbHZpblRvQ3VzdG9tVW5pdChtaW4pfSAvICR7a2VsdmluVG9DdXN0b21Vbml0KG1heCl9ICR7Y3VzdG9tVW5pdCgpfWA7XG5cbmNvbnN0IG1pbk1heERlZ3JlZSA9IChsaXN0QWxsLCBpbmRleCkgPT4ge1xuICBsZXQgbWF4O1xuICBsZXQgbWluO1xuICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIDg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJNYXggPSBsaXN0QWxsW2ldLm1haW4udGVtcF9tYXg7XG4gICAgY29uc3QgY3Vyck1pbiA9IGxpc3RBbGxbaV0ubWFpbi50ZW1wX21pbjtcbiAgICBpZiAoIW1heCB8fCBtYXggPCBjdXJyTWF4KSBtYXggPSBjdXJyTWF4O1xuICAgIGlmICghbWluIHx8IG1pbiA+IGN1cnJNaW4pIG1pbiA9IGN1cnJNaW47XG4gICAgaWYgKGxpc3RBbGxbaV0uZHRfdHh0LnNwbGl0KCcgJylbMV0uc3BsaXQoJzonKVswXSA9PT0gJzIxJykgYnJlYWs7XG4gIH1cbiAgJGtlbHZpblRlbXBlcmF0dXJlQWxsLnB1c2goeyBtaW4sIG1heCB9KTtcbiAgcmV0dXJuIHsgbWluLCBtYXggfTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRlbXBlcmF0dXJlVW5pdCA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBlcmF0dXJlJyk7XG4gIHRhcmdldEFsbC5mb3JFYWNoKCh0YXJnZXQsIGkpID0+IHtcbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSAka2VsdmluVGVtcGVyYXR1cmVBbGxbaV07XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IGRyYXdUZW1wZXJhdHVyZSh7IG1pbiwgbWF4IH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRyYXdXaW5kRGlyZWN0aW9uID0gKGRlZykgPT4ge1xuICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtbG9jYXRpb24tYXJyb3cnKTtcbiAgZGlyZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtkZWcgKyAxODAgLSA0NX1kZWcpYDsgLy8gd2luZCBmcm9tKDE4MCksIG9yaWdpbmFsIGljb24oNDUpXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5jb25zdCBkcmF3V2luZCA9ICh3aW5kKSA9PiB7XG4gIGNvbnN0IHsgZGVnIH0gPSB3aW5kO1xuICBjb25zdCB3aW5kU3BlZWQgPSB3aW5kLnNwZWVkO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdXaW5kRGlyZWN0aW9uKGRlZykpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7d2luZFNwZWVkfSBtL3NgKSk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBkcmF3SHVtaWRpdHkgPSAobWFpbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgcGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke21haW4uaHVtaWRpdHl9ICVgKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtdGludCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyY2VudGFnZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGRyYXdQcmVzc3VyZSA9IG1haW4gPT4gYCR7bWFpbi5wcmVzc3VyZX0gaFBhYDtcblxuY29uc3QgY3JlYXRlV2VhdGhlckhUTUwgPSAobGlzdEFsbCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC02JywgJ3dlYXRoZXItZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBsaXN0ID0gbGlzdEFsbFswXTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkcmF3VGVtcGVyYXR1cmUobWluTWF4RGVncmVlKGxpc3RBbGwsIDApKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdJY29uSW1hZ2UobGlzdC53ZWF0aGVyWzBdKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGV4dCh7IHRhZzogJ2gyJywgY2xhc3NlczogJ3RlbXBlcmF0dXJlJywgdGV4dDogdGVtcGVyYXR1cmUgfSkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0OiBsaXN0LndlYXRoZXJbMF0ubWFpbiB9KSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3V2luZChsaXN0LndpbmQpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdIdW1pZGl0eShsaXN0Lm1haW4pKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogZHJhd1ByZXNzdXJlKGxpc3QubWFpbikgfSkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlTnRoRGF5SHRtbCA9IChsaXN0QWxsLCBpKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBsaXN0QWxsW2ldO1xuICBjb25zdCBkYXRlID0gKG5ldyBEYXRlKCkpLmdldERheSgpICsgTWF0aC5mbG9vcihpIC8gOCk7XG4gIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRyYXdUZW1wZXJhdHVyZShtaW5NYXhEZWdyZWUobGlzdEFsbCwgaSkpO1xuICBmaXJzdC5hcHBlbmRDaGlsZChkcmF3SWNvbkltYWdlKGxpc3Qud2VhdGhlclswXSkpO1xuICBzZWNvbmQuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0OiB3ZWVrRGF5c1tkYXRlICUgN10gfSkpO1xuICBzZWNvbmQuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndGVtcGVyYXR1cmUnLCB0ZXh0OiB0ZW1wZXJhdHVyZSB9KSk7XG4gIHNlY29uZC5hcHBlbmRDaGlsZChkcmF3V2luZChsaXN0LndpbmQpKTtcbiAgc2Vjb25kLmFwcGVuZENoaWxkKGRyYXdIdW1pZGl0eShsaXN0Lm1haW4pKTtcbiAgc2Vjb25kLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogZHJhd1ByZXNzdXJlKGxpc3QubWFpbikgfSkpO1xuICByZXR1cm4geyBmaXJzdCwgc2Vjb25kIH07XG59O1xuXG4kaW5wdXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZ2dsZVRlbXBlcmF0dXJlVW5pdCgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJGb3JlY2FzdCA9IChmb3JlY2FzdCkgPT4ge1xuICAkbG9hZGluZ0FuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgaWYgKCFmb3JlY2FzdCkge1xuICAgICRzZWFyY2hOb0luZm8uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG1haW5cbiAgY29uc3QgY2l0eUNvbnRlbnQgPSBjcmVhdGVDaXR5SFRNTChmb3JlY2FzdC5jaXR5KTtcbiAgY29uc3Qgd2VhdGhlckNvbnRlbnQgPSBjcmVhdGVXZWF0aGVySFRNTChmb3JlY2FzdC5saXN0KTtcbiAgJHdlYXRoZXJEaXZBbGxbMF0uYXBwZW5kQ2hpbGQoY2l0eUNvbnRlbnQpO1xuICAkd2VhdGhlckRpdkFsbFswXS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGVudCk7XG4gICR3ZWF0aGVyRGl2QWxsWzBdLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIC8vIG5leHQgZGF5c1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gY3JlYXRlTnRoRGF5SHRtbChmb3JlY2FzdC5saXN0LCBpICogOCk7XG4gICAgJHdlYXRoZXJEaXZBbGxbaV0uYXBwZW5kQ2hpbGQoZmlyc3QpO1xuICAgICR3ZWF0aGVyRGl2QWxsW2ldLmFwcGVuZENoaWxkKHNlY29uZCk7XG4gICAgJHdlYXRoZXJEaXZBbGxbaV0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdCA9ICgpID0+ICRpbnB1dENpdHk7XG5cbmV4cG9ydCBjb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gJGlucHV0Q2l0eTtcbiAgJGlucHV0Q2l0eS52YWx1ZSA9ICcnO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRIVE1MID0gKCkgPT4ge1xuICAkc2VhcmNoLnN0eWxlLnBhZGRpbmcgPSAwO1xuICAkc2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2ggLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICR3ZWF0aGVyRGl2QWxsLmZvckVhY2goKGRpdikgPT4ge1xuICAgIHdoaWxlIChkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSk7XG4gICRzZWFyY2hOb0luZm8uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICRsb2FkaW5nQW5pbWF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAka2VsdmluVGVtcGVyYXR1cmVBbGwgPSBbXTtcbn07XG5cbiRpbnB1dENpdHkuZm9jdXMoKTtcbiIsImltcG9ydCB7XG4gIHJlbmRlckZvcmVjYXN0LCBzdWJtaXQsIGdldElucHV0LCByZXNldEhUTUwsXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGRiQ29uZmlnID0gcmVxdWlyZSgnLi8uLi9kYi1jb25maWcuanNvbicpO1xuXG5jb25zdCBvcGVuV2VhdGhlcktleSA9IGRiQ29uZmlnLk9QRU5fV0VBVEhFUl9LRVk7XG5jb25zdCB3ZWF0aGVyVXJsID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdCc7XG5cbmNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmxUb0ZldGNoID0gYCR7d2VhdGhlclVybH0/cT0ke2dldElucHV0KCl9JkFQUElEPSR7b3BlbldlYXRoZXJLZXl9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmxUb0ZldGNoKTtcbiAgdHJ5IHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgZXhlY3V0ZVNlYXJjaCA9ICgpID0+IHtcbiAgcmVzZXRIVE1MKCk7XG4gIGdldEZvcmVjYXN0KCkudGhlbihmb3JlY2FzdCA9PiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCkpO1xufTtcblxuc3VibWl0KCkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBleGVjdXRlU2VhcmNoKCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==