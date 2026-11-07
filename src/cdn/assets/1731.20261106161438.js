(globalThis.webpackChunk || = []).push([
    [1731], {
        50473(e, t, r) {
            r.d(t, {
                A: () => d
            });
            var a = r(8783);
            let l = ["min-height:none", "max-height:none", "height:0", "visibility:hidden", "overflow:hidden", "position:absolute", "z-index:-1000", "top:0", "right:0"].map(e => `${e}!important`).join(";"),
                i = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "padding-left", "padding-right", "border-width", "box-sizing"],
                s = function(e, t = null) {
                    let r, a, s, o, n = document.createElement("textarea");
                    document.body.append(n);
                    let {
                        paddingSize: c,
                        borderSize: d,
                        boxSizing: u,
                        sizingStyle: g
                    } = (a = (r = window.getComputedStyle(e)).getPropertyValue("box-sizing"), s = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), o = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), {
                        sizingStyle: i.map(e => `${e}:${r.getPropertyValue(e)}`).join(";"),
                        paddingSize: s,
                        borderSize: o,
                        boxSizing: a
                    });
                    n.setAttribute("style", `${g};${l}`), n.value = e.value || e.placeholder || "";
                    let p = -1 / 0,
                        m = n.scrollHeight;
                    return "border-box" === u ? m += d : "content-box" === u && (m -= c), null !== t && (n.value = "", p = (n.scrollHeight - c) * t, "border-box" === u && (p = p + c + d), m = Math.max(p, m)), n.remove(), m
                };
            var o = r(56728),
                n = r(5953),
                c = r(6312);
            r.p, r.p;
            let d = e => {
                let t, r, l, i, d, u, {
                        error: g,
                        readOnly: p,
                        isShowCounter: m,
                        maxAllowedLength: _,
                        placeholder: f,
                        value: v,
                        color: x = "dark",
                        onChange: k,
                        onBlur: w,
                        minRows: N,
                        maxHeight: b,
                        onFocus: y,
                        onKeyDown: z,
                        id: E,
                        entities: P,
                        onResetError: F
                    } = e,
                    T = (0, a.li)(null),
                    C = (0, a.li)(null),
                    V = (0, a.li)(0),
                    $ = (0, a.li)(null),
                    [J, S] = (0, a.J0)(!1),
                    W = !!P ? .length && !J,
                    A = (0, a.Kr)(() => (0, o.sg)(() => {
                        if (!T.current) return;
                        let e = s(T.current, N);
                        b && e > b ? (e = b, T.current.style.overflowY = "auto") : T.current.style.overflowY = "hidden", V.current = e, T.current.style.height = `${e}px`
                    }, 30), [N, b]);
                (0, a.vJ)(() => {
                    let e = (0, c.QW)(A);
                    return () => {
                        e(), A.cancel()
                    }
                }, []), (0, a.vJ)(() => {
                    A()
                }, [v, W]), (0, a.vJ)(() => {
                    S(!1)
                }, [P]), (0, a.vJ)(() => {
                    let e = $.current;
                    !W && null !== e && T.current && ($.current = null, T.current.focus(), T.current.setSelectionRange(e, e))
                }, [W]);
                let U = !!f && "string" != typeof f;
                (0, a.vJ)(() => {
                    if (!U || W) return;
                    let e = C.current,
                        t = setInterval(() => {
                            e.hidden = !!T.current.value
                        }, 100);
                    return () => {
                        clearInterval(t)
                    }
                }, [U, W]);
                let K = (0, n.xW)("textarea__field", "textarea-autosize", {
                    "textarea-autosize--error": !!g,
                    "textarea--counter": !!m,
                    "textarea__field--error": !!g,
                    [`textarea__field--color--${x}`]: !0,
                    "textarea__field--size--small": !0
                });
                return h("div", {
                    className: "textarea-autosize-wrapper"
                }, W ? h("div", {
                    id: E,
                    className: (0, n.xW)(K, "textarea-autosize--highlight"),
                    style: {
                        height: V.current ? `${V.current}px` : void 0
                    },
                    onClick: e => {
                        e.preventDefault(), e.stopPropagation(), $.current = ((e, t, r) => {
                            let a = document,
                                l = null,
                                i = 0;
                            if (a.caretPositionFromPoint) {
                                let e = a.caretPositionFromPoint(t, r);
                                l = e ? .offsetNode || null, i = e ? .offset || 0
                            } else if (a.caretRangeFromPoint) {
                                let e = a.caretRangeFromPoint(t, r);
                                l = e ? .startContainer || null, i = e ? .startOffset || 0
                            }
                            if (!l || l.nodeType !== Node.TEXT_NODE || !e.contains(l)) return null;
                            let s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
                                o = 0;
                            for (; s.nextNode();) {
                                if (s.currentNode === l) return o + i;
                                o += s.currentNode.textContent.length
                            }
                            return null
                        })(e.currentTarget, e.nativeEvent.clientX, e.nativeEvent.clientY) ? ? v.length, S(!0), F ? .()
                    }
                }, (t = [0], r = 0, (v.match(/[\s\S]/gu) || []).forEach(e => {
                    r += e.length, t.push(r)
                }), l = e => t[Math.max(0, Math.min(e, t.length - 1))], i = P.map(({
                    start: e,
                    end: t
                }) => ({
                    start: l(e),
                    end: l(t)
                })).filter(({
                    start: e,
                    end: t
                }) => t > e).sort((e, t) => e.start - t.start), d = [], u = 0, i.forEach(({
                    start: e,
                    end: t
                }) => {
                    if (t <= u) return;
                    let r = Math.max(e, u);
                    r > u && d.push({
                        text: v.slice(u, r),
                        isError: !1
                    }), d.push({
                        text: v.slice(r, t),
                        isError: !0
                    }), u = t
                }), u < v.length && d.push({
                    text: v.slice(u),
                    isError: !1
                }), d).map((e, t) => e.isError ? h("span", {
                    className: "textarea-autosize__highlight-entity",
                    key: t
                }, e.text) : h(a.FK, {
                    key: t
                }, e.text))) : h("textarea", {
                    id: E,
                    className: (0, n.xW)(K, {
                        error: !!g
                    }),
                    onChange: k,
                    onBlur: w,
                    onFocus: y,
                    onKeyDown: z,
                    readOnly: p,
                    placeholder: "string" == typeof f ? f : f ? "" : void 0,
                    value: v,
                    ref: T
                }), U && !W && h("div", {
                    className: "textarea-autosize__placeholder",
                    ref: C,
                    hidden: !0
                }, f), !!g && h("span", {
                    className: "textarea-autosize__error"
                }, g), !!m && !!_ && h("span", {
                    className: (0, n.xW)("textarea-autosize__counter", {
                        "error-message": v.length > _
                    })
                }, _ - v.length))
            }
        },
        11162(e, t, r) {
            r.d(t, {
                X: () => o,
                A: () => n
            });
            var a = r(62555),
                l = r(5953),
                i = r(45185);
            r.p;
            let s = (0, l.Tu)("a"),
                o = ({
                    text: e,
                    icon: t,
                    theme: r
                }) => h("div", {
                    className: s("tag", {
                        theme: r
                    })
                }, t && h(a.Uv, {
                    img: t,
                    size: 12
                }), e && h("span", {
                    className: "no-wrap"
                }, e)),
                n = e => {
                    let {
                        icon: t,
                        isSelected: r,
                        onClick: l,
                        title: n,
                        description: c,
                        tags: d,
                        renderTags: u,
                        as: g,
                        price: p,
                        showPrice: m = !0,
                        isDisabled: _
                    } = e, f = d && !!d.length || !!u, v = f || m;
                    return h(g || "li", {
                        className: s({
                            selected: r,
                            disabled: _
                        }),
                        onClick: r || _ ? void 0 : () => l ? .()
                    }, r && h("div", {
                        className: s("check")
                    }, h(a.Uv, {
                        img: "check",
                        size: 16
                    })), t && h("div", {
                        className: s("left")
                    }, h("div", {
                        className: s("icon")
                    }, h(a.Uv, {
                        img: t,
                        size: 20
                    }))), h("div", {
                        className: s("right")
                    }, h("div", {
                        className: s("title")
                    }, n), c ? h("p", {
                        className: s("description")
                    }, c) : h("div", {
                        className: "spacer-small"
                    }), v && h("div", {
                        className: s("footer")
                    }, f && h("div", {
                        className: s("tags")
                    }, u ? u() : d ? .map((e, t) => h(o, {
                        key: t,
                        text: (0, i.pw)(e[0]),
                        icon: e[1],
                        theme: e[2]
                    }))), m && h("div", {
                        className: s("price")
                    }, h(a.Uv, {
                        img: "chip-single",
                        size: 16
                    }), p || (0, i.pw)(0)))))
                }
        },
        25002(e, t, r) {
            r.d(t, ["cE", 0, {
                ls_lite_sfw: [
                    [17, "chat-dots"],
                    [18, "characters"]
                ],
                ls_lite_nsfw: [
                    [17, "chat-dots"],
                    [18, "characters"]
                ],
                ls_pro_nsfw: [
                    [17, "chat-dots"],
                    [19, "magic-post"]
                ],
                ls_pro_sfw: [
                    [17, "chat-dots"],
                    [20, "earth"]
                ],
                harbinger_24b: [
                    [17, "chat-dots"]
                ],
                grok_3: [
                    [17, "chat-dots"],
                    [18, "characters"]
                ],
                grok_4: [
                    [17, "chat-dots"],
                    [18, "characters"]
                ],
                kimi_k2: [
                    [21, "lamp-fill"],
                    [18, "characters"]
                ]
            }, "hU", 0, {
                ls_lite_sfw: 1,
                ls_lite_nsfw: 2,
                ls_pro_nsfw: 3,
                ls_pro_sfw: 4,
                harbinger_24b: 5,
                grok_3: 6,
                grok_4: 7,
                kimi_k2: 8
            }, "hk", 0, {
                ls_lite_sfw: 9,
                ls_lite_nsfw: 10,
                ls_pro_nsfw: 11,
                ls_pro_sfw: 12,
                harbinger_24b: 13,
                grok_3: 14,
                grok_4: 15,
                kimi_k2: 16
            }, "q5", 0, {
                ls_lite_sfw: "logo-heart",
                ls_lite_nsfw: "logo-heart",
                ls_pro_nsfw: "logo-heart",
                ls_pro_sfw: "logo-heart",
                harbinger_24b: "logo-heart",
                grok_3: "grok",
                grok_4: "grok",
                kimi_k2: "kimi"
            }])
        },
        5025(e, t, r) {
            r.d(t, {
                A: () => m
            });
            var a = r(8783),
                l = r(5953),
                i = r(52187),
                s = r(45185),
                o = r(39063),
                n = r(28550),
                c = r(11162),
                d = r(25002),
                u = r(15698),
                g = r(12839);
            r.p;
            let p = (0, l.Tu)("b"),
                m = e => {
                    let {
                        onClick: t,
                        value: r,
                        isSfw: l,
                        llmIds: m
                    } = e, _ = (0, g.f7)((0, o.Vm)()), f = (0, n.s5)((0, o.Vm)()), v = (0, a.Kr)(() => {
                        let e = (0, n.s5)((0, o.Vm)());
                        return e ? .filter(e => (!m || m.includes(e.id)) && e.safetyLevel === (i.eC || l ? "safe" : "nude"))
                    }, [l, m]), x = !v ? .length, k = f ? .find(e => e.id === r);
                    if (x && !k) return null;
                    let w = e => {
                        let l = e.id,
                            i = r === l,
                            o = _ ? .[l];
                        return h(c.A, {
                            key: l,
                            icon: d.q5[l],
                            title: h("div", {
                                className: "flex-align-left",
                                style: {
                                    gap: "8px"
                                }
                            }, (0, s.pm)(d.hU[l]), e.tier && h(a.FK, null, "pro" === e.tier ? h(u.c6, null) : h(u.AN, null))),
                            description: (0, s.pm)(d.hk[l]),
                            isSelected: i,
                            tags: d.cE[l],
                            onClick: t && (() => t(l)),
                            price: o && h("span", {
                                className: "white-color-text"
                            }, (0, s.JX)(22, {
                                value: String(o)
                            }))
                        })
                    };
                    return h("ul", {
                        className: p()
                    }, x && k && w(k), v ? .map(w))
                }
        }
    }
]);