parcelRequire = (function (e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;
    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[n][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[n] = new u.Module(n));
            e[n][0].call(l.exports, p, l, l.exports, this);
        }
        return r[n].exports;
        function p(e) {
            return u(p.resolve(e));
        }
    }
    (u.isParcelRequire = !0),
        (u.Module = function (e) {
            (this.id = e), (this.bundle = u), (this.exports = {});
        }),
        (u.modules = e),
        (u.cache = r),
        (u.parent = i),
        (u.register = function (r, n) {
            e[r] = [
                function (e, r) {
                    r.exports = n;
                },
                {},
            ];
        });
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = c)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return c;
              })
            : t && (this[t] = c);
    }
    return u;
})(
    {
        WIPQ: [
            function (require, module, exports) {
                var define;
                var e;
                !(function (o, t) {
                    if ("function" == typeof e && e.amd) e(["exports"], t);
                    else if ("undefined" != typeof exports) t(exports);
                    else {
                        var n = {};
                        t(n), (o.bodyScrollLock = n);
                    }
                })(this, function (e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = !1;
                    if ("undefined" != typeof window) {
                        var t = {
                            get passive() {
                                o = !0;
                            },
                        };
                        window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t);
                    }
                    var n = "undefined" != typeof window && window.navigator && window.navigator.platform && /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform),
                        i = null,
                        r = [],
                        l = !1,
                        d = -1,
                        u = void 0,
                        c = void 0,
                        a = function (e) {
                            var o = e || window.event;
                            return 1 < o.touches.length || (o.preventDefault && o.preventDefault(), !1);
                        },
                        s = function () {
                            setTimeout(function () {
                                void 0 !== c && ((document.body.style.paddingRight = c), (c = void 0)), void 0 !== u && ((document.body.style.overflow = u), (u = void 0));
                            });
                        };
                    (e.disableBodyScroll = function (e, t) {
                        var s;
                        n
                            ? e &&
                              !r.includes(e) &&
                              ((r = [].concat(
                                  (function (e) {
                                      if (Array.isArray(e)) {
                                          for (var o = 0, t = Array(e.length); o < e.length; o++) t[o] = e[o];
                                          return t;
                                      }
                                      return Array.from(e);
                                  })(r),
                                  [e]
                              )),
                              (e.ontouchstart = function (e) {
                                  1 === e.targetTouches.length && (d = e.targetTouches[0].clientY);
                              }),
                              (e.ontouchmove = function (o) {
                                  var t, n, i, r;
                                  1 === o.targetTouches.length &&
                                      ((n = e), (r = (t = o).targetTouches[0].clientY - d), n && 0 === n.scrollTop && 0 < r ? a(t) : (i = n) && i.scrollHeight - i.scrollTop <= i.clientHeight && r < 0 ? a(t) : t.stopPropagation());
                              }),
                              l || (document.addEventListener("touchmove", a, o ? { passive: !1 } : void 0), (l = !0)))
                            : ((s = t),
                              setTimeout(function () {
                                  if (void 0 === c) {
                                      var e = !!s && !0 === s.reserveScrollBarGap,
                                          o = window.innerWidth - document.documentElement.clientWidth;
                                      e && 0 < o && ((c = document.body.style.paddingRight), (document.body.style.paddingRight = o + "px"));
                                  }
                                  void 0 === u && ((u = document.body.style.overflow), (document.body.style.overflow = "hidden"));
                              }),
                              i || (i = e));
                    }),
                        (e.clearAllBodyScrollLocks = function () {
                            n
                                ? (r.forEach(function (e) {
                                      (e.ontouchstart = null), (e.ontouchmove = null);
                                  }),
                                  l && (document.removeEventListener("touchmove", a, o ? { passive: !1 } : void 0), (l = !1)),
                                  (r = []),
                                  (d = -1))
                                : (s(), (i = null));
                        }),
                        (e.enableBodyScroll = function (e) {
                            n
                                ? ((e.ontouchstart = null),
                                  (e.ontouchmove = null),
                                  (r = r.filter(function (o) {
                                      return o !== e;
                                  })),
                                  l && 0 === r.length && (document.removeEventListener("touchmove", a, o ? { passive: !1 } : void 0), (l = !1)))
                                : i === e && (s(), (i = null));
                        });
                });
            },
            {},
        ],
        "7QCb": [
            function (require, module, exports) {
                "use strict";
                exports.__esModule = !0;
                var e = require("body-scroll-lock"),
                    t = "https://selly.io";
                function l() {
                    var e = document.querySelectorAll("[data-selly-product]"),
                        t =
                            ".selly-close{z-index:9999999999;height:40px;position:fixed;right:30px;top:15px;width:40px;margin:0;border-radius:50%;cursor:pointer}.selly-close:hover{background:rgba(0,0,0,.4)}.selly-close:after,.selly-close:before{background:#fff;content:'';display:block;left:50%;position:absolute;top:50%;height:70%;width:2px}.selly-close:before{-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;-ms-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-ms-transform-origin:center center;transform-origin:center center}.selly-close:after{-webkit-transform-origin:center center;-webkit-transform:translateX(-50%) translateY(-50%) rotate(-45deg);-ms-transform:translateX(-50%) translateY(-50%) rotate(-45deg);transform:translateX(-50%) translateY(-50%) rotate(-45deg);-ms-transform-origin:center center;transform-origin:center center}.selly-frame{border:none;height:100%;width:100%;}.selly-container{-webkit-overflow-scrolling: touch;position:relative;width:100%;height:0;padding-bottom:56.25%}.selly-wrapper{overflow-x:hidden;position:fixed;z-index:999999;background:rgba(0,0,0,.63);right:0;bottom:0;left:0;top:0;-webkit-overflow-scrolling:touch;overflow-y:scroll}.selly-loading:after,.selly-loading:before{position:absolute;content:'';width:1.28571em;height:1.28571em;margin:auto;top:0;left:0;right:0;bottom:0}.selly-loading{padding:0 21px}.selly-loading:before{border-radius:500rem;border:.2em solid rgba(0,0,0,.15)}.selly-loading:after{-webkit-animation:selly-spin .6s linear;animation:selly-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#FFF transparent transparent;border-style:solid;border-width:.2em;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent}.selly-loading__large:after,.selly-loading__large:before{width:2.5em;height:2.5em;border-width:.3em}.selly-loading--fixed{position:fixed;top:0;left:0;right:0;bottom:0}@-webkit-keyframes selly-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes selly-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.loading-text-container{margin-top:80px;max-width:300px;width:100%;text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif;color:#fff}.loading-link{font-weight:700;text-decoration:underline;padding-top:10px;color:#fff}.selly-error{margin-top:0px;}.selly-error-icon{height:80px;margin-bottom:20px;}",
                        l = document.head || document.getElementsByTagName("head")[0],
                        n = document.createElement("style");
                    (n.type = "text/css"), n.styleSheet ? (n.styleSheet.cssText = t) : n.appendChild(document.createTextNode(t)), l.appendChild(n);
                    for (var r = 0; r < e.length; r++) {
                        var a = e[r].getAttribute("data-selly-product");
                        e[r].removeEventListener("click", o.bind(null, a)), e[r].addEventListener("click", o.bind(null, a));
                    }
                }
                function o(l) {
                    if (!(l.toString().length < 2)) {
                        if (i.includes(l)) {
                            var o = document.getElementById("selly-" + l);
                            o.style.display = "block";
                            var a = document.getElementById("selly-error-" + l);
                            return a && ((a.style.display = "block"), (a.childNodes.item(0).style.display = "block")), e.disableBodyScroll(o);
                        }
                        for (var s = document.querySelectorAll("[data-selly-product='" + l + "']")[0], d = "?", c = 0; c < 2; c++)
                            if (s) {
                                var m = "&",
                                    y = s.getAttribute("data-selly-custom-" + c);
                                y && ("" === d && (m = "?"), (d = d + m + "custom[" + c + "]=" + encodeURIComponent(y)));
                            }
                        var p = document.createElement("div");
                        (p.id = "selly-" + l), (p.className = "selly-wrapper");
                        var f = document.createElement("span");
                        (f.className = "selly-close"),
                            f.addEventListener("click", function () {
                                n();
                            });
                        var g = document.createElement("div");
                        (g.className = "selly-loading selly-loading__large selly-loading--fixed"), (g.id = "selly-loading-" + l);
                        var u = document.createElement("iframe");
                        (u.className = "selly-frame"),
                            (u.src = t + "/p/" + l + "/embed" + d),
                            (u.style.display = "none"),
                            (u.onload = function () {
                                var e = document.getElementById("selly-loading-" + l);
                                e.parentNode.removeChild(e), (u.style.display = "block");
                            }),
                            setTimeout(function () {
                                if (document.getElementById("selly-loading-" + l)) {
                                    var e = r(l);
                                    document.getElementById("selly-loading-" + l).appendChild(e);
                                }
                            }, 3500),
                            p.appendChild(u),
                            p.appendChild(g),
                            p.appendChild(f),
                            i.includes(l) ? (document.getElementById("selly-" + l).style.display = "block") : (i.push(l), document.body.appendChild(p)),
                            e.disableBodyScroll(p);
                    }
                }
                function n() {
                    for (var t = document.querySelectorAll("[id*='selly-']"), l = 0; l < t.length; l++) {
                        var o = t[l];
                        void 0 !== o && (o.style.display = "none");
                    }
                    (document.body.style.overflowY = null), (document.documentElement.style.overflowY = null), e.clearAllBodyScrollLocks();
                }
                function r(e, l) {
                    void 0 === l && (l = "If the product isn't showing, there may be an issue loading it");
                    var o = document.createElement("div");
                    (o.className = "loading-text-container"), (o.id = "selly-loading-text-" + e);
                    var n = document.createElement("div");
                    n.innerText = l;
                    var r = document.createElement("a");
                    return (r.href = t + "/p/" + e), (r.innerText = "Click here to go directly to it"), (r.className = "loading-link"), o.appendChild(n), o.appendChild(r), o;
                }
                function a(e, t) {
                    var l = document.createElement("div");
                    for (l.innerHTML = t; l.children.length > 0; ) e.prepend(l.children[0]);
                }
                var i = [];
                "loading" !== document.readyState ? l() : document.addEventListener("DOMContentLoaded", l);
            },
            { "body-scroll-lock": "WIPQ" },
        ],
    },
    {},
    ["7QCb"],
    null
);
//# sourceMappingURL=/index.map
