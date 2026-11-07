(globalThis.webpackChunk || = []).push([
    [2619], {
        52619(e, a, r) {
            r.r(a);
            var s = r(49445),
                t = r(7672),
                c = r(30682);
            let i = e => {
                let a = c._O(e);
                a && (s.A.set("trafficSource", a, {
                    expires: 90,
                    sameSite: "strict"
                }), t.A.set("trafficSourceSet", 1), c.j0 ? .addUserProps({
                    trafficSource: a
                }))
            };
            r.d(a, ["analyticsAddStripCashParams", 0, e => {
                let a = Object.keys(e).reduce((a, r) => ("sourceId" === r || "utm_source" === r ? a.utm_source = e.utm_source || e[r] : "campaignId" === r || "utm_campaign" === r ? a.utm_campaign = e.utm_campaign || e[r] : "userId" === r ? a.stripcashUserId = e[r] : /^(p[123]|xprf|xoc|xvr|xch|keywords|pageType|contentSource|var_\d)$/.test(r) ? "string" == typeof e[r] ? a[`url_param_${r}`] = e[r].split(",") : a[`url_param_${r}`] = e[r] : "affiliateId" === r ? a.affiliateId = e[r] : "showModal" === r && ["spicy", "verify", "verified", "nonClosablePremium", "nonClosablePro", "creativepro", "premium"].includes(e[r]) && (a.showModal = e[r]), a), {});
                c.j0 ? .addUserProps(a)
            }, "analyticsDefineTrafficSource", 0, i, "analyticsSetupTrafficSource", 0, e => {
                t.A.has("trafficSourceSet") || i(e)
            }])
        }
    }
]);