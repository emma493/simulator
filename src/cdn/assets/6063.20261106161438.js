(globalThis.webpackChunk || = []).push([
    [6063], {
        78228(e, t, r) {
            var s = r(8783),
                a = r(23874),
                l = r(78470),
                i = r(62555),
                n = r(45185),
                o = r(39063),
                c = r(70288),
                m = r(14332),
                p = r(33816),
                d = r(29788),
                u = r(5616),
                v = r(37020),
                g = r(67170),
                f = r(89e3),
                y = r(51636),
                x = r(6953),
                w = r(58931),
                b = r(37421);
            let k = {
                    caregiver: 482,
                    shy: 483,
                    seducer: 484,
                    dominant: 485,
                    lover: 486,
                    confidant: 487,
                    custom: 488,
                    nerd: 489,
                    casanova: 490,
                    "ice king": 491,
                    guardian: 492,
                    "eager sub": 493,
                    dominantMale: 494,
                    "man-custom": 495,
                    "man-tentacles": 496,
                    catboy: 497,
                    femboy: 498,
                    seme: 499,
                    student: 500,
                    uke: 501,
                    elf: 502
                },
                A = {
                    caregiver: 464,
                    sage: 465,
                    shy: 466,
                    jester: 467,
                    temptress: 468,
                    lover: 503,
                    nympho: 504,
                    custom: 505,
                    nerd: 472,
                    empress: 471,
                    mistress: 469,
                    "eager sub": 470
                },
                N = s.ph(e => {
                    let {
                        gender: t,
                        isMobile: r,
                        characterType: N,
                        value: C,
                        isSfwMode: S,
                        isNsfwAllowed: W,
                        onChangeSfwMode: V,
                        onChange: L,
                        isNsfwConditionsAccepted: E
                    } = e, {
                        personality: I
                    } = C, M = p.rg.indexOf(C.role || "equal"), $ = p.rr.indexOf(C.attitude || "neutral"), _ = p.hv.indexOf(C.sexDrive || "moderate"), z = "male" !== t ? p.D2 : p.wc, D = "male" !== t ? f.Yp : f.ty, O = z.indexOf(I), j = e => Object.keys(D).find(t => D[t] ? .every((t, r) => t === e[r])), q = e => {
                        let r = v.sc(t, e),
                            s = () => {
                                let t = D[e];
                                L({
                                    personality: e,
                                    role: p.rg[t[0]],
                                    attitude: p.rr[t[1]],
                                    sexDrive: p.hv[t[2]]
                                })
                            };
                        if (E) r && V(!1);
                        else if (S && r) return b.WR(o.Vm()) ? u.Ot("characters_create", {
                            onConfirm: () => {
                                V(!1), s()
                            }
                        }) : v.Lo(() => {
                            V(!1), s(), d.qt(o.Vm()) && m.W8(o.Vm()) && c.nX({
                                triggerSource: "characters_create"
                            })
                        });
                        s()
                    }, F = l._(e => {
                        let t = j([M, e, _]);
                        L({
                            attitude: p.rr[e],
                            personality: t || "custom"
                        })
                    }), U = l._(e => {
                        let t = j([e, $, _]);
                        L({
                            role: p.rg[e],
                            personality: t || "custom"
                        })
                    }), G = l._(e => {
                        let t = j([M, $, e]);
                        L({
                            sexDrive: p.hv[e],
                            personality: t || "custom"
                        })
                    }), R = l._(() => {
                        q(z[Math.max(O - 1, 0)])
                    }), T = l._(() => {
                        q(z[Math.min(O + 1, z.length - 1)])
                    });
                    return h(s.FK, null, h(x.A, {
                        columns: 1,
                        title: n.pw("aiTwin" === N ? 506 : 507)
                    }, h(g.A, {
                        activeIndex: O,
                        isMobile: r,
                        onMoveLeft: R,
                        onMoveRight: T,
                        height: 136
                    }, z.reduce((e, s) => {
                        let l = f.DG(s),
                            i = S && v.sc(t, s);
                        return i && !W || e.push(h("div", {
                            key: s,
                            style: {
                                padding: "6px 0"
                            }
                        }, h(y.A, {
                            isActive: !i && I === s,
                            isLocked: i,
                            onClick: () => q(s),
                            iconUrl: a.V0(`svg/emoji/${l}`),
                            animatedIconUrl: a.VP(`animated-icons/${l}`),
                            isMobile: r,
                            alt: s,
                            title: i ? h("span", {
                                className: "text-s12-w600 spacer-small",
                                style: {
                                    color: "var(--theme-primary-accent)"
                                }
                            }, n.pw(272)) : h("span", {
                                className: "text-s12-w600 spacer-small"
                            }, n.pw("male" === t ? k[s] : A[s]))
                        }))), e
                    }, []))), h(x.A, {
                        columns: 1,
                        title: n.pw(508)
                    }, h("div", {
                        className: "flex-align-between"
                    }, h("span", {
                        className: "text-s12-w500 color-grey-400"
                    }, n.pw("male" === t ? 509 : 510)), h("span", {
                        className: "text-s12-w500 color-grey-400"
                    }, n.pw("male" === t ? 485 : 511))), h(w.A, {
                        min: 0,
                        max: 2,
                        value: M,
                        onChange: U,
                        step: 1
                    })), h(x.A, {
                        columns: 1,
                        title: n.pw(512)
                    }, h("div", {
                        className: "flex-align-between"
                    }, h("span", {
                        className: "text-s12-w500 color-grey-400"
                    }, n.pw("male" === t ? 513 : 514)), h("span", {
                        className: "text-s12-w500 color-grey-400"
                    }, n.pw("male" === t ? 515 : 516))), h(w.A, {
                        min: 0,
                        max: 2,
                        value: $,
                        onChange: F,
                        step: 1
                    })), W && h(x.A, {
                        columns: 1,
                        title: S ? h("span", {
                            style: {
                                cursor: "pointer",
                                color: "var(--theme-primary-accent)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px"
                            },
                            onClick: () => {
                                if (E) V(!1);
                                else {
                                    if (b.WR(o.Vm())) return u.Ot("characters_create", {
                                        onConfirm: () => {
                                            V(!1)
                                        }
                                    });
                                    v.Lo(() => {
                                        V(!1), d.qt(o.Vm()) && m.W8(o.Vm()) && c.nX({
                                            triggerSource: "characters_create"
                                        })
                                    })
                                }
                            }
                        }, h(i.Uv, {
                            img: "lock",
                            size: 20
                        }), n.pw(272)) : n.pw(517)
                    }, h("div", {
                        className: "flex-align-between",
                        style: {
                            filter: S ? "blur(6px)" : void 0
                        }
                    }, h("span", {
                        className: "text-s12-w500 color-grey-400"
                    }, n.pw("male" === t ? 518 : 519)), h("span", {
                        className: "text-s12-w500 color-grey-400"
                    }, n.pw("male" === t ? 520 : 504))), h("div", {
                        style: S ? {
                            pointerEvents: "none"
                        } : void 0
                    }, h(w.A, {
                        min: 0,
                        max: 2,
                        value: _,
                        onChange: G,
                        step: 1
                    }))))
                });
            r.d(t, ["Ay", 0, N, "W$", 0, k, "nw", 0, A])
        },
        48088(e, t, r) {
            var s = r(8783),
                a = r(23874),
                l = r(62555),
                i = r(45185),
                n = r(37020),
                o = r(89e3),
                c = r(6953),
                m = r(74022);
            let p = {
                    AI: 521,
                    "Friend's husband": 522,
                    Ex: 523,
                    Neighbour: 524,
                    Stranger: 525,
                    Colleague: 526,
                    Boyfriend: 527,
                    Husband: 528,
                    "Step brother": 529,
                    "Step dad": 530,
                    Boss: 531,
                    Friend: 532,
                    "Sex friend": 533
                },
                d = {
                    AI: 481,
                    Ex: 480,
                    "Friend's wife": 534,
                    Stranger: 473,
                    Colleague: 474,
                    "Step sister": 535,
                    Boss: 479,
                    Girlfriend: 475,
                    Wife: 476,
                    Friend: 477,
                    "Sex friend": 536,
                    "Step mom": 537,
                    "Girl next door": 478
                },
                u = s.ph(e => {
                    let {
                        characterType: t,
                        isMobile: r,
                        isSfwMode: s,
                        isNsfwAllowed: u,
                        gender: v,
                        value: g,
                        list: f,
                        onChange: y
                    } = e;
                    return h(c.A, {
                        title: i.pw("aiTwin" === t ? 542 : 543),
                        columns: r ? 2 : 4
                    }, f.map(e => {
                        let t = s && n.EK(v, e);
                        return t && !u ? null : h(m.A, {
                            key: e,
                            size: r ? "medium" : "squad",
                            isActive: !t && g === e,
                            clickData: e,
                            onClick: y,
                            title: t ? h("span", {
                                className: "text-s12-w600 spacer-small",
                                style: {
                                    color: "var(--theme-primary-accent)"
                                }
                            }, i.pw(272)) : h("span", {
                                className: "text-s12-w600 spacer-small"
                            }, i.pw("male" === v ? p[e] : d[e]))
                        }, h("div", {
                            style: {
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                height: r ? "28px" : "40px",
                                width: r ? "28px" : "40px",
                                position: "relative"
                            }
                        }, h("div", {
                            style: {
                                background: `url(${a.V0(`svg/emoji/${o.CY(e)}`)}) no-repeat`,
                                backgroundSize: "cover",
                                height: "100%",
                                width: "100%",
                                transition: "opacity 0.3s",
                                opacity: t ? "0.4" : void 0
                            }
                        }), h("div", {
                            style: {
                                color: "var(--theme-primary-accent)",
                                position: "absolute",
                                top: "-10%",
                                right: "-10%",
                                transition: "opacity 0.3s, transform 0.3s",
                                ...t ? {} : {
                                    opacity: 0,
                                    transform: "scale(0)"
                                }
                            }
                        }, h(l.Uv, {
                            img: "lock",
                            size: 20
                        }))))
                    }))
                });
            r.d(t, ["Ay", 0, u, "I4", 0, p, "ht", 0, d, "sH", 0, {
                "Step sister": 538,
                "Step mom": 539,
                Girlfriend: 540,
                "Sex friend": 541
            }])
        },
        67170(e, t, r) {
            r.d(t, {
                A: () => m
            });
            var s = r(8783),
                a = r(62555),
                l = r(5953),
                i = r(6312),
                n = r(66077),
                o = r(14180);
            r.p;
            let c = (0, l.Tu)("bn"),
                m = e => {
                    let {
                        activeIndex: t,
                        isMobile: r,
                        children: l,
                        height: m = 120,
                        onMoveLeft: p,
                        onMoveRight: d,
                        onScroll: u
                    } = e, v = (0, s.li)(null), g = (0, s.li)(!1), f = (0, s.li)(!0), y = () => {
                        g.current || p ? .()
                    }, x = () => {
                        g.current || d ? .()
                    };
                    return (0, s.vJ)(() => {
                        let e = v.current,
                            r = v.current.parentElement.parentElement,
                            s = (e.offsetWidth - r.offsetWidth) / 2;
                        e.style.padding = `0 ${s}px 36px`;
                        let a = a => {
                            let l = e.children[t];
                            if (!l) return;
                            let i = r.offsetWidth,
                                o = e.scrollLeft + s;
                            l.offsetLeft >= o && l.offsetLeft + l.offsetWidth <= o + i || (a ? l.scrollIntoView({
                                block: "nearest",
                                inline: "center"
                            }) : (g.current = !0, l.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                                inline: "center"
                            }), (0, n.c)(300).then(() => {
                                g.current = !1
                            })))
                        };
                        f.current ? (f.current = !1, (0, n.c)(300).then(() => a(!0))) : a();
                        let l = (0, i.pu)(e => {
                            if (r.contains(e.target)) switch (e.preventDefault(), e.key) {
                                case "ArrowLeft":
                                    y();
                                    break;
                                case "ArrowRight":
                                    x()
                            }
                        });
                        return () => {
                            l()
                        }
                    }, [t]), h("section", {
                        className: c({
                            mobile: r
                        }),
                        style: {
                            height: `${m}px`
                        }
                    }, !r && t > 0 && h("button", {
                        className: c("control", {
                            left: !0
                        }),
                        onClick: y
                    }, h(a.Ay, {
                        img: "chevron-left"
                    })), !r && h("button", {
                        className: c("control", {
                            right: !0
                        }),
                        onClick: x
                    }, h(a.Ay, {
                        img: "chevron-right"
                    })), h("div", {
                        className: c("shadow", {
                            left: !0
                        })
                    }), h("div", {
                        className: c("shadow", {
                            right: !0
                        })
                    }), h("div", {
                        className: c("content"),
                        style: {
                            height: `${m}px`
                        }
                    }, h("div", {
                        className: c("list-wrapper"),
                        style: {
                            height: `${m+36}px`
                        },
                        ref: (0, o.P8)([u && ["scroll", () => {
                            let e = v.current;
                            if (!e) return;
                            let t = e.parentElement.parentElement.offsetWidth;
                            u(e.scrollLeft, e.scrollWidth - t)
                        }]], v)
                    }, l)))
                }
        },
        51636(e, t, r) {
            var s = r(8783),
                a = r(62555),
                l = r(14180),
                i = r(74022);
            r.d(t, ["A", 0, e => {
                let {
                    title: t,
                    onClick: r,
                    isActive: n,
                    isLocked: o,
                    isMobile: c,
                    iconUrl: m,
                    animatedIconUrl: p,
                    alt: d,
                    size: u
                } = e, [v, g] = s.J0(n ? p : m);
                return s.vJ(() => {
                    g(n ? p : m)
                }, [n]), h(i.A, {
                    size: u ? ? (c ? "squad-x" : "medium-x"),
                    isActive: n,
                    onClick: r,
                    title: t,
                    onMouseEnter: n ? void 0 : () => g(p || m),
                    onMouseLeave: n ? void 0 : () => g(m)
                }, h("img", {
                    src: v,
                    alt: d,
                    className: i.X("icon", {
                        locked: o
                    }),
                    style: {
                        backgroundSize: "cover",
                        height: c ? "28px" : "40px",
                        width: c ? "28px" : "40px"
                    },
                    ref: l.P8([
                        ["error", () => g(m)]
                    ])
                }), h("div", {
                    className: i.X("lock", {
                        visible: o
                    })
                }, h(a.Uv, {
                    img: "lock",
                    size: 20
                })))
            }])
        }
    }
]);