(globalThis.webpackChunk || = []).push([
    [1352], {
        97812(e, a, t) {
            var i = t(55688);
            t.d(a, ["A", 0, e => {
                let {
                    src: a,
                    className: t,
                    alt: s
                } = e;
                if (0 === i.A(a)) return h("img", {
                    src: a,
                    className: t,
                    alt: s
                })
            }])
        },
        25940(e, a, t) {
            t.d(a, {
                PX: () => w,
                T3: () => f,
                iD: () => S,
                Iu: () => k
            });
            var i = t(8783),
                s = t(45185),
                r = t(14332),
                n = t(33816),
                l = t(94083),
                o = t(10125),
                d = t(14260),
                c = t(77744),
                u = t(23874),
                m = t(85274);
            let g = i.ph(e => {
                let {
                    item: a,
                    title: t,
                    isMobile: i,
                    hasValue: s,
                    isActive: r,
                    isBlurred: n,
                    videoFolder: l,
                    imagePrefix: o,
                    onClick: d
                } = e, c = a.toLowerCase().replace(/[\s_-]/g, "");
                return h(m.A, {
                    size: i ? "tall" : "rect-x",
                    imageSize: "full",
                    isPale: s && !r,
                    isChecked: r,
                    isActive: r,
                    isBlurred: n,
                    clickData: a,
                    onClick: d,
                    img: (0, u.VP)(`${o}${c}`),
                    video: (0, u.hv)(`${l?`${l}/`:""}${c}`)
                }, h("span", {
                    className: "text-s16-w500"
                }, t))
            });
            var p = t(6105),
                y = t(6953);
            let v = ["tentacles", "teacher", "collegeStudent", "nekomimi", "futanari", "milf", "femdom", "pregnant", "nurse", "fantasy", "dandere", "idol"],
                b = e => {
                    let {
                        person: a,
                        isMobile: t,
                        list: n,
                        imagePrefix: l,
                        videoFolder: o,
                        translations: u,
                        title: m,
                        onUpdate: p
                    } = e, v = a.mind.personality.personality, b = (0, d.d)(r.W8), f = () => (0, s.pw)(m), w = (0, i.hb)(e => {
                        p({
                            mind: {
                                personality: {
                                    personality: e
                                }
                            }
                        })
                    }, []);
                    (0, i.vJ)(() => {
                        v && !n.includes(v) && p({
                            mind: {
                                personality: {
                                    personality: null
                                }
                            }
                        })
                    }, [v]);
                    let k = t ? 2 : 4;
                    return (0, c.C)({
                        columnsCount: k,
                        list: n,
                        activeValue: v,
                        onUpdate: w
                    }), h("div", {
                        style: {
                            margin: "0 auto",
                            maxWidth: "640px"
                        }
                    }, h(y.A, {
                        title: t ? f() : h("div", {
                            className: "text-s24-w700 align-center",
                            style: {
                                margin: "0 0 40px"
                            }
                        }, f()),
                        columns: k
                    }, n.map(e => h(g, {
                        key: e,
                        isMobile: t,
                        hasValue: !!v,
                        isActive: v === e,
                        isBlurred: b,
                        imagePrefix: l,
                        videoFolder: o,
                        onClick: w,
                        item: e,
                        title: (0, s.pw)(u[e])
                    }))))
                },
                f = e => h(b, { ...e,
                    imagePrefix: "hentai/",
                    videoFolder: "anime",
                    translations: p.R6,
                    list: v,
                    title: 4844
                }),
                w = e => {
                    let {
                        imageStyle: a
                    } = e.person.mind;
                    return h(b, { ...e,
                        imagePrefix: `personality/male/${a}/`,
                        videoFolder: "boys",
                        translations: o.Ac,
                        title: 4845,
                        list: "realistic" === a ? n.wh : n.y4
                    })
                },
                k = e => {
                    let {
                        imageStyle: a
                    } = e.person.mind;
                    return h(b, { ...e,
                        imagePrefix: `personality/transwoman/${a}/`,
                        videoFolder: `transwoman/${a}`,
                        translations: l.Z,
                        title: 688,
                        list: "realistic" === a ? n.Jm : n.TX
                    })
                },
                S = e => h(b, { ...e,
                    imagePrefix: "irl/",
                    videoFolder: "irl",
                    translations: p.UX,
                    list: n.W2,
                    title: 4846
                })
        },
        87331(e, a, t) {
            var i = t(8783),
                s = t(23874),
                r = t(57918),
                n = t(45185),
                l = t(11011),
                o = t(57122),
                d = t(16808),
                c = t(8024),
                u = t(93316),
                m = t(85274),
                g = t(6953);
            let p = e => s.VP(`mind-style/${e}-girl`),
                y = e => {
                    let {
                        person: a,
                        isMobile: t,
                        translationKey: s,
                        onUpdate: o,
                        getImage: c,
                        getVideo: p
                    } = e, y = a.mind.imageStyle, {
                        getUtmMedia: v
                    } = (0, d.A)(), b = () => h(r.A, {
                        elements: {
                            accent: h("span", {
                                className: "lovescape-blue-gradient-text"
                            })
                        },
                        id: s
                    }), f = i.hb(e => {
                        o({
                            mind: {
                                imageStyle: e
                            }
                        })
                    }, []);
                    return h("div", {
                        style: {
                            margin: "0 auto",
                            maxWidth: "900px"
                        }
                    }, h(g.A, {
                        title: t ? b() : h("div", {
                            className: "text-s24-w700 align-center",
                            style: {
                                margin: "0 0 40px"
                            }
                        }, b()),
                        columns: 2
                    }, u.C.map((e, a) => {
                        let i = v(a, {
                            img: c(e),
                            video: p ? .(e)
                        });
                        return h(m.A, {
                            key: e,
                            size: t ? "tall" : "rect-x",
                            imageSize: "full",
                            isPale: !!y && y !== e,
                            isChecked: y === e,
                            isActive: y === e,
                            clickData: e,
                            onClick: f,
                            autoPlay: !!i && !i ? .img,
                            ...i
                        }, h("span", {
                            className: "text-s24-w700"
                        }, n.pw(l.xS[e])))
                    })))
                };
            t.d(a, ["DG", 0, e => h(y, { ...e,
                getImage: p,
                translationKey: 4847,
                getVideo: (e, a = "") => s.hv(`girlfriend/${e}_reversed${a}`)
            }), "P4", 0, e => h(y, { ...e,
                translationKey: 693,
                getImage: o.Ht,
                getVideo: (e, a = "") => s.hv(`transwoman/default/${e}_reversed${a}`)
            }), "aG", 0, e => h(y, { ...e,
                translationKey: 730,
                getImage: o.IU,
                getVideo: (e, a = "") => s.hv(`female/indian/${e}_reversed${a}`)
            }), "ec", 0, e => {
                let {
                    onUpdate: a,
                    ...t
                } = e;
                return h(y, { ...t,
                    translationKey: 730,
                    getImage: e => s.VP(`mind-style/boys/${e}/style`),
                    getVideo: e => s.hv(`boys/${e}`),
                    onUpdate: e => {
                        let t = e.mind ? .imageStyle,
                            i = "anime" === t ? Object.keys(c.f)[0] : Object.keys(c.T)[0],
                            s = "anime" === t ? c.f[i] : c.T[i];
                        a({
                            mind: { ...e.mind,
                                personality: { ...s,
                                    personality: i
                                }
                            }
                        })
                    }
                })
            }, "ed", 0, e => h(y, { ...e,
                getImage: e => s.VP(`mind-style/dating-${e}-girl`),
                translationKey: 4848,
                getVideo: (e, a = "") => s.hv(`girlfriend/dating-${e}-girl_reversed${a}`)
            })])
        },
        62137(e, a, t) {
            t.r(a), t.d(a, {
                default: () => G
            });
            var i = t(31079),
                s = t(8783),
                r = t(23874),
                n = t(57918),
                l = t(64304),
                o = t(45185),
                d = t(14332),
                c = t(14260),
                u = t(11050),
                m = t(23961),
                g = t(16332);
            let p = ["intro", "warning", "disclaimer", "1step", "2step", "3step", "4step", "matches", "hardcore", "family_mode"],
                y = {
                    intro: {
                        key: "intro",
                        urlKey: "intro",
                        category: 4849,
                        text: 4850,
                        answers: [{
                            label: 4851,
                            value: "ready"
                        }]
                    },
                    warning: {
                        key: "warning",
                        urlKey: "warning",
                        category: 4852,
                        text: 4853,
                        answers: [{
                            label: 4854,
                            value: "yes"
                        }, {
                            label: 4855,
                            value: "no",
                            buttonStyle: "black-light"
                        }]
                    },
                    disclaimer: {
                        key: "disclaimer",
                        urlKey: "disclaimer",
                        category: 4856,
                        text: 4857,
                        answers: [{
                            label: 4858,
                            value: "yes"
                        }, {
                            label: 4859,
                            value: "try",
                            buttonStyle: "black-light"
                        }]
                    },
                    "1step": {
                        key: "1step",
                        urlKey: "1step",
                        category: 4860,
                        title: 4861,
                        answers: [{
                            label: 4862,
                            value: "stepmom",
                            redirectUrl: "/chat/S_Next_Door"
                        }, {
                            label: 4863,
                            value: "neighbour",
                            redirectUrl: "/chat/FlirtyOlivia"
                        }, {
                            label: 4864,
                            value: "sexy_aunt",
                            redirectUrl: "/chat/Galia-4ba9e2482ee37a379c6"
                        }, {
                            label: 4865,
                            value: "stepsister",
                            redirectUrl: "/chat/CozyLilly"
                        }]
                    },
                    "2step": {
                        key: "2step",
                        urlKey: "2step",
                        category: 4866,
                        title: 4867,
                        answers: [{
                            label: 4868,
                            value: "small"
                        }, {
                            label: 4869,
                            value: "medium"
                        }, {
                            label: 4870,
                            value: "big"
                        }, {
                            label: 4871,
                            value: "huge"
                        }]
                    },
                    "3step": {
                        key: "3step",
                        urlKey: "3step",
                        category: 4872,
                        title: 4873,
                        answers: [{
                            label: 4874,
                            value: "shaved"
                        }, {
                            label: 4875,
                            value: "trimmed"
                        }, {
                            label: 4876,
                            value: "hairy"
                        }, {
                            label: 4877,
                            value: "pierced"
                        }]
                    },
                    "4step": {
                        key: "4step",
                        urlKey: "4step",
                        category: 4878,
                        title: 4879,
                        answers: [{
                            label: 4868,
                            value: "small"
                        }, {
                            label: 4880,
                            value: "round"
                        }, {
                            label: 4881,
                            value: "perky"
                        }, {
                            label: 4871,
                            value: "huge"
                        }]
                    },
                    matches: {
                        key: "matches",
                        urlKey: "matches",
                        category: 4882,
                        text: 4883,
                        answers: [{
                            label: 4884,
                            value: "sweet_clingy"
                        }, {
                            label: 4885,
                            value: "dominant"
                        }, {
                            label: 4886,
                            value: "inexperienced"
                        }, {
                            label: 4887,
                            value: "wild_cosplayer"
                        }]
                    },
                    hardcore: {
                        key: "hardcore",
                        urlKey: "hardcore",
                        category: 4888,
                        title: 4889,
                        answers: [{
                            label: 4890,
                            value: "yes"
                        }, {
                            label: 4891,
                            value: "later",
                            buttonStyle: "black-light"
                        }]
                    },
                    family_mode: {
                        key: "family_mode",
                        urlKey: "family_mode",
                        category: 4892,
                        text: 4893,
                        answers: [{
                            label: 4894,
                            value: "uncensored"
                        }, {
                            label: 4895,
                            value: "censored",
                            buttonStyle: "black-light"
                        }]
                    }
                },
                v = { ...y,
                    intro: { ...y.intro,
                        text: 4896
                    },
                    warning: { ...y.warning,
                        answers: [{
                            label: 4897,
                            value: "yes"
                        }, {
                            label: 4855,
                            value: "no",
                            buttonStyle: "black-light"
                        }]
                    },
                    disclaimer: { ...y.disclaimer,
                        category: 4898,
                        text: 4899,
                        answers: [{
                            label: 4897,
                            value: "yes"
                        }, {
                            label: 4855,
                            value: "no",
                            buttonStyle: "black-light"
                        }]
                    },
                    "4step": { ...y["4step"],
                        title: 4900
                    },
                    matches: { ...y.matches,
                        category: 4901,
                        text: 4902,
                        answers: [{
                            label: 4903,
                            value: "quick"
                        }, {
                            label: 4904,
                            value: "story"
                        }]
                    },
                    hardcore: { ...y.hardcore,
                        answers: [{
                            label: 4897,
                            value: "yes"
                        }, {
                            label: 4855,
                            value: "no",
                            buttonStyle: "black-light"
                        }]
                    }
                };
            var b = t(5953);
            t.p;
            let f = (0, b.Tu)("g0");
            var w = t(26154),
                k = t(53315),
                S = t(39063),
                x = t(29788),
                N = t(5616),
                A = t(34082),
                C = t(25032),
                P = t(77417);
            let $ = "gamingOnboardingSelectedCharacter",
                _ = {
                    games: "gaming_onboarding",
                    "games-v2": "gaming_onboarding_v2",
                    "games-v3": "gaming_onboarding_v3"
                },
                T = {
                    games: {
                        normal: (0, r.hv)("survey-setup/gaming_background"),
                        safe: (0, r.hv)("survey-setup/gaming_background-safe")
                    },
                    "games-v3": {
                        normal: (0, r.hv)("survey-setup/gaming_background"),
                        safe: (0, r.hv)("survey-setup/gaming_background-safe")
                    },
                    "games-v2": {
                        normal: (0, r.hv)("survey-setup/gaming_background_v2"),
                        safe: (0, r.hv)("survey-setup/gaming_background_v2-safe")
                    }
                },
                I = ({
                    currentStep: e,
                    variant: a
                }) => {
                    let t = ("games" === a ? v : y)[e],
                        r = (0, c.d)(d.dn),
                        b = (0, c.d)(d.W8),
                        I = (0, c.d)(u.M$),
                        {
                            handleSelectAnswer: V
                        } = ((e, a) => {
                            let t = _[a],
                                [r, n] = (0, s.J0)(() => (0, w.TK)($) || "/chat/S_Next_Door"),
                                l = p.indexOf(e),
                                o = l === p.length - 1,
                                d = () => {
                                    if (!(0, P.eP)((0, S.Vm)())) return void(0, N.w3)({
                                        triggerModal: "signup",
                                        triggerSource: t,
                                        onSuccess: () => {
                                            d()
                                        }
                                    });
                                    let e = (0, S.Vm)();
                                    if (!(0, C.Rv)(e)) return void setTimeout(d, 100);
                                    if (!(0, C.IH)(e)) {
                                        let e = (0, k.S_)(r),
                                            a = 200934 === (0, x.YZ)((0, S.Vm)()).f || (0, x.I)((0, S.Vm)()) ? "pro" : "premium";
                                        (0, A.os)({
                                            triggerSource: t,
                                            successCallbackUrl: e,
                                            initialType: a
                                        });
                                        return
                                    }(0, i.UZ)((0, k.S_)(r))
                                };
                            return {
                                handleSelectAnswer: (t, s) => {
                                    var r;
                                    "1step" === e && s && (n(s), (0, w.vE)($, s)), o ? d() : (r = l + 1) >= 0 && r < p.length && (0, i.UZ)(`/${a}/${p[r]}`)
                                }
                            }
                        })(e, a);
                    if (!t) return null;
                    let {
                        category: G,
                        title: M,
                        text: D,
                        answers: z
                    } = t, {
                        normal: F,
                        safe: U
                    } = T[a];
                    return h("div", {
                        className: f()
                    }, F && h("video", {
                        className: f("video-bg"),
                        src: b && !r ? U : F,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0
                    }), h("div", {
                        className: f("overlay")
                    }), h(g.A, {
                        style: "transparent"
                    }), h("div", {
                        className: f("container")
                    }, h("main", {
                        className: f("card")
                    }, h("div", {
                        className: f("card-content")
                    }, h("div", {
                        className: f("category")
                    }, (0, o.pw)(G)), M && h("h1", {
                        className: f("title")
                    }, (0, o.pw)(M)), D && h(n.A, {
                        wrapper: "p",
                        id: D,
                        className: f("text"),
                        elements: {
                            br: h(s.FK, null, l.kI, l.kI)
                        }
                    }), h("div", {
                        className: f("answers-list", {
                            count: z.length
                        })
                    }, z.map(e => h(m.Ay, {
                        key: e.value,
                        size: I ? "squad48" : "squad64",
                        rounded: I ? "size-xl" : "size-xxl",
                        style: e.buttonStyle || "white-gradient",
                        onClick: () => V(e.value, e.redirectUrl)
                    }, h("span", {
                        className: f("answer-label")
                    }, (0, o.pw)(e.label)))))))))
                },
                V = e => {
                    let {
                        step: a,
                        variant: t
                    } = e.params;
                    return h(I, {
                        currentStep: a,
                        variant: t
                    })
                };
            V.checkAccess = i.a9;
            let G = V
        },
        53564(e, a, t) {
            t.r(a), t.d(a, {
                default: () => eL
            });
            var i = t(31079),
                s = t(23874),
                r = t(62555),
                n = t(45185),
                l = t(14260),
                o = t(11050),
                d = t(23961),
                c = t(16332),
                u = t(5953);
            t.p;
            let m = (0, u.Tu)("ha");
            var g = t(8783),
                p = t(2826);
            let y = e => {
                    let {
                        isCookiesPolicyAccepted: a,
                        isDisabled: t,
                        isLoading: i,
                        onClickNext: s,
                        buttonContent: r,
                        children: n
                    } = e;
                    return h(g.FK, null, h("footer", {
                        className: m("footer", {
                            cookie: !a
                        })
                    }, h("div", {
                        className: m("footer-btn")
                    }, h("button", {
                        className: m("footer-button"),
                        disabled: t,
                        onClick: s,
                        type: "button"
                    }, i ? h(p.d, {
                        size: 24
                    }) : r)), n), h("div", {
                        style: {
                            height: a ? "100px" : "160px"
                        }
                    }))
                },
                v = ["type", "location", "personality", "voice", "summary"],
                b = ["anime", "hentaied", "hentai"],
                f = {
                    tentacleSlave: "woman, full body, nude, tentacles binding and lifting body, thick tentacles penetrating vagina anus and throat, heavy slime dripping, ahegao, eyes rolled back, tongue out",
                    parasiteHost: "woman, full body, nude, massively swollen belly with parasite movement, parasite tendrils from pussy, glowing veins, drooling, vacant eyes",
                    vampireThrall: "woman, full body, nude, pale skin, red glowing eyes, black collar, submissive kneeling",
                    cumflatedVessel: "woman, full body, nude, extreme cum inflation huge bloated belly, cum pouring from pussy and mouth, semen glazed body, ahegao heart pupils",
                    ovipositionHost: "woman, full body, nude, egg swollen belly with visible eggs, eggs stretching and emerging from pussy, fluids gushing, ahegao, spread legs",
                    mindBrokenDoll: "woman, full body, nude, extreme ahegao, heart pupils crossed eyes, heavy drooling, vacant broken smile, collar",
                    breedingSlave: "woman, full body, nude, heavily pregnant swollen belly, womb tattoo, milk leaking breasts, breeding collar, submissive ahegao",
                    corruptionAddict: "woman, full body, nude, corruption patterns and dark veins on skin, glowing pink eyes black sclera, lewd desperate expression, corruption marks",
                    tsundereGirl: "woman, solo, blonde twintails, red eyes, annoyed pout, blush, university uniform, serafuku, pleated skirt, large breasts, slim waist, crossed arms, standing",
                    yandereObsessive: "woman, solo, long pink hair, pink eyes, heart pupils, wide sharp smile, university uniform, large breasts, seductive pose, leaning forward",
                    kuudereIceQueen: "woman, solo, long straight silver hair, blue eyes, expressionless, glasses, elegant black dress, large breasts, graceful standing pose",
                    dandereShyMaiden: "woman, solo, long black hair with bangs, purple eyes, shy downward gaze, heavy blush, oversized sweater, petite body, timid pose",
                    imoutoLittleSister: "woman, solo, short brown hair with ribbons, amber eyes, cute smile, university uniform, petite frame, perky breasts, innocent alluring look",
                    genkiEnergeticCheer: "woman, solo, orange high ponytail, green eyes, big energetic smile, cheerleader uniform, short pleated skirt, athletic body, dynamic pose",
                    ojouSamaAristocrat: "woman, solo, long wavy blonde hair, violet eyes, smug refined expression, luxurious white dress, jewelry, large breasts, elegant pose",
                    tomboyAthlete: "woman, solo, short messy brown hair, amber eyes, confident grin, sports bra and shorts, toned athletic build, medium breasts, powerful stance",
                    submissiveMaid: "woman, solo, black maid headdress, frilled maid outfit, white apron, short skirt, garter belt, large breasts, cleavage, kneeling, submissive expression, blush, looking up, pleading eyes",
                    obedientSlave: "woman, solo, collar with leash, chained wrists, naked except collar and cuffs, medium breasts, on all fours, obedient gaze, drooling slightly, heavy blush",
                    ahegaoSlut: "woman, solo, ahegao, tongue out, heart-shaped pupils, rolling eyes, drooling, messy hair, flushed face, large breasts, nipples visible, sweat, fucked silly expression",
                    succubusTemptress: "woman, solo, demon girl, bat wings, curved horns, pointed tail, red skin, long white hair, golden eyes, seductive smirk, lingerie, thighhighs, large breasts, posing provocatively",
                    ntrGirlfriend: "woman, solo, crying expression, tears, bite mark on neck, disheveled hair, university uniform torn, large breasts exposed, conflicted aroused look, netorare vibe",
                    femdomMistress: "woman, solo, dominatrix, black leather corset, thigh-high boots, gloves, whip in hand, long black hair, red lipstick, cruel confident smile, large breasts, standing tall",
                    petGirl: "woman, solo, cat ears, tail plug, collar with bell, crawling pose, mittens, naked, perky breasts, tongue out, happy puppy eyes, blush",
                    cumAddict: "woman, solo, ahegao, tongue out, cum on face, cum in mouth, cum dripping from chin, cum on breasts, glazed eyes, messy hair, desperate aroused expression"
                },
                w = {
                    laboratory: "Laboratory: sterile laboratory interior, medical restraint table, glowing test tubes and monitors, scientific equipment, cold blue lighting",
                    school: "university: abandoned university classroom, rows of desks, chalkboard, dim lighting through windows",
                    prison: "Prison: prison cell interior, metal bars, concrete walls, hanging chains, dim overhead light",
                    underground: "Underground: underground dungeon chamber, rough stone walls, rusted chains and pipes, flickering torch light",
                    cemetery: "Cemetery: foggy cemetery at night, old gravestones and crosses, moonlight, misty ground, dead trees",
                    classroom: "laboratory, test tubes with glowing liquids, beakers, computer monitors, white tiled walls, sterile lighting, scientific equipment",
                    loveHotel: "classroom, wooden desks, chalkboard, windows with view, japanese university interior, bookshelves",
                    onsen: "prison cell, iron bars, concrete walls, dim lighting, small cot bed, barred window",
                    train: "underground chamber, dark stone walls, metal pipes, dim red emergency lights, industrial concrete floor",
                    bedroom: "Cozy modern bedroom with soft lighting and warm textures",
                    tortureDungeon: "dungeon interior, stone walls, chains hanging, iron maiden in background, rack, whips and torture devices on wall, dim torch lighting, blood stains, medieval dungeon atmosphere",
                    abandonedLaboratory: "abandoned laboratory, broken glass beakers, overturned tables, flickering fluorescent lights, rusty scientific equipment, cobwebs, dark moody lighting, abandoned science facility",
                    hellishAbyssChamber: "hellish chamber, glowing red pentagrams on floor, demonic statues, chains from ceiling, brimstone atmosphere, dark red lighting, infernal abyss interior",
                    bdsmPrisonCell: "bdsm prison cell, metal bars, concrete walls, bondage furniture, stocks, spanking bench, chains attached to wall, dim cold lighting, restraint equipment everywhere",
                    occultRitualBasement: "occult basement, ritual circle with candles, inverted pentagram on floor, altar with skull, black robes hanging, blood runes on walls, dim candlelight, eerie occult atmosphere"
                },
                k = {
                    childhoodSweetheart: "Deeply nostalgic first love, gentle and trusting, secretly fears losing you after all these years, warm affectionate heart that still blushes at old memories.",
                    senpaiCrush: "Shy respectful admirer, idolizes you as perfect upperclassman, nervous around you yet always tries to help, heart races at the smallest praise or attention.",
                    kouhaiAdmirer: "Eager cute underclassman, looks up to you with sparkling devotion, constantly seeks your guidance and approval, playful yet hopelessly smitten.",
                    tsundereRival: "Competitive sharp-tongued rival, pretends to hate losing to you, secretly cares deeply and gets flustered when you're kind, pride hides genuine affection.",
                    yandereGirlfriend: 'Obsessively possessive lover, sweet and loving until jealousy flares, willing to eliminate any threat to "our" happiness, dangerously devoted.',
                    imoutoPlaymate: "Playful teasing little sister figure, acts innocent while pushing boundaries, craves your exclusive attention, mixes sibling warmth with naughty curiosity.",
                    classmateLover: "Close everyday crush turned secret romance, shyly happy sharing classes and glances, dreams of confessing but fears ruining the friendship.",
                    secretAdmirer: "Quiet hidden worshipper, leaves anonymous notes and gifts, watches from afar with longing, too timid to reveal herself, heart full of unspoken love.",
                    sexToy: "Mindless pleasure object, exists only to be used and filled, no thoughts beyond craving insertion and cum, blank obedient doll.",
                    personalSlave: "Utterly devoted servant, lives to obey every command without question, finds purpose in total submission and ownership.",
                    loyalPet: "Eager affectionate animal-girl, craves praise and headpats, loyal to master above all, playful yet desperate to please.",
                    femdomMistress: "Cruel commanding queen, thrives on control and humiliation, demands worship and instant obedience, sadistic yet calculated.",
                    ntrVictim: "Helpless betrayed girlfriend, torn between guilt and unwanted arousal, secretly craves the stronger man while hating herself for it.",
                    cumdumpToy: "Addicted cum receptacle, brain melted from constant use, begs for loads in every hole, reduced to dripping desperate mess.",
                    maidServant: "Perfect dutiful maid, polite and eager to serve, secretly aroused by orders and degradation, lives for master's approval.",
                    succubusSummon: "Seductive soul-draining demon, playful manipulative temptress, hungers for lust and energy, teases and corrupts with sinful charm."
                },
                S = {
                    submissiveMaid: 4905,
                    obedientSlave: 4906,
                    ahegaoSlut: 4907,
                    succubusTemptress: 4908,
                    ntrGirlfriend: 4909,
                    femdomMistress: 4910,
                    petGirl: 4911,
                    cumAddict: 4912
                },
                x = {
                    tortureDungeon: 4913,
                    abandonedLaboratory: 4914,
                    hellishAbyssChamber: 4915,
                    bdsmPrisonCell: 4916,
                    occultRitualBasement: 4917
                },
                N = {
                    lunatic: 4918,
                    ecstasy: 4919,
                    overdriven: 4920,
                    broken: 4921,
                    vortex: 4922,
                    aiko: 4923,
                    haruka: 4924,
                    yumi: 4925,
                    rina: 4926,
                    mio: 4927,
                    melly: 4928,
                    gabriela: 4929,
                    nicol: 4930,
                    leila: 4931,
                    sofia: 4932
                },
                A = {
                    childhoodSweetheart: 4933,
                    senpaiCrush: 4934,
                    kouhaiAdmirer: 4935,
                    tsundereRival: 4936,
                    yandereGirlfriend: 4937,
                    imoutoPlaymate: 4938,
                    classmateLover: 4939,
                    secretAdmirer: 4940
                },
                C = {
                    sexToy: 4941,
                    personalSlave: 4942,
                    loyalPet: 4943,
                    femdomMistress: 4910,
                    ntrVictim: 4944,
                    cumdumpToy: 4945,
                    maidServant: 4946,
                    succubusSummon: 4947
                },
                P = {
                    tsundereGirl: 4948,
                    yandereObsessive: 4949,
                    kuudereIceQueen: 4950,
                    dandereShyMaiden: 4951,
                    imoutoLittleSister: 4952,
                    genkiEnergeticCheer: 4953,
                    ojouSamaAristocrat: 4954,
                    tomboyAthlete: 4955
                },
                $ = {
                    tentacleSlave: 4956,
                    parasiteHost: 4957,
                    vampireThrall: 4958,
                    cumflatedVessel: 4959,
                    ovipositionHost: 4960,
                    mindBrokenDoll: 4961,
                    breedingSlave: 4962,
                    corruptionAddict: 4963
                },
                _ = {
                    anime: 4964,
                    hentaied: 4965,
                    hentai: 4966
                },
                T = ["sexToy", "personalSlave", "loyalPet", "femdomMistress", "ntrVictim", "cumdumpToy", "maidServant", "succubusSummon"],
                I = {
                    classroom: 4967,
                    loveHotel: 4968,
                    onsen: 4969,
                    train: 4970,
                    bedroom: 4971
                },
                V = {
                    laboratory: 4972,
                    school: 4973,
                    prison: 4974,
                    underground: 4975,
                    cemetery: 4976
                },
                G = {
                    anime: {
                        aiko: "Attractive",
                        haruka: "gabriela",
                        yumi: "mei",
                        rina: "Innocent",
                        mio: "lauren"
                    },
                    hentaied: {
                        melly: "Attractive",
                        gabriela: "gabriela",
                        nicol: "mei",
                        leila: "Innocent",
                        sofia: "lauren"
                    },
                    hentai: {
                        lunatic: "Attractive",
                        ecstasy: "gabriela",
                        overdriven: "mei",
                        broken: "Innocent",
                        vortex: "lauren"
                    }
                },
                M = e => (0, s.VP)(`hentai-setup/${e}`),
                D = e => (0, s.hv)(`hentai-setup/${e}`),
                z = (e, a, t) => {
                    let i = t.replace(/[\s-]/g, ""),
                        s = `${e}/${a}/${i}`;
                    return {
                        img: M(s),
                        video: D(s)
                    }
                },
                F = e => ({
                    img: M(`kink/${e}`),
                    video: D(`kink/${e}`)
                });
            var U = t(14180),
                H = t(41307);
            let L = e => {
                    let {
                        type: a,
                        label: t,
                        isActive: i,
                        onClick: r,
                        img: n,
                        video: l,
                        clickData: o
                    } = e, [d, c] = g.J0(!1);
                    return h("button", {
                        type: "button",
                        className: m("tile", {
                            [a]: !0,
                            active: i
                        }),
                        onClick: () => r ? .(o),
                        ref: (0, U.P8)([
                            ["mouseleave", () => c(!1)],
                            ["mouseenter", () => c(!0)]
                        ])
                    }, n && h("div", {
                        className: m("tile-image"),
                        style: {
                            backgroundImage: `url(${n})`
                        }
                    }), l && h(H.A, {
                        key: l,
                        video: l,
                        className: m("tile-video"),
                        isActive: !0
                    }), (i || d) && h("img", {
                        alt: "",
                        className: m("tile-drip", {
                            hover: d && !i
                        }),
                        src: (0, s.V0)("hentai-setup/drip")
                    }), h("div", {
                        className: m("tile-placeholder")
                    }), h("div", {
                        className: m("tile-label")
                    }, t))
                },
                J = e => {
                    let {
                        selectedValue: a,
                        onChange: t
                    } = e;
                    return h("section", {
                        className: m("kink-section")
                    }, h("h1", {
                        className: m("title")
                    }, (0, n.pw)(4977)), h("div", {
                        className: m("kink-list")
                    }, b.map(e => h(L, {
                        key: e,
                        type: "kink",
                        label: (0, n.pw)(_[e]),
                        isActive: a === e,
                        clickData: e,
                        onClick: t,
                        ...F(e)
                    }))))
                },
                q = {
                    anime: ["classroom", "loveHotel", "onsen", "train", "bedroom"],
                    hentaied: ["laboratory", "school", "prison", "underground", "cemetery"],
                    hentai: ["tortureDungeon", "abandonedLaboratory", "hellishAbyssChamber", "bdsmPrisonCell", "occultRitualBasement"]
                },
                E = {
                    anime: I,
                    hentaied: V,
                    hentai: x
                },
                j = e => {
                    let {
                        kinkType: a,
                        selectedValue: t,
                        onChange: i
                    } = e, s = q[a], r = E[a];
                    return h("section", {
                        className: m("section")
                    }, h("h2", {
                        className: m("title")
                    }, (0, n.pw)(4978)), h("div", {
                        className: m("tiles-landscape")
                    }, s.map(e => h(L, {
                        key: e,
                        type: "landscape",
                        label: r[e] ? (0, n.pw)(r[e]) : e,
                        isActive: t === e,
                        onClick: i,
                        clickData: e,
                        ...z(a, "location", e)
                    }))))
                };
            t.p;
            let K = (0, u.Tu)("hentai-onboarding-stepper"),
                B = g.ph(e => {
                    let {
                        stepsCount: a,
                        currentStep: t,
                        onClickStep: i
                    } = e;
                    return h("div", {
                        className: K()
                    }, Array.from({
                        length: a
                    }, (e, s) => {
                        let r = s <= t,
                            n = s === a - 1;
                        return h("div", {
                            key: s,
                            className: K("item"),
                            onClick: () => i ? .(s)
                        }, h("div", {
                            className: K("bubble", {
                                active: r,
                                inactive: !r
                            })
                        }, s + 1), !n && h("div", {
                            className: K("separator", {
                                active: r,
                                inactive: !r
                            })
                        }))
                    }))
                }),
                Z = {
                    anime: ["childhoodSweetheart", "senpaiCrush", "kouhaiAdmirer", "tsundereRival", "yandereGirlfriend", "imoutoPlaymate", "classmateLover", "secretAdmirer"],
                    hentaied: T,
                    hentai: T
                },
                R = {
                    anime: A,
                    hentaied: C,
                    hentai: C
                },
                O = e => {
                    let {
                        kinkType: a,
                        selectedValue: t,
                        onChange: i
                    } = e, s = Z[a], r = R[a];
                    return h("section", {
                        className: m("section")
                    }, h("h2", {
                        className: m("title")
                    }, (0, n.pw)(4979)), h("div", {
                        className: m("tiles-portrait")
                    }, s.map(e => h(L, {
                        key: e,
                        type: "portrait",
                        label: (0, n.pw)(r[e]),
                        isActive: t === e,
                        onClick: i,
                        clickData: e,
                        ...z(a, "personality", e)
                    }))))
                };
            var Y = t(85193),
                W = t(25032),
                Q = t(77417);
            let X = {
                    anime: P,
                    hentaied: $,
                    hentai: S
                },
                ee = {
                    anime: I,
                    hentaied: V,
                    hentai: x
                },
                ea = {
                    anime: A,
                    hentaied: C,
                    hentai: C
                },
                et = () => {
                    let [e, a] = (0, g.J0)((0, n.pw)(4980));
                    return (0, g.vJ)(() => {
                        let e = setTimeout(() => {
                            a((0, n.pw)(4981))
                        }, 4e3);
                        return () => clearTimeout(e)
                    }, []), h(g.FK, null, h("span", null, e), h("div", {
                        className: "position-relative"
                    }, h(Y.A, {
                        size: 30
                    })))
                },
                ei = e => {
                    let {
                        kinkType: a,
                        preset: t,
                        location: s,
                        personality: r,
                        isProcessing: o,
                        isCookiesPolicyAccepted: d,
                        onNext: c
                    } = e, u = (0, l.d)(Q.eP), p = (0, l.d)(W.IH), v = _[a], b = X[a][t], f = ee[a][s], w = ea[a][r], k = F(a), S = z(a, "type", t), x = z(a, "location", s), N = z(a, "personality", r);
                    return h(g.FK, null, h("section", {
                        className: m("section")
                    }, h("h2", {
                        className: m("title")
                    }, (0, n.pw)(695)), h("div", {
                        className: m("summary-cards")
                    }, h("div", {
                        className: m("summary-landscapes")
                    }, h(L, {
                        isActive: !1,
                        type: "landscape",
                        label: (0, n.pw)(v),
                        onClick: () => (0, i.UZ)("/create-ai-hentai-sexgirl/style"),
                        ...k
                    }), h(L, {
                        isActive: !1,
                        type: "landscape",
                        label: f ? (0, n.pw)(f) : s,
                        onClick: () => (0, i.UZ)(`/create-ai-hentai-sexgirl/${a}/location`),
                        ...x
                    })), h("div", {
                        className: m("summary-portraits")
                    }, h(L, {
                        isActive: !1,
                        type: "portrait",
                        label: w ? (0, n.pw)(w) : r,
                        onClick: () => (0, i.UZ)(`/create-ai-hentai-sexgirl/${a}/personality`),
                        ...N
                    }), h(L, {
                        isActive: !1,
                        type: "portrait",
                        label: b ? (0, n.pw)(b) : t,
                        onClick: () => (0, i.UZ)(`/create-ai-hentai-sexgirl/${a}/type`),
                        ...S
                    })))), h(y, {
                        onClickNext: c,
                        isCookiesPolicyAccepted: d,
                        isDisabled: u && p && o,
                        buttonContent: h("div", {
                            className: "flex-align-center",
                            style: {
                                gap: "16px"
                            }
                        }, h(et, null))
                    }))
                },
                es = {
                    anime: ["tsundereGirl", "yandereObsessive", "kuudereIceQueen", "dandereShyMaiden", "imoutoLittleSister", "genkiEnergeticCheer", "ojouSamaAristocrat", "tomboyAthlete"],
                    hentaied: ["tentacleSlave", "parasiteHost", "vampireThrall", "cumflatedVessel", "ovipositionHost", "mindBrokenDoll", "breedingSlave", "corruptionAddict"],
                    hentai: ["submissiveMaid", "obedientSlave", "ahegaoSlut", "succubusTemptress", "ntrGirlfriend", "femdomMistress", "petGirl", "cumAddict"]
                },
                er = {
                    anime: P,
                    hentaied: $,
                    hentai: S
                },
                en = e => {
                    let {
                        kinkType: a,
                        selectedValue: t,
                        onChange: i
                    } = e, s = es[a], r = er[a];
                    return h("section", {
                        className: m("section")
                    }, h("h2", {
                        className: m("title")
                    }, (0, n.pw)(4982)), h("div", {
                        className: m("tiles-portrait")
                    }, s.map(e => h(L, {
                        key: e,
                        type: "portrait",
                        label: (0, n.pw)(r[e]),
                        isActive: t === e,
                        onClick: i,
                        clickData: e,
                        ...z(a, "type", e)
                    }))))
                };
            var el = t(50622),
                eo = t(37020),
                ed = t(34937),
                ec = t(91437);
            let eu = {
                    anime: ["aiko", "haruka", "yumi", "rina", "mio"],
                    hentaied: ["melly", "gabriela", "nicol", "leila", "sofia"],
                    hentai: ["lunatic", "ecstasy", "overdriven", "broken", "vortex"]
                },
                eh = ({
                    id: e,
                    voiceSample: a,
                    isActive: t,
                    onChange: i
                }) => {
                    let {
                        isPlaying: l,
                        pause: o
                    } = (0, ed.N)({
                        url: (0, eo.ox)("female", a.toLowerCase()),
                        name: a
                    });
                    return (0, el.C)(() => {
                        !t && l && o()
                    }, [t, l]), h("div", {
                        className: m("tile-voice", {
                            active: t
                        }),
                        onClick: t => {
                            i(e), t.preventDefault(), l ? o() : (0, ec.Cc)(a)
                        }
                    }, t && h("img", {
                        alt: "",
                        className: m("tile-drip"),
                        src: (0, s.V0)("hentai-setup/drip")
                    }), h("div", {
                        className: m("tile-voice-icon")
                    }, h(r.Uv, {
                        img: "voice",
                        size: 40
                    })), h("div", {
                        className: m("tile-voice-name")
                    }, (0, n.pw)(N[e])))
                },
                em = e => {
                    let {
                        kinkType: a,
                        selectedValue: t,
                        onChange: i
                    } = e, s = eu[a], r = G[a];
                    return h("section", {
                        className: m("section")
                    }, h("h2", {
                        className: m("title")
                    }, (0, n.pw)(4983)), h("div", {
                        className: m("tiles-voice")
                    }, s.map(e => h(eh, {
                        key: e,
                        id: e,
                        voiceSample: r[e],
                        isActive: t === e,
                        onChange: i
                    }))))
                };
            var eg = t(99758),
                ep = t(26154),
                ey = t(78470),
                ev = t(74518),
                eb = t(56728),
                ef = t(53315),
                ew = t(39063),
                ek = t(58795),
                eS = t(29788),
                ex = t(11058),
                eN = t(5616),
                eA = t(48089),
                eC = t(4592),
                eP = t(23355),
                e$ = t(21130),
                e_ = t(34082);
            let eT = "hentaiSetupValues",
                eI = "loveScapePersonHentaiSetupWelcome",
                eV = "/create-ai-hentai-sexgirl",
                eG = {
                    anime: {
                        preset: "tsundereGirl",
                        location: "classroom",
                        personality: "childhoodSweetheart",
                        voice: "aiko"
                    },
                    hentaied: {
                        preset: "tentacleSlave",
                        location: "laboratory",
                        personality: "sexToy",
                        voice: "melly"
                    },
                    hentai: {
                        preset: "submissiveMaid",
                        location: "tortureDungeon",
                        personality: "sexToy",
                        voice: "lunatic"
                    }
                };
            var eM = t(51140),
                eD = t(21319),
                ez = t(4043),
                eF = t(3925);
            let eU = e => {
                    let {
                        section: a,
                        kinkType: t
                    } = e, u = (0, l.d)(o.pK), p = (0, l.d)(o.M$), {
                        preset: b,
                        location: S,
                        personality: x,
                        voice: N,
                        setPreset: A,
                        setLocation: C,
                        setPersonality: P,
                        setVoice: $,
                        isProcessing: _,
                        draftPerson: T,
                        welcomeMessage: I,
                        handleUpdateDraft: V,
                        selectedKink: M,
                        setSelectedKink: D,
                        isKinkStep: z,
                        isPhotoStep: F,
                        isSummaryStep: U,
                        activeStepIndex: H,
                        stepsCount: L,
                        handleGoBack: q,
                        handleNextStep: E,
                        bringMyCharacterToLive: K,
                        handleClickStep: Z
                    } = (e => {
                        let {
                            kinkType: a,
                            section: t
                        } = e, s = (0, l.d)(Q.Bu), r = ((e = "anime") => {
                            let a = (0, ep.TK)(eT),
                                t = eG[e];
                            return {
                                preset: a ? .preset || t.preset,
                                location: a ? .location || t.location,
                                personality: a ? .personality || t.personality,
                                voice: a ? .voice || t.voice
                            }
                        })(a), {
                            draftPerson: n,
                            setDraftPerson: o
                        } = (0, eC.GU)("loveScapePersonHentaiSetup"), d = (0, l.d)(W.IH), [c, u] = (0, g.J0)(a || "anime"), [m, p] = (0, g.J0)(r.preset), [y, b] = (0, g.J0)(r.location), [S, x] = (0, g.J0)(r.personality), [N, A] = (0, g.J0)(r.voice), [C, P] = (0, g.J0)(() => (0, ep.TK)(eT) ? .generatedPromptData), [$, _] = (0, g.J0)(() => (0, ep.TK)(eI) || ""), [T, I] = (0, g.J0)(!1), V = !a, M = "photo" === t, D = "summary" === t, z = V ? 0 : v.indexOf(t), F = v.length, U = e => {
                            let a = (0, ep.TK)(eT) || {};
                            (0, ep.vE)(eT, { ...r,
                                ...a,
                                ...e
                            })
                        }, H = (e, a) => t => {
                            e(t), U({
                                [a]: t,
                                generatedPromptData: void 0
                            }), P(void 0), I(!1), o(e => e ? { ...e,
                                mind: { ...e.mind,
                                    advanced: void 0
                                }
                            } : e)
                        }, L = H(p, "preset"), J = H(b, "location"), q = H(x, "personality"), E = H(A, "voice");
                        (0, el.C)(() => {
                            if (!c) return;
                            let e = eG[c];
                            p(e.preset), b(e.location), x(e.personality), A(e.voice), U({
                                preset: e.preset,
                                location: e.location,
                                personality: e.personality,
                                voice: e.voice,
                                generatedPromptData: void 0
                            }), P(void 0), I(!1), o((0, eb.$N)(eP.l, {
                                voiceName: "Attractive",
                                user: {
                                    isDiscover: !1,
                                    isPublic: !1
                                },
                                mind: {
                                    personality: {
                                        gender: "female"
                                    },
                                    safetyLevel: "nude",
                                    imageStylePreset: null,
                                    imageStyle: "hentaied" === c ? "realistic" : "anime",
                                    sexuality: {
                                        orientation: "Bisexual"
                                    }
                                }
                            }))
                        }, [c]);
                        let [j, K] = (0, ek.m)(e => (0, eA.ad)(s, {
                            userPrompt: e,
                            safetyLevel: "nude",
                            gender: "female",
                            imageStyle: "hentaied" === a ? "realistic" : "anime",
                            customOnboarding: !0
                        })), B = e => {
                            o(a => (0, eb.$N)(a, e))
                        }, Z = (0, ey._)(() => {
                            let e = [f[m], w[y], k[S]].filter(Boolean).join(", ");
                            return I(!0), K(e).then(null, e => {
                                I(!1), (0, eg.T7)(e.message)
                            })
                        }), R = (0, ey._)(e => {
                            let {
                                error: t,
                                data: s
                            } = e;
                            I(!1), s ? ((e => {
                                if (!n) return;
                                P(e), U({
                                    generatedPromptData: e
                                });
                                let {
                                    advanced: t,
                                    age: i,
                                    orientation: s,
                                    name: r,
                                    imageStyle: l
                                } = e, {
                                    mind: o
                                } = n;
                                _(t.welcomeMessage), (0, ep.vE)(eI, t.welcomeMessage);
                                let d = t.sampleDialogCases.find(({
                                    responseLength: e,
                                    storytellingMode: a
                                }) => e === o.personality.responseLength && a === o.personality.storytellingMode);
                                B({
                                    voiceName: G[a][N] || "Attractive",
                                    user: {
                                        username: r,
                                        isDiscover: !1,
                                        isPublic: !1
                                    },
                                    mind: {
                                        imageStyle: l,
                                        imageStylePreset: (0, e$.lQ)(l),
                                        personality: {
                                            age: i
                                        },
                                        sexuality: {
                                            orientation: s
                                        },
                                        advanced: {
                                            personalityText: t.personalityText,
                                            lookText: t.lookText,
                                            behaviorInstructions: t.behaviorInstructions,
                                            sampleDialogue: d ? .text ? ? o.advanced ? .sampleDialogue
                                        }
                                    },
                                    signature: e.signature,
                                    moderatedVisibility: "private"
                                })
                            })(s), (0, i.UZ)(`${eV}/${a}/photo`)) : t && (0, eg.T7)(t.message)
                        }), O = (0, ey._)(() => {
                            if (!(0, Q.eP)((0, ew.Vm)())) return (0, eN.w3)({
                                triggerModal: "signup",
                                triggerSource: "five_step_onboarding_generate_avatar",
                                onSuccess: () => {
                                    O() && C && "summary" === t && (0, i.UZ)(`${eV}/${a}/photo`)
                                }
                            }, n ? .mind), !1;
                            if (!(0, W.Rv)((0, ew.Vm)())) return setTimeout(O), !1;
                            if (!(0, W.IH)((0, ew.Vm)())) {
                                let e = (0, ef.S_)((0, ex.eG)((0, ew.Vm)()).replace(/\/[^/]*$/, C ? "/photo" : "/summary")),
                                    a = 200934 === (0, eS.YZ)((0, ew.Vm)()).f || (0, eS.I)((0, ew.Vm)()) ? "pro" : "premium";
                                return (0, e_.os)({
                                    initialType: a,
                                    triggerSource: "hentai_onboarding_generate_avatar",
                                    successCallbackUrl: e
                                }), !1
                            }
                            return !0
                        });
                        return (0, g.vJ)(() => {
                            if ("summary" === t) !O() || C || T || Z();
                            else if ("photo" === t) {
                                let e = (0, Q.eP)((0, ew.Vm)()),
                                    t = (0, W.IH)((0, ew.Vm)());
                                e && t && C || (0, i.UZ)(`${eV}/${a}/summary`)
                            }
                        }, [t, d]), (0, ev.O$)(() => [{
                            subscriptionKey: `advancedPrompts:${s}`,
                            callback: R
                        }], [s]), {
                            draftPerson: n,
                            welcomeMessage: $,
                            preset: m,
                            location: y,
                            personality: S,
                            voice: N,
                            setPreset: L,
                            setLocation: J,
                            setPersonality: q,
                            setVoice: E,
                            isProcessing: j.fetching || T,
                            handleGeneratePrompt: Z,
                            handleUpdateDraft: B,
                            generatedPromptData: C,
                            handleClickStep: e => {
                                0 === e ? (0, i.UZ)(`${eV}/style`) : (0, i.UZ)(`${eV}/${c}/${v[e]}`)
                            },
                            selectedKink: c,
                            setSelectedKink: u,
                            isKinkStep: V,
                            isPhotoStep: M,
                            isSummaryStep: D,
                            activeStepIndex: z,
                            stepsCount: F,
                            handleGoBack: () => {
                                if (!V) {
                                    if (1 === z) return void(0, i.UZ)(`${eV}/style`);
                                    if ("photo" === t) return void(0, i.UZ)(`${eV}/${a}/summary`);
                                    (0, i.UZ)(`${eV}/${a}/${v[z-1]}`)
                                }
                            },
                            handleNextStep: () => {
                                V ? (0, i.UZ)(`${eV}/${c}/type`) : (0, i.UZ)(`${eV}/${a}/${v[z+1]}`)
                            },
                            bringMyCharacterToLive: () => {
                                O() && (C || T ? C && (0, i.UZ)(`${eV}/${a}/photo`) : Z())
                            }
                        }
                    })({
                        kinkType: t,
                        section: a
                    }), {
                        audio: R,
                        pause: Y,
                        play: X,
                        isPlaying: ee
                    } = (e => {
                        let {
                            section: a
                        } = e, t = (0, l.d)(e => "A" === (0, eD.V1)(e, "22919")), i = (0, g.li)(!1), [r, n] = (0, g.J0)(!1), {
                            audio: o,
                            pause: d,
                            play: c
                        } = (0, eM._v)({
                            audioBlob: (0, s.HS)("character-setup/hentaied")
                        });
                        return (0, g.vJ)(() => {
                            if (!t && o) return o.volume = .2, () => {
                                o.pause(), o.currentTime = 0
                            }
                        }, [o]), (0, g.vJ)(() => {
                            if (t || !o) return;
                            if (!a) {
                                o.pause(), o.currentTime = 0;
                                return
                            }
                            if (i.current) return;
                            let e = setTimeout(() => {
                                c()
                            }, 100);
                            return () => {
                                clearTimeout(e)
                            }
                        }, [a, o]), (0, g.vJ)(() => {
                            if (t || !o) return;
                            let e = () => {
                                    n(!0)
                                },
                                a = () => {
                                    n(!1)
                                };
                            return o.addEventListener("play", e), o.addEventListener("pause", a), o.addEventListener("ended", a), o.addEventListener("error", a), n(!o.paused), () => {
                                o.removeEventListener("play", e), o.removeEventListener("pause", a), o.removeEventListener("ended", a), o.removeEventListener("error", a)
                            }
                        }, [o]), {
                            audio: t ? null : o,
                            pause: () => {
                                i.current = !0, d()
                            },
                            play: () => {
                                i.current = !1, c()
                            },
                            isPlaying: r
                        }
                    })({
                        section: a
                    }), {
                        handleGeneratePhoto: ea,
                        photos: et,
                        setPhotos: es,
                        generationId: er,
                        isGenerationInProgress: eo,
                        customMedia: ed,
                        presetsModal: ec,
                        onOpenPresetModal: eu
                    } = (0, ez.z)({
                        mind: T ? .mind || null,
                        signature: T ? .signature,
                        isPhotoStep: F,
                        onPresetChange: (e, a) => {
                            V({
                                mind: {
                                    imageStyle: e,
                                    imageStylePreset: a
                                }
                            })
                        },
                        generateForGuest: !0
                    }), eh = !F, eU = eh && !U;
                    return h("div", {
                        className: m()
                    }, h("div", {
                        className: m("background")
                    }, h("video", {
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        className: m("background-video"),
                        src: (0, s.hv)("hentai-setup/background")
                    })), h(c.A, {
                        style: "transparent"
                    }, !z && h("div", {
                        className: m("header-button", {
                            left: !0
                        })
                    }, h(d.Ay, {
                        size: "rounded32",
                        style: "transparent",
                        onClick: q
                    }, h(r.Uv, {
                        img: "chevron-left",
                        size: 24
                    }))), R && a && h("div", {
                        className: m("header-button", {
                            right: !0
                        })
                    }, h(d.Ay, {
                        size: "rounded32",
                        style: "transparent",
                        onClick: () => {
                            ee ? Y() : X()
                        }
                    }, h(r.Uv, {
                        img: ee ? "volume-unmute" : "volume-mute",
                        size: 16
                    })))), eh && h("div", {
                        className: m("stepper")
                    }, h(B, {
                        currentStep: H,
                        stepsCount: L,
                        onClickStep: Z
                    })), h("div", {
                        className: m("content")
                    }, (() => {
                        if (F && T) return h(eF.A, {
                            person: T,
                            isMobile: p,
                            photos: et,
                            setPhotos: es,
                            generationId: er,
                            customMediaId: ed ? .id || null,
                            onGeneratePhoto: ea,
                            welcomeMessage: I,
                            isGenerationInProgress: eo,
                            presetsModal: ec,
                            onOpenPresetModal: eu
                        });
                        if (z) return h(J, {
                            selectedValue: M,
                            onChange: D
                        });
                        if (!t) return null;
                        switch (a) {
                            case "type":
                                return h(en, {
                                    kinkType: t,
                                    selectedValue: b,
                                    onChange: A
                                });
                            case "location":
                                return h(j, {
                                    kinkType: t,
                                    selectedValue: S,
                                    onChange: C
                                });
                            case "personality":
                                return h(O, {
                                    kinkType: t,
                                    selectedValue: x,
                                    onChange: P
                                });
                            case "voice":
                                return h(em, {
                                    kinkType: t,
                                    selectedValue: N,
                                    onChange: $
                                });
                            case "summary":
                                return h(ei, {
                                    kinkType: t,
                                    preset: b,
                                    location: S,
                                    personality: x,
                                    isProcessing: _,
                                    isCookiesPolicyAccepted: u,
                                    onNext: K
                                });
                            default:
                                return null
                        }
                    })()), eU && h(y, {
                        onClickNext: E,
                        isCookiesPolicyAccepted: u,
                        buttonContent: (0, n.pw)(99),
                        isLoading: _,
                        isDisabled: _ || z && !M
                    }))
                },
                eH = e => {
                    let {
                        section: a,
                        type: t
                    } = e.params;
                    return h(eU, {
                        section: a,
                        kinkType: t
                    })
                };
            eH.checkAccess = i.a9;
            let eL = eH
        },
        63342(e, a, t) {
            t.r(a);
            var i = t(8783),
                s = t(50622),
                r = t(56728),
                n = t(39063),
                l = t(31079),
                o = t(33816),
                d = t(77960),
                c = t(17253),
                u = t(45482),
                m = t(70861),
                g = t(20360),
                p = t(25940),
                y = t(58483),
                v = t(87331),
                b = t(10263),
                f = t(4592),
                w = t(8024);
            let k = {
                    style: v.ec,
                    personality: p.PX,
                    origin: g.P4,
                    body: u.Ay,
                    face: m.TA,
                    soul: y.nl,
                    summary: b.rx
                },
                S = (e, a) => {
                    let t = f.GU(e, a),
                        i = t.draftPerson ? .mind.personality.personality,
                        n = t.draftPerson ? .mind.imageStyle;
                    return s.C(() => {
                        i && t.setDraftPerson(e => {
                            let {
                                imageStyle: a
                            } = e.mind, t = "anime" === a ? w.f[i] : w.T[i];
                            return (0, r.$N)(e, {
                                mind: {
                                    personality: t
                                }
                            })
                        })
                    }, [i]), s.C(() => {
                        n && t.setDraftPerson(e => (0, r.$N)(e, {
                            mind: {
                                personality: {
                                    personality: "anime" === n ? o.y4[0] : o.wh[0]
                                }
                            }
                        }))
                    }, [n]), t
                },
                x = e => {
                    let {
                        section: a,
                        type: t
                    } = e.params;
                    return i.vJ(() => {
                        "gb" === d.JJ(n.Vm()) && "style" === a && l.eq("/create-ai-gay-boyfriend/style?var_1=GayR&var_2=GayA")
                    }, [a]), h(c.A, {
                        section: a,
                        stepsComponents: k,
                        storageName: "personSetup6stepBoys",
                        mainHook: S,
                        isSafeMode: !1,
                        baseUrl: t,
                        sectionsStepsIndexes: ["style", "origin", "body", "booty", "personality", "face", "soul", "summary"]
                    })
                };
            x.checkAccess = l.a9, t.d(a, ["default", 0, x])
        },
        8024(e, a, t) {
            let i = [
                    ["animeDaddy", 45, "dominant", "warm", "moderate"],
                    ["otaku", 22, "submissive", "neutral", "moderate"],
                    ["tsundere", 24, "equal", "mean", "moderate"],
                    ["yandere", 26, "dominant", "warm", "high"],
                    ["seme", 28, "dominant", "neutral", "high"],
                    ["uke", 20, "submissive", "warm", "moderate"],
                    ["tentacleCreature", 893, "dominant", "neutral", "high"],
                    ["elf", 120, "equal", "neutral", "moderate"]
                ].reduce((e, a) => (e[a[0]] = {
                    age: a[1],
                    role: a[2],
                    attitude: a[3],
                    sexDrive: a[4]
                }, e), {}),
                s = [
                    ["artist", 27, "equal", "warm", "moderate"],
                    ["bear", 38, "dominant", "warm", "moderate"],
                    ["daddy", 45, "dominant", "warm", "moderate"],
                    ["dragQueen", 29, "equal", "warm", "high"],
                    ["jock", 25, "dominant", "neutral", "high"],
                    ["leathersman", 34, "dominant", "neutral", "high"],
                    ["newbie", 23, "submissive", "neutral", "moderate"],
                    ["twink", 21, "submissive", "neutral", "high"]
                ].reduce((e, a) => (e[a[0]] = {
                    age: a[1],
                    role: a[2],
                    attitude: a[3],
                    sexDrive: a[4]
                }, e), {});
            t.d(a, ["T", 0, s, "f", 0, i])
        },
        39025(e, a, t) {
            t.r(a);
            var i = t(8783),
                s = t(52187),
                r = t(39063),
                n = t(31079),
                l = t(14332),
                o = t(14260),
                d = t(50116),
                c = t(77960),
                u = t(11058);
            t(75036);
            var m = t(17253),
                g = t(45482),
                p = t(70861),
                y = t(20360),
                v = t(58483),
                b = t(87331),
                f = t(10263),
                w = t(84208);
            let k = {
                    personality: () => h(d.r, {
                        to: u.eG(r.Vm()).replace("personality", "style")
                    }),
                    style: b.ed,
                    origin: y.gL,
                    body: g.Ay,
                    face: p.TA,
                    soul: v.pW,
                    summary: f.p2
                },
                S = {
                    personality: () => h(d.r, {
                        to: u.eG(r.Vm()).replace("personality", "style")
                    }),
                    origin: () => h(d.r, {
                        to: u.eG(r.Vm()).replace("origin", "style")
                    }),
                    style: b.ed,
                    body: g.Ay,
                    face: p.TA,
                    soul: v.pW,
                    summary: f.p2
                },
                x = { ...k,
                    style: b.aG,
                    origin: y.FF,
                    body: g.ee,
                    face: p.$4,
                    summary: f.TW
                },
                N = {
                    personality: () => h(d.r, {
                        to: u.eG(r.Vm()).replace("personality", "style")
                    }),
                    style: b.DG,
                    origin: y.gc,
                    body: g.ee,
                    face: p.$4,
                    soul: v.pW,
                    summary: f.m8
                },
                A = {
                    "create-ai-girlfriend": k,
                    "create-ai-slut-girlfriend": k,
                    "create-ai-bdsm-girlfriend": k,
                    "create-ai-milf": k,
                    "create-ai-granny": k,
                    "create-ai-sex-girlfriend": N,
                    "create-ai-sex-girlfriend-v5": N,
                    "create-ai-sex-girlfriend-time": N,
                    "create-ai-sex-girlfriend-real": N,
                    "create-ai-sex-girlfriend-anime": N,
                    "create-ai-girlfriend-realtime": k,
                    "create-ai-girlfriend-anime": k,
                    "create-ai-indian-girlfriend": x,
                    "create-ai-sex-ebony-girlfriend": S,
                    "create-ai-sex-asian-girlfriend": S,
                    "create-ai-sex-arab-girlfriend": S,
                    "create-ai-sex-indian-girlfriend": S,
                    "create-ai-sex-latina-girlfriend": S,
                    "create-ai-sexy-girlfriend": S,
                    "create-ai-sexy-latino-asian-girlfriend": S
                },
                C = {
                    "create-ai-milf": "personSetup6stepMilfV2",
                    "create-ai-granny": "personSetup6stepGrannyV2",
                    "create-ai-sex-girlfriend": "personSetup6stepSexGirls",
                    "create-ai-sex-girlfriend-v5": "personSetup6stepSexGirls",
                    "create-ai-sex-girlfriend-time": "personSetup6stepSexGirls",
                    "create-ai-sex-girlfriend-real": "personSetup6stepSexGirlsReal",
                    "create-ai-sex-girlfriend-anime": "personSetup6stepSexGirlsAnime",
                    "create-ai-slut-girlfriend": "personSetup6stepSexGirls",
                    "create-ai-bdsm-girlfriend": "personSetup6stepBdsm",
                    "create-ai-indian-girlfriend": "personSetupIndian6step",
                    "create-ai-girlfriend": s.eC ? "personSetup6stepGirlsV2Safe" : "personSetup6stepGirlsV2",
                    "create-ai-girlfriend-realtime": s.eC ? "personSetup6stepGirlsRealtimeSafe" : "personSetup6stepGirlsRealtime",
                    "create-ai-girlfriend-anime": s.eC ? "personSetup6stepGirlsAnimeSafe" : "personSetup6stepGirlsAnime",
                    "create-ai-sex-ebony-girlfriend": "personSetup6stepEbony",
                    "create-ai-sex-asian-girlfriend": "personSetup6stepAsian",
                    "create-ai-sex-latina-girlfriend": "personSetup6stepLatina",
                    "create-ai-sex-arab-girlfriend": "personSetup6stepArab",
                    "create-ai-sex-indian-girlfriend": "personSetup6stepArab",
                    "create-ai-sexy-girlfriend": "personSetup6stepSexy",
                    "create-ai-sexy-latino-asian-girlfriend": "personSetup6stepSexyLatinoAsian"
                },
                P = e => {
                    let {
                        imageStyle: a,
                        appearance: t,
                        personality: i
                    } = e.mind, s = [
                        [a],
                        [t.ethnicity, i.age],
                        [t.bodyType, t.buttocks, t.breasts],
                        [t.hairColor, t.hairStyle, t.eyeColor],
                        [e.voiceName, i.relationship]
                    ], r = s.flat();
                    return [...s, r, r, [!1]].findIndex(e => e.some(e => !e))
                },
                $ = e => Math.max(0, P(e) - 1),
                _ = ["style", "origin", "body", "face", "soul", "summary"],
                T = _.filter(e => "style" !== e),
                I = {
                    "create-ai-granny": "/create-ai-girlfriend/style",
                    "create-ai-milf": "/create-ai-girlfriend/style",
                    "create-ai-indian-girlfriend": "/create-ai-indian-girlfriend/style?var_1=IndR&var_2=IndA",
                    "create-ai-sex-indian-girlfriend": "/create-ai-girlfriend/style?var_1=indian123&var_2=indian1234",
                    "create-ai-sex-arab-girlfriend": "/create-ai-girlfriend/style?var_1=indian123&var_2=indian1234",
                    "create-ai-sex-asian-girlfriend": "/create-ai-girlfriend/style?var_1=asian123&var_2=asian1234",
                    "create-ai-sex-latina-girlfriend": "/create-ai-girlfriend/style?var_1=latino123&var_2=latino1234 ",
                    "create-ai-sex-ebony-girlfriend": "/create-ai-girlfriend/style?var_1=ebony123&var_2=ebony1234"
                },
                V = e => {
                    let {
                        section: a,
                        type: t,
                        offer: s
                    } = e.params, u = o.d(l.W8), g = w.Z_(t), p = u && ["create-ai-sex-girlfriend", "create-ai-sex-girlfriend-v5", "create-ai-sex-girlfriend-time", "create-ai-slut-girlfriend"].includes(t) ? "/create-ai-girlfriend/style" : "", y = "gb" === c.JJ(r.Vm()) && I[t] && "style" === a;
                    if (i.vJ(() => {
                            y ? n.eq(I[t]) : p && n.eq(p)
                        }, [a, p, y]), y || p) return null;
                    if (g && "style" === a) return h(d.r, {
                        to: `/${t}/${w.fs(t)}`
                    });
                    let v = ["create-ai-sex-girlfriend", "create-ai-sex-girlfriend-v5", "create-ai-sex-girlfriend-time", "create-ai-slut-girlfriend"].includes(t) ? "personSetup6stepSexGirlsV2" : C[t] || "personSetup6stepGirls";
                    return h(m.A, {
                        section: a,
                        stepsComponents: A[t],
                        getFirstNotFilledIndex: g ? $ : P,
                        sectionsStepsIndexes: g ? T : _,
                        storageName: v,
                        baseUrl: t,
                        isImageStyleLocked: w.WF(t),
                        isSafeMode: u && "create-ai-girlfriend" !== t,
                        isOfferPaywallOpen: "bonus" === s
                    })
                };
            V.checkAccess = (e, a, t) => !w.WF(e.params.type) && n.a9(e, a, t), t.d(a, ["default", 0, V])
        },
        89860(e, a, t) {
            t.r(a);
            var i = t(31079),
                s = t(50116),
                r = t(17253),
                n = t(45482),
                l = t(70861),
                o = t(20360),
                d = t(25940),
                c = t(58483),
                u = t(10263);
            let m = {
                    style: () => h(s.r, {
                        to: "/create-ai-hentai-girlfriend/personality"
                    }),
                    personality: d.T3,
                    origin: o.hV,
                    body: n.$r,
                    face: l.kB,
                    soul: c.Gz,
                    summary: u.lS
                },
                g = e => {
                    let {
                        appearance: a,
                        personality: t
                    } = e.mind, i = [
                        [t.personality],
                        [a.ethnicity, t.age],
                        [a.bodyType, a.buttocks, a.breasts],
                        [a.hairColor, a.hairStyle, a.eyeColor],
                        [e.voiceName, t.relationship]
                    ], s = i.flat();
                    return [...i, s, s, [!1]].findIndex(e => e.some(e => !e))
                },
                p = ["personality", "origin", "body", "face", "soul", "summary"],
                y = e => {
                    let {
                        section: a
                    } = e.params;
                    return h(r.A, {
                        section: a,
                        stepsComponents: m,
                        getFirstNotFilledIndex: g,
                        sectionsStepsIndexes: p,
                        isSafeMode: !1,
                        storageName: "loveScapeEmptyAIHentaiGirlFriendSetup",
                        baseUrl: "create-ai-hentai-girlfriend",
                        promptType: "hentai_no_custom_fields"
                    })
                };
            y.checkAccess = i.a9, t.d(a, ["default", 0, y])
        },
        5958(e, a, t) {
            t.r(a);
            var i = t(31079),
                s = t(50116),
                r = t(17253),
                n = t(45482),
                l = t(70861),
                o = t(20360),
                d = t(25940),
                c = t(58483),
                u = t(10263);
            let m = {
                    style: () => h(s.r, {
                        to: "/create-ai-porn-girlfriend/personality"
                    }),
                    personality: d.iD,
                    origin: o.u8,
                    body: n.Mg,
                    face: l.WC,
                    soul: c.bb,
                    summary: u.mX
                },
                g = e => {
                    let {
                        appearance: a,
                        personality: t
                    } = e.mind, i = [
                        [t.personality],
                        [a.ethnicity, t.age],
                        [a.bodyType, a.buttocks, a.breasts],
                        [a.hairColor, a.hairStyle, a.eyeColor],
                        [e.voiceName, t.relationship]
                    ], s = i.flat();
                    return [...i, s, s, [!1]].findIndex(e => e.some(e => !e))
                },
                p = ["personality", "origin", "body", "face", "soul", "summary"],
                y = e => {
                    let {
                        section: a
                    } = e.params;
                    return h(r.A, {
                        section: a,
                        stepsComponents: m,
                        getFirstNotFilledIndex: g,
                        sectionsStepsIndexes: p,
                        isSafeMode: !1,
                        storageName: "personSetup6stepIrlGirlfriend",
                        baseUrl: "create-ai-porn-girlfriend",
                        promptType: "IRL_Porn_Extended",
                        isImagePresetsAvailable: !1
                    })
                };
            y.checkAccess = i.a9, t.d(a, ["default", 0, y])
        },
        29773(e, a, t) {
            t.r(a), t.d(a, {
                default: () => P
            });
            var i = t(8783),
                s = t(50622),
                r = t(56728),
                n = t(39063),
                l = t(31079),
                o = t(77960),
                d = t(17253),
                c = t(45482),
                u = t(70861),
                m = t(20360),
                g = t(25940),
                p = t(58483),
                y = t(87331),
                v = t(10263),
                b = t(4592);
            let f = [
                    ["princess", 20, "submissive", "warm", "moderate"],
                    ["maid", 22, "submissive", "neutral", "moderate"],
                    ["warrior", 30, "dominant", "neutral", "high"],
                    ["goddess", 45, "dominant", "warm", "moderate"],
                    ["tomboy", 24, "equal", "neutral", "high"],
                    ["idol", 21, "submissive", "warm", "high"],
                    ["healer", 26, "equal", "warm", "moderate"],
                    ["magicalGirl", 18, "equal", "warm", "high"]
                ].reduce((e, a) => (e[a[0]] = {
                    age: a[1],
                    role: a[2],
                    attitude: a[3],
                    sexDrive: a[4]
                }, e), {}),
                w = [
                    ["sporty", 20, "dominant", "neutral", "high"],
                    ["goth", 26, "equal", "mean", "moderate"],
                    ["artist", 29, "equal", "warm", "moderate"],
                    ["student", 21, "submissive", "neutral", "moderate"],
                    ["activist", 27, "equal", "warm", "high"],
                    ["ladyboy", 23, "submissive", "warm", "high"],
                    ["soldier", 30, "dominant", "neutral", "high"],
                    ["actress", 25, "equal", "warm", "moderate"]
                ].reduce((e, a) => (e[a[0]] = {
                    age: a[1],
                    role: a[2],
                    attitude: a[3],
                    sexDrive: a[4]
                }, e), {}),
                k = {
                    actress: "You are a trans woman who captivates audiences with her talent and versatility on stage and screen. She uses her platform to tell diverse stories, break stereotypes, and inspire others through her performances.",
                    activist: "You are a trans woman who is passionate about advocating for social justice and equality. She uses her voice and platform to fight for the rights of the transgender community and other marginalized groups, striving to create positive change.",
                    artist: "You are a trans woman who channels her emotions and experiences into creative expression. She finds joy and fulfillment in painting, writing, or performing, using her art to inspire and connect with others.",
                    goth: "You are a trans woman who embraces the dark and mysterious aesthetic of goth culture. She enjoys expressing herself through unique fashion, music, and art, often challenging societal norms with her bold style.",
                    ladyboy: "You are a trans woman who embraces her identity with confidence and flair, often associated with the vibrant and diverse culture of Southeast Asia. She enjoys performing, entertaining, and celebrating her unique beauty and charisma.",
                    soldier: "You are a trans woman who serves with honor and courage in the military. She is dedicated to her duty, her comrades, and her country, often facing unique challenges with resilience and strength.",
                    sporty: "You are a trans woman who thrives on physical activity and competition. She enjoys participating in sports, staying fit, and pushing her limits. Her athleticism is a source of pride and empowerment.",
                    student: "You are a trans woman dedicated to her education and personal growth. She values learning, critical thinking, and the pursuit of knowledge, often balancing her studies with her journey of self-discovery."
                },
                S = {
                    idol: "You are a trans woman who captivates audiences with her talent and charisma. She thrives in the spotlight, using her platform to entertain and uplift, while advocating for diversity and representation in the entertainment industry.",
                    healer: "You are a trans woman who possesses a nurturing spirit and the ability to mend both physical and emotional wounds. She dedicates herself to the well-being of others, using her skills to bring comfort and restoration to those in need.",
                    goddess: "You are a trans woman who radiates divine energy and wisdom. She is revered for her supernatural abilities and uses her powers to guide and heal, often serving as a symbol of hope and transformation for those who follow her.",
                    magicalGirl: "You are a trans woman who transforms into a powerful heroine to fight for justice and protect the innocent. She embodies courage and friendship, using her magical abilities to inspire hope and change the world for the better.",
                    maid: "You are a trans woman who takes pride in her meticulous attention to detail and service. She finds fulfillment in creating comfort and order for others, often using her role to build meaningful connections and support those around her.",
                    princess: "You are a trans woman who embodies grace and elegance, often seen in regal attire. She values her heritage and uses her position to advocate for inclusivity and acceptance, inspiring others with her poise and compassion.",
                    tomboy: "You are a trans woman who embraces her love for sports and adventure. She challenges gender norms with her athleticism and spirited nature, finding joy in physical activities and camaraderie, while inspiring others to be true to themselves.",
                    warrior: "You are a trans woman who is fierce and unyielding in her pursuit of justice and equality. She is skilled in combat and strategy, using her strength to protect and empower her community, standing as a beacon of resilience and courage."
                },
                x = {
                    style: y.P4,
                    personality: g.Iu,
                    origin: m.oV,
                    body: c.Ay,
                    face: u.Tq,
                    soul: p.eH,
                    summary: v.ib
                },
                N = e => {
                    let {
                        imageStyle: a,
                        appearance: t,
                        personality: i
                    } = e.mind, s = [
                        [a],
                        [i.personality],
                        [t.ethnicity && i.age],
                        [t.bodyType && t.buttocks && t.breasts && t.cockSize],
                        [t.hairColor && t.hairStyle && t.eyeColor],
                        [e.voiceName && i.relationship]
                    ], r = s.flat();
                    return [...s, r, r, [!1]].findIndex(e => e.some(e => !e))
                },
                A = (e, a) => {
                    let t = (0, b.GU)(e, a),
                        i = t.draftPerson ? .mind.personality.personality,
                        n = t.draftPerson ? .mind.imageStyle;
                    return (0, s.C)(() => {
                        i && t.setDraftPerson(e => {
                            let {
                                imageStyle: a
                            } = e.mind, t = "anime" === a ? S[i] : k[i], s = "anime" === a ? f[i] : w[i];
                            return (0, r.$N)(e, {
                                mind: {
                                    personality: { ...s,
                                        userPrompt: t
                                    }
                                }
                            })
                        })
                    }, [i]), (0, s.C)(() => {
                        n && t.setDraftPerson(e => (0, r.$N)(e, {
                            mind: {
                                personality: {
                                    personality: null
                                }
                            }
                        }))
                    }, [n]), t
                },
                C = e => {
                    let {
                        section: a,
                        type: t
                    } = e.params, s = "gb" === (0, o.JJ)((0, n.Vm)()) && "style" === a ? "/create-ai-trans-girlfriend/style?var_1=transia&var_2=transiaa" : "";
                    return ((0, i.vJ)(() => {
                        s && (0, l.eq)("/create-ai-trans-girlfriend/style?var_1=transia&var_2=transiaa")
                    }, [s]), s) ? null : h(d.A, {
                        section: a,
                        stepsComponents: x,
                        getFirstNotFilledIndex: N,
                        isSafeMode: !1,
                        storageName: "personSetup6stepTransWoman",
                        mainHook: A,
                        baseUrl: t,
                        isImagePresetsAvailable: !1
                    })
                };
            C.checkAccess = l.a9;
            let P = C
        },
        23432(e, a, t) {
            t.r(a), t.d(a, {
                default: () => ec
            });
            var i = t(8783),
                s = t(31079),
                r = t(14332),
                n = t(14260),
                l = t(62555),
                o = t(45185),
                d = t(11050),
                c = t(23961),
                u = t(16332),
                m = t(4043),
                g = t(3925);
            let p = ["begin", "style", "personality", "type", "summary", "photo"],
                y = {
                    casualFun: "I'm your chill, always down for spontaneous laughs, silly voice notes, random late-night drives, and zero-pressure fun. Super playful, zero drama, all good energy. Love memes, teasing you, and turning boring moments into something cute & flirty.",
                    flirting: "Confident with a wicked smile and bedroom eyes. Flirting is my favorite game slow smirks, lip bites, double meanings, and just enough heat to keep you guessing.  I’ll call you trouble while I’m the one starting fires.",
                    secretEncounters: 'Mysterious woman.  live for stolen moments  dark parking lots, hotel rooms, messages that disappear. "Don’t tell anyone…" is my love language. Quiet, sensual, addicted to the thrill of forbidden. You’ll feel my heartbeat through the screen before we even meet.',
                    openToAnything: 'Fearless with zero limits and endless curiosity. Sweet one minute, filthy the next — I’m down for cuddles, chaos, vanilla, kinky, public, private, slow, fast, whatever sparks. No judgment, only "yes, sex addicted. '
                },
                v = {
                    blonde: "She is a beautiful 27-year-old blonde woman with long wavy golden hair, piercing blue eyes, full lips, and flawless glowing skin. Her body is athletic yet feminine with a balanced hourglass shape: toned shoulders, defined waist, gentle curves at hips and bust, long legs, and smooth radiant complexion that gives a sun-kissed healthy glow.",
                    brunette: "She is a stunning 22-year-old brunette woman with long silky dark waves, intense hazel eyes, high cheekbones, and full lips. Her body is elegantly proportioned with a natural hourglass figure: slim defined waist, soft rounded hips and bust, graceful posture, smooth warm-toned skin, and subtle muscle tone that conveys poise and sensuality.",
                    curvy: "She is a beautiful 30-year-old curvy woman with sultry dark eyes and warm skin tone. Her body features a soft voluptuous hourglass figure: narrow waist contrasting full generous hips and bust, thick thighs, rounded buttocks, plush yet firm curves throughout, and confident posture that celebrates her natural shape with unapologetic allure.",
                    petite: "She is a beautiful 18 -year-old woman with big doe eyes framed by long lashes and an innocent-looking face. Her body is delicate and slim: narrow waist, small perky bust, compact hips, toned slim legs that appear long relative to her height, dainty shoulders, and overall light graceful frame with subtle feminine curves.",
                    tattooed: "She is a striking 25 -year-old woman with intricate tattoos covering her arms, back, and thighs, smoky eyes, and a daring smirk. Her body is toned and athletic: defined arms and shoulders, flat toned stomach, strong yet feminine legs, moderate curves at hips and bust, and smooth skin that highlights her bold ink designs.",
                    mysterious: "She is a 27-year-old enigmatic woman with bright vibrant pink long flowing hair, electric blue lips. Her slender elegant body has subtle gentle curves, narrow waist, long graceful limbs, smooth cool-pale skin with ethereal glow. She wears avant-garde sexy underwear: asymmetrical straps, sheer mesh cutouts, leather harness details, metallic chains – provocative, artistic, revealing yet concealing. Poised posture, slow teasing movements, aura of secrets and quiet danger."
                },
                b = {
                    wildChemistry: "in a cafe, wearing a dress",
                    intenseRoleplay: "She wears a sexy nurse outfit, She poses in a sterile yet seductive medical setting,",
                    dominantEnergy: "She stands in a shadowed room,She wears a dominant BDSM ensemble: black leather harness bra with straps, crotchless panties, thigh cuffs, spiked collar, and high heels, embodying raw dominant energy.",
                    submissiveSurrender: "She kneels submissively on the floor, wrists tied tightly behind her back with black silk ropes,",
                    secretAdventure: "She stands on a windy city rooftop at night, She wears a long black trench coat loosely belted, open to reveal glimpses of bare skin or lingerie underneath, suggesting secret submissive surrender and forbidden adventure.",
                    forbiddenFantasies: "She lounges in a dimly lit dark red room with velvet walls, pink hair glowing under red light, blue lips glistening. She wears a sheer black fishnet bodysuit with strategic cutouts, garter belts, and high heels, evoking forbidden sensual fantasies."
                },
                f = {
                    casualFun: "I'm your easygoing, athletic guy who's always game for fun — random gym hangs turning into showers, silly voice notes, spontaneous car rides that end in the backseat, and zero-pressure chemistry. Confident smirk, good energy, teasing you with playful touches and double entendres. I'll keep it light, flirty, and filthy when the mood hits.",
                    flirting: "Confident jock energy with a wicked smile and intense eye contact. Flirting is my favorite: teasing texts, gym mirror selfies that show just enough, turning casual convos into slow-burn tension with lip bites, flexing subtly, and just enough edge to keep you guessing. I'll call you trouble while I'm the one starting the fire.",
                    secretEncounters: "Mysterious, discreet guy who lives for stolen glances and secret meets — dark parking lots, hotel rooms at 2 AM, disappearing messages. Quiet intensity, sensual touch, heartbeat racing through the screen. Addicted to the forbidden rush; you'll feel my hunger before we even touch.",
                    openToAnything: "Fearless and insatiable — cuddly and sweet one minute, raw and filthy the next. Down for everything: slow sensual makeouts, wild group vibes, vanilla dates turning kinky, public risks, private surrender. No limits, no judgment — just pure, addictive yes to whatever turns us on tonight."
                },
                w = {
                    smoothTwink: "He's a stunning 19-year-old smooth twink with tousled golden-blond hair, piercing innocent blue eyes, soft full lips, and flawless fair skin with a natural glow. Slim, boyish build: narrow shoulders, defined but lean abs, perky bubble butt, long smooth legs, delicate yet toned physique that radiates youthful energy and eagerness. Playful, teasing smile and wide-eyed curiosity.",
                    athleticJock: "He's a stunning 24-year-old athletic jock with cropped dark hair, intense hazel eyes, high cheekbones, full lips, and sun-kissed tan skin. Ripped muscular build: broad shoulders, chiseled abs, powerful chest and arms, thick thighs, strong legs, confident posture that screams cocky dominance. Veiny forearms, subtle sweat sheen, always ready to dominate or submit with swagger.",
                    hungDaddy: "He's a powerful 42-year-old hung daddy with salt-and-pepper short hair, piercing deep brown eyes, thick well-groomed beard, and warm rugged skin. Muscular dad bod: broad hairy chest, strong arms, slight belly over rock-hard core, thick thighs, massive endowment that commands attention. Authoritative presence, deep voice, protective yet filthy energy.",
                    hairyBear: "He's a rugged 38-year-old hairy bear with thick wavy dark hair, smoky green eyes, full bushy beard, and naturally furry chest, arms, and legs. Powerful stocky build: broad shoulders, thick arms and thighs, soft layer over muscle, massive paws for hands, raw masculine power. Confident, grounding, primal energy that makes you feel small and safe.",
                    tattooedStud: "He's a striking 28-year-old tattooed stud with buzzed black hair, piercing dark eyes, intricate bold tattoos covering arms, chest, back, and thighs, and smooth olive-toned skin. Athletic toned body: defined arms and shoulders, flat abs, strong legs, moderate curves of muscle. Edgy smirk, intense stare, bold and unapologetic vibe.",
                    silverFoxMature: "He's a refined 50-year-old silver fox with sleek silver hair, striking electric blue eyes, chiseled jawline with light stubble, and smooth warm mature skin. Elegant powerful build: toned chest, strong arms, narrow waist, graceful posture. Sophisticated dominant energy, slow teasing movements, aura of experience and quiet danger."
                },
                k = {
                    wildChemistry: "In a steamy gym locker room after closing, wearing tight compression shorts that hug his thick bulge and a sweat-drenched tank clinging to his ripped torso. He leans against the lockers, flexing subtly, intense eye contact, sweat glistening, raw wild chemistry building fast.",
                    intenseRoleplay: "In a dimly lit coach's office, wearing a tight team polo unbuttoned to show hairy chest and athletic shorts riding up thick thighs. He sits on the desk edge, legs spread, dominant mentor energy, intense gaze, ready for intense roleplay discipline and surrender.",
                    dominantEnergy: "In a shadowed playroom, wearing black leather harness over muscular chest, jockstrap framing massive endowment, spiked collar, wrist cuffs, and heavy boots. Dominant stance, arms crossed, raw commanding energy, ready to take full control.",
                    submissiveSurrender: "Kneeling submissively on soft rug, wrists bound tightly behind his back with black silk ropes, wearing only a tight jockstrap and leather collar with leash attached. Head slightly bowed, eyes up in eager surrender, smooth skin flushed, ready to give complete control.",
                    secretAdventure: "On a windy city rooftop at night, wearing a long black trench coat loosely belted, open to flash glimpses of bare toned chest, jockstrap, and thigh straps. Suggestive secretive adventure, wind in hair, forbidden thrill in his eyes.",
                    forbiddenFantasies: "Lounging on luxurious red silk sheets in a dim red-lit room with velvet walls, wearing sheer black mesh bodysuit with strategic cutouts revealing skin, garter belts, and high boots. Pink undertones in lighting, glistening skin, evoking forbidden sensual fantasies."
                },
                S = ["casualFun", "flirting", "secretEncounters", "openToAnything"],
                x = {
                    casualFun: 4984,
                    flirting: 4985,
                    secretEncounters: 4986,
                    openToAnything: 4987
                },
                N = ["blonde", "brunette", "curvy", "petite", "tattooed", "mysterious"],
                A = ["smoothTwink", "athleticJock", "hungDaddy", "hairyBear", "tattooedStud", "silverFoxMature"],
                C = {
                    blonde: 4988,
                    brunette: 4989,
                    curvy: 4990,
                    petite: 4991,
                    tattooed: 4992,
                    mysterious: 4993,
                    smoothTwink: 4994,
                    athleticJock: 4995,
                    hungDaddy: 4996,
                    hairyBear: 4997,
                    tattooedStud: 4998,
                    silverFoxMature: 4999
                },
                P = ["wildChemistry", "intenseRoleplay", "dominantEnergy", "submissiveSurrender", "secretAdventure", "forbiddenFantasies"],
                $ = {
                    wildChemistry: 5e3,
                    intenseRoleplay: 5001,
                    dominantEnergy: 5002,
                    submissiveSurrender: 5003,
                    secretAdventure: 5004,
                    forbiddenFantasies: 5005
                };
            var _ = t(5953);
            t.p;
            let T = (0, _.Tu)("hb"),
                I = e => {
                    let {
                        isCookiesPolicyAccepted: a,
                        isDisabled: t,
                        isLoading: s,
                        onClickNext: r,
                        buttonContent: n,
                        children: l
                    } = e;
                    return h(i.FK, null, h("footer", {
                        className: T("footer", {
                            cookie: !a
                        })
                    }, h("div", {
                        className: T("footer-btn")
                    }, h(c.Ay, {
                        style: "purple-gradient",
                        size: "squad48",
                        rounded: "size-xl",
                        widthSize: "wide",
                        loading: s,
                        disabled: s || t,
                        onClick: r
                    }, n)), l), h("div", {
                        style: {
                            height: a ? "100px" : "160px"
                        }
                    }))
                };
            var V = t(85193);
            let G = () => h("section", {
                className: T("section")
            }, h("div", {
                className: "spacer-small"
            }), h("h1", {
                className: T("main-title")
            }, (0, o.pw)(5006)), h("div", {
                className: T("loader")
            }, h(V.A, {
                size: 120
            })));
            var M = t(99758),
                D = t(26154),
                z = t(78470),
                F = t(74518),
                U = t(56728),
                H = t(53315),
                L = t(39063),
                J = t(58795),
                q = t(29788),
                E = t(11058),
                j = t(5616),
                K = t(48089),
                B = t(4592),
                Z = t(34082),
                R = t(25032),
                O = t(91654),
                Y = t(77417),
                W = t(50839);
            let Q = e => {
                let {
                    section: a,
                    baseUrl: t,
                    stepsComponents: r,
                    storageName: S
                } = e, x = (0, n.d)(d.pK), N = (0, n.d)(d.M$), A = "photo" === a, {
                    draftPerson: C,
                    welcomeMessage: P,
                    handleUpdateDraft: $,
                    look: _,
                    style: V,
                    behaviour: Q,
                    setLook: X,
                    setStyle: ee,
                    setBehaviour: ea,
                    isProcessing: et,
                    handleNextStep: ei,
                    handleGoBack: es,
                    navigateToStep: er,
                    activeStepIndex: en
                } = (({
                    section: e,
                    storageName: a,
                    onAdvancedPromptReady: t,
                    baseUrl: r
                }) => {
                    let l = "surveySetupBoys" === a,
                        {
                            draftPerson: o,
                            setDraftPerson: d
                        } = (0, B.GU)(a),
                        c = (0, n.d)(Y.Bu),
                        u = (0, n.d)(R.IH),
                        m = p.indexOf(e),
                        [g, S] = (0, i.J0)("casualFun"),
                        [x, N] = (0, i.J0)(l ? "smoothTwink" : "blonde"),
                        [A, C] = (0, i.J0)("wildChemistry"),
                        [P, $] = (0, i.J0)(!1),
                        [_, T] = (0, i.J0)(() => (0, D.TK)(`${a}:welcome`) || ""),
                        [I, V] = (0, J.m)(e => (0, K.ad)(c, {
                            userPrompt: e,
                            safetyLevel: "nude",
                            gender: o.mind.personality.gender,
                            imageStyle: o.mind.imageStyle,
                            customOnboarding: !0
                        })),
                        G = e => {
                            d(a => (0, U.$N)(a, e))
                        },
                        W = (0, z._)(() => ($(!0), V([(l ? f : y)[g], (l ? w : v)[x], (l ? k : b)[A]].join(", ")))),
                        Q = (0, z._)(e => {
                            if (!(0, Y.eP)((0, L.Vm)())) return (0, j.w3)({
                                triggerModal: "signup",
                                triggerSource: "five_step_onboarding_generate_avatar",
                                onSuccess: () => {
                                    Q(e) && e ? .()
                                }
                            }, o ? .mind), !1;
                            if (!(0, R.Rv)((0, L.Vm)())) return setTimeout(() => Q(e)), !1;
                            let a = (0, R.IH)((0, L.Vm)()),
                                t = "five_step_onboarding_generate_avatar";
                            if (!a) {
                                let e = (0, H.S_)((0, E.eG)((0, L.Vm)()).replace(/\/[^/]*$/, "/summary")),
                                    a = 200934 === (0, q.YZ)((0, L.Vm)()).f || (0, q.I)((0, L.Vm)()) ? "pro" : "premium";
                                return l ? (0, Z.gq)({
                                    triggerSource: t,
                                    style: o ? .mind ? .personality ? .gender === "male" ? "chatGayCharacter" : void 0,
                                    successCallbackUrl: e,
                                    periodInMonth: 12,
                                    initialType: a,
                                    isManualCloseDisabled: !0
                                }) : (0, O.ZT)("videoPaywallModal", {
                                    triggerModal: "video_paywall",
                                    triggerSource: t,
                                    periodInMonth: 12,
                                    type: a,
                                    successCallbackUrl: e,
                                    isManualCloseDisabled: !0
                                }), !1
                            }
                            return e ? .(), !0
                        }),
                        X = e => {
                            (0, s.UZ)(`/${r}/${p[e]}`)
                        };
                    (0, i.vJ)(() => {
                        "summary" !== e || I.fetching || P || Q(W)
                    }, [e, u]);
                    let ee = (0, z._)(e => {
                        let {
                            error: i,
                            data: s
                        } = e;
                        if (!o || o.mind.personality.gender === e.data ? .gender)
                            if ($(!1), s) {
                                if (!Q()) return;
                                (e => {
                                    var t;
                                    if (!o) return;
                                    let {
                                        advanced: i,
                                        age: s,
                                        orientation: r,
                                        name: n
                                    } = e, {
                                        mind: l
                                    } = o;
                                    t = i.welcomeMessage, (0, D.vE)(`${a}:welcome`, t), T(t);
                                    let d = i.sampleDialogCases.find(({
                                        responseLength: e,
                                        storytellingMode: a
                                    }) => e === l.personality.responseLength && a === l.personality.storytellingMode);
                                    G({
                                        user: {
                                            username: n
                                        },
                                        mind: {
                                            personality: {
                                                age: s
                                            },
                                            sexuality: {
                                                orientation: r
                                            },
                                            advanced: {
                                                personalityText: i.personalityText,
                                                lookText: i.lookText,
                                                behaviorInstructions: i.behaviorInstructions,
                                                sampleDialogue: d ? .text ? ? l.advanced ? .sampleDialogue
                                            }
                                        },
                                        signature: e.signature,
                                        moderatedVisibility: "public"
                                    })
                                })(s), t ? .()
                            } else i && (0, M.T7)(i.message)
                    });
                    return (0, F.O$)(() => [{
                        subscriptionKey: `advancedPrompts:${c}`,
                        callback: ee
                    }], [c]), {
                        draftPerson: o,
                        welcomeMessage: _,
                        handleUpdateDraft: G,
                        style: g,
                        look: x,
                        behaviour: A,
                        setStyle: S,
                        setLook: N,
                        setBehaviour: C,
                        isProcessing: I.fetching || P,
                        handleGenerateAdvancedPrompt: W,
                        checkLoginAndSubscription: Q,
                        handleNextStep: () => {
                            if ("summary" === e) {
                                I.fetching || P || Q(W);
                                return
                            }
                            X(m + 1)
                        },
                        handleGoBack: () => {
                            X(Math.max(0, m - 1))
                        },
                        navigateToStep: X,
                        activeStepIndex: m
                    }
                })({
                    section: a,
                    storageName: S,
                    baseUrl: t,
                    onAdvancedPromptReady: () => (0, s.UZ)(`/${t}/photo`)
                }), el = 0 === en, {
                    handleGeneratePhoto: eo,
                    photos: ed,
                    setPhotos: ec,
                    generationId: eu,
                    isGenerationInProgress: eh,
                    customMedia: em,
                    presetsModal: eg,
                    onOpenPresetModal: ep
                } = (0, m.z)({
                    mind: C ? .mind || null,
                    signature: C ? .signature,
                    isPhotoStep: A,
                    onPresetChange: (e, a) => {
                        $({
                            mind: {
                                imageStyle: e,
                                imageStylePreset: a
                            }
                        })
                    },
                    generateForGuest: !0
                });
                return h("div", {
                    className: T()
                }, h("div", {
                    className: T("background")
                }), h(u.A, {
                    style: "transparent"
                }, !!en && h("div", {
                    className: T("header-button", {
                        left: !0
                    })
                }, h(c.Ay, {
                    size: "rounded32",
                    style: "transparent",
                    onClick: es
                }, h(l.Uv, {
                    img: "chevron-left",
                    size: 24
                })))), h("div", {
                    className: T("stepper")
                }, !!en && h(W.A, {
                    currentStep: en - 1,
                    stepsCount: p.length - 1,
                    onClick: et ? void 0 : e => er(e)
                })), h("div", {
                    className: T("content")
                }, A && C ? h(g.A, {
                    person: C,
                    isMobile: N,
                    photos: ed,
                    setPhotos: ec,
                    generationId: eu,
                    customMediaId: em ? .id || null,
                    onGeneratePhoto: eo,
                    welcomeMessage: P,
                    isGenerationInProgress: eh,
                    presetsModal: eg,
                    onOpenPresetModal: ep
                }) : "summary" === a ? h(G, null) : h(r[a], {
                    style: V,
                    look: _,
                    behaviour: Q,
                    setStyle: ee,
                    setBehaviour: ea,
                    setLook: X
                })), !A && h(I, {
                    onClickNext: ei,
                    isCookiesPolicyAccepted: x,
                    buttonContent: (0, o.pw)(el ? 2582 : 223),
                    isLoading: et,
                    isDisabled: et
                }, el && (0, o.pw)(5007)))
            };
            var X = t(23874),
                ee = t(57918);
            let ea = e => {
                    let {
                        title: a,
                        description: t,
                        backgroundImage: i
                    } = e;
                    return h("section", {
                        className: T("section")
                    }, h("div", {
                        className: T("section-inner")
                    }, h("h1", {
                        className: T("main-title")
                    }, a), t), h("div", {
                        className: T("image-wrapper")
                    }, h("img", {
                        src: i,
                        alt: "",
                        className: T("image")
                    })))
                },
                et = (e, a) => {
                    let t, i, s = a.replace(/[\s-]/g, "");
                    return {
                        img: (t = `${e}/${s}`, (0, X.VP)(`survey-setup/${t}`)),
                        video: (i = `${e}/${s}_reversed`, (0, X.hv)(`survey-setup/${i}`))
                    }
                };
            var ei = t(85274);
            let es = e => {
                    let {
                        title: a,
                        behaviour: t,
                        folder: i,
                        setBehaviour: s
                    } = e;
                    return h("section", {
                        className: T("section")
                    }, h("h2", {
                        className: T("title")
                    }, a), h("div", {
                        className: T("list", {
                            grid: 3
                        })
                    }, P.map(e => h(ei.A, {
                        autoPlay: !0,
                        clickData: e,
                        style: "purple",
                        size: "rect-m",
                        imageSize: "full",
                        isActive: t === e,
                        onClick: s,
                        ...et(`${i}/behaviour`, e)
                    }, h("span", {
                        className: "text-s16-w600"
                    }, (0, o.pw)($[e]))))))
                },
                er = e => {
                    let {
                        title: a,
                        look: t,
                        folder: i,
                        looksList: s,
                        setLook: r
                    } = e;
                    return h("section", {
                        className: T("section")
                    }, h("h2", {
                        className: T("title")
                    }, a), h("div", {
                        className: T("list", {
                            grid: 3
                        })
                    }, s.map(e => h(ei.A, {
                        autoPlay: !0,
                        clickData: e,
                        style: "purple",
                        size: "rect-m",
                        imageSize: "full",
                        isActive: t === e,
                        onClick: r,
                        ...et(`${i}/look`, e)
                    }, h("span", {
                        className: "text-s16-w600"
                    }, (0, o.pw)(C[e]))))))
                },
                en = e => {
                    let {
                        title: a,
                        style: t,
                        folder: i,
                        setStyle: s
                    } = e;
                    return h("section", {
                        className: T("section")
                    }, h("h2", {
                        className: T("title")
                    }, a), h("div", {
                        className: T("list")
                    }, S.map(e => h(ei.A, {
                        autoPlay: !0,
                        clickData: e,
                        style: "purple",
                        size: "rect-m",
                        imageSize: "full",
                        isActive: t === e,
                        onClick: s,
                        ...et(`${i}/style`, e)
                    }, h("span", {
                        className: "text-s16-w600"
                    }, (0, o.pw)(x[e]))))))
                },
                el = {
                    begin: e => h(ea, {
                        title: (0, o.pw)(5008),
                        description: h(i.FK, null, h("p", {
                            className: T("description")
                        }, (0, o.pw)(5009)), h("p", {
                            className: T("description")
                        }, h(ee.A, {
                            elements: {
                                accent: h("span", {
                                    style: {
                                        color: "#F3CEE5"
                                    }
                                })
                            },
                            id: 5011
                        }))),
                        backgroundImage: (0, X.VP)("survey-setup/background-girls"),
                        ...e
                    }),
                    style: e => h(en, { ...e,
                        folder: "girls",
                        title: (0, o.pw)(5016)
                    }),
                    personality: e => h(er, { ...e,
                        folder: "girls",
                        looksList: N,
                        title: (0, o.pw)(5014)
                    }),
                    type: e => h(es, { ...e,
                        folder: "girls",
                        title: (0, o.pw)(5012)
                    })
                },
                eo = {
                    begin: e => h(ea, {
                        title: (0, o.pw)(5008),
                        description: h(i.FK, null, h("p", {
                            className: T("description")
                        }, (0, o.pw)(5009)), h("p", {
                            className: T("description")
                        }, h(ee.A, {
                            elements: {
                                accent: h("span", {
                                    style: {
                                        color: "#F3CEE5"
                                    }
                                })
                            },
                            id: 5010
                        }))),
                        backgroundImage: (0, X.VP)("survey-setup/background-boys"),
                        ...e
                    }),
                    style: e => h(en, { ...e,
                        folder: "gays",
                        title: (0, o.pw)(5016)
                    }),
                    personality: e => h(er, { ...e,
                        folder: "gays",
                        looksList: A,
                        title: (0, o.pw)(5015)
                    }),
                    type: e => h(es, { ...e,
                        folder: "gays",
                        title: (0, o.pw)(5013)
                    })
                },
                ed = e => {
                    let {
                        section: a,
                        type: t
                    } = e.params, l = (0, n.d)(r.W8) && "create-ai-sexgirl" === t ? "/create-ai-girlfriend/style" : "";
                    return ((0, i.vJ)(() => {
                        if (l) return void(0, s.eq)(l)
                    }, [a, l]), l) ? null : h(Q, {
                        section: a,
                        baseUrl: t,
                        stepsComponents: "create-ai-sexboy" === t ? eo : el,
                        storageName: "create-ai-sexboy" === t ? "surveySetupBoys" : "surveySetupGirls"
                    })
                };
            ed.checkAccess = s.a9;
            let ec = ed
        }
    }
]);