$("#find-a-lawyer-button").click(function() {
    window.location.href = "/finde.html"
}), $(".contact-button").click(function() {
    $(".shadow-gen").toggle(), $(".sidebar-section.mobile-popup").toggle()
}), $(".side-bar-profile .sidebar-section.mobile-popup .closer").click(function() {
    $(".shadow-gen").toggle(), $(".sidebar-section.mobile-popup").toggle()
}), $(".srch-icon").click(function() {
    $(".search-area").toggle("slow") ;
    
}),  /*$(".selector-item").click(function() {
    $(".taber-selector").toggleClass("hide-skills"), $(".selector-item").toggleClass("active"), $(".reviews-toggle").toggle()
}), */ ! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Slideout = e()
    }
}(function() {
    return function e(t, n, i) {
        function o(r, a) {
            if (!n[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var u = new Error("Cannot find module '" + r + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[r] = {
                    exports: {}
                };
                t[r][0].call(c.exports, function(e) {
                    var n = t[r][1][e];
                    return o(n ? n : e)
                }, c, c.exports, e, t, n, i)
            }
            return n[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
        return o
    }({
        1: [function(e, t) {
            "use strict";

            function n(e) {
                e = e || {}, this._startOffsetX = 0, this._currentOffsetX = 0, this._opening = !1, this._moved = !1, this._opened = !1, this._preventOpen = !1, this.panel = e.panel, this.menu = e.menu, this.panel.className += " slideout-panel", this.menu.className += " slideout-menu", this._fx = e.fx || "ease", this._duration = parseInt(e.duration, 10) || 300, this._tolerance = parseInt(e.tolerance, 10) || 70, this._padding = parseInt(e.padding, 10) || 256, this._initTouchEvents()
            }
            var i, o = e("decouple"),
                s = !1,
                r = window.document,
                a = r.documentElement,
                l = window.navigator.msPointerEnabled,
                u = {
                    start: l ? "MSPointerDown" : "touchstart",
                    move: l ? "MSPointerMove" : "touchmove",
                    end: l ? "MSPointerUp" : "touchend"
                },
                c = function() {
                    var e = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
                        t = r.getElementsByTagName("script")[0].style;
                    for (var n in t)
                        if (e.test(n)) return "-" + n.match(e)[0].toLowerCase() + "-";
                    return "WebkitOpacity" in t ? "-webkit-" : "KhtmlOpacity" in t ? "-khtml-" : ""
                }();
            n.prototype.open = function() {
                var e = this;
                return -1 === a.className.search("slideout-open") && (a.className += " slideout-open"), this._setTransition(), this._translateXTo(this._padding), this._opened = !0, setTimeout(function() {
                    e.panel.style.transition = e.panel.style["-webkit-transition"] = ""
                }, this._duration + 50), this
            }, n.prototype.close = function() {
                var e = this;
                return this.isOpen() || this._opening ? (this._setTransition(), this._translateXTo(0), this._opened = !1, setTimeout(function() {
                    a.className = a.className.replace(/ slideout-open/, ""), e.panel.style.transition = e.panel.style["-webkit-transition"] = ""
                }, this._duration + 50), this) : this
            }, n.prototype.toggle = function() {
                return this.isOpen() ? this.close() : this.open()
            }, n.prototype.isOpen = function() {
                return this._opened
            }, n.prototype._translateXTo = function(e) {
                this._currentOffsetX = e, this.panel.style[c + "transform"] = this.panel.style.transform = "translate3d(" + e + "px, 0, 0)"
            }, n.prototype._setTransition = function() {
                this.panel.style[c + "transition"] = this.panel.style.transition = c + "transform " + this._duration + "ms " + this._fx
            }, n.prototype._initTouchEvents = function() {
                var e = this;
                o(r, "scroll", function() {
                    e._moved || (clearTimeout(i), s = !0, i = setTimeout(function() {
                        s = !1
                    }, 250))
                }), r.addEventListener(u.move, function(t) {
                    e._moved && t.preventDefault()
                }), this.panel.addEventListener(u.start, function(t) {
                    e._moved = !1, e._opening = !1, e._startOffsetX = t.touches[0].pageX, e._preventOpen = !e.isOpen() && 0 !== e.menu.clientWidth
                }), this.panel.addEventListener("touchcancel", function() {
                    e._moved = !1, e._opening = !1
                }), this.panel.addEventListener(u.end, function() {
                    e._moved && (e._opening && Math.abs(e._currentOffsetX) > e._tolerance ? e.open() : e.close()), e._moved = !1
                }), this.panel.addEventListener(u.move, function(t) {
                    if (!s && !e._preventOpen) {
                        var n = t.touches[0].clientX - e._startOffsetX,
                            i = e._currentOffsetX = n;
                        if (!(Math.abs(i) > e._padding) && Math.abs(n) > 20) {
                            if (e._opening = !0, e._opened && n > 0 || !e._opened && 0 > n) return;
                            e._moved || -1 !== a.className.search("slideout-open") || (a.className += " slideout-open"), 0 >= n && (i = n + e._padding, e._opening = !1), e.panel.style[c + "transform"] = e.panel.style.transform = "translate3d(" + i + "px, 0, 0)", e._moved = !0
                        }
                    }
                })
            }, t.exports = n
        }, {
            decouple: 2
        }],
        2: [function(e, t) {
            "use strict";

            function n(e, t, n) {
                function o(e) {
                    a = e, s()
                }

                function s() {
                    l || (i(r), l = !0)
                }

                function r() {
                    n.call(e, a), l = !1
                }
                var a, l = !1;
                e.addEventListener(t, o, !1)
            }
            var i = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                }
            }();
            t.exports = n
        }, {}]
    }, {}, [1])(1)
});