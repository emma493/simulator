(globalThis.webpackChunk || = []).push([
    [5428], {
        51140(e, t, r) {
            var a = r(8783),
                i = r(78470),
                n = r(34810),
                s = r(5953);
            r.d(t, ["_v", 0, e => {
                let {
                    audioBlob: t,
                    onDurationReady: r
                } = e, i = a.Kr(() => {
                    if (t) {
                        let e = new Audio;
                        if (r) {
                            let t = () => {
                                e.currentTime = 1e6, setTimeout(() => {
                                    e.currentTime = 0, r(e.duration)
                                }, 100)
                            };
                            e.addEventListener("canplaythrough", t, {
                                once: !0
                            }), setTimeout(() => e.removeEventListener("canplaythrough", t), 5e3)
                        }
                        return e.src = t instanceof Blob ? URL.createObjectURL(t) : t, e.load(), e
                    }
                    return null
                }, [t]);
                return a.vJ(() => {
                    if (i && t instanceof Blob) return () => {
                        URL.revokeObjectURL(i.src), i.pause(), i.src = ""
                    }
                }, [i]), {
                    audio: i,
                    play: () => i ? .play().catch(() => {
                        setTimeout(() => {
                            s.HE(i)
                        }, 100)
                    }),
                    pause: () => i ? .pause()
                }
            }, "kg", 0, e => {
                let {
                    audio: t,
                    timerRef: r
                } = e;
                a.vJ(() => {
                    if (!t) return;
                    let e = -1,
                        a = setInterval(() => {
                            let a = 0 | t.currentTime;
                            a !== e && r.current && (r.current.textContent = n.fU(1e3 * a, n.xv.MINUTES_SECONDS), e = a)
                        }, 300);
                    return () => {
                        clearInterval(a)
                    }
                }, [t])
            }, "mm", 0, e => {
                let {
                    audio: t,
                    onEnded: r,
                    onChangePlay: n,
                    onError: s
                } = e, l = i._(() => {
                    r ? .()
                }), o = i._(() => {
                    n ? .()
                }), u = i._(e => {
                    s ? .(e)
                });
                a.vJ(() => {
                    if (t) return t.addEventListener("ended", l), t.addEventListener("play", o), t.addEventListener("pause", o), t.addEventListener("error", u), () => {
                        t.removeEventListener("ended", l), t.removeEventListener("play", o), t.removeEventListener("pause", o), t.removeEventListener("error", u)
                    }
                }, [t]), a.vJ(() => () => {
                    t && (t.src = "")
                }, [])
            }])
        },
        25076(e, t, r) {
            r.d(t, {
                u: () => u,
                A: () => p
            });
            var a = r(8783),
                i = r(62555),
                n = r(5953),
                s = r(23961),
                l = r(68088),
                o = r(50839);
            r.p;
            let u = (0, n.Tu)("bf"),
                p = a.ph(e => {
                    let {
                        currentStep: t,
                        stepsCount: r,
                        onClick: a,
                        onBack: n,
                        onClose: p,
                        children: c,
                        isMobile: d,
                        isVisibleStepper: m,
                        buttonsStyle: y = "transparent",
                        buttonsSize: v = "rounded48"
                    } = e, S = "rounded48" === v ? d ? 16 : 24 : 20;
                    return h("div", {
                        className: u()
                    }, h("div", {
                        className: u("header")
                    }, n ? h(s.Ay, {
                        size: v,
                        style: y,
                        onClick: n
                    }, h(i.Uv, {
                        img: "chevron-left",
                        size: S
                    })) : h("div", {
                        style: {
                            width: "48px"
                        }
                    }), h(l.A, {
                        size: d ? 20 : 32,
                        style: {
                            flex: "1"
                        }
                    }, c), h(s.Ay, {
                        size: v,
                        style: y,
                        type: "button",
                        className: u("button", {
                            hidden: !p
                        }),
                        onClick: p
                    }, h(i.Uv, {
                        img: "close-3",
                        size: S
                    }))), m && h(o.A, {
                        stepsCount: r,
                        currentStep: t,
                        onClick: a
                    }))
                })
        },
        50839(e, t, r) {
            r.d(t, {
                A: () => n
            });
            var a = r(8783),
                i = r(25076);
            let n = a.ph(({
                stepsCount: e,
                currentStep: t,
                onClick: r
            }) => h("div", {
                className: i.u("track")
            }, Array.from({
                length: e
            }, (e, a) => h("button", {
                key: a,
                className: i.u("step", {
                    active: a === t,
                    passed: a < t
                }),
                disabled: !r,
                onClick: () => r ? .(a),
                type: "button"
            }))))
        },
        94161(e, t, r) {
            r.d(t, ["j", 0, {
                short: {
                    title: 330,
                    example: 331,
                    description: 332
                },
                long: {
                    title: 333,
                    example: 334,
                    description: 335
                }
            }])
        },
        44961(e, t, r) {
            var a = r(23874),
                i = r(39063),
                n = r(21319),
                s = r(44548);
            let l = e => a.VP(`character-setup/${e}`),
                o = e => a.hv(`character-setup/${e}`),
                u = (e, t) => {
                    let r = t.toLowerCase().replace(/[\s-]/g, "");
                    return {
                        img: l(`${e}/${r}`),
                        video: o(`${e}/${r}`)
                    }
                },
                p = (e, t, r, a, i) => u([a, e, i || t].filter(Boolean).join("/"), r);
            r.d(t, ["BY", 0, (...e) => p("relationships", ...e), "C1", 0, o, "HU", 0, (...e) => p("personality", ...e), "Ip", 0, (e, t, r, a) => p("ethnicity", e, t, r, a), "Pt", 0, "transwoman", "RA", 0, (...e) => p("breast-size", ...e), "Ss", 0, l, "XV", 0, (...e) => p("booty-size", ...e), "a7", 0, (...e) => p("cock-size", ...e), "ak", 0, () => "B" === n.V1(i.Vm(), "25093"), "dD", 0, (e, t, r) => {
                let i = r.toLowerCase().replace(/[\s-]/g, "");
                return a.VP(`${e}/female/${t}-${i}`)
            }, "i9", 0, e => `roleplay/${e}`, "kP", 0, e => {
                let t = s.t(),
                    r = e ? e.replace(" ", "") : "euro";
                return t ? `v2/${r}` : void 0
            }, "m4", 0, (...e) => p("hair-style", ...e), "nO", 0, u, "o1", 0, e => ({
                "Step sister": 336,
                "Step mom": 337,
                "Sex friend": 338,
                Girlfriend: 339
            })[e], "rk", 0, "girls/nsfw", "wG", 0, e => {
                let {
                    ethnicity: t,
                    hairColor: r,
                    bodyType: a
                } = e.appearance, i = s.t(), n = t ? t.replace(" ", "") : "euro";
                if (i) return `v2/${n}/r/${"athletic"===a?"average":a}/${r?.toLowerCase()||"brown"}`
            }, "x2", 0, (...e) => p("body-type", ...e)])
        },
        44548(e, t, r) {
            var a = r(39063),
                i = r(11058);
            r.d(t, ["t", 0, () => !i.eG(a.Vm()).startsWith("/create-ai-slut-girlfriend")])
        },
        16332(e, t, r) {
            r.d(t, {
                A: () => s
            });
            var a = r(5953),
                i = r(30285);
            r.p;
            let n = (0, a.Tu)("bg"),
                s = ({
                    style: e = "default",
                    children: t,
                    content: r
                }) => h("header", {
                    className: n({
                        style: e
                    })
                }, r || h(i.A, {
                    clickable: !1
                }), t)
        },
        17713(e, t, r) {
            let a = {
                    imagePromptEnhancer: "on",
                    promptType: "regular",
                    appearance: {
                        ethnicity: "euro",
                        hairStyle: "ponytail",
                        hairColor: "Blond",
                        eyeColor: "blue",
                        face: null,
                        bodyType: "curvy",
                        breasts: "huge",
                        buttocks: "large",
                        genitals: "trimmed",
                        cockSize: null,
                        chestSize: null,
                        circumcised: null,
                        cockGrooming: null,
                        height: null
                    },
                    interests: {},
                    personality: {
                        storytellingMode: !0,
                        characterType: "aiCharacter",
                        gender: "female",
                        age: 21,
                        personality: "lover",
                        occupation: "Student",
                        relationship: "Sex friend",
                        responseLength: "long",
                        role: "equal",
                        attitude: "warm",
                        sexDrive: "high",
                        specifics: null
                    },
                    sexuality: {
                        kinks: [],
                        orientation: "Bisexual"
                    },
                    sexting: [],
                    imageStyle: "realistic",
                    imageStylePreset: null,
                    safetyLevel: "nude"
                },
                i = { ...a,
                    appearance: { ...a.appearance,
                        hairStyle: "bangs",
                        bodyType: "skinny",
                        breasts: "small",
                        buttocks: "skinny"
                    },
                    personality: { ...a.personality,
                        relationship: "Girlfriend"
                    }
                },
                n = "Standard";
            r.d(t, ["K", 0, {
                curvy: {
                    mind: a,
                    user: {
                        name: ""
                    },
                    voiceName: n
                },
                skinny: {
                    mind: i,
                    user: {
                        name: ""
                    },
                    voiceName: n
                }
            }])
        },
        34837(e, t, r) {
            var a = r(52187),
                i = r(45185),
                n = r(94161);
            r.d(t, ["F", 0, () => a.eC ? 340 : 27, "H", 0, e => i.pw(n.j[e].example).replace(/\{#action\}|\{\/action\}/g, "")])
        },
        23355(e, t, r) {
            var a = r(56728),
                i = r(52187),
                n = r(17713),
                s = r(34837),
                l = r(93316);
            let o = { ...l.HH,
                    mind: { ...l.HH.mind,
                        promptType: "advanced",
                        advanced: {
                            sampleDialogue: s.H("long")
                        },
                        safetyLevel: "safe"
                    }
                },
                u = (0, a.$N)(l.eA, {
                    voiceName: "Standard",
                    mind: {
                        imageStyle: "realistic",
                        imageStylePreset: null,
                        sexuality: {
                            orientation: "Bisexual"
                        },
                        safetyLevel: "nude",
                        personality: {
                            relationship: "Step mom",
                            sexDrive: "high",
                            attitude: "warm",
                            role: "equal",
                            personality: "lover"
                        },
                        appearance: {
                            ethnicity: "asian",
                            bodyType: "average",
                            breasts: "large",
                            buttocks: "athletic",
                            hairStyle: "bun",
                            hairColor: "Blond",
                            eyeColor: "blue"
                        }
                    }
                }),
                p = (0, a.$N)(l.eA, {
                    voiceName: "Standard",
                    mind: {
                        imageStyle: "realistic",
                        sexuality: {
                            orientation: "Bisexual"
                        },
                        safetyLevel: "safe",
                        personality: {
                            relationship: "Step mom",
                            sexDrive: "high",
                            attitude: "warm",
                            role: "equal",
                            personality: "lover"
                        },
                        appearance: {
                            ethnicity: "asian",
                            bodyType: "average",
                            breasts: "large",
                            buttocks: "athletic",
                            hairStyle: "bun",
                            hairColor: "Blond",
                            eyeColor: "blue"
                        },
                        promptType: "sfw"
                    }
                }),
                c = (e, t, r = !0) => (0, a.$N)(e, {
                    mind: {
                        imageStyle: t,
                        imageStylePreset: r ? "anime" === t ? "illustrious" : "IRL_Porn" : null
                    }
                }),
                d = e => (0, a.$N)(u, {
                    mind: {
                        appearance: {
                            ethnicity: e
                        }
                    }
                });
            r.d(t, ["$", 0, e => {
                switch (e) {
                    case "loveScapePersonSetup":
                        return (0, a.$N)(l.HH, {
                            mind: {
                                safetyLevel: "nude",
                                promptType: "regular",
                                imageStylePreset: null,
                                imageStyle: "realistic"
                            }
                        });
                    case "loveScapePersonSetupSfw":
                        return l.HH;
                    case "loveScapePersonAdvancedSetup":
                        return (0, a.$N)(o, {
                            mind: {
                                safetyLevel: "nude",
                                imageStylePreset: null,
                                imageStyle: "realistic",
                                sexuality: {
                                    orientation: "Bisexual"
                                }
                            }
                        });
                    case "loveScapePersonAdvancedSetupSfw":
                        return o;
                    case "personSetup6stepBoys":
                        return l._A;
                    case "personSetup6stepBdsm":
                    case "loveScapePersonSetupV2":
                        return (0, a.$N)(l.eA, {
                            voiceName: "Standard",
                            mind: {
                                imageStyle: "realistic",
                                imageStylePreset: null,
                                sexuality: {
                                    orientation: "Bisexual"
                                },
                                safetyLevel: "nude",
                                personality: {
                                    relationship: "Step mom",
                                    sexDrive: "high",
                                    attitude: "warm",
                                    role: "equal",
                                    personality: "shy",
                                    occupation: "Model"
                                },
                                appearance: {
                                    ethnicity: "asian",
                                    bodyType: "average",
                                    breasts: "large",
                                    buttocks: "athletic",
                                    hairStyle: "bun",
                                    hairColor: "Blond",
                                    eyeColor: "blue"
                                }
                            }
                        });
                    case "personSetup6stepSexGirlsV2":
                    case "personSetup6stepGirlsV2":
                        return u;
                    case "personSetup6stepSexGirlsReal":
                        return (0, a.$N)(u, {
                            mind: {
                                imageStyle: "realistic",
                                imageStylePreset: null
                            }
                        });
                    case "personSetup6stepSexGirlsAnime":
                        return (0, a.$N)(u, {
                            mind: {
                                imageStyle: "anime",
                                imageStylePreset: "illustrious"
                            }
                        });
                    case "personSetup6stepEbony":
                        return d("ebony");
                    case "personSetup6stepAsian":
                        return d("asian");
                    case "personSetup6stepLatina":
                        return d("latina");
                    case "personSetup6stepArab":
                        return d("middle eastern");
                    case "personSetup6stepSexy":
                        return (0, a.$N)(d("euro"), {
                            mind: {
                                imageStyle: "realistic",
                                imageStylePreset: null
                            }
                        });
                    case "personSetup6stepSexyLatinoAsian":
                        return (0, a.$N)(d("latina"), {
                            mind: {
                                imageStyle: "realistic",
                                imageStylePreset: null
                            }
                        });
                    case "personSetup6stepGirlsV2Safe":
                        return p;
                    case "personSetup6stepGirlsRealtime":
                        return c(u, "realistic", !1);
                    case "personSetup6stepGirlsAnime":
                        return c(u, "anime", !1);
                    case "personSetup6stepGirlsRealtimeSafe":
                        return c(p, "realistic", !1);
                    case "personSetup6stepGirlsAnimeSafe":
                        return c(p, "anime", !1);
                    case "personSetup6stepSexGirls":
                    case "personSetupAiGirlPro":
                    case "personSetupCreateGirlfriendV3":
                        return (0, a.$N)(u, {
                            voiceName: "Standard",
                            mind: {
                                imageStyle: "realistic",
                                imageStylePreset: null,
                                sexuality: {
                                    orientation: "Bisexual"
                                },
                                safetyLevel: i.eC ? "safe" : "nude",
                                personality: {
                                    personality: "caregiver",
                                    relationship: "Girlfriend",
                                    role: "submissive",
                                    attitude: "neutral",
                                    occupation: "Dancer"
                                },
                                appearance: {
                                    ethnicity: "euro",
                                    hairStyle: "straight",
                                    hairColor: "Brown",
                                    eyeColor: "brown",
                                    bodyType: "average",
                                    breasts: "small",
                                    buttocks: "medium"
                                }
                            }
                        });
                    case "personSetup6stepGirls":
                        return (0, a.$N)(l.eA, {
                            mind: {
                                sexuality: {
                                    orientation: "Bisexual"
                                },
                                safetyLevel: "nude"
                            }
                        });
                    case "personSetup6stepMilfV2":
                        return (0, a.$N)(d("euro"), {
                            mind: {
                                personality: {
                                    age: 45
                                }
                            }
                        });
                    case "personSetup6stepGrannyV2":
                        return (0, a.$N)(d("euro"), {
                            voiceName: "granny-comforting",
                            mind: {
                                personality: {
                                    age: 65,
                                    occupation: "Secretary"
                                }
                            }
                        });
                    case "personSetup6stepIrlGirlfriend":
                        return (0, a.$N)(l.eA, {
                            mind: {
                                personality: {
                                    storytellingMode: !0,
                                    responseLength: "long"
                                },
                                sexuality: {
                                    orientation: "Bisexual"
                                },
                                promptType: "IRL_Porn_Extended",
                                imageStyle: "realistic",
                                imageStylePreset: "IRL_Porn",
                                safetyLevel: "nude"
                            }
                        });
                    case "loveScapeEmptySagaPersonSetup":
                        return (0, a.$N)(l.eA, {
                            mind: {
                                imageStyle: "anime",
                                imageStylePreset: "hentai",
                                safetyLevel: "nude"
                            }
                        });
                    case "loveScapeEmptyAIHentaiGirlFriendSetup":
                        return (0, a.$N)(l.eA, {
                            mind: {
                                personality: {
                                    storytellingMode: !0,
                                    responseLength: "long"
                                },
                                sexuality: {
                                    orientation: "Bisexual"
                                },
                                imageStyle: "anime",
                                imageStylePreset: "hentai",
                                promptType: "hentai_no_custom_fields",
                                safetyLevel: "nude"
                            }
                        });
                    case "personSetupIndian6step":
                        return (0, a.$N)(l.eA, {
                            mind: {
                                appearance: {
                                    ethnicity: "south asian"
                                },
                                safetyLevel: "nude"
                            }
                        });
                    case "personSetup6stepTransWoman":
                        return l.qe;
                    case "surveySetupGirls":
                        return (0, a.$N)(o, {
                            voiceName: "Attractive",
                            mind: {
                                personality: {
                                    gender: "female"
                                },
                                safetyLevel: "nude",
                                imageStylePreset: "IRL_Porn",
                                imageStyle: "realistic",
                                sexuality: {
                                    orientation: "Bisexual"
                                }
                            }
                        });
                    case "surveySetupBoys":
                        return (0, a.$N)(o, {
                            voiceName: "oliver",
                            mind: {
                                personality: {
                                    gender: "male"
                                },
                                safetyLevel: "nude",
                                imageStylePreset: null,
                                imageStyle: "realistic",
                                sexuality: {
                                    orientation: "Gay"
                                }
                            }
                        });
                    case "personSetupPerfectMatch":
                        return n.K.curvy;
                    case "loveScapePersonHentaiSetup":
                        return (0, a.$N)(o, {
                            voiceName: "Attractive",
                            mind: {
                                personality: {
                                    gender: "female"
                                },
                                safetyLevel: "nude",
                                imageStylePreset: null,
                                imageStyle: "anime",
                                sexuality: {
                                    orientation: "Bisexual"
                                }
                            },
                            moderatedVisibility: "private"
                        })
                }
            }, "l", 0, o])
        },
        4592(e, t, r) {
            var a = r(8783),
                i = r(26154),
                n = r(50622),
                s = r(56728),
                l = r(61491),
                o = r(39063),
                u = r(14260),
                p = r(12402),
                c = r(48089),
                d = r(81768),
                m = r(23355),
                y = r(81459),
                v = r(77417);
            let [S, g] = l.yL();
            r.d(t, ["GU", 0, (e, t) => {
                let [r, l] = a.J0(), g = u.d(v.eP), f = a.Kr(() => {
                    let t = (0, m.$)(e),
                        r = i.TK(e) || t;
                    return r.mind.advanced && delete r.mind.advanced.signature, r = (0, s.$N)(t, r), "loveScapePersonSetup" === e && delete r.mind.advanced, ("loveScapePersonAdvancedSetup" === e || "loveScapePersonAdvancedSetupSfw" === e) && (r.mind.promptType = "advanced"), r
                }, [e]), b = u.d(e => t ? y.Fh(e, t) : f), [N, x] = a.J0(b);
                return a.vJ(() => {
                    t && !y.Fh(o.Vm(), t) && p.zy(t)
                }, []), a.vJ(() => {
                    let e = S(l);
                    return () => {
                        e()
                    }
                }, []), n.C(() => {
                    if (!g || t || "loveScapePersonAdvancedSetup" === e || !r || r !== e) return;
                    let a = s.sg(() => {
                        if (N) return c.Hf({
                            onboarding: e,
                            mind: N.mind,
                            voiceName: N.voiceName
                        })
                    }, 600);
                    return a(), () => {
                        a.cancel()
                    }
                }, [e, N ? .mind, N ? .voiceName, g, r]), n.C(() => {
                    !t && N && (i.vE(e, N), d.UG(N.mind))
                }, [!t, N]), a.vJ(() => {
                    b && t && x((0, s.$N)(b, {
                        user: {
                            login: b.user.username,
                            username: b.user.profile ? .name
                        }
                    }))
                }, [!b, !t]), {
                    draftPerson: N,
                    setDraftPerson: x,
                    person: b
                }
            }, "z9", 0, g])
        },
        21130(e, t, r) {
            var a = r(77390);
            let i = e => "transwoman" !== e,
                n = (e, t) => {
                    if (!e) return !0;
                    if (!i(t)) return !1;
                    let r = a.lg["male" === t ? "male" : "female"];
                    return r.realistic.includes(e) || r.anime.includes(e)
                },
                s = (e, t) => i(t) && "anime" === e ? "illustrious" : null;
            r.d(t, ["IN", 0, (e, t, r) => n(e, t) ? e || null : s(r, t), "LJ", 0, n, "MY", 0, i, "lQ", 0, s])
        },
        6953(e, t, r) {
            r.d(t, {
                A: () => n
            });
            var a = r(5953);
            r.p;
            let i = (0, a.Tu)("f"),
                n = e => {
                    let {
                        children: t,
                        columns: r = 2,
                        description: a,
                        title: n,
                        type: s = "grid",
                        style: l,
                        targetRef: o,
                        gap: u
                    } = e;
                    return h("div", {
                        style: l
                    }, !!n && h("div", {
                        className: i("header", {
                            style: "list-left" === s ? "left" : "center"
                        })
                    }, n), !!a && h("div", {
                        className: i("description", {
                            style: "list-left" === s ? "left" : "regular"
                        })
                    }, a), h("div", {
                        className: i(s),
                        ref: o,
                        style: {
                            gap: u ? `${u}px` : void 0,
                            gridTemplateColumns: "grid" === s ? `repeat(${r}, 1fr)` : void 0
                        }
                    }, t))
                }
        },
        91437(e, t, r) {
            var a = r(61491);
            let [i, n] = a.yL(), [s, l] = a.yL();
            r.d(t, ["Cc", 0, n, "Mq", 0, l, "YM", 0, i, "i", 0, s])
        }
    }
]);