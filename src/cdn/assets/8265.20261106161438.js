(globalThis.webpackChunk || = []).push([
    [8265], {
        39876(e, t, a) {
            var r = a(56258),
                l = a(63456),
                s = a(14260),
                o = a(11050);
            a.d(t, ["A", 0, e => {
                let {
                    children: t,
                    footer: a,
                    header: i,
                    padding: n,
                    radius: d,
                    mobilePadding: c,
                    background: u,
                    contentBackground: m,
                    onClose: p,
                    theme: v = "dark",
                    isCloseClickOutside: g,
                    isDesktopCloseClickOutside: f,
                    portalElement: y,
                    size: _,
                    isKeysEnabled: x,
                    isBodyScrollable: b = !0,
                    isDesktopBodyScrollable: w = !0,
                    isCloseIconDisabled: N,
                    isMobileScrollLock: k = !0,
                    isTransparent: A,
                    isMobileFullHeight: z,
                    isMobileFullHeightWithTopOffset: S,
                    headerStyle: I
                } = e;
                return s.d(o.M$) ? h(r.A, {
                    size: "medium",
                    overlay: "dark",
                    background: A ? "transparent" : v,
                    onClose: p,
                    footer: a,
                    header: i,
                    portalElement: y,
                    isShowMobileClose: !N,
                    isCloseClickOutside: g,
                    isBodyScrollable: b,
                    isMobileScrollLock: k,
                    isFullHeight: z,
                    isFullHeightWithTopOffset: S,
                    headerStyle: I,
                    isInitialMobile: !0,
                    isVisible: !0
                }, n || c ? h("div", {
                    className: "padding-regular"
                }, t) : t) : h(l.A, {
                    onClose: p,
                    radius: d,
                    contentBackground: m,
                    background: u,
                    header: i,
                    footer: a,
                    padding: n,
                    portalElement: y,
                    size: _,
                    isKeysEnabled: x,
                    isBodyScrollable: w,
                    isCloseIconDisabled: N,
                    isCloseClickOutside: f
                }, t)
            }])
        },
        11767(e, t, a) {
            a.d(t, {
                A: () => r.A
            });
            var r = a(39876)
        },
        63456(e, t, a) {
            var r = a(62555),
                l = a(23153),
                s = a(5953),
                o = a(45185),
                i = a(35690),
                n = a(23961);
            a(13592), a(48255), a(77475), a.d(t, ["A", 0, e => {
                let {
                    className: t,
                    isCorner: a,
                    isDisabled: d,
                    isCloseIconDisabled: c,
                    overlayClassName: u,
                    size: m = "regular",
                    contentBackground: p = "dark",
                    background: v,
                    radius: g = "middle",
                    closeIcon: f = "close",
                    header: y,
                    footer: _,
                    portalElement: x,
                    isCloseClickOutside: b
                } = e, {
                    footerRef: w,
                    headerRef: N,
                    bodyContent: k,
                    handleClose: A,
                    ref: z
                } = l.Y(e);
                return i.O(h("div", {
                    ref: z,
                    className: s.xW("modal-ds-overlay", u, {
                        "modal-ds-overlay--corner": a
                    }),
                    onClick: b ? e => {
                        e.target === e.currentTarget && A(e)
                    } : void 0
                }, !a && h("div", {
                    className: s.xW("modal-ds-overlay__background", {
                        [`modal-ds-overlay__background--${v}`]: !!v
                    })
                }), h("div", {
                    className: s.xW("modal-ds-body", t, {
                        [`modal-ds-body--size--${m}`]: !0,
                        "modal-ds-body--corner": a,
                        "modal-ds-body--disabled": d
                    })
                }, h("div", {
                    className: s.xW("modal-ds-content", {
                        [`modal-ds-content--background--${p}`]: "none" !== p,
                        [`modal-ds-content--radius--${g}`]: "none" !== g
                    })
                }, !c && h(n.Ay, {
                    className: "modal-ds-close-icon",
                    "aria-label": o.pw(128),
                    onClick: c ? void 0 : A,
                    style: "ghost-blur-inverse",
                    size: "rounded32"
                }, h(r.Uv, {
                    size: 20,
                    img: f
                })), k(), !!y && h("div", {
                    className: s.xW("modal-ds-header", {
                        [`modal-ds-header--background--${p}`]: "none" !== p
                    }),
                    ref: N
                }, y), !!_ && h("div", {
                    className: s.xW("modal-ds-footer", {
                        [`modal-ds-footer--background--${p}`]: "none" !== p
                    }),
                    ref: w
                }, _)))), x)
            }])
        },
        23153(e, t, a) {
            var r = a(8783),
                l = a(11223),
                s = a(85161),
                o = a(22468),
                i = a(5953),
                n = a(89379),
                d = a(19262),
                c = a(48577),
                u = a(14260),
                m = a(11050),
                p = a(96720);
            a(13592), a(48255), a(77475), a.d(t, ["Y", 0, e => {
                let {
                    onClose: t,
                    children: a,
                    footer: v,
                    header: g,
                    padding: f,
                    isBodyScrollable: y = !0,
                    isCloseIconDisabled: _,
                    fixMinHeightMobile: x,
                    isMobileFullscreen: b,
                    isKeysEnabled: w = !0
                } = e, N = u.d(e => w && !_ && !p.o5(e)), k = r.li(null), A = r.li(null), z = r.li(null), S = r.li(null), I = u.d(e => !!b && (639 >= m.No(e) || 420 >= m.MR(e))), C = r.li(null), U = e => {
                    t(e, C.current ? .querySelector(".modal-ds-body") ? ? void 0)
                };
                return r.Nf(() => ((0, n.$)(c.X(), d.m()), x && o.ev.android && (C.current.style.minHeight = `${window.innerHeight}px`), () => {
                    n.S()
                }), []), l.f(N ? U : null), r.Nf(() => {
                    let e = () => {
                            if (A.current && k.current) {
                                let e = C.current ? .querySelector(".modal-body"),
                                    t = (e ? parseInt(getComputedStyle(e).paddingBottom, 10) : 0) || 0;
                                A.current.style.minHeight = A.current.style.height = `${k.current.offsetHeight-t/3}px`
                            }
                            if (S.current && z.current) {
                                let e = C.current ? .querySelector(".modal-body"),
                                    t = (e ? parseInt(getComputedStyle(e).paddingTop, 10) : 0) || 0;
                                S.current.style.minHeight = S.current.style.height = `${z.current.offsetHeight-t}px`
                            }
                        },
                        t = setInterval(e, 300);
                    return e(), () => {
                        clearInterval(t)
                    }
                }, []), {
                    ref: C,
                    headerRef: z,
                    isMobileFullscreenMode: I,
                    bodyContent: () => {
                        let e = h(r.FK, null, !!g && h("div", {
                            className: "modal-ds-header-placeholder",
                            ref: S
                        }), a, !!v && h("div", {
                            className: "modal-ds-footer-placeholder",
                            ref: A
                        }));
                        if (y) {
                            let t = {};
                            return f && (t[`modal-body--padding--${"regular"===f&&g?"regular":"regular"===f?"regular-top":f}`] = !0), h(s.A, {
                                additionalClassName: i.xW("modal-body", t)
                            }, e)
                        }
                        return e
                    },
                    handleClose: U,
                    footerRef: k,
                    footerPlaceholderRef: A
                }
            }])
        },
        85193(e, t, a) {
            a.d(t, {
                A: () => o
            });
            var r = a(62555),
                l = a(5953);
            a.p;
            let s = (0, l.Tu)("co"),
                o = e => {
                    let {
                        size: t = 80,
                        isStatic: a
                    } = e, l = .25 * t, o = .7 * l;
                    return h("div", {
                        className: s({
                            static: a
                        }),
                        style: {
                            width: `${t}px`
                        }
                    }, h(r.Ay, {
                        className: s("star", {
                            "star-1": !0
                        }),
                        img: "magic-star",
                        size: o
                    }), h(r.Ay, {
                        className: s("star", {
                            "star-2": !0
                        }),
                        img: "magic-star",
                        size: l
                    }), h(r.Ay, {
                        className: s("star", {
                            "star-3": !0
                        }),
                        img: "magic-star",
                        size: l
                    }))
                }
        },
        22550(e, t, a) {
            a.d(t, {
                c: () => c
            });
            var r = a(8783),
                l = a(5953),
                s = a(45185),
                o = a(85193),
                i = a(80124);
            a.p;
            let n = (0, l.Tu)("cp"),
                d = {
                    video: 120,
                    photo: 20
                },
                c = r.ph(e => {
                    let {
                        createdAt: t,
                        isProcessing: a,
                        mediaType: l = "video"
                    } = e, c = (0, r.li)(null), u = (0, r.li)(null);
                    return (0, i.A)({
                        start: new Date(t).getTime(),
                        max: 99,
                        timeout: d[l],
                        refProgress: u,
                        onProgress: e => {
                            c.current && (c.current.style.height = `${e}%`)
                        },
                        isDisabled: a || !1
                    }), h("div", {
                        className: n()
                    }, h("div", {
                        className: n("percent")
                    }, a ? (0, s.pw)(1123) : h(r.FK, null, h(o.A, {
                        isStatic: !0
                    }), h("div", {
                        className: n("label")
                    }, (0, s.pw)("photo" === l ? 1124 : 1125), " ", h("span", {
                        ref: u
                    }, "0%")))), h("div", {
                        className: n("blur"),
                        ref: c,
                        style: a ? {
                            height: "100%"
                        } : void 0
                    }))
                })
        },
        24478(e, t, a) {
            a.d(t, {
                A: () => g
            });
            var r = a(8783),
                l = a(14332),
                s = a(14260),
                o = a(78470),
                i = a(45185),
                n = a(39063),
                d = a(13398),
                c = a(81117),
                u = a(77368),
                m = a(26791),
                p = a(37421),
                v = a(32155);
            let g = r.ph(e => {
                let {
                    ids: t,
                    selectedList: a,
                    showName: g,
                    onClick: f,
                    isShowMenu: y = !0,
                    isMobile: _
                } = e, [x, b] = (() => {
                    let [e, t] = (0, u.C)();
                    return [e, (0, o._)((e, a) => {
                        let r = (0, n.Vm)(),
                            {
                                modelId: l
                            } = (0, c.xu)(r, e),
                            s = [!!(0, p.WR)(r) && l && (0, d.y)(e) && {
                                content: h("span", {
                                    className: "text-s14-w600 text-overflow"
                                }, (0, i.pw)(184)),
                                iconImage: "trash",
                                iconSize: 24,
                                isClose: !0,
                                onClick: () => t(e, l)
                            }].filter(Boolean);
                        return (0, m.Xl)(e, s, a)
                    })]
                })(), w = (0, s.d)(l.W8);
                return h(r.FK, null, t.map(e => h(v.A, {
                    key: e,
                    id: e,
                    onClick: f,
                    getMenuItems: y ? b : void 0,
                    showName: g,
                    isSelected: !!a ? .includes(e),
                    isMobile: _,
                    isBlur: w
                })), x)
            })
        },
        77368(e, t, a) {
            var r = a(8783),
                l = a(45185),
                s = a(39063),
                o = a(28550),
                i = a(25122),
                n = a(72824);
            a.d(t, ["C", 0, () => {
                let [e, t] = r.J0(null), [a, d] = r.J0(null), [c, u, m] = i.uN({
                    userId: e && e !== o.fl(s.Vm()) ? e : null,
                    innerButtons: [{
                        type: "negative",
                        content: l.pw(184),
                        isClose: !0,
                        onClick: () => n.k1(a, e)
                    }],
                    externalButtons: [{
                        content: l.pw(126),
                        isClose: !0,
                        onClick() {
                            d(null), m()
                        }
                    }],
                    title: h("div", {
                        className: "text-s12-w400"
                    }, h("div", {
                        className: "white-color-text text-s16-w700 spacer-small"
                    }, l.pw(1126)), h("div", {
                        className: "spacer-small"
                    }, l.pw(1127)))
                });
                return [c, (e, a) => {
                    d(e), t(a), u()
                }]
            }])
        },
        40863(e, t, a) {
            a.d(t, {
                r: () => l
            });
            var r = a(5953);
            a.p;
            let l = (0, r.Tu)("cq")
        },
        32155(e, t, a) {
            var r = a(8783),
                l = a(81117),
                s = a(14260),
                o = a(41161);
            let i = r.ph(e => {
                let {
                    id: t,
                    onClick: a,
                    getMenuItems: r,
                    showName: i,
                    isBlur: n,
                    isSelected: d,
                    isMobile: c
                } = e, u = s.d(e => l.xu(e, t));
                return u ? h(o.A, {
                    item: u,
                    id: t,
                    isBlur: n,
                    onClick: a,
                    getMenuItems: r,
                    showName: i,
                    isSelected: d,
                    isMobile: c
                }) : null
            });
            a.d(t, ["A", 0, i])
        },
        41161(e, t, a) {
            a.d(t, {
                A: () => et
            });
            var r = a(8783),
                l = a(12216),
                s = a(62555),
                o = a(45185),
                i = a(58795),
                n = a(5652),
                d = a(28550),
                c = a(3343),
                u = a(81117),
                m = a(14260),
                p = a(23961),
                v = a(57918),
                g = a(5953),
                f = a(52187),
                y = a(542),
                _ = a(2384);
            a.p;
            let x = (0, g.Tu)("cr"),
                b = () => h("div", {
                    className: x()
                }, h("div", {
                    className: x("error")
                }, h(s.Ay, {
                    img: "failure",
                    size: 32,
                    className: "lovescape-like-color"
                }), h("div", {
                    className: x("error-message")
                }, h(v.A, {
                    elements: {
                        link: h(y.N_, {
                            to: "/terms",
                            className: "white-color-text"
                        })
                    },
                    parameters: {
                        project: f.P_,
                        domain: f.D1
                    },
                    id: 1128
                })), h("span", {
                    className: "text-s12-w500 white-color-text-opacity-6"
                }, (0, o.pw)(1129)), h("div", {
                    className: "spacer-small"
                }, h(p.Ay, {
                    size: "squad32",
                    rounded: "size-l",
                    style: "white-gradient",
                    type: "link",
                    to: (0, _.yL)(),
                    onClick: () => {
                        document.getElementById("imageGenerationPromptTextArea") ? .focus()
                    }
                }, h(s.Uv, {
                    img: "edit-square",
                    size: 16
                }), h("span", {
                    className: "indent-left-small-8"
                }, (0, o.pw)(1130))))));
            var w = a(22550),
                N = a(40863),
                k = a(26154),
                A = a(94720),
                z = a(39063),
                S = a(86105),
                I = a(29788),
                C = a(11050),
                U = a(94786),
                P = a(9622),
                B = a(25032),
                F = a(77417);
            let M = "cardDownloadMediaButton",
                T = e => {
                    let {
                        mediaId: t,
                        type: a,
                        buttonSize: l,
                        iconSize: i,
                        isTooltipHidden: n
                    } = e, d = (0, m.d)(F.eP), c = (0, m.d)(B.LP), u = (0, m.d)(B.mV), v = d && (c || u), {
                        downloadUrl: g,
                        handleDownloadClick: f
                    } = (0, P.Q)({
                        mediaId: t,
                        mediaType: "video" === a || "video-processed" === a ? "video" : "photo",
                        isAvailable: v && !u
                    });
                    if (!v) return null;
                    let y = h(r.FK, null, h(s.Uv, {
                        img: "download",
                        size: i
                    }), !n && h(A.A, {
                        targetId: M,
                        placement: "top",
                        indentation: 6,
                        style: "white"
                    }, h("span", {
                        className: "text-s12-w600"
                    }, (0, o.pw)(628))));
                    return g ? h(p.Ay, {
                        id: M,
                        style: "ghost-blur-neutral",
                        size: l,
                        rounded: "size-xl",
                        widthSize: "wide",
                        type: "anchor",
                        href: g,
                        onClick: f
                    }, y) : h(p.Ay, {
                        id: M,
                        style: "ghost-blur-neutral",
                        size: l,
                        rounded: "size-xl",
                        widthSize: "wide",
                        onClick: f
                    }, y)
                };
            var V = a(64885),
                $ = a(89554),
                D = a(53620),
                W = a(37421),
                q = a(97876),
                E = a(5955);
            let J = () => {
                    S.A.reset()
                },
                K = r.ph(e => {
                    let {
                        type: t,
                        userId: a,
                        mediaId: l,
                        status: i,
                        isMobile: n,
                        mediaUrl: d,
                        isMenuOpened: c
                    } = e, [u, v] = (0, r.J0)(!1), [g, y] = (0, r.J0)(null), x = (0, m.d)(e => !!(0, C.Is)(e) || (0, q.Eh)(e)), b = (0, m.d)(I._8), [w, S] = (0, r.J0)(() => !(0, k.TK)("lovescapeEditImageModalShown")), P = "video-processed" === t || "video" === t && "processing" === i, B = n ? "squad32" : "squad48", F = n ? 16 : 24, M = x || c;
                    if ((0, r.vJ)(() => {
                            if (P) return void v(!1);
                            let e = (0, V.GS)(e => {
                                v(l === e)
                            });
                            return () => {
                                e()
                            }
                        }, [P]), !u) return null;
                    let K = (0, W.WR)((0, z.Vm)()),
                        L = K && K === (0, E.kl)((0, z.Vm)(), a) ? .ownerId,
                        G = (0, D.V)((0, z.Vm)(), {
                            userId: a
                        }),
                        H = G && (0, D.b)((0, z.Vm)(), l),
                        O = "photo" === t || "photo-processed" === t && !!d,
                        Y = "photo" === t && L,
                        j = () => b ? h(T, {
                            mediaId: l,
                            type: t,
                            buttonSize: B,
                            iconSize: F,
                            isTooltipHidden: M
                        }) : h(p.Ay, {
                            id: "cardPublishPostButton",
                            style: "ghost-blur-neutral",
                            size: B,
                            rounded: "size-xl",
                            widthSize: "wide",
                            onClick: e => {
                                e.stopPropagation(), (0, U.BB)({
                                    mediaId: l,
                                    triggerSource: "media_publish_post"
                                })
                            }
                        }, h(s.Uv, {
                            img: "edit-square",
                            size: F
                        }), !M && h(A.A, {
                            targetId: "cardPublishPostButton",
                            placement: "top",
                            indentation: 6,
                            style: "white"
                        }, h("span", {
                            className: "text-s12-w600"
                        }, (0, o.pw)(630)))),
                        R = "video" === t ? h(r.FK, null, h("div", {
                            className: (0, N.r)("extend")
                        }, h(p.Ay, {
                            className: (0, N.r)("actions-item"),
                            id: "extendAutoVideoButton",
                            style: "ghost-blur-neutral",
                            size: B,
                            rounded: "size-xl",
                            widthSize: "wide",
                            type: "link",
                            onClick: e => {
                                e.stopPropagation(), J()
                            },
                            to: (0, _.a4)(l)
                        }, h(s.Uv, {
                            img: "add-video",
                            size: F
                        }), G ? h(A.A, {
                            targetId: "extendAutoVideoButton",
                            placement: "top",
                            indentation: 6,
                            style: "white"
                        }, (0, o.pw)(1131)) : h("span", {
                            className: "indent-left-10"
                        }, (0, o.pw)(1131))), !1), H && j()) : O || Y || L ? h(r.FK, null, O && h(p.Ay, {
                            id: "cardGenerateVideoButton",
                            style: "ghost-blur-neutral",
                            size: B,
                            rounded: "size-xl",
                            widthSize: "wide",
                            type: "link",
                            onClick: e => {
                                J(), e.stopPropagation()
                            },
                            to: (0, _.QX)("photo-processed" === t ? void 0 : l)
                        }, h(s.Uv, {
                            img: "video-stars",
                            size: F
                        }), !M && h(A.A, {
                            targetId: "cardGenerateVideoButton",
                            placement: "top",
                            indentation: 6,
                            style: "white"
                        }, h("span", {
                            className: "text-s12-w600"
                        }, (0, o.pw)(1133)))), "photo" === t && !f.eC && h(p.Ay, {
                            id: "cardEditImageButton",
                            style: "ghost-blur-neutral",
                            size: B,
                            rounded: "size-xl",
                            widthSize: "wide",
                            onClick: e => {
                                S(!1), e.stopPropagation(), (0, $.f)({
                                    triggerSource: "media_card_actions",
                                    mediaId: l
                                })
                            }
                        }, h(s.Uv, {
                            img: "brush",
                            size: F
                        }), !M && h(A.A, {
                            targetId: "cardEditImageButton",
                            portalRoot: g,
                            placement: "top",
                            indentation: 6,
                            style: "white",
                            isForceVisible: w
                        }, h("span", {
                            className: "text-s12-w600"
                        }, h("span", {
                            className: "text-uppercase lovescape-purple-gradient-text"
                        }, (0, o.pw)(275)), h("span", {
                            className: "color-grey-100"
                        }, "・"), (0, o.pw)(632)))), "photo" === t && !Y && (H || b) && j(), Y && h(r.FK, null, h(p.Ay, {
                            id: "cardGenerateTalkVideoButton",
                            style: "ghost-blur-neutral",
                            size: B,
                            rounded: "size-xl",
                            widthSize: "wide",
                            type: "link",
                            onClick: e => {
                                J(), e.stopPropagation()
                            },
                            to: (0, _.zC)(l)
                        }, h(s.Uv, {
                            img: "voice",
                            size: F
                        })), !M && h(A.A, {
                            targetId: "cardGenerateTalkVideoButton",
                            placement: "top",
                            indentation: 6,
                            style: "white"
                        }, h("span", {
                            className: "text-s12-w600"
                        }, (0, o.pw)(1134))))) : null;
                    if (R) return h(r.FK, null, h("div", {
                        className: (0, N.r)("actions-overlay")
                    }, h("div", {
                        className: (0, N.r)("overlay-blur")
                    })), h("div", {
                        className: (0, N.r)("actions"),
                        ref: y
                    }, R))
                });
            var L = a(22468),
                G = a(6312),
                H = a(41307);
            let O = e => {
                let {
                    item: t,
                    isSelected: a,
                    cardRef: l
                } = e, [s, o] = (0, r.J0)(!1), i = "ready" === t.status && !!t.videoUrl && !L.ev.isMobile;
                return (0, r.vJ)(() => {
                    if (!i) return;
                    let e = l.current,
                        t = (0, G.Ts)(e, () => {
                            o(!0)
                        }, {
                            passive: !0
                        }),
                        a = (0, G.mN)(e, () => {
                            o(!1)
                        }, {
                            passive: !0
                        });
                    return () => {
                        t(), a()
                    }
                }, [i]), h(r.FK, null, i && h(H.A, {
                    className: (0, N.r)("video"),
                    video: t.videoUrl,
                    isActive: s
                }), (() => {
                    if ("video" !== t.type || !t.duration) return null;
                    let e = Math.floor(t.duration / 60).toString().padStart(2, "0"),
                        r = (t.duration % 60).toString().padStart(2, "0");
                    return !a && h("div", {
                        className: (0, N.r)("duration")
                    }, `${e}:${r}`)
                })())
            };
            var Y = a(6100),
                j = a(95334),
                R = a(18686),
                X = a(86457),
                Q = a(57002);
            let Z = null,
                ee = () => {
                    (0, n.k)("media_card_actions")
                },
                et = e => {
                    let t, {
                            item: a,
                            id: n,
                            isSelected: v,
                            isBlur: g,
                            onClick: f,
                            getMenuItems: y,
                            showName: _,
                            isMobile: x
                        } = e,
                        k = (0, r.li)(null),
                        [A, z] = (0, r.J0)(!1),
                        S = "photo-processed" !== a.type || "error" !== a.status,
                        I = ["photo", "video"].includes(a.type) ? a.generationModel : void 0,
                        C = (0, m.d)(e => {
                            if (!a) return "";
                            if ("video" === a.type && !a.coverUrl && a.sourceMediaId) return (0, u.xu)(e, a.sourceMediaId) ? .url || "";
                            if ("photo" === a.type || "video" === a.type) return "photo" === a.type ? a.urlPreview : a.coverUrl;
                            if (a.generationFakeData ? .mediaId) {
                                let t = (0, u.xu)(e, a.generationFakeData ? .mediaId);
                                return t ? .type === "video" ? t.coverUrl : t ? .url || ""
                            }
                            return "photo-processed" === a.type || a.generationFakeData ? .mediaUrl ? a.generationFakeData ? .mediaUrl || a.urlBlur : ""
                        }),
                        U = (0, m.d)(e => {
                            if (!_ || !a ? .modelId || a.modelId === (0, d.fl)(e)) return "";
                            let t = (0, E.kl)(e, a.modelId);
                            return t ? .name || t ? .username || ""
                        }),
                        [P, B, F] = (0, i.m)(() => (0, c.$W)(n)),
                        M = !v && !!f,
                        T = g ? ee : S && f ? e => f(n, e) : void 0;
                    return h("div", {
                        ref: k,
                        className: (0, N.r)({
                            clickable: M,
                            scale: M && "photo" === a.type
                        }),
                        onClick: T,
                        "data-media-id": n
                    }, h(X.A, {
                        imageUrl: C,
                        isBlur: g
                    }, g && (Z = Z || h("div", {
                        className: (0, N.r)("blur")
                    }, h(s.Uv, {
                        img: "eye-off-fill",
                        size: 32
                    }), h("div", null, (0, o.pw)(625))))), !g && "video" === a.type && h(O, {
                        isSelected: v,
                        item: a,
                        cardRef: k
                    }), (U || I) && h("div", {
                        className: (0, N.r)("bottom")
                    }, U && h("div", {
                        className: (0, N.r)("caption")
                    }, U), (() => {
                        if (!I) return;
                        let e = "photo" === a.type,
                            t = e ? Y.N7[I] : R.u3[I] || j.e0[I],
                            r = e ? Y.j3[I] : R.vp[I] || j.Lq[I];
                        return h("div", {
                            className: (0, N.r)("generation-model")
                        }, h(s.Uv, {
                            img: t,
                            size: 16
                        }), h("span", null, r))
                    })()), !g && ("photo-processed" !== a.type || a.generationFakeData.mediaUrl ? "video-processed" === a.type ? h(w.c, {
                        createdAt: a.createdAt,
                        isProcessing: !1
                    }) : "video" === a.type && "processing" === a.status ? h(w.c, {
                        createdAt: "2000-01-01T00:00:00",
                        isProcessing: !0
                    }) : void 0 : "error" === a.status ? h(b, null) : h(w.c, {
                        createdAt: a.createdAt,
                        isProcessing: !1,
                        mediaType: "photo"
                    })), !g && (t = y ? y(n, P.data ? .posts ? .[0] ? .id) : null, t ? .length ? h("div", {
                        className: (0, N.r)("menu")
                    }, h(l.A, {
                        getPopover: () => P.fetching ? null : h(Q.A, {
                            style: "lovescape",
                            menuItems: t
                        }),
                        onToggle: e => {
                            z(e), e || F()
                        },
                        position: "bottomleft"
                    }, (e, t) => h(p.Ay, {
                        style: "ghost-blur-inverse",
                        size: "rounded32",
                        onClick: r => {
                            r.stopPropagation(), r.preventDefault(), "video-processed" === a.type && !t && P.data ? .posts ? .length && !P.fetching && B(), e(r)
                        }
                    }, h(s.Uv, {
                        img: "three-dots",
                        size: 20
                    })))) : null), (() => {
                        if (v) return h("div", {
                            className: (0, N.r)("selected")
                        }, h("span", {
                            className: (0, N.r)("selected-check")
                        }, h(s.Uv, {
                            img: "check-round-fill",
                            size: 16
                        })))
                    })(), !g && !!y && h(K, {
                        type: a.type,
                        userId: a.modelId,
                        mediaId: a.id,
                        status: a.status,
                        isMobile: x,
                        mediaUrl: "photo-processed" === a.type ? a.generationFakeData ? .mediaUrl : void 0,
                        isMenuOpened: A
                    }))
                }
        },
        64885(e, t, a) {
            var r = a(8783),
                l = a(22468),
                s = a(61491),
                o = a(6312),
                i = a(40863);
            let n = l.ev.touch,
                d = e => Number.isNaN(Number(e)) ? e : Number(e),
                [c, u] = s.yL(),
                m = e => {
                    let t = e.target ? .closest(`.${i.r()}`);
                    return t ? .dataset.mediaId
                };
            a.d(t, ["Ay", 0, () => {
                let e = r.li(null);
                return r.vJ(() => {
                    if (!e.current || !n) return;
                    let t = e => {
                        e.touches.length > 1 || u(d(m(e)))
                    };
                    return e.current.addEventListener("touchmove", t), () => {
                        e.current ? .removeEventListener("touchmove", t)
                    }
                }, [!e.current]), r.vJ(() => {
                    if (!e.current || n) return;
                    let t = o.DO(e.current, e => {
                            let t = m(e);
                            t && u(d(t))
                        }, {
                            passive: !0
                        }),
                        a = o.D(e.current, () => {
                            u(null)
                        }, {
                            passive: !0
                        });
                    return () => {
                        t(), a()
                    }
                }, [!e.current]), e
            }, "GS", 0, c])
        },
        78353(e, t, a) {
            a.d(t, {
                A: () => d
            });
            var r = a(8783),
                l = a(23874),
                s = a(62555),
                o = a(5953);
            let i = r.ph(e => {
                let {
                    className: t,
                    src: a,
                    wrapperClassName: l
                } = e, s = (0, r.li)(a), i = (0, r.li)(null);
                return (0, r.vJ)(() => {
                    let e = s.current,
                        r = i.current;
                    if (e === a) {
                        let e = document.createElement("img");
                        t && (e.className = t), e.src = a, e.alt = "", r.append(e);
                        return
                    }
                    let l = r.querySelectorAll("img"),
                        n = document.createElement("img");
                    t && (n.className = t), n.style.position = "absolute", n.style.zIndex = "1", n.alt = "", n.src = a, r.append(n), s.current = a, (0, o.Wv)(n, [{
                        transform: "translateY(-100%)",
                        offset: 0
                    }, {
                        transform: "translateY(0%)",
                        offset: .7
                    }, {
                        transform: "translateY(-15%)",
                        offset: .8
                    }, {
                        transform: "translateY(0%)",
                        offset: .9
                    }, {
                        transform: "translateY(-7%)",
                        offset: .95
                    }, {
                        transform: "translateY(0%)",
                        offset: 1
                    }], {
                        duration: 600,
                        easing: "ease-out",
                        composite: "replace"
                    }).then(() => {
                        l.forEach(e => e.remove()), n.removeAttribute("style")
                    })
                }, [a]), h("div", {
                    className: l,
                    ref: i
                })
            });
            a(37734);
            let n = (0, o.Tu)("cs"),
                d = r.ph(e => {
                    let {
                        imageUrl: t,
                        isVideo: a,
                        size: r
                    } = e;
                    return h("div", {
                        className: n("avatar-wrapper", {
                            size: r
                        })
                    }, h("div", {
                        className: n("avatar-left"),
                        style: {
                            backgroundImage: `url(${(0,l.VP)("chat-empty-left")})`
                        }
                    }), h(i, {
                        className: n("avatar-image"),
                        src: t,
                        wrapperClassName: n("avatar")
                    }), a && h("div", {
                        className: n("play")
                    }, h(s.Uv, {
                        img: "play",
                        size: 24
                    })), h("div", {
                        className: n("avatar-right"),
                        style: {
                            backgroundImage: `url(${(0,l.VP)("chat-empty-right")})`
                        }
                    }))
                })
        },
        55897(e, t, a) {
            var r = a(8783),
                l = a(5953),
                s = a(45185),
                o = a(78353);
            a(37734);
            let i = l.Tu("cs"),
                n = () => h("div", {
                    style: {
                        height: "60px",
                        width: "60px"
                    }
                }, h("svg", {
                    width: "60",
                    height: "60",
                    fill: "none",
                    viewBox: "0 0 60 60"
                }, h("path", {
                    fill: "currentColor",
                    d: "M3.885 2.466a1 1 0 0 0-1.77-.932zm46.248 56.032a1 1 0 0 0 1.365.37l7.804-4.484a1 1 0 0 0-.996-1.734l-6.937 3.985-3.985-6.937a1 1 0 0 0-1.734.996zM3 2c-.885-.466-.885-.465-.886-.464l-.004.007-.034.07-.088.184c-.072.157-.17.382-.276.664a13.5 13.5 0 0 0-.649 2.327c-.353 1.918-.397 4.53.918 7.16C4.632 17.25 12.443 22 32 22v-2c-19.443 0-26.132-4.75-28.23-8.947-1.061-2.121-1.043-4.259-.74-5.903.151-.82.37-1.503.551-1.979a9 9 0 0 1 .305-.707c0 .001-.001.002-.886-.464m29 20c7.018 0 11.542 2.228 14.462 5.452 2.949 3.257 4.371 7.653 4.92 12.169.549 4.507.215 9.038-.263 12.46a59 59 0 0 1-.724 4.12 42 42 0 0 1-.336 1.443l-.019.074-.004.017-.001.004L51 58l.966.26v-.002l.002-.007.006-.023.103-.406c.068-.28.163-.687.274-1.202.22-1.031.503-2.5.749-4.263.49-3.516.844-8.235.268-12.978-.576-4.734-2.091-9.588-5.424-13.269C44.583 22.397 39.482 20 32 20z"
                }))),
                d = r.ph(e => {
                    let {
                        imageUrl: t,
                        title: a,
                        description: r,
                        isVideo: l,
                        isTall: d,
                        children: c,
                        isArrow: u = !0
                    } = e;
                    return h("div", {
                        className: i({
                            tall: d
                        })
                    }, h("div", {
                        className: i("content")
                    }, h(o.A, {
                        imageUrl: t,
                        isVideo: l
                    }), h("div", {
                        className: "text-s16-w500-lh24"
                    }, a), h("div", {
                        className: "text-s14-w400 color-grey-500"
                    }, r || s.pw(1135)), void 0 !== c ? c : u && h("div", {
                        className: i("arrow")
                    }, h(n, null))))
                });
            a.d(t, ["A", 0, d, "u", 0, n])
        },
        5800(e, t, a) {
            let r = ["photos"],
                l = ["videos"],
                s = ["photos", "videos"];
            a.d(t, ["ep", 0, s, "lO", 0, e => "video" === e ? l : "photo" === e ? r : s, "qz", 0, r])
        },
        6100(e, t, a) {
            var r = a(52187);
            let l = {
                    sdxl: "SDXL",
                    flux: "Flux.1",
                    "flux-j-pro": "Flux.1 J Pro",
                    "flux-schnell": "Flux.1 Schnell",
                    "flux-krea": "Flux.1 Krea",
                    "flux-1-d-nsfw": "Flux.1 DNSFW",
                    "flux-klein-4b": `${r.P_} Klein`,
                    seedream: "Seedream 5.0",
                    "grok-imagine": "Grok Imagine",
                    "z-image-turbo": "SDXL"
                },
                s = Symbol(),
                o = Symbol();
            a.d(t, ["N7", 0, {
                sdxl: "sdxl",
                flux: "flux",
                "flux-j-pro": "flux",
                "flux-schnell": "flux",
                "flux-krea": "flux",
                "flux-1-d-nsfw": "flux",
                "flux-klein-4b": "logo-heart",
                seedream: "seedance",
                "grok-imagine": "grok",
                "z-image-turbo": "sdxl"
            }, "j3", 0, l, "kE", 0, o, "n", 0, {
                "z-image-turbo": [
                    [1136, "spicy", "purple"],
                    [1137, "rocket"],
                    [1138, "magic-star"]
                ],
                sdxl: [
                    [1136, "spicy", "purple"],
                    [1137, "rocket"],
                    [1138, "magic-star"]
                ],
                "flux-krea": [
                    [1137, "rocket"],
                    [1139],
                    [1140]
                ],
                flux: [
                    [1141, "dashboard"],
                    [1138, "magic-star"]
                ],
                "flux-schnell": [
                    [1142, "dashboard"],
                    [1143, "rocket"]
                ],
                "flux-j-pro": [
                    [1141, "dashboard"],
                    [1139]
                ],
                "flux-1-d-nsfw": [
                    [1141, "dashboard"],
                    [1139]
                ],
                "flux-klein-4b": [
                    [1144, "dashboard"],
                    [1138, "magic-star"]
                ],
                seedream: [
                    [1141, "dashboard"],
                    [1138, "magic-star"]
                ],
                "grok-imagine": [
                    [1141, "dashboard"],
                    [1138, "grok"]
                ]
            }, "wq", 0, s])
        },
        95334(e, t, a) {
            a.d(t, ["Lq", 0, {
                lovescape_unbound: "Unbound",
                sora_2: "Sora 2",
                sora_2_pro: "Sora 2 Pro",
                veo_3: "Google Veo 3",
                veo_3_fast: "Google Veo 3 Fast",
                wan_2_2_a14b: "Wan 2.2",
                kling_ai_2_5_turbo_pro: "KlingAI 2.5 Turbo PRO",
                seedance_2_5: "Lovedance 2.5",
                seedream: "Seedance Lite",
                wan_2_6_i2v: "Unbound 2.0",
                wan_2_7_spicy: "Unbound 2.5",
                wan_3_0: "Wan 3.0",
                ltx23_eros_fast: "LTX 2.3",
                minimax_h3_max: "MiniMax H3 Max"
            }, "e0", 0, {
                lovescape_unbound: "logo-heart",
                sora_2: "sora",
                sora_2_pro: "sora",
                veo_3: "google-mono",
                veo_3_fast: "google-mono",
                wan_2_2_a14b: "wan",
                wan_2_6_i2v: "logo-heart",
                wan_3_0: "logo-heart",
                kling_ai_2_5_turbo_pro: "kling",
                seedream: "seedance",
                seedance_2_5: "seedance",
                wan_2_7_spicy: "logo-heart",
                ltx23_eros_fast: "ltx",
                minimax_h3_max: "minimax"
            }, "pf", 0, {
                lovescape_unbound: 1145,
                sora_2: 1146,
                sora_2_pro: 1147,
                veo_3: 1148,
                veo_3_fast: 1149,
                wan_2_2_a14b: 1150,
                kling_ai_2_5_turbo_pro: 1151,
                seedance_2_5: 1152,
                seedream: 1153,
                wan_2_6_i2v: 1154,
                wan_2_7_spicy: 1155,
                wan_3_0: 1156,
                ltx23_eros_fast: 1157,
                minimax_h3_max: 1158
            }])
        },
        18686(e, t, a) {
            a.d(t, ["OZ", 0, {
                omnihuman_1_0: "720p",
                omnihuman_1_5: "1080p"
            }, "mj", 0, "videoOvervoiceGeneratorSelectedMediaId", "u3", 0, {
                omnihuman_1_0: "model-ai",
                omnihuman_1_5: "model-ai"
            }, "vp", 0, {
                omnihuman_1_0: "Voice 1.0",
                omnihuman_1_5: "Voice 1.5"
            }])
        },
        80124(e, t, a) {
            var r = a(8783),
                l = a(89447);
            a.d(t, ["A", 0, e => {
                let {
                    start: t,
                    max: a,
                    timeout: s,
                    refProgress: o,
                    onProgress: i,
                    isDisabled: n
                } = e, d = r.li(i);
                d.current = i, r.vJ(() => {
                    if (n) return;
                    let e = null,
                        r = t ? ? Date.now(),
                        i = setInterval(() => {
                            let t = Math.max(0, 0 | l.zi(r, 1e3 * s));
                            t !== e && (e = t, o ? .current && (o.current.textContent = `${t}%`), d.current ? .(t), t >= a && clearInterval(i))
                        }, 30);
                    return () => {
                        clearInterval(i)
                    }
                }, [t, s, a, n])
            }])
        },
        13592(e, t, a) {
            e.exports = a.p + "b0105b78364112c8316d.scss"
        },
        48255(e, t, a) {
            e.exports = a.p + "7c21e598b1e8828fd904.scss"
        },
        77475(e, t, a) {
            e.exports = a.p + "da62a6daf6a4231de723.scss"
        },
        37734(e, t, a) {
            e.exports = a.p + "342a446765e111f7b5c5.scss"
        }
    }
]);