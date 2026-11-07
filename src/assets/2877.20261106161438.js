(globalThis.webpackChunk || = []).push([
    [2877], {
        58746(e, a, t) {
            t.d(a, {
                A: () => s
            });
            var l = t(8783),
                n = t(30249),
                i = t(5953);
            t.p, t.p, t.p;
            let r = (0, i.Tu)("j"),
                s = e => {
                    let {
                        children: a,
                        isRightBlockGrow: t,
                        rightBlock: i,
                        align: s = "space-between",
                        size: o = "regular",
                        href: d,
                        onClick: c,
                        isRightBlockOverflowHidden: m = !0,
                        theme: p = "default"
                    } = e, u = h(l.FK, null, h("div", {
                        className: r("left-part", {
                            grow: "space-between" === s
                        })
                    }, a), !!i && h("div", {
                        className: r("right-part", {
                            grow: t,
                            "overflow-hidden": m
                        })
                    }, i));
                    return d ? h(n.A, {
                        className: r({
                            align: s,
                            clickable: !0,
                            size: o,
                            theme: p
                        }),
                        onClick: c,
                        target: "_blank",
                        href: d
                    }, u) : h("div", {
                        className: r({
                            align: s,
                            clickable: !!c,
                            size: o,
                            theme: p
                        }),
                        onClick: c
                    }, u)
                }
        },
        64931(e, a, t) {
            t.d(a, {
                A: () => r
            });
            var l = t(62555),
                n = t(5953);
            t.p;
            let i = (0, n.Tu)("k"),
                r = e => {
                    let {
                        icon: a,
                        onClick: t,
                        className: r,
                        children: s,
                        theme: o = "default"
                    } = e;
                    return h("button", {
                        className: (0, n.xW)(i({
                            theme: o
                        }), r),
                        type: "button",
                        onClick: t
                    }, a && h(l.Ay, {
                        className: "white-color-text-opacity-4",
                        img: a,
                        size: 20
                    }), h("div", {
                        className: "flex-grow text-left"
                    }, s), h(l.Ay, {
                        className: "white-color-text-opacity-4",
                        img: "chevron-down",
                        size: 20
                    }))
                }
        },
        93716(e, a, t) {
            t.d(a, {
                rP: () => eD,
                vX: () => eF,
                oq: () => eL,
                U5: () => eI,
                bt: () => eT,
                fk: () => eS,
                IA: () => e_
            });
            var l = t(8783),
                n = t(99758),
                i = t(26154),
                r = t(78470),
                s = t(74518),
                o = t(16125),
                d = t(4875),
                c = t(58746),
                m = t(12660),
                p = t(52187),
                u = t(45185),
                g = t(39063),
                v = t(58795),
                w = t(31079),
                x = t(28550),
                y = t(33816),
                f = t(10125),
                A = t(14260),
                b = t(29788),
                k = t(11058),
                C = t(57918),
                N = t(62555),
                S = t(89500),
                I = t(5953),
                T = t(94161);
            t.p;
            let _ = (0, I.Tu)("l"),
                M = ["short", "long"],
                z = l.ph(e => {
                    let {
                        value: a,
                        onChange: t,
                        isDisabled: l,
                        children: n
                    } = e;
                    return h("div", {
                        className: _()
                    }, h("div", {
                        className: _("list")
                    }, h(S.A, {
                        style: "blur",
                        activeItemIndex: M.indexOf(a),
                        isDisabled: l,
                        onClick: e => {
                            l || M[e] === a || t(M[e])
                        },
                        items: M.map(e => h("div", {
                            key: e,
                            className: _("label")
                        }, h(N.Ay, {
                            img: "short" === e ? "chats-fill" : "open-book",
                            size: 20
                        }), (0, u.pw)(T.j[e].title)))
                    })), h("div", {
                        className: _("preview")
                    }, n ? ? h(C.A, {
                        className: _("example"),
                        id: T.j[a].example,
                        elements: {
                            action: h("em", null)
                        }
                    }), h("div", {
                        className: _("description")
                    }, (0, u.pw)(T.j[a].description))))
                });
            var L = t(23961),
                D = t(12402),
                F = t(48089),
                P = t(73500),
                R = t(61505),
                U = t(34837),
                E = t(61734),
                W = t(55233),
                K = t(37020),
                J = t(20316);
            let V = {
                    personalityText: "character_advanced",
                    lookText: "character_advanced",
                    sampleDialogue: "character_advanced",
                    customFooter: "character_advanced",
                    behaviorInstructions: "character_advanced",
                    welcomeMessage: "character_welcome_message",
                    name: "character_username",
                    userPrompt: "advanced_prompts_request"
                },
                $ = e => {
                    let {
                        isSfw: a,
                        onChangePromptType: t
                    } = e, [l, i, r] = (0, v.m)(e => {
                        let l = (0, x.Kz)((0, g.Vm)()),
                            i = {},
                            r = {},
                            s = {};
                        if (Object.entries(e).map(([e, a]) => {
                                (!a || e in l && a.length > l[e].maxAllowedLength || e in l && a.length < l[e].minAllowedLength) && (i[e] = !0)
                            }), Object.keys(i).length) return Promise.reject({
                            data: {
                                errors: i,
                                sfwErrors: r,
                                entities: s
                            }
                        });
                        let o = Object.entries(e),
                            d = o.map(([e, a]) => (0, F.V3)(a, V[e]).then(a => {
                                !a.isValid && (i[e] = !0, (0, b.l$)((0, g.Vm)()) && (s[e] = a.entities))
                            })),
                            c = a ? o.map(([e, a]) => (0, F.FL)(a).then(({
                                isSfw: a
                            }) => {
                                a || (r[e] = !0)
                            })) : [];
                        return Promise.all([...d, ...c]).then(() => {
                            if (!Object.keys(i).length && !Object.keys(r).length) return null;
                            let e = !!Object.keys(i).length;
                            return !e && a && Object.keys(r).length && (p.eC ? (0, n.tV)({
                                title: (0, u.pm)(24),
                                description: (0, u.pw)(25)
                            }) : (0, n.zt)({
                                title: (0, u.pw)(26),
                                description: (0, u.pw)(30),
                                getConfirmText: t ? () => (0, u.pw)(28) : void 0,
                                onConfirm: t && (() => t("regular")),
                                onConfirmStyle: "white-gradient"
                            })), e && (0, n.tV)({
                                title: (0, u.pm)(24),
                                description: (0, u.pw)(25)
                            }), Promise.reject({
                                data: {
                                    errors: i,
                                    sfwErrors: r,
                                    entities: s
                                }
                            })
                        }, e => {
                            (0, n.T7)(e.message)
                        })
                    });
                    return [l, i, r]
                };
            var j = t(26990),
                q = t(21020),
                O = t(42034),
                B = t(73721);
            let H = e => {
                let {
                    value: a,
                    onChange: t,
                    hasError: l,
                    onClear: n
                } = e, i = 60 - (a ? .length || 0);
                return h("label", null, h("div", {
                    className: "text-s16-w500 text-left"
                }, (0, u.pw)(68)), h("div", {
                    className: "spacer-small"
                }), h(d.A, {
                    size: "large-48",
                    placeholder: (0, u.pw)(69),
                    value: a,
                    theme: "liquid",
                    error: l,
                    onChange: e => {
                        t ? .(e.target.value)
                    },
                    suffix: h("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                        }
                    }, h("span", {
                        className: `text-s10-w500 color-grey-200 ${i<0?"error-color-text":""}`,
                        style: {
                            opacity: i < 0 ? .6 : 1
                        }
                    }, i), !!a && !!n && h(B.A, {
                        onClick: n
                    }))
                }))
            };
            var G = t(11767),
                Q = t(64931),
                X = t(5025),
                Y = t(25002),
                Z = t(81459),
                ee = t(25032),
                ea = t(68088);
            let et = l.ph(e => {
                let {
                    value: a,
                    isSfw: t,
                    onChange: n,
                    isMobile: i
                } = e, [r, s] = (0, l.J0)(!1), o = (0, Z.Qs)((0, g.Vm)()), d = (0, A.d)(x.s5), c = a || o, m = (0, A.d)(ee.IH);
                (0, l.vJ)(() => {
                    !a && o && n(o)
                }, [a, !o]);
                let p = d ? .reduce((e, a) => (m || a.tier || e.push(a.id), e), []),
                    v = () => {
                        s(!1)
                    };
                return h(l.FK, null, c && h(Q.A, {
                    icon: Y.q5[c],
                    onClick: () => {
                        s(!r)
                    },
                    theme: "transparent"
                }, (0, u.pm)(Y.hU[c])), r && h(G.A, {
                    onClose: v,
                    padding: i ? void 0 : "large-m",
                    header: h("div", {
                        className: "flex-align-center",
                        style: {
                            height: "56px"
                        }
                    }, h(ea.A, {
                        size: 20
                    }, (0, u.pw)(70)))
                }, h("div", {
                    style: {
                        padding: i ? "2px 12px 60px 12px" : "2px 0 0 0"
                    }
                }, h(X.A, {
                    onClick: e => {
                        n(e), v()
                    },
                    isSfw: t,
                    value: c,
                    llmIds: m ? void 0 : p
                }))))
            });
            var el = t(21960),
                en = t(52132),
                ei = t(44363),
                er = t(56728),
                es = t(81117),
                eo = t(72865),
                ed = t(7409);
            t.p;
            let ec = (0, I.Tu)("m"),
                em = e => {
                    let {
                        userId: a,
                        maxAllowedLength: t = 1e3,
                        value: n,
                        media: i,
                        onUpdateWelcomeMessageText: r,
                        onUpdateWelcomeMedia: s,
                        error: o,
                        entities: d,
                        onResetError: c,
                        isShowTitle: m = !0
                    } = e, p = (0, A.d)(b.sv), [v, w] = (0, l.J0)(!1), x = (0, A.d)(e => a && (0, Z.mU)(e, a));
                    return h(l.FK, null, h("div", {
                        className: ec()
                    }, m && h("div", {
                        className: "text-s16-w500 text-left"
                    }, (0, u.pw)(71)), h("div", {
                        className: ec("textarea-container", {
                            withButtons: !!a
                        })
                    }, h(en.A, {
                        id: "welcomeMessageInput",
                        value: n,
                        onChange: r,
                        minRows: 2,
                        maxAllowedLength: t,
                        placeholder: (0, u.pw)(72),
                        isShowCounter: !a,
                        onClear: () => r(""),
                        error: o,
                        entities: d,
                        onResetError: c,
                        color: "transparent"
                    }), a && h("div", {
                        className: ec("buttons-container")
                    }, p && h(l.FK, null, i && "photo" === i.type ? h(eo.Ti, {
                        previewUrl: i.urlPreview,
                        coverTooltip: null,
                        id: i.id,
                        isInModeration: !1,
                        type: "photo",
                        removeItem: () => {
                            s(null)
                        },
                        canUploadAgain: !1,
                        uploadItemAgain: er.lQ,
                        isProcessing: !1,
                        isUploading: !1,
                        typeError: null,
                        draggable: !1
                    }) : h("button", {
                        className: ec("add-image-button"),
                        onClick: () => {
                            w(!0)
                        }
                    }, h(N.Uv, {
                        img: "add-image",
                        size: 16
                    }))), h("span", {
                        className: ec("counter")
                    }, t - n.length)))), x && v && h(G.A, {
                        onClose: () => w(!1)
                    }, h(ed.A, {
                        onClick: e => {
                            s((0, es.xu)((0, g.Vm)(), e)), w(!1)
                        },
                        gender: x.mind.personality.gender,
                        isSfw: "safe" === x.mind.safetyLevel,
                        style: x.mind.imageStyle,
                        tab: "all",
                        userId: a,
                        setUserId: er.lQ
                    })))
                };
            var eh = t(93316),
                ep = t(89e3),
                eu = t(21130),
                eg = t(85210),
                ev = t(59064),
                ew = t(85193),
                ex = t(89447),
                ey = t(88729),
                ef = t(34082),
                eA = t(42452),
                eb = t(85274),
                ek = t(6953),
                eC = t(77417);
            let eN = e => {
                    let {
                        children: a,
                        title: t
                    } = e;
                    return h("div", {
                        className: "spacer-small"
                    }, h("div", {
                        className: "text-s16-w500 text-left flex-align-left"
                    }, t), h("div", {
                        className: "spacer-small"
                    }), a)
                },
                eS = e => {
                    let {
                        onUpdate: a,
                        person: t,
                        onChangePromptType: n,
                        isMobile: i,
                        requiredFieldsErrors: s
                    } = e, p = t.user.username, {
                        imagePromptEnhancer: v,
                        sexuality: w,
                        personality: k
                    } = t.mind, [C, N] = (0, l.J0)(!1), [S, I, T] = $({
                        isSfw: !1,
                        onChangePromptType: n
                    }), {
                        errors: _,
                        sfwErrors: M,
                        entities: z
                    } = S.error ? .data || {}, L = (0, A.d)(x.Kz), D = (0, A.d)(b.qJ);
                    (0, l.vJ)(() => {
                        T()
                    }, [t.mind.advanced ? .personalityText]);
                    let F = (0, r._)(e => {
                            a({
                                user: {
                                    username: e
                                }
                            })
                        }),
                        P = e => {
                            a({
                                mind: {
                                    advanced: {
                                        personalityText: e
                                    }
                                }
                            })
                        },
                        R = (0, r._)(e => {
                            let t = (0, x.s5)((0, g.Vm)());
                            (t ? .find(a => a.id === e)).tier && !(0, ee.IH)((0, g.Vm)()) ? (0, ey.ks)() ? (0, ef.os)({
                                triggerSource: "chat_token_balance"
                            }) : (0, ef.gq)({
                                triggerSource: "characters_create"
                            }) : a({
                                mind: {
                                    llmModel: e
                                }
                            })
                        }),
                        E = (0, r._)(e => {
                            a({
                                mind: {
                                    imagePromptEnhancer: e ? "on" : "off"
                                }
                            })
                        }),
                        W = (0, r._)(e => {
                            a({
                                mind: {
                                    sexuality: {
                                        orientation: e
                                    }
                                }
                            })
                        }),
                        K = C || !!s ? .age;
                    return h(l.FK, null, h(eN, {
                        title: h(l.FK, null, h("span", {
                            className: "indent-right-small-6"
                        }, (0, u.pw)(73)), h(o.A, {
                            type: "teaser",
                            size: "x-small"
                        }, h("span", {
                            className: "text-uppercase"
                        }, (0, u.pw)(74))))
                    }, h(et, {
                        value: t.mind.llmModel,
                        isSfw: "safe" === t.mind.safetyLevel,
                        onChange: R,
                        isMobile: i
                    })), h(H, {
                        value: p || "",
                        onChange: e => {
                            T(), F ? .(e)
                        },
                        onClear: () => {
                            T(), F("")
                        },
                        hasError: !!(_ ? .name || M ? .name || s ? .name)
                    }), h(ek.A, {
                        title: h("span", {
                            className: "text-s16-w500"
                        }, (0, u.pw)(75)),
                        type: "list-left"
                    }, ("female" === k.gender ? y.L3 : y.cJ).map(e => {
                        if (!(0, ev.wg)(e)) return null;
                        let a = w.orientation === e;
                        return h(eb.A, {
                            key: e,
                            isChecked: a,
                            isActive: a,
                            onClick: W,
                            clickData: e,
                            size: "small-xs",
                            style: "transparent"
                        }, (0, u.pw)(f.Dl[e]))
                    })), h(eN, {
                        title: (0, u.pw)(76)
                    }, h(d.A, {
                        size: "large-48",
                        placeholder: (0, u.pw)(77),
                        value: t.mind.personality.age,
                        error: K,
                        onChange: e => {
                            a({
                                mind: {
                                    personality: {
                                        age: e.target.value
                                    }
                                }
                            }), N(!1)
                        }
                    }), K && h("div", {
                        className: "text-s12-w400 lovescape-like-color text-left"
                    }, (0, u.pw)(78))), h(eN, {
                        title: (0, u.pw)(79)
                    }, h(en.A, {
                        value: t.mind.advanced ? .personalityText || "",
                        onChange: P,
                        maxAllowedLength: L ? .personalityText.maxAllowedLength,
                        placeholder: (0, u.pw)(eh.Ty.personalityText),
                        error: _ ? .personalityText || s ? .personalityText || M ? .personalityText && (0, u.pw)((0, U.F)()),
                        entities: z ? .personalityText,
                        onResetError: T,
                        onClear: () => P(""),
                        color: "transparent"
                    })), D && h("div", {
                        style: {
                            marginTop: "-16px"
                        }
                    }, h(c.A, {
                        size: "small-s"
                    }, h("div", {
                        className: "flex-align-between"
                    }, (0, u.pw)(80), h(m.A, {
                        size: "medium",
                        iconVisibility: !0,
                        isChecked: "on" === v,
                        onChange: E
                    })))), h(el.A, {
                        isLoading: S.fetching,
                        onClick: () => {
                            let e = Number(t.mind.personality.age);
                            !Number.isInteger(e) || parseInt(String(e)) !== e || e < 18 || e > 5e3 ? N(!0) : (a({
                                mind: {
                                    personality: {
                                        age: Number(t.mind.personality.age)
                                    }
                                }
                            }), I({
                                personalityText: t.mind.advanced ? .personalityText || "",
                                name: p
                            }).then(() => {
                                (0, q._$)("look")
                            }))
                        },
                        maxWidth: 280
                    }))
                },
                eI = e => {
                    let {
                        onUpdate: a,
                        person: t,
                        onChangePromptType: o,
                        setGeneratedAdvancedPrompt: d,
                        setIsStepperVisible: c,
                        isMobile: m
                    } = e, {
                        safetyLevel: x
                    } = t.mind, y = (0, A.d)(eC.Bu), [f, b] = (0, l.J0)(!1), [C, N] = (0, l.J0)(() => (0, i.TK)("userCustomAdvancedPrompt") || ""), S = (0, l.li)(null), [I, T] = (0, v.m)(() => (0, F.ad)(y, {
                        userPrompt: C,
                        safetyLevel: x,
                        gender: t.mind.personality.gender,
                        imageStyle: t.mind.imageStyle
                    })), [_, M, z] = $({
                        isSfw: "safe" === x,
                        onChangePromptType: o
                    }), {
                        errors: L,
                        sfwErrors: D,
                        entities: P
                    } = _.error ? .data || {}, R = I.fetching || f, E = _.fetching || R;
                    (0, l.Nf)(() => {
                        "1" === (0, k.WM)((0, g.Vm)()).autoGenerate && C.trim() && J()
                    }, []), (0, l.vJ)(() => {
                        let e = (0, k.WM)((0, g.Vm)()),
                            l = ["realistic", "anime"].includes(e.imageStyle) ? e.imageStyle : t.mind.imageStyle,
                            n = e.imageStylePreset || null,
                            i = n && (0, ep.dR)(n),
                            r = e.gender ? ? t.mind.personality.gender;
                        a({
                            mind: {
                                personality: {
                                    gender: r
                                },
                                imageStyle: l,
                                imageStylePreset: (0, eu.IN)(n, r, l),
                                safetyLevel: !p.eC && i ? "nude" : t.mind.safetyLevel
                            },
                            voiceName: (0, eg.xH)((0, eg.tR)(t), r)
                        });
                        let s = (0, k.ew)((0, g.Vm)());
                        (0, w.eq)(s.pathname)
                    }, []), (0, l.vJ)(() => {
                        if (!R) return;
                        let e = null,
                            a = Date.now(),
                            t = setInterval(() => {
                                let l = 0 | (0, ex.zi)(a, 5e4);
                                l !== e && (e = l, S.current.textContent = `${l}%`, l >= 99 && clearInterval(t))
                            }, 30);
                        return () => {
                            clearTimeout(t)
                        }
                    }, [R]);
                    let K = (0, r._)(e => {
                        let {
                            error: a,
                            data: t
                        } = e;
                        b(!1), c(!0), t ? (d(t), (0, q._$)("main")) : a && (0, n.T7)(a.message)
                    });
                    (0, s.O$)(() => [{
                        subscriptionKey: `advancedPrompts:${y}`,
                        callback: K
                    }], [y]);
                    let J = (0, r._)(() => {
                            C.trim() ? M({
                                userPrompt: C
                            }).then(() => (c(!1), T().then(() => {
                                b(!0)
                            }, e => {
                                (0, q._$)("main"), b(!1), c(!0), (0, n.T7)(e.message)
                            }))) : (0, q._$)("main")
                        }),
                        V = e => {
                            N(e), (0, i.vE)("userCustomAdvancedPrompt", e), z()
                        };
                    return h(l.FK, null, R ? h("div", {
                        className: (0, W.k)("loader")
                    }, h("div", {
                        className: (0, W.k)("loading-text")
                    }, (0, u.pw)(81)), h("div", {
                        className: (0, W.k)("loader-stars")
                    }, h(ew.A, {
                        size: m ? 120 : 200
                    }))) : h("div", {
                        className: "spacer-small position-relative"
                    }, h("label", {
                        htmlFor: "userPromptTextArea",
                        className: "text-s16-w500 text-left"
                    }, (0, u.pw)(82)), h("div", {
                        className: "spacer-small"
                    }), h(en.A, {
                        id: "userPromptTextArea",
                        value: C,
                        onChange: V,
                        maxAllowedLength: 2e3,
                        minRows: 8,
                        placeholder: (0, u.pw)(83),
                        error: L ? .userPrompt || D ? .userPrompt && (0, u.pw)((0, U.F)()),
                        entities: P ? .userPrompt,
                        onResetError: z,
                        onClear: () => V(""),
                        color: "transparent"
                    })), h(el.A, {
                        isLoading: E,
                        onClick: J,
                        loadingText: h("span", {
                            className: "indent-left-10",
                            ref: S
                        }),
                        maxWidth: 280
                    }))
                },
                eT = e => {
                    let {
                        onUpdate: a,
                        person: t,
                        onChangePromptType: n,
                        faceDiversity: i,
                        onUpdateFaceDiversity: r,
                        customMediaId: s,
                        customMediaUrl: o,
                        onChangeCustomMedia: d,
                        requiredFieldsErrors: c
                    } = e, {
                        safetyLevel: m
                    } = t.mind, [p, g, v] = $({
                        isSfw: "safe" === m,
                        onChangePromptType: n
                    }), {
                        errors: w,
                        sfwErrors: y,
                        entities: f
                    } = p.error ? .data || {}, b = (0, A.d)(x.Kz);
                    (0, l.vJ)(() => {
                        v()
                    }, [t.mind.advanced ? .lookText]);
                    let k = e => {
                        a({
                            mind: {
                                advanced: {
                                    lookText: e
                                }
                            }
                        })
                    };
                    return h(l.FK, null, h(eN, {
                        title: (0, u.pw)(84)
                    }, h(en.A, {
                        value: t.mind.advanced ? .lookText || "",
                        onChange: k,
                        minRows: 3,
                        maxAllowedLength: b ? .lookText.maxAllowedLength,
                        placeholder: (0, u.pw)(eh.Ty.lookText),
                        error: w ? .lookText || c ? .lookText || y ? .lookText && (0, u.pw)(27),
                        entities: f ? .lookText,
                        onResetError: v,
                        onClear: () => k(""),
                        color: "transparent"
                    })), "realistic" === t.mind.imageStyle && h(j.A, {
                        faceDiversity: i,
                        onChange: r,
                        currentUploadedUrl: o,
                        currentUploadedMediaId: s,
                        onChangePhoto: d,
                        triggerSource: "face_diversity_advanced_onboarding",
                        title: h("span", {
                            className: "text-s16-w500"
                        }, (0, u.pw)(85)),
                        type: "list-left"
                    }), h(el.A, {
                        isLoading: p.fetching,
                        isDisabled: "custom" === i && !s,
                        onClick: () => {
                            g({
                                lookText: t.mind.advanced ? .lookText || ""
                            }).then(() => {
                                (0, q._$)("voice")
                            })
                        },
                        maxWidth: 280
                    }))
                },
                e_ = e => {
                    let {
                        person: a,
                        onUpdate: t,
                        isMobile: n
                    } = e, i = (0, l.hb)(e => {
                        t({
                            voiceName: e
                        })
                    }, []);
                    return h(l.FK, null, h(ei.A, {
                        gender: a.mind.personality.gender,
                        onChange: i,
                        value: a.voiceName || a.voice ? .name || null,
                        isMobile: n,
                        theme: p.eC ? "default" : "transparent"
                    }), h(el.A, {
                        onClick: () => (0, q._$)(),
                        maxWidth: 280
                    }))
                },
                eM = e => {
                    let {
                        welcomeMessage: a,
                        welcomeMessageError: t,
                        sampleDialogueError: n,
                        sampleDialogue: i,
                        onUpdateSampleDialogue: r,
                        onUpdateWelcomeMessage: s,
                        customFooterError: o,
                        customFooter: d,
                        onUpdateCustomFooter: c,
                        onChangeConversationStyle: m,
                        responseLength: p,
                        behaviorInstructions: v,
                        onChangeBehaviorInstructions: w,
                        behaviorInstructionsError: y,
                        entities: f,
                        onResetError: k,
                        userId: C,
                        welcomeMedia: N,
                        onUpdateWelcomeMedia: S
                    } = e, I = (0, A.d)(x.Kz);
                    return h(l.FK, null, h(eN, {
                        title: (0, u.pw)(86)
                    }, h(en.A, {
                        value: v,
                        onChange: w,
                        minRows: 3,
                        maxAllowedLength: I ? .behaviorInstructions ? .maxAllowedLength,
                        placeholder: (0, u.pw)(eh.Ty.behaviorInstructions),
                        error: y,
                        entities: f ? .behaviorInstructions,
                        onResetError: k,
                        onClear: () => w(""),
                        color: "transparent"
                    })), h(em, {
                        value: a,
                        onUpdateWelcomeMessageText: s,
                        error: t,
                        entities: f ? .welcomeMessage,
                        onResetError: k,
                        maxAllowedLength: I ? .welcomeMessage.maxAllowedLength,
                        userId: C,
                        media: N,
                        onUpdateWelcomeMedia: S
                    }), h(eN, {
                        title: (0, u.pw)(87)
                    }, h(z, {
                        value: "short" === p ? "short" : "long",
                        onChange: m
                    }, h(en.A, {
                        value: i,
                        onChange: r,
                        minRows: 2,
                        maxHeight: 114,
                        maxAllowedLength: I ? .sampleDialogue.maxAllowedLength,
                        placeholder: (0, u.pw)(eh.Ty.sampleDialogue),
                        error: n,
                        entities: f ? .sampleDialogue,
                        onResetError: k,
                        isShowCounter: !1,
                        color: "transparent"
                    }))), (0, b.Bi)((0, g.Vm)()) && h("div", null, h("div", {
                        className: "text-s16-w500 text-left"
                    }, (0, u.pw)(88)), h("div", {
                        className: "spacer-small"
                    }), h(en.A, {
                        value: d,
                        onChange: c,
                        minRows: 6,
                        maxAllowedLength: I ? .customFooter.maxAllowedLength,
                        placeholder: (0, u.pw)(eh.Ty.customFooter),
                        error: o,
                        entities: f ? .customFooter,
                        onResetError: k,
                        color: "transparent"
                    })))
                },
                ez = e => {
                    let {
                        requestError: a,
                        entities: t,
                        onResetError: n,
                        onUpdate: i,
                        person: s,
                        welcomeMessage: o,
                        onUpdateWelcomeMessage: d,
                        onUpdateWelcomeMedia: c,
                        welcomeMedia: m,
                        generatedAdvancedPrompt: p
                    } = e, {
                        mind: u
                    } = s, {
                        responseLength: g
                    } = u.personality, {
                        advanced: v
                    } = p || {}, w = (0, l.hb)(e => {
                        i({
                            mind: {
                                advanced: {
                                    customFooter: e
                                }
                            }
                        })
                    }, []), x = (0, r._)(e => {
                        i({
                            mind: {
                                personality: {
                                    responseLength: e,
                                    storytellingMode: "long" === e
                                },
                                advanced: v ? .sampleDialogCases ? {} : {
                                    sampleDialogue: (0, U.H)("short" === e ? "short" : "long")
                                }
                            }
                        })
                    }), y = (0, r._)(e => {
                        i({
                            mind: {
                                advanced: {
                                    behaviorInstructions: e
                                }
                            }
                        })
                    });
                    return h(eM, {
                        onChangeConversationStyle: x,
                        responseLength: g,
                        userId: s.user ? .id,
                        onUpdateWelcomeMessage: d,
                        onUpdateWelcomeMedia: c,
                        welcomeMedia: m,
                        welcomeMessage: o,
                        welcomeMessageError: a ? .data ? .welcomeMessage,
                        onUpdateSampleDialogue: e => {
                            (0, E.B)(), i({
                                mind: {
                                    advanced: {
                                        sampleDialogue: e
                                    }
                                }
                            })
                        },
                        sampleDialogue: u.advanced ? .sampleDialogue || "",
                        sampleDialogueError: a ? .data ? .sampleDialogue,
                        customFooter: u.advanced ? .customFooter || "",
                        customFooterError: a ? .data ? .customFooter,
                        onUpdateCustomFooter: w,
                        onChangeBehaviorInstructions: y,
                        behaviorInstructions: u.advanced ? .behaviorInstructions || "",
                        behaviorInstructionsError: a ? .data ? .behaviorInstructions,
                        entities: t,
                        onResetError: n
                    })
                },
                eL = e => {
                    let {
                        onUpdate: a,
                        person: t,
                        welcomeMessage: n,
                        onUpdateWelcomeMessage: i,
                        onChangePromptType: r,
                        onUpdateWelcomeMedia: s,
                        welcomeMedia: o,
                        generatedAdvancedPrompt: d,
                        requiredFieldsErrors: c
                    } = e, [m, g, v] = $({
                        isSfw: "safe" === t.mind.safetyLevel,
                        onChangePromptType: r
                    }), {
                        errors: w,
                        sfwErrors: x,
                        entities: y
                    } = m.error ? .data || {};
                    (0, l.vJ)(() => {
                        v()
                    }, [n, t.mind.advanced ? .sampleDialogue]), (0, eA.Ay)({
                        isOfferAvailable: t ? .mind ? .personality ? .gender === "female"
                    });
                    let f = w || x || c ? {
                        data: {
                            welcomeMessage: w ? .welcomeMessage || c ? .welcomeMessage && (0, u.pw)(89) || x ? .welcomeMessage && (0, u.pw)((0, U.F)()),
                            sampleDialogue: w ? .sampleDialogue || x ? .sampleDialogue && (0, u.pw)((0, U.F)()),
                            behaviorInstructions: w ? .behaviorInstructions || x ? .behaviorInstructions && (0, u.pw)((0, U.F)())
                        }
                    } : void 0;
                    return h(l.FK, null, h(ez, {
                        requestError: f,
                        entities: y,
                        onResetError: v,
                        onUpdate: a,
                        onUpdateWelcomeMessage: i,
                        person: t,
                        welcomeMessage: n,
                        onUpdateWelcomeMedia: s,
                        welcomeMedia: o,
                        generatedAdvancedPrompt: d
                    }), h(O.A, null, h("div", {
                        style: {
                            width: "280px",
                            maxWidth: "100%"
                        }
                    }, h(L.Ay, {
                        style: p.eC ? "green-gradient" : "pink-gradient",
                        size: "squad48",
                        rounded: "size-xl",
                        widthSize: "wide",
                        loading: m.fetching,
                        disabled: m.fetching,
                        onClick: () => {
                            let e = {
                                welcomeMessage: n
                            };
                            t.mind.advanced ? .behaviorInstructions && (e.behaviorInstructions = t.mind.advanced ? .behaviorInstructions), t.mind.advanced ? .sampleDialogue && (e.sampleDialogue = t.mind.advanced ? .sampleDialogue), g(e).then(() => {
                                (0, K.Yg)({
                                    callback: () => (0, q._$)("photo"),
                                    triggerSource: "bring_my_character_to_life",
                                    mind: t.mind
                                })
                            })
                        }
                    }, (0, u.pw)(90)))))
                },
                eD = e => {
                    let {
                        welcomeMessage: a,
                        onUpdate: t,
                        onUpdateWelcomeMessage: i,
                        person: r,
                        onUpdateWelcomeMedia: s,
                        welcomeMedia: o
                    } = e, [d, c, m] = $({
                        isSfw: "safe" === r.mind.safetyLevel
                    }), {
                        errors: p,
                        sfwErrors: g,
                        entities: w
                    } = d.error ? .data || {}, [x, y] = (0, v.m)(async () => {
                        let e = r.voiceName || r.voice ? .name;
                        return (0, D.lL)({
                            voiceName: e,
                            mind: r.mind,
                            user: {
                                username: r.user.username,
                                gender: r.mind.personality.gender
                            },
                            welcomeMessage: a,
                            welcomeMediaId: o ? .id,
                            creationSource: null
                        }, {
                            personId: r.user.id,
                            storageNames: ["loveScapePersonSetup", "lovescapeAdvancedWelcomeMessage"]
                        }).then(e => {
                            e && (0, n.MG)({
                                title: (0, u.pw)(91)
                            })
                        })
                    });
                    (0, l.vJ)(() => {
                        m()
                    }, [a, r.mind.advanced ? .sampleDialogue]);
                    let f = p || g ? {
                        data: {
                            welcomeMessage: p ? .welcomeMessage || g ? .welcomeMessage && (0, u.pw)((0, U.F)()),
                            sampleDialogue: p ? .sampleDialogue || g ? .sampleDialogue && (0, u.pw)((0, U.F)()),
                            behaviorInstructions: p ? .behaviorInstructions || g ? .behaviorInstructions && (0, u.pw)((0, U.F)())
                        }
                    } : void 0;
                    return h(l.FK, null, h(ez, {
                        requestError: f,
                        entities: w,
                        onResetError: m,
                        onUpdate: t,
                        onUpdateWelcomeMessage: i,
                        person: r,
                        welcomeMessage: a,
                        onUpdateWelcomeMedia: s,
                        welcomeMedia: o,
                        generatedAdvancedPrompt: null
                    }), h(O.A, null, h("div", {
                        style: {
                            width: "320px",
                            maxWidth: "100%"
                        }
                    }, h(L.Ay, {
                        style: "green-gradient",
                        size: "squad48",
                        rounded: "size-xl",
                        loading: x.fetching || d.fetching,
                        onClick: () => {
                            c({
                                welcomeMessage: a,
                                sampleDialogue: r.mind.advanced ? .sampleDialogue || "",
                                behaviorInstructions: r.mind.advanced ? .behaviorInstructions || ""
                            }).then(() => {
                                p || g || y()
                            })
                        },
                        widthSize: "wide"
                    }, (0, u.pw)(92)))))
                },
                eF = e => {
                    let {
                        isMobile: a,
                        person: t,
                        userId: i,
                        photos: r,
                        setPhotos: s,
                        generationId: o,
                        regeneratePhotos: c,
                        onRegeneratePhoto: m,
                        welcomeMessage: v,
                        isGenerationInProgress: w,
                        customMediaId: x,
                        onEdit: y
                    } = e, [f, A] = (0, l.J0)(""), {
                        imageUploadSocket: k,
                        saveRequest: C,
                        saveState: N,
                        isProcessing: S,
                        isRegenerationAllowed: I
                    } = (0, J.A)({
                        person: t,
                        userId: i,
                        generationId: o,
                        photos: r,
                        welcomeMessage: v,
                        login: f,
                        customMediaId: x
                    }), T = r.find(e => e.isChecked);
                    return h(P.A, {
                        isMobile: a,
                        photos: r,
                        setPhotos: s,
                        onRegenerate: m,
                        onEdit: y
                    }, k, (0, b.Q7)((0, g.Vm)(), "isPersonSetupLoginEnabled") && h("div", {
                        style: {
                            margin: "32px auto 0px",
                            maxWidth: "340px",
                            textAlign: "left"
                        }
                    }, h("label", {
                        className: (0, P.O)("label")
                    }, h("div", {
                        className: "text-s16-w500 spacer-medium"
                    }, (0, u.pw)(93)), h(d.A, {
                        value: f,
                        onChange: e => A(e.target.value),
                        error: N.error ? .data ? .login ? .[0],
                        disabled: !!i,
                        name: "login",
                        size: "large",
                        className: "spacer-small"
                    }))), h(O.A, null, h("div", {
                        className: "n__footer-btn"
                    }, h(R.A, {
                        isDisabled: !I || w,
                        isRegenerationAllowed: r.length < 4,
                        onClick: c,
                        isMobile: a
                    }), h(L.Ay, {
                        size: "squad48",
                        style: p.eC ? "green-gradient" : "pink-gradient",
                        rounded: "size-xl",
                        disabled: N.fetching || !T ? .url || S,
                        loading: N.fetching || S,
                        widthSize: "wide",
                        onClick: () => {
                            (0, K.Yg)({
                                callback: () => {
                                    C().catch(e => {
                                        throw (0, n.T7)(e.message), e
                                    })
                                },
                                triggerSource: "characters_create"
                            })
                        }
                    }, (0, u.pw)(i ? 94 : 95)))))
                }
        },
        3925(e, a, t) {
            var l = t(8783),
                n = t(93716);
            t.d(a, ["A", 0, e => {
                let {
                    person: a,
                    isMobile: t,
                    userId: i,
                    welcomeMessage: r,
                    photos: s,
                    setPhotos: o,
                    generationId: d,
                    isGenerationInProgress: c,
                    customMediaId: m,
                    onGeneratePhoto: p,
                    presetsModal: u,
                    onOpenPresetModal: g
                } = e;
                return h(l.FK, null, h(n.vX, {
                    person: a,
                    isMobile: t,
                    userId: i,
                    photos: s,
                    setPhotos: o,
                    generationId: d,
                    customMediaId: m,
                    regeneratePhotos: () => p({
                        mind: a.mind
                    }),
                    onRegeneratePhoto: e => p({
                        mind: a.mind,
                        photoIndex: e
                    }),
                    welcomeMessage: r,
                    isGenerationInProgress: c,
                    onEdit: s.length < 4 ? g : void 0
                }), u)
            }])
        },
        26990(e, a, t) {
            t.d(a, {
                A: () => z
            });
            var l = t(8783),
                n = t(82610),
                i = t(78470),
                r = t(62555),
                s = t(45185),
                o = t(39063),
                d = t(91654),
                c = t(14260),
                m = t(29788),
                p = t(67804),
                u = t(5616),
                g = t(97812),
                v = t(2826),
                w = t(5953),
                x = t(49952),
                y = t(38570),
                f = t(30287),
                A = t(58795),
                b = t(44536),
                k = t(81117);
            t.p;
            let C = (0, w.Tu)("o"),
                N = e => {
                    let {
                        onAttach: a,
                        onReset: t,
                        text: n,
                        currentUrl: i,
                        currentMediaId: s
                    } = e, o = (0, c.d)(e => s ? (0, k.xu)(e, s) : null), [d, m] = (0, l.J0)(""), [p, u, N] = (0, A.m)(async e => ((0, w.pT)(e.type) && (e = await (0, f.U_)(e, 1)), m(URL.createObjectURL(e)), a(e)));
                    (0, l.vJ)(() => {
                        s && !o && (0, b.$k)([s])
                    }, [s]);
                    let S = i || o ? .urlPreview;
                    return h("section", {
                        className: C()
                    }, S ? h("div", {
                        className: C("upload")
                    }, h(g.A, {
                        src: S || d,
                        className: C("image")
                    }), h("button", {
                        type: "button",
                        onClick: () => {
                            N(), m(""), t()
                        },
                        className: C("close")
                    }, h(r.Uv, {
                        img: "close-3",
                        size: 16
                    })), p.fetching && h(v.d, {
                        size: 24
                    })) : h("button", {
                        type: "button",
                        className: C("upload", {
                            empty: !0
                        }),
                        onClick: () => {
                            (0, x.A)({
                                accept: y.ax,
                                callback(e) {
                                    u(e.target.files[0])
                                }
                            })
                        }
                    }, h(r.Uv, {
                        img: "upload-2",
                        size: 24
                    })), h("div", {
                        className: C("text")
                    }, n))
                };
            var S = t(25032),
                I = t(85274),
                T = t(6953),
                _ = t(77417),
                M = t(37421);
            let z = l.ph(e => {
                let {
                    currentUploadedUrl: a,
                    currentUploadedMediaId: t,
                    faceDiversity: g,
                    onChangePhoto: v,
                    onChange: w,
                    type: x = "list",
                    title: y,
                    triggerSource: f
                } = e, A = (0, c.d)(m.z8), b = (0, c.d)(_.cz), k = (0, c.d)(S.LP), C = (0, c.d)(S.yz), z = (0, c.d)(S.mV), L = (0, i._)(e => {
                    (0, p.Ge)(f, e), w(e)
                }), D = (0, i._)(async e => {
                    let {
                        photo: a
                    } = await (0, n.g)(e, {
                        context: "SC-TwinLook"
                    });
                    v({
                        id: a.mediaStorageId,
                        url: a.url
                    })
                }), F = (0, i._)(() => b && k ? L("custom") : (0, M.WR)((0, o.Vm)()) ? void(0, d.ZT)("documentsVerification", {
                    triggerSource: f,
                    triggerModal: "documents_verification"
                }) : (0, u.Bp)({
                    onSuccess: F,
                    triggerSource: "face_diversity_onboarding",
                    triggerModal: "signup"
                })), P = (0, l.hb)(() => v(null), []), R = "custom" === g;
                if ((0, l.vJ)(() => {
                        R && (k && b && A || w("default"))
                    }, [R]), !k && !z || !A) return null;
                let U = !C && z && h(r.Ay, {
                    img: "magic-star",
                    size: 16,
                    style: {
                        "--icon-fill": "url(#lovescape_yellow_gradient)",
                        position: "absolute",
                        top: "-4px",
                        right: "-4px",
                        pointerEvents: "none"
                    }
                });
                return h(l.FK, null, h(T.A, {
                    title: y || (0, s.pw)(85),
                    type: x
                }, h(I.A, {
                    isChecked: "default" === g,
                    isActive: "default" === g,
                    onClick: L,
                    clickData: "default",
                    size: "small-xs",
                    style: "transparent"
                }, h("span", {
                    className: "text-s12-w500"
                }, (0, s.pw)(96))), A && h(I.A, {
                    isChecked: R,
                    isActive: R,
                    onClick: F,
                    size: "small-xs",
                    style: "transparent"
                }, h(r.Ay, {
                    img: "upload-2",
                    size: 16,
                    className: "indent-right-small-8"
                }), h("span", {
                    className: "text-s12-w500"
                }, (0, s.pw)(97)), U)), R && h(N, {
                    currentUrl: a,
                    currentMediaId: t,
                    onAttach: D,
                    onReset: P,
                    text: (0, s.pw)(98)
                }))
            })
        },
        21960(e, a, t) {
            var l = t(62555),
                n = t(45185),
                i = t(14260),
                r = t(11050),
                s = t(23961),
                o = t(55233),
                d = t(21020);
            t.d(a, ["A", 0, e => {
                let {
                    onClick: a,
                    text: t = n.pw(99),
                    children: c,
                    canGoToConfirm: m,
                    isDisabled: p,
                    isLoading: u,
                    confirmStep: g,
                    loadingText: v,
                    maxWidth: w
                } = e, x = i.d(r.pK);
                return h("div", {
                    className: o.k("footer", {
                        cookie: !x
                    })
                }, h("div", {
                    className: "n__footer-btn",
                    style: w ? {
                        maxWidth: `${w}px`
                    } : void 0
                }, c, h(s.Ay, {
                    style: "white-gradient",
                    size: "squad48",
                    rounded: "size-xl",
                    widthSize: "wide",
                    loading: u,
                    disabled: u || p,
                    onClick: a,
                    loadingText: v
                }, t), m && !!g && h(s.Ay, {
                    style: "white-gradient",
                    size: "squad48",
                    rounded: "size-xl",
                    onClick: () => d.qk(g, "fast_forward")
                }, h(l.Uv, {
                    img: "fast-forward",
                    size: 24
                }))))
            }])
        },
        52132(e, a, t) {
            var l = t(50473),
                n = t(45185),
                i = t(73721);
            t.d(a, ["A", 0, e => {
                let {
                    value: a,
                    placeholder: t,
                    title: r,
                    error: s,
                    color: o,
                    maxAllowedLength: d = 1e3,
                    onChange: c,
                    readOnly: m,
                    isShowCounter: p = !0,
                    minRows: u = 5,
                    children: g,
                    onFocus: v,
                    onBlur: w,
                    onClear: x,
                    id: y,
                    maxHeight: f,
                    entities: A,
                    onResetError: b
                } = e;
                return h("div", {
                    className: "settings-field"
                }, r && h("label", {
                    className: "settings-label"
                }, n.pw(r)), h("div", {
                    className: "settings-input c position-relative"
                }, h(l.A, {
                    minRows: u,
                    onChange: e => c(e.target.value),
                    error: s,
                    value: a,
                    placeholder: t,
                    readOnly: m,
                    maxAllowedLength: d,
                    isShowCounter: p,
                    onFocus: v,
                    onBlur: w,
                    color: o || "dark",
                    id: y,
                    maxHeight: f,
                    entities: A,
                    onResetError: b,
                    resizeOnClear: !0
                }), !!a && x && h("div", {
                    style: {
                        position: "absolute",
                        top: "12px",
                        right: "12px"
                    }
                }, h(i.A, {
                    onClick: x
                }))), g)
            }])
        },
        73721(e, a, t) {
            t.d(a, {
                A: () => s
            });
            var l = t(8783),
                n = t(62555),
                i = t(94720),
                r = t(45185);
            t.p;
            let s = e => {
                let a = (0, l.li)(null);
                return h("button", {
                    className: "d",
                    ref: a,
                    onClick: e.onClick
                }, h(n.Uv, {
                    img: "close-filled",
                    size: 18
                }), h(i.A, {
                    placement: "top",
                    targetRef: a
                }, (0, r.pw)(23)))
            }
        },
        44363(e, a, t) {
            var l = t(8783),
                n = t(85161),
                i = t(45185),
                r = t(33816),
                s = t(37020),
                o = t(85274),
                d = t(6953),
                c = t(51070),
                m = t(3313);
            t.d(a, ["A", 0, e => {
                let {
                    gender: a,
                    value: t,
                    onChange: p,
                    isMobile: u,
                    theme: g = "default"
                } = e, v = "male" === a ? r.Xo : r.up, [w, x] = l.J0(() => {
                    let e = v[0];
                    if (!t) return e;
                    let l = Object.entries("male" === a ? r.k5 : r.tM).find(([e, a]) => {
                        if (a.includes(t)) return e
                    });
                    return l ? .[0] || e
                }), y = "male" === a ? r.k5[w] : r.tM[w];
                return h("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: u ? "12px" : "20px",
                        marginTop: "12px"
                    }
                }, h("div", {
                    className: "text-s16-w500 text-center"
                }, i.pw(100)), h("div", {
                    style: u ? {
                        margin: "0 -12px"
                    } : void 0
                }, h(n.A, {
                    arrowSize: 20,
                    isOverflowX: !0
                }, h("div", {
                    style: {
                        width: "100%",
                        alignItems: "center",
                        display: "inline-flex",
                        gap: "10px",
                        justifyContent: u ? "flex-start" : "center",
                        margin: "2px auto",
                        padding: "0 12px"
                    }
                }, v.map(e => h(o.A, {
                    key: e,
                    size: "small-xs",
                    isActive: e === w,
                    clickData: e,
                    onClick: x,
                    style: "transparent"
                }, i.pw(m.$t[e]))), u && h("div", {
                    style: {
                        minWidth: "1px",
                        height: "12px"
                    }
                })))), h(d.A, {
                    columns: u ? 2 : 4
                }, y.map(e => h(c.A, {
                    key: e,
                    isChecked: t === e,
                    name: e,
                    title: i.pw(m.EO(e, a)),
                    onClick: p,
                    url: s.ox(a, e.toLowerCase()),
                    style: g
                }))))
            }])
        },
        61734(e, a, t) {
            let [l, n] = t(61491).yL();
            t.d(a, ["B", 0, n, "j", 0, l])
        },
        20316(e, a, t) {
            var l = t(12402),
                n = t(88075),
                i = t(89e3);
            t.d(a, ["A", 0, e => {
                let {
                    person: a,
                    userId: t,
                    photos: r,
                    generationId: s,
                    customMediaId: o,
                    welcomeMessage: d,
                    login: c
                } = e, {
                    selectedGeneratedPhoto: m,
                    saveState: p,
                    saveRequest: u,
                    isProcessing: g,
                    setIsProcessing: v,
                    imageUploadSocket: w
                } = (0, n.A)({
                    photos: r,
                    generationId: s,
                    onImageReady: e => {
                        l.lL({
                            mind: i.eh(a.mind, m, "advanced"),
                            voiceName: a.voiceName,
                            look: i.eG(e.mediaId, o),
                            user: {
                                username: a.user.username,
                                avatarMediaId: e.mediaId,
                                gender: a.mind.personality.gender,
                                login: c
                            },
                            welcomeMessage: d,
                            creationSource: null,
                            signature: a.signature
                        }, {
                            personId: t,
                            storageNames: ["loveScapePersonSetup"]
                        }).finally(() => {
                            v(!1)
                        })
                    }
                });
                return {
                    saveRequest: u,
                    saveState: p,
                    isRegenerationAllowed: r.some(e => e.url || e.error),
                    isProcessing: g,
                    setIsProcessing: v,
                    imageUploadSocket: w
                }
            }])
        },
        4043(e, a, t) {
            var l = t(8783),
                n = t(56728),
                i = t(14260),
                r = t(70632),
                s = t(54267),
                o = t(34988),
                d = t(37421);
            t.d(a, ["z", 0, e => {
                let {
                    mind: a,
                    isPhotoStep: t,
                    onPresetChange: c,
                    generateForGuest: m = !1,
                    signature: p
                } = e, u = i.d(d.WR), {
                    handleGeneratePhoto: g,
                    photos: v,
                    setPhotos: w,
                    generationId: x,
                    isGenerationInProgress: y,
                    lastSentMind: f,
                    faceDiversity: A,
                    handleChangeFaceDiversity: b
                } = s.E();
                (0, o.A)({
                    setPhotos: w,
                    generateForGuest: m
                });
                let [k, C] = l.J0(null), {
                    presetsModal: N,
                    onOpenPresetModal: S
                } = (0, r.A)({
                    promptType: "advanced",
                    imageStyle: a ? .imageStyle,
                    imageStylePreset: a ? .imageStylePreset,
                    gender: a ? .personality.gender,
                    isSfw: a ? .safetyLevel === "safe",
                    onChange: c
                });
                return l.vJ(() => {
                    a && t && u && !n.n4(f.current, a) && g({
                        mind: a,
                        selectedGeneratedPhotoId: "custom" === A ? k ? .id : void 0,
                        signature: p
                    })
                }, [a, !!u, t]), {
                    handleGeneratePhoto: g,
                    photos: v,
                    setPhotos: w,
                    generationId: x,
                    isGenerationInProgress: y,
                    lastSentMind: f,
                    faceDiversity: A,
                    handleChangeFaceDiversity: b,
                    customMedia: k,
                    setCustomMedia: C,
                    presetsModal: N,
                    onOpenPresetModal: S
                }
            }])
        },
        88075(e, a, t) {
            var l = t(8783),
                n = t(78470),
                i = t(94089),
                r = t(58795),
                s = t(14260),
                o = t(12402),
                d = t(37421);
            t.d(a, ["A", 0, e => {
                let {
                    photos: a,
                    generationId: t,
                    onBeforeUpload: c,
                    onImageReady: m
                } = e, p = s.d(d.WR), [u, g] = l.J0(!1), v = a.find(e => e.isChecked), [w, x] = r.m(async () => {
                    if (c ? .() === !1) return;
                    let e = await o.EC(v.url, t, v.generationTaskId);
                    return e && g(!0), e
                }), y = w.data, f = n._(e => {
                    "full" === e.name && y ? .url.replace("-full", "") === e.fileName ? .replace("-mc-original", "") && m(y)
                });
                return {
                    selectedGeneratedPhoto: v,
                    photo: y,
                    saveState: w,
                    saveRequest: x,
                    isProcessing: u,
                    setIsProcessing: g,
                    imageUploadSocket: !!p && !!y && h(i.TQ, {
                        events: [{
                            subscriptionKey: `image:upload:${p}`,
                            callback: f
                        }]
                    })
                }
            }])
        },
        21020(e, a, t) {
            var l = t(61491),
                n = t(12402);
            t.d(a, ["Gc", 0, e => l.eo("loveScapeSetupChangeStep", e), "K1", 0, e => l.eo("loveScapeAdvancedSetupChangeStep", e), "_$", 0, e => l.sN("loveScapeAdvancedSetupChangeStep", e), "qk", 0, (e, a = "onboarding_next") => (n.HW(a), l.sN("loveScapeSetupChangeStep", e))])
        },
        85210(e, a, t) {
            t.d(a, {
                Sm: () => o,
                qW: () => s,
                tR: () => r,
                xH: () => d
            });
            var l = t(33816);
            let n = {
                    male: [...l.s4],
                    female: [...l.$L, "Innocent", "Seductress", "Dominant", "Standard", "granny-relaxing", "granny-confident", "granny-soothing", "granny-comforting"]
                },
                i = {
                    male: l.k5.trending[0],
                    female: l.tM.trending[0],
                    transwoman: l.tM.trending[0]
                },
                r = e => e ? .voiceName || e ? .voice ? .name || null,
                s = (e, a) => !e || n["male" === a ? "male" : "female"].includes(e),
                o = e => i[e || "female"] || i.female,
                d = (e, a, t) => s(e, a) ? e || null : t || o(a)
        }
    }
]);