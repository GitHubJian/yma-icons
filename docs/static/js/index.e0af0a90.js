(() => {
    'use strict';
    var t,
        e = {
            336: (t, e, r) => {
                var n = r(538);
                const l = {
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
                            const t = {};
                            return (
                                this.gutter &&
                                    ((t.marginLeft = `-${this.gutter / 2}px`), (t.marginRight = t.marginLeft)),
                                t
                            );
                        },
                    },
                    render(t) {
                        return t(
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
                var o = r(103);
                const i = (0, o.Z)(l, undefined, undefined, !1, null, null, null).exports,
                    s = {
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
                                let t = this.$parent;
                                for (; t && 'XRow' !== t.$options.componentName; ) t = t.$parent;
                                return t ? t.gutter : 0;
                            },
                        },
                        render(t) {
                            let e = [],
                                r = {};
                            return (
                                this.gutter &&
                                    ((r.paddingLeft = this.gutter / 2 + 'px'), (r.paddingRight = r.paddingLeft)),
                                ['span', 'offset', 'pull', 'push'].forEach(t => {
                                    (this[t] || 0 === this[t]) &&
                                        e.push('span' !== t ? `x-col-${t}-${this[t]}` : `x-col-${this[t]}`);
                                }),
                                t(this.tag, {class: ['x-col', e], style: r}, this.$slots.default)
                            );
                        },
                    };
                const u = (0, o.Z)(s, undefined, undefined, !1, null, null, null).exports;
                const a = {
                    name: 'PeopleDouble',
                    props: {
                        size: {type: Number, default: 16},
                        group0: {type: String, default: 'black'},
                        group1: {type: String, default: 'red'},
                    },
                };
                const p = (0, o.Z)(
                    a,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            r = t._self._c || e;
                        return r('i', {staticClass: 'x-icon'}, [
                            r(
                                'svg',
                                {
                                    attrs: {
                                        width: '256',
                                        height: '256',
                                        viewBox: '0 0 256 256',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                    },
                                },
                                [
                                    r('g', {attrs: {id: 'group0', fill: t.group0}}, [
                                        r('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M108 152C69.8924 152 39 182.892 39 221C39 224.314 36.3137 227 33 227C29.6863 227 27 224.314 27 221C27 176.265 63.2649 140 108 140C152.735 140 189 176.265 189 221C189 224.314 186.314 227 183 227C179.686 227 177 224.314 177 221C177 182.892 146.108 152 108 152Z',
                                            },
                                        }),
                                        r('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M110 52C85.6995 52 66 71.6995 66 96C66 120.301 85.6995 140 110 140C134.301 140 154 120.301 154 96C154 71.6995 134.301 52 110 52ZM54 96C54 65.0721 79.0721 40 110 40C140.928 40 166 65.0721 166 96C166 126.928 140.928 152 110 152C79.0721 152 54 126.928 54 96Z',
                                            },
                                        }),
                                    ]),
                                    r('g', {attrs: {id: 'group1', fill: t.group1}}, [
                                        r('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M167.5 62C164.186 62 161.5 64.6863 161.5 68C161.5 71.3137 164.186 74 167.5 74C184.897 74 199 88.103 199 105.5C199 122.897 184.897 137 167.5 137C167.381 137 167.262 137.003 167.145 137.01C166.764 137.003 166.382 137 166 137C162.686 137 160 139.686 160 143C160 146.314 162.686 149 166 149C193.614 149 216 171.386 216 199C216 202.314 218.686 205 222 205C225.314 205 228 202.314 228 199C228 173.605 212.732 151.777 190.876 142.192C202.976 134.467 211 120.921 211 105.5C211 81.4756 191.524 62 167.5 62Z',
                                            },
                                        }),
                                    ]),
                                ],
                            ),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                ).exports;
                p.install = function (t) {
                    t.component(p.name, p);
                };
                const f = {name: 'App', components: {XRow: i, XCol: u, PeopleDouble: p}};
                const d = (0, o.Z)(
                    f,
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('x-row', [e('x-col', {attrs: {span: 4}}, [e('people-double')], 1)], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                ).exports;
                new n.Z({render: t => t(d)}).$mount('#app');
            },
        },
        r = {};
    function n(t) {
        var l = r[t];
        if (void 0 !== l) return l.exports;
        var o = (r[t] = {exports: {}});
        return e[t](o, o.exports, n), o.exports;
    }
    (n.m = e),
        (t = []),
        (n.O = (e, r, l, o) => {
            if (!r) {
                var i = 1 / 0;
                for (p = 0; p < t.length; p++) {
                    for (var [r, l, o] = t[p], s = !0, u = 0; u < r.length; u++)
                        (!1 & o || i >= o) && Object.keys(n.O).every(t => n.O[t](r[u]))
                            ? r.splice(u--, 1)
                            : ((s = !1), o < i && (i = o));
                    if (s) {
                        t.splice(p--, 1);
                        var a = l();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var p = t.length; p > 0 && t[p - 1][2] > o; p--) t[p] = t[p - 1];
            t[p] = [r, l, o];
        }),
        (n.d = (t, e) => {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]});
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (t) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (() => {
            var t = {826: 0};
            n.O.j = e => 0 === t[e];
            var e = (e, r) => {
                    var l,
                        o,
                        [i, s, u] = r,
                        a = 0;
                    if (i.some(e => 0 !== t[e])) {
                        for (l in s) n.o(s, l) && (n.m[l] = s[l]);
                        if (u) var p = u(n);
                    }
                    for (e && e(r); a < i.length; a++) (o = i[a]), n.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
                    return n.O(p);
                },
                r = (self.webpackChunkyma_icons = self.webpackChunkyma_icons || []);
            r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
        })();
    var l = n.O(void 0, [216], () => n(336));
    l = n.O(l);
})();
