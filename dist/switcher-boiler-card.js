/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $bb166217b384746d$var$extendStatics = function(d, b) {
    $bb166217b384746d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $bb166217b384746d$var$extendStatics(d, b);
};
function $bb166217b384746d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $bb166217b384746d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $bb166217b384746d$export$18ce0697a983be9b = function() {
    $bb166217b384746d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $bb166217b384746d$export$18ce0697a983be9b.apply(this, arguments);
};
function $bb166217b384746d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $bb166217b384746d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $bb166217b384746d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $bb166217b384746d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $bb166217b384746d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $bb166217b384746d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $bb166217b384746d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $bb166217b384746d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $bb166217b384746d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $bb166217b384746d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $bb166217b384746d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $bb166217b384746d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $bb166217b384746d$export$45d3717a4c69092e(o, m, p);
}
function $bb166217b384746d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $bb166217b384746d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $bb166217b384746d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($bb166217b384746d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $bb166217b384746d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $bb166217b384746d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $bb166217b384746d$export$10c90e4f7922046c(v) {
    return this instanceof $bb166217b384746d$export$10c90e4f7922046c ? (this.v = v, this) : new $bb166217b384746d$export$10c90e4f7922046c(v);
}
function $bb166217b384746d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $bb166217b384746d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $bb166217b384746d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $bb166217b384746d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $bb166217b384746d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $bb166217b384746d$export$19a8beecd37a4c45 === "function" ? $bb166217b384746d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $bb166217b384746d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $bb166217b384746d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $bb166217b384746d$var$ownKeys = function(o) {
    $bb166217b384746d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $bb166217b384746d$var$ownKeys(o);
};
function $bb166217b384746d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $bb166217b384746d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $bb166217b384746d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $bb166217b384746d$var$__setModuleDefault(result, mod);
    return result;
}
function $bb166217b384746d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $bb166217b384746d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $bb166217b384746d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $bb166217b384746d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $bb166217b384746d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $bb166217b384746d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $bb166217b384746d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $bb166217b384746d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $bb166217b384746d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $bb166217b384746d$export$2e2bcd8739ae039 = {
    __extends: $bb166217b384746d$export$a8ba968b8961cb8a,
    __assign: $bb166217b384746d$export$18ce0697a983be9b,
    __rest: $bb166217b384746d$export$3c9a16f847548506,
    __decorate: $bb166217b384746d$export$29e00dfd3077644b,
    __param: $bb166217b384746d$export$d5ad3fd78186038f,
    __esDecorate: $bb166217b384746d$export$3a84e1ae4e97e9b0,
    __runInitializers: $bb166217b384746d$export$d831c04e792af3d,
    __propKey: $bb166217b384746d$export$6a2a36740a146cb8,
    __setFunctionName: $bb166217b384746d$export$d1a06452d3489bc7,
    __metadata: $bb166217b384746d$export$f1db080c865becb9,
    __awaiter: $bb166217b384746d$export$1050f835b63b671e,
    __generator: $bb166217b384746d$export$67ebef60e6f28a6,
    __createBinding: $bb166217b384746d$export$45d3717a4c69092e,
    __exportStar: $bb166217b384746d$export$f33643c0debef087,
    __values: $bb166217b384746d$export$19a8beecd37a4c45,
    __read: $bb166217b384746d$export$8d051b38c9118094,
    __spread: $bb166217b384746d$export$afc72e2116322959,
    __spreadArrays: $bb166217b384746d$export$6388937ca91ccae8,
    __spreadArray: $bb166217b384746d$export$1216008129fb82ed,
    __await: $bb166217b384746d$export$10c90e4f7922046c,
    __asyncGenerator: $bb166217b384746d$export$e427f37a30a4de9b,
    __asyncDelegator: $bb166217b384746d$export$bbd80228419bb833,
    __asyncValues: $bb166217b384746d$export$e3b29a3d6162315f,
    __makeTemplateObject: $bb166217b384746d$export$4fb47efe1390b86f,
    __importStar: $bb166217b384746d$export$c21735bcef00d192,
    __importDefault: $bb166217b384746d$export$da59b14a69baef04,
    __classPrivateFieldGet: $bb166217b384746d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $bb166217b384746d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $bb166217b384746d$export$81fdc39f203e4e04,
    __addDisposableResource: $bb166217b384746d$export$88ac25d8e944e405,
    __disposeResources: $bb166217b384746d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $bb166217b384746d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $06bdd16cbb4a41b3$var$t = globalThis, $06bdd16cbb4a41b3$export$b4d10f6001c083c2 = $06bdd16cbb4a41b3$var$t.ShadowRoot && (void 0 === $06bdd16cbb4a41b3$var$t.ShadyCSS || $06bdd16cbb4a41b3$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $06bdd16cbb4a41b3$var$s = Symbol(), $06bdd16cbb4a41b3$var$o = new WeakMap;
class $06bdd16cbb4a41b3$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $06bdd16cbb4a41b3$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($06bdd16cbb4a41b3$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $06bdd16cbb4a41b3$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $06bdd16cbb4a41b3$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $06bdd16cbb4a41b3$export$8d80f9cac07cdb3 = (t)=>new $06bdd16cbb4a41b3$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $06bdd16cbb4a41b3$var$s), $06bdd16cbb4a41b3$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $06bdd16cbb4a41b3$export$505d1e8739bad805(o, t, $06bdd16cbb4a41b3$var$s);
}, $06bdd16cbb4a41b3$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($06bdd16cbb4a41b3$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $06bdd16cbb4a41b3$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $06bdd16cbb4a41b3$export$ee69dfd951e24778 = $06bdd16cbb4a41b3$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $06bdd16cbb4a41b3$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $375b48187e686ca2$var$i, defineProperty: $375b48187e686ca2$var$e, getOwnPropertyDescriptor: $375b48187e686ca2$var$r, getOwnPropertyNames: $375b48187e686ca2$var$h, getOwnPropertySymbols: $375b48187e686ca2$var$o, getPrototypeOf: $375b48187e686ca2$var$n } = Object, $375b48187e686ca2$var$a = globalThis, $375b48187e686ca2$var$c = $375b48187e686ca2$var$a.trustedTypes, $375b48187e686ca2$var$l = $375b48187e686ca2$var$c ? $375b48187e686ca2$var$c.emptyScript : "", $375b48187e686ca2$var$p = $375b48187e686ca2$var$a.reactiveElementPolyfillSupport, $375b48187e686ca2$var$d = (t, s)=>t, $375b48187e686ca2$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $375b48187e686ca2$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $375b48187e686ca2$export$53a6892c50694894 = (t, s)=>!$375b48187e686ca2$var$i(t, s), $375b48187e686ca2$var$y = {
    attribute: !0,
    type: String,
    converter: $375b48187e686ca2$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $375b48187e686ca2$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $375b48187e686ca2$var$a.litPropertyMetadata ??= new WeakMap;
class $375b48187e686ca2$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $375b48187e686ca2$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $375b48187e686ca2$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $375b48187e686ca2$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $375b48187e686ca2$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($375b48187e686ca2$var$d("elementProperties"))) return;
        const t = $375b48187e686ca2$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($375b48187e686ca2$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($375b48187e686ca2$var$d("properties"))) {
            const t = this.properties, s = [
                ...$375b48187e686ca2$var$h(t),
                ...$375b48187e686ca2$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $06bdd16cbb4a41b3$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $06bdd16cbb4a41b3$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $06bdd16cbb4a41b3$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $375b48187e686ca2$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $375b48187e686ca2$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $375b48187e686ca2$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$375b48187e686ca2$export$c7c07a37856565d.elementStyles = [], $375b48187e686ca2$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $375b48187e686ca2$export$c7c07a37856565d[$375b48187e686ca2$var$d("elementProperties")] = new Map, $375b48187e686ca2$export$c7c07a37856565d[$375b48187e686ca2$var$d("finalized")] = new Map, $375b48187e686ca2$var$p?.({
    ReactiveElement: $375b48187e686ca2$export$c7c07a37856565d
}), ($375b48187e686ca2$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d33ef1320595a3ac$var$t = globalThis, $d33ef1320595a3ac$var$i = $d33ef1320595a3ac$var$t.trustedTypes, $d33ef1320595a3ac$var$s = $d33ef1320595a3ac$var$i ? $d33ef1320595a3ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $d33ef1320595a3ac$var$e = "$lit$", $d33ef1320595a3ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $d33ef1320595a3ac$var$o = "?" + $d33ef1320595a3ac$var$h, $d33ef1320595a3ac$var$n = `<${$d33ef1320595a3ac$var$o}>`, $d33ef1320595a3ac$var$r = document, $d33ef1320595a3ac$var$l = ()=>$d33ef1320595a3ac$var$r.createComment(""), $d33ef1320595a3ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $d33ef1320595a3ac$var$a = Array.isArray, $d33ef1320595a3ac$var$u = (t)=>$d33ef1320595a3ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $d33ef1320595a3ac$var$d = "[ \t\n\f\r]", $d33ef1320595a3ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $d33ef1320595a3ac$var$v = /-->/g, $d33ef1320595a3ac$var$_ = />/g, $d33ef1320595a3ac$var$m = RegExp(`>|${$d33ef1320595a3ac$var$d}(?:([^\\s"'>=/]+)(${$d33ef1320595a3ac$var$d}*=${$d33ef1320595a3ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $d33ef1320595a3ac$var$p = /'/g, $d33ef1320595a3ac$var$g = /"/g, $d33ef1320595a3ac$var$$ = /^(?:script|style|textarea|title)$/i, $d33ef1320595a3ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $d33ef1320595a3ac$export$c0bb0b647f701bb5 = $d33ef1320595a3ac$var$y(1), $d33ef1320595a3ac$export$7ed1367e7fa1ad68 = $d33ef1320595a3ac$var$y(2), $d33ef1320595a3ac$export$47d5b44d225be5b4 = $d33ef1320595a3ac$var$y(3), $d33ef1320595a3ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $d33ef1320595a3ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $d33ef1320595a3ac$var$A = new WeakMap, $d33ef1320595a3ac$var$C = $d33ef1320595a3ac$var$r.createTreeWalker($d33ef1320595a3ac$var$r, 129);
function $d33ef1320595a3ac$var$P(t, i) {
    if (!$d33ef1320595a3ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $d33ef1320595a3ac$var$s ? $d33ef1320595a3ac$var$s.createHTML(i) : i;
}
const $d33ef1320595a3ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $d33ef1320595a3ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $d33ef1320595a3ac$var$f ? "!--" === u[1] ? c = $d33ef1320595a3ac$var$v : void 0 !== u[1] ? c = $d33ef1320595a3ac$var$_ : void 0 !== u[2] ? ($d33ef1320595a3ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $d33ef1320595a3ac$var$m) : void 0 !== u[3] && (c = $d33ef1320595a3ac$var$m) : c === $d33ef1320595a3ac$var$m ? ">" === u[0] ? (c = r ?? $d33ef1320595a3ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $d33ef1320595a3ac$var$m : '"' === u[3] ? $d33ef1320595a3ac$var$g : $d33ef1320595a3ac$var$p) : c === $d33ef1320595a3ac$var$g || c === $d33ef1320595a3ac$var$p ? c = $d33ef1320595a3ac$var$m : c === $d33ef1320595a3ac$var$v || c === $d33ef1320595a3ac$var$_ ? c = $d33ef1320595a3ac$var$f : (c = $d33ef1320595a3ac$var$m, r = void 0);
        const x = c === $d33ef1320595a3ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $d33ef1320595a3ac$var$f ? s + $d33ef1320595a3ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $d33ef1320595a3ac$var$e + s.slice(d) + $d33ef1320595a3ac$var$h + x) : s + $d33ef1320595a3ac$var$h + (-2 === d ? i : x);
    }
    return [
        $d33ef1320595a3ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $d33ef1320595a3ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $d33ef1320595a3ac$var$V(t, s);
        if (this.el = $d33ef1320595a3ac$var$N.createElement(f, n), $d33ef1320595a3ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $d33ef1320595a3ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($d33ef1320595a3ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($d33ef1320595a3ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $d33ef1320595a3ac$var$H : "?" === e[1] ? $d33ef1320595a3ac$var$I : "@" === e[1] ? $d33ef1320595a3ac$var$L : $d33ef1320595a3ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($d33ef1320595a3ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($d33ef1320595a3ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($d33ef1320595a3ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $d33ef1320595a3ac$var$i ? $d33ef1320595a3ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $d33ef1320595a3ac$var$l()), $d33ef1320595a3ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $d33ef1320595a3ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $d33ef1320595a3ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($d33ef1320595a3ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $d33ef1320595a3ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $d33ef1320595a3ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $d33ef1320595a3ac$var$S(t, i, s = t, e) {
    if (i === $d33ef1320595a3ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $d33ef1320595a3ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $d33ef1320595a3ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $d33ef1320595a3ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $d33ef1320595a3ac$var$r).importNode(i, !0);
        $d33ef1320595a3ac$var$C.currentNode = e;
        let h = $d33ef1320595a3ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $d33ef1320595a3ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $d33ef1320595a3ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $d33ef1320595a3ac$var$C.nextNode(), o++);
        }
        return $d33ef1320595a3ac$var$C.currentNode = $d33ef1320595a3ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $d33ef1320595a3ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $d33ef1320595a3ac$var$S(this, t, i), $d33ef1320595a3ac$var$c(t) ? t === $d33ef1320595a3ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $d33ef1320595a3ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $d33ef1320595a3ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $d33ef1320595a3ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $d33ef1320595a3ac$export$45b790e32b2810ee && $d33ef1320595a3ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($d33ef1320595a3ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $d33ef1320595a3ac$var$N.createElement($d33ef1320595a3ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $d33ef1320595a3ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $d33ef1320595a3ac$var$A.get(t.strings);
        return void 0 === i && $d33ef1320595a3ac$var$A.set(t.strings, i = new $d33ef1320595a3ac$var$N(t)), i;
    }
    k(t) {
        $d33ef1320595a3ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $d33ef1320595a3ac$var$R(this.O($d33ef1320595a3ac$var$l()), this.O($d33ef1320595a3ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $d33ef1320595a3ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $d33ef1320595a3ac$var$S(this, t, i, 0), o = !$d33ef1320595a3ac$var$c(t) || t !== this._$AH && t !== $d33ef1320595a3ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $d33ef1320595a3ac$var$S(this, e[s + n], i, n), r === $d33ef1320595a3ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$d33ef1320595a3ac$var$c(r) || r !== this._$AH[n], r === $d33ef1320595a3ac$export$45b790e32b2810ee ? t = $d33ef1320595a3ac$export$45b790e32b2810ee : t !== $d33ef1320595a3ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $d33ef1320595a3ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $d33ef1320595a3ac$var$H extends $d33ef1320595a3ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $d33ef1320595a3ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $d33ef1320595a3ac$var$I extends $d33ef1320595a3ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $d33ef1320595a3ac$export$45b790e32b2810ee);
    }
}
class $d33ef1320595a3ac$var$L extends $d33ef1320595a3ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $d33ef1320595a3ac$var$S(this, t, i, 0) ?? $d33ef1320595a3ac$export$45b790e32b2810ee) === $d33ef1320595a3ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $d33ef1320595a3ac$export$45b790e32b2810ee && s !== $d33ef1320595a3ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $d33ef1320595a3ac$export$45b790e32b2810ee && (s === $d33ef1320595a3ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $d33ef1320595a3ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $d33ef1320595a3ac$var$S(this, t);
    }
}
const $d33ef1320595a3ac$export$8613d1ca9052b22e = {
    M: $d33ef1320595a3ac$var$e,
    P: $d33ef1320595a3ac$var$h,
    A: $d33ef1320595a3ac$var$o,
    C: 1,
    L: $d33ef1320595a3ac$var$V,
    R: $d33ef1320595a3ac$var$M,
    D: $d33ef1320595a3ac$var$u,
    V: $d33ef1320595a3ac$var$S,
    I: $d33ef1320595a3ac$var$R,
    H: $d33ef1320595a3ac$var$k,
    N: $d33ef1320595a3ac$var$I,
    U: $d33ef1320595a3ac$var$L,
    B: $d33ef1320595a3ac$var$H,
    F: $d33ef1320595a3ac$var$z
}, $d33ef1320595a3ac$var$j = $d33ef1320595a3ac$var$t.litHtmlPolyfillSupport;
$d33ef1320595a3ac$var$j?.($d33ef1320595a3ac$var$N, $d33ef1320595a3ac$var$R), ($d33ef1320595a3ac$var$t.litHtmlVersions ??= []).push("3.2.1");
const $d33ef1320595a3ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $d33ef1320595a3ac$var$R(i.insertBefore($d33ef1320595a3ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $528e4332d1e3099e$export$3f2f9f5909897157 extends (0, $375b48187e686ca2$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $d33ef1320595a3ac$export$b3890eb0ae9dca99)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $d33ef1320595a3ac$export$9c068ae9cc5db4e8;
    }
}
$528e4332d1e3099e$export$3f2f9f5909897157._$litElement$ = !0, $528e4332d1e3099e$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $528e4332d1e3099e$export$3f2f9f5909897157
});
const $528e4332d1e3099e$var$i = globalThis.litElementPolyfillSupport;
$528e4332d1e3099e$var$i?.({
    LitElement: $528e4332d1e3099e$export$3f2f9f5909897157
});
const $528e4332d1e3099e$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $56239b0c931b817c$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $4af75e4a7ed8f584$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $80d080f0d3adcf1c$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $375b48187e686ca2$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $375b48187e686ca2$export$53a6892c50694894)
}, $80d080f0d3adcf1c$export$8d623b1670eb40f4 = (t = $80d080f0d3adcf1c$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $80d080f0d3adcf1c$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $80d080f0d3adcf1c$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $0ede0742a0fa7bbd$export$ca000e230c0caa3e(r) {
    return (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $5954ea5dd4cf850a$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $503ea9824f18064f$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $688d7e93c42be25f$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $503ea9824f18064f$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $503ea9824f18064f$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $fc6586cfa4ad7136$var$e;
function $fc6586cfa4ad7136$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $503ea9824f18064f$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($fc6586cfa4ad7136$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b531a1a0aa7c0890$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $503ea9824f18064f$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $705c7c046c2578b3$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $503ea9824f18064f$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $637e9a1da54d3961$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $503ea9824f18064f$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





var $13dbd5fcdd552aba$export$2e2bcd8739ae039 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`

  ha-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.2s ease;
    height: 100%;
  }

  .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%
  }

  .content {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 9px;
      flex: 1;
      box-sizing: border-box;
      //pointer-events: none;
      max-width: 100%;
      overflow: hidden;      
  }

  .controls {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 11px;
      padding-top: 0px;
      gap: 12px;
      width: 100%;
      //height: 100%;
      box-sizing: border-box;
      //justify-content: space-evenly;
  }

  .buttons-group {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
  }

  .button {
    height: var(--feature-height, 42px);
    cursor: pointer;
    transition: background-color 180ms ease-in-out;
    text-align: center;
    flex: 1;
    -webkit-flex: 1;
    border: none;
    border-radius: var(--control-button-border-radius, 10px);
    //pointer-events: none;
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .button .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 1000ms ease-out;
      background-color: currentColor; /* Matches the text color or icon color */
      opacity: 0.08;
      pointer-events: none; /* Prevent interference with button click events */
  }

  @keyframes ripple-animation {
      to {
          transform: scale(30); /* Scale the ripple */
          opacity: 0; /* Fade out */
      }
  }

  .button.power.off {
    background-color: var(--grey-color);
  }

  .button.power.on {
    background-color: #F54436;
  }

  .combined-buttons {
    display: inline-flex;
    flex: 2;
    -webkit-flex: 2;
    gap: 0px;
    border-radius: var(--feature-border-radius, 12px);
    //overflow: hidden;
  }

  .button.dark-theme {
    background-color: rgba(70,70,70,0.2);
  }

  .button.light-theme {
    background-color: rgba(189,189,189,0.2);
  }

  .button.dark-theme:hover {
    background-color: rgba(70,70,70,0.3);
  }

  .button.light-theme:hover {
    background-color: rgba(189,189,189,0.3);
  }

  .combined-buttons .button {
    flex: 1;
    -webkit-flex: 1;
    border-radius: 0;
    background: none;
    display: inline-flex;
    overflow: hidden;
  }

  .combined-buttons .button:first-child {
    border-radius: var(--feature-border-radius, 12px) 0 0 var(--feature-border-radius, 12px);
  }

  .combined-buttons .button:last-child {
    border-radius: 0 var(--feature-border-radius, 12px) var(--feature-border-radius, 12px) 0;
  }

  .button_icon {
    --mdc-icon-size: 20px;
    font-size: 12px;
  }

  .button_icon.power {
    color: rgb(255,255,255);
  }

  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: relative;
    flex: none;
    margin-right: 10px;
    margin-inline-start: initial;
    margin-inline-end: 10px;
    direction: var(--direction);
    transition: transform 180ms ease-in-out;
  }

  .icon-container.on {
    background-color: rgba(245, 68, 54, 0.2); /* Light red for "on" state */
  }

  .icon-container.off {
    background-color: rgba(158, 158, 158, 0.2); /* Light gray for "off" state */
  }

  .icon {
    font-size: 24px;
    transition: color 0.3s;
    --mdc-icon-size: 24px;
  }

  .icon.on {
    color: #F54436; /* Red for "on" state */
  }

  .icon.off {
    color: var(--state-light-off-color, var(--state-light-inactive-color, var(--state-inactive-color)));
  }

  .icon-sensor {
    font-size: 16px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 36px;
  }

  .icon-sensor.on {
    color: #F54436; /* Red for "on" state */
  }

  .icon-sensor.off {
    color: var(--primary-text-color);
  }

  .label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    font-size: 14px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;    
  }

  .primary {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .1px;
    color: var(--primary-text-color); 
  }

  .secondary {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: .4px;
    color: var(--primary-text-color);
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    max-width: 100%;
  }

`;


class $a5f7b08063ee5a98$export$f725446453aa0621 extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $13dbd5fcdd552aba$export$2e2bcd8739ae039);
    }
    constructor(){
        super();
        this.hasError = false;
        this.timerValue = '15';
    }
    static getConfigElement() {
        return document.createElement("switcher-boiler-card-editor");
    }
    static getStubConfig() {
        return {
            type: "custom:switcher-boiler-card",
            name: "Boiler",
            entity: "",
            icon: "",
            time_left: "",
            sensor_1: "",
            sensor_2: "",
            icon_sensor: ""
        };
    }
    setConfig(config) {
        if (!config.entity) throw new Error("You need to define an entity");
        this.config = config;
        this.timerValue = this.config.timer_values ? this.config.timer_values[0] : '15';
    }
    render() {
        const { name: name, icon: icon, entity: entity } = this.config;
        const entityState = this.hass?.states?.[entity];
        if (!entityState) return;
        const friendlyName = entityState?.attributes?.friendly_name || "Unknown Entity";
        const displayName = name || friendlyName || "Boiler";
        const stateValue = entityState?.state || "Unavailable";
        const displayIcon = icon || entityState?.attributes?.icon || "mdi:waves";
        const isOn = stateValue === "on";
        const iconContainerClass = isOn ? "icon-container on" : "icon-container off";
        const iconClass = isOn ? "icon on" : "icon off";
        const iconSensorClass = isOn ? "icon-sensor on" : "icon-sensor off";
        let displayState = "";
        if (isOn) {
            if (this.config.time_left && !this.config.sensor_1 && !this.config.sensor_2) displayState = this.hass.states[this.config.time_left].state;
            if (this.config.time_left && !this.config.sensor_1 && this.config.sensor_2) displayState = this.hass.states[this.config.time_left].state + " \u2022 " + this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
            if (this.config.time_left && this.config.sensor_1 && !this.config.sensor_2) displayState = this.hass.states[this.config.time_left].state + " \u2022 " + this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement;
            if (this.config.time_left && this.config.sensor_1 && this.config.sensor_2) displayState = this.hass.states[this.config.time_left].state + " \u2022 " + this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement + " \u2022 " + this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
            if (!this.config.time_left && this.config.sensor_1 && this.config.sensor_2) displayState = this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement + " \u2022 " + this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
            if (!this.config.time_left && !this.config.sensor_1 && this.config.sensor_2) displayState = this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
            if (!this.config.time_left && this.config.sensor_1 && !this.config.sensor_2) displayState = this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement;
            if (!this.config.time_left && !this.config.sensor_1 && !this.config.sensor_2) displayState = this.hass.localize(`component.switch.entity_component._.state.on`) || "on";
        } else if (this.config.sensor_2) {
            displayState = this.hass.localize(`component.switch.entity_component._.state.off`) || "off";
            displayState += " \u2022 " + this.hass.states[this.config.sensor_2].state;
            displayState += this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
        } else displayState = this.hass.localize(`component.switch.entity_component._.state.off`) || "off";
        const powerButtonClass = isOn ? "button power on" : "button power off";
        const isDark = this.isDarkTheme();
        const buttonClass = isDark ? "button dark-theme" : "button light-theme";
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <ha-card class="card" id="card">
        <div class="container">
          <div class="content" @click="${(e)=>this._showMoreInfo(e, this.config.entity)}">
            <div class="${iconContainerClass}" id="icon-container">
              ${this.config.icon_sensor && this.hass.states[this.config.icon_sensor] && !isNaN(parseFloat(this.hass.states[this.config.icon_sensor].state)) ? (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<span class="${iconSensorClass}" @click="${(e)=>this._showMoreInfo(e, this.config.icon_sensor)}">
                            ${parseFloat(this.hass.states[this.config.icon_sensor].state).toFixed(1)}°
                          </span>` : (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<ha-icon icon="${displayIcon}" class="${iconClass}" id="icon"></ha-icon>`}
            </div>
            <div class="label">
              <span class="primary" id="name">${displayName}</span>
              <span class="secondary" id="state">${displayState}</span>
            </div>
          </div>
          <div class="controls">
            <div class="buttons-group">
              <button class="${powerButtonClass}" @click="${this._toggleBoiler}">
                <ha-icon icon="mdi:power" class="button_icon power"></ha-icon>
              </button>
              <button class="${buttonClass} timer" @click=${this._turnOnBoilerWithTimer}>
                <ha-icon icon="mdi:timer-outline" class="button_icon timer"></ha-icon>
              </button>
              <button class="${buttonClass} timer_time" @click=${this._cycleTimerValue}>
                ${this.timerValue}
              </button>
            </div>
          </div>
        </div>
      </ha-card>
    `;
    }
    _toggleBoiler(event) {
        event.stopPropagation();
        event.preventDefault();
        const entityId = this.config.entity;
        this.hass.callService("homeassistant", "toggle", {
            entity_id: entityId
        });
        this._rippleEffect(event);
    }
    _turnOnBoilerWithTimer(event) {
        event.stopPropagation();
        event.preventDefault();
        const entityId = this.config.entity;
        this.hass.callService("switcher_kis", "turn_on_with_timer", {
            entity_id: entityId,
            timer_minutes: this.timerValue
        });
        this._rippleEffect(event);
    }
    _cycleTimerValue(event) {
        event.stopPropagation();
        event.preventDefault();
        // Create a unique, sorted array, filter values, and convert back to strings
        const timerValues = [
            ...new Set((this.config.timer_values || [
                '15',
                '30',
                '45',
                '60'
            ]).map(Number) // Convert all values to numbers
            .filter((value)=>value >= 1 && value <= 150) // Keep only values in the range of 1 and 150
            .sort((a, b)=>a - b) // Sort numerically
            .map(String) // Convert back to strings
            )
        ];
        const currentIndex = timerValues.indexOf(this.timerValue);
        // Fallback to the first value if currentValue is not in the array
        this.timerValue = currentIndex === -1 ? timerValues[0] : timerValues[(currentIndex + 1) % timerValues.length];
        this._rippleEffect(event);
    }
    _rippleEffect(event) {
        const button = event.currentTarget;
        if (!button) return;
        // Create ripple element
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        // Get click position
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        // Style ripple element
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        // Append ripple and remove after animation
        button.appendChild(ripple);
        setTimeout(()=>ripple.remove(), 1000); // Matches animation duration
    }
    _showMoreInfo(event, entityId) {
        event.stopPropagation();
        event.preventDefault();
        if (!entityId) return;
        const moreInfoEvent = new CustomEvent("hass-more-info", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
                entityId: entityId
            }
        });
        this.dispatchEvent(moreInfoEvent);
    }
    isDarkTheme() {
        return this.hass.themes.darkMode ?? false;
    }
    getCardSize() {
        return 3;
    }
    getLayoutOptions() {
        return {
            grid_rows: 2,
            grid_columns: 2,
            grid_min_rows: 2,
            grid_max_rows: 2,
            grid_min_columns: 2,
            grid_max_columns: 4
        };
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $a5f7b08063ee5a98$export$f725446453aa0621.prototype, "hasError", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $a5f7b08063ee5a98$export$f725446453aa0621.prototype, "timerValue", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $a5f7b08063ee5a98$export$f725446453aa0621.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $a5f7b08063ee5a98$export$f725446453aa0621.prototype, "config", void 0);








var $64a6fbb9addceec9$export$2e2bcd8739ae039 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`

  .card-config {
    /* Cancels overlapping Margins for HAForm + Card Config options */
    overflow: auto;
  }
  ha-switch {
    padding: 16px 6px;
  }
  .side-by-side {
    display: flex;
    align-items: flex-end;
  }
  .side-by-side > * {
    flex: 1;
    padding-right: 8px;
  }
  .side-by-side > *:last-child {
    flex: 1;
    padding-right: 0;
  }
  .suffix {
    margin: 0 8px;
  }
  hui-action-editor,
  ha-select,
  ha-textfield,
  ha-icon-picker {
    margin-top: 8px;
    display: block;
  }
  .timer-values {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    margin-top: 16px;
  }
  .timer-values label {
    display: flex;
    align-items: center;
  }
  .timer-values input {
    margin-right: 8px;
  }
  .timer-values-label {
    margin-top: 24px;
    margin-bottom: 8px;
    margin-right: 6px;
    margin-left: 6px;
  }

`;


const $577453a9cea28e00$var$SCHEMA = [
    {
        name: "entity",
        selector: {
            entity: {
                domain: [
                    "switch"
                ]
            }
        }
    },
    {
        name: "name",
        selector: {
            text: {}
        }
    },
    {
        name: "icon",
        selector: {
            icon: {}
        },
        context: {
            icon_entity: "entity"
        }
    },
    {
        name: "time_left",
        selector: {
            entity: {
                domain: [
                    "sensor"
                ]
            }
        }
    },
    {
        name: "sensor_1",
        selector: {
            entity: {
                domain: [
                    "sensor"
                ]
            }
        }
    },
    {
        name: "sensor_2",
        selector: {
            entity: {
                domain: [
                    "sensor"
                ]
            }
        }
    },
    {
        name: "icon_sensor",
        selector: {
            entity: {
                domain: [
                    "sensor"
                ]
            }
        }
    },
    {
        name: "timer_values",
        selector: {}
    }
];
const $577453a9cea28e00$var$fireEvent = (node, type, detail, options = {})=>{
    const event = new CustomEvent(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
        detail: detail
    });
    node.dispatchEvent(event);
    return event;
};
class $577453a9cea28e00$export$1841dadb9ebd245b extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $64a6fbb9addceec9$export$2e2bcd8739ae039);
    }
    setConfig(config) {
        this._config = {
            ...config,
            timer_values: [
                ...new Set((config.timer_values || [
                    '15',
                    '30',
                    '45',
                    '60'
                ]).map(Number) // Convert all values to numbers
                .filter((value)=>value >= 1 && value <= 150) // Keep only values in the range of 1 and 150
                .sort((a, b)=>a - b) // Sort numerically
                .map(String) // Convert back to strings
                )
            ]
        };
    }
    render() {
        if (!this.hass || !this._config) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)``;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${$577453a9cea28e00$var$SCHEMA.filter((field)=>field.name !== "timer_values")}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      ${this._renderTimerValues()}
    `;
    }
    _renderTimerValues() {
        const timerValues = [
            {
                value: "15",
                label: "15"
            },
            {
                value: "30",
                label: "30"
            },
            {
                value: "45",
                label: "45"
            },
            {
                value: "60",
                label: "60"
            },
            {
                value: "75",
                label: "75"
            },
            {
                value: "90",
                label: "90"
            },
            {
                value: "105",
                label: "105"
            },
            {
                value: "120",
                label: "120"
            },
            {
                value: "135",
                label: "135"
            },
            {
                value: "150",
                label: "150"
            }
        ];
        const selectedValues = this._config.timer_values || [];
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <div class="timer-values-label">Timer Values (Minutes) (Optional)</div>
      <div class="timer-values">
        ${timerValues.map((option)=>(0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
            <label>
              <input
                type="checkbox"
                value="${option.value}"
                ?checked=${selectedValues.includes(option.value)}
                @change=${this._onTimerValueChanged}
              />
              ${option.label}
            </label>
          `)}
      </div>
    `;
    }
    _onTimerValueChanged(e) {
        const value = e.target.value;
        const checked = e.target.checked;
        const currentValues = this._config.timer_values || [];
        const updatedValues = checked ? [
            ...currentValues,
            value
        ] : currentValues.filter((v)=>v !== value);
        const sortedValues = updatedValues.sort((a, b)=>parseInt(a) - parseInt(b));
        this._valueChanged({
            detail: {
                value: {
                    ...this._config,
                    timer_values: sortedValues
                }
            }
        });
    }
    constructor(...args){
        super(...args), this._valueChanged = (ev)=>$577453a9cea28e00$var$fireEvent(this, "config-changed", {
                config: ev.detail.value
            }), this._computeLabelCallback = (schema)=>{
            const { name: name } = schema;
            switch(name){
                case "time_left":
                    return "Time Left Sensor (Optional)";
                case "sensor_1":
                    return "Sensor 1 - On state (Optional)";
                case "sensor_2":
                    return "Sensor 2 - On and Off state (Optional)";
                case "icon_sensor":
                    return "Icon Sensor (Optional)";
                default:
                    return `${this.hass.localize(`ui.panel.lovelace.editor.card.generic.${name}`)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;
            }
        };
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $577453a9cea28e00$export$1841dadb9ebd245b.prototype, "_config", void 0);


console.groupCollapsed(`%c SWITCHER-BOILER-CARD %c v${'1.2.0'}`, "color: white; background: #F54436; font-weight: bold", "color: #F54436; font-weight: bold"), console.log("Readme:", "https://github.com/dmatik/switcher-boiler-card"), console.groupEnd();
customElements.define("switcher-boiler-card", (0, $a5f7b08063ee5a98$export$f725446453aa0621));
customElements.define("switcher-boiler-card-editor", (0, $577453a9cea28e00$export$1841dadb9ebd245b));
const $3cdd6c5ae5618dfd$var$cardDef = {
    type: "switcher-boiler-card",
    name: "Switcher Boiler Card",
    description: "Custom Switcher Boiler Switch card for Home Assistant",
    preview: true,
    documentationURL: "https://github.com/dmatik/switcher-boiler-card",
    configurable: true
};
window.customCards = window.customCards || [];
window.customCards.push($3cdd6c5ae5618dfd$var$cardDef);


