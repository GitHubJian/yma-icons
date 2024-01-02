(() => {
    'use strict';
    var t,
        e = {
            85: (t, e, l) => {
                var n = l(538);
                const r = {
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
                var i = l(900);
                const s = (0, i.Z)(r, undefined, undefined, !1, null, null, null).exports,
                    o = {
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
                                l = {};
                            return (
                                this.gutter &&
                                    ((l.paddingLeft = this.gutter / 2 + 'px'), (l.paddingRight = l.paddingLeft)),
                                ['span', 'offset', 'pull', 'push'].forEach(t => {
                                    (this[t] || 0 === this[t]) &&
                                        e.push('span' !== t ? `x-col-${t}-${this[t]}` : `x-col-${this[t]}`);
                                }),
                                t(this.tag, {class: ['x-col', e], style: l}, this.$slots.default)
                            );
                        },
                    };
                const a = (0, i.Z)(o, undefined, undefined, !1, null, null, null).exports;
                const u = {
                    name: 'PeopleDouble',
                    props: {
                        size: {type: Number, default: 16},
                        group0: {type: String, default: 'black'},
                        group1: {type: String, default: 'red'},
                    },
                };
                const p = (0, i.Z)(
                    u,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            l = t._self._c || e;
                        return l('i', {staticClass: 'x-icon'}, [
                            l(
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
                                    l('g', {attrs: {id: 'group0', fill: t.group0}}, [
                                        l('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M108 152C69.8924 152 39 182.892 39 221C39 224.314 36.3137 227 33 227C29.6863 227 27 224.314 27 221C27 176.265 63.2649 140 108 140C152.735 140 189 176.265 189 221C189 224.314 186.314 227 183 227C179.686 227 177 224.314 177 221C177 182.892 146.108 152 108 152Z',
                                            },
                                        }),
                                        l('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M110 52C85.6995 52 66 71.6995 66 96C66 120.301 85.6995 140 110 140C134.301 140 154 120.301 154 96C154 71.6995 134.301 52 110 52ZM54 96C54 65.0721 79.0721 40 110 40C140.928 40 166 65.0721 166 96C166 126.928 140.928 152 110 152C79.0721 152 54 126.928 54 96Z',
                                            },
                                        }),
                                    ]),
                                    l('g', {attrs: {id: 'group1', fill: t.group1}}, [
                                        l('path', {
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
                const d = p;
                const c = {name: 'Invest', props: {size: {type: Number, default: 16}}};
                const f = (0, i.Z)(
                    c,
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('i', {staticClass: 'x-icon'}, [
                            e(
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
                                    e('path', {
                                        attrs: {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M124.5 54C110.505 54 99 65.5512 99 80C99 94.4488 110.505 106 124.5 106C138.495 106 150 94.4488 150 80C150 65.5512 138.495 54 124.5 54ZM87 80C87 59.1026 103.701 42 124.5 42C145.299 42 162 59.1026 162 80C162 100.897 145.299 118 124.5 118C103.701 118 87 100.897 87 80Z',
                                            fill: '#191919',
                                        },
                                    }),
                                    e('path', {
                                        attrs: {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M72.5 161C58.5055 161 47 172.551 47 187C47 201.449 58.5055 213 72.5 213C86.4945 213 98 201.449 98 187C98 172.551 86.4945 161 72.5 161ZM35 187C35 166.103 51.7006 149 72.5 149C93.2994 149 110 166.103 110 187C110 207.897 93.2994 225 72.5 225C51.7006 225 35 207.897 35 187Z',
                                            fill: '#191919',
                                        },
                                    }),
                                    e('path', {
                                        attrs: {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M176.5 161C162.505 161 151 172.551 151 187C151 201.449 162.505 213 176.5 213C190.495 213 202 201.449 202 187C202 172.551 190.495 161 176.5 161ZM139 187C139 166.103 155.701 149 176.5 149C197.299 149 214 166.103 214 187C214 207.897 197.299 225 176.5 225C155.701 225 139 207.897 139 187Z',
                                            fill: '#191919',
                                        },
                                    }),
                                    e('path', {
                                        attrs: {
                                            d: 'M83.3896 158.669C80.3588 156.963 79.2357 153.095 80.881 150.031L103.373 108.141C105.019 105.076 108.809 103.975 111.84 105.682C114.871 107.388 115.994 111.255 114.349 114.319L91.8565 156.21C90.2112 159.274 86.4205 160.375 83.3896 158.669Z',
                                            fill: '#191919',
                                        },
                                    }),
                                    e('path', {
                                        attrs: {
                                            d: 'M102 188C102 184.686 104.686 182 108 182H141C144.314 182 147 184.686 147 188C147 191.314 144.314 194 141 194H108C104.686 194 102 191.314 102 188Z',
                                            fill: '#191919',
                                        },
                                    }),
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
                f.install = function (t) {
                    t.component(f.name, f);
                };
                const C = f;
                const h = {name: 'Index', props: {size: {type: Number, default: 16}}};
                const g = (0, i.Z)(
                    h,
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('i', {staticClass: 'x-icon'}, [
                            e(
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
                                    e('path', {
                                        attrs: {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M131.807 38H137.807C190.614 38 229 80.8825 229 133C229 185.467 186.467 228 134 228C81.533 228 39 185.467 39 133V127H131.807V38ZM137.807 133C137.807 139 137.807 139 137.807 139H51.2135C54.288 182.039 90.178 216 134 216C179.84 216 217 178.84 217 133C217 88.8654 186.239 53.2935 143.807 50.2161V132.999C143.807 133 143.807 133 137.807 133ZM137.807 133L143.807 132.999V139H137.807L137.807 133Z',
                                            fill: 'black',
                                        },
                                    }),
                                    e('path', {
                                        attrs: {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M30 122H120.999C121 122 121 122 121 116L120.999 122H127V25H121C70.7421 25 30 65.7421 30 116V122ZM115 110H42.2244C45.1417 71.153 76.153 40.1417 115 37.2244V110Z',
                                            fill: 'black',
                                        },
                                    }),
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
                g.install = function (t) {
                    t.component(g.name, g);
                };
                const v = g;
                const m = {
                    name: 'File',
                    props: {size: {type: Number, default: 16}, group0: {type: String, default: 'black'}},
                };
                const x = (0, i.Z)(
                    m,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            l = t._self._c || e;
                        return l('i', {staticClass: 'x-icon'}, [
                            l(
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
                                    l('g', {attrs: {id: 'group0', fill: t.group0}}, [
                                        l('rect', {attrs: {x: '73', y: '98', width: '94', height: '12', rx: '6'}}),
                                        l('rect', {attrs: {x: '73', y: '128', width: '94', height: '12', rx: '6'}}),
                                        l('rect', {attrs: {x: '73', y: '158', width: '53', height: '12', rx: '6'}}),
                                        l('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M47 81C47 64.4315 60.4315 51 77 51H163C179.569 51 193 64.4315 193 81V224H77C60.4315 224 47 210.569 47 194V81ZM77 63C67.0589 63 59 71.0589 59 81V194C59 203.941 67.0589 212 77 212H181V81C181 71.0589 172.941 63 163 63H77Z',
                                            },
                                        }),
                                        l('path', {
                                            attrs: {
                                                'fill-rule': 'evenodd',
                                                'clip-rule': 'evenodd',
                                                d: 'M190 89C199.941 89 208 97.0589 208 107V194C208 203.941 199.941 212 190 212H184.25V224H190C206.569 224 220 210.569 220 194V107C220 90.4315 206.569 77 190 77H184.25V89H190Z',
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
                x.install = function (t) {
                    t.component(x.name, x);
                };
                const w = {name: 'App', components: {XRow: s, XCol: a, PeopleDouble: d, Invest: C, Index: v, File: x}};
                const y = (0, i.Z)(
                    w,
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e(
                            'x-row',
                            [
                                e('x-col', {attrs: {span: 4}}, [e('people-double')], 1),
                                e('x-col', {attrs: {span: 4}}, [e('invest')], 1),
                                e('x-col', {attrs: {span: 4}}, [e('index')], 1),
                                e('x-col', {attrs: {span: 4}}, [e('file')], 1),
                            ],
                            1,
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                ).exports;
                new n.Z({render: t => t(y)}).$mount('#app');
            },
        },
        l = {};
    function n(t) {
        var r = l[t];
        if (void 0 !== r) return r.exports;
        var i = (l[t] = {exports: {}});
        return e[t](i, i.exports, n), i.exports;
    }
    (n.m = e),
        (t = []),
        (n.O = (e, l, r, i) => {
            if (!l) {
                var s = 1 / 0;
                for (p = 0; p < t.length; p++) {
                    for (var [l, r, i] = t[p], o = !0, a = 0; a < l.length; a++)
                        (!1 & i || s >= i) && Object.keys(n.O).every(t => n.O[t](l[a]))
                            ? l.splice(a--, 1)
                            : ((o = !1), i < s && (s = i));
                    if (o) {
                        t.splice(p--, 1);
                        var u = r();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var p = t.length; p > 0 && t[p - 1][2] > i; p--) t[p] = t[p - 1];
            t[p] = [l, r, i];
        }),
        (n.d = (t, e) => {
            for (var l in e) n.o(e, l) && !n.o(t, l) && Object.defineProperty(t, l, {enumerable: !0, get: e[l]});
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
            var e = (e, l) => {
                    var r,
                        i,
                        [s, o, a] = l,
                        u = 0;
                    if (s.some(e => 0 !== t[e])) {
                        for (r in o) n.o(o, r) && (n.m[r] = o[r]);
                        if (a) var p = a(n);
                    }
                    for (e && e(l); u < s.length; u++) (i = s[u]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
                    return n.O(p);
                },
                l = (self.webpackChunkyma_icons = self.webpackChunkyma_icons || []);
            l.forEach(e.bind(null, 0)), (l.push = e.bind(null, l.push.bind(l)));
        })();
    var r = n.O(void 0, [216], () => n(85));
    r = n.O(r);
})();
