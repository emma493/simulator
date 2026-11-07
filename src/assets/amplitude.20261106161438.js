(globalThis.webpackChunk || = []).push([
    [3158], {
        65914(e, t, n) {
            let r;
            n.r(t), n.d(t, {
                AmplitudeBrowser: () => aE,
                Identify: () => i5,
                Revenue: () => o0,
                Types: () => N,
                _setDiagnosticsSampleRate: () => a0,
                add: () => aO,
                createInstance: () => aS,
                createNetworkRequestEvent: () => r8,
                extendSession: () => aR,
                flush: () => aD,
                getDeviceId: () => aL,
                getIdentity: () => aN,
                getOptOut: () => aM,
                getSessionId: () => aj,
                getUserId: () => aU,
                groupIdentify: () => aF,
                identify: () => aq,
                init: () => aB,
                logEvent: () => aV,
                remove: () => aH,
                reset: () => az,
                revenue: () => aK,
                runQueuedFunctions: () => o3,
                setDeviceId: () => aW,
                setGroup: () => aY,
                setIdentity: () => a$,
                setOptOut: () => aG,
                setSessionId: () => aJ,
                setTransport: () => aX,
                setUserId: () => aQ,
                track: () => aZ,
                trackVideo: () => aC
            });
            var i, o, a, s, u, l, c, d, f, p, h, v, g, m, y, b, w, E, S, k, T, _, x, P, I, A, C, O, R, D, L, N = {};
            n.r(N), n.d(N, {
                DEFAULT_ACTION_CLICK_ALLOWLIST: () => tQ,
                DEFAULT_CSS_SELECTOR_ALLOWLIST: () => tJ,
                DEFAULT_DATA_ATTRIBUTE_PREFIX: () => tX,
                EXCLUDE_INTERNAL_REFERRERS_CONDITIONS: () => oe,
                IdentifyOperation: () => y,
                LogLevel: () => m,
                OfflineDisabled: () => oB,
                RevenueProperty: () => D,
                ServerZone: () => L,
                SpecialEventType: () => b
            });
            var M = function(e, t) {
                return (M = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function j(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                M(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var U = function() {
                return (U = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function F(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                return n
            }

            function q(e, t, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }

            function B(e, t) {
                var n, r, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    },
                    a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(s) {
                    return function(u) {
                        var l = [s, u];
                        if (n) throw TypeError("Generator is already executing.");
                        for (; a && (a = 0, l[0] && (o = 0)), o;) try {
                            if (n = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                            switch (r = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, r = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        o.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && o.label < i[1]) {
                                        o.label = i[1], i = l;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2], o.ops.push(l);
                                        break
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            l = t.call(e, o)
                        } catch (e) {
                            l = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function V(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function H(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function z(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }(i = m || (m = {}))[i.None = 0] = "None", i[i.Error = 1] = "Error", i[i.Warn = 2] = "Warn", i[i.Verbose = 3] = "Verbose", i[i.Debug = 4] = "Debug";
            var K = function(e) {
                    return void 0 === e && (e = 0), (Error().stack || "").split("\n").slice(2 + e).map(function(e) {
                        return e.trim()
                    })
                },
                W = function(e) {
                    return function() {
                        var t = U({}, e.config);
                        return {
                            logger: t.loggerProvider,
                            logLevel: t.logLevel
                        }
                    }
                },
                Y = function(e, t) {
                    var n, r;
                    t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
                    try {
                        for (var i = V(t.split(".")), o = i.next(); !o.done; o = i.next()) {
                            var a = o.value;
                            if (!(a in e)) return;
                            e = e[a]
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return e
                },
                $ = function(e, t) {
                    return function() {
                        var n, r, i = {};
                        try {
                            for (var o = V(t), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                i[s] = Y(e, s)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return i
                    }
                },
                G = function(e, t, n, r, i) {
                    return void 0 === i && (i = null),
                        function() {
                            for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                            var s = n(),
                                u = s.logger,
                                l = s.logLevel;
                            if (l && l < m.Debug || !l || !u) return e.apply(i, o);
                            var c = {
                                type: "invoke public method",
                                name: t,
                                args: o,
                                stacktrace: K(1),
                                time: {
                                    start: new Date().toISOString()
                                },
                                states: {}
                            };
                            r && c.states && (c.states.before = r());
                            var d = e.apply(i, o);
                            return d && d.promise ? d.promise.then(function() {
                                r && c.states && (c.states.after = r()), c.time && (c.time.end = new Date().toISOString()), u.debug(JSON.stringify(c, null, 2))
                            }) : (r && c.states && (c.states.after = r()), c.time && (c.time.end = new Date().toISOString()), u.debug(JSON.stringify(c, null, 2))), d
                        }
                },
                J = function() {
                    var e = "ampIntegrationContext";
                    return "u" > typeof globalThis && void 0 !== globalThis[e] ? globalThis[e] : "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof self ? self : "u" > typeof globalThis ? globalThis : void 0
                },
                X = "tags",
                Q = "counters",
                Z = "histograms",
                ee = "events",
                et = "internal",
                en = "last_flush_timestamp",
                er = function() {
                    function e(e, t) {
                        this.dbPromise = null, this.logger = t, this.dbName = "AMP_diagnostics_".concat(e.substring(0, 10))
                    }
                    return e.isSupported = function() {
                        var e;
                        return (null == (e = J()) ? void 0 : e.indexedDB) !== void 0
                    }, e.prototype.getDB = function() {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(e) {
                                return this.dbPromise || (this.dbPromise = this.openDB()), [2, this.dbPromise]
                            })
                        })
                    }, e.prototype.openDB = function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            var r = indexedDB.open(e.dbName, 1);
                            r.onerror = function() {
                                e.dbPromise = null, n(Error("Failed to open IndexedDB"))
                            }, r.onsuccess = function() {
                                var n = r.result;
                                n.onclose = function() {
                                    e.dbPromise = null, e.logger.debug("DiagnosticsStorage: DB connection closed.")
                                }, n.onerror = function(t) {
                                    e.logger.debug("DiagnosticsStorage: A global database error occurred.", t), n.close()
                                }, t(n)
                            }, r.onupgradeneeded = function() {
                                var t = r.result;
                                t ? e.createTables(t) : e.logger.debug("DiagnosticsStorage: Missing DB during upgrade.")
                            }
                        })
                    }, e.prototype.createTables = function(e) {
                        e.objectStoreNames.contains(X) || e.createObjectStore(X, {
                            keyPath: "key"
                        }), e.objectStoreNames.contains(Q) || e.createObjectStore(Q, {
                            keyPath: "key"
                        }), e.objectStoreNames.contains(Z) || e.createObjectStore(Z, {
                            keyPath: "key"
                        }), e.objectStoreNames.contains(ee) || e.createObjectStore(ee, {
                            keyPath: "id",
                            autoIncrement: !0
                        }).createIndex("time_idx", "time", {
                            unique: !1
                        }), e.objectStoreNames.contains(et) || e.createObjectStore(et, {
                            keyPath: "key"
                        })
                    }, e.prototype.setTags = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === Object.entries(e).length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([X], "readwrite")).objectStore(X), [2, new Promise(function(r) {
                                            var o = Object.entries(e);
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to set tags", e), r()
                                            }, o.forEach(function(e) {
                                                var t = H(e, 2),
                                                    r = t[0],
                                                    o = t[1];
                                                n.put({
                                                    key: r,
                                                    value: o
                                                }).onerror = function(e) {
                                                    i.logger.debug("DiagnosticsStorage: Failed to set tag", r, o, e)
                                                }
                                            })
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to set tags", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.incrementCounters = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === Object.entries(e).length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([Q], "readwrite")).objectStore(Q), [2, new Promise(function(r) {
                                            var o = Object.entries(e);
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to increment counters", e), r()
                                            }, o.forEach(function(e) {
                                                var t = H(e, 2),
                                                    r = t[0],
                                                    o = t[1],
                                                    a = n.get(r);
                                                a.onsuccess = function() {
                                                    var e = a.result,
                                                        t = e ? e.value : 0;
                                                    n.put({
                                                        key: r,
                                                        value: t + o
                                                    }).onerror = function(e) {
                                                        i.logger.debug("DiagnosticsStorage: Failed to update counter", r, e)
                                                    }
                                                }, a.onerror = function(e) {
                                                    i.logger.debug("DiagnosticsStorage: Failed to read existing counter", r, e)
                                                }
                                            })
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to increment counters", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setHistogramStats = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === Object.entries(e).length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([Z], "readwrite")).objectStore(Z), [2, new Promise(function(r) {
                                            var o = Object.entries(e);
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to set histogram stats", e), r()
                                            }, o.forEach(function(e) {
                                                var t = H(e, 2),
                                                    r = t[0],
                                                    o = t[1],
                                                    a = n.get(r);
                                                a.onsuccess = function() {
                                                    var e, t = a.result;
                                                    e = t ? {
                                                        key: r,
                                                        count: t.count + o.count,
                                                        min: Math.min(t.min, o.min),
                                                        max: Math.max(t.max, o.max),
                                                        sum: t.sum + o.sum
                                                    } : {
                                                        key: r,
                                                        count: o.count,
                                                        min: o.min,
                                                        max: o.max,
                                                        sum: o.sum
                                                    }, n.put(e).onerror = function(e) {
                                                        i.logger.debug("DiagnosticsStorage: Failed to set histogram stats", r, e)
                                                    }
                                                }, a.onerror = function(e) {
                                                    i.logger.debug("DiagnosticsStorage: Failed to read existing histogram stats", r, e)
                                                }
                                            })
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to set histogram stats", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.addEventRecords = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === e.length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([ee], "readwrite")).objectStore(ee), [2, new Promise(function(r) {
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to add event records", e), r()
                                            };
                                            var o = n.count();
                                            o.onsuccess = function() {
                                                var t = Math.max(0, 10 - o.result);
                                                t < e.length && i.logger.debug("DiagnosticsStorage: Only added ".concat(t, " of ").concat(e.length, " events due to storage limit")), e.slice(0, t).forEach(function(e) {
                                                    n.add(e).onerror = function(e) {
                                                        i.logger.debug("DiagnosticsStorage: Failed to add event record", e)
                                                    }
                                                })
                                            }, o.onerror = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to count existing events", e)
                                            }
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to add event records", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setInternal = function(e, t) {
                        return q(this, void 0, void 0, function() {
                            var n, r, i;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.getDB()];
                                    case 1:
                                        return r = (n = o.sent().transaction([et], "readwrite")).objectStore(et), [2, new Promise(function(i, o) {
                                            n.onabort = function() {
                                                return o(Error("Failed to set internal value"))
                                            };
                                            var a = r.put({
                                                key: e,
                                                value: t
                                            });
                                            a.onsuccess = function() {
                                                return i()
                                            }, a.onerror = function() {
                                                return o(Error("Failed to set internal value"))
                                            }
                                        })];
                                    case 2:
                                        return i = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to set internal value", i), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getInternal = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.getDB()];
                                    case 1:
                                        return n = (t = i.sent().transaction([et], "readonly")).objectStore(et), [2, new Promise(function(r, i) {
                                            t.onabort = function() {
                                                return i(Error("Failed to get internal value"))
                                            };
                                            var o = n.get(e);
                                            o.onsuccess = function() {
                                                return r(o.result)
                                            }, o.onerror = function() {
                                                return i(Error("Failed to get internal value"))
                                            }
                                        })];
                                    case 2:
                                        return r = i.sent(), this.logger.debug("DiagnosticsStorage: Failed to get internal value", r), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getLastFlushTimestamp = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.getInternal(en)];
                                    case 1:
                                        return [2, (e = n.sent()) ? parseInt(e.value, 10) : void 0];
                                    case 2:
                                        return t = n.sent(), this.logger.debug("DiagnosticsStorage: Failed to get last flush timestamp", t), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setLastFlushTimestamp = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.setInternal(en, e.toString())];
                                    case 1:
                                        return n.sent(), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.debug("DiagnosticsStorage: Failed to set last flush timestamp", t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.clearTable = function(e, t) {
                        return new Promise(function(n, r) {
                            var i = e.objectStore(t).clear();
                            i.onsuccess = function() {
                                return n()
                            }, i.onerror = function() {
                                return r(Error("Failed to clear table ".concat(t)))
                            }
                        })
                    }, e.prototype.getAllAndClear = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t, n, r, i, o, a;
                            return B(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 4, , 5]), [4, this.getDB()];
                                    case 1:
                                        return e = s.sent().transaction([X, Q, Z, ee], "readwrite"), [4, Promise.all([this.getAllFromStore(e, X), this.getAllFromStore(e, Q), this.getAllFromStore(e, Z), this.getAllFromStore(e, ee)])];
                                    case 2:
                                        return n = (t = H.apply(void 0, [s.sent(), 4]))[0], r = t[1], i = t[2], o = t[3], [4, Promise.all([this.clearTable(e, Q), this.clearTable(e, Z), this.clearTable(e, ee)])];
                                    case 3:
                                        return s.sent(), [2, {
                                            tags: n,
                                            counters: r,
                                            histogramStats: i,
                                            events: o
                                        }];
                                    case 4:
                                        return a = s.sent(), this.logger.debug("DiagnosticsStorage: Failed to get all and clear data", a), [2, {
                                            tags: [],
                                            counters: [],
                                            histogramStats: [],
                                            events: []
                                        }];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getAllFromStore = function(e, t) {
                        return new Promise(function(n, r) {
                            var i = e.objectStore(t).getAll();
                            i.onsuccess = function() {
                                return n(i.result)
                            }, i.onerror = function() {
                                return r(Error("Failed to get all from ".concat(t)))
                            }
                        })
                    }, e
                }(),
                ei = function(e) {
                    var t = 0;
                    if (0 === e.length) return t;
                    for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
                    return t
                },
                eo = function(e, t) {
                    return 31 * Math.abs(ei(e.toString())) % 1e5 / 1e5 < t
                },
                ea = function() {
                    var e = J();
                    if (!e) return [];
                    var t = e.__AMPLITUDE_SCRIPT_URL__;
                    return Array.isArray(t) ? t : "string" == typeof t ? [t] : []
                },
                es = function(e) {
                    var t = J();
                    if (t && "function" == typeof t.addEventListener) {
                        var n = function(t) {
                            e.recordEvent("sdk.error.uncaught", U({
                                type: t.type,
                                message: t.message,
                                filename: t.filename,
                                error_name: t.errorName,
                                stack: t.stack
                            }, t.metadata))
                        };
                        t.addEventListener("error", function(e) {
                            var t = e.error instanceof Error ? e.error : void 0,
                                r = null == t ? void 0 : t.stack,
                                i = eu({
                                    filename: e.filename,
                                    stack: r
                                });
                            i && n({
                                type: "error",
                                message: e.message,
                                stack: r,
                                filename: e.filename,
                                errorName: null == t ? void 0 : t.name,
                                metadata: {
                                    colno: e.colno,
                                    lineno: e.lineno,
                                    isTrusted: e.isTrusted,
                                    matchReason: i
                                }
                            })
                        }, !0), t.addEventListener("unhandledrejection", function(e) {
                            var t, r = e.reason instanceof Error ? e.reason : void 0,
                                i = null == r ? void 0 : r.stack,
                                o = el(i),
                                a = eu({
                                    filename: o,
                                    stack: i
                                });
                            a && n({
                                type: "unhandledrejection",
                                message: null != (t = null == r ? void 0 : r.message) ? t : ec(e.reason),
                                stack: i,
                                filename: o,
                                errorName: null == r ? void 0 : r.name,
                                metadata: {
                                    isTrusted: e.isTrusted,
                                    matchReason: a
                                }
                            })
                        }, !0)
                    }
                },
                eu = function(e) {
                    var t, n, r = ea();
                    if (0 !== r.length) try {
                        for (var i = V(r), o = i.next(); !o.done; o = i.next()) {
                            var a = o.value;
                            if (e.filename && e.filename.includes(a)) return "filename";
                            if (e.stack && e.stack.includes(a)) return "stack"
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                },
                el = function(e) {
                    if (e) {
                        var t = e.match(/(https?:\/\/\S+?)(?=[)\s]|$)/);
                        return t ? t[1] : void 0
                    }
                },
                ec = function(e) {
                    if ("string" == typeof e) return e;
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[object Object]"
                    }
                },
                ed = function() {
                    function e(e, t, n, r, i) {
                        void 0 === n && (n = "US"), this.inMemoryTags = {}, this.inMemoryCounters = {}, this.inMemoryHistograms = {}, this.inMemoryEvents = [], this.saveTimer = null, this.flushTimer = null, this.apiKey = e, this.logger = t, this.serverUrl = "US" === n ? "https://diagnostics.prod.us-west-2.amplitude.com/v1/capture" : "https://diagnostics.prod.eu-central-1.amplitude.com/v1/capture", this.logger.debug("DiagnosticsClient: Initializing with options", JSON.stringify(r, null, 2)), this.config = U({
                            enabled: !0,
                            sampleRate: 0
                        }, r), this.startTimestamp = Date.now(), this.shouldTrack = eo(this.startTimestamp, this.config.sampleRate) && this.config.enabled, i ? this.storage = i : er.isSupported() ? this.storage = new er(e, t) : this.logger.debug("DiagnosticsClient: IndexedDB is not supported"), this.initializeFlushInterval(), this.shouldTrack && (this.increment("sdk.diagnostics.sampled.in.and.enabled"), es(this))
                    }
                    return e.prototype.isStorageAndTrackEnabled = function() {
                        return !!this.storage && !!this.shouldTrack
                    }, e.prototype.setTag = function(e, t) {
                        if (this.isStorageAndTrackEnabled()) {
                            if (Object.keys(this.inMemoryTags).length >= 1e4) return void this.logger.debug("DiagnosticsClient: Early return setTags as reaching memory limit");
                            this.inMemoryTags[e] = t, this.startTimersIfNeeded()
                        }
                    }, e.prototype.increment = function(e, t) {
                        if (void 0 === t && (t = 1), this.isStorageAndTrackEnabled()) {
                            if (Object.keys(this.inMemoryCounters).length >= 1e4) return void this.logger.debug("DiagnosticsClient: Early return increment as reaching memory limit");
                            this.inMemoryCounters[e] = (this.inMemoryCounters[e] || 0) + t, this.startTimersIfNeeded()
                        }
                    }, e.prototype.recordHistogram = function(e, t) {
                        if (this.isStorageAndTrackEnabled()) {
                            if (Object.keys(this.inMemoryHistograms).length >= 1e4) return void this.logger.debug("DiagnosticsClient: Early return recordHistogram as reaching memory limit");
                            var n = this.inMemoryHistograms[e];
                            n ? (n.count += 1, n.min = Math.min(n.min, t), n.max = Math.max(n.max, t), n.sum += t) : this.inMemoryHistograms[e] = {
                                count: 1,
                                min: t,
                                max: t,
                                sum: t
                            }, this.startTimersIfNeeded()
                        }
                    }, e.prototype.recordEvent = function(e, t) {
                        if (this.isStorageAndTrackEnabled()) {
                            if (this.inMemoryEvents.length >= 10) return void this.logger.debug("DiagnosticsClient: Early return recordEvent as reaching memory limit");
                            this.inMemoryEvents.push({
                                event_name: e,
                                time: Date.now(),
                                event_properties: t
                            }), this.startTimersIfNeeded()
                        }
                    }, e.prototype.startTimersIfNeeded = function() {
                        var e = this;
                        this.saveTimer || (this.saveTimer = setTimeout(function() {
                            e.saveAllDataToStorage().catch(function(t) {
                                e.logger.debug("DiagnosticsClient: Failed to save all data to storage", t)
                            }).finally(function() {
                                e.saveTimer = null
                            })
                        }, 1e3)), this.flushTimer || (this.flushTimer = setTimeout(function() {
                            e._flush().catch(function(t) {
                                e.logger.debug("DiagnosticsClient: Failed to flush", t)
                            }).finally(function() {
                                e.flushTimer = null
                            })
                        }, 3e5))
                    }, e.prototype.saveAllDataToStorage = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t, n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.storage) return [2];
                                        return e = U({}, this.inMemoryTags), t = U({}, this.inMemoryCounters), n = U({}, this.inMemoryHistograms), r = z([], H(this.inMemoryEvents), !1), this.inMemoryEvents = [], this.inMemoryTags = {}, this.inMemoryCounters = {}, this.inMemoryHistograms = {}, [4, Promise.all([this.storage.setTags(e), this.storage.incrementCounters(t), this.storage.setHistogramStats(n), this.storage.addEventRecords(r)])];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype._flush = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t, n, r, i, o, a, s, u, l;
                            return B(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.storage) return [2];
                                        return [4, this.saveAllDataToStorage()];
                                    case 1:
                                        return c.sent(), this.saveTimer = null, this.flushTimer = null, [4, this.storage.getAllAndClear()];
                                    case 2:
                                        if (t = (e = c.sent()).tags, n = e.counters, r = e.histogramStats, i = e.events, this.storage.setLastFlushTimestamp(Date.now()), o = {}, t.forEach(function(e) {
                                                o[e.key] = e.value
                                            }), a = {}, n.forEach(function(e) {
                                                a[e.key] = e.value
                                            }), s = {}, r.forEach(function(e) {
                                                s[e.key] = {
                                                    count: e.count,
                                                    min: e.min,
                                                    max: e.max,
                                                    avg: Math.round(e.sum / e.count * 100) / 100
                                                }
                                            }), u = i.map(function(e) {
                                                return {
                                                    event_name: e.event_name,
                                                    time: e.time,
                                                    event_properties: e.event_properties
                                                }
                                            }), 0 === Object.keys(a).length && 0 === Object.keys(s).length && 0 === u.length) return [2];
                                        return l = {
                                            tags: o,
                                            histogram: s,
                                            counters: a,
                                            events: u
                                        }, this.fetch(l), [2]
                                }
                            })
                        })
                    }, e.prototype.fetch = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (n.trys.push([0, 2, , 3]), !J()) throw Error("DiagnosticsClient: Fetch is not supported");
                                        return [4, fetch(this.serverUrl, {
                                            method: "POST",
                                            headers: {
                                                "X-ApiKey": this.apiKey,
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(e)
                                        })];
                                    case 1:
                                        if (!n.sent().ok) return this.logger.debug("DiagnosticsClient: Failed to send diagnostics data."), [2];
                                        return this.logger.debug("DiagnosticsClient: Successfully sent diagnostics data"), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.debug("DiagnosticsClient: Failed to send diagnostics data. ", t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.initializeFlushInterval = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t, n;
                            return B(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.storage) return [2];
                                        return e = Date.now(), [4, this.storage.getLastFlushTimestamp()];
                                    case 1:
                                        if (-1 === (t = r.sent() || -1)) return this.storage.setLastFlushTimestamp(e), this._setFlushTimer(3e5), [2];
                                        return (n = e - t) >= 3e5 ? this._flush() : this._setFlushTimer(3e5 - n), [2]
                                }
                            })
                        })
                    }, e.prototype._setFlushTimer = function(e) {
                        var t = this;
                        this.flushTimer = setTimeout(function() {
                            t._flush().catch(function(e) {
                                t.logger.debug("DiagnosticsClient: Failed to flush", e)
                            }).finally(function() {
                                t.flushTimer = null
                            })
                        }, e)
                    }, e.prototype._setSampleRate = function(e) {
                        this.logger.debug("DiagnosticsClient: Setting sample rate to", e), this.config.sampleRate = e, this.shouldTrack = eo(this.startTimestamp, this.config.sampleRate) && this.config.enabled, this.logger.debug("DiagnosticsClient: Should track is", this.shouldTrack)
                    }, e
                }(),
                ef = n(65405),
                ep = (n.n(ef))() || ef,
                eh = function() {
                    function e(e, t) {
                        this.key = "AMP_remote_config_".concat(e.substring(0, 10)), this.logger = t;
                        try {
                            this.isSupported = "u" > typeof localStorage
                        } catch (e) {
                            this.logger.debug("Remote config localstorage failed to access: ", e), this.isSupported = !1
                        }
                    }
                    return e.prototype.fetchConfig = function() {
                        var e = null,
                            t = {
                                remoteConfig: null,
                                lastFetch: new Date
                            };
                        if (!this.isSupported) return Promise.resolve(t);
                        try {
                            e = localStorage.getItem(this.key)
                        } catch (e) {
                            return this.logger.debug("Remote config localstorage failed to access: ", e), Promise.resolve(t)
                        }
                        if (null === e) return this.logger.debug("Remote config localstorage gets null because the key does not exist"), Promise.resolve(t);
                        try {
                            var n = JSON.parse(e);
                            return this.logger.debug("Remote config localstorage parsed successfully: ".concat(ep(n))), Promise.resolve({
                                remoteConfig: n.remoteConfig,
                                lastFetch: new Date(n.lastFetch)
                            })
                        } catch (e) {
                            return this.logger.debug("Remote config localstorage failed to parse: ", e), localStorage.removeItem(this.key), Promise.resolve(t)
                        }
                    }, e.prototype.setConfig = function(e) {
                        if (!this.isSupported) return Promise.resolve(!1);
                        try {
                            return localStorage.setItem(this.key, JSON.stringify(e)), this.logger.debug("Remote config localstorage set successfully."), Promise.resolve(!0)
                        } catch (e) {
                            this.logger.debug("Remote config localstorage failed to set: ", e)
                        }
                        return Promise.resolve(!1)
                    }, e
                }(),
                ev = z([], H(Array(256).keys()), !1).map(function(e) {
                    return e.toString(16).padStart(2, "0")
                }),
                eg = function(e) {
                    var t, n = J();
                    if (!(null == (t = null == n ? void 0 : n.crypto) ? void 0 : t.getRandomValues)) return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, eg);
                    var r = n.crypto.getRandomValues(new Uint8Array(16));
                    return r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, z([], H(r.entries()), !1).map(function(e) {
                        var t = H(e, 2),
                            n = t[0],
                            r = t[1];
                        return [4, 6, 8, 10].includes(n) ? "-".concat(ev[r]) : ev[r]
                    }).join("")
                },
                em = function() {
                    function e(t, n, r, i, o, a, s) {
                        void 0 === r && (r = "US"), void 0 === a && (a = e.DEFAULT_CONFIG_GROUP), this.callbackInfos = [], this.lastSuccessfulFetch = null, this.fetchPromise = null, this.isLastFetchInvalidApiKey = !1, this.apiKey = t, this.configGroup = a, this.serverUrl = i || ("US" === r ? "https://sr-client-cfg.amplitude.com/config" : "https://sr-client-cfg.eu.amplitude.com/config"), this.logger = n, this.storage = s || new eh(t, n), this.customFetch = o
                    }
                    return e.prototype.subscribe = function(e, t, n) {
                        var r = eg(),
                            i = {
                                id: r,
                                key: e,
                                deliveryMode: t,
                                callback: n
                            };
                        return this.callbackInfos.push(i), "all" === t ? this.subscribeAll(i) : this.subscribeWaitForRemote(i, t.timeout), r
                    }, e.prototype.unsubscribe = function(e) {
                        var t = this.callbackInfos.findIndex(function(t) {
                            return t.id === e
                        });
                        return -1 === t ? (this.logger.debug("Remote config client unsubscribe failed because callback with id ".concat(e, " doesn't exist.")), !1) : (this.callbackInfos.splice(t, 1), this.logger.debug("Remote config client unsubscribe succeeded removing callback with id ".concat(e, ".")), !0)
                    }, e.prototype.updateConfigs = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t = this;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.lastSuccessfulFetch && Date.now() - this.lastSuccessfulFetch < 3e5) return this.logger.debug("Remote config client skipping updateConfigs: Too recent"), [2];
                                        return [4, this.getOrCreateFetchPromise()];
                                    case 1:
                                        return e = n.sent(), this.storage.setConfig(e), this.callbackInfos.forEach(function(n) {
                                            t.sendCallback(n, e, "remote")
                                        }), [2]
                                }
                            })
                        })
                    }, e.prototype.getOrCreateFetchPromise = function() {
                        var e = this;
                        return this.fetchPromise || (this.isLastFetchInvalidApiKey ? (this.logger.debug("Remote config client skipping fetch: Invalid API key"), this.fetchPromise = Promise.resolve({
                            remoteConfig: null,
                            lastFetch: new Date
                        }).finally(function() {
                            e.fetchPromise = null
                        })) : this.fetchPromise = this.fetch().then(function(t) {
                            return null !== t.remoteConfig && (e.lastSuccessfulFetch = Date.now()), t
                        }).finally(function() {
                            e.fetchPromise = null
                        })), this.fetchPromise
                    }, e.prototype.subscribeAll = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = this.getOrCreateFetchPromise().then(function(t) {
                                            i.logger.debug("Remote config client subscription all mode fetched from remote: ".concat(JSON.stringify(t))), i.sendCallback(e, t, "remote"), i.storage.setConfig(t)
                                        }), n = this.storage.fetchConfig().then(function(e) {
                                            return e
                                        }), [4, Promise.race([t, n])];
                                    case 1:
                                        return void 0 !== (r = o.sent()) && (this.logger.debug("Remote config client subscription all mode fetched from cache: ".concat(JSON.stringify(r))), null !== r.remoteConfig ? this.sendCallback(e, r, "cache") : this.logger.debug("Remote config client skips sending callback because cache is empty (first time user).")), [4, t];
                                    case 2:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.subscribeWaitForRemote = function(e, t) {
                        return q(this, void 0, void 0, function() {
                            var n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = new Promise(function(e, n) {
                                            setTimeout(function() {
                                                n("Timeout exceeded")
                                            }, t)
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 5]), [4, Promise.race([this.getOrCreateFetchPromise(), n])];
                                    case 2:
                                        return r = i.sent(), this.logger.debug("Remote config client subscription wait for remote mode returns from remote."), this.sendCallback(e, r, "remote"), this.storage.setConfig(r), [3, 5];
                                    case 3:
                                        return i.sent(), this.logger.debug("Remote config client subscription wait for remote mode exceeded timeout. Try to fetch from cache."), [4, this.storage.fetchConfig()];
                                    case 4:
                                        return null !== (r = i.sent()).remoteConfig ? (this.logger.debug("Remote config client subscription wait for remote mode returns a cached copy."), this.sendCallback(e, r, "cache")) : (this.logger.debug("Remote config client subscription wait for remote mode failed to fetch cache."), this.sendCallback(e, r, "remote")), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.sendCallback = function(e, t, n) {
                        var r;
                        e.lastCallback = new Date, r = e.key ? e.key.split(".").reduce(function(e, t) {
                            return null === e ? e : t in e ? e[t] : null
                        }, t.remoteConfig) : t.remoteConfig, e.callback(r, n, t.lastFetch)
                    }, e.prototype.fetch = function(e, t) {
                        return void 0 === e && (e = 3), void 0 === t && (t = 1e3), q(this, void 0, void 0, function() {
                            var n, r, i, o, a, s, u = this;
                            return B(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        n = t / e, r = {
                                            remoteConfig: null,
                                            lastFetch: new Date
                                        }, i = function(r) {
                                            var i, a, s, l, c, d, f, p, h;
                                            return B(this, function(v) {
                                                switch (v.label) {
                                                    case 0:
                                                        i = !0, a = new AbortController, s = setTimeout(function() {
                                                            return a.abort()
                                                        }, t), v.label = 1;
                                                    case 1:
                                                        var g, m;
                                                        if (v.trys.push([1, 10, 11, 12]), l = o.getUrlParams(), c = {
                                                                Accept: "*/*"
                                                            }, !o.customFetch) return [3, 3];
                                                        return [4, (g = o.customFetch({
                                                            url: l,
                                                            method: "GET",
                                                            headers: c,
                                                            signal: a.signal
                                                        }), m = a.signal, new Promise(function(e, t) {
                                                            var n = function() {
                                                                var e = Error("Remote config custom fetch aborted by timeout");
                                                                e.name = "AbortError", t(e)
                                                            };
                                                            m.addEventListener("abort", n, {
                                                                once: !0
                                                            }), g.then(function(t) {
                                                                m.removeEventListener("abort", n), e(t)
                                                            }, function(e) {
                                                                m.removeEventListener("abort", n), t(e)
                                                            })
                                                        }))];
                                                    case 2:
                                                        return f = v.sent(), [3, 5];
                                                    case 3:
                                                        return [4, fetch(l, {
                                                            method: "GET",
                                                            headers: c,
                                                            signal: a.signal
                                                        })];
                                                    case 4:
                                                        f = v.sent(), v.label = 5;
                                                    case 5:
                                                        if ((d = f).ok || d.status >= 200 && d.status < 300) return [3, 7];
                                                        return [4, d.text()];
                                                    case 6:
                                                        return p = v.sent(), o.logger.debug("Remote config client fetch with retry time ".concat(e, " failed with ").concat(d.status, ": ").concat(p)), 401 === d.status || 403 === d.status ? (o.logger.error("Remote config client fetch failed with ".concat(d.status, ". Invalid API key; future fetches will be skipped.")), o.isLastFetchInvalidApiKey = !0, i = !1) : d.status >= 400 && d.status < 500 && 429 !== d.status && (i = !1), [3, 9];
                                                    case 7:
                                                        return [4, d.json()];
                                                    case 8:
                                                        return [2, {
                                                            value: {
                                                                remoteConfig: v.sent(),
                                                                lastFetch: new Date
                                                            }
                                                        }];
                                                    case 9:
                                                        return [3, 12];
                                                    case 10:
                                                        return (h = v.sent()) instanceof Error && "AbortError" === h.name ? o.logger.debug("Remote config client fetch with retry time ".concat(e, " timed out after ").concat(t, "ms")) : o.logger.debug("Remote config client fetch with retry time ".concat(e, " is rejected because: "), h), [3, 12];
                                                    case 11:
                                                        return clearTimeout(s), [7];
                                                    case 12:
                                                        if (!i) return [2, "break"];
                                                        if (!(r < e - 1)) return [3, 14];
                                                        return [4, new Promise(function(e) {
                                                            return setTimeout(e, u.getJitterDelay(n))
                                                        })];
                                                    case 13:
                                                        v.sent(), v.label = 14;
                                                    case 14:
                                                        return [2]
                                                }
                                            })
                                        }, o = this, a = 0, l.label = 1;
                                    case 1:
                                        if (!(a < e)) return [3, 4];
                                        return [5, i(a)];
                                    case 2:
                                        if ("object" == typeof(s = l.sent())) return [2, s.value];
                                        if ("break" === s) return [3, 4];
                                        l.label = 3;
                                    case 3:
                                        return a++, [3, 1];
                                    case 4:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.getJitterDelay = function(e) {
                        return Math.floor(Math.random() * e)
                    }, e.prototype.getUrlParams = function() {
                        var e = encodeURIComponent(this.apiKey),
                            t = new URLSearchParams;
                        return t.append("config_group", this.configGroup), "".concat(this.serverUrl, "/").concat(e, "?").concat(t.toString())
                    }, e.DEFAULT_CONFIG_GROUP = "browser", e
                }(),
                ey = function(e, t) {
                    var n, r, i;
                    return "boolean" == typeof e ? e : (null == e ? void 0 : e[t]) !== !1 && ("string" != typeof(null == (r = null == (n = null == (i = J()) ? void 0 : i.chrome) ? void 0 : n.runtime) ? void 0 : r.id) || !!(null == e ? void 0 : e[t]))
                },
                eb = function(e) {
                    return ey(e, "attribution")
                },
                ew = function(e) {
                    return ey(e, "formInteractions")
                },
                eE = function(e) {
                    return ey(e, "pageViews")
                },
                eS = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.networkTracking || "object" == typeof e.networkTracking)
                },
                ek = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.elementInteractions || "object" == typeof e.elementInteractions)
                },
                eT = function(e) {
                    if ("object" == typeof e.autocapture) {
                        var t = e.autocapture.webVitals;
                        if ("object" == typeof t && null !== t) return t
                    }
                },
                e_ = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.frustrationInteractions || "object" == typeof e.frustrationInteractions)
                },
                ex = function(e) {
                    if ("object" == typeof e.autocapture) {
                        var t = e.autocapture.performanceTracking;
                        if (!0 === t) return {
                            mainThreadBlock: !0
                        };
                        if ("object" == typeof t && null !== t) return t
                    }
                },
                eP = function(e) {
                    if (ek(e.autocapture) && "object" == typeof e.autocapture && "object" == typeof e.autocapture.elementInteractions) return e.autocapture.elementInteractions
                },
                eI = function(e) {
                    if (e_(e.autocapture) && "object" == typeof e.autocapture && "object" == typeof e.autocapture.frustrationInteractions) return e.autocapture.frustrationInteractions
                },
                eA = function(e) {
                    if (eS(e.autocapture)) {
                        var t, n, r = void 0;
                        return "object" == typeof e.autocapture && "object" == typeof e.autocapture.networkTracking ? r = e.autocapture.networkTracking : e.networkTrackingOptions && (r = e.networkTrackingOptions), U(U({}, r), {
                            captureRules: (t = null == r ? void 0 : r.captureRules, n = e.loggerProvider, null == t ? void 0 : t.map(function(e) {
                                var t, r;
                                if ((null == (t = e.urls) ? void 0 : t.length) && (null == (r = e.hosts) ? void 0 : r.length)) {
                                    var i = JSON.stringify(e.hosts),
                                        o = JSON.stringify(e.urls);
                                    return null == n || n.warn("Found network capture rule with both urls='".concat(o, "' and hosts='").concat(i, "' set. ") + "Definition of urls takes precedence over hosts, so ignoring hosts."), U(U({}, e), {
                                        hosts: void 0
                                    })
                                }
                                return e
                            }))
                        })
                    }
                },
                eC = function(e) {
                    var t, n = function() {
                            return !1
                        },
                        r = void 0,
                        i = e.pageCounter;
                    return eE(e.defaultTracking) && (n = void 0, t = void 0, e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.pageViews && "object" == typeof e.defaultTracking.pageViews && ("trackOn" in e.defaultTracking.pageViews && (n = e.defaultTracking.pageViews.trackOn), "trackHistoryChanges" in e.defaultTracking.pageViews && (r = e.defaultTracking.pageViews.trackHistoryChanges), "eventType" in e.defaultTracking.pageViews && e.defaultTracking.pageViews.eventType && (t = e.defaultTracking.pageViews.eventType))), {
                        trackOn: n,
                        trackHistoryChanges: r,
                        eventType: t,
                        pageCounter: i
                    }
                },
                eO = function(e) {
                    if (ew(e.defaultTracking) && e.defaultTracking && "object" == typeof e.defaultTracking && "object" == typeof e.defaultTracking.formInteractions) return e.defaultTracking.formInteractions
                },
                eR = function(e) {
                    var t, n;
                    return "string" == typeof(null == (n = null == (t = e.chrome) ? void 0 : t.runtime) ? void 0 : n.id)
                },
                eD = function(e) {
                    var t = e.ServiceWorkerGlobalScope;
                    return "function" == typeof t && e instanceof t
                },
                eL = function(e) {
                    var t = e.WorkerGlobalScope;
                    return "function" == typeof t && e instanceof t
                },
                eN = function(e) {
                    var t, n;
                    return "string" == typeof(null == (n = null == (t = e.process) ? void 0 : t.versions) ? void 0 : n.node)
                },
                eM = function() {
                    if ("u" < typeof navigator) return "";
                    var e, t, n, r, i = navigator.userLanguage;
                    return null != (r = null != (n = null != (t = null == (e = navigator.languages) ? void 0 : e[0]) ? t : navigator.language) ? n : i) ? r : ""
                },
                ej = "2.49.1",
                eU = "amplitude-ts",
                eF = function() {
                    function e() {
                        this.name = "@amplitude/plugin-context-browser", this.type = "before", this.library = "".concat(eU, "/").concat(ej), "u" > typeof navigator && (this.userAgent = navigator.userAgent)
                    }
                    return e.prototype.setup = function(e) {
                        return this.config = e, Promise.resolve(void 0)
                    }, e.prototype.execute = function(e) {
                        var t, n;
                        return q(this, void 0, void 0, function() {
                            var r, i, o;
                            return B(this, function(a) {
                                return r = new Date().getTime(), i = null != (t = this.config.lastEventId) ? t : -1, o = null != (n = e.event_id) ? n : i + 1, this.config.lastEventId = o, e.time || (this.config.lastEventTime = r), [2, U(U(U(U(U(U(U(U({
                                    user_id: this.config.userId,
                                    device_id: this.config.deviceId,
                                    session_id: this.config.sessionId,
                                    time: r
                                }, this.config.appVersion && {
                                    app_version: this.config.appVersion
                                }), this.config.trackingOptions.platform && {
                                    platform: "Web"
                                }), this.config.trackingOptions.language && {
                                    language: eM()
                                }), this.config.trackingOptions.ipAddress && {
                                    ip: "$remote"
                                }), {
                                    insert_id: eg(),
                                    partner_id: this.config.partnerId,
                                    plan: this.config.plan
                                }), this.config.ingestionMetadata && {
                                    ingestion_metadata: {
                                        source_name: this.config.ingestionMetadata.sourceName,
                                        source_version: this.config.ingestionMetadata.sourceVersion
                                    }
                                }), e), {
                                    event_id: o,
                                    library: this.library,
                                    user_agent: this.userAgent
                                })]
                            })
                        })
                    }, e
                }(),
                eq = "[Amplitude] SDK Initialization Offset",
                eB = Symbol.for("@amplitude/sdk-initialization-offset"),
                eV = function(e) {
                    var t = J();
                    if (!t) return 0;
                    var n = t[eB];
                    n || (n = {
                        byApiKey: {}
                    }, t[eB] = n);
                    var r = e || "",
                        i = n.byApiKey[r];
                    if ("number" == typeof i) return i;
                    var o = eH(t);
                    return n.byApiKey[r] = o, o
                },
                eH = function(e) {
                    var t, n;
                    try {
                        var r = null == (n = null == (t = e.performance) ? void 0 : t.now) ? void 0 : n.call(t);
                        if ("number" != typeof r || !Number.isFinite(r)) return 0;
                        return Math.max(0, Math.floor(r))
                    } catch (e) {
                        return 0
                    }
                },
                ez = "data-amp-mask",
                eK = "*****",
                eW = /\b(?:\d[ -]*?){13,16}\b/,
                eY = /(\d{3}-?\d{2}-?\d{4})/g,
                e$ = /[^\s@]+@[^\s@.]+\.[^\s@]+/g,
                eG = function(e, t) {
                    if (void 0 === t && (t = []), "string" != typeof e) return "";
                    var n, r, i = e;
                    i = (i = (i = i.replace(eW, eK)).replace(eY, eK)).replace(e$, eK);
                    try {
                        for (var o = V(t), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            try {
                                i = i.replace(s, eK)
                            } catch (e) {}
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return i
                },
                eJ = function(e) {
                    if ("u" < typeof document || !document.title) return "";
                    var t = document.querySelector("title");
                    return t && t.hasAttribute(ez) ? eK : e ? e(document.title) : document.title
                },
                eX = "AMP_PAGE_VIEW",
                eQ = Symbol.for("@amplitude/page-view-state"),
                eZ = function(e) {
                    return e || ""
                },
                e0 = function() {
                    return J()
                },
                e1 = function() {
                    var e;
                    return null == (e = e0()) ? void 0 : e[eQ]
                },
                e2 = function(e) {
                    var t;
                    void 0 === e && (e = e0());
                    try {
                        var n = null == (t = null == e ? void 0 : e.sessionStorage) ? void 0 : t.getItem(eX);
                        if (!n) return;
                        var r = JSON.parse(n);
                        if (!r || "object" != typeof r) return;
                        return r
                    } catch (e) {
                        return
                    }
                },
                e3 = function(e) {
                    var t, n, r = {};
                    if (!e || "object" != typeof e) return r;
                    try {
                        for (var i = V(Object.entries(e)), o = i.next(); !o.done; o = i.next()) {
                            var a = H(o.value, 2),
                                s = a[0],
                                u = a[1];
                            "string" == typeof u && (r[s] = u)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return r
                },
                e4 = function(e, t, n) {
                    var r;
                    try {
                        var i = e.sessionStorage;
                        if (!i) return;
                        var o = e3(null == (r = e2(e)) ? void 0 : r.byApiKey),
                            a = eZ(t);
                        a && (o[a] = n), i.setItem(eX, JSON.stringify(U({
                            pageViewId: n
                        }, Object.keys(o).length > 0 ? {
                            byApiKey: o
                        } : {})))
                    } catch (e) {}
                },
                e5 = function(e, t) {
                    var n, r = e0();
                    if (r) {
                        var i = eZ(e),
                            o = null != (n = r[eQ]) ? n : {
                                byApiKey: {}
                            },
                            a = o.byApiKey[i];
                        if (a && a.href === t) return e4(r, e, a.pageViewId), a.pageViewId;
                        var s = eg();
                        return o.byApiKey[i] = {
                            pageViewId: s,
                            href: t
                        }, r[eQ] = o, e4(r, e, s), s
                    }
                },
                e6 = function(e) {
                    var t = e2();
                    if (t) {
                        var n = eZ(e);
                        if (n && t.byApiKey && "object" == typeof t.byApiKey) {
                            var r = t.byApiKey[n];
                            return "string" == typeof r ? r : void 0
                        }
                        return "string" == typeof t.pageViewId ? t.pageViewId : void 0
                    }
                },
                e7 = function(e) {
                    var t, n;
                    return (null == (n = null == (t = e1()) ? void 0 : t.byApiKey[eZ(e)]) ? void 0 : n.pageViewId) || e6(e)
                },
                e8 = function() {
                    function e(e) {
                        this.storage = e
                    }
                    return e.prototype.isEnabled = function() {
                        return q(this, void 0, void 0, function() {
                            var t, n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.storage) return [2, !1];
                                        t = String(Date.now()), n = new e(this.storage), r = "AMP_TEST", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                                    case 2:
                                        return i.sent(), [4, n.get(r)];
                                    case 3:
                                        return [2, i.sent() === t];
                                    case 4:
                                        return i.sent(), [2, !1];
                                    case 5:
                                        return [4, n.remove(r)];
                                    case 6:
                                        return i.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                                    case 1:
                                        if (!(t = n.sent())) return [2, void 0];
                                        return [2, JSON.parse(t)];
                                    case 2:
                                        return n.sent(), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        var t;
                        return q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                return [2, (null == (t = this.storage) ? void 0 : t.getItem(e)) || void 0]
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        var n;
                        return q(this, void 0, void 0, function() {
                            return B(this, function(r) {
                                try {
                                    null == (n = this.storage) || n.setItem(e, JSON.stringify(t))
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        var t;
                        return q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                try {
                                    null == (t = this.storage) || t.removeItem(e)
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.reset = function() {
                        var e;
                        return q(this, void 0, void 0, function() {
                            return B(this, function(t) {
                                try {
                                    null == (e = this.storage) || e.clear()
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e
                }(),
                e9 = function(e) {
                    var t = {};
                    for (var n in e) {
                        var r = e[n];
                        r && (t[n] = r)
                    }
                    return t
                },
                te = function() {
                    var e, t = J();
                    return (null == (e = null == t ? void 0 : t.location) ? void 0 : e.search) ? t.location.search.substring(1).split("&").filter(Boolean).reduce(function(e, t) {
                        var n = t.split("=", 2),
                            r = tt(n[0]),
                            i = tt(n[1]);
                        return i && (e[r] = i), e
                    }, {}) : {}
                },
                tt = function(e) {
                    void 0 === e && (e = "");
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        return ""
                    }
                },
                tn = "".concat("AMP", "_unsent"),
                tr = "$default_instance",
                ti = "https://api2.amplitude.com/2/httpapi",
                to = "https://api.eu.amplitude.com/2/httpapi",
                ta = "https://api2.amplitude.com/batch",
                ts = "https://api.eu.amplitude.com/batch",
                tu = "dclid",
                tl = "fbclid",
                tc = "gbraid",
                td = "gclid",
                tf = "ko_click_id",
                tp = "li_fat_id",
                th = "msclkid",
                tv = "rdt_cid",
                tg = "ttclid",
                tm = "twclid",
                ty = "wbraid",
                tb = {
                    utm_campaign: void 0,
                    utm_content: void 0,
                    utm_id: void 0,
                    utm_medium: void 0,
                    utm_source: void 0,
                    utm_term: void 0,
                    referrer: void 0,
                    referring_domain: void 0,
                    dclid: void 0,
                    gbraid: void 0,
                    gclid: void 0,
                    fbclid: void 0,
                    ko_click_id: void 0,
                    li_fat_id: void 0,
                    msclkid: void 0,
                    rdt_cid: void 0,
                    ttclid: void 0,
                    twclid: void 0,
                    wbraid: void 0
                },
                tw = ["access-control-allow-origin", "access-control-allow-credentials", "access-control-expose-headers", "access-control-max-age", "access-control-allow-methods", "access-control-allow-headers", "accept-patch", "accept-ranges", "age", "allow", "alt-svc", "cache-control", "connection", "content-disposition", "content-encoding", "content-language", "content-length", "content-location", "content-md5", "content-range", "content-type", "date", "delta-base", "etag", "expires", "im", "last-modified", "link", "location", "permanent", "p3p", "pragma", "proxy-authenticate", "public-key-pins", "retry-after", "server", "status", "strict-transport-security", "trailer", "transfer-encoding", "tk", "upgrade", "vary", "via", "warning", "www-authenticate", "x-b3-traceid", "x-frame-options"],
                tE = ["authorization", "cookie", "set-cookie"],
                tS = function() {
                    function e() {}
                    return e.prototype.parse = function() {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(e) {
                                return [2, U(U(U(U({}, tb), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                            })
                        })
                    }, e.prototype.getUtmParam = function() {
                        var e = te();
                        return {
                            utm_campaign: e.utm_campaign,
                            utm_content: e.utm_content,
                            utm_id: e.utm_id,
                            utm_medium: e.utm_medium,
                            utm_source: e.utm_source,
                            utm_term: e.utm_term
                        }
                    }, e.prototype.getReferrer = function() {
                        var e, t, n = {
                            referrer: void 0,
                            referring_domain: void 0
                        };
                        try {
                            n.referrer = document.referrer || void 0, n.referring_domain = null != (t = null == (e = n.referrer) ? void 0 : e.split("/")[2]) ? t : void 0
                        } catch (e) {}
                        return n
                    }, e.prototype.getClickIds = function() {
                        var e, t = te();
                        return (e = {})[tu] = t[tu], e[tl] = t[tl], e[tc] = t[tc], e[td] = t[td], e[tf] = t[tf], e[tp] = t[tp], e[th] = t[th], e[tv] = t[tv], e[tg] = t[tg], e[tm] = t[tm], e[ty] = t[ty], e
                    }, e
                }();
            (o = y || (y = {})).SET = "$set", o.SET_ONCE = "$setOnce", o.ADD = "$add", o.APPEND = "$append", o.PREPEND = "$prepend", o.REMOVE = "$remove", o.PREINSERT = "$preInsert", o.POSTINSERT = "$postInsert", o.UNSET = "$unset", o.CLEAR_ALL = "$clearAll", (a = b || (b = {})).IDENTIFY = "$identify", a.GROUP_IDENTIFY = "$groupidentify", a.REVENUE = "revenue_amount";
            var tk = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, i = J(),
                        o = void 0,
                        a = !1,
                        s = e.trackOn,
                        u = e.trackHistoryChanges,
                        l = e.eventType,
                        c = void 0 === l ? "[Amplitude] Page Viewed" : l,
                        d = function(e) {
                            var t = e;
                            try {
                                t = decodeURI(e)
                            } catch (e) {
                                null == o || o.error("Malformed URI sequence: ", e)
                            }
                            return t
                        },
                        f = function(e) {
                            return q(void 0, void 0, void 0, function() {
                                var t, r, i, o, a, s, u;
                                return B(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return t = t_(), r = tx(), i = eV(n.apiKey), o = d("u" > typeof location && location.href || ""), s = {
                                                event_type: c
                                            }, a = [{}], [4, tP()];
                                        case 1:
                                            return [2, (s.event_properties = U.apply(void 0, [U.apply(void 0, a.concat([l.sent()])), ((u = {
                                                "[Amplitude] Page Domain": "u" > typeof location && location.hostname || "",
                                                "[Amplitude] Page Location": o,
                                                "[Amplitude] Page Path": "u" > typeof location && d(location.pathname) || "",
                                                "[Amplitude] Page Title": eJ(eG),
                                                "[Amplitude] Page URL": o.split("?")[0],
                                                "[Amplitude] Min Page Y": t,
                                                "[Amplitude] Viewport Width": r
                                            })[eq] = i, u["[Amplitude] Page View ID"] = e, u)]), s)]
                                    }
                                })
                            })
                        },
                        p = function() {
                            return void 0 === s || "function" == typeof s && s()
                        },
                        h = "u" > typeof location ? location.href : null,
                        v = function() {
                            q(void 0, void 0, void 0, function() {
                                var e, i, a, s, l;
                                return B(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (i = tA(u, e = location.href, h || "") && p(), h = e, !i) return [3, 4];
                                            if (a = void 0, r && (a = e5(n.apiKey, tT())), null == o || o.log("Tracking page view event"), null != t) return [3, 1];
                                            return [3, 3];
                                        case 1:
                                            return l = (s = t).track, [4, f(a)];
                                        case 2:
                                            l.apply(s, [c.sent()]), c.label = 3;
                                        case 3:
                                            c.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        };
                    return {
                        name: "@amplitude/plugin-page-view-tracking-browser",
                        type: "enrichment",
                        setup: function(e, s) {
                            return q(void 0, void 0, void 0, function() {
                                var u, l, c;
                                return B(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (t = s, n = e, (o = e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"), a = !0, eV(n.apiKey), i) {
                                                try {
                                                    r = new e8(i.sessionStorage)
                                                } catch (e) {
                                                    null == o || o.debug("sessionStorage is not available in this environment.")
                                                }
                                                i.addEventListener("popstate", v), ["pushState", "replaceState"].forEach(function(e) {
                                                    i.history[e] = new Proxy(i.history[e], {
                                                        apply: function(t, n, r) {
                                                            var i = location.href,
                                                                o = t.apply(n, r);
                                                            return a && ("pushState" === e || location.href !== i) && v(), o
                                                        }
                                                    })
                                                })
                                            }
                                            if (!p()) return [3, 2];
                                            return o.log("Tracking page view event"), u = void 0, r && (u = e5(n.apiKey, tT())), c = (l = t).track, [4, f(u)];
                                        case 1:
                                            c.apply(l, [d.sent()]), d.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                var t, i;
                                return B(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!("attribution" === s && tI(e))) return [3, 2];
                                            return null == o || o.log("Enriching campaign event to page view event with campaign parameters"), t = void 0, r && (t = e7(n.apiKey)), [4, f(t)];
                                        case 1:
                                            e.event_type = (i = a.sent()).event_type, e.event_properties = U(U({}, e.event_properties), i.event_properties), a.label = 2;
                                        case 2:
                                            return n && e.event_type === c && (n.pageCounter = n.pageCounter ? n.pageCounter + 1 : 1, e.event_properties = U(U({}, e.event_properties), {
                                                "[Amplitude] Page Counter": n.pageCounter
                                            })), [2, e]
                                    }
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(e) {
                                    return i && (i.removeEventListener("popstate", v), a = !1), [2]
                                })
                            })
                        }
                    }
                },
                tT = function() {
                    return "u" > typeof location && location.href || ""
                },
                t_ = function() {
                    var e, t, n = J();
                    return n ? Math.floor(null != (t = null != (e = n.scrollY) ? e : n.pageYOffset) ? t : 0) : 0
                },
                tx = function() {
                    var e, t = J();
                    return t && null != (e = t.innerWidth) ? e : 0
                },
                tP = function() {
                    return q(void 0, void 0, void 0, function() {
                        var e;
                        return B(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = e9, [4, new tS().parse()];
                                case 1:
                                    return [2, e.apply(void 0, [t.sent()])]
                            }
                        })
                    })
                },
                tI = function(e) {
                    if ("$identify" === e.event_type && e.user_properties) {
                        var t = e.user_properties,
                            n = t[y.SET] || {},
                            r = t[y.UNSET] || {},
                            i = z(z([], H(Object.keys(n)), !1), H(Object.keys(r)), !1);
                        return Object.keys(tb).every(function(e) {
                            return i.includes(e)
                        })
                    }
                    return !1
                },
                tA = function(e, t, n) {
                    if ("pathOnly" !== e) return t !== n;
                    if ("" == n) return !0;
                    var r = new URL(t),
                        i = new URL(n);
                    return r.origin + r.pathname !== i.origin + i.pathname
                },
                tC = "[Amplitude]",
                tO = "".concat(tC, " Form Started"),
                tR = "".concat(tC, " Form Submitted"),
                tD = "".concat(tC, " File Downloaded"),
                tL = "session_start",
                tN = "session_end",
                tM = "".concat(tC, " File Extension"),
                tj = "".concat(tC, " File Name"),
                tU = "".concat(tC, " Link ID"),
                tF = "".concat(tC, " Link Text"),
                tq = "".concat(tC, " Link URL"),
                tB = "".concat(tC, " Form ID"),
                tV = "".concat(tC, " Form Name"),
                tH = "".concat(tC, " Form Destination"),
                tz = "cookie",
                tK = function() {
                    var e, t, n = [],
                        r = function(e, t, r) {
                            e.addEventListener(t, r), n.push({
                                element: e,
                                type: t,
                                handler: r
                            })
                        },
                        i = function() {
                            n.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), n = []
                        };
                    return {
                        name: "@amplitude/plugin-form-interaction-tracking-browser",
                        type: "enrichment",
                        setup: function(n, i) {
                            return q(void 0, void 0, void 0, function() {
                                var o, a;
                                return B(this, function(s) {
                                    return t = eO(n), o = function() {
                                        if (!i) return void n.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
                                        if ("u" > typeof document) {
                                            var o = new WeakSet,
                                                a = function(e) {
                                                    if (!o.has(e)) {
                                                        o.add(e);
                                                        var a = !1;
                                                        r(e, "change", function() {
                                                            var t, n = tY(e);
                                                            a || i.track(tO, ((t = {})[tB] = tW(e.id), t[tV] = tW(e.name), t[tH] = n, t)), a = !0
                                                        }), r(e, "submit", function(r) {
                                                            var o, s, u = tY(e);
                                                            if (a || i.track(tO, ((o = {})[tB] = tW(e.id), o[tV] = tW(e.name), o[tH] = u, o)), a = !0, (null == t ? void 0 : t.shouldTrackSubmit) !== void 0)
                                                                if ("function" == typeof t.shouldTrackSubmit && "u" > typeof SubmitEvent && r instanceof SubmitEvent) try {
                                                                    if (!t.shouldTrackSubmit(r)) return
                                                                } catch (e) {
                                                                    n.loggerProvider.warn("shouldTrackSubmit callback threw an error, proceeding with tracking.")
                                                                } else n.loggerProvider.warn("shouldTrackSubmit is ignored because it is not a function or event is not a SubmitEvent.");
                                                            i.track(tR, ((s = {})[tB] = tW(e.id), s[tV] = tW(e.name), s[tH] = u, s)), a = !1
                                                        })
                                                    }
                                                };
                                            Array.from(document.getElementsByTagName("form")).forEach(a), "u" > typeof MutationObserver && (e = new MutationObserver(function(e) {
                                                e.forEach(function(e) {
                                                    e.addedNodes.forEach(function(e) {
                                                        try {
                                                            if ("FORM" === e.nodeName && a(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll) {
                                                                var t = e.querySelectorAll("form");
                                                                null == t || t.forEach(a)
                                                            }
                                                        } catch (e) {
                                                            n.loggerProvider.warn("Failed to track form interactions for an added node: ".concat(String(e)))
                                                        }
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }, "complete" === document.readyState ? o() : (a = J()) ? a.addEventListener("load", o) : n.loggerProvider.debug("Form interaction tracking is not installed because global is undefined."), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return null == e || e.disconnect(), i(), [2]
                                })
                            })
                        }
                    }
                },
                tW = function(e) {
                    if ("string" == typeof e) return e
                },
                tY = function(e) {
                    var t = e.getAttribute("action");
                    try {
                        t = new URL(encodeURI(null != t ? t : ""), window.location.href).href
                    } catch (e) {}
                    return t
                },
                t$ = function() {
                    var e, t = [],
                        n = function(e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function() {
                            t.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-file-download-tracking-browser",
                        type: "enrichment",
                        setup: function(t, r) {
                            return q(void 0, void 0, void 0, function() {
                                var i, o;
                                return B(this, function(a) {
                                    return i = function() {
                                        if (!r) return void t.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
                                        if ("u" > typeof document) {
                                            var i = function(e) {
                                                    try {
                                                        t = new URL(e.href, window.location.href)
                                                    } catch (e) {
                                                        return
                                                    }
                                                    var t, i = o.exec(t.href),
                                                        a = null == i ? void 0 : i[1];
                                                    a && n(e, "click", function() {
                                                        var n;
                                                        a && r.track(tD, ((n = {})[tM] = a, n[tj] = t.pathname, n[tU] = e.id, n[tF] = e.text, n[tq] = e.href, n))
                                                    })
                                                },
                                                o = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)(\?.+)?$/;
                                            Array.from(document.getElementsByTagName("a")).forEach(i), "u" > typeof MutationObserver && (e = new MutationObserver(function(e) {
                                                e.forEach(function(e) {
                                                    e.addedNodes.forEach(function(e) {
                                                        try {
                                                            if ("A" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll) {
                                                                var n = e.querySelectorAll("a");
                                                                null == n || n.forEach(i)
                                                            }
                                                        } catch (e) {
                                                            t.loggerProvider.warn("Failed to track file downloads for an added node: ".concat(String(e)))
                                                        }
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }, "complete" === document.readyState ? i() : (o = J()) ? o.addEventListener("load", i) : t.loggerProvider.debug("File download tracking is not installed because global is undefined."), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                };

            function tG(e, t, n) {
                var r, i, o = [];
                try {
                    for (var a = V(null != t ? t : []), s = a.next(); !s.done; s = a.next()) {
                        var u = s.value;
                        try {
                            o.push(new RegExp(u))
                        } catch (e) {
                            n.warn("Invalid regex pattern: ".concat(u), e)
                        }
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = a.return) && i.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return e.concat(o)
            }
            var tJ = ["a", "button", "input", "select", "textarea", "label", "video", "audio", '[contenteditable="true" i]', "[data-amp-default-track]", ".amp-default-track"],
                tX = "data-amp-track-",
                tQ = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
                tZ = n(14220),
                t0 = n.n(tZ);

            function t1(e, t) {
                return new(t0())(function(n) {
                    e.subscribe({
                        next: function(e) {
                            t(e).then(function(e) {
                                return n.next(e)
                            }).catch(function(e) {
                                return n.error(e)
                            })
                        },
                        error: function(e) {
                            n.error(e)
                        },
                        complete: function() {
                            n.complete()
                        }
                    })
                })
            }

            function t2(e, t) {
                return new(t0())(function(n) {
                    var r = !1,
                        i = new Set,
                        o = function() {
                            var e, t;
                            r = !0;
                            try {
                                for (var n = V(i), o = n.next(); !o.done; o = n.next()) {
                                    var a = o.value;
                                    try {
                                        a.unsubscribe()
                                    } catch (e) {}
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = n.return) && t.call(n)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            i.clear()
                        },
                        a = function(e) {
                            var t = e.subscribe({
                                next: function(e) {
                                    r || n.next(e)
                                },
                                error: function(e) {
                                    r || (r = !0, n.error(e), o())
                                },
                                complete: function() {
                                    i.delete(t), r || 0 !== i.size || (n.complete(), o(), r = !0)
                                }
                            });
                            i.add(t)
                        };
                    return a(e), a(t), o
                })
            }

            function t3(e) {
                var t = new Set,
                    n = null;

                function r() {
                    null == n || n.unsubscribe(), n = null, t.clear()
                }
                return new(t0())(function(i) {
                    return t.add(i), null === n && (n = e.subscribe({
                            next: function(e) {
                                try {
                                    for (var n, r, i, o = V(t), a = o.next(); !a.done; a = o.next()) {
                                        var s = a.value;
                                        null == (i = s.next) || i.call(s, e)
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (r = o.return) && r.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            },
                            error: function(e) {
                                try {
                                    for (var n, i, o, a = V(t), s = a.next(); !s.done; s = a.next()) {
                                        var u = s.value;
                                        null == (o = u.error) || o.call(u, e)
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (i = a.return) && i.call(a)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                r()
                            },
                            complete: function() {
                                try {
                                    for (var e, n, i, o = V(t), a = o.next(); !a.done; a = o.next()) {
                                        var s = a.value;
                                        null == (i = s.complete) || i.call(s)
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (n = o.return) && n.call(o)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                r()
                            }
                        })),
                        function() {
                            t.delete(i), 0 === t.size && n && (n.unsubscribe(), n = null)
                        }
                })
            }
            var t4 = "https://app.amplitude.com",
                t5 = {
                    US: t4,
                    EU: "https://app.eu.amplitude.com",
                    STAGING: "https://apps.stag2.amplitude.com"
                },
                t6 = "__AMPLITUDE_MESSENGER_INSTANCE__",
                t7 = "__AMPLITUDE_MESSENGER__",
                t8 = function() {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).origin;
                        this[w] = !0, this.isSetup = !1, this.messageHandler = null, this.requestCallbacks = {}, this.actionHandlers = new Map, this.pendingMessages = new Map, this.scriptLoadPromises = new Map, this.endpoint = void 0 === t ? t4 : t
                    }
                    return e.prototype.notify = function(e) {
                        var t, n, r, i;
                        null == (n = null == (t = this.logger) ? void 0 : t.debug) || n.call(t, "Message sent: ", JSON.stringify(e)), null == (i = null == (r = window.opener) ? void 0 : r.postMessage) || i.call(r, e, this.endpoint)
                    }, e.prototype.sendRequest = function(e, t, n) {
                        var r = this;
                        void 0 === n && (n = {
                            timeout: 15e3
                        });
                        var i = "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            o = {
                                id: i,
                                action: e,
                                args: t
                            };
                        return new Promise(function(t, a) {
                            r.requestCallbacks[i] = {
                                resolve: t,
                                reject: a
                            }, r.notify(o), n.timeout > 0 && setTimeout(function() {
                                a(Error("".concat(e, " timed out (id: ").concat(i, ")"))), delete r.requestCallbacks[i]
                            }, n.timeout)
                        })
                    }, e.prototype.handleResponse = function(e) {
                        var t;
                        if (!this.requestCallbacks[e.id]) {
                            null == (t = this.logger) || t.warn("No callback found for request id: ".concat(e.id));
                            return
                        }
                        this.requestCallbacks[e.id].resolve(e.responseData), delete this.requestCallbacks[e.id]
                    }, e.prototype.registerActionHandler = function(e, t) {
                        this.actionHandlers.has(e) && (null == (o = null == (i = this.logger) ? void 0 : i.warn) || o.call(i, "Overwriting existing action handler for: ".concat(e))), this.actionHandlers.set(e, t);
                        var n, r, i, o, a = this.pendingMessages.get(e);
                        if (a) {
                            this.pendingMessages.delete(e);
                            try {
                                for (var s = V(a), u = s.next(); !u.done; u = s.next()) {
                                    var l = u.value;
                                    t(l)
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    u && !u.done && (r = s.return) && r.call(s)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    }, e.prototype.loadScriptOnce = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (t = this.scriptLoadPromises.get(e)) return [2, t];
                                        n = (document.querySelector('script[src="'.concat(CSS.escape(e), '"]')) ? Promise.resolve({
                                            status: !0
                                        }) : new Promise(function(t, n) {
                                            var r;
                                            try {
                                                var i = document.createElement("script");
                                                i.type = "text/javascript", i.async = !0, i.src = e, i.addEventListener("load", function() {
                                                    t({
                                                        status: !0
                                                    })
                                                }, {
                                                    once: !0
                                                }), i.addEventListener("error", function() {
                                                    n({
                                                        status: !1,
                                                        message: "Failed to load the script ".concat(e)
                                                    })
                                                }), null == (r = document.head) || r.appendChild(i)
                                            } catch (e) {
                                                n(e)
                                            }
                                        })).then(function() {}), this.scriptLoadPromises.set(e, n), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        throw r = i.sent(), this.scriptLoadPromises.delete(e), r;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setup = function(e) {
                        var t, n, r = this,
                            i = void 0 === e ? {} : e,
                            o = i.logger,
                            a = i.endpoint;
                        o && (this.logger = o), a && this.endpoint === t4 && (this.endpoint = a), this.isSetup || (this.isSetup = !0, null == (n = null == (t = this.logger) ? void 0 : t.debug) || n.call(t, "Setting up messenger"), this.messageHandler = function(e) {
                            if (null == (n = null == (t = r.logger) ? void 0 : t.debug) || n.call(t, "Message received: ", JSON.stringify(e)), r.endpoint === e.origin) {
                                var t, n, i, o, a, s = e.data,
                                    u = null == s ? void 0 : s.action;
                                if (u)
                                    if ("id" in s && s.id) null == (o = null == (i = r.logger) ? void 0 : i.debug) || o.call(i, "Received Response to previous request: ", JSON.stringify(e)), r.handleResponse(s);
                                    else {
                                        if ("ping" === u) return void r.notify({
                                            action: "pong"
                                        });
                                        var l = r.actionHandlers.get(u);
                                        if (l) l(s.data);
                                        else {
                                            var c = null != (a = r.pendingMessages.get(u)) ? a : [];
                                            c.push(s.data), r.pendingMessages.set(u, c)
                                        }
                                    }
                            }
                        }, window.addEventListener("message", this.messageHandler), this.notify({
                            action: "page-loaded"
                        }))
                    }, e.prototype.destroy = function() {
                        this.messageHandler && (window.removeEventListener("message", this.messageHandler), this.messageHandler = null), this.isSetup = !1, this.actionHandlers.clear(), this.pendingMessages.clear(), this.requestCallbacks = {}, this.scriptLoadPromises.clear();
                        var e = J();
                        (null == e ? void 0 : e[t7]) === this && delete e[t7]
                    }, e
                }();
            w = t6;
            var t9 = ["desktop", "tablet", "mobile"],
                ne = function(e) {
                    if ("string" == typeof e) return t9.includes(e) ? e : void 0
                },
                nt = "__AMPLITUDE_BACKGROUND_CAPTURE__",
                nn = "1.31.1",
                nr = "[Amplitude] Element Clicked",
                ni = "[Amplitude] Element Tag",
                no = "[Amplitude] Element Text",
                na = "[Amplitude] Page URL",
                ns = "[Amplitude] Viewport Height",
                nu = "[Amplitude] Viewport Width",
                nl = "[Amplitude] Page View ID",
                nc = "data-amp-mask-attributes",
                nd = "data-amp-internal-shadow",
                nf = function(e, t) {
                    return !t || !t.length || t.some(function(t) {
                        return "string" == typeof t ? e === t : e.match(t)
                    })
                },
                np = function(e, t) {
                    var n = e;
                    try {
                        n = decodeURI(e)
                    } catch (e) {
                        null == t || t.error("Malformed URI sequence: ", e)
                    }
                    return n
                },
                nh = ":scope > ";

            function nv(e) {
                var t;
                return !!("u" > typeof ShadowRoot && e instanceof ShadowRoot) || null != e && 11 === e.nodeType && (null == (t = e.host) ? void 0 : t.nodeType) === 1
            }

            function ng(e, t) {
                var n, r, i, o;
                return B(this, function(a) {
                    switch (a.label) {
                        case 0:
                            n = e, r = 0, i = 0, a.label = 1;
                        case 1:
                            if (!(null !== n && i < 1024)) return [3, 3];
                            return i += 1, [4, n];
                        case 2:
                            if (a.sent(), n.parentElement) return n = n.parentElement, [3, 1];
                            if (r < t && "function" == typeof n.getRootNode && (o = function(e) {
                                    if (e.parentElement) return e.parentElement;
                                    var t = e.getRootNode();
                                    return nv(t) ? t.host : null
                                }(n)) && o !== n) return r += 1, n = o, [3, 1];
                            return [3, 3];
                        case 3:
                            return [2]
                    }
                })
            }

            function nm(e, t) {
                var n = [];
                if (t <= 0) return n;
                for (var r = [
                        [e, 0]
                    ], i = 0; r.length && i < 5e4;) {
                    i += 1;
                    var o = H(r.pop(), 2),
                        a = o[0],
                        s = o[1],
                        u = a.shadowRoot;
                    if (u && s + 1 <= t) {
                        n.push({
                            root: u,
                            depth: s + 1
                        });
                        for (var l = u.children, c = 0; c < l.length; c++) r.push([l[c], s + 1])
                    }
                    for (var d = a.children, c = 0; c < d.length; c++) r.push([d[c], s])
                }
                return n
            }

            function ny(e, t) {
                for (var n = [], r = e, i = 0; null !== r && i < 1024;) {
                    i += 1;
                    var o = function(e) {
                        var t, n = e.getRootNode();
                        return nv(n) ? n : null != (t = e.ownerDocument) ? t : document
                    }(r);
                    n.push({
                        root: o,
                        target: r
                    });
                    var a = r.getRootNode();
                    if (!nv(a)) break;
                    r = a.host
                }
                var s = n.length - 1,
                    u = !1,
                    l = n;
                return s > t && (l = n.slice(s - t), u = !0), {
                    segments: l.reverse(),
                    truncated: u
                }
            }

            function nb(e, t) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.tagName === e.tagName && (n += 1, i === e)) return n
                }
                return 1
            }
            var nw = Object.freeze({
                    enabled: !1,
                    maxDepth: 0
                }),
                nE = function(e) {
                    var t, n = null != (t = e.maxShadowDomDepth) ? t : 1;
                    return !e.shadowDomEnabled || n <= 0 ? nw : Object.freeze({
                        enabled: !0,
                        maxDepth: n
                    })
                },
                nS = function() {
                    var e = nw,
                        t = new Set,
                        n = function(e) {
                            var n, r;
                            try {
                                for (var i = V(z([], H(t), !1)), o = i.next(); !o.done; o = i.next()) {
                                    var a = o.value;
                                    try {
                                        a(e)
                                    } catch (e) {}
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (r = i.return) && r.call(i)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            t.clear()
                        };
                    return {
                        get: function() {
                            return e
                        },
                        arm: function(t) {
                            return e.enabled || !t.enabled || (e = t, n(t)), e
                        },
                        onArm: function(n) {
                            if (e.enabled) {
                                var r = e;
                                try {
                                    n(r)
                                } catch (e) {}
                                return function() {}
                            }
                            return t.add(n),
                                function() {
                                    t.delete(n)
                                }
                        }
                    }
                },
                nk = ["input", "select", "textarea"],
                nT = function(e, t) {
                    var n, r = null == (n = null == window ? void 0 : window.getComputedStyle) ? void 0 : n.call(window, e);
                    return (null == r ? void 0 : r.getPropertyValue("cursor")) === "pointer" && "click" === t
                },
                n_ = function(e) {
                    var t = e.pageUrlAllowlist,
                        n = e.pageUrlExcludelist;
                    return !(n && n.length > 0 && nf(window.location.href, n)) && !!nf(window.location.href, t)
                },
                nx = function(e, t) {
                    return function(n, r) {
                        var i, o, a = e.shouldTrackEventResolver,
                            s = null == (o = null == (i = null == r ? void 0 : r.tagName) ? void 0 : i.toLowerCase) ? void 0 : o.call(i);
                        if (!s) return !1;
                        if (a) return a(n, r);
                        if (!n_(e)) return !1;
                        var u = String(null == r ? void 0 : r.getAttribute("type")) || "";
                        if ("string" == typeof u) switch (u.toLowerCase()) {
                            case "hidden":
                            case "password":
                                return !1
                        }
                        if (t && !t.some(function(e) {
                                var t;
                                return !!(null == (t = null == r ? void 0 : r.matches) ? void 0 : t.call(r, e))
                            })) return !1;
                        switch (s) {
                            case "input":
                            case "select":
                            case "textarea":
                                return "change" === n || "click" === n;
                            default:
                                return "click" === n
                        }
                    }
                },
                nP = function(e) {
                    if (!(e instanceof HTMLElement)) return !1;
                    var t = e.getAttribute("contenteditable");
                    return null !== t && "false" !== t.toLowerCase()
                },
                nI = function(e) {
                    if (nP(e)) return !0;
                    var t = e.closest("[contenteditable]");
                    return !!t && nP(t)
                },
                nA = function(e) {
                    var t, n, r = null == (n = null == (t = null == e ? void 0 : e.tagName) ? void 0 : t.toLowerCase) ? void 0 : n.call(t);
                    return !nk.includes(r) && !nP(e)
                },
                nC = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        var r = e[n];
                        return null != r && ("object" != typeof r || 0 !== Object.keys(r).length) && ("string" != typeof r || 0 !== r.trim().length) && (t[n] = r), t
                    }, {})
                },
                nO = function(e, t, n) {
                    return (void 0 === n && (n = nw), n.enabled) ? nD(e, t, n.maxDepth) : nR(e, t)
                },
                nR = function(e, t) {
                    return e ? t.some(function(t) {
                        var n;
                        return null == (n = null == e ? void 0 : e.matches) ? void 0 : n.call(e, t)
                    }) ? e : nR(null == e ? void 0 : e.parentElement, t) : null
                },
                nD = function(e, t, n) {
                    if (!e) return null;
                    var r, i, o = function(e) {
                        if (t.some(function(t) {
                                var n;
                                return null == (n = null == e ? void 0 : e.matches) ? void 0 : n.call(e, t)
                            })) return {
                            value: e
                        }
                    };
                    try {
                        for (var a = V(ng(e, n)), s = a.next(); !s.done; s = a.next()) {
                            var u = s.value,
                                l = o(u);
                            if ("object" == typeof l) return l.value
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return null
                },
                nL = function(e, t, n) {
                    return void 0 === n && (n = nw), n.enabled ? nM(e, t, n.maxDepth) : nN(e, t)
                },
                nN = function(e, t) {
                    var n = [];
                    return t && e.querySelectorAll(t).forEach(function(e) {
                        return n.push(e)
                    }), n
                },
                nM = function(e, t, n) {
                    var r = nN(e, t),
                        i = e instanceof Document ? e.documentElement : e;
                    return i && nm(i, n).forEach(function(e) {
                        e.root.querySelectorAll(t).forEach(function(e) {
                            return r.push(e)
                        })
                    }), r
                },
                nj = function(e, t) {
                    if (void 0 === t && (t = nw), !t.enabled) return e.target;
                    var n, r, i = null == (n = e.composedPath) ? void 0 : n.call(e),
                        o = null != (r = e.target) ? r : null;
                    if (!i || 0 === i.length) return o;
                    var a = i[0];
                    if (!(a instanceof Element)) return null != a ? a : o;
                    var s = ny(a, t.maxDepth),
                        u = s.segments;
                    return s.truncated && u.length > 0 ? u[u.length - 1].target : a
                },
                nU = function(e) {
                    return null !== e.event.target && !!e.closestTrackedAncestor
                };

            function nF(e) {
                if (!e) return "";
                try {
                    var t = new URL(e);
                    return t.search = "", np(t.href)
                } catch (t) {
                    return np(e)
                }
            }

            function nq(e) {
                var t, n;
                return void 0 === e && (e = J()), nF(null != (n = null == (t = null == e ? void 0 : e.location) ? void 0 : t.href) ? n : "")
            }(s = S || (S = {}))[s.LEFT_OR_TOUCH_CONTACT = 0] = "LEFT_OR_TOUCH_CONTACT", s[s.MIDDLE = 1] = "MIDDLE", s[s.RIGHT = 2] = "RIGHT";
            var nB = "__AMPLITUDE_VISUAL_TAGGING__",
                nV = function() {
                    var e, t, n, r, i = J();
                    return {
                        x: Math.floor(null != (t = null != (e = null == i ? void 0 : i.scrollX) ? e : null == i ? void 0 : i.pageXOffset) ? t : 0),
                        y: Math.floor(null != (r = null != (n = null == i ? void 0 : i.scrollY) ? n : null == i ? void 0 : i.pageYOffset) ? r : 0)
                    }
                },
                nH = J(),
                nz = null == nH ? void 0 : nH.console,
                nK = {},
                nW = {},
                nY = !1,
                n$ = function(e, t) {
                    if (!nz || "function" != typeof nz[e] || !nW[e] && (nW[e] = nz[e], nz[e] = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            try {
                                if (nK[e] && !nY) {
                                    nY = !0;
                                    var r = nK[e];
                                    r && r.forEach(function(n) {
                                        try {
                                            n(e, t)
                                        } catch (e) {}
                                    })
                                }
                            } catch (e) {}
                            return nY = !1, nW[e].apply(nz, t)
                        }, 0)) return Error("Console override failed");
                    nK[e] ? nK[e].push(t) : nK[e] = [t]
                },
                nG = function(e) {
                    var t, n;
                    try {
                        for (var r = V(Object.values(nK)), i = r.next(); !i.done; i = r.next())
                            for (var o = i.value, a = o.length - 1; a >= 0; a--)
                                if (o[a] === e) {
                                    o.splice(a, 1);
                                    break
                                }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                },
                nJ = J(),
                nX = function(e) {
                    return e.get()
                },
                nQ = {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0
                },
                nZ = function(e) {
                    return new(t0())(e ? function(t) {
                        var n, r = new WeakSet,
                            i = new WeakMap,
                            o = function(e, t) {
                                r.has(e) || (r.add(e), nv(e) && i.set(e, t), u.observe(e, nQ))
                            },
                            a = function(e, t, n) {
                                var r = n - t;
                                r <= 0 || nm(e, r).forEach(function(e) {
                                    return o(e.root, t + e.depth)
                                })
                            },
                            s = function(e) {
                                var t = e.getRootNode();
                                if (!nv(t)) return 0;
                                var n = i.get(t);
                                return null != n ? n : 0
                            },
                            u = new MutationObserver(function(n) {
                                var r, i;
                                t.next(n);
                                try {
                                    var o = nX(e);
                                    if (!o.enabled) return;
                                    try {
                                        for (var u = V(n), l = u.next(); !l.done; l = u.next()) {
                                            var c = l.value;
                                            ! function(e) {
                                                var t = s(e.target);
                                                e.addedNodes.forEach(function(e) {
                                                    e instanceof Element && a(e, t, o.maxDepth)
                                                })
                                            }(c)
                                        }
                                    } catch (e) {
                                        r = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            l && !l.done && (i = u.return) && i.call(u)
                                        } finally {
                                            if (r) throw r.error
                                        }
                                    }
                                } catch (e) {}
                            });
                        if (document.body) {
                            var l = document.body;
                            o(l, 0), n = e.onArm(function(e) {
                                a(l, 0, e.maxDepth)
                            })
                        }
                        return function() {
                            null == n || n(), u.disconnect()
                        }
                    } : function(e) {
                        var t = new MutationObserver(function(t) {
                            e.next(t)
                        });
                        return document.body && t.observe(document.body, {
                                childList: !0,
                                attributes: !0,
                                characterData: !0,
                                subtree: !0
                            }),
                            function() {
                                return t.disconnect()
                            }
                    })
                },
                n0 = function(e) {
                    return void 0 === e && (e = "click"), new(t0())(function(t) {
                        var n, r = function(e) {
                            t.next(e)
                        };
                        return null == (n = J()) || n.document.addEventListener(e, r, {
                                capture: !0
                            }),
                            function() {
                                var t;
                                null == (t = J()) || t.document.removeEventListener(e, r, {
                                    capture: !0
                                })
                            }
                    })
                },
                n1 = function(e, t, n, r) {
                    var i = "function" == typeof n ? n : void 0,
                        o = "function" == typeof n ? r : n;
                    return new(t0())(function(n) {
                        var r = J();
                        if (!(null == r ? void 0 : r.IntersectionObserver)) return function() {};
                        var a = new IntersectionObserver(function(e) {
                                e.forEach(function(e) {
                                    n.next(e)
                                })
                            }, {
                                root: null,
                                rootMargin: "0px",
                                threshold: 0
                            }),
                            s = t.join(","),
                            u = function(e) {
                                e instanceof Element && e.matches(s) && a.observe(e), e.querySelectorAll(s).forEach(function(e) {
                                    a.observe(e)
                                })
                            },
                            l = function(e) {
                                if (o) try {
                                    nL(e, s, nX(o)).forEach(function(e) {
                                        a.observe(e)
                                    })
                                } catch (e) {}
                            },
                            c = function() {
                                var e = null == r ? void 0 : r.document;
                                if (e) {
                                    var t = [];
                                    try {
                                        t = o && nX(o).enabled ? nL(e, s, nX(o)) : e.querySelectorAll(s)
                                    } catch (e) {
                                        return
                                    }
                                    Array.from(t).forEach(function(e) {
                                        a.unobserve(e), a.observe(e)
                                    })
                                }
                            };
                        null == i || i(c), c();
                        var d = null == o ? void 0 : o.onArm(function() {
                                (null == r ? void 0 : r.document) && l(r.document)
                            }),
                            f = e.subscribe(function(e) {
                                return e.event.forEach(function(e) {
                                    return e.addedNodes.forEach(function(e) {
                                        if (e instanceof DocumentFragment) return void u(e);
                                        if (e instanceof Element) {
                                            if (!o || !nX(o).enabled) return void u(e);
                                            try {
                                                e.matches(s) && a.observe(e)
                                            } catch (e) {}
                                            l(e)
                                        }
                                    })
                                })
                            });
                        return function() {
                            null == i || i(void 0), null == d || d(), f.unsubscribe(), a.disconnect()
                        }
                    })
                },
                n2 = function() {
                    var e = t2(new(t0())(function(e) {
                        var t = function(t) {
                            if (t instanceof ErrorEvent) {
                                var n = {
                                    kind: "error"
                                };
                                t.error instanceof Error || t.error instanceof DOMException ? n = U(U({}, n), {
                                    message: t.error.message,
                                    stack: t.error.stack,
                                    filename: t.filename,
                                    lineNumber: t.lineno,
                                    columnNumber: t.colno
                                }) : "string" == typeof t.error && (n.message = t.error), e.next(n)
                            }
                        };
                        return nJ.addEventListener("error", t),
                            function() {
                                nJ.removeEventListener("error", t)
                            }
                    }), new(t0())(function(e) {
                        var t = function(t) {
                            var n = {
                                kind: "unhandledrejection"
                            };
                            t.reason instanceof Error || t.reason instanceof DOMException ? (n.message = t.reason.message, n.stack = t.reason.stack) : "string" == typeof t.reason && (n.message = t.reason), e.next(n)
                        };
                        return nJ.addEventListener("unhandledrejection", t),
                            function() {
                                nJ.removeEventListener("unhandledrejection", t)
                            }
                    }));
                    return t2(e, new(t0())(function(e) {
                        var t = function(t) {
                            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                            var i = void 0;
                            Array.isArray(n[0]) && "string" == typeof n[0][0] && (i = n[0][0]), e.next({
                                kind: "console",
                                message: i
                            })
                        };
                        return n$("error", t),
                            function() {
                                nG(t)
                            }
                    }))
                },
                n3 = function(e, t) {
                    try {
                        if ("[Amplitude] Element Text" === t.subprop_key) return "is" === t.subprop_op && t.subprop_value.includes(e.targetElementProperties["[Amplitude] Element Text"]);
                        if ("[Amplitude] Element Hierarchy" === t.subprop_key) return "autotrack css match" === t.subprop_op && !!e.closestTrackedAncestor.closest(t.subprop_value.toString())
                    } catch (e) {}
                    return !1
                },
                n4 = function(e, t) {
                    try {
                        if ("DOM_ELEMENT" === e.sourceType) {
                            var n = document.documentElement;
                            if (e.scope && t && (n = t.closest(e.scope)), n && e.selector) return n.querySelector(e.selector);
                            return n
                        }
                    } catch (e) {}
                },
                n5 = function(e, t, n) {
                    e.forEach(function(e) {
                        if ("string" != typeof e && "ATTACH_EVENT_PROPERTY" === e.actionType) {
                            var r = n.extractDataFromDataSource(e.dataSource, t.closestTrackedAncestor);
                            t.targetElementProperties[e.destinationKey] = r
                        }
                    })
                },
                n6 = {
                    "[Amplitude] Element Clicked": "click",
                    "[Amplitude] Element Changed": "change"
                },
                n7 = function(e) {
                    var t, n, r, i, o = Object.values(n6).reduce(function(e, t) {
                        return e[t] = new Set, e
                    }, {});
                    if (!e) return o;
                    try {
                        for (var a = V(e), s = a.next(); !s.done; s = a.next()) {
                            var u = s.value;
                            try {
                                try {
                                    for (var l = (r = void 0, V(u.definition)), c = l.next(); !c.done; c = l.next()) {
                                        var d = n6[c.value.event_type];
                                        d && o[d].add(u.id)
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (i = l.return) && i.call(l)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                            } catch (e) {}
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return o
                },
                n8 = function(e) {
                    var t, n, r, i, o = new Map;
                    try {
                        for (var a = V(e), s = a.next(); !s.done; s = a.next()) {
                            var u = s.value;
                            try {
                                for (var l = (r = void 0, V(u.conditions)), c = l.next(); !c.done; c = l.next()) {
                                    var d = c.value;
                                    if ("LABELED_EVENT" === d.type) {
                                        var f = d.match.eventId,
                                            p = o.get(f);
                                        p || (p = [], o.set(f, p)), p.push(u)
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (i = l.return) && i.call(l)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return o
                },
                n9 = function(e, t) {
                    var n, r, i, o, a = new Set;
                    try {
                        for (var s = V(e), u = s.next(); !u.done; u = s.next()) {
                            var l = u.value,
                                c = t.get(l.id);
                            if (c) try {
                                for (var d = (i = void 0, V(c)), f = d.next(); !f.done; f = d.next()) {
                                    var p = f.value;
                                    a.add(p)
                                }
                            } catch (e) {
                                i = {
                                    error: e
                                }
                            } finally {
                                try {
                                    f && !f.done && (o = d.return) && o.call(d)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (r = s.return) && r.call(s)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return Array.from(a)
                },
                re = function() {
                    function e(e, t, n, r) {
                        this.groupedLabeledEvents = e, this.labeledEventToTriggerMap = t, this.dataExtractor = n, this.options = r
                    }
                    return e.prototype.evaluate = function(e) {
                        var t, n, r = this.options.pageActions;
                        if (!r) return e;
                        var i = n9(Array.from(this.groupedLabeledEvents[e.type]).map(function(e) {
                            return r.labeledEvents[e]
                        }).filter(function(t) {
                            return t.definition.some(function(t) {
                                return n6[t.event_type] === e.type && t.filters.every(function(t) {
                                    return n3(e, t)
                                })
                            })
                        }), this.labeledEventToTriggerMap);
                        try {
                            for (var o = V(i), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                n5(s.actions, e, this.dataExtractor)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return e
                    }, e.prototype.update = function(e, t, n) {
                        this.groupedLabeledEvents = e, this.labeledEventToTriggerMap = t, this.options = n
                    }, e
                }(),
                rt = new Set(["id", "class", "style", "value", "onclick", "onchange", "oninput", "onblur", "onsubmit", "onfocus", "onkeydown", "onkeyup", "onkeypress", "data-reactid", "data-react-checksum", "data-reactroot", nc, ez, nd]),
                rn = ["type"],
                rr = ["svg", "path", "g"],
                ri = ["password", "hidden"];

            function ro(e, t) {
                return (void 0 === t && (t = nw), e) ? t.enabled ? function(e, t) {
                    var n, r, i = [];
                    try {
                        for (var o = V(ng(e, t)), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            if ("HTML" === s.tagName) break;
                            i.push(s)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return i
                }(e, t.maxDepth) : function(e) {
                    var t = [];
                    t.push(e);
                    for (var n = e.parentElement; n && "HTML" !== n.tagName;) t.push(n), n = n.parentElement;
                    return t
                }(e) : []
            }
            var ra = Object.freeze({
                enabled: !1,
                explicitTrackingAttribute: "data-amp-track-id",
                autogeneratedIdPatterns: z([], H([/^:r[0-9a-z]+:$/, /^radix-/, /^headlessui-/, /^mui-/, /^[a-f0-9]{16,}$/i, /-\d{8,}$/, /\d{4,}/]), !1),
                unstableClassPatterns: z([], H([/^(p|m|px|py|mx|my|pt|pb|pl|pr|mt|mb|ml|mr)-\d+$/, /^(w|h|min-w|max-w|min-h|max-h)-/, /^(text|bg|border|ring|fill|stroke)-/, /^(hover|focus|active|disabled|group-hover):/, /^(sm|md|lg|xl|2xl):/, /^z-\d+$/, /^data-\[/, /^\[/, /^css-[a-z0-9]{6,}$/, /^[a-zA-Z]+_[a-zA-Z0-9]{3,}__[a-zA-Z0-9]{5,}$/, /^sc-[a-zA-Z0-9]{6,}$/, /^jsx-\d+$/, /^swiper-slide-(visible|fully-visible|active|prev|next|duplicate)$/, /^is-(active|open|selected|hovered|focused|expanded)$/, /^Mui[A-Z][a-zA-Z]+-(focused|selected|disabled|expanded|focusVisible|active|checked)$/, /^Mui-(selected|focused|disabled|expanded|focusVisible|active|checked)$/, /^data-state-/]), !1),
                maxAncestorWalkDepth: void 0,
                shadowDomEnabled: !1,
                maxShadowDomDepth: 1
            });

            function rs(e) {
                var t;
                return U(U({}, e), {
                    shadowDomEnabled: null != (t = e.shadowDomEnabled) && t,
                    maxShadowDomDepth: rl(e.maxShadowDomDepth)
                })
            }

            function ru(e, t) {
                if (!e) return rc();
                var n = rc();
                return "boolean" == typeof e.enabled && (n.enabled = e.enabled), "string" == typeof e.explicitTrackingAttribute && "" !== e.explicitTrackingAttribute && (n.explicitTrackingAttribute = e.explicitTrackingAttribute), Array.isArray(e.autogeneratedIdPatterns) && (n.autogeneratedIdPatterns = function(e, t) {
                    var n, r, i = [];
                    try {
                        for (var o = V(e), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            try {
                                i.push(new RegExp(s))
                            } catch (e) {
                                var u = e instanceof Error ? e.message : String(e);
                                null == t || t.warn('@amplitude/element-selector: ignoring invalid autogenerated-id pattern "'.concat(s, '" (').concat(u, ")"))
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return i
                }(e.autogeneratedIdPatterns, t)), Array.isArray(e.unstableClassPatterns) && (n.unstableClassPatterns = function(e, t) {
                    var n, r, i = [];
                    try {
                        for (var o = V(e), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            try {
                                i.push(new RegExp(s))
                            } catch (e) {
                                var u = e instanceof Error ? e.message : String(e);
                                null == t || t.warn('@amplitude/element-selector: ignoring invalid unstable-class pattern "'.concat(s, '" (').concat(u, ")"))
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return i
                }(e.unstableClassPatterns, t)), n.maxAncestorWalkDepth = function(e) {
                    if ("number" == typeof e && Number.isFinite(e) && !(e <= 0)) return Math.floor(e)
                }(e.maxAncestorWalkDepth), "boolean" == typeof e.shadowDomEnabled && (n.shadowDomEnabled = e.shadowDomEnabled), n.maxShadowDomDepth = rl(e.maxShadowDomDepth), rs(n)
            }

            function rl(e) {
                return "number" == typeof e && Number.isFinite(e) ? Math.min(Math.max(Math.floor(e), 1), 10) : 1
            }

            function rc() {
                return {
                    enabled: ra.enabled,
                    explicitTrackingAttribute: ra.explicitTrackingAttribute,
                    autogeneratedIdPatterns: z([], H(ra.autogeneratedIdPatterns), !1),
                    unstableClassPatterns: z([], H(ra.unstableClassPatterns), !1),
                    maxAncestorWalkDepth: ra.maxAncestorWalkDepth,
                    shadowDomEnabled: ra.shadowDomEnabled,
                    maxShadowDomDepth: ra.maxShadowDomDepth
                }
            }

            function rd(e, t) {
                var n = e.getAttribute(t.explicitTrackingAttribute);
                if (null !== n && "" === n) return null;
                var r = e.getAttribute("id");
                return null === r || "" === r || ! function(e, t) {
                    var n, r;
                    if (null == e || "" === e) return !1;
                    try {
                        for (var i = V(t), o = i.next(); !o.done; o = i.next())
                            if (o.value.test(e)) return !1
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return !0
                }(r, t.autogeneratedIdPatterns) ? null : r
            }

            function rf(e) {
                var t = globalThis.CSS;
                if (t && "function" == typeof t.escape) return t.escape(e);
                for (var n = String(e), r = n.length, i = "", o = 0; o < r; o++) {
                    var a = n.charCodeAt(o);
                    if (0 === a) {
                        i += "�";
                        continue
                    }
                    if (a >= 1 && a <= 31 || 127 === a || 0 === o && a >= 48 && a <= 57 || 1 === o && a >= 48 && a <= 57 && 45 === n.charCodeAt(0)) {
                        i += "\\".concat(a.toString(16), " ");
                        continue
                    }
                    if (0 === o && 1 === r && 45 === a) {
                        i += "\\-";
                        continue
                    }
                    if (a >= 128 || 45 === a || 95 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122) {
                        i += n.charAt(o);
                        continue
                    }
                    i += "\\".concat(n.charAt(o))
                }
                return i
            }

            function rp(e) {
                var t = e.tagName.toLowerCase(),
                    n = e.parentElement;
                if (null === n) return t;
                var r = function(e, t) {
                    for (var n = 0, r = 0; r < t.children.length; r++) {
                        var i = t.children[r];
                        if (i.tagName === e.tagName && (n += 1, i === e)) return n
                    }
                    return 1
                }(e, n);
                return "".concat(t, ":nth-of-type(").concat(r, ")")
            }
            var rh = [{
                name: "explicitTrackingAttribute",
                try: function(e, t) {
                    var n = t.config.explicitTrackingAttribute,
                        r = e.getAttribute(n);
                    return null === r || "" === r ? null : "[".concat(n, "=").concat(JSON.stringify(r), "]")
                }
            }, {
                name: "stableId",
                try: function(e, t) {
                    var n = rd(e, t.config);
                    return null === n ? null : "".concat(e.tagName.toLowerCase(), "#").concat(rf(n))
                }
            }];

            function rv(e, t, n, r, i) {
                var o;
                try {
                    o = e.querySelectorAll(t)
                } catch (e) {
                    var a = e instanceof Error ? e.message : String(e);
                    return null == i || i.debug('@amplitude/element-selector: strategy "'.concat(r, '" emitted a malformed selector "').concat(t, '" (').concat(a, ")")), !1
                }
                return 1 === o.length && o[0] === n
            }
            var rg = function() {
                    function e(e, t) {
                        this.value = e, this.optimized = t
                    }
                    return e.prototype.toString = function() {
                        return this.value
                    }, e
                }(),
                rm = function(e, t) {
                    if (e.nodeType !== Node.ELEMENT_NODE) return "";
                    for (var n = [], r = e; r;) {
                        var i = ry(r, !!t, r === e);
                        if (!i || (n.push(i), i.optimized)) break;
                        r = r.parentElement
                    }
                    return n.reverse(), n.join(" > ")
                },
                ry = function(e, t, n) {
                    if (e.nodeType !== Node.ELEMENT_NODE) return null;
                    var r, i, o = e.getAttribute("id");
                    if (t) {
                        if (o) return new rg(rw(o), !0);
                        var a = e.tagName.toLowerCase();
                        if ("body" === a || "head" === a || "html" === a) return new rg(a, !0)
                    }
                    var s = e.tagName.toLowerCase();
                    if (o) return new rg(s + rw(o), !0);
                    var u = e.parentNode;
                    if (!u || u.nodeType === Node.DOCUMENT_NODE) return new rg(s, !0);
                    for (var l = rb(e), c = !1, d = !1, f = -1, p = -1, h = u.children, v = 0; h && (-1 === f || !d) && v < h.length; ++v) {
                        var g = h[v];
                        if (g.nodeType === Node.ELEMENT_NODE) {
                            if (p += 1, g === e) {
                                f = p;
                                continue
                            }
                            if (!d && g.tagName.toLowerCase() === s) {
                                c = !0;
                                var m = new Set(l);
                                if (!m.size) {
                                    d = !0;
                                    continue
                                }
                                for (var y = rb(g), b = 0; b < y.length; ++b) {
                                    var w = y[b];
                                    if (m.has(w) && (m.delete(w), !m.size)) {
                                        d = !0;
                                        break
                                    }
                                }
                            }
                        }
                    }
                    var E = s;
                    if (n && "input" === s.toLowerCase() && e.getAttribute("type") && !e.getAttribute("id") && !e.getAttribute("class") && (E += "[type=" + rf(e.getAttribute("type") || "") + "]"), d) E += ":nth-child(" + String(f + 1) + ")";
                    else if (c) try {
                        for (var S = V(l), k = S.next(); !k.done; k = S.next()) {
                            var T = k.value;
                            E += "." + rf(T.slice(1))
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            k && !k.done && (i = S.return) && i.call(S)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return new rg(E, !1)
                },
                rb = function(e) {
                    var t = e.getAttribute("class");
                    return t ? t.split(/\s+/g).filter(Boolean).map(function(e) {
                        return "$" + e
                    }) : []
                },
                rw = function(e) {
                    return "#" + rf(e)
                };

            function rE(e, t) {
                try {
                    return rm(e)
                } catch (e) {
                    var n = e instanceof Error ? e.message : String(e);
                    return null == t || t.warn("@amplitude/element-selector: legacyCssPath threw — emitting empty selector: ".concat(n)), ""
                }
            }
            var rS = function(e, t) {
                    var n, r;
                    return !!ro(e, t).some(function(e) {
                        return e.hasAttribute(ez)
                    }) || null != (r = null == (n = document.documentElement) ? void 0 : n.hasAttribute(ez)) && r
                },
                rk = function(e, t) {
                    var n, r, i, o, a, s, u, l, c, d, f, p = this;
                    this.setPageViewApiKey = function(e) {
                        p.pageViewApiKey = e
                    }, this.replaceSensitiveString = function(e) {
                        return eG(e, p.additionalMaskTextPatterns)
                    }, this.getHierarchy = function(e) {
                        var t, n, r, i, o = performance.now(),
                            a = [];
                        if (!e) return [];
                        for (var s = p.getShadowMode(), u = ro(e, s), l = new Map, c = u.length - 1; c >= 0; c--) {
                            var d = u[c];
                            if (d) {
                                var f, h = (f = d.getAttribute(nc)) ? f.split(",").map(function(e) {
                                        return e.trim()
                                    }).filter(function(e) {
                                        return e.length > 0 && "id" !== e && "class" !== e
                                    }) : [],
                                    v = new Set(z(z([], H(c === u.length - 1 ? [] : null != (r = l.get(u[c + 1])) ? r : new Set), !1), H(h), !1));
                                l.set(d, v)
                            }
                        }
                        a = u.map(function(e) {
                            var t;
                            return function(e, t, n) {
                                if (void 0 === n && (n = nw), null === e) return null;
                                var r, i, o, a, s, u = String(e.tagName).toLowerCase(),
                                    l = {
                                        tag: u
                                    },
                                    c = Array.from(function(e, t) {
                                        if (e.parentElement) return e.parentElement.children;
                                        var n = e.getRootNode();
                                        return t && nv(n) ? n.children : []
                                    }(e, n.enabled));
                                c.length && (l.index = c.indexOf(e), l.indexOfType = c.filter(function(t) {
                                    return t.tagName === e.tagName
                                }).indexOf(e));
                                var d = null == (s = null == (a = e.previousElementSibling) ? void 0 : a.tagName) ? void 0 : s.toLowerCase();
                                d && (l.prevSib = String(d));
                                var f = e.getAttribute("id");
                                f && (l.id = String(f));
                                var p = Array.from(e.classList);
                                p.length && (l.classes = p);
                                var h = {},
                                    v = Array.from(e.attributes).filter(function(e) {
                                        return !rt.has(e.name)
                                    }),
                                    g = !nA(e);
                                if (!ri.includes(String(e.getAttribute("type"))) && !rr.includes(u)) try {
                                    for (var m = V(v), y = m.next(); !y.done; y = m.next()) {
                                        var b = y.value;
                                        if (!g || rn.includes(b.name)) {
                                            if (t.has(b.name)) {
                                                h[b.name] = eK;
                                                continue
                                            }
                                            h[b.name] = String(b.value).substring(0, 128)
                                        }
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        y && !y.done && (i = m.return) && i.call(m)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                                return Object.keys(h).length && (l.attrs = h), e.shadowRoot && (l.attrs = U(U({}, l.attrs || {}), ((o = {})[nd] = "true", o)), l.shadow = !0), l
                            }(e, null != (t = l.get(e)) ? t : new Set, s)
                        });
                        var g = function(e) {
                            (null == e ? void 0 : e.attrs) && Object.entries(e.attrs).forEach(function(t) {
                                var n = H(t, 2),
                                    r = n[0],
                                    i = n[1];
                                e.attrs && (e.attrs[r] = p.replaceSensitiveString(i))
                            })
                        };
                        try {
                            for (var m = V(a), y = m.next(); !y.done; y = m.next()) {
                                var b = y.value;
                                g(b)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                y && !y.done && (n = m.return) && n.call(m)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        var w = performance.now();
                        return null == (i = p.diagnosticsClient) || i.recordHistogram("autocapturePlugin.getHierarchy", w - o), a
                    }, this.getNearestLabel = function(e) {
                        var t, n = e.parentElement;
                        if (!n) return "";
                        try {
                            t = n.querySelector(":scope>span,h1,h2,h3,h4,h5,h6")
                        } catch (e) {
                            t = null
                        }
                        return t ? p.getText(t) : p.getNearestLabel(n)
                    }, this.getElementPath = function(e) {
                        if (!e) return "";
                        var t, n = performance.now(),
                            r = p.selectorEngine.generate(e),
                            i = performance.now();
                        return null == (t = p.diagnosticsClient) || t.recordHistogram("autocapturePlugin.getElementPath", i - n), r
                    }, this.updateRemoteConfig = function(e, t) {
                        if (null != e) {
                            var n, r = e.elementSelector,
                                i = null != (n = e.elementInteractions) ? n : {};
                            return "boolean" == typeof i.shadowDomEnabled && (r = U(U({}, null != r ? r : {}), {
                                shadowDomEnabled: i.shadowDomEnabled
                            })), "number" == typeof i.maxShadowDomDepth && (r = U(U({}, null != r ? r : {}), {
                                maxShadowDomDepth: i.maxShadowDomDepth
                            })), p.updateSelectorConfig(r, t)
                        }
                    }, this.updateSelectorConfig = function(e, t) {
                        if (null != e) {
                            var n, r = "boolean" == typeof e.enabled,
                                i = "boolean" == typeof e.shadowDomEnabled;
                            if (!r && !i) {
                                null == t || t.debug("@amplitude/element-selector: ignoring remote-config delivery without an explicit `enabled` or `shadowDomEnabled` flag — keeping current engine state.");
                                return
                            }
                            var o = ru(e, t),
                                a = p.selectorEngine.getConfig().enabled,
                                s = p.shadowGate.get().enabled,
                                u = p.shadowGate.arm(nE(o));
                            p.selectorEngine.updateConfig(U(U(U({}, r ? o : p.selectorEngine.getConfig()), {
                                shadowDomEnabled: u.enabled
                            }), u.enabled && {
                                maxShadowDomDepth: u.maxDepth
                            })), r && a !== o.enabled && (null == t || t.debug(o.enabled ? "@amplitude/element-selector: engine enabled — now emitting new element-selector element paths for autocapture events." : "@amplitude/element-selector: engine disabled — reverting to legacy cssPath for element paths.")), !s && u.enabled && (null == (n = p.diagnosticsClient) || n.setTag("plugin.autocapture.shadowDom", "enabled:".concat(u.maxDepth)))
                        }
                    }, this.getShadowMode = function() {
                        return p.shadowGate.get()
                    }, this.getEventProperties = function(e, t, n) {
                        var r, i, o, a, s = null == (o = null == (i = null == t ? void 0 : t.tagName) ? void 0 : i.toLowerCase) ? void 0 : o.call(i),
                            u = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                left: null,
                                top: null
                            },
                            l = p.getHierarchy(t),
                            c = null == (a = l[0]) ? void 0 : a.attrs,
                            d = p.getNearestLabel(t),
                            f = Object.entries(null != c ? c : {}).reduce(function(e, t) {
                                var r = H(t, 2),
                                    i = r[0],
                                    o = r[1];
                                if (i.startsWith(n)) {
                                    var a = i.replace(n, "");
                                    a && (e[a] = o || "")
                                }
                                return e
                            }, {}),
                            h = ((r = {})["[Amplitude] Element Hierarchy"] = l, r[ni] = s, r[no] = p.getText(t), r["[Amplitude] Element Position Left"] = null == u.left ? null : Math.round(u.left), r["[Amplitude] Element Position Top"] = null == u.top ? null : Math.round(u.top), r["[Amplitude] Element Attributes"] = f, r["[Amplitude] Element Path"] = p.getElementPath(t), r["[Amplitude] Element Parent Label"] = d, r[na] = np(window.location.href.split("?")[0]), r["[Amplitude] Page Title"] = eJ(p.replaceSensitiveString), r[ns] = window.innerHeight, r[nu] = window.innerWidth, r),
                            v = e7(p.pageViewApiKey);
                        if (v && (h[nl] = v), h["[Amplitude] Element ID"] = t.getAttribute("id") || "", h["[Amplitude] Element Class"] = t.getAttribute("class"), h["[Amplitude] Element Aria Label"] = null == c ? void 0 : c["aria-label"], "a" === s && "click" === e && t instanceof HTMLAnchorElement) {
                            var g = t.href.substring(0, 128);
                            h["[Amplitude] Element Href"] = p.replaceSensitiveString(g)
                        }
                        return nC(h)
                    }, this.addTypeAndTimestamp = function(e, t) {
                        return {
                            event: e,
                            timestamp: Date.now(),
                            type: t
                        }
                    }, this.addAdditionalEventProperties = function(e, t, n, r, i) {
                        void 0 === i && (i = !1);
                        var o = p.addTypeAndTimestamp(e, t);
                        try {
                            if (("click" === o.type || "change" === o.type) && null !== o.event.target) {
                                var a = p.getShadowMode(),
                                    s = nj(o.event, a);
                                if (i && nT(s, o.type)) return o.closestTrackedAncestor = s, o.targetElementProperties = p.getEventProperties(o.type, o.closestTrackedAncestor, r), o;
                                var u = nO(s, n, a);
                                u && (o.closestTrackedAncestor = u, o.targetElementProperties = p.getEventProperties(o.type, u, r))
                            }
                        } catch (e) {}
                        return o
                    }, this.extractDataFromDataSource = function(e, t) {
                        if ("DOM_ELEMENT" === e.sourceType) {
                            var n = n4(e, t);
                            if (n) {
                                if ("TEXT" === e.elementExtractType) return p.getText(n);
                                if ("ATTRIBUTE" === e.elementExtractType && e.attribute) return n.getAttribute(e.attribute)
                            }
                        }
                    }, this.getTextWithMaskedDescendants = function(e) {
                        var t, n, r = "[".concat(ez, "], [contenteditable]");
                        if (!e.querySelector(r)) return e.innerText;
                        var i = "",
                            o = Array.from(e.childNodes);
                        try {
                            for (var a = V(o), s = a.next(); !s.done; s = a.next()) {
                                var u = s.value;
                                if (u.nodeType === Node.TEXT_NODE) {
                                    i += u.textContent || "";
                                    continue
                                }
                                if (u instanceof Element) {
                                    if (u.hasAttribute(ez) || nP(u)) {
                                        i += eK;
                                        continue
                                    }
                                    i += p.getTextWithMaskedDescendants(u)
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return i
                    }, this.hasMaskedAncestor = function(e) {
                        var t = p.getShadowMode();
                        return t.enabled ? rS(e, t) : null !== e.closest("[".concat(ez, "]"))
                    }, this.getText = function(e) {
                        var t = p.hasMaskedAncestor(e),
                            n = nI(e);
                        if (t || n) return eK;
                        var r = "";
                        return r = e.querySelector("[".concat(ez, "], [contenteditable]")) ? p.getTextWithMaskedDescendants(e) : e.innerText || "", p.replaceSensitiveString(r.substring(0, 255)).replace(/\s+/g, " ").trim()
                    }, this.getEventTagProps = function(e) {
                        if (!e) return {};
                        var t, n, r, i = null == (r = null == (n = null == e ? void 0 : e.tagName) ? void 0 : n.toLowerCase) ? void 0 : r.call(n);
                        return nC(((t = {})[ni] = i, t[no] = p.getText(e), t[na] = window.location.href.split("?")[0], t))
                    }, this.diagnosticsClient = null == t ? void 0 : t.diagnosticsClient, this.selectorEngine = (k || (n = ru(), void 0 === r && (r = {}), i = rs(n), o = new Set, a = r.logger, s = function(e) {
                        return rE(e, a)
                    }, u = function(e, t) {
                        var n;
                        return null != (n = function(e, t, n) {
                            void 0 === n && (n = {});
                            var r, i, o, a, s, u = rs(t),
                                l = null != (o = n.strategies) ? o : rh,
                                c = null != (s = null != (a = n.scope) ? a : e.ownerDocument) ? s : document,
                                d = {
                                    scope: c,
                                    config: u
                                },
                                f = function(e, t) {
                                    for (var n = [], r = e; null !== r && (n.push(r), void 0 === t || !(n.length > t));) r = r.parentElement;
                                    return n
                                }(e, u.maxAncestorWalkDepth);
                            try {
                                for (var p = V(l), h = p.next(); !h.done; h = p.next())
                                    for (var v = h.value, g = 0; g < f.length; g++) {
                                        var m = f[g],
                                            y = v.try(m, d);
                                        if (null !== y) {
                                            if (0 === g) {
                                                if (rv(c, y, e, v.name, n.logger)) return y;
                                                continue
                                            }
                                            var b = f.slice(0, g).reverse().map(rp).join(" > "),
                                                w = "".concat(y, " > ").concat(b);
                                            if (rv(c, w, e, v.name, n.logger)) return w
                                        }
                                    }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    h && !h.done && (i = p.return) && i.call(p)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return null
                        }(e, i, {
                            strategies: r.strategies,
                            scope: t,
                            logger: a
                        })) ? n : function(e, t, n) {
                            void 0 === n && (n = {});
                            for (var r, i, o = rs(t), a = null != (i = null != (r = n.scope) ? r : e.ownerDocument) ? i : document, s = nv(a), u = [], l = e, c = 0, d = !(o.shadowDomEnabled && s); null !== l && (!d || void 0 === o.maxAncestorWalkDepth || !(c > o.maxAncestorWalkDepth));) {
                                var f = rd(l, o);
                                if (null !== f) {
                                    var p = z(["".concat(l.tagName.toLowerCase(), "#").concat(rf(f))], H(u), !1).join(" > ");
                                    if (function(e, t, n) {
                                            var r;
                                            try {
                                                r = e.querySelectorAll(t)
                                            } catch (e) {
                                                return !1
                                            }
                                            return 1 === r.length && r[0] === n
                                        }(a, p, e)) return p
                                }
                                u.unshift(function(e, t) {
                                    var n = e.tagName.toLowerCase(),
                                        r = e.parentElement;
                                    if (null === r) {
                                        var i = e.getRootNode();
                                        return t && nv(i) ? "".concat(n, ":nth-of-type(").concat(nb(e, i.children), ")") : n
                                    }
                                    return "".concat(n, ":nth-of-type(").concat(nb(e, r.children), ")")
                                }(l, o.shadowDomEnabled)), l = l.parentElement, c += 1
                            }
                            var h = u.join(" > ");
                            return o.shadowDomEnabled && s && null === l ? "".concat(nh).concat(h) : h
                        }(e, i, {
                            scope: t
                        })
                    }, l = function(e, t) {
                        var n, r;
                        return n = s(e), r = function(e) {
                            for (var t = e; null !== t; t = t.parentElement)
                                if (t.getAttribute("id")) return !1;
                            return !0
                        }(e), n && r && nv(t) ? "".concat(nh).concat(n) : n
                    }, k = {
                        generate: function(e) {
                            try {
                                if (!i.shadowDomEnabled) return (i.enabled ? u : s)(e, null != (n = null != (t = r.scope) ? t : e.ownerDocument) ? n : document);
                                return o = i.enabled ? u : l, d = (c = ny(e, i.maxShadowDomDepth)).segments, c.truncated && (null == a || a.debug("@amplitude/element-selector: target is nested deeper than maxShadowDomDepth (".concat(i.maxShadowDomDepth, ") — emitting a best-effort selector for the outermost in-budget shadow host"))), d.map(function(e) {
                                    return o(e.target, e.root)
                                }).join(" >>> ")
                            } catch (r) {
                                var t, n, o, c, d, f = r instanceof Error ? r.message : String(r);
                                return null == a || a.warn("@amplitude/element-selector: selector generation threw — falling back to legacy cssPath: ".concat(f)), rE(e, a)
                            }
                        },
                        getConfig: function() {
                            return i
                        },
                        updateConfig: function(e) {
                            var t, n;
                            i = rs(e);
                            try {
                                for (var r = V(o), s = r.next(); !s.done; s = r.next()) {
                                    var u = s.value;
                                    try {
                                        u(i)
                                    } catch (e) {
                                        var l = e instanceof Error ? e.message : String(e);
                                        null == a || a.warn("@amplitude/element-selector: onConfigChange subscriber threw — ".concat(l))
                                    }
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        },
                        onConfigChange: function(e) {
                            return o.add(e),
                                function() {
                                    o.delete(e)
                                }
                        }
                    }), k), this.shadowGate = (E || (E = nS()), E);
                    var h = null != (f = e.maskTextRegex) ? f : [],
                        v = [];
                    try {
                        for (var g = V(h), m = g.next(); !m.done; m = g.next()) {
                            var y = m.value;
                            if (v.length >= 25) break;
                            if (y instanceof RegExp) v.push(y);
                            else if ("pattern" in y && "string" == typeof y.pattern) try {
                                v.push(RegExp(y.pattern, "i"))
                            } catch (e) {}
                        }
                    } catch (e) {
                        c = {
                            error: e
                        }
                    } finally {
                        try {
                            m && !m.done && (d = g.return) && d.call(g)
                        } finally {
                            if (c) throw c.error
                        }
                    }
                    this.additionalMaskTextPatterns = v
                };

            function rT(e, t) {
                var n = e.remoteConfigClient;
                if (e.fetchRemoteConfig && n) {
                    var r = n.subscribe("configs.analyticsSDK.browserSDK.autocapture", "all", function(n, r) {
                        e.loggerProvider.debug("@amplitude/element-selector: remote-config delivery (source=".concat(String(r), ") ").concat(JSON.stringify(n))), t.updateRemoteConfig(n, e.loggerProvider)
                    });
                    return function() {
                        n.unsubscribe(r)
                    }
                }
            }
            var r_ = function(e) {
                    var t;
                    return e.assignedSlot || e.parentElement || (null == (t = e.parentNode) ? void 0 : t.host) || null
                },
                rx = function(e, t) {
                    return ("fixed" === t || "absolute" === t) && e instanceof HTMLElement ? e.offsetParent : r_(e)
                },
                rP = function(e) {
                    var t = J(),
                        n = t.document.documentElement.clientHeight || t.innerHeight,
                        r = t.document.documentElement.clientWidth || t.innerWidth,
                        i = e.getBoundingClientRect(),
                        o = i.top + .5 * i.height,
                        a = Math.max(i.left, 0),
                        s = Math.min(i.right, r);
                    if (o < -1 || o > n + 1 || a >= s || i.width <= 0) return !1;
                    for (var u = rx(e, t.getComputedStyle(e).position); u;) {
                        var l = t.getComputedStyle(u),
                            c = l.overflowY && "visible" !== l.overflowY,
                            d = l.overflowX && "visible" !== l.overflowX;
                        if (c || d) {
                            var f = u.getBoundingClientRect();
                            if (c && (o < f.top - 1 || o > f.bottom + 1) || d && (a = Math.max(a, f.left)) >= (s = Math.min(s, f.right))) return !1
                        }
                        u = rx(u, l.position)
                    }
                    return !0
                };
            (u = T || (T = {})).ClickObservable = "clickObservable", u.PointerDownObservable = "pointerDownObservable", u.ChangeObservable = "changeObservable", u.NavigateObservable = "navigateObservable", u.MutationObservable = "mutationObservable", u.ScrollObservable = "scrollObservable", u.ExposureObservable = "exposureObservable", u.BrowserErrorObservable = "browserErrorObservable", u.SelectionObservable = "selectionObservable", u.MouseMoveObservable = "mouseMoveObservable";
            var rI = function(e, t) {
                    void 0 === e && (e = {}), null == t || t.diagnosticsClient.setTag("plugin.autocapture.version", nn);
                    var n, r, i, o, a, s, u, l, c, d, f, p, h, v, g = e.dataAttributePrefix,
                        m = void 0 === g ? tX : g,
                        y = e.visualTaggingOptions,
                        b = void 0 === y ? {
                            enabled: !0
                        } : y;
                    e.cssSelectorAllowlist = null != (n = e.cssSelectorAllowlist) ? n : tJ, e.actionClickAllowlist = null != (r = e.actionClickAllowlist) ? r : tQ, e.debounceTime = null != (i = e.debounceTime) ? i : 0;
                    var w = (null == (o = e.viewportContentUpdated) ? void 0 : o.enabled) !== !1,
                        E = null != (u = null != (s = null == (a = e.viewportContentUpdated) ? void 0 : a.exposureDuration) ? s : e.exposureDuration) ? u : 150;
                    e.viewportContentUpdated = U(U({}, e.viewportContentUpdated), {
                        exposureDuration: E
                    }), e.pageUrlExcludelist = null == (l = e.pageUrlExcludelist) ? void 0 : l.reduce(function(e, t) {
                        if ("string" == typeof t && e.push(t), t instanceof RegExp && e.push(t), "object" == typeof t && null !== t && "pattern" in t) try {
                            e.push(new RegExp(t.pattern))
                        } catch (e) {}
                        return e
                    }, []);
                    var S = "@amplitude/plugin-autocapture-browser",
                        k = [],
                        _ = new rk(e, t),
                        x = new Set,
                        P = new Set,
                        I = new Set,
                        A = function() {
                            var t, n, r = t3(n0().map(function(t) {
                                    return _.addAdditionalEventProperties(t, "click", e.cssSelectorAllowlist, m)
                                })),
                                i = t3(new(t0())(function(t) {
                                    var n, r = function(n) {
                                        var r = _.addAdditionalEventProperties(n, "change", e.cssSelectorAllowlist, m);
                                        t.next(r)
                                    };
                                    return null == (n = J()) || n.document.addEventListener("change", r, {
                                            capture: !0
                                        }),
                                        function() {
                                            var e;
                                            return null == (e = J()) ? void 0 : e.document.removeEventListener("change", r)
                                        }
                                }));
                            window.navigation && (n = t3(new(t0())(function(t) {
                                var n = function(n) {
                                    var r = _.addAdditionalEventProperties(n, "navigate", e.cssSelectorAllowlist, m);
                                    t.next(r)
                                };
                                return window.navigation.addEventListener("navigate", n),
                                    function() {
                                        window.navigation.removeEventListener("navigate", n)
                                    }
                            })));
                            var o = _.shadowGate,
                                a = t3(nZ(o).map(function(t) {
                                    return _.addAdditionalEventProperties(t, "mutation", e.cssSelectorAllowlist, m)
                                })),
                                s = new(t0())(function(e) {
                                    var t, n, r = function(t) {
                                        e.next(t)
                                    };
                                    return null == (t = J()) || t.addEventListener("scroll", r, {
                                            capture: !0,
                                            passive: !0
                                        }), null == (n = J()) || n.addEventListener("resize", r, {
                                            passive: !0
                                        }),
                                        function() {
                                            var e, t;
                                            null == (e = J()) || e.removeEventListener("scroll", r, {
                                                capture: !0
                                            }), null == (t = J()) || t.removeEventListener("resize", r)
                                        }
                                }),
                                u = n1(a, e.cssSelectorAllowlist, function(e) {
                                    v = e
                                }, o);
                            return (t = {})[T.ChangeObservable] = i, t[T.ClickObservable] = r, t[T.MutationObservable] = a, t[T.NavigateObservable] = n, t[T.ScrollObservable] = s, t[T.ExposureObservable] = u, t
                        },
                        C = n7(Object.values(null != (d = null == (c = e.pageActions) ? void 0 : c.labeledEvents) ? d : {})),
                        O = n8(null != (p = null == (f = e.pageActions) ? void 0 : f.triggers) ? p : []),
                        R = new re(C, O, _, e),
                        D = function(t) {
                            var n, r;
                            t && (e.pageActions = U(U({}, e.pageActions), t), C = n7(Object.values(null != (n = e.pageActions.labeledEvents) ? n : {})), O = n8(null != (r = e.pageActions.triggers) ? r : []), R.update(C, O, e))
                        };
                    return {
                        name: S,
                        type: "enrichment",
                        setup: function(t, n) {
                            return q(void 0, void 0, void 0, function() {
                                var r, i, o, a, s, u, l, c, d, f, p, g, y, C, O, L, N, M, j, F, q, V, K, W, Y, $, G, X, Q, Z, ee, et, en, er, ei, eo, ea, es, eu, el, ec, ed, ef;
                                return B(this, function(B) {
                                    if ("u" < typeof document) return [2];
                                    if (_.setPageViewApiKey(t.apiKey), eV(t.apiKey), r = !1, t.fetchRemoteConfig && (t.remoteConfigClient ? t.remoteConfigClient.subscribe("configs.analyticsSDK.pageActions", "all", function(e) {
                                            D(e)
                                        }) : t.loggerProvider.debug("Remote config client is not provided, skipping remote config fetch")), !0 === e.shadowDomEnabled && ("number" != typeof(i = e.maxShadowDomDepth) && (i = 1), _.updateSelectorConfig({
                                            shadowDomEnabled: !0,
                                            maxShadowDomDepth: i
                                        })), (o = rT(t, _)) && k.push({
                                            unsubscribe: o
                                        }), a = nx(e, e.cssSelectorAllowlist), s = nx(e, e.actionClickAllowlist), eh = (ep = {
                                            allObservables: u = A(),
                                            amplitude: n,
                                            shouldTrackEvent: a,
                                            evaluateTriggers: R.evaluate.bind(R)
                                        }).amplitude, ev = ep.allObservables, eg = ep.shouldTrackEvent, em = ep.evaluateTriggers, l = ev.clickObservable.filter(nU).filter(function(e) {
                                            return eg("click", e.closestTrackedAncestor)
                                        }).map(function(e) {
                                            return em(e)
                                        }).subscribe(function(e) {
                                            null == eh || eh.track(nr, e.targetElementProperties)
                                        }), k.push(l), eb = (ey = {
                                            allObservables: u,
                                            getEventProperties: function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                return _.getEventProperties.apply(_, z(z([], H(e), !1), [m], !1))
                                            },
                                            amplitude: n,
                                            shouldTrackEvent: a,
                                            evaluateTriggers: R.evaluate.bind(R)
                                        }).amplitude, ew = ey.allObservables, eE = ey.getEventProperties, eS = ey.shouldTrackEvent, ek = ey.evaluateTriggers, c = ew.changeObservable.filter(nU).filter(function(e) {
                                            return eS("change", e.closestTrackedAncestor)
                                        }).map(function(e) {
                                            return ek(e)
                                        }).subscribe(function(e) {
                                            null == eb || eb.track("[Amplitude] Element Changed", eE("change", e.closestTrackedAncestor))
                                        }), k.push(c), e_ = (eT = {
                                            allObservables: u,
                                            options: e,
                                            getEventProperties: function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                return _.getEventProperties.apply(_, z(z([], H(e), !1), [m], !1))
                                            },
                                            amplitude: n,
                                            shouldTrackEvent: a,
                                            shouldTrackActionClick: s
                                        }).amplitude, ex = eT.allObservables, eP = eT.options, eI = eT.getEventProperties, eA = eT.shouldTrackEvent, eC = eT.shouldTrackActionClick, eO = ex.clickObservable, eR = ex.mutationObservable, eD = ex.navigateObservable, eL = eO.filter(function(e) {
                                            return !eA("click", e.closestTrackedAncestor)
                                        }).map(function(e) {
                                            var t = nO(e.event.target, eP.actionClickAllowlist);
                                            return e.closestTrackedAncestor = t, null !== e.closestTrackedAncestor && (e.targetElementProperties = eI(e.type, e.closestTrackedAncestor)), e
                                        }).filter(nU).filter(function(e) {
                                            return eC("click", e.closestTrackedAncestor)
                                        }), eN = eD ? t2(eR, eD) : eR, eM = t2(eL, eN), ej = null, eU = null, (d = t1(eM, function(e) {
                                            if (ej && (clearTimeout(ej), ej = null), "click" === e.type) eU = e, ej = setTimeout(function() {
                                                ej = null, eU = null
                                            }, 500);
                                            else if (eU) {
                                                var t = eU;
                                                return eU = null, Promise.resolve(t)
                                            }
                                            return Promise.resolve(null)
                                        }).subscribe(function(e) {
                                            e && (null == e_ || e_.track(nr, eI("click", e.closestTrackedAncestor)))
                                        })) && k.push(d), (eF = {
                                            allObservables: u,
                                            amplitude: n
                                        }).amplitude, eB = eF.allObservables.scrollObservable, eH = {
                                            maxX: 0,
                                            maxY: 0,
                                            minY: 0
                                        }, ez = !0, (eK = function() {
                                            var e = nV(),
                                                t = e.x,
                                                n = e.y;
                                            eH.maxX = t, eH.maxY = n, eH.minY = n, ez = !1
                                        })(), eW = eB.subscribe(function() {
                                            var e = nV(),
                                                t = e.x,
                                                n = e.y;
                                            if (ez) {
                                                eH.maxX = t, eH.maxY = n, eH.minY = n, ez = !1;
                                                return
                                            }
                                            eH.maxX = Math.max(eH.maxX, t), eH.maxY = Math.max(eH.maxY, n), eH.minY = Math.min(eH.minY, n)
                                        }), f = {
                                            unsubscribe: function() {
                                                eW.unsubscribe()
                                            },
                                            getState: function() {
                                                return eH
                                            },
                                            reset: function() {
                                                eH.maxX = 0, eH.maxY = 0, eH.minY = 0, ez = !0
                                            },
                                            isAwaitingSeed: function() {
                                                return ez
                                            },
                                            seed: function() {
                                                return !!ez && (eK(), !0)
                                            }
                                        }, k.push(f), p = U({}, f.getState()), g = function() {
                                            f.seed();
                                            var e = f.getState();
                                            p.maxX = e.maxX, p.maxY = e.maxY, p.minY = e.minY
                                        }, y = !1, C = !1, O = !1, N = {}, M = J(), F = function() {
                                            f.reset();
                                            var e, t = f.getState();
                                            p.maxX = t.maxX, p.maxY = t.maxY, p.minY = t.minY, I.clear(), x.clear(), P.clear(), null == (e = N.exposure) || e.reset(), null == j || j.reset()
                                        }, q = function() {
                                            y = !0
                                        }, V = function(e) {
                                            y ? e ? F() : C = !0 : (e && (null == j || j.reset()), e && r) ? F() : (e && (r = !0, setTimeout(function() {
                                                r = !1
                                            }, 100)), function(e) {
                                                var t, n, r, i = e.amplitude,
                                                    o = e.scrollTracker,
                                                    a = e.currentElementExposed,
                                                    s = e.elementExposedForPage,
                                                    u = e.elementExposedInSentEvents,
                                                    l = e.exposureTracker,
                                                    c = e.isPageEnd,
                                                    d = e.lastScroll,
                                                    f = e.apiKey,
                                                    p = o.getState(),
                                                    h = J(),
                                                    v = null != (n = null == h ? void 0 : h.innerWidth) ? n : 0,
                                                    g = null != (r = null == h ? void 0 : h.innerHeight) ? r : 0,
                                                    m = Array.from(a).filter(function(e) {
                                                        return !u.has(e)
                                                    }),
                                                    y = ((t = {})[na] = nq(h), t["[Amplitude] Max Page X"] = p.maxX + v, t["[Amplitude] Max Page Y"] = p.maxY + g, t["[Amplitude] Min Page Y"] = p.minY, t[ns] = g, t[nu] = v, t[eq] = eV(f), t["[Amplitude] Element Exposed"] = m, t),
                                                    b = e7(f);
                                                b && (y[nl] = b);
                                                var w = function() {
                                                    o.reset();
                                                    var e = o.getState();
                                                    d.maxX = e.maxX, d.maxY = e.maxY, d.minY = e.minY, s.clear(), u.clear(), null == l || l.reset()
                                                };
                                                if (0 === m.length && p.maxX === d.maxX && p.maxY === d.maxY && p.minY === d.minY) {
                                                    c && w();
                                                    return
                                                }
                                                null == i || i.track("[Amplitude] Viewport Content Updated", y), d.maxX = p.maxX, d.maxY = p.maxY, d.minY = p.minY, m.forEach(function(e) {
                                                    u.add(e)
                                                }), a.clear(), c && w()
                                            }({
                                                amplitude: n,
                                                scrollTracker: f,
                                                currentElementExposed: I,
                                                elementExposedForPage: x,
                                                elementExposedInSentEvents: P,
                                                exposureTracker: N.exposure,
                                                isPageEnd: e,
                                                lastScroll: p,
                                                apiKey: t.apiKey
                                            }))
                                        }, W = function() {
                                            K && (clearTimeout(K), K = void 0)
                                        }, Y = function() {
                                            W(), K = setTimeout(function() {
                                                K = void 0, $()
                                            }, 0)
                                        }, $ = function() {
                                            if (W(), null == L || L.removeEventListener("abort", Y), L = void 0, y) {
                                                y = !1, f.reset(), g();
                                                var e = C,
                                                    t = O;
                                                C = !1, O = !1, e && V(t)
                                            }
                                        }, G = function() {
                                            W(), null == L || L.removeEventListener("abort", Y), L = void 0, C = !1, O = !1
                                        }, X = function() {
                                            (!L || L.aborted) && $()
                                        }, Q = function(e) {
                                            if (W(), null == L || L.removeEventListener("abort", Y), L = void 0, e) {
                                                if (e.aborted) return void $();
                                                L = e, e.addEventListener("abort", Y, {
                                                    once: !0
                                                })
                                            }
                                        }, Z = nq(M), ee = function(e) {
                                            var t = nq(M);
                                            return t !== Z && (y && e && e.deferScrollBaseline ? (G(), F(), Z = t, !0) : (Z = t, V(!0), null == e ? void 0 : e.deferScrollBaseline) ? (q(), !0) : (g(), !1))
                                        }, et = function(e, t) {
                                            var n = nq(M),
                                                r = function(e, t) {
                                                    if (void 0 === t && (t = J()), null == e || "" === e) return nq(t);
                                                    var n, r = (null == (n = null == t ? void 0 : t.location) ? void 0 : n.href) || "http://localhost/";
                                                    try {
                                                        return nF(new URL(e, r).href)
                                                    } catch (e) {
                                                        return nq(t)
                                                    }
                                                }(t, M);
                                            n === r ? e() : (Z = r, V(!0), e(), g())
                                        }, en = function(e) {
                                            !(x.has(e) || P.has(e)) && (x.add(e), I.add(e), JSON.stringify(Array.from(I)).length >= 18e3 && V(!1))
                                        }, w && (e$ = (eY = {
                                            allObservables: u,
                                            onExposure: en,
                                            dataExtractor: _,
                                            exposureDuration: E
                                        }).allObservables, eG = eY.onExposure, eJ = eY.dataExtractor, eQ = void 0 === (eX = eY.exposureDuration) ? 150 : eX, eZ = new Map, e0 = new Map, e1 = new Set, e2 = function(e) {
                                            var t = e0.get(e);
                                            t && (clearTimeout(t), e0.set(e, null))
                                        }, e3 = function(e) {
                                            if (!rP(e)) return void e2(e);
                                            if (!(eZ.get(e) || e0.get(e))) {
                                                var t = setTimeout(function() {
                                                    eZ.set(e, !0), eG(eJ.getElementPath(e)), e0.set(e, null)
                                                }, eQ);
                                                e0.set(e, t)
                                            }
                                        }, e4 = e$.exposureObservable, e5 = e$.scrollObservable, e6 = e4.subscribe(function(e) {
                                            var t = e.target;
                                            e.isIntersecting ? (e1.add(t), e3(t)) : (e1.delete(t), e2(t))
                                        }), e8 = e5.subscribe(function() {
                                            e1.forEach(e3)
                                        }), e9 = function() {
                                            e0.forEach(function(e) {
                                                e && clearTimeout(e)
                                            }), e0.clear(), eZ.clear()
                                        }, N.exposure = {
                                            unsubscribe: function() {
                                                e6.unsubscribe(), e8.unsubscribe(), e9(), e1.clear()
                                            },
                                            reset: function() {
                                                e9(), e1.forEach(e3)
                                            }
                                        }, N.exposure && k.push(N.exposure), ta = (te = {
                                            mutationObservable: u[T.MutationObservable],
                                            onRescan: function() {
                                                var e, n;
                                                null == (n = null == (e = t.loggerProvider) ? void 0 : e.debug) || n.call(e, "@amplitude/plugin-autocapture-browser: initial exposure snapshot — rescanning DOM"), null == v || v()
                                            },
                                            onFlush: function() {
                                                var e, n;
                                                null == (n = null == (e = t.loggerProvider) ? void 0 : e.debug) || n.call(e, "@amplitude/plugin-autocapture-browser: initial exposure snapshot — flushing viewport content updated"), V(!1)
                                            },
                                            exposureDuration: E
                                        }).mutationObservable, ts = te.onRescan, tu = te.onFlush, tl = te.exposureDuration, td = void 0 === (tc = te.quietMs) ? 150 : tc, tp = void 0 === (tf = te.maxWaitMs) ? 4e3 : tf, th = !1, tv = function() {
                                            tt && (clearTimeout(tt), tt = void 0), tn && (clearTimeout(tn), tn = void 0), tr && (clearTimeout(tr), tr = void 0)
                                        }, tg = function() {
                                            to && (document.removeEventListener("DOMContentLoaded", to), to = void 0)
                                        }, tm = function() {
                                            if (!th) {
                                                if (!("u" > typeof document && "loading" !== document.readyState)) {
                                                    to || (to = function() {
                                                        to = void 0, ty()
                                                    }, document.addEventListener("DOMContentLoaded", to));
                                                    return
                                                }
                                                th = !0, tv(), tg(), ts(), tr = setTimeout(function() {
                                                    tr = void 0, tu()
                                                }, tl + 50)
                                            }
                                        }, ty = function() {
                                            th || (tt && clearTimeout(tt), tt = setTimeout(tm, td))
                                        }, tb = function() {
                                            tv(), tg(), th = !1, ty(), tn = setTimeout(tm, tp)
                                        }, (j = {
                                            start: function() {
                                                ti || (ti = ta.subscribe(function() {
                                                    ty()
                                                }), tb())
                                            },
                                            reset: function() {
                                                tb()
                                            },
                                            stop: function() {
                                                null == ti || ti.unsubscribe(), ti = void 0, tv(), tg()
                                            }
                                        }).start(), k.push({
                                            unsubscribe: function() {
                                                null == j || j.stop()
                                            }
                                        }), er = function() {
                                            if (y) {
                                                O = !0, C = !0, $();
                                                return
                                            }
                                            V(!0)
                                        }, null == M || M.addEventListener("beforeunload", er), h = function() {
                                            null == M || M.removeEventListener("beforeunload", er)
                                        }, k.push({
                                            unsubscribe: function() {
                                                return h()
                                            }
                                        }), (ei = u[T.NavigateObservable]) ? (k.push(ei.subscribe(function(e) {
                                            var t, n, r, i = null == (n = null == (t = e.event) ? void 0 : t.destination) ? void 0 : n.url;
                                            if (i) {
                                                var o = nF(i);
                                                if (o === Z) return;
                                                if (y) {
                                                    C = !1, O = !1, Z = o, V(!0), Q(e.event.signal);
                                                    return
                                                }
                                                Z = o, V(!0), q(), Q(e.event.signal);
                                                return
                                            }
                                            ee({
                                                deferScrollBaseline: !0
                                            }) && Q(null == (r = e.event) ? void 0 : r.signal)
                                        })), (eo = window.navigation) && (eo.addEventListener("navigatesuccess", $), eo.addEventListener("navigateerror", X), k.push({
                                            unsubscribe: function() {
                                                G(), y = !1, eo.removeEventListener("navigatesuccess", $), eo.removeEventListener("navigateerror", X)
                                            }
                                        }))) : M && (ea = function() {
                                            ee()
                                        }, M.addEventListener("popstate", ea), es = M.history.pushState, eu = M.history.replaceState, M.history && es && (M.history.pushState = new Proxy(es, {
                                            apply: function(e, t, n) {
                                                et(function() {
                                                    e.apply(t, n)
                                                }, n[2])
                                            }
                                        })), M.history && eu && (M.history.replaceState = new Proxy(eu, {
                                            apply: function(e, t, n) {
                                                et(function() {
                                                    e.apply(t, n)
                                                }, n[2])
                                            }
                                        })), k.push({
                                            unsubscribe: function() {
                                                M.removeEventListener("popstate", ea), M.history && es && (M.history.pushState = es), M.history && eu && (M.history.replaceState = eu)
                                            }
                                        }))), null == (ef = null == t ? void 0 : t.loggerProvider) || ef.log("".concat(S, " has been successfully added.")), window.opener && b.enabled) {
                                        var ep, eh, ev, eg, em, ey, eb, ew, eE, eS, ek, eT, e_, ex, eP, eI, eA, eC, eO, eR, eD, eL, eN, eM, ej, eU, eF, eB, eH, ez, eK, eW, eY, e$, eG, eJ, eX, eQ, eZ, e0, e1, e2, e3, e4, e5, e6, e8, e9, te, tt, tn, tr, ti, to, ta, ts, tu, tl, tc, td, tf, tp, th, tv, tg, tm, ty, tb;
                                        if (el = e.cssSelectorAllowlist, ec = e.actionClickAllowlist, function(e, t) {
                                                if (!0 !== e[nB]) {
                                                    e[nB] = !0;
                                                    var n = t.dataExtractor,
                                                        r = t.isElementSelectable,
                                                        i = t.cssSelectorAllowlist,
                                                        o = t.actionClickAllowlist,
                                                        a = null,
                                                        s = function(t) {
                                                            e.notify({
                                                                action: "element-selected",
                                                                data: t
                                                            })
                                                        },
                                                        u = function(t, n) {
                                                            "selector-mode-changed" === t ? e.notify({
                                                                action: "track-selector-mode-changed",
                                                                data: n
                                                            }) : "selector-moved" === t && e.notify({
                                                                action: "track-selector-moved",
                                                                data: n
                                                            })
                                                        };
                                                    e.registerActionHandler("initialize-visual-tagging-selector", function(t) {
                                                        e.loadScriptOnce("https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz").then(function() {
                                                            var l;
                                                            a = null == (l = null == window ? void 0 : window.amplitudeVisualTaggingSelector) ? void 0 : l.call(window, {
                                                                getEventTagProps: n.getEventTagProps,
                                                                isElementSelectable: function(e) {
                                                                    return !r || r((null == t ? void 0 : t.actionType) || "click", e)
                                                                },
                                                                onTrack: u,
                                                                onSelect: s,
                                                                visualHighlightClass: "amp-visual-tagging-selector-highlight",
                                                                messenger: e,
                                                                cssSelectorAllowlist: i,
                                                                actionClickAllowlist: o,
                                                                extractDataFromDataSource: n.extractDataFromDataSource,
                                                                dataExtractor: n,
                                                                diagnostics: {
                                                                    autocapture: {
                                                                        version: nn
                                                                    }
                                                                }
                                                            }), e.notify({
                                                                action: "selector-loaded"
                                                            })
                                                        }).catch(function() {
                                                            var t;
                                                            null == (t = e.logger) || t.warn("Failed to initialize visual tagging selector")
                                                        })
                                                    }), e.registerActionHandler("close-visual-tagging-selector", function() {
                                                        var e;
                                                        null == (e = null == a ? void 0 : a.close) || e.call(a)
                                                    })
                                                }
                                            }(ed = function() {
                                                var e = J(),
                                                    t = null == e ? void 0 : e[t7];
                                                if ("object" == typeof t && null !== t && t6 in t && !0 === t[t6]) return t;
                                                var n = new t8(void 0);
                                                return e && (e[t7] = n), n
                                            }(), {
                                                dataExtractor: _,
                                                isElementSelectable: nx(e, z(z([], H(el), !1), H(ec), !1)),
                                                cssSelectorAllowlist: el,
                                                actionClickAllowlist: ec
                                            }), !0 !== ed[nt]) {
                                            ed[nt] = !0;
                                            var tw = null,
                                                tE = function(e, t) {
                                                    var n, r;
                                                    "background-capture-complete" === e && (null == (r = null == (n = ed.logger) ? void 0 : n.debug) || r.call(n, "Background capture complete"), ed.notify({
                                                        action: "background-capture-complete",
                                                        data: t
                                                    }))
                                                };
                                            ed.registerActionHandler("initialize-background-capture", function(e) {
                                                null == (n = null == (t = ed.logger) ? void 0 : t.debug) || n.call(t, "Initializing background capture (external script)");
                                                var t, n, r = new URL("https://cdn.amplitude.com/libs/background-capture-1.1.0.js.gz", ed.endpoint).toString(),
                                                    i = e && "object" == typeof e ? ne(e.deviceMode) : void 0;
                                                ed.loadScriptOnce(r).then(function() {
                                                    var e, t, n;
                                                    null == (t = null == (e = ed.logger) ? void 0 : e.debug) || t.call(e, "Background capture script loaded (external)"), tw = null == (n = null == window ? void 0 : window.amplitudeBackgroundCapture) ? void 0 : n.call(window, U({
                                                        messenger: ed,
                                                        onBackgroundCapture: tE
                                                    }, void 0 !== i ? {
                                                        initialDeviceMode: i
                                                    } : {})), ed.notify({
                                                        action: "background-capture-loaded"
                                                    })
                                                }).catch(function() {
                                                    var e;
                                                    null == (e = ed.logger) || e.warn("Failed to initialize background capture")
                                                })
                                            }), ed.registerActionHandler("close-background-capture", function() {
                                                var e;
                                                null == (e = null == tw ? void 0 : tw.close) || e.call(tw), tw = null
                                            })
                                        }
                                        ed.setup(U({
                                            logger: null == t ? void 0 : t.loggerProvider
                                        }, (null == t ? void 0 : t.serverZone) && {
                                            endpoint: t5[t.serverZone]
                                        }))
                                    }
                                    return [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                var e, t, n, r;
                                return B(this, function(i) {
                                    try {
                                        for (t = (e = V(k)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            t && !t.done && (r = e.return) && r.call(e)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                    return [2]
                                })
                            })
                        }
                    }
                },
                rA = z(['input[type="button"]', 'input[type="submit"]', 'input[type="reset"]', 'input[type="image"]', 'input[type="file"]'], H(["a", "button", '[role="button"]', '[role="link"]', '[role="menuitem"]', '[role="menuitemcheckbox"]', '[role="menuitemradio"]', '[role="option"]', '[role="tab"]', '[role="treeitem"]', '[contenteditable="true" i]']), !1),
                rC = ["*"],
                rO = ["mutation", "navigate"];

            function rR(e, t) {
                var n, r, i, o, a = t.event,
                    s = a.pageX,
                    u = a.pageY;
                e.yMin = Math.min(null != (n = e.yMin) ? n : u, u), e.yMax = Math.max(null != (r = e.yMax) ? r : u, u), e.xMin = Math.min(null != (i = e.xMin) ? i : s, s), e.xMax = Math.max(null != (o = e.xMax) ? o : s, s), e.isOutOfBounds = e.yMax - e.yMin > 50 || e.xMax - e.xMin > 50
            }

            function rD(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e[e.length - 1];
                return {
                    rageClickEvent: U({
                        "[Amplitude] Begin Time": new Date(t.timestamp).toISOString(),
                        "[Amplitude] End Time": new Date(n.timestamp).toISOString(),
                        "[Amplitude] Duration": n.timestamp - t.timestamp,
                        "[Amplitude] Clicks": e.map(function(e) {
                            return {
                                X: e.event.pageX,
                                Y: e.event.pageY,
                                Time: e.timestamp
                            }
                        }),
                        "[Amplitude] Click Count": e.length
                    }, t.targetElementProperties),
                    time: t.timestamp
                }
            }(l = _ || (_ = {})).INCREASING = "increasing", l.DECREASING = "decreasing", (c = x || (x = {})).X = "x", c.Y = "y";
            var rL = function(e) {
                var t = e.allWindowObservables.mouseMoveObservable;
                return new(t0())(function(e) {
                    var n = null,
                        r = null,
                        i = null;
                    return t.subscribe(function(t) {
                        var o = {
                            x: t.clientX,
                            y: t.clientY
                        };
                        if (null === n) {
                            n = o;
                            return
                        }
                        o.x > n.x ? (r === _.DECREASING && e.next(x.X), r = _.INCREASING) : o.x < n.x && (r === _.INCREASING && e.next(x.X), r = _.DECREASING), o.y > n.y ? (i === _.DECREASING && e.next(x.Y), i = _.INCREASING) : o.y < n.y && (i === _.INCREASING && e.next(x.Y), i = _.DECREASING), n = o
                    })
                })
            };

            function rN(e) {
                var t = e.changes,
                    n = e.changesThreshold,
                    r = e.thresholdMs;
                return !(t.length < n) && t[t.length - 1] - t[0] < r
            }

            function rM(e) {
                e.changes = [], e.startTime = void 0
            }

            function rj(e) {
                for (var t = e.changes, n = e.thresholdMs, r = 0, i = t[t.length - 1]; r < t.length && !(i - t[r] < n); r++);
                0 !== r && (e.startTime = t[r], e.changes.splice(0, r))
            }
            var rU = function(e) {
                    var t = e.mouseDirectionChangeObservable,
                        n = e.directionChanges,
                        r = void 0 === n ? 20 : n,
                        i = e.thresholdMs,
                        o = void 0 === i ? 2e3 : i;
                    return new(t0())(function(e) {
                        var n = {
                                changes: [],
                                changesThreshold: r,
                                thresholdMs: o
                            },
                            i = {
                                changes: [],
                                changesThreshold: r,
                                thresholdMs: o
                            },
                            a = void 0,
                            s = null;

                        function u() {
                            void 0 !== a && (e.next(a), a = void 0, null !== s && clearTimeout(s), rM(n), rM(i))
                        }
                        return t.subscribe(function(e) {
                            null !== s && clearTimeout(s), t = e === x.X ? n : i, r = +Date.now(), t.startTime = t.startTime || r, l = t.changes, c = t.changesThreshold, l.push(r), l.length > c && l.shift();
                            var t, r, l, c, d = function(e, t) {
                                var n = void 0;
                                if (rN(e) && (n = e.startTime), rN(t)) {
                                    var r = t.startTime;
                                    r && (!n || r < n) && (n = r)
                                }
                                return n
                            }(n, i);
                            return d ? (a = a || d, s = setTimeout(function() {
                                    u(), s = null
                                }, o)) : u(), rj(n), rj(i),
                                function() {
                                    null !== s && (clearTimeout(s), s = null)
                                }
                        })
                    })
                },
                rF = function(e) {
                    var t = e.amplitude,
                        n = e.options,
                        r = e.allObservables,
                        i = e.directionChanges,
                        o = e.thresholdMs;
                    return rU({
                        mouseDirectionChangeObservable: rL({
                            allWindowObservables: r
                        }),
                        directionChanges: void 0 === i ? 20 : i,
                        thresholdMs: void 0 === o ? 2e3 : o
                    }).subscribe(function(e) {
                        n_(n) && t.track("[Amplitude] Thrashed Cursor", void 0, {
                            time: e
                        })
                    })
                };

            function rq(e, t, n, r) {
                if (!r) return [];
                var i = e[t];
                return "object" == typeof i && null !== i && "cssSelectorAllowlist" in i && Array.isArray(i.cssSelectorAllowlist) ? i.cssSelectorAllowlist : n
            }
            var rB = function(e) {
                void 0 === e && (e = {});
                var t, n = "@amplitude/plugin-frustration-browser",
                    r = [],
                    i = !1 !== e.errorClicks;
                e.errorClicks || (i = !1);
                var o = !1 !== e.deadClicks && null !== e.deadClicks,
                    a = !1 !== e.rageClicks && null !== e.rageClicks,
                    s = !1 !== e.thrashedCursor && null !== e.thrashedCursor;
                e.thrashedCursor || (s = !1);
                var u = rq(e, "rageClicks", rC, a),
                    l = rq(e, "deadClicks", rA, o),
                    c = rq(e, "errorClicks", rA, i),
                    d = null != (t = e.dataAttributePrefix) ? t : tX,
                    f = new rk(e),
                    p = z([], H(new Set(z(z(z([], H(u), !1), H(l), !1), H(c), !1))), !1),
                    h = function() {
                        var e, t, n = function(e) {
                                return t3(n0(e).map(function(e) {
                                    return f.addAdditionalEventProperties(e, "click", p, d, !0)
                                }))
                            },
                            r = n("click"),
                            i = n("pointerdown"),
                            o = t3(n2().map(function(e) {
                                return f.addTypeAndTimestamp(e, "error")
                            })),
                            a = t3(nZ(f.shadowGate).map(function(e) {
                                return f.addAdditionalEventProperties(e, "mutation", p, d)
                            }));
                        window.navigation && (t = t3(new(t0())(function(e) {
                            var t = function(t) {
                                e.next(U(U({}, t), {
                                    type: "navigate"
                                }))
                            };
                            return window.navigation.addEventListener("navigate", t),
                                function() {
                                    window.navigation.removeEventListener("navigate", t)
                                }
                        }).map(function(e) {
                            return f.addAdditionalEventProperties(e, "navigate", p, d)
                        })));
                        var s = t3(new(t0())(function(e) {
                                var t = function() {
                                    var t = document.activeElement;
                                    if (t && ("TEXTAREA" === t.tagName || "INPUT" === t.tagName)) {
                                        var n = void 0,
                                            r = void 0;
                                        try {
                                            if (n = t.selectionStart, r = t.selectionEnd, n === r) return
                                        } catch (e) {
                                            return
                                        }
                                        return e.next()
                                    }
                                    var i = window.getSelection();
                                    if (i && !i.isCollapsed) return e.next()
                                };
                                return window.document.addEventListener("selectionchange", t),
                                    function() {
                                        window.document.removeEventListener("selectionchange", t)
                                    }
                            })),
                            u = t3(new(t0())(function(e) {
                                var t = function(t) {
                                        e.next(t)
                                    },
                                    n = {
                                        capture: !0
                                    };
                                return nJ.document.addEventListener("mousemove", t, n),
                                    function() {
                                        nJ.document.removeEventListener("mousemove", t, n)
                                    }
                            }));
                        return (e = {})[T.ClickObservable] = r, e[T.PointerDownObservable] = i, e[T.MutationObservable] = a, e[T.NavigateObservable] = t, e[T.BrowserErrorObservable] = o, e[T.SelectionObservable] = s, e[T.MouseMoveObservable] = u, e
                    };
                return {
                    name: n,
                    type: "enrichment",
                    setup: function(t, p) {
                        return q(void 0, void 0, void 0, function() {
                            var v, g, m, y, b, w, E, k, T;
                            return B(this, function(_) {
                                var x, P, I, A, C, O, R, D, L, N, M, j, F, V, H, z, K, W, Y, $, G, J;
                                return "u" < typeof document || (f.setPageViewApiKey(t.apiKey), v = h(), (g = rT(t, f)) && r.push({
                                    unsubscribe: g
                                }), a && (m = function(e) {
                                    var t = this,
                                        n = e.amplitude,
                                        r = e.allObservables,
                                        i = e.shouldTrackRageClick,
                                        o = r.pointerDownObservable,
                                        a = r.selectionObservable,
                                        s = [],
                                        u = {},
                                        l = null;

                                    function c(e) {
                                        s = [], u = {}, e && (rR(u, e), s.push(e))
                                    }
                                    var d = t1(o.filter(function(e) {
                                            return i("click", e.closestTrackedAncestor)
                                        }), function(e) {
                                            return q(t, void 0, void 0, function() {
                                                var t;
                                                return B(this, function(n) {
                                                    var r, i, o, a;
                                                    return (rR(u, e), t = null, 0 === s.length || (r = s).length > 0 && r[r.length - 1].closestTrackedAncestor !== e.closestTrackedAncestor || (o = Math.max(0, (i = s).length - 4 + 1), a = i[o], e.timestamp - a.timestamp >= 1e3) || u.isOutOfBounds) ? (l && (t = rD(s)), c(e)) : s.push(e), (l && (clearTimeout(l.timerId), l.resolve(t), l = null), s.length >= 4) ? [2, new Promise(function(e) {
                                                        l = {
                                                            resolve: e,
                                                            timerId: setTimeout(function() {
                                                                e(rD(s))
                                                            }, 1e3)
                                                        }
                                                    })] : [2, null]
                                                })
                                            })
                                        }),
                                        f = null == a ? void 0 : a.subscribe(function() {
                                            c()
                                        }),
                                        p = d.subscribe(function(e) {
                                            null !== e && n.track("[Amplitude] Rage Click", e.rageClickEvent, {
                                                time: e.time
                                            })
                                        });
                                    return {
                                        unsubscribe: function() {
                                            p.unsubscribe(), null == f || f.unsubscribe()
                                        }
                                    }
                                }({
                                    allObservables: v,
                                    amplitude: p,
                                    shouldTrackRageClick: nx(e, u)
                                }), r.push(m)), o && (P = (x = {
                                    amplitude: p,
                                    allObservables: v,
                                    getEventProperties: function(e, t) {
                                        return f.getEventProperties(e, t, d)
                                    },
                                    shouldTrackDeadClick: nx(e, l)
                                }).amplitude, I = x.allObservables, A = x.getEventProperties, C = x.shouldTrackDeadClick, O = I.clickObservable, R = I.mutationObservable, D = I.navigateObservable, L = O.filter(function(e) {
                                    return nU(e) && C("click", e.closestTrackedAncestor) && e.event.target instanceof Element && null === e.event.target.closest('a[target="_blank"]') && e.event.button === S.LEFT_OR_TOUCH_CONTACT
                                }), N = D ? t2(R, D) : R, M = t2(L, N), j = null, y = t1(M, function(e) {
                                    if (j && rO.includes(e.type)) clearTimeout(j), j = null;
                                    else if ("click" === e.type) return j ? Promise.resolve(null) : new Promise(function(t) {
                                        j = setTimeout(function() {
                                            t(e), j = null
                                        }, 3e3)
                                    });
                                    return Promise.resolve(null)
                                }).subscribe(function(e) {
                                    if (e) {
                                        var t = {
                                            "[Amplitude] X": e.event.clientX,
                                            "[Amplitude] Y": e.event.clientY
                                        };
                                        P.track("[Amplitude] Dead Click", U(U({}, A("click", e.closestTrackedAncestor)), t), {
                                            time: e.timestamp
                                        })
                                    }
                                }), r.push(y)), i && (V = (F = {
                                    amplitude: p,
                                    allObservables: v,
                                    shouldTrackErrorClick: nx(e, c)
                                }).amplitude, H = F.allObservables, z = F.shouldTrackErrorClick, K = H.pointerDownObservable, W = H.browserErrorObservable, Y = K.filter(function(e) {
                                    return nU(e) && z("click", e.closestTrackedAncestor) && e.event.target instanceof Element && null === e.event.target.closest('a[target="_blank"]') && e.event.button === S.LEFT_OR_TOUCH_CONTACT
                                }), $ = null, G = null, J = function() {
                                    null !== $ && (clearTimeout($), $ = null), G = null
                                }, b = t2(Y, W).subscribe(function(e) {
                                    var t;
                                    if ("click" === e.type) {
                                        J(), G = e, $ = setTimeout(J, 2e3);
                                        return
                                    }
                                    "error" === e.type && G && (V.track("[Amplitude] Error Click", U(((t = {})["[Amplitude] Kind"] = e.event.kind, t["[Amplitude] Message"] = e.event.message, t["[Amplitude] Stack"] = e.event.stack, t["[Amplitude] Filename"] = e.event.filename, t["[Amplitude] Line Number"] = e.event.lineNumber, t["[Amplitude] Column Number"] = e.event.columnNumber, t), G.targetElementProperties)), J())
                                }), r.push(b)), s && (w = void 0, E = void 0, "object" == typeof e.thrashedCursor && (w = e.thrashedCursor.directionChanges, E = e.thrashedCursor.threshold, w && w < 5 && (t.loggerProvider.warn("'thrashedCursor.directionChanges' of ".concat(w, " is below the minimum of ").concat(5, ", setting to ").concat(5)), w = 5), E && E > 4e3 && (t.loggerProvider.warn("'thrashedCursor.threshold' of ".concat(E, " is above the maximum of ").concat(4e3, ", setting to ").concat(4e3)), E = 4e3)), k = rF({
                                    amplitude: p,
                                    options: e,
                                    allObservables: v,
                                    directionChanges: w,
                                    thresholdMs: E
                                }), r.push(k)), null == (T = null == t ? void 0 : t.loggerProvider) || T.log("".concat(n, " has been successfully added."))), [2]
                            })
                        })
                    },
                    execute: function(e) {
                        return q(void 0, void 0, void 0, function() {
                            return B(this, function(t) {
                                return [2, e]
                            })
                        })
                    },
                    teardown: function() {
                        return q(void 0, void 0, void 0, function() {
                            var e, t, n, i;
                            return B(this, function(o) {
                                try {
                                    for (t = (e = V(r)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        t && !t.done && (i = e.return) && i.call(e)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return [2]
                            })
                        })
                    }
                }
            };

            function rV(e, t) {
                var n = e.startTime + e.duration;
                return t.filter(function(t) {
                    return t.startTime < n && t.startTime + t.duration > e.startTime
                }).map(function(e) {
                    return e.name
                })
            }
            var rH = function(e) {
                void 0 === e && (e = {});
                var t = "@amplitude/plugin-performance-browser",
                    n = [],
                    r = !0 === e.mainThreadBlock || "object" == typeof e.mainThreadBlock && null !== e.mainThreadBlock;
                return {
                    name: t,
                    type: "enrichment",
                    setup: function(i, o) {
                        return q(void 0, void 0, void 0, function() {
                            var a, s, u;
                            return B(this, function(l) {
                                return "u" < typeof document || (r && (a = 100, "object" == typeof e.mainThreadBlock && void 0 !== e.mainThreadBlock.durationThreshold && (a = e.mainThreadBlock.durationThreshold), s = function(e) {
                                    var t = e.amplitude,
                                        n = e.options,
                                        r = e.durationThreshold,
                                        i = void 0 === r ? 100 : r,
                                        o = function() {
                                            if ("u" < typeof PerformanceObserver) return null;
                                            try {
                                                var e = PerformanceObserver.supportedEntryTypes;
                                                if (e.includes("long-animation-frame")) return "long-animation-frame";
                                                if (e.includes("longtask")) return "longtask"
                                            } catch (e) {}
                                            return null
                                        }();
                                    if (!o) return {
                                        unsubscribe: function() {}
                                    };
                                    var a = [],
                                        s = new PerformanceObserver(function(e) {
                                            var t, n, r = performance.now();
                                            try {
                                                for (var i = V(e.getEntries()), o = i.next(); !o.done; o = i.next()) {
                                                    var s = o.value;
                                                    a.push(s)
                                                }
                                            } catch (e) {
                                                t = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    o && !o.done && (n = i.return) && n.call(i)
                                                } finally {
                                                    if (t) throw t.error
                                                }
                                            }
                                            for (var u = r - 1e4; a.length > 0 && a[0].startTime < u;) a.shift()
                                        });
                                    try {
                                        s.observe({
                                            entryTypes: ["measure"]
                                        })
                                    } catch (e) {}
                                    var u = new PerformanceObserver(function(e) {
                                        var r, s;
                                        try {
                                            for (var u = V(e.getEntries()), l = u.next(); !l.done; l = u.next()) {
                                                var c = l.value;
                                                if (!n_(n)) return;
                                                if (!(c.duration < i)) {
                                                    var d = "long-animation-frame" === o ? function(e, t) {
                                                        var n, r = rV(e, t),
                                                            i = null != (n = e.scripts) ? n : [],
                                                            o = i.map(function(e) {
                                                                return e.sourceURL
                                                            }).filter(Boolean),
                                                            a = i.map(function(e) {
                                                                return e.sourceFunctionName
                                                            }).filter(Boolean),
                                                            s = i.map(function(e) {
                                                                return e.sourceCharPosition
                                                            }).filter(function(e) {
                                                                return "number" == typeof e && e >= 0
                                                            }),
                                                            u = i.map(function(e) {
                                                                return e.invokerType
                                                            }).filter(Boolean),
                                                            l = i.map(function(e) {
                                                                return e.invoker
                                                            }).filter(Boolean);
                                                        return U(U(U(U(U(U(U({
                                                            "[Amplitude] Main Thread Block Source": "long-animation-frame",
                                                            "[Amplitude] Main Thread Block Duration": e.duration,
                                                            "[Amplitude] Main Thread Block Blocking Duration": e.blockingDuration,
                                                            "[Amplitude] Main Thread Block Start Time": e.startTime
                                                        }, r.length > 0 && {
                                                            "[Amplitude] Main Thread Block Measures": r
                                                        }), {
                                                            "[Amplitude] Main Thread Block Render Start": e.renderStart,
                                                            "[Amplitude] Main Thread Block Style And Layout Start": e.styleAndLayoutStart,
                                                            "[Amplitude] Main Thread Block Script Count": i.length
                                                        }), o.length > 0 && {
                                                            "[Amplitude] Main Thread Block Script URLs": o
                                                        }), a.length > 0 && {
                                                            "[Amplitude] Main Thread Block Script Functions": a
                                                        }), s.length > 0 && {
                                                            "[Amplitude] Main Thread Block Script Positions": s
                                                        }), u.length > 0 && {
                                                            "[Amplitude] Main Thread Block Invoker Types": u
                                                        }), l.length > 0 && {
                                                            "[Amplitude] Main Thread Block Invokers": l
                                                        })
                                                    }(c, a) : function(e, t) {
                                                        var n, r = rV(e, t),
                                                            i = null != (n = e.attribution) ? n : [];
                                                        return U(U({
                                                            "[Amplitude] Main Thread Block Source": "long-task",
                                                            "[Amplitude] Main Thread Block Duration": e.duration,
                                                            "[Amplitude] Main Thread Block Blocking Duration": e.duration,
                                                            "[Amplitude] Main Thread Block Start Time": e.startTime
                                                        }, r.length > 0 && {
                                                            "[Amplitude] Main Thread Block Measures": r
                                                        }), i.length > 0 && {
                                                            "[Amplitude] Main Thread Block Attribution": i.map(function(e) {
                                                                return e.name
                                                            })
                                                        })
                                                    }(c, a);
                                                    t.track("[Amplitude] Main Thread Block", d)
                                                }
                                            }
                                        } catch (e) {
                                            r = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                l && !l.done && (s = u.return) && s.call(u)
                                            } finally {
                                                if (r) throw r.error
                                            }
                                        }
                                    });
                                    try {
                                        u.observe({
                                            entryTypes: [o]
                                        })
                                    } catch (e) {
                                        return s.disconnect(), {
                                            unsubscribe: function() {}
                                        }
                                    }
                                    return {
                                        unsubscribe: function() {
                                            u.disconnect(), s.disconnect()
                                        }
                                    }
                                }({
                                    amplitude: o,
                                    options: e,
                                    durationThreshold: a
                                }), n.push(s)), null == (u = null == i ? void 0 : i.loggerProvider) || u.log("".concat(t, " performance tracking has been successfully added."))), [2]
                            })
                        })
                    },
                    execute: function(e) {
                        return q(void 0, void 0, void 0, function() {
                            return B(this, function(t) {
                                return [2, e]
                            })
                        })
                    },
                    teardown: function() {
                        return q(void 0, void 0, void 0, function() {
                            var e, t, r, i;
                            return B(this, function(o) {
                                try {
                                    for (t = (e = V(n)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        t && !t.done && (i = e.return) && i.call(e)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                                return [2]
                            })
                        })
                    }
                }
            };

            function rz(e, t, n) {
                e && function e(t) {
                    var n, r, i = t.json,
                        o = t.targetObject,
                        a = t.allowlist,
                        s = t.excludelist,
                        u = t.ancestors,
                        l = t.parentObject,
                        c = t.targetKey;
                    o || (o = i);
                    var d = Object.keys(o);
                    try {
                        for (var f = V(d), p = f.next(); !p.done; p = f.next()) {
                            var h, v = p.value,
                                g = z(z([], H(u), !1), [v], !1);
                            (h = o[v], "string" == typeof h || "number" == typeof h || "boolean" == typeof h || null == h) ? (!rW(g, a) || rW(g, s)) && delete o[v]: e({
                                json: i,
                                targetObject: o[v],
                                allowlist: a,
                                excludelist: s,
                                ancestors: g,
                                parentObject: o,
                                targetKey: v
                            })
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (r = f.return) && r.call(f)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    0 === Object.keys(o).length && l && c && delete l[c]
                }({
                    json: e,
                    allowlist: t.map(rK),
                    excludelist: n.map(rK),
                    ancestors: []
                })
            }

            function rK(e) {
                return e.startsWith("/") && (e = e.slice(1)), e.split("/").map(function(e) {
                    return e.replace(/~0/g, "~").replace(/~1/g, "/")
                })
            }

            function rW(e, t) {
                return t.some(function(t) {
                    return function e(t, n, r, i) {
                        if (void 0 === r && (r = 0), void 0 === i && (i = 0), i === n.length) return r === t.length;
                        if (r === t.length) {
                            for (; i < n.length && "**" === n[i];) i++;
                            return i === n.length
                        }
                        var o = n[i];
                        if ("**" === o) {
                            if (i + 1 === n.length) return !0;
                            for (var a = r; a <= t.length; a++)
                                if (e(t, n, a, i + 1)) return !0;
                            return !1
                        }
                        return ("*" === o || o === t[r]) && e(t, n, r + 1, i + 1)
                    }(e, t)
                })
            }
            var rY = function() {
                    function e(e) {
                        this.request = e
                    }
                    return e.prototype.headers = function(e) {
                        void 0 === e && (e = []);
                        var t, n, r = this.request.headers,
                            i = {};
                        if (Array.isArray(r)) r.forEach(function(e) {
                            var t = H(e, 2),
                                n = t[0],
                                r = t[1];
                            i[n] = r
                        });
                        else if (r instanceof Headers) r.forEach(function(e, t) {
                            i[t] = e
                        });
                        else if ("object" == typeof r && null !== r) try {
                            for (var o = V(Object.entries(r)), a = o.next(); !a.done; a = o.next()) {
                                var s = H(a.value, 2),
                                    u = s[0],
                                    l = s[1];
                                i[u] = l
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r0(i, {
                            allow: e
                        })
                    }, Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            if ("number" == typeof this._bodySize) return this._bodySize;
                            var e = J();
                            if (null == e ? void 0 : e.TextEncoder) {
                                var t = this.request.body;
                                return this._bodySize = rG(t, 100), this._bodySize
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "method", {
                        get: function() {
                            return this.request.method
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "body", {
                        get: function() {
                            return "string" == typeof this.request.body ? this.request.body : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                return 0 === e.length ? [2, null] : [2, rQ(this.body, e, t)]
                            })
                        })
                    }, e
                }(),
                r$ = function() {
                    function e(e, t) {
                        this.bodyRaw = e, this.requestHeaders = t
                    }
                    return e.prototype.headers = function(e) {
                        return void 0 === e && (e = []), r0(this.requestHeaders, {
                            allow: e
                        })
                    }, Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            return rG(this.bodyRaw, 100)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "body", {
                        get: function() {
                            return "string" == typeof this.bodyRaw ? this.bodyRaw : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                return 0 === e.length ? [2, null] : [2, rQ(this.body, e, t)]
                            })
                        })
                    }, e
                }();

            function rG(e, t) {
                var n, r, i, o, a = J(),
                    s = null == a ? void 0 : a.TextEncoder;
                if (s && null != e) {
                    if ("string" == typeof e) o = e, i = new s().encode(o).length;
                    else if ("u" > typeof Blob && e instanceof Blob) i = (o = e).size;
                    else if ("u" > typeof URLSearchParams && e instanceof URLSearchParams) o = e, i = new s().encode(o.toString()).length;
                    else if (ArrayBuffer.isView(e)) i = (o = e).byteLength;
                    else if (e instanceof ArrayBuffer) i = (o = e).byteLength;
                    else if ("u" > typeof FormData && e instanceof FormData) {
                        var u = 0,
                            l = 0;
                        try {
                            for (var c = V(e.entries()), d = c.next(); !d.done; d = c.next()) {
                                var f = H(d.value, 2),
                                    p = f[0],
                                    h = f[1];
                                if (u += p.length, "string" == typeof h) u += new s().encode(h).length;
                                else {
                                    if (!("u" > typeof Blob && h instanceof Blob)) return;
                                    u += h.size
                                }
                                if (++l >= t) return
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                d && !d.done && (r = c.return) && r.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        i = u
                    } else if ("u" > typeof ReadableStream && e instanceof ReadableStream) {
                        o = e;
                        return
                    }
                    return i
                }
            }
            var rJ = function() {
                    function e(e) {
                        this.response = e
                    }
                    return e.prototype.headers = function(e) {
                        var t;
                        if (void 0 === e && (e = []), this.response.headers instanceof Headers) {
                            var n = this.response.headers,
                                r = {};
                            return null == (t = null == n ? void 0 : n.forEach) || t.call(n, function(e, t) {
                                r[t] = e
                            }), r0(r, {
                                allow: e
                            })
                        }
                    }, Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            if (void 0 !== this._bodySize) return this._bodySize;
                            var e, t, n = null == (t = null == (e = this.response.headers) ? void 0 : e.get) ? void 0 : t.call(e, "content-length"),
                                r = n ? parseInt(n, 10) : void 0;
                            return this._bodySize = r, r
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "status", {
                        get: function() {
                            return this.response.status
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.text = function() {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.clonedResponse || (this.clonedResponse = this.response.clone()), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, Promise.race([this.clonedResponse.text(), new Promise(function(e) {
                                            return setTimeout(function() {
                                                return e(null)
                                            }, 500)
                                        })])];
                                    case 2:
                                        return [2, e.sent()];
                                    case 3:
                                        return e.sent(), [2, null];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (0 === e.length) return [2, null];
                                        return [4, this.text()];
                                    case 1:
                                        return [2, rQ(n.sent(), e, t)]
                                }
                            })
                        })
                    }, e
                }(),
                rX = function() {
                    function e(e, t, n, r) {
                        this.statusCode = e, this.headersString = t, this.size = n, this.getJson = r
                    }
                    return Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            return this.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "status", {
                        get: function() {
                            return this.statusCode
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.headers = function(e) {
                        if (void 0 === e && (e = []), !this.headersString) return {};
                        var t, n, r = {},
                            i = this.headersString.split("\r\n");
                        try {
                            for (var o = V(i), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value,
                                    u = H(s.split(": "), 2),
                                    l = u[0],
                                    c = u[1];
                                l && c && (r[l] = c)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r0(r, {
                            allow: e
                        })
                    }, e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), q(this, void 0, void 0, function() {
                            var n;
                            return B(this, function(r) {
                                return 0 === e.length ? [2, null] : (n = this.getJson()) ? (rz(n, e, t), [2, n]) : [2, null]
                            })
                        })
                    }, e
                }();

            function rQ(e, t, n) {
                if (!e) return null;
                try {
                    var r = JSON.parse(e);
                    return rz(r, t, n), r
                } catch (e) {
                    return null
                }
            }(d = P || (P = {})).REDACT = "redact", d.REMOVE = "remove";
            var rZ = "[REDACTED]",
                r0 = function(e, t) {
                    var n, r, i = t.allow,
                        o = void 0 === i ? [] : i,
                        a = t.strategy,
                        s = void 0 === a ? P.REMOVE : a,
                        u = z([], H(tE), !1),
                        l = {};
                    try {
                        for (var c = V(Object.keys(e)), d = c.next(); !d.done; d = c.next()) {
                            var f = d.value;
                            ! function(t) {
                                var n = t.toLowerCase();
                                u.find(function(e) {
                                    return e.toLowerCase() === n
                                }) ? s === P.REDACT && (l[t] = rZ) : o.find(function(e) {
                                    return e.toLowerCase() === n
                                }) ? l[t] = e[t] : s === P.REDACT && (l[t] = rZ)
                            }(f)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            d && !d.done && (r = c.return) && r.call(c)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return l
                },
                r1 = function() {
                    function e(e, t, n, r, i, o, a, s, u, l, c) {
                        void 0 === a && (a = 0), this.type = e, this.method = t, this.timestamp = n, this.startTime = r, this.url = i, this.requestWrapper = o, this.status = a, this.duration = s, this.responseWrapper = u, this.error = l, this.endTime = c
                    }
                    return e.prototype.toSerializable = function() {
                        var e, t, n, r;
                        return Object.fromEntries(Object.entries({
                            type: this.type,
                            method: this.method,
                            url: this.url,
                            timestamp: this.timestamp,
                            status: this.status,
                            duration: this.duration,
                            error: this.error,
                            startTime: this.startTime,
                            endTime: this.endTime,
                            requestHeaders: null == (e = this.requestWrapper) ? void 0 : e.headers(z([], H(tw), !1)),
                            requestBodySize: null == (t = this.requestWrapper) ? void 0 : t.bodySize,
                            responseHeaders: null == (n = this.responseWrapper) ? void 0 : n.headers(z([], H(tw), !1)),
                            responseBodySize: null == (r = this.responseWrapper) ? void 0 : r.bodySize
                        }).filter(function(e) {
                            var t = H(e, 2);
                            return void 0 !== (t[0], t[1])
                        }))
                    }, e
                }(),
                r2 = function(e, t) {
                    void 0 === t && (t = eg()), this.callback = e, this.id = t
                };

            function r3(e) {
                try {
                    e()
                } catch (e) {}
            }
            var r4 = new(function() {
                    function e(t) {
                        this.eventCallbacks = new Map, this.isObserving = !1, this.logger = t;
                        var n = J();
                        e.isSupported() && (this.globalScope = n)
                    }
                    return e.isSupported = function() {
                        var e = J();
                        return !!e && !!e.fetch
                    }, e.prototype.subscribe = function(e, t) {
                        var n, r, i, o, a, s, u, l, c, d;
                        if (this.logger || (this.logger = t), this.eventCallbacks.set(e.id, e), !this.isObserving) {
                            var f = null == (i = null == (r = null == (n = this.globalScope) ? void 0 : n.XMLHttpRequest) ? void 0 : r.prototype) ? void 0 : i.open,
                                p = null == (s = null == (a = null == (o = this.globalScope) ? void 0 : o.XMLHttpRequest) ? void 0 : a.prototype) ? void 0 : s.send,
                                h = null == (c = null == (l = null == (u = this.globalScope) ? void 0 : u.XMLHttpRequest) ? void 0 : l.prototype) ? void 0 : c.setRequestHeader;
                            f && p && h && this.observeXhr(f, p, h);
                            var v = null == (d = this.globalScope) ? void 0 : d.fetch;
                            v && this.observeFetch(v), this.isObserving = !0
                        }
                    }, e.prototype.unsubscribe = function(e) {
                        this.eventCallbacks.delete(e.id)
                    }, e.prototype.triggerEventCallbacks = function(e) {
                        var t = this;
                        this.eventCallbacks.forEach(function(n) {
                            try {
                                n.callback(e)
                            } catch (e) {
                                r3(function() {
                                    var n;
                                    null == (n = t.logger) || n.debug("an unexpected error occurred while triggering event callbacks", e)
                                })
                            }
                        })
                    }, e.prototype.handleNetworkRequestEvent = function(e, t, n, r, i, o, a) {
                        if (void 0 !== o && void 0 !== a) {
                            var s, u, l, c, d = "GET";
                            if ("object" == typeof t && null !== t && "url" in t && "method" in t ? (u = t.url, d = t.method) : u = null == (s = null == t ? void 0 : t.toString) ? void 0 : s.call(t), u) try {
                                var f = new URL(u);
                                u = "".concat(f.protocol, "//").concat(f.host).concat(f.pathname).concat(f.search).concat(f.hash)
                            } catch (e) {}
                            d = (null == n ? void 0 : n.method) || d, r && (l = r.status), i && (c = {
                                name: i.name || "UnknownError",
                                message: i.message || "An unknown error occurred"
                            }, l = 0);
                            var p = Math.floor(performance.now() - a),
                                h = Math.floor(o + p),
                                v = new r1(e, d, o, o, u, n, l, p, r, c, h);
                            this.triggerEventCallbacks(v)
                        }
                    }, e.prototype.getTimestamps = function() {
                        var e, t;
                        return {
                            startTime: null == (e = Date.now) ? void 0 : e.call(Date),
                            durationStart: null == (t = null == performance ? void 0 : performance.now) ? void 0 : t.call(performance)
                        }
                    }, e.prototype.observeFetch = function(e) {
                        var t = this;
                        this.globalScope && e && (this.globalScope.fetch = function(n, r) {
                            return q(t, void 0, void 0, function() {
                                var t, i, o, a = this;
                                return B(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            try {
                                                t = this.getTimestamps()
                                            } catch (e) {
                                                r3(function() {
                                                    var t;
                                                    return null == (t = a.logger) ? void 0 : t.debug("an unexpected error occurred while retrieving timestamps", e)
                                                })
                                            }
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, e(n, r)];
                                        case 2:
                                            return i = s.sent(), [3, 4];
                                        case 3:
                                            return o = s.sent(), [3, 4];
                                        case 4:
                                            try {
                                                this.handleNetworkRequestEvent("fetch", n, r ? new rY(r) : void 0, i ? new rJ(i) : void 0, o, null == t ? void 0 : t.startTime, null == t ? void 0 : t.durationStart)
                                            } catch (e) {
                                                r3(function() {
                                                    var t;
                                                    return null == (t = a.logger) ? void 0 : t.debug("an unexpected error occurred while handling fetch", e)
                                                })
                                            }
                                            if (i) return [2, i];
                                            throw o
                                    }
                                })
                            })
                        })
                    }, e.createXhrJsonParser = function(e, t) {
                        return function() {
                            var n;
                            try {
                                if ("json" === e.responseType) {
                                    if (null == (n = t.globalScope) ? void 0 : n.structuredClone) return t.globalScope.structuredClone(e.response)
                                } else if (["text", ""].includes(e.responseType)) return JSON.parse(e.responseText)
                            } catch (n) {
                                n instanceof Error && "InvalidStateError" === n.name && r3(function() {
                                    var n;
                                    return null == (n = t.logger) ? void 0 : n.debug("unexpected error when retrieving responseText. responseType='".concat(e.responseType, "'"))
                                })
                            }
                            return null
                        }
                    }, e.prototype.observeXhr = function(t, n, r) {
                        if (this.globalScope && t && n) {
                            var i = this.globalScope.XMLHttpRequest.prototype,
                                o = this;
                            i.open = function() {
                                for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var i = H(n, 2),
                                    a = i[0],
                                    s = i[1];
                                try {
                                    this.$$AmplitudeAnalyticsEvent = U({
                                        method: a,
                                        url: null == (e = null == s ? void 0 : s.toString) ? void 0 : e.call(s),
                                        headers: {}
                                    }, o.getTimestamps())
                                } catch (e) {
                                    r3(function() {
                                        var t;
                                        return null == (t = o.logger) ? void 0 : t.debug("an unexpected error occurred while calling xhr open", e)
                                    })
                                }
                                return t.apply(this, n)
                            }, i.send = function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                var i = this,
                                    a = e.createXhrJsonParser(this, o),
                                    s = t[0],
                                    u = i.$$AmplitudeAnalyticsEvent;
                                return i.$$AmplitudeAnalyticsEvent && i.addEventListener("loadend", function() {
                                    try {
                                        var e = i.getAllResponseHeaders(),
                                            t = i.getResponseHeader("content-length"),
                                            n = new rX(i.status, e, t ? parseInt(t, 10) : void 0, a),
                                            r = i.$$AmplitudeAnalyticsEvent.headers,
                                            l = new r$(s, r);
                                        u.status = i.status, o.handleNetworkRequestEvent("xhr", {
                                            url: u.url,
                                            method: u.method
                                        }, l, n, void 0, u.startTime, u.durationStart)
                                    } catch (e) {
                                        r3(function() {
                                            var t;
                                            return null == (t = o.logger) ? void 0 : t.debug("an unexpected error occurred while handling xhr send", e)
                                        })
                                    }
                                }), n.apply(i, t)
                            }, i.setRequestHeader = function(e, t) {
                                try {
                                    var n = this.$$AmplitudeAnalyticsEvent;
                                    n && (n.headers[e] = t)
                                } catch (e) {
                                    r3(function() {
                                        var t;
                                        return null == (t = o.logger) ? void 0 : t.debug("an unexpected error occurred while calling xhr setRequestHeader", e)
                                    })
                                }
                                r.apply(this, [e, t])
                            }
                        }
                    }, e
                }()),
                r5 = "[Amplitude] Network Request";

            function r6(e) {
                if (e) try {
                    var t, n, r, i, o, a, s, u, l, c = null == (t = J()) ? void 0 : t.location.href,
                        d = new URL(e, c),
                        f = d.searchParams.toString(),
                        p = d.hash.replace("#", ""),
                        h = d.href,
                        v = d.host;
                    d.hash = "", d.search = "";
                    var g = d.href;
                    return {
                        query: f,
                        fragment: p,
                        href: h,
                        hrefWithoutQueryOrHash: g,
                        host: v
                    }
                } catch (t) {
                    try {
                        return i = (r = e.indexOf("#")) >= 0 ? e.slice(r + 1) : "", s = (a = (o = r >= 0 ? e.slice(0, r) : e).indexOf("?")) >= 0 ? o.slice(a + 1) : "", l = (u = a >= 0 ? o.slice(0, a) : o).match(/^[a-z][a-z0-9+.-]*:\/\/([^/?#]+)/i), {
                            query: s,
                            fragment: i,
                            href: e,
                            hrefWithoutQueryOrHash: u,
                            host: null != (n = null == l ? void 0 : l[1]) ? n : ""
                        }
                    } catch (e) {
                        return
                    }
                }
            }

            function r7(e) {
                return {
                    event_type: "[Amplitude] Network Request",
                    event_properties: U(U(U({
                        "[Amplitude] URL": e.url.hrefWithoutQueryOrHash,
                        "[Amplitude] URL Query": e.url.query,
                        "[Amplitude] URL Fragment": e.url.fragment,
                        "[Amplitude] Request Method": e.method,
                        "[Amplitude] Status Code": e.statusCode,
                        "[Amplitude] Start Time": e.startTime,
                        "[Amplitude] Completion Time": e.completionTime,
                        "[Amplitude] Duration": e.duration,
                        "[Amplitude] Request Body Size": e.requestBodySize,
                        "[Amplitude] Response Body Size": e.responseBodySize,
                        "[Amplitude] Request Type": e.requestType,
                        "[Amplitude] Request Headers": e.requestHeaders,
                        "[Amplitude] Response Headers": e.responseHeaders
                    }, "requestBody" in e && {
                        "[Amplitude] Request Body": e.requestBody
                    }), "responseBody" in e && {
                        "[Amplitude] Response Body": e.responseBody
                    }), e.error && {
                        "[Amplitude] Error Code": e.error.code,
                        "[Amplitude] Error Message": e.error.message
                    })
                }
            }

            function r8(e) {
                if ("string" == typeof(null == e ? void 0 : e.url) && e.url.trim() && "string" == typeof e.method && e.method.trim()) {
                    var t, n, r = e.startTime + e.duration;
                    if (Number.isFinite(e.startTime) && !(e.startTime < 0) && Number.isFinite(e.duration) && !(e.duration < 0) && Number.isFinite(r)) {
                        var i = r7(U(U({}, e), {
                            url: r6(e.url),
                            statusCode: null != (t = e.statusCode) ? t : 0,
                            requestType: null != (n = e.requestType) ? n : "custom",
                            completionTime: r
                        }));
                        return U(U({}, i), {
                            event_properties: Object.fromEntries(Object.entries(i.event_properties).filter(function(e) {
                                return void 0 !== H(e, 2)[1]
                            }))
                        })
                    }
                }
            }
            var r9 = "500-599";

            function ie(e, t) {
                return RegExp("^" + t.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".*") + "$").test(e)
            }

            function it(e, t) {
                var n, r, i = t.split(",");
                try {
                    for (var o = V(i), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value,
                            u = H(s.split("-").map(Number), 2),
                            l = u[0],
                            c = u[1];
                        if (e === l && void 0 === c || e >= l && e <= c) return !0
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return !1
            }

            function ir(e) {
                return "object" != typeof e || null === e ? e ? z([], H(tw), !1) : void 0 : 0 !== e.length ? e : void 0
            }

            function ii(e) {
                var t, n, r;
                return !(null == (t = null == e ? void 0 : e.allowlist) ? void 0 : t.length) && !(null == (n = null == e ? void 0 : e.blocklist) ? void 0 : n.length) && !(null == (r = null == e ? void 0 : e.excludelist) ? void 0 : r.length)
            }(I || (I = {})).NetworkObservable = "networkObservable";
            var io = function(e) {
                    void 0 === e && (e = {});
                    var t, n = "@amplitude/plugin-network-capture-browser",
                        r = function() {
                            var e, n = new(t0())(function(e) {
                                var n = new r2(function(t) {
                                    var n = {
                                        event: t,
                                        timestamp: Date.now(),
                                        type: "network"
                                    };
                                    e.next(n)
                                });
                                return r4.subscribe(n, t),
                                    function() {
                                        r4.unsubscribe(n)
                                    }
                            });
                            return (e = {})[I.NetworkObservable] = n, e
                        };
                    return {
                        name: n,
                        type: "enrichment",
                        setup: function(i, o) {
                            return q(void 0, void 0, void 0, function() {
                                var a;
                                return B(this, function(s) {
                                    var u, l, c, d, f, p, h;
                                    return "u" < typeof document && (null == (u = null == (l = J()) ? void 0 : l.navigator) ? void 0 : u.product) !== "ReactNative" || (a = r(), t = null == i ? void 0 : i.loggerProvider, d = (c = {
                                        allObservables: a,
                                        networkTrackingOptions: e,
                                        amplitude: o,
                                        loggerProvider: t
                                    }).allObservables, f = c.networkTrackingOptions, p = c.amplitude, h = c.loggerProvider, A = d.networkObservable.filter(function(e) {
                                        return function(e, t) {
                                            void 0 === t && (t = {});
                                            var n, r, i = r6(e.url);
                                            if (!i) return !1;
                                            var o = i.host;
                                            return !(!1 !== t.ignoreAmplitudeRequests && (ie(o, "*.amplitude.com") || ie(o, "amplitude.com")) || (null == (n = t.ignoreHosts) ? void 0 : n.find(function(e) {
                                                return ie(o, e)
                                            }))) && (!!t.captureRules || void 0 === e.status || !!it(e.status, r9)) && (!t.captureRules || (z([], H(t.captureRules), !1).reverse().find(function(t) {
                                                if (r = function(e, t, n, r, i) {
                                                        if ((!e.hosts || e.hosts.find(function(e) {
                                                                return ie(t, e)
                                                            })) && (!r || !e.urls || nf(r, e.urls)) && (!i || !e.methods || e.methods.find(function(e) {
                                                                return i.toLowerCase() === e.toLowerCase() || "*" === e
                                                            }))) return !n && 0 !== n || !!it(n, e.statusCodeRange || r9)
                                                    }(t, o, e.status, e.url, e.method)) {
                                                    var n = ir(t.responseHeaders);
                                                    if (e.responseWrapper && n) {
                                                        var i = e.responseWrapper.headers(n);
                                                        i && (e.responseHeaders = i)
                                                    }
                                                    var a = ir(t.requestHeaders);
                                                    if (e.requestWrapper && a) {
                                                        var s = e.requestWrapper.headers(a);
                                                        s && (e.requestHeaders = s)
                                                    }
                                                    if (e.responseWrapper && t.responseBody && !ii(t.responseBody)) {
                                                        var u = t.responseBody.excludelist || t.responseBody.blocklist;
                                                        e.responseBodyJson = e.responseWrapper.json(t.responseBody.allowlist, u)
                                                    }
                                                    if (e.requestWrapper && t.requestBody && !ii(t.requestBody)) {
                                                        var u = t.requestBody.excludelist || t.requestBody.blocklist;
                                                        e.requestBodyJson = e.requestWrapper.json(t.requestBody.allowlist, u)
                                                    }
                                                }
                                                return void 0 !== r
                                            }), !!r)) && !(e.requestWrapper && function(e, t) {
                                                if (e.includes("amplitude.com")) try {
                                                    var n = t.body;
                                                    if ("string" != typeof n) return !1;
                                                    if (JSON.parse(n).events.find(function(e) {
                                                            return e.event_type === r5
                                                        })) return !0
                                                } catch (e) {}
                                                return !1
                                            }(o, e.requestWrapper))
                                        }(e.event, f)
                                    }).subscribe(function(e) {
                                        var t, n, r = e.event,
                                            i = r6(r.url);
                                        if (i) {
                                            var o = null == (t = r.responseWrapper) ? void 0 : t.bodySize,
                                                a = null == (n = r.requestWrapper) ? void 0 : n.bodySize;
                                            ! function(e, t, n, r) {
                                                q(this, void 0, void 0, function() {
                                                    var i, o, a;
                                                    return B(this, function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                if (!(t.requestBodyJson || t.responseBodyJson)) return [3, 2];
                                                                return [4, Promise.all([t.requestBodyJson, t.responseBodyJson])];
                                                            case 1:
                                                                if (o = (i = H.apply(void 0, [s.sent(), 2]))[0], a = i[1], o) try {
                                                                    e["[Amplitude] Request Body"] = JSON.stringify(o)
                                                                } catch (e) {
                                                                    null == r || r.debug("Failed to stringify request body", e)
                                                                }
                                                                if (a) try {
                                                                    e["[Amplitude] Response Body"] = JSON.stringify(a)
                                                                } catch (e) {
                                                                    null == r || r.debug("Failed to stringify response body")
                                                                }
                                                                s.label = 2;
                                                            case 2:
                                                                return null == n || n.track(r5, e), [2]
                                                        }
                                                    })
                                                })
                                            }(r7({
                                                url: i,
                                                method: r.method,
                                                statusCode: r.status,
                                                startTime: r.startTime,
                                                completionTime: r.endTime,
                                                duration: r.duration,
                                                requestBodySize: a,
                                                responseBodySize: o,
                                                requestType: r.type,
                                                requestHeaders: r.requestHeaders,
                                                responseHeaders: r.responseHeaders
                                            }).event_properties, r, p, h)
                                        }
                                    }), null == t || t.log("".concat(n, " has been successfully added."))), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(e) {
                                    return A.unsubscribe(), [2]
                                })
                            })
                        }
                    }
                },
                ia = "web-vitals-browser",
                is = "[Amplitude] Web Vitals",
                iu = {
                    LCP: "[Amplitude] LCP",
                    FCP: "[Amplitude] FCP",
                    INP: "[Amplitude] INP",
                    CLS: "[Amplitude] CLS",
                    TTFB: "[Amplitude] TTFB"
                };
            let il = -1,
                ic = e => {
                    addEventListener("pageshow", t => {
                        t.persisted && (il = t.timeStamp, e(t))
                    }, !0)
                },
                id = (e, t, n, r) => {
                    let i, o;
                    return a => {
                        let s;
                        t.value >= 0 && (a || r) && ((o = t.value - (i ? ? 0)) || void 0 === i) && (i = t.value, t.delta = o, s = t.value, t.rating = s > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good", e(t))
                    }
                },
                ip = e => {
                    requestAnimationFrame(() => requestAnimationFrame(() => e()))
                },
                ih = () => {
                    let e = performance.getEntriesByType("navigation")[0];
                    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
                },
                iv = () => ih() ? .activationStart ? ? 0,
                ig = -1,
                im = new Set,
                iy = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
                ib = e => {
                    if ("hidden" === document.visibilityState) {
                        if ("visibilitychange" === e.type)
                            for (let e of im) e();
                        isFinite(ig) || (ig = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", ib, !0))
                    }
                },
                iw = (e = !1) => {
                    if (e && (ig = 1 / 0), ig < 0) {
                        let e = iv();
                        ig = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(t => "hidden" === t.name && t.startTime >= e) ? .startTime) ? ? iy(), addEventListener("visibilitychange", ib, !0), addEventListener("prerenderingchange", ib, !0), ic(() => {
                            setTimeout(() => {
                                ig = iy()
                            })
                        })
                    }
                    return {
                        get firstHiddenTime() {
                            return ig
                        },
                        onHidden(e) {
                            im.add(e)
                        }
                    }
                },
                iE = (e, t = -1, n, r = 0, i, o, a) => {
                    let s = ih(),
                        u = s ? .navigationId || 0,
                        l = "navigate";
                    return n ? l = n : il >= 0 ? l = "back-forward-cache" : s && (document.prerendering || iv() > 0 ? l = "prerender" : document.wasDiscarded ? l = "restore" : s.type && (l = s.type.replace(/_/g, "-"))), {
                        name: e,
                        value: t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: `v6-${Date.now()}-${Math.floor(0x82f79cd8fff*Math.random())+1e12}`,
                        navigationType: l,
                        navigationId: r || u,
                        navigationInteractionId: i,
                        navigationURL: o || s ? .name,
                        navigationStartTime: a || 0
                    }
                },
                iS = new WeakMap;

            function ik(e, t) {
                let n = iS.get(t);
                return n || (n = new WeakMap, iS.set(t, n)), n.get(e) || n.set(e, new t), n.get(e)
            }
            class iT {
                h(e) {
                    if (e.hadRecentInput) return;
                    let t = this.o[0],
                        n = this.o.at(-1);
                    this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), this.t ? .(e)
                }
                constructor() {
                    this.i = 0, this.o = []
                }
            }
            let i_ = (e, t, n = {}) => {
                    try {
                        let r = e.filter(e => PerformanceObserver.supportedEntryTypes.includes(e));
                        if (r.length > 0) {
                            let e = new PerformanceObserver(e => {
                                queueMicrotask(() => {
                                    let n = e.getEntries();
                                    r.length > 1 && n.sort((e, t) => e.startTime + e.duration - (t.startTime + t.duration)), t(n)
                                })
                            });
                            for (let t of r) e.observe({
                                type: t,
                                buffered: !0,
                                ...n
                            });
                            return e
                        }
                    } catch {}
                },
                ix = e => globalThis.PerformanceObserver ? .supportedEntryTypes ? .includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation ? .prototype ? .getLargestInteractionContentfulPaint && e && e.reportSoftNavs,
                iP = (e, t) => {
                    if (e.set(t.navigationId, t), e.size > 2) {
                        let t = e.keys().next().value;
                        void 0 !== t && e.delete(t)
                    }
                },
                iI = e => {
                    let t = !1;
                    return () => {
                        t || (e(), t = !0)
                    }
                };
            class iA {}
            let iC = e => {
                    document.prerendering ? addEventListener("prerenderingchange", e, !0) : e()
                },
                iO = [1800, 3e3],
                iR = (e, t = {}) => {
                    let n = ix(t);
                    iC(() => {
                        let r = ik(t, iA),
                            i = iw(),
                            o, a = iE("FCP"),
                            s = i_(["paint"], e => {
                                for (let t of e) "first-contentful-paint" === t.name && (s.disconnect(), t.startTime < i.firstHiddenTime && (a.value = Math.max(t.startTime - iv(), 0), a.entries.push(t), a.navigationId = t.navigationId || a.navigationId, o(!0)))
                            });
                        s && (o = id(e, a, iO, t.reportAllChanges), ic(n => {
                            o = id(e, a = iE("FCP", -1, "back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, il), iO, t.reportAllChanges), ip(() => {
                                a.value = performance.now() - n.timeStamp, o(!0)
                            })
                        })), n && i_(["soft-navigation"], n => {
                            n.forEach(n => {
                                r.l && n.navigationId && iP(r.l, n), (o = id(e, a = iE("FCP", Math.max((n.presentationTime || n.paintTime || 0) - n.startTime, 0), "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), iO, t.reportAllChanges))(!0)
                            })
                        }, t)
                    })
                },
                iD = [.1, .25],
                iL = (e, t = {}) => {
                    let n = iw();
                    iR(iI(() => {
                        let r, i = iE("CLS", 0),
                            o = ik(t, iT),
                            a = (n, a, s, u, l) => {
                                i = iE("CLS", 0, n, a, s, u, l), o.i = 0, r = id(e, i, iD, t.reportAllChanges)
                            },
                            s = (e = !1) => {
                                o.i > i.value && (i.value = o.i, i.entries = o.o), r(e)
                            },
                            u = e => {
                                s(!0), a("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                            },
                            l = e => {
                                for (let t of e) "soft-navigation" !== t.entryType ? o.h(t) : u(t);
                                s()
                            },
                            c = ["layout-shift"];
                        ix(t) && c.push("soft-navigation");
                        let d = i_(c, l);
                        d && (r = id(e, i, iD, t.reportAllChanges), n.onHidden(() => {
                            l(d.takeRecords()), r(!0)
                        }), ic(() => {
                            a("back-forward-cache", i.navigationId, i.navigationInteractionId, i.navigationURL, il), ip(r)
                        }), setTimeout(r))
                    }))
                },
                iN = 0,
                iM = 1 / 0,
                ij = 0,
                iU = e => {
                    for (let t of e) t.interactionId && (iM = Math.min(iM, t.interactionId), iN = (ij = Math.max(ij, t.interactionId)) ? (ij - iM) / 7 + 1 : 0)
                },
                iF = () => r ? iN : performance.interactionCount ? ? 0;
            class iq {
                _() {
                    return iF() - this.u
                }
                M() {
                    this.u = iF(), this.v.length = 0, this.m.clear()
                }
                L(e) {
                    let t = this._(),
                        n = Math.min(this.v.length - 1, Math.floor(t / 50));
                    return t && -1 === n && ("soft-navigation" === e || "back-forward-cache" === e) ? {
                        P: 8,
                        id: -1,
                        entries: []
                    } : this.v[n]
                }
                h(e) {
                    if (this.p ? .(e), !e.interactionId) return;
                    let t = this.v.at(-1),
                        n = this.m.get(e.interactionId);
                    if (n || this.v.length < 10 || e.duration > t.P) {
                        if (n ? e.duration > n.P ? (n.entries = [e], n.P = e.duration) : e.duration === n.P && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                                id: e.interactionId,
                                entries: [e],
                                P: e.duration
                            }, this.m.set(n.id, n), this.v.push(n)), this.v.sort((e, t) => t.P - e.P), this.v.length > 10)
                            for (let e of this.v.splice(10)) this.m.delete(e.id);
                        this.T ? .(n)
                    }
                }
                constructor() {
                    this.u = 0, this.v = [], this.m = new Map
                }
            }
            let iB = e => {
                    let t = 1e3 * ("requestIdleCallback" in globalThis),
                        n = globalThis.requestIdleCallback || setTimeout,
                        r = globalThis.cancelIdleCallback || clearTimeout;
                    if ("hidden" === document.visibilityState) e();
                    else {
                        let i = iI(e),
                            o = -1,
                            a = () => {
                                r(o), i()
                            };
                        addEventListener("visibilitychange", a, {
                            once: !0,
                            capture: !0
                        }), o = n(() => {
                            removeEventListener("visibilitychange", a, {
                                capture: !0
                            }), i()
                        }, {
                            timeout: t
                        })
                    }
                },
                iV = [200, 500],
                iH = (e, t = {}) => {
                    if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
                    let n = iw();
                    iC(() => {
                        "interactionCount" in performance || r || (r = i_(["event"], iU, {
                            durationThreshold: 0
                        }));
                        let i, o = iE("INP"),
                            a = ik(t, iq),
                            s = (n, r, s, u, l) => {
                                a.M(), i = id(e, o = iE("INP", -1, n, r, s, u, l), iV, t.reportAllChanges)
                            },
                            u = () => {
                                let e = a.L(o.navigationType);
                                e && e.P !== o.value && (o.value = e.P, o.entries = e.entries, i())
                            },
                            l = e => {
                                u(), i(!0), s("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime)
                            },
                            c = (e, t = !1) => {
                                iB(() => {
                                    for (let t of e) "soft-navigation" !== t.entryType ? a.h(t) : l(t);
                                    u(), t && i(!0)
                                })
                            },
                            d = ["event", "first-input"];
                        ix(t) && d.push("soft-navigation");
                        let f = i_(d, c, { ...t,
                            durationThreshold: t.durationThreshold ? ? 40
                        });
                        i = id(e, o, iV, t.reportAllChanges), f && (n.onHidden(() => {
                            c(f.takeRecords(), !0)
                        }), ic(() => {
                            s("back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, il)
                        }))
                    })
                };
            class iz {
                h(e) {
                    this.p ? .(e)
                }
            }
            let iK = [2500, 4e3],
                iW = (e, t = {}) => {
                    let n = !1,
                        r = ix(t);
                    iC(() => {
                        let i, o = iw(),
                            a = iE("LCP"),
                            s = ik(t, iz),
                            u = (r, s, u, l, c) => {
                                i = id(e, a = iE("LCP", -1, r, s, u, l, c), iK, t.reportAllChanges), n = !1, "soft-navigation" === r && (o = iw(!0))
                            },
                            l = e => {
                                s.l && e.navigationId && iP(s.l, e), n || i(!0), u("soft-navigation", e.navigationId, e.interactionId, e.name, e.startTime);
                                let t = e.getLargestInteractionContentfulPaint ? .();
                                t && c([t])
                            },
                            c = e => {
                                for (let n of (t.reportAllChanges || r || (e = e.slice(-1)), e)) {
                                    if (!n) continue;
                                    if ("soft-navigation" === n.entryType) {
                                        l(n);
                                        continue
                                    }
                                    let e = 0,
                                        t = [],
                                        r = n.startTime;
                                    if ("largest-contentful-paint" === n.entryType) e = Math.max(n.startTime - iv(), 0), s.h(n), t = [n];
                                    else if ("interaction-contentful-paint" === n.entryType) {
                                        if (!a.navigationId || "interactionId" in n && n.interactionId != a.navigationInteractionId) continue;
                                        e = Math.max((r = n.largestContentfulPaint ? .renderTime || 0) - n.startTime, 0), n.largestContentfulPaint && (s.h(n.largestContentfulPaint), t = [n.largestContentfulPaint])
                                    }
                                    r < o.firstHiddenTime && (a.value = e, a.entries = t, i())
                                }
                            },
                            d = ["largest-contentful-paint"];
                        r && d.push("interaction-contentful-paint", "soft-navigation");
                        let f = i_(d, c);
                        if (f) {
                            i = id(e, a, iK, t.reportAllChanges);
                            let o = ["keydown", "click", "visibilitychange"],
                                s = e => {
                                    if (e.isTrusted && !n) {
                                        let e = a.id;
                                        iB(() => {
                                            if (!n) {
                                                if (!r)
                                                    for (let e of (f.disconnect(), o)) removeEventListener(e, s, {
                                                        capture: !0
                                                    });
                                                e === a.id && (n = !0, i(!0))
                                            }
                                        })
                                    }
                                };
                            for (let e of o) addEventListener(e, s, {
                                capture: !0
                            });
                            ic(r => {
                                u("back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, il), i = id(e, a, iK, t.reportAllChanges), ip(() => {
                                    a.value = performance.now() - r.timeStamp, n = !0, i(!0)
                                })
                            })
                        }
                    })
                },
                iY = [800, 1800],
                i$ = e => {
                    document.prerendering ? iC(() => i$(e)) : "complete" !== document.readyState ? addEventListener("load", () => i$(e), !0) : setTimeout(e)
                },
                iG = (e, t = {}) => {
                    let n = ix(t),
                        r = iE("TTFB"),
                        i = id(e, r, iY, t.reportAllChanges);
                    i$(() => {
                        let o = ih();
                        if (o) {
                            let a = o.responseStart;
                            r.value = Math.max(a - iv(), 0), r.entries = [o], i(!0), ic(() => {
                                (i = id(e, r = iE("TTFB", 0, "back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, il), iY, t.reportAllChanges))(!0)
                            }), n && i_(["soft-navigation"], n => {
                                n.forEach(n => {
                                    n.navigationId && ((r = iE("TTFB", 0, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime)).entries = [n], (i = id(e, r, iY, t.reportAllChanges))(!0))
                                })
                            }, t)
                        }
                    })
                };

            function iJ(e, t) {
                void 0 === t && (t = !1);
                var n, r, i = {
                    value: e.value,
                    rating: e.rating,
                    delta: e.delta,
                    navigationType: e.navigationType,
                    id: e.id,
                    timestamp: Math.floor((r = (null == (n = e.entries[0]) ? void 0 : n.startTime) || 0, performance.timeOrigin + r)),
                    navigationStart: t ? Math.floor(performance.timeOrigin + (e.navigationStartTime || 0)) : Math.floor(performance.timeOrigin)
                };
                return t && (i.navigationId = e.navigationId), i
            }
            var iX = function() {
                    var e = null,
                        t = J(),
                        n = null == t ? void 0 : t.document,
                        r = null == t ? void 0 : t.location;
                    return {
                        name: ia,
                        type: "enrichment",
                        setup: function(t, i) {
                            return q(void 0, void 0, void 0, function() {
                                var o, a;
                                return B(this, function(s) {
                                    return void 0 === n || (o = np((null == r ? void 0 : r.href) || "", t.loggerProvider), a = {
                                        "[Amplitude] Page Domain": (null == r ? void 0 : r.hostname) || "",
                                        "[Amplitude] Page Location": o,
                                        "[Amplitude] Page Path": np((null == r ? void 0 : r.pathname) || "", t.loggerProvider),
                                        "[Amplitude] Page Title": "u" > typeof document && document.title || "",
                                        "[Amplitude] Page URL": np(o.split("?")[0], t.loggerProvider)
                                    }, iW(function(e) {
                                        a["[Amplitude] LCP"] = iJ(e)
                                    }), iR(function(e) {
                                        a["[Amplitude] FCP"] = iJ(e)
                                    }), iH(function(e) {
                                        a["[Amplitude] INP"] = iJ(e)
                                    }), iL(function(e) {
                                        a["[Amplitude] CLS"] = iJ(e)
                                    }), iG(function(e) {
                                        a["[Amplitude] TTFB"] = iJ(e)
                                    }), e = function() {
                                        "hidden" === n.visibilityState && e && (i.track(is, a), n.removeEventListener("visibilitychange", e), e = null)
                                    }, n.addEventListener("visibilitychange", e)), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return e && (null == n || n.removeEventListener("visibilitychange", e)), [2]
                                })
                            })
                        }
                    }
                },
                iQ = Object.values(iu),
                iZ = function() {
                    var e, t = null,
                        n = J(),
                        r = null == n ? void 0 : n.document,
                        i = null == n ? void 0 : n.location,
                        o = !1,
                        a = new Set;
                    return {
                        name: ia,
                        type: "enrichment",
                        setup: function(n, s) {
                            return q(void 0, void 0, void 0, function() {
                                var u, l, c, d, f, p, h, v;
                                return B(this, function(g) {
                                    return void 0 === r || (o = !0, u = new Map, l = -1, c = function(e) {
                                        var t = e.navigationId,
                                            o = u.get(t);
                                        return o || (o = function(e, t, n) {
                                            var r = "",
                                                i = "";
                                            try {
                                                var o = new URL(e);
                                                r = o.hostname, i = o.pathname
                                            } catch (e) {
                                                n.debug("Web vitals plugin is unable to parse page URL: ", e)
                                            }
                                            var a = np(e, n);
                                            return {
                                                "[Amplitude] Page Domain": r,
                                                "[Amplitude] Page Location": a,
                                                "[Amplitude] Page Path": np(i, n),
                                                "[Amplitude] Page Title": t,
                                                "[Amplitude] Page URL": np(a.split("?")[0], n)
                                            }
                                        }(e.navigationURL || (null == i ? void 0 : i.href) || "", r.title || "", n.loggerProvider), u.set(t, o)), o
                                    }, d = function(e) {
                                        a.add(e);
                                        var t = u.get(e);
                                        t && (u.delete(e), iQ.some(function(e) {
                                            return e in t
                                        }) && s.track(is, t))
                                    }, f = function() {
                                        var e, t;
                                        try {
                                            for (var n = V(Array.from(u.keys())), r = n.next(); !r.done; r = n.next()) {
                                                var i = r.value;
                                                d(i)
                                            }
                                        } catch (t) {
                                            e = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                r && !r.done && (t = n.return) && t.call(n)
                                            } finally {
                                                if (e) throw e.error
                                            }
                                        }
                                    }, p = function(t) {
                                        void 0 !== e && clearTimeout(e), e = setTimeout(function() {
                                            var n, r;
                                            e = void 0;
                                            try {
                                                for (var i = V(Array.from(u.keys())), o = i.next(); !o.done; o = i.next()) {
                                                    var a = o.value;
                                                    a < t && d(a)
                                                }
                                            } catch (e) {
                                                n = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    o && !o.done && (r = i.return) && r.call(i)
                                                } finally {
                                                    if (n) throw n.error
                                                }
                                            }
                                        }, 1e3)
                                    }, v = {
                                        reportSoftNavs: !0
                                    }, iW((h = function(e) {
                                        return function(t) {
                                            !(!o || a.has(t.navigationId)) && (c(t)[e] = iJ(t, !0), t.navigationId > l && (-1 !== l && p(t.navigationId), l = t.navigationId))
                                        }
                                    })(iu.LCP), v), iR(h(iu.FCP), v), iH(h(iu.INP), v), iL(h(iu.CLS), v), iG(h(iu.TTFB), v), t = function() {
                                        "hidden" === r.visibilityState && t && f()
                                    }, r.addEventListener("visibilitychange", t)), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(n) {
                                    return o = !1, void 0 !== e && (clearTimeout(e), e = void 0), t && (null == r || r.removeEventListener("visibilitychange", t), t = null), [2]
                                })
                            })
                        }
                    }
                },
                i0 = function() {
                    var e = J();
                    return e && "PerformanceSoftNavigation" in e
                },
                i1 = function(e, t, n) {
                    return void 0 === t && (t = ""), void 0 === n && (n = 10), ["AMP", t, e.substring(0, n)].filter(Boolean).join("_")
                },
                i2 = function(e, t) {
                    return void 0 === t && (t = Date.now()), Date.now() - t > e
                },
                i3 = function(e) {
                    if (Object.keys(e).length > 1e3) return !1;
                    for (var t in e) {
                        var n = e[t];
                        if (!i4(t, n)) return !1
                    }
                    return !0
                },
                i4 = function(e, t) {
                    var n, r;
                    if ("string" != typeof e) return !1;
                    if (Array.isArray(t)) {
                        var i = !0;
                        try {
                            for (var o = V(t), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                if (Array.isArray(s)) return !1;
                                if ("object" == typeof s) i = i && i3(s);
                                else if (!["number", "string"].includes(typeof s)) return !1;
                                if (!i) return !1
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    } else if (null == t) return !1;
                    else if ("object" == typeof t) return i3(t);
                    else if (!["number", "string", "boolean"].includes(typeof t)) return !1;
                    return !0
                },
                i5 = function() {
                    function e() {
                        this._propertySet = new Set, this._properties = {}
                    }
                    return e.prototype.getUserProperties = function() {
                        return U({}, this._properties)
                    }, e.prototype.set = function(e, t) {
                        return this._safeSet(C.SET, e, t), this
                    }, e.prototype.setOnce = function(e, t) {
                        return this._safeSet(C.SET_ONCE, e, t), this
                    }, e.prototype.append = function(e, t) {
                        return this._safeSet(C.APPEND, e, t), this
                    }, e.prototype.prepend = function(e, t) {
                        return this._safeSet(C.PREPEND, e, t), this
                    }, e.prototype.postInsert = function(e, t) {
                        return this._safeSet(C.POSTINSERT, e, t), this
                    }, e.prototype.preInsert = function(e, t) {
                        return this._safeSet(C.PREINSERT, e, t), this
                    }, e.prototype.remove = function(e, t) {
                        return this._safeSet(C.REMOVE, e, t), this
                    }, e.prototype.add = function(e, t) {
                        return this._safeSet(C.ADD, e, t), this
                    }, e.prototype.unset = function(e) {
                        return this._safeSet(C.UNSET, e, "-"), this
                    }, e.prototype.clearAll = function() {
                        return this._properties = {}, this._properties[C.CLEAR_ALL] = "-", this
                    }, e.prototype._safeSet = function(e, t, n) {
                        if (this._validate(e, t, n)) {
                            var r = this._properties[e];
                            return void 0 === r && (r = {}, this._properties[e] = r), r[t] = n, this._propertySet.add(t), !0
                        }
                        return !1
                    }, e.prototype._validate = function(e, t, n) {
                        return !(void 0 !== this._properties[C.CLEAR_ALL] || this._propertySet.has(t)) && (e === C.ADD ? "number" == typeof n : e === C.UNSET || e === C.REMOVE || i4(t, n))
                    }, e
                }();
            (f = C || (C = {})).SET = "$set", f.SET_ONCE = "$setOnce", f.ADD = "$add", f.APPEND = "$append", f.PREPEND = "$prepend", f.REMOVE = "$remove", f.PREINSERT = "$preInsert", f.POSTINSERT = "$postInsert", f.UNSET = "$unset", f.CLEAR_ALL = "$clearAll";
            var i6 = [C.CLEAR_ALL, C.UNSET, C.SET, C.SET_ONCE, C.ADD, C.APPEND, C.PREPEND, C.PREINSERT, C.POSTINSERT, C.REMOVE],
                i7 = function(e, t) {
                    return U(U({}, t), {
                        event_type: b.IDENTIFY,
                        user_properties: e.getUserProperties()
                    })
                },
                i8 = function(e, t, n, r) {
                    var i;
                    return U(U({}, r), {
                        event_type: b.GROUP_IDENTIFY,
                        group_properties: n.getUserProperties(),
                        groups: ((i = {})[e] = t, i)
                    })
                },
                i9 = function(e, t, n) {
                    var r, i = new i5;
                    return i.set(e, t), U(U({}, n), {
                        event_type: b.IDENTIFY,
                        user_properties: i.getUserProperties(),
                        groups: ((r = {})[e] = t, r)
                    })
                },
                oe = {
                    always: "always",
                    ifEmptyCampaign: "ifEmptyCampaign"
                },
                ot = function(e) {
                    var t = e.split(".");
                    return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".")
                },
                on = function(e, t, n, r, i, o) {
                    void 0 === i && (i = !0), e.referrer;
                    var a = e.referring_domain,
                        s = F(e, ["referrer", "referring_domain"]),
                        u = t || {},
                        l = (u.referrer, u.referring_domain),
                        c = F(u, ["referrer", "referring_domain"]),
                        d = n.excludeInternalReferrers;
                    if (d) {
                        var f = oa(d, r);
                        if (!(f instanceof TypeError) && e.referring_domain && oc(e.referring_domain, o)) {
                            if ("always" === f) return os(f, e.referring_domain, r), !1;
                            else if ("ifEmptyCampaign" === f && Object.values(U(U({}, e), {
                                    referring_domain: void 0,
                                    referrer: void 0
                                })).every(function(e) {
                                    return !e
                                })) return os(f, e.referring_domain, r), !1
                        }
                    }
                    if (or(n.excludeReferrers, e.referring_domain)) return r.debug("This is not a new campaign because ".concat(e.referring_domain, " is in the exclude referrer list.")), !1;
                    if (!i && Object.values(e).every(function(e) {
                            return !e
                        }) && t) return r.debug("This is not a new campaign because this is a direct traffic in the same session."), !1;
                    var p = JSON.stringify(s) !== JSON.stringify(c),
                        h = ot(a || "") !== ot(l || ""),
                        v = !t || p || h;
                    return v ? r.debug("This is a new campaign. An $identify event will be sent.") : r.debug("This is not a new campaign because it's the same as the previous one."), v
                },
                or = function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = ""), e.some(function(e) {
                        return e instanceof RegExp ? e.test(t) : e === t
                    })
                },
                oi = function(e, t) {
                    var n = t.startsWith(".") ? t : ".".concat(t);
                    return !!(e.startsWith(".") ? e : ".".concat(e)).endsWith(n)
                },
                oo = function(e) {
                    var t = e;
                    return t ? (t.startsWith(".") && (t = t.substring(1)), [new RegExp("".concat(t.replace(".", "\\."), "$"))]) : []
                },
                oa = function(e, t) {
                    if (!0 === e) return oe.always;
                    if ("object" == typeof e) {
                        var n = e.condition;
                        if ("string" == typeof n && Object.keys(oe).includes(n)) return n;
                        if (void 0 === n) return oe.always
                    }
                    var r = "Invalid configuration provided for attribution.excludeInternalReferrers: ".concat(JSON.stringify(e));
                    return t.error(r), TypeError(r)
                };

            function os(e, t, n) {
                var r = "This is not a new campaign because referring_domain=".concat(t, " is on the same domain as the current page and it is configured to exclude internal referrers");
                "always" === e ? n.debug(r) : "ifEmptyCampaign" === e && n.debug("".concat(r, " with empty campaign parameters"))
            }
            var ou = ["ac.in", "ac.jp", "ac.kr", "ac.th", "ac.uk", "ac.za", "appspot.com", "asn.au", "azurewebsites.net", "cloudfront.net", "myshopify.com", "blogspot.com", "co.ca", "co.in", "co.jp", "co.kr", "co.nz", "co.th", "co.uk", "co.za", "com.ar", "com.au", "com.br", "com.cn", "com.hk", "com.in", "com.jp", "com.kr", "com.mx", "com.pl", "com.sg", "com.tr", "com.tw", "ed.jp", "edu.au", "edu.br", "edu.cn", "edu.hk", "edu.sg", "edu.th", "edu.tr", "edu.tw", "firebaseapp.com", "fly.dev", "gc.ca", "geek.nz", "github.io", "gitlab.io", "go.jp", "go.kr", "go.th", "gob.ar", "gob.mx", "gov.au", "gov.br", "gov.cn", "gov.hk", "gov.in", "gov.pl", "gov.sg", "gov.tr", "gov.tw", "gov.uk", "gov.za", "govt.nz", "gr.jp", "herokuapp.com", "id.au", "idv.hk", "iwi.nz", "lg.jp", "ltd.uk", "maori.nz", "me.uk", "mil.kr", "ne.jp", "ne.kr", "net.au", "net.br", "net.cn", "net.hk", "net.in", "net.nz", "net.pl", "net.sg", "net.tr", "net.tw", "net.za", "onrender.com", "or.jp", "or.kr", "or.th", "org.ar", "org.au", "org.br", "org.cn", "org.hk", "org.in", "org.mx", "org.nz", "org.pl", "org.sg", "org.tw", "org.uk", "org.za", "pages.dev", "pe.kr", "plc.uk", "re.kr", "res.in", "sch.uk", "vercel.app", "netlify.app", "workers.dev"],
                ol = function(e) {
                    var t, n, r = e || (null == (n = null == (t = J()) ? void 0 : t.location) ? void 0 : n.hostname);
                    if (!r) return "";
                    var i = r.split("."),
                        o = i[i.length - 1],
                        a = i[i.length - 2];
                    return (ou.find(function(e) {
                        return r.endsWith(".".concat(e))
                    }) && (o = i[i.length - 2] + "." + i[i.length - 1], a = i[i.length - 3]), a) ? "".concat(a, ".").concat(o) : o
                },
                oc = function(e, t) {
                    var n = J();
                    return !!n && oi(e, (t || "").trim() || ol(n.location.hostname))
                },
                od = function() {
                    function e(e, t) {
                        var n;
                        this.shouldTrackNewCampaign = !1, this.options = U({
                            initialEmptyValue: "EMPTY",
                            resetSessionOnNewCampaign: !1,
                            excludeReferrers: oo((null == (n = t.cookieOptions) ? void 0 : n.domain) || t.topLevelDomain),
                            optOut: t.optOut
                        }, e), this.storage = t.cookieStorage, this.storageKey = i1(t.apiKey, "MKTG"), this.webExpStorageKey = i1(t.apiKey, "MKTG_ORIGINAL"), this.currentCampaign = tb, this.sessionTimeout = t.sessionTimeout, this.lastEventTime = t.lastEventTime, this.logger = t.loggerProvider, this.topLevelDomain = t.topLevelDomain, t.loggerProvider.log("Installing web attribution tracking.")
                    }
                    return e.prototype.init = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.options.optOut) return [2];
                                        return [4, this.fetchCampaign()];
                                    case 1:
                                        if (t = H.apply(void 0, [n.sent(), 2]), this.currentCampaign = t[0], this.previousCampaign = t[1], e = !this.lastEventTime || i2(this.sessionTimeout, this.lastEventTime), !on(this.currentCampaign, this.previousCampaign, this.options, this.logger, e, this.topLevelDomain)) return [3, 3];
                                        return this.shouldTrackNewCampaign = !0, [4, this.storage.set(this.storageKey, this.currentCampaign)];
                                    case 2:
                                        n.sent(), n.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.fetchCampaign = function() {
                        return q(this, void 0, void 0, function() {
                            var e;
                            return B(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.storage.get(this.webExpStorageKey)];
                                    case 1:
                                        if (!(e = t.sent())) return [3, 3];
                                        return [4, this.storage.remove(this.webExpStorageKey)];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [4, Promise.all([e || new tS().parse(), this.storage.get(this.storageKey)])];
                                    case 4:
                                        return [2, t.sent()]
                                }
                            })
                        })
                    }, e.prototype.generateCampaignEvent = function(e) {
                        this.shouldTrackNewCampaign = !1;
                        var t, n, r = (t = this.currentCampaign, n = this.options, i7(Object.entries(U(U({}, tb), t)).reduce(function(e, t) {
                            var r, i = H(t, 2),
                                o = i[0],
                                a = i[1];
                            return (e.setOnce("initial_".concat(o), null != (r = null != a ? a : n.initialEmptyValue) ? r : "EMPTY"), a) ? e.set(o, a) : e.unset(o)
                        }, new i5)));
                        return e && (r.event_id = e), r
                    }, e.prototype.shouldSetSessionIdOnNewCampaign = function() {
                        return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign
                    }, e
                }(),
                of = new Set([b.IDENTIFY, b.GROUP_IDENTIFY]),
                op = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, i, o, a, s, u = null != (t = e.fallbackAttributionEvent) && t,
                        l = J(),
                        c = {},
                        d = !1,
                        f = !1,
                        p = function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, new tS().parse()];
                                        case 1:
                                            return c = e9(e.sent()), u && (null == r || r.log("Tracking attribution fallback event."), null == n || n.track("[Amplitude] Attribution", c)), [2]
                                    }
                                })
                            })
                        },
                        h = function() {
                            p()
                        },
                        v = function(e) {
                            return new Proxy(e, {
                                apply: function(e, t, n) {
                                    Reflect.apply(e, t, n), d && h()
                                }
                            })
                        };
                    return {
                        name: "@amplitude/plugin-event-property-attribution-browser",
                        type: "enrichment",
                        setup: function(e, t) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return n = t, r = e.loggerProvider, d = !0, r.log("Installing event property attribution tracking."), [4, p()];
                                        case 1:
                                            if (u.sent(), !l) return [2];
                                            if (l.addEventListener("popstate", h), !f) {
                                                if (i = Reflect.get(l.history, "pushState"), o = Reflect.get(l.history, "replaceState"), !i || !o) return [2];
                                                a = v(i), l.history.pushState = a, s = v(o), l.history.replaceState = s, f = !0
                                            }
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(t) {
                                    return of.has(e.event_type) || (e.event_properties = U(U({}, c), e.event_properties)), [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                var e, t;
                                return B(this, function(n) {
                                    return l && (l.removeEventListener("popstate", h), e = Reflect.get(l.history, "pushState"), t = Reflect.get(l.history, "replaceState"), f && e === a && i && (l.history.pushState = i), f && t === s && o && (l.history.replaceState = o)), d = !1, f = !1, i = void 0, o = void 0, a = void 0, s = void 0, c = {}, [2]
                                })
                            })
                        }
                    }
                },
                oh = "AMP_CURRENT_PAGE",
                ov = "AMP_PREVIOUS_PAGE",
                og = "AMP_URL_INFO";
            (p = O || (O = {})).Direct = "direct", p.Internal = "internal", p.External = "external";
            var om = new Set([b.IDENTIFY, b.GROUP_IDENTIFY, b.REVENUE]),
                oy = function(e) {
                    var t = (void 0 === e ? {} : e).internalDomains,
                        n = void 0 === t ? [] : t,
                        r = J(),
                        i = void 0,
                        o = !1,
                        a = void 0,
                        s = !1,
                        u = !1,
                        l = function(e) {
                            var t;
                            try {
                                t = new URL(e).hostname
                            } catch (e) {
                                null == a || a.error("Could not parse URL: ", e)
                            }
                            return t
                        },
                        c = function(e) {
                            var t = "u" > typeof location && location.hostname || "",
                                r = e ? l(e) : void 0;
                            if (!r) return O.Direct;
                            var i = n.some(function(e) {
                                    return -1 !== t.indexOf(e)
                                }),
                                o = n.some(function(e) {
                                    return -1 !== r.indexOf(e)
                                });
                            return t === r || o && i ? O.Internal : O.External
                        },
                        d = function() {
                            return q(void 0, void 0, void 0, function() {
                                var e, t, n, r, a;
                                return B(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!(i && o)) return [3, 3];
                                            return [4, i.get(og)];
                                        case 1:
                                            return e = s.sent(), t = np("u" > typeof location && location.href || ""), n = (null == e ? void 0 : e[oh]) || "", r = void 0, r = t === n ? (null == e ? void 0 : e[ov]) || "" : n || document.referrer || "", [4, i.set(og, ((a = {})[oh] = t, a[ov] = r, a))];
                                        case 2:
                                            s.sent(), s.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        },
                        f = function() {
                            d()
                        };
                    return {
                        name: "@amplitude/plugin-page-url-enrichment-browser",
                        type: "enrichment",
                        setup: function(e, t) {
                            return q(void 0, void 0, void 0, function() {
                                var t, n, c, p, h, v, g, m;
                                return B(this, function(y) {
                                    switch (y.label) {
                                        case 0:
                                            if ((a = e.loggerProvider).log("Installing @amplitude/plugin-page-url-enrichment-browser"), u = !0, !r) return [3, 7];
                                            try {
                                                i = new e8(r.sessionStorage)
                                            } catch (e) {
                                                null == a || a.debug("sessionStorage is not available in this environment.")
                                            }
                                            return [4, null == i ? void 0 : i.isEnabled()];
                                        case 1:
                                            if (o = null != (m = y.sent()) && m, !(i && o)) return [3, 6];
                                            return n = (t = "u" > typeof document && document.referrer || "") ? l(t) : void 0, c = "u" > typeof location && location.hostname || "", p = np("u" > typeof location && location.href || ""), [4, i.get(og)];
                                        case 2:
                                            if (v = (null == (h = y.sent()) ? void 0 : h[oh]) || "", !(n && n !== c && v !== p)) return [3, 4];
                                            return [4, i.set(og, ((g = {})[oh] = p, g[ov] = t, g))];
                                        case 3:
                                            return y.sent(), [3, 6];
                                        case 4:
                                            return [4, d()];
                                        case 5:
                                            y.sent(), y.label = 6;
                                        case 6:
                                            r.addEventListener("popstate", f), s || (r.history.pushState = new Proxy(r.history.pushState, {
                                                apply: function(e, t, n) {
                                                    var r = H(n, 3),
                                                        i = r[0],
                                                        o = r[1],
                                                        a = r[2];
                                                    e.apply(t, [i, o, a]), u && f()
                                                }
                                            }), r.history.replaceState = new Proxy(r.history.replaceState, {
                                                apply: function(e, t, n) {
                                                    var r = H(n, 3),
                                                        i = r[0],
                                                        o = r[1],
                                                        a = r[2];
                                                    e.apply(t, [i, o, a]), u && f()
                                                }
                                            }), s = !0), y.label = 7;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function(e) {
                            return q(void 0, void 0, void 0, function() {
                                var t, n, r;
                                return B(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = np("u" > typeof location && location.href || ""), !(i && o)) return [3, 2];
                                            return [4, i.get(og)];
                                        case 1:
                                            if (r = (null == (n = a.sent()) ? void 0 : n[ov]) || "", om.has(e.event_type)) return [2, e];
                                            e.event_properties = U(U({}, e.event_properties || {}), {
                                                "[Amplitude] Page Domain": ob(e, "[Amplitude] Page Domain", "u" > typeof location && location.hostname || ""),
                                                "[Amplitude] Page Location": ob(e, "[Amplitude] Page Location", t),
                                                "[Amplitude] Page Path": ob(e, "[Amplitude] Page Path", "u" > typeof location && np(location.pathname) || ""),
                                                "[Amplitude] Page Title": ob(e, "[Amplitude] Page Title", eJ(eG)),
                                                "[Amplitude] Page URL": ob(e, "[Amplitude] Page URL", t.split("?")[0]),
                                                "[Amplitude] Previous Page Location": r,
                                                "[Amplitude] Previous Page Type": c(r)
                                            }), a.label = 2;
                                        case 2:
                                            return [2, e]
                                    }
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (r && (r.removeEventListener("popstate", f), u = !1), !(i && o)) return [3, 2];
                                            return [4, i.set(og, {})];
                                        case 1:
                                            e.sent(), e.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                };

            function ob(e, t, n) {
                return (e.event_properties || (e.event_properties = {}), void 0 === e.event_properties[t]) ? n : e.event_properties[t]
            }
            var ow = function() {
                    var e, t, n;

                    function r(t) {
                        if (t) try {
                            var n = Function("return " + t)();
                            if ("function" == typeof n) return n;
                            null == e || e.error("Custom enrichment body did not evaluate to a function")
                        } catch (t) {
                            null == e || e.error("Could not create custom enrichment function", t)
                        }
                        return function(e) {
                            return e
                        }
                    }
                    return {
                        name: "@amplitude/plugin-custom-enrichment-browser",
                        type: "enrichment",
                        setup: function(i, o) {
                            return q(void 0, void 0, void 0, function() {
                                var o, a;
                                return B(this, function(s) {
                                    return null == (e = i.loggerProvider) || e.log("Installing @amplitude/plugin-custom-enrichment-browser"), (null == (a = i.remoteConfig) ? void 0 : a.fetchRemoteConfig) && (i.remoteConfigClient ? (o = i.remoteConfigClient.subscribe("configs.analyticsSDK.browserSDK.customEnrichment", "all", function(e) {
                                        n = e && "object" == typeof e && null !== e && "body" in e && "string" == typeof e.body ? r(e.body || "") : r("")
                                    }), t = function() {
                                        var e;
                                        return null == (e = i.remoteConfigClient) ? void 0 : e.unsubscribe(o)
                                    }) : null == e || e.debug("Remote config client is not provided, skipping remote config fetch")), [2]
                                })
                            })
                        },
                        execute: function(t) {
                            return q(void 0, void 0, void 0, function() {
                                var r;
                                return B(this, function(i) {
                                    if (n) try {
                                        return [2, null != (r = n(t)) ? r : null]
                                    } catch (t) {
                                        null == e || e.error("Could not execute custom enrichment function", t)
                                    }
                                    return [2, t]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(e) {
                                    return t && t(), [2]
                                })
                            })
                        }
                    }
                },
                oE = "userProperty",
                oS = "eventProperty",
                ok = function(e) {
                    return e === oE || e === oS
                },
                oT = [oE, oS],
                o_ = function(e) {
                    var t = z([], H(new Set((Array.isArray(e) ? e : [e]).filter(ok))), !1);
                    return t.length > 0 ? t : z([], H(oT), !1)
                },
                ox = function(e, t) {
                    return o_(e.trackingMethod).includes(t)
                },
                oP = function(e) {
                    return ox(e, oE)
                },
                oI = function(e) {
                    return {
                        promise: e || Promise.resolve()
                    }
                },
                oA = function() {
                    function e() {
                        this.logLevel = m.None
                    }
                    return e.prototype.disable = function() {
                        this.logLevel = m.None
                    }, e.prototype.enable = function(e) {
                        void 0 === e && (e = m.Warn), this.logLevel = e
                    }, e.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel, m.Verbose
                    }, e.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel, m.Warn
                    }, e.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel, m.Error
                    }, e.prototype.debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel, m.Debug
                    }, e
                }();
            class oC {
                getApplicationContext() {
                    return {
                        versionName: this.versionName,
                        language: oO(),
                        platform: "Web",
                        os: void 0,
                        deviceModel: void 0
                    }
                }
            }
            let oO = () => "u" > typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || "";
            class oR {
                constructor() {
                    this.queue = []
                }
                logEvent(e) {
                    this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
                }
                setEventReceiver(e) {
                    this.receiver = e, this.queue.length > 0 && (this.queue.forEach(t => {
                        e(t)
                    }), this.queue = [])
                }
            }
            let oD = (e, t) => {
                let n = typeof e;
                if (n !== typeof t) return !1;
                for (let r of ["string", "number", "boolean", "undefined"])
                    if (r === n) return e === t;
                if (null == e && null == t) return !0;
                if (null == e || null == t || e.length !== t.length) return !1;
                let r = Array.isArray(e),
                    i = Array.isArray(t);
                if (r !== i) return !1;
                if (r && i) {
                    for (let n = 0; n < e.length; n++)
                        if (!oD(e[n], t[n])) return !1
                } else {
                    if (!oD(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
                    let n = !0;
                    return Object.keys(e).forEach(r => {
                        oD(e[r], t[r]) || (n = !1)
                    }), n
                }
                return !0
            };
            Object.entries || (Object.entries = function(e) {
                let t = Object.keys(e),
                    n = t.length,
                    r = Array(n);
                for (; n--;) r[n] = [t[n], e[t[n]]];
                return r
            });
            class oL {
                constructor() {
                    this.identity = {
                        userProperties: {}
                    }, this.listeners = new Set
                }
                editIdentity() {
                    let e = this,
                        t = Object.assign({}, this.identity.userProperties),
                        n = Object.assign(Object.assign({}, this.identity), {
                            userProperties: t
                        });
                    return {
                        setUserId: function(e) {
                            return n.userId = e, this
                        },
                        setDeviceId: function(e) {
                            return n.deviceId = e, this
                        },
                        setUserProperties: function(e) {
                            return n.userProperties = e, this
                        },
                        setOptOut(e) {
                            return n.optOut = e, this
                        },
                        updateUserProperties: function(e) {
                            let t = n.userProperties || {};
                            for (let [n, r] of Object.entries(e)) switch (n) {
                                case "$set":
                                    for (let [e, n] of Object.entries(r)) t[e] = n;
                                    break;
                                case "$unset":
                                    for (let e of Object.keys(r)) delete t[e];
                                    break;
                                case "$clearAll":
                                    t = {}
                            }
                            return n.userProperties = t, this
                        },
                        commit: function() {
                            return e.setIdentity(n), this
                        }
                    }
                }
                getIdentity() {
                    return Object.assign({}, this.identity)
                }
                setIdentity(e) {
                    let t = Object.assign({}, this.identity);
                    this.identity = Object.assign({}, e), oD(t, this.identity) || this.listeners.forEach(t => {
                        t(e)
                    })
                }
                addIdentityListener(e) {
                    this.listeners.add(e)
                }
                removeIdentityListener(e) {
                    this.listeners.delete(e)
                }
            }
            let oN = "u" > typeof globalThis || "u" > typeof globalThis ? globalThis : self;
            class oM {
                constructor() {
                    this.identityStore = new oL, this.eventBridge = new oR, this.applicationContextProvider = new oC
                }
                static getInstance(e) {
                    return oN.analyticsConnectorInstances || (oN.analyticsConnectorInstances = {}), oN.analyticsConnectorInstances[e] || (oN.analyticsConnectorInstances[e] = new oM), oN.analyticsConnectorInstances[e]
                }
            }
            var oj = function(e) {
                    return void 0 === e || "" === e ? tr : e
                },
                oU = function(e) {
                    return oM.getInstance(oj(e))
                },
                oF = function(e, t) {
                    oU(t).identityStore.editIdentity().setUserId(e).commit()
                },
                oq = function(e, t) {
                    oU(t).identityStore.editIdentity().setDeviceId(e).commit()
                },
                oB = null;
            (h = R || (R = {})).Unknown = "unknown", h.Skipped = "skipped", h.Success = "success", h.RateLimit = "rate_limit", h.PayloadTooLarge = "payload_too_large", h.Invalid = "invalid", h.Failed = "failed", h.Timeout = "Timeout", h.SystemError = "SystemError";
            var oV = "Event skipped due to empty event type",
                oH = function(e, t) {
                    var n = Math.max(t, 1);
                    return e.reduce(function(e, t, r) {
                        var i = Math.floor(r / n);
                        return e[i] || (e[i] = []), e[i].push(t), e
                    }, [])
                },
                oz = function(e, t, n) {
                    return void 0 === t && (t = 0), void 0 === n && (n = R.Unknown), {
                        event: e,
                        code: t,
                        message: n
                    }
                },
                oK = function() {
                    return {
                        flushMaxRetries: 12,
                        flushQueueSize: 200,
                        flushIntervalMillis: 1e4,
                        instanceName: tr,
                        logLevel: m.Warn,
                        loggerProvider: new oA,
                        offline: !1,
                        optOut: !1,
                        serverUrl: ti,
                        serverZone: "US",
                        useBatch: !1
                    }
                },
                oW = function() {
                    function e(e) {
                        this._optOut = !1;
                        var t, n, r, i, o = oK();
                        this.apiKey = e.apiKey, this.flushIntervalMillis = null != (t = e.flushIntervalMillis) ? t : o.flushIntervalMillis, this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries, this.flushQueueSize = e.flushQueueSize || o.flushQueueSize, this.instanceName = oj(e.instanceName), this.loggerProvider = e.loggerProvider || o.loggerProvider, this.logLevel = null != (n = e.logLevel) ? n : o.logLevel, this.minIdLength = e.minIdLength, this.plan = e.plan, this.ingestionMetadata = e.ingestionMetadata, this.offline = void 0 !== e.offline ? e.offline : o.offline, this.optOut = null != (r = e.optOut) ? r : o.optOut, this.serverUrl = e.serverUrl, this.serverZone = e.serverZone || o.serverZone, this.storageProvider = e.storageProvider, this.transportProvider = e.transportProvider, this.useBatch = null != (i = e.useBatch) ? i : o.useBatch, this.loggerProvider.enable(this.logLevel);
                        var a = oY(e.serverUrl, e.serverZone, e.useBatch);
                        this.serverZone = a.serverZone, this.serverUrl = a.serverUrl
                    }
                    return Object.defineProperty(e.prototype, "optOut", {
                        get: function() {
                            return this._optOut
                        },
                        set: function(e) {
                            this._optOut = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                oY = function(e, t, n) {
                    if (void 0 === e && (e = ""), void 0 === t && (t = oK().serverZone), void 0 === n && (n = oK().useBatch), e) return {
                        serverUrl: e,
                        serverZone: void 0
                    };
                    var r, i = ["US", "EU"].includes(t) ? t : oK().serverZone;
                    return {
                        serverZone: i,
                        serverUrl: (r = n, "EU" === i ? r ? ts : to : r ? ta : ti)
                    }
                },
                o$ = function() {
                    function e() {
                        this.sdk = {
                            metrics: {
                                histogram: {}
                            }
                        }
                    }
                    return e.prototype.recordHistogram = function(e, t) {
                        this.sdk.metrics.histogram[e] = t
                    }, e
                }();

            function oG(e) {
                return e >= 200 && e < 300
            }
            var oJ = new Set([ti, to, ta, ts]);

            function oX(e) {
                var t = "";
                try {
                    "body" in e && (t = JSON.stringify(e.body, null, 2))
                } catch (e) {}
                return t
            }
            var oQ = function() {
                    function e(e) {
                        this.name = "amplitude", this.type = "destination", this.retryTimeout = 1e3, this.throttleTimeout = 3e4, this.storageKey = "", this.scheduleId = null, this.scheduledTimeout = 0, this.flushId = null, this.queue = [], this.diagnosticsClient = null == e ? void 0 : e.diagnosticsClient
                    }
                    return e.prototype.setup = function(e) {
                        var t;
                        return q(this, void 0, void 0, function() {
                            var n, r = this;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.config = e, this.storageKey = "".concat(tn, "_").concat(this.config.apiKey.substring(0, 10)), [4, null == (t = this.config.storageProvider) ? void 0 : t.get(this.storageKey)];
                                    case 1:
                                        return (n = i.sent()) && n.length > 0 && Promise.all(n.map(function(e) {
                                            return r.execute(e)
                                        })).catch(), [2, Promise.resolve(void 0)]
                                }
                            })
                        })
                    }, e.prototype.execute = function(e) {
                        var t = this;
                        return e.insert_id || (e.insert_id = eg()), new Promise(function(n) {
                            t.queue.push({
                                event: e,
                                attempts: 0,
                                callback: function(e) {
                                    return n(e)
                                },
                                timeout: 0
                            }), t.schedule(t.config.flushIntervalMillis), t.saveEvents()
                        })
                    }, e.prototype.removeEventsExceedFlushMaxRetries = function(e) {
                        var t = this;
                        return e.filter(function(e) {
                            return e.attempts += 1, e.attempts < t.config.flushMaxRetries || (t.fulfillRequest([e], 500, "Event rejected due to exceeded retry count"), !1)
                        })
                    }, e.prototype.scheduleEvents = function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.schedule(0 === e.timeout ? t.config.flushIntervalMillis : e.timeout)
                        })
                    }, e.prototype.schedule = function(e) {
                        var t = this;
                        if (!this.config.offline && (null === this.scheduleId || this.scheduleId && e > this.scheduledTimeout)) {
                            this.scheduleId && clearTimeout(this.scheduleId), this.scheduledTimeout = e, this.scheduleId = setTimeout(function() {
                                t.queue = t.queue.map(function(e) {
                                    return e.timeout = 0, e
                                }), t.flush(!0)
                            }, e);
                            return
                        }
                    }, e.prototype.resetSchedule = function() {
                        this.scheduleId = null, this.scheduledTimeout = 0
                    }, e.prototype.flush = function(e) {
                        return void 0 === e && (e = !1), q(this, void 0, void 0, function() {
                            var t, n, r = this;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.config.offline) return this.resetSchedule(), this.config.loggerProvider.debug("Skipping flush while offline."), [2];
                                        if (this.flushId) return this.resetSchedule(), this.config.loggerProvider.debug("Skipping flush because previous flush has not resolved."), [2];
                                        return this.flushId = this.scheduleId, this.resetSchedule(), t = [], n = [], this.queue.forEach(function(e) {
                                            return 0 === e.timeout ? t.push(e) : n.push(e)
                                        }), [4, oH(t, this.config.flushQueueSize).reduce(function(t, n) {
                                            return q(r, void 0, void 0, function() {
                                                return B(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, t];
                                                        case 1:
                                                            return r.sent(), [4, this.send(n, e)];
                                                        case 2:
                                                            return [2, r.sent()]
                                                    }
                                                })
                                            })
                                        }, Promise.resolve())];
                                    case 1:
                                        return i.sent(), this.flushId = null, this.scheduleEvents(this.queue), [2]
                                }
                            })
                        })
                    }, e.prototype.send = function(e, t) {
                        var n;
                        return void 0 === t && (t = !0), q(this, void 0, void 0, function() {
                            var r, i, o, a, s;
                            return B(this, function(u) {
                                var l, c, d;
                                switch (u.label) {
                                    case 0:
                                        if (!this.config.apiKey) return [2, this.fulfillRequest(e, 400, "Event rejected due to missing API key")];
                                        r = {
                                            api_key: this.config.apiKey,
                                            events: e.map(function(e) {
                                                var t = e.event;
                                                return t.extra, F(t, ["extra"])
                                            }),
                                            options: {
                                                min_id_length: this.config.minIdLength
                                            },
                                            client_upload_time: new Date().toISOString(),
                                            request_metadata: this.config.requestMetadata
                                        }, this.config.requestMetadata = new o$, u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), l = i = oY(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl, void 0 === (c = this.config.enableRequestBodyCompression) && (c = !1), o = !!oJ.has(l) || c, [4, this.config.transportProvider.send(i, r, o)];
                                    case 2:
                                        if (null === (a = u.sent())) return this.fulfillRequest(e, 0, "Unexpected error occurred"), [2];
                                        if (!t) return "body" in a ? this.fulfillRequest(e, a.statusCode, "".concat(a.status, ": ").concat(oX(a))) : this.fulfillRequest(e, a.statusCode, a.status), [2];
                                        return this.handleResponse(a, e), [3, 4];
                                    case 3:
                                        return s = (d = u.sent()) instanceof Error ? d.message : String(d), this.config.loggerProvider.error(s), null == (n = this.diagnosticsClient) || n.recordEvent("analytics.events.unsuccessful.from.catch.error", {
                                            events: e.map(function(e) {
                                                return e.event.event_type
                                            }),
                                            message: s,
                                            stack_trace: K()
                                        }), this.handleResponse({
                                            status: R.Failed,
                                            statusCode: 0
                                        }, e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.handleResponse = function(e, t) {
                        oG(e.statusCode) || null == (n = this.diagnosticsClient) || n.recordEvent("analytics.events.unsuccessful", {
                            events: t.map(function(e) {
                                return e.event.event_type
                            }),
                            code: e.statusCode,
                            status: e.status,
                            body: oX(e),
                            stack_trace: K()
                        });
                        var n, r = e.status;
                        switch (r) {
                            case R.Success:
                                this.handleSuccessResponse(e, t);
                                break;
                            case R.Invalid:
                                this.handleInvalidResponse(e, t);
                                break;
                            case R.PayloadTooLarge:
                                this.handlePayloadTooLargeResponse(e, t);
                                break;
                            case R.RateLimit:
                                this.handleRateLimitResponse(e, t);
                                break;
                            default:
                                this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(r, "' provided for ").concat(t.length, ' events"}')), this.handleOtherResponse(t)
                        }
                    }, e.prototype.handleSuccessResponse = function(e, t) {
                        this.fulfillRequest(t, e.statusCode, "Event tracked successfully")
                    }, e.prototype.handleInvalidResponse = function(e, t) {
                        var n = this;
                        if (e.body.missingField || e.body.error.startsWith("Invalid API key")) return void this.fulfillRequest(t, e.statusCode, e.body.error);
                        var r = new Set(z(z(z(z([], H(Object.values(e.body.eventsWithInvalidFields)), !1), H(Object.values(e.body.eventsWithMissingFields)), !1), H(Object.values(e.body.eventsWithInvalidIdLengths)), !1), H(e.body.silencedEvents), !1).flat()),
                            i = t.filter(function(t, i) {
                                return !r.has(i) || void n.fulfillRequest([t], e.statusCode, e.body.error)
                            });
                        i.length > 0 && this.config.loggerProvider.warn(oX(e));
                        var o = this.removeEventsExceedFlushMaxRetries(i);
                        this.scheduleEvents(o)
                    }, e.prototype.handlePayloadTooLargeResponse = function(e, t) {
                        if (1 === t.length) return void this.fulfillRequest(t, e.statusCode, e.body.error);
                        this.config.loggerProvider.warn(oX(e)), this.config.flushQueueSize /= 2;
                        var n = this.removeEventsExceedFlushMaxRetries(t);
                        this.scheduleEvents(n)
                    }, e.prototype.handleRateLimitResponse = function(e, t) {
                        var n = this,
                            r = Object.keys(e.body.exceededDailyQuotaUsers),
                            i = Object.keys(e.body.exceededDailyQuotaDevices),
                            o = e.body.throttledEvents,
                            a = new Set(r),
                            s = new Set(i),
                            u = new Set(o),
                            l = t.filter(function(t, r) {
                                return t.event.user_id && a.has(t.event.user_id) || t.event.device_id && s.has(t.event.device_id) ? void n.fulfillRequest([t], e.statusCode, e.body.error) : (u.has(r) && (t.timeout = n.throttleTimeout), !0)
                            });
                        l.length > 0 && this.config.loggerProvider.warn(oX(e));
                        var c = this.removeEventsExceedFlushMaxRetries(l);
                        this.scheduleEvents(c)
                    }, e.prototype.handleOtherResponse = function(e) {
                        var t = this,
                            n = e.map(function(e) {
                                return e.timeout = e.attempts * t.retryTimeout, e
                            }),
                            r = this.removeEventsExceedFlushMaxRetries(n);
                        this.scheduleEvents(r)
                    }, e.prototype.fulfillRequest = function(e, t, n) {
                        var r, i, o;
                        oG(t) ? null == (o = this.diagnosticsClient) || o.increment("analytics.events.sent", e.length) : (null == (r = this.diagnosticsClient) || r.increment("analytics.events.dropped", e.length), null == (i = this.diagnosticsClient) || i.recordEvent("analytics.events.dropped", {
                            events: e.map(function(e) {
                                return e.event.event_type
                            }),
                            code: t,
                            message: n,
                            stack_trace: K()
                        })), this.removeEvents(e), e.forEach(function(e) {
                            return e.callback(oz(e.event, t, n))
                        })
                    }, e.prototype.saveEvents = function() {
                        if (this.config.storageProvider) {
                            var e = this.queue.map(function(e) {
                                return e.event
                            });
                            this.config.storageProvider.set(this.storageKey, e)
                        }
                    }, e.prototype.removeEvents = function(e) {
                        var t = new Set(e);
                        this.queue = this.queue.filter(function(e) {
                            return !t.has(e)
                        }), this.saveEvents()
                    }, e
                }(),
                oZ = function() {
                    function e() {
                        this.name = "identity", this.type = "before", this.identityStore = oU().identityStore
                    }
                    return e.prototype.execute = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t;
                            return B(this, function(n) {
                                return (t = e.user_properties) && this.identityStore.editIdentity().updateUserProperties(t).commit(), [2, e]
                            })
                        })
                    }, e.prototype.setup = function(e) {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(t) {
                                return e.instanceName && (this.identityStore = oU(e.instanceName).identityStore), [2]
                            })
                        })
                    }, e
                }(),
                o0 = function() {
                    function e() {
                        this.productId = "", this.quantity = 1, this.price = 0
                    }
                    return e.prototype.setProductId = function(e) {
                        return this.productId = e, this
                    }, e.prototype.setQuantity = function(e) {
                        return e > 0 && (this.quantity = e), this
                    }, e.prototype.setPrice = function(e) {
                        return this.price = e, this
                    }, e.prototype.setRevenueType = function(e) {
                        return this.revenueType = e, this
                    }, e.prototype.setCurrency = function(e) {
                        return this.currency = e, this
                    }, e.prototype.setRevenue = function(e) {
                        return this.revenue = e, this
                    }, e.prototype.setReceipt = function(e) {
                        return this.receipt = e, this
                    }, e.prototype.setReceiptSig = function(e) {
                        return this.receiptSig = e, this
                    }, e.prototype.setEventProperties = function(e) {
                        try {
                            var t = JSON.parse(JSON.stringify(e));
                            i3(t) && (this.properties = t)
                        } catch (e) {}
                        return this
                    }, e.prototype.getEventProperties = function() {
                        var e = this.properties ? U({}, this.properties) : {};
                        return e[D.REVENUE_PRODUCT_ID] = this.productId, e[D.REVENUE_QUANTITY] = this.quantity, e[D.REVENUE_PRICE] = this.price, e[D.REVENUE_TYPE] = this.revenueType, e[D.REVENUE_CURRENCY] = this.currency, e[D.REVENUE] = this.revenue, e[D.RECEIPT] = this.receipt, e[D.RECEIPT_SIG] = this.receiptSig, e
                    }, e
                }();
            (v = D || (D = {})).REVENUE_PRODUCT_ID = "$productId", v.REVENUE_QUANTITY = "$quantity", v.REVENUE_PRICE = "$price", v.REVENUE_TYPE = "$revenueType", v.REVENUE_CURRENCY = "$currency", v.REVENUE = "$revenue", v.RECEIPT = "$receipt", v.RECEIPT_SIG = "$receiptSig";
            var o1 = function() {
                    function e(e) {
                        this.client = e, this.queue = [], this.applying = !1, this.plugins = [], this.pluginStatus = new Map, this._optOutListeners = []
                    }
                    return e.prototype.register = function(e, t) {
                        var n, r;
                        return q(this, void 0, void 0, function() {
                            var i;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (void 0 === e.name && (e.name = eg(), this.loggerProvider.warn("Plugin name is undefined.\n      Generating a random UUID for plugin name: ".concat(e.name, ".\n      Set a name for the plugin to prevent it from being added multiple times."))), i = e.name, this.pluginStatus.has(i)) return this.loggerProvider.warn("Plugin with name ".concat(i, " already exists, skipping registration")), [2];
                                        return e.type = null != (n = e.type) ? n : "enrichment", this.pluginStatus.set(i, "locked"), [4, null == (r = e.setup) ? void 0 : r.call(e, t, this.client)];
                                    case 1:
                                        if (o.sent(), "locked" !== this.pluginStatus.get(i)) return [2];
                                        return this.plugins.push(e), this.pluginStatus.set(i, "installed"), [2]
                                }
                            })
                        })
                    }, e.prototype.deregister = function(e, t) {
                        var n;
                        return q(this, void 0, void 0, function() {
                            var r, i;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.pluginStatus.delete(e), -1 === (r = this.plugins.findIndex(function(t) {
                                                return t.name === e
                                            }))) return t.loggerProvider.warn("Plugin with name ".concat(e, " does not exist, skipping deregistration")), [2];
                                        return i = this.plugins[r], this.plugins.splice(r, 1), [4, null == (n = i.teardown) ? void 0 : n.call(i)];
                                    case 1:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function(e) {
                        this._clearOptOutListeners(), this.applying = !1, this.plugins.map(function(e) {
                            var t;
                            return null == (t = e.teardown) ? void 0 : t.call(e)
                        }), this.plugins = [], this.pluginStatus.clear(), this.client = e
                    }, e.prototype.push = function(e) {
                        var t = this;
                        return new Promise(function(n) {
                            t.queue.push([e, n]), t.scheduleApply(0)
                        })
                    }, e.prototype.scheduleApply = function(e) {
                        var t = this;
                        this.applying || (this.applying = !0, setTimeout(function() {
                            t.apply(t.queue.shift()).then(function() {
                                t.applying = !1, t.queue.length > 0 && t.scheduleApply(0)
                            })
                        }, e))
                    }, e.prototype.apply = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i, o, a, s, u, l, c, d, f, p, h, v;
                            return B(this, function(g) {
                                switch (g.label) {
                                    case 0:
                                        if (!e) return [2];
                                        t = H(e, 1)[0], n = H(e, 2)[1], this.loggerProvider.log("Timeline.apply: Initial event", t), r = this.plugins.filter(function(e) {
                                            return "before" === e.type
                                        }), g.label = 1;
                                    case 1:
                                        g.trys.push([1, 6, 7, 8]), o = (i = V(r)).next(), g.label = 2;
                                    case 2:
                                        if (o.done) return [3, 5];
                                        if (!(a = o.value).execute) return [3, 4];
                                        return [4, a.execute(U({}, t))];
                                    case 3:
                                        if (null === (s = g.sent())) return this.loggerProvider.log("Timeline.apply: Event filtered out by before plugin '".concat(String(a.name), "', event: ").concat(ep(t))), n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = s, this.loggerProvider.log("Timeline.apply: Event after before plugin '".concat(String(a.name), "', event: ").concat(ep(t))), g.label = 4;
                                    case 4:
                                        return o = i.next(), [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return f = {
                                            error: g.sent()
                                        }, [3, 8];
                                    case 7:
                                        try {
                                            o && !o.done && (p = i.return) && p.call(i)
                                        } finally {
                                            if (f) throw f.error
                                        }
                                        return [7];
                                    case 8:
                                        u = this.plugins.filter(function(e) {
                                            return "enrichment" === e.type || void 0 === e.type
                                        }), g.label = 9;
                                    case 9:
                                        g.trys.push([9, 14, 15, 16]), c = (l = V(u)).next(), g.label = 10;
                                    case 10:
                                        if (c.done) return [3, 13];
                                        if (!(a = c.value).execute) return [3, 12];
                                        return [4, a.execute(U({}, t))];
                                    case 11:
                                        if (null === (s = g.sent())) return this.loggerProvider.log("Timeline.apply: Event filtered out by enrichment plugin '".concat(String(a.name), "', event: ").concat(ep(t))), n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = s, this.loggerProvider.log("Timeline.apply: Event after enrichment plugin '".concat(String(a.name), "', event: ").concat(ep(t))), g.label = 12;
                                    case 12:
                                        return c = l.next(), [3, 10];
                                    case 13:
                                        return [3, 16];
                                    case 14:
                                        return h = {
                                            error: g.sent()
                                        }, [3, 16];
                                    case 15:
                                        try {
                                            c && !c.done && (v = l.return) && v.call(l)
                                        } finally {
                                            if (h) throw h.error
                                        }
                                        return [7];
                                    case 16:
                                        return d = this.plugins.filter(function(e) {
                                            return "destination" === e.type
                                        }), this.loggerProvider.log("Timeline.apply: Final event before destinations, event: ".concat(ep(t))), Promise.all(d.map(function(e) {
                                            var n = U({}, t);
                                            return e.execute(n).catch(function(e) {
                                                return oz(n, 0, String(e))
                                            })
                                        })).then(function(e) {
                                            var r = H(e, 1)[0] || oz(t, 100, "Event not tracked, no destination plugins on the instance");
                                            n(r)
                                        }), [2]
                                }
                            })
                        })
                    }, e.prototype.flush = function() {
                        return q(this, void 0, void 0, function() {
                            var e, t = this;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.queue, this.queue = [], [4, Promise.all(e.map(function(e) {
                                            return t.apply(e)
                                        }))];
                                    case 1:
                                        return n.sent(), [4, Promise.all(this.plugins.filter(function(e) {
                                            return "destination" === e.type
                                        }).map(function(e) {
                                            return e.flush && e.flush()
                                        }))];
                                    case 2:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.addOptOutListener = function(e) {
                        this._optOutListeners.push(e)
                    }, e.prototype._clearOptOutListeners = function() {
                        this._optOutListeners = []
                    }, e.prototype.onIdentityChanged = function(e) {
                        this.plugins.forEach(function(t) {
                            var n;
                            null == (n = t.onIdentityChanged) || n.call(t, e)
                        })
                    }, e.prototype.onSessionIdChanged = function(e) {
                        this.plugins.forEach(function(t) {
                            var n;
                            null == (n = t.onSessionIdChanged) || n.call(t, e)
                        })
                    }, e.prototype.onOptOutChanged = function(e) {
                        this.plugins.forEach(function(t) {
                            var n;
                            null == (n = t.onOptOutChanged) || n.call(t, e)
                        }), this._callOptOutListeners(e)
                    }, e.prototype._callOptOutListeners = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i, o, a;
                            return B(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        s.trys.push([0, 7, 8, 9]), n = (t = V(this._optOutListeners)).next(), s.label = 1;
                                    case 1:
                                        if (n.done) return [3, 6];
                                        r = n.value, s.label = 2;
                                    case 2:
                                        return s.trys.push([2, 4, , 5]), [4, r(e)];
                                    case 3:
                                        return s.sent(), [3, 5];
                                    case 4:
                                        return i = s.sent(), this.loggerProvider.error("Error calling optOut listener", i), [3, 5];
                                    case 5:
                                        return n = t.next(), [3, 1];
                                    case 6:
                                        return [3, 9];
                                    case 7:
                                        return o = {
                                            error: s.sent()
                                        }, [3, 9];
                                    case 8:
                                        try {
                                            n && !n.done && (a = t.return) && a.call(t)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                        return [7];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.onReset = function() {
                        this.plugins.forEach(function(e) {
                            var t;
                            null == (t = e.onReset) || t.call(e)
                        })
                    }, e
                }(),
                o2 = function() {
                    function e(e) {
                        void 0 === e && (e = "$default"), this.initializing = !1, this.isReady = !1, this.q = [], this.dispatchQ = [], this.logEvent = this.track.bind(this), this.timeline = new o1(this), this.name = e
                    }
                    return e.prototype._init = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t = this;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.config = e, this.timeline.reset(this), this.timeline.loggerProvider = this.config.loggerProvider, [4, this.runQueuedFunctions("q", function() {
                                            return t.isReady = !0
                                        })];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.runQueuedFunctions = function(e, t) {
                        return q(this, void 0, void 0, function() {
                            var n, r, i, o, a, s;
                            return B(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        n = this[e], this[e] = [], u.label = 1;
                                    case 1:
                                        u.trys.push([1, 8, 9, 10]), i = (r = V(n)).next(), u.label = 2;
                                    case 2:
                                        if (i.done) return [3, 7];
                                        if (!((o = (0, i.value)()) && "promise" in o)) return [3, 4];
                                        return [4, o.promise];
                                    case 3:
                                        return u.sent(), [3, 6];
                                    case 4:
                                        return [4, o];
                                    case 5:
                                        u.sent(), u.label = 6;
                                    case 6:
                                        return i = r.next(), [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        return a = {
                                            error: u.sent()
                                        }, [3, 10];
                                    case 9:
                                        try {
                                            i && !i.done && (s = r.return) && s.call(r)
                                        } finally {
                                            if (a) throw a.error
                                        }
                                        return [7];
                                    case 10:
                                        if (!this[e].length) return [3, 12];
                                        return [4, this.runQueuedFunctions(e, t)];
                                    case 11:
                                        return u.sent(), [3, 13];
                                    case 12:
                                        null == t || t(), u.label = 13;
                                    case 13:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.track = function(e, t, n) {
                        var r = U(U(U({}, "string" == typeof e ? {
                            event_type: e
                        } : e), n), t && {
                            event_properties: t
                        });
                        return this.userProperties = this.getOperationAppliedUserProperties(r.user_properties), oI(this.dispatch(r))
                    }, e.prototype.identify = function(e, t) {
                        var n = i7(e, t);
                        return this.userProperties = this.getOperationAppliedUserProperties(n.user_properties), oI(this.dispatch(n))
                    }, e.prototype.groupIdentify = function(e, t, n, r) {
                        var i = i8(e, t, n, r);
                        return oI(this.dispatch(i))
                    }, e.prototype.setGroup = function(e, t, n) {
                        var r = i9(e, t, n);
                        return this.userProperties = this.getOperationAppliedUserProperties(r.user_properties), oI(this.dispatch(r))
                    }, e.prototype.revenue = function(e, t) {
                        var n = U(U({}, t), {
                            event_type: b.REVENUE,
                            event_properties: e.getEventProperties()
                        });
                        return oI(this.dispatch(n))
                    }, e.prototype.add = function(e) {
                        return this.isReady ? this._addPlugin(e) : (this.q.push(this._addPlugin.bind(this, e)), oI())
                    }, e.prototype._addPlugin = function(e) {
                        return oI(this.timeline.register(e, this.config))
                    }, e.prototype.remove = function(e) {
                        return this.isReady ? this._removePlugin(e) : (this.q.push(this._removePlugin.bind(this, e)), oI())
                    }, e.prototype._removePlugin = function(e) {
                        return oI(this.timeline.deregister(e, this.config))
                    }, e.prototype.dispatchWithCallback = function(e, t) {
                        if (!this.isReady) return t(oz(e, 0, "Client not initialized"));
                        this.process(e).then(t)
                    }, e.prototype.dispatch = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t = this;
                            return B(this, function(n) {
                                return this.isReady ? [2, this.process(e)] : [2, new Promise(function(n) {
                                    t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n))
                                })]
                            })
                        })
                    }, e.prototype.getOperationAppliedUserProperties = function(e) {
                        var t, n = null != (t = this.userProperties) ? t : {},
                            r = U({}, n);
                        if (void 0 === e) return r;
                        var i = {};
                        return Object.keys(e).forEach(function(t) {
                            Object.values(y).includes(t) || (i[t] = e[t])
                        }), i6.forEach(function(t) {
                            if (Object.keys(e).includes(t)) {
                                var n = e[t];
                                switch (t) {
                                    case y.CLEAR_ALL:
                                        Object.keys(r).forEach(function(e) {
                                            delete r[e]
                                        });
                                        break;
                                    case y.UNSET:
                                        Object.keys(n).forEach(function(e) {
                                            delete r[e]
                                        });
                                        break;
                                    case y.SET:
                                        Object.assign(r, n)
                                }
                            }
                        }), Object.assign(r, i), r
                    }, e.prototype.process = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t, n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (i.trys.push([0, 2, , 3]), this.config.optOut) return [2, oz(e, 0, "Event skipped due to optOut config")];
                                        if ("string" != typeof(t = e.event_type) || 0 === t.trim().length) return this.config.loggerProvider.error(oV), [2, oz(e, 0, oV)];
                                        return e.event_type === b.IDENTIFY && this.timeline.onIdentityChanged({
                                            userProperties: this.userProperties
                                        }), [4, this.timeline.push(e)];
                                    case 1:
                                        return 200 === (n = i.sent()).code ? this.config.loggerProvider.log(n.message) : 100 === n.code ? this.config.loggerProvider.warn(n.message) : this.config.loggerProvider.error(n.message), [2, n];
                                    case 2:
                                        return r = String(i.sent()), this.config.loggerProvider.error(r), [2, n = oz(e, 0, r)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setOptOut = function(e) {
                        this.isReady ? this._setOptOut(e) : this.q.push(this._setOptOut.bind(this, !!e))
                    }, e.prototype._setOptOut = function(e) {
                        this.config.optOut !== e && (this.config.optOut = !!e, this.timeline.onOptOutChanged(e))
                    }, e.prototype.flush = function() {
                        return oI(this.timeline.flush())
                    }, e.prototype.plugin = function(e) {
                        var t = this.timeline.plugins.find(function(t) {
                            return t.name === e
                        });
                        return void 0 === t ? void this.config.loggerProvider.debug("Cannot find plugin with name ".concat(e)) : t
                    }, e.prototype.plugins = function(e) {
                        return this.timeline.plugins.filter(function(t) {
                            return t instanceof e
                        })
                    }, e
                }(),
                o3 = function(e, t) {
                    o4(e, t)
                },
                o4 = function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.name,
                            o = r.args,
                            a = r.resolve,
                            s = e && e[i];
                        if ("function" == typeof s) {
                            var u = s.apply(e, o);
                            "function" == typeof a && a(null == u ? void 0 : u.promise)
                        }
                    }
                    return e
                },
                o5 = function(e) {
                    return e && void 0 !== e._q
                },
                o6 = function() {
                    function e() {
                        this.memoryStorage = new Map
                    }
                    return e.prototype.isEnabled = function() {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(e) {
                                return [2, !0]
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(t) {
                                return [2, this.memoryStorage.get(e)]
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.get(e)];
                                    case 1:
                                        return [2, (t = n.sent()) ? JSON.stringify(t) : void 0]
                                }
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                return this.memoryStorage.set(e, t), [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(t) {
                                return this.memoryStorage.delete(e), [2]
                            })
                        })
                    }, e.prototype.reset = function() {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(e) {
                                return this.memoryStorage.clear(), [2]
                            })
                        })
                    }, e
                }(),
                o7 = function() {
                    var e, t = J();
                    return null == (e = null == t ? void 0 : t.navigator) ? void 0 : e.locks
                },
                o8 = function() {
                    function e(e, t) {
                        void 0 === t && (t = {}), this.options = U({}, e), this.config = t
                    }
                    return e.prototype.isEnabled = function() {
                        return q(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = "AMP_TEST", n = new e(U({}, this.options)), r = String(Date.now()), [4, n.transaction(t, function(e) {
                                            var n, o;
                                            try {
                                                e.set(r);
                                                var a = e.get() === r;
                                                return !a && i.config.diagnosticsClient && (null == (n = i.config.diagnosticsClient) || n.recordEvent("cookies.isEnabled.failure", {
                                                    reason: "Test Value mismatch",
                                                    testKey: t,
                                                    testValue: r,
                                                    sync: !0
                                                })), a
                                            } catch (e) {
                                                if (i.config.diagnosticsClient) {
                                                    var s = e instanceof Error ? e.message : String(e);
                                                    null == (o = i.config.diagnosticsClient) || o.recordEvent("cookies.isEnabled.failure", {
                                                        reason: "Cookie getter/setter failed",
                                                        testKey: t,
                                                        testValue: r,
                                                        error: s,
                                                        sync: !0
                                                    })
                                                }
                                                return !1
                                            } finally {
                                                e.set(null)
                                            }
                                        })];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return q(this, void 0, void 0, function() {
                            var t;
                            return B(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.getRaw(e)];
                                    case 1:
                                        return t = n.sent(), [2, this.decodeCookieValue(e, t)]
                                }
                            })
                        })
                    }, e.prototype.decodeCookieValue = function(e, t) {
                        if (t) try {
                            var n = at(t);
                            if (void 0 === n) return;
                            return JSON.parse(n)
                        } catch (e) {
                            return
                        }
                    }, e.prototype.getSync = function(e) {
                        var t = this.getRawSync(e);
                        return this.decodeCookieValue(e, t)
                    }, e.prototype.getRaw = function(e) {
                        var t, n;
                        return q(this, void 0, void 0, function() {
                            var r, i, o, a, s, u, l, c;
                            return B(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        r = J(), d.label = 1;
                                    case 1:
                                        if (d.trys.push([1, 4, , 5]), !(i = null == r ? void 0 : r.cookieStore)) return [3, 3];
                                        return [4, i.getAll(e)];
                                    case 2:
                                        if (o = d.sent()) {
                                            o.length > 1 && (null == (t = this.config.diagnosticsClient) || t.recordEvent("cookies.duplicate", {
                                                cookies: o.map(function(e) {
                                                    return e.domain
                                                })
                                            }), null == (n = this.config.diagnosticsClient) || n.increment("cookies.duplicate.occurrence.cookieStore"));
                                            try {
                                                for (s = (a = V(o)).next(); !s.done; s = a.next())
                                                    if (u = s.value, an(u.domain, this.options.domain)) return [2, u.value]
                                            } catch (e) {
                                                l = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    s && !s.done && (c = a.return) && c.call(a)
                                                } finally {
                                                    if (l) throw l.error
                                                }
                                            }
                                        }
                                        d.label = 3;
                                    case 3:
                                        return [3, 5];
                                    case 4:
                                        return d.sent(), [3, 5];
                                    case 5:
                                        return [2, this.getRawSync(e)]
                                }
                            })
                        })
                    }, e.prototype.getRawSync = function(e) {
                        var t, n, r = this,
                            i = J(),
                            o = (null != (n = null == (t = null == i ? void 0 : i.document) ? void 0 : t.cookie.split("; ")) ? n : []).filter(function(t) {
                                return 0 === t.indexOf(e + "=")
                            }),
                            a = void 0,
                            s = this.config.duplicateResolverFn;
                        if ("function" == typeof s && o.length > 1 && (a = o.find(function(t) {
                                var n;
                                try {
                                    var i = s(t.substring(e.length + 1));
                                    return i || null == (n = r.config.diagnosticsClient) || n.increment("cookies.duplicate.occurrence.document.cookie"), i
                                } catch (e) {
                                    return !1
                                }
                            })), a || (a = o[0]), a) return a.substring(e.length + 1)
                    }, e.prototype.set = function(e, t) {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(n) {
                                return this.setSync(e, t), [2]
                            })
                        })
                    }, e.prototype.setSync = function(e, t) {
                        var n;
                        try {
                            var r = J();
                            if (!r || !r.document || "function" != typeof r.btoa || "function" != typeof r.encodeURIComponent) return;
                            var i = null != (n = this.options.expirationDays) ? n : 0,
                                o = null !== t ? i : -1,
                                a = void 0;
                            if (o) {
                                var s = new Date;
                                s.setTime(s.getTime() + 24 * o * 36e5), a = s
                            }
                            var u = "".concat(e, "=").concat(r.btoa(r.encodeURIComponent(JSON.stringify(t))));
                            a && (u += "; expires=".concat(a.toUTCString())), u += "; path=/", this.options.domain && (u += "; domain=".concat(this.options.domain)), this.options.secure && (u += "; Secure"), this.options.sameSite && (u += "; SameSite=".concat(this.options.sameSite)), r.document.cookie = u
                        } catch (e) {
                            e instanceof Error ? e.message : String(e)
                        }
                    }, e.prototype.remove = function(e) {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.set(e, null)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function() {
                        return q(this, void 0, void 0, function() {
                            return B(this, function(e) {
                                return [2]
                            })
                        })
                    }, e.isDomainWritable = function(t) {
                        return q(this, void 0, void 0, function() {
                            var n, r;
                            return B(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e.cachedTlds[t]) return [2, !0];
                                        n = "AMP_TLDTEST", r = new e({
                                            domain: "." + t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, r.transaction(n, function(n) {
                                            if (e.cachedTlds[t]) return !0;
                                            try {
                                                n.set(1);
                                                var r = !!n.get();
                                                return r && (e.cachedTlds[t] = !0), r
                                            } finally {
                                                n.set(null)
                                            }
                                        })];
                                    case 2:
                                        return [2, !!i.sent()];
                                    case 3:
                                        return i.sent(), [2, !1];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.transaction = function(e, t) {
                        return q(this, void 0, void 0, function() {
                            var n, r, i = this;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = o7(), r = function() {
                                                return t({
                                                    get: function() {
                                                        return i.getSync(e)
                                                    },
                                                    set: function(t) {
                                                        return i.setSync(e, t)
                                                    }
                                                })
                                            }, !n) return [2, r()];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, n.request("com.amplitude:cookie-lock:".concat(e), r)];
                                    case 2:
                                        return [2, o.sent()];
                                    case 3:
                                        return o.sent(), [2, r()];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.cachedTlds = {}, e
                }(),
                o9 = function(e) {
                    try {
                        return decodeURIComponent(atob(e))
                    } catch (e) {
                        return
                    }
                },
                ae = function(e) {
                    try {
                        return decodeURIComponent(atob(decodeURIComponent(e)))
                    } catch (e) {
                        return
                    }
                },
                at = function(e) {
                    var t;
                    return null != (t = o9(e)) ? t : ae(e)
                },
                an = function(e, t) {
                    if ("" === e && "" === t) return !0;
                    if (!e || !t) return !1;
                    var n = e.startsWith(".") ? e.substring(1) : e,
                        r = t.startsWith(".") ? t.substring(1) : t;
                    return n.toLowerCase() === r.toLowerCase()
                },
                ar = function(e, t, n) {
                    return void 0 === t && (t = ""), void 0 === n && (n = 10), ["AMP", t, e.substring(0, n)].filter(Boolean).join("_")
                },
                ai = function(e) {
                    function t(t) {
                        var n, r, i, o = this;
                        try {
                            i = null == (n = J()) ? void 0 : n.localStorage
                        } catch (e) {
                            null == (r = null == t ? void 0 : t.loggerProvider) || r.debug("Failed to access localStorage. error=".concat(JSON.stringify(e))), i = void 0
                        }
                        return (o = e.call(this, i) || this).loggerProvider = null == t ? void 0 : t.loggerProvider, o
                    }
                    return j(t, e), t.prototype.set = function(t, n) {
                        var r;
                        return q(this, void 0, void 0, function() {
                            var i;
                            return B(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!(Array.isArray(n) && n.length > 1e3)) return [3, 2];
                                        return i = n.length - 1e3, [4, e.prototype.set.call(this, t, n.slice(0, 1e3))];
                                    case 1:
                                        return o.sent(), null == (r = this.loggerProvider) || r.error("Failed to save ".concat(i, " events because the queue length exceeded ").concat(1e3, ".")), [3, 4];
                                    case 2:
                                        return [4, e.prototype.set.call(this, t, n)];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(e8),
                ao = function(e) {
                    function t() {
                        var t;
                        return e.call(this, null == (t = J()) ? void 0 : t.sessionStorage) || this
                    }
                    return j(t, e), t
                }(e8);

            function aa() {
                return "u" > typeof CompressionStream
            }

            function as(e) {
                return q(this, void 0, void 0, function() {
                    var t;
                    return B(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (void 0 === (t = CompressionStream)) return [2, void 0];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, new Response(new Blob([e]).stream().pipeThrough(new t("gzip"))).arrayBuffer()];
                            case 2:
                                return [2, n.sent()];
                            case 3:
                                return n.sent(), [2, void 0];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            var au = function() {
                    function e() {}
                    return e.prototype.send = function(e, t, n) {
                        return Promise.resolve(null)
                    }, e.prototype.buildResponse = function(e) {
                        if ("object" != typeof e) return null;
                        var t, n, r, i, o, a, s, u, l, c, d, f, p, h, v, g, m, y, b, w, E, S, k = e.code || 0,
                            T = this.buildStatus(k);
                        switch (T) {
                            case R.Success:
                                return {
                                    status: T,
                                    statusCode: k,
                                    body: {
                                        eventsIngested: null != (t = e.events_ingested) ? t : 0,
                                        payloadSizeBytes: null != (n = e.payload_size_bytes) ? n : 0,
                                        serverUploadTime: null != (r = e.server_upload_time) ? r : 0
                                    }
                                };
                            case R.Invalid:
                                return {
                                    status: T,
                                    statusCode: k,
                                    body: {
                                        error: null != (i = e.error) ? i : "",
                                        missingField: null != (o = e.missing_field) ? o : "",
                                        eventsWithInvalidFields: null != (a = e.events_with_invalid_fields) ? a : {},
                                        eventsWithMissingFields: null != (s = e.events_with_missing_fields) ? s : {},
                                        eventsWithInvalidIdLengths: null != (u = e.events_with_invalid_id_lengths) ? u : {},
                                        epsThreshold: null != (l = e.eps_threshold) ? l : 0,
                                        exceededDailyQuotaDevices: null != (c = e.exceeded_daily_quota_devices) ? c : {},
                                        silencedDevices: null != (d = e.silenced_devices) ? d : [],
                                        silencedEvents: null != (f = e.silenced_events) ? f : [],
                                        throttledDevices: null != (p = e.throttled_devices) ? p : {},
                                        throttledEvents: null != (h = e.throttled_events) ? h : []
                                    }
                                };
                            case R.PayloadTooLarge:
                                return {
                                    status: T,
                                    statusCode: k,
                                    body: {
                                        error: null != (v = e.error) ? v : ""
                                    }
                                };
                            case R.RateLimit:
                                return {
                                    status: T,
                                    statusCode: k,
                                    body: {
                                        error: null != (g = e.error) ? g : "",
                                        epsThreshold: null != (m = e.eps_threshold) ? m : 0,
                                        throttledDevices: null != (y = e.throttled_devices) ? y : {},
                                        throttledUsers: null != (b = e.throttled_users) ? b : {},
                                        exceededDailyQuotaDevices: null != (w = e.exceeded_daily_quota_devices) ? w : {},
                                        exceededDailyQuotaUsers: null != (E = e.exceeded_daily_quota_users) ? E : {},
                                        throttledEvents: null != (S = e.throttled_events) ? S : []
                                    }
                                };
                            case R.Timeout:
                            default:
                                return {
                                    status: T,
                                    statusCode: k
                                }
                        }
                    }, e.prototype.buildStatus = function(e) {
                        return oG(e) ? R.Success : 429 === e ? R.RateLimit : 413 === e ? R.PayloadTooLarge : 408 === e ? R.Timeout : e >= 400 && e < 500 ? R.Invalid : e >= 500 ? R.Failed : R.Unknown
                    }, e
                }(),
                al = function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var n = e.call(this) || this;
                        return n.state = {
                            done: 4
                        }, n.customHeaders = t, n
                    }
                    return j(t, e), t.prototype.send = function(e, t, n) {
                        return void 0 === n && (n = !1), q(this, void 0, void 0, function() {
                            var r = this;
                            return B(this, function(i) {
                                return [2, new Promise(function(i, o) {
                                    "u" < typeof XMLHttpRequest && o(Error("XHRTransport is not supported."));
                                    var a = new XMLHttpRequest;
                                    a.open("POST", e, !0), a.onreadystatechange = function() {
                                        if (a.readyState === r.state.done) {
                                            var e = a.responseText;
                                            try {
                                                i(r.buildResponse(JSON.parse(e)))
                                            } catch (e) {
                                                i(r.buildResponse({
                                                    code: a.status
                                                }))
                                            }
                                        }
                                    };
                                    var s = {
                                            "Content-Type": "application/json",
                                            Accept: "*/*"
                                        },
                                        u = JSON.stringify(t),
                                        l = n && u.length >= 2048 && aa(),
                                        c = function(e) {
                                            var t, n;
                                            s = U(U({}, r.customHeaders), s);
                                            try {
                                                for (var i = V(Object.entries(s)), o = i.next(); !o.done; o = i.next()) {
                                                    var u = H(o.value, 2),
                                                        l = u[0],
                                                        c = u[1];
                                                    a.setRequestHeader(l, c)
                                                }
                                            } catch (e) {
                                                t = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    o && !o.done && (n = i.return) && n.call(i)
                                                } finally {
                                                    if (t) throw t.error
                                                }
                                            }
                                            a.send(e)
                                        };
                                    q(r, void 0, void 0, function() {
                                        var e;
                                        return B(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    if (!l) return [3, 2];
                                                    return [4, as(u)];
                                                case 1:
                                                    return (e = t.sent()) ? (s["Content-Encoding"] = "gzip", c(e)) : c(u), [3, 3];
                                                case 2:
                                                    c(u), t.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        })
                                    }).catch(o)
                                })]
                            })
                        })
                    }, t
                }(au),
                ac = function(e) {
                    function t(t, n, r) {
                        void 0 === t && (t = {});
                        var i = e.call(this) || this;
                        return i.customHeaders = t, i.enableKeepalive = !1 !== n, i.referrerPolicy = r, i
                    }
                    return j(t, e), t.prototype.send = function(e, t, n) {
                        return void 0 === n && (n = !1), q(this, void 0, void 0, function() {
                            var r, i, o, a, s, u, l, c, d;
                            return B(this, function(f) {
                                switch (f.label) {
                                    case 0:
                                        if ("u" < typeof fetch) throw Error("FetchTransport is not supported");
                                        if (r = JSON.stringify(t), i = n && r.length >= 2048 && aa(), o = r, a = {
                                                "Content-Type": "application/json",
                                                Accept: "*/*"
                                            }, !i) return [3, 2];
                                        return [4, as(r)];
                                    case 1:
                                        (s = f.sent()) && (a["Content-Encoding"] = "gzip", o = s), f.label = 2;
                                    case 2:
                                        return a = U(U({}, this.customHeaders), a), u = "string" == typeof o ? o.length : o.byteLength, l = {
                                            headers: a,
                                            body: o,
                                            method: "POST",
                                            keepalive: this.enableKeepalive && u <= 16384
                                        }, this.referrerPolicy && (l.referrerPolicy = this.referrerPolicy), [4, fetch(e, l)];
                                    case 3:
                                        return [4, (c = f.sent()).text()];
                                    case 4:
                                        d = f.sent();
                                        try {
                                            return [2, this.buildResponse(JSON.parse(d))]
                                        } catch (e) {
                                            return [2, this.buildResponse({
                                                code: c.status
                                            })]
                                        }
                                }
                            })
                        })
                    }, t
                }(au),
                ad = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return j(t, e), t.prototype.send = function(e, t, n) {
                        return void 0 === n && (n = !1), q(this, void 0, void 0, function() {
                            var n = this;
                            return B(this, function(r) {
                                return [2, new Promise(function(r, i) {
                                    var o = J();
                                    if (!(null == o ? void 0 : o.navigator.sendBeacon)) throw Error("SendBeaconTransport is not supported");
                                    try {
                                        var a = JSON.stringify(t);
                                        if (o.navigator.sendBeacon(e, a)) return r(n.buildResponse({
                                            code: 200,
                                            events_ingested: t.events.length,
                                            payload_size_bytes: a.length,
                                            server_upload_time: Date.now()
                                        }));
                                        return r(n.buildResponse({
                                            code: 500
                                        }))
                                    } catch (e) {
                                        i(e)
                                    }
                                })]
                            })
                        })
                    }, t
                }(au),
                af = function(e) {
                    var t = parseInt(e, 32);
                    if (!isNaN(t)) return t
                },
                ap = function(e) {
                    if (atob && escape && e) try {
                        return decodeURIComponent(escape(atob(e)))
                    } catch (e) {
                        return
                    }
                },
                ah = function(e) {
                    function t(t, n, r, i, o, a, s, u, l, c, d, f, p, h, v, g, y, b, w, E, S, k, T, _, x, P, I, A, C, O, R, D, L, N, M, j, U, F, q, B, V, H, z, K) {
                        void 0 === r && (r = new o6), void 0 === i && (i = {
                            domain: "",
                            expiration: 365,
                            sameSite: "Lax",
                            secure: !1,
                            upgrade: !0
                        }), void 0 === u && (u = 1e3), void 0 === l && (l = 5), void 0 === c && (c = 30), void 0 === d && (d = tz), void 0 === g && (g = new oA), void 0 === y && (y = m.Warn), void 0 === w && (w = !1), void 0 === E && (E = !1), void 0 === T && (T = ""), void 0 === _ && (_ = "US"), void 0 === I && (I = 18e5), void 0 === A && (A = new ai({
                            loggerProvider: g
                        })), void 0 === C && (C = {
                            ipAddress: !0,
                            language: !0,
                            platform: !0
                        }), void 0 === O && (O = "fetch"), void 0 === R && (R = !1), void 0 === D && (D = !0), void 0 === F && (F = !0), void 0 === q && (q = 0), void 0 === z && (z = !1);
                        var W, Y = this;
                        (Y = e.call(this, {
                            apiKey: t,
                            instanceName: p,
                            storageProvider: A,
                            transportProvider: am(O)
                        }) || this).apiKey = t, Y.appVersion = n, Y.cookieOptions = i, Y.defaultTracking = o, Y.autocapture = a, Y.flushIntervalMillis = u, Y.flushMaxRetries = l, Y.flushQueueSize = c, Y.identityStorage = d, Y.ingestionMetadata = f, Y.loggerProvider = g, Y.logLevel = y, Y.minIdLength = b, Y.offline = w, Y.partnerId = S, Y.plan = k, Y.serverUrl = T, Y.serverZone = _, Y.sessionTimeout = I, Y.storageProvider = A, Y.trackingOptions = C, Y.transport = O, Y.useBatch = R, Y.fetchRemoteConfig = D, Y.networkTrackingOptions = j, Y.identify = U, Y.enableDiagnostics = F, Y.diagnosticsSampleRate = q, Y.diagnosticsClient = B, Y.remoteConfig = V, Y.topLevelDomain = H, Y.enableRequestBodyCompression = z, Y.customEnrichment = K, Y.version = ej, Y._optOut = !1, Y._cookieStorage = r, Y.deviceId = s, Y.lastEventId = h, Y.lastEventTime = v, Y.optOut = E, Y.deferredSessionId = P, Y.sessionId = x, Y.pageCounter = N, Y.userId = L, Y.debugLogsEnabled = M, Y.loggerProvider.enable(M ? m.Debug : Y.logLevel), Y.networkTrackingOptions = j, Y.identify = U, Y.enableDiagnostics = F, Y.diagnosticsSampleRate = q, Y.diagnosticsClient = B;
                        var $ = null != (W = null == V ? void 0 : V.fetchRemoteConfig) ? W : D;
                        return Y.remoteConfig = Y.remoteConfig || {}, Y.remoteConfig.fetchRemoteConfig = $, Y.fetchRemoteConfig = $, Y.topLevelDomain = H || ol(), Y
                    }
                    return j(t, e), Object.defineProperty(t.prototype, "cookieStorage", {
                        get: function() {
                            return this._cookieStorage
                        },
                        set: function(e) {
                            this._cookieStorage !== e && (this._cookieStorage = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "deviceId", {
                        get: function() {
                            return this._deviceId
                        },
                        set: function(e) {
                            this._deviceId !== e && (this._deviceId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "userId", {
                        get: function() {
                            return this._userId
                        },
                        set: function(e) {
                            this._userId !== e && (this._userId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "sessionId", {
                        get: function() {
                            return this._sessionId
                        },
                        set: function(e) {
                            this._sessionId !== e && (this._sessionId = e, void 0 !== e && void 0 !== this._deferredSessionId && (this._deferredSessionId = void 0), this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "deferredSessionId", {
                        get: function() {
                            return this._deferredSessionId
                        },
                        set: function(e) {
                            this._deferredSessionId !== e && e !== this.sessionId && (this._deferredSessionId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optOut", {
                        get: function() {
                            return this._optOut
                        },
                        set: function(e) {
                            this._optOut !== e && (this._optOut = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventTime", {
                        get: function() {
                            return this._lastEventTime
                        },
                        set: function(e) {
                            this._lastEventTime !== e && (this._lastEventTime = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventId", {
                        get: function() {
                            return this._lastEventId
                        },
                        set: function(e) {
                            this._lastEventId !== e && (this._lastEventId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pageCounter", {
                        get: function() {
                            return this._pageCounter
                        },
                        set: function(e) {
                            this._pageCounter !== e && (this._pageCounter = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "debugLogsEnabled", {
                        set: function(e) {
                            this._debugLogsEnabled !== e && (this._debugLogsEnabled = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.updateStorage = function() {
                        var e = {
                            deviceId: this._deviceId,
                            userId: this._userId,
                            sessionId: this._sessionId,
                            deferredSessionId: this._deferredSessionId,
                            optOut: this._optOut,
                            lastEventTime: this._lastEventTime,
                            lastEventId: this._lastEventId,
                            pageCounter: this._pageCounter,
                            debugLogsEnabled: this._debugLogsEnabled,
                            cookieDomain: void 0
                        };
                        this.cookieStorage instanceof o8 && (e.cookieDomain = this.cookieStorage.options.domain), this.cookieStorage.set(ar(this.apiKey), e)
                    }, t
                }(oW),
                av = function(e, t, n) {
                    switch (void 0 === e && (e = tz), void 0 === t && (t = {}), e) {
                        case "localStorage":
                            return new ai;
                        case "sessionStorage":
                            return new ao;
                        case "none":
                            return new o6;
                        default:
                            return new o8(U(U({}, t), {
                                expirationDays: t.expiration
                            }), n)
                    }
                },
                ag = function(e) {
                    var t, n;
                    return void 0 === e && (e = {}), (null == (t = e.remoteConfig) ? void 0 : t.fetchRemoteConfig) === !0 || (null == (n = e.remoteConfig) ? void 0 : n.fetchRemoteConfig) !== !1 && !1 !== e.fetchRemoteConfig
                },
                am = function(e) {
                    var t = "object" == typeof e ? e.type : e,
                        n = "object" == typeof e ? e.headers : void 0,
                        r = "object" == typeof e ? e.enableKeepalive : void 0,
                        i = "object" == typeof e ? e.referrerPolicy : void 0;
                    return "xhr" === t ? new al(n) : "beacon" === t ? new ad : new ac(n, r, i)
                },
                ay = !1,
                ab = function(e) {
                    ay || void 0 !== e.defaultTracking || (e.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."), ay = !0)
                },
                aw = function() {
                    var e = J(),
                        t = [],
                        n = function(n, r) {
                            (null == e ? void 0 : e.addEventListener) && (null == e || e.addEventListener(n, r), t.push({
                                type: n,
                                handler: r
                            }))
                        },
                        r = function() {
                            t.forEach(function(t) {
                                var n = t.type,
                                    r = t.handler;
                                null == e || e.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-network-checker-browser",
                        type: "before",
                        setup: function(e, t) {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(r) {
                                    return "u" < typeof navigator ? (e.loggerProvider.debug("Network connectivity checker plugin is disabled because navigator is not available."), e.offline = !1) : (e.offline = !navigator.onLine, n("online", function() {
                                        !1 !== e.offline && (e.loggerProvider.debug("Network connectivity changed to online."), e.offline = !1, setTimeout(function() {
                                            t.flush()
                                        }, e.flushIntervalMillis))
                                    }), n("offline", function() {
                                        e.loggerProvider.debug("Network connectivity changed to offline."), e.offline = !0
                                    })), [2]
                                })
                            })
                        },
                        teardown: function() {
                            return q(void 0, void 0, void 0, function() {
                                return B(this, function(e) {
                                    return r(), [2]
                                })
                            })
                        }
                    }
                },
                aE = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.diagnosticsSampleRate = 0, t.enableDiagnostics = !0, t._autocaptureAdapter = null, t
                    }
                    return j(t, e), t.prototype.autocaptureAdapter = function() {
                        var e = this;
                        return this._autocaptureAdapter || (this._autocaptureAdapter = {
                            addPlugins: function() {
                                return q(e, void 0, void 0, function() {
                                    var e, t = this;
                                    return B(this, function(n) {
                                        var r, i, o, a;
                                        switch (n.label) {
                                            case 0:
                                                if (!ey(this.config.defaultTracking, "fileDownloads")) return [3, 2];
                                                return this.config.loggerProvider.debug("Adding file download tracking plugin"), [4, this.add(t$()).promise];
                                            case 1:
                                                n.sent(), n.label = 2;
                                            case 2:
                                                if (!ew(this.config.defaultTracking)) return [3, 4];
                                                return this.config.loggerProvider.debug("Adding form interaction plugin"), [4, this.add(tK()).promise];
                                            case 3:
                                                n.sent(), n.label = 4;
                                            case 4:
                                                if (!eE(this.config.defaultTracking)) return [3, 7];
                                                if (this.config.optOut) return [3, 6];
                                                return this.config.loggerProvider.debug("Adding page view tracking plugin"), [4, this.add(tk(eC(this.config))).promise];
                                            case 5:
                                                return n.sent(), [3, 7];
                                            case 6:
                                                this.timeline.addOptOutListener(function(e) {
                                                    return q(t, void 0, void 0, function() {
                                                        return B(this, function(t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    if (e) return [2];
                                                                    return this.config.loggerProvider.debug("Adding page view tracking plugin"), [4, this.add(tk(eC(this.config))).promise];
                                                                case 1:
                                                                    return t.sent(), [2]
                                                            }
                                                        })
                                                    })
                                                }), n.label = 7;
                                            case 7:
                                                if (!(this.attributionTrackingOptions && eb(this.config.defaultTracking) && ox(this.attributionTrackingOptions, oS))) return [3, 9];
                                                return this.config.loggerProvider.debug("Adding event property attribution plugin"), [4, this.add(op(this.attributionTrackingOptions)).promise];
                                            case 8:
                                                n.sent(), n.label = 9;
                                            case 9:
                                                if (!ek(this.config.autocapture)) return [3, 11];
                                                return this.config.loggerProvider.debug("Adding user interactions plugin (autocapture plugin)"), e = this.diagnosticsClient ? {
                                                    diagnosticsClient: this.diagnosticsClient
                                                } : void 0, [4, this.add(rI(eP(this.config), e)).promise];
                                            case 10:
                                                n.sent(), n.label = 11;
                                            case 11:
                                                if (!e_(this.config.autocapture)) return [3, 13];
                                                return this.config.loggerProvider.debug("Adding frustration interactions plugin"), [4, this.add(rB(eI(this.config))).promise];
                                            case 12:
                                                n.sent(), n.label = 13;
                                            case 13:
                                                if (!eS(this.config.autocapture)) return [3, 15];
                                                return this.config.loggerProvider.debug("Adding network tracking plugin"), [4, this.add(io(eA(this.config))).promise];
                                            case 14:
                                                n.sent(), n.label = 15;
                                            case 15:
                                                if (!("boolean" == typeof(r = this.config.autocapture) ? r : "object" == typeof r && (!0 === r.webVitals || "object" == typeof r.webVitals && null !== r.webVitals))) return [3, 17];
                                                return this.config.loggerProvider.debug("Adding web vitals plugin"), [4, this.add((void 0 === (i = eT(this.config)) && (i = {}), !0 === i.reportSoftNav && i0()) ? iZ() : iX()).promise];
                                            case 16:
                                                n.sent(), n.label = 17;
                                            case 17:
                                                if ("object" != typeof(o = this.config.autocapture) || !0 !== o.performanceTracking && "object" != typeof o.performanceTracking) return [3, 19];
                                                return this.config.loggerProvider.debug("Adding performance tracking plugin"), [4, this.add(rH(ex(this.config))).promise];
                                            case 18:
                                                n.sent(), n.label = 19;
                                            case 19:
                                                if (!ey(this.config.autocapture, "pageUrlEnrichment")) return [3, 21];
                                                return this.config.loggerProvider.debug("Adding referrer page url plugin"), [4, this.add(oy()).promise];
                                            case 20:
                                                n.sent(), n.label = 21;
                                            case 21:
                                                if (!("boolean" == typeof(a = this.config.customEnrichment) ? a : "object" == typeof a && null !== a && !1 !== a.enabled)) return [3, 23];
                                                return this.config.loggerProvider.debug("Adding custom enrichment plugin"), [4, this.add(ow()).promise];
                                            case 22:
                                                n.sent(), n.label = 23;
                                            case 23:
                                                return [2]
                                        }
                                    })
                                })
                            },
                            trackCampaignEventIfNeeded: function(t, n) {
                                if (!e.webAttribution || !e.webAttribution.shouldTrackNewCampaign || !oP(e.webAttribution.options)) return !1;
                                var r = e.webAttribution.generateCampaignEvent(t);
                                return n ? n.push(e.track(r).promise) : e.track(r), e.config.loggerProvider.log("Tracking attribution."), !0
                            },
                            addAttributionTrackingPlugin: function() {
                                return q(e, void 0, void 0, function() {
                                    var e, t = this;
                                    return B(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                if (!(void 0 !== this.attributionTrackingOptions && eb(this.config.defaultTracking) && oP(this.attributionTrackingOptions))) return [3, 2];
                                                return e = this.attributionTrackingOptions, this.config.optOut && this.timeline.addOptOutListener(function(n) {
                                                    return q(t, void 0, void 0, function() {
                                                        return B(this, function(t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    if (n) return [3, 2];
                                                                    return this.webAttribution = new od(e, this.config), [4, this.webAttribution.init()];
                                                                case 1:
                                                                    t.sent(), t.label = 2;
                                                                case 2:
                                                                    return [2]
                                                            }
                                                        })
                                                    })
                                                }), this.webAttribution = new od(e, this.config), [4, this.webAttribution.init()];
                                            case 1:
                                                n.sent(), n.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                            },
                            getDiagnosticsClient: function(t, n, r, i, o) {
                                return q(e, void 0, void 0, function() {
                                    var e;
                                    return B(this, function(a) {
                                        return e = new ed(t.apiKey, n, r, {
                                            enabled: i,
                                            sampleRate: o
                                        }), this.diagnosticsClient = e, e.setTag("library", "".concat(eU, "/").concat(ej)), e.setTag("platform", "Web"), e.setTag("web_environment", function() {
                                            var e = J();
                                            if (!e) return "unknown";
                                            var t = eR(e);
                                            return eD(e) ? t ? "chrome_extension_service_worker" : "service_worker" : eL(e) ? "web_worker" : void 0 !== e.document ? t ? "chrome_extension" : "browser" : eN(e) ? "node" : "unknown"
                                        }()), "u" > typeof navigator && e.setTag("user_agent", navigator.userAgent), [2, e]
                                    })
                                })
                            },
                            getRemoteConfigClient: function(t, n, r) {
                                return q(e, void 0, void 0, function() {
                                    var e, i, o = this;
                                    return B(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return e = new em(t.apiKey, n, r, null == (i = t.remoteConfig) ? void 0 : i.serverUrl), [4, new Promise(function(t) {
                                                    null == e || e.subscribe("configs.diagnostics.browserSDK", "all", function(e, r, i) {
                                                        if (n.debug("Diagnostics remote configuration received:", ep({
                                                                remoteConfig: e,
                                                                source: r,
                                                                lastFetch: i
                                                            }, null, 2)), e) {
                                                            var a = e.sampleRate;
                                                            "number" != typeof a || isNaN(a) || (o.diagnosticsSampleRate = a);
                                                            var s = e.enabled;
                                                            "boolean" == typeof s && (o.enableDiagnostics = s)
                                                        }
                                                        t()
                                                    })
                                                })];
                                            case 1:
                                                return a.sent(), [2, e]
                                        }
                                    })
                                })
                            },
                            fetchRemoteConfig: function(t, n) {
                                return q(e, void 0, void 0, function() {
                                    return B(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, new Promise(function(e) {
                                                    null == t || t.subscribe("configs.analyticsSDK.browserSDK", "all", function(t, r, i) {
                                                        var o;
                                                        null == (o = n.loggerProvider) || o.debug("Remote configuration received:", ep({
                                                            remoteConfig: t,
                                                            source: r,
                                                            lastFetch: i
                                                        }, null, 2)), t && function(e, t) {
                                                            var n, r;
                                                            if (e) {
                                                                ! function e(t) {
                                                                    if ("object" == typeof t && null !== t && !Array.isArray(t)) {
                                                                        var n, r, i, o, a, s, u, l, c, d, f, p, h, v = Object.keys(t);
                                                                        try {
                                                                            for (var g = V(v), m = g.next(); !m.done; m = g.next()) {
                                                                                var y = m.value;
                                                                                try {
                                                                                    var b = t[y];
                                                                                    "boolean" == typeof(null == b ? void 0 : b.enabled) && (b.enabled ? (delete b.enabled, 0 === Object.keys(b).length && (t[y] = !0)) : t[y] = !1), e(b)
                                                                                } catch (e) {}
                                                                            }
                                                                        } catch (e) {
                                                                            n = {
                                                                                error: e
                                                                            }
                                                                        } finally {
                                                                            try {
                                                                                m && !m.done && (r = g.return) && r.call(g)
                                                                            } finally {
                                                                                if (n) throw n.error
                                                                            }
                                                                        }
                                                                        try {
                                                                            if (null == (c = null == (l = null == (u = t.autocapture) ? void 0 : u.networkTracking) ? void 0 : l.captureRules) ? void 0 : c.length) try {
                                                                                for (var w = V(t.autocapture.networkTracking.captureRules), E = w.next(); !E.done; E = w.next()) {
                                                                                    var S = E.value;
                                                                                    try {
                                                                                        for (var k = (a = void 0, V(["responseHeaders", "requestHeaders"])), T = k.next(); !T.done; T = k.next()) {
                                                                                            var _ = T.value,
                                                                                                x = null != (d = S[_]) ? d : {},
                                                                                                P = x.captureSafeHeaders,
                                                                                                I = x.allowlist;
                                                                                            if (P || I) {
                                                                                                if (void 0 !== I && !Array.isArray(I)) {
                                                                                                    delete S[_];
                                                                                                    continue
                                                                                                }
                                                                                                S[_] = z(z([], H(P ? tw : []), !1), H(null != I ? I : []), !1)
                                                                                            }
                                                                                        }
                                                                                    } catch (e) {
                                                                                        a = {
                                                                                            error: e
                                                                                        }
                                                                                    } finally {
                                                                                        try {
                                                                                            T && !T.done && (s = k.return) && s.call(k)
                                                                                        } finally {
                                                                                            if (a) throw a.error
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } catch (e) {
                                                                                i = {
                                                                                    error: e
                                                                                }
                                                                            } finally {
                                                                                try {
                                                                                    E && !E.done && (o = w.return) && o.call(w)
                                                                                } finally {
                                                                                    if (i) throw i.error
                                                                                }
                                                                            }
                                                                        } catch (e) {}(null == (f = t.autocapture) ? void 0 : f.pageViews) !== void 0 && (t.autocapture.screenViews = t.autocapture.pageViews);
                                                                        var A = null == (p = t.autocapture) ? void 0 : p.frustrationInteractions;
                                                                        A && (A.rageClick && (A.rageClicks = A.rageClick, delete A.rageClick), A.deadClick && (A.deadClicks = A.deadClick, delete A.deadClick), A.errorClick && (A.errorClicks = A.errorClick, delete A.errorClick));
                                                                        try {
                                                                            var C = null == (h = t.autocapture) ? void 0 : h.elementInteractions;
                                                                            if (C && "object" == typeof C && (!0 === C.viewportContentUpdated && (C.viewportContentUpdated = {}), !1 === C.viewportContentUpdated && (C.viewportContentUpdated = {
                                                                                    enabled: !1
                                                                                }), void 0 !== C.exposureDuration)) {
                                                                                var O = C.viewportContentUpdated;
                                                                                void 0 === O ? C.viewportContentUpdated = {
                                                                                    exposureDuration: C.exposureDuration
                                                                                } : "object" == typeof O && void 0 === O.exposureDuration && !1 !== O.enabled && (O.exposureDuration = C.exposureDuration), delete C.exposureDuration
                                                                            }
                                                                        } catch (e) {}
                                                                    }
                                                                }(e);
                                                                try {
                                                                    if (t.loggerProvider.debug("Update browser config with remote configuration:", ep(e)), e && "autocapture" in e) {
                                                                        if ("boolean" == typeof e.autocapture && (t.autocapture = e.autocapture), "object" == typeof e.autocapture && null !== e.autocapture) {
                                                                            var i = U({}, e.autocapture);
                                                                            if (void 0 === t.autocapture && (t.autocapture = e.autocapture), "object" == typeof e.autocapture.elementInteractions && null !== e.autocapture.elementInteractions && (null == (n = e.autocapture.elementInteractions.pageUrlAllowlistRegex) ? void 0 : n.length)) {
                                                                                i.elementInteractions = U({}, e.autocapture.elementInteractions);
                                                                                var o = i.elementInteractions,
                                                                                    a = null != (r = o.pageUrlAllowlist) ? r : [],
                                                                                    s = e.autocapture.elementInteractions.pageUrlAllowlistRegex;
                                                                                o.pageUrlAllowlist = tG(a, s, t.loggerProvider), delete o.pageUrlAllowlistRegex
                                                                            }
                                                                            var u = function(e, t) {
                                                                                if ("object" == typeof e && null !== e && (null == (i = e.captureRules) ? void 0 : i.length)) {
                                                                                    var n, r, i, o, a, s = U({}, e),
                                                                                        u = null != (o = s.captureRules) ? o : [];
                                                                                    try {
                                                                                        for (var l = V(u), c = l.next(); !c.done; c = l.next()) {
                                                                                            var d = c.value;
                                                                                            d.urls = tG(null != (a = d.urls) ? a : [], d.urlsRegex, t), delete d.urlsRegex
                                                                                        }
                                                                                    } catch (e) {
                                                                                        n = {
                                                                                            error: e
                                                                                        }
                                                                                    } finally {
                                                                                        try {
                                                                                            c && !c.done && (r = l.return) && r.call(l)
                                                                                        } finally {
                                                                                            if (n) throw n.error
                                                                                        }
                                                                                    }
                                                                                    return s
                                                                                }
                                                                            }(e.autocapture.networkTracking, t.loggerProvider);
                                                                            u && (i.networkTracking = u), "boolean" == typeof t.autocapture && (t.autocapture = U({
                                                                                attribution: t.autocapture,
                                                                                fileDownloads: t.autocapture,
                                                                                formInteractions: t.autocapture,
                                                                                pageViews: t.autocapture,
                                                                                sessions: t.autocapture,
                                                                                elementInteractions: t.autocapture,
                                                                                webVitals: t.autocapture,
                                                                                frustrationInteractions: t.autocapture
                                                                            }, i)), "object" == typeof t.autocapture && (t.autocapture = U(U({}, t.autocapture), i))
                                                                        }
                                                                        t.defaultTracking = t.autocapture
                                                                    }
                                                                    "customEnrichment" in e && null !== e.customEnrichment && !1 !== t.customEnrichment && (t.customEnrichment = e.customEnrichment), t.loggerProvider.debug("Browser config after remote config update:", ep(t))
                                                                } catch (e) {
                                                                    t.loggerProvider.error("Failed to apply remote configuration because of error: ", e)
                                                                }
                                                            }
                                                        }(t, n), e()
                                                    })
                                                })];
                                            case 1:
                                                return e.sent(), [2]
                                        }
                                    })
                                })
                            }
                        }), this._autocaptureAdapter
                    }, t
                }(function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.diagnosticsSampleRate = 0, t.enableDiagnostics = !0, t._diagnosticsSampleRate = 0, t
                    }
                    return j(t, e), t.prototype.init = function(e, t, n) {
                        var r, i;
                        return void 0 === e && (e = ""), arguments.length > 2 ? (r = t, i = n) : "string" == typeof t ? (r = t, i = void 0) : (r = null == t ? void 0 : t.userId, i = t), oI(this._init(U(U({}, i), {
                            userId: r,
                            apiKey: e
                        })))
                    }, t.prototype._init = function(t) {
                        var n, r, i, o, a, s, u, l;
                        return q(this, void 0, void 0, function() {
                            var c, d, f, p, h, v, g, y, b, w, E, S, k, T, _, x = this;
                            return B(this, function(P) {
                                var I, A, C, O, R, D;
                                switch (P.label) {
                                    case 0:
                                        if (this.initializing) return [2];
                                        if (this.initializing = !0, c = ag(t), d = null != (n = t.loggerProvider) ? n : new oA, t.loggerProvider || d.enable(null != (r = t.logLevel) ? r : m.Warn), f = null != (i = t.serverZone) ? i : "US", h = this._diagnosticsSampleRate, v = null == (o = t.enableDiagnostics) || o, this.diagnosticsSampleRate = h, this.enableDiagnostics = v, g = this.autocaptureAdapter(), !(c && g)) return [3, 2];
                                        return [4, g.getRemoteConfigClient(t, d, f)];
                                    case 1:
                                        p = P.sent(), h = this.diagnosticsSampleRate, v = this.enableDiagnostics, P.label = 2;
                                    case 2:
                                        return [4, null == g ? void 0 : g.getDiagnosticsClient(t, d, f, v, h)];
                                    case 3:
                                        return y = null != (a = P.sent()) ? a : void 0, [4, (I = t.apiKey, A = t, C = this, O = y, R = {
                                            loggerProvider: d,
                                            serverZone: f,
                                            enableDiagnostics: v,
                                            diagnosticsSampleRate: h
                                        }, void 0 === A && (A = {}), q(void 0, void 0, void 0, function() {
                                            var e, t, n, r, i, o, a, s, u, l, c, d, f, p, h, v, g, m, y, b, w, E, S, k, T, _, x, P, D, L, N, M, j, F, V, z, K, W, Y, $, G, J, X, Q, Z, ee, et, en, er, ei, eo;
                                            return B(this, function(ea) {
                                                var es, eu, el;
                                                switch (ea.label) {
                                                    case 0:
                                                        if (e = A.identityStorage || tz, t = "", !(e === tz && !(null == (E = A.cookieOptions) ? void 0 : E.domain) && (null == (S = A.cookieOptions) ? void 0 : S.domain) !== "")) return [3, 2];
                                                        return [4, (es = void 0, q(void 0, void 0, void 0, function() {
                                                            var e, t, n, r, i, o, a;
                                                            return B(this, function(s) {
                                                                switch (s.label) {
                                                                    case 0:
                                                                        return [4, new o8(void 0, {
                                                                            diagnosticsClient: O
                                                                        }).isEnabled()];
                                                                    case 1:
                                                                        if (!s.sent() || !es && ("u" < typeof location || !location.hostname) || 1 === (t = (e = null != es ? es : location.hostname).split(".")).length) return [2, ""];
                                                                        for (n = [], r = 1, ou.find(function(t) {
                                                                                return e.endsWith(".".concat(t))
                                                                            }) && (r = 2), i = t.length - r - 1; i >= 0; --i) n.push(t.slice(i).join("."));
                                                                        i = 0, s.label = 2;
                                                                    case 2:
                                                                        if (!(i < n.length)) return [3, 7];
                                                                        o = n[i], s.label = 3;
                                                                    case 3:
                                                                        return s.trys.push([3, 5, , 6]), [4, o8.isDomainWritable(o)];
                                                                    case 4:
                                                                        if (s.sent()) return [2, "." + o];
                                                                        return [3, 6];
                                                                    case 5:
                                                                        return a = s.sent(), O && O.recordEvent("cookies.tld.failure", {
                                                                            reason: "Unexpected exception checking domain is writable: ".concat(o),
                                                                            error: a instanceof Error ? a.message : String(a)
                                                                        }), [3, 6];
                                                                    case 6:
                                                                        return i++, [3, 2];
                                                                    case 7:
                                                                        return O && O.recordEvent("cookies.tld.failure", {
                                                                            reason: "Could not determine TLD for host ".concat(e)
                                                                        }), [2, ""]
                                                                }
                                                            })
                                                        }))];
                                                    case 1:
                                                        t = ea.sent(), ea.label = 2;
                                                    case 2:
                                                        return n = U({
                                                            domain: null != (T = null == (k = A.cookieOptions) ? void 0 : k.domain) ? T : t,
                                                            expiration: 365,
                                                            sameSite: "Lax",
                                                            secure: !1,
                                                            upgrade: !0
                                                        }, A.cookieOptions), r = {
                                                            duplicateResolverFn: function(e) {
                                                                var t = at(e);
                                                                return !!t && an(JSON.parse(t).cookieDomain, n.domain)
                                                            },
                                                            diagnosticsClient: O
                                                        }, [4, (eu = i = av(A.identityStorage, n, r), void 0 === (el = null == (x = null == (_ = A.cookieOptions) ? void 0 : _.upgrade) || x) && (el = !0), q(void 0, void 0, void 0, function() {
                                                            var e, t, n, r, i, o, a, s, u;
                                                            return B(this, function(l) {
                                                                switch (l.label) {
                                                                    case 0:
                                                                        return e = "".concat("amp", "_").concat(I.substring(0, 6)), [4, eu.getRaw(e)];
                                                                    case 1:
                                                                        if (!(t = l.sent())) return [2, {
                                                                            optOut: !1
                                                                        }];
                                                                        if (!el) return [3, 3];
                                                                        return [4, eu.remove(e)];
                                                                    case 2:
                                                                        l.sent(), l.label = 3;
                                                                    case 3:
                                                                        return r = (n = H(t.split("."), 6))[0], i = n[1], o = n[2], a = n[3], s = n[4], u = n[5], [2, {
                                                                            deviceId: r,
                                                                            userId: ap(i),
                                                                            sessionId: af(a),
                                                                            lastEventId: af(u),
                                                                            lastEventTime: af(s),
                                                                            optOut: !!o
                                                                        }]
                                                                }
                                                            })
                                                        }))];
                                                    case 3:
                                                        return o = ea.sent(), [4, i.get(ar(I))];
                                                    case 4:
                                                        return a = ea.sent(), l = !(u = (s = te()).ampTimestamp ? Number(s.ampTimestamp) : void 0) || Date.now() < u, c = null != (M = null != (N = null != (L = null != (P = A.deviceId) ? P : l ? null != (D = s.ampDeviceId) ? D : s.deviceId : void 0) ? L : null == a ? void 0 : a.deviceId) ? N : o.deviceId) ? M : eg(), d = null != (j = null == a ? void 0 : a.lastEventId) ? j : o.lastEventId, f = null != (F = null == a ? void 0 : a.lastEventTime) ? F : o.lastEventTime, p = null != (z = null != (V = A.optOut) ? V : null == a ? void 0 : a.optOut) ? z : o.optOut, h = null != (K = null == a ? void 0 : a.sessionId) ? K : o.sessionId, v = null == a ? void 0 : a.deferredSessionId, g = null != (Y = null != (W = A.userId) ? W : null == a ? void 0 : a.userId) ? Y : o.userId, C.previousSessionDeviceId = null != ($ = null == a ? void 0 : a.deviceId) ? $ : o.deviceId, C.previousSessionUserId = null != (G = null == a ? void 0 : a.userId) ? G : o.userId, m = {
                                                            ipAddress: null == (X = null == (J = A.trackingOptions) ? void 0 : J.ipAddress) || X,
                                                            language: null == (Z = null == (Q = A.trackingOptions) ? void 0 : Q.language) || Z,
                                                            platform: null == (et = null == (ee = A.trackingOptions) ? void 0 : ee.platform) || et
                                                        }, y = null == a ? void 0 : a.pageCounter, b = null == a ? void 0 : a.debugLogsEnabled, void 0 !== A.autocapture && (A.defaultTracking = A.autocapture), [4, (w = new ah(I, A.appVersion, i, n, A.defaultTracking, A.autocapture, c, A.flushIntervalMillis, A.flushMaxRetries, A.flushQueueSize, e, A.ingestionMetadata, A.instanceName, d, f, null != (en = null == R ? void 0 : R.loggerProvider) ? en : A.loggerProvider, A.logLevel, A.minIdLength, A.offline, p, A.partnerId, A.plan, A.serverUrl, null != (er = null == R ? void 0 : R.serverZone) ? er : A.serverZone, h, v, A.sessionTimeout, A.storageProvider, m, A.transport, A.useBatch, A.fetchRemoteConfig, g, y, b, A.networkTrackingOptions, A.identify, null != (ei = null == R ? void 0 : R.enableDiagnostics) ? ei : A.enableDiagnostics, null != (eo = null == R ? void 0 : R.diagnosticsSampleRate) ? eo : C._diagnosticsSampleRate, O, A.remoteConfig, t, A.enableRequestBodyCompression, A.customEnrichment)).storageProvider.isEnabled()];
                                                    case 5:
                                                        return ea.sent() || (w.loggerProvider.warn("Storage provider ".concat(w.storageProvider.constructor.name, " is not enabled. Falling back to MemoryStorage.")), w.storageProvider = new o6), [2, w]
                                                }
                                            })
                                        }))];
                                    case 4:
                                        if (b = P.sent(), !(c && p && g)) return [3, 6];
                                        return [4, g.fetchRemoteConfig(p, b)];
                                    case 5:
                                        P.sent(), P.label = 6;
                                    case 6:
                                        return [4, e.prototype._init.call(this, b)];
                                    case 7:
                                        return P.sent(), this.logBrowserOptions(b), this.config.remoteConfigClient = p, w = eb((D = this.config).defaultTracking) && D.defaultTracking && "object" == typeof D.defaultTracking && D.defaultTracking.attribution && "object" == typeof D.defaultTracking.attribution ? U({}, D.defaultTracking.attribution) : {}, this.attributionTrackingOptions = w, [4, null == g ? void 0 : g.addAttributionTrackingPlugin()];
                                    case 8:
                                        if (P.sent(), k = !(!(S = (E = te()).ampTimestamp ? Number(E.ampTimestamp) : void 0) || Date.now() < S) || Number.isNaN(Number(E.ampSessionId)) ? void 0 : Number(E.ampSessionId), -1 !== (T = this.config.deferredSessionId) || this.config.optOut || (T = Date.now()), this.setSessionId(null != (l = null != (u = null != (s = t.sessionId) ? s : k) ? u : T) ? l : this.config.sessionId), this.config.optOut && this.timeline.addOptOutListener(function(e) {
                                                return q(x, void 0, void 0, function() {
                                                    return B(this, function(t) {
                                                        return !e && this.config.deferredSessionId && (-1 === this.config.deferredSessionId ? this.setSessionId(void 0) : this.setSessionId(this.config.deferredSessionId)), [2]
                                                    })
                                                })
                                            }), (_ = oU(this.config.instanceName)).identityStore.setIdentity({
                                                userId: this.config.userId,
                                                deviceId: this.config.deviceId
                                            }), this.config.offline === oB) return [3, 10];
                                        return [4, this.add(aw()).promise];
                                    case 9:
                                        P.sent(), P.label = 10;
                                    case 10:
                                        return [4, this.add(new oQ({
                                            diagnosticsClient: y
                                        })).promise];
                                    case 11:
                                        return P.sent(), [4, this.add(new eF).promise];
                                    case 12:
                                        return P.sent(), [4, this.add(new oZ).promise];
                                    case 13:
                                        return P.sent(), g && ab(this.config), [4, null == g ? void 0 : g.addPlugins()];
                                    case 14:
                                        return P.sent(), this.initializing = !1, [4, this.runQueuedFunctions("dispatchQ")];
                                    case 15:
                                        return P.sent(), _.eventBridge.setEventReceiver(function(e) {
                                            var t = e.eventProperties || {},
                                                n = t.time,
                                                r = F(t, ["time"]),
                                                i = U(U({}, "number" == typeof n && {
                                                    time: n
                                                }), e.groups && {
                                                    groups: e.groups
                                                });
                                            x.track(e.eventType, r, Object.keys(i).length ? i : void 0)
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.getUserId = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.userId
                    }, t.prototype.setUserId = function(e) {
                        this.config ? (this.config.loggerProvider.debug("function setUserId: ", e), (e !== this.config.userId || void 0 === e) && (this.config.userId = e, this.timeline.onIdentityChanged({
                            userId: e
                        }), oF(e, this.config.instanceName))) : this.q.push(this.setUserId.bind(this, e))
                    }, t.prototype.getDeviceId = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.deviceId
                    }, t.prototype.setDeviceId = function(e) {
                        this.config ? (this.config.loggerProvider.debug("function setDeviceId: ", e), e !== this.config.deviceId && (this.config.deviceId = e, this.timeline.onIdentityChanged({
                            deviceId: e
                        }), oq(e, this.config.instanceName))) : this.q.push(this.setDeviceId.bind(this, e))
                    }, t.prototype.reset = function() {
                        this.setDeviceId(eg()), this.setUserId(void 0), this.timeline.onReset()
                    }, t.prototype.getIdentity = function() {
                        var e, t;
                        return {
                            deviceId: null == (e = this.config) ? void 0 : e.deviceId,
                            userId: null == (t = this.config) ? void 0 : t.userId,
                            userProperties: this.userProperties
                        }
                    }, t.prototype.setIdentity = function(e) {
                        if ("userId" in e && this.setUserId(e.userId), "deviceId" in e && e.deviceId && this.setDeviceId(e.deviceId), "userProperties" in e) {
                            this.userProperties = e.userProperties;
                            var t, n, r, i = new i5,
                                o = null != (r = e.userProperties) ? r : {};
                            try {
                                for (var a = V(Object.entries(o)), s = a.next(); !s.done; s = a.next()) {
                                    var u = H(s.value, 2),
                                        l = u[0],
                                        c = u[1];
                                    i.set(l, c)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (n = a.return) && n.call(a)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            this.identify(i)
                        }
                    }, t.prototype.getOptOut = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.optOut
                    }, t.prototype.getSessionId = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.sessionId
                    }, t.prototype.setSessionId = function(e) {
                        var t, n, r = [];
                        if (!this.config) return this.q.push(this.setSessionId.bind(this, e)), oI(Promise.resolve());
                        if (this.config.optOut) return this.config.deferredSessionId = null != e ? e : -1, oI(Promise.resolve());
                        if (void 0 === e && (e = Date.now()), e === this.config.sessionId) return oI(Promise.resolve());
                        this.config.loggerProvider.debug("function setSessionId: ", e);
                        var i = this.getSessionId();
                        i !== e && this.timeline.onSessionIdChanged(e);
                        var o = this.config.lastEventTime,
                            a = null != (t = this.config.lastEventId) ? t : -1;
                        this.config.sessionId = e, this.config.lastEventTime = void 0, this.config.pageCounter = 0;
                        var s = this.autocaptureAdapter(),
                            u = !s,
                            l = !u && ey(this.config.defaultTracking, "sessions");
                        l && i && o && r.push(this.track(tN, void 0, {
                            device_id: this.previousSessionDeviceId,
                            event_id: ++a,
                            session_id: i,
                            time: o + 1,
                            user_id: this.previousSessionUserId
                        }).promise), (u || l) && (this.config.lastEventTime = this.config.sessionId);
                        var c = null != (n = null == s ? void 0 : s.trackCampaignEventIfNeeded(++a, r)) && n;
                        return this.config.identify && r.push(this.track(i7(this.config.identify)).promise), l && r.push(this.track(tL, void 0, {
                            event_id: c ? ++a : a,
                            session_id: this.config.sessionId,
                            time: this.config.lastEventTime
                        }).promise), this.previousSessionDeviceId = this.config.deviceId, this.previousSessionUserId = this.config.userId, oI(Promise.all(r))
                    }, t.prototype.extendSession = function() {
                        this.config ? this.config.lastEventTime = Date.now() : this.q.push(this.extendSession.bind(this))
                    }, t.prototype.setTransport = function(e) {
                        this.config ? this.config.transportProvider = am(e) : this.q.push(this.setTransport.bind(this, e))
                    }, t.prototype.identify = function(t, n) {
                        if (o5(t)) {
                            var r = t._q;
                            t._q = [], t = o4(new i5, r)
                        }
                        return (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id), (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id), e.prototype.identify.call(this, t, n)
                    }, t.prototype.groupIdentify = function(t, n, r, i) {
                        if (o5(r)) {
                            var o = r._q;
                            r._q = [], r = o4(new i5, o)
                        }
                        return e.prototype.groupIdentify.call(this, t, n, r, i)
                    }, t.prototype.revenue = function(t, n) {
                        if (o5(t)) {
                            var r = t._q;
                            t._q = [], t = o4(new o0, r)
                        }
                        return e.prototype.revenue.call(this, t, n)
                    }, t.prototype.process = function(t) {
                        var n;
                        return q(this, void 0, void 0, function() {
                            var r, i, o;
                            return B(this, function(a) {
                                return r = Date.now(), i = i2(this.config.sessionTimeout, this.config.lastEventTime), o = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign(), t.event_type !== tL && t.event_type !== tN && (!t.session_id || t.session_id === this.getSessionId()) && (i || o ? (this.setSessionId(r), o && this.config.loggerProvider.log("Created a new session for new campaign.")) : i || null == (n = this.autocaptureAdapter()) || n.trackCampaignEventIfNeeded()), [2, e.prototype.process.call(this, t)]
                            })
                        })
                    }, t.prototype.logBrowserOptions = function(e) {
                        try {
                            var t = U(U({}, e), {
                                apiKey: e.apiKey.substring(0, 10) + "********"
                            });
                            this.config.loggerProvider.debug("Initialized Amplitude with BrowserConfig:", ep(t))
                        } catch (e) {
                            this.config.loggerProvider.error("Error logging browser config", e)
                        }
                    }, t.prototype._setDiagnosticsSampleRate = function(e) {
                        if (!(e > 1) && !(e < 0) && !this.config) {
                            this._diagnosticsSampleRate = e;
                            return
                        }
                    }, t.prototype.autocaptureAdapter = function() {
                        return null
                    }, t
                }(o2)),
                aS = function() {
                    var e = new aE;
                    return {
                        init: G(e.init.bind(e), "init", W(e), $(e, ["config"])),
                        add: G(e.add.bind(e), "add", W(e), $(e, ["config.apiKey", "timeline.plugins"])),
                        remove: G(e.remove.bind(e), "remove", W(e), $(e, ["config.apiKey", "timeline.plugins"])),
                        track: G(e.track.bind(e), "track", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        logEvent: G(e.logEvent.bind(e), "logEvent", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        identify: G(e.identify.bind(e), "identify", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        groupIdentify: G(e.groupIdentify.bind(e), "groupIdentify", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        setGroup: G(e.setGroup.bind(e), "setGroup", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        revenue: G(e.revenue.bind(e), "revenue", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        flush: G(e.flush.bind(e), "flush", W(e), $(e, ["config.apiKey", "timeline.queue.length"])),
                        getUserId: G(e.getUserId.bind(e), "getUserId", W(e), $(e, ["config", "config.userId"])),
                        setUserId: G(e.setUserId.bind(e), "setUserId", W(e), $(e, ["config", "config.userId"])),
                        getDeviceId: G(e.getDeviceId.bind(e), "getDeviceId", W(e), $(e, ["config", "config.deviceId"])),
                        setDeviceId: G(e.setDeviceId.bind(e), "setDeviceId", W(e), $(e, ["config", "config.deviceId"])),
                        reset: G(e.reset.bind(e), "reset", W(e), $(e, ["config", "config.userId", "config.deviceId"])),
                        getSessionId: G(e.getSessionId.bind(e), "getSessionId", W(e), $(e, ["config"])),
                        setSessionId: G(e.setSessionId.bind(e), "setSessionId", W(e), $(e, ["config"])),
                        extendSession: G(e.extendSession.bind(e), "extendSession", W(e), $(e, ["config"])),
                        setOptOut: G(e.setOptOut.bind(e), "setOptOut", W(e), $(e, ["config"])),
                        setTransport: G(e.setTransport.bind(e), "setTransport", W(e), $(e, ["config"])),
                        getIdentity: G(e.getIdentity.bind(e), "getIdentity", W(e), $(e, ["config"])),
                        setIdentity: G(e.setIdentity.bind(e), "setIdentity", W(e), $(e, ["config", "config.userId", "config.deviceId"])),
                        getOptOut: G(e.getOptOut.bind(e), "getOptOut", W(e), $(e, ["config"])),
                        _setDiagnosticsSampleRate: G(e._setDiagnosticsSampleRate.bind(e), "_setDiagnosticsSampleRate", W(e), $(e, ["config"]))
                    }
                };
            let ak = aS();

            function aT(e, t) {
                var n = 0;
                return Number.isFinite(e) && Number.isFinite(t) && t > 0 && (n = Math.min(100, Math.max(0, e / t * 100))), n
            }

            function a_(e, t) {
                var n = e.currentTime,
                    r = e.duration;
                return U({
                    duration: r,
                    start_time: n,
                    last_position: n,
                    percent_completed: aT(n, r)
                }, void 0 !== t ? {
                    stop_reason: t
                } : {})
            }

            function ax(e) {
                return {
                    mux_playback_id: e.getAttribute("playback-id"),
                    mux_video_id: e.getAttribute("metadata-video-id"),
                    mux_video_title: e.getAttribute("metadata-video-title")
                }
            }

            function aP(e, t, n, r) {
                return q(this, void 0, void 0, function() {
                    var i, o, a, s, u;
                    return B(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([new Promise(function(t) {
                                    return e.getDuration(t)
                                }), new Promise(function(t) {
                                    return e.getCurrentTime(t)
                                })])];
                            case 1:
                                if (o = (i = H.apply(void 0, [l.sent(), 2]))[0], a = i[1], s = {}, "mux" === n) {
                                    u = void 0;
                                    try {
                                        s.mux_video_title = (u = new URL(t.getAttribute("src"))).searchParams.get("metadata-video-title"), s.mux_video_id = u.searchParams.get("metadata-video-id"), s.mux_playback_id = u.pathname.split("/").pop()
                                    } catch (e) {}
                                }
                                return [2, U(U({
                                    duration: o,
                                    start_time: a,
                                    last_position: a,
                                    percent_completed: aT(a, o)
                                }, void 0 !== r ? {
                                    stop_reason: r
                                } : {}), s)]
                        }
                    })
                })
            }
            var aI = function() {
                    function e(e) {
                        var t, n, r, i, o, a, s, u, l, c, d, f = e.videoEl,
                            p = e.onStateChange,
                            h = e.vendor,
                            v = e.isEmbedded,
                            g = this;
                        (this.state = {
                            playbackState: "paused"
                        }, this.handler = {
                            onPlay: function(e) {
                                g.updatePlaybackState("playing", e)
                            },
                            onPause: function(e) {
                                g.updatePlaybackState("paused", e)
                            },
                            onEnded: function(e) {
                                g.updatePlaybackState("ended", e)
                            },
                            onSeeking: function() {
                                var e = U(U({}, g.state), {
                                    isSeeking: !0
                                });
                                g.updateState(e)
                            },
                            onSeeked: function(e) {
                                var t = U(U({}, g.state), {
                                    isSeeking: !1,
                                    position: e.last_position
                                });
                                g.updateState(t)
                            },
                            onError: function(e) {
                                g.updateStateWithError(e)
                            },
                            onTimeUpdate: function(e) {
                                g.updateTime(e)
                            }
                        }, this.onStateChange = p, v) ? this.untrack = (t = this.handler, void 0 === (n = h) && (n = null), r = [], i = function() {
                            var e = f.elem,
                                i = !1,
                                o = function() {
                                    aP(f, e, n).then(function(e) {
                                        t.onPlay(e)
                                    }).catch(function(e) {
                                        t.onError("Error getting iframe metadata from 'play' handler: ".concat(e))
                                    })
                                };
                            f.on("play", o), r.push(function() {
                                return f.off("play", o)
                            });
                            var a = function() {
                                aP(f, e, n, "paused").then(function(e) {
                                    t.onPause(e)
                                }).catch(function(e) {
                                    t.onError("Error getting iframe metadata from 'pause' handler: ".concat(e))
                                })
                            };
                            f.on("pause", a), r.push(function() {
                                return f.off("pause", a)
                            });
                            var s = function() {
                                aP(f, e, n, "ended").then(function(e) {
                                    t.onEnded(e)
                                }).catch(function(e) {
                                    t.onError("Error getting iframe metadata from 'ended' handler: ".concat(e))
                                })
                            };
                            f.on("ended", s), r.push(function() {
                                return f.off("ended", s)
                            });
                            var u = function() {
                                i = !0, aP(f, e, n, "seeking").then(function(e) {
                                    t.onSeeking(e)
                                }).catch(function(e) {
                                    t.onError("Error getting iframe metadata from 'seeking' handler: ".concat(e))
                                })
                            };
                            f.on("seeking", u), r.push(function() {
                                return f.off("seeking", u)
                            });
                            var l = function() {
                                i = !1, aP(f, e, n).then(function(e) {
                                    t.onSeeked(e)
                                }).catch(function(e) {
                                    t.onError("Error getting iframe metadata from 'seeked' handler: ".concat(e))
                                })
                            };
                            f.on("seeked", l), r.push(function() {
                                return f.off("seeked", l)
                            });
                            var c = function() {
                                (function(e) {
                                    return q(this, void 0, void 0, function() {
                                        return B(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, new Promise(function(t) {
                                                        return e.getCurrentTime(t)
                                                    })];
                                                case 1:
                                                    return [2, {
                                                        currentTime: t.sent()
                                                    }]
                                            }
                                        })
                                    })
                                })(f).then(function(e) {
                                    var n = {
                                        position: e.currentTime,
                                        isSeeking: i
                                    };
                                    t.onTimeUpdate(n)
                                }).catch(function(e) {
                                    t.onError("Error getting iframe metadata from 'timeupdate' handler: ".concat(e))
                                })
                            };
                            f.on("timeupdate", c), r.push(function() {
                                return f.off("timeupdate", c)
                            })
                        }, f.on("ready", i), function() {
                            f.off("ready", i), r.forEach(function(e) {
                                return e()
                            })
                        }): this.untrack = (o = this.handler, a = function() {
                            var e = U(U({}, a_(f)), "mux" === h ? ax(f) : {});
                            o.onPlay(e)
                        }, f.addEventListener("play", a), s = function() {
                            var e = U(U({}, a_(f, "paused")), "mux" === h ? ax(f) : {});
                            o.onPause(e)
                        }, f.addEventListener("pause", s), u = function() {
                            var e = U(U({}, a_(f, "ended")), "mux" === h ? ax(f) : {});
                            o.onEnded(e)
                        }, f.addEventListener("ended", u), l = function() {
                            var e = U(U({}, a_(f, "seeking")), "mux" === h ? ax(f) : {});
                            o.onSeeking(e)
                        }, f.addEventListener("seeking", l), c = function() {
                            var e = U(U({}, a_(f)), "mux" === h ? ax(f) : {});
                            o.onSeeked(e)
                        }, f.addEventListener("seeked", c), d = function() {
                            var e = {
                                position: f.currentTime,
                                isSeeking: !!f.seeking
                            };
                            o.onTimeUpdate(e)
                        }, f.addEventListener("timeupdate", d), function() {
                            f.removeEventListener("play", a), f.removeEventListener("pause", s), f.removeEventListener("ended", u), f.removeEventListener("seeking", l), f.removeEventListener("seeked", c), f.removeEventListener("timeupdate", d)
                        })
                    }
                    return e.prototype.stateChangeHandler = function(e, t) {
                        try {
                            this.onStateChange(e, t)
                        } catch (e) {}
                    }, e.prototype.updateStateWithError = function(e) {
                        var t = this.state,
                            n = U(U({}, t), {
                                playbackState: "error",
                                errorMessage: e
                            });
                        this.updateState(n)
                    }, e.prototype.updatePlaybackState = function(e, t) {
                        var n = U(U({}, this.state), {
                            playbackState: e,
                            lastEvent: t,
                            position: t.last_position
                        });
                        this.updateState(n)
                    }, e.prototype.updateTime = function(e) {
                        var t, n;
                        if (this.state.lastEvent && "playing" === this.state.playbackState) {
                            var r = e.isSeeking || this.state.isSeeking,
                                i = null != (t = this.state.position) ? t : 0,
                                o = e.position;
                            if (r) {
                                this.state = U(U({}, this.state), {
                                    position: o
                                });
                                return
                            }
                            var a = o - i,
                                s = U(U({}, this.state), {
                                    position: o,
                                    watchTime: (null != (n = this.state.watchTime) ? n : 0) + a
                                });
                            this.updateState(s)
                        }
                    }, e.prototype.updateState = function(e) {
                        var t = this.state;
                        this.state = e, this.stateChangeHandler(t, e)
                    }, e.prototype.destroy = function() {
                        this.untrack()
                    }, e
                }(),
                aA = function() {
                    function e(e) {
                        this.amplitude = e, this.videoEl = null, this.embeddedVideoPlayer = null, this.extraEventProperties = {}, this.listeners = [], this.onRemoveListeners = []
                    }
                    return e.prototype.withVideoElement = function(e) {
                        return this.videoEl = e, this
                    }, e.prototype.withEmbeddedPlayer = function(e) {
                        return this.embeddedVideoPlayer = e, this
                    }, e.prototype.withVendor = function(e) {
                        return this.vendor = e, this
                    }, e.prototype.withExtraEventProperties = function(e) {
                        return this.extraEventProperties = e, this
                    }, e.prototype.captureVideoStarted = function() {
                        var e = this;
                        return this.listeners.push(function(t, n) {
                            "playing" !== t.playbackState && "playing" === n.playbackState && e.amplitude.track("Video Content Started", U(U({}, n.lastEvent), e.extraEventProperties))
                        }), this
                    }, e.prototype.captureVideoStopped = function() {
                        var e = this;
                        return this.listeners.push(function(t, n) {
                            "playing" === t.playbackState && "playing" !== n.playbackState && e.amplitude.track("Video Content Stopped", U(U(U({}, n.lastEvent), {
                                watch_duration: n.watchTime
                            }), e.extraEventProperties))
                        }), this
                    }, e.prototype.start = function() {
                        var e, t = this,
                            n = null != (e = this.videoEl) ? e : this.embeddedVideoPlayer;
                        if (!n) throw Error("Video element not specified. Use withVideoElement() or withEmbeddedPlayer() to specify the video element.");
                        if (this.videoEl && this.embeddedVideoPlayer) throw Error("Both video element and embedded video player specified. Use only one of withVideoElement() or withEmbeddedPlayer() to specify the video element.");
                        var r = new aI({
                            videoEl: n,
                            onStateChange: function(e, n) {
                                t.listeners.forEach(function(t) {
                                    return t(e, n)
                                })
                            },
                            vendor: this.vendor,
                            isEmbedded: !!this.embeddedVideoPlayer
                        });
                        return this.onRemoveListeners.push(function() {
                            r.destroy()
                        }), this
                    }, e.prototype.stop = function() {
                        this.onRemoveListeners.forEach(function(e) {
                            return e()
                        }), this.onRemoveListeners = []
                    }, e
                }();

            function aC(e, t, n) {
                void 0 === n && (n = {});
                var r, i = new aA(e);
                t instanceof HTMLVideoElement ? i.withVideoElement(t) : i.withEmbeddedPlayer(t), n.vendor && i.withVendor(n.vendor);
                var o = null != (r = n.extraEventProperties) ? r : {};
                try {
                    i.withExtraEventProperties(U({
                        view_session_id: eg()
                    }, o)).captureVideoStarted().captureVideoStopped().start()
                } catch (e) {
                    return e
                }
                return function() {
                    return i.stop()
                }
            }(g = L || (L = {})).US = "US", g.EU = "EU", g.STAGING = "STAGING";
            var aO = ak.add,
                aR = ak.extendSession,
                aD = ak.flush,
                aL = ak.getDeviceId,
                aN = ak.getIdentity,
                aM = ak.getOptOut,
                aj = ak.getSessionId,
                aU = ak.getUserId,
                aF = ak.groupIdentify,
                aq = ak.identify,
                aB = ak.init,
                aV = ak.logEvent,
                aH = ak.remove,
                az = ak.reset,
                aK = ak.revenue,
                aW = ak.setDeviceId,
                aY = ak.setGroup,
                a$ = ak.setIdentity,
                aG = ak.setOptOut,
                aJ = ak.setSessionId,
                aX = ak.setTransport,
                aQ = ak.setUserId,
                aZ = ak.track,
                a0 = ak._setDiagnosticsSampleRate
        },
        65405(e) {
            var t = Object.prototype.hasOwnProperty;

            function n(e) {
                return "[Throws: " + (e ? e.message : "?") + "]"
            }

            function r(e) {
                var r = [];
                return function e(i) {
                    if (null === i || "object" != typeof i) return i;
                    if (-1 !== r.indexOf(i)) return "[Circular]";
                    if (r.push(i), "function" == typeof i.toJSON) try {
                        var o = e(i.toJSON());
                        return r.pop(), o
                    } catch (e) {
                        return n(e)
                    }
                    if (Array.isArray(i)) {
                        var a = i.map(e);
                        return r.pop(), a
                    }
                    var s = Object.keys(i).reduce(function(r, o) {
                        return r[o] = e(function(e, r) {
                            if (t.call(e, r)) try {
                                return e[r]
                            } catch (e) {
                                return n(e)
                            }
                            return e[r]
                        }(i, o)), r
                    }, {});
                    return r.pop(), s
                }(e)
            }
            e.exports = function(e, t, n) {
                return JSON.stringify(r(e), t, n)
            }, e.exports.ensureProperties = r
        },
        14220(e, t, n) {
            e.exports = n(40695).Observable
        },
        40695(e, t) {
            t.Observable = void 0;
            let n = e => !!Symbol[e],
                r = e => n(e) ? Symbol[e] : "@@" + e,
                i = r("iterator"),
                o = r("observable"),
                a = r("species");

            function s(e, t) {
                let n = e[t];
                if (null != n) {
                    if ("function" != typeof n) throw TypeError(n + " is not a function");
                    return n
                }
            }

            function u(e) {
                let t = e.constructor;
                return void 0 !== t && null === (t = t[a]) && (t = void 0), void 0 !== t ? t : g
            }

            function l(e) {
                l.log ? l.log(e) : setTimeout(() => {
                    throw e
                })
            }

            function c(e) {
                Promise.resolve().then(() => {
                    try {
                        e()
                    } catch (e) {
                        l(e)
                    }
                })
            }

            function d(e) {
                let t = e._cleanup;
                if (void 0 !== t && (e._cleanup = void 0, t)) try {
                    if ("function" == typeof t) t();
                    else {
                        let e = s(t, "unsubscribe");
                        e && e.call(t)
                    }
                } catch (e) {
                    l(e)
                }
            }

            function f(e) {
                e._observer = void 0, e._queue = void 0, e._state = "closed"
            }

            function p(e, t, n) {
                e._state = "running";
                let r = e._observer;
                try {
                    let i = s(r, t);
                    switch (t) {
                        case "next":
                            i && i.call(r, n);
                            break;
                        case "error":
                            if (f(e), i) i.call(r, n);
                            else throw n;
                            break;
                        case "complete":
                            f(e), i && i.call(r)
                    }
                } catch (e) {
                    l(e)
                }
                "closed" === e._state ? d(e) : "running" === e._state && (e._state = "ready")
            }

            function h(e, t, n) {
                if ("closed" !== e._state) {
                    if ("buffering" === e._state) return void e._queue.push({
                        type: t,
                        value: n
                    });
                    if ("ready" !== e._state) {
                        e._state = "buffering", e._queue = [{
                            type: t,
                            value: n
                        }], c(() => (function(e) {
                            let t = e._queue;
                            if (t) {
                                e._queue = void 0, e._state = "ready";
                                for (let n = 0; n < t.length && (p(e, t[n].type, t[n].value), "closed" !== e._state); ++n);
                            }
                        })(e));
                        return
                    }
                    p(e, t, n)
                }
            }
            class v {
                constructor(e, t) {
                    this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
                    let n = this,
                        r = {
                            get closed() {
                                return "closed" === n._state
                            },
                            next(e) {
                                h(n, "next", e)
                            },
                            error(e) {
                                h(n, "error", e)
                            },
                            complete() {
                                h(n, "complete")
                            }
                        };
                    try {
                        this._cleanup = t.call(void 0, r)
                    } catch (e) {
                        r.error(e)
                    }
                    "initializing" === this._state && (this._state = "ready")
                }
                get closed() {
                    return "closed" === this._state
                }
                unsubscribe() {
                    "closed" !== this._state && (f(this), d(this))
                }
            }
            class g {
                constructor(e) {
                    if (!(this instanceof g)) throw TypeError("Observable cannot be called as a function");
                    if ("function" != typeof e) throw TypeError("Observable initializer must be a function");
                    this._subscriber = e
                }
                subscribe(e) {
                    return ("object" != typeof e || null === e) && (e = {
                        next: e,
                        error: arguments[1],
                        complete: arguments[2]
                    }), new v(e, this._subscriber)
                }
                forEach(e) {
                    return new Promise((t, n) => {
                        if ("function" != typeof e) return void n(TypeError(e + " is not a function"));

                        function r() {
                            i.unsubscribe(), t()
                        }
                        let i = this.subscribe({
                            next(t) {
                                try {
                                    e(t, r)
                                } catch (e) {
                                    n(e), i.unsubscribe()
                                }
                            },
                            error: n,
                            complete: t
                        })
                    })
                }
                map(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function");
                    return new(u(this))(t => this.subscribe({
                        next(n) {
                            try {
                                n = e(n)
                            } catch (e) {
                                return t.error(e)
                            }
                            t.next(n)
                        },
                        error(e) {
                            t.error(e)
                        },
                        complete() {
                            t.complete()
                        }
                    }))
                }
                filter(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function");
                    return new(u(this))(t => this.subscribe({
                        next(n) {
                            try {
                                if (!e(n)) return
                            } catch (e) {
                                return t.error(e)
                            }
                            t.next(n)
                        },
                        error(e) {
                            t.error(e)
                        },
                        complete() {
                            t.complete()
                        }
                    }))
                }
                reduce(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function");
                    let t = u(this),
                        n = arguments.length > 1,
                        r = !1,
                        i = arguments[1],
                        o = i;
                    return new t(t => this.subscribe({
                        next(i) {
                            let a = !r;
                            if (r = !0, !a || n) try {
                                o = e(o, i)
                            } catch (e) {
                                return t.error(e)
                            } else o = i
                        },
                        error(e) {
                            t.error(e)
                        },
                        complete() {
                            if (!r && !n) return t.error(TypeError("Cannot reduce an empty sequence"));
                            t.next(o), t.complete()
                        }
                    }))
                }
                async all() {
                    let e = [];
                    return await this.forEach(t => e.push(t)), e
                }
                concat(...e) {
                    let t = u(this);
                    return new t(n => {
                        let r, i = 0;
                        return ! function o(a) {
                            r = a.subscribe({
                                next(e) {
                                    n.next(e)
                                },
                                error(e) {
                                    n.error(e)
                                },
                                complete() {
                                    i === e.length ? (r = void 0, n.complete()) : o(t.from(e[i++]))
                                }
                            })
                        }(this), () => {
                            r && (r.unsubscribe(), r = void 0)
                        }
                    })
                }
                flatMap(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function");
                    let t = u(this);
                    return new t(n => {
                        let r = [],
                            i = this.subscribe({
                                next(i) {
                                    if (e) try {
                                        i = e(i)
                                    } catch (e) {
                                        return n.error(e)
                                    }
                                    let a = t.from(i).subscribe({
                                        next(e) {
                                            n.next(e)
                                        },
                                        error(e) {
                                            n.error(e)
                                        },
                                        complete() {
                                            let e = r.indexOf(a);
                                            e >= 0 && r.splice(e, 1), o()
                                        }
                                    });
                                    r.push(a)
                                },
                                error(e) {
                                    n.error(e)
                                },
                                complete() {
                                    o()
                                }
                            });

                        function o() {
                            i.closed && 0 === r.length && n.complete()
                        }
                        return () => {
                            r.forEach(e => e.unsubscribe()), i.unsubscribe()
                        }
                    })
                }[o]() {
                    return this
                }
                static from(e) {
                    let t = "function" == typeof this ? this : g;
                    if (null == e) throw TypeError(e + " is not an object");
                    let r = s(e, o);
                    if (r) {
                        let n = r.call(e);
                        if (Object(n) !== n) throw TypeError(n + " is not an object");
                        return n instanceof g && n.constructor === t ? n : new t(e => n.subscribe(e))
                    }
                    if (n("iterator") && (r = s(e, i))) return new t(t => {
                        c(() => {
                            if (!t.closed) {
                                for (let n of r.call(e))
                                    if (t.next(n), t.closed) return;
                                t.complete()
                            }
                        })
                    });
                    if (Array.isArray(e)) return new t(t => {
                        c(() => {
                            if (!t.closed) {
                                for (let n = 0; n < e.length; ++n)
                                    if (t.next(e[n]), t.closed) return;
                                t.complete()
                            }
                        })
                    });
                    throw TypeError(e + " is not observable")
                }
                static of (...e) {
                    return new("function" == typeof this ? this : g)(t => {
                        c(() => {
                            if (!t.closed) {
                                for (let n = 0; n < e.length; ++n)
                                    if (t.next(e[n]), t.closed) return;
                                t.complete()
                            }
                        })
                    })
                }
                static get[a]() {
                    return this
                }
            }
            t.Observable = g, Object.defineProperty(g, Symbol("extensions"), {
                value: {
                    symbol: o,
                    hostReportError: l
                },
                configurable: !0
            })
        }
    }
]);