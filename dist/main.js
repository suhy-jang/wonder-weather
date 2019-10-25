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
  image.alt = 'no info';
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
  }

  var cityContent = createCityHTML(forecast.city);
  var weatherContent = createWeatherHTML(forecast.list);
  $weatherDivAll[0].appendChild(cityContent);
  $weatherDivAll[0].appendChild(weatherContent);
  $weatherDivAll[0].style.visibility = 'visible';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsia2VsdmluVG9DZWxzaXVzIiwiayIsInRvRml4ZWQiLCJrZWx2aW5Ub0ZhaHJlbmhlaXQiLCIkd2VhdGhlckRpdkFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIiRpbnB1dENpdHkiLCJnZXRFbGVtZW50QnlJZCIsIiRpbnB1dFRvZ2dsZSIsIiRzZWFyY2giLCIkc2VhcmNoTm9JbmZvIiwicXVlcnlTZWxlY3RvciIsIiRsb2FkaW5nQW5pbWF0aW9uIiwid2Vla0RheXMiLCJnZXRJY29uVXJsIiwiaWNvbiIsIiRrZWx2aW5UZW1wZXJhdHVyZUFsbCIsImN1c3RvbVVuaXQiLCJjaGVja2VkIiwia2VsdmluVG9DdXN0b21Vbml0IiwibG9jYXRpb25EYXRlIiwiY2l0eSIsInRpbWUiLCJvZmZzZXREaWZmIiwiRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidGltZXpvbmUiLCJnZXRTdW5UaW1lIiwic3VuT3B0aW9uIiwiZGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJzZWMiLCJnZXRTZWNvbmRzIiwibWluIiwiZ2V0TWludXRlcyIsInN1bnJpc2VUaW1lIiwic3Vic3RyIiwic3Vuc2V0VGltZSIsImZvcmVjYXN0IiwiZHJhd1RleHQiLCJ0YWciLCJjbGFzc2VzIiwidGV4dCIsIm9iaiIsImNyZWF0ZUVsZW1lbnQiLCJzcGxpdCIsImZvckVhY2giLCJjIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImRheWxpZ2h0IiwicHJvdG90eXBlIiwibW1kZCIsIm1tIiwiZ2V0TW9udGgiLCJkZCIsImdldERhdGUiLCJqb2luIiwiY3JlYXRlQ2l0eUhUTUwiLCJjb250YWluZXIiLCJoZWFkZXIiLCJnZXREYXkiLCJzdW5yaXNlIiwibmFtZSIsImNvdW50cnkiLCJkcmF3SWNvbkltYWdlIiwid2VhdGhlciIsImltYWdlIiwic3JjIiwiYWx0IiwiZHJhd1RlbXBlcmF0dXJlIiwibWF4IiwibWluTWF4RGVncmVlIiwibGlzdEFsbCIsImluZGV4IiwiaSIsImN1cnJNYXgiLCJtYWluIiwidGVtcF9tYXgiLCJjdXJyTWluIiwidGVtcF9taW4iLCJkdF90eHQiLCJwdXNoIiwidG9nZ2xlVGVtcGVyYXR1cmVVbml0IiwidGFyZ2V0QWxsIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiZHJhd1dpbmREaXJlY3Rpb24iLCJkZWciLCJkaXJlY3Rpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsImRyYXdXaW5kIiwid2luZCIsIndpbmRTcGVlZCIsInNwZWVkIiwiZHJhd0h1bWlkaXR5IiwicGVyY2VudGFnZSIsImh1bWlkaXR5IiwiZHJhd1ByZXNzdXJlIiwicHJlc3N1cmUiLCJjcmVhdGVXZWF0aGVySFRNTCIsImxpc3QiLCJ0ZW1wZXJhdHVyZSIsImNyZWF0ZU50aERheUh0bWwiLCJNYXRoIiwiZmxvb3IiLCJmaXJzdCIsInNlY29uZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJGb3JlY2FzdCIsInJlbW92ZSIsImNpdHlDb250ZW50Iiwid2VhdGhlckNvbnRlbnQiLCJ2aXNpYmlsaXR5Iiwic3VibWl0IiwiZ2V0SW5wdXQiLCJ2YWx1ZSIsInJlc2V0SFRNTCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZGl2IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZm9jdXMiLCJkYkNvbmZpZyIsInJlcXVpcmUiLCJvcGVuV2VhdGhlcktleSIsIk9QRU5fV0VBVEhFUl9LRVkiLCJ3ZWF0aGVyVXJsIiwiZ2V0Rm9yZWNhc3QiLCJ1cmxUb0ZldGNoIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImpzb25SZXNwb25zZSIsImV4ZWN1dGVTZWFyY2giLCJ0aGVuIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJjb25zdCBrZWx2aW5Ub0NlbHNpdXMgPSBrID0+IChrIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuY29uc3Qga2VsdmluVG9GYWhyZW5oZWl0ID0gayA9PiAoKGsgLSAyNzMuMTUpICogOSAvIDUgKyAzMikudG9GaXhlZCgwKTtcbmNvbnN0ICR3ZWF0aGVyRGl2QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXInKTtcbmNvbnN0ICRpbnB1dENpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuY29uc3QgJGlucHV0VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQnKTtcbmNvbnN0ICRzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCAkc2VhcmNoTm9JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLWluZm8nKTtcbmNvbnN0ICRsb2FkaW5nQW5pbWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctYW5pbWF0aW9uJyk7XG5jb25zdCB3ZWVrRGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbmNvbnN0IGdldEljb25VcmwgPSBpY29uID0+IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xubGV0ICRrZWx2aW5UZW1wZXJhdHVyZUFsbDtcblxuY29uc3QgY3VzdG9tVW5pdCA9ICgpID0+ICgkaW5wdXRUb2dnbGUuY2hlY2tlZCA/ICfCsEMnIDogJ8KwRicpO1xuXG5jb25zdCBrZWx2aW5Ub0N1c3RvbVVuaXQgPSBrID0+ICgkaW5wdXRUb2dnbGUuY2hlY2tlZCA/IGtlbHZpblRvQ2Vsc2l1cyhrKSA6IGtlbHZpblRvRmFocmVuaGVpdChrKSk7XG5cbmNvbnN0IGxvY2F0aW9uRGF0ZSA9IChjaXR5LCB0aW1lKSA9PiB7XG4gIGNvbnN0IG9mZnNldERpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCArIGNpdHkudGltZXpvbmU7XG4gIHJldHVybiBuZXcgRGF0ZSgodGltZSArIG9mZnNldERpZmYpICogMTAwMCk7XG59O1xuXG5jb25zdCBnZXRTdW5UaW1lID0gKGNpdHksIHsgc3VuT3B0aW9uIH0pID0+IHtcbiAgY29uc3QgZGF0ZSA9IGxvY2F0aW9uRGF0ZShjaXR5LCBjaXR5W3N1bk9wdGlvbl0pO1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3Qgc2VjID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIGNvbnN0IG1pbiA9IGAwJHtkYXRlLmdldE1pbnV0ZXMoKSArIChzZWMgPj0gMzApfWA7IC8vIHJvdW5kIGZvciBzZWNvbmRcbiAgcmV0dXJuIHsgaG91cnMsIG1pbiB9O1xufTtcblxuY29uc3Qgc3VucmlzZVRpbWUgPSAoY2l0eSkgPT4ge1xuICBjb25zdCB7IGhvdXJzLCBtaW4gfSA9IGdldFN1blRpbWUoY2l0eSwgeyBzdW5PcHRpb246ICdzdW5yaXNlJyB9KTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbi5zdWJzdHIoLTIpfWA7XG59O1xuXG5jb25zdCBzdW5zZXRUaW1lID0gKGZvcmVjYXN0KSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbiB9ID0gZ2V0U3VuVGltZShmb3JlY2FzdCwgeyBzdW5PcHRpb246ICdzdW5zZXQnIH0pO1xuICByZXR1cm4gYCR7aG91cnN9OiR7bWluLnN1YnN0cigtMil9YDtcbn07XG5cbmNvbnN0IGRyYXdUZXh0ID0gKHsgdGFnLCBjbGFzc2VzLCB0ZXh0IH0pID0+IHtcbiAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAoY2xhc3NlcykgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goYyA9PiBvYmouY2xhc3NMaXN0LmFkZChjKSk7XG4gIG9iai5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG4gIHJldHVybiBvYmo7XG59O1xuXG5jb25zdCBkYXlsaWdodCA9IChjaXR5KSA9PiB7XG4gIGNvbnN0IHRleHQgPSBgRGF5bGlnaHQ6ICR7c3VucmlzZVRpbWUoY2l0eSl9IC0gJHtzdW5zZXRUaW1lKGNpdHkpfWA7XG4gIHJldHVybiBkcmF3VGV4dCh7IHRhZzogJ2RpdicsIHRleHQgfSk7XG59O1xuXG5EYXRlLnByb3RvdHlwZS5tbWRkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtbSA9IHRoaXMuZ2V0TW9udGgoKSArIDE7IC8vIGdldE1vbnRoKCkgaXMgemVyby1iYXNlZFxuICBjb25zdCBkZCA9IHRoaXMuZ2V0RGF0ZSgpO1xuXG4gIHJldHVybiBbKG1tID4gOSA/ICcnIDogJzAnKSArIG1tLFxuICAgIChkZCA+IDkgPyAnJyA6ICcwJykgKyBkZCxcbiAgXS5qb2luKCcgLyAnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNpdHlIVE1MID0gKGNpdHkpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtNicsICd3ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRyYXdUZXh0KHsgdGFnOiAnaDMnLCB0ZXh0OiB3ZWVrRGF5c1sobmV3IERhdGUoKSkuZ2V0RGF5KCldIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0OiBsb2NhdGlvbkRhdGUoY2l0eSwgY2l0eS5zdW5yaXNlKS5tbWRkKCkgfSkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0OiBgJHtjaXR5Lm5hbWV9LCAke2NpdHkuY291bnRyeX1gIH0pKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRheWxpZ2h0KGNpdHkpKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGRyYXdJY29uSW1hZ2UgPSAod2VhdGhlcikgPT4ge1xuICBsZXQgeyBpY29uIH0gPSB3ZWF0aGVyO1xuICBpZiAoaWNvbiA9PT0gJzAxbicpIGljb24gPSAnMDFkJztcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc3JjID0gZ2V0SWNvblVybChpY29uKTtcbiAgaW1hZ2UuYWx0ID0gJ25vIGluZm8nO1xuICByZXR1cm4gaW1hZ2U7XG59O1xuXG5jb25zdCBkcmF3VGVtcGVyYXR1cmUgPSAoeyBtaW4sIG1heCB9KSA9PiBgJHtrZWx2aW5Ub0N1c3RvbVVuaXQobWluKX0gLyAke2tlbHZpblRvQ3VzdG9tVW5pdChtYXgpfSAke2N1c3RvbVVuaXQoKX1gO1xuXG5jb25zdCBtaW5NYXhEZWdyZWUgPSAobGlzdEFsbCwgaW5kZXgpID0+IHtcbiAgbGV0IG1heDtcbiAgbGV0IG1pbjtcbiAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyA4OyBpKyspIHtcbiAgICBjb25zdCBjdXJyTWF4ID0gbGlzdEFsbFtpXS5tYWluLnRlbXBfbWF4O1xuICAgIGNvbnN0IGN1cnJNaW4gPSBsaXN0QWxsW2ldLm1haW4udGVtcF9taW47XG4gICAgaWYgKCFtYXggfHwgbWF4IDwgY3Vyck1heCkgbWF4ID0gY3Vyck1heDtcbiAgICBpZiAoIW1pbiB8fCBtaW4gPiBjdXJyTWluKSBtaW4gPSBjdXJyTWluO1xuICAgIGlmIChsaXN0QWxsW2ldLmR0X3R4dC5zcGxpdCgnICcpWzFdLnNwbGl0KCc6JylbMF0gPT09ICcyMScpIGJyZWFrO1xuICB9XG4gICRrZWx2aW5UZW1wZXJhdHVyZUFsbC5wdXNoKHsgbWluLCBtYXggfSk7XG4gIHJldHVybiB7IG1pbiwgbWF4IH07XG59O1xuXG5jb25zdCB0b2dnbGVUZW1wZXJhdHVyZVVuaXQgPSAoKSA9PiB7XG4gIGNvbnN0IHRhcmdldEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wZXJhdHVyZScpO1xuICB0YXJnZXRBbGwuZm9yRWFjaCgodGFyZ2V0LCBpKSA9PiB7XG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gJGtlbHZpblRlbXBlcmF0dXJlQWxsW2ldO1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBkcmF3VGVtcGVyYXR1cmUoeyBtaW4sIG1heCB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkcmF3V2luZERpcmVjdGlvbiA9IChkZWcpID0+IHtcbiAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWxvY2F0aW9uLWFycm93Jyk7XG4gIGRpcmVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnICsgMTgwIC0gNDV9ZGVnKWA7IC8vIHdpbmQgZnJvbSgxODApLCBvcmlnaW5hbCBpY29uKDQ1KVxuICByZXR1cm4gZGlyZWN0aW9uO1xufTtcblxuY29uc3QgZHJhd1dpbmQgPSAod2luZCkgPT4ge1xuICBjb25zdCB7IGRlZyB9ID0gd2luZDtcbiAgY29uc3Qgd2luZFNwZWVkID0gd2luZC5zcGVlZDtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3V2luZERpcmVjdGlvbihkZWcpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3dpbmRTcGVlZH0gbS9zYCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgZHJhd0h1bWlkaXR5ID0gKG1haW4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHttYWluLmh1bWlkaXR5fSAlYCk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXRpbnQnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2UpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBkcmF3UHJlc3N1cmUgPSBtYWluID0+IGAke21haW4ucHJlc3N1cmV9IGhQYWA7XG5cbmNvbnN0IGNyZWF0ZVdlYXRoZXJIVE1MID0gKGxpc3RBbGwpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtNicsICd3ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgbGlzdCA9IGxpc3RBbGxbMF07XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZHJhd1RlbXBlcmF0dXJlKG1pbk1heERlZ3JlZShsaXN0QWxsLCAwKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3SWNvbkltYWdlKGxpc3Qud2VhdGhlclswXSkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdoMicsIGNsYXNzZXM6ICd0ZW1wZXJhdHVyZScsIHRleHQ6IHRlbXBlcmF0dXJlIH0pKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogbGlzdC53ZWF0aGVyWzBdLm1haW4gfSkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1dpbmQobGlzdC53aW5kKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3SHVtaWRpdHkobGlzdC5tYWluKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGV4dCh7IHRhZzogJ2RpdicsIHRleHQ6IGRyYXdQcmVzc3VyZShsaXN0Lm1haW4pIH0pKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU50aERheUh0bWwgPSAobGlzdEFsbCwgaSkgPT4ge1xuICBjb25zdCBsaXN0ID0gbGlzdEFsbFtpXTtcbiAgY29uc3QgZGF0ZSA9IChuZXcgRGF0ZSgpKS5nZXREYXkoKSArIE1hdGguZmxvb3IoaSAvIDgpO1xuICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkcmF3VGVtcGVyYXR1cmUobWluTWF4RGVncmVlKGxpc3RBbGwsIGkpKTtcbiAgZmlyc3QuYXBwZW5kQ2hpbGQoZHJhd0ljb25JbWFnZShsaXN0LndlYXRoZXJbMF0pKTtcbiAgc2Vjb25kLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogd2Vla0RheXNbZGF0ZSAlIDddIH0pKTtcbiAgc2Vjb25kLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3RlbXBlcmF0dXJlJywgdGV4dDogdGVtcGVyYXR1cmUgfSkpO1xuICBzZWNvbmQuYXBwZW5kQ2hpbGQoZHJhd1dpbmQobGlzdC53aW5kKSk7XG4gIHNlY29uZC5hcHBlbmRDaGlsZChkcmF3SHVtaWRpdHkobGlzdC5tYWluKSk7XG4gIHNlY29uZC5hcHBlbmRDaGlsZChkcmF3VGV4dCh7IHRhZzogJ2RpdicsIHRleHQ6IGRyYXdQcmVzc3VyZShsaXN0Lm1haW4pIH0pKTtcbiAgcmV0dXJuIHsgZmlyc3QsIHNlY29uZCB9O1xufTtcblxuJGlucHV0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0b2dnbGVUZW1wZXJhdHVyZVVuaXQoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyRm9yZWNhc3QgPSAoZm9yZWNhc3QpID0+IHtcbiAgJGxvYWRpbmdBbmltYXRpb24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gIGlmICghZm9yZWNhc3QpIHtcbiAgICAkc2VhcmNoTm9JbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjaXR5Q29udGVudCA9IGNyZWF0ZUNpdHlIVE1MKGZvcmVjYXN0LmNpdHkpO1xuICBjb25zdCB3ZWF0aGVyQ29udGVudCA9IGNyZWF0ZVdlYXRoZXJIVE1MKGZvcmVjYXN0Lmxpc3QpO1xuICAkd2VhdGhlckRpdkFsbFswXS5hcHBlbmRDaGlsZChjaXR5Q29udGVudCk7XG4gICR3ZWF0aGVyRGl2QWxsWzBdLmFwcGVuZENoaWxkKHdlYXRoZXJDb250ZW50KTtcbiAgJHdlYXRoZXJEaXZBbGxbMF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGNyZWF0ZU50aERheUh0bWwoZm9yZWNhc3QubGlzdCwgaSAqIDgpO1xuICAgICR3ZWF0aGVyRGl2QWxsW2ldLmFwcGVuZENoaWxkKGZpcnN0KTtcbiAgICAkd2VhdGhlckRpdkFsbFtpXS5hcHBlbmRDaGlsZChzZWNvbmQpO1xuICAgICR3ZWF0aGVyRGl2QWxsW2ldLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXQgPSAoKSA9PiAkaW5wdXRDaXR5O1xuXG5leHBvcnQgY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9ICRpbnB1dENpdHk7XG4gICRpbnB1dENpdHkudmFsdWUgPSAnJztcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0SFRNTCA9ICgpID0+IHtcbiAgJHNlYXJjaC5zdHlsZS5wYWRkaW5nID0gMDtcbiAgJHNlYXJjaC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoIC5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAkd2VhdGhlckRpdkFsbC5mb3JFYWNoKChkaXYpID0+IHtcbiAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH0pO1xuICAkc2VhcmNoTm9JbmZvLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAkbG9hZGluZ0FuaW1hdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgJGtlbHZpblRlbXBlcmF0dXJlQWxsID0gW107XG59O1xuXG4kaW5wdXRDaXR5LmZvY3VzKCk7XG4iLCJpbXBvcnQge1xuICByZW5kZXJGb3JlY2FzdCwgc3VibWl0LCBnZXRJbnB1dCwgcmVzZXRIVE1MLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBkYkNvbmZpZyA9IHJlcXVpcmUoJy4vLi4vZGItY29uZmlnLmpzb24nKTtcblxuY29uc3Qgb3BlbldlYXRoZXJLZXkgPSBkYkNvbmZpZy5PUEVOX1dFQVRIRVJfS0VZO1xuY29uc3Qgd2VhdGhlclVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3QnO1xuXG5jb25zdCBnZXRGb3JlY2FzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsVG9GZXRjaCA9IGAke3dlYXRoZXJVcmx9P3E9JHtnZXRJbnB1dCgpfSZBUFBJRD0ke29wZW5XZWF0aGVyS2V5fWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsVG9GZXRjaCk7XG4gIHRyeSB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IGV4ZWN1dGVTZWFyY2ggPSAoKSA9PiB7XG4gIHJlc2V0SFRNTCgpO1xuICBnZXRGb3JlY2FzdCgpLnRoZW4oZm9yZWNhc3QgPT4gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpKTtcbn07XG5cbnN1Ym1pdCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXhlY3V0ZVNlYXJjaCgpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=