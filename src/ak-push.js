var e = {
        206: function(e) {
            e.exports = function() {
                var e = {
                        17: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n = r(18);
                            t.default = function() {
                                function e() {}
                                return e.getFirstMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 0 && r[1] || ""
                                }, e.getSecondMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 1 && r[2] || ""
                                }, e.matchAndReturnConst = function(e, t, r) {
                                    if (e.test(t)) return r
                                }, e.getWindowsVersionName = function(e) {
                                    switch (e) {
                                        case "NT":
                                            return "NT";
                                        case "XP":
                                        case "NT 5.1":
                                            return "XP";
                                        case "NT 5.0":
                                            return "2000";
                                        case "NT 5.2":
                                            return "2003";
                                        case "NT 6.0":
                                            return "Vista";
                                        case "NT 6.1":
                                            return "7";
                                        case "NT 6.2":
                                            return "8";
                                        case "NT 6.3":
                                            return "8.1";
                                        case "NT 10.0":
                                            return "10";
                                        default:
                                            return
                                    }
                                }, e.getMacOSVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), 10 === t[0]) switch (t[1]) {
                                        case 5:
                                            return "Leopard";
                                        case 6:
                                            return "Snow Leopard";
                                        case 7:
                                            return "Lion";
                                        case 8:
                                            return "Mountain Lion";
                                        case 9:
                                            return "Mavericks";
                                        case 10:
                                            return "Yosemite";
                                        case 11:
                                            return "El Capitan";
                                        case 12:
                                            return "Sierra";
                                        case 13:
                                            return "High Sierra";
                                        case 14:
                                            return "Mojave";
                                        case 15:
                                            return "Catalina";
                                        default:
                                            return
                                    }
                                }, e.getAndroidVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                                }, e.getVersionPrecision = function(e) {
                                    return e.split(".").length
                                }, e.compareVersions = function(t, r, n) {
                                    void 0 === n && (n = !1);
                                    var i = e.getVersionPrecision(t),
                                        o = e.getVersionPrecision(r),
                                        a = Math.max(i, o),
                                        s = 0,
                                        c = e.map([t, r], function(t) {
                                            var r = a - e.getVersionPrecision(t),
                                                n = t + Array(r + 1).join(".0");
                                            return e.map(n.split("."), function(e) {
                                                return Array(20 - e.length).join("0") + e
                                            }).reverse()
                                        });
                                    for (n && (s = a - Math.min(i, o)), a -= 1; a >= s;) {
                                        if (c[0][a] > c[1][a]) return 1;
                                        if (c[0][a] === c[1][a]) {
                                            if (a === s) return 0;
                                            a -= 1
                                        } else if (c[0][a] < c[1][a]) return -1
                                    }
                                }, e.map = function(e, t) {
                                    var r, n = [];
                                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                    return n
                                }, e.find = function(e, t) {
                                    var r, n;
                                    if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                    for (r = 0, n = e.length; r < n; r += 1) {
                                        var i = e[r];
                                        if (t(i, r)) return i
                                    }
                                }, e.assign = function(e) {
                                    for (var t, r, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                                    for (t = 0, r = i.length; t < r; t += 1) ! function() {
                                        var r = i[t];
                                        "object" == typeof r && null !== r && Object.keys(r).forEach(function(t) {
                                            e[t] = r[t]
                                        })
                                    }();
                                    return e
                                }, e.getBrowserAlias = function(e) {
                                    return n.BROWSER_ALIASES_MAP[e]
                                }, e.getBrowserTypeByAlias = function(e) {
                                    return n.BROWSER_MAP[e] || ""
                                }, e
                            }(), e.exports = t.default
                        },
                        18: function(e, t, r) {
                            t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                                "Amazon Silk": "amazon_silk",
                                "Android Browser": "android",
                                Bada: "bada",
                                BlackBerry: "blackberry",
                                Chrome: "chrome",
                                Chromium: "chromium",
                                Electron: "electron",
                                Epiphany: "epiphany",
                                Firefox: "firefox",
                                Focus: "focus",
                                Generic: "generic",
                                "Google Search": "google_search",
                                Googlebot: "googlebot",
                                "Internet Explorer": "ie",
                                "K-Meleon": "k_meleon",
                                Maxthon: "maxthon",
                                "Microsoft Edge": "edge",
                                "MZ Browser": "mz",
                                "NAVER Whale Browser": "naver",
                                Opera: "opera",
                                "Opera Coast": "opera_coast",
                                PhantomJS: "phantomjs",
                                Puffin: "puffin",
                                QupZilla: "qupzilla",
                                QQ: "qq",
                                QQLite: "qqlite",
                                Safari: "safari",
                                Sailfish: "sailfish",
                                "Samsung Internet for Android": "samsung_internet",
                                SeaMonkey: "seamonkey",
                                Sleipnir: "sleipnir",
                                Swing: "swing",
                                Tizen: "tizen",
                                "UC Browser": "uc",
                                Vivaldi: "vivaldi",
                                "WebOS Browser": "webos",
                                WeChat: "wechat",
                                "Yandex Browser": "yandex",
                                Roku: "roku"
                            }, t.BROWSER_MAP = {
                                amazon_silk: "Amazon Silk",
                                android: "Android Browser",
                                bada: "Bada",
                                blackberry: "BlackBerry",
                                chrome: "Chrome",
                                chromium: "Chromium",
                                electron: "Electron",
                                epiphany: "Epiphany",
                                firefox: "Firefox",
                                focus: "Focus",
                                generic: "Generic",
                                googlebot: "Googlebot",
                                google_search: "Google Search",
                                ie: "Internet Explorer",
                                k_meleon: "K-Meleon",
                                maxthon: "Maxthon",
                                edge: "Microsoft Edge",
                                mz: "MZ Browser",
                                naver: "NAVER Whale Browser",
                                opera: "Opera",
                                opera_coast: "Opera Coast",
                                phantomjs: "PhantomJS",
                                puffin: "Puffin",
                                qupzilla: "QupZilla",
                                qq: "QQ Browser",
                                qqlite: "QQ Browser Lite",
                                safari: "Safari",
                                sailfish: "Sailfish",
                                samsung_internet: "Samsung Internet for Android",
                                seamonkey: "SeaMonkey",
                                sleipnir: "Sleipnir",
                                swing: "Swing",
                                tizen: "Tizen",
                                uc: "UC Browser",
                                vivaldi: "Vivaldi",
                                webos: "WebOS Browser",
                                wechat: "WeChat",
                                yandex: "Yandex Browser"
                            }, t.PLATFORMS_MAP = {
                                tablet: "tablet",
                                mobile: "mobile",
                                desktop: "desktop",
                                tv: "tv"
                            }, t.OS_MAP = {
                                WindowsPhone: "Windows Phone",
                                Windows: "Windows",
                                MacOS: "macOS",
                                iOS: "iOS",
                                Android: "Android",
                                WebOS: "WebOS",
                                BlackBerry: "BlackBerry",
                                Bada: "Bada",
                                Tizen: "Tizen",
                                Linux: "Linux",
                                ChromeOS: "Chrome OS",
                                PlayStation4: "PlayStation 4",
                                Roku: "Roku"
                            }, t.ENGINE_MAP = {
                                EdgeHTML: "EdgeHTML",
                                Blink: "Blink",
                                Trident: "Trident",
                                Presto: "Presto",
                                Gecko: "Gecko",
                                WebKit: "WebKit"
                            }
                        },
                        90: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(91)) && n.__esModule ? n : {
                                    default: n
                                },
                                o = r(18);
                            t.default = function() {
                                function e() {}
                                return e.getParser = function(e, t) {
                                        if (void 0 === t && (t = !1), "string" != typeof e) throw Error("UserAgent should be a string");
                                        return new i.default(e, t)
                                    }, e.parse = function(e) {
                                        return new i.default(e).getResult()
                                    },
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = t[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(e, [{
                                        key: "BROWSER_MAP",
                                        get: function() {
                                            return o.BROWSER_MAP
                                        }
                                    }, {
                                        key: "ENGINE_MAP",
                                        get: function() {
                                            return o.ENGINE_MAP
                                        }
                                    }, {
                                        key: "OS_MAP",
                                        get: function() {
                                            return o.OS_MAP
                                        }
                                    }, {
                                        key: "PLATFORMS_MAP",
                                        get: function() {
                                            return o.PLATFORMS_MAP
                                        }
                                    }]), e
                            }(), e.exports = t.default
                        },
                        91: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n = c(r(92)),
                                i = c(r(93)),
                                o = c(r(94)),
                                a = c(r(95)),
                                s = c(r(17));

                            function c(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            }
                            t.default = function() {
                                function e(e, t) {
                                    if (void 0 === t && (t = !1), null == e || "" === e) throw Error("UserAgent parameter can't be empty");
                                    this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                                }
                                var t = e.prototype;
                                return t.getUA = function() {
                                    return this._ua
                                }, t.test = function(e) {
                                    return e.test(this._ua)
                                }, t.parseBrowser = function() {
                                    var e = this;
                                    this.parsedResult.browser = {};
                                    var t = s.default.find(n.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                                }, t.getBrowser = function() {
                                    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                                }, t.getBrowserName = function(e) {
                                    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                                }, t.getBrowserVersion = function() {
                                    return this.getBrowser().version
                                }, t.getOS = function() {
                                    return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                                }, t.parseOS = function() {
                                    var e = this;
                                    this.parsedResult.os = {};
                                    var t = s.default.find(i.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                                }, t.getOSName = function(e) {
                                    var t = this.getOS().name;
                                    return e ? String(t).toLowerCase() || "" : t || ""
                                }, t.getOSVersion = function() {
                                    return this.getOS().version
                                }, t.getPlatform = function() {
                                    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                                }, t.getPlatformType = function(e) {
                                    void 0 === e && (e = !1);
                                    var t = this.getPlatform().type;
                                    return e ? String(t).toLowerCase() || "" : t || ""
                                }, t.parsePlatform = function() {
                                    var e = this;
                                    this.parsedResult.platform = {};
                                    var t = s.default.find(o.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                                }, t.getEngine = function() {
                                    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                                }, t.getEngineName = function(e) {
                                    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                                }, t.parseEngine = function() {
                                    var e = this;
                                    this.parsedResult.engine = {};
                                    var t = s.default.find(a.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                                }, t.parse = function() {
                                    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                                }, t.getResult = function() {
                                    return s.default.assign({}, this.parsedResult)
                                }, t.satisfies = function(e) {
                                    var t = this,
                                        r = {},
                                        n = 0,
                                        i = {},
                                        o = 0;
                                    if (Object.keys(e).forEach(function(t) {
                                            var a = e[t];
                                            "string" == typeof a ? (i[t] = a, o += 1) : "object" == typeof a && (r[t] = a, n += 1)
                                        }), n > 0) {
                                        var a = Object.keys(r),
                                            c = s.default.find(a, function(e) {
                                                return t.isOS(e)
                                            });
                                        if (c) {
                                            var u = this.satisfies(r[c]);
                                            if (void 0 !== u) return u
                                        }
                                        var f = s.default.find(a, function(e) {
                                            return t.isPlatform(e)
                                        });
                                        if (f) {
                                            var l = this.satisfies(r[f]);
                                            if (void 0 !== l) return l
                                        }
                                    }
                                    if (o > 0) {
                                        var d = Object.keys(i),
                                            h = s.default.find(d, function(e) {
                                                return t.isBrowser(e, !0)
                                            });
                                        if (void 0 !== h) return this.compareVersion(i[h])
                                    }
                                }, t.isBrowser = function(e, t) {
                                    void 0 === t && (t = !1);
                                    var r = this.getBrowserName().toLowerCase(),
                                        n = e.toLowerCase(),
                                        i = s.default.getBrowserTypeByAlias(n);
                                    return t && i && (n = i.toLowerCase()), n === r
                                }, t.compareVersion = function(e) {
                                    var t = [0],
                                        r = e,
                                        n = !1,
                                        i = this.getBrowserVersion();
                                    if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(s.default.compareVersions(i, r, n)) > -1
                                }, t.isOS = function(e) {
                                    return this.getOSName(!0) === String(e).toLowerCase()
                                }, t.isPlatform = function(e) {
                                    return this.getPlatformType(!0) === String(e).toLowerCase()
                                }, t.isEngine = function(e) {
                                    return this.getEngineName(!0) === String(e).toLowerCase()
                                }, t.is = function(e, t) {
                                    return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                                }, t.some = function(e) {
                                    var t = this;
                                    return void 0 === e && (e = []), e.some(function(e) {
                                        return t.is(e)
                                    })
                                }, e
                            }(), e.exports = t.default
                        },
                        92: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                o = /version\/(\d+(\.?_?\d+)+)/i;
                            t.default = [{
                                test: [/googlebot/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Googlebot"
                                        },
                                        r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opera/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opr\/|opios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/SamsungBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Samsung Internet for Android"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Whale/i],
                                describe: function(e) {
                                    var t = {
                                            name: "NAVER Whale Browser"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MZBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "MZ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/focus/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Focus"
                                        },
                                        r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/swing/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Swing"
                                        },
                                        r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/coast/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Coast"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opt\/\d+(?:.?_?\d+)+/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Touch"
                                        },
                                        r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/yabrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Yandex Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/ucbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "UC Browser"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Maxthon|mxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Maxthon"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/epiphany/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Epiphany"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/puffin/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Puffin"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sleipnir/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sleipnir"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/k-meleon/i],
                                describe: function(e) {
                                    var t = {
                                            name: "K-Meleon"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/micromessenger/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WeChat"
                                        },
                                        r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qqbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/msie|trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Internet Explorer"
                                        },
                                        r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/\sedg\//i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/edg([ea]|ios)/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/vivaldi/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Vivaldi"
                                        },
                                        r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/seamonkey/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SeaMonkey"
                                        },
                                        r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sailfish/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sailfish"
                                        },
                                        r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/silk/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Amazon Silk"
                                        },
                                        r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/phantom/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PhantomJS"
                                        },
                                        r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/slimerjs/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SlimerJS"
                                        },
                                        r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WebOS Browser"
                                        },
                                        r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Bada"
                                        },
                                        r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Tizen"
                                        },
                                        r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qupzilla/i],
                                describe: function(e) {
                                    var t = {
                                            name: "QupZilla"
                                        },
                                        r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/firefox|iceweasel|fxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Firefox"
                                        },
                                        r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/electron/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Electron"
                                        },
                                        r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MiuiBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Miui"
                                        },
                                        r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chromium/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chromium"
                                        },
                                        r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chrome|crios|crmo/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chrome"
                                        },
                                        r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/GSA/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Google Search"
                                        },
                                        r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: "Android Browser"
                                        },
                                        r = i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/playstation 4/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PlayStation 4"
                                        },
                                        r = i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/safari|applewebkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Safari"
                                        },
                                        r = i.default.getFirstMatch(o, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/.*/i],
                                describe: function(e) {
                                    var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                    return {
                                        name: i.default.getFirstMatch(t, e),
                                        version: i.default.getSecondMatch(t, e)
                                    }
                                }
                            }], e.exports = t.default
                        },
                        93: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                o = r(18);
                            t.default = [{
                                test: [/Roku\/DVP/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                    return {
                                        name: o.OS_MAP.Roku,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows phone/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: o.OS_MAP.WindowsPhone,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows /i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                        r = i.default.getWindowsVersionName(t);
                                    return {
                                        name: o.OS_MAP.Windows,
                                        version: t,
                                        versionName: r
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function(e) {
                                    var t = {
                                            name: o.OS_MAP.iOS
                                        },
                                        r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/macintosh/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                        r = i.default.getMacOSVersionName(t),
                                        n = {
                                            name: o.OS_MAP.MacOS,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(ipod|iphone|ipad)/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                    return {
                                        name: o.OS_MAP.iOS,
                                        version: t
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                        r = i.default.getAndroidVersionName(t),
                                        n = {
                                            name: o.OS_MAP.Android,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                        r = {
                                            name: o.OS_MAP.WebOS
                                        };
                                    return t && t.length && (r.version = t), r
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                    return {
                                        name: o.OS_MAP.BlackBerry,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: o.OS_MAP.Bada,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: o.OS_MAP.Tizen,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/linux/i],
                                describe: function() {
                                    return {
                                        name: o.OS_MAP.Linux
                                    }
                                }
                            }, {
                                test: [/CrOS/],
                                describe: function() {
                                    return {
                                        name: o.OS_MAP.ChromeOS
                                    }
                                }
                            }, {
                                test: [/PlayStation 4/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: o.OS_MAP.PlayStation4,
                                        version: t
                                    }
                                }
                            }], e.exports = t.default
                        },
                        94: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                o = r(18);
                            t.default = [{
                                test: [/googlebot/i],
                                describe: function() {
                                    return {
                                        type: "bot",
                                        vendor: "Google"
                                    }
                                }
                            }, {
                                test: [/huawei/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                        r = {
                                            type: o.PLATFORMS_MAP.mobile,
                                            vendor: "Huawei"
                                        };
                                    return t && (r.model = t), r
                                }
                            }, {
                                test: [/nexus\s*(?:7|8|9|10).*/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/ipad/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/kftt build/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon",
                                        model: "Kindle Fire HD 7"
                                    }
                                }
                            }, {
                                test: [/silk/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon"
                                    }
                                }
                            }, {
                                test: [/tablet(?! pc)/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/ipod|iphone/i),
                                        r = e.test(/like (ipod|iphone)/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                    return {
                                        type: o.PLATFORMS_MAP.mobile,
                                        vendor: "Apple",
                                        model: t
                                    }
                                }
                            }, {
                                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.mobile,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/[^-]mobi/i],
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "blackberry" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.mobile,
                                        vendor: "BlackBerry"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "bada" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows phone" === e.getBrowserName()
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.mobile,
                                        vendor: "Microsoft"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                                    return "android" === e.getOSName(!0) && t >= 3
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "android" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "macos" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.desktop,
                                        vendor: "Apple"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "linux" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "playstation 4" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tv
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "roku" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: o.PLATFORMS_MAP.tv
                                    }
                                }
                            }], e.exports = t.default
                        },
                        95: function(e, t, r) {
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                o = r(18);
                            t.default = [{
                                test: function(e) {
                                    return "microsoft edge" === e.getBrowserName(!0)
                                },
                                describe: function(e) {
                                    if (/\sedg\//i.test(e)) return {
                                        name: o.ENGINE_MAP.Blink
                                    };
                                    var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                    return {
                                        name: o.ENGINE_MAP.EdgeHTML,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: o.ENGINE_MAP.Trident
                                        },
                                        r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    return e.test(/presto/i)
                                },
                                describe: function(e) {
                                    var t = {
                                            name: o.ENGINE_MAP.Presto
                                        },
                                        r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/gecko/i),
                                        r = e.test(/like gecko/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: o.ENGINE_MAP.Gecko
                                        },
                                        r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(apple)?webkit\/537\.36/i],
                                describe: function() {
                                    return {
                                        name: o.ENGINE_MAP.Blink
                                    }
                                }
                            }, {
                                test: [/(apple)?webkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: o.ENGINE_MAP.WebKit
                                        },
                                        r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }], e.exports = t.default
                        }
                    },
                    t = {};

                function r(n) {
                    if (t[n]) return t[n].exports;
                    var i = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                }
                return r.m = e, r.c = t, r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, r.r = function(e) {
                    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(e, t) {
                    if (1 & t && (e = r(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (r.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) r.d(n, i, (function(t) {
                            return e[t]
                        }).bind(null, i));
                    return n
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 90)
            }()
        },
        187: function(e) {
            var t, r = "object" == typeof Reflect ? Reflect : null,
                n = r && "function" == typeof r.apply ? r.apply : function(e, t, r) {
                    return Function.prototype.apply.call(e, t, r)
                };
            t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var i = Number.isNaN || function(e) {
                return e != e
            };

            function o() {
                o.init.call(this)
            }
            e.exports = o, e.exports.once = function(e, t) {
                return new Promise(function(r, n) {
                    var i, o, a;

                    function s(r) {
                        e.removeListener(t, c), n(r)
                    }

                    function c() {
                        "function" == typeof e.removeListener && e.removeListener("error", s), r([].slice.call(arguments))
                    }
                    v(e, t, c, {
                        once: !0
                    }), "error" !== t && (i = e, o = s, a = {
                        once: !0
                    }, "function" == typeof i.on && v(i, "error", o, a))
                })
            }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
            var a = 10;

            function s(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function c(e) {
                return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
            }

            function u(e, t, r, n) {
                if (s(r), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), void 0 === a) a = o[t] = r, ++e._eventsCount;
                else if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = c(e)) > 0 && a.length > i && !a.warned) {
                    a.warned = !0;
                    var i, o, a, u = Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length
                }
                return e
            }

            function f() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function l(e, t, r) {
                var n = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    i = f.bind(n);
                return i.listener = r, n.wrapFn = i, i
            }

            function d(e, t, r) {
                var n = e._events;
                if (void 0 === n) return [];
                var i = n[t];
                return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
                    for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(i) : p(i, i.length)
            }

            function h(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function p(e, t) {
                for (var r = Array(t), n = 0; n < t; ++n) r[n] = e[n];
                return r
            }

            function v(e, t, r, n) {
                if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
                else if ("function" == typeof e.addEventListener) e.addEventListener(t, function i(o) {
                    n.once && e.removeEventListener(t, i), r(o)
                });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
            }
            Object.defineProperty(o, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    a = e
                }
            }), o.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, o.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || i(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, o.prototype.getMaxListeners = function() {
                return c(this)
            }, o.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                var i = "error" === e,
                    o = this._events;
                if (void 0 !== o) i = i && void 0 === o.error;
                else if (!i) return !1;
                if (i) {
                    if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
                    var a, s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                    throw s.context = a, s
                }
                var c = o[e];
                if (void 0 === c) return !1;
                if ("function" == typeof c) n(c, this, t);
                else
                    for (var u = c.length, f = p(c, u), r = 0; r < u; ++r) n(f[r], this, t);
                return !0
            }, o.prototype.addListener = function(e, t) {
                return u(this, e, t, !1)
            }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, t) {
                return u(this, e, t, !0)
            }, o.prototype.once = function(e, t) {
                return s(t), this.on(e, l(this, e, t)), this
            }, o.prototype.prependOnceListener = function(e, t) {
                return s(t), this.prependListener(e, l(this, e, t)), this
            }, o.prototype.removeListener = function(e, t) {
                var r, n, i, o, a;
                if (s(t), void 0 === (n = this._events) || void 0 === (r = n[e])) return this;
                if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                    for (i = -1, o = r.length - 1; o >= 0; o--)
                        if (r[o] === t || r[o].listener === t) {
                            a = r[o].listener, i = o;
                            break
                        }
                    if (i < 0) return this;
                    0 === i ? r.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t)
                }
                return this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
                var t, r, n;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 == arguments.length) {
                    var i, o = Object.keys(r);
                    for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = r[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
                return this
            }, o.prototype.listeners = function(e) {
                return d(this, e, !0)
            }, o.prototype.rawListeners = function(e) {
                return d(this, e, !1)
            }, o.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
            }, o.prototype.listenerCount = h, o.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        483: function(e, t, r) {
            e.exports = (function e(t, r, n) {
                function i(a, s) {
                    if (!r[a]) {
                        if (!t[a]) {
                            if (o) return o(a, !0);
                            var c = Error("Cannot find module '" + a + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var u = r[a] = {
                            exports: {}
                        };
                        t[a][0].call(u.exports, function(e) {
                            return i(t[a][1][e] || e)
                        }, u, u.exports, e, t, r, n)
                    }
                    return r[a].exports
                }
                for (var o = void 0, a = 0; a < n.length; a++) i(n[a]);
                return i
            })({
                1: [function(e, t, n) {
                    (function(e) {
                        var r, n, i = e.MutationObserver || e.WebKitMutationObserver;
                        if (i) {
                            var o = 0,
                                a = new i(f),
                                s = e.document.createTextNode("");
                            a.observe(s, {
                                characterData: !0
                            }), r = function() {
                                s.data = o = ++o % 2
                            }
                        } else if (e.setImmediate || void 0 === e.MessageChannel) r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                            var t = e.document.createElement("script");
                            t.onreadystatechange = function() {
                                f(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
                            }, e.document.documentElement.append(t)
                        } : function() {
                            setTimeout(f, 0)
                        };
                        else {
                            var c = new e.MessageChannel;
                            c.port1.onmessage = f, r = function() {
                                c.port2.postMessage(0)
                            }
                        }
                        var u = [];

                        function f() {
                            n = !0;
                            for (var e, t, r = u.length; r;) {
                                for (t = u, u = [], e = -1; ++e < r;) t[e]();
                                r = u.length
                            }
                            n = !1
                        }
                        t.exports = function(e) {
                            1 !== u.push(e) || n || r()
                        }
                    }).call(this, void 0 !== r.g ? r.g : "u" > typeof self ? self : "u" > typeof window ? window : {})
                }, {}],
                2: [function(e, t, r) {
                    var n = e(1);

                    function i() {}
                    var o = {},
                        a = ["REJECTED"],
                        s = ["FULFILLED"],
                        c = ["PENDING"];

                    function u(e) {
                        if ("function" != typeof e) throw TypeError("resolver must be a function");
                        this.state = c, this.queue = [], this.outcome = void 0, e !== i && h(this, e)
                    }

                    function f(e, t, r) {
                        this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected)
                    }

                    function l(e, t, r) {
                        n(function() {
                            var n;
                            try {
                                n = t(r)
                            } catch (t) {
                                return o.reject(e, t)
                            }
                            n === e ? o.reject(e, TypeError("Cannot resolve promise with itself")) : o.resolve(e, n)
                        })
                    }

                    function d(e) {
                        var t = e && e.then;
                        if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                            t.apply(e, arguments)
                        }
                    }

                    function h(e, t) {
                        var r = !1;

                        function n(t) {
                            r || (r = !0, o.reject(e, t))
                        }

                        function i(t) {
                            r || (r = !0, o.resolve(e, t))
                        }
                        var a = p(function() {
                            t(i, n)
                        });
                        "error" === a.status && n(a.value)
                    }

                    function p(e, t) {
                        var r = {};
                        try {
                            r.value = e(t), r.status = "success"
                        } catch (e) {
                            r.status = "error", r.value = e
                        }
                        return r
                    }
                    t.exports = u, u.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, u.prototype.then = function(e, t) {
                        if ("function" != typeof e && this.state === s || "function" != typeof t && this.state === a) return this;
                        var r = new this.constructor(i);
                        return this.state !== c ? l(r, this.state === s ? e : t, this.outcome) : this.queue.push(new f(r, e, t)), r
                    }, f.prototype.callFulfilled = function(e) {
                        o.resolve(this.promise, e)
                    }, f.prototype.otherCallFulfilled = function(e) {
                        l(this.promise, this.onFulfilled, e)
                    }, f.prototype.callRejected = function(e) {
                        o.reject(this.promise, e)
                    }, f.prototype.otherCallRejected = function(e) {
                        l(this.promise, this.onRejected, e)
                    }, o.resolve = function(e, t) {
                        var r = p(d, t);
                        if ("error" === r.status) return o.reject(e, r.value);
                        var n = r.value;
                        if (n) h(e, n);
                        else {
                            e.state = s, e.outcome = t;
                            for (var i = -1, a = e.queue.length; ++i < a;) e.queue[i].callFulfilled(t)
                        }
                        return e
                    }, o.reject = function(e, t) {
                        e.state = a, e.outcome = t;
                        for (var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t);
                        return e
                    }, u.resolve = function(e) {
                        return e instanceof this ? e : o.resolve(new this(i), e)
                    }, u.reject = function(e) {
                        var t = new this(i);
                        return o.reject(t, e)
                    }, u.all = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(TypeError("must be an array"));
                        var r = e.length,
                            n = !1;
                        if (!r) return this.resolve([]);
                        for (var a = Array(r), s = 0, c = -1, u = new this(i); ++c < r;) ! function(e, i) {
                            t.resolve(e).then(function(e) {
                                a[i] = e, ++s !== r || n || (n = !0, o.resolve(u, a))
                            }, function(e) {
                                n || (n = !0, o.reject(u, e))
                            })
                        }(e[c], c);
                        return u
                    }, u.race = function(e) {
                        var t, r = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(TypeError("must be an array"));
                        var n = e.length,
                            a = !1;
                        if (!n) return this.resolve([]);
                        for (var s = -1, c = new this(i); ++s < n;) {
                            t = e[s], r.resolve(t).then(function(e) {
                                a || (a = !0, o.resolve(c, e))
                            }, function(e) {
                                a || (a = !0, o.reject(c, e))
                            })
                        }
                        return c
                    }
                }, {
                    1: 1
                }],
                3: [function(e, t, n) {
                    (function(t) {
                        "function" != typeof t.Promise && (t.Promise = e(2))
                    }).call(this, void 0 !== r.g ? r.g : "u" > typeof self ? self : "u" > typeof window ? window : {})
                }, {
                    2: 2
                }],
                4: [function(e, t, r) {
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        i = function() {
                            try {
                                if ("u" > typeof indexedDB) return indexedDB;
                                if ("u" > typeof webkitIndexedDB) return webkitIndexedDB;
                                if ("u" > typeof mozIndexedDB) return mozIndexedDB;
                                if ("u" > typeof OIndexedDB) return OIndexedDB;
                                if ("u" > typeof msIndexedDB) return msIndexedDB
                            } catch (e) {
                                return
                            }
                        }();

                    function o(e, t) {
                        e = e || [], t = t || {};
                        try {
                            return new Blob(e, t)
                        } catch (i) {
                            if ("TypeError" !== i.name) throw i;
                            for (var r = new("u" > typeof BlobBuilder ? BlobBuilder : "u" > typeof MSBlobBuilder ? MSBlobBuilder : "u" > typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), n = 0; n < e.length; n += 1) r.append(e[n]);
                            return r.getBlob(t.type)
                        }
                    }
                    "u" < typeof Promise && e(3);
                    var a = Promise;

                    function s(e, t) {
                        t && e.then(function(e) {
                            t(null, e)
                        }, function(e) {
                            t(e)
                        })
                    }

                    function c(e, t, r) {
                        "function" == typeof t && e.then(t), "function" == typeof r && e.catch(r)
                    }

                    function u(e) {
                        return "string" != typeof e && (e = String(e)), e
                    }

                    function f() {
                        if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                    }
                    var l = "local-forage-detect-blob-support",
                        d = void 0,
                        h = {},
                        p = Object.prototype.toString,
                        v = "readonly",
                        g = "readwrite";

                    function b(e) {
                        var t = h[e.name],
                            r = {};
                        r.promise = new a(function(e, t) {
                            r.resolve = e, r.reject = t
                        }), t.deferredOperations.push(r), t.dbReady ? t.dbReady = t.dbReady.then(function() {
                            return r.promise
                        }) : t.dbReady = r.promise
                    }

                    function m(e) {
                        var t = h[e.name].deferredOperations.pop();
                        if (t) return t.resolve(), t.promise
                    }

                    function y(e, t) {
                        var r = h[e.name].deferredOperations.pop();
                        if (r) return r.reject(t), r.promise
                    }

                    function w(e, t) {
                        return new a(function(r, n) {
                            if (h[e.name] = h[e.name] || M(), e.db)
                                if (!t) return r(e.db);
                                else b(e), e.db.close();
                            var o = [e.name];
                            t && o.push(e.version);
                            var a = i.open.apply(i, o);
                            t && (a.onupgradeneeded = function(t) {
                                var r = a.result;
                                try {
                                    r.createObjectStore(e.storeName), t.oldVersion <= 1 && r.createObjectStore(l)
                                } catch (e) {
                                    if ("ConstraintError" === e.name);
                                    else throw e
                                }
                            }), a.onerror = function(e) {
                                e.preventDefault(), n(a.error)
                            }, a.onsuccess = function() {
                                r(a.result), m(e)
                            }
                        })
                    }

                    function S(e, t) {
                        if (!e.db) return !0;
                        var r = !e.db.objectStoreNames.contains(e.storeName),
                            n = e.version < e.db.version,
                            i = e.version > e.db.version;
                        if (n && (e.version, e.version = e.db.version), i || r) {
                            if (r) {
                                var o = e.db.version + 1;
                                o > e.version && (e.version = o)
                            }
                            return !0
                        }
                        return !1
                    }

                    function _(e) {
                        return o([function(e) {
                            for (var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r), i = 0; i < t; i++) n[i] = e.charCodeAt(i);
                            return r
                        }(atob(e.data))], {
                            type: e.type
                        })
                    }

                    function k(e) {
                        return e && e.__local_forage_encoded_blob
                    }

                    function I(e) {
                        var t = this,
                            r = t._initReady().then(function() {
                                var e = h[t._dbInfo.name];
                                if (e && e.dbReady) return e.dbReady
                            });
                        return c(r, e, e), r
                    }

                    function P(e, t, r, n) {
                        void 0 === n && (n = 1);
                        try {
                            var i = e.db.transaction(e.storeName, t);
                            r(null, i)
                        } catch (i) {
                            if (n > 0 && (!e.db || "InvalidStateError" === i.name || "NotFoundError" === i.name)) return a.resolve().then(function() {
                                if (!e.db || "NotFoundError" === i.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), w(e, !0)
                            }).then(function() {
                                return (function(e) {
                                    b(e);
                                    for (var t = h[e.name], r = t.forages, n = 0; n < r.length; n++) {
                                        var i = r[n];
                                        i._dbInfo.db && (i._dbInfo.db.close(), i._dbInfo.db = null)
                                    }
                                    return e.db = null, w(e, !1).then(function(t) {
                                        return (e.db = t, S(e)) ? w(e, !0) : t
                                    }).then(function(n) {
                                        e.db = t.db = n;
                                        for (var i = 0; i < r.length; i++) r[i]._dbInfo.db = n
                                    }).catch(function(t) {
                                        throw y(e, t), t
                                    })
                                })(e).then(function() {
                                    P(e, t, r, n - 1)
                                })
                            }).catch(r);
                            r(i)
                        }
                    }

                    function M() {
                        return {
                            forages: [],
                            db: null,
                            dbReady: null,
                            deferredOperations: []
                        }
                    }
                    var E = {
                            _driver: "asyncStorage",
                            _initStorage: function(e) {
                                var t = this,
                                    r = {
                                        db: null
                                    };
                                if (e)
                                    for (var n in e) r[n] = e[n];
                                var i = h[r.name];
                                i || (i = M(), h[r.name] = i), i.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = I);
                                var o = [];

                                function s() {
                                    return a.resolve()
                                }
                                for (var c = 0; c < i.forages.length; c++) {
                                    var u = i.forages[c];
                                    u !== t && o.push(u._initReady().catch(s))
                                }
                                var f = i.forages.slice(0);
                                return a.all(o).then(function() {
                                    return r.db = i.db, w(r, !1)
                                }).then(function(e) {
                                    return (r.db = e, S(r, t._defaultConfig.version)) ? w(r, !0) : e
                                }).then(function(e) {
                                    r.db = i.db = e, t._dbInfo = r;
                                    for (var n = 0; n < f.length; n++) {
                                        var o = f[n];
                                        o !== t && (o._dbInfo.db = r.db, o._dbInfo.version = r.version)
                                    }
                                })
                            },
                            _support: function() {
                                try {
                                    if (!i || !i.open) return !1;
                                    var e = "u" > typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                        t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                    return (!e || t) && "u" > typeof indexedDB && "u" > typeof IDBKeyRange
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, t) {
                                var r = this,
                                    n = new a(function(t, n) {
                                        r.ready().then(function() {
                                            P(r._dbInfo, v, function(i, o) {
                                                if (i) return n(i);
                                                try {
                                                    var a = o.objectStore(r._dbInfo.storeName).openCursor(),
                                                        s = 1;
                                                    a.onsuccess = function() {
                                                        var r = a.result;
                                                        if (r) {
                                                            var n = r.value;
                                                            k(n) && (n = _(n));
                                                            var i = e(n, r.key, s++);
                                                            void 0 !== i ? t(i) : r.continue()
                                                        } else t()
                                                    }, a.onerror = function() {
                                                        n(a.error)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            })
                                        }).catch(n)
                                    });
                                return s(n, t), n
                            },
                            getItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = new a(function(t, n) {
                                    r.ready().then(function() {
                                        P(r._dbInfo, v, function(i, o) {
                                            if (i) return n(i);
                                            try {
                                                var a = o.objectStore(r._dbInfo.storeName).get(e);
                                                a.onsuccess = function() {
                                                    var e = a.result;
                                                    void 0 === e && (e = null), k(e) && (e = _(e)), t(e)
                                                }, a.onerror = function() {
                                                    n(a.error)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        })
                                    }).catch(n)
                                });
                                return s(n, t), n
                            },
                            setItem: function(e, t, r) {
                                var n = this;
                                e = u(e);
                                var i = new a(function(r, i) {
                                    var s;
                                    n.ready().then(function() {
                                        return (s = n._dbInfo, "[object Blob]" === p.call(t)) ? (function(e) {
                                            return "boolean" == typeof d ? a.resolve(d) : new a(function(t) {
                                                var r = e.transaction(l, g),
                                                    n = o([""]);
                                                r.objectStore(l).put(n, "key"), r.onabort = function(e) {
                                                    e.preventDefault(), e.stopPropagation(), t(!1)
                                                }, r.oncomplete = function() {
                                                    var e = navigator.userAgent.match(/Chrome\/(\d+)/);
                                                    t(navigator.userAgent.match(/Edge\//) || !e || parseInt(e[1], 10) >= 43)
                                                }
                                            }).catch(function() {
                                                return !1
                                            }).then(function(e) {
                                                return d = e
                                            })
                                        })(s.db).then(function(e) {
                                            return e ? t : new a(function(e, r) {
                                                var n = new FileReader;
                                                n.onerror = r, n.onloadend = function(r) {
                                                    e({
                                                        __local_forage_encoded_blob: !0,
                                                        data: btoa(r.target.result || ""),
                                                        type: t.type
                                                    })
                                                }, n.readAsBinaryString(t)
                                            })
                                        }) : t
                                    }).then(function(t) {
                                        P(n._dbInfo, g, function(o, a) {
                                            if (o) return i(o);
                                            try {
                                                var s = a.objectStore(n._dbInfo.storeName);
                                                null === t && (t = void 0);
                                                var c = s.put(t, e);
                                                a.oncomplete = function() {
                                                    void 0 === t && (t = null), r(t)
                                                }, a.onabort = a.onerror = function() {
                                                    var e = c.error ? c.error : c.transaction.error;
                                                    i(e)
                                                }
                                            } catch (e) {
                                                i(e)
                                            }
                                        })
                                    }).catch(i)
                                });
                                return s(i, r), i
                            },
                            removeItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = new a(function(t, n) {
                                    r.ready().then(function() {
                                        P(r._dbInfo, g, function(i, o) {
                                            if (i) return n(i);
                                            try {
                                                var a = o.objectStore(r._dbInfo.storeName).delete(e);
                                                o.oncomplete = function() {
                                                    t()
                                                }, o.onerror = function() {
                                                    n(a.error)
                                                }, o.onabort = function() {
                                                    var e = a.error ? a.error : a.transaction.error;
                                                    n(e)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        })
                                    }).catch(n)
                                });
                                return s(n, t), n
                            },
                            clear: function(e) {
                                var t = this,
                                    r = new a(function(e, r) {
                                        t.ready().then(function() {
                                            P(t._dbInfo, g, function(n, i) {
                                                if (n) return r(n);
                                                try {
                                                    var o = i.objectStore(t._dbInfo.storeName).clear();
                                                    i.oncomplete = function() {
                                                        e()
                                                    }, i.onabort = i.onerror = function() {
                                                        var e = o.error ? o.error : o.transaction.error;
                                                        r(e)
                                                    }
                                                } catch (e) {
                                                    r(e)
                                                }
                                            })
                                        }).catch(r)
                                    });
                                return s(r, e), r
                            },
                            length: function(e) {
                                var t = this,
                                    r = new a(function(e, r) {
                                        t.ready().then(function() {
                                            P(t._dbInfo, v, function(n, i) {
                                                if (n) return r(n);
                                                try {
                                                    var o = i.objectStore(t._dbInfo.storeName).count();
                                                    o.onsuccess = function() {
                                                        e(o.result)
                                                    }, o.onerror = function() {
                                                        r(o.error)
                                                    }
                                                } catch (e) {
                                                    r(e)
                                                }
                                            })
                                        }).catch(r)
                                    });
                                return s(r, e), r
                            },
                            key: function(e, t) {
                                var r = this,
                                    n = new a(function(t, n) {
                                        e < 0 ? t(null) : r.ready().then(function() {
                                            P(r._dbInfo, v, function(i, o) {
                                                if (i) return n(i);
                                                try {
                                                    var a = o.objectStore(r._dbInfo.storeName),
                                                        s = !1,
                                                        c = a.openKeyCursor();
                                                    c.onsuccess = function() {
                                                        var r = c.result;
                                                        r ? 0 === e || s ? t(r.key) : (s = !0, r.advance(e)) : t(null)
                                                    }, c.onerror = function() {
                                                        n(c.error)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            })
                                        }).catch(n)
                                    });
                                return s(n, t), n
                            },
                            keys: function(e) {
                                var t = this,
                                    r = new a(function(e, r) {
                                        t.ready().then(function() {
                                            P(t._dbInfo, v, function(n, i) {
                                                if (n) return r(n);
                                                try {
                                                    var o = i.objectStore(t._dbInfo.storeName).openKeyCursor(),
                                                        a = [];
                                                    o.onsuccess = function() {
                                                        var t = o.result;
                                                        t ? (a.push(t.key), t.continue()) : e(a)
                                                    }, o.onerror = function() {
                                                        r(o.error)
                                                    }
                                                } catch (e) {
                                                    r(e)
                                                }
                                            })
                                        }).catch(r)
                                    });
                                return s(r, e), r
                            },
                            dropInstance: function(e, t) {
                                t = f.apply(this, arguments);
                                var r, n = this.config();
                                if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName), e.name) {
                                    var o = e.name === n.name && this._dbInfo.db ? a.resolve(this._dbInfo.db) : w(e, !1).then(function(t) {
                                        var r = h[e.name],
                                            n = r.forages;
                                        r.db = t;
                                        for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = t;
                                        return t
                                    });
                                    r = e.storeName ? o.then(function(t) {
                                        if (t.objectStoreNames.contains(e.storeName)) {
                                            var r = t.version + 1;
                                            b(e);
                                            var n = h[e.name],
                                                o = n.forages;
                                            t.close();
                                            for (var s = 0; s < o.length; s++) {
                                                var c = o[s];
                                                c._dbInfo.db = null, c._dbInfo.version = r
                                            }
                                            return new a(function(t, n) {
                                                var o = i.open(e.name, r);
                                                o.onerror = function(e) {
                                                    o.result.close(), n(e)
                                                }, o.onupgradeneeded = function() {
                                                    o.result.deleteObjectStore(e.storeName)
                                                }, o.onsuccess = function() {
                                                    var e = o.result;
                                                    e.close(), t(e)
                                                }
                                            }).then(function(e) {
                                                n.db = e;
                                                for (var t = 0; t < o.length; t++) {
                                                    var r = o[t];
                                                    r._dbInfo.db = e, m(r._dbInfo)
                                                }
                                            }).catch(function(t) {
                                                throw (y(e, t) || a.resolve()).catch(function() {}), t
                                            })
                                        }
                                    }) : o.then(function(t) {
                                        b(e);
                                        var r = h[e.name],
                                            n = r.forages;
                                        t.close();
                                        for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = null;
                                        return new a(function(t, r) {
                                            var n = i.deleteDatabase(e.name);
                                            n.onerror = n.onblocked = function(e) {
                                                var t = n.result;
                                                t && t.close(), r(e)
                                            }, n.onsuccess = function() {
                                                var e = n.result;
                                                e && e.close(), t(e)
                                            }
                                        }).then(function(e) {
                                            r.db = e;
                                            for (var t = 0; t < n.length; t++) m(n[t]._dbInfo)
                                        }).catch(function(t) {
                                            throw (y(e, t) || a.resolve()).catch(function() {}), t
                                        })
                                    })
                                } else r = a.reject("Invalid arguments");
                                return s(r, t), r
                            }
                        },
                        A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        O = /^~~local_forage_type~([^~]+)~/,
                        C = "__lfsc__:",
                        N = C.length,
                        x = "arbf",
                        D = "blob",
                        T = "si08",
                        F = "ui08",
                        R = "uic8",
                        B = "si16",
                        L = "si32",
                        j = "ur16",
                        W = "ui32",
                        z = "fl32",
                        U = "fl64",
                        q = N + x.length,
                        H = Object.prototype.toString;

                    function V(e) {
                        var t, r, n, i, o, a = .75 * e.length,
                            s = e.length,
                            c = 0;
                        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                        var u = new ArrayBuffer(a),
                            f = new Uint8Array(u);
                        for (t = 0; t < s; t += 4) r = A.indexOf(e[t]), n = A.indexOf(e[t + 1]), i = A.indexOf(e[t + 2]), o = A.indexOf(e[t + 3]), f[c++] = r << 2 | n >> 4, f[c++] = (15 & n) << 4 | i >> 2, f[c++] = (3 & i) << 6 | 63 & o;
                        return u
                    }

                    function K(e) {
                        var t, r = new Uint8Array(e),
                            n = "";
                        for (t = 0; t < r.length; t += 3) n += A[r[t] >> 2], n += A[(3 & r[t]) << 4 | r[t + 1] >> 4], n += A[(15 & r[t + 1]) << 2 | r[t + 2] >> 6], n += A[63 & r[t + 2]];
                        return r.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : r.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
                    }
                    var $ = {
                        serialize: function(e, t) {
                            var r = "";
                            if (e && (r = H.call(e)), e && ("[object ArrayBuffer]" === r || e.buffer && "[object ArrayBuffer]" === H.call(e.buffer))) {
                                var n, i = C;
                                e instanceof ArrayBuffer ? (n = e, i += x) : (n = e.buffer, "[object Int8Array]" === r ? i += T : "[object Uint8Array]" === r ? i += F : "[object Uint8ClampedArray]" === r ? i += R : "[object Int16Array]" === r ? i += B : "[object Uint16Array]" === r ? i += j : "[object Int32Array]" === r ? i += L : "[object Uint32Array]" === r ? i += W : "[object Float32Array]" === r ? i += z : "[object Float64Array]" === r ? i += U : t(Error("Failed to get type for BinaryArray"))), t(i + K(n))
                            } else if ("[object Blob]" === r) {
                                var o = new FileReader;
                                o.onload = function() {
                                    t(C + D + ("~~local_forage_type~" + e.type + "~") + K(this.result))
                                }, o.readAsArrayBuffer(e)
                            } else try {
                                t(JSON.stringify(e))
                            } catch (e) {
                                t(null, e)
                            }
                        },
                        deserialize: function(e) {
                            if (e.substring(0, N) !== C) return JSON.parse(e);
                            var t, r = e.substring(q),
                                n = e.substring(N, q);
                            if (n === D && O.test(r)) {
                                var i = r.match(O);
                                t = i[1], r = r.substring(i[0].length)
                            }
                            var a = V(r);
                            switch (n) {
                                case x:
                                    return a;
                                case D:
                                    return o([a], {
                                        type: t
                                    });
                                case T:
                                    return new Int8Array(a);
                                case F:
                                    return new Uint8Array(a);
                                case R:
                                    return new Uint8ClampedArray(a);
                                case B:
                                    return new Int16Array(a);
                                case j:
                                    return new Uint16Array(a);
                                case L:
                                    return new Int32Array(a);
                                case W:
                                    return new Uint32Array(a);
                                case z:
                                    return new Float32Array(a);
                                case U:
                                    return new Float64Array(a);
                                default:
                                    throw Error("Unkown type: " + n)
                            }
                        },
                        stringToBuffer: V,
                        bufferToString: K
                    };

                    function G(e, t, r, n) {
                        e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, n)
                    }

                    function J(e, t, r, n, i, o) {
                        e.executeSql(r, n, i, function(e, a) {
                            a.code === a.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function(e, s) {
                                s.rows.length ? o(e, a) : G(e, t, function() {
                                    e.executeSql(r, n, i, o)
                                }, o)
                            }, o) : o(e, a)
                        }, o)
                    }

                    function X(e, t, r, n) {
                        var i = this;
                        e = u(e);
                        var o = new a(function(o, a) {
                            i.ready().then(function() {
                                void 0 === t && (t = null);
                                var s = t,
                                    c = i._dbInfo;
                                c.serializer.serialize(t, function(t, u) {
                                    u ? a(u) : c.db.transaction(function(r) {
                                        J(r, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], function() {
                                            o(s)
                                        }, function(e, t) {
                                            a(t)
                                        })
                                    }, function(t) {
                                        if (t.code === t.QUOTA_ERR) {
                                            if (n > 0) return void o(X.apply(i, [e, s, r, n - 1]));
                                            a(t)
                                        }
                                    })
                                })
                            }).catch(a)
                        });
                        return s(o, r), o
                    }
                    var Q = {
                        _driver: "webSQLStorage",
                        _initStorage: function(e) {
                            var t = this,
                                r = {
                                    db: null
                                };
                            if (e)
                                for (var n in e) r[n] = "string" != typeof e[n] ? e[n].toString() : e[n];
                            var i = new a(function(e, n) {
                                try {
                                    r.db = openDatabase(r.name, String(r.version), r.description, r.size)
                                } catch (e) {
                                    return n(e)
                                }
                                r.db.transaction(function(i) {
                                    G(i, r, function() {
                                        t._dbInfo = r, e()
                                    }, function(e, t) {
                                        n(t)
                                    })
                                }, n)
                            });
                            return r.serializer = $, i
                        },
                        _support: "function" == typeof openDatabase,
                        iterate: function(e, t) {
                            var r = this,
                                n = new a(function(t, n) {
                                    r.ready().then(function() {
                                        var i = r._dbInfo;
                                        i.db.transaction(function(r) {
                                            J(r, i, "SELECT * FROM " + i.storeName, [], function(r, n) {
                                                for (var o = n.rows, a = o.length, s = 0; s < a; s++) {
                                                    var c = o.item(s),
                                                        u = c.value;
                                                    if (u && (u = i.serializer.deserialize(u)), void 0 !== (u = e(u, c.key, s + 1))) return void t(u)
                                                }
                                                t()
                                            }, function(e, t) {
                                                n(t)
                                            })
                                        })
                                    }).catch(n)
                                });
                            return s(n, t), n
                        },
                        getItem: function(e, t) {
                            var r = this;
                            e = u(e);
                            var n = new a(function(t, n) {
                                r.ready().then(function() {
                                    var i = r._dbInfo;
                                    i.db.transaction(function(r) {
                                        J(r, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function(e, r) {
                                            var n = r.rows.length ? r.rows.item(0).value : null;
                                            n && (n = i.serializer.deserialize(n)), t(n)
                                        }, function(e, t) {
                                            n(t)
                                        })
                                    })
                                }).catch(n)
                            });
                            return s(n, t), n
                        },
                        setItem: function(e, t, r) {
                            return X.apply(this, [e, t, r, 1])
                        },
                        removeItem: function(e, t) {
                            var r = this;
                            e = u(e);
                            var n = new a(function(t, n) {
                                r.ready().then(function() {
                                    var i = r._dbInfo;
                                    i.db.transaction(function(r) {
                                        J(r, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [e], function() {
                                            t()
                                        }, function(e, t) {
                                            n(t)
                                        })
                                    })
                                }).catch(n)
                            });
                            return s(n, t), n
                        },
                        clear: function(e) {
                            var t = this,
                                r = new a(function(e, r) {
                                    t.ready().then(function() {
                                        var n = t._dbInfo;
                                        n.db.transaction(function(t) {
                                            J(t, n, "DELETE FROM " + n.storeName, [], function() {
                                                e()
                                            }, function(e, t) {
                                                r(t)
                                            })
                                        })
                                    }).catch(r)
                                });
                            return s(r, e), r
                        },
                        length: function(e) {
                            var t = this,
                                r = new a(function(e, r) {
                                    t.ready().then(function() {
                                        var n = t._dbInfo;
                                        n.db.transaction(function(t) {
                                            J(t, n, "SELECT COUNT(key) as c FROM " + n.storeName, [], function(t, r) {
                                                e(r.rows.item(0).c)
                                            }, function(e, t) {
                                                r(t)
                                            })
                                        })
                                    }).catch(r)
                                });
                            return s(r, e), r
                        },
                        key: function(e, t) {
                            var r = this,
                                n = new a(function(t, n) {
                                    r.ready().then(function() {
                                        var i = r._dbInfo;
                                        i.db.transaction(function(r) {
                                            J(r, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, r) {
                                                t(r.rows.length ? r.rows.item(0).key : null)
                                            }, function(e, t) {
                                                n(t)
                                            })
                                        })
                                    }).catch(n)
                                });
                            return s(n, t), n
                        },
                        keys: function(e) {
                            var t = this,
                                r = new a(function(e, r) {
                                    t.ready().then(function() {
                                        var n = t._dbInfo;
                                        n.db.transaction(function(t) {
                                            J(t, n, "SELECT key FROM " + n.storeName, [], function(t, r) {
                                                for (var n = [], i = 0; i < r.rows.length; i++) n.push(r.rows.item(i).key);
                                                e(n)
                                            }, function(e, t) {
                                                r(t)
                                            })
                                        })
                                    }).catch(r)
                                });
                            return s(r, e), r
                        },
                        dropInstance: function(e, t) {
                            t = f.apply(this, arguments);
                            var r, n = this.config();
                            (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                            var i = this;
                            return s(r = e.name ? new a(function(t) {
                                var r;
                                (r = e.name === n.name ? i._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName) ? t({
                                    db: r,
                                    storeNames: [e.storeName]
                                }): t(new a(function(e, t) {
                                    r.transaction(function(n) {
                                        n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t, n) {
                                            for (var i = [], o = 0; o < n.rows.length; o++) i.push(n.rows.item(o).name);
                                            e({
                                                db: r,
                                                storeNames: i
                                            })
                                        }, function(e, r) {
                                            t(r)
                                        })
                                    }, function(e) {
                                        t(e)
                                    })
                                }))
                            }).then(function(e) {
                                return new a(function(t, r) {
                                    e.db.transaction(function(n) {
                                        for (var i = [], o = 0, s = e.storeNames.length; o < s; o++) i.push(function(e) {
                                            return new a(function(t, r) {
                                                n.executeSql("DROP TABLE IF EXISTS " + e, [], function() {
                                                    t()
                                                }, function(e, t) {
                                                    r(t)
                                                })
                                            })
                                        }(e.storeNames[o]));
                                        a.all(i).then(function() {
                                            t()
                                        }).catch(function(e) {
                                            r(e)
                                        })
                                    }, function(e) {
                                        r(e)
                                    })
                                })
                            }) : a.reject("Invalid arguments"), t), r
                        }
                    };

                    function Y(e, t) {
                        var r = e.name + "/";
                        return e.storeName !== t.storeName && (r += e.storeName + "/"), r
                    }
                    var Z = {
                            _driver: "localStorageWrapper",
                            _initStorage: function(e) {
                                var t = {};
                                if (e)
                                    for (var r in e) t[r] = e[r];
                                return (t.keyPrefix = Y(e, this._defaultConfig), ! function() {
                                    var e = "_localforage_support_test";
                                    try {
                                        return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                                    } catch (e) {
                                        return !0
                                    }
                                }() || localStorage.length > 0) ? (this._dbInfo = t, t.serializer = $, a.resolve()) : a.reject()
                            },
                            _support: function() {
                                try {
                                    return "u" > typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, t) {
                                var r = this,
                                    n = r.ready().then(function() {
                                        for (var t = r._dbInfo, n = t.keyPrefix, i = n.length, o = localStorage.length, a = 1, s = 0; s < o; s++) {
                                            var c = localStorage.key(s);
                                            if (0 === c.indexOf(n)) {
                                                var u = localStorage.getItem(c);
                                                if (u && (u = t.serializer.deserialize(u)), void 0 !== (u = e(u, c.substring(i), a++))) return u
                                            }
                                        }
                                    });
                                return s(n, t), n
                            },
                            getItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = r.ready().then(function() {
                                    var t = r._dbInfo,
                                        n = localStorage.getItem(t.keyPrefix + e);
                                    return n && (n = t.serializer.deserialize(n)), n
                                });
                                return s(n, t), n
                            },
                            setItem: function(e, t, r) {
                                var n = this;
                                e = u(e);
                                var i = n.ready().then(function() {
                                    void 0 === t && (t = null);
                                    var r = t;
                                    return new a(function(i, o) {
                                        var a = n._dbInfo;
                                        a.serializer.serialize(t, function(t, n) {
                                            if (n) o(n);
                                            else try {
                                                localStorage.setItem(a.keyPrefix + e, t), i(r)
                                            } catch (e) {
                                                ("QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && o(e), o(e)
                                            }
                                        })
                                    })
                                });
                                return s(i, r), i
                            },
                            removeItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = r.ready().then(function() {
                                    var t = r._dbInfo;
                                    localStorage.removeItem(t.keyPrefix + e)
                                });
                                return s(n, t), n
                            },
                            clear: function(e) {
                                var t = this,
                                    r = t.ready().then(function() {
                                        for (var e = t._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                                            var n = localStorage.key(r);
                                            0 === n.indexOf(e) && localStorage.removeItem(n)
                                        }
                                    });
                                return s(r, e), r
                            },
                            length: function(e) {
                                var t = this.keys().then(function(e) {
                                    return e.length
                                });
                                return s(t, e), t
                            },
                            key: function(e, t) {
                                var r = this,
                                    n = r.ready().then(function() {
                                        var t, n = r._dbInfo;
                                        try {
                                            t = localStorage.key(e)
                                        } catch (e) {
                                            t = null
                                        }
                                        return t && (t = t.substring(n.keyPrefix.length)), t
                                    });
                                return s(n, t), n
                            },
                            keys: function(e) {
                                var t = this,
                                    r = t.ready().then(function() {
                                        for (var e = t._dbInfo, r = localStorage.length, n = [], i = 0; i < r; i++) {
                                            var o = localStorage.key(i);
                                            0 === o.indexOf(e.keyPrefix) && n.push(o.substring(e.keyPrefix.length))
                                        }
                                        return n
                                    });
                                return s(r, e), r
                            },
                            dropInstance: function(e, t) {
                                if (t = f.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                                    var r, n = this.config();
                                    e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                                }
                                var i = this;
                                return s(r = e.name ? new a(function(t) {
                                    t(e.storeName ? Y(e, i._defaultConfig) : e.name + "/")
                                }).then(function(e) {
                                    for (var t = localStorage.length - 1; t >= 0; t--) {
                                        var r = localStorage.key(t);
                                        0 === r.indexOf(e) && localStorage.removeItem(r)
                                    }
                                }) : a.reject("Invalid arguments"), t), r
                            }
                        },
                        ee = function(e, t) {
                            for (var r, n = e.length, i = 0; i < n;) {
                                if ((r = e[i]) === t || "number" == typeof r && "number" == typeof t && isNaN(r) && isNaN(t)) return !0;
                                i++
                            }
                            return !1
                        },
                        et = Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        er = {},
                        en = {},
                        ei = {
                            INDEXEDDB: E,
                            WEBSQL: Q,
                            LOCALSTORAGE: Z
                        },
                        eo = [ei.INDEXEDDB._driver, ei.WEBSQL._driver, ei.LOCALSTORAGE._driver],
                        ea = ["dropInstance"],
                        es = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ea),
                        ec = {
                            description: "",
                            driver: eo.slice(),
                            name: "localforage",
                            size: 4980736,
                            storeName: "keyvaluepairs",
                            version: 1
                        };

                    function eu() {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            if (t)
                                for (var r in t) t.hasOwnProperty(r) && (et(t[r]) ? arguments[0][r] = t[r].slice() : arguments[0][r] = t[r])
                        }
                        return arguments[0]
                    }
                    t.exports = new(function() {
                        function e(t) {
                            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                            for (var r in ei)
                                if (ei.hasOwnProperty(r)) {
                                    var n = ei[r],
                                        i = n._driver;
                                    this[r] = i, er[i] || this.defineDriver(n)
                                }
                            this._defaultConfig = eu({}, ec), this._config = eu({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                        }
                        return e.prototype.config = function(e) {
                            if ((void 0 === e ? "undefined" : n(e)) === "object") {
                                if (this._ready) return Error("Can't call config() after localforage has been used.");
                                for (var t in e) {
                                    if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return Error("Database version must be a number.");
                                    this._config[t] = e[t]
                                }
                                return !("driver" in e) || !e.driver || this.setDriver(this._config.driver)
                            }
                            return "string" == typeof e ? this._config[e] : this._config
                        }, e.prototype.defineDriver = function(e, t, r) {
                            var n = new a(function(t, r) {
                                try {
                                    var n = e._driver,
                                        i = Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                    if (!e._driver) return void r(i);
                                    for (var o = es.concat("_initStorage"), c = 0, u = o.length; c < u; c++) {
                                        var f = o[c];
                                        if ((!ee(ea, f) || e[f]) && "function" != typeof e[f]) return void r(i)
                                    }
                                    for (var l = function(e) {
                                            return function() {
                                                var t = Error("Method " + e + " is not implemented by the current driver"),
                                                    r = a.reject(t);
                                                return s(r, arguments[arguments.length - 1]), r
                                            }
                                        }, d = 0, h = ea.length; d < h; d++) {
                                        var p = ea[d];
                                        e[p] || (e[p] = l(p))
                                    }
                                    var v = function(r) {
                                        er[n], er[n] = e, en[n] = r, t()
                                    };
                                    "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(v, r) : v(!!e._support) : v(!0)
                                } catch (e) {
                                    r(e)
                                }
                            });
                            return c(n, t, r), n
                        }, e.prototype.driver = function() {
                            return this._driver || null
                        }, e.prototype.getDriver = function(e, t, r) {
                            var n = er[e] ? a.resolve(er[e]) : a.reject(Error("Driver not found."));
                            return c(n, t, r), n
                        }, e.prototype.getSerializer = function(e) {
                            var t = a.resolve($);
                            return c(t, e), t
                        }, e.prototype.ready = function(e) {
                            var t = this,
                                r = t._driverSet.then(function() {
                                    return null === t._ready && (t._ready = t._initDriver()), t._ready
                                });
                            return c(r, e, e), r
                        }, e.prototype.setDriver = function(e, t, r) {
                            var n = this;
                            et(e) || (e = [e]);
                            var i = this._getSupportedDrivers(e);

                            function o() {
                                n._config.driver = n.driver()
                            }

                            function s(e) {
                                return n._extend(e), o(), n._ready = n._initStorage(n._config), n._ready
                            }
                            var u = null !== this._driverSet ? this._driverSet.catch(function() {
                                return a.resolve()
                            }) : a.resolve();
                            return this._driverSet = u.then(function() {
                                var e = i[0];
                                return n._dbInfo = null, n._ready = null, n.getDriver(e).then(function(e) {
                                    n._driver = e._driver, o(), n._wrapLibraryMethodsWithReady(), n._initDriver = function() {
                                        var e = 0;
                                        return function t() {
                                            for (; e < i.length;) {
                                                var r = i[e];
                                                return e++, n._dbInfo = null, n._ready = null, n.getDriver(r).then(s).catch(t)
                                            }
                                            o();
                                            var c = Error("No available storage method found.");
                                            return n._driverSet = a.reject(c), n._driverSet
                                        }()
                                    }
                                })
                            }).catch(function() {
                                o();
                                var e = Error("No available storage method found.");
                                return n._driverSet = a.reject(e), n._driverSet
                            }), c(this._driverSet, t, r), this._driverSet
                        }, e.prototype.supports = function(e) {
                            return !!en[e]
                        }, e.prototype._extend = function(e) {
                            eu(this, e)
                        }, e.prototype._getSupportedDrivers = function(e) {
                            for (var t = [], r = 0, n = e.length; r < n; r++) {
                                var i = e[r];
                                this.supports(i) && t.push(i)
                            }
                            return t
                        }, e.prototype._wrapLibraryMethodsWithReady = function() {
                            for (var e = 0, t = es.length; e < t; e++) ! function(e, t) {
                                e[t] = function() {
                                    var r = arguments;
                                    return e.ready().then(function() {
                                        return e[t].apply(e, r)
                                    })
                                }
                            }(this, es[e])
                        }, e.prototype.createInstance = function(t) {
                            return new e(t)
                        }, e
                    }())
                }, {
                    3: 3
                }]
            }, {}, [4])(4)
        },
        129: function(e, t) {
            var r, n = Object.prototype.hasOwnProperty;

            function i(e) {
                try {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                } catch (e) {
                    return null
                }
            }

            function o(e) {
                try {
                    return encodeURIComponent(e)
                } catch (e) {
                    return null
                }
            }
            t.stringify = function(e, t) {
                var i, a, s = [];
                for (a in "string" != typeof(t = t || "") && (t = "?"), e)
                    if (n.call(e, a)) {
                        if (!(i = e[a]) && (null === i || i === r || isNaN(i)) && (i = ""), a = o(a), i = o(i), null === a || null === i) continue;
                        s.push(a + "=" + i)
                    }
                return s.length ? t + s.join("&") : ""
            }, t.parse = function(e) {
                for (var t, r = /([^=?#&]+)=?([^&]*)/g, n = {}; t = r.exec(e);) {
                    var o = i(t[1]),
                        a = i(t[2]);
                    null === o || null === a || o in n || (n[o] = a)
                }
                return n
            }
        },
        418: function(e) {
            e.exports = function(e, t) {
                if (t = t.split(":")[0], !(e *= 1)) return !1;
                switch (t) {
                    case "http":
                    case "ws":
                        return 80 !== e;
                    case "https":
                    case "wss":
                        return 443 !== e;
                    case "ftp":
                        return 21 !== e;
                    case "gopher":
                        return 70 !== e;
                    case "file":
                        return !1
                }
                return 0 !== e
            }
        },
        564: function(e, t, r) {
            var n = r(418),
                i = r(129),
                o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                s = RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

            function c(e) {
                return (e || "").toString().replace(s, "")
            }
            var u = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(e) {
                        return e.replace("\\", "/")
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [0 / 0, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [0 / 0, "hostname", void 0, 1, 1]
                ],
                f = {
                    hash: 1,
                    query: 1
                };

            function l(e) {
                var t, n = ("u" > typeof window ? window : void 0 !== r.g ? r.g : "u" > typeof self ? self : {}).location || {},
                    i = {},
                    a = typeof(e = e || n);
                if ("blob:" === e.protocol) i = new h(unescape(e.pathname), {});
                else if ("string" === a)
                    for (t in i = new h(e, {}), f) delete i[t];
                else if ("object" === a) {
                    for (t in e) t in f || (i[t] = e[t]);
                    void 0 === i.slashes && (i.slashes = o.test(e.href))
                }
                return i
            }

            function d(e) {
                e = c(e);
                var t = a.exec(e);
                return {
                    protocol: t[1] ? t[1].toLowerCase() : "",
                    slashes: !!t[2],
                    rest: t[3]
                }
            }

            function h(e, t, r) {
                if (e = c(e), !(this instanceof h)) return new h(e, t, r);
                var o, a, s, f, p, v, g = u.slice(),
                    b = typeof t,
                    m = 0;
                for ("object" !== b && "string" !== b && (r = t, t = null), r && "function" != typeof r && (r = i.parse), t = l(t), o = !(a = d(e || "")).protocol && !a.slashes, this.slashes = a.slashes || o && t.slashes, this.protocol = a.protocol || t.protocol || "", e = a.rest, a.slashes || (g[3] = [/(.*)/, "pathname"]); m < g.length; m++) {
                    if ("function" == typeof(f = g[m])) {
                        e = f(e);
                        continue
                    }
                    s = f[0], v = f[1], s != s ? this[v] = e : "string" == typeof s ? ~(p = e.indexOf(s)) && ("number" == typeof f[2] ? (this[v] = e.slice(0, p), e = e.slice(p + f[2])) : (this[v] = e.slice(p), e = e.slice(0, p))) : (p = s.exec(e)) && (this[v] = p[1], e = e.slice(0, p.index)), this[v] = this[v] || o && f[3] && t[v] || "", f[4] && (this[v] = this[v].toLowerCase())
                }
                r && (this.query = r(this.query)), o && t.slashes && "/" !== this.pathname.charAt(0) && ("" !== this.pathname || "" !== t.pathname) && (this.pathname = function(e, t) {
                    if ("" === e) return t;
                    for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, i = r[n - 1], o = !1, a = 0; n--;) "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), a++) : a && (0 === n && (o = !0), r.splice(n, 1), a--);
                    return o && r.unshift(""), ("." === i || ".." === i) && r.push(""), r.join("/")
                }(this.pathname, t.pathname)), n(this.port, this.protocol) || (this.host = this.hostname, this.port = ""), this.username = this.password = "", this.auth && (f = this.auth.split(":"), this.username = f[0] || "", this.password = f[1] || ""), this.origin = this.protocol && this.host && "file:" !== this.protocol ? this.protocol + "//" + this.host : "null", this.href = this.toString()
            }
            h.prototype = {
                set: function(e, t, r) {
                    switch (e) {
                        case "query":
                            "string" == typeof t && t.length && (t = (r || i.parse)(t)), this[e] = t;
                            break;
                        case "port":
                            this[e] = t, n(t, this.protocol) ? t && (this.host = this.hostname + ":" + t) : (this.host = this.hostname, this[e] = "");
                            break;
                        case "hostname":
                            this[e] = t, this.port && (t += ":" + this.port), this.host = t;
                            break;
                        case "host":
                            this[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), this.port = t.pop(), this.hostname = t.join(":")) : (this.hostname = t, this.port = "");
                            break;
                        case "protocol":
                            this.protocol = t.toLowerCase(), this.slashes = !r;
                            break;
                        case "pathname":
                        case "hash":
                            if (t) {
                                var o = "pathname" === e ? "/" : "#";
                                this[e] = t.charAt(0) !== o ? o + t : t
                            } else this[e] = t;
                            break;
                        default:
                            this[e] = t
                    }
                    for (var a = 0; a < u.length; a++) {
                        var s = u[a];
                        s[4] && (this[s[1]] = this[s[1]].toLowerCase())
                    }
                    return this.origin = this.protocol && this.host && "file:" !== this.protocol ? this.protocol + "//" + this.host : "null", this.href = this.toString(), this
                },
                toString: function(e) {
                    e && "function" == typeof e || (e = i.stringify);
                    var t, r = this.protocol;
                    r && ":" !== r.charAt(r.length - 1) && (r += ":");
                    var n = r + (this.slashes ? "//" : "");
                    return this.username && (n += this.username, this.password && (n += ":" + this.password), n += "@"), n += this.host + this.pathname, (t = "object" == typeof this.query ? e(this.query) : this.query) && (n += "?" !== t.charAt(0) ? "?" + t : t), this.hash && (n += this.hash), n
                }
            }, h.extractProtocol = d, h.location = l, h.trimLeft = c, h.qs = i, e.exports = h
        }
    },
    t = {};

function r(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {
        exports: {}
    };
    return e[n].call(i.exports, i, i.exports, r), i.exports
}
r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, {
            a: t
        }), t
    }, r.d = function(e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    function() {
        let e, t, n;
        var i, o, a, s, c, u, f, l, d, h, p, v, g, b = r(187);
        let m = function(e) {
                let t = [],
                    r = 0;
                for (let n = 0; n < e.length; n++) {
                    let i = e.charCodeAt(n);
                    i < 128 ? t[r++] = i : (i < 2048 ? t[r++] = i >> 6 | 192 : ((64512 & i) == 55296 && n + 1 < e.length && (64512 & e.charCodeAt(n + 1)) == 56320 ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n)), t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128) : t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128), t[r++] = 63 & i | 128)
                }
                return t
            },
            y = function(e) {
                let t = [],
                    r = 0,
                    n = 0;
                for (; r < e.length;) {
                    let i = e[r++];
                    if (i < 128) t[n++] = String.fromCharCode(i);
                    else if (i > 191 && i < 224) {
                        let o = e[r++];
                        t[n++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                    } else if (i > 239 && i < 365) {
                        let o = ((7 & i) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536;
                        t[n++] = String.fromCharCode(55296 + (o >> 10)), t[n++] = String.fromCharCode(56320 + (1023 & o))
                    } else {
                        let o = e[r++],
                            a = e[r++];
                        t[n++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a)
                    }
                }
                return t.join("")
            },
            w = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray(e, t) {
                    if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    let r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                        n = [];
                    for (let t = 0; t < e.length; t += 3) {
                        let i = e[t],
                            o = t + 1 < e.length,
                            a = o ? e[t + 1] : 0,
                            s = t + 2 < e.length,
                            c = s ? e[t + 2] : 0,
                            u = i >> 2,
                            f = (3 & i) << 4 | a >> 4,
                            l = (15 & a) << 2 | c >> 6,
                            d = 63 & c;
                        !s && (d = 64, o || (l = 64)), n.push(r[u], r[f], r[l], r[d])
                    }
                    return n.join("")
                },
                encodeString(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(m(e), t)
                },
                decodeString(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : y(this.decodeStringToByteArray(e, t))
                },
                decodeStringToByteArray(e, t) {
                    this.init_();
                    let r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                        n = [];
                    for (let t = 0; t < e.length;) {
                        let i = r[e.charAt(t++)],
                            o = t < e.length ? r[e.charAt(t)] : 0,
                            a = ++t < e.length ? r[e.charAt(t)] : 64,
                            s = ++t < e.length ? r[e.charAt(t)] : 64;
                        if (++t, null == i || null == o || null == a || null == s) throw new S;
                        let c = i << 2 | o >> 4;
                        if (n.push(c), 64 !== a) {
                            let e = o << 4 & 240 | a >> 2;
                            if (n.push(e), 64 !== s) {
                                let e = a << 6 & 192 | s;
                                n.push(e)
                            }
                        }
                    }
                    return n
                },
                init_() {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                        for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                    }
                }
            };
        class S extends Error {
            constructor() {
                super(...arguments), this.name = "DecodeBase64StringError"
            }
        }
        let _ = function(e) {
                let t = m(e);
                return w.encodeByteArray(t, !0)
            },
            k = function(e) {
                return _(e).replace(/\./g, "")
            },
            I = function(e) {
                try {
                    return w.decodeString(e, !0)
                } catch (e) {}
                return null
            },
            P = () => {
                var e;
                return null == (e = (() => {
                    try {
                        return function() {
                            if ("u" > typeof self) return self;
                            if ("u" > typeof window) return window;
                            if (void 0 !== r.g) return r.g;
                            throw Error("Unable to locate global object.")
                        }().__FIREBASE_DEFAULTS__ || (() => {
                            if ("u" < typeof process || void 0 === process.env) return;
                            let e = process.env.__FIREBASE_DEFAULTS__;
                            if (e) return JSON.parse(e)
                        })() || (() => {
                            let e;
                            if ("u" < typeof document) return;
                            try {
                                e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                            } catch (e) {
                                return
                            }
                            let t = e && I(e[1]);
                            return t && JSON.parse(t)
                        })()
                    } catch (e) {
                        return
                    }
                })()) ? void 0 : e.config
            };
        class M {
            constructor() {
                this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
                    this.resolve = e, this.reject = t
                })
            }
            wrapCallback(e) {
                return (t, r) => {
                    t ? this.reject(t) : this.resolve(r), "function" == typeof e && (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, r))
                }
            }
        }

        function E() {
            try {
                return "object" == typeof indexedDB
            } catch (e) {
                return !1
            }
        }

        function A() {
            return new Promise((e, t) => {
                try {
                    let r = !0,
                        n = "validate-browser-context-for-indexeddb-analytics-module",
                        i = self.indexedDB.open(n);
                    i.onsuccess = () => {
                        i.result.close(), r || self.indexedDB.deleteDatabase(n), e(!0)
                    }, i.onupgradeneeded = () => {
                        r = !1
                    }, i.onerror = () => {
                        var e;
                        t((null == (e = i.error) ? void 0 : e.message) || "")
                    }
                } catch (e) {
                    t(e)
                }
            })
        }
        class O extends Error {
            constructor(e, t, r) {
                super(t), this.code = e, this.customData = r, this.name = "FirebaseError", Object.setPrototypeOf(this, O.prototype), Error.captureStackTrace && Error.captureStackTrace(this, C.prototype.create)
            }
        }
        class C {
            constructor(e, t, r) {
                this.service = e, this.serviceName = t, this.errors = r
            }
            create(e, ...t) {
                var r, n;
                let i = t[0] || {},
                    o = `${this.service}/${e}`,
                    a = this.errors[e],
                    s = a ? (r = a, n = i, r.replace(N, (e, t) => {
                        let r = n[t];
                        return null != r ? String(r) : `<${t}?>`
                    })) : "Error",
                    c = `${this.serviceName}: ${s} (${o}).`;
                return new O(o, c, i)
            }
        }
        let N = /\{\$([^}]+)}/g;

        function x(e, t) {
            if (e === t) return !0;
            let r = Object.keys(e),
                n = Object.keys(t);
            for (let i of r) {
                if (!n.includes(i)) return !1;
                let r = e[i],
                    o = t[i];
                if (D(r) && D(o)) {
                    if (!x(r, o)) return !1
                } else if (r !== o) return !1
            }
            for (let e of n)
                if (!r.includes(e)) return !1;
            return !0
        }

        function D(e) {
            return null !== e && "object" == typeof e
        }

        function T(e) {
            return e && e._delegate ? e._delegate : e
        }
        class F {
            constructor(e, t, r) {
                this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
            }
            setInstantiationMode(e) {
                return this.instantiationMode = e, this
            }
            setMultipleInstances(e) {
                return this.multipleInstances = e, this
            }
            setServiceProps(e) {
                return this.serviceProps = e, this
            }
            setInstanceCreatedCallback(e) {
                return this.onInstanceCreated = e, this
            }
        }
        let R = "[DEFAULT]";
        class B {
            constructor(e, t) {
                this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
            }
            get(e) {
                let t = this.normalizeInstanceIdentifier(e);
                if (!this.instancesDeferred.has(t)) {
                    let e = new M;
                    if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                        let r = this.getOrInitializeService({
                            instanceIdentifier: t
                        });
                        r && e.resolve(r)
                    } catch (e) {}
                }
                return this.instancesDeferred.get(t).promise
            }
            getImmediate(e) {
                var t;
                let r = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                    n = null != (t = null == e ? void 0 : e.optional) && t;
                if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
                    return this.getOrInitializeService({
                        instanceIdentifier: r
                    })
                } catch (e) {
                    if (n) return null;
                    throw e
                }
                if (n) return null;
                throw Error(`Service ${this.name} is not available`)
            }
            getComponent() {
                return this.component
            }
            setComponent(e) {
                if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                if (this.component = e, this.shouldAutoInitialize()) {
                    if ("EAGER" === e.instantiationMode) try {
                        this.getOrInitializeService({
                            instanceIdentifier: R
                        })
                    } catch (e) {}
                    for (let [e, t] of this.instancesDeferred.entries()) {
                        let r = this.normalizeInstanceIdentifier(e);
                        try {
                            let e = this.getOrInitializeService({
                                instanceIdentifier: r
                            });
                            t.resolve(e)
                        } catch (e) {}
                    }
                }
            }
            clearInstance(e = R) {
                this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
            }
            async delete() {
                let e = Array.from(this.instances.values());
                await Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())])
            }
            isComponentSet() {
                return null != this.component
            }
            isInitialized(e = R) {
                return this.instances.has(e)
            }
            getOptions(e = R) {
                return this.instancesOptions.get(e) || {}
            }
            initialize(e = {}) {
                let {
                    options: t = {}
                } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
                if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                let n = this.getOrInitializeService({
                    instanceIdentifier: r,
                    options: t
                });
                for (let [e, t] of this.instancesDeferred.entries()) r === this.normalizeInstanceIdentifier(e) && t.resolve(n);
                return n
            }
            onInit(e, t) {
                var r;
                let n = this.normalizeInstanceIdentifier(t),
                    i = null != (r = this.onInitCallbacks.get(n)) ? r : new Set;
                i.add(e), this.onInitCallbacks.set(n, i);
                let o = this.instances.get(n);
                return o && e(o, n), () => {
                    i.delete(e)
                }
            }
            invokeOnInitCallbacks(e, t) {
                let r = this.onInitCallbacks.get(t);
                if (r)
                    for (let n of r) try {
                        n(e, t)
                    } catch (e) {}
            }
            getOrInitializeService({
                instanceIdentifier: e,
                options: t = {}
            }) {
                var r;
                let n = this.instances.get(e);
                if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                        instanceIdentifier: (r = e) === R ? void 0 : r,
                        options: t
                    }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                    this.component.onInstanceCreated(this.container, e, n)
                } catch (e) {}
                return n || null
            }
            normalizeInstanceIdentifier(e = R) {
                return this.component ? this.component.multipleInstances ? e : R : e
            }
            shouldAutoInitialize() {
                return !!this.component && "EXPLICIT" !== this.component.instantiationMode
            }
        }
        class L {
            constructor(e) {
                this.name = e, this.providers = new Map
            }
            addComponent(e) {
                let t = this.getProvider(e.name);
                if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
                t.setComponent(e)
            }
            addOrOverwriteComponent(e) {
                this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
            }
            getProvider(e) {
                if (this.providers.has(e)) return this.providers.get(e);
                let t = new B(e, this);
                return this.providers.set(e, t), t
            }
            getProviders() {
                return Array.from(this.providers.values())
            }
        }
        let j = [];
        (o = l || (l = {}))[o.DEBUG = 0] = "DEBUG", o[o.VERBOSE = 1] = "VERBOSE", o[o.INFO = 2] = "INFO", o[o.WARN = 3] = "WARN", o[o.ERROR = 4] = "ERROR", o[o.SILENT = 5] = "SILENT";
        let W = {
                debug: l.DEBUG,
                verbose: l.VERBOSE,
                info: l.INFO,
                warn: l.WARN,
                error: l.ERROR,
                silent: l.SILENT
            },
            z = l.INFO,
            U = {
                [l.DEBUG]: "log",
                [l.VERBOSE]: "log",
                [l.INFO]: "info",
                [l.WARN]: "warn",
                [l.ERROR]: "error"
            },
            q = (e, t, ...r) => {
                if (!(t < e.logLevel))
                    if (new Date().toISOString(), U[t]);
                    else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)
            },
            H = new WeakMap,
            V = new WeakMap,
            K = new WeakMap,
            $ = new WeakMap,
            G = new WeakMap,
            J = {
                get(e, t, r) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return V.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || K.get(e);
                        if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                    }
                    return X(e[t])
                },
                set: (e, t, r) => (e[t] = r, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

        function X(r) {
            if (r instanceof IDBRequest) {
                let e;
                return (e = new Promise((e, t) => {
                    let n = () => {
                            r.removeEventListener("success", i), r.removeEventListener("error", o)
                        },
                        i = () => {
                            e(X(r.result)), n()
                        },
                        o = () => {
                            t(r.error), n()
                        };
                    r.addEventListener("success", i), r.addEventListener("error", o)
                })).then(e => {
                    e instanceof IDBCursor && H.set(e, r)
                }).catch(() => {}), G.set(e, r), e
            }
            if ($.has(r)) return $.get(r);
            let n = function(r) {
                if ("function" == typeof r) return r !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (t || (t = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(r) ? function(...e) {
                    return r.apply(Q(this), e), X(H.get(this))
                } : function(...e) {
                    return X(r.apply(Q(this), e))
                } : function(e, ...t) {
                    let n = r.call(Q(this), e, ...t);
                    return K.set(n, e.sort ? e.sort() : [e]), X(n)
                };
                return r instanceof IDBTransaction && function(e) {
                    if (V.has(e)) return;
                    let t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                            },
                            i = () => {
                                t(), n()
                            },
                            o = () => {
                                r(e.error || new DOMException("AbortError", "AbortError")), n()
                            };
                        e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
                    });
                    V.set(e, t)
                }(r), (e || (e = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some(e => r instanceof e) ? new Proxy(r, J) : r
            }(r);
            return n !== r && ($.set(r, n), G.set(n, r)), n
        }
        let Q = e => G.get(e);

        function Y(e, t, {
            blocked: r,
            upgrade: n,
            blocking: i,
            terminated: o
        } = {}) {
            let a = indexedDB.open(e, t),
                s = X(a);
            return n && a.addEventListener("upgradeneeded", e => {
                n(X(a.result), e.oldVersion, e.newVersion, X(a.transaction), e)
            }), r && a.addEventListener("blocked", e => r(e.oldVersion, e.newVersion, e)), s.then(e => {
                o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
            }).catch(() => {}), s
        }

        function Z(e, {
            blocked: t
        } = {}) {
            let r = indexedDB.deleteDatabase(e);
            return t && r.addEventListener("blocked", e => t(e.oldVersion, e)), X(r).then(() => void 0)
        }
        let ee = ["get", "getKey", "getAll", "getAllKeys", "count"],
            et = ["put", "add", "delete", "clear"],
            er = new Map;

        function en(e, t) {
            if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
            if (er.get(t)) return er.get(t);
            let r = t.replace(/FromIndex$/, ""),
                n = t !== r,
                i = et.includes(r);
            if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || ee.includes(r))) return;
            let o = async function(e, ...t) {
                let o = this.transaction(e, i ? "readwrite" : "readonly"),
                    a = o.store;
                return n && (a = a.index(t.shift())), (await Promise.all([a[r](...t), i && o.done]))[0]
            };
            return er.set(t, o), o
        }
        J = { ...n = J,
            get: (e, t, r) => en(e, t) || n.get(e, t, r),
            has: (e, t) => !!en(e, t) || n.has(e, t)
        };
        class ei {
            constructor(e) {
                this.container = e
            }
            getPlatformInfoString() {
                return this.container.getProviders().map(e => {
                    let t;
                    if ((null == (t = e.getComponent()) ? void 0 : t.type) !== "VERSION") return null; {
                        let t = e.getImmediate();
                        return `${t.library}/${t.version}`
                    }
                }).filter(e => e).join(" ")
            }
        }
        let eo = "@firebase/app",
            ea = "0.10.9",
            es = new class {
                constructor(e) {
                    this.name = e, this._logLevel = z, this._logHandler = q, this._userLogHandler = null, j.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in l)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" == typeof e ? W[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" != typeof e) throw TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, l.DEBUG, ...e), this._logHandler(this, l.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, l.VERBOSE, ...e), this._logHandler(this, l.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, l.INFO, ...e), this._logHandler(this, l.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, l.WARN, ...e), this._logHandler(this, l.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, l.ERROR, ...e), this._logHandler(this, l.ERROR, ...e)
                }
            }("@firebase/app"),
            ec = "[DEFAULT]",
            eu = {
                [eo]: "fire-core",
                "@firebase/app-compat": "fire-core-compat",
                "@firebase/analytics": "fire-analytics",
                "@firebase/analytics-compat": "fire-analytics-compat",
                "@firebase/app-check": "fire-app-check",
                "@firebase/app-check-compat": "fire-app-check-compat",
                "@firebase/auth": "fire-auth",
                "@firebase/auth-compat": "fire-auth-compat",
                "@firebase/database": "fire-rtdb",
                "@firebase/database-compat": "fire-rtdb-compat",
                "@firebase/functions": "fire-fn",
                "@firebase/functions-compat": "fire-fn-compat",
                "@firebase/installations": "fire-iid",
                "@firebase/installations-compat": "fire-iid-compat",
                "@firebase/messaging": "fire-fcm",
                "@firebase/messaging-compat": "fire-fcm-compat",
                "@firebase/performance": "fire-perf",
                "@firebase/performance-compat": "fire-perf-compat",
                "@firebase/remote-config": "fire-rc",
                "@firebase/remote-config-compat": "fire-rc-compat",
                "@firebase/storage": "fire-gcs",
                "@firebase/storage-compat": "fire-gcs-compat",
                "@firebase/firestore": "fire-fst",
                "@firebase/firestore-compat": "fire-fst-compat",
                "@firebase/vertexai-preview": "fire-vertex",
                "fire-js": "fire-js",
                firebase: "fire-js-all"
            },
            ef = new Map,
            el = new Map,
            ed = new Map;

        function eh(e, t) {
            try {
                e.container.addComponent(t)
            } catch (r) {
                es.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, r)
            }
        }

        function ep(e) {
            let t = e.name;
            if (ed.has(t)) return es.debug(`There were multiple attempts to register component ${t}.`), !1;
            for (let r of (ed.set(t, e), ef.values())) eh(r, e);
            for (let t of el.values()) eh(t, e);
            return !0
        }

        function ev(e, t) {
            let r = e.container.getProvider("heartbeat").getImmediate({
                optional: !0
            });
            return r && r.triggerHeartbeat(), e.container.getProvider(t)
        }
        let eg = new C("app", "Firebase", {
            "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
            "bad-app-name": "Illegal App name: '{$appName}'",
            "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
            "app-deleted": "Firebase App named '{$appName}' already deleted",
            "server-app-deleted": "Firebase Server App has been deleted",
            "no-options": "Need to provide options, when not being deployed to hosting via source.",
            "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
            "invalid-log-argument": "First argument to `onLog` must be null or a function.",
            "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
            "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
            "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
        });
        class eb {
            constructor(e, t, r) {
                this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new F("app", () => this, "PUBLIC"))
            }
            get automaticDataCollectionEnabled() {
                return this.checkDestroyed(), this._automaticDataCollectionEnabled
            }
            set automaticDataCollectionEnabled(e) {
                this.checkDestroyed(), this._automaticDataCollectionEnabled = e
            }
            get name() {
                return this.checkDestroyed(), this._name
            }
            get options() {
                return this.checkDestroyed(), this._options
            }
            get config() {
                return this.checkDestroyed(), this._config
            }
            get container() {
                return this._container
            }
            get isDeleted() {
                return this._isDeleted
            }
            set isDeleted(e) {
                this._isDeleted = e
            }
            checkDestroyed() {
                if (this.isDeleted) throw eg.create("app-deleted", {
                    appName: this._name
                })
            }
        }

        function em(e, t = {}) {
            let r = e;
            "object" != typeof t && (t = {
                name: t
            });
            let n = Object.assign({
                    name: ec,
                    automaticDataCollectionEnabled: !1
                }, t),
                i = n.name;
            if ("string" != typeof i || !i) throw eg.create("bad-app-name", {
                appName: String(i)
            });
            if (r || (r = P()), !r) throw eg.create("no-options");
            let o = ef.get(i);
            if (o)
                if (x(r, o.options) && x(n, o.config)) return o;
                else throw eg.create("duplicate-app", {
                    appName: i
                });
            let a = new L(i);
            for (let e of ed.values()) a.addComponent(e);
            let s = new eb(r, n, a);
            return ef.set(i, s), s
        }

        function ey(e, t, r) {
            var n;
            let i = null != (n = eu[e]) ? n : e;
            r && (i += `-${r}`);
            let o = i.match(/\s|\//),
                a = t.match(/\s|\//);
            if (o || a) {
                let e = [`Unable to register library "${i}" with version "${t}":`];
                o && e.push(`library name "${i}" contains illegal characters (whitespace or "/")`), o && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), es.warn(e.join(" "));
                return
            }
            ep(new F(`${i}-version`, () => ({
                library: i,
                version: t
            }), "VERSION"))
        }
        let ew = "firebase-heartbeat-store",
            eS = null;

        function e_() {
            return eS || (eS = Y("firebase-heartbeat-database", 1, {
                upgrade: (e, t) => {
                    if (0 === t) try {
                        e.createObjectStore(ew)
                    } catch (e) {}
                }
            }).catch(e => {
                throw eg.create("idb-open", {
                    originalErrorMessage: e.message
                })
            })), eS
        }
        async function ek(e, t) {
            try {
                let r = (await e_()).transaction(ew, "readwrite"),
                    n = r.objectStore(ew);
                await n.put(t, eI(e)), await r.done
            } catch (e) {
                if (e instanceof O) es.warn(e.message);
                else {
                    let t = eg.create("idb-set", {
                        originalErrorMessage: null == e ? void 0 : e.message
                    });
                    es.warn(t.message)
                }
            }
        }

        function eI(e) {
            return `${e.name}!${e.options.appId}`
        }
        class eP {
            constructor(e) {
                this.container = e, this._heartbeatsCache = null;
                let t = this.container.getProvider("app").getImmediate();
                this._storage = new eE(t), this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e, e))
            }
            async triggerHeartbeat() {
                var e, t;
                try {
                    let r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                        n = eM();
                    if ((null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, (null == (t = this._heartbeatsCache) ? void 0 : t.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some(e => e.date === n)) return;
                    return this._heartbeatsCache.heartbeats.push({
                        date: n,
                        agent: r
                    }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(e => {
                        let t = new Date(e.date).valueOf();
                        return Date.now() - t <= 2592e6
                    }), this._storage.overwrite(this._heartbeatsCache)
                } catch (e) {
                    es.warn(e)
                }
            }
            async getHeartbeatsHeader() {
                var e;
                try {
                    if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, (null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats) == null || 0 === this._heartbeatsCache.heartbeats.length) return "";
                    let t = eM(),
                        {
                            heartbeatsToSend: r,
                            unsentEntries: n
                        } = function(e, t = 1024) {
                            let r = [],
                                n = e.slice();
                            for (let i of e) {
                                let e = r.find(e => e.agent === i.agent);
                                if (e) {
                                    if (e.dates.push(i.date), eA(r) > t) {
                                        e.dates.pop();
                                        break
                                    }
                                } else if (r.push({
                                        agent: i.agent,
                                        dates: [i.date]
                                    }), eA(r) > t) {
                                    r.pop();
                                    break
                                }
                                n = n.slice(1)
                            }
                            return {
                                heartbeatsToSend: r,
                                unsentEntries: n
                            }
                        }(this._heartbeatsCache.heartbeats),
                        i = k(JSON.stringify({
                            version: 2,
                            heartbeats: r
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = t, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i
                } catch (e) {
                    return es.warn(e), ""
                }
            }
        }

        function eM() {
            return new Date().toISOString().substring(0, 10)
        }
        class eE {
            constructor(e) {
                this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
            }
            async runIndexedDBEnvironmentCheck() {
                return !!E() && A().then(() => !0).catch(() => !1)
            }
            async read() {
                if (!await this._canUseIndexedDBPromise) return {
                    heartbeats: []
                }; {
                    let e = await async function(e) {
                        try {
                            let t = (await e_()).transaction(ew),
                                r = await t.objectStore(ew).get(eI(e));
                            return await t.done, r
                        } catch (e) {
                            if (e instanceof O) es.warn(e.message);
                            else {
                                let t = eg.create("idb-get", {
                                    originalErrorMessage: null == e ? void 0 : e.message
                                });
                                es.warn(t.message)
                            }
                        }
                    }(this.app);
                    return (null == e ? void 0 : e.heartbeats) ? e : {
                        heartbeats: []
                    }
                }
            }
            async overwrite(e) {
                var t;
                if (await this._canUseIndexedDBPromise) {
                    let r = await this.read();
                    return ek(this.app, {
                        lastSentHeartbeatDate: null != (t = e.lastSentHeartbeatDate) ? t : r.lastSentHeartbeatDate,
                        heartbeats: e.heartbeats
                    })
                }
            }
            async add(e) {
                var t;
                if (await this._canUseIndexedDBPromise) {
                    let r = await this.read();
                    return ek(this.app, {
                        lastSentHeartbeatDate: null != (t = e.lastSentHeartbeatDate) ? t : r.lastSentHeartbeatDate,
                        heartbeats: [...r.heartbeats, ...e.heartbeats]
                    })
                }
            }
        }

        function eA(e) {
            return k(JSON.stringify({
                version: 2,
                heartbeats: e
            })).length
        }
        ep(new F("platform-logger", e => new ei(e), "PRIVATE")), ep(new F("heartbeat", e => new eP(e), "PRIVATE")), ey(eo, ea, ""), ey(eo, ea, "esm2017"), ey("fire-js", "");
        let eO = "@firebase/installations",
            eC = "0.6.8",
            eN = `w:${eC}`,
            ex = "FIS_v2",
            eD = new C("installations", "Installations", {
                "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                "not-registered": "Firebase Installation is not registered.",
                "installation-not-found": "Firebase Installation not found.",
                "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                "app-offline": "Could not process request. Application offline.",
                "delete-pending-registration": "Can't delete installation while there is a pending registration request."
            });

        function eT(e) {
            return e instanceof O && e.code.includes("request-failed")
        }

        function eF({
            projectId: e
        }) {
            return `https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`
        }

        function eR(e) {
            return {
                token: e.token,
                requestStatus: 2,
                expiresIn: Number(e.expiresIn.replace("s", "000")),
                creationTime: Date.now()
            }
        }
        async function eB(e, t) {
            let r = (await t.json()).error;
            return eD.create("request-failed", {
                requestName: e,
                serverCode: r.code,
                serverMessage: r.message,
                serverStatus: r.status
            })
        }

        function eL({
            apiKey: e
        }) {
            return new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": e
            })
        }
        async function ej(e) {
            let t = await e();
            return t.status >= 500 && t.status < 600 ? e() : t
        }

        function eW(e) {
            return new Promise(t => {
                setTimeout(t, e)
            })
        }
        let ez = /^[cdef][\w-]{21}$/;

        function eU(e) {
            return `${e.appName}!${e.appId}`
        }
        let eq = new Map;

        function eH(e, t) {
            var r, n;
            let i, o = eU(e);
            eV(o, t), r = o, n = t, (i = (!eK && "BroadcastChannel" in self && ((eK = new BroadcastChannel("[Firebase] FID Change")).onmessage = e => {
                eV(e.data.key, e.data.fid)
            }), eK)) && i.postMessage({
                key: r,
                fid: n
            }), 0 === eq.size && eK && (eK.close(), eK = null)
        }

        function eV(e, t) {
            let r = eq.get(e);
            if (r)
                for (let e of r) e(t)
        }
        let eK = null,
            e$ = "firebase-installations-store",
            eG = null;

        function eJ() {
            return eG || (eG = Y("firebase-installations-database", 1, {
                upgrade: (e, t) => {
                    0 === t && e.createObjectStore(e$)
                }
            })), eG
        }
        async function eX(e, t) {
            let r = eU(e),
                n = (await eJ()).transaction(e$, "readwrite"),
                i = n.objectStore(e$),
                o = await i.get(r);
            return await i.put(t, r), await n.done, o && o.fid === t.fid || eH(e, t.fid), t
        }
        async function eQ(e) {
            let t = eU(e),
                r = (await eJ()).transaction(e$, "readwrite");
            await r.objectStore(e$).delete(t), await r.done
        }
        async function eY(e, t) {
            let r = eU(e),
                n = (await eJ()).transaction(e$, "readwrite"),
                i = n.objectStore(e$),
                o = await i.get(r),
                a = t(o);
            return void 0 === a ? await i.delete(r) : await i.put(a, r), await n.done, a && (!o || o.fid !== a.fid) && eH(e, a.fid), a
        }
        async function eZ(e) {
            let t, r = await eY(e.appConfig, r => {
                let n = function(e, t) {
                    if (0 === t.registrationStatus) {
                        if (!navigator.onLine) return {
                            installationEntry: t,
                            registrationPromise: Promise.reject(eD.create("app-offline"))
                        };
                        let r = {
                                fid: t.fid,
                                registrationStatus: 1,
                                registrationTime: Date.now()
                            },
                            n = async function(e, t) {
                                try {
                                    let r = await async function({
                                        appConfig: e,
                                        heartbeatServiceProvider: t
                                    }, {
                                        fid: r
                                    }) {
                                        let n = eF(e),
                                            i = eL(e),
                                            o = t.getImmediate({
                                                optional: !0
                                            });
                                        if (o) {
                                            let e = await o.getHeartbeatsHeader();
                                            e && i.append("x-firebase-client", e)
                                        }
                                        let a = {
                                                method: "POST",
                                                headers: i,
                                                body: JSON.stringify({
                                                    fid: r,
                                                    authVersion: ex,
                                                    appId: e.appId,
                                                    sdkVersion: eN
                                                })
                                            },
                                            s = await ej(() => fetch(n, a));
                                        if (s.ok) {
                                            let e = await s.json();
                                            return {
                                                fid: e.fid || r,
                                                registrationStatus: 2,
                                                refreshToken: e.refreshToken,
                                                authToken: eR(e.authToken)
                                            }
                                        }
                                        throw await eB("Create Installation", s)
                                    }(e, t);
                                    return eX(e.appConfig, r)
                                } catch (r) {
                                    throw eT(r) && 409 === r.customData.serverCode ? await eQ(e.appConfig) : await eX(e.appConfig, {
                                        fid: t.fid,
                                        registrationStatus: 0
                                    }), r
                                }
                            }(e, r);
                        return {
                            installationEntry: r,
                            registrationPromise: n
                        }
                    }
                    return 1 === t.registrationStatus ? {
                        installationEntry: t,
                        registrationPromise: async function(e) {
                            let t = await e0(e.appConfig);
                            for (; 1 === t.registrationStatus;) await eW(100), t = await e0(e.appConfig);
                            if (0 === t.registrationStatus) {
                                let {
                                    installationEntry: t,
                                    registrationPromise: r
                                } = await eZ(e);
                                return r || t
                            }
                            return t
                        }(e)
                    } : {
                        installationEntry: t
                    }
                }(e, e1(r || {
                    fid: function() {
                        try {
                            var e;
                            let t = new Uint8Array(17);
                            (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
                            let r = (e = t, btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_").substr(0, 22));
                            return ez.test(r) ? r : ""
                        } catch (e) {
                            return ""
                        }
                    }(),
                    registrationStatus: 0
                }));
                return t = n.registrationPromise, n.installationEntry
            });
            return "" === r.fid ? {
                installationEntry: await t
            } : {
                installationEntry: r,
                registrationPromise: t
            }
        }

        function e0(e) {
            return eY(e, e => {
                if (!e) throw eD.create("installation-not-found");
                return e1(e)
            })
        }

        function e1(e) {
            var t;
            return 1 === (t = e).registrationStatus && t.registrationTime + 1e4 < Date.now() ? {
                fid: e.fid,
                registrationStatus: 0
            } : e
        }
        async function e2(e, t = !1) {
            let r, n = await eY(e.appConfig, n => {
                var i, o, a;
                let s;
                if (!e4(n)) throw eD.create("not-registered");
                let c = n.authToken;
                if (!t && 2 === (i = c).requestStatus && (o = i, !((s = Date.now()) < o.creationTime) && !(o.creationTime + o.expiresIn < s + 36e5))) return n;
                if (1 === c.requestStatus) return r = async function(e, t) {
                    let r = await e3(e.appConfig);
                    for (; 1 === r.authToken.requestStatus;) await eW(100), r = await e3(e.appConfig);
                    let n = r.authToken;
                    return 0 === n.requestStatus ? e2(e, t) : n
                }(e, t), n; {
                    let t;
                    if (!navigator.onLine) throw eD.create("app-offline");
                    let i = (a = n, t = {
                        requestStatus: 1,
                        requestTime: Date.now()
                    }, Object.assign(Object.assign({}, a), {
                        authToken: t
                    }));
                    return r = async function(e, t) {
                        try {
                            let r = await async function({
                                    appConfig: e,
                                    heartbeatServiceProvider: t
                                }, r) {
                                    let n = function(e, {
                                            fid: t
                                        }) {
                                            return `${eF(e)}/${t}/authTokens:generate`
                                        }(e, r),
                                        i = function(e, {
                                            refreshToken: t
                                        }) {
                                            var r;
                                            let n = eL(e);
                                            return n.append("Authorization", (r = t, `${ex} ${r}`)), n
                                        }(e, r),
                                        o = t.getImmediate({
                                            optional: !0
                                        });
                                    if (o) {
                                        let e = await o.getHeartbeatsHeader();
                                        e && i.append("x-firebase-client", e)
                                    }
                                    let a = {
                                            method: "POST",
                                            headers: i,
                                            body: JSON.stringify({
                                                installation: {
                                                    sdkVersion: eN,
                                                    appId: e.appId
                                                }
                                            })
                                        },
                                        s = await ej(() => fetch(n, a));
                                    if (s.ok) return eR(await s.json());
                                    throw await eB("Generate Auth Token", s)
                                }(e, t),
                                n = Object.assign(Object.assign({}, t), {
                                    authToken: r
                                });
                            return await eX(e.appConfig, n), r
                        } catch (r) {
                            if (eT(r) && (401 === r.customData.serverCode || 404 === r.customData.serverCode)) await eQ(e.appConfig);
                            else {
                                let r = Object.assign(Object.assign({}, t), {
                                    authToken: {
                                        requestStatus: 0
                                    }
                                });
                                await eX(e.appConfig, r)
                            }
                            throw r
                        }
                    }(e, i), i
                }
            });
            return r ? await r : n.authToken
        }

        function e3(e) {
            return eY(e, e => {
                var t;
                if (!e4(e)) throw eD.create("not-registered");
                return 1 === (t = e.authToken).requestStatus && t.requestTime + 1e4 < Date.now() ? Object.assign(Object.assign({}, e), {
                    authToken: {
                        requestStatus: 0
                    }
                }) : e
            })
        }

        function e4(e) {
            return void 0 !== e && 2 === e.registrationStatus
        }

        function e6(e) {
            return eD.create("missing-app-config-values", {
                valueName: e
            })
        }
        let e5 = "installations";
        ep(new F(e5, e => {
            let t = e.getProvider("app").getImmediate(),
                r = function(e) {
                    if (!e || !e.options) throw e6("App Configuration");
                    if (!e.name) throw e6("App Name");
                    for (let t of ["projectId", "apiKey", "appId"])
                        if (!e.options[t]) throw e6(t);
                    return {
                        appName: e.name,
                        projectId: e.options.projectId,
                        apiKey: e.options.apiKey,
                        appId: e.options.appId
                    }
                }(t),
                n = ev(t, "heartbeat");
            return {
                app: t,
                appConfig: r,
                heartbeatServiceProvider: n,
                _delete: () => Promise.resolve()
            }
        }, "PUBLIC")), ep(new F("installations-internal", e => {
            let t = ev(e.getProvider("app").getImmediate(), e5).getImmediate();
            return {
                getId: () => (async function(e) {
                    let {
                        installationEntry: t,
                        registrationPromise: r
                    } = await eZ(e);
                    return r ? r.catch(console.error) : e2(e).catch(console.error), t.fid
                })(t),
                getToken: e => (async function(e, t = !1) {
                    return await async function(e) {
                        let {
                            registrationPromise: t
                        } = await eZ(e);
                        t && await t
                    }(e), (await e2(e, t)).token
                })(t, e)
            }
        }, "PRIVATE")), ey(eO, eC), ey(eO, eC, "esm2017");
        let e8 = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
            e7 = "google.c.a.c_id";

        function e9(e) {
            return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }(a = d || (d = {}))[a.DATA_MESSAGE = 1] = "DATA_MESSAGE", a[a.DISPLAY_NOTIFICATION = 3] = "DISPLAY_NOTIFICATION", (s = h || (h = {})).PUSH_RECEIVED = "push-received", s.NOTIFICATION_CLICKED = "notification-clicked";
        let te = "fcm_token_details_db",
            tt = "fcm_token_object_Store",
            tr = "firebase-messaging-store",
            tn = null;

        function ti() {
            return tn || (tn = Y("firebase-messaging-database", 1, {
                upgrade: (e, t) => {
                    0 === t && e.createObjectStore(tr)
                }
            })), tn
        }
        async function to(e, t) {
            let r = function({
                    appConfig: e
                }) {
                    return e.appId
                }(e),
                n = (await ti()).transaction(tr, "readwrite");
            return await n.objectStore(tr).put(t, r), await n.done, t
        }
        let ta = new C("messaging", "Messaging", {
            "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
            "only-available-in-window": "This method is available in a Window context.",
            "only-available-in-sw": "This method is available in a service worker context.",
            "permission-default": "The notification permission was not granted and dismissed instead.",
            "permission-blocked": "The notification permission was not granted and blocked instead.",
            "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
            "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
            "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
            "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
            "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
            "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
            "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
            "token-update-no-token": "FCM returned no token when updating the user to push.",
            "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
            "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
            "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
            "invalid-vapid-key": "The public VAPID key must be a string.",
            "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
        });

        function ts({
            projectId: e
        }) {
            return `https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`
        }
        async function tc({
            appConfig: e,
            installations: t
        }) {
            let r = await t.getToken();
            return new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": e.apiKey,
                "x-goog-firebase-installations-auth": `FIS ${r}`
            })
        }

        function tu({
            p256dh: e,
            auth: t,
            endpoint: r,
            vapidKey: n
        }) {
            let i = {
                web: {
                    endpoint: r,
                    auth: t,
                    p256dh: e
                }
            };
            return n !== e8 && (i.web.applicationPubKey = n), i
        }
        async function tf(e, t) {
            let r = {
                token: await async function(e, t) {
                    let r, n = {
                        method: "POST",
                        headers: await tc(e),
                        body: JSON.stringify(tu(t))
                    };
                    try {
                        let t = await fetch(ts(e.appConfig), n);
                        r = await t.json()
                    } catch (e) {
                        throw ta.create("token-subscribe-failed", {
                            errorInfo: null == e ? void 0 : e.toString()
                        })
                    }
                    if (r.error) {
                        let e = r.error.message;
                        throw ta.create("token-subscribe-failed", {
                            errorInfo: e
                        })
                    }
                    if (!r.token) throw ta.create("token-subscribe-no-token");
                    return r.token
                }(e, t),
                createTime: Date.now(),
                subscriptionOptions: t
            };
            return await to(e, r), r.token
        }

        function tl(e) {
            var t, r;
            let n = {
                from: e.from,
                collapseKey: e.collapse_key,
                messageId: e.fcmMessageId
            };
            return function(e, t) {
                    if (!t.notification) return;
                    e.notification = {};
                    let r = t.notification.title;
                    r && (e.notification.title = r);
                    let n = t.notification.body;
                    n && (e.notification.body = n);
                    let i = t.notification.image;
                    i && (e.notification.image = i);
                    let o = t.notification.icon;
                    o && (e.notification.icon = o)
                }(n, e), t = n, (r = e).data && (t.data = r.data),
                function(e, t) {
                    var r, n, i, o, a;
                    if (!t.fcmOptions && !(null == (r = t.notification) ? void 0 : r.click_action)) return;
                    e.fcmOptions = {};
                    let s = null != (i = null == (n = t.fcmOptions) ? void 0 : n.link) ? i : null == (o = t.notification) ? void 0 : o.click_action;
                    s && (e.fcmOptions.link = s);
                    let c = null == (a = t.fcmOptions) ? void 0 : a.analytics_label;
                    c && (e.fcmOptions.analyticsLabel = c)
                }(n, e), n
        }

        function td(e, t) {
            let r = [];
            for (let n = 0; n < e.length; n++) r.push(e.charAt(n)), n < t.length && r.push(t.charAt(n));
            return r.join("")
        }

        function th(e) {
            return ta.create("missing-app-config-values", {
                valueName: e
            })
        }
        td("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"), td("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
        class tp {
            constructor(e, t, r) {
                this.deliveryMetricsExportedToBigQueryEnabled = !1, this.onBackgroundMessageHandler = null, this.onMessageHandler = null, this.logEvents = [], this.isLogServiceStarted = !1;
                let n = function(e) {
                    if (!e || !e.options) throw th("App Configuration Object");
                    if (!e.name) throw th("App Name");
                    let {
                        options: t
                    } = e;
                    for (let e of ["projectId", "apiKey", "appId", "messagingSenderId"])
                        if (!t[e]) throw th(e);
                    return {
                        appName: e.name,
                        projectId: t.projectId,
                        apiKey: t.apiKey,
                        appId: t.appId,
                        senderId: t.messagingSenderId
                    }
                }(e);
                this.firebaseDependencies = {
                    app: e,
                    appConfig: n,
                    installations: t,
                    analyticsProvider: r
                }
            }
            _delete() {
                return Promise.resolve()
            }
        }
        async function tv(e, t) {
            if (!navigator) throw ta.create("only-available-in-window");
            if ("default" === Notification.permission && await Notification.requestPermission(), "granted" !== Notification.permission) throw ta.create("permission-blocked");
            return await async function(e, t) {
                t ? e.vapidKey = t : e.vapidKey || (e.vapidKey = e8)
            }(e, null == t ? void 0 : t.vapidKey), await async function(e, t) {
                if (t || e.swRegistration || await async function(e) {
                        try {
                            e.swRegistration = await navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                                scope: "/firebase-cloud-messaging-push-scope"
                            }), e.swRegistration.update().catch(() => {})
                        } catch (e) {
                            throw ta.create("failed-service-worker-registration", {
                                browserErrorMessage: null == e ? void 0 : e.message
                            })
                        }
                    }(e), t || !e.swRegistration) {
                    if (!(t instanceof ServiceWorkerRegistration)) throw ta.create("invalid-sw-registration");
                    e.swRegistration = t
                }
            }(e, null == t ? void 0 : t.serviceWorkerRegistration), async function(e) {
                var t, r;
                let n, i, o, a, s = await async function(e, t) {
                        let r = await e.pushManager.getSubscription();
                        return r || e.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: function(e) {
                                let t = "=".repeat((4 - e.length % 4) % 4),
                                    r = atob((e + t).replace(/\-/g, "+").replace(/_/g, "/")),
                                    n = new Uint8Array(r.length);
                                for (let e = 0; e < r.length; ++e) n[e] = r.charCodeAt(e);
                                return n
                            }(t)
                        })
                    }(e.swRegistration, e.vapidKey),
                    c = {
                        vapidKey: e.vapidKey,
                        swScope: e.swRegistration.scope,
                        endpoint: s.endpoint,
                        auth: e9(s.getKey("auth")),
                        p256dh: e9(s.getKey("p256dh"))
                    },
                    u = await async function(e) {
                        let t = function({
                                appConfig: e
                            }) {
                                return e.appId
                            }(e),
                            r = await ti(),
                            n = await r.transaction(tr).objectStore(tr).get(t);
                        if (n) return n; {
                            let t = await async function(e) {
                                if ("databases" in indexedDB && !(await indexedDB.databases()).map(e => e.name).includes(te)) return null;
                                let t = null;
                                return (await Y(te, 5, {
                                    upgrade: async (r, n, i, o) => {
                                        var a;
                                        if (n < 2 || !r.objectStoreNames.contains(tt)) return;
                                        let s = o.objectStore(tt),
                                            c = await s.index("fcmSenderId").get(e);
                                        if (await s.clear(), c)
                                            if (2 === n) {
                                                if (!c.auth || !c.p256dh || !c.endpoint) return;
                                                t = {
                                                    token: c.fcmToken,
                                                    createTime: null != (a = c.createTime) ? a : Date.now(),
                                                    subscriptionOptions: {
                                                        auth: c.auth,
                                                        p256dh: c.p256dh,
                                                        endpoint: c.endpoint,
                                                        swScope: c.swScope,
                                                        vapidKey: "string" == typeof c.vapidKey ? c.vapidKey : e9(c.vapidKey)
                                                    }
                                                }
                                            } else 3 === n ? t = {
                                                token: c.fcmToken,
                                                createTime: c.createTime,
                                                subscriptionOptions: {
                                                    auth: e9(c.auth),
                                                    p256dh: e9(c.p256dh),
                                                    endpoint: c.endpoint,
                                                    swScope: c.swScope,
                                                    vapidKey: e9(c.vapidKey)
                                                }
                                            } : 4 === n && (t = {
                                                token: c.fcmToken,
                                                createTime: c.createTime,
                                                subscriptionOptions: {
                                                    auth: e9(c.auth),
                                                    p256dh: e9(c.p256dh),
                                                    endpoint: c.endpoint,
                                                    swScope: c.swScope,
                                                    vapidKey: e9(c.vapidKey)
                                                }
                                            })
                                    }
                                })).close(), await Z(te), await Z("fcm_vapid_details_db"), await Z("undefined"), ! function(e) {
                                    if (!e || !e.subscriptionOptions) return !1;
                                    let {
                                        subscriptionOptions: t
                                    } = e;
                                    return "number" == typeof e.createTime && e.createTime > 0 && "string" == typeof e.token && e.token.length > 0 && "string" == typeof t.auth && t.auth.length > 0 && "string" == typeof t.p256dh && t.p256dh.length > 0 && "string" == typeof t.endpoint && t.endpoint.length > 0 && "string" == typeof t.swScope && t.swScope.length > 0 && "string" == typeof t.vapidKey && t.vapidKey.length > 0
                                }(t) ? null : t
                            }(e.appConfig.senderId);
                            if (t) return await to(e, t), t
                        }
                    }(e.firebaseDependencies);
                if (!u) return tf(e.firebaseDependencies, c);
                if (t = u.subscriptionOptions, n = (r = c).vapidKey === t.vapidKey, i = r.endpoint === t.endpoint, o = r.auth === t.auth, a = r.p256dh === t.p256dh, n && i && o && a)
                    if (Date.now() >= u.createTime + 6048e5) return async function(e, t) {
                        try {
                            let r = await async function(e, t) {
                                    let r, n = await tc(e),
                                        i = {
                                            method: "PATCH",
                                            headers: n,
                                            body: JSON.stringify(tu(t.subscriptionOptions))
                                        };
                                    try {
                                        let n = await fetch(`${ts(e.appConfig)}/${t.token}`, i);
                                        r = await n.json()
                                    } catch (e) {
                                        throw ta.create("token-update-failed", {
                                            errorInfo: null == e ? void 0 : e.toString()
                                        })
                                    }
                                    if (r.error) {
                                        let e = r.error.message;
                                        throw ta.create("token-update-failed", {
                                            errorInfo: e
                                        })
                                    }
                                    if (!r.token) throw ta.create("token-update-no-token");
                                    return r.token
                                }(e.firebaseDependencies, t),
                                n = Object.assign(Object.assign({}, t), {
                                    token: r,
                                    createTime: Date.now()
                                });
                            return await to(e.firebaseDependencies, n), r
                        } catch (e) {
                            throw e
                        }
                    }(e, {
                        token: u.token,
                        createTime: Date.now(),
                        subscriptionOptions: c
                    });
                    else return u.token;
                try {
                    await async function(e, t) {
                        let r = await tc(e);
                        try {
                            let n = await fetch(`${ts(e.appConfig)}/${t}`, {
                                    method: "DELETE",
                                    headers: r
                                }),
                                i = await n.json();
                            if (i.error) {
                                let e = i.error.message;
                                throw ta.create("token-unsubscribe-failed", {
                                    errorInfo: e
                                })
                            }
                        } catch (e) {
                            throw ta.create("token-unsubscribe-failed", {
                                errorInfo: null == e ? void 0 : e.toString()
                            })
                        }
                    }(e.firebaseDependencies, u.token)
                } catch (e) {}
                return tf(e.firebaseDependencies, c)
            }(e)
        }
        let tg = "@firebase/messaging",
            tb = "0.12.10";

        function tm(e = function(e = ec) {
            let t = ef.get(e);
            if (!t && e === ec && P()) return em();
            if (!t) throw eg.create("no-app", {
                appName: e
            });
            return t
        }()) {
            return (async function() {
                try {
                    await A()
                } catch (e) {
                    return !1
                }
                return "u" > typeof window && E() && !("u" < typeof navigator) && !!navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            })().then(e => {
                if (!e) throw ta.create("unsupported-browser")
            }, e => {
                throw ta.create("indexed-db-unsupported")
            }), ev(T(e), "messaging").getImmediate()
        }
        async function ty(e, t) {
            return tv(e = T(e), t)
        }

        function tw(e, t) {
            var r = e = T(e);
            if (!navigator) throw ta.create("only-available-in-window");
            return r.onMessageHandler = t, () => {
                r.onMessageHandler = null
            }
        }
        ep(new F("messaging", e => {
            let t = new tp(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), e.getProvider("analytics-internal"));
            return navigator.serviceWorker.addEventListener("message", e => (async function(e, t) {
                let r = t.data;
                if (!r.isFirebaseMessaging) return;
                e.onMessageHandler && r.messageType === h.PUSH_RECEIVED && ("function" == typeof e.onMessageHandler ? e.onMessageHandler(tl(r)) : e.onMessageHandler.next(tl(r)));
                let n = r.data;
                "object" == typeof n && n && e7 in n && "1" === n["google.c.a.e"] && await async function(e, t, r) {
                    let n = function(e) {
                        switch (e) {
                            case h.NOTIFICATION_CLICKED:
                                return "notification_open";
                            case h.PUSH_RECEIVED:
                                return "notification_foreground";
                            default:
                                throw Error()
                        }
                    }(t);
                    (await e.firebaseDependencies.analyticsProvider.get()).logEvent(n, {
                        message_id: r[e7],
                        message_name: r["google.c.a.c_l"],
                        message_time: r["google.c.a.ts"],
                        message_device_time: Math.floor(Date.now() / 1e3)
                    })
                }(e, r.messageType, n)
            })(t, e)), t
        }, "PUBLIC")), ep(new F("messaging-internal", e => {
            let t = e.getProvider("messaging").getImmediate();
            return {
                getToken: e => tv(t, e)
            }
        }, "PRIVATE")), ey(tg, tb), ey(tg, tb, "esm2017");
        var tS = function() {
                return (tS = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            t_ = "https://",
            tk = {
                debug: !1,
                isTest: !1,
                resourceToken: "2pNGpA6sYuW7-c1ffd738bb85f910",
                apiServerHost: "pxl.lovescape.com",
                swPath: "/assets/service-worker.js",
                vapidKey: "BF-Q-QWlBOb3HE8tUevICqRf-lzQ0jO_gLddnd8yQgBSIu9lGA5UxTTfur5A2qo02dm6rUMv3FmFKXmBMusmFBM",
                firebase: {
                    apiKey: "AIzaSyBLB3duck4DtlsD7XNxY00GSE7n7lEL5e0",
                    projectId: "lovescape-a3387",
                    messagingSenderId: "533238977073",
                    appId: "1:533238977073:web:4c320cb03529d507a63b10"
                },
                browsers: {
                    Chrome: {
                        isFirebase: !0
                    },
                    Firefox: {
                        isFirebase: !0
                    },
                    Opera: {
                        isFirebase: !0
                    },
                    "Yandex Browser": {
                        isFirebase: !0
                    },
                    "Samsung Internet for Android": {
                        isFirebase: !0
                    },
                    Safari: {
                        websitePushID: "web.lovescape.com",
                        websitePushAPI: """"
                    }
                },
                expirationSWChrome: "900"
            },
            tI = {
                randomPrefix: "Shahkoop2aeleiv8Ierief_",
                serverPrefix: t_,
                serverSavePath: "/pixel?_push_pix=/push/subscription/save",
                serverDeletePath: "/pixel?_push_pix=/push/subscription/delete",
                serverUpdatePath: "/pixel?_push_pix=/push/subscription/update",
                serverCookiePath: "/pixel?_push_pix=/set_cookie_only",
                serverPushContentPath: "/pixel?_push_pix=/push/content/get",
                serverURL: (t_ + tk.apiServerHost).replace(/\/+$/, ""),
                swPath: "/assets/service-worker.js",
                isTest: !1,
                cookieID: "",
                browser: void 0,
                firebase: {
                    authSubdomain: "firebaseapp.com",
                    bucketSubdomain: "appspot.com",
                    dbSubdomain: "firebaseio.com"
                },
                allFirebase: void 0
            },
            tP = tS(tS(tS({}, tI), tk), {
                firebase: tS(tS({}, tI.firebase), tk.firebase),
                expirationSWChrome: parseInt(tk.expirationSWChrome, 10) || 0
            });
        r(564);
        var tM = r(206),
            tE = r.n(tM),
            tA = r(483);
        (c = p || (p = {})).Granted = "granted", c.Denied = "denied", c.Default = "default", (u = v || (v = {})).subscribe = "subscribe", u.updateSubscription = "update_subscription";
        var tO = Object.prototype.hasOwnProperty,
            tC = (i = tP.debug, function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
            }),
            tN = function() {
                return (tN = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            tx = function(e, t, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            },
            tD = function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        var c = [o, s];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                            switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                                case 0:
                                case 1:
                                    i = c;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = c[1], c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < i[1]) {
                                        a.label = i[1], i = c;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(c);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            c = t.call(e, a)
                        } catch (e) {
                            c = [6, e], n = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & c[0]) throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }
                }
            },
            tT = function() {
                return "safari" in window && "pushNotification" in window.safari
            },
            tF = {};

        function tR() {
            return "serviceWorker" in window.navigator
        }

        function tB() {
            return tx(this, void 0, void 0, function() {
                return tD(this, function(e) {
                    return tR() ? [2, navigator.serviceWorker.getRegistrations().then(function(e) {
                        return e.find(function(e) {
                            var t = e.active,
                                r = e.waiting,
                                n = e.installing,
                                i = t || r || n;
                            return i && i.scriptURL.includes("/service-worker.js?browser")
                        })
                    })] : [2, void 0]
                })
            })
        }

        function tL(e) {
            return e.split(" ").join("")
        }

        function tj(e) {
            if (e.allFirebase) return !0;
            var t = e.browser;
            if (t) {
                var r = e.browsers[t];
                return !!("object" == typeof r && tO.call(r, "isFirebase")) && r.isFirebase
            }
            throw Error("Invalid config")
        }

        function tW(e, t) {
            return tx(this, void 0, void 0, function() {
                return tD(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, tA.setItem(e + "current_token", t)];
                        case 1:
                            return r.sent(), [2]
                    }
                })
            })
        }

        function tz(e) {
            return tx(this, void 0, void 0, function() {
                return tD(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), [4, tA.getItem(e + "current_token")];
                        case 1:
                            return [2, t.sent()];
                        case 2:
                            return t.sent(), [2, null];
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function tU(e) {
            return void 0 === e && (e = tP.randomPrefix), tx(this, void 0, void 0, function() {
                var t, r, n, i, o;
                return tD(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = tq(e), [4, tz(e)];
                        case 1:
                            return r = a.sent(), n = tq(e + "_endpoint_"), [4, tz(e + "_endpoint_")];
                        case 2:
                            return i = a.sent(), [4, tz(e + "_keys_")];
                        case 3:
                            if (o = a.sent(), tC("Founded tokens", {
                                    tokenLS: t,
                                    token: r,
                                    endpointLS: n,
                                    endpoint: i,
                                    keys: o
                                }), t && tH(e), n && tH(e + "_endpoint_"), !o) return [3, 7];
                            a.label = 4;
                        case 4:
                            return a.trys.push([4, 6, , 7]), [4, tA.removeItem(e + "_keys_current_token")];
                        case 5:
                            return a.sent(), tC({
                                result: "success"
                            }), [3, 7];
                        case 6:
                            return tC({
                                result: "error",
                                error: a.sent()
                            }), [3, 7];
                        case 7:
                            if (!r) return [3, 11];
                            a.label = 8;
                        case 8:
                            return a.trys.push([8, 10, , 11]), [4, tA.removeItem(e + "current_token")];
                        case 9:
                            return a.sent(), [2, {
                                result: "success"
                            }];
                        case 10:
                            return [2, {
                                result: "error",
                                error: a.sent()
                            }];
                        case 11:
                            if (!i) return [3, 15];
                            a.label = 12;
                        case 12:
                            return a.trys.push([12, 14, , 15]), [4, tA.removeItem(e + "_endpoint_")];
                        case 13:
                            return a.sent(), [2, {
                                result: "success"
                            }];
                        case 14:
                            return [2, {
                                result: "error",
                                error: a.sent()
                            }];
                        case 15:
                            return [2, {
                                result: "not-found"
                            }]
                    }
                })
            })
        }

        function tq(e) {
            return localStorage.getItem(e + "current_token")
        }

        function tH(e) {
            localStorage.removeItem(e + "current_token")
        }

        function tV(e, t) {
            var r, n, i, o, a;
            return tx(this, void 0, void 0, function() {
                var s, c, u, f;
                return tD(this, function(l) {
                    switch (l.label) {
                        case 0:
                            return [4, "granted" === Notification.permission ? Notification.permission : Notification.requestPermission()];
                        case 1:
                            if (l.sent() !== p.Granted) return [3, 4];
                            return [4, tB().then(function(e) {
                                return e && e.active ? e : void 0
                            })];
                        case 2:
                            if (s = l.sent(), c = null == (r = t.data) ? void 0 : r.ak_actions, u = void 0, c) try {
                                tC("push firebase parse ak_actions start"), u = JSON.parse(c), tC("push firebase parse ak_actions complete")
                            } catch (e) {
                                tC("push firebase parse ak_actions error: ", e)
                            }
                            if (f = {
                                    body: null == (n = t.notification) ? void 0 : n.body,
                                    icon: null == (i = t.notification) ? void 0 : i.icon,
                                    image: null == (o = t.notification) ? void 0 : o.image,
                                    data: {
                                        click_action: null == (a = t.fcmOptions) ? void 0 : a.link
                                    },
                                    actions: u
                                }, !s) return [3, 4];
                            return [4, s.showNotification(e, f)];
                        case 3:
                            l.sent(), l.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }

        function tK(e) {
            return tx(this, void 0, void 0, function() {
                var t, r, n, i, o;
                return tD(this, function(a) {
                    switch (a.label) {
                        case 0:
                            t = e.browser, r = e.expirationSWChrome, n = e.swPath, tC(" getPushServiceWorker", "start"), a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, tB()];
                        case 2:
                            return i = a.sent(), tC(" getPushServiceWorker", "complete"), tC("registration", i), [3, 4];
                        case 3:
                            return tC("err getPushServiceWorker", a.sent()), [3, 4];
                        case 4:
                            var s, c, u, f;
                            return tC("navigator.serviceWorker.register", "start"), [4, navigator.serviceWorker.register((c = (s = {
                                browser: t,
                                expirationSWChrome: r,
                                swPath: n
                            }).browser, u = s.expirationSWChrome, f = s.swPath, "Chrome" === c ? f + "?browser=" + c + "&expiration=" + Math.floor(Date.now() / (1e3 * (0 !== u ? u : 900))) : f + "?browser=" + c))];
                        case 5:
                            return o = a.sent(), tC("navigator.serviceWorker.register", "complete"), tC("serviceWorkerRegistration.update", "start"), [4, o.update()];
                        case 6:
                            return a.sent(), tC("serviceWorkerRegistration.update", "complete"), tC(o), [2, o]
                    }
                })
            })
        }

        function t$(e) {
            return tx(this, void 0, void 0, function() {
                var t, r, n, i, o, a, s, c, u, f, l, d, h, p, v, g, b;
                return tD(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return t = e.action, r = e.provider, n = e.subscription, i = e.match, o = e.update, a = e.customData, s = e.resourceToken, c = e.serverURL, u = e.serverSavePath, f = e.serverDeletePath, l = e.serverUpdatePath, d = e.endpointOld, h = e.keysOld, p = e.supOldSubscr, v = e.inexclusive, [4, tA.getItem("_ak_cookie")];
                        case 1:
                            switch (g = m.sent() || "", t) {
                                case "save":
                                    b = c + u;
                                    break;
                                case "delete":
                                    b = c + f;
                                    break;
                                case "update":
                                    b = c + l;
                                    break;
                                default:
                                    throw Error("Unknown " + t)
                            }
                            return [2, fetch(b, {
                                method: "post",
                                credentials: "include",
                                headers: g ? {
                                    "X-Cookie": g
                                } : void 0,
                                body: JSON.stringify(tN(tN(tN(tN(tN(tN({}, a || {}), {
                                    provider: r,
                                    endpoint: n.endpoint,
                                    keys: n.keys,
                                    resource_token: s,
                                    match: JSON.stringify(i || {}),
                                    update: JSON.stringify(o || {})
                                }), d ? {
                                    endpoint_old: d
                                } : {}), h ? {
                                    keys_old: h
                                } : {}), p && d ? {
                                    sup_old_subscr: !0
                                } : {}), void 0 !== v ? {
                                    inexclusive: v
                                } : {}))
                            }).then(function(e) {
                                return tC("X-Cookie:", null == e ? void 0 : e.headers.has("X-Cookie"), null == e ? void 0 : e.headers.get("X-Cookie")), (null == e ? void 0 : e.headers.has("X-Cookie")) && tA.setItem("_ak_cookie", (null == e ? void 0 : e.headers.get("X-Cookie")) || ""), e
                            }).catch(function(e) {})]
                    }
                })
            })
        }

        function tG(e, t, r) {
            return tx(this, void 0, void 0, function() {
                var n, i, o, a, s, c, u;
                return tD(this, function(f) {
                    switch (f.label) {
                        case 0:
                            return f.trys.push([0, 2, , 3]), n = v.updateSubscription, i = t.provider, o = t.tokenCached, a = t.token, s = t.keys, c = {
                                browser: e.browser || "",
                                provider: i,
                                tokenCached: o,
                                token: a
                            }, u = {
                                endpoint: a || "",
                                keys: s
                            }, tC("fetch subscription", "start"), [4, t$({
                                action: "update",
                                provider: i,
                                subscription: u,
                                match: {},
                                update: {},
                                customData: {},
                                resourceToken: e.resourceToken,
                                serverURL: e.serverURL,
                                serverSavePath: e.serverSavePath,
                                serverDeletePath: e.serverDeletePath,
                                endpointOld: o || void 0,
                                supOldSubscr: !!o || void 0
                            })];
                        case 1:
                            return f.sent(), tC("fetch subscription", "complete"), tC("emit " + n, c), r.emit(n, c), [3, 3];
                        case 2:
                            return f.sent(), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }(f = g || (g = {})).Ok = "ok", f.Fail = "fail";
        var tJ = function() {
                return (tJ = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            tX = function(e, t, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            },
            tQ = function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        var c = [o, s];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                            switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                                case 0:
                                case 1:
                                    i = c;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = c[1], c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < i[1]) {
                                        a.label = i[1], i = c;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(c);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            c = t.call(e, a)
                        } catch (e) {
                            c = [6, e], n = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & c[0]) throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }
                }
            },
            tY = "",
            tZ = function() {
                function e(e) {
                    if (void 0 === e && (e = {}), this.isPendingInitSubscription = !1, this.config = tJ(tJ(tJ({}, tP), {
                            cookieID: tP.cookieID || tY
                        }), e), !this.config.browser) throw Error("Can't detect browser")
                }
                return e.prototype.subscribeSafariNativePush = function(t) {
                    return tX(this, void 0, void 0, function() {
                        var r, n, i, o, a, s, c, u, f, l, d, h;
                        return tQ(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    return r = t.match, n = t.update, i = t.customData, o = v.subscribe, tC("getPushServiceWorker", "start"), [4, tB()];
                                case 1:
                                    a = g.sent(), tC("getPushServiceWorker", "complete"), tC(a), g.label = 2;
                                case 2:
                                    if (g.trys.push([2, 10, , 11]), s = function(e) {
                                            for (var t = "=".repeat((4 - e.length % 4) % 4), r = (e + t).replace(/-/g, "+").replace(/_/g, "/"), n = window.atob(r), i = new Uint8Array(n.length), o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
                                            return i
                                        }(this.config.vapidKey), !a) return tC("getPushServiceWorker has empty, exit subscribeSafariNativePush"), [2];
                                    return tC("serviceWorkerRegistration.pushManager.subscribe", "start"), [4, a.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: s
                                    })];
                                case 3:
                                    return u = null == (c = g.sent()) ? void 0 : c.endpoint, tC("serviceWorkerRegistration.pushManager.subscribe", "complete"), tC("subscription", c), [4, tz(this.config.randomPrefix)];
                                case 4:
                                    if (tC("get cached token", "complete", f = g.sent()), tC("Permission granted, token: ", c.endpoint), !(u && f !== u)) return [3, 8];
                                    return tC("tokenCached !== new token. Start save subscription"), l = c.toJSON().keys, d = tL(this.config.browser || ""), h = {
                                        browser: this.config.browser || "",
                                        provider: d,
                                        token: u,
                                        keys: l
                                    }, tC("fetchSubscription", "start"), [4, t$({
                                        action: "save",
                                        provider: d,
                                        subscription: {
                                            endpoint: u,
                                            keys: l
                                        },
                                        match: r,
                                        update: n,
                                        customData: i,
                                        resourceToken: this.config.resourceToken,
                                        serverURL: this.config.serverURL,
                                        serverSavePath: this.config.serverSavePath,
                                        serverDeletePath: this.config.serverDeletePath,
                                        serverUpdatePath: this.config.serverUpdatePath
                                    })];
                                case 5:
                                    return g.sent(), tC("fetchSubscription", "complete"), e.events && (tC("emit " + o, h), e.events.emit(o, h)), tC("saving token to cache", u, "and keys", l, "start"), [4, tW(this.config.randomPrefix, u || "")];
                                case 6:
                                    return g.sent(), [4, tW(this.config.randomPrefix + "_keys_", JSON.stringify(l) || "")];
                                case 7:
                                    return g.sent(), tC("saving token to cache", u, "and keys", l, "complete"), [3, 9];
                                case 8:
                                    tC("tokenCached !== new token. skip save subscription"), g.label = 9;
                                case 9:
                                    return [3, 11];
                                case 10:
                                    return g.sent(), Notification.permission === p.Denied, [3, 11];
                                case 11:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.subscribePushManager = function(t) {
                    return tX(this, void 0, void 0, function() {
                        var r, n, i, o, a, s, c, u, f;
                        return tQ(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return r = t.match, n = t.update, i = t.customData, o = v.subscribe, tC("getPushServiceWorker", "start"), [4, tB()];
                                case 1:
                                    a = l.sent(), tC("getPushServiceWorker", "complete"), tC(a), l.label = 2;
                                case 2:
                                    if (l.trys.push([2, 9, , 10]), tC("serviceWorkerRegistration.pushManager.subscribe", "start"), !a) return tC("getPushServiceWorker has empty, exit serviceWorkerRegistration.pushManager.subscribe"), [2];
                                    return [4, a.pushManager.subscribe({
                                        userVisibleOnly: !0
                                    })];
                                case 3:
                                    return s = l.sent(), tC("serviceWorkerRegistration.pushManager.subscribe", "complete"), tC("subscription", s), [4, tz(this.config.randomPrefix)];
                                case 4:
                                    if (tC("get cached token", "complete", c = l.sent()), tC("Permission granted, token: ", s.endpoint), c === s.endpoint) return [3, 7];
                                    return tC("tokenCached !== new token. Start save subscription"), u = tL(this.config.browser || ""), f = {
                                        browser: this.config.browser || "",
                                        provider: u,
                                        token: s.endpoint
                                    }, tC("fetchSubscription", "start"), [4, t$({
                                        action: "save",
                                        provider: u,
                                        subscription: s,
                                        match: r,
                                        update: n,
                                        customData: i,
                                        resourceToken: this.config.resourceToken,
                                        serverURL: this.config.serverURL,
                                        serverSavePath: this.config.serverSavePath,
                                        serverDeletePath: this.config.serverDeletePath,
                                        serverUpdatePath: this.config.serverUpdatePath
                                    })];
                                case 5:
                                    return l.sent(), tC("fetchSubscription", "complete"), e.events && (tC("emit " + o, f), e.events.emit(o, f)), tC("saving subscription endpoint from push manager to cache", s.endpoint, "start"), [4, tW(this.config.randomPrefix, s.endpoint)];
                                case 6:
                                    return l.sent(), tC("saving subscription endpoint from push manager to cache", s.endpoint, "complete"), [3, 8];
                                case 7:
                                    tC("tokenCached === new token. skip save subscription"), l.label = 8;
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return l.sent(), Notification.permission === p.Denied, [3, 10];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.initialiseFirebaseNotification = function(t) {
                    return tX(this, void 0, void 0, function() {
                        var r, n, i, o, a, s, c, u, f, l, d, h, g, b;
                        return tQ(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return r = t.match, n = t.update, i = t.customData, o = v.subscribe, a = !1, Notification.permission === p.Default && (a = !0), tC("Notification.requestPermission", "start"), [4, Notification.requestPermission()];
                                case 1:
                                    if (s = m.sent(), tC("Notification.requestPermission", "complete"), tC("notificationPermission", s), s !== p.Granted) return [3, 14];
                                    return tC("getPushServiceWorker", "start"), [4, tB()];
                                case 2:
                                    c = m.sent(), tC("getPushServiceWorker", "complete"), tC(c), u = void 0, m.label = 3;
                                case 3:
                                    return m.trys.push([3, 5, , 6]), tC("register service worker", "start"), [4, tK({
                                        browser: tP.browser,
                                        expirationSWChrome: tP.expirationSWChrome,
                                        swPath: tP.swPath
                                    })];
                                case 4:
                                    return u = m.sent(), tC("register service worker", "complete"), [3, 6];
                                case 5:
                                    return tC("err register service worker", m.sent()), [3, 6];
                                case 6:
                                    return m.trys.push([6, 13, , 14]), tC("firebase.messaging().getToken", "start"), [4, ty(tm(), {
                                        serviceWorkerRegistration: a ? u : void 0
                                    })];
                                case 7:
                                    return f = m.sent(), tC("firebase.messaging().getToken", "complete"), tC("get cached token", "start"), [4, tz(this.config.randomPrefix)];
                                case 8:
                                    if (tC("get cached token", "complete", l = m.sent()), tC("Permission granted, token: ", f), !(l !== f && f)) return [3, 10];
                                    return tC("New token detected:", f), d = {
                                        endpoint: f
                                    }, h = tL(this.config.browser || "") + "Firebase", g = {
                                        browser: this.config.browser || "",
                                        provider: h,
                                        token: d.endpoint
                                    }, [4, t$({
                                        action: "save",
                                        provider: h,
                                        subscription: d,
                                        match: r,
                                        update: n,
                                        customData: i,
                                        resourceToken: this.config.resourceToken,
                                        serverURL: this.config.serverURL,
                                        serverSavePath: this.config.serverSavePath,
                                        serverDeletePath: this.config.serverDeletePath,
                                        serverUpdatePath: this.config.serverUpdatePath
                                    })];
                                case 9:
                                    return m.sent(), e.events && (tC("emit " + o, g), e.events.emit(o, g)), tF[f] || (tC("added firebase.messaging().onMessage handler"), b = tm(), tF[f] = tw(b, function(e) {
                                        var t, r;
                                        tC("Message received in initialize method:", e), tV(null != (r = null == (t = e.notification) ? void 0 : t.title) ? r : "", e)
                                    })), [3, 11];
                                case 10:
                                    tC("tokenCached == new token. skip subscription"), m.label = 11;
                                case 11:
                                    return tC("saving firebase token to cache", f, "start"), [4, tW(this.config.randomPrefix, f || "")];
                                case 12:
                                    return m.sent(), tC("saving firebase token to cache", f, "complete"), [3, 14];
                                case 13:
                                    return m.sent(), [3, 14];
                                case 14:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.initialiseDefaultNotification = function(e) {
                    return tX(this, void 0, void 0, function() {
                        var t, r, n, i;
                        return tQ(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (t = e.customData, r = e.match, n = e.update, "Opera" === this.config.browser || "Yandex Browser" === this.config.browser || "Samsung Internet for Android" === this.config.browser) return [2, void 0];
                                    return tC("Initialise subscription for: " + this.config.browser + " without Firebase"), [4, tK({
                                        browser: tP.browser,
                                        expirationSWChrome: tP.expirationSWChrome,
                                        swPath: tP.swPath
                                    })];
                                case 1:
                                    return o.sent(), [4, function() {
                                        return tx(this, void 0, void 0, function() {
                                            var e, t, r;
                                            return tD(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        if (!("showNotification" in ServiceWorkerRegistration.prototype)) return [2, !1];
                                                        if (Notification.permission === p.Denied) return [3, 10];
                                                        if (!("PushManager" in window)) return [3, 8];
                                                        return tC("getPushServiceWorker", "start"), [4, tB()];
                                                    case 1:
                                                        e = n.sent(), tC("getPushServiceWorker", "complete"), tC("serviceWorkerRegistration", e), n.label = 2;
                                                    case 2:
                                                        if (n.trys.push([2, 6, , 7]), tC("serviceWorkerRegistration.pushManager.getSubscription", "start"), !e) return [3, 4];
                                                        return [4, e.pushManager.getSubscription()];
                                                    case 3:
                                                        return r = n.sent(), [3, 5];
                                                    case 4:
                                                        r = void 0, n.label = 5;
                                                    case 5:
                                                        return t = r, tC("serviceWorkerRegistration.pushManager.getSubscription", "complete"), tC("subscription", t), [2, !0];
                                                    case 6:
                                                        return n.sent(), [2, !1];
                                                    case 7:
                                                        return [3, 9];
                                                    case 8:
                                                    case 10:
                                                        return [2, !1];
                                                    case 9:
                                                        return [3, 11];
                                                    case 11:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }()];
                                case 2:
                                    if (i = o.sent(), tC("checkSupportPushNotifications", "complete"), tC(i), !i) return [3, 4];
                                    return tC("subscribePushManager", "start"), [4, this.subscribePushManager({
                                        match: r,
                                        update: n,
                                        customData: t
                                    })];
                                case 3:
                                    o.sent(), tC("subscribePushManager", "complete"), o.label = 4;
                                case 4:
                                    return [2, void 0]
                            }
                        })
                    })
                }, e.prototype.initialiseSafariNotification = function(e) {
                    return tX(this, void 0, void 0, function() {
                        var t, r, n, i;
                        return tQ(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = e.match, r = e.customData, n = e.update, tC("Initialise subscription for: " + this.config.browser + " with Safari"), tC("initialiseSafariNotification", "Permission data:", i = tT() ? window.safari.pushNotification.permission(this.config.browsers.Safari.websitePushID) : {
                                        permission: Notification.permission
                                    }), [4, this.activateSafariPush({
                                        permissionData: i,
                                        match: t,
                                        update: n,
                                        cookieId: this.config.cookieID,
                                        customData: r
                                    })];
                                case 1:
                                    return o.sent(), [2]
                            }
                        })
                    })
                }, e.prototype.activateSafariPush = function(t) {
                    return tX(this, void 0, void 0, function() {
                        var r, n, i, o, a, s, c, u, f, l, d = this;
                        return tQ(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (r = t.permissionData, n = t.match, i = t.update, o = t.cookieId, a = t.customData, s = v.subscribe, !tT()) return [3, 7];
                                    return tC("Request permission on Safari"), [4, new Promise(function(e) {
                                        window.safari.pushNotification.requestPermission(d.config.browsers.Safari.websitePushAPI, d.config.browsers.Safari.websitePushID, tJ(tJ({}, a || {}), {
                                            resource_token: d.config.resourceToken,
                                            cookie_id: o,
                                            match: JSON.stringify(n || {}),
                                            update: JSON.stringify(i || {}),
                                            is_test: JSON.stringify(d.config.isTest)
                                        }), function(t) {
                                            tC("New permissionData: ", t), e(t)
                                        })
                                    })];
                                case 1:
                                    if (h.sent().permission !== p.Granted) return [3, 5];
                                    return c = window.safari.pushNotification.permission(this.config.browsers.Safari.websitePushID).deviceToken, [4, tz(this.config.randomPrefix)];
                                case 2:
                                    if (u = h.sent(), tC("deviceToken from pushNotification.permission", c), tC("safari tokenCached:", u), tC("Approved subscription"), f = {
                                            browser: this.config.browser || "",
                                            provider: "Safari",
                                            token: r.deviceToken || c || null
                                        }, !c) return [3, 4];
                                    return [4, tW(this.config.randomPrefix, c)];
                                case 3:
                                    h.sent(), tC("added token to cache:", c), h.label = 4;
                                case 4:
                                    return e.events && (tC("emit " + s, f), e.events.emit(s, f)), [3, 6];
                                case 5:
                                    tC("Permission === denied"), h.label = 6;
                                case 6:
                                    return [3, 14];
                                case 7:
                                    return tC("Request permission on IOS"), [4, Notification.requestPermission()];
                                case 8:
                                    if (tC("finished request permission on IOS, permission: ", l = h.sent()), l !== p.Granted) return [3, 13];
                                    return tC("Initialise subscription for: " + this.config.browser + " by default notification"), [4, tB()];
                                case 9:
                                    if (h.sent()) return [3, 11];
                                    return tC("getPushServiceWorker = null, registerServiceWorker start"), [4, tK({
                                        browser: tP.browser,
                                        expirationSWChrome: tP.expirationSWChrome,
                                        swPath: tP.swPath
                                    })];
                                case 10:
                                    h.sent(), tC("registerServiceWorker complete"), h.label = 11;
                                case 11:
                                    return tC("subscribeSafariNativePush", "start"), [4, this.subscribeSafariNativePush({
                                        match: n,
                                        update: i,
                                        customData: a
                                    })];
                                case 12:
                                    return h.sent(), tC("subscribeSafariNativePush", "complete"), [3, 14];
                                case 13:
                                    tC("Permission === denied"), h.label = 14;
                                case 14:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.initialize = function(e) {
                    return tX(this, void 0, void 0, function() {
                        var t, r, n, i, o;
                        return tQ(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (t = e.match, r = e.update, n = e.customData, tC("initialize akPush", "start"), i = tR(), o = tj(this.config), Notification.permission === p.Default && i && o) {
                                        tC("should use firebase"), tC('Initialise subscription for: "' + this.config.browser + '" with Firebase');
                                        try {
                                            tC("firebase.initializeApp", "start"), em({
                                                appId: this.config.firebase.appId,
                                                apiKey: this.config.firebase.apiKey,
                                                projectId: this.config.firebase.projectId,
                                                messagingSenderId: this.config.firebase.messagingSenderId,
                                                storageBucket: [this.config.firebase.projectId, this.config.firebase.bucketSubdomain].join("."),
                                                authDomain: [this.config.firebase.projectId, this.config.firebase.authSubdomain].join("."),
                                                databaseURL: [this.config.firebase.projectId, this.config.firebase.dbSubdomain].join(".")
                                            }), tC("firebase.initializeApp", "complete")
                                        } catch (e) {
                                            tC("err firebase.initializeApp", e)
                                        }
                                    }
                                    if (Notification.permission === p.Denied) return [3, 15];
                                    switch (this.config.browser) {
                                        case "Chrome":
                                        case "Firefox":
                                        case "Yandex Browser":
                                        case "Samsung Internet for Android":
                                        case "Opera":
                                            return [3, 1];
                                        case "Safari":
                                            return [3, 11]
                                    }
                                    return [3, 13];
                                case 1:
                                    if (!i) return [3, 9];
                                    if (tC("can use service worker"), !o) return [3, 6];
                                    a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, , 5]), tC("activateFirebasePush", "start"), [4, this.initialiseFirebaseNotification({
                                        match: t,
                                        update: r,
                                        customData: n
                                    })];
                                case 3:
                                    return a.sent(), tC("activateFirebasePush", "complete"), tC("initialize akPush", "complete"), [3, 5];
                                case 4:
                                    return tC("err with register, update or active firebase push", a.sent()), [3, 5];
                                case 5:
                                    return [3, 8];
                                case 6:
                                    return tC("should not use firebase"), [4, this.initialiseDefaultNotification({
                                        match: t,
                                        update: r,
                                        customData: n
                                    })];
                                case 7:
                                    a.sent(), tC("initialize akPush", "complete"), a.label = 8;
                                case 8:
                                    return [3, 10];
                                case 9:
                                    a.label = 10;
                                case 10:
                                    return [3, 14];
                                case 11:
                                    return [4, this.initialiseSafariNotification({
                                        match: t,
                                        update: r,
                                        customData: n
                                    })];
                                case 12:
                                    return a.sent(), tC("initialize akPush", "complete"), [3, 14];
                                case 13:
                                    return [2, void 0];
                                case 14:
                                    return [3, 16];
                                case 15:
                                    tC("initialize akPush", "Notification permission is ", Notification.permission), a.label = 16;
                                case 16:
                                    return [2, void 0]
                            }
                        })
                    })
                }, e.prototype.update = function(t) {
                    return tX(this, void 0, void 0, function() {
                        var r, n, i, o, a, s, c, u, f, l, d, h;
                        return tQ(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return r = t.match, n = t.update, i = t.customData, o = t.inexclusive, tC("get cached token", "start"), [4, tz(this.config.randomPrefix)];
                                case 1:
                                    switch (tC("get cached token", "complete", a = p.sent()), s = null, c = null, this.config.browser) {
                                        case "Chrome":
                                        case "Firefox":
                                        case "Yandex Browser":
                                        case "Samsung Internet for Android":
                                        case "Opera":
                                            return [3, 2];
                                        case "Safari":
                                            return [3, 9]
                                    }
                                    return [3, 17];
                                case 2:
                                    if (!tj(this.config)) return [3, 3];
                                    if (tC("should use firebase"), s = tL(this.config.browser || "") + "Firebase", !a) return tC("not found firebase tokenCached"), [2, {
                                        status: g.Fail
                                    }];
                                    return tC("found firebase tokenCached"), c = {
                                        endpoint: a || ""
                                    }, [3, 8];
                                case 3:
                                    return s = tL(this.config.browser || ""), tC("should not use firebase"), tC("getPushServiceWorker", "start"), [4, tB()];
                                case 4:
                                    u = p.sent(), tC("getPushServiceWorker", "complete"), tC(u), p.label = 5;
                                case 5:
                                    if (p.trys.push([5, 7, , 8]), tC("serviceWorkerRegistration.pushManager.subscribe", "start"), !u) return tC("getPushServiceWorker has empty, exit update func"), [2, {
                                        status: g.Fail
                                    }];
                                    return [4, u.pushManager.subscribe({
                                        userVisibleOnly: !0
                                    })];
                                case 6:
                                    return c = p.sent(), tC("serviceWorkerRegistration.pushManager.subscribe", "complete"), [3, 8];
                                case 7:
                                    return tC(p.sent()), [2, {
                                        status: g.Fail
                                    }];
                                case 8:
                                    return [3, 18];
                                case 9:
                                    tC("should use safari"), s = "Safari", p.label = 10;
                                case 10:
                                    if (p.trys.push([10, 15, , 16]), f = void 0, !tT()) return [3, 11];
                                    if (!(f = window.safari.pushNotification.permission(this.config.browsers.Safari.websitePushID)).deviceToken) return [2, {
                                        status: g.Fail
                                    }];
                                    return c = {
                                        endpoint: f.deviceToken || ""
                                    }, [3, 14];
                                case 11:
                                    return f = {
                                        permission: Notification.permission
                                    }, tC("getPushServiceWorker", "start"), [4, tB()];
                                case 12:
                                    if (u = p.sent(), tC("getPushServiceWorker", "complete"), tC(u), !u) return tC("getPushServiceWorker has empty, exit update func"), [2, {
                                        status: g.Fail
                                    }];
                                    return [4, u.pushManager.getSubscription().then(function(e) {
                                        return e ? {
                                            endpoint: e.endpoint,
                                            keys: e.toJSON().keys
                                        } : e
                                    })];
                                case 13:
                                    if (!(c = p.sent())) return [2, {
                                        status: g.Fail
                                    }];
                                    tC("pushManager.getSubscription", f), p.label = 14;
                                case 14:
                                    return [3, 16];
                                case 15:
                                    return tC(p.sent()), [2, {
                                        status: g.Fail
                                    }];
                                case 16:
                                    return [3, 18];
                                case 17:
                                    return [2, {
                                        status: g.Fail
                                    }];
                                case 18:
                                    if (!(s && (null == c ? void 0 : c.endpoint))) return [3, 23];
                                    tC("fetch update subscription", "start"), p.label = 19;
                                case 19:
                                    return p.trys.push([19, 21, , 22]), [4, t$({
                                        action: "update",
                                        provider: s,
                                        subscription: c,
                                        match: r,
                                        update: n,
                                        customData: i,
                                        inexclusive: o,
                                        resourceToken: this.config.resourceToken,
                                        serverURL: this.config.serverURL,
                                        serverSavePath: this.config.serverSavePath,
                                        serverDeletePath: this.config.serverDeletePath,
                                        serverUpdatePath: this.config.serverUpdatePath
                                    })];
                                case 20:
                                    if (l = p.sent(), tC("fetch update subscription", "complete"), l && e.events) return tC("emit " + (d = v.updateSubscription), h = {
                                        browser: this.config.browser || "",
                                        provider: s,
                                        tokenCached: a,
                                        token: a
                                    }), e.events.emit(d, h), [2, {
                                        status: g.Ok
                                    }];
                                    return [3, 22];
                                case 21:
                                    return p.sent(), [2, {
                                        status: g.Fail
                                    }];
                                case 22:
                                    return [3, 24];
                                case 23:
                                    return tC("provider or subscription not available", s && c), [2, {
                                        status: g.Fail
                                    }];
                                case 24:
                                    return [2, {
                                        status: g.Fail
                                    }]
                            }
                        })
                    })
                }, e.prototype.updateSubscription = function(e, t, r, n) {
                    return tX(this, void 0, void 0, function() {
                        var i = this;
                        return tQ(this, function(o) {
                            return "complete" === document.readyState || "interactive" === document.readyState ? [2, this.update({
                                match: e || {},
                                update: t || {},
                                customData: r || {},
                                inexclusive: n
                            })] : [2, new Promise(function(o) {
                                window.addEventListener("load", function() {
                                    return tX(i, void 0, void 0, function() {
                                        return tQ(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, this.update({
                                                        match: e || {},
                                                        update: t || {},
                                                        customData: r || {},
                                                        inexclusive: n
                                                    })];
                                                case 1:
                                                    return o(i.sent()), [2]
                                            }
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }, e.prototype.initSubscription = function(e, t, r) {
                    return tX(this, void 0, void 0, function() {
                        var n = this;
                        return tQ(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (this.isPendingInitSubscription) return tC("wait when user give an answer on confirm"), [2];
                                    if (this.isPendingInitSubscription = !0, "complete" !== document.readyState && "interactive" !== document.readyState) return [3, 2];
                                    return [4, this.initialize({
                                        match: e || {},
                                        update: t || {},
                                        customData: r || {}
                                    }).finally(function() {
                                        n.isPendingInitSubscription = !1
                                    })];
                                case 1:
                                    return i.sent(), [3, 3];
                                case 2:
                                    window.addEventListener("load", function() {
                                        return tX(n, void 0, void 0, function() {
                                            var n = this;
                                            return tQ(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, this.initialize({
                                                            match: e || {},
                                                            update: t || {},
                                                            customData: r || {}
                                                        }).finally(function() {
                                                            n.isPendingInitSubscription = !1
                                                        })];
                                                    case 1:
                                                        return i.sent(), [2]
                                                }
                                            })
                                        })
                                    }), i.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.removeToken = tU, e
            }(),
            t0 = function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        var c = [o, s];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                            switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                                case 0:
                                case 1:
                                    i = c;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = c[1], c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < i[1]) {
                                        a.label = i[1], i = c;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(c);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            c = t.call(e, a)
                        } catch (e) {
                            c = [6, e], n = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & c[0]) throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }
                }
            },
            t1 = new b.EventEmitter;
        tZ.events = t1, window.AKPush || (window.AKPush = tZ),
            function() {
                var e, t, r, n;
                e = this, t = void 0, r = void 0, n = function() {
                    return t0(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return tP.browser = function(e) {
                                    if (!e.browser && "userAgent" in window.navigator) return tE().getParser(window.navigator.userAgent).getBrowser().name
                                }(tP), tC("set browser", tP.browser), "Safari" === tP.browser && (function(e) {
                                    return tx(this, void 0, void 0, function() {
                                        var t, r, n, i, o, a, s, c;
                                        return tD(this, function(u) {
                                            switch (u.label) {
                                                case 0:
                                                    t = e.serverURL, r = e.serverCookiePath, n = e.resourceToken, u.label = 1;
                                                case 1:
                                                    return u.trys.push([1, 9, , 10]), [4, tA.getItem("_ak_cookie")];
                                                case 2:
                                                    return i = u.sent() || "", [4, fetch(t + r, {
                                                        method: "post",
                                                        credentials: "include",
                                                        headers: i ? {
                                                            "X-Cookie": i
                                                        } : void 0,
                                                        body: JSON.stringify({
                                                            resource_token: n
                                                        })
                                                    }).then(function(e) {
                                                        return {
                                                            body: e.json(),
                                                            headers: e.headers
                                                        }
                                                    })];
                                                case 3:
                                                    return o = u.sent(), a = {
                                                        cookie_id: "",
                                                        "X-Cookie": ""
                                                    }, s = "cookie_id", [4, o.body];
                                                case 4:
                                                    if (!(s in u.sent())) return [3, 6];
                                                    return c = a, [4, o.body];
                                                case 5:
                                                    c.cookie_id = u.sent().cookie_id, u.label = 6;
                                                case 6:
                                                    if (tC("X-Cookie:", null == o ? void 0 : o.headers.has("X-Cookie"), null == o ? void 0 : o.headers.get("X-Cookie")), !o.headers.has("X-Cookie") || (a["X-Cookie"] = o.headers.get("X-Cookie") || "", !a["X-Cookie"])) return [3, 8];
                                                    return [4, tA.setItem("_ak_cookie", a["X-Cookie"])];
                                                case 7:
                                                    u.sent(), u.label = 8;
                                                case 8:
                                                    if (a["X-Cookie"] || a.cookie_id) return [2, a];
                                                    return [3, 10];
                                                case 9:
                                                    return u.sent(), [3, 10];
                                                case 10:
                                                    return [2, void 0]
                                            }
                                        })
                                    })
                                })({
                                    serverCookiePath: tP.serverCookiePath,
                                    resourceToken: tP.resourceToken,
                                    serverURL: tP.serverURL
                                }).then(function(e) {
                                    if (e) {
                                        var t, r, n, i = (t = e["X-Cookie"], r = RegExp("ak=(\\w*);?", "g"), ((n = Array.from(t.matchAll(r))).length ? n[0][1] : "") || e.cookie_id);
                                        tC("setCookieID", i), tY = i
                                    }
                                }), tC("migrateToken start"), [4, function(e) {
                                    return tx(this, void 0, void 0, function() {
                                        var t, r;
                                        return tD(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    if (t = tq(e), r = tq(e + "_endpoint_"), !t) return [3, 2];
                                                    return [4, tW(e, t || "")];
                                                case 1:
                                                    return n.sent(), tH(e), [2, t];
                                                case 2:
                                                    if (!r) return [3, 4];
                                                    return [4, tW(e + "_endpoint_", r || "")];
                                                case 3:
                                                    return n.sent(), tH(e + "_endpoint_"), [2, t];
                                                case 4:
                                                    return [2, null]
                                            }
                                        })
                                    })
                                }(tP.randomPrefix)];
                            case 1:
                                return tC("migrateToken complete", e.sent()), tC("replaceServiceWorker start"), [4, function(e) {
                                    return tx(this, void 0, void 0, function() {
                                        var t, r, n;
                                        return tD(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (t = e.browser, r = e.expirationSWChrome, n = e.swPath, tC("replace service worker", {
                                                            browser: t,
                                                            expirationSWChrome: r,
                                                            swPath: n
                                                        }), Notification.permission !== p.Granted) return [3, 7];
                                                    return tC("Notification permission is granted."), [4, tB()];
                                                case 1:
                                                    if (!i.sent()) return [3, 2];
                                                    return tC("service worker is our. Aborting replace service worker."), [3, 6];
                                                case 2:
                                                    tC("navigator.serviceWorker.controller, was cleaned"), i.label = 3;
                                                case 3:
                                                    return i.trys.push([3, 5, , 6]), tC("registerServiceWorker start"), [4, tK({
                                                        browser: t,
                                                        expirationSWChrome: r,
                                                        swPath: n
                                                    })];
                                                case 4:
                                                    return i.sent(), tC(" registerServiceWorker complete"), [3, 6];
                                                case 5:
                                                    return tC("err register service worker", i.sent()), [3, 6];
                                                case 6:
                                                    return [3, 8];
                                                case 7:
                                                    tC("Notification permission is not a granted. Aborting replace service worker."), i.label = 8;
                                                case 8:
                                                    return [2]
                                            }
                                        })
                                    })
                                }({
                                    browser: tP.browser,
                                    swPath: tP.swPath,
                                    expirationSWChrome: tP.expirationSWChrome
                                })];
                            case 2:
                                return e.sent(), tC("replaceServiceWorker complete"), tC("initializeServices", "start"), [4, function(e, t) {
                                    return tx(this, void 0, void 0, function() {
                                        var r, n, i, o;
                                        return tD(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    if (Notification.permission !== p.Granted) return [3, 24];
                                                    switch (e.browser) {
                                                        case "Chrome":
                                                        case "Firefox":
                                                        case "Yandex Browser":
                                                        case "Samsung Internet for Android":
                                                        case "Opera":
                                                            return [3, 1];
                                                        case "Safari":
                                                            return [3, 17]
                                                    }
                                                    return [3, 23];
                                                case 1:
                                                    if (!tR()) return [3, 15];
                                                    if (tC("can use service worker"), !tj(e)) return [3, 12];
                                                    r = void 0, tC("> getPushServiceWorker", "start"), a.label = 2;
                                                case 2:
                                                    return a.trys.push([2, 4, , 5]), [4, tB()];
                                                case 3:
                                                    return r = a.sent(), tC("< getPushServiceWorker", "complete"), tC(">> registration", r), [3, 5];
                                                case 4:
                                                    return tC("err get registration", a.sent()), [3, 5];
                                                case 5:
                                                    if (tC("should use firebase"), tC("firebase.initializeApp", "start"), em({
                                                            appId: e.firebase.appId,
                                                            apiKey: e.firebase.apiKey,
                                                            projectId: e.firebase.projectId,
                                                            messagingSenderId: e.firebase.messagingSenderId,
                                                            storageBucket: [e.firebase.projectId, e.firebase.bucketSubdomain].join("."),
                                                            authDomain: [e.firebase.projectId, e.firebase.authSubdomain].join("."),
                                                            databaseURL: [e.firebase.projectId, e.firebase.dbSubdomain].join(".")
                                                        }), tC("firebase.initializeApp", "complete"), n = tm(), !r) return [3, 7];
                                                    return tC("updateFirebaseToken", "start"), [4, function(e, t) {
                                                        return tx(this, void 0, void 0, function() {
                                                            var r, n, i, o;
                                                            return tD(this, function(a) {
                                                                switch (a.label) {
                                                                    case 0:
                                                                        tC("firebase.messaging().getToken", "start"), tC("> getPushServiceWorker", "start"), a.label = 1;
                                                                    case 1:
                                                                        return a.trys.push([1, 3, , 4]), [4, tB()];
                                                                    case 2:
                                                                        return r = a.sent(), tC("< getPushServiceWorker", "complete"), tC(">> serviceWorkerRegistration", r), [3, 4];
                                                                    case 3:
                                                                        return tC("err get registration", a.sent()), [3, 4];
                                                                    case 4:
                                                                        return a.trys.push([4, 6, , 7]), [4, ty(tm(), {
                                                                            serviceWorkerRegistration: r
                                                                        })];
                                                                    case 5:
                                                                        return n = a.sent(), [3, 7];
                                                                    case 6:
                                                                        return a.sent(), [3, 7];
                                                                    case 7:
                                                                        return tC("firebase.messaging().getToken", "complete", n), tC("get cached token", "start"), [4, tz(e.randomPrefix)];
                                                                    case 8:
                                                                        if (tC("get cached token", "complete", i = a.sent()), !(n && i !== n)) return [3, 14];
                                                                        tC("New token detected: ", n), a.label = 9;
                                                                    case 9:
                                                                        if (a.trys.push([9, 13, , 14]), !i) return [3, 11];
                                                                        return o = {
                                                                            provider: tL(e.browser || "") + "Firebase",
                                                                            tokenCached: i,
                                                                            token: n
                                                                        }, [4, tG(e, o, t)];
                                                                    case 10:
                                                                        a.sent(), a.label = 11;
                                                                    case 11:
                                                                        return tC("saving firebase token to cache", n, "start"), [4, tW(e.randomPrefix, n || "")];
                                                                    case 12:
                                                                        return a.sent(), tC("saving firebase token to cache", n, "complete"), [3, 14];
                                                                    case 13:
                                                                        return a.sent(), [3, 14];
                                                                    case 14:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, t)];
                                                case 6:
                                                    a.sent(), tC("updateFirebaseToken", "complete"), a.label = 7;
                                                case 7:
                                                    tC("firebase.messaging().getToken", "start"), i = void 0, a.label = 8;
                                                case 8:
                                                    return a.trys.push([8, 10, , 11]), [4, ty(n, {
                                                        serviceWorkerRegistration: r
                                                    })];
                                                case 9:
                                                    return i = a.sent(), [3, 11];
                                                case 10:
                                                    return a.sent(), [3, 11];
                                                case 11:
                                                    return tC("firebase.messaging().getToken", "complete"), i && !tF[i] && (tC("added firebase.messaging().onMessage handler"), tF[i] = tw(n, function(e) {
                                                        var t, r;
                                                        tC("Message received:", e), tV(null != (r = null == (t = e.notification) ? void 0 : t.title) ? r : "", e)
                                                    })), [3, 14];
                                                case 12:
                                                    return tC("should not use firebase"), tC("updateDefaultSubscription", "start"), [4, function(e, t) {
                                                        return tx(this, void 0, void 0, function() {
                                                            var r, n, i, o;
                                                            return tD(this, function(a) {
                                                                switch (a.label) {
                                                                    case 0:
                                                                        return tC("getPushServiceWorker", "start"), [4, tB()];
                                                                    case 1:
                                                                        if (!(r = a.sent())) return tC("getPushServiceWorker has empty, exit updateDefaultSubscription."), [2];
                                                                        return tC("getPushServiceWorker", "complete"), tC("serviceWorkerRegistration.pushManager.subscribe", "start"), [4, r.pushManager.getSubscription()];
                                                                    case 2:
                                                                        return n = a.sent(), tC("serviceWorkerRegistration.pushManager.subscribe", "complete"), tC("get cached endpoint", "start"), [4, tz(e.randomPrefix + "_endpoint_")];
                                                                    case 3:
                                                                        if (tC("get cached endpoint", "complete", i = a.sent()), !(n && i !== n.endpoint)) return [3, 9];
                                                                        a.label = 4;
                                                                    case 4:
                                                                        if (a.trys.push([4, 8, , 9]), !i) return [3, 6];
                                                                        return o = {
                                                                            provider: tL(e.browser || ""),
                                                                            tokenCached: i,
                                                                            token: n.endpoint
                                                                        }, [4, tG(e, o, t)];
                                                                    case 5:
                                                                        a.sent(), a.label = 6;
                                                                    case 6:
                                                                        return tC("saving subscription endpoint from push manager to cache", n.endpoint, "start"), [4, tW(e.randomPrefix + "_endpoint_", n.endpoint)];
                                                                    case 7:
                                                                        return a.sent(), tC("saving subscription endpoint from push manager to cache", n.endpoint, "complete"), [3, 9];
                                                                    case 8:
                                                                        return a.sent(), [3, 9];
                                                                    case 9:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, t)];
                                                case 13:
                                                    a.sent(), tC("updateDefaultSubscription", "complete"), a.label = 14;
                                                case 14:
                                                    return [3, 16];
                                                case 15:
                                                    tC("can`t use service worker"), a.label = 16;
                                                case 16:
                                                    return [3, 24];
                                                case 17:
                                                    if (!tT()) return [3, 20];
                                                    if (!(o = window.safari.pushNotification.permission(e.browsers.Safari.websitePushID).deviceToken)) return [3, 19];
                                                    return [4, tW(e.randomPrefix, o)];
                                                case 18:
                                                    a.sent(), tC("added token to cache:", o), a.label = 19;
                                                case 19:
                                                    return [3, 22];
                                                case 20:
                                                    return [4, function(e, t) {
                                                        return tx(this, void 0, void 0, function() {
                                                            var r, n, i, o, a, s, c, u, f;
                                                            return tD(this, function(l) {
                                                                switch (l.label) {
                                                                    case 0:
                                                                        return [4, tB()];
                                                                    case 1:
                                                                        r = l.sent(), l.label = 2;
                                                                    case 2:
                                                                        if (l.trys.push([2, 11, , 12]), !r) return tC("getPushServiceWorker has empty, exit updateSafariPWAToken"), [2];
                                                                        return tC("serviceWorkerRegistration.pushManager.getSubscription", "start"), [4, r.pushManager.getSubscription()];
                                                                    case 3:
                                                                        return i = null == (n = l.sent()) ? void 0 : n.endpoint, tC("serviceWorkerRegistration.pushManager.getSubscription", "complete"), tC("subscription", n), s = (a = JSON).parse, [4, tz(e.randomPrefix + "_keys_")];
                                                                    case 4:
                                                                        return o = s.apply(a, [l.sent() || "null"]), [4, tz(e.randomPrefix)];
                                                                    case 5:
                                                                        if (tC("get cached token", "complete", c = l.sent(), "and keys", o), !(i && c !== i)) return [3, 10];
                                                                        if (tC("New token detected:", i), u = null == n ? void 0 : n.toJSON().keys, !c) return [3, 7];
                                                                        return f = {
                                                                            provider: tL(e.browser || ""),
                                                                            tokenCached: c,
                                                                            token: i,
                                                                            keys: u
                                                                        }, [4, tG(e, f, t)];
                                                                    case 6:
                                                                        l.sent(), l.label = 7;
                                                                    case 7:
                                                                        return tC("saving token to cache", i, "and keys", u, "start"), [4, tW(e.randomPrefix, i || "")];
                                                                    case 8:
                                                                        return l.sent(), [4, tW(e.randomPrefix + "_keys_", JSON.stringify(u) || "")];
                                                                    case 9:
                                                                        l.sent(), tC("saving token to cache", i, "and keys", u, "complete"), l.label = 10;
                                                                    case 10:
                                                                        return [3, 12];
                                                                    case 11:
                                                                        return l.sent(), [3, 12];
                                                                    case 12:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, t)];
                                                case 21:
                                                    a.sent(), a.label = 22;
                                                case 22:
                                                    return [3, 24];
                                                case 23:
                                                case 24:
                                                    return [2, void 0]
                                            }
                                        })
                                    })
                                }(tP, t1)];
                            case 3:
                                return e.sent(), tC("initializeServices", "complete"), [2]
                        }
                    })
                }, new(r || (r = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }()
    }();