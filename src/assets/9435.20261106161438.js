(globalThis.webpackChunk || = []).push([
    [9435], {
        67654(e, t, r) {
            var n = r(8783);
            r.d(t, ["Y", 0, () => {
                let e = n.li(!0);
                return n.vJ(() => () => {
                    e.current = !1
                }, []), e
            }])
        },
        55964(e, t, r) {
            var n = r(40416);
            r.d(t, ["Y", 0, e => {
                n.K("mini-modal", e)
            }])
        },
        92948(e, t, r) {
            var n = r(8783),
                i = r(76874),
                o = r(5953);
            let a = !1,
                l = (e, t) => (e.style.pointerEvents = "none", o.Wv(e, [{
                    transform: "translateY(0)",
                    opacity: 1
                }, {
                    transform: `translateY(${t?"100%":"30px"})`,
                    opacity: 0
                }], {
                    duration: 300,
                    composite: "replace",
                    easing: "ease"
                })),
                s = (e, t, r) => {
                    e.style.pointerEvents = "none";
                    let n = "relative-top" === r || t ? [{
                        transform: `translateY(${t?"100%":"30px"})`,
                        opacity: 0
                    }, {
                        transform: "translateY(0)",
                        opacity: 1
                    }] : [{
                        transform: "translateY(-30px)",
                        opacity: 0
                    }, {
                        transform: "translateY(0)",
                        opacity: 1
                    }];
                    return o.Wv(e, n, {
                        duration: 300,
                        composite: "replace",
                        easing: "ease"
                    }).then(() => {
                        e.style.pointerEvents = "auto"
                    })
                };
            r.d(t, ["XW", 0, l, "qs", 0, s, "wz", 0, e => {
                let t = n.li(!1),
                    {
                        isEnabled: r,
                        isMobile: o,
                        refWrapper: d,
                        position: c,
                        xPosition: u,
                        targetRef: p,
                        isVisible: m,
                        isCloseClickOutside: g,
                        onClose: v
                    } = e,
                    y = () => {
                        if (a) return;
                        let e = d.current;
                        e ? (a = !0, l(e, o).then(() => {
                            a = !1, v()
                        })) : v()
                    };
                return n.vJ(() => {
                    if (!r || "center" === c) return;
                    let e = d.current;
                    if (!e) return;
                    let n = e.getBoundingClientRect(),
                        i = p ? .current ? .getBoundingClientRect();
                    if (!o)
                        if ("relative-bottom" === c && i) {
                            e.style.top = `${i.bottom+window.scrollY+10}px`;
                            let t = ("left" === u ? i.right - e.offsetWidth : i.left) + window.scrollX;
                            e.style.left = `${t}px`
                        } else if ("relative-top" === c && i) {
                        e.style.top = `${i.top+window.scrollY-e.offsetHeight-10}px`;
                        let t = i.left + window.scrollX;
                        e.style.left = `${t}px`
                    } else n.right > window.innerWidth + window.scrollX || "left" === u && i && i.right > n.width ? (e.style.right = "0", e.style.left = "auto") : (e.style.left = "0", e.style.right = "auto");
                    return s(e, o, c).then(() => {
                        t.current = !0
                    }), () => {
                        a = !1
                    }
                }, [m, o, r]), i.L({
                    isDisabled: !r || !g || o,
                    target: d,
                    onClickOutside: y,
                    eventType: "mousedown"
                }), {
                    hideAnimation: y,
                    isOverlayCloseEnabled: t.current
                }
            }])
        },
        11223(e, t, r) {
            var n = r(8783),
                i = r(5953),
                o = r(6312);
            r.d(t, ["f", 0, (e, {
                autoUnsubscribe: t,
                ignoreForms: r
            } = {}) => {
                n.vJ(() => {
                    if (!e) return;
                    let n = o.pu(o => {
                        "Escape" !== o.code || !r && i.jk() || (t && n(), e(o))
                    }, {
                        passive: !0
                    });
                    return () => {
                        n()
                    }
                }, [!e, !r])
            }])
        },
        19531(e, t, r) {
            r(35053);
            var n = r(5953);
            r.d(t, ["DC", 0, async (e, t) => {
                if (e) {
                    let r = n.Wv(e, [{
                            opacity: 1,
                            transform: "scale(1)"
                        }, {
                            opacity: 0,
                            transform: "scale(0.7)"
                        }], {
                            duration: 500,
                            easing: "ease",
                            composite: "replace"
                        }),
                        i = t || e.parentNode.querySelector(".modal-ds-overlay__background");
                    return i && n.Wv(i, [{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        duration: 500,
                        easing: "ease",
                        composite: "replace"
                    }), r.then(() => !0)
                }
                return !1
            }])
        },
        88099(e, t, r) {
            var n = r(39063),
                i = r(29788),
                o = r(5616),
                a = r(91654),
                l = r(82562),
                s = r(37421);
            r.d(t, ["F", 0, (e, t, r) => {
                let d = () => {
                    l.I9([e]), a.V7({
                        type: "report",
                        triggerSource: r,
                        userId: e,
                        guestId: i.Cn(n.Vm()),
                        source: t
                    })
                };
                if (!s.WR(n.Vm())) return o.Bp({
                    onSuccess: () => {
                        setTimeout(d, 300)
                    },
                    triggerModal: "signup",
                    triggerSource: r
                });
                d()
            }])
        },
        12025(e, t, r) {
            r.d(t, {
                A: () => b
            });
            var n = r(8783),
                i = r(50622),
                o = r(2826),
                a = r(55964),
                l = r(92948),
                s = r(11223),
                d = r(19531),
                c = r(5953),
                u = r(35690),
                p = r(39063),
                m = r(14260),
                g = r(11050);
            r.p;
            let v = (0, c.Tu)("cy"),
                y = (e, t) => !!e ? .length && h("div", {
                    className: v("buttons", {
                        spaced: !!t
                    })
                }, e.map((e, r) => h("button", {
                    key: r,
                    className: v("button", {
                        style: e.type || "regular",
                        background: !!t && "regular"
                    }),
                    onClick: e.onClick,
                    disabled: e.isDisabled
                }, e.isLoading ? h(o.d, {
                    size: 24,
                    color: "none"
                }) : e.content))),
                f = e => {
                    let {
                        innerButtons: t,
                        externalButtons: r,
                        targetRef: i,
                        onClose: o,
                        children: d
                    } = e, c = (0, m.d)(g.M$);
                    return (0, s.f)(o), (0, a.Y)(c), (0, n.vJ)(() => {
                        c && (0, l.qs)(i.current, !0)
                    }, []), h("section", {
                        className: v()
                    }, h("div", {
                        className: v("overlay")
                    }), h("dialog", {
                        open: !0,
                        ref: i,
                        className: v("modal", {
                            mobile: c
                        })
                    }, h("div", {
                        className: v("content")
                    }, !!d && h("h3", {
                        className: v("title")
                    }, d), y(t)), y(r, !0)))
                },
                b = e => {
                    let t = (0, n.li)(null),
                        {
                            current: r
                        } = (0, n.li)({
                            title: null,
                            innerButtons: null,
                            externalButtons: null
                        }),
                        {
                            children: o,
                            isVisible: a,
                            externalButtons: s,
                            innerButtons: c,
                            onClose: m
                        } = e,
                        [v, y] = (0, n.J0)(!a);
                    return ((0, i.C)(() => {
                        a ? y(!1) : t.current && ((0, g.M$)((0, p.Vm)()) ? (0, l.XW)(t.current, !0).then(() => y(!0)) : (0, d.DC)(t.current, t.current.previousElementSibling).then(() => y(!0)))
                    }, [a]), v) ? null : (a && (r.title = o, r.externalButtons = s || null, r.innerButtons = c || null), (0, u.O)(h(f, {
                        externalButtons: r.externalButtons,
                        innerButtons: r.innerButtons,
                        targetRef: t,
                        onClose: m
                    }, r.title)))
                }
        },
        25122(e, t, r) {
            var n = r(8783),
                i = r(62555),
                o = r(14260),
                a = r(12025),
                l = r(97259),
                s = r(5955);
            let d = (e, t, r, n) => e ? .map((e, i) => ({
                    isDisabled: e.isDisabled,
                    content: e.content,
                    type: e.type,
                    isLoading: !!(r[i] || e.isLoading),
                    onClick: r => {
                        let o = e.onClick ? .(r);
                        if (o instanceof Promise) return n(i, !0), o.then(() => {
                            e.isClose && t()
                        }).finally(() => n(i, !1));
                        e.isClose && t()
                    }
                })),
                c = e => {
                    let {
                        externalButtons: t,
                        innerButtons: r,
                        title: i,
                        isInitialVisible: o
                    } = e, [l, s] = n.J0(!!o), c = n.hb(() => s(!1), []), u = n.hb(() => s(!0), []), [p, m] = n.J0({}), [g, v] = n.J0({}), y = d(t, c, p, (e, t) => m(r => ({ ...r,
                        [e]: t
                    }))), f = d(r, c, g, (e, t) => v(r => ({ ...r,
                        [e]: t
                    })));
                    return [h(a.A, {
                        isVisible: l,
                        externalButtons: y,
                        innerButtons: f,
                        onClose: c
                    }, i), u, c]
                };
            r.d(t, ["Qr", 0, e => {
                let {
                    icon: t,
                    title: r,
                    ...o
                } = e;
                return c({ ...o,
                    title: h(n.FK, null, h("div", {
                        className: "flex-align-center"
                    }, h(i.Uv, {
                        img: t,
                        size: 48
                    })), h("div", {
                        className: "spacer-10"
                    }), r)
                })
            }, "p", 0, c, "uN", 0, e => {
                let {
                    userId: t,
                    title: r,
                    ...i
                } = e, a = o.d(e => t && s.kl(e, t));
                return c({ ...i,
                    title: h(n.FK, null, a && h("div", {
                        className: "cy__user"
                    }, h(l.Ay, {
                        user: a,
                        size: 60
                    })), r)
                })
            }])
        },
        7452(e, t, r) {
            var n = r(31079),
                i = r(86105),
                o = r(22062),
                a = r(2384),
                l = r(69656);
            let s = e => {
                i.A.reset(), l.Pj(), n.UZ(e)
            };
            r.d(t, ["Dn", 0, e => {
                let {
                    mediaId: t,
                    videoGenerationModel: r
                } = e;
                r && o.BB("video", {
                    prompt: "",
                    videoGenerationModel: r
                }), s(t ? a.a4(t) : a.QX())
            }, "b8", 0, e => {
                s(a.eX(e))
            }, "bY", 0, e => {
                let {
                    username: t,
                    imageGenerationModel: r,
                    imageStyle: n
                } = e;
                (r || n) && o.BB("image", {
                    prompt: "",
                    imageGenerationModel: r,
                    imageStyle: n
                }), s(a.yL(t))
            }])
        },
        89554(e, t, r) {
            var n = r(39063),
                i = r(11058),
                o = r(7452),
                a = r(2384),
                l = r(91654);
            r.d(t, ["$", 0, ({
                userPrompt: e,
                triggerSource: t,
                appearFrom: r,
                initialTab: n
            }) => {
                l.ZT("generateWidget", {
                    triggerModal: "generate_widget",
                    triggerSource: t,
                    appearFrom: r,
                    userPrompt: e,
                    initialTab: n
                })
            }, "f", 0, ({
                triggerSource: e,
                mediaId: t,
                conversationId: r,
                onGenerationStart: s
            }) => {
                a.EQ(i.eG(n.Vm())) ? o.b8(t) : l.ZT("editImageWidget", {
                    triggerModal: "edit_image_widget",
                    triggerSource: e,
                    mediaId: t,
                    conversationId: r,
                    onGenerationStart: s
                })
            }])
        },
        22062(e, t, r) {
            var n = r(7672);
            let i = {
                    image: "_prompt_",
                    video: "_video_prompt_"
                },
                o = {
                    image: new Set,
                    video: new Set
                };
            r.d(t, ["BB", 0, (e, t) => {
                let r = {
                    prompt: t.prompt,
                    resetPromptParams: t.resetPromptParams,
                    gender: t.gender,
                    imageStyle: t.imageStyle,
                    imageGenerationModel: t.imageGenerationModel,
                    videoGenerationModel: t.videoGenerationModel,
                    action: t.action,
                    videoActionIds: t.videoActionIds,
                    createdAt: Date.now()
                };
                n.A.set(i[e], r), o[e].forEach(e => e(t))
            }, "Os", 0, (e, t) => (o[e].add(t), () => {
                o[e].delete(t)
            }), "ni", 0, e => {
                let t = n.A.get(i[e]);
                if (n.A.remove(i[e]), !(!t || Date.now() - t.createdAt > 3e5)) return {
                    prompt: t.prompt,
                    resetPromptParams: t.resetPromptParams,
                    gender: t.gender,
                    imageStyle: t.imageStyle,
                    imageGenerationModel: t.imageGenerationModel,
                    videoGenerationModel: t.videoGenerationModel,
                    action: t.action,
                    videoActionIds: t.videoActionIds
                }
            }, "uj", 0, e => !!e && (!!e.resetPromptParams || !!e.prompt || !!e.gender || !!e.imageStyle || !!e.imageGenerationModel || !!e.videoGenerationModel || !!e.action || !!e.videoActionIds)])
        }
    }
]);