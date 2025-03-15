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





var $33020eb3f734156e$export$2e2bcd8739ae039 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`

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
    }

`;


console.groupCollapsed(`%c SWITCHER-BOILER-CARD %c v${'1.1.4'}`, "color: white; background: #F54436; font-weight: bold", "color: #F54436; font-weight: bold"), console.log("Readme:", "https://github.com/dmatik/switcher-boiler-card"), console.groupEnd();
class $64502b443e348d54$export$f725446453aa0621 extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static styles = (0, $33020eb3f734156e$export$2e2bcd8739ae039);
    static properties = {
        hass: {},
        config: {},
        timerValue: {
            type: String
        }
    };
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
        //const entityId = this.config.entity;
        if (!entityId) return;
        const moreInfoevent = new Event("hass-more-info", {
            bubbles: true,
            cancelable: true,
            composed: true
        });
        moreInfoevent.detail = {
            entityId: entityId
        };
        this.dispatchEvent(moreInfoevent);
    }
    isDarkTheme() {
        return this.hass.themes.darkMode;
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




var $440f0bfcb1a300d2$export$2e2bcd8739ae039 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`

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


const $afaa2a99d93573a7$var$SCHEMA = [
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
const $afaa2a99d93573a7$var$fireEvent = (node, type, detail, options)=>{
    options = options || {};
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};
class $afaa2a99d93573a7$export$1841dadb9ebd245b extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static styles = (0, $440f0bfcb1a300d2$export$2e2bcd8739ae039);
    static properties = {
        hass: {},
        _config: {}
    };
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
        .schema=${$afaa2a99d93573a7$var$SCHEMA.filter((field)=>field.name !== "timer_values")}
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
    _valueChanged = (ev)=>$afaa2a99d93573a7$var$fireEvent(this, "config-changed", {
            config: ev.detail.value
        });
    _computeLabelCallback = (schema)=>{
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


customElements.define("switcher-boiler-card", (0, $64502b443e348d54$export$f725446453aa0621));
customElements.define("switcher-boiler-card-editor", (0, $afaa2a99d93573a7$export$1841dadb9ebd245b));
const $5b8472df96c6a1cc$var$cardDef = {
    type: "switcher-boiler-card",
    name: "Switcher Boiler Card",
    description: "Custom Switcher Boiler Switch card for Home Assistant",
    preview: true,
    documentationURL: "https://github.com/dmatik/switcher-boiler-card",
    configurable: true
};
window.customCards = window.customCards || [];
window.customCards.push($5b8472df96c6a1cc$var$cardDef);


