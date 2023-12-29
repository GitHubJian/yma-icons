(() => {
    var e,
        t = {
            738: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, {default: () => u});
                var r = n(251),
                    o = n.n(r),
                    l = n(552),
                    s = n.n(l),
                    i = new (o())({
                        id: 'people-double',
                        use: 'people-double-usage',
                        viewBox: '0 0 256 256',
                        content:
                            '<symbol viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" id="people-double">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M108 152C69.8924 152 39 182.892 39 221C39 224.314 36.3137 227 33 227C29.6863 227 27 224.314 27 221C27 176.265 63.2649 140 108 140C152.735 140 189 176.265 189 221C189 224.314 186.314 227 183 227C179.686 227 177 224.314 177 221C177 182.892 146.108 152 108 152Z" fill="black" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M110 52C85.6995 52 66 71.6995 66 96C66 120.301 85.6995 140 110 140C134.301 140 154 120.301 154 96C154 71.6995 134.301 52 110 52ZM54 96C54 65.0721 79.0721 40 110 40C140.928 40 166 65.0721 166 96C166 126.928 140.928 152 110 152C79.0721 152 54 126.928 54 96Z" fill="black" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M167.5 62C164.186 62 161.5 64.6863 161.5 68C161.5 71.3137 164.186 74 167.5 74C184.897 74 199 88.103 199 105.5C199 122.897 184.897 137 167.5 137C167.381 137 167.262 137.003 167.145 137.01C166.764 137.003 166.382 137 166 137C162.686 137 160 139.686 160 143C160 146.314 162.686 149 166 149C193.614 149 216 171.386 216 199C216 202.314 218.686 205 222 205C225.314 205 228 202.314 228 199C228 173.605 212.732 151.777 190.876 142.192C202.976 134.467 211 120.921 211 105.5C211 81.4756 191.524 62 167.5 62Z" fill="black" />\n</symbol>',
                    });
                s().add(i);
                const u = i;
            },
            134: (e, t, n) => {
                const r = n(378);
                var o;
                (o = r).keys().map(o);
            },
            188: (e, t, n) => {
                'use strict';
                n(134);
                const r = {
                    name: 'XIcon',
                    props: {name: String, isCover: Boolean},
                    computed: {
                        href() {
                            return `#${this.name}`;
                        },
                    },
                };
                var o = n(103);
                const l = (0, o.Z)(
                    r,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n('span', {class: {'x-icon': !0, 'is-cover': e.isCover}}, [
                            n('svg', {staticClass: 'x-icon__inner'}, [n('use', {attrs: {'xlink:href': e.href}})]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                ).exports;
                l.install = function (e) {
                    e.component(l.name, l);
                };
                const s = l;
                var i = n(538);
                const u = {
                    name: 'XRow',
                    componentName: 'XRow',
                    props: {
                        tag: {type: String, default: 'div'},
                        gutter: Number,
                        type: String,
                        justify: {type: String, default: 'start'},
                        align: String,
                    },
                    computed: {
                        style() {
                            const e = {};
                            return (
                                this.gutter &&
                                    ((e.marginLeft = `-${this.gutter / 2}px`), (e.marginRight = e.marginLeft)),
                                e
                            );
                        },
                    },
                    render(e) {
                        return e(
                            this.tag,
                            {
                                class: [
                                    'x-row',
                                    'start' !== this.justify ? `is-justify-${this.justify}` : '',
                                    this.align ? `is-align-${this.align}` : '',
                                    {'x-row--flex': 'flex' === this.type},
                                ],
                                style: this.style,
                            },
                            this.$slots.default,
                        );
                    },
                };
                const a = (0, o.Z)(u, undefined, undefined, !1, null, null, null).exports,
                    p = {
                        name: 'XCol',
                        props: {
                            span: {type: Number, default: 24},
                            tag: {type: String, default: 'div'},
                            offset: Number,
                            pull: Number,
                            push: Number,
                        },
                        computed: {
                            gutter() {
                                let e = this.$parent;
                                for (; e && 'XRow' !== e.$options.componentName; ) e = e.$parent;
                                return e ? e.gutter : 0;
                            },
                        },
                        render(e) {
                            let t = [],
                                n = {};
                            return (
                                this.gutter &&
                                    ((n.paddingLeft = this.gutter / 2 + 'px'), (n.paddingRight = n.paddingLeft)),
                                ['span', 'offset', 'pull', 'push'].forEach(e => {
                                    (this[e] || 0 === this[e]) &&
                                        t.push('span' !== e ? `x-col-${e}-${this[e]}` : `x-col-${this[e]}`);
                                }),
                                e(this.tag, {class: ['x-col', t], style: n}, this.$slots.default)
                            );
                        },
                    };
                const d = {
                    name: 'App',
                    components: {XRow: a, XCol: (0, o.Z)(p, undefined, undefined, !1, null, null, null).exports},
                };
                const c = (0, o.Z)(
                    d,
                    function () {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t('x-row', [t('x-col', [t('x-icon', {attrs: {name: 'people-double'}})], 1)], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                ).exports;
                i.Z.use(s), new i.Z({render: e => e(c)}).$mount('#app');
            },
            378: (e, t, n) => {
                var r = {'./people-double.svg': 738};
                function o(e) {
                    var t = l(e);
                    return n(t);
                }
                function l(e) {
                    if (!n.o(r, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    }
                    return r[e];
                }
                (o.keys = function () {
                    return Object.keys(r);
                }),
                    (o.resolve = l),
                    (e.exports = o),
                    (o.id = 378);
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var l = (n[e] = {exports: {}});
        return t[e].call(l.exports, l, l.exports, r), l.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, l) => {
            if (!n) {
                var s = 1 / 0;
                for (p = 0; p < e.length; p++) {
                    for (var [n, o, l] = e[p], i = !0, u = 0; u < n.length; u++)
                        (!1 & l || s >= l) && Object.keys(r.O).every(e => r.O[e](n[u]))
                            ? n.splice(u--, 1)
                            : ((i = !1), l < s && (s = l));
                    if (i) {
                        e.splice(p--, 1);
                        var a = o();
                        void 0 !== a && (t = a);
                    }
                }
                return t;
            }
            l = l || 0;
            for (var p = e.length; p > 0 && e[p - 1][2] > l; p--) e[p] = e[p - 1];
            e[p] = [n, o, l];
        }),
        (r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {a: t}), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = e => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(e, '__esModule', {value: !0});
        }),
        (() => {
            var e = {826: 0};
            r.O.j = t => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        l,
                        [s, i, u] = n,
                        a = 0;
                    if (s.some(t => 0 !== e[t])) {
                        for (o in i) r.o(i, o) && (r.m[o] = i[o]);
                        if (u) var p = u(r);
                    }
                    for (t && t(n); a < s.length; a++) (l = s[a]), r.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
                    return r.O(p);
                },
                n = (self.webpackChunkyma_icons = self.webpackChunkyma_icons || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [216], () => r(188));
    o = r.O(o);
})();
