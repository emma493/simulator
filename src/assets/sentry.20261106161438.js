(globalThis.webpackChunk || = []).push([
[3326], {
    69351(e, t, n) {
        let r, i, o, s, a, l, u, c, d, p, f, h, m, g, _, y, v, b, S, w, k, E, x, C, I, T, M, R, A, O, P, N;
        n.r(t), n.d(t, {
            BrowserClient: () => uT,
            MULTIPLEXED_TRANSPORT_EXTRA_KEY: () => sr,
            OpenFeatureIntegrationHook: () => gM,
            SDK_VERSION: () => K,
            SEMANTIC_ATTRIBUTE_SENTRY_OP: () => ry,
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => rv,
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => rg,
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => rm,
            Scope: () => tn,
            WINDOW: () => iX,
            addBreadcrumb: () => su,
            addEventProcessor: () => iV,
            addIntegration: () => tC,
            bindScopeToEmitter: () => o0,
            breadcrumbsIntegration: () => cg,
            browserApiErrorsIntegration: () => cy,
            browserProfilingIntegration: () => gk,
            browserSessionIntegration: () => cC,
            browserTracingIntegration: () => mG,
            buildLaunchDarklyFlagUsedHandler: () => gI,
            captureConsoleIntegration: () => sT,
            captureEvent: () => iO,
            captureException: () => iR,
            captureFeedback: () => tb,
            captureMessage: () => iA,
            captureSession: () => iQ,
            chromeStackLineParser: () => uq,
            close: () => iH,
            consoleLoggingIntegration: () => a_,
            contextLinesIntegration: () => de,
            continueTrace: () => oj,
            createConsolaReporter: () => aI,
            createLangChainCallbackHandler: () => lY,
            createTransport: () => se,
            createUserFeedbackEnvelope: () => u2,
            cultureContextIntegration: () => cP,
            dedupeIntegration: () => sM,
            defaultRequestInstrumentationOptions: () => mS,
            defaultStackLineParsers: () => uZ,
            defaultStackParser: () => u0,
            diagnoseSdkConnectivity: () => gD,
            elementTimingIntegration: () => m0,
            endSession: () => iY,
            eventFiltersIntegration: () => sh,
            eventFromException: () => uE,
            eventFromMessage: () => ux,
            exceptionFromError: () => uv,
            extraErrorDataIntegration: () => sP,
            featureFlagsIntegration: () => s4,
            feedbackAsyncIntegration: () => i4,
            feedbackIntegration: () => i6,
            feedbackSyncIntegration: () => i6,
            fetchStreamPerformanceIntegration: () => mN,
            flush: () => iq,
            forceLoad: () => cY,
            functionToStringIntegration: () => sd,
            geckoStackLineParser: () => uJ,
            getAbsoluteUrl: () => m1,
            getActiveSpan: () => ih,
            getClient: () => ty,
            getCurrentScope: () => tf,
            getDefaultIntegrations: () => cV,
            getFeedback: () => nt,
            getGlobalScope: () => tm,
            getIsolationScope: () => th,
            getReplay: () => hH,
            getRootSpan: () => id,
            getSpanDescendants: () => ic,
            getSpanStatusFromHttpCode: () => oc,
            getTraceData: () => sl,
            globalHandlersIntegration: () => cD,
            graphqlClientIntegration: () => dp,
            growthbookIntegration: () => gP,
            httpClientIntegration: () => c4,
            httpContextIntegration: () => cB,
            inboundFiltersIntegration: () => sm,
            init: () => cG,
            instrumentAnthropicAiClient: () => lA,
            instrumentCreateReactAgent: () => l2,
            instrumentGoogleGenAIClient: () => lL,
            instrumentLangChainEmbeddings: () => lQ,
            instrumentLangGraph: () => l5,
            instrumentOpenAiClient: () => lw,
            instrumentOutgoingRequests: () => mw,
            instrumentStateGraph: () => l3,
            instrumentSupabaseClient: () => sV,
            isBotUserAgent: () => mJ,
            isEnabled: () => iJ,
            isInitialized: () => iz,
            lastEventId: () => iW,
            launchDarklyIntegration: () => gC,
            lazyLoadIntegration: () => i5,
            linkedErrorsIntegration: () => cH,
            logger: () => V,
            makeBrowserOfflineTransport: () => m9,
            makeFetchTransport: () => uD,
            makeMultiplexedTransport: () => so,
            metrics: () => G,
            moduleMetadataIntegration: () => sw,
            normalizeStringifyValue: () => cJ,
            onLoad: () => cK,
            openFeatureIntegration: () => gT,
            opera10StackLineParser: () => uK,
            opera11StackLineParser: () => uX,
            parameterize: () => ss,
            registerSpanErrorInstrumentation: () => ou,
            registerWebWorker: () => gj,
            replayCanvasIntegration: () => ma,
            replayIntegration: () => hU,
            reportPageLoaded: () => m2,
            reportingObserverIntegration: () => cZ,
            rewriteFramesIntegration: () => s$,
            sendFeedback: () => t1,
            setActiveSpanInBrowser: () => m3,
            setAttribute: () => iF,
            setAttributes: () => ij,
            setContext: () => iP,
            setConversationId: () => iU,
            setCurrentClient: () => o3,
            setExtra: () => iD,
            setExtras: () => iN,
            setHttpStatus: () => od,
            setMeasurement: () => oT,
            setTag: () => i$,
            setTags: () => iL,
            setUser: () => iB,
            showReportDialog: () => cQ,
            spanStreamingIntegration: () => m4,
            spanToBaggageHeader: () => iE,
            spanToJSON: () => r6,
            spanToTraceHeader: () => r1,
            spotlightBrowserIntegration: () => gx,
            startBrowserTracingNavigationSpan: () => mK,
            startBrowserTracingPageLoadSpan: () => mY,
            startInactiveSpan: () => o$,
            startNewTrace: () => oW,
            startSession: () => iG,
            startSpan: () => oD,
            startSpanManual: () => oL,
            statsigIntegration: () => gN,
            supabaseIntegration: () => sG,
            suppressTracing: () => oB,
            thirdPartyErrorFilterIntegration: () => sQ,
            uiProfiler: () => u$,
            unleashIntegration: () => gR,
            updateSpanName: () => ig,
            viewHierarchyIntegration: () => df,
            webVitalsIntegration: () => mW,
            webWorkerIntegration: () => gL,
            winjsStackLineParser: () => uG,
            withActiveSpan: () => oF,
            withIsolationScope: () => t_,
            withScope: () => tg,
            withStreamedSpan: () => og,
            zodErrorsIntegration: () => sK
        });
        var D, L, $, j, F, B, U, W, q, H, z, J, V = {};
        n.r(V), n.d(V, {
            debug: () => al,
            error: () => ad,
            fatal: () => ap,
            fmt: () => sa,
            info: () => au,
            trace: () => aa,
            warn: () => ac
        });
        var G = {};
        n.r(G), n.d(G, {
            count: () => ak,
            distribution: () => ax,
            gauge: () => aE
        });
        let Y = globalThis,
            K = "10.74.0";

        function Q() {
            return X(Y), Y
        }

        function X(e) {
            let t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || K, t[K] = t[K] || {}
        }

        function Z(e, t, n = Y) {
            let r = n.__SENTRY__ = n.__SENTRY__ || {},
                i = r[K] = r[K] || {};
            return i[e] || (i[e] = t())
        }
        let ee = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            et = ["debug", "info", "warn", "error", "log", "assert", "trace"],
            en = {};

        function er(e) {
            if (!("console" in Y)) return e();
            let t = Y.console,
                n = {},
                r = Object.keys(en);
            r.forEach(e => {
                let r = en[e];
                n[e] = t[e], t[e] = r
            });
            try {
                return e()
            } finally {
                r.forEach(e => {
                    t[e] = n[e]
                })
            }
        }

        function ei() {
            return es().enabled
        }

        function eo(e, ...t) {
            ee && ei() && er(() => {
                Y.console[e](`Sentry Logger [${e}]:`, ...t)
            })
        }

        function es() {
            return ee ? Z("loggerSettings", () => ({
                enabled: !1
            })) : {
                enabled: !1
            }
        }
        let ea = {
                enable: function() {
                    es().enabled = !0
                },
                disable: function() {
                    es().enabled = !1
                },
                isEnabled: ei,
                log: function(...e) {
                    eo("log", ...e)
                },
                warn: function(...e) {
                    eo("warn", ...e)
                },
                error: function(...e) {
                    eo("error", ...e)
                }
            },
            el = Object.prototype.toString;

        function eu(e) {
            switch (el.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                case "[object WebAssembly.Exception]":
                    return !0;
                default:
                    return eb(e, Error)
            }
        }

        function ec(e, t) {
            return el.call(e) === `[object ${t}]`
        }

        function ed(e) {
            return ec(e, "ErrorEvent")
        }

        function ep(e) {
            return ec(e, "DOMError")
        }

        function ef(e) {
            return ec(e, "String")
        }

        function eh(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
        }

        function em(e) {
            return null === e || eh(e) || "object" != typeof e && "function" != typeof e
        }

        function eg(e) {
            return ec(e, "Object")
        }

        function e_(e) {
            return "object" == typeof e && null !== e
        }

        function ey(e) {
            return "u" > typeof Event && eb(e, Event)
        }

        function ev(e) {
            return !!(e ? .then && "function" == typeof e.then)
        }

        function eb(e, t) {
            try {
                return e instanceof t
            } catch {
                return !1
            }
        }

        function eS(e) {
            return "u" > typeof Request && eb(e, Request)
        }

        function ew(e, t, n) {
            if (!(t in e)) return;
            let r = e[t];
            if ("function" != typeof r) return;
            let i = n(r);
            "function" == typeof i && eE(i, r);
            try {
                e[t] = i
            } catch {
                ee && ea.log(`Failed to replace method "${t}" in object`, e)
            }
        }

        function ek(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch {
                ee && ea.log(`Failed to add non-enumerable property "${String(t)}" to object`, e)
            }
        }

        function eE(e, t) {
            try {
                let n = t.prototype || {};
                e.prototype = t.prototype = n, ek(e, "__sentry_original__", t)
            } catch {}
        }

        function ex(e) {
            return e.__sentry_original__
        }

        function eC(e) {
            if (eu(e)) return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...eI(e)
            };
            if (ey(e)) {
                let {
                    type: t,
                    target: n,
                    currentTarget: r,
                    detail: i
                } = e;
                return {
                    type: t,
                    target: n,
                    currentTarget: r,
                    ...i ? {
                        detail: i
                    } : {},
                    ...eI(e)
                }
            }
            return e
        }

        function eI(e) {
            return e_(e) ? Object.fromEntries(Object.entries(e)) : {}
        }

        function eT(e) {
            if (void 0 !== r) return r ? r(e) : e();
            let t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
            return t in Y && "function" == typeof Y[t] ? (r = Y[t])(e) : (r = null, e())
        }

        function eM() {
            return eT(() => Math.random())
        }

        function eR() {
            return eT(() => Date.now())
        }
        let eA = Symbol.for("sentry.skipNormalization"),
            eO = Symbol.for("sentry.overrideNormalizationDepth"),
            eP = /\(error: (.*)\)/,
            eN = /captureMessage|captureException/;

        function eD(...e) {
            let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
            return (e, n = 0, r = 0) => {
                let i = [],
                    o = e.split("\n");
                for (let e = n; e < o.length; e++) {
                    let n = o[e];
                    n.length > 1024 && (n = n.slice(0, 1024));
                    let s = eP.test(n) ? n.replace(eP, "$1") : n;
                    if (!s.includes("Error: ")) {
                        for (let e of t) {
                            let t = e(s);
                            if (t) {
                                i.push(t);
                                break
                            }
                        }
                        if (i.length >= 50 + r) break
                    }
                }
                var s = i.slice(r);
                if (!s.length) return [];
                let a = Array.from(s);
                return /sentryWrapped/.test(eL(a).function || "") && a.pop(), a.reverse(), eN.test(eL(a).function || "") && (a.pop(), eN.test(eL(a).function || "") && a.pop()), a.slice(0, 50).map(e => ({ ...e,
                    filename: e.filename || eL(a).filename,
                    function: e.function || "?"
                }))
            }
        }

        function eL(e) {
            return e[e.length - 1] || {}
        }
        let e$ = "<anonymous>";

        function ej(e) {
            try {
                if (!e || "function" != typeof e) return e$;
                return e.name || e$
            } catch {
                return e$
            }
        }

        function eF(e) {
            let t = e.exception;
            if (t) {
                let e = [];
                try {
                    return t.values.forEach(t => {
                        t.stacktrace.frames && e.push(...t.stacktrace.frames)
                    }), e
                } catch {}
            }
        }

        function eB(e, t = 100, n = 1 / 0) {
            try {
                return function e(t, n, r = 1 / 0, i = 1 / 0, o = function() {
                    let e = new WeakSet;
                    return [function(t) {
                        return !!e.has(t) || (e.add(t), !1)
                    }, function(t) {
                        e.delete(t)
                    }]
                }()) {
                    let s, [a, l] = o;
                    if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                    let u = eU(t, n);
                    if (!u.startsWith("[object ")) return u;
                    if (n[eA]) return n;
                    let c = (s = n[eO], "number" == typeof s ? s : void 0),
                        d = void 0 !== c ? c : r;
                    if (0 === d) return u.replace("object ", "");
                    if (a(n)) return "[Circular ~]";
                    if (n && "function" == typeof n.toJSON) try {
                        let t = n.toJSON();
                        return e("", t, d - 1, i, o)
                    } catch {}
                    let p = Array.isArray(n) ? [] : {},
                        f = 0,
                        h = eC(n);
                    for (let t in h) {
                        if (!Object.prototype.hasOwnProperty.call(h, t)) continue;
                        if (f >= i) {
                            p[t] = "[MaxProperties ~]";
                            break
                        }
                        let n = h[t];
                        p[t] = e(t, n, d - 1, i, o), f++
                    }
                    return l(n), p
                }("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }

        function eU(e, t) {
            try {
                let e;
                if (i) {
                    let e = i(t);
                    if (e) return e
                }
                if ("u" > typeof globalThis && t === globalThis) return "[Global]";
                if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                if ("function" == typeof t) return `[Function: ${ej(t)}]`;
                if ("symbol" == typeof t) return `[${String(t)}]`;
                if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                let n = (e = Object.getPrototypeOf(t), e ? .constructor ? e.constructor.name : "null prototype");
                return `[object ${n}]`
            } catch (e) {
                return `**non-serializable** (${e})`
            }
        }

        function eW(e, t = "[unserializable]") {
            if ("string" == typeof e) return e;
            try {
                return JSON.stringify(e)
            } catch {
                return "function" == typeof t ? t(e) : t
            }
        }

        function eq(e, t = 0) {
            return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
        }

        function eH(e, t) {
            let n = e,
                r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            let i = Math.max(t - 60, 0);
            i < 5 && (i = 0);
            let o = Math.min(i + 140, r);
            return o > r - 5 && (o = r), o === r && (i = Math.max(o - 140, 0)), n = n.slice(i, o), i > 0 && (n = `'{snip} ${n}`), o < r && (n += " {snip}"), n
        }

        function ez(e, t) {
            if (!Array.isArray(e)) return "";
            let n = [];
            for (let t = 0; t < e.length; t++) {
                let r = e[t];
                em(r) ? n.push(String(r)) : r instanceof Error ? n.push(r.message ? `${r.name}: ${r.message}` : r.name) : n.push(eU(void 0, r))
            }
            return n.join(t)
        }

        function eJ(e, t, n = !1) {
            return !!ef(e) && (ec(t, "RegExp") ? t.test(e) : ef(t) ? n ? e === t : e.includes(t) : "function" == typeof t && t(e))
        }

        function eV(e, t = [], n = !1) {
            for (let r of t)
                if (eJ(e, r, n)) return !0;
            return !1
        }

        function eG(e = Y.crypto || Y.msCrypto) {
            try {
                if (e ? .randomUUID) return eT(() => e.randomUUID()).replace(/-/g, "")
            } catch {}
            return o || (o = "10000000100040008000100000000000"), o.replace(/[018]/g, e => (e ^ (15 & 16 * eM()) >> e / 4).toString(16))
        }

        function eY(e) {
            return e.exception ? .values ? .[0]
        }

        function eK(e) {
            let {
                message: t,
                event_id: n
            } = e;
            if (t) return t;
            let r = eY(e);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }

        function eQ(e, t, n) {
            let r = e.exception = e.exception || {},
                i = r.values = r.values || [],
                o = i[0] = i[0] || {};
            o.value || (o.value = t || ""), o.type || (o.type = n || "Error")
        }

        function eX(e, t) {
            let n = eY(e);
            if (!n) return;
            let r = n.mechanism;
            if (n.mechanism = {
                    type: "generic",
                    handled: !0,
                    ...r,
                    ...t
                }, t && "data" in t) {
                let e = { ...r ? .data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }

        function eZ(e) {
            if (function(e) {
                    try {
                        return e.__sentry_captured__
                    } catch {}
                }(e)) return !0;
            try {
                ek(e, "__sentry_captured__", !0)
            } catch {}
            return !1
        }

        function e0() {
            return eR() / 1e3
        }

        function e1() {
            return (s ? ? (s = function() {
                let {
                    performance: e
                } = Y;
                if (!e ? .now || !e.timeOrigin) return e0;
                let t = e.timeOrigin;
                return () => (t + eT(() => e.now())) / 1e3
            }()))()
        }
        let e2 = null;

        function e3() {
            return null === e2 && (e2 = function() {
                let {
                    performance: e
                } = Y;
                if (!e ? .now) return;
                let t = eT(() => e.now()),
                    n = eR(),
                    r = e.timeOrigin;
                if ("number" == typeof r && 3e5 > Math.abs(r + t - n)) return r;
                let i = e.timing ? .navigationStart;
                return "number" == typeof i && 3e5 > Math.abs(i + t - n) ? i : n - t
            }()), e2
        }

        function e5(e, t = {}) {
            if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || e1(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : eG()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
            else if ("number" == typeof t.duration) e.duration = t.duration;
            else {
                let t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
        }

        function e4(e, t, n = 2) {
            if (!t || "object" != typeof t || n <= 0) return t;
            if (e && 0 === Object.keys(t).length) return e;
            let r = { ...e
            };
            for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = e4(r[e], t[e], n - 1));
            return r
        }

        function e6() {
            return eG().substring(16)
        }

        function e8(e) {
            try {
                let t = Y.WeakRef;
                if ("function" == typeof t) return new t(e)
            } catch {}
            return e
        }

        function e7(e) {
            if (e) {
                if ("object" == typeof e && "deref" in e && "function" == typeof e.deref) try {
                    return e.deref()
                } catch {
                    return
                }
                return e
            }
        }
        let e9 = "_sentrySpan";

        function te(e, t) {
            t ? ek(e, e9, e8(t)) : delete e[e9]
        }

        function tt(e) {
            return e7(e[e9])
        }
        class tn {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                    traceId: eG(),
                    sampleRand: eM()
                }
            }
            clone() {
                let e = new tn;
                return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
                }, e._attributes = { ...this._attributes
                }, e._extra = { ...this._extra
                }, e._contexts = { ...this._contexts
                }, this._contexts.flags && (e._contexts.flags = {
                    values: [...this._contexts.flags.values]
                }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                }, e._propagationContext = { ...this._propagationContext
                }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, te(e, tt(this)), e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e), this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                }, this._session && e5(this._session, {
                    user: e
                }), this._notifyScopeListeners(), this
            }
            getUser() {
                return this._user
            }
            setConversationId(e) {
                return this._conversationId = e || void 0, this._notifyScopeListeners(), this
            }
            setTags(e) {
                return this._tags = { ...this._tags,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setTag(e, t) {
                return this.setTags({
                    [e]: t
                })
            }
            setAttributes(e) {
                return this._attributes = { ...this._attributes,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setAttribute(e, t) {
                return this.setAttributes({
                    [e]: t
                })
            }
            removeAttribute(e) {
                return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
            }
            setExtras(e) {
                return this._extra = { ...this._extra,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setExtra(e, t) {
                return this._extra = { ...this._extra,
                    [e]: t
                }, this._notifyScopeListeners(), this
            }
            setFingerprint(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }
            setLevel(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }
            setTransactionName(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e) return this;
                let t = "function" == typeof e ? e(this) : e,
                    {
                        tags: n,
                        attributes: r,
                        extra: i,
                        user: o,
                        contexts: s,
                        level: a,
                        fingerprint: l = [],
                        propagationContext: u,
                        conversationId: c
                    } = (t instanceof tn ? t.getScopeData() : eg(t) ? e : void 0) || {};
                return this._tags = { ...this._tags,
                    ...n
                }, this._attributes = { ...this._attributes,
                    ...r
                }, this._extra = { ...this._extra,
                    ...i
                }, this._contexts = { ...this._contexts,
                    ...s
                }, o && Object.keys(o).length && (this._user = o), a && (this._level = a), l.length && (this._fingerprint = l), u && (this._propagationContext = u), c && (this._conversationId = c), this
            }
            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, te(this, void 0), this._attachments = [], this.setPropagationContext({
                    traceId: eG(),
                    sampleRand: eM()
                }), this._notifyScopeListeners(), this
            }
            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0) return this;
                let r = {
                    timestamp: e0(),
                    ...e,
                    message: e.message ? eq(e.message, 2048) : e.message
                };
                return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }
            addAttachment(e) {
                return this._attachments.push(e), this
            }
            clearAttachments() {
                return this._attachments = [], this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    attributes: this._attributes,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: tt(this),
                    conversationId: this._conversationId
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = e4(this._sdkProcessingMetadata, e, 2), this
            }
            setPropagationContext(e) {
                return this._propagationContext = e, this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                let n = t ? .event_id || eG();
                if (!this._client) return ee && ea.warn("No client configured on scope - will not capture exception!"), n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this), n
            }
            captureMessage(e, t, n) {
                let r = n ? .event_id || eG();
                if (!this._client) return ee && ea.warn("No client configured on scope - will not capture message!"), r;
                let i = n ? .syntheticException ? ? Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, this), r
            }
            captureEvent(e, t) {
                let n = e.event_id || t ? .event_id || eG();
                return this._client ? this._client.captureEvent(e, { ...t,
                    event_id: n
                }, this) : ee && ea.warn("No client configured on scope - will not capture event!"), n
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                    e(this)
                }), this._notifyingListeners = !1)
            }
        }
        let tr = e => e instanceof Promise && !e[ti],
            ti = Symbol("chained PromiseLike"),
            to = (e, t, n) => {
                let r = e.then(e => (t(e), e), e => {
                    throw n(e), e
                });
                return tr(r) && tr(e) ? r : ts(e, r)
            },
            ts = (e, t) => {
                if (!t) return e;
                let n = !1;
                for (let r in e) {
                    if (r in t) continue;
                    n = !0;
                    let i = e[r];
                    "function" == typeof i ? Object.defineProperty(t, r, {
                        value: (...t) => i.apply(e, t),
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = i
                }
                return n && Object.assign(t, {
                    [ti]: !0
                }), t
            };
        class ta {
            constructor(e, t) {
                let n, r;
                n = e || new tn, r = t || new tn, this._stack = [{
                    scope: n
                }], this._isolationScope = r
            }
            withScope(e) {
                let t, n = this._pushScope();
                try {
                    t = e(n)
                } catch (e) {
                    throw this._popScope(), e
                }
                return ev(t) ? to(t, () => this._popScope(), () => this._popScope()) : (this._popScope(), t)
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                let e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }), e
            }
            _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop()
            }
        }

        function tl() {
            let e = X(Q());
            return e.stack = e.stack || new ta(Z("defaultCurrentScope", () => new tn), Z("defaultIsolationScope", () => new tn))
        }

        function tu(e) {
            return tl().withScope(e)
        }

        function tc(e, t) {
            let n = tl();
            return n.withScope(() => (n.getStackTop().scope = e, t(e)))
        }

        function td(e) {
            return tl().withScope(() => e(tl().getIsolationScope()))
        }

        function tp(e) {
            let t = X(e);
            return t.acs ? t.acs : {
                withIsolationScope: td,
                withScope: tu,
                withSetScope: tc,
                withSetIsolationScope: (e, t) => td(t),
                getCurrentScope: () => tl().getScope(),
                getIsolationScope: () => tl().getIsolationScope()
            }
        }

        function tf() {
            return tp(Q()).getCurrentScope()
        }

        function th() {
            return tp(Q()).getIsolationScope()
        }

        function tm() {
            return Z("globalScope", () => new tn)
        }

        function tg(...e) {
            let t = tp(Q());
            if (2 === e.length) {
                let [n, r] = e;
                return n ? t.withSetScope(n, r) : t.withScope(r)
            }
            return t.withScope(e[0])
        }

        function t_(...e) {
            let t = tp(Q());
            if (2 === e.length) {
                let [n, r] = e;
                return n ? t.withSetIsolationScope(n, r) : t.withIsolationScope(r)
            }
            return t.withIsolationScope(e[0])
        }

        function ty() {
            return tf().getClient()
        }

        function tv(e) {
            let t = a ? .();
            if (t) return {
                trace_id: t.traceId,
                span_id: t.spanId
            };
            let {
                traceId: n,
                parentSpanId: r,
                propagationSpanId: i
            } = e.getPropagationContext(), o = {
                trace_id: n,
                span_id: i || e6()
            };
            return r && (o.parent_span_id = r), o
        }

        function tb(e, t = {}, n = tf()) {
            let {
                message: r,
                name: i,
                email: o,
                url: s,
                source: a,
                associatedEventId: l,
                tags: u
            } = e, c = {
                contexts: {
                    feedback: {
                        contact_email: o,
                        name: i,
                        message: r,
                        url: s,
                        source: a,
                        associated_event_id: l
                    }
                },
                type: "feedback",
                level: "info",
                tags: u
            }, d = n ? .getClient() || ty();
            return d && d.emit("beforeSendFeedback", c, t), n.captureEvent(c, t)
        }

        function tS() {
            try {
                return Y.document.location.href
            } catch {
                return ""
            }
        }

        function tw(e, t = 5) {
            if (!Y.HTMLElement) return null;
            let n = e;
            for (let e = 0; e < t && n; e++) {
                if (n instanceof HTMLElement) {
                    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
                    if (n.dataset.sentryElement) return n.dataset.sentryElement
                }
                n = n.parentNode
            }
            return null
        }
        let tk = [];

        function tE(e, t) {
            for (let n of t) n ? .afterAllSetup && n.afterAllSetup(e)
        }

        function tx(e, t, n) {
            if (n[t.name]) {
                ee && ea.log(`Integration skipped because it was already installed: ${t.name}`);
                return
            }
            if (n[t.name] = t, tk.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), tk.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
                let n = t.preprocessEvent.bind(t);
                e.on("preprocessEvent", (t, r) => n(t, r, e))
            }
            if ("function" == typeof t.processEvent) {
                let n = t.processEvent.bind(t),
                    r = Object.assign((t, r) => n(t, r, e), {
                        id: t.name
                    });
                e.addEventProcessor(r)
            }["processSpan", "processSegmentSpan"].forEach(n => {
                let r = t[n];
                "function" == typeof r && e.on(n, n => r.call(t, n, e))
            }), ee && ea.log(`Integration installed: ${t.name}`)
        }

        function tC(e) {
            let t = ty();
            if (!t) {
                ee && ea.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
                return
            }
            t.addIntegration(e)
        }

        function tI() {
            let e;
            return "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("u" > typeof process ? process : 0)) || (e = Y.process, e ? .type === "renderer"))
        }
        let tT = Y.document,
            tM = Y.navigator,
            tR = "Report a Bug",
            tA = "Cancel",
            tO = "Send Bug Report",
            tP = "Confirm",
            tN = "Report a Bug",
            tD = "your.email@example.org",
            tL = "Email",
            t$ = "What's the bug? What did you expect?",
            tj = "Description",
            tF = "Your Name",
            tB = "Name",
            tU = "Thank you for your report!",
            tW = "(required)",
            tq = "Add a screenshot",
            tH = "Remove screenshot",
            tz = "Highlight",
            tJ = "Hide",
            tV = "Remove",
            tG = "Unable to submit feedback with empty message",
            tY = "No client setup, cannot send feedback.",
            tK = "Unable to determine if Feedback was correctly sent.",
            tQ = "Unable to send feedback. This could be because this domain is not in your list of allowed domains.",
            tX = "Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.",
            tZ = {
                ERROR_EMPTY_MESSAGE: tG,
                ERROR_NO_CLIENT: tY,
                ERROR_TIMEOUT: tK,
                ERROR_FORBIDDEN: tQ,
                ERROR_GENERIC: tX
            };

        function t0(e, t) {
            return t ? .[e] ? ? tZ[e]
        }
        let t1 = (e, t = {
                includeReplay: !0
            }) => {
                let n = t.errorMessages;
                if (!e.message) throw Error(t0("ERROR_EMPTY_MESSAGE", n));
                let r = ty();
                if (!r) throw Error(t0("ERROR_NO_CLIENT", n));
                e.tags && Object.keys(e.tags).length && tf().setTags(e.tags);
                let i = tb({
                    source: "api",
                    url: tS(),
                    ...e
                }, t);
                return new Promise((e, t) => {
                    let o = setTimeout(() => {
                            s(), t(t0("ERROR_TIMEOUT", n))
                        }, 3e4),
                        s = r.on("afterSendEvent", (r, a) => {
                            if (r.event_id === i) return (clearTimeout(o), s(), a ? .statusCode && a.statusCode >= 200 && a.statusCode < 300) ? e(i) : a ? .statusCode === 403 ? t(t0("ERROR_FORBIDDEN", n)) : t(t0("ERROR_GENERIC", n))
                        })
                })
            },
            t2 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

        function t3(e, t) {
            return { ...e,
                ...t,
                tags: { ...e.tags,
                    ...t.tags
                },
                onFormOpen: () => {
                    t.onFormOpen ? .(), e.onFormOpen ? .()
                },
                onFormClose: () => {
                    t.onFormClose ? .(), e.onFormClose ? .()
                },
                onSubmitSuccess: (n, r) => {
                    t.onSubmitSuccess ? .(n, r), e.onSubmitSuccess ? .(n, r)
                },
                onSubmitError: n => {
                    t.onSubmitError ? .(n), e.onSubmitError ? .(n)
                },
                onFormSubmitted: () => {
                    t.onFormSubmitted ? .(), e.onFormSubmitted ? .()
                },
                themeDark: { ...e.themeDark,
                    ...t.themeDark
                },
                themeLight: { ...e.themeLight,
                    ...t.themeLight
                }
            }
        }

        function t5(e, t) {
            return Object.entries(t).forEach(([t, n]) => {
                e.setAttributeNS(null, t, n)
            }), e
        }
        let t4 = "rgba(88, 74, 192, 1)",
            t6 = {
                foreground: "#2b2233",
                background: "#ffffff",
                accentForeground: "white",
                accentBackground: t4,
                successColor: "#268d75",
                errorColor: "#df3338",
                border: "1.5px solid rgba(41, 35, 47, 0.13)",
                boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                outline: "1px auto var(--accent-background)",
                interactiveFilter: "brightness(95%)"
            },
            t8 = {
                foreground: "#ebe6ef",
                background: "#29232f",
                accentForeground: "white",
                accentBackground: t4,
                successColor: "#2da98c",
                errorColor: "#f55459",
                border: "1.5px solid rgba(235, 230, 239, 0.15)",
                boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                outline: "1px auto var(--accent-background)",
                interactiveFilter: "brightness(150%)"
            };

        function t7(e) {
            return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `
        }

        function t9({
            colorScheme: e,
            themeDark: t,
            themeLight: n,
            styleNonce: r
        }) {
            let i = tT.createElement("style");
            return i.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system"!==e?`color-scheme: only ${e};`:""}

  ${t7("dark"===e?{...t8,...t}:{...t6,...n})}
}

${"system"===e?`
@media (prefers-color-scheme: dark) {
  :host {
    color-scheme: only dark;

    ${t7({...t8,...t})}
  }
}`:""}
`, r && i.setAttribute("nonce", r), i
        }
        let ne = ({
            lazyLoadIntegration: e,
            getModalIntegration: t,
            getScreenshotIntegration: n
        }) => ({
            id: r = "sentry-feedback",
            autoInject: i = !0,
            showBranding: o = !0,
            isEmailRequired: s = !1,
            isNameRequired: a = !1,
            showEmail: l = !0,
            showName: u = !0,
            enableScreenshot: c = !0,
            useSentryUser: d = {
                email: "email",
                name: "username"
            },
            tags: p,
            styleNonce: f,
            scriptNonce: h,
            colorScheme: m = "system",
            themeLight: g = {},
            themeDark: _ = {},
            addScreenshotButtonLabel: y = tq,
            cancelButtonLabel: v = tA,
            confirmButtonLabel: b = tP,
            emailLabel: S = tL,
            emailPlaceholder: w = tD,
            formTitle: k = tN,
            isRequiredLabel: E = tW,
            messageLabel: x = tj,
            messagePlaceholder: C = t$,
            nameLabel: I = tB,
            namePlaceholder: T = tF,
            removeScreenshotButtonLabel: M = tH,
            submitButtonLabel: R = tO,
            successMessageText: A = tU,
            triggerLabel: O = tR,
            triggerAriaLabel: P = "",
            highlightToolText: N = tz,
            hideToolText: D = tJ,
            removeHighlightText: L = tV,
            errorEmptyMessageText: $ = tG,
            errorNoClientText: j = tY,
            errorTimeoutText: F = tK,
            errorForbiddenText: B = tQ,
            errorGenericText: U = tX,
            onFormOpen: W,
            onFormClose: q,
            onSubmitSuccess: H,
            onSubmitError: z,
            onFormSubmitted: J
        } = {}) => {
            let V = {
                    id: r,
                    autoInject: i,
                    showBranding: o,
                    isEmailRequired: s,
                    isNameRequired: a,
                    showEmail: l,
                    showName: u,
                    enableScreenshot: c,
                    useSentryUser: d,
                    tags: p,
                    styleNonce: f,
                    scriptNonce: h,
                    colorScheme: m,
                    themeDark: _,
                    themeLight: g,
                    triggerLabel: O,
                    triggerAriaLabel: P,
                    cancelButtonLabel: v,
                    submitButtonLabel: R,
                    confirmButtonLabel: b,
                    formTitle: k,
                    emailLabel: S,
                    emailPlaceholder: w,
                    messageLabel: x,
                    messagePlaceholder: C,
                    nameLabel: I,
                    namePlaceholder: T,
                    successMessageText: A,
                    isRequiredLabel: E,
                    addScreenshotButtonLabel: y,
                    removeScreenshotButtonLabel: M,
                    highlightToolText: N,
                    hideToolText: D,
                    removeHighlightText: L,
                    errorEmptyMessageText: $,
                    errorNoClientText: j,
                    errorTimeoutText: F,
                    errorForbiddenText: B,
                    errorGenericText: U,
                    onFormClose: q,
                    onFormOpen: W,
                    onSubmitError: z,
                    onSubmitSuccess: H,
                    onFormSubmitted: J
                },
                G = null,
                K = null,
                Q = [],
                X = e => {
                    if (!G) {
                        let t = tT.createElement("div");
                        t.id = String(e.id), tT.body.appendChild(t), G = t.attachShadow({
                            mode: "open"
                        }), K = t9(e), G.appendChild(K)
                    }
                    return G
                },
                Z = async r => {
                    let i, o, s = r.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(tM.userAgent) || /Macintosh/i.test(tM.userAgent) && tM.maxTouchPoints && tM.maxTouchPoints > 1) && !!isSecureContext;
                    try {
                        i = (t ? t() : await e("feedbackModalIntegration", h))(), tC(i)
                    } catch {
                        throw t2 && ea.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."), Error("[Feedback] Missing feedback modal integration!")
                    }
                    try {
                        let t = s ? n ? n() : await e("feedbackScreenshotIntegration", h) : void 0;
                        t && (o = t(), tC(o))
                    } catch {
                        t2 && ea.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")
                    }
                    let a = {
                            ERROR_EMPTY_MESSAGE: r.errorEmptyMessageText,
                            ERROR_NO_CLIENT: r.errorNoClientText,
                            ERROR_TIMEOUT: r.errorTimeoutText,
                            ERROR_FORBIDDEN: r.errorForbiddenText,
                            ERROR_GENERIC: r.errorGenericText
                        },
                        l = i.createDialog({
                            options: { ...r,
                                onFormClose: () => {
                                    l ? .close(), r.onFormClose ? .()
                                },
                                onFormSubmitted: () => {
                                    l ? .close(), r.onFormSubmitted ? .()
                                }
                            },
                            screenshotIntegration: o,
                            sendFeedback: (e, t) => t1(e, {
                                includeReplay: !0,
                                ...t,
                                errorMessages: a
                            }),
                            shadow: X(r)
                        });
                    return l
                },
                ee = (e, t = {}) => {
                    let n = t3(V, t),
                        r = "string" == typeof e ? tT.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                    if (!r) throw t2 && ea.error("[Feedback] Unable to attach to target element"), Error("Unable to attach to target element");
                    let i = null,
                        o = async () => {
                            i || (i = await Z({ ...n,
                                onFormSubmitted: () => {
                                    i ? .removeFromDom(), n.onFormSubmitted ? .()
                                }
                            })), i.appendToDom(), i.open()
                        };
                    r.addEventListener("click", o);
                    let s = () => {
                        Q = Q.filter(e => e !== s), i ? .removeFromDom(), i = null, r.removeEventListener("click", o)
                    };
                    return Q.push(s), s
                },
                et = (e = {}) => {
                    let t = t3(V, e),
                        n = X(t),
                        r = function({
                            triggerLabel: e,
                            triggerAriaLabel: t,
                            shadow: n,
                            styleNonce: r
                        }) {
                            let i, o, s, a, l, u, c, d, p = tT.createElement("button");
                            if (p.type = "button", p.className = "widget__actor", p.ariaHidden = "false", p.ariaLabel = t || e || tR, p.appendChild((o = t5((i = e => Y.document.createElementNS("http://www.w3.org/2000/svg", e))("svg"), {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "var(--actor-color, var(--foreground))"
                                }), s = t5(i("g"), {
                                    clipPath: "url(#clip0_57_80)"
                                }), a = t5(i("path"), {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                                }), o.appendChild(s).appendChild(a), l = i("defs"), u = t5(i("clipPath"), {
                                    id: "clip0_57_80"
                                }), c = t5(i("rect"), {
                                    width: "20",
                                    height: "20",
                                    fill: "white"
                                }), u.appendChild(c), l.appendChild(u), o.appendChild(l).appendChild(u).appendChild(c), o)), e) {
                                let t = tT.createElement("span");
                                t.appendChild(tT.createTextNode(e)), p.appendChild(t)
                            }
                            let f = ((d = tT.createElement("style")).textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`, r && d.setAttribute("nonce", r), d);
                            return {
                                el: p,
                                appendToDom() {
                                    n.appendChild(f), n.appendChild(p)
                                },
                                removeFromDom() {
                                    p.remove(), f.remove()
                                },
                                show() {
                                    p.ariaHidden = "false"
                                },
                                hide() {
                                    p.ariaHidden = "true"
                                }
                            }
                        }({
                            triggerLabel: t.triggerLabel,
                            triggerAriaLabel: t.triggerAriaLabel,
                            shadow: n,
                            styleNonce: f
                        });
                    return ee(r.el, { ...t,
                        onFormOpen() {
                            r.hide()
                        },
                        onFormClose() {
                            r.show()
                        },
                        onFormSubmitted() {
                            r.show()
                        }
                    }), r
                };
            return {
                name: "Feedback",
                setupOnce() {
                    tI() && V.autoInject && ("loading" === tT.readyState ? tT.addEventListener("DOMContentLoaded", () => et().appendToDom()) : et().appendToDom())
                },
                attachTo: ee,
                createWidget(e = {}) {
                    let t = et(t3(V, e));
                    return t.appendToDom(), t
                },
                createForm: async (e = {}) => Z(t3(V, e)),
                setTheme(e) {
                    if (V.colorScheme = e, G) {
                        let e = t9(V);
                        K ? G.replaceChild(e, K) : G.prepend(e), K = e
                    }
                },
                remove() {
                    G && (G.parentElement ? .remove(), G = null, K = null), Q.forEach(e => e()), Q = []
                }
            }
        };

        function nt() {
            let e = ty();
            return e ? .getIntegrationByName("Feedback")
        }
        var nn, nr, ni, no, ns, na, nl, nu = {},
            nc = [],
            nd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            np = Array.isArray;

        function nf(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function nh(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function nm(e, t, n) {
            var r, i, o, s = {};
            for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
            if (arguments.length > 2 && (s.children = arguments.length > 3 ? nn.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
            return ng(e, s, r, i, null)
        }

        function ng(e, t, n, r, i) {
            var o = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == i ? ++ni : i,
                __i: -1,
                __u: 0
            };
            return null == i && null != nr.vnode && nr.vnode(o), o
        }

        function n_(e) {
            return e.children
        }

        function ny(e, t) {
            this.props = e, this.context = t
        }

        function nv(e, t) {
            if (null == t) return e.__ ? nv(e.__, e.__i + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? nv(e) : null
        }

        function nb(e) {
            (!e.__d && (e.__d = !0) && no.push(e) && !nS.__r++ || ns !== nr.debounceRendering) && ((ns = nr.debounceRendering) || na)(nS)
        }

        function nS() {
            var e, t, n, r = [],
                i = [];
            for (no.sort(nl); e = no.shift();) e.__d && (n = no.length, t = function(e, t, n) {
                var r, i = e.__v,
                    o = i.__e,
                    s = e.__P;
                if (s) return (r = nf({}, i)).__v = i.__v + 1, nr.vnode && nr.vnode(r), nI(s, r, i, e.__n, void 0 !== s.ownerSVGElement, 32 & i.__u ? [o] : null, t, null == o ? nv(i) : o, !!(32 & i.__u), n), r.__.__k[r.__i] = r, r.__d = void 0, r.__e != o && function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                            if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break
                            }
                        return e(t)
                    }
                }(r), r
            }(e, r, i) || t, 0 === n || no.length > n ? (nT(r, t, i), i.length = r.length = 0, t = void 0, no.sort(nl)) : t && nr.__c && nr.__c(t, nc));
            t && nT(r, t, i), nS.__r = 0
        }

        function nw(e, t, n, r, i, o, s, a, l, u, c) {
            var d, p, f, h, m, g = r && r.__k || nc,
                _ = t.length;
            for (n.__d = l, function(e, t, n) {
                    var r, i, o, s, a, l = t.length,
                        u = n.length,
                        c = u,
                        d = 0;
                    for (e.__k = [], r = 0; r < l; r++) null != (i = e.__k[r] = null == (i = t[r]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? ng(null, i, null, null, i) : np(i) ? ng(n_, {
                        children: i
                    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? ng(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = e, i.__b = e.__b + 1, a = function(e, t, n, r) {
                        var i = e.key,
                            o = e.type,
                            s = n - 1,
                            a = n + 1,
                            l = t[n];
                        if (null === l || l && i == l.key && o === l.type) return n;
                        if (r > +(null != l && 0 == (131072 & l.__u)))
                            for (; s >= 0 || a < t.length;) {
                                if (s >= 0) {
                                    if ((l = t[s]) && 0 == (131072 & l.__u) && i == l.key && o === l.type) return s;
                                    s--
                                }
                                if (a < t.length) {
                                    if ((l = t[a]) && 0 == (131072 & l.__u) && i == l.key && o === l.type) return a;
                                    a++
                                }
                            }
                        return -1
                    }(i, n, s = r + d, c), i.__i = a, o = null, -1 !== a && (c--, (o = n[a]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == a && d--, "function" != typeof i.type && (i.__u |= 65536)) : a !== s && (a === s + 1 ? d++ : a > s ? c > l - s ? d += a - s : d-- : d = a < s && a == s - 1 ? a - s : 0, a !== r + d && (i.__u |= 65536))) : (o = n[r]) && null == o.key && o.__e && (o.__e == e.__d && (e.__d = nv(o)), nR(o, o, !1), n[r] = null, c--);
                    if (c)
                        for (r = 0; r < u; r++) null != (o = n[r]) && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = nv(o)), nR(o, o))
                }(n, t, g), l = n.__d, d = 0; d < _; d++) null != (f = n.__k[d]) && "boolean" != typeof f && "function" != typeof f && (p = -1 === f.__i ? nu : g[f.__i] || nu, f.__i = d, nI(e, f, p, i, o, s, a, l, u, c), h = f.__e, f.ref && p.ref != f.ref && (p.ref && nM(p.ref, null, f), c.push(f.ref, f.__c || h, f)), null == m && null != h && (m = h), 65536 & f.__u || p.__k === f.__k ? l = function e(t, n, r) {
                var i, o;
                if ("function" == typeof t.type) {
                    for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, n = e(i[o], n, r));
                    return n
                }
                t.__e != n && (r.insertBefore(t.__e, n || null), n = t.__e);
                do n = n && n.nextSibling; while (null != n && 8 === n.nodeType) return n
            }(f, l, e) : "function" == typeof f.type && void 0 !== f.__d ? l = f.__d : h && (l = h.nextSibling), f.__d = void 0, f.__u &= -196609);
            n.__d = l, n.__e = m
        }

        function nk(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || nd.test(t) ? n : n + "px"
        }

        function nE(e, t, n, r, i) {
            var o;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if ("string" == typeof r && (e.style.cssText = r = ""), r)
                        for (t in r) n && t in n || nk(e.style, t, "");
                    if (n)
                        for (t in n) r && n[t] === r[t] || nk(e.style, t, n[t])
                }
            else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, o ? nC : nx, o)) : e.removeEventListener(t, o ? nC : nx, o);
            else {
                if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
        }

        function nx(e) {
            if (this.l) {
                var t = this.l[e.type + !1];
                if (e.t) {
                    if (e.t <= t.u) return
                } else e.t = Date.now();
                return t(nr.event ? nr.event(e) : e)
            }
        }

        function nC(e) {
            if (this.l) return this.l[e.type + !0](nr.event ? nr.event(e) : e)
        }

        function nI(e, t, n, r, i, o, s, a, l, u) {
            var c, d, p, f, h, m, g, _, y, v, b, S, w, k, E, x = t.type;
            if (void 0 !== t.constructor) return null;
            128 & n.__u && (l = !!(32 & n.__u), o = [a = t.__e = n.__e]), (c = nr.__b) && c(t);
            e: if ("function" == typeof x) try {
                if (_ = t.props, y = (c = x.contextType) && r[c.__c], v = c ? y ? y.props.value : c.__ : r, n.__c ? g = (d = t.__c = n.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(_, v) : (t.__c = d = new ny(_, v), d.constructor = x, d.render = nA), y && y.sub(d), d.props = _, d.state || (d.state = {}), d.context = v, d.__n = r, p = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = nf({}, d.__s)), nf(d.__s, x.getDerivedStateFromProps(_, d.__s))), f = d.props, h = d.state, d.__v = t, p) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (null == x.getDerivedStateFromProps && _ !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, v), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, v) || t.__v === n.__v)) {
                        for (t.__v !== n.__v && (d.props = _, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                                e && (e.__ = t)
                            }), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                        d._sb = [], d.__h.length && s.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, v), null != d.componentDidUpdate && d.__h.push(function() {
                        d.componentDidUpdate(f, h, m)
                    })
                }
                if (d.context = v, d.props = _, d.__P = e, d.__e = !1, S = nr.__r, w = 0, "prototype" in x && x.prototype.render) {
                    for (d.state = d.__s, d.__d = !1, S && S(t), c = d.render(d.props, d.state, d.context), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
                    d._sb = []
                } else
                    do d.__d = !1, S && S(t), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++w < 25) d.state = d.__s, null != d.getChildContext && (r = nf(nf({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (m = d.getSnapshotBeforeUpdate(f, h)), nw(e, np(E = null != c && c.type === n_ && null == c.key ? c.props.children : c) ? E : [E], t, n, r, i, o, s, a, l, u), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), g && (d.__E = d.__ = null)
            } catch (e) {
                t.__v = null, l || null != o ? (t.__e = a, t.__u |= l ? 160 : 32, o[o.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), nr.__e(e, t, n)
            } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, i, o, s, a, l) {
                var u, c, d, p, f, h, m, g = n.props,
                    _ = t.props,
                    y = t.type;
                if ("svg" === y && (i = !0), null != o) {
                    for (u = 0; u < o.length; u++)
                        if ((f = o[u]) && "setAttribute" in f == !!y && (y ? f.localName === y : 3 === f.nodeType)) {
                            e = f, o[u] = null;
                            break
                        }
                }
                if (null == e) {
                    if (null === y) return document.createTextNode(_);
                    e = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, _.is && _), o = null, a = !1
                }
                if (null === y) g === _ || a && e.data === _ || (e.data = _);
                else {
                    if (o = o && nn.call(e.childNodes), g = n.props || nu, !a && null != o)
                        for (g = {}, u = 0; u < e.attributes.length; u++) g[(f = e.attributes[u]).name] = f.value;
                    for (u in g) f = g[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = f : "key" === u || u in _ || nE(e, u, null, f, i));
                    for (u in _) f = _[u], "children" == u ? p = f : "dangerouslySetInnerHTML" == u ? c = f : "value" == u ? h = f : "checked" == u ? m = f : "key" === u || a && "function" != typeof f || g[u] === f || nE(e, u, f, g[u], i);
                    if (c) a || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
                    else if (d && (e.innerHTML = ""), nw(e, np(p) ? p : [p], t, n, r, i && "foreignObject" !== y, o, s, o ? o[0] : n.__k && nv(n, 0), a, l), null != o)
                        for (u = o.length; u--;) null != o[u] && nh(o[u]);
                    a || (u = "value", void 0 === h || h === e[u] && ("progress" !== y || h) && ("option" !== y || h === g[u]) || nE(e, u, h, g[u], !1), u = "checked", void 0 !== m && m !== e[u] && nE(e, u, m, g[u], !1))
                }
                return e
            }(n.__e, t, n, r, i, o, s, l, u);
            (c = nr.diffed) && c(t)
        }

        function nT(e, t, n) {
            for (var r = 0; r < n.length; r++) nM(n[r], n[++r], n[++r]);
            nr.__c && nr.__c(t, e), e.some(function(t) {
                try {
                    e = t.__h, t.__h = [], e.some(function(e) {
                        e.call(t)
                    })
                } catch (e) {
                    nr.__e(e, t.__v)
                }
            })
        }

        function nM(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                nr.__e(e, n)
            }
        }

        function nR(e, t, n) {
            var r, i;
            if (nr.unmount && nr.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || nM(r, null, t)), null != (r = e.__c)) {
                if (r.componentWillUnmount) try {
                    r.componentWillUnmount()
                } catch (e) {
                    nr.__e(e, t)
                }
                r.base = r.__P = null, e.__c = void 0
            }
            if (r = e.__k)
                for (i = 0; i < r.length; i++) r[i] && nR(r[i], t, n || "function" != typeof e.type);
            n || null == e.__e || nh(e.__e), e.__ = e.__e = e.__d = void 0
        }

        function nA(e, t, n) {
            return this.constructor(e, n)
        }
        nn = nc.slice, nr = {
            __e: function(e, t, n, r) {
                for (var i, o, s; t = t.__;)
                    if ((i = t.__c) && !i.__) try {
                        if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), s = i.__d), s) return i.__E = i
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, ni = 0, ny.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = nf({}, this.state), "function" == typeof e && (e = e(nf({}, n), this.props)), e && nf(n, e), null != e && this.__v && (t && this._sb.push(t), nb(this))
        }, ny.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), nb(this))
        }, ny.prototype.render = n_, no = [], na = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, nl = function(e, t) {
            return e.__v.__b - t.__v.__b
        }, nS.__r = 0;
        var nO, nP, nN, nD, nL = 0,
            n$ = [],
            nj = [],
            nF = nr,
            nB = nF.__b,
            nU = nF.__r,
            nW = nF.diffed,
            nq = nF.__c,
            nH = nF.unmount,
            nz = nF.__;

        function nJ(e, t) {
            nF.__h && nF.__h(nP, e, nL || t), nL = 0;
            var n = nP.__H || (nP.__H = {
                __: [],
                __h: []
            });
            return e >= n.__.length && n.__.push({
                __V: nj
            }), n.__[e]
        }

        function nV(e) {
            return nL = 1, nG(n3, e)
        }

        function nG(e, t, n) {
            var r = nJ(nO++, 2);
            if (r.t = e, !r.__c && (r.__ = [n ? n(t) : n3(void 0, t), function(e) {
                    var t = r.__N ? r.__N[0] : r.__[0],
                        n = r.t(t, e);
                    t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
                }], r.__c = nP, !nP.u)) {
                var i = function(e, t, n) {
                    if (!r.__c.__H) return !0;
                    var i = r.__c.__H.__.filter(function(e) {
                        return !!e.__c
                    });
                    if (i.every(function(e) {
                            return !e.__N
                        })) return !o || o.call(this, e, t, n);
                    var s = !1;
                    return i.forEach(function(e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (s = !0)
                        }
                    }), !(!s && r.__c.props === e) && (!o || o.call(this, e, t, n))
                };
                nP.u = !0;
                var o = nP.shouldComponentUpdate,
                    s = nP.componentWillUpdate;
                nP.componentWillUpdate = function(e, t, n) {
                    if (this.__e) {
                        var r = o;
                        o = void 0, i(e, t, n), o = r
                    }
                    s && s.call(this, e, t, n)
                }, nP.shouldComponentUpdate = i
            }
            return r.__N || r.__
        }

        function nY(e, t) {
            var n = nJ(nO++, 4);
            !nF.__s && n2(n.__H, t) && (n.__ = e, n.i = t, nP.__h.push(n))
        }

        function nK(e, t) {
            var n = nJ(nO++, 7);
            return n2(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
        }

        function nQ(e, t) {
            return nL = 8, nK(function() {
                return e
            }, t)
        }

        function nX() {
            for (var e; e = n$.shift();)
                if (e.__P && e.__H) try {
                    e.__H.__h.forEach(n0), e.__H.__h.forEach(n1), e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [], nF.__e(t, e.__v)
                }
        }
        nF.__b = function(e) {
            nP = null, nB && nB(e)
        }, nF.__ = function(e, t) {
            t.__k && t.__k.__m && (e.__m = t.__k.__m), nz && nz(e, t)
        }, nF.__r = function(e) {
            nU && nU(e), nO = 0;
            var t = (nP = e.__c).__H;
            t && (nN === nP ? (t.__h = [], nP.__h = [], t.__.forEach(function(e) {
                e.__N && (e.__ = e.__N), e.__V = nj, e.__N = e.i = void 0
            })) : (t.__h.forEach(n0), t.__h.forEach(n1), t.__h = [], nO = 0)), nN = nP
        }, nF.diffed = function(e) {
            nW && nW(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== n$.push(t) && nD === nF.requestAnimationFrame || ((nD = nF.requestAnimationFrame) || function(e) {
                var t, n = function() {
                        clearTimeout(r), nZ && cancelAnimationFrame(t), setTimeout(e)
                    },
                    r = setTimeout(n, 100);
                nZ && (t = requestAnimationFrame(n))
            })(nX)), t.__H.__.forEach(function(e) {
                e.i && (e.__H = e.i), e.__V !== nj && (e.__ = e.__V), e.i = void 0, e.__V = nj
            })), nN = nP = null
        }, nF.__c = function(e, t) {
            t.some(function(e) {
                try {
                    e.__h.forEach(n0), e.__h = e.__h.filter(function(e) {
                        return !e.__ || n1(e)
                    })
                } catch (n) {
                    t.some(function(e) {
                        e.__h && (e.__h = [])
                    }), t = [], nF.__e(n, e.__v)
                }
            }), nq && nq(e, t)
        }, nF.unmount = function(e) {
            nH && nH(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach(function(e) {
                try {
                    n0(e)
                } catch (e) {
                    t = e
                }
            }), n.__H = void 0, t && nF.__e(t, n.__v))
        };
        var nZ = "function" == typeof requestAnimationFrame;

        function n0(e) {
            var t = nP,
                n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), nP = t
        }

        function n1(e) {
            var t = nP;
            e.__c = e.__(), nP = t
        }

        function n2(e, t) {
            return !e || e.length !== t.length || t.some(function(t, n) {
                return t !== e[n]
            })
        }

        function n3(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        let n5 = Object.defineProperty({
            __proto__: null,
            useCallback: nQ,
            useContext: function(e) {
                var t = nP.context[e.__c],
                    n = nJ(nO++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(nP)), t.props.value) : e.__
            },
            useDebugValue: function(e, t) {
                nF.useDebugValue && nF.useDebugValue(t ? t(e) : e)
            },
            useEffect: function(e, t) {
                var n = nJ(nO++, 3);
                !nF.__s && n2(n.__H, t) && (n.__ = e, n.i = t, nP.__H.__h.push(n))
            },
            useErrorBoundary: function(e) {
                var t = nJ(nO++, 10),
                    n = nV();
                return t.__ = e, nP.componentDidCatch || (nP.componentDidCatch = function(e, r) {
                    t.__ && t.__(e, r), n[1](e)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            },
            useId: function() {
                var e = nJ(nO++, 11);
                if (!e.__) {
                    for (var t = nP.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                    var n = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + n[0] + "-" + n[1]++
                }
                return e.__
            },
            useImperativeHandle: function(e, t, n) {
                nL = 6, nY(function() {
                    return "function" == typeof e ? (e(t()), function() {
                        return e(null)
                    }) : e ? (e.current = t(), function() {
                        return e.current = null
                    }) : void 0
                }, null == n ? n : n.concat(e))
            },
            useLayoutEffect: nY,
            useMemo: nK,
            useReducer: nG,
            useRef: function(e) {
                return nL = 5, nK(function() {
                    return {
                        current: e
                    }
                }, [])
            },
            useState: nV
        }, Symbol.toStringTag, {
            value: "Module"
        });

        function n4({
            options: e
        }) {
            let t = nK(() => {
                let e, t;
                return {
                    __html: (e = t5(tT.createElementNS("http://www.w3.org/2000/svg", "svg"), {
                        width: "32",
                        height: "30",
                        viewBox: "0 0 72 66",
                        fill: "inherit"
                    }), t = t5(tT.createElementNS("http://www.w3.org/2000/svg", "path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                    }), e.appendChild(t), e).outerHTML
                }
            }, []);
            return nm("h2", {
                class: "dialog__header"
            }, nm("span", {
                class: "dialog__title"
            }, e.formTitle), e.showBranding ? nm("a", {
                class: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer",
                dangerouslySetInnerHTML: t
            }) : null)
        }

        function n6(e, t) {
            let n = e.get(t);
            return "string" == typeof n ? n.trim() : ""
        }

        function n8({
            options: e,
            defaultEmail: t,
            defaultName: n,
            onFormClose: r,
            onSubmit: i,
            onSubmitSuccess: o,
            onSubmitError: s,
            showEmail: a,
            showName: l,
            screenshotInput: u
        }) {
            let {
                tags: c,
                addScreenshotButtonLabel: d,
                removeScreenshotButtonLabel: p,
                cancelButtonLabel: f,
                emailLabel: h,
                emailPlaceholder: m,
                isEmailRequired: g,
                isNameRequired: _,
                messageLabel: y,
                messagePlaceholder: v,
                nameLabel: b,
                namePlaceholder: S,
                submitButtonLabel: w,
                isRequiredLabel: k
            } = e, [E, x] = nV(!1), [C, I] = nV(null), [T, M] = nV(!1), R = u ? .input, [A, O] = nV(null), P = nQ(e => {
                O(e), M(!1)
            }, []), N = nQ(e => {
                var t;
                let n, r = (n = [], (t = {
                    emailLabel: h,
                    isEmailRequired: g,
                    isNameRequired: _,
                    messageLabel: y,
                    nameLabel: b
                }).isNameRequired && !e.name && n.push(t.nameLabel), t.isEmailRequired && !e.email && n.push(t.emailLabel), e.message || n.push(t.messageLabel), n);
                return r.length > 0 ? I(`Please enter in the following required fields: ${r.join(", ")}`) : I(null), 0 === r.length
            }, [h, g, _, y, b]);
            return nm("form", {
                class: "form",
                onSubmit: nQ(async e => {
                    x(!0);
                    try {
                        if (e.preventDefault(), !(e.target instanceof HTMLFormElement)) return;
                        let t = new FormData(e.target),
                            n = await (u && T ? u.value() : void 0),
                            r = {
                                name: n6(t, "name"),
                                email: n6(t, "email"),
                                message: n6(t, "message"),
                                attachments: n ? [n] : void 0
                            };
                        if (!N(r)) return;
                        try {
                            let e = await i({
                                name: r.name,
                                email: r.email,
                                message: r.message,
                                source: "widget",
                                tags: c
                            }, {
                                attachments: r.attachments
                            });
                            o(r, e)
                        } catch (t) {
                            t2 && ea.error(t);
                            let e = t instanceof Error ? t : Error(String(t));
                            I(e.message), s(e)
                        }
                    } finally {
                        x(!1)
                    }
                }, [u && T, o, s])
            }, R && T ? nm(R, {
                onError: P
            }) : null, nm("fieldset", {
                class: "form__right",
                "data-sentry-feedback": !0,
                disabled: E
            }, nm("div", {
                class: "form__top"
            }, C ? nm("div", {
                class: "form__error-container"
            }, C) : null, l ? nm("label", {
                for: "name",
                class: "form__label"
            }, nm(n7, {
                label: b,
                isRequiredLabel: k,
                isRequired: _
            }), nm("input", {
                class: "form__input",
                defaultValue: n,
                id: "name",
                name: "name",
                placeholder: S,
                required: _,
                type: "text"
            })) : nm("input", {
                "aria-hidden": !0,
                value: n,
                name: "name",
                type: "hidden"
            }), a ? nm("label", {
                for: "email",
                class: "form__label"
            }, nm(n7, {
                label: h,
                isRequiredLabel: k,
                isRequired: g
            }), nm("input", {
                class: "form__input",
                defaultValue: t,
                id: "email",
                name: "email",
                placeholder: m,
                required: g,
                type: "email"
            })) : nm("input", {
                "aria-hidden": !0,
                value: t,
                name: "email",
                type: "hidden"
            }), nm("label", {
                for: "message",
                class: "form__label"
            }, nm(n7, {
                label: y,
                isRequiredLabel: k,
                isRequired: !0
            }), nm("textarea", {
                autoFocus: !0,
                class: "form__input form__input--textarea",
                id: "message",
                name: "message",
                placeholder: v,
                required: !0,
                rows: 5
            })), R ? nm("label", {
                for: "screenshot",
                class: "form__label"
            }, nm("button", {
                class: "btn btn--default",
                disabled: E,
                type: "button",
                onClick: () => {
                    O(null), M(e => !e)
                }
            }, T ? p : d), A ? nm("div", {
                class: "form__error-container"
            }, A.message) : null) : null), nm("div", {
                class: "btn-group"
            }, nm("button", {
                class: "btn btn--primary",
                disabled: E,
                type: "submit"
            }, w), nm("button", {
                class: "btn btn--default",
                disabled: E,
                type: "button",
                onClick: r
            }, f))))
        }

        function n7({
            label: e,
            isRequired: t,
            isRequiredLabel: n
        }) {
            return nm("span", {
                class: "form__label__text"
            }, e, t && nm("span", {
                class: "form__label__text--required"
            }, n))
        }

        function n9({
            open: e,
            onFormSubmitted: t,
            ...n
        }) {
            let r = n.options,
                i = nK(() => {
                    let e, t, n, r, i, o, s, a;
                    return {
                        __html: (t = t5((e = e => Y.document.createElementNS("http://www.w3.org/2000/svg", e))("svg"), {
                            width: "16",
                            height: "17",
                            viewBox: "0 0 16 17",
                            fill: "inherit"
                        }), n = t5(e("g"), {
                            clipPath: "url(#clip0_57_156)"
                        }), r = t5(e("path"), {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                        }), i = t5(e("path"), {
                            d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                        }), t.appendChild(n).append(i, r), o = e("defs"), s = t5(e("clipPath"), {
                            id: "clip0_57_156"
                        }), a = t5(e("rect"), {
                            width: "16",
                            height: "16",
                            fill: "white",
                            transform: "translate(0 0.5)"
                        }), s.appendChild(a), o.appendChild(s), t.appendChild(o).appendChild(s).appendChild(a), t).outerHTML
                    }
                }, []),
                [o, s] = nV(null),
                a = nQ(() => {
                    o && (clearTimeout(o), s(null)), t()
                }, [o]),
                l = nQ((e, r) => {
                    n.onSubmitSuccess(e, r), s(setTimeout(() => {
                        t(), s(null)
                    }, 5e3))
                }, [t]);
            return nm(n_, null, o ? nm("div", {
                class: "success__position",
                onClick: a
            }, nm("div", {
                class: "success__content"
            }, r.successMessageText, nm("span", {
                class: "success__icon",
                dangerouslySetInnerHTML: i
            }))) : nm("dialog", {
                class: "dialog",
                onClick: r.onFormClose,
                open: e
            }, nm("div", {
                class: "dialog__position"
            }, nm("div", {
                class: "dialog__content",
                onClick: e => {
                    e.stopPropagation()
                }
            }, nm(n4, {
                options: r
            }), nm(n8, { ...n,
                onSubmitSuccess: l
            })))))
        }
        let re = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,
            rt = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
            rn = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
            rr = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
            ri = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
            ro = () => ({
                name: "FeedbackModal",
                setupOnce() {},
                createDialog: ({
                    options: e,
                    screenshotIntegration: t,
                    sendFeedback: n,
                    shadow: r
                }) => {
                    var i;
                    let o, s, a, l, u = e.useSentryUser,
                        c = (o = tf().getUser(), s = th().getUser(), a = tm().getUser(), o && Object.keys(o).length ? o : s && Object.keys(s).length ? s : a),
                        d = tT.createElement("div"),
                        p = (i = e.styleNonce, (l = tT.createElement("style")).textContent = `
:host {
  --dialog-inset: var(--inset);
}

${re}
${rt}
${rn}
${rr}
${ri}
`, i && l.setAttribute("nonce", i), l),
                        f = "",
                        h = {
                            get el() {
                                return d
                            },
                            appendToDom() {
                                r.contains(p) || r.contains(d) || (r.appendChild(p), r.appendChild(d))
                            },
                            removeFromDom() {
                                d.remove(), p.remove(), tT.body.style.overflow = f
                            },
                            open() {
                                g(!0), e.onFormOpen ? .(), ty() ? .emit("openFeedbackWidget"), f = tT.body.style.overflow, tT.body.style.overflow = "hidden"
                            },
                            close() {
                                g(!1), tT.body.style.overflow = f
                            }
                        },
                        m = t ? .createInput({
                            h: nm,
                            hooks: n5,
                            dialog: h,
                            options: e
                        }),
                        g = t => {
                            var r, i, o, s;
                            r = nm(n9, {
                                options: e,
                                screenshotInput: m,
                                showName: e.showName || e.isNameRequired,
                                showEmail: e.showEmail || e.isEmailRequired,
                                defaultName: String(u && c ? .[u.name] || ""),
                                defaultEmail: String(u && c ? .[u.email] || ""),
                                onFormClose: () => {
                                    g(!1), e.onFormClose ? .()
                                },
                                onSubmit: n,
                                onSubmitSuccess: (t, n) => {
                                    g(!1), e.onSubmitSuccess ? .(t, n)
                                },
                                onSubmitError: t => {
                                    e.onSubmitError ? .(t)
                                },
                                onFormSubmitted: () => {
                                    e.onFormSubmitted ? .()
                                },
                                open: t
                            }), nr.__ && nr.__(r, d), i = d.__k, o = [], s = [], nI(d, r = d.__k = nm(n_, null, [r]), i || nu, nu, void 0 !== d.ownerSVGElement, i ? null : d.firstChild ? nn.call(d.childNodes) : null, o, i ? i.__e : d.firstChild, !1, s), r.__d = void 0, nT(o, r, s)
                        };
                    return h
                }
            });

        function rs(e, t, n) {
            if (!e) return;
            let r = e.getContext("2d", t);
            r && n(e, r)
        }

        function ra(e, t) {
            rs(e, {
                alpha: !0
            }, (e, n) => {
                n.drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height)
            })
        }

        function rl(e, t, n) {
            rs(e, {
                alpha: !0
            }, (e, r) => {
                n.length && (r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e.width, e.height)), n.forEach(e => {
                    switch (e.type) {
                        case "highlight":
                            r.shadowColor = "rgba(0, 0, 0, 0.7)", r.shadowBlur = 50, r.fillStyle = t, r.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2), r.clearRect(e.x, e.y, e.w, e.h);
                            break;
                        case "hide":
                            r.fillStyle = "rgb(0, 0, 0)", r.fillRect(e.x, e.y, e.w, e.h)
                    }
                })
            })
        }
        let ru = () => ({
                name: "FeedbackScreenshot",
                setupOnce() {},
                createInput: ({
                    h: e,
                    hooks: t,
                    dialog: n,
                    options: r
                }) => {
                    let i = tT.createElement("canvas");
                    return {
                        input: function({
                            h: e,
                            hooks: t,
                            outputBuffer: n,
                            dialog: r,
                            options: i
                        }) {
                            var o;
                            let s, a, l, u = function({
                                    hooks: e
                                }) {
                                    return function({
                                        onBeforeScreenshot: t,
                                        onScreenshot: n,
                                        onAfterScreenshot: r,
                                        onError: i
                                    }) {
                                        let o = function() {
                                            let [t, n] = e.useState(Y.devicePixelRatio ? ? 1);
                                            return e.useEffect(() => {
                                                let e = () => {
                                                        n(Y.devicePixelRatio)
                                                    },
                                                    t = matchMedia(`(resolution: ${Y.devicePixelRatio}dppx)`);
                                                return t.addEventListener("change", e), () => {
                                                    t.removeEventListener("change", e)
                                                }
                                            }, []), t
                                        }();
                                        e.useEffect(() => {
                                            (async () => {
                                                t();
                                                let e = await tM.mediaDevices.getDisplayMedia({
                                                        video: {
                                                            width: Y.innerWidth * o,
                                                            height: Y.innerHeight * o
                                                        },
                                                        audio: !1,
                                                        monitorTypeSurfaces: "exclude",
                                                        preferCurrentTab: !0,
                                                        selfBrowserSurface: "include",
                                                        surfaceSwitching: "exclude"
                                                    }),
                                                    i = tT.createElement("video");
                                                await new Promise((t, r) => {
                                                    i.srcObject = e, i.onloadedmetadata = () => {
                                                        n(i, o), e.getTracks().forEach(e => e.stop()), t()
                                                    }, i.play().catch(r)
                                                }), r()
                                            })().catch(i)
                                        }, [])
                                    }
                                }({
                                    hooks: t
                                }),
                                c = function({
                                    h: e
                                }) {
                                    return function({
                                        action: t,
                                        setAction: n,
                                        options: r
                                    }) {
                                        return e("div", {
                                            class: "editor__tool-container"
                                        }, e("div", {
                                            class: "editor__tool-bar"
                                        }, e("button", {
                                            type: "button",
                                            class: `editor__tool ${"highlight"===t?"editor__tool--active":""}`,
                                            onClick: () => {
                                                n("highlight" === t ? "" : "highlight")
                                            }
                                        }, r.highlightToolText), e("button", {
                                            type: "button",
                                            class: `editor__tool ${"hide"===t?"editor__tool--active":""}`,
                                            onClick: () => {
                                                n("hide" === t ? "" : "hide")
                                            }
                                        }, r.hideToolText)))
                                    }
                                }({
                                    h: e
                                }),
                                d = function({
                                    h: e
                                }) {
                                    return function() {
                                        return e("svg", {
                                            "data-test-id": "icon-close",
                                            viewBox: "0 0 16 16",
                                            fill: "#2B2233",
                                            height: "25px",
                                            width: "25px"
                                        }, e("circle", {
                                            r: "7",
                                            cx: "8",
                                            cy: "8",
                                            fill: "white"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
                                        }))
                                    }
                                }({
                                    h: e
                                }),
                                p = {
                                    __html: (o = i.styleNonce, s = tT.createElement("style"), a = "#1A141F", l = "#302735", s.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${a};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${a} 8px,
      ${a} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${l} 15px,
      ${l} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`, o && s.setAttribute("nonce", o), s).innerText
                                },
                                f = r.el.style,
                                h = ({
                                    screenshot: r
                                }) => {
                                    let [o, s] = t.useState("highlight"), [a, l] = t.useState([]), u = t.useRef(null), f = t.useRef(null), h = t.useRef(null), m = t.useRef(null), [g, _] = t.useState(1), y = t.useMemo(() => {
                                        let e = tT.getElementById(i.id);
                                        if (!e) return "white";
                                        let t = getComputedStyle(e);
                                        return t.getPropertyValue("--button-primary-background") || t.getPropertyValue("--accent-background")
                                    }, [i.id]);
                                    t.useLayoutEffect(() => {
                                        let e = () => {
                                            let t = u.current;
                                            t && (rs(r.canvas, {
                                                alpha: !1
                                            }, e => {
                                                _(Math.min(t.clientWidth / e.width, t.clientHeight / e.height))
                                            }), (0 === t.clientHeight || 0 === t.clientWidth) && setTimeout(e, 0))
                                        };
                                        return e(), Y.addEventListener("resize", e), () => {
                                            Y.removeEventListener("resize", e)
                                        }
                                    }, [r]);
                                    let v = t.useCallback((e, t) => {
                                        rs(e, {
                                            alpha: !0
                                        }, (e, n) => {
                                            n.scale(t, t), e.width = r.canvas.width, e.height = r.canvas.height
                                        })
                                    }, [r]);
                                    t.useEffect(() => {
                                        v(f.current, r.dpi), ra(f.current, r.canvas)
                                    }, [r]), t.useEffect(() => {
                                        v(h.current, r.dpi), rs(h.current, {
                                            alpha: !0
                                        }, (e, t) => {
                                            t.clearRect(0, 0, e.width, e.height)
                                        }), rl(h.current, y, a)
                                    }, [a, y]), t.useEffect(() => {
                                        v(n, r.dpi), ra(n, r.canvas), rs(tT.createElement("canvas"), {
                                            alpha: !0
                                        }, (e, t) => {
                                            t.scale(r.dpi, r.dpi), e.width = r.canvas.width, e.height = r.canvas.height, rl(e, y, a), ra(n, e)
                                        })
                                    }, [a, r, y]);
                                    let b = t.useCallback(e => t => {
                                            t.preventDefault(), t.stopPropagation(), l(t => {
                                                let n = [...t];
                                                return n.splice(e, 1), n
                                            })
                                        }, []),
                                        S = {
                                            width: `${r.canvas.width*g}px`,
                                            height: `${r.canvas.height*g}px`
                                        },
                                        w = e => {
                                            e.stopPropagation()
                                        };
                                    return e("div", {
                                        class: "editor"
                                    }, e("style", {
                                        nonce: i.styleNonce,
                                        dangerouslySetInnerHTML: p
                                    }), e("div", {
                                        class: "editor__image-container"
                                    }, e("div", {
                                        class: "editor__canvas-container",
                                        ref: u
                                    }, e("canvas", {
                                        ref: f,
                                        id: "background",
                                        style: S
                                    }), e("canvas", {
                                        ref: h,
                                        id: "foreground",
                                        style: S
                                    }), e("div", {
                                        ref: m,
                                        onMouseDown: e => {
                                            if (!o || !m.current) return;
                                            let t = m.current.getBoundingClientRect(),
                                                n = {
                                                    type: o,
                                                    x: e.offsetX / g,
                                                    y: e.offsetY / g
                                                },
                                                r = (e, n) => {
                                                    let r = (n.clientX - t.x) / g,
                                                        i = (n.clientY - t.y) / g;
                                                    return {
                                                        type: e.type,
                                                        x: Math.min(e.x, r),
                                                        y: Math.min(e.y, i),
                                                        w: Math.abs(r - e.x),
                                                        h: Math.abs(i - e.y)
                                                    }
                                                },
                                                i = e => {
                                                    rs(h.current, {
                                                        alpha: !0
                                                    }, (e, t) => {
                                                        t.clearRect(0, 0, e.width, e.height)
                                                    }), rl(h.current, y, [...a, r(n, e)])
                                                },
                                                s = e => {
                                                    let t = r(n, e);
                                                    t.w * g >= 1 && t.h * g >= 1 && l(e => [...e, t]), tT.removeEventListener("mousemove", i), tT.removeEventListener("mouseup", s)
                                                };
                                            tT.addEventListener("mousemove", i), tT.addEventListener("mouseup", s)
                                        },
                                        style: S
                                    }, a.map((t, n) => e("div", {
                                        key: n,
                                        class: "editor__rect",
                                        style: {
                                            top: `${t.y*g}px`,
                                            left: `${t.x*g}px`,
                                            width: `${t.w*g}px`,
                                            height: `${t.h*g}px`
                                        }
                                    }, e("button", {
                                        "aria-label": i.removeHighlightText,
                                        onClick: b(n),
                                        onMouseDown: w,
                                        onMouseUp: w,
                                        type: "button"
                                    }, e(d, null))))))), e(c, {
                                        options: i,
                                        action: o,
                                        setAction: s
                                    }))
                                };
                            return function({
                                onError: r
                            }) {
                                let [i, o] = t.useState();
                                return (u({
                                    onBeforeScreenshot: t.useCallback(() => {
                                        f.display = "none"
                                    }, []),
                                    onScreenshot: t.useCallback((e, t) => {
                                        rs(tT.createElement("canvas"), {
                                            alpha: !1
                                        }, (n, r) => {
                                            r.scale(t, t), n.width = e.videoWidth, n.height = e.videoHeight, r.drawImage(e, 0, 0, n.width, n.height), o({
                                                canvas: n,
                                                dpi: t
                                            })
                                        }), n.width = e.videoWidth, n.height = e.videoHeight
                                    }, []),
                                    onAfterScreenshot: t.useCallback(() => {
                                        f.display = "block"
                                    }, []),
                                    onError: t.useCallback(e => {
                                        f.display = "block", r(e)
                                    }, [])
                                }), i) ? e(h, {
                                    screenshot: i
                                }) : e("div", null)
                            }
                        }({
                            h: e,
                            hooks: t,
                            outputBuffer: i,
                            dialog: n,
                            options: r
                        }),
                        value: async () => {
                            let e = await new Promise(e => {
                                i.toBlob(e, "image/png")
                            });
                            if (e) return {
                                data: new Uint8Array(await e.arrayBuffer()),
                                filename: "screenshot.png",
                                contentType: "application/png"
                            }
                        }
                    }
                }
            }),
            rc = "production";

        function rd(e) {
            return new rf(t => {
                t(e)
            })
        }

        function rp(e) {
            return new rf((t, n) => {
                n(e)
            })
        }
        class rf {
            constructor(e) {
                this._state = 0, this._handlers = [], this._runExecutor(e)
            }
            then(e, t) {
                return new rf((n, r) => {
                    this._handlers.push([!1, t => {
                        if (e) try {
                            n(e(t))
                        } catch (e) {
                            r(e)
                        } else n(t)
                    }, e => {
                        if (t) try {
                            n(t(e))
                        } catch (e) {
                            r(e)
                        } else r(e)
                    }]), this._executeHandlers()
                })
            } catch (e) {
                return this.then(e => e, e)
            } finally(e) {
                return new rf((t, n) => {
                    let r, i;
                    return this.then(t => {
                        i = !1, r = t, e && e()
                    }, t => {
                        i = !0, r = t, e && e()
                    }).then(() => {
                        i ? n(r) : t(r)
                    })
                })
            }
            _executeHandlers() {
                if (0 === this._state) return;
                let e = this._handlers.slice();
                this._handlers = [], e.forEach(e => {
                    e[0] || (1 === this._state && e[1](this._value), 2 === this._state && e[2](this._value), e[0] = !0)
                })
            }
            _runExecutor(e) {
                let t = (e, t) => {
                        if (0 === this._state) {
                            if (ev(t)) return void t.then(n, r);
                            this._state = e, this._value = t, this._executeHandlers()
                        }
                    },
                    n = e => {
                        t(1, e)
                    },
                    r = e => {
                        t(2, e)
                    };
                try {
                    e(n, r)
                } catch (e) {
                    r(e)
                }
            }
        }

        function rh(e) {
            let t = Y._sentryDebugIds,
                n = Y._debugIds;
            if (!t && !n) return {};
            let r = t ? Object.keys(t) : [],
                i = n ? Object.keys(n) : [];
            if (d && r.length === u && i.length === c) return d;
            u = r.length, c = i.length, d = {}, l || (l = {});
            let o = (t, n) => {
                for (let r of t) {
                    let t = n[r],
                        i = l ? .[r];
                    if (i && d && t) d[i[0]] = t, l && (l[r] = [i[0], t]);
                    else if (t) {
                        let n = e(r);
                        for (let e = n.length - 1; e >= 0; e--) {
                            let i = n[e],
                                o = i ? .filename;
                            if (o && d && l) {
                                d[o] = t, l[r] = [o, t];
                                break
                            }
                        }
                    }
                }
            };
            return t && o(r, t), n && o(i, n), d
        }
        let rm = "sentry.source",
            rg = "sentry.sample_rate",
            r_ = "sentry.previous_trace_sample_rate",
            ry = "sentry.op",
            rv = "sentry.origin",
            rb = "sentry.idle_span_finish_reason",
            rS = "sentry.measurement_unit",
            rw = "sentry.measurement_value",
            rk = "sentry.custom_span_name",
            rE = "sentry.profile_id",
            rx = "sentry.exclusive_time",
            rC = "sentry-";

        function rI(e) {
            let t = function(e) {
                if (e && (ef(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => (Object.entries(rM(t)).forEach(([t, n]) => {
                    e[t] = n
                }), e), {}) : rM(e)
            }(e);
            if (!t) return;
            let n = Object.entries(t).reduce((e, [t, n]) => (t.startsWith(rC) && (e[t.slice(rC.length)] = n), e), {});
            return Object.keys(n).length > 0 ? n : void 0
        }

        function rT(e) {
            if (e) {
                var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${rC}${t}`] = n), e), {});
                return 0 !== Object.keys(t).length ? Object.entries(t).reduce((e, [t, n], r) => {
                    let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                        o = 0 === r ? i : `${e},${i}`;
                    return o.length > 8192 ? (ee && ea.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : o
                }, "") : void 0
            }
        }

        function rM(e) {
            return e.split(",").map(e => {
                let t = e.indexOf("=");
                return -1 === t ? [] : [e.slice(0, t), e.slice(t + 1)].map(e => {
                    try {
                        return decodeURIComponent(e.trim())
                    } catch {
                        return
                    }
                })
            }).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
        }
        let rR = /^o(\d+)\./,
            rA = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

        function rO(e, t = !1) {
            let {
                host: n,
                path: r,
                pass: i,
                port: o,
                projectId: s,
                protocol: a,
                publicKey: l
            } = e;
            return `${a}://${l}${t&&i?`:${i}`:""}@${n}${o?`:${o}`:""}/${r?`${r}/`:r}${s}`
        }

        function rP(e) {
            let t = rA.exec(e);
            if (!t) return void er(() => {});
            let [n, r, i = "", o = "", s = "", a = ""] = t.slice(1), l = "", u = a, c = u.split("/");
            if (c.length > 1 && (l = c.slice(0, -1).join("/"), u = c.pop()), u) {
                let e = u.match(/^\d+/);
                e && (u = e[0])
            }
            return rN({
                host: o,
                pass: i,
                path: l,
                projectId: u,
                port: s,
                protocol: n,
                publicKey: r
            })
        }

        function rN(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }

        function rD(e) {
            let t, n = e.getOptions(),
                {
                    host: r
                } = e.getDsn() || {};
            if (n.orgId) t = String(n.orgId);
            else {
                let e;
                r && (e = r.match(rR), t = e ? .[1])
            }
            return t
        }

        function rL(e) {
            let t = "string" == typeof e ? rP(e) : rN(e);
            if (t && function(e) {
                    if (!ee) return !0;
                    let {
                        port: t,
                        projectId: n,
                        protocol: r
                    } = e;
                    return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (ea.error(`Invalid Sentry Dsn: ${t} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (ea.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : !(t && isNaN(parseInt(t, 10))) || (ea.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (ea.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
                }(t)) return t
        }

        function r$(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            let t = e || ty() ? .getOptions();
            return !!t && (null != t.tracesSampleRate || !!t.tracesSampler)
        }

        function rj(e, t = !1) {
            let n = {};
            for (let [r, i] of Object.entries(e ? ? {})) {
                let e = function(e, t) {
                    let {
                        value: n,
                        unit: r
                    } = "object" == typeof e && null != e && !Array.isArray(e) && Object.keys(e).includes("value") ? e : {
                        value: e,
                        unit: void 0
                    }, i = function(e) {
                        if (Array.isArray(e)) return {
                            value: e,
                            type: "array"
                        };
                        let t = "string" == typeof e ? "string" : "boolean" == typeof e ? "boolean" : "number" != typeof e || Number.isNaN(e) ? null : Number.isInteger(e) ? "integer" : "double";
                        if (t) return {
                            value: e,
                            type: t
                        }
                    }(n), o = r && "string" == typeof r ? {
                        unit: r
                    } : {};
                    if (i) return { ...i,
                        ...o
                    };
                    if (!t || "skip-undefined" === t && void 0 === n) return;
                    let s = "";
                    try {
                        s = JSON.stringify(n) ? ? ""
                    } catch {}
                    return {
                        value: s,
                        type: "string",
                        ...o
                    }
                }(i, t);
                e && (n[r] = e)
            }
            return n
        }

        function rF(e) {
            if (!e) return 0;
            let t = 0;
            for (let [n, r] of Object.entries(e)) {
                t += 2 * n.length, t += 2 * r.type.length, t += (r.unit ? .length ? ? 0) * 2;
                let e = r.value;
                Array.isArray(e) ? t += rB(e[0]) * e.length : em(e) ? t += rB(e) : t += 100
            }
            return t
        }

        function rB(e) {
            return "string" == typeof e ? 2 * e.length : "boolean" == typeof e ? 4 : 8 * ("number" == typeof e)
        }
        let rU = "_sentryScope",
            rW = "_sentryIsolationScope",
            rq = Symbol.for("sentry.otelSourceInference"),
            rH = Symbol.for("sentry.otelSourceExplicitlySet"),
            rz = Symbol.for("sentry.tracerProviderSpan");

        function rJ(e, t, n) {
            e && (ek(e, rW, e8(n)), ek(e, rU, t))
        }

        function rV(e) {
            return {
                scope: e[rU],
                isolationScope: e7(e[rW])
            }
        }

        function rG(e) {
            if ("boolean" == typeof e) return Number(e);
            let t = "string" == typeof e ? parseFloat(e) : e;
            if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t
        }
        let rY = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

        function rK(e, t) {
            let n = function(e) {
                    let t;
                    if (!e) return;
                    let n = e.match(rY);
                    if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                        traceId: n[1],
                        parentSampled: t,
                        parentSpanId: n[2]
                    }
                }(e),
                r = rI(t);
            if (!n ? .traceId) return {
                traceId: eG(),
                sampleRand: eM()
            };
            let i = function(e, t) {
                let n = rG(t ? .sample_rand);
                if (void 0 !== n) return n;
                let r = rG(t ? .sample_rate);
                return r && e ? .parentSampled !== void 0 ? e.parentSampled ? eM() * r : r + eM() * (1 - r) : eM()
            }(n, r);
            r && (r.sample_rand = i.toString());
            let {
                traceId: o,
                parentSpanId: s,
                parentSampled: a
            } = n;
            return {
                traceId: o,
                parentSpanId: s,
                sampled: a,
                dsc: r || {},
                sampleRand: i
            }
        }

        function rQ(e = eG(), t = e6(), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
        }

        function rX(e = eG(), t = e6(), n) {
            return `00-${e}-${t}-${n?"01":"00"}`
        }
        let rZ = !1;

        function r0(e) {
            let {
                spanId: t,
                traceId: n,
                isRemote: r
            } = e.spanContext(), i = r ? t : r6(e).parent_span_id, o = rV(e).scope;
            return {
                parent_span_id: i,
                span_id: r ? o ? .getPropagationContext().propagationSpanId || e6() : t,
                trace_id: n
            }
        }

        function r1(e) {
            let {
                traceId: t,
                spanId: n
            } = e.spanContext();
            return rQ(t, n, ir(e))
        }

        function r2(e) {
            return e && e.length > 0 ? e.map(({
                context: {
                    spanId: e,
                    traceId: t,
                    traceFlags: n,
                    ...r
                },
                attributes: i
            }) => ({
                span_id: e,
                trace_id: t,
                sampled: 1 === n,
                attributes: i,
                ...r
            })) : void 0
        }

        function r3(e) {
            return e ? .length ? e.map(({
                context: {
                    spanId: e,
                    traceId: t,
                    traceFlags: n
                },
                attributes: r
            }) => ({
                span_id: e,
                trace_id: t,
                sampled: 1 === n,
                attributes: r
            })) : void 0
        }

        function r5(e) {
            return "number" == typeof e ? r4(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? r4(e.getTime()) : e1()
        }

        function r4(e) {
            return e > 0x2540be3ff ? e / 1e3 : e
        }

        function r6(e) {
            if (it(e)) return e.getSpanJSON();
            let {
                spanId: t,
                traceId: n
            } = e.spanContext();
            if (ie(e)) {
                let {
                    attributes: r,
                    startTime: i,
                    name: o,
                    endTime: s,
                    status: a,
                    links: l
                } = e;
                return {
                    span_id: t,
                    trace_id: n,
                    data: r,
                    description: o,
                    parent_span_id: r7(e),
                    start_timestamp: r5(i),
                    timestamp: r5(s) || void 0,
                    status: ii(a),
                    op: r[ry],
                    origin: r[rv],
                    links: r2(l)
                }
            }
            return {
                span_id: t,
                trace_id: n,
                start_timestamp: 0,
                data: {}
            }
        }

        function r8(e) {
            if (it(e)) return e.getStreamedSpanJSON();
            let {
                spanId: t,
                traceId: n
            } = e.spanContext();
            if (ie(e)) {
                let {
                    attributes: r,
                    startTime: i,
                    name: o,
                    endTime: s,
                    status: a,
                    links: l
                } = e;
                return {
                    name: o,
                    span_id: t,
                    trace_id: n,
                    parent_span_id: r7(e),
                    start_timestamp: r5(i),
                    end_timestamp: r5(s),
                    is_segment: e === ip(e),
                    status: io(a),
                    attributes: is(r, a),
                    links: r3(l)
                }
            }
            return {
                span_id: t,
                trace_id: n,
                start_timestamp: 0,
                name: "",
                end_timestamp: 0,
                status: "ok",
                is_segment: e === ip(e)
            }
        }

        function r7(e) {
            return "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext ? .spanId : void 0
        }

        function r9(e) {
            return { ...e,
                attributes: rj(e.attributes),
                links: e.links ? .map(e => ({ ...e,
                    attributes: rj(e.attributes)
                }))
            }
        }

        function ie(e) {
            return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
        }

        function it(e) {
            return "function" == typeof e.getSpanJSON
        }

        function ir(e) {
            let {
                traceFlags: t
            } = e.spanContext();
            return 1 === t
        }

        function ii(e) {
            if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "internal_error"
        }

        function io(e) {
            return e && 1 !== e.code && 0 !== e.code && "cancelled" !== e.message ? "error" : "ok"
        }

        function is(e, t) {
            let n = "error" === io(t) ? t ? .message : void 0;
            return { ...n && {
                    "sentry.status.message": n
                },
                ...e
            }
        }
        let ia = "_sentryChildSpans",
            il = "_sentryRootSpan";

        function iu(e, t) {
            let n = e[il] || e;
            ek(t, il, n), !ir(e) || (e.isRecording() || n.isRecording()) && (e[ia] ? e[ia].add(t) : ek(e, ia, new Set([t])))
        }

        function ic(e) {
            let t = new Set;
            return ! function e(n) {
                if (!t.has(n) && ir(n))
                    for (let r of (t.add(n), n[ia] ? Array.from(n[ia]) : [])) e(r)
            }(e), Array.from(t)
        }
        let id = ip;

        function ip(e) {
            return e[il] || e
        }

        function ih() {
            let e = tp(Q());
            return e.getActiveSpan ? e.getActiveSpan() : tt(tf())
        }

        function im() {
            rZ || (er(() => {}), rZ = !0)
        }

        function ig(e, t) {
            e.updateName(t), e.setAttributes({
                [rm]: "custom",
                [rk]: t
            })
        }
        let i_ = Symbol.for("sentry.nonRecordingSpan");
        class iy {
            constructor(e = {}) {
                this._traceId = e.traceId || eG(), this._spanId = e.spanId || e6(), this.dropReason = e.dropReason, ek(this, i_, !0)
            }
            spanContext() {
                return {
                    spanId: this._spanId,
                    traceId: this._traceId,
                    traceFlags: 0
                }
            }
            end(e) {}
            setAttribute(e, t) {
                return this
            }
            setAttributes(e) {
                return this
            }
            setStatus(e) {
                return this
            }
            updateName(e) {
                return this
            }
            isRecording() {
                return !1
            }
            addEvent(e, t, n) {
                return this
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
        }

        function iv(e) {
            return !!e && !0 === e[i_]
        }
        let ib = "_frozenDsc";

        function iS(e, t) {
            let n = t.getOptions(),
                {
                    publicKey: r
                } = t.getDsn() || {},
                i = {
                    environment: n.environment || rc,
                    release: n.release,
                    public_key: r,
                    trace_id: e,
                    org_id: rD(t)
                };
            return t.emit("createDsc", i), i
        }

        function iw(e, t) {
            let n = t.getPropagationContext();
            return n.dsc || iS(n.traceId, e)
        }

        function ik(e) {
            let t = ty();
            if (!t) return {};
            let n = id(e),
                r = r6(n),
                i = r.data,
                o = n.spanContext().traceState,
                s = o ? .get("sentry.sample_rate") ? ? i[rg] ? ? i[r_];

            function a(e) {
                return ("number" == typeof s || "string" == typeof s) && (e.sample_rate = `${s}`), e
            }
            let l = n[ib];
            if (l) return a(l);
            let u = iv(n),
                c = u && "ignored" === n.dropReason;
            if (u && (!r$(t.getOptions()) || c)) {
                let e = rV(n).scope;
                if (e) {
                    let n = { ...iw(t, e)
                    };
                    return c && (n.sampled = "false"), a(n)
                }
            }
            let d = o ? .get("sentry.dsc"),
                p = d && rI(d);
            if (p) return a(p);
            let f = iS(e.spanContext().traceId, t),
                h = i[rm] ? ? i["sentry.segment.name.source"],
                m = r.description;
            return "url" !== h && m && (f.transaction = m), r$() && (f.sampled = String(ir(n)), f.sample_rand = o ? .get("sentry.sample_rand") ? ? rV(n).scope ? .getPropagationContext().sampleRand.toString()), a(f), t.emit("createDsc", f, n), f
        }

        function iE(e) {
            return rT(ik(e))
        }

        function ix(e, t) {
            let {
                extra: n,
                tags: r,
                attributes: i,
                user: o,
                contexts: s,
                level: a,
                sdkProcessingMetadata: l,
                breadcrumbs: u,
                fingerprint: c,
                eventProcessors: d,
                attachments: p,
                propagationContext: f,
                transactionName: h,
                span: m
            } = t;
            iC(e, "extra", n), iC(e, "tags", r), iC(e, "attributes", i), iC(e, "user", o), iC(e, "contexts", s), e.sdkProcessingMetadata = e4(e.sdkProcessingMetadata, l, 2), a && (e.level = a), h && (e.transactionName = h), m && (e.span = m), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), c.length && (e.fingerprint = [...e.fingerprint, ...c]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), p.length && (e.attachments = [...e.attachments, ...p]), e.propagationContext = { ...e.propagationContext,
                ...f
            }
        }

        function iC(e, t, n) {
            e[t] = e4(e[t], n, 1)
        }

        function iI(e, t) {
            let n = tm().getScopeData();
            return e && ix(n, e.getScopeData()), t && ix(n, t.getScopeData()), n
        }

        function iT(e, t, n, r, i, o) {
            let s, {
                    normalizeDepth: a = 3,
                    normalizeMaxBreadth: l = 1e3
                } = e,
                u = { ...t,
                    event_id: t.event_id || n.event_id || eG(),
                    timestamp: t.timestamp || e0()
                },
                c = n.integrations || e.integrations.map(e => e.name);
            (function(e, t) {
                let {
                    environment: n,
                    release: r,
                    dist: i,
                    maxValueLength: o
                } = t;
                e.environment = e.environment || n || rc, !e.release && r && (e.release = r), !e.dist && i && (e.dist = i);
                let s = e.request;
                s ? .url && o && (s.url = eq(s.url, o)), o && e.exception ? .values ? .forEach(e => {
                    e.value && (e.value = eq(e.value, o))
                })
            })(u, e), c.length > 0 && (u.sdk = u.sdk || {}, u.sdk.integrations = [...u.sdk.integrations || [], ...c]), i && i.emit("applyFrameMetadata", t), void 0 === t.type && (s = rh(e.stackParser), u.exception ? .values ? .forEach(e => {
                e.stacktrace ? .frames ? .forEach(e => {
                    e.filename && (e.debug_id = s[e.filename])
                })
            }));
            let d = function(e, t) {
                if (!t) return e;
                let n = e ? e.clone() : new tn;
                return n.update(t), n
            }(r, n.captureContext);
            n.mechanism && eX(u, n.mechanism);
            let p = i ? i.getEventProcessors() : [],
                f = iI(o, d),
                h = [...n.attachments || [], ...f.attachments];
            h.length && (n.attachments = h),
                function(e, t) {
                    let n, r, {
                        fingerprint: i,
                        span: o,
                        breadcrumbs: s,
                        sdkProcessingMetadata: a
                    } = t;
                    (function(e, t) {
                        let {
                            extra: n,
                            tags: r,
                            user: i,
                            contexts: o,
                            level: s,
                            transactionName: a
                        } = t;
                        Object.keys(n).length && (e.extra = { ...n,
                            ...e.extra
                        }), Object.keys(r).length && (e.tags = { ...r,
                            ...e.tags
                        }), Object.keys(i).length && (e.user = { ...i,
                            ...e.user
                        }), Object.keys(o).length && (e.contexts = { ...o,
                            ...e.contexts
                        }), s && (e.level = s), a && "transaction" !== e.type && (e.transaction = a)
                    })(e, t), o && (e.contexts = {
                        trace: r0(o),
                        ...e.contexts
                    }, e.sdkProcessingMetadata = {
                        dynamicSamplingContext: ik(o),
                        ...e.sdkProcessingMetadata
                    }, (n = r6(id(o)).description) && !e.transaction && "transaction" === e.type && (e.transaction = n)), e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], i && (e.fingerprint = e.fingerprint.concat(i)), e.fingerprint.length || delete e.fingerprint, r = [...e.breadcrumbs || [], ...s], e.breadcrumbs = r.length ? r : void 0, e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
                        ...a
                    }
                }(u, f);
            let m = [...p, ...f.eventProcessors];
            return (n.data && !0 === n.data.__sentry__ ? rd(u) : function(e, t, n, r = 0) {
                try {
                    let i = function e(t, n, r, i) {
                        let o = r[i];
                        if (!t || !o) return t;
                        let s = o({ ...t
                        }, n);
                        return (ee && null === s && ea.log(`Event processor "${o.id||"?"}" dropped event`), ev(s)) ? s.then(t => e(t, n, r, i + 1)) : e(s, n, r, i + 1)
                    }(t, n, e, r);
                    return ev(i) ? i : rd(i)
                } catch (e) {
                    return rp(e)
                }
            }(m, u, n)).then(e => (e && function(e) {
                let t = {};
                if (e.exception ? .values ? .forEach(e => {
                        e.stacktrace ? .frames ? .forEach(e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                        })
                    }), 0 === Object.keys(t).length) return;
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                let n = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t
                    })
                })
            }(e), "number" == typeof a && a > 0) ? function(e, t, n) {
                if (!e) return null;
                let r = { ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({ ...e,
                            ...e.data && {
                                data: eB(e.data, t, n)
                            }
                        }))
                    },
                    ...e.user && {
                        user: eB(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: eB(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: eB(e.extra, t, n)
                    }
                };
                return e.contexts ? .trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = eB(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => ({ ...e,
                    ...e.data && {
                        data: eB(e.data, t, n)
                    }
                }))), e.contexts ? .flags && r.contexts && (r.contexts.flags = eB(e.contexts.flags, 3, n)), r
            }(e, a, l) : e)
        }
        let iM = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

        function iR(e, t) {
            return tf().captureException(e, function(e) {
                if (e) return e instanceof tn || "function" == typeof e || Object.keys(e).some(e => iM.includes(e)) ? {
                    captureContext: e
                } : e
            }(t))
        }

        function iA(e, t) {
            let n = "string" == typeof t ? t : void 0,
                r = "string" != typeof t ? {
                    captureContext: t
                } : void 0;
            return tf().captureMessage(e, n, r)
        }

        function iO(e, t) {
            return tf().captureEvent(e, t)
        }

        function iP(e, t) {
            th().setContext(e, t)
        }

        function iN(e) {
            th().setExtras(e)
        }

        function iD(e, t) {
            th().setExtra(e, t)
        }

        function iL(e) {
            th().setTags(e)
        }

        function i$(e, t) {
            th().setTag(e, t)
        }

        function ij(e) {
            th().setAttributes(e)
        }

        function iF(e, t) {
            th().setAttribute(e, t)
        }

        function iB(e) {
            th().setUser(e)
        }

        function iU(e) {
            th().setConversationId(e)
        }

        function iW() {
            return th().lastEventId()
        }
        async function iq(e) {
            let t = ty();
            return t ? t.flush(e) : (ee && ea.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
        }
        async function iH(e) {
            let t = ty();
            return t ? t.close(e) : (ee && ea.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
        }

        function iz() {
            return !!ty()
        }

        function iJ() {
            let e = ty();
            return e ? .getOptions().enabled !== !1 && !!e ? .getTransport()
        }

        function iV(e) {
            th().addEventProcessor(e)
        }

        function iG(e) {
            var t;
            let n, r, i = th(),
                {
                    user: o
                } = iI(i, tf()),
                {
                    userAgent: s
                } = Y.navigator || {},
                a = (t = {
                    user: o,
                    ...s && {
                        userAgent: s
                    },
                    ...e
                }, n = e1(), r = {
                    sid: eG(),
                    init: !0,
                    timestamp: n,
                    started: n,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: () => {
                        var e;
                        return e = r, {
                            sid: `${e.sid}`,
                            init: e.init,
                            started: new Date(1e3 * e.started).toISOString(),
                            timestamp: new Date(1e3 * e.timestamp).toISOString(),
                            status: e.status,
                            errors: e.errors,
                            did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                            duration: e.duration,
                            abnormal_mechanism: e.abnormal_mechanism,
                            attrs: {
                                release: e.release,
                                environment: e.environment,
                                ip_address: e.ipAddress,
                                user_agent: e.userAgent
                            }
                        }
                    }
                }, t && e5(r, t), r),
                l = i.getSession();
            return l ? .status === "ok" && e5(l, {
                status: "exited"
            }), iY(), i.setSession(a), a
        }

        function iY() {
            let e, t = th(),
                n = tf().getSession() || t.getSession();
            n && (e = {}, "ok" === n.status && (e = {
                status: "exited"
            }), e5(n, e)), iK(), t.setSession()
        }

        function iK() {
            let e = th(),
                t = ty(),
                n = e.getSession();
            n && t && t.captureSession(n)
        }

        function iQ(e = !1) {
            e ? iY() : iK()
        }
        let iX = Y,
            iZ = 0;

        function i0(e, t = {}) {
            if ("function" != typeof e) return e;
            try {
                if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
                    let t = e.__sentry_wrapped__;
                    if ("function" == typeof t) return t;
                    return e
                }
                if (ex(e)) return e
            } catch {
                return e
            }
            let n = function(...n) {
                Y._sentryWrappedDepth = (Y._sentryWrappedDepth || 0) + 1;
                try {
                    let r = n.map(e => i0(e, t));
                    return e.apply(this, r)
                } catch (e) {
                    throw iZ++, setTimeout(() => {
                        iZ--
                    }), tg(r => {
                        r.addEventProcessor(e => (t.mechanism && (eQ(e, void 0, void 0), eX(e, t.mechanism)), e.extra = { ...e.extra,
                            arguments: n
                        }, e)), iR(e)
                    }), e
                } finally {
                    Y._sentryWrappedDepth = (Y._sentryWrappedDepth || 0) - 1
                }
            };
            try {
                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
            } catch {}
            eE(n, e), ek(e, "__sentry_wrapped__", n);
            try {
                Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                    get: () => e.name
                })
            } catch {}
            return n
        }

        function i1() {
            let e = tS(),
                {
                    referrer: t
                } = iX.document || {},
                {
                    userAgent: n
                } = iX.navigator || {};
            return {
                url: e,
                headers: { ...t && {
                        Referer: t
                    },
                    ...n && {
                        "User-Agent": n
                    }
                }
            }
        }
        let i2 = ["replayIntegration", "replayCanvasIntegration", "feedbackIntegration", "feedbackModalIntegration", "feedbackScreenshotIntegration", "captureConsoleIntegration", "contextLinesIntegration", "linkedErrorsIntegration", "dedupeIntegration", "extraErrorDataIntegration", "graphqlClientIntegration", "httpClientIntegration", "reportingObserverIntegration", "rewriteFramesIntegration", "browserProfilingIntegration", "moduleMetadataIntegration", "instrumentAnthropicAiClient", "instrumentOpenAiClient", "instrumentGoogleGenAIClient", "instrumentStateGraph", "instrumentLangGraph", "createLangChainCallbackHandler", "instrumentLangChainEmbeddings"],
            i3 = {
                replayCanvasIntegration: "replay-canvas",
                feedbackModalIntegration: "feedback-modal",
                feedbackScreenshotIntegration: "feedback-screenshot"
            };
        async function i5(e, t) {
            let n, r = i2.includes(e) ? i3[e] || e.replace("Integration", "").toLowerCase() : void 0,
                i = iX.Sentry = iX.Sentry || {};
            if (!r) throw Error(`Cannot lazy load integration: ${e}`);
            let o = i[e];
            if ("function" == typeof o && !("_isShim" in o)) return o;
            let s = (n = ty(), new URL(`/${K}/${r}.min.js`, n ? .getOptions() ? .cdnBaseUrl || "https://browser.sentry-cdn.com").toString()),
                a = iX.document.createElement("script");
            a.src = s, a.crossOrigin = "anonymous", a.referrerPolicy = "strict-origin", t && a.setAttribute("nonce", t);
            let l = new Promise((e, t) => {
                    a.addEventListener("load", () => e()), a.addEventListener("error", t)
                }),
                u = iX.document.currentScript,
                c = iX.document.body || iX.document.head || u ? .parentElement;
            if (c) c.appendChild(a);
            else throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
            try {
                await l
            } catch {
                throw Error(`Error when loading integration: ${e}`)
            }
            let d = i[e];
            if ("function" != typeof d) throw Error(`Could not load integration: ${e}`);
            return d
        }
        let i4 = ne({
                lazyLoadIntegration: i5
            }),
            i6 = ne({
                getModalIntegration: () => ro,
                getScreenshotIntegration: () => ru
            }),
            i8 = {},
            i7 = {};

        function i9(e, t) {
            return i8[e] = i8[e] || [], i8[e].push(t), () => {
                let n = i8[e];
                if (n) {
                    let e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                }
            }
        }

        function oe(e, t) {
            if (!i7[e]) {
                i7[e] = !0;
                try {
                    t()
                } catch (t) {
                    ee && ea.error(`Error while instrumenting ${e}`, t)
                }
            }
        }

        function ot(e, t) {
            let n = e && i8[e];
            if (n)
                for (let r of n) try {
                    r(t)
                } catch (t) {
                    ee && ea.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${ej(r)}
Error:`, t)
                }
        }
        let on = null;

        function or(e) {
            let t = "error";
            i9(t, e), oe(t, oi)
        }

        function oi() {
            on = Y.onerror, Y.onerror = function(e, t, n, r, i) {
                return ot("error", {
                    column: r,
                    error: i,
                    line: n,
                    msg: e,
                    url: t
                }), !!on && on.apply(this, arguments)
            }, Y.onerror.__SENTRY_INSTRUMENTED__ = !0
        }
        let oo = null;

        function os(e) {
            let t = "unhandledrejection";
            i9(t, e), oe(t, oa)
        }

        function oa() {
            oo = Y.onunhandledrejection, Y.onunhandledrejection = function(e) {
                return ot("unhandledrejection", e), !oo || oo.apply(this, arguments)
            }, Y.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }
        let ol = !1;

        function ou() {
            ol || (ol = !0, or(e), os(e));

            function e() {
                let e = ih(),
                    t = e && id(e);
                if (t) {
                    let e = "internal_error";
                    ee && ea.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                        code: 2,
                        message: e
                    })
                }
            }
        }

        function oc(e) {
            if (e < 400 && e >= 100) return {
                code: 1
            };
            if (e >= 400 && e < 500) switch (e) {
                case 401:
                    return {
                        code: 2,
                        message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: 2,
                        message: "permission_denied"
                    };
                case 404:
                    return {
                        code: 2,
                        message: "not_found"
                    };
                case 409:
                    return {
                        code: 2,
                        message: "already_exists"
                    };
                case 413:
                    return {
                        code: 2,
                        message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: 2,
                        message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: 2,
                        message: "cancelled"
                    };
                default:
                    return {
                        code: 2,
                        message: "invalid_argument"
                    }
            }
            if (e >= 500 && e < 600) switch (e) {
                case 501:
                    return {
                        code: 2,
                        message: "unimplemented"
                    };
                case 503:
                    return {
                        code: 2,
                        message: "unavailable"
                    };
                case 504:
                    return {
                        code: 2,
                        message: "deadline_exceeded"
                    }
            }
            return {
                code: 2,
                message: "internal_error"
            }
        }

        function od(e, t) {
            e.setAttribute("http.response.status_code", t);
            let n = oc(t);
            "unknown_error" !== n.message && e.setStatus(n)
        }

        function op(e, t, n = () => {}, r = () => {}) {
            var i;
            let o;
            try {
                o = e()
            } catch (e) {
                throw t(e), n(), e
            }
            return ev(i = o) ? to(i, e => {
                n(), r(e)
            }, e => {
                t(e), n()
            }) : (n(), r(i), i)
        }

        function of (e) {
            ea.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)
        }

        function oh(e, t) {
            if (!t ? .length) return !1;
            for (let n of t) {
                if ("string" == typeof n || n instanceof RegExp) {
                    if (e.description && eJ(e.description, n)) return ee && of (e), !0;
                    continue
                }
                let t = !!n.attributes && Object.keys(n.attributes).length > 0;
                if (!n.name && !n.op && !t) continue;
                let r = !n.name || e.description && eJ(e.description, n.name),
                    i = !n.op || e.op && eJ(e.op, n.op),
                    o = !n.attributes || Object.entries(n.attributes).every(([t, n]) => (function(e, t) {
                        return "string" == typeof e && ("string" == typeof t || t instanceof RegExp) ? eJ(e, t) : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e === t
                    })(e.attributes ? .[t], n));
                if (r && i && o) return ee && of (e), !0
            }
            return !1
        }

        function om(e) {
            return "stream" === e.getOptions().traceLifecycle
        }

        function og(e) {
            return ek(e, "_streamed", !0), e
        }

        function o_(e) {
            return !!e && "function" == typeof e && "_streamed" in e && !!e._streamed
        }

        function oy(e, t = []) {
            return [e, t]
        }

        function ov(e, t) {
            let [n, r] = e;
            return [n, [...r, t]]
        }

        function ob(e, t) {
            for (let n of e[1]) {
                let e = n[0].type;
                if (t(n, e)) return !0
            }
            return !1
        }

        function oS(e, t) {
            return ob(e, (e, n) => t.includes(n))
        }

        function ow(e) {
            let t = X(Y);
            return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
        }

        function ok(e) {
            let [t, n] = e, r = JSON.stringify(t);

            function i(e) {
                "string" == typeof r ? r = "string" == typeof e ? r + e : [ow(r), e] : r.push("string" == typeof e ? ow(e) : e)
            }
            for (let e of n) {
                let [t, n] = e;
                if (i(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) i(n);
                else {
                    let e;
                    try {
                        e = JSON.stringify(n)
                    } catch {
                        e = JSON.stringify(eB(n))
                    }
                    i(e)
                }
            }
            return "string" == typeof r ? r : function(e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                    n = 0;
                for (let r of e) t.set(r, n), n += r.length;
                return t
            }(r)
        }
        let oE = {
            sessions: "session",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile_chunk: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            raw_security: "security",
            log: "log_item",
            trace_metric: "metric"
        };

        function ox(e) {
            return e in oE ? oE[e] : e
        }

        function oC(e) {
            if (!e ? .sdk) return;
            let {
                name: t,
                version: n
            } = e.sdk;
            return {
                name: t,
                version: n
            }
        }

        function oI(e, t, n, r) {
            let i = e.sdkProcessingMetadata ? .dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: new Date(eR()).toISOString(),
                ...t && {
                    sdk: t
                },
                ...!!n && r && {
                    dsn: rO(r)
                },
                ...i && {
                    trace: i
                }
            }
        }

        function oT(e, t, n, r = ih()) {
            let i = r && id(r);
            i && (ee && ea.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), i.addEvent(e, {
                [rw]: t,
                [rS]: n
            }))
        }

        function oM(e) {
            if (!e || 0 === e.length) return;
            let t = {};
            return e.forEach(e => {
                let n = e.attributes || {},
                    r = n[rS],
                    i = n[rw];
                "string" == typeof r && "number" == typeof i && (t[e.name] = {
                    value: i,
                    unit: r
                })
            }), t
        }

        function oR() {
            return X(Q()).segmentSpanCaptureStrategy
        }
        class oA {
            constructor(e = {}) {
                this._traceId = e.traceId || eG(), this._spanId = e.spanId || e6(), this._startTime = e.startTimestamp || e1(), this._links = e.links, this._attributes = {}, this.setAttributes({
                    [rv]: "manual",
                    [ry]: e.op,
                    ...e.attributes
                }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
            }
            addLink(e) {
                return this._frozen || (this._links ? this._links.push(e) : this._links = [e]), this
            }
            addLinks(e) {
                return this._frozen || (this._links ? this._links.push(...e) : this._links = e), this
            }
            recordException(e, t) {}
            spanContext() {
                let {
                    _spanId: e,
                    _traceId: t,
                    _sampled: n
                } = this;
                return {
                    spanId: e,
                    traceId: t,
                    traceFlags: +!!n
                }
            }
            setAttribute(e, t) {
                return this._frozen || (void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, e === rm && void 0 !== t && !0 === this[rq] && ek(this, rH, !0)), this
            }
            setAttributes(e) {
                return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
            }
            updateStartTime(e) {
                this._frozen || (this._startTime = r5(e))
            }
            setStatus(e) {
                return this._frozen || (this._status = e), this
            }
            updateName(e) {
                return this._frozen || (this._name = e, !0 !== this[rq] && this.setAttribute(rm, "custom")), this
            }
            end(e) {
                if (this._endTime) {
                    this._frozen = !0 === this[rz];
                    return
                }
                this._endTime = r5(e),
                    function(e) {
                        if (!ee) return;
                        let {
                            description: t = "< unknown name >",
                            op: n = "< unknown op >"
                        } = r6(e), {
                            spanId: r
                        } = e.spanContext(), i = id(e) === e, o = `[Tracing] Finishing "${n}" ${i?"root ":""}span "${t}" with ID ${r}`;
                        ea.log(o)
                    }(this), this._onSpanEnded(), this._frozen = !0 === this[rz]
            }
            getSpanJSON() {
                return {
                    data: this._attributes,
                    description: this._name,
                    op: this._attributes[ry],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: ii(this._status),
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[rv],
                    profile_id: this._attributes[rE],
                    exclusive_time: this._attributes[rx],
                    measurements: oM(this._events),
                    is_segment: this._isStandaloneSpan && id(this) === this || void 0,
                    segment_id: this._isStandaloneSpan ? id(this).spanContext().spanId : void 0,
                    links: r2(this._links)
                }
            }
            getStreamedSpanJSON() {
                return {
                    name: this._name ? ? "",
                    span_id: this._spanId,
                    trace_id: this._traceId,
                    parent_span_id: this._parentSpanId,
                    start_timestamp: this._startTime,
                    end_timestamp: this._endTime ? ? this._startTime,
                    is_segment: this._isStandaloneSpan || this === id(this),
                    status: io(this._status),
                    attributes: is(this._attributes, this._status),
                    links: r3(this._links)
                }
            }
            isRecording() {
                return !this._endTime && !!this._sampled
            }
            addEvent(e, t, n) {
                if (this._frozen) return this;
                ee && ea.log("[Tracing] Adding an event to span:", e);
                let r = oO(t) ? t : n || e1(),
                    i = oO(t) ? {} : t || {},
                    o = {
                        name: e,
                        time: r5(r),
                        attributes: i
                    };
                return this._events.push(o), this
            }
            isStandaloneSpan() {
                return !!this._isStandaloneSpan
            }
            _onSpanEnded() {
                let e = ty();
                e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this));
                let t = id(this),
                    n = this._isStandaloneSpan || this === t;
                if (this._isStandaloneSpan) return void(this._sampled ? function(e) {
                    let t = ty();
                    if (!t) return;
                    let n = e[1];
                    n && 0 !== n.length ? t.sendEnvelope(e) : t.recordDroppedEvent("before_send", "span")
                }(function(e, t) {
                    let n = ik(e[0]),
                        r = t ? .getDsn(),
                        i = t ? .getOptions().tunnel,
                        o = {
                            sent_at: new Date(eR()).toISOString(),
                            ...!!n.trace_id && !!n.public_key && {
                                trace: n
                            },
                            ...!!i && r && {
                                dsn: rO(r)
                            }
                        },
                        {
                            beforeSendSpan: s,
                            ignoreSpans: a
                        } = t ? .getOptions() || {},
                        l = a ? .length ? e.filter(e => {
                            let t = r6(e);
                            return !oh({
                                description: t.description,
                                op: t.op,
                                attributes: t.data
                            }, a)
                        }) : e,
                        u = e.length - l.length;
                    u && t ? .recordDroppedEvent("before_send", "span", u);
                    let c = s ? e => {
                            let t = r6(e);
                            return (o_(s) ? t : s(t)) || (im(), t)
                        } : r6,
                        d = [];
                    for (let e of l) {
                        let t = c(e);
                        t && d.push([{
                            type: "span"
                        }, t])
                    }
                    return oy(o, d)
                }([this], e)) : (ee && ea.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
                if (!n) {
                    let e = oR();
                    if (e) {
                        let n = rV(this).scope || tf();
                        e.onChildSpanEnded(this, t, e => this._convertSpanToTransaction(e), n)
                    }
                    return
                }
                if (e && om(e)) return void e.emit("afterSegmentSpanEnd", this);
                let r = rV(this).scope || tf(),
                    i = oR();
                if (i) i.onSegmentSpanEnded(e => this._convertSpanToTransaction(e), r);
                else {
                    let e = this._convertSpanToTransaction();
                    e && r.captureEvent(e)
                }
            }
            _convertSpanToTransaction(e = {}) {
                if (!oP(r6(this))) return;
                this._name || (ee && ea.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
                let {
                    scope: t,
                    isolationScope: n
                } = rV(this), r = t ? .getScopeData().sdkProcessingMetadata ? .normalizedRequest;
                if (!0 !== this._sampled) return;
                e.onSpanCaptured ? .(this);
                let i = [];
                for (let t of ic(this)) {
                    if (t === this || t instanceof oA && t.isStandaloneSpan() || e.isSpanAlreadyCaptured ? .(t)) continue;
                    let n = r6(t);
                    oP(n) && (e.onSpanCaptured ? .(t), i.push(n))
                }
                let o = this._attributes[rm];
                delete this._attributes[rk];
                let s = !1;
                i.forEach(e => {
                    delete e.data[rk], e.op ? .startsWith("gen_ai.") && (s = !0)
                });
                let a = {
                        contexts: {
                            trace: function(e) {
                                let {
                                    spanId: t,
                                    traceId: n
                                } = e.spanContext(), {
                                    data: r,
                                    op: i,
                                    parent_span_id: o,
                                    status: s,
                                    origin: a,
                                    links: l
                                } = r6(e);
                                return {
                                    parent_span_id: o,
                                    span_id: t,
                                    trace_id: n,
                                    data: r,
                                    op: i,
                                    status: s,
                                    origin: a,
                                    links: l
                                }
                            }(this)
                        },
                        spans: i.length > 1e3 ? i.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : i,
                        start_timestamp: this._startTime,
                        timestamp: this._endTime,
                        transaction: this._name,
                        type: "transaction",
                        sdkProcessingMetadata: {
                            capturedSpanScope: t,
                            capturedSpanIsolationScope: n,
                            dynamicSamplingContext: ik(this),
                            hasGenAiSpans: s
                        },
                        request: r,
                        ...o && {
                            transaction_info: {
                                source: o
                            }
                        }
                    },
                    l = oM(this._events);
                return l && Object.keys(l).length && (ee && ea.log("[Measurements] Adding measurements to transaction event", JSON.stringify(l, void 0, 2)), a.measurements = l), a
            }
        }

        function oO(e) {
            return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
        }

        function oP(e) {
            return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
        }
        let oN = "__SENTRY_SUPPRESS_TRACING__";

        function oD(e, t) {
            let n = oJ();
            if (n.startSpan) return n.startSpan(e, t);
            let r = oz(e),
                {
                    forceTransaction: i,
                    parentSpan: o,
                    scope: s
                } = e;
            return tg(s ? .clone(), () => oY(o)(() => {
                let n = tf(),
                    s = oG(n, o),
                    a = ty(),
                    l = e.onlyIfParent && !s ? oq(n, a) : oH({
                        parentSpan: s,
                        spanArguments: r,
                        forceTransaction: i,
                        scope: n
                    });
                return oK(l) && s || te(n, l), op(() => t(l), () => {
                    let {
                        status: e
                    } = r6(l);
                    l.isRecording() && (!e || "ok" === e) && l.setStatus({
                        code: 2,
                        message: "internal_error"
                    })
                }, () => {
                    l.end()
                })
            }))
        }

        function oL(e, t) {
            let n = oJ();
            if (n.startSpanManual) return n.startSpanManual(e, t);
            let r = oz(e),
                {
                    forceTransaction: i,
                    parentSpan: o,
                    scope: s
                } = e;
            return tg(s ? .clone(), () => oY(o)(() => {
                let n = tf(),
                    s = oG(n, o),
                    a = e.onlyIfParent && !s ? oq(n, ty()) : oH({
                        parentSpan: s,
                        spanArguments: r,
                        forceTransaction: i,
                        scope: n
                    });
                return oK(a) && s || te(n, a), op(() => t(a, () => a.end()), () => {
                    let {
                        status: e
                    } = r6(a);
                    a.isRecording() && (!e || "ok" === e) && a.setStatus({
                        code: 2,
                        message: "internal_error"
                    })
                })
            }))
        }

        function o$(e) {
            let t = oJ();
            return t.startInactiveSpan ? t.startInactiveSpan(e) : function(e) {
                let t = oz(e),
                    {
                        forceTransaction: n,
                        parentSpan: r
                    } = e;
                return (e.scope ? t => tg(e.scope, t) : void 0 !== r ? e => oF(r, e) : e => e())(() => {
                    let i = tf(),
                        o = oG(i, r),
                        s = ty();
                    return e.onlyIfParent && !o ? oq(i, s) : oH({
                        parentSpan: o,
                        spanArguments: t,
                        forceTransaction: n,
                        scope: i
                    })
                })
            }(e)
        }
        let oj = (e, t) => {
            var n;
            let r, i = tp(Q());
            if (i.continueTrace) return i.continueTrace(e, t);
            let {
                sentryTrace: o,
                baggage: s
            } = e, a = ty(), l = rI(s);
            return a && (n = l ? .org_id, r = rD(a), n && r && n !== r ? (ea.log(`Won't continue trace because org IDs don't match (incoming baggage: ${n}, SDK options: ${r})`), 1) : a.getOptions().strictTraceContinuation && (n && !r || !n && r) && (ea.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${n}, Sentry client: ${r})`), 1)) ? oW(t) : tg(e => {
                let n = rK(o, s);
                return e.setPropagationContext(n), te(e, void 0), t()
            })
        };

        function oF(e, t) {
            let n = oJ();
            return n.withActiveSpan ? n.withActiveSpan(e, t) : tg(n => (te(n, e || void 0), t(n)))
        }

        function oB(e) {
            let t = oJ();
            return t.suppressTracing ? t.suppressTracing(e) : tg(t => {
                t.setSDKProcessingMetadata({
                    [oN]: !0
                });
                let n = e();
                return t.setSDKProcessingMetadata({
                    [oN]: void 0
                }), n
            })
        }

        function oU(e = tf()) {
            let t = oJ();
            return t.isTracingSuppressed ? t.isTracingSuppressed(e) : !0 === e.getScopeData().sdkProcessingMetadata[oN]
        }

        function oW(e) {
            let t = oJ();
            return t.startNewTrace ? t.startNewTrace(e) : tg(t => (t.setPropagationContext({
                traceId: eG(),
                sampleRand: eM()
            }), ee && ea.log(`Starting a new trace with id ${t.getPropagationContext().traceId}`), oF(null, e)))
        }

        function oq(e, t) {
            t ? .recordDroppedEvent("no_parent_span", "span");
            let n = new iy({
                traceId: e.getPropagationContext().traceId
            });
            return rJ(n, e, th()), n
        }

        function oH({
            parentSpan: e,
            spanArguments: t,
            forceTransaction: n,
            scope: r
        }) {
            let i, o, s = th();
            if (!r$()) {
                let t = r.getPropagationContext(),
                    i = new iy({
                        traceId: e ? e.spanContext().traceId : t.traceId
                    });
                return e && !n && iu(e, i), rJ(i, r, s), i
            }
            let a = ty();
            if (i = a ? .getOptions().ignoreSpans, a && om(a) && i ? .length && oh({
                    description: t.name || "",
                    op: t.attributes ? .[ry] || t.op,
                    attributes: t.attributes
                }, i)) {
                oU(r) || a ? .recordDroppedEvent("ignored", "span");
                let t = new iy({
                    dropReason: "ignored",
                    traceId: e ? .spanContext().traceId ? ? r.getPropagationContext().traceId
                });
                return e && !n && iu(e, t), rJ(t, r, s), t
            }
            if (e && !n) o = function(e, t, n, r) {
                let {
                    spanId: i,
                    traceId: o
                } = e.spanContext(), s = oU(t), a = !s && ir(e), l = a ? new oA({ ...n,
                    parentSpanId: i,
                    traceId: o,
                    sampled: a
                }) : new iy({
                    traceId: o
                });
                iu(e, l), rJ(l, t, r);
                let u = ty();
                return u && (om(u) && iv(l) && (iv(e) && e.dropReason ? (l.dropReason = e.dropReason, u.recordDroppedEvent(e.dropReason, "span")) : s || (l.dropReason = "sample_rate", u.recordDroppedEvent("sample_rate", "span"))), u.emit("spanStart", l), n.endTimestamp && (u.emit("spanEnd", l), u.emit("afterSpanEnd", l))), l
            }(e, r, t, s), iu(e, o);
            else if (e) {
                let n = ik(e),
                    {
                        traceId: i,
                        spanId: a
                    } = e.spanContext(),
                    l = ir(e);
                ek(o = oV({
                    traceId: i,
                    parentSpanId: a,
                    ...t
                }, r, s, l), ib, n)
            } else {
                let {
                    traceId: e,
                    dsc: n,
                    parentSpanId: i,
                    sampled: a
                } = r.getPropagationContext();
                o = oV({
                    traceId: e,
                    parentSpanId: i,
                    ...t
                }, r, s, a), n && ek(o, ib, n)
            }
            return ! function(e) {
                if (!ee) return;
                let {
                    description: t = "< unknown name >",
                    op: n = "< unknown op >",
                    parent_span_id: r
                } = r6(e), {
                    spanId: i
                } = e.spanContext(), o = ir(e), s = id(e), a = s === e, l = `[Tracing] Starting ${o?"sampled":"unsampled"} ${a?"root ":""}span`, u = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
                if (r && u.push(`parent ID: ${r}`), !a) {
                    let {
                        op: e,
                        description: t
                    } = r6(s);
                    u.push(`root ID: ${s.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`)
                }
                ea.log(`${l}
  ${u.join("\n  ")}`)
            }(o), o
        }

        function oz(e) {
            let t = {
                isStandalone: (e.experimental || {}).standalone,
                ...e
            };
            if (e.startTime) {
                let n = { ...t
                };
                return n.startTimestamp = r5(e.startTime), delete n.startTime, n
            }
            return t
        }

        function oJ() {
            return tp(Q())
        }

        function oV(e, t, n, r) {
            let i = ty(),
                o = i ? .getOptions() || {},
                {
                    name: s = ""
                } = e,
                a = {
                    spanAttributes: { ...e.attributes
                    },
                    spanName: s,
                    parentSampled: r
                };
            i ? .emit("beforeSampling", a, {
                decision: !1
            });
            let l = a.parentSampled ? ? r,
                u = a.spanAttributes,
                c = t.getPropagationContext(),
                d = oU(t),
                [p, f, h] = d ? [!1] : function(e, t, n) {
                    let r, i;
                    if (!r$(e)) return [!1];
                    "function" == typeof e.tracesSampler ? (r = e.tracesSampler({ ...t,
                        inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
                    }), i = !0) : void 0 !== t.parentSampled ? r = t.parentSampled : void 0 !== e.tracesSampleRate && (r = e.tracesSampleRate, i = !0);
                    let o = rG(r);
                    if (void 0 === o) return ee && ea.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [!1];
                    if (!o) return ee && ea.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, o, i];
                    let s = n < o;
                    return !s && ee && ea.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [s, o, i]
                }(o, {
                    name: s,
                    parentSampled: l,
                    attributes: u,
                    normalizedRequest: n.getScopeData().sdkProcessingMetadata.normalizedRequest,
                    parentSampleRate: rG(c.dsc ? .sample_rate)
                }, c.sampleRand),
                m = new oA({ ...e,
                    attributes: {
                        [rm]: "custom",
                        [rg]: void 0 !== f && h ? f : void 0,
                        ...u
                    },
                    sampled: p
                });
            return p || !i || d || (ee && ea.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), i.recordDroppedEvent("sample_rate", om(i) ? "span" : "transaction")), rJ(m, t, n), i && i.emit("spanStart", m), m
        }

        function oG(e, t) {
            if (t) return t;
            if (null === t) return;
            let n = tt(e);
            if (!n) return;
            let r = ty();
            return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? id(n) : n
        }

        function oY(e) {
            return void 0 !== e ? t => oF(e, t) : e => e()
        }

        function oK(e) {
            return iv(e) && "ignored" === e.dropReason
        }
        let oQ = ["addListener", "on", "once", "prependListener", "prependOnceListener", "addEventListener"],
            oX = ["removeListener", "off", "removeEventListener"],
            oZ = Symbol("SentryScopeBoundListeners");

        function o0(e, t = tf()) {
            var n;
            if (e[oZ]) return e;
            for (let n of (o2(e), oQ)) "function" == typeof e[n] && (e[n] = function(e, t, n) {
                return function(...r) {
                    let i = r[0],
                        o = r[1],
                        s = r.slice(2);
                    if (!o1(o) || void 0 !== p && (o === p || o.listener === p)) return t.apply(this, r);
                    let a = e[oZ] || o2(e),
                        l = a.get(i);
                    l || (l = new WeakMap, a.set(i, l));
                    let u = l.get(o);
                    u || (u = function(...e) {
                        return tg(n, () => o.apply(this, e))
                    }, l.set(o, u));
                    let c = p;
                    p = u;
                    try {
                        return t.call(this, i, u, ...s)
                    } finally {
                        p = c
                    }
                }
            }(e, e[n], t));
            for (let t of oX) "function" == typeof e[t] && (e[t] = function(e, t) {
                return function(...n) {
                    let r = n[0],
                        i = n[1],
                        o = n.slice(2),
                        s = o1(i) ? e[oZ] ? .get(r) ? .get(i) : void 0;
                    return s ? t.call(this, r, s, ...o) : t.apply(this, n)
                }
            }(e, e[t]));
            return "function" == typeof e.removeAllListeners && (n = e.removeAllListeners, e.removeAllListeners = function(...t) {
                let r = e[oZ];
                if (r)
                    if (0 === t.length) o2(e);
                    else {
                        let e = t[0];
                        r.delete(e)
                    }
                return n.apply(this, t)
            }), e
        }

        function o1(e) {
            return "function" == typeof e
        }

        function o2(e) {
            let t = new Map;
            return e[oZ] = t, t
        }

        function o3(e) {
            tf().setClient(e)
        }

        function o5(e) {
            return "object" == typeof e && "function" == typeof e.unref && e.unref(), e
        }
        let o4 = Symbol.for("SentryBufferFullError");

        function o6(e = 100) {
            let t = new Set;
            return {
                get $() {
                    return Array.from(t)
                },
                add: function(n) {
                    if (!(t.size < e)) return rp(o4);
                    let r = n();
                    return t.add(r), r.then(() => {
                        t.delete(r)
                    }, () => {
                        t.delete(r)
                    }), r
                },
                drain: function(e) {
                    if (!t.size) return rd(!0);
                    let n = Promise.allSettled(Array.from(t)).then(() => !0);
                    return e ? Promise.race([n, new Promise(t => o5(setTimeout(() => t(!1), e)))]) : n
                }
            }
        }

        function o8(e, t = eR()) {
            let n = parseInt(`${e}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            let r = Date.parse(`${e}`);
            return isNaN(r) ? 6e4 : r - t
        }

        function o7(e, t, n = eR()) {
            return (e[t] || e.all || 0) > n
        }

        function o9(e, {
            statusCode: t,
            headers: n
        }, r = eR()) {
            let i = { ...e
                },
                o = n ? .["x-sentry-rate-limits"],
                s = n ? .["retry-after"];
            if (o)
                for (let e of o.trim().split(",")) {
                    let [t, n, , , o] = e.split(":", 5), s = parseInt(t, 10), a = (isNaN(s) ? 60 : s) * 1e3;
                    if (n)
                        for (let e of n.split(";")) "metric_bucket" === e ? (!o || o.split(";").includes("custom")) && (i[e] = r + a) : i[e] = r + a;
                    else i.all = r + a
                } else s ? i.all = r + o8(s, r) : 429 === t && (i.all = r + 6e4);
            return i
        }

        function se(e, t, n = o6(e.bufferSize || 64)) {
            let r = {};
            return {
                send: function(i) {
                    let o = [];
                    if (ob(i, (t, n) => {
                            let i = ox(n);
                            o7(r, i) ? e.recordDroppedEvent("ratelimit_backoff", i) : o.push(t)
                        }), 0 === o.length) return Promise.resolve({});
                    let s = oy(i[0], o),
                        a = t => {
                            if (oS(s, ["client_report"])) {
                                ee && ea.warn(`Dropping client report. Will not send outcomes (reason: ${t}).`);
                                return
                            }
                            ob(s, (n, r) => {
                                e.recordDroppedEvent(t, ox(r))
                            })
                        };
                    return n.add(() => t({
                        body: ok(s)
                    }).then(e => (413 === e.statusCode ? (ee && ea.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), a("send_error")) : (ee && void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ea.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = o9(r, e)), e), e => {
                        throw a("network_error"), ee && ea.error("Encountered error running transport request:", e), e
                    })).then(e => e, e => {
                        if (e === o4) return ee && ea.error("Skipped sending event because buffer is full."), a("queue_overflow"), Promise.resolve({});
                        throw e
                    })
                },
                flush: e => n.drain(e)
            }
        }

        function st(e) {
            let t = e.protocol ? `${e.protocol}:` : "",
                n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
        }

        function sn(e, t, n) {
            let r;
            return t || `${st(e)}${e.projectId}/envelope/?${r={sentry_version:"7"},e.publicKey&&(r.sentry_key=e.publicKey),n&&(r.sentry_client=`
            $ {
                n.name
            }
            /${n.version}`),new URLSearchParams(r).toString()}`}let sr="MULTIPLEXED_TRANSPORT_EXTRA_KEY";function si(e,t){let n;return ob(e,(e,r)=>(t.includes(r)&&(n=Array.isArray(e)?e[1]:void 0),!!n)),n}function so(e,t){return n=>{let r=e(n),i=new Map,o=t||(e=>{let t=e.getEvent();return t?.extra?.[sr]&&Array.isArray(t.extra[sr])?t.extra[sr]:[]});function s(t,r){let o=r?`${t}:${r}`:t,s=i.get(o);if(!s){let a,l=rP(t);if(!l)return;let u=sn(l,n.tunnel);s=r?{...a=e({...n,url:u}),send:async e=>{let t=si(e,["event","transaction","profile","replay_event"]);return t&&(t.release=r),a.send(e)}}:e({...n,url:u}),i.set(o,s)}return[t,s]}return{send:async function(e){let t=o({envelope:e,getEvent:function(t){return si(e,t?.length?t:["event"])}}).map(e=>"string"==typeof e?s(e,void 0):s(e.dsn,e.release)).filter(e=>!!e),n=t.length?t:[["",r]];return(await Promise.all(n.map(([t,n])=>n.send(oy(t?{...e[0],dsn:t}:e[0],e[1])))))[0]},flush:async function(e){let t=[...i.values(),r];return(await Promise.all(t.map(t=>t.flush(e)))).every(e=>e)}}}}function ss(e,...t){let n=new String(String.raw(e,...t));return n.__sentry_template_string__=e.join("\0").replace(/ % /g,"%%").replace(/\
            0 / g, "%s"), n.__sentry_template_values__ = t, n
    }
    let sa = ss;

    function sl(e = {}) {
        let t = e.client || ty();
        if (!iJ() || !t) return {};
        let n = tp(Q());
        if (n.getTraceData) return n.getTraceData(e);
        let r = e.scope || tf(),
            i = e.span || ih(),
            o = iv(i) && !r$(t.getOptions());
        if (!i && void 0 !== a) return {};
        let s = i && !o ? r1(i) : function(e) {
                let {
                    traceId: t,
                    sampled: n,
                    propagationSpanId: r
                } = e.getPropagationContext();
                return rQ(t, r, n)
            }(r),
            l = rT(i ? ik(i) : iw(t, r));
        if (!rY.test(s)) return ea.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
        let u = {
            "sentry-trace": s,
            baggage: l
        };
        return e.propagateTraceparent && (u.traceparent = i && !o ? function(e) {
            let {
                traceId: t,
                spanId: n
            } = e.spanContext();
            return rX(t, n, ir(e))
        }(i) : function(e) {
            let {
                traceId: t,
                sampled: n,
                propagationSpanId: r
            } = e.getPropagationContext();
            return rX(t, r, n)
        }(r)), u
    }

    function su(e, t) {
        let n = ty(),
            r = th();
        if (!n) return;
        let {
            beforeBreadcrumb: i = null,
            maxBreadcrumbs: o = 100
        } = n.getOptions();
        if (o <= 0) return;
        let s = {
                timestamp: e0(),
                ...e
            },
            a = i ? er(() => i(s, t)) : s;
        null !== a && (n.emit && n.emit("beforeAddBreadcrumb", a, t), r.addBreadcrumb(a, o))
    }
    let sc = new WeakMap,
        sd = () => ({
            name: "FunctionToString",
            setupOnce() {
                let e = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...t) {
                        let n, r = ex(this);
                        try {
                            sc.has(ty()) && void 0 !== r && (n = r)
                        } catch {}
                        return e.apply(n ? ? this, t)
                    }
                } catch {}
            },
            setup(e) {
                sc.set(e, !0)
            }
        });

    function sp(e) {
        let t = [];
        e.message && t.push(e.message);
        try {
            let n = e.exception.values[e.exception.values.length - 1];
            n ? .value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
        } catch {}
        return t
    }
    let sf = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /Java exception was raised during method invocation$/, /Java object is gone$/],
        sh = (e = {}) => {
            let t;
            return {
                name: "EventFilters",
                setup(n) {
                    t = sg(e, n.getOptions())
                },
                processEvent: (n, r, i) => (t || (t = sg(e, i.getOptions())), ! function(e, t) {
                    if (e.type) {
                        if ("transaction" === e.type && function(e, t) {
                                if (!t ? .length) return !1;
                                let n = e.transaction;
                                return !!n && eV(n, t)
                            }(e, t.ignoreTransactions)) return ee && ea.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${eK(e)}`), !0
                    } else {
                        var n;
                        if (n = t.ignoreErrors, n ? .length && sp(e).some(e => eV(e, n))) return ee && ea.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${eK(e)}`), !0;
                        if (e.exception ? .values ? .length && !e.message && !e.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)) return ee && ea.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${eK(e)}`), !0;
                        if (function(e, t) {
                                if (!t ? .length) return !1;
                                let n = s_(e);
                                return !!n && eV(n, t)
                            }(e, t.denyUrls)) return ee && ea.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${eK(e)}.
Url: ${s_(e)}`), !0;
                        if (! function(e, t) {
                                if (!t ? .length) return !0;
                                let n = s_(e);
                                return !n || eV(n, t)
                            }(e, t.allowUrls)) return ee && ea.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${eK(e)}.
Url: ${s_(e)}`), !0
                    }
                    return !1
                }(n, t) ? n : null)
            }
        },
        sm = (e = {}) => ({ ...sh(e),
            name: "InboundFilters"
        });

    function sg(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : sf],
            ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
        }
    }

    function s_(e) {
        try {
            let t = [...e.exception ? .values ? ? []].reverse().find(e => e.mechanism ? .parent_id === void 0 && e.stacktrace ? .frames ? .length),
                n = t ? .stacktrace ? .frames;
            return n ? function(e = []) {
                for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                }
                return null
            }(n) : null
        } catch {
            return ee && ea.error(`Cannot extract url for event ${eK(e)}`), null
        }
    }
    let sy = new Map,
        sv = new Set;

    function sb(e, t) {
        t.exception ? .values ? .forEach(t => {
            t.stacktrace ? .frames ? .forEach(t => {
                if (!t.filename || t.module_metadata) return;
                let n = function(e, t) {
                    if (Y._sentryModuleMetadata)
                        for (let t of Object.keys(Y._sentryModuleMetadata)) {
                            let n = Y._sentryModuleMetadata[t];
                            if (!sv.has(t)) {
                                for (let r of (sv.add(t), e(t).reverse()))
                                    if (r.filename) {
                                        sy.set(r.filename, n);
                                        break
                                    }
                            }
                        }
                    return sy.get(t)
                }(e, t.filename);
                n && (t.module_metadata = n)
            })
        })
    }

    function sS(e) {
        e.exception ? .values ? .forEach(e => {
            e.stacktrace ? .frames ? .forEach(e => {
                delete e.module_metadata
            })
        })
    }
    let sw = () => ({
            name: "ModuleMetadata",
            setup(e) {
                e.on("beforeEnvelope", e => {
                    ob(e, (e, t) => {
                        if ("event" === t) {
                            let t = Array.isArray(e) ? e[1] : void 0;
                            t && (sS(t), e[1] = t)
                        }
                    })
                }), e.on("applyFrameMetadata", t => {
                    t.type || sb(e.getOptions().stackParser, t)
                })
            }
        }),
        sk = new Set([]);

    function sE(e) {
        let t = "console",
            n = i9(t, e);
        return oe(t, sC), n
    }
    let sx = new Set;

    function sC() {
        "console" in Y && et.forEach(function(e) {
            !sx.has(e) && e in Y.console && (sx.add(e), ew(Y.console, e, function(t) {
                return en[e] = t,
                    function(...t) {
                        let n = t[0],
                            r = en[e],
                            i = sk.size && "string" == typeof n && eV(n, sk);
                        i || ot("console", {
                            args: t,
                            level: e
                        }), (!i || ee && ea.isEnabled()) && r ? .apply(Y.console, t)
                    }
            }))
        })
    }

    function sI(e) {
        return "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log"
    }
    let sT = (e = {}) => {
            let t = e.levels || et,
                n = e.handled ? ? !0;
            return {
                name: "CaptureConsole",
                setup(e) {
                    "console" in Y && sE(({
                        args: r,
                        level: i
                    }) => {
                        let o, s, a;
                        ty() === e && t.includes(i) && (o = sI(i), s = Error(), a = {
                            level: sI(i),
                            extra: {
                                arguments: r
                            }
                        }, tg(e => {
                            if (e.addEventProcessor(e => (e.logger = "console", eX(e, {
                                    handled: n,
                                    type: "auto.core.capture_console"
                                }), e)), "assert" === i) {
                                if (!r[0]) {
                                    let t = `Assertion failed: ${ez(r.slice(1)," ")||"console.assert"}`;
                                    e.setExtra("arguments", r.slice(1)), e.captureMessage(t, o, {
                                        captureContext: a,
                                        syntheticException: s
                                    })
                                }
                                return
                            }
                            let t = r.find(e => e instanceof Error);
                            if (t) return void iR(t, a);
                            let l = ez(r, " ");
                            e.captureMessage(l, o, {
                                captureContext: a,
                                syntheticException: s
                            })
                        }))
                    })
                }
            }
        },
        sM = () => {
            let e;
            return {
                name: "Dedupe",
                processEvent(t) {
                    if (t.type) return t;
                    try {
                        var n;
                        let r, i, o, s;
                        if ((n = e) && (r = t.message, i = n.message, (r || i) && (!r || i) && (r || !i) && r === i && sA(t, n) && sR(t, n) && 1 || (o = sO(n), s = sO(t), o && s && o.type === s.type && o.value === s.value && sA(t, n) && sR(t, n)))) return ee && ea.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {}
                    return e = t
                }
            }
        };

    function sR(e, t) {
        let n = eF(e),
            r = eF(t);
        if (!n && !r) return !0;
        if (n && !r || !n && r || r.length !== n.length) return !1;
        for (let e = 0; e < r.length; e++) {
            let t = r[e],
                i = n[e];
            if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
        }
        return !0
    }

    function sA(e, t) {
        let n = e.fingerprint,
            r = t.fingerprint;
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        try {
            return n.join("") === r.join("")
        } catch {
            return !1
        }
    }

    function sO(e) {
        return e.exception ? .values ? .[0]
    }
    let sP = (e = {}) => {
            let {
                depth: t = 3,
                captureErrorCause: n = !0
            } = e;
            return {
                name: "ExtraErrorData",
                processEvent(e, r, i) {
                    let {
                        maxValueLength: o
                    } = i.getOptions();
                    return function(e, t = {}, n, r, i) {
                        if (!t.originalException || !eu(t.originalException)) return e;
                        let o = t.originalException.name || t.originalException.constructor.name,
                            s = function e(t, n, r) {
                                try {
                                    let i = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                                        o = {};
                                    for (let e of Object.keys(t)) {
                                        if (-1 !== i.indexOf(e)) continue;
                                        let n = t[e];
                                        o[e] = eu(n) || "string" == typeof n ? r ? eq(`${n}`, r) : `${n}` : n
                                    }
                                    if (n && void 0 !== t.cause && (eu(t.cause) ? o.cause = {
                                            [t.cause.name || t.cause.constructor.name]: e(t.cause, !1, r)
                                        } : o.cause = t.cause), "function" == typeof t.toJSON) {
                                        let e = t.toJSON();
                                        for (let t of Object.keys(e)) {
                                            let n = e[t];
                                            o[t] = eu(n) ? n.toString() : n
                                        }
                                    }
                                    return o
                                } catch (e) {
                                    ee && ea.error("Unable to extract extra data from the Error object:", e)
                                }
                                return null
                            }(t.originalException, r, i);
                        if (s) {
                            let t = { ...e.contexts
                                },
                                r = eB(s, n);
                            return eg(r) && (ek(r, eA, !0), t[o] = r), { ...e,
                                contexts: t
                            }
                        }
                        return e
                    }(e, r, t, n, o)
                }
            }
        },
        sN = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

    function sD(...e) {
        let t = "",
            n = !1;
        for (let r = e.length - 1; r >= -1 && !n; r--) {
            let i = r >= 0 ? e[r] : "/";
            i && (t = `${i}/${t}`, n = "/" === i.charAt(0))
        }
        return t = (function(e, t) {
            let n = 0;
            for (let t = e.length - 1; t >= 0; t--) {
                let r = e[t];
                "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
            }
            if (t)
                for (; n--;) e.unshift("..");
            return e
        })(t.split("/").filter(e => !!e), !n).join("/"), (n ? "/" : "") + t || "."
    }

    function sL(e) {
        let t = 0;
        for (; t < e.length && "" === e[t]; t++);
        let n = e.length - 1;
        for (; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1)
    }
    let s$ = (e = {}) => {
            let t = e.root,
                n = e.prefix || "app:///",
                r = "window" in Y && !!Y.window,
                i = e.iteratee || function({
                    isBrowser: e,
                    root: t,
                    prefix: n
                }) {
                    return r => {
                        if (!r.filename) return r;
                        let i = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                            o = /^\//.test(r.filename);
                        if (e) {
                            if (t) {
                                let e = r.filename;
                                0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                            }
                        } else if (i || o) {
                            let e, o, s = i ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                                a = t ? function(e, t) {
                                    e = sD(e).slice(1), t = sD(t).slice(1);
                                    let n = sL(e.split("/")),
                                        r = sL(t.split("/")),
                                        i = Math.min(n.length, r.length),
                                        o = i;
                                    for (let e = 0; e < i; e++)
                                        if (n[e] !== r[e]) {
                                            o = e;
                                            break
                                        }
                                    let s = [];
                                    for (let e = o; e < n.length; e++) s.push("..");
                                    return (s = s.concat(r.slice(o))).join("/")
                                }(t, s) : (e = s.length > 1024 ? `<truncated>${s.slice(-1024)}` : s, (o = sN.exec(e)) ? o.slice(1) : [])[2] || "";
                            r.filename = `${n}${a}`
                        }
                        return r
                    }
                }({
                    isBrowser: r,
                    root: t,
                    prefix: n
                });
            return {
                name: "RewriteFrames",
                processEvent(e) {
                    let t = e;
                    return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                        try {
                            return { ...e,
                                exception: { ...e.exception,
                                    values: e.exception.values.map(e => {
                                        var t;
                                        return { ...e,
                                            ...e.stacktrace && {
                                                stacktrace: { ...t = e.stacktrace,
                                                    frames: t ? .frames ? .map(e => i(e))
                                                }
                                            }
                                        }
                                    })
                                }
                            }
                        } catch {
                            return e
                        }
                    }(t)), t
                }
            }
        },
        sj = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"],
        sF = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"],
        sB = {
            eq: "eq",
            neq: "neq",
            gt: "gt",
            gte: "gte",
            lt: "lt",
            lte: "lte",
            like: "like",
            "like(all)": "likeAllOf",
            "like(any)": "likeAnyOf",
            ilike: "ilike",
            "ilike(all)": "ilikeAllOf",
            "ilike(any)": "ilikeAnyOf",
            is: "is",
            in: "in",
            cs: "contains",
            cd: "containedBy",
            sr: "rangeGt",
            nxl: "rangeGte",
            sl: "rangeLt",
            nxr: "rangeLte",
            adj: "rangeAdjacent",
            ov: "overlaps",
            fts: "",
            plfts: "plain",
            phfts: "phrase",
            wfts: "websearch",
            not: "not"
        },
        sU = ["select", "insert", "upsert", "update", "delete"];

    function sW(e) {
        try {
            e.__SENTRY_INSTRUMENTED__ = !0
        } catch {}
    }

    function sq(e) {
        try {
            return e.__SENTRY_INSTRUMENTED__
        } catch {
            return !1
        }
    }

    function sH(e, t) {
        return Object.keys(t).length > 0 ? t : Array.isArray(e) && e.length > 0 ? e : void 0
    }

    function sz(e, t) {
        if (!e) return;
        if ("function" == typeof e.get) return e.get(t) ? ? void 0;
        let n = t.toLowerCase(),
            r = Object.keys(e).find(e => e.toLowerCase() === n);
        return void 0 !== r ? e[r] : void 0
    }

    function sJ(e, t = !1) {
        return new Proxy(e, {
            apply: (n, r, i) => oD({
                name: `auth ${t?"(admin) ":""}${e.name}`,
                attributes: {
                    [rv]: "auto.db.supabase",
                    [ry]: "db",
                    "db.system": "postgresql",
                    "db.operation": `auth.${t?"admin.":""}${e.name}`
                }
            }, e => Reflect.apply(n, r, i).then(t => (e_(t) && "error" in t && t.error ? (e.setStatus({
                code: 2
            }), iR(t.error, {
                mechanism: {
                    handled: !1,
                    type: "auto.db.supabase.auth"
                }
            })) : e.setStatus({
                code: 1
            }), e.end(), t)).catch(t => {
                throw e.setStatus({
                    code: 2
                }), e.end(), iR(t, {
                    mechanism: {
                        handled: !1,
                        type: "auto.db.supabase.auth"
                    }
                }), t
            }).then(...i))
        })
    }
    let sV = (e, t = {}) => {
            var n;
            if (!e) {
                ee && ea.warn("Supabase integration was not installed because no Supabase client was provided.");
                return
            }
            sq((n = e.constructor === Function ? e : e.constructor).prototype.from) || (n.prototype.from = new Proxy(n.prototype.from, {
                apply(e, n, r) {
                    let i = Reflect.apply(e, n, r);
                    return function(e, t) {
                        for (let n of sU) sq(e.prototype[n]) || (e.prototype[n] = new Proxy(e.prototype[n], {
                            apply(e, r, i) {
                                let o = Reflect.apply(e, r, i),
                                    s = o.constructor;
                                return ee && ea.log(`Instrumenting ${n} operation's PostgRESTFilterBuilder`), ! function(e, t) {
                                    sq(e.prototype.then) || (e.prototype.then = new Proxy(e.prototype.then, {
                                        apply(e, n, r) {
                                            let i = function(e, t = {}) {
                                                switch (e) {
                                                    case "GET":
                                                        return "select";
                                                    case "POST":
                                                        if (sz(t, "Prefer") ? .includes("resolution=")) return "upsert";
                                                        return "insert";
                                                    case "PATCH":
                                                        return "update";
                                                    case "DELETE":
                                                        return "delete";
                                                    default:
                                                        return "<unknown-op>"
                                                }
                                            }(n.method, n.headers);
                                            if (!sU.includes(i) || !n ? .url ? .pathname || "string" != typeof n.url.pathname) return Reflect.apply(e, n, r);
                                            let o = n.url.pathname.split("/"),
                                                s = o.length > 0 ? o[o.length - 1] : "",
                                                a = [];
                                            for (let [e, t] of n.url.searchParams.entries()) a.push(function(e, t) {
                                                let n;
                                                if ("" === t || "*" === t) return "select(*)";
                                                if ("select" === e) return `select(${t})`;
                                                if ("or" === e || e.endsWith(".or")) return `${e}${t}`;
                                                let [r, ...i] = t.split(".");
                                                return n = r ? .startsWith("fts") ? "textSearch" : r ? .startsWith("plfts") ? "textSearch[plain]" : r ? .startsWith("phfts") ? "textSearch[phrase]" : r ? .startsWith("wfts") ? "textSearch[websearch]" : r && sB[r] || "filter", `${n}(${e}, ${i.join(".")})`
                                            }(e, t));
                                            let l = Object.create(null);
                                            if (eg(n.body))
                                                for (let [e, t] of Object.entries(n.body)) l[e] = t;
                                            let u = ty(),
                                                c = t.sendOperationData ? ? u ? .getDataCollectionOptions().databaseQueryData === !0,
                                                d = sH(n.body, l),
                                                p = "select" === i ? "" : `${i}${void 0!==sH(n.body,l)?"(...) ":""}`,
                                                f = c ? a.join(" ") : a.length > 0 ? "[redacted]" : "",
                                                h = [p.trimEnd(), f].filter(Boolean).join(" "),
                                                m = h ? `${h} from(${s})` : `from(${s})`,
                                                g = {
                                                    "db.table": s,
                                                    "db.schema": n.schema,
                                                    "db.url": n.url.origin,
                                                    "db.sdk": sz(n.headers, "X-Client-Info"),
                                                    "db.system": "postgresql",
                                                    "db.operation": i,
                                                    [rv]: "auto.db.supabase",
                                                    [ry]: "db"
                                                };
                                            return a.length && c && (g["db.query"] = a), void 0 !== d && c && (g["db.body"] = d), oD({
                                                name: m,
                                                attributes: g
                                            }, t => Reflect.apply(e, n, []).then(e => {
                                                if (t && (e && "object" == typeof e && "status" in e && od(t, e.status || 500), t.end()), e ? .error) {
                                                    let t = Error(e.error.message);
                                                    e.error.code && (t.code = e.error.code), e.error.details && (t.details = e.error.details);
                                                    let n = {};
                                                    a.length && c && (n.query = a), void 0 !== d && c && (n.body = d), iR(t, e => (e.addEventProcessor(e => (eX(e, {
                                                        handled: !1,
                                                        type: "auto.db.supabase.postgres"
                                                    }), e)), e.setContext("supabase", n), e))
                                                }
                                                let n = {
                                                        type: "supabase",
                                                        category: `db.${i}`,
                                                        message: m
                                                    },
                                                    r = {};
                                                return a.length && c && (r.query = a), void 0 !== d && c && (r.body = d), Object.keys(r).length && (n.data = r), su(n), e
                                            }, e => {
                                                throw t && (od(t, 500), t.end()), e
                                            }).then(...r))
                                        }
                                    }), sW(e.prototype.then))
                                }(s, t), o
                            }
                        }), sW(e.prototype[n]))
                    }(i.constructor, t), i
                }
            }), sW(n.prototype.from));
            let r = e.auth;
            if (!(!r || sq(e.auth))) {
                for (let t of sj) {
                    let n = r[t];
                    n && "function" == typeof e.auth[t] && (e.auth[t] = sJ(n))
                }
                for (let t of sF) {
                    let n = r.admin[t];
                    n && "function" == typeof e.auth.admin[t] && (e.auth.admin[t] = sJ(n, !0))
                }
                sW(e.auth)
            }
        },
        sG = e => {
            let t, n;
            return t = e.supabaseClient, n = {
                sendOperationData: e.sendOperationData
            }, {
                setupOnce() {
                    sV(t, n)
                },
                name: "Supabase"
            }
        };

    function sY(e) {
        return { ...e,
            path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
            keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
            unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
        }
    }
    let sK = (e = {}) => {
            let t = e.limit ? ? 10;
            return {
                name: "ZodErrors",
                processEvent: (n, r) => (function(e, t = !1, n, r) {
                    var i;
                    if (!n.exception ? .values || !r.originalException || !(eu(i = r.originalException) && "ZodError" === i.name && Array.isArray(i.issues)) || 0 === r.originalException.issues.length) return n;
                    try {
                        let i = (t ? r.originalException.issues : r.originalException.issues.slice(0, e)).map(sY);
                        return t && (Array.isArray(r.attachments) || (r.attachments = []), r.attachments.push({
                            filename: "zod_issues.json",
                            data: JSON.stringify({
                                issues: i
                            })
                        })), { ...n,
                            exception: { ...n.exception,
                                values: [{ ...n.exception.values[0],
                                    value: function(e) {
                                        let t = new Set;
                                        for (let n of e.issues) {
                                            let e = n.path.map(e => "number" == typeof e ? "<array>" : e).join(".");
                                            e.length > 0 && t.add(e)
                                        }
                                        let n = Array.from(t);
                                        if (0 === n.length) {
                                            let t = "variable";
                                            if (e.issues.length > 0) {
                                                let n = e.issues[0];
                                                void 0 !== n && "expected" in n && "string" == typeof n.expected && (t = n.expected)
                                            }
                                            return `Failed to validate ${t}`
                                        }
                                        return `Failed to validate keys: ${eq(n.join(", "),100)}`
                                    }(r.originalException)
                                }, ...n.exception.values.slice(1)]
                            },
                            extra: { ...n.extra,
                                "zoderror.issues": i.slice(0, e)
                            }
                        }
                    } catch (e) {
                        return { ...n,
                            extra: { ...n.extra,
                                "zoderrors sentry integration parse error": {
                                    message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                                    error: e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : "unknown"
                                }
                            }
                        }
                    }
                })(t, e.saveZodIssuesAsAttachment, n, r)
            }
        },
        sQ = e => ({
            name: "ThirdPartyErrorsFilter",
            setup(e) {
                e.on("beforeEnvelope", e => {
                    ob(e, (e, t) => {
                        if ("event" === t) {
                            let t = Array.isArray(e) ? e[1] : void 0;
                            t && (sS(t), e[1] = t)
                        }
                    })
                }), e.on("applyFrameMetadata", t => {
                    t.type || sb(e.getOptions().stackParser, t)
                })
            },
            preprocessEvent(t) {
                e.ignoreSentryInternalFrames && (Y._sentryWrappedDepth ? ? 0) > 0 && (t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata,
                    insideSentryWrapped: !0
                })
            },
            processEvent(t) {
                let n = !!e.ignoreSentryInternalFrames && t.sdkProcessingMetadata ? .insideSentryWrapped === !0 && t.exception ? .values ? .length === 1,
                    r = function(e, t, n) {
                        let r = eF(e);
                        if (r) return r.filter((e, r) => !!e.filename && (null != e.lineno || null != e.colno || null != e.instruction_addr) && (!t || ! function(e, t, n) {
                            var r;
                            if (0 !== t) return !1;
                            if (n && !(r = e).context_line && !r.pre_context && r.function && r.function.length <= 2 || "sentryWrapped" === e.function) return !0;
                            if (!e.context_line || !e.filename || !e.filename.includes("sentry") || !e.filename.includes("helpers") || !e.context_line.includes(s0)) return !1;
                            if (e.pre_context) {
                                let t = e.pre_context.length;
                                for (let n = 0; n < t; n++)
                                    if (e.pre_context[n] ? .includes(sZ)) return !0
                            }
                            return !1
                        }(e, r, !!n))).map(e => e.module_metadata ? Object.keys(e.module_metadata).filter(e => e.startsWith(sX)).map(e => e.slice(sX.length)) : [])
                    }(t, e.ignoreSentryInternalFrames, n);
                if (r && r["drop-error-if-contains-third-party-frames" === e.behaviour || "apply-tag-if-contains-third-party-frames" === e.behaviour ? "some" : "every"](t => !t.some(t => e.filterKeys.includes(t)))) {
                    if ("drop-error-if-contains-third-party-frames" === e.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour) return null;
                    t.tags = { ...t.tags,
                        third_party_code: !0
                    }
                }
                return t
            }
        }),
        sX = "_sentryBundlerPluginAppKey:",
        sZ = "Attempt to invoke user-land function",
        s0 = "fn.apply(this, wrappedArguments)",
        s1 = "flag.evaluation.";

    function s2(e) {
        if (e.type) return e;
        let t = tf().getScopeData().contexts.flags,
            n = t ? t.values : [];
        return n.length && (void 0 === e.contexts && (e.contexts = {}), e.contexts.flags = {
            values: [...n]
        }), e
    }

    function s3(e, t, n = 100) {
        let r = tf().getScopeData().contexts;
        r.flags || (r.flags = {
                values: []
            }),
            function(e, t, n, r) {
                if ("boolean" != typeof n) return;
                if (e.length > r) {
                    ee && ea.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`);
                    return
                }
                let i = e.findIndex(e => e.flag === t); - 1 !== i && e.splice(i, 1), e.length === r && e.shift(), e.push({
                    flag: t,
                    result: n
                })
            }(r.flags.values, e, t, n)
    }

    function s5(e, t, n = 10) {
        if ("boolean" != typeof t) return;
        let r = ih();
        if (!r) return;
        let i = r6(r).data;
        `${s1}${e}` in i ? r.setAttribute(`${s1}${e}`, t) : Object.keys(i).filter(e => e.startsWith(s1)).length < n && r.setAttribute(`${s1}${e}`, t)
    }
    let s4 = () => ({
            name: "FeatureFlags",
            processEvent: (e, t, n) => s2(e),
            addFeatureFlag(e, t) {
                s3(e, t), s5(e, t)
            }
        }),
        s6 = 0;

    function s8(e) {
        let t = Math.floor(1e3 * e);
        void 0 !== f && t !== f && (s6 = 0);
        let n = s6;
        return s6++, f = t, {
            key: "sentry.timestamp.sequence",
            value: {
                value: n,
                type: "integer"
            }
        }
    }

    function s7(e, t) {
        return t ? tg(t, () => {
            let n = ih(),
                r = n ? r0(n) : tv(t);
            return [n ? ik(n) : iw(e, t), r]
        }) : [void 0, void 0]
    }
    let s9 = {
        trace: 1,
        debug: 5,
        info: 9,
        warn: 13,
        error: 17,
        fatal: 21
    };

    function ae(e, t, n, r = !0) {
        n && (!e[t] || r) && (e[t] = n)
    }

    function at(e, t) {
        let n = ai(),
            r = ai().get(e);
        void 0 === r ? n.set(e, [t]) : r.length >= 100 ? (ar(e, r), n.set(e, [t])) : n.set(e, [...r, t])
    }

    function an(e, t = tf(), n = at) {
        let r = t ? .getClient() ? ? ty();
        if (!r) {
            ee && ea.warn("No client available to capture log.");
            return
        }
        let {
            release: i,
            environment: o,
            enableLogs: s = !0,
            beforeSendLog: a
        } = r.getOptions();
        if (!s) {
            ee && ea.warn("logging option not enabled, log will not be captured.");
            return
        }
        let [, l] = s7(r, t), u = { ...e.attributes
        }, {
            user: {
                id: c,
                email: d,
                username: p
            },
            attributes: f = {}
        } = iI(th(), t);
        ae(u, "user.id", c, !1), ae(u, "user.email", d, !1), ae(u, "user.name", p, !1), ae(u, "sentry.release", i), ae(u, "sentry.environment", o);
        let {
            name: h,
            version: m
        } = r.getSdkMetadata() ? .sdk ? ? {};
        ae(u, "sentry.sdk.name", h), ae(u, "sentry.sdk.version", m);
        let g = r.getIntegrationByName("Replay"),
            _ = g ? .getReplayId(!0);
        ae(u, "sentry.replay_id", _), _ && g ? .getRecordingMode() === "buffer" && ae(u, "sentry._internal.replay_is_buffering", !0);
        let y = e.message;
        if (eh(y)) {
            let {
                __sentry_template_string__: e,
                __sentry_template_values__: t = []
            } = y;
            t ? .length && (u["sentry.message.template"] = e), t.forEach((e, t) => {
                u[`sentry.message.parameter.${t}`] = e
            })
        }
        let v = tt(t);
        ae(u, "sentry.trace.parent_span_id", v ? .spanContext().spanId);
        let b = { ...e,
            attributes: u
        };
        r.emit("beforeCaptureLog", b);
        let S = a ? er(() => a(b)) : b;
        if (!S) {
            r.recordDroppedEvent("before_send", "log_item", 1), ee && ea.warn("beforeSendLog returned null, log will not be captured.");
            return
        }
        let {
            level: w,
            message: k,
            attributes: E = {},
            severityNumber: x
        } = S, C = e1(), I = s8(C);
        n(r, {
            timestamp: C,
            level: w,
            body: ao(String(k)),
            trace_id: l ? .trace_id,
            severity_number: x ? ? s9[w],
            attributes: function(e) {
                let t = {};
                for (let [n, r] of Object.entries(e)) {
                    let e = ao(n);
                    "string" === r.type ? t[e] = { ...r,
                        value: ao(r.value)
                    } : t[e] = r
                }
                return t
            }({ ...rj(f),
                ...rj(E, !0),
                [I.key]: I.value
            })
        }), r.emit("afterCaptureLog", S)
    }

    function ar(e, t) {
        var n, r, i, o;
        let s, a, l = t ? ? ai().get(e) ? ? [];
        if (0 === l.length) return;
        let u = e.getOptions(),
            c = (n = u._metadata, r = u.tunnel, i = e.getDsn(), o = e.getDataCollectionOptions().userInfo, s = {}, n ? .sdk && (s.sdk = {
                name: n.sdk.name,
                version: n.sdk.version
            }), r && i && (s.dsn = rO(i)), oy(s, [(a = o ? "auto" : "never", [{
                type: "log",
                item_count: l.length,
                content_type: "application/vnd.sentry.items.log+json"
            }, {
                version: 2,
                ...tI() && {
                    ingest_settings: {
                        infer_ip: a,
                        infer_user_agent: a
                    }
                },
                items: l
            }])]));
        ai().set(e, []), e.emit("flushLogs"), e.sendEnvelope(c)
    }

    function ai() {
        return Z("clientToLogBufferMap", () => new WeakMap)
    }

    function ao(e) {
        let t = Object(e),
            n = t.isWellFormed,
            r = t.toWellFormed;
        return "function" == typeof n && "function" == typeof r ? n.call(e) ? e : r.call(e) : e
    }

    function as(e, t, n, r, i) {
        an({
            level: e,
            message: t,
            attributes: n,
            severityNumber: i
        }, r)
    }

    function aa(e, t, {
        scope: n
    } = {}) {
        as("trace", e, t, n)
    }

    function al(e, t, {
        scope: n
    } = {}) {
        as("debug", e, t, n)
    }

    function au(e, t, {
        scope: n
    } = {}) {
        as("info", e, t, n)
    }

    function ac(e, t, {
        scope: n
    } = {}) {
        as("warn", e, t, n)
    }

    function ad(e, t, {
        scope: n
    } = {}) {
        as("error", e, t, n)
    }

    function ap(e, t, {
        scope: n
    } = {}) {
        as("fatal", e, t, n)
    }

    function af(e, t, n) {
        return "util" in Y && "function" == typeof Y.util.format ? Y.util.format(...e) : e.map(e => em(e) ? String(e) : JSON.stringify(eB(e, t, n))).join(" ")
    }

    function ah(e) {
        return /%[sdifocO]/.test(e)
    }

    function am(e, t) {
        let n = {},
            r = Array(t.length).fill("{}").join(" ");
        return n["sentry.message.template"] = `${e} ${r}`, t.forEach((e, t) => {
            n[`sentry.message.parameter.${t}`] = e
        }), n
    }
    let ag = {
            [rv]: "auto.log.console"
        },
        a_ = (e = {}) => {
            let t = e.levels || et;
            return {
                name: "ConsoleLogs",
                setup(e) {
                    let {
                        enableLogs: n,
                        normalizeDepth: r = 3,
                        normalizeMaxBreadth: i = 1e3
                    } = e.getOptions();
                    if (!n) {
                        ee && ea.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
                        return
                    }
                    let o = sE(({
                        args: n,
                        level: o
                    }) => {
                        if (ty() !== e || !t.includes(o)) return;
                        let s = n[0],
                            a = n.slice(1);
                        if ("assert" === o) {
                            s || an({
                                level: "error",
                                message: a.length > 0 ? `Assertion failed: ${af(a,r,i)}` : "Assertion failed",
                                attributes: ag
                            });
                            return
                        }
                        let l = "log" === o,
                            u = { ...ag
                            };
                        if (eg(s)) {
                            Object.assign(u, eB(s, r, i));
                            let e = "string" == typeof n[1] ? 2 : 1;
                            n.slice(e).forEach((e, t) => {
                                u[`sentry.message.parameter.${t}`] = eB(e, r, i)
                            })
                        } else if (a.length > 0 && "string" == typeof s && !ah(s))
                            for (let [e, t] of Object.entries(am(s, a))) u[e] = e.startsWith("sentry.message.parameter.") ? eB(t, r, i) : t;
                        an({
                            level: l ? "info" : o,
                            message: af(n, r, i),
                            severityNumber: l ? 10 : void 0,
                            attributes: u
                        })
                    });
                    e.registerCleanup(o)
                }
            }
        };

    function ay(e, t, n, r = !0) {
        !n || !r && t in e || (e[t] = n)
    }

    function av(e, t) {
        let n = aS(),
            r = aS().get(e);
        void 0 === r ? n.set(e, [t]) : r.length >= 1e3 ? (ab(e, r), n.set(e, [t])) : n.set(e, [...r, t])
    }

    function ab(e, t) {
        var n, r, i, o;
        let s, a, l = t ? ? aS().get(e) ? ? [];
        if (0 === l.length) return;
        let u = e.getOptions(),
            c = (n = u._metadata, r = u.tunnel, i = e.getDsn(), o = e.getDataCollectionOptions().userInfo, s = {}, n ? .sdk && (s.sdk = {
                name: n.sdk.name,
                version: n.sdk.version
            }), r && i && (s.dsn = rO(i)), oy(s, [(a = o ? "auto" : "never", [{
                type: "trace_metric",
                item_count: l.length,
                content_type: "application/vnd.sentry.items.trace-metric+json"
            }, {
                version: 2,
                ...tI() && {
                    ingest_settings: {
                        infer_ip: a,
                        infer_user_agent: a
                    }
                },
                items: l
            }])]));
        aS().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(c)
    }

    function aS() {
        return Z("clientToMetricBufferMap", () => new WeakMap)
    }

    function aw(e, t, n, r) {
        ! function(e, t) {
            let n = t ? .scope ? ? tf(),
                r = t ? .captureSerializedMetric ? ? av,
                i = n ? .getClient() ? ? ty();
            if (!i) {
                ee && ea.warn("No client available to capture metric.");
                return
            }
            let {
                _experiments: o,
                enableMetrics: s,
                beforeSendMetric: a
            } = i.getOptions();
            if (!(s ? ? o ? .enableMetrics ? ? !0)) {
                ee && ea.warn("metrics option not enabled, metric will not be captured.");
                return
            }
            let {
                user: l,
                attributes: u
            } = iI(th(), n), c = function(e, t, n) {
                let {
                    release: r,
                    environment: i
                } = t.getOptions(), o = { ...e.attributes
                };
                ay(o, "user.id", n.id, !1), ay(o, "user.email", n.email, !1), ay(o, "user.name", n.username, !1), ay(o, "sentry.release", r), ay(o, "sentry.environment", i);
                let {
                    name: s,
                    version: a
                } = t.getSdkMetadata() ? .sdk ? ? {};
                ay(o, "sentry.sdk.name", s), ay(o, "sentry.sdk.version", a);
                let l = t.getIntegrationByName("Replay"),
                    u = l ? .getReplayId(!0);
                return ay(o, "sentry.replay_id", u), u && l ? .getRecordingMode() === "buffer" && ay(o, "sentry._internal.replay_is_buffering", !0), { ...e,
                    attributes: o
                }
            }(e, i, l);
            i.emit("processMetric", c);
            let d = a || o ? .beforeSendMetric,
                p = d ? d(c) : c;
            if (!p) {
                ee && ea.log("`beforeSendMetric` returned `null`, will not send metric.");
                return
            }
            let f = function(e, t, n, r) {
                let [, i] = s7(t, n), o = tt(n), s = o ? o.spanContext().traceId : i ? .trace_id, a = o ? o.spanContext().spanId : void 0, l = e1(), u = s8(l);
                return {
                    timestamp: l,
                    trace_id: s ? ? "",
                    span_id: a,
                    name: e.name,
                    type: e.type,
                    unit: e.unit,
                    value: e.value,
                    attributes: { ...rj(r),
                        ...rj(e.attributes, "skip-undefined"),
                        [u.key]: u.value
                    }
                }
            }(p, i, n, u);
            ee && ea.log("[Metric]", f), r(i, f), i.emit("afterCaptureMetric", p)
        }({
            type: e,
            name: t,
            value: n,
            unit: r ? .unit,
            attributes: r ? .attributes
        }, {
            scope: r ? .scope
        })
    }

    function ak(e, t = 1, n) {
        aw("counter", e, t, n)
    }

    function aE(e, t, n) {
        aw("gauge", e, t, n)
    }

    function ax(e, t, n) {
        aw("distribution", e, t, n)
    }
    let aC = ["trace", "debug", "info", "warn", "error", "fatal"];

    function aI(e = {}) {
        let t = new Set(e.levels ? ? aC),
            n = e.client;
        return {
            log(e) {
                let {
                    type: r,
                    level: i,
                    message: o,
                    args: s,
                    tag: a,
                    date: l,
                    ...u
                } = e, c = n || ty();
                if (!c) return;
                let d = function(e, t) {
                    if ("verbose" === e) return "debug";
                    if ("silent" === e) return "trace";
                    if (e) {
                        let t = aT[e];
                        if (t) return t
                    }
                    if ("number" == typeof t) {
                        let e = aM[t];
                        if (e) return e
                    }
                    return "info"
                }(r, i);
                if (!t.has(d)) return;
                let {
                    normalizeDepth: p = 3,
                    normalizeMaxBreadth: f = 1e3
                } = c.getOptions(), h = {};
                for (let [e, t] of Object.entries(u)) h[e] = eB(t, p, f);
                h["sentry.origin"] = "auto.log.consola", a && (h["consola.tag"] = a), r && (h["consola.type"] = r), null != i && "number" == typeof i && (h["consola.level"] = i);
                let m = function(e, t, n) {
                    let {
                        message: r,
                        attributes: i,
                        messageTemplate: o,
                        messageParameters: s
                    } = e, a = {};
                    if (o && s)
                        for (let [e, r] of Object.entries(am(o, s))) a[e] = e.startsWith("sentry.message.parameter.") ? eB(r, t, n) : r;
                    else s && s.length > 0 && s.forEach((e, r) => {
                        a[`sentry.message.parameter.${r}`] = eB(e, t, n)
                    });
                    return {
                        message: r,
                        attributes: { ...eB(i, t, n),
                            ...a
                        }
                    }
                }(function(e, t, n) {
                    if (!e ? .length) return {
                        message: ""
                    };
                    let r = af(e, t, n),
                        i = e[0];
                    if (eg(i)) {
                        let t = "string" == typeof e[1] ? 2 : 1;
                        return {
                            message: r,
                            attributes: i,
                            messageParameters: e.slice(t)
                        }
                    } {
                        let t = e.slice(1),
                            n = t.length > 0 && "string" == typeof i && !ah(i);
                        return {
                            message: r,
                            messageTemplate: n ? i : void 0,
                            messageParameters: n ? t : void 0
                        }
                    }
                }(s, p, f), p, f);
                m ? .attributes && Object.assign(h, m.attributes), an({
                    level: d,
                    message: m ? .message || o || s && af(s, p, f) || "",
                    attributes: h
                })
            }
        }
    }
    let aT = {
            silent: "trace",
            fatal: "fatal",
            error: "error",
            warn: "warn",
            log: "info",
            info: "info",
            success: "info",
            fail: "error",
            ready: "info",
            start: "info",
            box: "info",
            debug: "debug",
            trace: "trace",
            verbose: "debug",
            critical: "fatal",
            notice: "info"
        },
        aM = {
            0: "fatal",
            1: "warn",
            2: "info",
            3: "info",
            4: "debug",
            5: "trace"
        },
        aR = "gen_ai.system",
        aA = "gen_ai.request.model",
        aO = "gen_ai.request.stream",
        aP = "gen_ai.request.temperature",
        aN = "gen_ai.request.max_tokens",
        aD = "gen_ai.request.frequency_penalty",
        aL = "gen_ai.request.presence_penalty",
        a$ = "gen_ai.request.top_p",
        aj = "gen_ai.request.top_k",
        aF = "gen_ai.request.encoding_format",
        aB = "gen_ai.request.dimensions",
        aU = "gen_ai.response.finish_reasons",
        aW = "gen_ai.response.model",
        aq = "gen_ai.response.id",
        aH = "gen_ai.usage.input_tokens",
        az = "gen_ai.usage.output_tokens",
        aJ = "gen_ai.usage.total_tokens",
        aV = "gen_ai.operation.name",
        aG = "sentry.sdk_meta.gen_ai.input.messages.original_length",
        aY = "gen_ai.input.messages",
        aK = "gen_ai.system_instructions",
        aQ = "gen_ai.response.text",
        aX = "gen_ai.request.available_tools",
        aZ = "gen_ai.response.tool_calls",
        a0 = "gen_ai.agent.name",
        a1 = "gen_ai.conversation.id",
        a2 = "gen_ai.embeddings.input",
        a3 = "gen_ai.embeddings",
        a5 = "gen_ai.execute_tool",
        a4 = "gen_ai.tool.name",
        a6 = "gen_ai.tool.input",
        a8 = "gen_ai.tool.output";

    function a7(e) {
        return !!e && "object" == typeof e && ("type" in e && "string" == typeof e.type && "source" in e && a7(e.source) || le(e) || "image_url" in e && ("string" == typeof e.image_url ? e.image_url.startsWith("data:") : a9(e)) || lt(e) || ln(e) || "media_type" in e && "string" == typeof e.media_type && "data" in e || "type" in e && "file" === e.type && "mediaType" in e && "string" == typeof e.mediaType && "data" in e && "string" == typeof e.data && !e.data.startsWith("http://") && !e.data.startsWith("https://") || "type" in e && "image" === e.type && "image" in e && "string" == typeof e.image && !e.image.startsWith("http://") && !e.image.startsWith("https://") || "type" in e && ("blob" === e.type || "base64" === e.type) || "b64_json" in e || "type" in e && "result" in e && "image_generation" === e.type || "uri" in e && "string" == typeof e.uri && e.uri.startsWith("data:"))
    }

    function a9(e) {
        return "image_url" in e && !!e.image_url && "object" == typeof e.image_url && "url" in e.image_url && "string" == typeof e.image_url.url && e.image_url.url.startsWith("data:")
    }

    function le(e) {
        return "inlineData" in e && !!e.inlineData && "object" == typeof e.inlineData && "data" in e.inlineData && "string" == typeof e.inlineData.data
    }

    function lt(e) {
        return "type" in e && "input_audio" === e.type && "input_audio" in e && !!e.input_audio && "object" == typeof e.input_audio && "data" in e.input_audio && "string" == typeof e.input_audio.data
    }

    function ln(e) {
        return "type" in e && "file" === e.type && "file" in e && !!e.file && "object" == typeof e.file && "file_data" in e.file && "string" == typeof e.file.file_data
    }
    let lr = "[Blob substitute]",
        li = ["image_url", "data", "content", "b64_json", "result", "uri", "image"];

    function lo(e) {
        let t = { ...e
        };
        for (let n of (a7(t.source) && (t.source = lo(t.source)), le(e) && (t.inlineData = { ...e.inlineData,
                data: lr
            }), a9(e) && (t.image_url = { ...e.image_url,
                url: lr
            }), lt(e) && (t.input_audio = { ...e.input_audio,
                data: lr
            }), ln(e) && (t.file = { ...e.file,
                file_data: lr
            }), li)) "string" == typeof t[n] && (t[n] = lr);
        return t
    }
    let ls = e => new TextEncoder().encode(e).length,
        la = e => ls(JSON.stringify(e));

    function ll(e, t) {
        if (ls(e) <= t) return e;
        let n = 0,
            r = e.length,
            i = "";
        for (; n <= r;) {
            let o = Math.floor((n + r) / 2),
                s = e.slice(0, o);
            ls(s) <= t ? (i = s, n = o + 1) : r = o - 1
        }
        return i
    }

    function lu(e, t) {
        return "string" == typeof e ? t : { ...e,
            text: t
        }
    }

    function lc(e) {
        return null !== e && "object" == typeof e && "content" in e && Array.isArray(e.content)
    }

    function ld(e) {
        return null !== e && "object" == typeof e && "parts" in e && Array.isArray(e.parts) && e.parts.length > 0
    }

    function lp(e) {
        let t = ty() ? .getDataCollectionOptions().genAI;
        return { ...e,
            recordInputs: e ? .recordInputs ? ? t ? .inputs ? ? !1,
            recordOutputs: e ? .recordOutputs ? ? t ? .outputs ? ? !1
        }
    }

    function lf(e) {
        if (void 0 !== e) return e;
        let t = ty();
        return !t || !om(t) && !1 === t.getOptions().streamGenAiSpans
    }

    function lh(e, t) {
        return e ? `${e}.${t}` : t
    }

    function lm(e, t, n) {
        if (!e.isRecording()) return;
        let r = {
            "gen_ai.response.streaming": !0
        };
        t.responseId && (r[aq] = t.responseId), t.responseModel && (r[aW] = t.responseModel), void 0 !== t.promptTokens && (r[aH] = t.promptTokens), void 0 !== t.completionTokens && (r[az] = t.completionTokens), void 0 !== t.totalTokens ? r[aJ] = t.totalTokens : (void 0 !== t.promptTokens || void 0 !== t.completionTokens || void 0 !== t.cacheCreationInputTokens || void 0 !== t.cacheReadInputTokens) && (r[aJ] = (t.promptTokens ? ? 0) + (t.completionTokens ? ? 0) + (t.cacheCreationInputTokens ? ? 0) + (t.cacheReadInputTokens ? ? 0)), t.finishReasons.length && (r[aU] = JSON.stringify(t.finishReasons)), n && t.responseTexts.length && (r[aQ] = t.responseTexts.join("")), n && t.toolCalls.length && (r[aZ] = JSON.stringify(t.toolCalls)), e.setAttributes(r), e.end()
    }

    function lg(e) {
        if ("string" == typeof e) return ll(e, 2e4);
        try {
            return JSON.stringify(Array.isArray(e) ? function(e) {
                if (!Array.isArray(e) || 0 === e.length) return e;
                let t = function e(t) {
                        return t.map(t => {
                            let n;
                            return t && "object" == typeof t && (lc(t) ? n = { ...t,
                                content: e(t.content)
                            } : "content" in t && a7(t.content) && (n = { ...t,
                                content: lo(t.content)
                            }), ld(t) && (n = { ...n ? ? t,
                                parts : e(t.parts)
                            }), a7(n) ? n = lo(n) : a7(t) && (n = lo(t))), n ? ? t
                        })
                    }([e[e.length - 1]]),
                    n = t[0];
                return 19998 >= la(n) ? t : function(e) {
                    if (!e) return [];
                    if ("string" == typeof e) {
                        let t = ll(e, 19998);
                        return t ? [t] : []
                    }
                    if ("object" != typeof e) return [];
                    if (null !== e && "object" == typeof e && "content" in e && "string" == typeof e.content) {
                        let t = 19998 - la({ ...e,
                            content: ""
                        });
                        if (t <= 0) return [];
                        let n = ll(e.content, t);
                        return [{ ...e,
                            content: n
                        }]
                    }
                    return lc(e) || ld(e) ? function(e) {
                        let {
                            key: t,
                            items: n
                        } = "parts" in e && Array.isArray(e.parts) ? {
                            key: "parts",
                            items: e.parts
                        } : "content" in e && Array.isArray(e.content) ? {
                            key: "content",
                            items: e.content
                        } : {
                            key: null,
                            items: []
                        };
                        if (null === t || 0 === n.length) return [];
                        let r = n.map(e => lu(e, "")),
                            i = 19998 - la({ ...e,
                                [t]: r
                            });
                        if (i <= 0) return [];
                        let o = [];
                        for (let e of n) {
                            let t = "string" == typeof e ? e : "text" in e && "string" == typeof e.text ? e.text : "",
                                n = ls(t);
                            if (n <= i) o.push(e), i -= n;
                            else if (0 === o.length) {
                                let n = ll(t, i);
                                n && o.push(lu(e, n));
                                break
                            } else break
                        }
                        return o.length <= 0 ? [] : [{ ...e,
                            [t]: o
                        }]
                    }(e) : []
                }(n)
            }(e) : e)
        } catch {
            return "[unserializable]"
        }
    }

    function l_(e) {
        if (!Array.isArray(e)) return {
            systemInstructions: void 0,
            filteredMessages: e
        };
        let t = e.findIndex(e => e && "object" == typeof e && "role" in e && "system" === e.role);
        if (-1 === t) return {
            systemInstructions: void 0,
            filteredMessages: e
        };
        let n = e[t],
            r = "string" == typeof n.content ? n.content : void 0 !== n.content ? JSON.stringify(n.content) : void 0;
        return r ? {
            systemInstructions: JSON.stringify([{
                type: "text",
                content: r
            }]),
            filteredMessages: [...e.slice(0, t), ...e.slice(t + 1)]
        } : {
            systemInstructions: void 0,
            filteredMessages: e
        }
    }

    function ly(e, t) {
        return ev(e) ? new Proxy(e, {
            get(e, n) {
                let r = n in Promise.prototype || n === Symbol.toStringTag ? t : e,
                    i = Reflect.get(r, n);
                return "withResponse" === n && "function" == typeof i ? function() {
                    return async function(e, t) {
                        let [n, r] = await Promise.all([t, e]);
                        return r && "object" == typeof r && "data" in r ? { ...r,
                            data: n
                        } : n
                    }(i.call(e), t)
                } : "function" == typeof i ? i.bind(r) : i
            }
        }) : t
    }
    let lv = {
            "responses.create": {
                operation: "chat"
            },
            "chat.completions.create": {
                operation: "chat"
            },
            "embeddings.create": {
                operation: "embeddings"
            },
            "conversations.create": {
                operation: "chat"
            }
        },
        lb = ["response.created", "response.in_progress", "response.failed", "response.completed", "response.incomplete", "response.queued", "response.output_text.delta", "response.output_item.added", "response.function_call_arguments.delta", "response.function_call_arguments.done", "response.output_item.done"];

    function lS(e, t, n, r) {
        if ("embeddings" === n && "input" in t) {
            let n = t.input;
            if (null == n || "string" == typeof n && 0 === n.length || Array.isArray(n) && 0 === n.length) return;
            e.setAttribute(a2, "string" == typeof n ? n : JSON.stringify(n));
            return
        }
        let i = "input" in t ? t.input : "messages" in t ? t.messages : void 0;
        if (!i || Array.isArray(i) && 0 === i.length) return;
        let {
            systemInstructions: o,
            filteredMessages: s
        } = l_(i);
        o && e.setAttribute(aK, o), e.setAttribute(aY, r ? lg(s) : eW(s)), Array.isArray(s) ? e.setAttribute(aG, s.length) : e.setAttribute(aG, 1)
    }

    function lw(e, t) {
        return function e(t, n = "", r) {
            return new Proxy(t, {
                get(t, i) {
                    let o = t[i],
                        s = lh(n, String(i)),
                        a = lv[s];
                    return "function" == typeof o && a ? function(...e) {
                        let n, i = a.operation || "unknown",
                            s = function(e, t) {
                                let n = {
                                    [aR]: "openai",
                                    [aV]: t,
                                    [rv]: "auto.ai.openai"
                                };
                                if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
                                    let t, r, i = e[0],
                                        o = function(e) {
                                            let t = Array.isArray(e.tools) ? e.tools : [],
                                                n = e.web_search_options && "object" == typeof e.web_search_options ? [{
                                                    type: "web_search_options",
                                                    ...e.web_search_options
                                                }] : [],
                                                r = [...t, ...n];
                                            if (0 !== r.length) try {
                                                return JSON.stringify(r)
                                            } catch (e) {
                                                ee && ea.error("Failed to serialize OpenAI tools:", e);
                                                return
                                            }
                                        }(i);
                                    o && (n[aX] = o), Object.assign(n, (t = {
                                        [aA]: i.model ? ? "unknown"
                                    }, "temperature" in i && (t[aP] = i.temperature), "top_p" in i && (t[a$] = i.top_p), "frequency_penalty" in i && (t[aD] = i.frequency_penalty), "presence_penalty" in i && (t[aL] = i.presence_penalty), "stream" in i && (t[aO] = i.stream), "encoding_format" in i && (t[aF] = i.encoding_format), "dimensions" in i && (t[aB] = i.dimensions), (r = "conversation" in i && "string" == typeof i.conversation ? i.conversation : "previous_response_id" in i && "string" == typeof i.previous_response_id ? i.previous_response_id : void 0) && (t[a1] = r), t))
                                } else n[aA] = "unknown";
                                return n
                            }(e, i),
                            l = s[aA] || "unknown",
                            u = e[0],
                            c = u && "object" == typeof u && !0 === u.stream,
                            d = {
                                name: `${i} ${l}`,
                                op: `gen_ai.${i}`,
                                attributes: s
                            };
                        if (c) {
                            let n, s = oL(d, s => (n = o.apply(t, e), r.recordInputs && u && lS(s, u, i, lf(r.enableTruncation)), (async () => {
                                try {
                                    let e = await n;
                                    return async function*(e, t, n) {
                                        let r = {
                                            eventTypes: [],
                                            responseTexts: [],
                                            finishReasons: [],
                                            responseId: "",
                                            responseModel: "",
                                            promptTokens: void 0,
                                            completionTokens: void 0,
                                            totalTokens: void 0,
                                            chatCompletionToolCalls: {},
                                            responsesApiToolCalls: []
                                        };
                                        try {
                                            for await (let i of e) {
                                                if (null !== i && "object" == typeof i && "object" in i && "chat.completion.chunk" === i.object)
                                                    for (let e of (r.responseId = i.id ? ? r.responseId, r.responseModel = i.model ? ? r.responseModel, i.usage && (r.promptTokens = i.usage.prompt_tokens, r.completionTokens = i.usage.completion_tokens, r.totalTokens = i.usage.total_tokens), i.choices ? ? [])) n && (e.delta ? .content && r.responseTexts.push(e.delta.content), e.delta ? .tool_calls && function(e, t) {
                                                        for (let n of e) {
                                                            let e = n.index;
                                                            if (void 0 !== e && n.function)
                                                                if (e in t.chatCompletionToolCalls) {
                                                                    let r = t.chatCompletionToolCalls[e];
                                                                    n.function.arguments && r ? .function && (r.function.arguments += n.function.arguments)
                                                                } else t.chatCompletionToolCalls[e] = { ...n,
                                                                    function: {
                                                                        name: n.function.name,
                                                                        arguments: n.function.arguments || ""
                                                                    }
                                                                }
                                                        }
                                                    }(e.delta.tool_calls, r)), e.finish_reason && r.finishReasons.push(e.finish_reason);
                                                else null !== i && "object" == typeof i && "type" in i && "string" == typeof i.type && i.type.startsWith("response.") && function(e, t, n, r) {
                                                    if (!(e && "object" == typeof e)) return t.eventTypes.push("unknown:non-object");
                                                    if (e instanceof Error) {
                                                        r.setStatus({
                                                            code: 2,
                                                            message: "internal_error"
                                                        }), iR(e, {
                                                            mechanism: {
                                                                handled: !1,
                                                                type: "auto.ai.openai.stream-response"
                                                            }
                                                        });
                                                        return
                                                    }
                                                    if ("type" in e) {
                                                        if (!lb.includes(e.type)) return t.eventTypes.push(e.type);
                                                        if (n && ("response.output_item.done" === e.type && "item" in e && t.responsesApiToolCalls.push(e.item), "response.output_text.delta" === e.type && "delta" in e && e.delta)) return t.responseTexts.push(e.delta);
                                                        if ("response" in e) {
                                                            let {
                                                                response: r
                                                            } = e;
                                                            t.responseId = r.id ? ? t.responseId, t.responseModel = r.model ? ? t.responseModel, r.usage && (t.promptTokens = r.usage.input_tokens, t.completionTokens = r.usage.output_tokens, t.totalTokens = r.usage.total_tokens), r.status && t.finishReasons.push(r.status), n && r.output_text && t.responseTexts.push(r.output_text)
                                                        }
                                                    }
                                                }(i, r, n, t);
                                                yield i
                                            }
                                        } finally {
                                            let e = [...Object.values(r.chatCompletionToolCalls), ...r.responsesApiToolCalls];
                                            lm(t, { ...r,
                                                toolCalls: e
                                            }, n)
                                        }
                                    }(e, s, r.recordOutputs ? ? !1)
                                } catch (e) {
                                    throw s.setStatus({
                                        code: 2,
                                        message: "internal_error"
                                    }), s.end(), e
                                }
                            })()));
                            return ly(n, s)
                        }
                        let p = oD(d, s => (n = o.apply(t, e), r.recordInputs && u && lS(s, u, i, lf(r.enableTruncation)), n.then(e => (! function(e, t, n) {
                            if (!t || "object" != typeof t) return;
                            let r = {};
                            if ("string" == typeof t.id && (r[aq] = t.id), "string" == typeof t.model && (r[aW] = t.model), "conversation" === t.object && "string" == typeof t.id && (r[a1] = t.id), t.usage && "object" == typeof t.usage) {
                                let e = t.usage,
                                    n = e.prompt_tokens ? ? e.input_tokens;
                                "number" == typeof n && (r[aH] = n);
                                let i = e.completion_tokens ? ? e.output_tokens;
                                "number" == typeof i && (r[az] = i), "number" == typeof e.total_tokens && (r[aJ] = e.total_tokens)
                            }
                            if (Array.isArray(t.choices)) {
                                let e = t.choices,
                                    i = e.map(e => e.finish_reason).filter(e => "string" == typeof e);
                                if (i.length > 0 && (r[aU] = JSON.stringify(i)), n) {
                                    let t = e.map(e => {
                                        let t = e.message;
                                        return t ? .content || ""
                                    });
                                    r[aQ] = JSON.stringify(t);
                                    let n = e.map(e => {
                                        let t = e.message;
                                        return t ? .tool_calls
                                    }).filter(e => Array.isArray(e) && e.length > 0).flat();
                                    n.length > 0 && (r[aZ] = JSON.stringify(n))
                                }
                            }
                            if ("string" != typeof t.status || r[aU] || (r[aU] = JSON.stringify([t.status])), n && ("string" != typeof t.output_text || r[aQ] || (r[aQ] = t.output_text), Array.isArray(t.output) && t.output.length > 0 && !r[aZ])) {
                                let e = t.output.filter(e => e ? .type === "function_call");
                                e.length > 0 && (r[aZ] = JSON.stringify(e))
                            }
                            e.setAttributes(r)
                        }(s, e, r.recordOutputs), e))));
                        return ly(n, p)
                    } : "function" == typeof o ? o.bind(t) : o && "object" == typeof o ? e(o, s, r) : o
                }
            })
        }(e, "", lp(t))
    }
    let lk = {
            "messages.create": {
                operation: "chat"
            },
            "messages.stream": {
                operation: "chat",
                streaming: !0
            },
            "messages.countTokens": {
                operation: "chat"
            },
            "models.get": {
                operation: "models"
            },
            "completions.create": {
                operation: "chat"
            },
            "models.retrieve": {
                operation: "models"
            },
            "beta.messages.create": {
                operation: "chat"
            }
        },
        lE = {
            invalid_request_error: "invalid_argument",
            authentication_error: "unauthenticated",
            permission_error: "permission_denied",
            not_found_error: "not_found",
            request_too_large: "failed_precondition",
            rate_limit_error: "resource_exhausted",
            api_error: "internal_error",
            overloaded_error: "unavailable"
        };

    function lx(e) {
        return e && lE[e] || "internal_error"
    }

    function lC(e, t, n, r) {
        if (e && "object" == typeof e && (!("type" in e) || "string" != typeof e.type || "error" !== e.type || (r.setStatus({
                code: 2,
                message: lx(e.error ? .type)
            }), 0))) {
            if ("message_delta" === e.type && (e.usage && "number" == typeof e.usage.output_tokens && (t.completionTokens = e.usage.output_tokens), e.delta ? .stop_reason && t.finishReasons.push(e.delta.stop_reason)), e.message) {
                let n = e.message;
                n.id && (t.responseId = n.id), n.model && (t.responseModel = n.model), n.usage && ("number" == typeof n.usage.input_tokens && (t.promptTokens = n.usage.input_tokens), "number" == typeof n.usage.cache_creation_input_tokens && (t.cacheCreationInputTokens = n.usage.cache_creation_input_tokens), "number" == typeof n.usage.cache_read_input_tokens && (t.cacheReadInputTokens = n.usage.cache_read_input_tokens))
            }
            if ("content_block_start" === e.type && "number" == typeof e.index && e.content_block && ("tool_use" === e.content_block.type || "server_tool_use" === e.content_block.type) && (t.activeToolBlocks[e.index] = {
                    id: e.content_block.id,
                    name: e.content_block.name,
                    inputJsonParts: []
                }), "content_block_delta" === e.type && e.delta) {
                if ("number" == typeof e.index && "partial_json" in e.delta && "string" == typeof e.delta.partial_json) {
                    let n = t.activeToolBlocks[e.index];
                    n && n.inputJsonParts.push(e.delta.partial_json)
                }
                n && "string" == typeof e.delta.text && t.responseTexts.push(e.delta.text)
            }! function(e, t) {
                let n;
                if ("content_block_stop" !== e.type || "number" != typeof e.index) return;
                let r = t.activeToolBlocks[e.index];
                if (!r) return;
                let i = r.inputJsonParts.join("");
                try {
                    n = i ? JSON.parse(i) : {}
                } catch {
                    n = {
                        __unparsed: i
                    }
                }
                t.toolCalls.push({
                    type: "tool_use",
                    id: r.id,
                    name: r.name,
                    input: n
                }), delete t.activeToolBlocks[e.index]
            }(e, t)
        }
    }
    let lI = !1,
        lT = new WeakSet;

    function lM(e, t, n) {
        ! function(e, t, n) {
            if (Array.isArray(t) && 0 === t.length) return;
            let {
                systemInstructions: r,
                filteredMessages: i
            } = l_(t);
            r && e.setAttributes({
                [aK]: r
            });
            let o = Array.isArray(i) ? i.length : 1;
            e.setAttributes({
                [aY]: n ? lg(i) : eW(i),
                [aG]: o
            })
        }(e, function(e) {
            let {
                system: t,
                messages: n,
                input: r
            } = e, i = "string" == typeof t ? [{
                role: "system",
                content: e.system
            }] : [], o = Array.isArray(r) ? r : null != r ? [r] : void 0, s = Array.isArray(n) ? n : null != n ? [n] : [];
            return [...i, ...o ? ? s]
        }(t), n), "prompt" in t && e.setAttributes({
            "gen_ai.prompt": JSON.stringify(t.prompt)
        })
    }

    function lR(e, t) {
        throw t.isRecording() && (t.setStatus({
            code: 2,
            message: "internal_error"
        }), t.end()), e
    }

    function lA(e, t) {
        return function(e, t) {
            for (let n of Object.keys(lk)) {
                let r = n.split("."),
                    i = r.pop(),
                    o = e;
                for (let e of r) o = o ? .[e];
                if (!o || "function" != typeof o[i]) continue;
                let s = o[i];
                if (lT.has(s)) continue;
                let a = function(e, t, n, r, i) {
                    return new Proxy(e, {
                        apply(e, o, s) {
                            let a, l = void 0 !== o ? o : r,
                                u = !0 === n.streaming;
                            if (!u && lI) return e.apply(l, s);
                            let c = n.operation || "unknown",
                                d = function(e, t, n) {
                                    let r = {
                                        [aR]: "anthropic",
                                        [aV]: n,
                                        [rv]: "auto.ai.anthropic"
                                    };
                                    if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
                                        let t = e[0];
                                        t.tools && Array.isArray(t.tools) && (r[aX] = JSON.stringify(t.tools)), r[aA] = t.model ? ? "unknown", "temperature" in t && (r[aP] = t.temperature), "top_p" in t && (r[a$] = t.top_p), "stream" in t && (r[aO] = t.stream), "top_k" in t && (r[aj] = t.top_k), "frequency_penalty" in t && (r[aD] = t.frequency_penalty), "max_tokens" in t && (r[aN] = t.max_tokens)
                                    } else "models.retrieve" === t || "models.get" === t ? r[aA] = e[0] : r[aA] = "unknown";
                                    return r
                                }(s, t, c),
                                p = d[aA] ? ? "unknown",
                                f = "object" == typeof s[0] ? s[0] : void 0,
                                h = !!f ? .stream;
                            if (h || u) {
                                let t = d[aA] ? ? "unknown",
                                    n = {
                                        name: `${c} ${t}`,
                                        op: `gen_ai.${c}`,
                                        attributes: d
                                    };
                                if (!h || u) return oL(n, t => {
                                    try {
                                        var n;
                                        let r;
                                        i.recordInputs && f && lM(t, f, lf(i.enableTruncation)), lI = !0;
                                        let o = e.apply(l, s);
                                        return lI = !1, n = i.recordOutputs ? ? !1, r = {
                                            responseTexts: [],
                                            finishReasons: [],
                                            responseId: "",
                                            responseModel: "",
                                            promptTokens: void 0,
                                            completionTokens: void 0,
                                            cacheCreationInputTokens: void 0,
                                            cacheReadInputTokens: void 0,
                                            toolCalls: [],
                                            activeToolBlocks: {}
                                        }, o.on("streamEvent", e => {
                                            lC(e, r, n, t)
                                        }), o.on("message", () => {
                                            lm(t, r, n)
                                        }), o.on("error", e => {
                                            iR(e, {
                                                mechanism: {
                                                    handled: !1,
                                                    type: "auto.ai.anthropic.stream_error"
                                                }
                                            }), t.isRecording() && (t.setStatus({
                                                code: 2,
                                                message: "internal_error"
                                            }), t.end())
                                        }), o
                                    } catch (e) {
                                        return lI = !1, lR(e, t)
                                    }
                                }); {
                                    let t, r = oL(n, n => (t = e.apply(l, s), i.recordInputs && f && lM(n, f, lf(i.enableTruncation)), (async () => {
                                        try {
                                            let e = await t;
                                            return async function*(e, t, n) {
                                                let r = {
                                                    responseTexts: [],
                                                    finishReasons: [],
                                                    responseId: "",
                                                    responseModel: "",
                                                    promptTokens: void 0,
                                                    completionTokens: void 0,
                                                    cacheCreationInputTokens: void 0,
                                                    cacheReadInputTokens: void 0,
                                                    toolCalls: [],
                                                    activeToolBlocks: {}
                                                };
                                                try {
                                                    for await (let i of e) lC(i, r, n, t), yield i
                                                } finally {
                                                    lm(t, r, n)
                                                }
                                            }(e, n, i.recordOutputs ? ? !1)
                                        } catch (e) {
                                            return lR(e, n)
                                        }
                                    })()));
                                    return ly(t, r)
                                }
                            }
                            let m = oD({
                                name: `${c} ${p}`,
                                op: `gen_ai.${c}`,
                                attributes: d
                            }, t => (a = e.apply(l, s), i.recordInputs && f && lM(t, f, lf(i.enableTruncation)), a.then(e => (! function(e, t, n) {
                                if (t && "object" == typeof t) {
                                    if ("type" in t && "error" === t.type) return t.error && (e.setStatus({
                                        code: 2,
                                        message: lx(t.error.type)
                                    }), iR(t.error, {
                                        mechanism: {
                                            handled: !1,
                                            type: "auto.ai.anthropic.anthropic_error"
                                        }
                                    }));
                                    n && function(e, t) {
                                            if ("content" in t && Array.isArray(t.content)) {
                                                e.setAttributes({
                                                    [aQ]: t.content.map(e => e.text).filter(e => !!e).join("")
                                                });
                                                let n = [];
                                                for (let e of t.content)("tool_use" === e.type || "server_tool_use" === e.type) && n.push(e);
                                                n.length > 0 && e.setAttributes({
                                                    [aZ]: JSON.stringify(n)
                                                })
                                            }
                                            "completion" in t && e.setAttributes({
                                                [aQ]: t.completion
                                            }), "input_tokens" in t && e.setAttributes({
                                                [aQ]: JSON.stringify(t.input_tokens)
                                            })
                                        }(e, t),
                                        function(e, t) {
                                            if ("id" in t && "model" in t) {
                                                var n, r, i, o;
                                                e.setAttributes({
                                                    [aq]: t.id,
                                                    [aW]: t.model
                                                }), "usage" in t && t.usage && (n = t.usage.input_tokens, r = t.usage.output_tokens, i = t.usage.cache_creation_input_tokens, o = t.usage.cache_read_input_tokens, void 0 !== n && e.setAttributes({
                                                    [aH]: n
                                                }), void 0 !== r && e.setAttributes({
                                                    [az]: r
                                                }), (void 0 !== n || void 0 !== r || void 0 !== i || void 0 !== o) && e.setAttributes({
                                                    [aJ]: (n ? ? 0) + (r ? ? 0) + (i ? ? 0) + (o ? ? 0)
                                                }))
                                            }
                                        }(e, t)
                                }
                            }(t, e, i.recordOutputs), e))));
                            return ly(a, m)
                        }
                    })
                }(s, n, lk[n], o, t);
                lT.add(a), o[i] = a
            }
            return e
        }(e, lp(t))
    }
    let lO = {
        "models.generateContent": {
            operation: "generate_content"
        },
        "models.generateContentStream": {
            operation: "generate_content",
            streaming: !0
        },
        "models.embedContent": {
            operation: "embeddings"
        },
        "chats.create": {
            proxyResultPath: "chat"
        },
        "chat.sendMessage": {
            operation: "chat"
        },
        "chat.sendMessageStream": {
            operation: "chat",
            streaming: !0
        }
    };

    function lP(e, t = "user") {
        return "string" == typeof e ? [{
            role: t,
            content: e
        }] : Array.isArray(e) ? e.flatMap(e => lP(e, t)) : "object" == typeof e && e ? "role" in e && "string" == typeof e.role ? [e] : "parts" in e ? [{ ...e,
            role: t
        }] : [{
            role: t,
            content: e
        }] : []
    }

    function lN(e, t) {
        if ("model" in e && "string" == typeof e.model) return e.model;
        if (t && "object" == typeof t) {
            if ("model" in t && "string" == typeof t.model) return t.model;
            if ("modelVersion" in t && "string" == typeof t.modelVersion) return t.modelVersion
        }
        return "unknown"
    }

    function lD(e, t, n, r) {
        if ("embeddings" === n) {
            let n = t.contents;
            null != n && e.setAttribute(a2, "string" == typeof n ? n : JSON.stringify(n));
            return
        }
        let i = [];
        if ("config" in t && t.config && "object" == typeof t.config && "systemInstruction" in t.config && t.config.systemInstruction && i.push(...lP(t.config.systemInstruction, "system")), "history" in t && i.push(...lP(t.history, "user")), "contents" in t && i.push(...lP(t.contents, "user")), "message" in t && i.push(...lP(t.message, "user")), Array.isArray(i) && i.length) {
            let {
                systemInstructions: t,
                filteredMessages: n
            } = l_(i);
            t && e.setAttribute(aK, t);
            let o = Array.isArray(n) ? n.length : 0;
            e.setAttributes({
                [aG]: o,
                [aY]: r ? lg(n) : eW(n)
            })
        }
    }

    function lL(e, t) {
        return function e(t, n = "", r) {
            return new Proxy(t, {
                get: (t, i, o) => {
                    let s = Reflect.get(t, i, o),
                        a = lh(n, String(i)),
                        l = lO[a];
                    if ("function" == typeof s && l) {
                        let n, i = l.operation ? (n = "embeddings" === l.operation, new Proxy(s, {
                            apply(e, i, o) {
                                let s = l.operation || "unknown",
                                    a = o[0],
                                    u = function(e, t, n) {
                                        let r = {
                                            [aR]: "google_genai",
                                            [aV]: e,
                                            [rv]: "auto.ai.google_genai"
                                        };
                                        if (t) {
                                            if (r[aA] = lN(t, n), "config" in t && "object" == typeof t.config && t.config) {
                                                let e, n = t.config;
                                                if (Object.assign(r, (e = {}, "temperature" in n && "number" == typeof n.temperature && (e[aP] = n.temperature), "topP" in n && "number" == typeof n.topP && (e[a$] = n.topP), "topK" in n && "number" == typeof n.topK && (e[aj] = n.topK), "maxOutputTokens" in n && "number" == typeof n.maxOutputTokens && (e[aN] = n.maxOutputTokens), "frequencyPenalty" in n && "number" == typeof n.frequencyPenalty && (e[aD] = n.frequencyPenalty), "presencePenalty" in n && "number" == typeof n.presencePenalty && (e[aL] = n.presencePenalty), e)), "tools" in n && Array.isArray(n.tools)) {
                                                    let e = n.tools.flatMap(e => e.functionDeclarations);
                                                    r[aX] = JSON.stringify(e)
                                                }
                                            }
                                        } else r[aA] = lN({}, n);
                                        return r
                                    }(s, a, t),
                                    c = u[aA] ? ? "unknown";
                                return l.streaming ? oL({
                                    name: `${s} ${c}`,
                                    op: `gen_ai.${s}`,
                                    attributes: u
                                }, async n => {
                                    try {
                                        r.recordInputs && a && lD(n, a, s, lf(r.enableTruncation));
                                        let i = await e.apply(t, o);
                                        return async function*(e, t, n) {
                                            let r = {
                                                responseTexts: [],
                                                finishReasons: [],
                                                toolCalls: []
                                            };
                                            try {
                                                for await (let i of e) ! function(e, t, n, r) {
                                                    if (!(!e || function(e, t) {
                                                            let n = e ? .promptFeedback;
                                                            if (n ? .blockReason) {
                                                                let e = n.blockReasonMessage ? ? n.blockReason;
                                                                return t.setStatus({
                                                                    code: 2,
                                                                    message: "internal_error"
                                                                }), iR(`Content blocked: ${e}`, {
                                                                    mechanism: {
                                                                        handled: !1,
                                                                        type: "auto.ai.google_genai"
                                                                    }
                                                                }), !0
                                                            }
                                                            return !1
                                                        }(e, r))) {
                                                        let r;
                                                        for (let i of ("string" == typeof e.responseId && (t.responseId = e.responseId), "string" == typeof e.modelVersion && (t.responseModel = e.modelVersion), (r = e.usageMetadata) && ("number" == typeof r.promptTokenCount && (t.promptTokens = r.promptTokenCount), "number" == typeof r.candidatesTokenCount && (t.completionTokens = r.candidatesTokenCount), "number" == typeof r.totalTokenCount && (t.totalTokens = r.totalTokenCount)), Array.isArray(e.functionCalls) && t.toolCalls.push(...e.functionCalls), e.candidates ? ? []))
                                                            for (let e of (i ? .finishReason && !t.finishReasons.includes(i.finishReason) && t.finishReasons.push(i.finishReason), i ? .content ? .parts ? ? [])) n && e.text && t.responseTexts.push(e.text), e.functionCall && t.toolCalls.push({
                                                                type: "function",
                                                                id: e.functionCall.id,
                                                                name: e.functionCall.name,
                                                                arguments: e.functionCall.args
                                                            })
                                                    }
                                                }(i, r, n, t), yield i
                                            } finally {
                                                lm(t, r, n)
                                            }
                                        }(i, n, !!r.recordOutputs)
                                    } catch (e) {
                                        throw n.setStatus({
                                            code: 2,
                                            message: "internal_error"
                                        }), n.end(), e
                                    }
                                }) : oD({
                                    name: `${s} ${c}`,
                                    op: `gen_ai.${s}`,
                                    attributes: u
                                }, i => (r.recordInputs && a && lD(i, a, s, lf(r.enableTruncation)), op(() => e.apply(t, o), () => {}, () => {}, e => {
                                    n || function(e, t, n) {
                                        if (t && "object" == typeof t) {
                                            if (t.modelVersion && e.setAttribute(aW, t.modelVersion), t.usageMetadata && "object" == typeof t.usageMetadata) {
                                                let n = t.usageMetadata;
                                                "number" == typeof n.promptTokenCount && e.setAttributes({
                                                    [aH]: n.promptTokenCount
                                                }), "number" == typeof n.candidatesTokenCount && e.setAttributes({
                                                    [az]: n.candidatesTokenCount
                                                }), "number" == typeof n.totalTokenCount && e.setAttributes({
                                                    [aJ]: n.totalTokenCount
                                                })
                                            }
                                            if (n && Array.isArray(t.candidates) && t.candidates.length > 0) {
                                                let n = t.candidates.map(e => e.content ? .parts && Array.isArray(e.content.parts) ? e.content.parts.map(e => "string" == typeof e.text ? e.text : "").filter(e => e.length > 0).join("") : "").filter(e => e.length > 0);
                                                n.length > 0 && e.setAttributes({
                                                    [aQ]: n.join("")
                                                })
                                            }
                                            if (n && t.functionCalls) {
                                                let n = t.functionCalls;
                                                Array.isArray(n) && n.length > 0 && e.setAttributes({
                                                    [aZ]: JSON.stringify(n)
                                                })
                                            }
                                        }
                                    }(i, e, r.recordOutputs)
                                })))
                            }
                        })) : s.bind(t);
                        return l.proxyResultPath ? function(...t) {
                            let n = i(...t);
                            return n && "object" == typeof n ? e(n, l.proxyResultPath, r) : n
                        } : i
                    }
                    return "function" == typeof s ? s.bind(t) : s && "object" == typeof s ? e(s, a, r) : s
                }
            })
        }(e, "", lp(t))
    }
    let l$ = "auto.ai.langchain",
        lj = {
            human: "user",
            ai: "assistant",
            assistant: "assistant",
            system: "system",
            function: "function",
            tool: "tool"
        },
        lF = (e, t, n) => {
            null != n && (e[t] = n)
        },
        lB = (e, t, n) => {
            let r = Number(n);
            Number.isNaN(r) || (e[t] = r)
        };

    function lU(e) {
        if (Array.isArray(e)) try {
            let t = e.map(e => e && "object" == typeof e && a7(e) ? lo(e) : e);
            return JSON.stringify(t)
        } catch {
            return String(e)
        }
        return eW(e, String)
    }

    function lW(e) {
        let t = e.toLowerCase();
        return lj[t] ? ? t
    }

    function lq(e) {
        return e.includes("System") ? "system" : e.includes("Human") ? "user" : e.includes("AI") || e.includes("Assistant") ? "assistant" : e.includes("Function") ? "function" : e.includes("Tool") ? "tool" : "user"
    }

    function lH(e) {
        if (!(!e || Array.isArray(e))) return e.invocation_params
    }

    function lz(e) {
        return e.map(e => {
            let t = e._getType;
            if ("function" == typeof t) return {
                role: lW(t.call(e)),
                content: lU(e.content)
            };
            if (1 === e.lc && e.kwargs) {
                let t = e.id,
                    n = Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "";
                return {
                    role: lW("string" == typeof n ? lq(n) : "user"),
                    content: lU(e.kwargs ? .content)
                }
            }
            if (e.type) return {
                role: lW(String(e.type).toLowerCase()),
                content: lU(e.content)
            };
            if (e.role) return {
                role: lW(String(e.role)),
                content: lU(e.content)
            };
            let n = e.constructor ? .name;
            return n && "Object" !== n ? {
                role: lW(lq(n)),
                content: lU(e.content)
            } : {
                role: "user",
                content: lU(e.content)
            }
        })
    }

    function lJ(e, t, n, r, i) {
        let o, s;
        return {
            [aR]: eW(e ? ? "langchain", String),
            [aV]: "chat",
            [aA]: eW(t, String),
            [rv]: l$,
            ...(o = {}, s = "kwargs" in n ? n.kwargs : void 0, lB(o, aP, r ? .temperature ? ? i ? .ls_temperature ? ? s ? .temperature), lB(o, aN, r ? .max_tokens ? ? i ? .ls_max_tokens ? ? s ? .max_tokens), lB(o, a$, r ? .top_p ? ? s ? .top_p), lB(o, aD, r ? .frequency_penalty), lB(o, aL, r ? .presence_penalty), r && "stream" in r && lF(o, aO, !!r.stream), o)
        }
    }

    function lV(e) {
        let t = {},
            n = e ? .lc_agent_name;
        return "string" == typeof n && (t[a0] = n), t
    }

    function lG(e) {
        return "object" == typeof e && e ? .name === "SentryCallbackHandler"
    }

    function lY(e = {}) {
        let {
            recordInputs: t,
            recordOutputs: n
        } = lp(e), r = lf(e.enableTruncation), i = new Map, o = e => {
            let t = i.get(e);
            t ? .isRecording() && (t.end(), i.delete(e))
        }, s = {
            lc_serializable: !1,
            lc_namespace: ["langchain_core", "callbacks", "sentry"],
            lc_secrets: void 0,
            lc_attributes: void 0,
            lc_aliases: void 0,
            lc_serializable_keys: void 0,
            lc_id: ["langchain_core", "callbacks", "sentry"],
            lc_kwargs: {},
            name: "SentryCallbackHandler",
            ignoreLLM: !1,
            ignoreChain: !1,
            ignoreAgent: !1,
            ignoreRetriever: !1,
            ignoreCustomEvent: !1,
            raiseError: !1,
            awaitHandlers: !0,
            handleLLMStart(e, n, o, s, a, l, u, c) {
                let d = function(e, t, n, r, i, o) {
                        let s = lJ(o ? .ls_provider, i ? .model ? ? o ? .ls_model_name ? ? "unknown", e, i, o);
                        if (n && Array.isArray(t) && t.length > 0) {
                            lF(s, aG, t.length);
                            let e = t.map(e => ({
                                role: "user",
                                content: e
                            }));
                            lF(s, aY, r ? lg(e) : eW(e))
                        }
                        return s
                    }(e, n, t, r, lH(l), u),
                    p = d[aA],
                    f = d[aV];
                oL({
                    name: `${f} ${p}`,
                    op: "gen_ai.chat",
                    attributes: { ...lV(u),
                        ...d,
                        [ry]: "gen_ai.chat"
                    }
                }, e => (i.set(o, e), e))
            },
            handleChatModelStart(e, n, o, s, a, l, u, c) {
                let d = function(e, t, n, r, i, o) {
                        let s = lJ(o ? .ls_provider ? ? e.id ? .[2], i ? .model ? ? o ? .ls_model_name ? ? "unknown", e, i, o);
                        if (n && Array.isArray(t) && t.length > 0) {
                            let {
                                systemInstructions: e,
                                filteredMessages: n
                            } = l_(lz(t.flat()));
                            e && lF(s, aK, e), lF(s, aG, Array.isArray(n) ? n.length : 0), lF(s, aY, r ? lg(n) : eW(n))
                        }
                        return s
                    }(e, n, t, r, lH(l), u),
                    p = function(e) {
                        let t = e ? .invocation_params ? .tools ? ? e ? .options ? .tools;
                        if (Array.isArray(t) && 0 !== t.length) return JSON.stringify(t.map(e => {
                            let t = e.function;
                            return {
                                type: "function",
                                name: e.name ? ? t ? .name ? ? "",
                                description: e.description ? ? t ? .description
                            }
                        }))
                    }(a);
                p && (d[aX] = p);
                let f = d[aA],
                    h = d[aV];
                oL({
                    name: `${h} ${f}`,
                    op: "gen_ai.chat",
                    attributes: { ...lV(u),
                        ...d,
                        [ry]: "gen_ai.chat"
                    }
                }, e => (i.set(o, e), e))
            },
            handleLLMEnd(e, t, r, s, a) {
                let l = i.get(t);
                if (l ? .isRecording()) {
                    let r = function(e, t) {
                        if (!e) return;
                        let n = {};
                        if (Array.isArray(e.generations)) {
                            let r = e.generations.flat().map(e => e.generationInfo ? .finish_reason ? e.generationInfo.finish_reason : e.generation_info ? .finish_reason ? e.generation_info.finish_reason : null).filter(e => "string" == typeof e);
                            if (r.length > 0 && lF(n, aU, eW(r, String)), ! function(e, t) {
                                    let n = [];
                                    for (let t of e.flat()) {
                                        let e = t.message,
                                            r = e ? .tool_calls;
                                        if (Array.isArray(r) && r.length > 0) n.push(...r);
                                        else {
                                            let e = t.message ? .content;
                                            if (Array.isArray(e))
                                                for (let t of e) "tool_use" === t.type && n.push(t)
                                        }
                                    }
                                    n.length > 0 && lF(t, aZ, eW(n, String))
                                }(e.generations, n), t) {
                                let t = e.generations.flat().map(e => e.text ? ? e.message ? .content).filter(e => "string" == typeof e);
                                t.length > 0 && lF(n, aQ, eW(t, String))
                            }
                        }! function(e, t) {
                            if (!e) return;
                            let n = e.tokenUsage,
                                r = e.usage;
                            if (n) lB(t, aH, n.promptTokens), lB(t, az, n.completionTokens), lB(t, aJ, n.totalTokens);
                            else if (r) {
                                lB(t, aH, r.input_tokens), lB(t, az, r.output_tokens);
                                let e = Number(r.input_tokens),
                                    n = Number(r.output_tokens),
                                    i = (Number.isNaN(e) ? 0 : e) + (Number.isNaN(n) ? 0 : n);
                                i > 0 && lB(t, aJ, i), void 0 !== r.cache_creation_input_tokens && lB(t, "gen_ai.usage.cache_creation_input_tokens", r.cache_creation_input_tokens), void 0 !== r.cache_read_input_tokens && lB(t, "gen_ai.usage.cache_read_input_tokens", r.cache_read_input_tokens)
                            }
                        }(e.llmOutput, n);
                        let r = e.llmOutput,
                            i = e.generations ? .[0] ? .[0],
                            o = i ? .message,
                            s = r ? .model_name ? ? r ? .model ? ? o ? .response_metadata ? .model_name;
                        s && lF(n, aW, s);
                        let a = r ? .id ? ? o ? .id;
                        a && lF(n, aq, a);
                        let l = r ? .stop_reason ? ? o ? .response_metadata ? .finish_reason;
                        return l && lF(n, "gen_ai.response.stop_reason", eW(l, String)), n
                    }(e, n);
                    r && l.setAttributes(r), o(t)
                }
            },
            handleLLMError(e, t) {
                let n = i.get(t);
                n ? .isRecording() && (n.setStatus({
                    code: 2,
                    message: "internal_error"
                }), o(t))
            },
            handleChainStart(e, n, r, o, s, a, l, u) {
                if (a ? .__sentry_langgraph__) return;
                let c = u || e.name || "unknown_chain",
                    d = {
                        [rv]: "auto.ai.langchain",
                        "langchain.chain.name": c
                    };
                t && (d["langchain.chain.inputs"] = JSON.stringify(n)), oL({
                    name: `chain ${c}`,
                    op: "gen_ai.invoke_agent",
                    attributes: { ...d,
                        [ry]: "gen_ai.invoke_agent"
                    }
                }, e => (i.set(r, e), e))
            },
            handleChainEnd(e, t) {
                let r = i.get(t);
                r ? .isRecording() && (n && r.setAttributes({
                    "langchain.chain.outputs": JSON.stringify(e)
                }), o(t))
            },
            handleChainError(e, t) {
                let n = i.get(t);
                n ? .isRecording() && (n.setStatus({
                    code: 2,
                    message: "internal_error"
                }), o(t))
            },
            handleToolStart(e, n, r, o, s, a, l) {
                if (a ? .__sentry_langgraph__) return;
                let u = l || e.name || "unknown_tool",
                    c = { ...lV(a),
                        [rv]: l$,
                        [aV]: "execute_tool",
                        [a4]: u
                    };
                t && (c[a6] = n), oL({
                    name: `execute_tool ${u}`,
                    op: "gen_ai.execute_tool",
                    attributes: { ...c,
                        [ry]: "gen_ai.execute_tool"
                    }
                }, e => (i.set(r, e), e))
            },
            handleToolEnd(e, t) {
                let r = i.get(t);
                if (r ? .isRecording()) {
                    if (n) {
                        let t = e && "object" == typeof e && "content" in e ? e.content : e;
                        r.setAttributes({
                            [a8]: "string" == typeof t ? t : JSON.stringify(t)
                        })
                    }
                    o(t)
                }
            },
            handleToolError(e, t) {
                let n = i.get(t);
                n ? .isRecording() && (n.setStatus({
                    code: 2,
                    message: "internal_error"
                }), o(t))
            },
            copy: () => s,
            toJSON: () => ({
                lc: 1,
                type: "not_implemented",
                id: s.lc_id
            }),
            toJSONNotImplemented: () => ({
                lc: 1,
                type: "not_implemented",
                id: s.lc_id
            })
        };
        return s
    }

    function lK(e, t = {}) {
        return new Proxy(e, {
            apply: (e, n, r) => oD(function(e, t, n = {}) {
                let r, i, o, {
                        recordInputs: s
                    } = lp(n),
                    a = ((i = {
                        [rv]: l$,
                        [ry]: a3,
                        [aV]: "embeddings",
                        [aA]: (r = e ? ? {}).model ? ? "unknown"
                    })[aR] = (o = r.constructor ? .name ? ? "").includes("OpenAI") ? "openai" : o.includes("Google") ? "google_genai" : o.includes("Mistral") ? "mistralai" : o.includes("Vertex") ? "google_vertexai" : o.includes("Bedrock") ? "aws_bedrock" : o.includes("Ollama") ? "ollama" : o.includes("Cloudflare") ? "cloudflare" : o.includes("Cohere") ? "cohere" : "langchain", "dimensions" in r && (i[aB] = r.dimensions), "encodingFormat" in r && (i[aF] = r.encodingFormat), i),
                    l = a[aA] || "unknown";
                return s && null != t && (a[a2] = "string" == typeof t ? t : JSON.stringify(t)), {
                    name: `embeddings ${l}`,
                    op: a3,
                    attributes: a
                }
            }(n, r[0], t), () => Reflect.apply(e, n, r))
        })
    }

    function lQ(e, t) {
        return "function" == typeof e.embedQuery && (e.embedQuery = lK(e.embedQuery, t)), "function" == typeof e.embedDocuments && (e.embedDocuments = lK(e.embedDocuments, t)), e
    }
    let lX = "auto.ai.langgraph",
        lZ = !1,
        l0 = "__sentry_patched__";

    function l1(e, t, n, r, i, o) {
        return new Proxy(e, {
            apply(e, s, a) {
                let l = i ? .modelName ? ? i ? .model;
                return oD({
                    op: "gen_ai.invoke_agent",
                    name: "invoke_agent",
                    attributes: {
                        [rv]: lX,
                        [ry]: "gen_ai.invoke_agent",
                        [aV]: "invoke_agent"
                    }
                }, async i => {
                    try {
                        let u = n ? .name;
                        u && "string" == typeof u && (i.setAttribute("gen_ai.pipeline.name", u), i.setAttribute(a0, u), i.updateName(`invoke_agent ${u}`)), l && i.setAttribute(aA, l);
                        let c = a.length > 1 ? a[1] : void 0,
                            d = c ? .configurable,
                            p = d ? .thread_id;
                        if (p && "string" == typeof p && i.setAttribute(a1, p), o) {
                            let e = a[1] ? ? {};
                            a[1] = e;
                            let t = e.metadata ? ? {};
                            e.metadata = { ...t,
                                __sentry_langgraph__: !0,
                                ..."string" == typeof u ? {
                                    lc_agent_name: u
                                } : {}
                            }, e.callbacks = function(e, t) {
                                if (!e) return [t];
                                if (e && "object" == typeof e && "function" == typeof e.addHandler && "function" == typeof e.copy) {
                                    if ((e.handlers ? ? []).some(lG)) return e;
                                    let n = e.copy();
                                    return n.addHandler(t, !0), n
                                }
                                let n = Array.isArray(e) ? e : [e];
                                return n.some(lG) ? e : [...n, t]
                            }(e.callbacks, o)
                        }
                        let f = function(e) {
                            if (!e.builder ? .nodes ? .tools ? .runnable ? .tools) return null;
                            let t = e.builder ? .nodes ? .tools ? .runnable ? .tools;
                            return t && Array.isArray(t) && 0 !== t.length ? t.map(e => ({
                                name: e.lc_kwargs ? .name,
                                description: e.lc_kwargs ? .description,
                                schema: e.lc_kwargs ? .schema
                            })) : null
                        }(t);
                        f && i.setAttribute(aX, JSON.stringify(f));
                        let h = r.recordInputs,
                            m = r.recordOutputs,
                            g = a.length > 0 ? a[0] ? .messages ? ? [] : [];
                        if (g && h) {
                            let e = lz(g),
                                {
                                    systemInstructions: t,
                                    filteredMessages: n
                                } = l_(e);
                            t && i.setAttribute(aK, t);
                            let o = lf(r.enableTruncation),
                                s = Array.isArray(n) ? n.length : 0;
                            i.setAttributes({
                                [aY]: o ? lg(n) : eW(n),
                                [aG]: s
                            })
                        }
                        let _ = await Reflect.apply(e, s, a);
                        return m && function(e, t, n) {
                            let r = n ? .messages;
                            if (!r || !Array.isArray(r)) return;
                            let i = t ? .length ? ? 0,
                                o = r.length > i ? r.slice(i) : [];
                            if (0 === o.length) return;
                            let s = function(e) {
                                if (!e || 0 === e.length) return null;
                                let t = [];
                                for (let n of e)
                                    if (n && "object" == typeof n) {
                                        let e = n.tool_calls;
                                        e && Array.isArray(e) && t.push(...e)
                                    }
                                return t.length > 0 ? t : null
                            }(o);
                            s && e.setAttribute(aZ, JSON.stringify(s));
                            let a = lz(o);
                            e.setAttribute(aQ, JSON.stringify(a));
                            let l = 0,
                                u = 0,
                                c = 0;
                            for (let t of o) {
                                let n = function(e) {
                                    let t = 0,
                                        n = 0,
                                        r = 0;
                                    if (e.usage_metadata && "object" == typeof e.usage_metadata) {
                                        let i = e.usage_metadata;
                                        return "number" == typeof i.input_tokens && (t = i.input_tokens), "number" == typeof i.output_tokens && (n = i.output_tokens), "number" == typeof i.total_tokens && (r = i.total_tokens), {
                                            inputTokens: t,
                                            outputTokens: n,
                                            totalTokens: r
                                        }
                                    }
                                    if (e.response_metadata && "object" == typeof e.response_metadata) {
                                        let i = e.response_metadata;
                                        if (i.tokenUsage && "object" == typeof i.tokenUsage) {
                                            let e = i.tokenUsage;
                                            "number" == typeof e.promptTokens && (t = e.promptTokens), "number" == typeof e.completionTokens && (n = e.completionTokens), "number" == typeof e.totalTokens && (r = e.totalTokens)
                                        }
                                    }
                                    return {
                                        inputTokens: t,
                                        outputTokens: n,
                                        totalTokens: r
                                    }
                                }(t);
                                l += n.inputTokens, u += n.outputTokens, c += n.totalTokens,
                                    function(e, t) {
                                        if (t.response_metadata && "object" == typeof t.response_metadata) {
                                            let n = t.response_metadata;
                                            n.model_name && "string" == typeof n.model_name && e.setAttribute(aW, n.model_name), n.finish_reason && "string" == typeof n.finish_reason && e.setAttribute(aU, [n.finish_reason])
                                        }
                                    }(e, t)
                            }
                            l > 0 && e.setAttribute(aH, l), u > 0 && e.setAttribute(az, u), c > 0 && e.setAttribute(aJ, c)
                        }(i, g ? ? null, _), _
                    } catch (e) {
                        throw i.setStatus({
                            code: 2,
                            message: "internal_error"
                        }), e
                    }
                })
            }
        })
    }

    function l2(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, l0)) return e;
        let n = lp(t),
            r = lY(n),
            i = new Proxy(e, {
                apply(e, t, i) {
                    let o, s, a = function(e) {
                            let t = e[0];
                            if ("object" != typeof t || !t || !("llm" in t) || !t.llm || "object" != typeof t.llm) return null;
                            let n = t.llm;
                            return "string" != typeof n.modelName && "string" != typeof n.model ? null : n
                        }(i),
                        l = "object" == typeof(s = i[0]) && s && "name" in s && "string" == typeof s.name ? s.name : null,
                        u = i[0];
                    u && Array.isArray(u.tools) && u.tools.length > 0 && function(e, t, n) {
                        let r = "__sentry_tool_wrapped__";
                        for (let i of e) {
                            if (!i || "object" != typeof i) continue;
                            let e = i.invoke;
                            if ("function" != typeof e || Object.prototype.hasOwnProperty.call(i, r)) continue;
                            let o = "string" == typeof i.name ? i.name : "unknown_tool",
                                s = "string" == typeof i.description ? i.description : void 0;
                            i.invoke = new Proxy(e, {
                                apply(e, r, i) {
                                    let a = {
                                            [rv]: lX,
                                            [ry]: a5,
                                            [aV]: "execute_tool",
                                            [a4]: o,
                                            "gen_ai.tool.type": "function"
                                        },
                                        l = i[1],
                                        u = l ? .metadata ? .lc_agent_name ? ? n;
                                    "string" == typeof u && (a[a0] = u), s && (a["gen_ai.tool.description"] = s);
                                    let c = i[0];
                                    if ("object" == typeof c && c && ("id" in c && "string" == typeof c.id && (a["gen_ai.tool.call.id"] = c.id), t.recordInputs)) {
                                        let e = "args" in c && "object" == typeof c.args ? c.args : c;
                                        try {
                                            a[a6] = JSON.stringify(e)
                                        } catch {}
                                    }
                                    return oD({
                                        op: a5,
                                        name: `execute_tool ${o}`,
                                        attributes: a
                                    }, async n => {
                                        try {
                                            let o = await Reflect.apply(e, r, i);
                                            if (t.recordOutputs) try {
                                                let e = o && "object" == typeof o && "content" in o ? o.content : o;
                                                n.setAttribute(a8, "string" == typeof e ? e : JSON.stringify(e))
                                            } catch {}
                                            return o
                                        } catch (e) {
                                            throw n.setStatus({
                                                code: 2,
                                                message: "internal_error"
                                            }), e
                                        }
                                    })
                                }
                            }), Object.defineProperty(i, r, {
                                value: !0,
                                enumerable: !1
                            })
                        }
                    }(u.tools, n, l ? ? void 0), lZ = !0;
                    try {
                        o = Reflect.apply(e, t, i)
                    } finally {
                        lZ = !1
                    }
                    let c = o.invoke;
                    if (c && "function" == typeof c) {
                        let e = {};
                        l && (e.name = l), o.invoke = l1(c.bind(o), o, e, n, a, r)
                    }
                    return o
                }
            });
        return Object.defineProperty(i, l0, {
            value: !0,
            enumerable: !1
        }), i
    }

    function l3(e, t) {
        return e.compile = function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, l0)) return e;
            let n = lY(t),
                r = new Proxy(e, {
                    apply: (e, r, i) => lZ ? Reflect.apply(e, r, i) : oD({
                        op: "gen_ai.create_agent",
                        name: "create_agent",
                        attributes: {
                            [rv]: lX,
                            [ry]: "gen_ai.create_agent",
                            [aV]: "create_agent"
                        }
                    }, o => {
                        try {
                            let s = Reflect.apply(e, r, i),
                                a = i.length > 0 ? i[0] : {};
                            a ? .name && "string" == typeof a.name && (o.setAttribute(a0, a.name), o.updateName(`create_agent ${a.name}`));
                            let l = s.invoke;
                            return l && "function" == typeof l && (s.invoke = l1(l.bind(s), s, a, t, void 0, n)), s
                        } catch (e) {
                            throw o.setStatus({
                                code: 2,
                                message: "internal_error"
                            }), e
                        }
                    })
                });
            return Object.defineProperty(r, l0, {
                value: !0,
                enumerable: !1
            }), r
        }(e.compile, lp(t)), e
    }
    let l5 = l3,
        l4 = "[Filtered]",
        l6 = ["forwarded", "-ip", "remote-", "via", "-user"],
        l8 = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "sid", "identity", "set-cookie", "cookie"],
        l7 = [".sid", "sessid", "remember", "oidc", "pkce", "nonce", "__secure-", "__host-", "awsalb", "awselb", "akamai", "__stripe", "cognito", "firebase", "supabase", "sb-", "mfa", "2fa"],
        l9 = {
            userInfo: !0,
            cookies: !0,
            httpHeaders: {
                request: !0,
                response: !0
            },
            httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
            urlQueryParams: !0,
            graphQL: {
                document: !0,
                variables: !0
            },
            genAI: {
                inputs: !0,
                outputs: !0
            },
            databaseQueryData: !0,
            stackFrameVariables: !0,
            frameContextLines: 5
        },
        ue = "Not capturing exception because it's already been captured.",
        ut = "Discarded session because of missing or non-string release",
        un = Symbol.for("SentryInternalError"),
        ur = Symbol.for("SentryDoNotSendEventError");

    function ui(e) {
        return {
            message: e,
            [un]: !0
        }
    }

    function uo(e) {
        return {
            message: e,
            [ur]: !0
        }
    }

    function us(e) {
        return e_(e) && un in e
    }

    function ua(e) {
        return e_(e) && ur in e
    }

    function ul(e, t, n, r, i) {
        let o, s = 0,
            a = !1;
        e.on(n, () => {
            s = 0, clearTimeout(o), a = !1
        }), e.on(t, t => {
            if ((s += r(t)) >= 8e5) i(e);
            else if (!a) {
                let t = e.getOptions()._flushInterval ? ? 5e3;
                t > 0 && (a = !0, o = o5(setTimeout(() => {
                    i(e)
                }, t)))
            }
        }), e.on("flush", () => {
            i(e)
        })
    }
    class uu {
        constructor(e) {
            let t, n;
            if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = o6(e.transportOptions ? .bufferSize ? ? 64), this._dataCollection = (t = null != e.dataCollection ? l9 : !0 === e.sendDefaultPii ? {
                    userInfo: !0,
                    cookies: !0,
                    httpHeaders: {
                        request: !0,
                        response: !0
                    },
                    httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
                    urlQueryParams: !0,
                    graphQL: {
                        document: !0,
                        variables: !0
                    },
                    genAI: {
                        inputs: !0,
                        outputs: !0
                    },
                    databaseQueryData: !0,
                    stackFrameVariables: !0,
                    frameContextLines: 7
                } : {
                    userInfo: !1,
                    cookies: {
                        deny: l6
                    },
                    httpHeaders: {
                        request: {
                            deny: l6
                        },
                        response: {
                            deny: l6
                        }
                    },
                    httpBodies: [],
                    urlQueryParams: {
                        deny: l6
                    },
                    graphQL: {
                        document: !0,
                        variables: !0
                    },
                    genAI: {
                        inputs: !1,
                        outputs: !1
                    },
                    databaseQueryData: !1,
                    stackFrameVariables: !0,
                    frameContextLines: 7
                }, {
                    userInfo: (n = e.dataCollection ? ? {}).userInfo ? ? t.userInfo,
                    cookies: n.cookies ? ? t.cookies,
                    httpHeaders: {
                        request: n.httpHeaders ? .request ? ? t.httpHeaders.request,
                        response: n.httpHeaders ? .response ? ? t.httpHeaders.response
                    },
                    httpBodies: n.httpBodies ? ? t.httpBodies,
                    urlQueryParams: n.urlQueryParams ? ? n.queryParams ? ? t.urlQueryParams,
                    graphQL: {
                        document: n.graphQL ? .document ? ? t.graphQL.document,
                        variables: n.graphQL ? .variables ? ? t.graphQL.variables
                    },
                    genAI: {
                        inputs: n.genAI ? .inputs ? ? t.genAI.inputs,
                        outputs: n.genAI ? .outputs ? ? t.genAI.outputs
                    },
                    databaseQueryData: n.databaseQueryData ? ? t.databaseQueryData,
                    stackFrameVariables: n.stackFrameVariables ? ? t.stackFrameVariables,
                    frameContextLines: n.frameContextLines ? ? t.frameContextLines
                }), e.dsn ? this._dsn = rL(e.dsn) : ee && ea.warn("No DSN provided, client will not send events."), this._dsn) {
                let t = sn(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
                this._transport = e.transport({
                    tunnel: this._options.tunnel,
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: t
                })
            }
            this._options.enableLogs = this._options.enableLogs ? ? this._options._experiments ? .enableLogs ? ? !0, this._options.enableLogs && ul(this, "afterCaptureLog", "flushLogs", uh, ar), (this._options.enableMetrics ? ? this._options._experiments ? .enableMetrics ? ? !0) && ul(this, "afterCaptureMetric", "flushMetrics", uf, ab)
        }
        captureException(e, t, n) {
            let r = eG();
            if (eZ(e)) return ee && ea.log(ue), r;
            let i = {
                event_id: r,
                ...t
            };
            return this._process(() => this.eventFromException(e, i).then(e => this._captureEvent(e, i, n)).then(e => e), "error"), i.event_id
        }
        captureMessage(e, t, n, r) {
            let i = {
                    event_id: eG(),
                    ...n
                },
                o = eh(e) ? e : String(e),
                s = em(e),
                a = s ? this.eventFromMessage(o, t, i) : this.eventFromException(e, i);
            return this._process(() => a.then(e => this._captureEvent(e, i, r)), s ? "unknown" : "error"), i.event_id
        }
        captureEvent(e, t, n) {
            let r = eG();
            if (t ? .originalException && eZ(t.originalException)) return ee && ea.log(ue), r;
            let i = {
                    event_id: r,
                    ...t
                },
                o = e.sdkProcessingMetadata || {},
                s = o.capturedSpanScope,
                a = o.capturedSpanIsolationScope,
                l = uc(e.type);
            return this._process(() => this._captureEvent(e, i, s || n, a), l), i.event_id
        }
        captureSession(e) {
            this.sendSession(e), e5(e, {
                init: !1
            })
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getDataCollectionOptions() {
            return this._dataCollection
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        async flush(e) {
            let t = this._transport;
            if (this.emit("flush"), !t) return !0;
            let n = await this._isClientDoneProcessing(e),
                r = await t.flush(e);
            return n && r
        }
        async close(e) {
            let t = await this.flush(e);
            return this.getOptions().enabled = !1, this.emit("close"), t
        }
        getEventProcessors() {
            return this._eventProcessors
        }
        addEventProcessor(e) {
            this._eventProcessors.push(e)
        }
        init() {
            (this._isEnabled() || this._options.integrations.some(({
                name: e
            }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
        }
        getIntegrationByName(e) {
            return this._integrations[e]
        }
        getIntegrationNames() {
            return Object.keys(this._integrations)
        }
        addIntegration(e) {
            let t = this._integrations[e.name];
            !t && e.beforeSetup && e.beforeSetup(this), tx(this, e, this._integrations), t || tE(this, [e])
        }
        sendEvent(e, t = {}) {
            var n, r, i;
            let o, s, a;
            this.emit("beforeSendEvent", e, t);
            let l = function(e, t) {
                    if ("transaction" !== e.type || !e.spans ? .length || !e.sdkProcessingMetadata ? .hasGenAiSpans || !1 === t.getOptions().streamGenAiSpans || om(t)) return;
                    let n = [],
                        r = [];
                    for (let t of e.spans) t.op ? .startsWith("gen_ai.") ? n.push(r9({
                        trace_id: t.trace_id,
                        span_id: t.span_id,
                        parent_span_id: t.parent_span_id,
                        name: t.description || "",
                        start_timestamp: t.start_timestamp,
                        end_timestamp: t.timestamp || t.start_timestamp,
                        status: t.status && "ok" !== t.status && "cancelled" !== t.status ? "error" : "ok",
                        is_segment: !1,
                        attributes: { ...t.data
                        },
                        links: t.links
                    })) : r.push(t);
                    if (0 === n.length) return;
                    e.spans = r;
                    let i = t.getDataCollectionOptions().userInfo ? "auto" : "never";
                    return [{
                        type: "span",
                        item_count: n.length,
                        content_type: "application/vnd.sentry.items.span.v2+json"
                    }, {
                        version: 2,
                        ...tI() && {
                            ingest_settings: {
                                infer_ip: i,
                                infer_user_agent: i
                            }
                        },
                        items: n
                    }]
                }(e, this),
                u = (n = this._dsn, r = this._options._metadata, i = this._options.tunnel, o = oC(r), s = e.type && "replay_event" !== e.type ? e.type : "event", ! function(e, t) {
                    if (!t) return;
                    let n = e.sdk || {};
                    e.sdk = { ...n,
                        name: n.name || t.name,
                        version: n.version || t.version,
                        integrations: [...e.sdk ? .integrations || [], ...t.integrations || []],
                        packages: [...e.sdk ? .packages || [], ...t.packages || []],
                        settings: e.sdk ? .settings || t.settings ? { ...e.sdk ? .settings,
                            ...t.settings
                        } : void 0
                    }
                }(e, r ? .sdk), a = oI(e, o, i, n), delete e.sdkProcessingMetadata, oy(a, [
                    [{
                        type: s
                    }, e]
                ]));
            for (let e of t.attachments || []) u = ov(u, function(e) {
                let t = "string" == typeof e.data ? ow(e.data) : e.data;
                return [{
                    type: "attachment",
                    length: t.length,
                    filename: e.filename,
                    content_type: e.contentType,
                    attachment_type: e.attachmentType
                }, t]
            }(e));
            l && (u = ov(u, l)), this.sendEnvelope(u).then(t => this.emit("afterSendEvent", e, t))
        }
        sendSession(e) {
            var t, n, r;
            let i, {
                release: o,
                environment: s = rc
            } = this._options;
            if ("aggregates" in e) {
                let t = e.attrs || {};
                if (!t.release && !o) {
                    ee && ea.warn(ut);
                    return
                }
                t.release = t.release || o, t.environment = t.environment || s, e.attrs = t
            } else {
                if (!e.release && !o) {
                    ee && ea.warn(ut);
                    return
                }
                e.release = e.release || o, e.environment = e.environment || s
            }
            this.emit("beforeSendSession", e);
            let a = (t = this._dsn, n = this._options._metadata, r = this._options.tunnel, i = oC(n), oy({
                sent_at: new Date(eR()).toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!r && t && {
                    dsn: rO(t)
                }
            }, ["aggregates" in e ? [{
                type: "sessions"
            }, e] : [{
                type: "session"
            }, e.toJSON()]]));
            this.sendEnvelope(a)
        }
        recordDroppedEvent(e, t, n = 1) {
            if (this._options.sendClientReports) {
                let r = `${e}:${t}`;
                ee && ea.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`), this._outcomes[r] = (this._outcomes[r] || 0) + n
            }
        }
        on(e, t) {
            let n = this._hooks[e] = this._hooks[e] || new Set,
                r = (...e) => t(...e);
            return n.add(r), () => {
                n.delete(r)
            }
        }
        emit(e, ...t) {
            let n = this._hooks[e];
            n && n.forEach(e => e(...t))
        }
        async sendEnvelope(e) {
            if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
                return await this._transport.send(e)
            } catch (e) {
                return ee && ea.error("Error while sending envelope:", e), {}
            }
            return ee && ea.error("Transport disabled"), {}
        }
        registerCleanup(e) {}
        dispose() {}
        _setupIntegrations() {
            var e;
            let t, {
                integrations: n
            } = this._options;
            this._integrations = (e = this, t = {}, n.forEach(t => {
                t ? .beforeSetup && t.beforeSetup(e)
            }), n.forEach(n => {
                n && tx(e, n, t)
            }), t), tE(this, n)
        }
        _updateSessionFromEvent(e, t) {
            let n = "fatal" === t.level,
                r = !1,
                i = t.exception ? .values;
            if (i) {
                for (let e of (r = !0, n = !1, i))
                    if (e.mechanism ? .handled === !1) {
                        n = !0;
                        break
                    }
            }
            let o = "ok" === e.status;
            (o && 0 === e.errors || o && n) && (e5(e, { ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(r || n)
            }), this.captureSession(e))
        }
        async _isClientDoneProcessing(e) {
            let t = 0;
            for (; !e || t < e;) {
                if (await new Promise(e => setTimeout(e, 1)), !this._numProcessing) return !0;
                t++
            }
            return !1
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._transport
        }
        _prepareEvent(e, t, n, r) {
            let i = this.getOptions(),
                o = this.getIntegrationNames();
            return !t.integrations && o.length && (t.integrations = o), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), iT(i, e, t, n, this, r).then(e => (null === e || (this.emit("postprocessEvent", e, t), e.contexts = {
                trace: { ...e.contexts ? .trace,
                    ...tv(n)
                },
                ...e.contexts
            }, e.sdkProcessingMetadata = {
                dynamicSamplingContext: iw(this, n),
                ...e.sdkProcessingMetadata
            }), e))
        }
        _captureEvent(e, t = {}, n = tf(), r = th()) {
            return ee && ud(e) && ea.log(`Captured error event \`${sp(e)[0]||"<unknown>"}\``), this._processEvent(e, t, n, r).then(e => e.event_id, e => {
                ee && (ua(e) ? ea.log(e.message) : us(e) ? ea.warn(e.message) : ea.warn(e))
            })
        }
        _processEvent(e, t, n, r) {
            let i = this.getOptions(),
                {
                    sampleRate: o
                } = i,
                s = up(e),
                a = ud(e),
                l = e.type || "error",
                u = `before send for type \`${l}\``,
                c = void 0 === o ? void 0 : rG(o),
                d = uc(e.type);
            return this._prepareEvent(e, t, n, r).then(e => {
                if (null === e) throw this.recordDroppedEvent("event_processor", d), uo("An event processor returned `null`, will not send event.");
                return t.data ? .__sentry__ === !0 ? e : function(e, t) {
                    let n = `${t} must return \`null\` or a valid event.`;
                    if (ev(e)) return e.then(e => {
                        if (!eg(e) && null !== e) throw ui(n);
                        return e
                    }, e => {
                        throw ui(`${t} rejected with ${e}`)
                    });
                    if (!eg(e) && null !== e) throw ui(n);
                    return e
                }(function(e, t, n, r) {
                    let {
                        beforeSend: i,
                        beforeSendTransaction: o,
                        ignoreSpans: s
                    } = t, a = !o_(t.beforeSendSpan) && t.beforeSendSpan, l = n;
                    if (ud(l) && i) return i(l, r);
                    if (up(l)) {
                        if (a || s) {
                            let t = function(e) {
                                let {
                                    trace_id: t,
                                    parent_span_id: n,
                                    span_id: r,
                                    status: i,
                                    origin: o,
                                    data: s,
                                    op: a
                                } = e.contexts ? .trace ? ? {};
                                return {
                                    data: s ? ? {},
                                    description: e.transaction,
                                    op: a,
                                    parent_span_id: n,
                                    span_id: r ? ? "",
                                    start_timestamp: e.start_timestamp ? ? 0,
                                    status: i,
                                    timestamp: e.timestamp,
                                    trace_id: t ? ? "",
                                    origin: o,
                                    profile_id: s ? .[rE],
                                    exclusive_time: s ? .[rx],
                                    measurements: e.measurements,
                                    is_segment: !0
                                }
                            }(l);
                            if (s ? .length && oh({
                                    description: t.description,
                                    op: t.op,
                                    attributes: t.data
                                }, s)) return null;
                            if (a) {
                                let e = a(t);
                                e ? l = e4(n, {
                                    type: "transaction",
                                    timestamp: e.timestamp,
                                    start_timestamp: e.start_timestamp,
                                    transaction: e.description,
                                    contexts: {
                                        trace: {
                                            trace_id: e.trace_id,
                                            span_id: e.span_id,
                                            parent_span_id: e.parent_span_id,
                                            op: e.op,
                                            status: e.status,
                                            origin: e.origin,
                                            data: { ...e.data,
                                                ...e.profile_id && {
                                                    [rE]: e.profile_id
                                                },
                                                ...e.exclusive_time && {
                                                    [rx]: e.exclusive_time
                                                }
                                            }
                                        }
                                    },
                                    measurements: e.measurements
                                }) : im()
                            }
                            if (l.spans) {
                                let t = [],
                                    n = l.spans;
                                for (let e of n) {
                                    if (s ? .length && oh({
                                            description: e.description,
                                            op: e.op,
                                            attributes: e.data
                                        }, s)) {
                                        ! function(e, t) {
                                            let n = t.parent_span_id,
                                                r = t.span_id;
                                            if (n)
                                                for (let t of e) t.parent_span_id === r && (t.parent_span_id = n)
                                        }(n, e);
                                        continue
                                    }
                                    if (a) {
                                        let n = a(e);
                                        n ? t.push(n) : (im(), t.push(e))
                                    } else t.push(e)
                                }
                                let r = l.spans.length - t.length;
                                r && e.recordDroppedEvent("before_send", "span", r), l.spans = t
                            }
                        }
                        if (o) {
                            if (l.spans) {
                                let e = l.spans.length;
                                l.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                                    spanCountBeforeProcessing: e
                                }
                            }
                            return o(l, r)
                        }
                    }
                    return l
                }(this, i, e, t), u)
            }).then(i => {
                if (null === i) {
                    if (this.recordDroppedEvent("before_send", d), s) {
                        let t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", t)
                    }
                    throw uo(`${u} returned \`null\`, will not send event.`)
                }
                let l = n.getSession() || r.getSession();
                if (a && l && this._updateSessionFromEvent(l, i), a && "number" == typeof c && eM() > c) throw this.recordDroppedEvent("sample_rate", "error"), uo(`Discarding event because it's not included in the random sample (sampling rate = ${o})`);
                if (s) {
                    let e = (i.sdkProcessingMetadata ? .spanCountBeforeProcessing || 0) - (i.spans ? i.spans.length : 0);
                    e > 0 && this.recordDroppedEvent("before_send", "span", e)
                }
                let p = i.transaction_info;
                return s && p && i.transaction !== e.transaction && (i.transaction_info = { ...p,
                    source: "custom"
                }), this.sendEvent(i, t), i
            }).then(null, e => {
                if (ua(e) || us(e)) throw e;
                throw this.captureException(e, {
                    mechanism: {
                        handled: !1,
                        type: "internal"
                    },
                    data: {
                        __sentry__: !0
                    },
                    originalException: e
                }), ui(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
            })
        }
        _process(e, t) {
            this._numProcessing++, this._promiseBuffer.add(e).then(e => (this._numProcessing--, e), e => (this._numProcessing--, e === o4 && this.recordDroppedEvent("queue_overflow", t), e))
        }
        _clearOutcomes() {
            let e = this._outcomes;
            return this._outcomes = {}, Object.entries(e).map(([e, t]) => {
                let [n, r] = e.split(":");
                return {
                    reason: n,
                    category: r,
                    quantity: t
                }
            })
        }
        _flushOutcomes() {
            var e;
            ee && ea.log("Flushing outcomes...");
            let t = this._clearOutcomes();
            if (0 === t.length) {
                ee && ea.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                ee && ea.log("No dsn provided, will not send outcomes");
                return
            }
            ee && ea.log("Sending outcomes:", t);
            let n = oy((e = this._options.tunnel && rO(this._dsn)) ? {
                dsn: e
            } : {}, [
                [{
                    type: "client_report"
                }, {
                    timestamp: e0(),
                    discarded_events: t
                }]
            ]);
            this.sendEnvelope(n)
        }
    }

    function uc(e) {
        return "replay_event" === e ? "replay" : e || "error"
    }

    function ud(e) {
        return void 0 === e.type
    }

    function up(e) {
        return "transaction" === e.type
    }

    function uf(e) {
        let t = 0;
        return e.name && (t += 2 * e.name.length), (t += 8) + um(e.attributes)
    }

    function uh(e) {
        let t = 0;
        return e.message && (t += 2 * e.message.length), t + um(e.attributes)
    }

    function um(e) {
        if (!e) return 0;
        let t = 0;
        return Object.values(e).forEach(e => {
            Array.isArray(e) ? t += e.length * ug(e[0]) : em(e) ? t += ug(e) : t += 100
        }), t
    }

    function ug(e) {
        return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : 4 * ("boolean" == typeof e)
    }

    function u_(e) {
        "aggregates" in e ? e.attrs ? .ip_address === void 0 && (e.attrs = { ...e.attrs,
            ip_address: "{{auto}}"
        }) : void 0 === e.ipAddress && (e.ipAddress = "{{auto}}")
    }

    function uy(e) {
        return eu(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__ ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message
    }

    function uv(e, t) {
        let n, r, i = uS(e, t),
            o = {
                type: !(n = t ? .name) && uk(t) ? t.message && Array.isArray(t.message) && 2 == t.message.length ? t.message[0] : "WebAssembly.Exception" : n,
                value: (r = t ? .message, uk(t) ? Array.isArray(t.message) && 2 == t.message.length ? t.message[1] : "wasm exception" : r ? r.error && "string" == typeof r.error.message ? uy(r.error) : uy(t) : "No error message")
            };
        return i.length && (o.stacktrace = {
            frames: i
        }), void 0 === o.type && "" === o.value && (o.value = "Unrecoverable error caught"), o
    }

    function ub(e, t) {
        return {
            exception: {
                values: [uv(e, t)]
            }
        }
    }

    function uS(e, t) {
        let n = t.stacktrace || t.stack || "",
            r = t && uw.test(t.message) ? 1 : 0,
            i = "number" == typeof t.framesToPop ? t.framesToPop : 0;
        try {
            return e(n, r, i)
        } catch {}
        return []
    }
    let uw = /Minified React error #\d+;/i;

    function uk(e) {
        return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
    }

    function uE(e, t, n, r) {
        let i = uC(e, t, n ? .syntheticException || void 0, r);
        return eX(i), i.level = "error", n ? .event_id && (i.event_id = n.event_id), rd(i)
    }

    function ux(e, t, n = "info", r, i) {
        let o = uI(e, t, r ? .syntheticException || void 0, i);
        return o.level = n, r ? .event_id && (o.event_id = r.event_id), rd(o)
    }

    function uC(e, t, n, r, i) {
        let o;
        if (ed(t) && t.error) return ub(e, t.error);
        if (ep(t) || ec(t, "DOMException")) {
            if ("stack" in t) {
                o = ub(e, t);
                let i = o.exception ? .values ? .[0];
                if (r && n && i && !i.stacktrace) {
                    let t = uS(e, n);
                    t.length && (i.stacktrace = {
                        frames: t
                    }, eX(o, {
                        synthetic: !0
                    }))
                }
            } else {
                let i = t.name || (ep(t) ? "DOMError" : "DOMException"),
                    s = t.message ? `${i}: ${t.message}` : i;
                eQ(o = uI(e, s, n, r), s)
            }
            return "code" in t && (o.tags = { ...o.tags,
                "DOMException.code": `${t.code}`
            }), o
        }
        return eu(t) ? ub(e, t) : (eg(t) || ey(t) ? eX(o = function(e, t, n, r) {
            let i = ty(),
                o = i ? .getOptions().normalizeDepth,
                s = Object.values(t).find(eu),
                a = {
                    __serialized__: function e(t, n = 3, r = 102400) {
                        let i = eB(t, n);
                        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                    }(t, o)
                };
            if (s) return {
                exception: {
                    values: [uv(e, s)]
                },
                extra: a
            };
            let l = {
                exception: {
                    values: [{
                        type: ey(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: function(e, {
                            isUnhandledRejection: t
                        }) {
                            let n, r = ((n = Object.keys(eC(e))).sort(), n[0] ? n.join(", ") : "[object has no keys]"),
                                i = t ? "promise rejection" : "exception";
                            if (ed(e)) return `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\``;
                            if (ey(e)) {
                                let t = function(e) {
                                    try {
                                        let t = Object.getPrototypeOf(e);
                                        return t ? t.constructor.name : void 0
                                    } catch {}
                                }(e);
                                return `Event \`${t}\` (type=${e.type}) captured as ${i}`
                            }
                            return `Object captured as ${i} with keys: ${r}`
                        }(t, {
                            isUnhandledRejection: r
                        })
                    }]
                },
                extra: a
            };
            if (n) {
                let t = uS(e, n);
                t.length && (l.exception.values[0].stacktrace = {
                    frames: t
                })
            }
            return l
        }(e, t, n, i), {
            synthetic: !0
        }) : (eQ(o = uI(e, t, n, r), `${t}`, void 0), eX(o, {
            synthetic: !0
        })), o)
    }

    function uI(e, t, n, r) {
        let i = {};
        if (r && n) {
            let r = uS(e, n);
            r.length && (i.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: r
                    }
                }]
            }), eX(i, {
                synthetic: !0
            })
        }
        if (eh(t)) {
            let {
                __sentry_template_string__: e,
                __sentry_template_values__: n
            } = t;
            return i.logentry = {
                message: e,
                params: n
            }, i
        }
        return i.message = t, i
    }
    class uT extends uu {
        constructor(e) {
            let t = {
                release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : iX.SENTRY_RELEASE ? .id,
                sendClientReports: !0,
                parentSpanIsAlwaysRootSpan: !0,
                ...e
            };
            ! function(e, t, n = [t], r = "npm") {
                let i = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
                i.name || (i.name = `sentry.javascript.${t}`, i.packages = n.map(e => ({
                    name: `${r}:@sentry/${e}`,
                    version: K
                })), i.version = K)
            }(t, "browser", ["browser"], iX.SENTRY_SDK_SOURCE || "npm"), super(t);
            let {
                userInfo: n
            } = this.getDataCollectionOptions();
            t._metadata ? .sdk && (t._metadata.sdk.settings = {
                infer_ip: n ? "auto" : "never",
                ...t._metadata.sdk.settings
            });
            let {
                sendClientReports: r
            } = this._options;
            iX.document && iX.document.addEventListener("visibilitychange", () => {
                "hidden" === iX.document.visibilityState && (r && this._flushOutcomes(), queueMicrotask(() => {
                    this.flush()
                }))
            }), n && this.on("beforeSendSession", u_)
        }
        eventFromException(e, t) {
            return uE(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e, t = "info", n) {
            return ux(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        }
        _prepareEvent(e, t, n, r) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
        }
    }

    function uM(e) {
        return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function uR() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (! function() {
                if (!("fetch" in Y)) return !1;
                try {
                    return new Headers, new Request("data:,"), new Response, !0
                } catch {
                    return !1
                }
            }()) return !1;
        if (uM(Y.fetch)) return !0;
        let e = !1,
            t = Y.document;
        if (t && "function" == typeof t.createElement) try {
            let n = t.createElement("iframe");
            n.hidden = !0, t.head.appendChild(n), n.contentWindow ? .fetch && (e = uM(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {
            ee && ea.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
    }
    let uA = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        uO = {};

    function uP(e) {
        let t = uO[e];
        if (t) return t;
        let n = Y[e];
        if (uM(n)) return uO[e] = n.bind(Y);
        let r = Y.document;
        if (r && "function" == typeof r.createElement) try {
            let t = r.createElement("iframe");
            t.hidden = !0, r.head.appendChild(t);
            let i = t.contentWindow;
            i ? .[e] && (n = i[e]), r.head.removeChild(t)
        } catch (t) {
            uA && ea.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
        }
        return n ? uO[e] = n.bind(Y) : n
    }

    function uN(...e) {
        return uP("setTimeout")(...e)
    }

    function uD(e, t = uP("fetch")) {
        let n = 0,
            r = 0;
        return se(e, async function(i) {
            let o = i.body.length;
            n += o, r++;
            let s = {
                body: i.body,
                method: "POST",
                referrerPolicy: "strict-origin",
                headers: e.headers,
                keepalive: n <= 6e4 && r < 15,
                ...e.fetchOptions
            };
            try {
                let n = await t(e.url, s);
                return {
                    statusCode: n.status,
                    headers: {
                        "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": n.headers.get("Retry-After")
                    }
                }
            } catch (e) {
                throw uO.fetch = void 0, e
            } finally {
                n -= o, r--
            }
        }, o6(e.bufferSize || 40))
    }
    let uL = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        u$ = {
            startProfiler: function() {
                let e = ty();
                if (!e) {
                    uL && ea.warn("No Sentry client available, profiling is not started");
                    return
                }
                if (!e.getIntegrationByName("BrowserProfiling")) {
                    uL && ea.warn("BrowserProfiling integration is not available");
                    return
                }
                e.emit("startUIProfiler")
            },
            stopProfiler: function() {
                let e = ty();
                if (!e) {
                    uL && ea.warn("No Sentry client available, profiling is not started");
                    return
                }
                if (!e.getIntegrationByName("BrowserProfiling")) {
                    uL && ea.warn("ProfilingIntegration is not available");
                    return
                }
                e.emit("stopUIProfiler")
            }
        };

    function uj(e, t, n, r) {
        let i = {
            filename: e,
            function: "<anonymous>" === t ? "?" : t,
            in_app: !0
        };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
    }
    let uF = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        uB = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        uU = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        uW = /at (.+?) ?\(data:(.+?),/,
        uq = [30, e => {
            let t = e.match(uW);
            if (t) return {
                filename: `<data:${t[2]}>`,
                function: t[1]
            };
            let n = uF.exec(e);
            if (n) {
                let [, e, t, r] = n;
                return uj(e, "?", +t, +r)
            }
            let r = uB.exec(e);
            if (r) {
                if (r[2] ? .indexOf("eval") === 0) {
                    let e = uU.exec(r[2]);
                    e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
                }
                let [e, t] = u1(r[1] || "?", r[2]);
                return uj(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
            }
        }],
        uH = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        uz = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        uJ = [50, e => {
            let t = uH.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = uz.exec(t[3]);
                    e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                }
                let e = t[3],
                    n = t[1] || "?";
                return [n, e] = u1(n, e), uj(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }],
        uV = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        uG = [40, e => {
            let t = uV.exec(e);
            return t ? uj(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0
        }],
        uY = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        uK = [10, e => {
            let t = uY.exec(e);
            return t ? uj(t[2], t[3] || "?", +t[1]) : void 0
        }],
        uQ = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        uX = [20, e => {
            let t = uQ.exec(e);
            return t ? uj(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0
        }],
        uZ = [uq, uJ],
        u0 = eD(...uZ),
        u1 = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension"),
                r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        };

    function u2(e, {
        metadata: t,
        tunnel: n,
        dsn: r
    }) {
        return oy({
            event_id: e.event_id,
            sent_at: (new Date).toISOString(),
            ...t ? .sdk && {
                sdk: {
                    name: t.sdk.name,
                    version: t.sdk.version
                }
            },
            ...!!n && !!r && {
                dsn: rO(r)
            }
        }, [
            [{
                type: "user_report"
            }, e]
        ])
    }

    function u3(e, t) {
        let n = "fetch",
            r = i9(n, e);
        return oe(n, () => u5(void 0, t)), r
    }

    function u5(e, t = !1) {
        (!t || uR()) && ew(Y, "fetch", function(t) {
            return function(...n) {
                let r = Error(),
                    {
                        method: i,
                        url: o
                    } = function(e) {
                        if (0 === e.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === e.length) {
                            let [t, n] = e;
                            return {
                                url: u8(t),
                                method: u6(n, "method") ? String(n.method).toUpperCase() : eS(t) && u6(t, "method") ? String(t.method).toUpperCase() : "GET"
                            }
                        }
                        let t = e[0];
                        return {
                            url: u8(t),
                            method: u6(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(n),
                    s = {
                        args: n,
                        fetchData: {
                            method: i,
                            url: o
                        },
                        startTimestamp: 1e3 * e1(),
                        virtualError: r,
                        headers: function(e) {
                            let [t, n] = e;
                            try {
                                if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                                if (eS(t)) return new Headers(t.headers)
                            } catch {}
                        }(n)
                    };
                return e || ot("fetch", { ...s
                }), t.apply(Y, n).then(async t => (e ? e(t) : ot("fetch", { ...s,
                    endTimestamp: 1e3 * e1(),
                    response: t
                }), t), e => {
                    ot("fetch", { ...s,
                        endTimestamp: 1e3 * e1(),
                        error: e
                    }), eu(e) && void 0 === e.stack && (e.stack = r.stack, ek(e, "framesToPop", 1));
                    let t = ty(),
                        n = t ? .getOptions().enhanceFetchErrorMessages ? ? "always";
                    if (!1 !== n && eu(e) && "TypeError" === e.name && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                        let t = new URL(s.fetchData.url).host;
                        "always" === n ? e.message = `${e.message} (${t})` : ek(e, "__sentry_fetch_url_host__", t)
                    } catch {}
                    throw e
                })
            }
        })
    }

    function u4(e) {
        let t;
        try {
            t = e.clone()
        } catch {
            return
        }!async function(e, t) {
            if (e ? .body) {
                let n = e.body,
                    r = n.getReader(),
                    i = setTimeout(() => {
                        n.cancel().then(null, () => {})
                    }, 9e4),
                    o = !0;
                for (; o;) {
                    let e;
                    try {
                        e = setTimeout(() => {
                            n.cancel().then(null, () => {})
                        }, 5e3);
                        let {
                            done: i
                        } = await r.read();
                        clearTimeout(e), i && (t(), o = !1)
                    } catch {
                        o = !1
                    } finally {
                        clearTimeout(e)
                    }
                }
                clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {})
            }
        }(t, () => {
            ot("fetch-body-resolved", {
                endTimestamp: 1e3 * e1(),
                response: e
            })
        })
    }

    function u6(e, t) {
        return e_(e) && !!e[t]
    }

    function u8(e) {
        return "string" == typeof e ? e : e ? u6(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
    }

    function u7(e) {
        if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
    }

    function u9(e) {
        return "isRelative" in e
    }

    function ce(e, t) {
        let n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
            r = t ? ? (n ? "thismessage:/" : void 0);
        try {
            if ("canParse" in URL && !URL.canParse(e, r)) return;
            let t = new URL(e, r);
            if (n) return {
                isRelative: n,
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            };
            return t
        } catch {}
    }

    function ct(e) {
        if (u9(e)) return e.pathname;
        let t = new URL(e);
        return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
    }

    function cn(e) {
        if (!e) return {};
        let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        let n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: n,
            hash: r,
            relative: t[5] + n + r
        }
    }

    function cr(e) {
        return e.split(/[?#]/, 1)[0]
    }

    function ci(e, t = !0) {
        if (e.startsWith("data:")) {
            let n = e.match(/^data:([^;,]+)/),
                r = n ? n[1] : "text/plain",
                i = e.includes(";base64,"),
                o = e.indexOf(","),
                s = "";
            if (t && -1 !== o) {
                let t = e.slice(o + 1);
                s = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
            }
            return `data:${r}${i?",base64":""}${s?`,${s}`:""}`
        }
        return e
    }

    function co(e) {
        i9("dom", e), oe("dom", cs)
    }

    function cs() {
        if (!Y.document) return;
        let e = ot.bind(null, "dom"),
            t = ca(e, !0);
        Y.document.addEventListener("click", t, !1), Y.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
            let n = Y[t] ? .prototype;
            n ? .hasOwnProperty ? .("addEventListener") && (ew(n, "addEventListener", function(t) {
                return function(n, r, i) {
                    if ("click" === n || "keypress" == n) try {
                        let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                            o = r[n] = r[n] || {
                                refCount: 0
                            };
                        if (!o.handler) {
                            let r = ca(e);
                            o.handler = r, t.call(this, n, r, i)
                        }
                        o.refCount++
                    } catch {}
                    return t.call(this, n, r, i)
                }
            }), ew(n, "removeEventListener", function(e) {
                return function(t, n, r) {
                    if ("click" === t || "keypress" == t) try {
                        let n = this.__sentry_instrumentation_handlers__ || {},
                            i = n[t];
                        i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                    } catch {}
                    return e.call(this, t, n, r)
                }
            }))
        })
    }

    function ca(e, t = !1) {
        return n => {
            if (!n || n._sentryCaptured) return;
            let r = function(e) {
                try {
                    return e.target
                } catch {
                    return null
                }
            }(n);
            if ("keypress" === n.type && (!r ? .tagName || "INPUT" !== r.tagName && "TEXTAREA" !== r.tagName && !r.isContentEditable && 1)) return;
            ek(n, "_sentryCaptured", !0), r && !r._sentryId && ek(r, "_sentryId", eG());
            let i = "keypress" === n.type ? "input" : n.type;
            ! function(e) {
                if (e.type !== m) return !1;
                try {
                    if (!e.target || e.target._sentryId !== g) return !1
                } catch {}
                return !0
            }(n) && (e({
                event: n,
                name: i,
                global: t
            }), m = n.type, g = r ? r._sentryId : void 0), clearTimeout(h), h = Y.setTimeout(() => {
                g = void 0, m = void 0
            }, 1e3)
        }
    }
    let cl = "__sentry_xhr_v3__";

    function cu(e) {
        i9("xhr", e), oe("xhr", cc)
    }

    function cc() {
        if (!Y.XMLHttpRequest) return;
        let e = XMLHttpRequest.prototype;
        e.open = new Proxy(e.open, {
            apply(e, t, n) {
                let r = Error(),
                    i = 1e3 * e1(),
                    o = ef(n[0]) ? n[0].toUpperCase() : void 0,
                    s = function(e) {
                        if (ef(e)) return e;
                        try {
                            return e.toString()
                        } catch {}
                    }(n[1]);
                if (!o || !s) return e.apply(t, n);
                t[cl] = {
                    method: o,
                    url: s,
                    request_headers: {}
                }, "POST" === o && s.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                let a = () => {
                    let e = t[cl];
                    if (e && 4 === t.readyState) {
                        try {
                            e.status_code = t.status
                        } catch {}
                        ot("xhr", {
                            endTimestamp: 1e3 * e1(),
                            startTimestamp: i,
                            xhr: t,
                            virtualError: r
                        }), t.removeEventListener("readystatechange", a)
                    }
                };
                return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                    apply: (e, t, n) => (a(), e.apply(t, n))
                }) : t.addEventListener("readystatechange", a), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, n) {
                        let [r, i] = n, o = t[cl];
                        return o && ef(r) && ef(i) && (o.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                    }
                }), e.apply(t, n)
            }
        }), e.send = new Proxy(e.send, {
            apply(e, t, n) {
                let r = t[cl];
                return r && (void 0 !== n[0] && (r.body = n[0]), ot("xhr", {
                    startTimestamp: 1e3 * e1(),
                    xhr: t
                })), e.apply(t, n)
            }
        })
    }

    function cd(e) {
        let t = "history";
        i9(t, e), oe(t, cp)
    }

    function cp() {
        function e(e) {
            return function(...t) {
                let n = t.length > 2 ? t[2] : void 0;
                if (n) {
                    let r = _,
                        i = function(e) {
                            try {
                                return new URL(e, Y.location.origin).toString()
                            } catch {
                                return e
                            }
                        }(String(n));
                    if (_ = i, r === i) return e.apply(this, t);
                    ot("history", {
                        from: r,
                        to: i
                    })
                }
                return e.apply(this, t)
            }
        }
        Y.addEventListener("popstate", () => {
            let e = Y.location.href,
                t = _;
            _ = e, t === e || ot("history", {
                from: t,
                to: e
            })
        }), "history" in Y && Y.history && (ew(Y.history, "pushState", e), ew(Y.history, "replaceState", e))
    }
    let cf = {};
    try {
        "u" > typeof Node && (cf.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), "u" > typeof Element && (cf.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, cf.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, cf.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, cf.getAttribute = Element.prototype.getAttribute), "u" > typeof HTMLElement && (cf.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get)
    } catch {}

    function ch(e, t, n) {
        let r = cf[t];
        if (r) try {
            return r.call(e, n)
        } catch {}
        let i = e[t];
        return "function" == typeof i ? i.call(e, n) : i
    }

    function cm(e, t = {}) {
        if (!e) return "<unknown>";
        try {
            let n, r = e,
                i = [],
                o = 0,
                s = 0,
                a = Array.isArray(t) ? t : t.keyAttrs,
                l = !Array.isArray(t) && t.maxStringLength || 80;
            for (; r && o++ < 5 && (n = function(e, t) {
                    let n = [],
                        r = ch(e, "tagName");
                    if (!r) return "";
                    if ("u" > typeof HTMLElement && e instanceof HTMLElement) {
                        let t = ch(e, "dataset");
                        if (t) {
                            if (t.sentryComponent) return t.sentryComponent;
                            if (t.sentryElement) return t.sentryElement
                        }
                    }
                    n.push(r.toLowerCase());
                    let i = t ? .length ? t.filter(t => ch(e, "getAttribute", t)).map(t => [t, ch(e, "getAttribute", t)]) : null;
                    if (i ? .length) i.forEach(e => {
                        n.push(`[${e[0]}="${e[1]}"]`)
                    });
                    else {
                        let t = ch(e, "id");
                        t && n.push(`#${t}`);
                        let r = ch(e, "className");
                        if (r && ef(r))
                            for (let e of r.split(/\s+/)) n.push(`.${e}`)
                    }
                    for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                        let r = ch(e, "getAttribute", t);
                        r && n.push(`[${t}="${r}"]`)
                    }
                    return n.join("")
                }(r, a), "html" !== n && (!(o > 1) || !(s + 3 * i.length + n.length >= l)));) i.push(n), s += n.length, r = ch(r, "parentNode");
            return i.reverse().join(" > ")
        } catch {
            return "<unknown>"
        }
    }
    let cg = (e = {}) => {
            let t = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
            return {
                name: "Breadcrumbs",
                setup(e) {
                    var n;
                    t.console && sE(function(t) {
                        if (ty() !== e) return;
                        let n = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console"
                            },
                            level: sI(t.level),
                            message: ez(t.args, " ")
                        };
                        if ("assert" === t.level)
                            if (!1 !== t.args[0]) return;
                            else n.message = `Assertion failed: ${ez(t.args.slice(1)," ")||"console.assert"}`, n.data.arguments = t.args.slice(1);
                        su(n, {
                            input: t.args,
                            level: t.level
                        })
                    }), t.dom && co((n = t.dom, function(t) {
                        let r, i;
                        if (ty() !== e) return;
                        let o = "object" == typeof n ? n.serializeAttribute : void 0,
                            s = "object" == typeof n && "number" == typeof n.maxStringLength ? n.maxStringLength : void 0;
                        s && s > 1024 && (uL && ea.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), s = 1024), "string" == typeof o && (o = [o]);
                        try {
                            let e = t.event,
                                n = e && e.target ? e.target : e;
                            r = cm(n, {
                                keyAttrs: o,
                                maxStringLength: s
                            }), i = tw(n)
                        } catch {
                            r = "<unknown>"
                        }
                        if (0 === r.length) return;
                        let a = {
                            category: `ui.${t.name}`,
                            message: r
                        };
                        i && (a.data = {
                            "ui.component_name": i
                        }), su(a, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    })), t.xhr && cu(function(t) {
                        if (ty() !== e) return;
                        let {
                            startTimestamp: n,
                            endTimestamp: r
                        } = t, i = t.xhr[cl];
                        if (!n || !r || !i) return;
                        let {
                            method: o,
                            url: s,
                            status_code: a,
                            body: l
                        } = i, u = {
                            xhr: t.xhr,
                            input: l,
                            startTimestamp: n,
                            endTimestamp: r
                        }, c = {
                            category: "xhr",
                            data: {
                                method: o,
                                url: s,
                                status_code: a
                            },
                            type: "http",
                            level: u7(a)
                        };
                        e.emit("beforeOutgoingRequestBreadcrumb", c, u), su(c, u)
                    }), t.fetch && u3(function(t) {
                        if (ty() !== e) return;
                        let {
                            startTimestamp: n,
                            endTimestamp: r
                        } = t;
                        if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                            if (t.error) {
                                let i = {
                                        data: t.error,
                                        input: t.args,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    },
                                    o = {
                                        category: "fetch",
                                        data: t.fetchData,
                                        level: "error",
                                        type: "http"
                                    };
                                e.emit("beforeOutgoingRequestBreadcrumb", o, i), su(o, i)
                            } else {
                                let i = t.response,
                                    o = { ...t.fetchData,
                                        status_code: i ? .status
                                    },
                                    s = {
                                        input: t.args,
                                        response: i,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    },
                                    a = {
                                        category: "fetch",
                                        data: o,
                                        type: "http",
                                        level: u7(o.status_code)
                                    };
                                e.emit("beforeOutgoingRequestBreadcrumb", a, s), su(a, s)
                            }
                    }), t.history && cd(function(t) {
                        if (ty() !== e) return;
                        let n = t.from,
                            r = t.to,
                            i = cn(iX.location.href),
                            o = n ? cn(n) : void 0,
                            s = cn(r);
                        o ? .path || (o = i), i.protocol === s.protocol && i.host === s.host && (r = s.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), su({
                            category: "navigation",
                            data: {
                                from: n,
                                to: r
                            }
                        })
                    }), t.sentry && e.on("beforeSendEvent", function(t) {
                        ty() === e && su({
                            category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
                            event_id: t.event_id,
                            level: t.level,
                            message: eK(t)
                        }, {
                            event: t
                        })
                    })
                }
            }
        },
        c_ = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","),
        cy = (e = {}) => {
            let t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                unregisterOriginalCallbacks: !1,
                ...e
            };
            return {
                name: "BrowserApiErrors",
                setupOnce() {
                    t.setTimeout && ew(iX, "setTimeout", cv), t.setInterval && ew(iX, "setInterval", cv), t.requestAnimationFrame && ew(iX, "requestAnimationFrame", cb), t.XMLHttpRequest && "XMLHttpRequest" in iX && ew(XMLHttpRequest.prototype, "send", cS);
                    let e = t.eventTarget;
                    e && (Array.isArray(e) ? e : c_).forEach(e => {
                        let n;
                        return n = iX[e] ? .prototype, void(n ? .hasOwnProperty ? .("addEventListener") && (ew(n, "addEventListener", function(n) {
                            return function(r, i, o) {
                                try {
                                    "function" == typeof i.handleEvent && (i.handleEvent = i0(i.handleEvent, {
                                        mechanism: {
                                            data: {
                                                handler: ej(i),
                                                target: e
                                            },
                                            handled: !1,
                                            type: "auto.browser.browserapierrors.handleEvent"
                                        }
                                    }))
                                } catch {}
                                return t.unregisterOriginalCallbacks && this && "object" == typeof this && "removeEventListener" in this && "function" == typeof this.removeEventListener && this.removeEventListener(r, i), n.apply(this, [r, i0(i, {
                                    mechanism: {
                                        data: {
                                            handler: ej(i),
                                            target: e
                                        },
                                        handled: !1,
                                        type: "auto.browser.browserapierrors.addEventListener"
                                    }
                                }), o])
                            }
                        }), ew(n, "removeEventListener", function(e) {
                            return function(t, n, r) {
                                try {
                                    if (Object.prototype.hasOwnProperty.call(n, "__sentry_wrapped__")) {
                                        let i = n.__sentry_wrapped__;
                                        i && e.call(this, t, i, r)
                                    }
                                } catch {}
                                return e.call(this, t, n, r)
                            }
                        })))
                    })
                }
            }
        };

    function cv(e) {
        return function(...t) {
            let n = t[0];
            return t[0] = i0(n, {
                mechanism: {
                    handled: !1,
                    type: `auto.browser.browserapierrors.${ej(e)}`
                }
            }), e.apply(this, t)
        }
    }

    function cb(e) {
        return function(t) {
            return e.apply(this, [i0(t, {
                mechanism: {
                    data: {
                        handler: ej(e)
                    },
                    handled: !1,
                    type: "auto.browser.browserapierrors.requestAnimationFrame"
                }
            })])
        }
    }

    function cS(e) {
        return function(...t) {
            let n = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                e in n && "function" == typeof n[e] && ew(n, e, function(t) {
                    let n = {
                            mechanism: {
                                data: {
                                    handler: ej(t)
                                },
                                handled: !1,
                                type: `auto.browser.browserapierrors.xhr.${e}`
                            }
                        },
                        r = ex(t);
                    return r && (n.mechanism.data.handler = ej(r)), i0(t, n)
                })
            }), e.apply(this, t)
        }
    }

    function cw(e, t, n) {
        Y.document && Y.addEventListener(e, t, n)
    }

    function ck(e, t, n) {
        Y.document && Y.removeEventListener(e, t, n)
    }
    let cE = e => {
            let t = !1;
            return () => {
                t || (e(), t = !0)
            }
        },
        cx = e => {
            let t = Y.requestIdleCallback || Y.setTimeout;
            Y.document ? .visibilityState === "hidden" ? e() : (cw("visibilitychange", e = cE(e), {
                once: !0,
                capture: !0
            }), cw("pagehide", e, {
                once: !0,
                capture: !0
            }), t(() => {
                e(), ck("visibilitychange", e, {
                    capture: !0
                }), ck("pagehide", e, {
                    capture: !0
                })
            }))
        },
        cC = (e = {}) => {
            let t = e.lifecycle ? ? "route";
            return {
                name: "BrowserSession",
                setupOnce() {
                    if (void 0 === iX.document) {
                        uL && ea.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                        return
                    }
                    iG({
                        ignoreDuration: !0
                    });
                    let e = !1;
                    cx(() => {
                        e || (iQ(), e = !0)
                    });
                    let n = th(),
                        r = n.getUser();
                    n.addScopeListener(t => {
                        let n = t.getUser();
                        (r ? .id !== n ? .id || r ? .ip_address !== n ? .ip_address) && (r = n, e && iQ())
                    }), "route" === t && cd(({
                        from: t,
                        to: n
                    }) => {
                        t !== n && (iG({
                            ignoreDuration: !0
                        }), iQ(), e = !0)
                    })
                }
            }
        },
        cI = "graphql.document",
        cT = "http.url",
        cM = "sentry.segment.name",
        cR = "sentry.transaction",
        cA = "url.full";

    function cO(e, t) {
        let n = e.attributes ? ? (e.attributes = {});
        Object.entries(t).forEach(([e, t]) => {
            null == t || e in n || (n[e] = t)
        })
    }
    let cP = () => ({
        name: "CultureContext",
        preprocessEvent(e) {
            let t = cN();
            t && (e.contexts = { ...e.contexts,
                culture: { ...t,
                    ...e.contexts ? .culture
                }
            })
        },
        processSegmentSpan(e) {
            let t = cN();
            t && cO(e, {
                "culture.locale": t.locale,
                "culture.timezone": t.timezone,
                "culture.calendar": t.calendar
            })
        }
    });

    function cN() {
        try {
            let e = iX.Intl;
            if (!e) return;
            let t = e.DateTimeFormat().resolvedOptions();
            return {
                locale: t.locale,
                timezone: t.timeZone,
                calendar: t.calendar
            }
        } catch {
            return
        }
    }
    let cD = (e = {}) => {
        let t = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        };
        return {
            name: "GlobalHandlers",
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(e) {
                t.onerror && (or(t => {
                    var n;
                    let r, i, o, s, a, {
                        stackParser: l,
                        attachStacktrace: u
                    } = cF();
                    if (ty() !== e || iZ > 0) return;
                    let {
                        msg: c,
                        url: d,
                        line: p,
                        column: f,
                        error: h
                    } = t, m = (0 === (a = (s = (o = (i = (r = (n = uC(l, h || c, void 0, u, !1)).exception = n.exception || {}).values = r.values || [])[0] = i[0] || {}).stacktrace = o.stacktrace || {}).frames = s.frames || []).length && a.push({
                        colno: f,
                        lineno: p,
                        filename: function(e) {
                            if (ef(e) && 0 !== e.length) return e.startsWith("data:") ? `<${ci(e,!1)}>` : e
                        }(d) ? ? tS(),
                        function: "?",
                        in_app: !0
                    }), n);
                    m.level = "error", iO(m, {
                        originalException: h,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.global_handlers.onerror"
                        }
                    })
                }), cj("onerror")), t.onunhandledrejection && (os(t => {
                    let {
                        stackParser: n,
                        attachStacktrace: r
                    } = cF();
                    if (ty() !== e || iZ > 0) return;
                    let i = cL(t),
                        o = em(i) ? c$(i) : uC(n, i, void 0, r, !0);
                    o.level = "error", iO(o, {
                        originalException: i,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.global_handlers.onunhandledrejection"
                        }
                    })
                }), cj("onunhandledrejection"))
            }
        }
    };

    function cL(e) {
        if (em(e)) return e;
        try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && "reason" in e.detail) return e.detail.reason
        } catch {}
        return e
    }

    function c$(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function cj(e) {
        uL && ea.log(`Global Handler attached: ${e}`)
    }

    function cF() {
        let e = ty();
        return e ? .getOptions() || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    }
    let cB = () => ({
        name: "HttpContext",
        preprocessEvent(e) {
            if (!iX.navigator && !iX.location && !iX.document) return;
            let t = i1(),
                n = { ...t.headers,
                    ...e.request ? .headers
                };
            e.request = { ...t,
                ...e.request,
                headers: n
            }
        },
        processSpan(e) {
            if (!iX.navigator && !iX.location && !iX.document) return;
            let t = i1();
            cO(e, {
                "user_agent.original": t.headers["User-Agent"],
                ...e.is_segment && {
                    [cA]: e.attributes ? .["sentry.op"] !== "http.client" ? t.url : void 0,
                    "http.request.header.referer": t.headers.Referer
                }
            })
        }
    });

    function cU(e) {
        return Array.isArray(e.errors)
    }

    function cW(e, t, n) {
        e.mechanism = {
            handled: !0,
            type: "auto.core.linked_errors",
            ...cU(n) && {
                is_exception_group: !0
            },
            ...e.mechanism,
            exception_id: t
        }
    }

    function cq(e, t, n, r) {
        e.mechanism = {
            handled: !0,
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: n,
            parent_id: r
        }
    }
    let cH = (e = {}) => {
            let t = e.limit || 5,
                n = e.key || "cause";
            return {
                name: "LinkedErrors",
                preprocessEvent(e, r, i) {
                    ! function(e, t, n, r, i, o) {
                        if (!i.exception ? .values || !o || !eu(o.originalException)) return;
                        let s = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
                        s && (i.exception.values = function e(t, n, r, i, o, s, a, l) {
                            if (s.length >= r + 1) return s;
                            let u = [...s];
                            if (eu(i[o])) {
                                cW(a, l, i);
                                let s = t(n, i[o]),
                                    c = u.length;
                                cq(s, o, c, l), u = e(t, n, r, i[o], o, [s, ...u], s, c)
                            }
                            return cU(i) && i.errors.forEach((s, c) => {
                                if (eu(s)) {
                                    cW(a, l, i);
                                    let d = t(n, s),
                                        p = u.length;
                                    cq(d, `errors[${c}]`, p, l), u = e(t, n, r, s, o, [d, ...u], d, p)
                                }
                            }), u
                        }(e, t, r, o.originalException, n, i.exception.values, s, 0))
                    }(uv, i.getOptions().stackParser, n, t, e, r)
                }
            }
        },
        cz = /^HTML(\w*)Element$/;

    function cJ(e) {
        if ("u" > typeof window && e === window) return "[Window]";
        if ("u" > typeof document && e === document) return "[Document]";
        if (function(e) {
                if ("u" < typeof Element) return !1;
                try {
                    return e instanceof Element
                } catch {
                    return !1
                }
            }(e)) {
            let t, n = (t = Object.getPrototypeOf(e), t ? .constructor ? t.constructor.name : "null prototype");
            if (cz.test(n)) return `[HTMLElement: ${cm(e)}]`
        }
    }

    function cV(e) {
        return [sm(), sd(), {
            name: "ConversationId",
            setup(e) {
                e.on("spanStart", e => {
                    let t = tf().getScopeData(),
                        n = th().getScopeData(),
                        r = t.conversationId || n.conversationId;
                    if (r) {
                        let {
                            op: t,
                            data: n,
                            description: i
                        } = r6(e);
                        if (!t ? .startsWith("gen_ai.") && !n["ai.operationId"] && !i ? .startsWith("ai.")) return;
                        e.setAttribute("gen_ai.conversation.id", r)
                    }
                })
            }
        }, cy(), cg(), cD(), cH(), sM(), cB(), cP(), cC()]
    }

    function cG(e = {}) {
        var t;
        let n, r = !e.skipBrowserExtensionCheck && !! function() {
                if (void 0 === iX.window || iX.nw) return !1;
                let e = iX.chrome || iX.browser;
                if (!e ? .runtime ? .id) return !1;
                let t = tS();
                return !(iX === iX.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t))
            }() && (uL && er(() => {}), !0),
            o = null == e.defaultIntegrations ? cV() : e.defaultIntegrations,
            s = { ...e,
                enabled: !r && e.enabled,
                stackParser: Array.isArray(t = e.stackParser || u0) ? eD(...t) : t,
                integrations: function(e) {
                    let t, n, r = e.defaultIntegrations || [],
                        i = e.integrations;
                    if (r.forEach(e => {
                            e.isDefaultInstance = !0
                        }), Array.isArray(i)) t = [...r, ...i];
                    else if ("function" == typeof i) {
                        let e = i(r);
                        t = Array.isArray(e) ? e : [e]
                    } else t = r;
                    return n = {}, t.forEach(e => {
                        let {
                            name: t
                        } = e, r = n[t];
                        r && !r.isDefaultInstance && e.isDefaultInstance || (n[t] = e)
                    }), Object.values(n)
                }({
                    integrations: e.integrations,
                    defaultIntegrations: o
                }),
                transport: e.transport || uD
            };
        return i = cJ, !0 === s.debug && (ee ? ea.enable() : er(() => {})), tf().update(s.initialScope), o3(n = new uT(s)), n.init(), n
    }

    function cY() {}

    function cK(e) {
        e()
    }

    function cQ(e = {}) {
        let t = iX.document,
            n = t ? .head || t ? .body;
        if (!n) {
            uL && ea.error("[showReportDialog] Global document not defined");
            return
        }
        let r = tf(),
            i = ty(),
            o = i ? .getDsn();
        if (!o) {
            uL && ea.error("[showReportDialog] DSN not configured");
            return
        }
        let s = { ...e,
                user: { ...r.getUser(),
                    ...e.user
                },
                eventId: e.eventId || iW()
            },
            a = iX.document.createElement("script");
        a.async = !0, a.crossOrigin = "anonymous", a.src = function(e, t) {
            let n = rL(e);
            if (!n) return "";
            let r = `${st(n)}embed/error-page/`,
                i = `dsn=${rO(n)}`;
            for (let e in t)
                if ("dsn" !== e && "onClose" !== e)
                    if ("user" === e) {
                        let e = t.user;
                        if (!e) continue;
                        e.name && (i += `&name=${encodeURIComponent(e.name)}`), e.email && (i += `&email=${encodeURIComponent(e.email)}`)
                    } else i += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
            return `${r}?${i}`
        }(o, s);
        let {
            onLoad: l,
            onClose: u
        } = s;
        if (l && (a.onload = l), u) {
            let e = t => {
                if ("__sentry_reportdialog_closed__" === t.data) try {
                    u()
                } finally {
                    iX.removeEventListener("message", e)
                }
            };
            iX.addEventListener("message", e)
        }
        n.appendChild(a)
    }
    let cX = new WeakMap,
        cZ = (e = {}) => {
            let t = e.types || ["crash", "deprecation", "intervention"];

            function n(e) {
                if (cX.has(ty()))
                    for (let t of e) tg(e => {
                        e.setExtra("url", t.url);
                        let n = `ReportingObserver [${t.type}]`,
                            r = "No details available";
                        if (t.body) {
                            let n = {};
                            for (let e in t.body) n[e] = t.body[e];
                            if (e.setExtra("body", n), "crash" === t.type) {
                                let e = t.body;
                                r = [e.crashId || "", e.reason || ""].join(" ").trim() || r
                            } else r = t.body.message || r
                        }
                        iA(`${n}: ${r}`)
                    })
            }
            return {
                name: "ReportingObserver",
                setupOnce() {
                    "ReportingObserver" in Y && new Y.ReportingObserver(n, {
                        buffered: !0,
                        types: t
                    }).observe()
                },
                setup(e) {
                    cX.set(e, !0)
                }
            }
        };

    function c0(e, t) {
        return t.some(t => e.includes(t))
    }

    function c1(e, t, n) {
        if (!1 === t) return {};
        let r = null != n ? [...l8, ...n] : l8,
            i = {};
        if (!0 === t) {
            for (let t of Object.keys(e)) i[t] = c0(t.toLowerCase(), r) ? l4 : e[t];
            return i
        }
        if ("deny" in t) {
            let n = t.deny.map(e => e.toLowerCase());
            for (let t of Object.keys(e)) {
                let o = t.toLowerCase(),
                    s = c0(o, r) || n.some(e => o.includes(e));
                i[t] = s ? l4 : e[t]
            }
            return i
        }
        let o = t.allow.map(e => e.toLowerCase());
        for (let t of Object.keys(e)) {
            let n = t.toLowerCase();
            if (c0(n, r)) i[t] = l4;
            else {
                let r = o.some(e => n.includes(e));
                i[t] = r ? e[t] : l4
            }
        }
        return i
    }

    function c2(e, t) {
        if (!1 === t) return {};
        try {
            let n = function(e) {
                let t = {},
                    n = 0;
                for (; n < e.length;) {
                    let r = e.indexOf("=", n);
                    if (-1 === r) break;
                    let i = e.indexOf(";", n);
                    if (-1 === i) i = e.length;
                    else if (i < r) {
                        n = e.lastIndexOf(";", r - 1) + 1;
                        continue
                    }
                    let o = e.slice(n, r).trim();
                    if (void 0 === t[o]) {
                        let n = e.slice(r + 1, i).trim();
                        34 === n.charCodeAt(0) && (n = n.slice(1, -1));
                        try {
                            t[o] = -1 !== n.indexOf("%") ? decodeURIComponent(n) : n
                        } catch {
                            t[o] = n
                        }
                    }
                    n = i + 1
                }
                return t
            }(e);
            if (0 === Object.keys(n).length) return {};
            return c1(n, t, l7)
        } catch {
            return l4
        }
    }

    function c3(e, t) {
        var n, r;
        let i, o = t ? .getDsn(),
            s = t ? .getOptions().tunnel;
        return !(!(i = ce(e)) || u9(i)) && !!o && ((n = i.hostname) === (r = o.host) || r.length > 0 && n.endsWith(`.${r}`)) && /(^|&|\?)sentry_key=/.test(i.search) || !!s && c5(e) === c5(s)
    }

    function c5(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
    }
    let c4 = (e = {}) => {
        let t = {
            failedRequestStatusCodes: [
                [500, 599]
            ],
            failedRequestTargets: [/.*/],
            ...e
        };
        return {
            name: "HttpClient",
            setup(e) {
                uR() && u3(n => {
                    if (ty() !== e) return;
                    let {
                        response: r,
                        args: i,
                        error: o,
                        virtualError: s
                    } = n, [a, l] = i;
                    r && function(e, t, n, r, i) {
                        if (c8(e, n.status, n.url)) {
                            let e, o, s, a, l = !r && t instanceof Request || t instanceof Request && t.bodyUsed ? t : new Request(t, r),
                                u = c9();
                            if (!1 !== u.requestHeaders && (e = c1(c6(l.headers), u.requestHeaders)), !1 !== u.responseHeaders && (o = c1(c6(n.headers), u.responseHeaders)), !1 !== u.cookies) {
                                let e = l.headers.get("Cookie") || void 0;
                                if (e) {
                                    let t = c2(e, u.cookies);
                                    "object" == typeof t && (s = t)
                                }
                                let t = n.headers.get("Set-Cookie") || void 0;
                                if (t) {
                                    let e = c2(t, u.cookies);
                                    "object" == typeof e && (a = e)
                                }
                            }
                            iO(c7({
                                url: l.url,
                                method: l.method,
                                status: n.status,
                                requestHeaders: e,
                                responseHeaders: o,
                                requestCookies: s,
                                responseCookies: a,
                                error: i,
                                type: "fetch"
                            }))
                        }
                    }(t, a, r, l, o || s)
                }, !1), "XMLHttpRequest" in Y && cu(n => {
                    if (ty() !== e) return;
                    let {
                        error: r,
                        virtualError: i
                    } = n, o = n.xhr, s = o[cl];
                    if (!s) return;
                    let {
                        method: a,
                        request_headers: l
                    } = s;
                    try {
                        ! function(e, t, n, r, i) {
                            if (c8(e, t.status, t.responseURL)) {
                                let e, o, s, a = c9();
                                if (!1 !== a.cookies) try {
                                    let e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                    if (e) {
                                        let t = c2(e, a.cookies);
                                        "object" == typeof t && (o = t)
                                    }
                                } catch {}
                                if (!1 !== a.responseHeaders) try {
                                    let e;
                                    s = c1((e = t.getAllResponseHeaders()) ? e.split("\r\n").reduce((e, t) => {
                                        let [n, r] = t.split(": ");
                                        return n && r && (e[n] = r), e
                                    }, {}) : {}, a.responseHeaders)
                                } catch {}!1 !== a.requestHeaders && (e = c1(r, a.requestHeaders)), iO(c7({
                                    url: t.responseURL,
                                    method: n,
                                    status: t.status,
                                    requestHeaders: e,
                                    responseHeaders: s,
                                    responseCookies: o,
                                    error: i,
                                    type: "xhr"
                                }))
                            }
                        }(t, o, a, l, r || i)
                    } catch (e) {
                        uL && ea.warn("Error while extracting response event form XHR response", e)
                    }
                })
            }
        }
    };

    function c6(e) {
        let t = {};
        return e.forEach((e, n) => {
            t[n] = e
        }), t
    }

    function c8(e, t, n) {
        return e.failedRequestStatusCodes.some(e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]) && e.failedRequestTargets.some(e => "string" == typeof e ? n.includes(e) : e.test(n)) && !c3(n, ty())
    }

    function c7(e) {
        let t = ty(),
            n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
            r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
            i = `HTTP Client Error with status code: ${e.status}`,
            o = {
                message: i,
                exception: {
                    values: [{
                        type: "Error",
                        value: i,
                        stacktrace: r ? {
                            frames: r
                        } : void 0
                    }]
                },
                request: {
                    url: e.url,
                    method: e.method,
                    headers: e.requestHeaders,
                    cookies: e.requestCookies
                },
                contexts: {
                    response: {
                        status_code: e.status,
                        headers: e.responseHeaders,
                        cookies: e.responseCookies,
                        body_size: function(e) {
                            if (e) {
                                let t = e["Content-Length"] || e["content-length"];
                                if (t) return parseInt(t, 10)
                            }
                        }(e.responseHeaders)
                    }
                }
            };
        return eX(o, {
            type: `auto.http.client.${e.type}`,
            handled: !1
        }), o
    }

    function c9() {
        let e = ty();
        if (!e) return {
            cookies: !1,
            requestHeaders: !1,
            responseHeaders: !1
        };
        let t = e.getOptions();
        if (null == t.dataCollection) {
            let e = !!t.sendDefaultPii;
            return {
                cookies: e,
                requestHeaders: e,
                responseHeaders: e
            }
        }
        let {
            cookies: n,
            httpHeaders: r
        } = e.getDataCollectionOptions();
        return {
            cookies: n,
            requestHeaders: r.request,
            responseHeaders: r.response
        }
    }
    let de = (e = {}) => ({
            name: "ContextLines",
            processEvent: (t, n, r) => (function(e, t) {
                let n = Y.document,
                    r = Y.location && cr(Y.location.href);
                if (!n || !r) return e;
                let i = e.exception ? .values;
                if (!i ? .length) return e;
                let o = n.documentElement.innerHTML;
                if (!o) return e;
                let s = ["<!DOCTYPE html>", "<html>", ...o.split("\n"), "</html>"];
                return i.forEach(e => {
                    let n = e.stacktrace;
                    n ? .frames && (n.frames = n.frames.map(e => (e.filename === r && e.lineno && s.length && ! function(e, t, n = 5) {
                        if (void 0 === t.lineno) return;
                        let r = e.length,
                            i = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                        t.pre_context = e.slice(Math.max(0, i - n), i).map(e => eH(e, 0)), t.context_line = eH(e[Math.min(r - 1, i)], t.colno || 0), t.post_context = e.slice(Math.min(i + 1, r), i + 1 + n).map(e => eH(e, 0))
                    }(s, e, t), e)))
                }), e
            })(t, e.frameContextLines ? ? r ? .getDataCollectionOptions().frameContextLines ? ? 7)
        }),
        dt = Symbol.for("sentry__originalRequestBody");

    function dn(e) {
        return new URLSearchParams(e).toString()
    }

    function dr(e, t = ea) {
        try {
            if ("string" == typeof e) return [e];
            if (e instanceof URLSearchParams) return [e.toString()];
            if (e instanceof FormData) return [dn(e)];
            if (!e) return [void 0]
        } catch (n) {
            return uA && t.error(n, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
        }
        return uA && t.log("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
    }

    function di(e = []) {
        if (e.length >= 2 && e[1] && "object" == typeof e[1] && "body" in e[1]) return e[1].body;
        if (e.length >= 1 && e[0] instanceof Request) {
            let t = e[0][dt];
            if (void 0 !== t) return t
        }
    }

    function ds(e) {
        let t;
        try {
            t = e.getAllResponseHeaders()
        } catch (t) {
            return uA && ea.error(t, "Failed to get xhr response headers", e), {}
        }
        return t ? t.split("\r\n").reduce((e, t) => {
            let [n, r] = t.split(": ");
            return r && (e[n.toLowerCase()] = r), e
        }, {}) : {}
    }

    function da(e) {
        if (dc(e)) return `persisted ${e.operationName}`;
        if (du(e)) {
            let {
                query: t,
                operationName: n
            } = e, {
                operationName: r = n,
                operationType: i
            } = function(e) {
                let t = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
                if (t) return {
                    operationType: t[1],
                    operationName: t[2]
                };
                let n = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
                return n ? {
                    operationType: n[1],
                    operationName: void 0
                } : {
                    operationType: void 0,
                    operationName: void 0
                }
            }(t);
            return r ? `${i} ${r}` : `${i}`
        }
        return "unknown"
    }

    function dl(e) {
        let t;
        if ("xhr" in e) {
            let n = e.xhr[cl];
            t = n && dr(n.body)[0]
        } else t = dr(di(e.input))[0];
        return t
    }

    function du(e) {
        return e_(e) && "string" == typeof e.query
    }

    function dc(e) {
        return e_(e) && "string" == typeof e.operationName && e_(e.extensions) && e_(e.extensions.persistedQuery) && "string" == typeof e.extensions.persistedQuery.sha256Hash && "number" == typeof e.extensions.persistedQuery.version
    }

    function dd(e) {
        try {
            let t = JSON.parse(e);
            if (du(t) || dc(t)) return t;
            return
        } catch {
            return
        }
    }
    let dp = e => ({
            name: "GraphQLClient",
            setup(t) {
                t.on("beforeOutgoingRequestSpan", (n, r) => {
                    let i = r6(n).data || {};
                    if ("http.client" !== i[ry]) return;
                    let o = i[cA] || i["http.url"] || i.url,
                        s = i["http.request.method"] || i["http.method"];
                    if (!ef(o) || !ef(s)) return;
                    let {
                        endpoints: a
                    } = e, l = eV(o, a), u = dl(r);
                    if (l && u) {
                        let e = dd(u);
                        if (e) {
                            let r = da(e);
                            n.updateName(`${s} ${o} (${r})`), du(e) && !0 === t.getDataCollectionOptions().graphQL.document && n.setAttribute(cI, e.query), dc(e) && (n.setAttribute("graphql.persisted_query.hash.sha256", e.extensions.persistedQuery.sha256Hash), n.setAttribute("graphql.persisted_query.version", e.extensions.persistedQuery.version))
                        }
                    }
                }), t.on("beforeOutgoingRequestBreadcrumb", (n, r) => {
                    let {
                        category: i,
                        type: o,
                        data: s
                    } = n;
                    if ("http" === o && ("fetch" === i || "xhr" === i)) {
                        let n = s ? .url,
                            {
                                endpoints: i
                            } = e,
                            o = eV(n, i),
                            a = dl(r);
                        if (o && s && a) {
                            let e = dd(a);
                            if (!s.graphql && e) {
                                let n = da(e);
                                s["graphql.operation"] = n, du(e) && !0 === t.getDataCollectionOptions().graphQL.document && (s[cI] = e.query), dc(e) && (s["graphql.persisted_query.hash.sha256"] = e.extensions.persistedQuery.sha256Hash, s["graphql.persisted_query.version"] = e.extensions.persistedQuery.version)
                            }
                        }
                    }
                })
            }
        }),
        df = (e = {}) => {
            let t = ["script"];
            return {
                name: "ViewHierarchy",
                processEvent: (n, r) => {
                    if (void 0 !== n.type || e.shouldAttach ? .(n, r) === !1) return n;
                    let i = {
                        rendering_system: "DOM",
                        positioning: "absolute",
                        windows: []
                    };
                    ! function n(r, i, o = 0) {
                        if (r)
                            for (let s of "shadowRoot" in r && r.shadowRoot ? r.shadowRoot.children : r.children) {
                                if (!(s instanceof HTMLElement)) continue;
                                let r = tw(s, 1) || void 0,
                                    a = s.tagName.toLowerCase();
                                if (t.includes(a)) continue;
                                let l = e.onElement ? .({
                                    element: s,
                                    componentName: r,
                                    tagName: a,
                                    depth: o
                                }) || {};
                                if ("skip" === l) continue;
                                if ("children" === l) {
                                    n(s, i, o + 1);
                                    continue
                                }
                                let {
                                    x: u,
                                    y: c,
                                    width: d,
                                    height: p
                                } = s.getBoundingClientRect(), f = {
                                    identifier: s.id || void 0,
                                    type: r || a,
                                    visible: !0,
                                    alpha: 1,
                                    height: p,
                                    width: d,
                                    x: u,
                                    y: c,
                                    ...l
                                };
                                f.children = [], n(s, f.children, o + 1), i.push(f)
                            }
                    }(e.rootElement ? .() || iX.document.body, i.windows);
                    let o = {
                        filename: "view-hierarchy.json",
                        attachmentType: "event.view_hierarchy",
                        contentType: "application/json",
                        data: JSON.stringify(i)
                    };
                    return r.attachments = r.attachments || [], r.attachments.push(o), n
                }
            }
        },
        dh = (e, t, n, r) => {
            let i, o;
            return s => {
                if (t.value >= 0 && (s || r) && ((o = t.value - (i ? ? 0)) || void 0 === i)) {
                    var a;
                    i = t.value, t.delta = o, a = t.value, t.rating = a > n[1] ? "poor" : a > n[0] ? "needs-improvement" : "good", e(t)
                }
            }
        },
        dm = (e = !0) => {
            let t = Y.performance ? .getEntriesByType ? .("navigation")[0];
            if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
        },
        dg = () => {
            let e = dm();
            return e ? .activationStart ? ? 0
        },
        d_ = -1,
        dy = new Set,
        dv = e => {
            if (("pagehide" === e.type || Y.document ? .visibilityState === "hidden") && d_ > -1) {
                if ("visibilitychange" === e.type || "pagehide" === e.type)
                    for (let e of dy) e();
                isFinite(d_) || (d_ = "visibilitychange" === e.type ? e.timeStamp : 0, ck("prerenderingchange", dv, !0))
            }
        },
        db = () => {
            if (Y.document && d_ < 0) {
                let e = dg();
                d_ = (Y.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0] ? .startTime) ? ? (Y.document ? .visibilityState !== "hidden" || Y.document ? .prerendering ? 1 / 0 : 0), cw("visibilitychange", dv, !0), cw("pagehide", dv, !0), cw("prerenderingchange", dv, !0)
            }
            return {
                get firstHiddenTime() {
                    return d_
                },
                onHidden(e) {
                    dy.add(e)
                }
            }
        },
        dS = (e, t = -1) => {
            let n = dm(),
                r = "navigate";
            return n && (Y.document ? .prerendering || dg() > 0 ? r = "prerender" : Y.document ? .wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                name: e,
                value: t,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v5-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
                navigationType: r
            }
        },
        dw = new WeakMap;

    function dk(e, t) {
        try {
            return dw.get(e) || dw.set(e, new t), dw.get(e)
        } catch (e) {
            return new t
        }
    }
    class dE {
        constructor() {
            this._sessionValue = 0, this._sessionEntries = []
        }
        _processEntry(e) {
            if (e.hadRecentInput) return;
            let t = this._sessionEntries[0],
                n = this._sessionEntries[this._sessionEntries.length - 1];
            this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift ? .(e)
        }
    }
    let dx = (e, t, n = {}) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    let r = new PerformanceObserver(e => {
                        Promise.resolve().then(() => {
                            t(e.getEntries())
                        })
                    });
                    return r.observe({
                        type: e,
                        buffered: !0,
                        ...n
                    }), r
                }
            } catch {}
        },
        dC = e => {
            Y.document ? .prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
        },
        dI = [1800, 3e3],
        dT = [.1, .25],
        dM = 0,
        dR = 1 / 0,
        dA = 0,
        dO = e => {
            e.forEach(e => {
                e.interactionId && (dR = Math.min(dR, e.interactionId), dM = (dA = Math.max(dA, e.interactionId)) ? (dA - dR) / 7 + 1 : 0)
            })
        },
        dP = () => y ? dM : performance.interactionCount || 0,
        dN = 0;class dD {
        constructor() {
            this._longestInteractionList = [], this._longestInteractionMap = new Map
        }
        _resetInteractions() {
            dN = dP(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
        }
        _estimateP98LongestInteraction() {
            let e = Math.min(this._longestInteractionList.length - 1, Math.floor((dP() - dN) / 50));
            return this._longestInteractionList[e]
        }
        _processEntry(e) {
            if (this._onBeforeProcessingEntry ? .(e), !(e.interactionId || "first-input" === e.entryType)) return;
            let t = this._longestInteractionList.at(-1),
                n = this._longestInteractionMap.get(e.interactionId);
            if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
                if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                        id: e.interactionId,
                        entries: [e],
                        _latency: e.duration
                    }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((e, t) => t._latency - e._latency), this._longestInteractionList.length > 10)
                    for (let e of this._longestInteractionList.splice(10)) this._longestInteractionMap.delete(e.id);
                this._onAfterProcessingINPCandidate ? .(n)
            }
        }
    }
    let dL = [200, 500];class d$ {
        _processEntry(e) {
            this._onBeforeProcessingEntry ? .(e)
        }
    }
    let dj = [2500, 4e3],
        dF = [800, 1800],
        dB = e => {
            Y.document ? .prerendering ? dC(() => dB(e)) : Y.document ? .readyState !== "complete" ? addEventListener("load", () => dB(e), !0) : setTimeout(e)
        },
        dU = {},
        dW = {};

    function dq(e, t = !1) {
        return dX("cls", e, dG, v, t)
    }

    function dH(e, t = !1) {
        return dX("lcp", e, dY, b, t)
    }

    function dz(e) {
        return dX("inp", e, dQ, w)
    }

    function dJ(e, t) {
        let n;
        return dZ(e, t), dW[e] || (n = {}, "event" === e && (n.durationThreshold = 0), dx(e, t => {
            dV(e, {
                entries: t
            })
        }, n), dW[e] = !0), d0(e, t)
    }

    function dV(e, t) {
        let n = dU[e];
        if (n ? .length)
            for (let r of n) try {
                r(t)
            } catch (t) {
                uA && ea.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${ej(r)}
Error:`, t)
            }
    }

    function dG() {
        return ((e, t = {}) => {
            ((e, t = {}) => {
                dC(() => {
                    let n, r = db(),
                        i = dS("FCP"),
                        o = dx("paint", e => {
                            for (let t of e) "first-contentful-paint" === t.name && (o.disconnect(), t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - dg(), 0), i.entries.push(t), n(!0)))
                        });
                    o && (n = dh(e, i, dI, t.reportAllChanges))
                })
            })(cE(() => {
                let n, r = dS("CLS", 0),
                    i = db(),
                    o = dk(t, dE),
                    s = e => {
                        for (let t of e) o._processEntry(t);
                        o._sessionValue > r.value && (r.value = o._sessionValue, r.entries = o._sessionEntries, n())
                    },
                    a = dx("layout-shift", s);
                a && (n = dh(e, r, dT, t.reportAllChanges), i.onHidden(() => {
                    s(a.takeRecords()), n(!0)
                }), Y ? .setTimeout ? .(n))
            }))
        })(e => {
            dV("cls", {
                metric: e
            }), v = e
        }, {
            reportAllChanges: !0
        })
    }

    function dY() {
        return ((e, t = {}) => {
            dC(() => {
                let n, r = db(),
                    i = dS("LCP"),
                    o = dk(t, d$),
                    s = e => {
                        for (let s of (t.reportAllChanges || (e = e.slice(-1)), e)) o._processEntry(s), s.startTime < r.firstHiddenTime && (i.value = Math.max(s.startTime - dg(), 0), i.entries = [s], n())
                    },
                    a = dx("largest-contentful-paint", s);
                if (a) {
                    n = dh(e, i, dj, t.reportAllChanges);
                    let r = cE(() => {
                            s(a.takeRecords()), a.disconnect(), n(!0)
                        }),
                        o = e => {
                            e.isTrusted && (cx(r), ck(e.type, o, {
                                capture: !0
                            }))
                        };
                    for (let e of ["keydown", "click", "visibilitychange"]) cw(e, o, {
                        capture: !0
                    })
                }
            })
        })(e => {
            dV("lcp", {
                metric: e
            }), b = e
        }, {
            reportAllChanges: !0
        })
    }

    function dK() {
        return ((e, t = {}) => {
            let n = dS("TTFB"),
                r = dh(e, n, dF, t.reportAllChanges);
            dB(() => {
                let e = dm();
                e && (n.value = Math.max(e.responseStart - dg(), 0), n.entries = [e], r(!0))
            })
        })(e => {
            dV("ttfb", {
                metric: e
            }), S = e
        })
    }

    function dQ() {
        return ((e, t = {}) => {
            if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
            let n = db();
            dC(() => {
                let r;
                "interactionCount" in performance || y || (y = dx("event", dO, {
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                }));
                let i = dS("INP"),
                    o = dk(t, dD),
                    s = e => {
                        cx(() => {
                            for (let t of e) o._processEntry(t);
                            let t = o._estimateP98LongestInteraction();
                            t && t._latency !== i.value && (i.value = t._latency, i.entries = t.entries, r())
                        })
                    },
                    a = dx("event", s, {
                        durationThreshold: t.durationThreshold ? ? 40
                    });
                r = dh(e, i, dL, t.reportAllChanges), a && (a.observe({
                    type: "first-input",
                    buffered: !0
                }), n.onHidden(() => {
                    s(a.takeRecords()), r(!0)
                }))
            })
        })(e => {
            dV("inp", {
                metric: e
            }), w = e
        })
    }

    function dX(e, t, n, r, i = !1) {
        let o;
        return dZ(e, t), dW[e] || (o = n(), dW[e] = !0), r && t({
            metric: r
        }), d0(e, t, i ? o : void 0)
    }

    function dZ(e, t) {
        dU[e] = dU[e] || [], dU[e].push(t)
    }

    function d0(e, t, n) {
        return () => {
            n && n();
            let r = dU[e];
            if (!r) return;
            let i = r.indexOf(t); - 1 !== i && r.splice(i, 1)
        }
    }
    let d1 = "sentryReplaySession",
        d2 = "Unable to send Replay";
    var d3 = Object.defineProperty,
        d5 = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? d3(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n
        },
        d4 = ((D = d4 || {})[D.Document = 0] = "Document", D[D.DocumentType = 1] = "DocumentType", D[D.Element = 2] = "Element", D[D.Text = 3] = "Text", D[D.CDATA = 4] = "CDATA", D[D.Comment = 5] = "Comment", D);

    function d6(e) {
        let t = e ? .host;
        return t ? .shadowRoot === e
    }

    function d8(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
    }

    function d7(e) {
        try {
            var t;
            let n = e.rules || e.cssRules;
            return n ? ((t = Array.from(n, d9).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
        } catch (e) {
            return null
        }
    }

    function d9(e) {
        let t;
        if ("styleSheet" in e) try {
            t = d7(e.styleSheet) || function(e) {
                let {
                    cssText: t
                } = e;
                if (t.split('"').length < 3) return t;
                let n = ["@import", `url(${JSON.stringify(e.href)})`];
                return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
            }(e)
        } catch (e) {} else if ("selectorText" in e) {
            let t = e.cssText,
                n = e.selectorText.includes(":"),
                r = "string" == typeof e.style.all && e.style.all;
            if (r && (t = function(e) {
                    let t = "";
                    for (let n = 0; n < e.style.length; n++) {
                        let r = e.style,
                            i = r[n],
                            o = r.getPropertyPriority(i);
                        t += `${i}:${r.getPropertyValue(i)}${o?" !important":""};`
                    }
                    return `${e.selectorText} { ${t} }`
                }(e)), n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), n || r) return t
        }
        return t || e.cssText
    }
    class pe {
        constructor() {
            d5(this, "idNodeMap", new Map), d5(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            return e ? this.getMeta(e) ? .id ? ? -1 : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            let n = this.getNode(e);
            if (n) {
                let e = this.nodeMetaMap.get(n);
                e && this.nodeMetaMap.set(t, e)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    }

    function pt({
        maskInputOptions: e,
        tagName: t,
        type: n
    }) {
        return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
    }

    function pn({
        isMasked: e,
        element: t,
        value: n,
        maskInputFn: r
    }) {
        let i = n || "";
        return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i
    }

    function pr(e) {
        return e.toLowerCase()
    }

    function pi(e) {
        return e.toUpperCase()
    }
    let po = "__rrweb_original__";

    function ps(e) {
        let t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? pr(t) : null
    }

    function pa(e, t, n) {
        return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
    }

    function pl(e, t) {
        let n;
        try {
            n = new URL(e, t ? ? window.location.href)
        } catch (e) {
            return null
        }
        let r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
        return r ? .[1] ? ? null
    }
    let pu = {};

    function pc(e) {
        let t = pu[e];
        if (t) return t;
        let n = window.document,
            r = window[e];
        if (n && "function" == typeof n.createElement) try {
            let t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t)
        } catch (e) {}
        return pu[e] = r.bind(window)
    }

    function pd(...e) {
        return pc("setTimeout")(...e)
    }

    function pp(...e) {
        return pc("clearTimeout")(...e)
    }

    function pf(e) {
        try {
            return e.contentDocument
        } catch {}
    }
    let ph = 1,
        pm = RegExp("[^a-z0-9-_:]");

    function pg() {
        return ph++
    }
    let p_ = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        py = /^(?:[a-z+]+:)?\/\//i,
        pv = /^www\..*/i,
        pb = /^(data:)([^,]*),(.*)/i;

    function pS(e, t) {
        return (e || "").replace(p_, (e, n, r, i, o, s) => {
            let a = r || o || s,
                l = n || i || "";
            if (!a) return e;
            if (py.test(a) || pv.test(a) || pb.test(a)) return `url(${l}${a}${l})`;
            if ("/" === a[0]) return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${l})`;
            let u = t.split("/"),
                c = a.split("/");
            for (let e of (u.pop(), c))
                if ("." === e) continue;
                else ".." === e ? u.pop() : u.push(e);
            return `url(${l}${u.join("/")}${l})`
        })
    }
    let pw = /^[^ \t\n\r\u000c]+/,
        pk = /^[, \t\n\r\u000c]+/,
        pE = new WeakMap;

    function px(e, t) {
        return t && "" !== t.trim() ? pC(e, t) : t
    }

    function pC(e, t) {
        let n = pE.get(e);
        if (n || (n = e.createElement("a"), pE.set(e, n)), t) {
            if (t.startsWith("blob:") || t.startsWith("data:")) return t
        } else t = "";
        return n.setAttribute("href", t), n.href
    }

    function pI(e, t, n, r, i, o, s) {
        if (!r) return r;
        if ("src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] || "background" === n && ("table" === t || "td" === t || "th" === t)) return px(e, r);
        if ("srcset" === n) return function(e, t) {
            if ("" === t.trim()) return t;
            let n = 0;

            function r(e) {
                let r, i = e.exec(t.substring(n));
                return i ? (r = i[0], n += r.length, r) : ""
            }
            let i = [];
            for (; r(pk), !(n >= t.length);) {
                let o = r(pw);
                if ("," === o.slice(-1)) o = px(e, o.substring(0, o.length - 1)), i.push(o);
                else {
                    let r = "";
                    o = px(e, o);
                    let s = !1;
                    for (;;) {
                        let e = t.charAt(n);
                        if ("" === e) {
                            i.push((o + r).trim());
                            break
                        }
                        if (s) ")" === e && (s = !1);
                        else if ("," === e) {
                            n += 1, i.push((o + r).trim());
                            break
                        } else "(" === e && (s = !0);
                        r += e, n += 1
                    }
                }
            }
            return i.join(", ")
        }(e, r);
        if ("style" === n) {
            let t = pS(r, pC(e));
            return s && s.size > 0 && (t = function(e, t) {
                if (!e || 0 === t.size) return e;
                try {
                    let n = e.split(";"),
                        r = [];
                    for (let e of n) {
                        if (!(e = e.trim())) continue;
                        let n = e.indexOf(":");
                        if (-1 === n) {
                            r.push(e);
                            continue
                        }
                        let i = e.slice(0, n).trim();
                        t.has(i) || r.push(e)
                    }
                    return r.join("; ") + (r.length > 0 && e.endsWith(";") ? ";" : "")
                } catch (t) {
                    return e
                }
            }(t, s)), t
        }
        return "object" === t && "data" === n ? px(e, r) : "function" == typeof o ? o(n, r, i) : r
    }

    function pT(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t
    }

    function pM(e, t, n = 1 / 0, r = 0) {
        return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : pM(e.parentNode, t, n, r + 1)
    }

    function pR(e, t) {
        return n => {
            if (null === n) return !1;
            try {
                if (e) {
                    if ("string" == typeof e) {
                        if (n.matches(`.${e}`)) return !0
                    } else if (function(e, t) {
                            for (let n = e.classList.length; n--;) {
                                let r = e.classList[n];
                                if (t.test(r)) return !0
                            }
                            return !1
                        }(n, e)) return !0
                }
                if (t && n.matches(t)) return !0;
                return !1
            } catch {
                return !1
            }
        }
    }

    function pA(e, t, n, r, i, o) {
        try {
            let s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === s) return !1;
            if ("INPUT" === s.tagName) {
                let e = s.getAttribute("autocomplete");
                if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
            }
            let a = -1,
                l = -1;
            if (o) {
                if ((l = pM(s, pR(r, i))) < 0) return !0;
                a = pM(s, pR(t, n), l >= 0 ? l : 1 / 0)
            } else {
                if ((a = pM(s, pR(t, n))) < 0) return !1;
                l = pM(s, pR(r, i), a >= 0 ? a : 1 / 0)
            }
            return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!o
        } catch (e) {}
        return !!o
    }

    function pO(e) {
        return null == e ? "" : e.toLowerCase()
    }

    function pP(e, t) {
        let n, {
                doc: r,
                mirror: i,
                blockClass: o,
                blockSelector: s,
                unblockSelector: a,
                maskAllText: l,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                skipChild: f = !1,
                inlineStylesheet: h = !0,
                maskInputOptions: m = {},
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: y,
                slimDOMOptions: v,
                dataURLOptions: b = {},
                inlineImages: S = !1,
                recordCanvas: w = !1,
                onSerialize: x,
                onIframeLoad: C,
                iframeLoadTimeout: I = 5e3,
                onBlockedImageLoad: T,
                onStylesheetLoad: M,
                stylesheetLoadTimeout: R = 5e3,
                keepIframeSrcFn: A = () => !1,
                newlyAddedElement: O = !1,
                ignoreCSSAttributes: P
            } = t,
            {
                preserveWhiteSpace: N = !0
            } = t,
            D = function(e, t) {
                let {
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: o,
                    unblockSelector: s,
                    maskAllText: a,
                    maskAttributeFn: l,
                    maskTextClass: u,
                    unmaskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    inlineStylesheet: f,
                    maskInputOptions: h = {},
                    maskTextFn: m,
                    maskInputFn: g,
                    dataURLOptions: _ = {},
                    inlineImages: y,
                    recordCanvas: v,
                    keepIframeSrcFn: b,
                    newlyAddedElement: S = !1,
                    ignoreCSSAttributes: w
                } = t, x = function(e, t) {
                    if (!t.hasNode(e)) return;
                    let n = t.getId(e);
                    return 1 === n ? void 0 : n
                }(n, r);
                switch (e.nodeType) {
                    case e.DOCUMENT_NODE:
                        if ("CSS1Compat" !== e.compatMode) return {
                            type: d4.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                        return {
                            type: d4.Document,
                            childNodes: []
                        };
                    case e.DOCUMENT_TYPE_NODE:
                        return {
                            type: d4.DocumentType,
                            name: e.name,
                            publicId: e.publicId,
                            systemId: e.systemId,
                            rootId: x
                        };
                    case e.ELEMENT_NODE:
                        return function(e, t) {
                            let n, {
                                    doc: r,
                                    blockClass: i,
                                    blockSelector: o,
                                    unblockSelector: s,
                                    inlineStylesheet: a,
                                    maskInputOptions: l = {},
                                    maskAttributeFn: u,
                                    maskInputFn: c,
                                    dataURLOptions: d = {},
                                    inlineImages: p,
                                    recordCanvas: f,
                                    keepIframeSrcFn: h,
                                    newlyAddedElement: m = !1,
                                    rootId: g,
                                    maskTextClass: _,
                                    unmaskTextClass: y,
                                    maskTextSelector: v,
                                    unmaskTextSelector: b,
                                    ignoreCSSAttributes: S
                                } = t,
                                w = function(e, t, n, r) {
                                    try {
                                        if (r && e.matches(r)) return !1;
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (let n = e.classList.length; n--;) {
                                                let r = e.classList[n];
                                                if (t.test(r)) return !0
                                            }
                                        if (n) return e.matches(n)
                                    } catch (e) {}
                                    return !1
                                }(e, i, o, s),
                                x = function(e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    let t = pr(e.tagName);
                                    return pm.test(t) ? "div" : t
                                }(e),
                                C = {},
                                I = e.attributes.length;
                            for (let t = 0; t < I; t++) {
                                let n = e.attributes[t];
                                n.name && !pT(x, n.name, n.value) && (C[n.name] = pI(r, x, pr(n.name), n.value, e, u, S))
                            }
                            if ("link" === x && a) {
                                let t = Array.from(r.styleSheets).find(t => t.href === e.href),
                                    n = null;
                                t && (n = d7(t)), n && (C.rel = null, C.href = null, C.crossorigin = null, C._cssText = pS(n, t.href))
                            }
                            if ("style" === x && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                let t = d7(e.sheet);
                                t && (C._cssText = pS(t, pC(r)))
                            }
                            if ("input" === x || "textarea" === x || "select" === x || "option" === x) {
                                let t = ps(e),
                                    n = pa(e, pi(x), t),
                                    r = e.checked;
                                if ("submit" !== t && "button" !== t && n) {
                                    let r = pA(e, _, v, y, b, pt({
                                        type: t,
                                        tagName: pi(x),
                                        maskInputOptions: l
                                    }));
                                    C.value = pn({
                                        isMasked: r,
                                        element: e,
                                        value: n,
                                        maskInputFn: c
                                    })
                                }
                                r && (C.checked = r)
                            }
                            if ("option" === x && (e.selected && !l.select ? C.selected = !0 : delete C.selected), "canvas" === x && f) {
                                if ("2d" === e.__context) ! function(e) {
                                    let t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            let i = t.getImageData;
                                            if (new Uint32Array((po in i ? i[po] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                                        }
                                    return !0
                                }(e) && (C.rr_dataURL = e.toDataURL(d.type, d.quality));
                                else if (!("__context" in e)) {
                                    let t = e.toDataURL(d.type, d.quality),
                                        n = r.createElement("canvas");
                                    n.width = e.width, n.height = e.height, t !== n.toDataURL(d.type, d.quality) && (C.rr_dataURL = t)
                                }
                            }
                            if ("img" === x && p) {
                                k || (E = (k = r.createElement("canvas")).getContext("2d")), e.currentSrc || e.getAttribute("src");
                                let t = e.crossOrigin,
                                    n = () => {
                                        e.removeEventListener("load", n);
                                        try {
                                            k.width = e.naturalWidth, k.height = e.naturalHeight, E.drawImage(e, 0, 0), C.rr_dataURL = k.toDataURL(d.type, d.quality)
                                        } catch (t) {
                                            if ("anonymous" !== e.crossOrigin) {
                                                e.crossOrigin = "anonymous", e.complete && 0 !== e.naturalWidth ? n() : e.addEventListener("load", n);
                                                return
                                            }
                                        }
                                        "anonymous" === e.crossOrigin && (t ? C.crossOrigin = t : e.removeAttribute("crossorigin"))
                                    };
                                e.complete && 0 !== e.naturalWidth ? n() : e.addEventListener("load", n)
                            }
                            if (("audio" === x || "video" === x) && (C.rr_mediaState = e.paused ? "paused" : "played", C.rr_mediaCurrentTime = e.currentTime), !m && (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft), e.scrollTop && (C.rr_scrollTop = e.scrollTop)), w) {
                                let {
                                    width: t,
                                    height: n
                                } = e.getBoundingClientRect();
                                C = {
                                    class: C.class,
                                    rr_width: `${t}px`,
                                    rr_height: `${n}px`
                                }
                            }
                            "iframe" !== x || h(C.src) || (w || pf(e) || (C.rr_src = C.src), delete C.src);
                            try {
                                customElements.get(x) && (n = !0)
                            } catch (e) {}
                            return {
                                type: d4.Element,
                                tagName: x,
                                attributes: C,
                                childNodes: [],
                                isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                needBlock: w,
                                rootId: g,
                                isCustom: n
                            }
                        }(e, {
                            doc: n,
                            blockClass: i,
                            blockSelector: o,
                            unblockSelector: s,
                            inlineStylesheet: f,
                            maskAttributeFn: l,
                            maskInputOptions: h,
                            maskInputFn: g,
                            dataURLOptions: _,
                            inlineImages: y,
                            recordCanvas: v,
                            keepIframeSrcFn: b,
                            newlyAddedElement: S,
                            rootId: x,
                            maskTextClass: u,
                            unmaskTextClass: c,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            ignoreCSSAttributes: w
                        });
                    case e.TEXT_NODE:
                        return function(e, t) {
                            let {
                                maskAllText: n,
                                maskTextClass: r,
                                unmaskTextClass: i,
                                maskTextSelector: o,
                                unmaskTextSelector: s,
                                maskTextFn: a,
                                maskInputOptions: l,
                                maskInputFn: u,
                                rootId: c
                            } = t, d = e.parentNode && e.parentNode.tagName, p = e.textContent, f = "STYLE" === d || void 0, h = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                            if (f && p) {
                                try {
                                    e.nextSibling || e.previousSibling || e.parentNode.sheet ? .cssRules && (p = d7(e.parentNode.sheet))
                                } catch (e) {}
                                p = pS(p, pC(t.doc))
                            }
                            h && (p = "SCRIPT_PLACEHOLDER");
                            let g = pA(e, r, o, i, s, n);
                            return f || h || m || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), m && p && (l.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = pn({
                                isMasked: pA(e, r, o, i, s, pt({
                                    type: null,
                                    tagName: d,
                                    maskInputOptions: l
                                })),
                                element: e,
                                value: p,
                                maskInputFn: u
                            })), {
                                type: d4.Text,
                                textContent: p || "",
                                isStyle: f,
                                rootId: c
                            }
                        }(e, {
                            doc: n,
                            maskAllText: a,
                            maskTextClass: u,
                            unmaskTextClass: c,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            maskTextFn: m,
                            maskInputOptions: h,
                            maskInputFn: g,
                            rootId: x
                        });
                    case e.CDATA_SECTION_NODE:
                        return {
                            type: d4.CDATA,
                            textContent: "",
                            rootId: x
                        };
                    case e.COMMENT_NODE:
                        return {
                            type: d4.Comment,
                            textContent: e.textContent || "",
                            rootId: x
                        };
                    default:
                        return !1
                }
            }(e, {
                doc: r,
                mirror: i,
                blockClass: o,
                blockSelector: s,
                maskAllText: l,
                unblockSelector: a,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: h,
                maskInputOptions: m,
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: y,
                dataURLOptions: b,
                inlineImages: S,
                recordCanvas: w,
                keepIframeSrcFn: A,
                newlyAddedElement: O,
                ignoreCSSAttributes: P
            });
        if (!D) return null;
        n = i.hasNode(e) ? i.getId(e) : ! function(e, t) {
            if (t.comment && e.type === d4.Comment) return !0;
            if (e.type === d4.Element) {
                if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === pl(e.attributes.href))) return !0;
                else if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (pO(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === pO(e.attributes.name) || "icon" === pO(e.attributes.rel) || "apple-touch-icon" === pO(e.attributes.rel) || "shortcut icon" === pO(e.attributes.rel)))) return !0;
                else if ("meta" === e.tagName) {
                    if (t.headMetaDescKeywords && pO(e.attributes.name).match(/^description|keywords$/)) return !0;
                    else if (t.headMetaSocial && (pO(e.attributes.property).match(/^(og|twitter|fb):/) || pO(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === pO(e.attributes.name))) return !0;
                    else if (t.headMetaRobots && ("robots" === pO(e.attributes.name) || "googlebot" === pO(e.attributes.name) || "bingbot" === pO(e.attributes.name))) return !0;
                    else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                    else if (t.headMetaAuthorship && ("author" === pO(e.attributes.name) || "generator" === pO(e.attributes.name) || "framework" === pO(e.attributes.name) || "publisher" === pO(e.attributes.name) || "progid" === pO(e.attributes.name) || pO(e.attributes.property).match(/^article:/) || pO(e.attributes.property).match(/^product:/))) return !0;
                    else if (t.headMetaVerification && ("google-site-verification" === pO(e.attributes.name) || "yandex-verification" === pO(e.attributes.name) || "csrf-token" === pO(e.attributes.name) || "p:domain_verify" === pO(e.attributes.name) || "verify-v1" === pO(e.attributes.name) || "verification" === pO(e.attributes.name) || "shopify-checkout-api-token" === pO(e.attributes.name))) return !0
                }
            }
            return !1
        }(D, v) && (N || D.type !== d4.Text || D.isStyle || D.textContent.trim().length) ? pg() : -2;
        let L = Object.assign(D, {
            id: n
        });
        if (i.add(e, L), -2 === n) return null;
        x && x(e);
        let $ = !f;
        if (L.type === d4.Element) {
            $ = $ && !L.needBlock;
            let t = e.shadowRoot;
            t && d8(t) && (L.isShadowHost = !0)
        }
        if ((L.type === d4.Document || L.type === d4.Element) && $) {
            v.headWhitespace && L.type === d4.Element && "head" === L.tagName && (N = !1);
            let t = {
                doc: r,
                mirror: i,
                blockClass: o,
                blockSelector: s,
                maskAllText: l,
                unblockSelector: a,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                skipChild: f,
                inlineStylesheet: h,
                maskInputOptions: m,
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: y,
                slimDOMOptions: v,
                dataURLOptions: b,
                inlineImages: S,
                recordCanvas: w,
                preserveWhiteSpace: N,
                onSerialize: x,
                onIframeLoad: C,
                iframeLoadTimeout: I,
                onBlockedImageLoad: T,
                onStylesheetLoad: M,
                stylesheetLoadTimeout: R,
                keepIframeSrcFn: A,
                ignoreCSSAttributes: P
            };
            for (let n of e.childNodes ? Array.from(e.childNodes) : []) {
                let e = pP(n, t);
                e && L.childNodes.push(e)
            }
            if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                for (let n of Array.from(e.shadowRoot.childNodes)) {
                    let r = pP(n, t);
                    r && (d8(e.shadowRoot) && (r.isShadow = !0), L.childNodes.push(r))
                }
        }
        if (e.parentNode && d6(e.parentNode) && d8(e.parentNode) && (L.isShadow = !0), L.type !== d4.Element || "iframe" !== L.tagName || L.needBlock || function(e, t, n) {
                let r, i = function(e) {
                    try {
                        return e.contentWindow
                    } catch {}
                }(e);
                if (!i) return;
                let o = !1;
                try {
                    r = i.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" !== r) {
                    let r = pd(() => {
                        o || (t(), o = !0)
                    }, n);
                    e.addEventListener("load", () => {
                        pp(r), o = !0, t()
                    });
                    return
                }
                let s = "about:blank";
                if (i.location.href !== s || e.src === s || "" === e.src) return pd(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t)
            }(e, () => {
                let t = pf(e);
                if (t && C) {
                    let n = pP(t, {
                        doc: t,
                        mirror: i,
                        blockClass: o,
                        blockSelector: s,
                        unblockSelector: a,
                        maskAllText: l,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: m,
                        maskAttributeFn: g,
                        maskTextFn: _,
                        maskInputFn: y,
                        slimDOMOptions: v,
                        dataURLOptions: b,
                        inlineImages: S,
                        recordCanvas: w,
                        preserveWhiteSpace: N,
                        onSerialize: x,
                        onIframeLoad: C,
                        iframeLoadTimeout: I,
                        onStylesheetLoad: M,
                        stylesheetLoadTimeout: R,
                        keepIframeSrcFn: A,
                        ignoreCSSAttributes: P
                    });
                    n && C(e, n)
                }
            }, I), L.type === d4.Element && "img" === L.tagName && !e.complete && L.needBlock) {
            let t = () => {
                if (e.isConnected && !e.complete && T) try {
                    let t = e.getBoundingClientRect();
                    t.width > 0 && t.height > 0 && T(e, L, t)
                } catch (e) {}
                e.removeEventListener("load", t)
            };
            e.isConnected && e.addEventListener("load", t)
        }
        return L.type === d4.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === pl(L.attributes.href)) && function(e, t, n) {
            let r, i = !1;
            try {
                r = e.sheet
            } catch (e) {
                r = null
            }
            if (r) return;
            let o = pd(() => {
                i || (t(), i = !0)
            }, n);
            e.addEventListener("load", () => {
                pp(o), i = !0, t()
            })
        }(e, () => {
            if (M) {
                let t = pP(e, {
                    doc: r,
                    mirror: i,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: a,
                    maskAllText: l,
                    maskTextClass: u,
                    unmaskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions: m,
                    maskAttributeFn: g,
                    maskTextFn: _,
                    maskInputFn: y,
                    slimDOMOptions: v,
                    dataURLOptions: b,
                    inlineImages: S,
                    recordCanvas: w,
                    preserveWhiteSpace: N,
                    onSerialize: x,
                    onIframeLoad: C,
                    iframeLoadTimeout: I,
                    onStylesheetLoad: M,
                    stylesheetLoadTimeout: R,
                    keepIframeSrcFn: A,
                    ignoreCSSAttributes: P
                });
                t && M(e, t)
            }
        }, R), L.type === d4.Element && delete L.needBlock, L
    }

    function pN(e, t, n = document) {
        let r = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
    }
    let pD = {
        map: {},
        getId: () => -1,
        getNode: () => null,
        removeNodeFromMap() {},
        has: () => !1,
        reset() {}
    };

    function pL(e, t, n = {}) {
        let r = null,
            i = 0;
        return function(...o) {
            let s = Date.now();
            i || !1 !== n.leading || (i = s);
            let a = t - (s - i),
                l = this;
            a <= 0 || a > t ? (r && (function(...e) {
                pZ("clearTimeout")(...e)
            }(r), r = null), i = s, e.apply(l, o)) : r || !1 === n.trailing || (r = p0(() => {
                i = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(l, o)
            }, a))
        }
    }

    function p$(e, t, n) {
        try {
            if (!(t in e)) return () => {};
            let r = e[t],
                i = n(r);
            return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), e[t] = i, () => {
                e[t] = r
            }
        } catch {
            return () => {}
        }
    }
    "u" > typeof window && window.Proxy && window.Reflect && (pD = new Proxy(pD, {
        get: (e, t, n) => Reflect.get(e, t, n)
    }));
    let pj = Date.now;

    function pF(e) {
        let t = e.document;
        return {
            left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : t ? .documentElement.scrollLeft || t ? .body ? .parentElement ? .scrollLeft || t ? .body ? .scrollLeft || 0,
            top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : t ? .documentElement.scrollTop || t ? .body ? .parentElement ? .scrollTop || t ? .body ? .scrollTop || 0
        }
    }

    function pB() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function pU() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function pW(e) {
        if (!e) return null;
        try {
            return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        } catch (e) {
            return null
        }
    }

    function pq(e, t, n, r, i) {
        if (!e) return !1;
        let o = pW(e);
        if (!o) return !1;
        let s = pR(t, n);
        if (!i) {
            let e = r && o.matches(r);
            return s(o) && !e
        }
        let a = pM(o, s),
            l = -1;
        return !(a < 0) && (r && (l = pM(o, pR(null, r))), a > -1 && l < 0 || a < l)
    }

    function pH(e, t) {
        return -2 === t.getId(e)
    }

    function pz(e) {
        return !!e.changedTouches
    }

    function pJ(e, t) {
        return !!("IFRAME" === e.nodeName && t.getMeta(e))
    }

    function pV(e, t) {
        return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
    }

    function pG(e) {
        return !!e ? .shadowRoot
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (pj = () => (new Date).getTime());class pY {
        constructor() {
            this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(e) {
            return this.styleIDMap.get(e) ? ? -1
        }
        has(e) {
            return this.styleIDMap.has(e)
        }
        add(e, t) {
            let n;
            return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n)
        }
        getStyle(e) {
            return this.idStyleMap.get(e) || null
        }
        reset() {
            this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
            return this.id++
        }
    }

    function pK(e) {
        let t = null;
        return e.getRootNode ? .() ? .nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
    }

    function pQ(e) {
        let t = e.ownerDocument;
        return !!t && (t.contains(e) || function(e) {
            let t = e.ownerDocument;
            if (!t) return !1;
            let n = function(e) {
                let t, n = e;
                for (; t = pK(n);) n = t;
                return n
            }(e);
            return t.contains(n)
        }(e))
    }
    let pX = {};

    function pZ(e) {
        let t = pX[e];
        if (t) return t;
        let n = window.document,
            r = window[e];
        if (n && "function" == typeof n.createElement) try {
            let t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t)
        } catch (e) {}
        return pX[e] = r.bind(window)
    }

    function p0(...e) {
        return pZ("setTimeout")(...e)
    }
    var p1 = ((L = p1 || {})[L.DomContentLoaded = 0] = "DomContentLoaded", L[L.Load = 1] = "Load", L[L.FullSnapshot = 2] = "FullSnapshot", L[L.IncrementalSnapshot = 3] = "IncrementalSnapshot", L[L.Meta = 4] = "Meta", L[L.Custom = 5] = "Custom", L[L.Plugin = 6] = "Plugin", L),
        p2 = (($ = p2 || {})[$.Mutation = 0] = "Mutation", $[$.MouseMove = 1] = "MouseMove", $[$.MouseInteraction = 2] = "MouseInteraction", $[$.Scroll = 3] = "Scroll", $[$.ViewportResize = 4] = "ViewportResize", $[$.Input = 5] = "Input", $[$.TouchMove = 6] = "TouchMove", $[$.MediaInteraction = 7] = "MediaInteraction", $[$.StyleSheetRule = 8] = "StyleSheetRule", $[$.CanvasMutation = 9] = "CanvasMutation", $[$.Font = 10] = "Font", $[$.Log = 11] = "Log", $[$.Drag = 12] = "Drag", $[$.StyleDeclaration = 13] = "StyleDeclaration", $[$.Selection = 14] = "Selection", $[$.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", $[$.CustomElement = 16] = "CustomElement", $),
        p3 = ((j = p3 || {})[j.MouseUp = 0] = "MouseUp", j[j.MouseDown = 1] = "MouseDown", j[j.Click = 2] = "Click", j[j.ContextMenu = 3] = "ContextMenu", j[j.DblClick = 4] = "DblClick", j[j.Focus = 5] = "Focus", j[j.Blur = 6] = "Blur", j[j.TouchStart = 7] = "TouchStart", j[j.TouchMove_Departed = 8] = "TouchMove_Departed", j[j.TouchEnd = 9] = "TouchEnd", j[j.TouchCancel = 10] = "TouchCancel", j),
        p5 = ((F = p5 || {})[F.Mouse = 0] = "Mouse", F[F.Pen = 1] = "Pen", F[F.Touch = 2] = "Touch", F),
        p4 = ((B = p4 || {})[B.Play = 0] = "Play", B[B.Pause = 1] = "Pause", B[B.Seeked = 2] = "Seeked", B[B.VolumeChange = 3] = "VolumeChange", B[B.RateChange = 4] = "RateChange", B);
    let p6 = e => x ? (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (x && !0 === x(e)) return () => {};
            throw e
        }
    } : e;
    for (var p8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p7 = "u" < typeof Uint8Array ? [] : new Uint8Array(256), p9 = 0; p9 < p8.length; p9++) p7[p8.charCodeAt(p9)] = p9;class fe {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
        addWindow() {}
        addShadowRoot() {}
        resetShadowRoots() {}
    }

    function ft(e) {
        try {
            return e.contentDocument
        } catch (e) {}
    }

    function fn(e) {
        try {
            return e.contentWindow
        } catch (e) {}
    }
    class fr {
        constructor(e) {
            this.doc = e, this.unattachedDoc = null
        }
        parse(e) {
            return this.parseWithConstructableStylesheet(e) || this.parseWithDetachedElement(e)
        }
        parseWithConstructableStylesheet(e) {
            if ("u" < typeof CSSStyleSheet || "function" != typeof CSSStyleSheet.prototype.replaceSync) return null;
            try {
                let t = new CSSStyleSheet;
                t.replaceSync(`x { ${e} }`);
                let n = t.cssRules[0];
                if (!n || n.type !== CSSRule.STYLE_RULE) return null;
                return n.style
            } catch {
                return null
            }
        }
        parseWithDetachedElement(e) {
            let t = this.getUnattachedDoc().createElement("span");
            return t.setAttribute("style", e), t.style
        }
        getUnattachedDoc() {
            if (!this.unattachedDoc) try {
                this.unattachedDoc = document.implementation.createHTMLDocument()
            } catch {
                this.unattachedDoc = this.doc
            }
            return this.unattachedDoc
        }
    }
    class fi {
        constructor() {
            this.length = 0, this.head = null, this.tail = null
        }
        get(e) {
            if (e >= this.length) throw Error("Position outside of list range");
            let t = this.head;
            for (let n = 0; n < e; n++) t = t ? .next || null;
            return t
        }
        addNode(e) {
            let t = {
                value: e,
                previous: null,
                next: null
            };
            if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                let n = e.previousSibling.__ln.next;
                t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
            } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                let n = e.nextSibling.__ln.previous;
                t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
            } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
            null === t.next && (this.tail = t), this.length++
        }
        removeNode(e) {
            let t = e.__ln;
            this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
        }
    }
    let fo = (e, t) => `${e}@${t}`;class fs {
        constructor() {
            this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                e.forEach(this.processMutation), this.emit()
            }, this.emit = () => {
                if (this.frozen || this.locked) return;
                let e = [],
                    t = new Set,
                    n = new fi,
                    r = e => {
                        let t = e,
                            n = -2;
                        for (; - 2 === n;) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return n
                    },
                    i = i => {
                        if (!i.parentNode || !pQ(i)) return;
                        let o = d6(i.parentNode) ? this.mirror.getId(pK(i)) : this.mirror.getId(i.parentNode),
                            s = r(i);
                        if (-1 === o || -1 === s) return n.addNode(i);
                        let a = pP(i, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                pJ(e, this.mirror) && !pq(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), pV(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), pG(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                            },
                            onIframeLoad: (e, t) => {
                                if (pq(e, this.blockClass, this.blockSelector, this.unblockSelector, !1)) return;
                                this.iframeManager.attachIframe(e, t);
                                let n = fn(e);
                                n && this.canvasManager.addWindow(n), this.shadowDomManager.observeAttachShadow(e)
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            },
                            onBlockedImageLoad: (e, t, {
                                width: n,
                                height: r
                            }) => {
                                this.mutationCb({
                                    adds: [],
                                    removes: [],
                                    texts: [],
                                    attributes: [{
                                        id: t.id,
                                        attributes: {
                                            style: {
                                                width: `${n}px`,
                                                height: `${r}px`
                                            }
                                        }
                                    }]
                                })
                            },
                            ignoreCSSAttributes: this.ignoreCSSAttributes
                        });
                        a && (e.push({
                            parentId: o,
                            nextId: s,
                            node: a
                        }), t.add(a.id))
                    };
                for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet)(!fl(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                for (let e of this.addedSet) fu(this.droppedSet, e) || fl(this.removes, e, this.mirror) ? fu(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                let o = null;
                for (; n.length;) {
                    let e = null;
                    if (o) {
                        let t = this.mirror.getId(o.value.parentNode),
                            n = r(o.value); - 1 !== t && -1 !== n && (e = o)
                    }
                    if (!e) {
                        let t = n.tail;
                        for (; t;) {
                            let n = t;
                            if (t = t.previous, n) {
                                let t = this.mirror.getId(n.value.parentNode);
                                if (-1 === r(n.value)) continue;
                                if (-1 !== t) {
                                    e = n;
                                    break
                                } {
                                    let t = n.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let r = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(r)) {
                                            e = n;
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!e) {
                        for (; n.head;) n.removeNode(n.head.value);
                        break
                    }
                    o = e.previous, n.removeNode(e.value), i(e.value)
                }
                let s = {
                    texts: this.texts.map(e => ({
                        id: this.mirror.getId(e.node),
                        value: e.value
                    })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                    attributes: this.attributes.map(e => {
                        let {
                            attributes: t
                        } = e;
                        if ("string" == typeof t.style) {
                            let n = JSON.stringify(e.styleDiff),
                                r = JSON.stringify(e._unchangedStyles);
                            n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                        }
                        return {
                            id: this.mirror.getId(e.node),
                            attributes: t
                        }
                    }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                    removes: this.removes,
                    adds: e
                };
                (s.texts.length || s.attributes.length || s.removes.length || s.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(s))
            }, this.processMutation = e => {
                if (!pH(e.target, this.mirror)) switch (e.type) {
                    case "characterData":
                        {
                            let t = e.target.textContent;pq(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                value: pA(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, pW(e.target)) : t.replace(/[\S]/g, "*") : t,
                                node: e.target
                            });
                            break
                        }
                    case "attributes":
                        {
                            let t = e.target,
                                n = e.attributeName,
                                r = e.target.getAttribute(n);
                            if ("value" === n) {
                                let n = ps(t),
                                    i = t.tagName;
                                r = pa(t, i, n);
                                let o = pt({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: i,
                                    type: n
                                });
                                r = pn({
                                    isMasked: pA(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, o),
                                    element: t,
                                    value: r,
                                    maskInputFn: this.maskInputFn
                                })
                            }
                            if (pq(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                            let i = this.attributeMap.get(e.target);
                            if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                if (ft(t)) return;
                                n = "rr_src"
                            }
                            if (i || (i = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !pT(t.tagName, n) && (i.attributes[n] = pI(this.doc, pr(t.tagName), pr(n), r, t, this.maskAttributeFn), "style" === n)) {
                                let n = e.oldValue ? this.styleDeclarationParser.parse(e.oldValue) : null;
                                for (let e of Array.from(t.style)) {
                                    let r = t.style.getPropertyValue(e),
                                        o = t.style.getPropertyPriority(e);
                                    r !== (n ? .getPropertyValue(e) || "") || o !== (n ? .getPropertyPriority(e) || "") ? "" === o ? i.styleDiff[e] = r : i.styleDiff[e] = [r, o] : i._unchangedStyles[e] = [r, o]
                                }
                                if (n)
                                    for (let e of Array.from(n)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                            }
                            break
                        }
                    case "childList":
                        if (pq(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                            let n = this.mirror.getId(t),
                                r = d6(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                            pq(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || pH(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (fa(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                                if (d6(t)) return !1;
                                let r = n.getId(t);
                                return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                            }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[fo(n, r)] ? fa(this.movedSet, t) : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow: !!(d6(e.target) && d8(e.target)) || void 0
                            })), this.mapRemoves.push(t))
                        })
                }
            }, this.genAdds = (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                    if (this.mirror.hasNode(e)) {
                        if (pH(e, this.mirror)) return;
                        this.movedSet.add(e);
                        let n = null;
                        t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[fo(this.mirror.getId(e), n)] = !0)
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    !pq(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes && e.childNodes.forEach(e => this.genAdds(e)), pG(e) && e.shadowRoot.childNodes.forEach(t => {
                        this.processedNodeManager.add(t, this), this.genAdds(t, e)
                    }))
                }
            }
        }
        init(e) {
            ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"].forEach(t => {
                this[t] = e[t]
            }), this.styleDeclarationParser = new fr(this.doc)
        }
        freeze() {
            this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset()
        }
    }

    function fa(e, t) {
        e.delete(t), t.childNodes ? .forEach(t => fa(e, t))
    }

    function fl(e, t, n) {
        return 0 !== e.length && function(e, t, n) {
            let r = t.parentNode;
            for (; r;) {
                let t = n.getId(r);
                if (e.some(e => e.id === t)) return !0;
                r = r.parentNode
            }
            return !1
        }(e, t, n)
    }

    function fu(e, t) {
        return 0 !== e.size && function e(t, n) {
            let {
                parentNode: r
            } = n;
            return !!r && (!!t.has(r) || e(t, r))
        }(e, t)
    }
    let fc = [];

    function fd(e) {
        try {
            if ("composedPath" in e) {
                let t = e.composedPath();
                if (t.length) return t[0]
            } else if ("path" in e && e.path.length) return e.path[0]
        } catch {}
        return e && e.target
    }

    function fp(e, t) {
        let n = new fs;
        fc.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver,
            i = window ? .Zone ? .__symbol__ ? .("MutationObserver");
        i && window[i] && (r = window[i]);
        let o = new r(p6(t => {
            e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
        }));
        return o.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), o
    }

    function ff({
        scrollCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: i,
        unblockSelector: o,
        sampling: s
    }) {
        return pN("scroll", p6(pL(p6(s => {
            let a = fd(s);
            if (!a || pq(a, r, i, o, !0)) return;
            let l = n.getId(a);
            if (a === t && t.defaultView) {
                let n = pF(t.defaultView);
                e({
                    id: l,
                    x: n.left,
                    y: n.top
                })
            } else e({
                id: l,
                x: a.scrollLeft,
                y: a.scrollTop
            })
        }), s.scroll || 100)), t)
    }
    let fh = ["INPUT", "TEXTAREA", "SELECT"],
        fm = new WeakMap;

    function fg(e) {
        var t = [];
        if (fb("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || fb("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || fb("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || fb("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            let n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n)
        } else if (e.parentStyleSheet) {
            let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n)
        }
        return t
    }

    function f_(e, t, n) {
        let r, i;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {
            styleId: i,
            id: r
        }) : {}
    }

    function fy({
        mirror: e,
        stylesheetManager: t
    }, n) {
        let r = null;
        r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
        let i = "#document" === n.nodeName ? n.defaultView ? .Document : n.ownerDocument ? .defaultView ? .ShadowRoot,
            o = i ? .prototype ? Object.getOwnPropertyDescriptor(i ? .prototype, "adoptedStyleSheets") : void 0;
        return null !== r && -1 !== r && i && o ? (Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: o.configurable,
            enumerable: o.enumerable,
            get() {
                return o.get ? .call(this)
            },
            set(e) {
                let n = o.set ? .call(this, e);
                if (null !== r && -1 !== r) try {
                    t.adoptStyleSheets(e, r)
                } catch (e) {}
                return n
            }
        }), p6(() => {
            Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get: o.get,
                set: o.set
            })
        })) : () => {}
    }

    function fv(e, t = {}) {
        let n, r = e.doc.defaultView;
        if (!r) return () => {};
        e.recordDOM && (n = fp(e, e.doc));
        let i = function({
                mousemoveCb: e,
                sampling: t,
                doc: n,
                mirror: r
            }) {
                let i;
                if (!1 === t.mousemove) return () => {};
                let o = "number" == typeof t.mousemove ? t.mousemove : 50,
                    s = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                    a = [],
                    l = pL(p6(t => {
                        let n = Date.now() - i;
                        e(a.map(e => (e.timeOffset -= n, e)), t), a = [], i = null
                    }), s),
                    u = p6(pL(p6(e => {
                        let t = fd(e),
                            {
                                clientX: n,
                                clientY: o
                            } = pz(e) ? e.changedTouches[0] : e;
                        i || (i = pj()), a.push({
                            x: n,
                            y: o,
                            id: r.getId(t),
                            timeOffset: pj() - i
                        }), l("u" > typeof DragEvent && e instanceof DragEvent ? p2.Drag : e instanceof MouseEvent ? p2.MouseMove : p2.TouchMove)
                    }), o, {
                        trailing: !1
                    })),
                    c = [pN("mousemove", u, n), pN("touchmove", u, n), pN("drag", u, n)];
                return p6(() => {
                    c.forEach(e => e())
                })
            }(e),
            o = function({
                mouseInteractionCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: o,
                sampling: s
            }) {
                if (!1 === s.mouseInteraction) return () => {};
                let a = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction,
                    l = [],
                    u = null;
                return Object.keys(p3).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(s => {
                    let a = pr(s);
                    if (window.PointerEvent) switch (p3[s]) {
                        case p3.MouseDown:
                        case p3.MouseUp:
                            a = a.replace("mouse", "pointer");
                            break;
                        case p3.TouchStart:
                        case p3.TouchEnd:
                            return
                    }
                    l.push(pN(a, t => {
                        let a = fd(t);
                        if (pq(a, r, i, o, !0)) return;
                        let l = null,
                            c = s;
                        if ("pointerType" in t) {
                            switch (t.pointerType) {
                                case "mouse":
                                    l = p5.Mouse;
                                    break;
                                case "touch":
                                    l = p5.Touch;
                                    break;
                                case "pen":
                                    l = p5.Pen
                            }
                            l === p5.Touch ? p3[s] === p3.MouseDown ? c = "TouchStart" : p3[s] === p3.MouseUp && (c = "TouchEnd") : p5.Pen
                        } else pz(t) && (l = p5.Touch);
                        null !== l ? (u = l, (c.startsWith("Touch") && l === p5.Touch || c.startsWith("Mouse") && l === p5.Mouse) && (l = null)) : p3[s] === p3.Click && (l = u, u = null);
                        let d = pz(t) ? t.changedTouches[0] : t;
                        if (!d) return;
                        let p = n.getId(a),
                            {
                                clientX: f,
                                clientY: h
                            } = d;
                        p6(e)({
                            type: p3[c],
                            id: p,
                            x: f,
                            y: h,
                            ...null !== l && {
                                pointerType: l
                            }
                        })
                    }, t))
                }), p6(() => {
                    l.forEach(e => e())
                })
            }(e),
            s = ff(e),
            a = function({
                viewportResizeCb: e
            }, {
                win: t
            }) {
                let n = -1,
                    r = -1;
                return pN("resize", p6(pL(p6(() => {
                    let t = pB(),
                        i = pU();
                    (n !== t || r !== i) && (e({
                        width: Number(i),
                        height: Number(t)
                    }), n = t, r = i)
                }), 200)), t)
            }(e, {
                win: r
            }),
            l = function({
                inputCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: o,
                ignoreClass: s,
                ignoreSelector: a,
                maskInputOptions: l,
                maskInputFn: u,
                sampling: c,
                userTriggeredOnInput: d,
                maskTextClass: p,
                unmaskTextClass: f,
                maskTextSelector: h,
                unmaskTextSelector: m
            }) {
                function g(e) {
                    let n = fd(e),
                        c = e.isTrusted,
                        g = n && pi(n.tagName);
                    if ("OPTION" === g && (n = n.parentElement), !n || !g || 0 > fh.indexOf(g) || pq(n, r, i, o, !0)) return;
                    let y = n;
                    if (y.classList.contains(s) || a && y.matches(a)) return;
                    let v = ps(n),
                        b = pa(y, g, v),
                        S = !1,
                        w = pt({
                            maskInputOptions: l,
                            tagName: g,
                            type: v
                        }),
                        k = pA(n, p, h, f, m, w);
                    ("radio" === v || "checkbox" === v) && (S = n.checked), b = pn({
                        isMasked: k,
                        element: n,
                        value: b,
                        maskInputFn: u
                    }), _(n, d ? {
                        text: b,
                        isChecked: S,
                        userTriggered: c
                    } : {
                        text: b,
                        isChecked: S
                    });
                    let E = n.name;
                    "radio" === v && E && S && t.querySelectorAll(`input[type="radio"][name="${E}"]`).forEach(e => {
                        if (e !== n) {
                            let t = pn({
                                isMasked: k,
                                element: e,
                                value: pa(e, g, v),
                                maskInputFn: u
                            });
                            _(e, d ? {
                                text: t,
                                isChecked: !S,
                                userTriggered: !1
                            } : {
                                text: t,
                                isChecked: !S
                            })
                        }
                    })
                }

                function _(t, r) {
                    let i = fm.get(t);
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        fm.set(t, r);
                        let i = n.getId(t);
                        p6(e)({ ...r,
                            id: i
                        })
                    }
                }
                let y = ("last" === c.input ? ["change"] : ["input", "change"]).map(e => pN(e, p6(g), t)),
                    v = t.defaultView;
                if (!v) return () => {
                    y.forEach(e => e())
                };
                let b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
                    S = [
                        [v.HTMLInputElement.prototype, "value"],
                        [v.HTMLInputElement.prototype, "checked"],
                        [v.HTMLSelectElement.prototype, "value"],
                        [v.HTMLTextAreaElement.prototype, "value"],
                        [v.HTMLSelectElement.prototype, "selectedIndex"],
                        [v.HTMLOptionElement.prototype, "selected"]
                    ];
                return b && b.set && y.push(...S.map(e => (function e(t, n, r, i, o = window) {
                    let s = o.Object.getOwnPropertyDescriptor(t, n);
                    return o.Object.defineProperty(t, n, i ? r : {
                        set(e) {
                            p0(() => {
                                r.set.call(this, e)
                            }, 0), s && s.set && s.set.call(this, e)
                        }
                    }), () => e(t, n, s || {}, !0)
                })(e[0], e[1], {
                    set() {
                        p6(g)({
                            target: this,
                            isTrusted: !1
                        })
                    }
                }, !1, v))), p6(() => {
                    y.forEach(e => e())
                })
            }(e),
            u = function({
                mediaInteractionCb: e,
                blockClass: t,
                blockSelector: n,
                unblockSelector: r,
                mirror: i,
                sampling: o,
                doc: s
            }) {
                let a = p6(s => pL(p6(o => {
                        let a = fd(o);
                        if (!a || pq(a, t, n, r, !0)) return;
                        let {
                            currentTime: l,
                            volume: u,
                            muted: c,
                            playbackRate: d
                        } = a;
                        e({
                            type: s,
                            id: i.getId(a),
                            currentTime: l,
                            volume: u,
                            muted: c,
                            playbackRate: d
                        })
                    }), o.media || 500)),
                    l = [pN("play", a(p4.Play), s), pN("pause", a(p4.Pause), s), pN("seeked", a(p4.Seeked), s), pN("volumechange", a(p4.VolumeChange), s), pN("ratechange", a(p4.RateChange), s)];
                return p6(() => {
                    l.forEach(e => e())
                })
            }(e),
            c = () => {},
            d = () => {},
            p = () => {},
            f = () => {};
        e.recordDOM && (c = function({
            styleSheetRuleCb: e,
            mirror: t,
            stylesheetManager: n
        }, {
            win: r
        }) {
            let i, o;
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let s = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
                apply: p6((r, i, o) => {
                    let [s, a] = o, {
                        id: l,
                        styleId: u
                    } = f_(i, t, n.styleMirror);
                    return (l && -1 !== l || u && -1 !== u) && e({
                        id: l,
                        styleId: u,
                        adds: [{
                            rule: s,
                            index: a
                        }]
                    }), r.apply(i, o)
                })
            });
            let a = r.CSSStyleSheet.prototype.deleteRule;
            r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                apply: p6((r, i, o) => {
                    let [s] = o, {
                        id: a,
                        styleId: l
                    } = f_(i, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        removes: [{
                            index: s
                        }]
                    }), r.apply(i, o)
                })
            }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                apply: p6((r, i, o) => {
                    let [s] = o, {
                        id: a,
                        styleId: l
                    } = f_(i, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        replace: s
                    }), r.apply(i, o)
                })
            })), r.CSSStyleSheet.prototype.replaceSync && (o = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(o, {
                apply: p6((r, i, o) => {
                    let [s] = o, {
                        id: a,
                        styleId: l
                    } = f_(i, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        replaceSync: s
                    }), r.apply(i, o)
                })
            }));
            let l = {};
            fS("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (fS("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule), fS("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule), fS("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
            let u = {};
            return Object.entries(l).forEach(([r, i]) => {
                u[r] = {
                    insertRule: i.prototype.insertRule,
                    deleteRule: i.prototype.deleteRule
                }, i.prototype.insertRule = new Proxy(u[r].insertRule, {
                    apply: p6((r, i, o) => {
                        let [s, a] = o, {
                            id: l,
                            styleId: u
                        } = f_(i.parentStyleSheet, t, n.styleMirror);
                        return (l && -1 !== l || u && -1 !== u) && e({
                            id: l,
                            styleId: u,
                            adds: [{
                                rule: s,
                                index: [...fg(i), a || 0]
                            }]
                        }), r.apply(i, o)
                    })
                }), i.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                    apply: p6((r, i, o) => {
                        let [s] = o, {
                            id: a,
                            styleId: l
                        } = f_(i.parentStyleSheet, t, n.styleMirror);
                        return (a && -1 !== a || l && -1 !== l) && e({
                            id: a,
                            styleId: l,
                            removes: [{
                                index: [...fg(i), s]
                            }]
                        }), r.apply(i, o)
                    })
                })
            }), p6(() => {
                r.CSSStyleSheet.prototype.insertRule = s, r.CSSStyleSheet.prototype.deleteRule = a, i && (r.CSSStyleSheet.prototype.replace = i), o && (r.CSSStyleSheet.prototype.replaceSync = o), Object.entries(l).forEach(([e, t]) => {
                    t.prototype.insertRule = u[e].insertRule, t.prototype.deleteRule = u[e].deleteRule
                })
            })
        }(e, {
            win: r
        }), d = fy(e, e.doc), p = function({
            styleDeclarationCb: e,
            mirror: t,
            ignoreCSSAttributes: n,
            stylesheetManager: r
        }, {
            win: i
        }) {
            let o = i.CSSStyleDeclaration.prototype.setProperty;
            i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
                apply: p6((i, s, a) => {
                    let [l, u, c] = a;
                    if (n.has(l)) return o.apply(s, [l, u, c]);
                    let {
                        id: d,
                        styleId: p
                    } = f_(s.parentRule ? .parentStyleSheet, t, r.styleMirror);
                    return (d && -1 !== d || p && -1 !== p) && e({
                        id: d,
                        styleId: p,
                        set: {
                            property: l,
                            value: u,
                            priority: c
                        },
                        index: fg(s.parentRule)
                    }), i.apply(s, a)
                })
            });
            let s = i.CSSStyleDeclaration.prototype.removeProperty;
            return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                apply: p6((i, o, a) => {
                    let [l] = a;
                    if (n.has(l)) return s.apply(o, [l]);
                    let {
                        id: u,
                        styleId: c
                    } = f_(o.parentRule ? .parentStyleSheet, t, r.styleMirror);
                    return (u && -1 !== u || c && -1 !== c) && e({
                        id: u,
                        styleId: c,
                        remove: {
                            property: l
                        },
                        index: fg(o.parentRule)
                    }), i.apply(o, a)
                })
            }), p6(() => {
                i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = s
            })
        }(e, {
            win: r
        }), e.collectFonts && (f = function({
            fontCb: e,
            doc: t
        }) {
            let n = t.defaultView;
            if (!n) return () => {};
            let r = [],
                i = new WeakMap,
                o = n.FontFace;
            n.FontFace = function(e, t, n) {
                let r = new o(e, t, n);
                return i.set(r, {
                    family: e,
                    buffer: "string" != typeof t,
                    descriptors: n,
                    fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                }), r
            };
            let s = p$(t.fonts, "add", function(t) {
                return function(n) {
                    return p0(p6(() => {
                        let t = i.get(n);
                        t && (e(t), i.delete(n))
                    }), 0), t.apply(this, [n])
                }
            });
            return r.push(() => {
                n.FontFace = o
            }), r.push(s), p6(() => {
                r.forEach(e => e())
            })
        }(e)));
        let h = function(e) {
                let {
                    doc: t,
                    mirror: n,
                    blockClass: r,
                    blockSelector: i,
                    unblockSelector: o,
                    selectionCb: s
                } = e, a = !0, l = p6(() => {
                    let e = t.getSelection();
                    if (!e || a && e ? .isCollapsed) return;
                    a = e.isCollapsed || !1;
                    let l = [],
                        u = e.rangeCount || 0;
                    for (let t = 0; t < u; t++) {
                        let {
                            startContainer: s,
                            startOffset: a,
                            endContainer: u,
                            endOffset: c
                        } = e.getRangeAt(t);
                        pq(s, r, i, o, !0) || pq(u, r, i, o, !0) || l.push({
                            start: n.getId(s),
                            startOffset: a,
                            end: n.getId(u),
                            endOffset: c
                        })
                    }
                    s({
                        ranges: l
                    })
                });
                return l(), pN("selectionchange", l)
            }(e),
            m = function({
                doc: e,
                customElementCb: t
            }) {
                let n = e.defaultView;
                return n && n.customElements ? p$(n.customElements, "define", function(e) {
                    return function(n, r, i) {
                        try {
                            t({
                                define: {
                                    name: n
                                }
                            })
                        } catch (e) {}
                        return e.apply(this, [n, r, i])
                    }
                }) : () => {}
            }(e),
            g = [];
        for (let t of e.plugins) g.push(t.observer(t.callback, r, t.options));
        return p6(() => {
            fc.forEach(e => e.reset()), n ? .disconnect(), i(), o(), s(), a(), l(), u(), c(), d(), p(), f(), h(), m(), g.forEach(e => e())
        })
    }

    function fb(e) {
        return void 0 !== window[e]
    }

    function fS(e) {
        return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
    }
    class fw {
        constructor(e) {
            this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(e, t, n, r) {
            let i = n || this.getIdToRemoteIdMap(e),
                o = r || this.getRemoteIdToIdMap(e),
                s = i.get(t);
            return s || (s = this.generateIdFn(), i.set(t, s), o.set(s, t)), s
        }
        getIds(e, t) {
            let n = this.getIdToRemoteIdMap(e),
                r = this.getRemoteIdToIdMap(e);
            return t.map(t => this.getId(e, t, n, r))
        }
        getRemoteId(e, t, n) {
            let r = n || this.getRemoteIdToIdMap(e);
            return "number" != typeof t ? t : r.get(t) || -1
        }
        getRemoteIds(e, t) {
            let n = this.getRemoteIdToIdMap(e);
            return t.map(t => this.getRemoteId(e, t, n))
        }
        reset(e) {
            if (!e) {
                this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                return
            }
            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
        }
        getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
        }
    }
    class fk {
        constructor() {
            this.crossOriginIframeMirror = new fw(pg), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
    }
    class fE {
        constructor(e) {
            this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new fw(pg), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new fw(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
            this.iframes.set(e, !0);
            let t = fn(e);
            t && this.crossOriginIframeMap.set(t, e)
        }
        addLoadListener(e) {
            this.loadListener = e
        }
        attachIframe(e, t) {
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }), this.recordCrossOriginIframes && fn(e) ? .addEventListener("message", this.handleMessage.bind(this)), this.loadListener ? .(e);
            let n = ft(e);
            n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
        }
        handleMessage(e) {
            if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
            let t = this.crossOriginIframeMap.get(e.source);
            if (!t) return;
            let n = this.transformCrossOriginEvent(t, e.data.event);
            n && this.wrappedEmit(n, e.data.isCheckout)
        }
        transformCrossOriginEvent(e, t) {
            switch (t.type) {
                case p1.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        let n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n),
                        this.patchRootIdOnNode(t.data.node, n),
                        {
                            timestamp: t.timestamp,
                            type: p1.IncrementalSnapshot,
                            data: {
                                source: p2.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case p1.Meta:
                case p1.Load:
                case p1.DomContentLoaded:
                    break;
                case p1.Plugin:
                    return t;
                case p1.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                case p1.IncrementalSnapshot:
                    switch (t.data.source) {
                        case p2.Mutation:
                            return t.data.adds.forEach(t => {
                                this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                let n = this.crossOriginIframeRootIdMap.get(e);
                                n && this.patchRootIdOnNode(t.node, n)
                            }), t.data.removes.forEach(t => {
                                this.replaceIds(t, e, ["parentId", "id"])
                            }), t.data.attributes.forEach(t => {
                                this.replaceIds(t, e, ["id"])
                            }), t.data.texts.forEach(t => {
                                this.replaceIds(t, e, ["id"])
                            }), t;
                        case p2.Drag:
                        case p2.TouchMove:
                        case p2.MouseMove:
                            return t.data.positions.forEach(t => {
                                this.replaceIds(t, e, ["id"])
                            }), t;
                        case p2.ViewportResize:
                            return !1;
                        case p2.MediaInteraction:
                        case p2.MouseInteraction:
                        case p2.Scroll:
                        case p2.CanvasMutation:
                        case p2.Input:
                            return this.replaceIds(t.data, e, ["id"]), t;
                        case p2.StyleSheetRule:
                        case p2.StyleDeclaration:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                        case p2.Font:
                            return t;
                        case p2.Selection:
                            return t.data.ranges.forEach(t => {
                                this.replaceIds(t, e, ["start", "end"])
                            }), t;
                        case p2.AdoptedStyleSheet:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), t.data.styles ? .forEach(t => {
                                this.replaceStyleIds(t, e, ["styleId"])
                            }), t
                    }
            }
            return !1
        }
        replace(e, t, n, r) {
            for (let i of r)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
            return t
        }
        replaceIds(e, t, n) {
            return this.replace(this.crossOriginIframeMirror, e, t, n)
        }
        replaceStyleIds(e, t, n) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
        }
        replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                this.replaceIdOnNode(e, t)
            })
        }
        patchRootIdOnNode(e, t) {
            e.type === d4.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                this.patchRootIdOnNode(e, t)
            })
        }
    }
    class fx {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
    }
    class fC {
        constructor(e) {
            this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
            this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
            if (!d8(e) || this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
            let n = fp({ ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }, e);
            this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(ff({ ...this.bypassOptions,
                scrollCb: this.scrollCb,
                doc: e,
                mirror: this.mirror
            })), p0(() => {
                e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(fy({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager
                }, e))
            }, 0)
        }
        observeAttachShadow(e) {
            let t = ft(e),
                n = fn(e);
            t && n && this.patchAttachShadow(n.Element, t)
        }
        patchAttachShadow(e, t) {
            let n = this;
            this.restoreHandlers.push(p$(e.prototype, "attachShadow", function(e) {
                return function(r) {
                    let i = e.call(this, r);
                    return this.shadowRoot && pQ(this) && n.addShadowRoot(this.shadowRoot, t), i
                }
            }))
        }
        reset() {
            this.restoreHandlers.forEach(e => {
                try {
                    e()
                } catch (e) {}
            }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
        }
    }
    class fI {
        constructor(e) {
            this.trackedLinkElements = new WeakSet, this.styleMirror = new pY, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
            "_cssText" in t.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: t.id,
                    attributes: t.attributes
                }]
            }), this.trackLinkElement(e)
        }
        trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
            if (0 === e.length) return;
            let n = {
                    id: t,
                    styleIds: []
                },
                r = [];
            for (let t of e) {
                let e;
                this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                    styleId: e,
                    rules: Array.from(t.rules || CSSRule, (e, t) => ({
                        rule: d9(e),
                        index: t
                    }))
                })), n.styleIds.push(e)
            }
            r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
        }
        reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
    }
    class fT {
        constructor() {
            this.nodeMap = new WeakMap, this.active = !1
        }
        inOtherBuffer(e, t) {
            let n = this.nodeMap.get(e);
            return n && Array.from(n).some(e => e !== t)
        }
        add(e, t) {
            this.active || (this.active = !0, function(...e) {
                pZ("requestAnimationFrame")(...e)
            }(() => {
                this.nodeMap = new WeakMap, this.active = !1
            })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
    }
    try {
        if (2 !== Array.from([1], e => 2 * e)[0]) {
            let e = document.createElement("iframe");
            document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
        }
    } catch (e) {}
    let fM = new pe;

    function fR(e = {}) {
        let t, {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: o = "rr-block",
            blockSelector: s = null,
            unblockSelector: a = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: u = null,
            maskAllText: c = !1,
            maskTextClass: d = "rr-mask",
            unmaskTextClass: p = null,
            maskTextSelector: f = null,
            unmaskTextSelector: h = null,
            inlineStylesheet: m = !0,
            maskAllInputs: g,
            maskInputOptions: _,
            slimDOMOptions: y,
            maskAttributeFn: v,
            maskInputFn: b,
            maskTextFn: S,
            maxCanvasSize: w = null,
            packFn: k,
            sampling: E = {},
            dataURLOptions: T = {},
            mousemoveWait: M,
            recordDOM: R = !0,
            recordCanvas: A = !1,
            recordCrossOriginIframes: O = !1,
            recordAfter: P = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
            userTriggeredOnInput: N = !1,
            collectFonts: D = !1,
            inlineImages: L = !1,
            plugins: $,
            keepIframeSrcFn: j = () => !1,
            ignoreCSSAttributes: F = new Set([]),
            errorHandler: B,
            onMutation: U,
            getCanvasManager: W
        } = e;
        x = B;
        let q = !O || window.parent === window,
            H = !1;
        if (!q) try {
            window.parent.document && (H = !1)
        } catch (e) {
            H = !0
        }
        if (q && !n) throw Error("emit function is required");
        if (!q && !H) return () => {};
        void 0 !== M && void 0 === E.mousemove && (E.mousemove = M), fM.reset();
        let z = !0 === g ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== _ ? _ : {},
            J = !0 === y || "all" === y ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === y,
                headMetaDescKeywords: "all" === y
            } : y || {};
        ! function(e = window) {
            "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                let t = e[0];
                if (!(0 in e)) throw TypeError("1 argument is required");
                do
                    if (this === t) return !0; while (t = t && t.parentNode) return !1
            })
        }();
        let V = 0,
            G = e => {
                for (let t of $ || []) t.eventProcessor && (e = t.eventProcessor(e));
                return k && !H && (e = k(e)), e
            };
        C = (e, o) => {
            if (e.timestamp = pj(), fc[0] ? .isFrozen() && e.type !== p1.FullSnapshot && (e.type !== p1.IncrementalSnapshot || e.data.source !== p2.Mutation) && fc.forEach(e => e.unfreeze()), q) n ? .(G(e), o);
            else if (H) {
                let t = {
                    type: "rrweb",
                    event: G(e),
                    origin: window.location.origin,
                    isCheckout: o
                };
                window.parent.postMessage(t, "*")
            }
            if (e.type === p1.FullSnapshot) t = e, V = 0;
            else if (e.type === p1.IncrementalSnapshot) {
                if (e.data.source === p2.Mutation && e.data.isAttachIframe) return;
                V++;
                let n = i && V >= i,
                    o = r && t && e.timestamp - t.timestamp > r;
                (n || o) && er(!0)
            }
        };
        let Y = e => {
                C({
                    type: p1.IncrementalSnapshot,
                    data: {
                        source: p2.Mutation,
                        ...e
                    }
                })
            },
            K = e => C({
                type: p1.IncrementalSnapshot,
                data: {
                    source: p2.Scroll,
                    ...e
                }
            }),
            Q = e => C({
                type: p1.IncrementalSnapshot,
                data: {
                    source: p2.CanvasMutation,
                    ...e
                }
            }),
            X = new fI({
                mutationCb: Y,
                adoptedStyleSheetCb: e => C({
                    type: p1.IncrementalSnapshot,
                    data: {
                        source: p2.AdoptedStyleSheet,
                        ...e
                    }
                })
            }),
            Z = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new fk : new fE({
                mirror: fM,
                mutationCb: Y,
                stylesheetManager: X,
                recordCrossOriginIframes: O,
                wrappedEmit: C
            });
        for (let e of $ || []) e.getMirror && e.getMirror({
            nodeMirror: fM,
            crossOriginIframeMirror: Z.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: Z.crossOriginIframeStyleMirror
        });
        let ee = new fT,
            et = function(e, t) {
                try {
                    return e ? e(t) : new fe
                } catch {
                    return new fe
                }
            }(W, {
                mirror: fM,
                win: window,
                mutationCb: e => C({
                    type: p1.IncrementalSnapshot,
                    data: {
                        source: p2.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: A,
                blockClass: o,
                blockSelector: s,
                unblockSelector: a,
                maxCanvasSize: w,
                sampling: E.canvas,
                dataURLOptions: T,
                errorHandler: B
            }),
            en = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new fx : new fC({
                mutationCb: Y,
                scrollCb: K,
                bypassOptions: {
                    onMutation: U,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: a,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    inlineStylesheet: m,
                    maskInputOptions: z,
                    dataURLOptions: T,
                    maskAttributeFn: v,
                    maskTextFn: S,
                    maskInputFn: b,
                    recordCanvas: A,
                    inlineImages: L,
                    sampling: E,
                    slimDOMOptions: J,
                    iframeManager: Z,
                    stylesheetManager: X,
                    canvasManager: et,
                    keepIframeSrcFn: j,
                    processedNodeManager: ee,
                    ignoreCSSAttributes: F
                },
                mirror: fM
            }),
            er = (e = !1) => {
                if (!R) return;
                C({
                    type: p1.Meta,
                    data: {
                        href: window.location.href,
                        width: pU(),
                        height: pB()
                    }
                }, e), X.reset(), en.init(), fc.forEach(e => e.lock());
                let t = function(e, t) {
                    let {
                        mirror: n = new pe,
                        blockClass: r = "rr-block",
                        blockSelector: i = null,
                        unblockSelector: o = null,
                        maskAllText: s = !1,
                        maskTextClass: a = "rr-mask",
                        unmaskTextClass: l = null,
                        maskTextSelector: u = null,
                        unmaskTextSelector: c = null,
                        inlineStylesheet: d = !0,
                        inlineImages: p = !1,
                        recordCanvas: f = !1,
                        maskAllInputs: h = !1,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: _,
                        slimDOM: y = !1,
                        dataURLOptions: v,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onBlockedImageLoad: E,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: I = () => !1,
                        ignoreCSSAttributes: T = new Set([])
                    } = t || {};
                    return pP(e, {
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: s,
                        maskTextClass: a,
                        unmaskTextClass: l,
                        maskTextSelector: u,
                        unmaskTextSelector: c,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === h ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === h ? {} : h,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: _,
                        slimDOMOptions: !0 === y || "all" === y ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === y,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === y ? {} : y,
                        dataURLOptions: v,
                        inlineImages: p,
                        recordCanvas: f,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onBlockedImageLoad: E,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: I,
                        newlyAddedElement: !1,
                        ignoreCSSAttributes: T
                    })
                }(document, {
                    mirror: fM,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: a,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    inlineStylesheet: m,
                    maskAllInputs: z,
                    maskAttributeFn: v,
                    maskInputFn: b,
                    maskTextFn: S,
                    slimDOM: J,
                    dataURLOptions: T,
                    recordCanvas: A,
                    inlineImages: L,
                    onSerialize: e => {
                        pJ(e, fM) && Z.addIframe(e), pV(e, fM) && X.trackLinkElement(e), pG(e) && en.addShadowRoot(e.shadowRoot, document)
                    },
                    onIframeLoad: (e, t) => {
                        Z.attachIframe(e, t);
                        let n = fn(e);
                        n && et.addWindow(n), en.observeAttachShadow(e)
                    },
                    onStylesheetLoad: (e, t) => {
                        X.attachLinkElement(e, t)
                    },
                    onBlockedImageLoad: (e, t, {
                        width: n,
                        height: r
                    }) => {
                        Y({
                            adds: [],
                            removes: [],
                            texts: [],
                            attributes: [{
                                id: t.id,
                                attributes: {
                                    style: {
                                        width: `${n}px`,
                                        height: `${r}px`
                                    }
                                }
                            }]
                        })
                    },
                    keepIframeSrcFn: j,
                    ignoreCSSAttributes: F
                });
                !t || (C({
                    type: p1.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: pF(window)
                    }
                }), fc.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && X.adoptStyleSheets(document.adoptedStyleSheets, fM.getId(document)))
            };
        I = er;
        try {
            let e = [],
                t = e => p6(fv)({
                    onMutation: U,
                    mutationCb: Y,
                    mousemoveCb: (e, t) => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: K,
                    viewportResizeCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: Q,
                    fontCb: e => C({
                        type: p1.IncrementalSnapshot,
                        data: {
                            source: p2.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        C({
                            type: p1.IncrementalSnapshot,
                            data: {
                                source: p2.Selection,
                                ...e
                            }
                        })
                    },
                    customElementCb: e => {
                        C({
                            type: p1.IncrementalSnapshot,
                            data: {
                                source: p2.CustomElement,
                                ...e
                            }
                        })
                    },
                    blockClass: o,
                    ignoreClass: l,
                    ignoreSelector: u,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    maskInputOptions: z,
                    inlineStylesheet: m,
                    sampling: E,
                    recordDOM: R,
                    recordCanvas: A,
                    inlineImages: L,
                    userTriggeredOnInput: N,
                    collectFonts: D,
                    doc: e,
                    maskAttributeFn: v,
                    maskInputFn: b,
                    maskTextFn: S,
                    keepIframeSrcFn: j,
                    blockSelector: s,
                    unblockSelector: a,
                    slimDOMOptions: J,
                    dataURLOptions: T,
                    mirror: fM,
                    iframeManager: Z,
                    stylesheetManager: X,
                    shadowDomManager: en,
                    processedNodeManager: ee,
                    canvasManager: et,
                    ignoreCSSAttributes: F,
                    plugins: $ ? .filter(e => e.observer) ? .map(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => C({
                            type: p1.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    })) || []
                }, {});
            Z.addLoadListener(n => {
                try {
                    e.push(t(n.contentDocument))
                } catch (e) {}
            });
            let n = () => {
                er(), e.push(t(document))
            };
            return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(pN("DOMContentLoaded", () => {
                C({
                    type: p1.DomContentLoaded,
                    data: {}
                }), "DOMContentLoaded" === P && n()
            })), e.push(pN("load", () => {
                C({
                    type: p1.Load,
                    data: {}
                }), "load" === P && n()
            }, window))), () => {
                e.forEach(e => e()), ee.destroy(), I = void 0, x = void 0
            }
        } catch (e) {}
    }

    function fA(e) {
        return e > 0x2540be3ff ? e : 1e3 * e
    }

    function fO(e) {
        return e > 0x2540be3ff ? e / 1e3 : e
    }

    function fP(e, t) {
        "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
            type: p1.Custom,
            timestamp: 1e3 * (t.timestamp || 0),
            data: {
                tag: "breadcrumb",
                payload: eB(t, 10, 1e3)
            }
        }), "console" === t.category)))
    }

    function fN(e) {
        return e.closest("button,a") || e
    }

    function fD(e) {
        let t = fL(e);
        return t && t instanceof Element ? fN(t) : t
    }

    function fL(e) {
        return e_(e) && "target" in e ? e.target : e
    }
    fR.mirror = fM,
    fR.takeFullSnapshot = function(e) {
        if (!I) throw Error("please take full snapshot after start recording");
        I(e)
    },
    (U = z || (z = {}))[U.NotStarted = 0] = "NotStarted",
    U[U.Running = 1] = "Running",
    U[U.Stopped = 2] = "Stopped";
    let f$ = new Set([p2.Mutation, p2.StyleSheetRule, p2.StyleDeclaration, p2.AdoptedStyleSheet, p2.CanvasMutation, p2.Selection, p2.MediaInteraction]);class fj {
        constructor(e, t, n = fP) {
            this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
            var e;
            let t = (e = () => {
                this._lastMutation = fB()
            }, T || (T = [], ew(Y, "open", function(e) {
                return function(...t) {
                    if (T) try {
                        T.forEach(e => e())
                    } catch {}
                    return e.apply(Y, t)
                }
            })), T.push(e), () => {
                let t = T ? T.indexOf(e) : -1;
                t > -1 && T.splice(t, 1)
            });
            this._teardown = () => {
                t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
            }
        }
        removeListeners() {
            this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(e, t) {
            var n;
            if (n = this._ignoreSelector, !fF.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || n && t.matches(n) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp)) return;
            let r = {
                timestamp: fO(e.timestamp),
                clickBreadcrumb: e,
                clickCount: 0,
                node: t
            };
            this._clicks.some(e => e.node === r.node && 1 > Math.abs(e.timestamp - r.timestamp)) || (this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation(e = Date.now()) {
            this._lastMutation = fO(e)
        }
        registerScroll(e = Date.now()) {
            this._lastScroll = fO(e)
        }
        registerClick(e) {
            let t = fN(e);
            this._handleMultiClick(t)
        }
        _handleMultiClick(e) {
            this._getClicks(e).forEach(e => {
                e.clickCount++
            })
        }
        _getClicks(e) {
            return this._clicks.filter(t => t.node === e)
        }
        _checkClicks() {
            let e = [],
                t = fB();
            for (let n of (this._clicks.forEach(n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
                }), e)) {
                let e = this._clicks.indexOf(n);
                e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1))
            }
            this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(e) {
            let t = this._replay,
                n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
                r = e.mutationAfter && e.mutationAfter <= this._threshold,
                {
                    clickCount: i,
                    clickBreadcrumb: o
                } = e;
            if (!n && !r) {
                let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                    r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                    s = {
                        type: "default",
                        message: o.message,
                        timestamp: o.timestamp,
                        category: "ui.slowClickDetected",
                        data: { ...o.data,
                            url: Y.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                this._addBreadcrumbEvent(t, s);
                return
            }
            if (i > 1) {
                let e = {
                    type: "default",
                    message: o.message,
                    timestamp: o.timestamp,
                    category: "ui.multiClick",
                    data: { ...o.data,
                        url: Y.location.href,
                        route: t.getCurrentRoute(),
                        clickCount: i,
                        metric: !0
                    }
                };
                this._addBreadcrumbEvent(t, e)
            }
        }
        _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = uN(() => this._checkClicks(), 1e3)
        }
    }
    let fF = ["A", "BUTTON", "INPUT"];

    function fB() {
        return Date.now() / 1e3
    }

    function fU(e) {
        return {
            timestamp: Date.now() / 1e3,
            type: "default",
            ...e
        }
    }
    var fW = ((W = fW || {})[W.Document = 0] = "Document", W[W.DocumentType = 1] = "DocumentType", W[W.Element = 2] = "Element", W[W.Text = 3] = "Text", W[W.CDATA = 4] = "CDATA", W[W.Comment = 5] = "Comment", W);
    let fq = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

    function fH(e, t) {
        let n = fR.mirror.getId(e),
            r = n && fR.mirror.getNode(n),
            i = r && fR.mirror.getMeta(r),
            o = i && i.type === fW.Element ? i : null;
        return {
            message: t,
            data: o ? {
                nodeId: n,
                node: {
                    id: n,
                    tagName: o.tagName,
                    textContent: Array.from(o.childNodes).map(e => e.type === fW.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                    attributes: function(e) {
                        let t = {};
                        for (let n in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]), e)
                            if (fq.has(n)) {
                                let r = n;
                                ("data-testid" === n || "data-test-id" === n) && (r = "testId"), t[r] = e[n]
                            }
                        return t
                    }(o.attributes)
                }
            } : {}
        }
    }
    let fz = {
        resource: function(e) {
            let {
                entryType: t,
                initiatorType: n,
                name: r,
                responseEnd: i,
                startTime: o,
                decodedBodySize: s,
                encodedBodySize: a,
                responseStatus: l,
                transferSize: u
            } = e;
            return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                type: `${t}.${n}`,
                start: fG(o),
                end: fG(i),
                name: r,
                data: {
                    size: u,
                    statusCode: l,
                    decodedBodySize: s,
                    encodedBodySize: a
                }
            }
        },
        paint: function(e) {
            let {
                duration: t,
                entryType: n,
                name: r,
                startTime: i
            } = e, o = fG(i);
            return {
                type: n,
                name: r,
                start: o,
                end: o + t,
                data: void 0
            }
        },
        navigation: function(e) {
            let {
                entryType: t,
                name: n,
                decodedBodySize: r,
                duration: i,
                domComplete: o,
                encodedBodySize: s,
                domContentLoadedEventStart: a,
                domContentLoadedEventEnd: l,
                domInteractive: u,
                loadEventStart: c,
                loadEventEnd: d,
                redirectCount: p,
                startTime: f,
                transferSize: h,
                type: m
            } = e;
            return 0 === i ? null : {
                type: `${t}.${m}`,
                start: fG(f),
                end: fG(o),
                name: n,
                data: {
                    size: h,
                    decodedBodySize: r,
                    encodedBodySize: s,
                    duration: i,
                    domInteractive: u,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: l,
                    loadEventStart: c,
                    loadEventEnd: d,
                    domComplete: o,
                    redirectCount: p
                }
            }
        }
    };

    function fJ(e, t) {
        return ({
            metric: n
        }) => void t.replayPerformanceEntries.push(e(n))
    }

    function fV(e) {
        let t = fz[e.entryType];
        return t ? t(e) : null
    }

    function fG(e) {
        return ((e3() || Y.performance.timeOrigin) + e) / 1e3
    }

    function fY(e) {
        let t = e.entries[e.entries.length - 1];
        return fX(e, "largest-contentful-paint", t ? .element ? [t.element] : void 0)
    }

    function fK(e) {
        let t = [],
            n = [];
        for (let r of e.entries)
            if (void 0 !== r.sources) {
                let e = [];
                for (let t of r.sources)
                    if (t.node) {
                        n.push(t.node);
                        let r = fR.mirror.getId(t.node);
                        r && e.push(r)
                    }
                t.push({
                    value: r.value,
                    nodeIds: e.length ? e : void 0
                })
            }
        return fX(e, "cumulative-layout-shift", n, t)
    }

    function fQ(e) {
        let t = e.entries[e.entries.length - 1];
        return fX(e, "interaction-to-next-paint", t ? .target ? [t.target] : void 0)
    }

    function fX(e, t, n, r) {
        let i = e.value,
            o = e.rating,
            s = fG(i);
        return {
            type: "web-vital",
            name: t,
            start: s,
            end: s,
            data: {
                value: i,
                size: i,
                rating: o,
                nodeIds: n ? n.map(e => fR.mirror.getId(e)) : void 0,
                attributions: r
            }
        }
    }
    let fZ = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        f0 = ["log", "warn", "error"],
        f1 = "[Replay] ";

    function f2(e, t = "info") {
        su({
            category: "console",
            data: {
                logger: "replay"
            },
            level: t,
            message: `${f1}${e}`
        }, {
            level: t
        })
    }
    let f3 = (O = !1, P = !1, N = {
        exception: () => void 0,
        infoTick: () => void 0,
        setConfig: e => {
            O = !!e.captureExceptions, P = !!e.traceInternals
        }
    }, fZ ? (f0.forEach(e => {
        N[e] = (...t) => {
            ea[e](f1, ...t), P && f2(t.join(""), sI(e))
        }
    }), N.exception = (e, ...t) => {
        t.length && N.error && N.error(...t), ea.error(f1, e), O ? iR(e, {
            mechanism: {
                handled: !0,
                type: "auto.function.replay.debug"
            }
        }) : P && f2(e, "error")
    }, N.infoTick = (...e) => {
        ea.log(f1, ...e), P && setTimeout(() => f2(e[0]), 0)
    }) : f0.forEach(e => {
        N[e] = () => void 0
    }), N);class f5 extends Error {
        constructor() {
            super("Event buffer exceeded maximum size of 20000000.")
        }
    }
    class f4 extends Error {
        constructor() {
            super("Worker destroyed")
        }
    }
    class f6 {
        constructor() {
            this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
            return this.events.length > 0
        }
        get type() {
            return "sync"
        }
        destroy() {
            this.events = []
        }
        async addEvent(e) {
            let t = JSON.stringify(e).length;
            if (this._totalSize += t, this._totalSize > 2e7) throw new f5;
            this.events.push(e)
        }
        finish() {
            return new Promise(e => {
                let t = this.events;
                this.clear(), e(JSON.stringify(t))
            })
        }
        clear() {
            this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        getEarliestTimestamp() {
            let e = null;
            for (let {
                    timestamp: t
                } of this.events)(null === e || t < e) && (e = t);
            return null === e ? e : fA(e)
        }
    }
    class f8 {
        constructor(e) {
            this._onMessage = ({
                data: e
            }) => {
                if ("number" != typeof e.id) return;
                let t = this._pending.get(e.id);
                if (t && t.method === e.method) {
                    if (this._pending.delete(e.id), !e.success) {
                        fZ && f3.error("Error in compression worker: ", e.response), t.reject(Error("Error in compression worker"));
                        return
                    }
                    t.resolve(e.response)
                }
            }, this._worker = e, this._id = 0, this._pending = new Map, this._worker.addEventListener("message", this._onMessage)
        }
        ensureReady() {
            return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
                this._worker.addEventListener("message", ({
                    data: n
                }) => {
                    n.success ? e() : (fZ && f3.warn("Received worker message with unsuccessful status", n), t(Error("Received worker message with unsuccessful status")))
                }, {
                    once: !0
                }), this._worker.addEventListener("error", e => {
                    fZ && f3.warn("Failed to load Replay compression worker", e), t(Error(`Failed to load Replay compression worker: ${e instanceof ErrorEvent&&e.message?e.message:"Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`))
                }, {
                    once: !0
                })
            })), this._ensureReadyPromise
        }
        destroy() {
            fZ && f3.log("Destroying compression worker"), this._worker.removeEventListener("message", this._onMessage), this._pending.forEach(e => e.reject(new f4)), this._pending.clear(), this._worker.terminate()
        }
        postMessage(e, t) {
            let n = this._getAndIncrementId();
            return new Promise((r, i) => {
                this._pending.set(n, {
                    method: e,
                    resolve: r,
                    reject: i
                });
                try {
                    this._worker.postMessage({
                        id: n,
                        method: e,
                        arg: t
                    })
                } catch (e) {
                    this._pending.delete(n), i(e)
                }
            })
        }
        _getAndIncrementId() {
            return this._id++
        }
    }
    class f7 {
        constructor(e) {
            this._worker = new f8(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
            return !!this._earliestTimestamp
        }
        get type() {
            return "worker"
        }
        ensureReady() {
            return this._worker.ensureReady()
        }
        destroy() {
            this._worker.destroy()
        }
        addEvent(e) {
            let t = fA(e.timestamp);
            (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
            let n = JSON.stringify(e);
            return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new f5) : this._sendEventToWorker(n)
        }
        finish() {
            return this._finishRequest()
        }
        clear() {
            this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {
                fZ && f3.exception(e, 'Sending "clear" message to worker failed', e)
            })
        }
        getEarliestTimestamp() {
            return this._earliestTimestamp
        }
        _sendEventToWorker(e) {
            return this._worker.postMessage("addEvent", e)
        }
        async _finishRequest() {
            let e = await this._worker.postMessage("finish");
            return this._earliestTimestamp = null, this._totalSize = 0, e
        }
    }
    class f9 {
        constructor(e) {
            this._fallback = new f6, this._compression = new f7(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
        }
        get waitForCheckout() {
            return this._used.waitForCheckout
        }
        get type() {
            return this._used.type
        }
        get hasEvents() {
            return this._used.hasEvents
        }
        get hasCheckout() {
            return this._used.hasCheckout
        }
        set hasCheckout(e) {
            this._used.hasCheckout = e
        }
        set waitForCheckout(e) {
            this._used.waitForCheckout = e
        }
        destroy() {
            this._fallback.destroy(), this._compression.destroy()
        }
        clear() {
            return this._used.clear()
        }
        getEarliestTimestamp() {
            return this._used.getEarliestTimestamp()
        }
        addEvent(e) {
            return this._used.addEvent(e)
        }
        async finish() {
            return await this.ensureWorkerIsLoaded(), this._used.finish()
        }
        ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise
        }
        async _ensureWorkerIsLoaded() {
            try {
                await this._compression.ensureReady()
            } catch (e) {
                fZ && f3.exception(e, "Failed to load the compression worker, falling back to simple buffer");
                return
            }
            await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
            let {
                events: e,
                hasCheckout: t,
                waitForCheckout: n
            } = this._fallback, r = [];
            for (let t of e) r.push(this._compression.addEvent(t));
            this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
            try {
                await Promise.all(r), this._fallback.clear()
            } catch (e) {
                if (e instanceof f4) return;
                fZ && f3.exception(e, "Failed to add events when switching buffers.")
            }
        }
    }

    function he() {
        try {
            return "sessionStorage" in Y && !!Y.sessionStorage
        } catch {
            return !1
        }
    }

    function ht(e) {
        return void 0 !== e && Math.random() < e
    }

    function hn(e) {
        if (he()) try {
            Y.sessionStorage.setItem(d1, JSON.stringify(e))
        } catch {}
    }

    function hr(e) {
        let t = Date.now(),
            n = e.id || eG(),
            r = e.started || t,
            i = e.lastActivity || t;
        return {
            id: n,
            started: r,
            lastActivity: i,
            segmentId: e.segmentId || 0,
            sampled: e.sampled,
            previousSessionId: e.previousSessionId,
            dirty: e.dirty || !1
        }
    }

    function hi({
        sessionSampleRate: e,
        allowBuffering: t,
        stickySession: n = !1
    }, {
        previousSessionId: r
    } = {}) {
        let i = hr({
            sampled: ht(e) ? "session" : !!t && "buffer",
            previousSessionId: r
        });
        return n && hn(i), i
    }

    function ho(e, t, n = +new Date) {
        return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
    }

    function hs(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) {
        return !! function(e, {
            maxReplayDuration: t,
            sessionIdleExpire: n,
            targetTime: r = Date.now()
        }) {
            return ho(e.started, t, r) || ho(e.lastActivity, n, r)
        }(e, {
            sessionIdleExpire: t,
            maxReplayDuration: n
        }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
    }

    function ha({
        sessionIdleExpire: e,
        maxReplayDuration: t,
        previousSessionId: n
    }, r) {
        let i = r.stickySession && function() {
            if (!he()) return null;
            try {
                let e = Y.sessionStorage.getItem(d1);
                if (!e) return null;
                let t = JSON.parse(e);
                return fZ && f3.infoTick("Loading existing session"), hr(t)
            } catch {
                return null
            }
        }();
        return i ? hs(i, {
            sessionIdleExpire: e,
            maxReplayDuration: t
        }) ? (fZ && f3.infoTick("Session in sessionStorage is expired, creating new one..."), hi(r, {
            previousSessionId: i.id
        })) : i : (fZ && f3.infoTick("Creating new session"), hi(r, {
            previousSessionId: n
        }))
    }

    function hl(e, t, n) {
        return !!hc(e, t) && (hu(e, t, n), !0)
    }
    async function hu(e, t, n) {
        let {
            eventBuffer: r
        } = e;
        if (!r || r.waitForCheckout && !n) return null;
        let i = "buffer" === e.recordingMode;
        try {
            n && i && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
            let o = e.getOptions(),
                s = function(e, t) {
                    try {
                        if ("function" == typeof t && e.type === p1.Custom) return t(e)
                    } catch (e) {
                        return fZ && f3.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null
                    }
                    return e
                }(t, o.beforeAddRecordingEvent);
            if (!s) return;
            return await r.addEvent(s)
        } catch (o) {
            if (!e.isEnabled()) return e.handleException(o), null;
            let t = o && o instanceof f5,
                n = ty();
            if (n && n.recordDroppedEvent(t ? "buffer_overflow" : "internal_sdk_error", "replay"), t && i) return r.clear(), r.waitForCheckout = !0, null;
            e.handleException(o), await e.stop({
                reason: t ? "eventBufferOverflow" : "eventBufferError"
            })
        }
    }

    function hc(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        let n = fA(t.timestamp);
        return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (fZ && f3.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), !1))
    }

    function hd(e, t, n) {
        let r = e.getContext();
        t && r.traceIds.size < 100 && r.traceIds.add(t), n && r.segmentNames.size < 100 && r.segmentNames.add(n)
    }

    function hp(e) {
        return "transaction" === e.type
    }

    function hf(e) {
        return "feedback" === e.type
    }

    function hh(e) {
        return !!e.category
    }

    function hm() {
        let e = tf().getPropagationContext().dsc;
        e && delete e.replay_id;
        let t = ih();
        if (t) {
            let e = ik(t);
            delete e.replay_id
        }
    }

    function hg(e) {
        let t = tf().getPropagationContext().dsc;
        t && (t.replay_id = e);
        let n = ih();
        n && (ik(n).replay_id = e)
    }

    function h_(e, t) {
        return t.map(({
            type: t,
            start: n,
            end: r,
            name: i,
            data: o
        }) => {
            let s = e.throttledAddEvent({
                type: p1.Custom,
                timestamp: n,
                data: {
                    tag: "performanceSpan",
                    payload: {
                        op: t,
                        description: i,
                        startTimestamp: n,
                        endTimestamp: r,
                        data: o
                    }
                }
            });
            return "string" == typeof s ? Promise.resolve(null) : s
        })
    }

    function hy(e, t) {
        var n;
        e.isEnabled() && null !== t && (n = t.name, (!fZ || !e.getOptions()._experiments.traceInternals) && c3(n, ty()) || e.addUpdate(() => (h_(e, [t]), !0)))
    }

    function hv(e) {
        if (!e) return;
        let t = new TextEncoder;
        try {
            if ("string" == typeof e) return t.encode(e).length;
            if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
            if (e instanceof FormData) {
                let n = dn(e);
                return t.encode(n).length
            }
            if (e instanceof Blob) return e.size;
            if (e instanceof ArrayBuffer) return e.byteLength
        } catch {}
    }

    function hb(e) {
        if (!e) return;
        let t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
    }

    function hS(e, t) {
        if (!e) return {
            headers: {},
            size: void 0,
            _meta: {
                warnings: [t]
            }
        };
        let n = { ...e._meta
            },
            r = n.warnings || [];
        return n.warnings = [...r, t], e._meta = n, e
    }

    function hw(e, t) {
        if (!t) return null;
        let {
            startTimestamp: n,
            endTimestamp: r,
            url: i,
            method: o,
            statusCode: s,
            request: a,
            response: l
        } = t;
        return {
            type: e,
            start: n / 1e3,
            end: r / 1e3,
            name: i,
            data: {
                method: o,
                statusCode: s,
                request: a,
                response: l
            }
        }
    }

    function hk(e) {
        return {
            headers: {},
            size: e,
            _meta: {
                warnings: ["URL_SKIPPED"]
            }
        }
    }

    function hE(e, t, n) {
        if (!t && 0 === Object.keys(e).length) return;
        if (!t) return {
            headers: e
        };
        if (!n) return {
            headers: e,
            size: t
        };
        let r = {
                headers: e,
                size: t
            },
            {
                body: i,
                warnings: o
            } = function(e) {
                let t, n;
                if (!e || "string" != typeof e) return {
                    body: e
                };
                let r = e.length > 15e4,
                    i = (t = e[0], n = e[e.length - 1], "[" === t && "]" === n || "{" === t && "}" === n);
                if (r) {
                    let t = e.slice(0, 15e4);
                    return i ? {
                        body: t,
                        warnings: ["MAYBE_JSON_TRUNCATED"]
                    } : {
                        body: `${t}…`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (i) try {
                    return {
                        body: JSON.parse(e)
                    }
                } catch {}
                return {
                    body: e
                }
            }(n);
        return r.body = i, o ? .length && (r._meta = {
            warnings: o
        }), r
    }

    function hx(e, t) {
        return Object.entries(e).reduce((n, [r, i]) => {
            let o = r.toLowerCase();
            return t.includes(o) && e[r] && (n[o] = i), n
        }, {})
    }

    function hC(e, t = Y.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(Y.location.origin)) return e;
        let n = new URL(e, t);
        if (n.origin !== new URL(t).origin) return e;
        let r = n.href;
        return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
    }

    function hI(e, t) {
        let n = {};
        return t.forEach(t => {
            e.get(t) && (n[t] = e.get(t))
        }), n
    }

    function hT(e, t) {
        if (!e) return {};
        let n = e.headers;
        return n ? n instanceof Headers ? hI(n, t) : Array.isArray(n) ? {} : hx(n, t) : {}
    }
    let hM = Y.navigator;class hR extends Error {
        constructor(e) {
            super(`Transport returned status code ${e}`)
        }
    }
    class hA extends Error {
        constructor(e) {
            super("Rate limit hit"), this.rateLimits = e
        }
    }
    class hO extends Error {
        constructor() {
            super("Session is too long, not sending replay")
        }
    }
    let hP = "__THROTTLED";class hN {
        constructor({
            options: e,
            recordingOptions: t
        }) {
            var n;
            let r, i;
            this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5
            }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
                errorIds: new Set,
                traceIds: new Set,
                segmentNames: new Set,
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: ""
            }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
                let r, i, o, s = n ? .maxWait ? Math.max(n.maxWait, t) : 0,
                    a = n ? .setTimeoutImpl || setTimeout;

                function l() {
                    return u(), r = e()
                }

                function u() {
                    void 0 !== i && clearTimeout(i), void 0 !== o && clearTimeout(o), i = o = void 0
                }

                function c() {
                    return i && clearTimeout(i), i = a(l, t), s && void 0 === o && (o = a(l, s)), r
                }
                return c.cancel = u, c.flush = function() {
                    return void 0 !== i || void 0 !== o ? l() : r
                }, c
            }(() => this._flush(), this._options.flushMinDelay, { ...{
                    maxWait: this._options.flushMaxDelay
                },
                setTimeoutImpl: uN
            }), this._throttledAddEvent = (n = (e, t) => hc(this, e) ? hu(this, e, t) : Promise.resolve(null), r = new Map, i = !1, (...e) => {
                let t, o = Math.floor(Date.now() / 1e3);
                if (t = o - 5, r.forEach((e, n) => {
                        n < t && r.delete(n)
                    }), [...r.values()].reduce((e, t) => e + t, 0) >= 300) {
                    let e = i;
                    return i = !0, e ? "__SKIPPED" : hP
                }
                i = !1;
                let s = r.get(o) || 0;
                return r.set(o, s + 1), n(...e)
            });
            let {
                slowClickTimeout: o,
                slowClickIgnoreSelectors: s
            } = this.getOptions(), a = o ? {
                threshold: Math.min(3e3, o),
                timeout: o,
                scrollTimeout: 300,
                ignoreSelector: s ? s.join(",") : ""
            } : void 0;
            if (a && (this.clickDetector = new fj(this, a)), fZ) {
                let t = e._experiments;
                f3.setConfig({
                    captureExceptions: !!t.captureExceptions,
                    traceInternals: !!t.traceInternals
                })
            }
            this._handleVisibilityChange = () => {
                "visible" === Y.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
            }, this._handleWindowBlur = () => {
                let e = fU({
                    category: "ui.blur"
                });
                this._doChangeToBackgroundTasks(e)
            }, this._handleWindowFocus = () => {
                let e = fU({
                    category: "ui.focus"
                });
                this._doChangeToForegroundTasks(e)
            }, this._handleKeyboardEvent = e => {
                ! function(e, t) {
                    if (!e.isEnabled()) return;
                    e.updateUserActivity();
                    let n = function(e) {
                        var t;
                        let {
                            metaKey: n,
                            shiftKey: r,
                            ctrlKey: i,
                            altKey: o,
                            key: s,
                            target: a
                        } = e;
                        if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !s) return null;
                        let l = n || i || o,
                            u = 1 === s.length;
                        if (!l && u) return null;
                        let c = cm(a, {
                                maxStringLength: 200
                            }) || "<unknown>",
                            d = fH(a, c);
                        return fU({
                            category: "ui.keyDown",
                            message: c,
                            data: { ...d.data,
                                metaKey: n,
                                shiftKey: r,
                                ctrlKey: i,
                                altKey: o,
                                key: s
                            }
                        })
                    }(t);
                    n && fP(e, n)
                }(this, e)
            }
        }
        getContext() {
            return this._context
        }
        isEnabled() {
            return this._isEnabled
        }
        isPaused() {
            return this._isPaused
        }
        isRecordingCanvas() {
            return !!this._canvas
        }
        getOptions() {
            return this._options
        }
        handleException(e) {
            fZ && f3.exception(e), this._options.onError && this._options.onError(e)
        }
        initializeSampling(e) {
            let {
                errorSampleRate: t,
                sessionSampleRate: n
            } = this._options, r = t <= 0 && n <= 0;
            if (this._requiresManualStart = r, !r) {
                if (this._initializeSessionForSampling(e), !this.session) {
                    fZ && f3.exception(Error("Unable to initialize and create session"));
                    return
                }!1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", fZ && f3.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording())
            }
        }
        start() {
            if (this._isEnabled && "session" === this.recordingMode) {
                fZ && f3.log("Recording is already in progress");
                return
            }
            if (this._isEnabled && "buffer" === this.recordingMode) {
                fZ && f3.log("Buffering is in progress, call `flush()` to save the replay");
                return
            }
            fZ && f3.infoTick("Starting replay in session mode"), this._updateUserActivity();
            let e = ha({
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1
            });
            this.session = e, this.recordingMode = "session", this._initializeRecording()
        }
        startBuffering() {
            if (this._isEnabled) {
                fZ && f3.log("Buffering is in progress, call `flush()` to save the replay");
                return
            }
            fZ && f3.infoTick("Starting replay in buffer mode");
            let e = ha({
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0
            });
            this.session = e, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
            try {
                var e;
                let t, n = this._canvas;
                this._stopRecording = fR({ ...this._recordingOptions,
                    ..."buffer" === this.recordingMode ? {
                        checkoutEveryNms: 6e4
                    } : this._options._experiments.continuousCheckout && {
                        checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                    },
                    emit: (e = this, t = !1, (n, r) => {
                        try {
                            if (!e.checkAndHandleExpiredSession()) {
                                fZ && f3.warn("Received replay event after session expired.");
                                return
                            }
                            let i = r || !t;
                            t = !0,
                                function(e) {
                                    let t = e.data;
                                    if (e.type === p1.IncrementalSnapshot && t && "object" == typeof t && "source" in t && t.source === p2.Mutation && "attributes" in t && Array.isArray(t.attributes))
                                        for (let e of t.attributes) {
                                            let t = fR.mirror.getNode(e.id),
                                                n = t && fR.mirror.getMeta(t);
                                            if (n ? .type === fW.Element)
                                                for (let [t, r] of Object.entries(e.attributes)) null === r ? delete n.attributes[t] : n.attributes[t] = r
                                        }
                                }(n), e.clickDetector && function(e, t) {
                                    try {
                                        if (3 !== t.type) return;
                                        let {
                                            source: n
                                        } = t.data;
                                        if (f$.has(n) && e.registerMutation(t.timestamp), n === p2.Scroll && e.registerScroll(t.timestamp), t.data.source === p2.MouseInteraction) {
                                            let {
                                                type: n,
                                                id: r
                                            } = t.data, i = fR.mirror.getNode(r);
                                            i instanceof HTMLElement && n === p3.Click && e.registerClick(i)
                                        }
                                    } catch {}
                                }(e.clickDetector, n), e.addUpdate(() => {
                                    if ("buffer" === e.recordingMode && i && e.setInitialState(), !hl(e, n, i)) return !0;
                                    if (!i) return !1;
                                    let t = e.session;
                                    if (function(e, t) {
                                            if (t && e.session ? .segmentId === 0) {
                                                let t;
                                                hl(e, (t = e.getOptions(), {
                                                    type: p1.Custom,
                                                    timestamp: Date.now(),
                                                    data: {
                                                        tag: "options",
                                                        payload: {
                                                            shouldRecordCanvas: e.isRecordingCanvas(),
                                                            sessionSampleRate: t.sessionSampleRate,
                                                            errorSampleRate: t.errorSampleRate,
                                                            useCompressionOption: t.useCompression,
                                                            blockAllMedia: t.blockAllMedia,
                                                            maskAllText: t.maskAllText,
                                                            maskAllInputs: t.maskAllInputs,
                                                            useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                            networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                            networkCaptureBodies: t.networkCaptureBodies,
                                                            networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                            networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                        }
                                                    }
                                                }), !1)
                                            }
                                        }(e, i), "buffer" === e.recordingMode && t && e.eventBuffer && !t.dirty) {
                                        let n = e.eventBuffer.getEarliestTimestamp();
                                        n && (fZ && f3.log(`Updating session start time to earliest event in buffer to ${new Date(n)}`), t.started = n, e.getOptions().stickySession && hn(t))
                                    }
                                    return !!t ? .previousSessionId || ("session" === e.recordingMode && e.flush(), !0)
                                })
                        } catch (t) {
                            e.handleException(t)
                        }
                    }),
                    .../iPhone|iPad|iPod/i.test(hM ? .userAgent ? ? "") || /Macintosh/i.test(hM ? .userAgent ? ? "") && hM ? .maxTouchPoints && hM ? .maxTouchPoints > 1 ? {
                        sampling: {
                            mousemove: !1
                        }
                    } : {},
                    onMutation : this._onMutationHandler.bind(this),
                    ...n ? {
                        recordCanvas: n.recordCanvas,
                        getCanvasManager: n.getCanvasManager,
                        sampling: n.sampling,
                        dataURLOptions: n.dataURLOptions
                    } : {}
                })
            } catch (e) {
                this.handleException(e)
            }
        }
        stopRecording() {
            try {
                return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
            } catch (e) {
                return this.handleException(e), !1
            }
        }
        async stop({
            forceFlush: e = !1,
            reason: t
        } = {}) {
            if (!this._isEnabled) return;
            this._isEnabled = !1, this.recordingMode = "buffer";
            let n = t ? ? "manual";
            ty() ? .emit("replayEnd", {
                sessionId: this.session ? .id,
                reason: n
            });
            try {
                fZ && f3.log(`Stopping Replay triggered by ${n}`), hm(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                        force: !0
                    }), this.eventBuffer ? .destroy(), this.eventBuffer = null,
                    function() {
                        if (he()) try {
                            Y.sessionStorage.removeItem(d1)
                        } catch {}
                    }(), this.session = void 0
            } catch (e) {
                this.handleException(e)
            }
        }
        pause() {
            !this._isPaused && (this._isPaused = !0, this.stopRecording(), fZ && f3.log("Pausing replay"))
        }
        resume() {
            this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), fZ && f3.log("Resuming replay"))
        }
        async sendBufferedReplayOrFlush({
            continueRecording: e = !0
        } = {}) {
            if ("session" === this.recordingMode) return this.flushImmediate();
            let t = Date.now();
            fZ && f3.log("Converting buffer to session"), await this.flushImmediate();
            let n = this.stopRecording();
            e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession(), hg(this.session.id)), this.startRecording())
        }
        addUpdate(e) {
            let t = e();
            "buffer" !== this.recordingMode && this._isEnabled && !0 !== t && this._debouncedFlush()
        }
        triggerUserActivity() {
            if (this._updateUserActivity(), !this._stopRecording) {
                if (!this._checkSession()) return;
                this.resume();
                return
            }
            this.checkAndHandleExpiredSession(), this._updateSessionActivity()
        }
        updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity()
        }
        conditionalFlush() {
            return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
        }
        flush() {
            return this._debouncedFlush()
        }
        flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush()
        }
        cancelFlush() {
            this._debouncedFlush.cancel()
        }
        getSessionId(e) {
            if (!e || this.session ? .sampled !== !1) return this.session ? .id
        }
        checkAndHandleExpiredSession() {
            return this._lastActivity && ho(this._lastActivity, this.timeouts.sessionIdlePause) && this.session ? .sampled === "session" ? void this.pause() : !!this._checkSession()
        }
        setInitialState() {
            let e = `${Y.location.pathname}${Y.location.hash}${Y.location.search}`,
                t = `${Y.location.origin}${e}`;
            this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
        }
        throttledAddEvent(e, t) {
            let n = this._throttledAddEvent(e, t);
            if (n === hP) {
                let e = fU({
                    category: "replay.throttled"
                });
                this.addUpdate(() => !hl(this, {
                    type: 5,
                    timestamp: e.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: e,
                        metric: !0
                    }
                }))
            }
            return n
        }
        getCurrentRoute() {
            let e = this.lastActiveSpan || ih(),
                t = e && id(e),
                n = (t && r6(t).data || {})[rm];
            if (t && n && ["route", "custom"].includes(n)) return r6(t).description
        }
        _initializeRecording() {
            this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                useCompression: e,
                workerUrl: t
            }) {
                if (e && window.Worker) {
                    let e = function(e) {
                        try {
                            let t = e || function() {
                                if ("u" < typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                                    let e;
                                    return e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});'], {
                                        type: "text/javascript"
                                    }), URL.createObjectURL(e)
                                }
                                return ""
                            }();
                            if (!t) return;
                            fZ && f3.log(`Using compression worker${e?` from ${e}`:""}`);
                            let n = new Worker(t);
                            return new f9(n)
                        } catch (e) {
                            fZ && f3.exception(e, "Failed to create compression worker")
                        }
                    }(t);
                    if (e) return e
                }
                return fZ && f3.log("Using simple buffer"), new f6
            }({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl
            }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.session && ty() ? .emit("replayStart", {
                sessionId: this.session.id,
                recordingMode: this.recordingMode
            }), this.startRecording(), "session" === this.recordingMode && this.session && hg(this.session.id)
        }
        _initializeSessionForSampling(e) {
            let t = this._options.errorSampleRate > 0,
                n = ha({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
            this.session = n
        }
        _checkSession() {
            if (!this.session) return !1;
            let e = this.session;
            return !hs(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }) || (this._refreshSession(e), !1)
        }
        async _refreshSession(e) {
            this._isEnabled && (await this.stop({
                reason: "sessionExpired"
            }), this.initializeSampling(e.id))
        }
        _addListeners() {
            try {
                Y.document.addEventListener("visibilitychange", this._handleVisibilityChange), Y.addEventListener("blur", this._handleWindowBlur), Y.addEventListener("focus", this._handleWindowFocus), Y.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (! function(e) {
                    let t, n = ty();
                    co(t => {
                        var n, r;
                        if (!e.isEnabled()) return;
                        let i = function(e) {
                            let {
                                target: t,
                                message: n
                            } = function(e) {
                                let t, n = "click" === e.name,
                                    r = null;
                                try {
                                    r = n ? fD(e.event) : fL(e.event), t = cm(r, {
                                        maxStringLength: 200
                                    }) || "<unknown>"
                                } catch {
                                    t = "<unknown>"
                                }
                                return {
                                    target: r,
                                    message: t
                                }
                            }(e);
                            return fU({
                                category: `ui.${e.name}`,
                                ...fH(t, n)
                            })
                        }(t);
                        if (!i) return;
                        let o = "click" === t.name,
                            s = o ? t.event : void 0;
                        o && e.clickDetector && s ? .target && !s.altKey && !s.metaKey && !s.ctrlKey && !s.shiftKey && (n = e.clickDetector, r = fD(t.event), n.handleClick(i, r)), fP(e, i)
                    }), cd(t => {
                        if (!e.isEnabled()) return;
                        let n = function(e) {
                            let {
                                from: t,
                                to: n
                            } = e, r = Date.now() / 1e3;
                            return {
                                type: "navigation.push",
                                start: r,
                                end: r,
                                name: n,
                                data: {
                                    previous: t
                                }
                            }
                        }(t);
                        null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (h_(e, [n]), !1)))
                    }), (t = ty()) && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                        if (!e.isEnabled() || !hh(t)) return;
                        let n = !hh(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                            let t = e.data ? .arguments;
                            if (!Array.isArray(t) || 0 === t.length) return fU(e);
                            let n = !1,
                                r = t.map(e => {
                                    if (!e) return e;
                                    if ("string" == typeof e) return e.length > 5e3 ? (n = !0, `${e.slice(0,5e3)}…`) : e;
                                    if ("object" == typeof e) try {
                                        let t = eB(e, 7);
                                        if (JSON.stringify(t).length > 5e3) return n = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                        return t
                                    } catch {}
                                    return e
                                });
                            return fU({ ...e,
                                data: { ...e.data,
                                    arguments: r,
                                    ...n ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {}
                                }
                            })
                        }(t) : fU(t);
                        n && fP(e, n)
                    })(e, t));
                    let r = ty();
                    try {
                        let {
                            networkDetailAllowUrls: t,
                            networkDetailDenyUrls: n,
                            networkCaptureBodies: i,
                            networkRequestHeaders: o,
                            networkResponseHeaders: s
                        } = e.getOptions(), a = {
                            replay: e,
                            networkDetailAllowUrls: t,
                            networkDetailDenyUrls: n,
                            networkCaptureBodies: i,
                            networkRequestHeaders: o,
                            networkResponseHeaders: s
                        };
                        r && r.on("beforeAddBreadcrumb", (e, t) => (function(e, t, n) {
                            if (t.data) try {
                                "xhr" === t.category && n ? .xhr && (! function(e, t) {
                                    let {
                                        xhr: n,
                                        input: r
                                    } = t;
                                    if (!n) return;
                                    let i = hv(r),
                                        o = n.getResponseHeader("content-length") ? hb(n.getResponseHeader("content-length")) : function(e, t) {
                                            try {
                                                let n = "json" === t && e_(e) ? JSON.stringify(e) : e;
                                                return hv(n)
                                            } catch {
                                                return
                                            }
                                        }(n.response, n.responseType);
                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== o && (e.data.response_body_size = o)
                                }(t, n), async function(e, t, n) {
                                    try {
                                        let r = function(e, t, n) {
                                                var r, i;
                                                let o = Date.now(),
                                                    {
                                                        startTimestamp: s = o,
                                                        endTimestamp: a = o,
                                                        input: l,
                                                        xhr: u
                                                    } = t,
                                                    {
                                                        url: c,
                                                        method: d,
                                                        status_code: p = 0,
                                                        request_body_size: f,
                                                        response_body_size: h
                                                    } = e.data;
                                                if (!c) return null;
                                                if (!u || (r = n.networkDetailAllowUrls, !eV(hC(c), r)) || (i = n.networkDetailDenyUrls, eV(hC(c), i))) {
                                                    let e = hk(f);
                                                    return {
                                                        startTimestamp: s,
                                                        endTimestamp: a,
                                                        url: c,
                                                        method: d,
                                                        statusCode: p,
                                                        request: e,
                                                        response: hk(h)
                                                    }
                                                }
                                                let m = u[cl],
                                                    g = m ? hx(m.request_headers, n.networkRequestHeaders) : {},
                                                    _ = hx(ds(u), n.networkResponseHeaders),
                                                    [y, v] = n.networkCaptureBodies ? dr(l, f3) : [void 0],
                                                    [b, S] = n.networkCaptureBodies ? function(e) {
                                                        let t = [];
                                                        try {
                                                            return [e.responseText]
                                                        } catch (e) {
                                                            t.push(e)
                                                        }
                                                        try {
                                                            var n = e.response,
                                                                r = e.responseType;
                                                            try {
                                                                if ("string" == typeof n) return [n];
                                                                if (n instanceof Document) return [n.body.outerHTML];
                                                                if ("json" === r && e_(n)) return [JSON.stringify(n)];
                                                                if (!n) return [void 0]
                                                            } catch (e) {
                                                                return fZ && f3.exception(e, "Failed to serialize body", n), [void 0, "BODY_PARSE_ERROR"]
                                                            }
                                                            return fZ && f3.log("Skipping network body because of body type", n), [void 0, "UNPARSEABLE_BODY_TYPE"]
                                                        } catch (e) {
                                                            t.push(e)
                                                        }
                                                        return fZ && f3.warn("Failed to get xhr response body", ...t), [void 0]
                                                    }(u) : [void 0],
                                                    w = hE(g, f, y),
                                                    k = hE(_, h, b);
                                                return {
                                                    startTimestamp: s,
                                                    endTimestamp: a,
                                                    url: c,
                                                    method: d,
                                                    statusCode: p,
                                                    request: v ? hS(w, v) : w,
                                                    response: S ? hS(k, S) : k
                                                }
                                            }(e, t, n),
                                            i = hw("resource.xhr", r);
                                        hy(n.replay, i)
                                    } catch (e) {
                                        fZ && f3.exception(e, "Failed to capture xhr breadcrumb")
                                    }
                                }(t, n, e)), "fetch" === t.category && n ? .input !== void 0 && (! function(e, t) {
                                    let {
                                        input: n,
                                        response: r
                                    } = t, i = hv(n ? di(n) : void 0), o = r ? hb(r.headers.get("content-length")) : void 0;
                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== o && (e.data.response_body_size = o)
                                }(t, n), async function(e, t, n) {
                                    try {
                                        let r = await async function(e, t, n) {
                                                var r, i;
                                                let o = Date.now(),
                                                    {
                                                        startTimestamp: s = o,
                                                        endTimestamp: a = o
                                                    } = t,
                                                    {
                                                        url: l,
                                                        method: u,
                                                        status_code: c = 0,
                                                        request_body_size: d,
                                                        response_body_size: p
                                                    } = e.data,
                                                    f = (r = n.networkDetailAllowUrls, eV(hC(l), r) && (i = n.networkDetailDenyUrls, !eV(hC(l), i))),
                                                    h = f ? function({
                                                        networkCaptureBodies: e,
                                                        networkRequestHeaders: t
                                                    }, n, r) {
                                                        let i = n ? 1 === n.length && "string" != typeof n[0] ? hT(n[0], t) : 2 === n.length ? hT(n[1], t) : {} : {};
                                                        if (!e) return hE(i, r, void 0);
                                                        let [o, s] = dr(di(n), f3), a = hE(i, r, o);
                                                        return s ? hS(a, s) : a
                                                    }(n, t.input, d) : hk(d);
                                                return {
                                                    startTimestamp: s,
                                                    endTimestamp: a,
                                                    url: l,
                                                    method: u,
                                                    statusCode: c,
                                                    request: h,
                                                    response: await async function(e, {
                                                        networkCaptureBodies: t,
                                                        networkResponseHeaders: n
                                                    }, r, i) {
                                                        if (!e && void 0 !== i) return hk(i);
                                                        let o = r ? hI(r.headers, n) : {};
                                                        if (!r || !t && void 0 !== i) return hE(o, i, void 0);
                                                        let [s, a] = await async function(e) {
                                                            let t = function(e) {
                                                                try {
                                                                    return e.clone()
                                                                } catch (e) {
                                                                    fZ && f3.exception(e, "Failed to clone response body")
                                                                }
                                                            }(e);
                                                            if (!t) return [void 0, "BODY_PARSE_ERROR"];
                                                            try {
                                                                return [await new Promise((e, n) => {
                                                                    let r = uN(() => n(Error("Timeout while trying to read response body")), 500);
                                                                    (async function(e) {
                                                                        return await e.text()
                                                                    })(t).then(t => e(t), e => n(e)).finally(() => clearTimeout(r))
                                                                })]
                                                            } catch (e) {
                                                                if (e instanceof Error && e.message.indexOf("Timeout") > -1) return fZ && f3.warn("Parsing text body from response timed out"), [void 0, "BODY_PARSE_TIMEOUT"];
                                                                return fZ && f3.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"]
                                                            }
                                                        }(r), l = function(e, {
                                                            networkCaptureBodies: t,
                                                            responseBodySize: n,
                                                            captureDetails: r,
                                                            headers: i
                                                        }) {
                                                            try {
                                                                let o = e ? .length && void 0 === n ? hv(e) : n;
                                                                if (!r) return hk(o);
                                                                if (t) return hE(i, o, e);
                                                                return hE(i, o, void 0)
                                                            } catch (e) {
                                                                return fZ && f3.exception(e, "Failed to serialize response body"), hE(i, n, void 0)
                                                            }
                                                        }(s, {
                                                            networkCaptureBodies: t,
                                                            responseBodySize: i,
                                                            captureDetails: e,
                                                            headers: o
                                                        });
                                                        return a ? hS(l, a) : l
                                                    }(f, n, t.response, p)
                                                }
                                            }(e, t, n),
                                            i = hw("resource.fetch", r);
                                        hy(n.replay, i)
                                    } catch (e) {
                                        fZ && f3.exception(e, "Failed to capture fetch breadcrumb")
                                    }
                                }(t, n, e))
                            } catch (e) {
                                fZ && f3.exception(e, "Error when enriching network breadcrumb")
                            }
                        })(a, e, t))
                    } catch {}
                    iV(Object.assign((t, n) => {
                        if (e.session && hs(e.session, {
                                maxReplayDuration: e.getOptions().maxReplayDuration,
                                sessionIdleExpire: e.timeouts.sessionIdleExpire
                            }) && hm(), !e.isEnabled() || e.isPaused()) return t;
                        if ("replay_event" === t.type) return delete t.breadcrumbs, t;
                        if (t.type && !hp(t) && !hf(t)) return t;
                        if (!e.checkAndHandleExpiredSession()) return hm(), t;
                        if (hf(t)) return e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                            type: p1.Custom,
                            timestamp: 1e3 * t.timestamp,
                            data: {
                                tag: "breadcrumb",
                                payload: {
                                    timestamp: t.timestamp,
                                    type: "default",
                                    category: "sentry.feedback",
                                    data: {
                                        feedbackId: t.event_id
                                    }
                                }
                            }
                        }), !1)), t;
                        if (!t.type && t.exception ? .values ? .length && n.originalException ? .__rrweb__ && !e.getOptions()._experiments.captureExceptions) return fZ && f3.log("Ignoring error from rrweb internals", t), null;
                        let r = "buffer" === e.recordingMode && t.message !== d2 && !!t.exception && !t.type && ht(e.getOptions().errorSampleRate);
                        if ((r || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                replayId: e.getSessionId()
                            }), r && "buffer" === e.recordingMode && e.session ? .sampled === "buffer") {
                            let t = e.session;
                            t.dirty = !0, e.getOptions().stickySession && hn(t)
                        }
                        return t
                    }, {
                        id: "Replay"
                    })), n && (n.on("beforeSendEvent", t => {
                        let n;
                        e.isEnabled() && !t.type && (n = t.exception ? .values ? .[0] ? .value, "string" == typeof n && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && fP(e, fU({
                            category: "replay.hydrate-error",
                            data: {
                                url: tS()
                            }
                        })))
                    }), n.on("afterSendEvent", (t, n) => {
                        if (!e.isEnabled() || t.type && !hp(t)) return;
                        let r = n.statusCode;
                        if (r && !(r < 200) && !(r >= 300)) {
                            if (hp(t)) return void hd(e, t.contexts ? .trace ? .trace_id, t.transaction);
                            ! function(e, t) {
                                let n = e.getContext();
                                if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags ? .replayId) return;
                                let {
                                    beforeErrorSampling: r
                                } = e.getOptions();
                                ("function" != typeof r || r(t)) && uN(async () => {
                                    try {
                                        await e.sendBufferedReplayOrFlush()
                                    } catch (t) {
                                        e.handleException(t)
                                    }
                                })
                            }(e, t)
                        }
                    }), n.on("createDsc", t => {
                        let n = e.getSessionId();
                        n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                    }), n.on("processSegmentSpan", t => {
                        e.isEnabled() && hd(e, t.trace_id, t.name || void 0)
                    }), n.on("spanStart", t => {
                        e.lastActiveSpan = t
                    }), n.on("spanEnd", t => {
                        e.lastActiveSpan = t
                    }), n.on("beforeSendFeedback", async (t, n) => {
                        let r = e.getSessionId();
                        n ? .includeReplay && e.isEnabled() && r && t.contexts ? .feedback && ("api" === t.contexts.feedback.source && await e.sendBufferedReplayOrFlush(), t.contexts.feedback.replay_id = r)
                    }), n.on("openFeedbackWidget", async () => {
                        await e.sendBufferedReplayOrFlush()
                    }))
                }(this), this._hasInitializedCoreListeners = !0)
            } catch (e) {
                this.handleException(e)
            }
            this._performanceCleanupCallback = function(e) {
                function t(t) {
                    e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                }

                function n({
                    entries: e
                }) {
                    e.forEach(t)
                }
                let r = [];
                return ["navigation", "paint", "resource"].forEach(e => {
                    r.push(dJ(e, n))
                }), r.push(dH(fJ(fY, e)), dq(fJ(fK, e)), dz(fJ(fQ, e))), () => {
                    r.forEach(e => e())
                }
            }(this)
        }
        _removeListeners() {
            try {
                Y.document.removeEventListener("visibilitychange", this._handleVisibilityChange), Y.removeEventListener("blur", this._handleWindowBlur), Y.removeEventListener("focus", this._handleWindowFocus), Y.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
            } catch (e) {
                this.handleException(e)
            }
        }
        _doChangeToBackgroundTasks(e) {
            this.session && (hs(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }) ? hm() : (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
        }
        _doChangeToForegroundTasks(e) {
            if (this.session) {
                if (!this.checkAndHandleExpiredSession()) {
                    fZ && f3.log("Document has become active, but session has expired");
                    return
                }
                e && this._createCustomBreadcrumb(e)
            }
        }
        _updateUserActivity(e = Date.now()) {
            this._lastActivity = e
        }
        _updateSessionActivity(e = Date.now()) {
            this.session && (this.session.lastActivity = e, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(e) {
            this.addUpdate(() => {
                this.throttledAddEvent({
                    type: p1.Custom,
                    timestamp: e.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: e
                    }
                })
            })
        }
        _addPerformanceEntries() {
            let e = this.performanceEntries.map(fV).filter(Boolean).concat(this.replayPerformanceEntries);
            if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
                let t = this._context.initialTimestamp / 1e3;
                e = e.filter(e => e.start >= t)
            }
            return Promise.all(h_(this, e))
        }
        _clearContext() {
            this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.segmentNames.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
            let {
                session: e,
                eventBuffer: t
            } = this;
            if (!e || !t || this._requiresManualStart || e.segmentId) return;
            let n = t.getEarliestTimestamp();
            n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
            let e = {
                initialTimestamp: this._context.initialTimestamp,
                initialUrl: this._context.initialUrl,
                errorIds: Array.from(this._context.errorIds),
                traceIds: Array.from(this._context.traceIds),
                segmentNames: Array.from(this._context.segmentNames),
                urls: this._context.urls
            };
            return this._clearContext(), e
        }
        async _runFlush() {
            let e = this.getSessionId();
            if (!this.session || !this.eventBuffer || !e) {
                fZ && f3.error("No session or eventBuffer found to flush.");
                return
            }
            if (await this._addPerformanceEntries(), this.eventBuffer ? .hasEvents && (await async function(e) {
                    try {
                        return Promise.all(h_(e, [function(e) {
                            let {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: n,
                                usedJSHeapSize: r
                            } = e, i = Date.now() / 1e3;
                            return {
                                type: "memory",
                                name: "memory",
                                start: i,
                                end: i,
                                data: {
                                    memory: {
                                        jsHeapSizeLimit: t,
                                        totalJSHeapSize: n,
                                        usedJSHeapSize: r
                                    }
                                }
                            }
                        }(Y.performance.memory)]))
                    } catch {
                        return []
                    }
                }(this), this.eventBuffer && e === this.getSessionId())) try {
                this._updateInitialTimestampFromEventBuffer();
                let t = Date.now();
                if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new hO;
                let n = this._popEventContext(),
                    r = this.session.segmentId++;
                this._maybeSaveSession();
                let i = await this.eventBuffer.finish();
                await async function e(t, n = {
                    count: 0,
                    interval: 5e3
                }) {
                    let {
                        recordingData: r,
                        onError: i
                    } = t;
                    if (r.length) try {
                        return await async function({
                            recordingData: e,
                            replayId: t,
                            segmentId: n,
                            eventContext: r,
                            timestamp: i,
                            session: o
                        }) {
                            var s;
                            let a, l = function({
                                    recordingData: e,
                                    headers: t
                                }) {
                                    let n, r = `${JSON.stringify(t)}
`;
                                    if ("string" == typeof e) n = `${r}${e}`;
                                    else {
                                        let t = new TextEncoder().encode(r);
                                        (n = new Uint8Array(t.length + e.length)).set(t), n.set(e, t.length)
                                    }
                                    return n
                                }({
                                    recordingData: e,
                                    headers: {
                                        segment_id: n
                                    }
                                }),
                                {
                                    urls: u,
                                    errorIds: c,
                                    traceIds: d,
                                    segmentNames: p,
                                    initialTimestamp: f
                                } = r,
                                h = ty(),
                                m = tf(),
                                g = h ? .getTransport(),
                                _ = h ? .getDsn();
                            if (!h || !g || !_ || !o.sampled) return Promise.resolve({});
                            let y = {
                                    type: "replay_event",
                                    replay_start_timestamp: f / 1e3,
                                    timestamp: i / 1e3,
                                    error_ids: c,
                                    trace_ids: d,
                                    segment_names: p,
                                    urls: u,
                                    replay_id: t,
                                    segment_id: n,
                                    replay_type: o.sampled
                                },
                                v = await async function({
                                    client: e,
                                    scope: t,
                                    replayId: n,
                                    event: r
                                }) {
                                    let i = {
                                        event_id: n,
                                        integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                                    };
                                    e.emit("preprocessEvent", r, i);
                                    let o = await iT(e.getOptions(), r, i, t, e, th());
                                    if (!o) return null;
                                    e.emit("postprocessEvent", o, i), o.platform = o.platform || "javascript";
                                    let s = e.getSdkMetadata(),
                                        {
                                            name: a,
                                            version: l,
                                            settings: u
                                        } = s ? .sdk || {};
                                    return o.sdk = { ...o.sdk,
                                        name: a || "sentry.javascript.unknown",
                                        version: l || "0.0.0",
                                        settings: u
                                    }, o
                                }({
                                    scope: m,
                                    client: h,
                                    replayId: t,
                                    event: y
                                });
                            if (!v) return h.recordDroppedEvent("event_processor", "replay"), fZ && f3.log("An event processor returned `null`, will not send event."), Promise.resolve({});
                            delete v.sdkProcessingMetadata;
                            let b = (s = h.getOptions().tunnel, oy(oI(v, oC(v), s, _), [
                                [{
                                    type: "replay_event"
                                }, v],
                                [{
                                    type: "replay_recording",
                                    length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
                                }, l]
                            ]));
                            try {
                                a = await g.send(b)
                            } catch (t) {
                                let e = Error(d2);
                                try {
                                    e.cause = t
                                } catch {}
                                throw e
                            }
                            let S = o9({}, a);
                            if (o7(S, "replay")) throw new hA(S);
                            if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new hR(a.statusCode);
                            return a
                        }(t), !0
                    } catch (r) {
                        if (r instanceof hR || r instanceof hA) throw r;
                        if (iP("Replays", {
                                _retryCount: n.count
                            }), i && i(r), n.count >= 3) {
                            let e = Error(`${d2} - max retries exceeded`);
                            try {
                                e.cause = r
                            } catch {}
                            throw e
                        }
                        return n.interval *= ++n.count, new Promise((r, i) => {
                            uN(async () => {
                                try {
                                    await e(t, n), r(!0)
                                } catch (e) {
                                    i(e)
                                }
                            }, n.interval)
                        })
                    }
                }({
                    replayId: e,
                    recordingData: i,
                    segmentId: r,
                    eventContext: n,
                    session: this.session,
                    timestamp: t,
                    onError: e => this.handleException(e)
                })
            } catch (t) {
                this.handleException(t), this.stop({
                    reason: "sendError"
                });
                let e = ty();
                e && e.recordDroppedEvent(t instanceof hA ? "ratelimit_backoff" : t instanceof hO ? "invalid" : "send_error", "replay")
            }
        }
        async _flush({
            force: e = !1
        } = {}) {
            if (!this._isEnabled && !e) return;
            if (!this.checkAndHandleExpiredSession()) {
                fZ && f3.error("Attempting to finish replay event after session expired.");
                return
            }
            if (!this.session) return;
            let t = this.session.started,
                n = Date.now() - t;
            this._debouncedFlush.cancel();
            let r = n < this._options.minReplayDuration,
                i = n > this._options.maxReplayDuration + 5e3;
            if (r || i) {
                fZ && f3.log(`Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`), r && this._debouncedFlush();
                return
            }
            let o = this.eventBuffer;
            o && 0 === this.session.segmentId && !o.hasCheckout && fZ && f3.log("Flushing initial segment without checkout.");
            let s = !!this._flushLock;
            this._flushLock || (this._flushLock = this._runFlush());
            try {
                await this._flushLock
            } catch (e) {
                this.handleException(e)
            } finally {
                this._flushLock = void 0, s && this._debouncedFlush()
            }
        }
        _maybeSaveSession() {
            this.session && this._options.stickySession && hn(this.session)
        }
        _onMutationHandler(e) {
            let {
                ignoreMutations: t
            } = this._options._experiments;
            if (t ? .length && e.some(e => {
                    let n = function(e) {
                            if (!e) return null;
                            try {
                                return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                            } catch {
                                return null
                            }
                        }(e.target),
                        r = t.join(",");
                    return n ? .matches(r)
                })) return !1;
            let n = e.length,
                r = this._options.mutationLimit,
                i = this._options.mutationBreadcrumbLimit,
                o = r && n > r;
            if (n > i || o) {
                let e = fU({
                    category: "replay.mutations",
                    data: {
                        count: n,
                        limit: o
                    }
                });
                this._createCustomBreadcrumb(e)
            }
            return !o || (this.stop({
                reason: "mutationLimit",
                forceFlush: "session" === this.recordingMode
            }), !1)
        }
    }

    function hD(e, t) {
        return [...e, ...t].join(",")
    }
    let hL = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        h$ = ["content-length", "content-type", "accept"],
        hj = Symbol.for("sentry__originalRequestBody"),
        hF = !1,
        hB = !1,
        hU = e => new hW(e);class hW {
        constructor({
            flushMinDelay: e = 5e3,
            flushMaxDelay: t = 5500,
            minReplayDuration: n = 4999,
            maxReplayDuration: r = 36e5,
            stickySession: i = !0,
            useCompression: o = !0,
            workerUrl: s,
            _experiments: a = {},
            maskAllText: l = !0,
            maskAllInputs: u = !0,
            blockAllMedia: c = !0,
            mutationBreadcrumbLimit: d = 750,
            mutationLimit: p = 1e4,
            slowClickTimeout: f = 7e3,
            slowClickIgnoreSelectors: h = [],
            networkDetailAllowUrls: m = [],
            networkDetailDenyUrls: g = [],
            networkCaptureBodies: _ = !0,
            networkRequestHeaders: y = [],
            networkResponseHeaders: v = [],
            mask: b = [],
            maskAttributes: S = ["title", "placeholder", "aria-label"],
            unmask: w = [],
            block: k = [],
            unblock: E = [],
            ignore: x = [],
            maskFn: C,
            beforeAddRecordingEvent: I,
            beforeErrorSampling: T,
            onError: M,
            attachRawBodyFromRequest: R = !1
        } = {}) {
            this.name = "Replay";
            let A = function({
                mask: e,
                unmask: t,
                block: n,
                unblock: r,
                ignore: i
            }) {
                return {
                    maskTextSelector: hD(e, [".sentry-mask", "[data-sentry-mask]"]),
                    unmaskTextSelector: hD(t, []),
                    blockSelector: hD(n, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                    unblockSelector: hD(r, []),
                    ignoreSelector: hD(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                }
            }({
                mask: b,
                unmask: w,
                block: k,
                unblock: E,
                ignore: x
            });
            if (this._recordingOptions = {
                    maskAllInputs: u,
                    maskAllText: l,
                    maskInputOptions: {
                        password: !0
                    },
                    maskTextFn: C,
                    maskInputFn: C,
                    maskAttributeFn: (e, t, n) => (function({
                        el: e,
                        key: t,
                        maskAttributes: n,
                        maskAllText: r,
                        privacyOptions: i,
                        value: o
                    }) {
                        if (i.unmaskTextSelector && e.matches(i.unmaskTextSelector)) return o;
                        let s = n.includes(t),
                            a = r && "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "");
                        return s || a ? o.replace(/[\S]/g, "*") : o
                    })({
                        maskAttributes: S,
                        maskAllText: l,
                        privacyOptions: A,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...A,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch {}
                    },
                    recordCrossOriginIframes: !!a.recordCrossOriginIframes
                }, this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 5e4),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: i,
                    useCompression: o,
                    workerUrl: s,
                    blockAllMedia: c,
                    maskAllInputs: u,
                    maskAllText: l,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: p,
                    slowClickTimeout: f,
                    slowClickIgnoreSelectors: h,
                    networkDetailAllowUrls: m,
                    networkDetailDenyUrls: g,
                    networkCaptureBodies: _,
                    networkRequestHeaders: hq(y),
                    networkResponseHeaders: hq(v),
                    beforeAddRecordingEvent: I,
                    beforeErrorSampling: T,
                    onError: M,
                    attachRawBodyFromRequest: R,
                    _experiments: a
                }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${hL}` : hL, this._recordingOptions.ignoreCSSAttributes = new Set(["background-image"])), this._isInitialized && tI()) throw Error("Multiple Sentry Session Replay instances are not supported");
            this._isInitialized = !0
        }
        get _isInitialized() {
            return hF
        }
        set _isInitialized(e) {
            hF = e
        }
        afterAllSetup(e) {
            tI() && !this._replay && (this._initialOptions.attachRawBodyFromRequest && function() {
                if ("u" < typeof Request || hB) return;
                let e = Request;
                try {
                    let t = function(t, n) {
                        let r = new e(t, n);
                        return n ? .body != null && (r[hj] = n.body), r
                    };
                    t.prototype = e.prototype, Y.Request = t, hB = !0
                } catch {}
            }(), this._setup(e), this._initialize(e))
        }
        start() {
            this._replay && this._replay.start()
        }
        startBuffering() {
            this._replay && this._replay.startBuffering()
        }
        stop(e) {
            return this._replay ? this._replay.stop({
                forceFlush: e ? .flush ? ? "session" === this._replay.recordingMode,
                reason: "manual"
            }) : Promise.resolve()
        }
        flush(e) {
            return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
        }
        getReplayId(e) {
            if (this._replay ? .isEnabled()) return this._replay.getSessionId(e)
        }
        getRecordingMode() {
            if (this._replay ? .isEnabled()) return this._replay.recordingMode
        }
        processSpan(e) {
            let t = this.getReplayId(!0);
            t && (cO(e, {
                "sentry.replay_id": t
            }), "buffer" === this.getRecordingMode() && cO(e, {
                "sentry._internal.replay_is_buffering": !0
            }))
        }
        _initialize(e) {
            this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
        }
        _setup(e) {
            var t;
            let n, r, i, o, s = (t = this._initialOptions, n = e.getOptions(), r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...t
            }, i = rG(n.replaysSessionSampleRate), o = rG(n.replaysOnErrorSampleRate), null == i && null == o && er(() => {}), null != i && (r.sessionSampleRate = i), null != o && (r.errorSampleRate = o), r);
            this._replay = new hN({
                options: s,
                recordingOptions: this._recordingOptions
            })
        }
        _maybeLoadFromReplayCanvasIntegration(e) {
            try {
                let t = e.getIntegrationByName("ReplayCanvas");
                if (!t) return;
                this._replay._canvas = t.getOptions()
            } catch {}
        }
    }

    function hq(e) {
        return [...h$, ...e.map(e => e.toLowerCase())]
    }

    function hH() {
        let e = ty();
        return e ? .getIntegrationByName("Replay")
    }
    var hz = Object.defineProperty,
        hJ = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? hz(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n
        };

    function hV(e, t, n = 1 / 0, r = 0) {
        return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : hV(e.parentNode, t, n, r + 1)
    }

    function hG(e, t) {
        return n => {
            if (null === n) return !1;
            try {
                if (e) {
                    if ("string" == typeof e) {
                        if (n.matches(`.${e}`)) return !0
                    } else if (function(e, t) {
                            for (let n = e.classList.length; n--;) {
                                let r = e.classList[n];
                                if (t.test(r)) return !0
                            }
                            return !1
                        }(n, e)) return !0
                }
                if (t && n.matches(t)) return !0;
                return !1
            } catch {
                return !1
            }
        }
    }
    let hY = {
        map: {},
        getId: () => -1,
        getNode: () => null,
        removeNodeFromMap() {},
        has: () => !1,
        reset() {}
    };

    function hK(e, t, n, r, i = window) {
        let o = i.Object.getOwnPropertyDescriptor(e, t);
        return i.Object.defineProperty(e, t, r ? n : {
            set(e) {
                h2(() => {
                    n.set.call(this, e)
                }, 0), o && o.set && o.set.call(this, e)
            }
        }), () => hK(e, t, o || {}, !0)
    }

    function hQ(e, t, n) {
        try {
            if (!(t in e)) return () => {};
            let r = e[t],
                i = n(r);
            return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), e[t] = i, () => {
                e[t] = r
            }
        } catch {
            return () => {}
        }
    }

    function hX(e, t, n, r, i) {
        if (!e) return !1;
        let o = function(e) {
            if (!e) return null;
            try {
                return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
            } catch (e) {
                return null
            }
        }(e);
        if (!o) return !1;
        let s = hG(t, n);
        if (!i) {
            let e = r && o.matches(r);
            return s(o) && !e
        }
        let a = hV(o, s),
            l = -1;
        return !(a < 0) && (r && (l = hV(o, hG(null, r))), a > -1 && l < 0 || a < l)
    }
    "u" > typeof window && window.Proxy && window.Reflect && (hY = new Proxy(hY, {
        get: (e, t, n) => Reflect.get(e, t, n)
    })),
    Date.now().toString();
    let hZ = {};

    function h0(e) {
        let t = hZ[e];
        if (t) return t;
        let n = window.document,
            r = window[e];
        if (n && "function" == typeof n.createElement) try {
            let t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t)
        } catch (e) {}
        return hZ[e] = r.bind(window)
    }

    function h1(...e) {
        return h0("requestAnimationFrame")(...e)
    }

    function h2(...e) {
        return h0("setTimeout")(...e)
    }
    var h3 = ((q = h3 || {})[q["2D"] = 0] = "2D", q[q.WebGL = 1] = "WebGL", q[q.WebGL2 = 2] = "WebGL2", q);
    let h5 = e => M ? (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (M && !0 === M(e)) return () => {};
            throw e
        }
    } : e;
    for (var h4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h6 = "u" < typeof Uint8Array ? [] : new Uint8Array(256), h8 = 0; h8 < h4.length; h8++) h6[h4.charCodeAt(h8)] = h8;
    var h7 = function(e) {
        var t, n = new Uint8Array(e),
            r = n.length,
            i = "";
        for (t = 0; t < r; t += 3) i += h4[n[t] >> 2], i += h4[(3 & n[t]) << 4 | n[t + 1] >> 4], i += h4[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], i += h4[63 & n[t + 2]];
        return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
    };
    let h9 = new Map,
        me = (e, t, n) => {
            let r;
            if (!e || !(mn(e, t) || "object" == typeof e)) return;
            let i = e.constructor.name,
                o = ((r = h9.get(n)) || (r = new Map, h9.set(n, r)), r.has(i) || r.set(i, []), r.get(i)),
                s = o.indexOf(e);
            return -1 === s && (s = o.length, o.push(e)), s
        },
        mt = (e, t, n) => e.map(e => (function e(t, n, r) {
            if (t instanceof Array) return t.map(t => e(t, n, r));
            if (null === t);
            else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
                rr_type: t.constructor.name,
                args: [Object.values(t)]
            };
            else if (t instanceof ArrayBuffer) return {
                rr_type: t.constructor.name,
                base64: h7(t)
            };
            else if (t instanceof DataView) return {
                rr_type: t.constructor.name,
                args: [e(t.buffer, n, r), t.byteOffset, t.byteLength]
            };
            else if (t instanceof HTMLImageElement) {
                let e = t.constructor.name,
                    {
                        src: n
                    } = t;
                return {
                    rr_type: e,
                    src: n
                }
            } else if (t instanceof HTMLCanvasElement) return {
                rr_type: "HTMLImageElement",
                src: t.toDataURL()
            };
            else if (t instanceof ImageData) return {
                rr_type: t.constructor.name,
                args: [e(t.data, n, r), t.width, t.height]
            };
            else if (mn(t, n) || "object" == typeof t) return {
                rr_type: t.constructor.name,
                index: me(t, n, r)
            };
            return t
        })(e, t, n)),
        mn = (e, t) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof t[e]).find(n => e instanceof t[n]);

    function mr(e, t, n, r, i) {
        let o = [];
        try {
            let s = hQ(e.HTMLCanvasElement.prototype, "getContext", function(e) {
                return function(o, ...s) {
                    if (!hX(this, t, n, r, !0)) {
                        let e = "experimental-webgl" === o ? "webgl" : o;
                        if ("__context" in this || (this.__context = e), i && ["webgl", "webgl2"].includes(e))
                            if (s[0] && "object" == typeof s[0]) {
                                let e = s[0];
                                e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                            } else s.splice(0, 1, {
                                preserveDrawingBuffer: !0
                            })
                    }
                    return e.apply(this, [o, ...s])
                }
            });
            o.push(s)
        } catch {}
        return () => {
            o.forEach(e => e())
        }
    }

    function mi(e, t, n, r, i, o, s, a) {
        let l = [];
        for (let s of Object.getOwnPropertyNames(e))
            if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(s)) try {
                if ("function" != typeof e[s]) continue;
                let u = hQ(e, s, function(e) {
                    return function(...l) {
                        let u = e.apply(this, l);
                        if (me(u, a, this), "tagName" in this.canvas && !hX(this.canvas, r, i, o, !0)) {
                            let e = mt(l, a, this),
                                r = {
                                    type: t,
                                    property: s,
                                    args: e
                                };
                            n(this.canvas, r)
                        }
                        return u
                    }
                });
                l.push(u)
            } catch {
                let r = hK(e, s, {
                    set(e) {
                        n(this.canvas, {
                            type: t,
                            property: s,
                            args: [e],
                            setter: !0
                        })
                    }
                });
                l.push(r)
            }
        return l
    }
    class mo {
        constructor(e) {
            this.pendingCanvasMutations = new Map, this.rafStamps = {
                latestId: 0,
                invokeId: null
            }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (e, t) => {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
            };
            let {
                enableManualSnapshot: t,
                sampling: n = "all",
                win: r,
                recordCanvas: i,
                errorHandler: o
            } = e;
            if (e.sampling = n, this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, o && (M = o), (i && "number" == typeof n || t) && (this.worker = this.initFPSWorker()), this.addWindow(r), t) return;
            h5(() => {
                i && "all" === n && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), i && "number" == typeof n && this.initCanvasFPSObserver()
            })()
        }
        reset() {
            this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach(e => {
                try {
                    e()
                } catch (e) {}
            }), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, this.worker ? .terminate(), this.worker = null, this.snapshotInProgressMap = new Map
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        addWindow(e) {
            let {
                sampling: t = "all",
                blockClass: n,
                blockSelector: r,
                unblockSelector: i,
                recordCanvas: o,
                enableManualSnapshot: s
            } = this.options;
            if (!this.windowsSet.has(e)) {
                if (s) {
                    this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                    return
                }
                h5(() => {
                    if (o && "all" === t && this.initCanvasMutationObserver(e, n, r, i), o && "number" == typeof t) {
                        let t = mr(e, n, r, i, !0);
                        this.restoreHandlers.push(() => {
                            t()
                        })
                    }
                })(), this.windowsSet.add(e), this.windows.push(new WeakRef(e))
            }
        }
        addShadowRoot(e) {
            this.shadowDoms.add(new WeakRef(e))
        }
        resetShadowRoots() {
            this.shadowDoms = new Set
        }
        snapshot(e, t) {
            t ? .skipRequestAnimationFrame ? this.takeSnapshot(performance.now(), !0, e) : h1(t => this.takeSnapshot(t, !0, e))
        }
        initFPSWorker() {
            let e, t = new Worker((e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']), URL.createObjectURL(e)));
            return t.onmessage = e => {
                let t = e.data,
                    {
                        id: n
                    } = t;
                if (this.snapshotInProgressMap.set(n, !1), !("base64" in t)) return;
                let {
                    base64: r,
                    type: i,
                    width: o,
                    height: s
                } = t;
                this.mutationCb({
                    id: n,
                    type: h3["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, o, s]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: r
                                }],
                                type: i
                            }]
                        }, 0, 0, o, s]
                    }]
                })
            }, t
        }
        initCanvasFPSObserver() {
            let e;
            if (!this.windows.length && !this.shadowDoms.size) return;
            let t = n => {
                this.takeSnapshot(n, !1), e = h1(t)
            };
            e = h1(t), this.restoreHandlers.push(() => {
                e && cancelAnimationFrame(e)
            })
        }
        initCanvasMutationObserver(e, t, n, r) {
            var i, o;
            let s, a = mr(e, t, n, r, !1),
                l = function(e, t, n, r, i) {
                    let o = [];
                    for (let s of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype)) try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[s]) continue;
                        let a = hQ(t.CanvasRenderingContext2D.prototype, s, function(o) {
                            return function(...a) {
                                return hX(this.canvas, n, r, i, !0) || h2(() => {
                                    let n = mt(a, t, this);
                                    e(this.canvas, {
                                        type: h3["2D"],
                                        property: s,
                                        args: n
                                    })
                                }, 0), o.apply(this, a)
                            }
                        });
                        o.push(a)
                    } catch {
                        let n = hK(t.CanvasRenderingContext2D.prototype, s, {
                            set(t) {
                                e(this.canvas, {
                                    type: h3["2D"],
                                    property: s,
                                    args: [t],
                                    setter: !0
                                })
                            }
                        });
                        o.push(n)
                    }
                    return () => {
                        o.forEach(e => e())
                    }
                }(this.processMutation.bind(this), e, t, n, r),
                u = (i = this.processMutation.bind(this), o = this.mirror, (s = []).push(...mi(e.WebGLRenderingContext.prototype, h3.WebGL, i, t, n, r, o, e)), void 0 !== e.WebGL2RenderingContext && s.push(...mi(e.WebGL2RenderingContext.prototype, h3.WebGL2, i, t, n, r, o, e)), () => {
                    s.forEach(e => e())
                });
            this.restoreHandlers.push(() => {
                a(), l(), u()
            })
        }
        getCanvasElements(e, t, n) {
            let r = [],
                i = i => {
                    i.querySelectorAll("canvas").forEach(i => {
                        hX(i, e, t, n, !0) || r.push(i)
                    })
                };
            for (let e of this.windows) {
                let t, n = e.deref();
                try {
                    t = n && n.document
                } catch {}
                t && i(t)
            }
            for (let e of this.shadowDoms) {
                let t = e.deref();
                t && i(t)
            }
            return r
        }
        takeSnapshot(e, t, n) {
            let {
                sampling: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: s,
                dataURLOptions: a,
                maxCanvasSize: l
            } = this.options;
            return (!this.lastSnapshotTime || !(e - this.lastSnapshotTime < 1e3 / ("all" === r ? 2 : r || 2))) && (this.lastSnapshotTime = e, (n ? [n] : this.getCanvasElements(i, o, s)).forEach(e => {
                let n = this.mirror.getId(e);
                if (!(!this.mirror.hasNode(e) || !e.width || !e.height || this.snapshotInProgressMap.get(n))) {
                    if (this.snapshotInProgressMap.set(n, !0), !t && ["webgl", "webgl2"].includes(e.__context)) {
                        let t = e.getContext(e.__context);
                        t ? .getContextAttributes() ? .preserveDrawingBuffer === !1 && t.clear(t.COLOR_BUFFER_BIT)
                    }
                    createImageBitmap(e).then(t => {
                        this.worker ? .postMessage({
                            id: n,
                            bitmap: t,
                            width: e.width,
                            height: e.height,
                            dataURLOptions: a,
                            maxCanvasSize: l
                        }, [t])
                    }).catch(e => {
                        h5(() => {
                            throw this.snapshotInProgressMap.delete(n), e
                        })()
                    })
                }
            }), !0)
        }
        startPendingCanvasMutationFlusher() {
            h1(() => this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            let e = t => {
                this.rafStamps.latestId = t, h1(e)
            };
            h1(e)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((e, t) => {
                let n = this.mirror.getId(t);
                this.flushPendingCanvasMutationFor(t, n)
            }), h1(() => this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(e, t) {
            if (this.frozen || this.locked) return;
            let n = this.pendingCanvasMutations.get(e);
            if (!n || -1 === t) return;
            let r = n.map(e => {
                    let {
                        type: t,
                        ...n
                    } = e;
                    return n
                }),
                {
                    type: i
                } = n[0];
            this.mutationCb({
                id: t,
                type: i,
                commands: r
            }), this.pendingCanvasMutations.delete(e)
        }
    }
    try {
        if (2 !== Array.from([1], e => 2 * e)[0]) {
            let e = document.createElement("iframe");
            document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
        }
    } catch (e) {}
    new class {
        constructor() {
            hJ(this, "idNodeMap", new Map), hJ(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            return e ? this.getMeta(e) ? .id ? ? -1 : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            let n = this.getNode(e);
            if (n) {
                let e = this.nodeMetaMap.get(n);
                e && this.nodeMetaMap.set(t, e)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    },
    (H = J || (J = {}))[H.NotStarted = 0] = "NotStarted",
    H[H.Running = 1] = "Running",
    H[H.Stopped = 2] = "Stopped";
    let ms = {
            low: {
                sampling: {
                    canvas: 1
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .25
                }
            },
            medium: {
                sampling: {
                    canvas: 2
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .4
                }
            },
            high: {
                sampling: {
                    canvas: 4
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .5
                }
            }
        },
        ma = (e = {}) => {
            let t, n, [r, i] = e.maxCanvasSize || [],
                o = {
                    quality: e.quality || "medium",
                    enableManualSnapshot: e.enableManualSnapshot,
                    maxCanvasSize: [r ? Math.min(r, 1280) : 1280, i ? Math.min(i, 1280) : 1280]
                },
                s = new Promise(e => n = e);
            return {
                name: "ReplayCanvas",
                getOptions() {
                    let {
                        quality: e,
                        enableManualSnapshot: r,
                        maxCanvasSize: i
                    } = o;
                    return {
                        enableManualSnapshot: r,
                        recordCanvas: !0,
                        getCanvasManager: e => {
                            let o = new mo({ ...e,
                                enableManualSnapshot: r,
                                maxCanvasSize: i,
                                errorHandler: e => {
                                    try {
                                        "object" == typeof e && (e.__rrweb__ = !0)
                                    } catch {}
                                }
                            });
                            return t = o, n(o), o
                        },
                        ...ms[e] || ms.medium
                    }
                },
                async snapshot(e, n) {
                    (t || await s).snapshot(e, n)
                }
            }
        };

    function ml(e) {
        return "string" == typeof e && e.split(",").some(e => e.trim().startsWith(rC))
    }

    function mu(e, t, n, r) {
        let i = {
            url: ci(e),
            type: "fetch",
            "http.method": n,
            [rv]: r,
            [ry]: "http.client"
        };
        return t && (u9(t) || (i[cT] = ci(t.href), i[cA] = ci(t.href), i["server.address"] = t.host), t.search && (i["http.query"] = t.search), t.hash && (i["http.fragment"] = t.hash)), i
    }

    function mc(e) {
        return "number" == typeof e && isFinite(e)
    }

    function md(e, t, n, { ...r
    }) {
        let i = r6(e).start_timestamp;
        return i && i > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), oF(e, () => {
            let e = o$({
                startTime: t,
                ...r
            });
            return e && e.end(n), e
        })
    }

    function mp(e) {
        let t, n = ty();
        if (!n) return;
        let {
            name: r,
            transaction: i,
            attributes: o,
            startTime: s
        } = e, {
            release: a,
            environment: l
        } = n.getOptions(), {
            userInfo: u
        } = n.getDataCollectionOptions(), c = n.getIntegrationByName("Replay"), d = c ? .getReplayId(), p = tf(), f = p.getUser(), h = void 0 !== f ? f.email || f.id || f.ip_address : void 0;
        try {
            t = p.getScopeData().contexts.profile.profile_id
        } catch {}
        return o$({
            name: r,
            attributes: {
                release: a,
                environment: l,
                user: h || void 0,
                profile_id: t || void 0,
                replay_id: d || void 0,
                transaction: i,
                "user_agent.original": Y.navigator ? .userAgent,
                "client.address": u ? "{{auto}}" : void 0,
                ...o
            },
            startTime: s,
            experimental: {
                standalone: !0
            }
        })
    }

    function mf() {
        return Y.addEventListener && Y.performance
    }

    function mh(e) {
        return e / 1e3
    }

    function mm(e) {
        try {
            return PerformanceObserver.supportedEntryTypes.includes(e)
        } catch {
            return !1
        }
    }

    function mg(e, t) {
        let n, r, i = !1;

        function o(e) {
            !i && r && t(e, r.spanContext().spanId, r), i = !0
        }
        cw("visibilitychange", n = e => {
            ("pagehide" === e.type || Y.document ? .visibilityState === "hidden") && o("pagehide")
        }, {
            capture: !0,
            once: !0
        }), cw("pagehide", n, {
            capture: !0,
            once: !0
        });
        let s = e.on("beforeStartNavigationSpan", (e, t) => {
                t ? .isRedirect || (o("navigation"), s(), a())
            }),
            a = e.on("afterStartPageLoadSpan", e => {
                r = e, a()
            })
    }

    function m_(e) {
        return e ? ((e3() || performance.timeOrigin) + e) / 1e3 : e
    }

    function my(e) {
        let t = {};
        if (void 0 != e.nextHopProtocol) {
            let {
                name: n,
                version: r
            } = function(e) {
                let t = "unknown",
                    n = "unknown",
                    r = "";
                for (let i of e) {
                    if ("/" === i) {
                        [t, n] = e.split("/");
                        break
                    }
                    if (!isNaN(Number(i))) {
                        t = "h" === r ? "http" : r, n = e.split(r)[1];
                        break
                    }
                    r += i
                }
                return r === e && (t = r), {
                    name: t,
                    version: n
                }
            }(e.nextHopProtocol);
            t["network.protocol.version"] = r, t["network.protocol.name"] = n
        }
        return e3() || mf() ? .timeOrigin ? Object.fromEntries(Object.entries({ ...t,
            "http.request.redirect_start": m_(e.redirectStart),
            "http.request.redirect_end": m_(e.redirectEnd),
            "http.request.worker_start": m_(e.workerStart),
            "http.request.fetch_start": m_(e.fetchStart),
            "http.request.domain_lookup_start": m_(e.domainLookupStart),
            "http.request.domain_lookup_end": m_(e.domainLookupEnd),
            "http.request.connect_start": m_(e.connectStart),
            "http.request.secure_connection_start": m_(e.secureConnectionStart),
            "http.request.connection_end": m_(e.connectEnd),
            "http.request.request_start": m_(e.requestStart),
            "http.request.response_start": m_(e.responseStart),
            "http.request.response_end": m_(e.responseEnd),
            "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
        }).filter(([, e]) => null != e)) : t
    }

    function mv(e) {
        try {
            return new URL(e, iX.location.origin).href
        } catch {
            return
        }
    }

    function mb(e) {
        try {
            return new Headers(e)
        } catch {
            return
        }
    }
    let mS = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        trackFetchStreamPerformance: !1
    };

    function mw(e, t) {
        let {
            traceFetch: n,
            traceXHR: r,
            shouldCreateSpanForRequest: i,
            enableHTTPTimings: o,
            tracePropagationTargets: s,
            onRequestSpanStart: a,
            onRequestSpanEnd: l
        } = { ...mS,
            ...t
        }, u = "function" == typeof i ? i : e => !0, c = e => (function(e, t) {
            let n = tS();
            if (n) {
                let r, i;
                try {
                    r = new URL(e, n), i = new URL(n).origin
                } catch {
                    return !1
                }
                let o = r.origin === i;
                return t ? eV(r.toString(), t) || o && eV(r.pathname, t) : o
            } {
                let n = !!e.match(/^\/(?!\/)/);
                return t ? eV(e, t) : n
            }
        })(e, s), d = {}, p = e.getOptions().propagateTraceparent;
        n && u3(t => {
            let n = function(e, t, n, r, i) {
                if (!e.fetchData) return;
                let {
                    method: o,
                    url: s
                } = e.fetchData, a = r$() && t(s);
                if (e.endTimestamp) {
                    let t, n = e.fetchData.__span;
                    if (!n) return;
                    let o = r[n];
                    o && (a && (function(e, t) {
                        if (t.response) {
                            od(e, t.response.status);
                            let n = t.response ? .headers ? .get("content-length");
                            if (n) {
                                let t = parseInt(n);
                                t > 0 && e.setAttribute("http.response_content_length", t)
                            }
                        } else t.error && e.setStatus({
                            code: 2,
                            message: "internal_error"
                        });
                        e.end()
                    }(o, e), t = "object" == typeof i && null !== i ? i.onRequestSpanEnd : void 0, t ? .(o, {
                        headers: e.response ? .headers,
                        error: e.error
                    })), delete r[n]);
                    return
                }
                let {
                    spanOrigin: l = "auto.http.browser",
                    propagateTraceparent: u = !1
                } = "object" == typeof i ? i : {
                    spanOrigin: i
                }, c = ty(), d = !!ih(), p = d || !!c && om(c), f = a && p ? o$(function(e, t, n) {
                    if (e.startsWith("data:")) {
                        let r = ci(e);
                        return {
                            name: `${t} ${r}`,
                            attributes: mu(e, void 0, t, n)
                        }
                    }
                    let r = ce(e),
                        i = r ? ct(r) : e;
                    return {
                        name: `${t} ${i}`,
                        attributes: mu(e, r, t, n)
                    }
                }(s, o, l)) : new iy, h = oK(f) && d ? void 0 : f;
                if (a && !p && c ? .recordDroppedEvent("no_parent_span", "span"), e.fetchData.__span = f.spanContext().spanId, r[f.spanContext().spanId] = f, n(e.fetchData.url)) {
                    let t = e.args[0],
                        n = { ...e.args[1] || {}
                        },
                        r = function(e, t, n, r) {
                            let i = sl({
                                    span: n,
                                    propagateTraceparent: r
                                }),
                                o = i["sentry-trace"],
                                s = i.baggage,
                                a = i.traceparent;
                            if (!o) return;
                            let l = t.headers || (eS(e) ? e.headers : void 0);
                            if (!l) return {
                                "sentry-trace": o,
                                ...s && {
                                    baggage: s
                                },
                                ...a && {
                                    traceparent: a
                                }
                            };
                            if ("u" > typeof Headers && eb(l, Headers)) {
                                let e = new Headers(l);
                                if (e.get("sentry-trace") || e.set("sentry-trace", o), r && a && !e.get("traceparent") && e.set("traceparent", a), s) {
                                    let t = e.get("baggage");
                                    t ? ml(t) || e.set("baggage", `${t},${s}`) : e.set("baggage", s)
                                }
                                return e
                            }
                            if (Array.isArray(l) && l.every(e => Array.isArray(e) && 2 === e.length && "string" == typeof e[0])) {
                                let e = [...l];
                                e.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", o]), r && a && !e.find(e => "traceparent" === e[0]) && e.push(["traceparent", a]);
                                let t = l.find(e => "baggage" === e[0] && "string" == typeof e[1] && ml(e[1]));
                                return s && !t && e.push(["baggage", s]), e
                            } {
                                let e = "sentry-trace" in l ? l["sentry-trace"] : void 0,
                                    t = "traceparent" in l ? l.traceparent : void 0,
                                    n = "baggage" in l ? l.baggage : void 0,
                                    i = n ? Array.isArray(n) ? [...n] : [n] : [],
                                    u = n && (Array.isArray(n) ? n.find(e => ml(e)) : ml(n));
                                s && !u && i.push(s);
                                let c = Object.assign({}, l, {
                                    "sentry-trace": e ? ? o,
                                    ...i.length > 0 && {
                                        baggage: i.join(",")
                                    }
                                });
                                return r && a && !t && (c.traceparent = a), c
                            }
                        }(t, n, r$() && p ? h : void 0, u);
                    r && (e.args[1] = n, n.headers = r)
                }
                if (c) {
                    let t = {
                        input: e.args,
                        response: e.response,
                        startTimestamp: e.startTimestamp,
                        endTimestamp: e.endTimestamp
                    };
                    c.emit("beforeOutgoingRequestSpan", f, t)
                }
                return f
            }(t, u, c, d, {
                propagateTraceparent: p,
                onRequestSpanEnd: l
            });
            if (n) {
                let r = mv(t.fetchData.url),
                    i = r ? cn(r).host : void 0,
                    s = r ? ci(r) : void 0;
                n.setAttributes({
                    [cT]: s,
                    [cA]: s,
                    "server.address": i
                }), o && mk(n, e), a ? .(n, {
                    headers: t.headers
                })
            }
        }), r && cu(t => {
            let n = function(e, t, n, r, i, o) {
                let s = e.xhr,
                    a = s ? .[cl];
                if (!s || s.__sentry_own_request__ || !a) return;
                let {
                    url: l,
                    method: u
                } = a, c = r$() && t(l);
                if (e.endTimestamp) {
                    let t = s.__sentry_xhr_span_id__;
                    if (!t) return;
                    let n = r[t];
                    n && (c && void 0 !== a.status_code && (od(n, a.status_code), n.end(), o ? .(n, {
                        headers: mb(ds(s)),
                        error: e.error
                    })), delete r[t]);
                    return
                }
                let d = mv(l),
                    p = d ? cn(d) : cn(l),
                    f = d ? ci(d) : void 0,
                    h = ci(cr(l)),
                    m = ty(),
                    g = !!ih(),
                    _ = g || !!m && om(m),
                    y = c && _ ? o$({
                        name: `${u} ${h}`,
                        attributes: {
                            url: ci(l),
                            type: "xhr",
                            "http.method": u,
                            "http.url": f,
                            [cA]: f,
                            "server.address": p ? .host,
                            [rv]: "auto.http.browser",
                            [ry]: "http.client",
                            ...p ? .search && {
                                "http.query": p ? .search
                            },
                            ...p ? .hash && {
                                "http.fragment": p ? .hash
                            }
                        }
                    }) : new iy,
                    v = oK(y) && g ? void 0 : y;
                return c && !_ && m ? .recordDroppedEvent("no_parent_span", "span"), s.__sentry_xhr_span_id__ = y.spanContext().spanId, r[s.__sentry_xhr_span_id__] = y, n(l) && function(e, t, n) {
                    let {
                        "sentry-trace": r,
                        baggage: i,
                        traceparent: o
                    } = sl({
                        span: t,
                        propagateTraceparent: n
                    });
                    r && function(e, t, n, r) {
                        let i = e.__sentry_xhr_v3__ ? .request_headers;
                        if (!i ? .["sentry-trace"] && e.setRequestHeader) try {
                            if (e.setRequestHeader("sentry-trace", t), r && !i ? .traceparent && e.setRequestHeader("traceparent", r), n) {
                                let t = i ? .baggage;
                                t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n)
                            }
                        } catch {}
                    }(e, r, i, o)
                }(s, r$() && _ ? v : void 0, i), m && m.emit("beforeOutgoingRequestSpan", y, e), y
            }(t, u, c, d, p, l);
            n && (o && mk(n, e), a ? .(n, {
                headers: mb(t.xhr.__sentry_xhr_v3__ ? .request_headers)
            }))
        })
    }

    function mk(e, t) {
        let {
            url: n
        } = r6(e).data;
        if (!n || "string" != typeof n) return;
        let r = () => void setTimeout(i);
        if (om(t)) {
            let t = e.end.bind(e);
            e.end = e => {
                let n = e ? ? e1(),
                    o = !1,
                    s = () => {
                        o || (o = !0, setTimeout(i), t(n), clearTimeout(a))
                    };
                r = s;
                let a = setTimeout(s, 300)
            }
        }
        let i = dJ("resource", ({
            entries: t
        }) => {
            t.forEach(t => {
                "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType) && t.name.endsWith(n) && (e.setAttributes(my(t)), r())
            })
        })
    }
    let mE = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    };

    function mx(e, t = {}) {
        let n, r, i, o = new Map,
            s = !1,
            a = "externalFinish",
            l = !t.disableAutoFinish,
            u = [],
            {
                idleTimeout: c = mE.idleTimeout,
                finalTimeout: d = mE.finalTimeout,
                childSpanTimeout: p = mE.childSpanTimeout,
                beforeSpanEnd: f,
                trimIdleSpanEndTimestamp: h = !0
            } = t,
            m = ty(),
            g = tf();
        if (!m || !r$()) {
            let e = new iy({
                traceId: g.getPropagationContext().traceId
            });
            return rJ(e, g, th()), e
        }
        let _ = ih(),
            y = (n = o$(e), te(tf(), n), ee && ea.log("[Tracing] Started span is an idle span"), n);

        function v() {
            r && (clearTimeout(r), r = void 0)
        }

        function b() {
            i && (clearTimeout(i), i = void 0)
        }

        function S(e) {
            v(), r = setTimeout(() => {
                !s && 0 === o.size && l && (a = "idleTimeout", y.end(e))
            }, c)
        }

        function w(e) {
            b(), i = setTimeout(() => {
                !s && l && (a = "heartbeatFailed", y.end(e))
            }, p)
        }

        function k(e) {
            s = !0, o.clear(), u.forEach(e => e()), te(g, _);
            let t = r6(y),
                {
                    start_timestamp: n
                } = t;
            if (!n) return;
            t.data[rb] || y.setAttribute(rb, a);
            let r = t.status;
            r && "unknown" !== r || y.setStatus({
                code: 1
            }), ea.log(`[Tracing] Idle span "${t.op}" finished`);
            let i = ic(y).filter(e => e !== y),
                l = 0;
            i.forEach(t => {
                t.isRecording() && (t.setStatus({
                    code: 2,
                    message: "cancelled"
                }), t.end(e), ee && ea.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                let {
                    timestamp: n = 0,
                    start_timestamp: r = 0
                } = r6(t), i = r <= e, o = n - r <= (d + c) / 1e3;
                if (ee) {
                    let e = JSON.stringify(t, void 0, 2);
                    i ? o || ea.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : ea.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                }(!o || !i) && (y[ia] && y[ia].delete(t), l++)
            }), l > 0 && y.setAttribute("sentry.idle_span_discarded_spans", l)
        }
        return y.end = new Proxy(y.end, {
            apply(e, t, n) {
                if (f && f(y), iv(t)) return;
                let [r, ...i] = n, o = r5(r || e1()), s = ic(y).filter(e => e !== y), a = r6(y);
                if (!s.length || !h) return k(o), Reflect.apply(e, t, [o, ...i]);
                let l = m.getOptions().ignoreSpans,
                    u = s ? .reduce((e, t) => {
                        let n = r6(t);
                        return !n.timestamp || l && oh({
                            description: n.description,
                            op: n.op,
                            attributes: n.data
                        }, l) ? e : e ? Math.max(e, n.timestamp) : n.timestamp
                    }, void 0),
                    c = a.start_timestamp,
                    p = Math.min(c ? c + d / 1e3 : 1 / 0, Math.max(c || -1 / 0, Math.min(o, u || 1 / 0)));
                return k(p), Reflect.apply(e, t, [p, ...i])
            }
        }), u.push(m.on("spanStart", e => {
            var t;
            !(s || e === y || r6(e).timestamp || e instanceof oA && e.isStandaloneSpan()) && ic(y).includes(e) && (t = e.spanContext().spanId, v(), o.set(t, !0), w(e1() + p / 1e3))
        })), u.push(m.on("spanEnd", e => {
            if (!s) {
                var t;
                t = e.spanContext().spanId, o.has(t) && o.delete(t), 0 === o.size && (S(e1() + c / 1e3), b())
            }
        })), u.push(m.on("idleSpanEnableAutoFinish", e => {
            e === y && (l = !0, S(), o.size && w())
        })), t.disableAutoFinish || S(), setTimeout(() => {
            s || (y.setStatus({
                code: 2,
                message: "deadline_exceeded"
            }), a = "finalTimeout", y.end())
        }, d), y
    }

    function mC(e) {
        return null != e && e > 0 && e <= 6e4
    }
    let mI = 0,
        mT = {};

    function mM() {
        R = void 0, A = void 0, mT = {}
    }

    function mR(e, t, n, r, i = n) {
        let o = t["secureConnection" === n ? "connectEnd" : "fetch" === n ? "domainLookupStart" : `${n}End`],
            s = t[`${n}Start`];
        s && o && md(e, r + mh(s), r + mh(o), {
            op: `browser.${i}`,
            name: t.name,
            attributes: {
                [rv]: "auto.ui.browser.metrics",
                ..."redirect" === n && null != t.redirectCount ? {
                    "http.redirect_count": t.redirectCount
                } : {}
            }
        })
    }
    let mA = new WeakMap,
        mO = new WeakMap,
        mP = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
        mN = () => ({
            name: "FetchStreamPerformance",
            setup() {
                i9("fetch-body-resolved", e => {
                    if (e.response) {
                        let t = mA.get(e.response);
                        if (t && e.endTimestamp) {
                            t.end(e.endTimestamp);
                            let n = mO.get(e.response);
                            n && clearTimeout(n)
                        }
                    }
                }), oe("fetch-body-resolved", () => u5(u4)), u3(e => {
                    if (e.endTimestamp && e.response) {
                        let t = e.response.headers ? .get("content-type") || "";
                        if (e.response.headers ? .get("content-length") || !mP.some(e => t.startsWith(e))) return;
                        let n = e.fetchData ? .url || "",
                            r = e.fetchData ? .method || "GET",
                            i = ce(n),
                            o = n.startsWith("data:") ? ci(n) : i ? ct(i) : n,
                            s = o$({
                                name: `${r} ${o}`,
                                startTime: e.endTimestamp,
                                attributes: {
                                    url: ci(n),
                                    "http.method": r,
                                    type: "fetch",
                                    [ry]: "http.client.stream",
                                    [rv]: "auto.http.browser.stream"
                                }
                            });
                        mA.set(e.response, s);
                        let a = setTimeout(() => {
                            s.isRecording() && s.end()
                        }, 9e4);
                        mO.set(e.response, a)
                    }
                })
            }
        }),
        mD = [],
        mL = new Map,
        m$ = new Map,
        mj = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        },
        mF = ({
            metric: e
        }) => {
            if (void 0 == e.value) return;
            let t = mh(e.value);
            if (t > 60) return;
            let n = e.entries.find(t => t.duration === e.value && mj[t.name]);
            if (!n) return;
            let {
                interactionId: r
            } = n, i = mj[n.name], o = mh(e3() + n.startTime), s = ih(), a = s ? id(s) : void 0, l = null != r ? mL.get(r) : void 0, u = l ? .span || a, c = u ? r6(u).description : tf().getScopeData().transactionName, d = mp({
                name: l ? .elementName || cm(n.target),
                transaction: c,
                attributes: {
                    [rv]: "auto.http.browser.inp",
                    [ry]: `ui.interaction.${i}`,
                    [rx]: n.duration
                },
                startTime: o
            });
            d && (d.addEvent("inp", {
                [rS]: "millisecond",
                [rw]: e.value
            }), d.end(o + t))
        };

    function mB(e) {
        let {
            name: t,
            op: n,
            origin: r,
            metricName: i,
            value: o,
            attributes: s,
            parentSpan: a,
            reportEvent: l,
            startTime: u,
            endTime: c
        } = e, d = tf().getScopeData().transactionName, p = {
            [rv]: r,
            [ry]: n,
            [rx]: 0,
            [`browser.web_vital.${i}.value`]: o,
            [cR]: d,
            [cM]: d,
            "user_agent.original": Y.navigator ? .userAgent,
            ...s
        };
        a && r8(a).attributes ? .[ry] === "pageload" && (p["sentry.pageload.span_id"] = a.spanContext().spanId), l && (p[`browser.web_vital.${i}.report_event`] = l);
        let f = o$({
            name: t,
            attributes: p,
            startTime: u,
            parentSpan: a
        });
        f && f.end(c ? ? u)
    }
    let mU = "WebVitals",
        mW = (e = {}) => {
            let t = new Set(e.ignore ? ? []);
            return {
                name: mU,
                setup(n) {
                    let r = om(n),
                        {
                            enableStandaloneClsSpans: i,
                            enableStandaloneLcpSpans: o
                        } = e._experiments ? ? {},
                        s = r || t.has("cls") ? void 0 : i || !1,
                        a = r || t.has("lcp") ? void 0 : o || !1,
                        l = function({
                            recordClsStandaloneSpans: e,
                            recordLcpStandaloneSpans: t,
                            client: n
                        }) {
                            let r = mf();
                            if (r && e3()) {
                                r.mark && Y.performance.mark("sentry-tracing-init");
                                let i = t ? function(e) {
                                        let t, n = 0;
                                        if (!mm("largest-contentful-paint")) return;
                                        let r = dH(({
                                            metric: e
                                        }) => {
                                            let r = e.entries[e.entries.length - 1];
                                            r && mC(e.value) && (n = e.value, t = r)
                                        }, !0);
                                        mg(e, (e, i) => {
                                            (function(e, t, n, r) {
                                                if (!mC(e)) return;
                                                uA && ea.log(`Sending LCP span (${e})`);
                                                let i = mh((e3() || 0) + (t ? .startTime || 0)),
                                                    o = tf().getScopeData().transactionName,
                                                    s = t ? cm(t.element) : "Largest contentful paint",
                                                    a = {
                                                        [rv]: "auto.http.browser.lcp",
                                                        [ry]: "ui.webvital.lcp",
                                                        [rx]: 0,
                                                        "sentry.pageload.span_id": n,
                                                        "sentry.report_event": r
                                                    };
                                                t && (t.element && (a["lcp.element"] = cm(t.element)), t.id && (a["lcp.id"] = t.id), t.url && (a["lcp.url"] = t.url), null != t.loadTime && (a["lcp.loadTime"] = t.loadTime), null != t.renderTime && (a["lcp.renderTime"] = t.renderTime), null != t.size && (a["lcp.size"] = t.size));
                                                let l = mp({
                                                    name: s,
                                                    transaction: o,
                                                    attributes: a,
                                                    startTime: i
                                                });
                                                l && (l.addEvent("lcp", {
                                                    [rS]: "millisecond",
                                                    [rw]: e
                                                }), l.end(i))
                                            })(n, t, i, e), r()
                                        })
                                    }(n) : !1 === t ? dH(({
                                        metric: e
                                    }) => {
                                        let t = e.entries[e.entries.length - 1];
                                        t && mC(e.value) && (mT.lcp = {
                                            value: e.value,
                                            unit: "millisecond"
                                        }, R = t)
                                    }, !0) : void 0,
                                    o = e ? function(e) {
                                        let t, n = 0;
                                        if (!mm("layout-shift")) return;
                                        let r = dq(({
                                            metric: e
                                        }) => {
                                            let r = e.entries[e.entries.length - 1];
                                            r && (n = e.value, t = r)
                                        }, !0);
                                        mg(e, (e, i) => {
                                            var o, s;
                                            let a, l, u, c, d;
                                            o = n, s = t, uA && ea.log(`Sending CLS span (${o})`), a = s ? mh((e3() || 0) + s.startTime) : e1(), l = tf().getScopeData().transactionName, u = s ? cm(s.sources[0] ? .node) : "Layout shift", c = {
                                                [rv]: "auto.http.browser.cls",
                                                [ry]: "ui.webvital.cls",
                                                [rx]: 0,
                                                "sentry.pageload.span_id": i,
                                                "sentry.report_event": e
                                            }, s ? .sources && s.sources.forEach((e, t) => {
                                                c[`cls.source.${t+1}`] = cm(e.node)
                                            }), (d = mp({
                                                name: u,
                                                transaction: l,
                                                attributes: c,
                                                startTime: a
                                            })) && (d.addEvent("cls", {
                                                [rS]: "",
                                                [rw]: o
                                            }), d.end(a)), r()
                                        })
                                    }(n) : !1 === e ? dq(({
                                        metric: e
                                    }) => {
                                        let t = e.entries[e.entries.length - 1];
                                        t && (mT.cls = {
                                            value: e.value,
                                            unit: ""
                                        }, A = t)
                                    }, !0) : void 0,
                                    s = dX("ttfb", ({
                                        metric: e
                                    }) => {
                                        e.entries[e.entries.length - 1] && (mT.ttfb = {
                                            value: e.value,
                                            unit: "millisecond"
                                        })
                                    }, dK, S),
                                    a = dJ("paint", ({
                                        entries: e
                                    }) => {
                                        let t = db();
                                        for (let n of e) {
                                            let e = n.startTime < t.firstHiddenTime;
                                            "first-paint" === n.name && e && (mT.fp = {
                                                value: n.startTime,
                                                unit: "millisecond"
                                            }), "first-contentful-paint" === n.name && e && (mT.fcp = {
                                                value: n.startTime,
                                                unit: "millisecond"
                                            })
                                        }
                                    });
                                return () => {
                                    s(), a(), i ? .(), o ? .()
                                }
                            }
                            return () => void 0
                        }({
                            recordClsStandaloneSpans: s,
                            recordLcpStandaloneSpans: a,
                            client: n
                        }),
                        u = new WeakSet;
                    n.on("afterStartPageLoadSpan", e => {
                        u.add(e)
                    }), n.on("spanEnd", e => {
                        u.delete(e) && (l(), function(e, t) {
                            let n = e3();
                            if (!mf() ? .getEntries || !n) return mM();
                            let {
                                spanStreamingEnabled: r,
                                recordClsOnPageloadSpan: i,
                                recordLcpOnPageloadSpan: o
                            } = t, s = mh(n);
                            if ("pageload" === r6(e).op) {
                                if (function(e) {
                                        let t = dm(!1);
                                        if (!t) return;
                                        let {
                                            responseStart: n,
                                            requestStart: r
                                        } = t;
                                        r <= n && (e["ttfb.requestTime"] = {
                                            value: n - r,
                                            unit: "millisecond"
                                        })
                                    }(mT), r) {
                                    let t = (t, n, r) => {
                                        let i = r ? ? `browser.web_vital.${t}.value`;
                                        e.setAttribute(i, n), uA && ea.log("Setting web vital attribute", {
                                            [i]: n
                                        }, "on pageload span")
                                    };
                                    ["ttfb", "fp", "fcp"].forEach(e => {
                                        mT[e] && t(e, mT[e].value)
                                    }), mT["ttfb.requestTime"] && t("ttfb.requestTime", mT["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time")
                                } else i || delete mT.cls, o || delete mT.lcp, Object.entries(mT).forEach(([t, n]) => {
                                    oT(t, n.value, n.unit, e)
                                }), R && t.recordLcpOnPageloadSpan && (R.element && e.setAttribute("lcp.element", cm(R.element)), R.id && e.setAttribute("lcp.id", R.id), R.url && e.setAttribute("lcp.url", R.url.trim().slice(0, 200)), null != R.loadTime && e.setAttribute("lcp.loadTime", R.loadTime), null != R.renderTime && e.setAttribute("lcp.renderTime", R.renderTime), e.setAttribute("lcp.size", R.size)), A ? .sources && t.recordClsOnPageloadSpan && A.sources.forEach((t, n) => e.setAttribute(`cls.source.${n+1}`, cm(t.node)));
                                e.setAttribute(r ? "browser.performance.time_origin" : "performance.timeOrigin", s), e.setAttribute(r ? "browser.performance.navigation.activation_start" : "performance.activationStart", dg())
                            }
                            mM()
                        }(e, {
                            recordClsOnPageloadSpan: !1 === s,
                            recordLcpOnPageloadSpan: !1 === a,
                            spanStreamingEnabled: r
                        }))
                    }), r ? (t.has("lcp") || function(e) {
                        let t, n = 0;
                        if (!mm("largest-contentful-paint")) return;
                        let r = dH(({
                            metric: e
                        }) => {
                            let r = e.entries[e.entries.length - 1];
                            r && mC(e.value) && (n = e.value, t = r)
                        }, !0);
                        mg(e, (e, i, o) => {
                            (function(e, t, n, r) {
                                if (!mC(e)) return;
                                uA && ea.log(`Sending LCP span (${e})`);
                                let i = e3() || 0,
                                    o = mh(i),
                                    s = mh(i + (t ? .startTime || 0)),
                                    a = t ? cm(t.element) : "Largest contentful paint",
                                    l = {};
                                t ? .element && (l["browser.web_vital.lcp.element"] = cm(t.element)), t ? .id && (l["browser.web_vital.lcp.id"] = t.id), t ? .url && (l["browser.web_vital.lcp.url"] = t.url), t ? .loadTime != null && (l["browser.web_vital.lcp.load_time"] = t.loadTime), t ? .renderTime != null && (l["browser.web_vital.lcp.render_time"] = t.renderTime), t ? .size != null && (l["browser.web_vital.lcp.size"] = t.size), mB({
                                    name: a,
                                    op: "ui.webvital.lcp",
                                    origin: "auto.http.browser.lcp",
                                    metricName: "lcp",
                                    value: e,
                                    attributes: l,
                                    parentSpan: n,
                                    reportEvent: r,
                                    startTime: o,
                                    endTime: s
                                })
                            })(n, t, o, e), r()
                        })
                    }(n), t.has("cls") || function(e) {
                        let t, n = 0;
                        if (!mm("layout-shift")) return;
                        let r = dq(({
                            metric: e
                        }) => {
                            let r = e.entries[e.entries.length - 1];
                            r && (n = e.value, t = r)
                        }, !0);
                        mg(e, (e, i, o) => {
                            var s, a;
                            let l, u, c;
                            s = n, a = t, uA && ea.log(`Sending CLS span (${s})`), l = a ? mh((e3() || 0) + a.startTime) : e1(), u = a ? cm(a.sources[0] ? .node) : "Layout shift", c = {}, a ? .sources && a.sources.forEach((e, t) => {
                                c[`browser.web_vital.cls.source.${t+1}`] = cm(e.node)
                            }), mB({
                                name: u,
                                op: "ui.webvital.cls",
                                origin: "auto.http.browser.cls",
                                metricName: "cls",
                                value: s,
                                attributes: c,
                                parentSpan: o,
                                reportEvent: e,
                                startTime: l
                            }), r()
                        })
                    }(n), !t.has("inp") && mf() && e3() && dz(({
                        metric: e
                    }) => {
                        var t, n;
                        let r, i, o, s, a, l, u, c;
                        if (null == e.value || mh(e.value) > 60) return;
                        let d = e.entries.find(t => t.duration === e.value && mj[t.name]);
                        d && (t = e.value, uA && ea.log(`Sending INP span (${t})`), r = mh(e3() + d.startTime), i = mh(t), o = mj[d.name], s = null != (n = d.interactionId) ? mL.get(n) : void 0, l = (a = ih()) ? id(a) : void 0, c = (u = s ? .span || l) ? r8(u).name : tf().getScopeData().transactionName, mB({
                            name: s ? .elementName || cm(d.target),
                            op: `ui.interaction.${o}`,
                            origin: "auto.http.browser.inp",
                            metricName: "inp",
                            value: t,
                            attributes: {
                                [rx]: d.duration,
                                [cR]: c,
                                [cM]: c
                            },
                            startTime: r,
                            endTime: r + i,
                            parentSpan: u
                        }))
                    })) : t.has("inp") || mf() && e3() && dz(mF)
                },
                afterAllSetup() {
                    t.has("inp") || function() {
                        let e = Object.keys(mj);

                        function t(e) {
                            let t = e.target;
                            if (!t) return;
                            let n = cm(t),
                                r = Math.round(e.timeStamp);
                            if (m$.set(r, n), m$.size > 50) {
                                let e = m$.keys().next().value;
                                void 0 !== e && m$.delete(e)
                            }
                        }
                        tI() && e.forEach(e => {
                            Y.addEventListener(e, t, {
                                capture: !0,
                                passive: !0
                            })
                        });
                        let n = ({
                            entries: e
                        }) => {
                            let t = ih(),
                                n = t && id(t);
                            e.forEach(e => {
                                if (!("duration" in e)) return;
                                let t = e.interactionId;
                                if (null == t || mL.has(t)) return;
                                let r = e.target ? cm(e.target) : function(e) {
                                    let t = Math.round(e.startTime),
                                        n = m$.get(t);
                                    if (!n)
                                        for (let e = -5; e <= 5; e++) {
                                            let r = m$.get(t + e);
                                            if (r) {
                                                n = r;
                                                break
                                            }
                                        }
                                    return n || "<unknown>"
                                }(e);
                                if (mD.length > 10) {
                                    let e = mD.shift();
                                    mL.delete(e)
                                }
                                mD.push(t), mL.set(t, {
                                    span: n,
                                    elementName: r
                                })
                            })
                        };
                        dJ("event", n), dJ("first-input", n)
                    }()
                }
            }
        },
        mq = "sentry_previous_trace";

    function mH(e) {
        return 1 === e.traceFlags
    }
    let mz = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;

    function mJ() {
        let e = iX.navigator;
        return !!e ? .userAgent && mz.test(e.userAgent)
    }
    let mV = { ...mE,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableLongAnimationFrame: !0,
            enableInp: !0,
            ignoreResourceSpans: [],
            ignorePerformanceApiSpans: [],
            detectRedirects: !0,
            linkPreviousTrace: "in-memory",
            consistentTraceSampling: !1,
            enableReportPageLoaded: !1,
            _experiments: {},
            ...mS
        },
        mG = (e = {}) => {
            let t, n;
            "enableElementTiming" in e && er(() => {});
            let r = {
                    name: void 0,
                    source: void 0
                },
                i = iX.document,
                {
                    enableInp: o,
                    enableLongTask: s,
                    enableLongAnimationFrame: a,
                    _experiments: {
                        enableInteractions: l,
                        enableStandaloneClsSpans: u,
                        enableStandaloneLcpSpans: c
                    },
                    beforeStartSpan: d,
                    idleTimeout: p,
                    finalTimeout: f,
                    childSpanTimeout: h,
                    markBackgroundSpan: m,
                    traceFetch: g,
                    traceXHR: _,
                    trackFetchStreamPerformance: y,
                    shouldCreateSpanForRequest: v,
                    enableHTTPTimings: b,
                    ignoreResourceSpans: S,
                    ignorePerformanceApiSpans: w,
                    instrumentPageLoad: k,
                    instrumentNavigation: E,
                    detectRedirects: x,
                    linkPreviousTrace: C,
                    consistentTraceSampling: I,
                    enableReportPageLoaded: T,
                    onRequestSpanStart: M,
                    onRequestSpanEnd: R
                } = { ...mV,
                    ...e
                },
                A = mJ();

            function O(e, t, o = !0, s) {
                let a = "pageload" === t.op,
                    l = t.name,
                    u = d ? d(t) : t,
                    c = ce(s || tS()),
                    m = { ...c ? .pathname && {
                            "url.path": c.pathname
                        },
                        ...c && !u9(c) && {
                            [cA]: c.href
                        },
                        ...u.attributes
                    };
                if (l !== u.name && (m[rm] = "custom"), u.attributes = m, !o) {
                    let e = e0();
                    o$({ ...u,
                        startTime: e
                    }).end(e);
                    return
                }
                r.name = u.name, r.source = m[rm];
                let g = mx(u, {
                    idleTimeout: p,
                    finalTimeout: f,
                    childSpanTimeout: h,
                    disableAutoFinish: a,
                    beforeSpanEnd: t => {
                        ! function(e, t) {
                            let n = mf(),
                                r = e3();
                            if (!n ? .getEntries || !r) return;
                            let {
                                spanStreamingEnabled: i,
                                ignorePerformanceApiSpans: o,
                                ignoreResourceSpans: s
                            } = t, a = mh(r), l = n.getEntries(), {
                                op: u,
                                start_timestamp: c
                            } = r6(e);
                            l.slice(mI).forEach(t => {
                                    let n = mh(t.startTime),
                                        r = mh(Math.max(0, t.duration));
                                    if ("navigation" !== u || !c || !(a + n < c)) switch (t.entryType) {
                                        case "navigation":
                                            let i, l, d;
                                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(n => {
                                                mR(e, t, n, a)
                                            }), mR(e, t, "secureConnection", a, "TLS/SSL"), mR(e, t, "fetch", a, "cache"), mR(e, t, "domainLookup", a, "DNS"), i = a + mh(t.requestStart), l = a + mh(t.responseEnd), d = a + mh(t.responseStart), t.responseEnd && (md(e, i, l, {
                                                op: "browser.request",
                                                name: t.name,
                                                attributes: {
                                                    [rv]: "auto.ui.browser.metrics"
                                                }
                                            }), md(e, d, l, {
                                                op: "browser.response",
                                                name: t.name,
                                                attributes: {
                                                    [rv]: "auto.ui.browser.metrics"
                                                }
                                            }));
                                            break;
                                        case "mark":
                                        case "paint":
                                        case "measure":
                                            ! function(e, t, n, r, i, o) {
                                                if (function(e) {
                                                        if (e ? .entryType === "measure") try {
                                                            return "Components ⚛" === e.detail.devtools.track
                                                        } catch {
                                                            return
                                                        }
                                                    }(t) || ["mark", "measure"].includes(t.entryType) && eV(t.name, o)) return;
                                                let s = dm(!1),
                                                    a = i + Math.max(n, mh(s ? s.requestStart : 0)),
                                                    l = i + n,
                                                    u = l + r,
                                                    c = {
                                                        [rv]: "auto.resource.browser.metrics"
                                                    };
                                                a !== l && (c["sentry.browser.measure_happened_before_request"] = !0, c["sentry.browser.measure_start_time"] = a),
                                                    function(e, t) {
                                                        try {
                                                            let n = t.detail;
                                                            if (!n) return;
                                                            if ("object" == typeof n) {
                                                                for (let [t, r] of Object.entries(n))
                                                                    if (r && em(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                                                                    else if (void 0 !== r) try {
                                                                    e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
                                                                } catch {}
                                                                return
                                                            }
                                                            if (em(n)) {
                                                                e["sentry.browser.measure.detail"] = n;
                                                                return
                                                            }
                                                            try {
                                                                e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                                            } catch {}
                                                        } catch {}
                                                    }(c, t), a <= u && md(e, a, u, {
                                                        name: t.name,
                                                        op: t.entryType,
                                                        attributes: c
                                                    })
                                            }(e, t, n, r, a, o);
                                            break;
                                        case "resource":
                                            ! function(e, t, n, r, i, o, s) {
                                                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                                let a = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                                                if (s ? .includes(a)) return;
                                                let l = {
                                                        [rv]: "auto.resource.browser.metrics"
                                                    },
                                                    u = cn(n);
                                                u.protocol && (l["url.scheme"] = u.protocol.split(":").pop()), u.host && (l["server.address"] = u.host), l["url.same_origin"] = n.includes(Y.location.origin), l[cA] = n, [
                                                    ["responseStatus", "http.response.status_code"],
                                                    ["transferSize", "http.response_transfer_size"],
                                                    ["encodedBodySize", "http.response_content_length"],
                                                    ["decodedBodySize", "http.decoded_response_content_length"],
                                                    ["renderBlockingStatus", "resource.render_blocking_status"],
                                                    ["deliveryType", "http.response_delivery_type"]
                                                ].forEach(([e, n]) => {
                                                    let r = t[e];
                                                    null != r && ("number" == typeof r && r < 0x7fffffff || "string" == typeof r) && (l[n] = r)
                                                });
                                                let c = { ...l,
                                                        ...my(t)
                                                    },
                                                    d = o + r;
                                                md(e, d, d + i, {
                                                    name: n.replace(Y.location.origin, ""),
                                                    op: a,
                                                    attributes: c
                                                })
                                            }(e, t, t.name, n, r, a, s)
                                    }
                                }), mI = Math.max(l.length - 1, 0),
                                function(e, t) {
                                    let n = Y.navigator;
                                    if (!n) return;
                                    let r = n.connection;
                                    r && (r.effectiveType && e.setAttribute(t ? "network.connection.effective_type" : "effectiveConnectionType", r.effectiveType), r.type && e.setAttribute(t ? "network.connection.type" : "connectionType", r.type), mc(r.rtt) && (t ? e.setAttribute("network.connection.rtt", r.rtt) : "pageload" === r6(e).op && oT("connection.rtt", r.rtt, "millisecond"))), mc(n.deviceMemory) && (t ? e.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), mc(n.hardwareConcurrency) && (t ? e.setAttribute("device.processor_count", n.hardwareConcurrency) : e.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)))
                                }(e, i)
                        }(t, {
                            ignoreResourceSpans: S,
                            ignorePerformanceApiSpans: w,
                            spanStreamingEnabled: om(e)
                        }), ek(e, mZ, void 0);
                        let r = tf(),
                            i = r.getPropagationContext();
                        r.setPropagationContext({ ...i,
                            traceId: g.spanContext().traceId,
                            sampled: ir(g),
                            dsc: ik(t)
                        }), a && (n = void 0)
                    },
                    trimIdleSpanEndTimestamp: !T
                });

                function _() {
                    i && ["interactive", "complete"].includes(i.readyState) && (e.emit("idleSpanEnableAutoFinish", g), i.removeEventListener("readystatechange", _))
                }
                a && T && (n = g), ek(e, mZ, g), a && !T && i && (i.addEventListener("readystatechange", _), _())
            }
            return {
                name: "BrowserTracing",
                setup(e) {
                    if (A) {
                        uL && ea.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                        return
                    }
                    if (ou(), a && Y.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? .includes("long-animation-frame") ? new PerformanceObserver(e => {
                            let t = ih();
                            if (t)
                                for (let n of e.getEntries()) {
                                    if (!n.scripts[0]) continue;
                                    let e = mh(e3() + n.startTime),
                                        {
                                            start_timestamp: r,
                                            op: i
                                        } = r6(t);
                                    if ("navigation" === i && r && e < r) continue;
                                    let o = mh(n.duration),
                                        s = {
                                            [rv]: "auto.ui.browser.metrics"
                                        },
                                        {
                                            invoker: a,
                                            invokerType: l,
                                            sourceURL: u,
                                            sourceFunctionName: c,
                                            sourceCharPosition: d
                                        } = n.scripts[0];
                                    s["browser.script.invoker"] = a, s["browser.script.invoker_type"] = l, u && (s["code.filepath"] = u), c && (s["code.function"] = c), -1 !== d && (s["browser.script.source_char_position"] = d), md(t, e, e + o, {
                                        name: "Main UI thread blocked",
                                        op: "ui.long-animation-frame",
                                        attributes: s
                                    })
                                }
                        }).observe({
                            type: "long-animation-frame",
                            buffered: !0
                        }) : s && dJ("longtask", ({
                            entries: e
                        }) => {
                            let t = ih();
                            if (!t) return;
                            let {
                                op: n,
                                start_timestamp: r
                            } = r6(t);
                            for (let i of e) {
                                let e = mh(e3() + i.startTime),
                                    o = mh(i.duration);
                                "navigation" === n && r && e < r || md(t, e, e + o, {
                                    name: "Main UI thread blocked",
                                    op: "ui.long-task",
                                    attributes: {
                                        [rv]: "auto.ui.browser.metrics"
                                    }
                                })
                            }
                        }), l && dJ("event", ({
                            entries: e
                        }) => {
                            let t = ih();
                            if (t) {
                                for (let n of e)
                                    if ("click" === n.name) {
                                        let e = mh(e3() + n.startTime),
                                            r = mh(n.duration),
                                            i = {
                                                name: cm(n.target),
                                                op: `ui.interaction.${n.name}`,
                                                startTime: e,
                                                attributes: {
                                                    [rv]: "auto.ui.browser.metrics"
                                                }
                                            },
                                            o = tw(n.target);
                                        o && (i.attributes["ui.component_name"] = o), md(t, e, e + r, i)
                                    }
                            }
                        }), x && i) {
                        let e = () => {
                            t = e1()
                        };
                        addEventListener("click", e, {
                            capture: !0
                        }), addEventListener("keydown", e, {
                            capture: !0,
                            passive: !0
                        })
                    }

                    function r() {
                        let t = e[mZ];
                        t && !r6(t).timestamp && (uL && ea.log(`[Tracing] Finishing current active span with op: ${r6(t).op}`), t.setAttribute(rb, "cancelled"), t.end())
                    }
                    e.on("startNavigationSpan", (n, i) => {
                        if (ty() !== e) return;
                        if (i ? .isRedirect) {
                            uL && ea.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), O(e, {
                                op: "navigation.redirect",
                                ...n
                            }, !1, i.url);
                            return
                        }
                        t = void 0, r();
                        let o = tf();
                        o.setPropagationContext({
                            traceId: eG(),
                            sampleRand: Math.random(),
                            propagationSpanId: r$() ? void 0 : e6()
                        }), o.setSDKProcessingMetadata({
                            normalizedRequest: void 0
                        }), O(e, {
                            op: "navigation",
                            ...n,
                            parentSpan: null,
                            forceTransaction: !0
                        }, !0, i ? .url)
                    }), e.on("startPageLoadSpan", (t, n = {}) => {
                        if (ty() !== e) return;
                        r();
                        let i = rK(n.sentryTrace || mQ("sentry-trace") || mX("sentry-trace"), n.baggage || mQ("baggage") || mX("baggage")),
                            o = tf();
                        o.setPropagationContext(i), r$() || (o.getPropagationContext().propagationSpanId = e6()), o.setSDKProcessingMetadata({
                            normalizedRequest: i1()
                        }), O(e, {
                            op: "pageload",
                            ...t
                        })
                    }), e.on("endPageloadSpan", () => {
                        T && n && (n.setAttribute(rb, "reportPageLoaded"), n.end())
                    })
                },
                afterAllSetup(e) {
                    let n;
                    if (A) return;
                    e.addIntegration && !e.getIntegrationByName ? .(mU) && e.addIntegration(mW({
                        ignore: o ? [] : ["inp"],
                        _experiments: {
                            enableStandaloneClsSpans: u,
                            enableStandaloneLcpSpans: c
                        }
                    }));
                    let i = tS();
                    if ("off" !== C && function(e, {
                            linkPreviousTrace: t,
                            consistentTraceSampling: n
                        }) {
                            let r = "session-storage" === t,
                                i = r ? function() {
                                    try {
                                        let e = iX.sessionStorage ? .getItem(mq);
                                        return JSON.parse(e)
                                    } catch {
                                        return
                                    }
                                }() : void 0;
                            e.on("spanStart", e => {
                                if (id(e) !== e) return;
                                let t = tf().getPropagationContext();
                                i = function(e, t, n) {
                                    let r = r6(t),
                                        i = {
                                            spanContext: t.spanContext(),
                                            startTimestamp: r.start_timestamp,
                                            sampleRate: function() {
                                                try {
                                                    let e = Number(r.data ? .[rg] ? ? n.dsc ? .sample_rate);
                                                    return Number.isNaN(e) ? 0 : e
                                                } catch {
                                                    return 0
                                                }
                                            }(),
                                            sampleRand: n.sampleRand
                                        };
                                    if (!e) return i;
                                    let o = e.spanContext;
                                    return o.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (uL && ea.log(`Adding previous_trace \`${JSON.stringify(o)}\` link to span \`${JSON.stringify({op:r.op,...t.spanContext()})}\``), t.addLink({
                                        context: o,
                                        attributes: {
                                            "sentry.link.type": "previous_trace"
                                        }
                                    }), t.setAttribute("sentry.previous_trace", `${o.traceId}-${o.spanId}-${+!!mH(o)}`)), i)
                                }(i, e, t), r && function(e) {
                                    try {
                                        iX.sessionStorage.setItem(mq, JSON.stringify(e))
                                    } catch (e) {
                                        uL && ea.warn("Could not store previous trace in sessionStorage", e)
                                    }
                                }(i)
                            });
                            let o = !0;
                            n && e.on("beforeSampling", e => {
                                if (!i) return;
                                let t = tf(),
                                    n = t.getPropagationContext();
                                if (o && n.parentSpanId) {
                                    o = !1;
                                    return
                                }
                                t.setPropagationContext({ ...n,
                                    dsc: { ...n.dsc,
                                        sample_rate: String(i.sampleRate),
                                        sampled: String(mH(i.spanContext))
                                    },
                                    sampleRand: i.sampleRand
                                }), e.parentSampled = mH(i.spanContext), e.parentSampleRate = i.sampleRate, e.spanAttributes = { ...e.spanAttributes,
                                    [r_]: i.sampleRate
                                }
                            })
                        }(e, {
                            linkPreviousTrace: C,
                            consistentTraceSampling: I
                        }), iX.location) {
                        if (k) {
                            let t = e3();
                            mY(e, {
                                name: iX.location.pathname,
                                startTime: t ? t / 1e3 : void 0,
                                attributes: {
                                    [rm]: "url",
                                    [rv]: "auto.pageload.browser"
                                }
                            })
                        }
                        E && cd(({
                            to: n,
                            from: r
                        }) => {
                            var o;
                            let s, a;
                            if (void 0 === r && i ? .indexOf(n) !== -1) {
                                i = void 0;
                                return
                            }
                            i = void 0;
                            let l = ce(n),
                                u = e[mZ],
                                c = u && x && (o = t, s = r6(u), !((a = e0()) - s.start_timestamp > 1.5) && (!o || !(a - o <= 1.5)));
                            mK(e, {
                                name: l ? .pathname || iX.location.pathname,
                                attributes: {
                                    [rm]: "url",
                                    [rv]: "auto.navigation.browser"
                                }
                            }, {
                                url: n,
                                isRedirect: c
                            })
                        })
                    }
                    m && (iX.document ? iX.document.addEventListener("visibilitychange", () => {
                        let e = ih();
                        if (!e) return;
                        let t = id(e);
                        if (iX.document.hidden && t) {
                            let e = "cancelled",
                                {
                                    op: n,
                                    status: r
                                } = r6(t);
                            uL && ea.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                                code: 2,
                                message: e
                            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                        }
                    }) : uL && ea.warn("[Tracing] Could not set up background tab detection due to lack of global document")), l && iX.document && addEventListener("click", () => {
                        let t = "ui.action.click",
                            i = e[mZ];
                        if (i && ["navigation", "pageload"].includes(r6(i).op)) {
                            uL && ea.warn(`[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`);
                            return
                        }
                        if (n && (n.setAttribute(rb, "interactionInterrupted"), n.end(), n = void 0), !r.name) {
                            uL && ea.warn(`[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`);
                            return
                        }
                        n = mx({
                            name: r.name,
                            op: t,
                            attributes: {
                                [rm]: r.source || "url"
                            }
                        }, {
                            idleTimeout: p,
                            finalTimeout: f,
                            childSpanTimeout: h
                        })
                    }, {
                        capture: !0
                    }), mw(e, {
                        traceFetch: g,
                        traceXHR: _,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: v,
                        enableHTTPTimings: b,
                        onRequestSpanStart: M,
                        onRequestSpanEnd: R
                    }), y && e.addIntegration(mN())
                }
            }
        };

    function mY(e, t, n) {
        e.emit("startPageLoadSpan", t, n), tf().setTransactionName(t.name);
        let r = e[mZ];
        return r && e.emit("afterStartPageLoadSpan", r), r
    }

    function mK(e, t, n) {
        let {
            url: r,
            isRedirect: i
        } = n || {};
        e.emit("beforeStartNavigationSpan", t, {
            isRedirect: i,
            url: r
        }), e.emit("startNavigationSpan", t, {
            isRedirect: i,
            url: r
        });
        let o = tf();
        return o.setTransactionName(t.name), r && !i && o.setSDKProcessingMetadata({
            normalizedRequest: { ...i1(),
                url: r
            }
        }), e[mZ]
    }

    function mQ(e) {
        let t = iX.document,
            n = t ? .querySelector(`meta[name=${e}]`);
        return n ? .getAttribute("content") || void 0
    }

    function mX(e) {
        let t = iX.performance ? .getEntriesByType ? .("navigation")[0],
            n = t ? .serverTiming ? .find(t => t.name === e);
        return n ? .description
    }
    let mZ = "_sentry_idleSpan",
        m0 = () => ({
            name: "ElementTiming",
            setup() {
                mf() && e3() && dJ("element", ({
                    entries: e
                }) => {
                    for (let t of e) {
                        if (!t.identifier) continue;
                        let e = t.identifier,
                            n = t.name,
                            r = t.renderTime,
                            i = t.loadTime,
                            o = {
                                "sentry.origin": "auto.ui.browser.element_timing",
                                "ui.element.identifier": e
                            };
                        n && (o["ui.element.paint_type"] = n), t.id && (o["ui.element.id"] = t.id), t.element && (o["ui.element.type"] = t.element.tagName.toLowerCase()), t.url && (o["ui.element.url"] = t.url), t.naturalWidth && (o["ui.element.width"] = t.naturalWidth), t.naturalHeight && (o["ui.element.height"] = t.naturalHeight), r > 0 && ax("ui.element.render_time", r, {
                            unit: "millisecond",
                            attributes: o
                        }), i > 0 && ax("ui.element.load_time", i, {
                            unit: "millisecond",
                            attributes: o
                        })
                    }
                })
            }
        });

    function m1(e) {
        try {
            return new URL(e, Y.location.origin).toString()
        } catch {
            return e
        }
    }

    function m2(e = ty()) {
        e ? .emit("endPageloadSpan")
    }

    function m3(e) {
        let t = ih();
        if (t === e) return;
        let n = tf();
        e.end = new Proxy(e.end, {
            apply: (e, r, i) => (te(n, t), Reflect.apply(e, r, i))
        }), te(n, e)
    }
    class m5 {
        constructor(e, t) {
            this._traceBuckets = new Map, this._client = e;
            let {
                maxSpanLimit: n,
                flushInterval: r,
                maxTraceWeightInBytes: i
            } = t ? ? {};
            this._maxSpanLimit = n && n > 0 && n <= 1e3 ? n : 1e3, this._flushInterval = r && r > 0 ? r : 5e3, this._maxTraceWeight = i && i > 0 ? i : 5e6, this._client.on("flush", () => {
                this.drain()
            }), this._client.on("close", () => {
                this._traceBuckets.forEach(e => {
                    clearTimeout(e.timeout)
                }), this._traceBuckets.clear()
            })
        }
        add(e) {
            let t = e.trace_id,
                n = this._traceBuckets.get(t);
            n || (n = {
                spans: new Set,
                size: 0,
                timeout: o5(setTimeout(() => {
                    this.flush(t)
                }, this._flushInterval))
            }, this._traceBuckets.set(t, n)), n.spans.add(e), n.size += function(e) {
                let t;
                if (t = 156 + 2 * e.name.length + rF(e.attributes), e.links && e.links.length > 0) {
                    let n = e.links[0],
                        r = n ? .attributes;
                    t += (100 + (r ? rF(r) : 0)) * e.links.length
                }
                return t
            }(e), (n.spans.size >= this._maxSpanLimit || n.size >= this._maxTraceWeight) && this.flush(t)
        }
        drain() {
            this._traceBuckets.size && (ee && ea.log(`Flushing span tree map with ${this._traceBuckets.size} traces`), this._traceBuckets.forEach((e, t) => {
                this.flush(t)
            }))
        }
        flush(e) {
            var t;
            let n, r, i, o, s, a, l = this._traceBuckets.get(e);
            if (!l) return;
            if (!l.spans.size) return void this._removeTrace(e);
            let u = Array.from(l.spans),
                c = u[0] ? ._segmentSpan;
            if (!c) {
                ee && ea.warn("No segment span reference found on span JSON, cannot compute DSC"), this._removeTrace(e);
                return
            }
            let d = ik(c),
                p = u.map(e => {
                    let {
                        _segmentSpan: t,
                        ...n
                    } = e;
                    return n
                }),
                f = (n = (t = this._client).getOptions(), r = t.getDsn(), i = n.tunnel, o = oC(n._metadata), s = {
                    sent_at: new Date(eR()).toISOString(),
                    ...!!d.trace_id && !!d.public_key && {
                        trace: d
                    },
                    ...o && {
                        sdk: o
                    },
                    ...!!i && r && {
                        dsn: rO(r)
                    }
                }, a = t.getDataCollectionOptions().userInfo ? "auto" : "never", oy(s, [
                    [{
                        type: "span",
                        item_count: p.length,
                        content_type: "application/vnd.sentry.items.span.v2+json"
                    }, {
                        version: 2,
                        ...tI() && {
                            ingest_settings: {
                                infer_ip: a,
                                infer_user_agent: a
                            }
                        },
                        items: p
                    }]
                ]));
            ee && ea.log(`Sending span envelope for trace ${e} with ${p.length} spans`), this._client.sendEnvelope(f).then(null, e => {
                ee && ea.error("Error while sending streamed span envelope:", e)
            }), this._removeTrace(e)
        }
        _removeTrace(e) {
            let t = this._traceBuckets.get(e);
            t && clearTimeout(t.timeout), this._traceBuckets.delete(e)
        }
    }
    let m4 = () => ({
        name: "SpanStreaming",
        beforeSetup(e) {
            let t = e.getOptions();
            t.traceLifecycle || (uL && ea.log('[SpanStreaming] setting `traceLifecycle` to "stream"'), t.traceLifecycle = "stream")
        },
        setup(e) {
            let t = "SpanStreaming integration requires",
                n = "Falling back to static trace lifecycle.",
                r = e.getOptions();
            if (!om(e)) {
                r.traceLifecycle = "static", uL && ea.warn(`${t} \`traceLifecycle\` to be set to "stream"! ${n}`);
                return
            }
            let i = r.beforeSendSpan;
            if (i && !o_(i)) {
                r.traceLifecycle = "static", uL && ea.warn(`${t} a beforeSendSpan callback using \`withStreamedSpan\`! ${n}`);
                return
            }
            let o = new m5(e);
            e.on("afterSpanEnd", t => {
                ir(t) && o.add(function(e, t) {
                    let n, r = r8(e),
                        i = ip(e),
                        o = r8(i),
                        {
                            isolationScope: s,
                            scope: a
                        } = rV(e),
                        l = iI(s, a);
                    ! function(e, t, n, r) {
                        let i = n.getSdkMetadata(),
                            {
                                release: o,
                                environment: s
                            } = n.getOptions();
                        cO(e, {
                            "sentry.trace_lifecycle": "stream",
                            [cM]: t.name,
                            "sentry.segment.id": t.span_id,
                            "sentry.sdk.name": i ? .sdk ? .name,
                            "sentry.sdk.version": i ? .sdk ? .version,
                            "sentry.release": o,
                            "sentry.environment": s || rc,
                            "user.id": r.user ? .id,
                            "user.email": r.user ? .email,
                            "user.ip_address": r.user ? .ip_address,
                            "user.name": r.user ? .username,
                            ...r.attributes
                        })
                    }(r, o, t, l);
                    let u = e.kind;
                    t.emit("preprocessSpan", r, {
                        spanKind: u
                    }), r.is_segment && (cO(r, function(e) {
                        let t = {},
                            {
                                response: n,
                                profile: r,
                                cloud_resource: i,
                                culture: o,
                                state: s
                            } = e;
                        if (n && (null != n.status_code && (t["http.response.status_code"] = n.status_code), null != n.body_size && (t["http.response.body.size"] = n.body_size)), r && (r.profile_id && (t["sentry.profile_id"] = r.profile_id), r.profiler_id && (t["sentry.profiler_id"] = r.profiler_id)), i)
                            for (let [e, n] of Object.entries(i)) null != n && (t[e] = n);
                        o && (o.locale && (t["culture.locale"] = o.locale), o.timezone && (t["culture.timezone"] = o.timezone)), s ? .state && "string" == typeof s.state.type && (t["state.type"] = s.state.type);
                        let a = e.angular;
                        if (a) {
                            let e = a.version;
                            ("string" == typeof e || "number" == typeof e) && (t["angular.version"] = e)
                        }
                        let l = e.react;
                        if (l) {
                            let e = l.version;
                            ("string" == typeof e || "number" == typeof e) && (t["react.version"] = e)
                        }
                        return t
                    }(l.contexts)), (n = t.getIntegrationNames()).length && cO(r, {
                        "sentry.sdk.integrations": n
                    }), t.emit("processSegmentSpan", r)), t.emit("processSpan", r);
                    let {
                        beforeSendSpan: c
                    } = t.getOptions(), d = c && o_(c) ? c(r) || (im(), r) : r, p = d.attributes ? .[rm];
                    return r.is_segment && p && cO(d, {
                        "sentry.segment.name.source": p
                    }), { ...r9(d),
                        _segmentSpan: i
                    }
                }(t, e))
            }), e.on("afterSegmentSpanEnd", e => {
                let t = e.spanContext().traceId;
                setTimeout(() => {
                    o.flush(t)
                }, 500)
            })
        }
    });

    function m6(e) {
        return new Promise((t, n) => {
            e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
        })
    }

    function m8(e) {
        return m6(e.getAllKeys())
    }

    function m7(e) {
        let t;

        function n() {
            var n, r;
            let i, o;
            return void 0 == t && (n = e.dbName || "sentry-offline", r = e.storeName || "queue", (i = indexedDB.open(n)).onupgradeneeded = () => i.result.createObjectStore(r), o = m6(i), t = e => o.then(t => e(t.transaction(r, "readwrite").objectStore(r)))), t
        }
        return {
            push: async t => {
                try {
                    var r, i;
                    let o = ok(t);
                    await (r = n(), i = e.maxQueueSize || 30, r(e => m8(e).then(t => {
                        if (!(t.length >= i)) return e.put(o, Math.max(...t, 0) + 1), m6(e.transaction)
                    })))
                } catch {}
            },
            unshift: async t => {
                try {
                    var r, i;
                    let o = ok(t);
                    await (r = n(), i = e.maxQueueSize || 30, r(e => m8(e).then(t => {
                        if (!(t.length >= i)) return e.put(o, Math.min(...t, 0) - 1), m6(e.transaction)
                    })))
                } catch {}
            },
            shift: async () => {
                try {
                    let e = await n()(e => m8(e).then(t => {
                        let n = t[0];
                        if (null != n) return m6(e.get(n)).then(t => (e.delete(n), m6(e.transaction).then(() => t)))
                    }));
                    if (e) return function(e) {
                        let t = "string" == typeof e ? ow(e) : e;

                        function n(e) {
                            let n = t.subarray(0, e);
                            return t = t.subarray(e + 1), n
                        }

                        function r() {
                            var e;
                            let r, i = t.indexOf(10);
                            return i < 0 && (i = t.length), JSON.parse((e = n(i), (r = X(Y)).decodePolyfill ? r.decodePolyfill(e) : new TextDecoder().decode(e)))
                        }
                        let i = r(),
                            o = [];
                        for (; t.length;) {
                            let e = r(),
                                t = "number" == typeof e.length ? e.length : void 0;
                            o.push([e, t ? n(t) : r()])
                        }
                        return [i, o]
                    }(e)
                } catch {}
            }
        }
    }

    function m9(e = uD) {
        var t;
        return t = function(e) {
            function t(...e) {
                ee && ea.log("[Offline]:", ...e)
            }
            return n => {
                let r, i = e(n);
                if (!n.createStore) throw Error("No `createStore` function was provided");
                let o = n.createStore(n),
                    s = 5e3;

                function a(e) {
                    r && clearTimeout(r), r = o5(setTimeout(async () => {
                        r = void 0;
                        let e = await o.shift();
                        e && (t("Attempting to send previously queued event"), e[0].sent_at = new Date(eR()).toISOString(), u(e, !0).catch(e => {
                            t("Failed to retry sending", e)
                        }))
                    }, e))
                }

                function l() {
                    r || (a(s), s = Math.min(2 * s, 36e5))
                }
                async function u(e, r = !1) {
                    if (!r && oS(e, ["replay_event", "replay_recording"])) return await o.push(e), a(100), {};
                    try {
                        if (n.shouldSend && await n.shouldSend(e) === !1) throw Error("Envelope not sent because `shouldSend` callback returned false");
                        let t = await i.send(e),
                            r = 100;
                        if (t) {
                            if (t.headers ? .["retry-after"]) r = o8(t.headers["retry-after"]);
                            else if (t.headers ? .["x-sentry-rate-limits"]) r = 6e4;
                            else if ((t.statusCode || 0) >= 400) return t
                        }
                        return a(r), s = 5e3, t
                    } catch (i) {
                        var c;
                        if (await (c = s, !oS(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, i, c)))) return r ? await o.unshift(e) : await o.push(e), l(), t("Error sending. Event queued.", i), {};
                        throw i
                    }
                }
                return n.flushAtStartup && l(), {
                    send: u,
                    flush: e => (void 0 === e && (s = 5e3, a(100)), i.flush(e))
                }
            }
        }(e), e => {
            let n = t({ ...e,
                createStore: m7
            });
            return iX.addEventListener("online", async e => {
                await n.flush()
            }), n
        }
    }
    let ge = "window" in Y && Y.window === Y && "u" < typeof importScripts,
        gt = String(0),
        gn = ge ? "main" : "worker",
        gr = iX.navigator,
        gi = "",
        go = "",
        gs = "",
        ga = gr ? .userAgent || "",
        gl = "",
        gu = gr ? .language || gr ? .languages ? .[0] || "",
        gc = gr ? .userAgentData;

    function gd(e) {
        return "pageload" === r6(e).op
    }

    function gp(e) {
        let t = ty(),
            n = t ? .getOptions(),
            r = n ? .stackParser;
        if (!r) return [];
        let i = rh(r);
        if (!i) return [];
        let o = [];
        for (let t of e) {
            let e = function(e) {
                let t = e ? .startsWith("file://") ? e.slice(7) : e;
                return t ? .match(/\/[A-Z]:/) && (t = t.slice(1)), t
            }(t);
            e && i[e] && o.push({
                type: "sourcemap",
                code_file: t,
                debug_id: i[e]
            })
        }
        return o
    }

    function gf(e) {
        return "number" != typeof e && "boolean" != typeof e || "number" == typeof e && isNaN(e) ? (uL && ea.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`), !1) : !0 === e || !1 === e || !(e < 0) && !(e > 1) || (uL && ea.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${e}.`), !1)
    }
    "object" == typeof gc && null !== gc && "getHighEntropyValues" in gc && gc.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(e => {
        if (gi = e.platform || "", gs = e.architecture || "", gl = e.model || "", go = e.platformVersion || "", e.fullVersionList ? .length) {
            let t = e.fullVersionList[e.fullVersionList.length - 1];
            ga = `${t.brand} ${t.version}`
        }
    }).catch(e => void 0);
    let gh = !1;

    function gm() {
        let e = iX.Profiler;
        if ("function" != typeof e) {
            uL && ea.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
            return
        }
        try {
            return new e({
                sampleInterval: 10,
                maxBufferSize: 3e3
            })
        } catch (e) {
            uL && (ea.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), ea.log("[Profiling] Disabling profiling for current user session.")), gh = !0
        }
    }

    function gg(e) {
        if (gh) return uL && ea.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
        if (!e.isRecording()) return uL && ea.log("[Profiling] Discarding profile because root span was not sampled."), !1;
        let t = ty(),
            n = t ? .getOptions();
        if (!n) return uL && ea.log("[Profiling] Profiling disabled, no options found."), !1;
        let r = n.profilesSampleRate;
        return gf(r) ? r ? !!(!0 === r || Math.random() < r) || (uL && ea.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1) : (uL && ea.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1) : (uL && ea.warn("[Profiling] Discarding profile because of invalid sample rate."), !1)
    }

    function g_(e) {
        return void 0 !== e.profilesSampleRate
    }
    let gy = new Map,
        gv = new WeakSet;

    function gb(e) {
        e.setAttribute("thread.id", gt), e.setAttribute("thread.name", gn)
    }

    function gS(e) {
        let t;
        gd(e) && (t = 1e3 * e1());
        let n = gm();
        if (!n) return;
        uL && ea.log(`[Profiling] started profiling span: ${r6(e).description}`);
        let r = eG(),
            i = null;
        async function o() {
            if (e && n) {
                if (i) {
                    uL && ea.log("[Profiling] profile for:", r6(e).description, "already exists, returning early");
                    return
                }
                return n.stop().then(t => {
                    if (s && (iX.clearTimeout(s), s = void 0), uL && ea.log(`[Profiling] stopped profiling of span: ${r6(e).description}`), !t) {
                        uL && ea.log(`[Profiling] profiler returned null profile for: ${r6(e).description}`, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                        return
                    }
                    if (i = t, gy.set(r, t), gy.size > 30) {
                        let e = gy.keys().next().value;
                        void 0 !== e && gy.delete(e)
                    }
                }).catch(e => {
                    uL && ea.log("[Profiling] error while stopping profiler:", e)
                })
            }
        }
        tf().setContext("profile", {
            profile_id: r,
            start_timestamp: t
        }), gv.add(e), gb(e);
        let s = iX.setTimeout(() => {
                uL && ea.log("[Profiling] max profile duration elapsed, stopping profiling for:", r6(e).description), o()
            }, 3e4),
            a = e.end.bind(e);
        e.end = function() {
            return e ? (o().then(() => {
                a()
            }, () => {
                a()
            }), e) : a()
        }
    }
    class gw {
        constructor() {
            this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1, this._lifecycleMode = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map
        }
        initialize(e) {
            let t = e.getOptions().profileLifecycle,
                n = function(e) {
                    if (gh) return uL && ea.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started."), !1;
                    if ("trace" !== e.profileLifecycle && "manual" !== e.profileLifecycle) return uL && ea.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option."), !1;
                    let t = e.profileSessionSampleRate;
                    return gf(t) ? t ? Math.random() <= t : (uL && ea.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0"), !1) : (uL && ea.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate."), !1)
                }(e.getOptions());
            uL && ea.log(`[Profiling] Initializing profiler (lifecycle='${t}').`), !n && uL && ea.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization."), this._profilerId = eG(), this._client = e, this._sessionSampled = n, this._lifecycleMode = t, "trace" === t && this._setupTraceLifecycleListeners(e), e.on("spanStart", e => {
                this._isRunning && gb(e)
            })
        }
        start() {
            if ("trace" === this._lifecycleMode) {
                uL && ea.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.start()` are ignored in trace mode.');
                return
            }
            if (this._isRunning) {
                uL && ea.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
                return
            }
            if (!this._sessionSampled) {
                uL && ea.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
                return
            }
            this._beginProfiling()
        }
        stop() {
            if ("trace" === this._lifecycleMode) {
                uL && ea.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.stop()` are ignored in trace mode.');
                return
            }
            if (!this._isRunning) {
                uL && ea.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
                return
            }
            this._endProfiling()
        }
        notifyRootSpanActive(e) {
            if ("trace" !== this._lifecycleMode || !this._sessionSampled) return;
            let t = e.spanContext().spanId;
            if (!t || this._activeRootSpanIds.has(t)) return;
            this._registerTraceRootSpan(t);
            let n = this._activeRootSpanIds.size;
            1 === n && (uL && ea.log("[Profiling] Detected already active root span during setup. Active root spans now:", n), this._beginProfiling()), this._isRunning && gb(e)
        }
        _beginProfiling() {
            if (!this._isRunning) {
                if (this._isRunning = !0, uL && ea.log("[Profiling] Started profiling with profiler ID:", this._profilerId), tm().setContext("profile", {
                        profiler_id: this._profilerId
                    }), this._startProfilerInstance(), !this._profiler) {
                    uL && ea.log("[Profiling] Failed to start JS Profiler; stopping."), this._resetProfilerInfo();
                    return
                }
                this._startPeriodicChunking()
            }
        }
        _endProfiling() {
            this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch(e => {
                uL && ea.error("[Profiling] Failed to collect current profile chunk on `stop()`:", e)
            }), "manual" === this._lifecycleMode && tm().setContext("profile", {}))
        }
        _setupTraceLifecycleListeners(e) {
            e.on("spanStart", e => {
                if (!this._sessionSampled) {
                    uL && ea.log("[Profiling] Span not profiled because of negative sampling decision for user session.");
                    return
                }
                if (e !== id(e)) return;
                if (!e.isRecording()) {
                    uL && ea.log("[Profiling] Discarding profile because root span was not sampled.");
                    return
                }
                let t = e.spanContext().spanId;
                if (!t || this._activeRootSpanIds.has(t)) return;
                this._registerTraceRootSpan(t);
                let n = this._activeRootSpanIds.size;
                1 === n && (uL && ea.log(`[Profiling] Root span ${t} started. Profiling active while there are active root spans (count=${n}).`), this._beginProfiling())
            }), e.on("spanEnd", e => {
                if (!this._sessionSampled) return;
                let t = e.spanContext().spanId;
                if (!t || !this._activeRootSpanIds.has(t)) return;
                this._activeRootSpanIds.delete(t);
                let n = this._activeRootSpanIds.size;
                uL && ea.log(`[Profiling] Root span with ID ${t} ended. Will continue profiling for as long as there are active root spans (currently: ${n}).`), 0 === n && (this._collectCurrentChunk().catch(e => {
                    uL && ea.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", e)
                }), this._endProfiling())
            })
        }
        _resetProfilerInfo() {
            this._isRunning = !1, tm().setContext("profile", {})
        }
        _clearAllRootSpanTimeouts() {
            this._rootSpanTimeouts.forEach(e => clearTimeout(e)), this._rootSpanTimeouts.clear()
        }
        _registerTraceRootSpan(e) {
            this._activeRootSpanIds.add(e);
            let t = setTimeout(() => this._onRootSpanTimeout(e), 3e5);
            this._rootSpanTimeouts.set(e, t)
        }
        _startProfilerInstance() {
            if (this._profiler ? .stopped === !1) return;
            let e = gm();
            if (!e) {
                uL && ea.log("[Profiling] Failed to start JS Profiler.");
                return
            }
            this._profiler = e
        }
        _startPeriodicChunking() {
            this._isRunning && (this._chunkTimer = setTimeout(() => {
                if (this._collectCurrentChunk().catch(e => {
                        uL && ea.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", e)
                    }), this._isRunning) {
                    if (this._startProfilerInstance(), !this._profiler) return void this._resetProfilerInfo();
                    this._startPeriodicChunking()
                }
            }, 6e4))
        }
        _onRootSpanTimeout(e) {
            !this._rootSpanTimeouts.has(e) || (this._rootSpanTimeouts.delete(e), this._activeRootSpanIds.has(e) && (uL && ea.log(`[Profiling] Reached 5-minute timeout for root span ${e}. You likely started a manual root span that never called \`.end()\`.`), this._activeRootSpanIds.delete(e), 0 === this._activeRootSpanIds.size && this._endProfiling()))
        }
        async _collectCurrentChunk() {
            let e = this._profiler;
            if (this._profiler = void 0, e) try {
                let t = await e.stop(),
                    n = function(e, t, n) {
                        if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                        let r = function(e) {
                                let t = [];
                                for (let n = 0; n < e.frames.length; n++) {
                                    let r = e.frames[n];
                                    r && (t[n] = {
                                        function: r.name,
                                        abs_path: "number" == typeof r.resourceId ? e.resources[r.resourceId] : void 0,
                                        lineno: r.line,
                                        colno: r.column
                                    })
                                }
                                let n = [];
                                for (let t = 0; t < e.stacks.length; t++) {
                                    let r = e.stacks[t];
                                    if (!r) continue;
                                    let i = [],
                                        o = r;
                                    for (; o;) i.push(o.frameId), o = void 0 === o.parentId ? void 0 : e.stacks[o.parentId];
                                    n[t] = i
                                }
                                let r = e3(),
                                    i = "number" == typeof performance.timeOrigin ? performance.timeOrigin : r || 0,
                                    o = i - (r || i),
                                    s = [];
                                for (let t = 0; t < e.samples.length; t++) {
                                    let n = e.samples[t];
                                    if (!n) continue;
                                    let r = (i + (n.timestamp - o)) / 1e3;
                                    s[t] = {
                                        stack_id: n.stackId ? ? 0,
                                        thread_id: gt,
                                        timestamp: r
                                    }
                                }
                                return {
                                    frames: t,
                                    stacks: n,
                                    samples: s,
                                    thread_metadata: {
                                        [gt]: {
                                            name: gn
                                        }
                                    }
                                }
                            }(e),
                            i = t.getOptions(),
                            o = t.getSdkMetadata ? .() ? .sdk;
                        return {
                            chunk_id: eG(),
                            client_sdk: {
                                name: o ? .name ? ? "sentry.javascript.browser",
                                version: o ? .version ? ? "0.0.0"
                            },
                            profiler_id: n || eG(),
                            platform: "javascript",
                            version: "2",
                            release: i.release ? ? "",
                            environment: i.environment ? ? "production",
                            debug_meta: {
                                images: gp(e.resources)
                            },
                            profile: r
                        }
                    }(t, this._client, this._profilerId),
                    r = function(e) {
                        try {
                            if (!e || "object" != typeof e) return {
                                reason: "chunk is not an object"
                            };
                            let t = e => "string" == typeof e && /^[a-f0-9]{32}$/.test(e);
                            if (!t(e.profiler_id)) return {
                                reason: "missing or invalid profiler_id"
                            };
                            if (!t(e.chunk_id)) return {
                                reason: "missing or invalid chunk_id"
                            };
                            if (!e.client_sdk) return {
                                reason: "missing client_sdk metadata"
                            };
                            let n = e.profile;
                            if (!n) return {
                                reason: "missing profile data"
                            };
                            if (!Array.isArray(n.frames) || !n.frames.length) return {
                                reason: "profile has no frames"
                            };
                            if (!Array.isArray(n.stacks) || !n.stacks.length) return {
                                reason: "profile has no stacks"
                            };
                            if (!Array.isArray(n.samples) || !n.samples.length) return {
                                reason: "profile has no samples"
                            };
                            return {
                                valid: !0
                            }
                        } catch (e) {
                            return {
                                reason: `unknown validation error: ${e}`
                            }
                        }
                    }(n);
                if ("reason" in r) {
                    uL && ea.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", r.reason);
                    return
                }
                this._sendProfileChunk(n), uL && ea.log("[Profiling] Collected browser profile chunk.")
            } catch (e) {
                uL && ea.log("[Profiling] Error while stopping JS Profiler for chunk:", e)
            }
        }
        _sendProfileChunk(e) {
            let t = this._client,
                n = oC(t.getSdkMetadata ? .()),
                r = t.getDsn(),
                i = t.getOptions().tunnel,
                o = oy({
                    event_id: eG(),
                    sent_at: (new Date).toISOString(),
                    ...n && {
                        sdk: n
                    },
                    ...!!i && r && {
                        dsn: rO(r)
                    }
                }, [
                    [{
                        type: "profile_chunk",
                        platform: "javascript"
                    }, e]
                ]);
            t.sendEnvelope(o).then(null, e => {
                uL && ea.error("Error while sending profile chunk envelope:", e)
            })
        }
    }
    let gk = () => ({
            name: "BrowserProfiling",
            setup(e) {
                let t = e.getOptions(),
                    n = new gw;
                if (g_(t) || t.profileLifecycle || (t.profileLifecycle = "manual"), g_(t) && !t.profilesSampleRate) {
                    uL && ea.log("[Profiling] Profiling disabled, no profiling options found.");
                    return
                }
                let r = ih(),
                    i = r && id(r);
                if (g_(t) && void 0 !== t.profileSessionSampleRate && uL && ea.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled."), g_(t)) i && gd(i) && gg(i) && gS(i), e.on("spanStart", e => {
                    let t = id(e);
                    e === t ? gg(e) && gS(e) : gv.has(t) && gb(e)
                }), e.on("beforeEnvelope", e => {
                    let t;
                    if (!gy.size) return;
                    let n = (t = [], ob(e, (e, n) => {
                        if ("transaction" === n)
                            for (let n = 1; n < e.length; n++) {
                                let r = e[n];
                                r ? .contexts ? .profile ? .profile_id && t.push(e[n])
                            }
                    }), t);
                    if (!n.length) return;
                    let r = [];
                    for (let e of n) {
                        let t = e ? .contexts,
                            n = t ? .profile ? .profile_id,
                            i = t ? .profile ? .start_timestamp;
                        if ("string" != typeof n || !n) {
                            uL && ea.log("[Profiling] cannot find profile for a span without a profile context");
                            continue
                        }
                        t ? .profile && delete t.profile;
                        let o = function(e) {
                            let t = gy.get(e);
                            return t && gy.delete(e), t
                        }(n);
                        if (!o) {
                            uL && ea.log(`[Profiling] Could not retrieve profile for span: ${n}`);
                            continue
                        }
                        let s = (o.samples.length < 2 ? (uL && ea.log("[Profiling] Discarding profile because it contains less than 2 samples"), 1) : !o.frames.length && (uL && ea.log("[Profiling] Discarding profile because it contains no frames"), 1)) ? null : function(e, t, n, r) {
                            let i;
                            if ("transaction" !== r.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                            if (null == n) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
                            let o = ("string" == typeof(i = r.contexts ? .trace ? .trace_id) && 32 !== i.length && uL && ea.log(`[Profiling] Invalid traceId: ${i} on profiled event`), "string" != typeof i) ? "" : i,
                                s = "thread_metadata" in n ? n : function(e) {
                                    let t, n = 0,
                                        r = {
                                            samples: [],
                                            stacks: [],
                                            frames: [],
                                            thread_metadata: {
                                                [gt]: {
                                                    name: gn
                                                }
                                            }
                                        },
                                        i = e.samples[0];
                                    if (!i) return r;
                                    let o = i.timestamp,
                                        s = e3(),
                                        a = "number" == typeof performance.timeOrigin ? performance.timeOrigin : s || 0,
                                        l = a - (s || a);
                                    return e.samples.forEach((i, s) => {
                                        if (void 0 === i.stackId) {
                                            void 0 === t && (t = n, r.stacks[t] = [], n++), r.samples[s] = {
                                                elapsed_since_start_ns: ((i.timestamp + l - o) * 1e6).toFixed(0),
                                                stack_id: t,
                                                thread_id: gt
                                            };
                                            return
                                        }
                                        let a = e.stacks[i.stackId],
                                            u = [];
                                        for (; a;) {
                                            u.push(a.frameId);
                                            let t = e.frames[a.frameId];
                                            t && void 0 === r.frames[a.frameId] && (r.frames[a.frameId] = {
                                                function: t.name,
                                                abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                                lineno: t.line,
                                                colno: t.column
                                            }), a = void 0 === a.parentId ? void 0 : e.stacks[a.parentId]
                                        }
                                        let c = {
                                            elapsed_since_start_ns: ((i.timestamp + l - o) * 1e6).toFixed(0),
                                            stack_id: n,
                                            thread_id: gt
                                        };
                                        r.stacks[n] = u, r.samples[s] = c, n++
                                    }), r
                                }(n),
                                a = t || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : 1e3 * e1()),
                                l = "number" == typeof r.timestamp ? 1e3 * r.timestamp : 1e3 * e1();
                            return {
                                event_id: e,
                                timestamp: new Date(a).toISOString(),
                                platform: "javascript",
                                version: "1",
                                release: r.release || "",
                                environment: r.environment || rc,
                                runtime: {
                                    name: "javascript",
                                    version: iX.navigator.userAgent
                                },
                                os: {
                                    name: gi,
                                    version: go,
                                    build_number: ga
                                },
                                device: {
                                    locale: gu,
                                    model: gl,
                                    manufacturer: ga,
                                    architecture: gs,
                                    is_emulator: !1
                                },
                                debug_meta: {
                                    images: gp(n.resources)
                                },
                                profile: s,
                                transactions: [{
                                    name: r.transaction || "",
                                    id: r.event_id || eG(),
                                    trace_id: o,
                                    active_thread_id: gt,
                                    relative_start_ns: "0",
                                    relative_end_ns: ((l - a) * 1e6).toFixed(0)
                                }]
                            }
                        }(n, i, o, e);
                        s && r.push(s)
                    }
                    if (r.length)
                        for (let t of r) e[1].push([{
                            type: "profile"
                        }, t])
                });
                else {
                    let r = t.profileLifecycle;
                    if (e.on("startUIProfiler", () => n.start()), e.on("stopUIProfiler", () => n.stop()), "manual" === r) n.initialize(e);
                    else if ("trace" === r) {
                        if (!r$(t)) {
                            uL && ea.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
                            return
                        }
                        n.initialize(e), i && n.notifyRootSpanActive(i), iX.setTimeout(() => {
                            let e = ih(),
                                t = e && id(e);
                            t && n.notifyRootSpanActive(t)
                        }, 0)
                    }
                }
            }
        }),
        gE = [{
            op: "ui.interaction.click",
            name: "#sentry-spotlight"
        }],
        gx = (e = {}) => {
            let t = e.sidecarUrl || "http://localhost:8969/stream";
            return {
                name: "SpotlightBrowser",
                setup: () => {
                    uL && ea.log("Using Sidecar URL", t)
                },
                beforeSetup(e) {
                    let t = e.getOptions();
                    t.ignoreSpans = [...t.ignoreSpans || [], ...gE]
                },
                afterAllSetup: e => {
                    let n, r;
                    n = uP("fetch"), r = 0, e.on("beforeEnvelope", e => {
                        r > 3 ? ea.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", r) : n(t, {
                            method: "POST",
                            body: ok(e),
                            headers: {
                                "Content-Type": "application/x-sentry-envelope"
                            },
                            mode: "cors"
                        }).then(e => {
                            e.status >= 200 && e.status < 400 && (r = 0)
                        }, e => {
                            r++, ea.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                        })
                    })
                }
            }
        },
        gC = () => ({
            name: "LaunchDarkly",
            processEvent: (e, t, n) => s2(e)
        });

    function gI() {
        return {
            name: "sentry-flag-auditor",
            type: "flag-used",
            synchronous: !0,
            method: (e, t, n) => {
                s3(e, t.value), s5(e, t.value)
            }
        }
    }
    let gT = () => ({
        name: "OpenFeature",
        processEvent: (e, t, n) => s2(e)
    });class gM {
        after(e, t) {
            s3(t.flagKey, t.value), s5(t.flagKey, t.value)
        }
        error(e, t, n) {
            s3(e.flagKey, e.defaultValue), s5(e.flagKey, e.defaultValue)
        }
    }
    let gR = ({
        featureFlagClientClass: e
    }) => ({
        name: "Unleash",
        setupOnce() {
            ew(e.prototype, "isEnabled", gA)
        },
        processEvent: (e, t, n) => s2(e)
    });

    function gA(e) {
        return function(...t) {
            let n = t[0],
                r = e.apply(this, t);
            return "string" == typeof n && "boolean" == typeof r ? (s3(n, r), s5(n, r)) : uL && ea.error(`[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${r} (${typeof r})`), r
        }
    }

    function gO(e) {
        return function(...t) {
            let n = t[0],
                r = e.apply(this, t);
            return "string" == typeof n && "boolean" == typeof r && (s3(n, r), s5(n, r)), r
        }
    }
    let gP = ({
            growthbookClass: e
        }) => (({
            growthbookClass: e
        }) => ({
            name: "GrowthBook",
            setupOnce() {
                let t = e.prototype;
                "function" == typeof t.isOn && ew(t, "isOn", gO), "function" == typeof t.getFeatureValue && ew(t, "getFeatureValue", gO)
            },
            processEvent: (e, t, n) => s2(e)
        }))({
            growthbookClass: e
        }),
        gN = ({
            featureFlagClient: e
        }) => ({
            name: "Statsig",
            setup(t) {
                e.on("gate_evaluation", e => {
                    s3(e.gate.name, e.gate.value), s5(e.gate.name, e.gate.value)
                })
            },
            processEvent: (e, t, n) => s2(e)
        });async function gD() {
        let e = ty();
        if (!e) return "no-client-active";
        if (!e.getDsn()) return "no-dsn-configured";
        let t = e.getOptions().tunnel || "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
        try {
            await oB(() => fetch(t, {
                body: "{}",
                method: "POST",
                mode: "cors",
                credentials: "omit"
            }))
        } catch {
            return "sentry-unreachable"
        }
    }
    let gL = ({
        worker: e
    }) => ({
        name: "WebWorker",
        setupOnce: () => {
            (Array.isArray(e) ? e : [e]).forEach(e => g$(e))
        },
        addWorker: e => g$(e)
    });

    function g$(e) {
        e.addEventListener("message", e => {
            if (function(e) {
                    if (!eg(e) || !0 !== e._sentryMessage) return !1;
                    let t = "_sentryDebugIds" in e,
                        n = "_sentryModuleMetadata" in e,
                        r = "_sentryWorkerError" in e,
                        i = "_sentryWasmImages" in e;
                    return (!!t || !!n || !!r || !!i) && (!t || !!(eg(e._sentryDebugIds) || void 0 === e._sentryDebugIds)) && (!n || !!(eg(e._sentryModuleMetadata) || void 0 === e._sentryModuleMetadata)) && (!r || !!eg(e._sentryWorkerError)) && (!i || !!Array.isArray(e._sentryWasmImages) && !!e._sentryWasmImages.every(e => eg(e) && "string" == typeof e.code_file)) && !0
                }(e.data)) {
                if (e.stopImmediatePropagation(), e.data._sentryDebugIds && (uL && ea.log("Sentry debugId web worker message received", e.data), iX._sentryDebugIds = { ...e.data._sentryDebugIds,
                        ...iX._sentryDebugIds
                    }), e.data._sentryModuleMetadata && (uL && ea.log("Sentry module metadata web worker message received", e.data), iX._sentryModuleMetadata = { ...e.data._sentryModuleMetadata,
                        ...iX._sentryModuleMetadata
                    }), e.data._sentryWasmImages) {
                    uL && ea.log("Sentry WASM images web worker message received", e.data);
                    let t = iX._sentryWasmImages || [],
                        n = e.data._sentryWasmImages.filter(e => eg(e) && "string" == typeof e.code_file && !t.some(t => t.code_file === e.code_file));
                    iX._sentryWasmImages = [...t, ...n]
                }
                e.data._sentryWorkerError && (uL && ea.log("Sentry worker rejection message received", e.data._sentryWorkerError), function(e) {
                    let t = ty();
                    if (!t) return;
                    let n = t.getOptions().stackParser,
                        r = t.getOptions().attachStacktrace,
                        i = e.reason,
                        o = em(i) ? c$(i) : uC(n, i, void 0, r, !0);
                    o.level = "error", e.filename && (o.contexts = { ...o.contexts,
                        worker: {
                            filename: e.filename
                        }
                    }), iO(o, {
                        originalException: i,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.web_worker.onunhandledrejection"
                        }
                    }), uL && ea.log("Captured worker unhandled rejection", i)
                }(e.data._sentryWorkerError))
            }
        })
    }

    function gj({
        self: e
    }) {
        e.postMessage({
            _sentryMessage: !0,
            _sentryDebugIds: e._sentryDebugIds ? ? void 0,
            _sentryModuleMetadata: e._sentryModuleMetadata ? ? void 0
        }), e.addEventListener("unhandledrejection", t => {
            let n = {
                reason: cL(t),
                filename: e.location ? .href
            };
            e.postMessage({
                _sentryMessage: !0,
                _sentryWorkerError: n
            }), uL && ea.log("[Sentry Worker] Forwarding unhandled rejection to parent", n)
        }), uL && ea.log("[Sentry Worker] Registered worker with unhandled rejection handling")
    }
}
}]);