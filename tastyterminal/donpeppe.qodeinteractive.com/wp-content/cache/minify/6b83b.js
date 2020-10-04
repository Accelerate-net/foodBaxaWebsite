! function(e) {
    "use strict";

    function o() {
        qodef.scroll = e(window).scrollTop(),
            function() {
                var e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
                    o = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
                    a = -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
                    t = window.navigator.userAgent.indexOf("MSIE ");
                e && qodef.body.addClass("qodef-chrome");
                o && qodef.body.addClass("qodef-safari");
                a && qodef.body.addClass("qodef-firefox");
                (0 < t || navigator.userAgent.match(/Trident.*rv\:11\./)) && qodef.body.addClass("qodef-ms-explorer");
                /Edge\/\d./i.test(navigator.userAgent) && qodef.body.addClass("qodef-edge")
            }(), qodef.body.hasClass("qodef-dark-header") && (qodef.defaultHeaderStyle = "qodef-dark-header"), qodef.body.hasClass("qodef-light-header") && (qodef.defaultHeaderStyle = "qodef-light-header")
    }

    function a() {}

    function t() {
        qodef.windowWidth = e(window).width(), qodef.windowHeight = e(window).height()
    }

    function d() {
        qodef.scroll = e(window).scrollTop()
    }
    switch (window.qodef = {}, qodef.modules = {}, qodef.scroll = 0, qodef.window = e(window), qodef.document = e(document), qodef.windowWidth = e(window).width(), qodef.windowHeight = e(window).height(), qodef.body = e("body"), qodef.html = e("html, body"), qodef.htmlEl = e("html"), qodef.menuDropdownHeightSet = !1, qodef.defaultHeaderStyle = "", qodef.minVideoWidth = 1500, qodef.videoWidthOriginal = 1280, qodef.videoHeightOriginal = 720, qodef.videoRatio = 1.61, qodef.qodefOnDocumentReady = o, qodef.qodefOnWindowLoad = a, qodef.qodefOnWindowResize = t, qodef.qodefOnWindowScroll = d, e(document).ready(o), e(window).on("load", a), e(window).resize(t), e(window).scroll(d), !0) {
        case qodef.body.hasClass("qodef-grid-1300"):
            qodef.boxedLayoutWidth = 1350;
            break;
        case qodef.body.hasClass("qodef-grid-1200"):
            qodef.boxedLayoutWidth = 1250;
            break;
        case qodef.body.hasClass("qodef-grid-1000"):
            qodef.boxedLayoutWidth = 1050;
            break;
        case qodef.body.hasClass("qodef-grid-800"):
            qodef.boxedLayoutWidth = 850;
            break;
        default:
            qodef.boxedLayoutWidth = 1150
    }
    qodef.gridWidth = function() {
        var e = 1100;
        switch (!0) {
            case qodef.body.hasClass("qodef-grid-1300") && 1400 < qodef.windowWidth:
                e = 1300;
                break;
            case qodef.body.hasClass("qodef-grid-1200") && 1300 < qodef.windowWidth:
            case qodef.body.hasClass("qodef-grid-1000") && 1200 < qodef.windowWidth:
                e = 1200;
                break;
            case qodef.body.hasClass("qodef-grid-800") && 1024 < qodef.windowWidth:
                e = 800
        }
        return e
    }, qodef.transitionEnd = function() {
        var e, o = document.createElement("transitionDetector"),
            a = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            };
        for (e in a)
            if (void 0 !== o.style[e]) return a[e]
    }(), qodef.animationEnd = function() {
        var e, o = document.createElement("animationDetector"),
            a = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (e in a)
            if (void 0 !== o.style[e]) return a[e]
    }()
}(jQuery),
function(T) {
    "use strict";
    var e = {};

    function o() {
        var e, o, a;
        h().init(), -1 < navigator.appVersion.toLowerCase().indexOf("mac") && qodef.body.hasClass("qodef-smooth-scroll") && qodef.body.removeClass("qodef-smooth-scroll"), s().init(), T("#qodef-back-to-top").on("click", function(e) {
                e.preventDefault(), qodef.html.animate({
                    scrollTop: 0
                }, qodef.window.scrollTop() / 3, "linear")
            }), qodef.window.scroll(function() {
                var e = T(this).scrollTop(),
                    o = T(this).height(),
                    a = 0 < e ? e + o / 2 : 1;
                r(a < 1e3 ? "off" : "on")
            }), l(), D(), H(), m(), (e = T(".qodef-preload-background")).length && e.each(function() {
                var e, o, a = T(this);
                "" !== a.css("background-image") && "none" !== a.css("background-image") ? (o = (o = (o = a.attr("style")).match(/url\(["']?([^'")]+)['"]?\)/)) ? o[1] : "") && ((e = new Image).src = o, T(e).load(function() {
                    a.removeClass("qodef-preload-background")
                })) : T(window).on("load", function() {
                    a.removeClass("qodef-preload-background")
                })
            }), f(), (o = T(".qodef-search-post-type")).length && o.each(function() {
                var e = T(this),
                    o = e.find(".qodef-post-type-search-field"),
                    t = e.siblings(".qodef-post-type-search-results"),
                    d = e.find(".qodef-search-loading"),
                    n = e.find(".qodef-search-icon");
                d.addClass("qodef-hidden");
                var i, s = e.data("post-type");
                o.on("keyup paste", function() {
                    var a = T(this);
                    a.attr("autocomplete", "off"), d.removeClass("qodef-hidden"), n.addClass("qodef-hidden"), clearTimeout(i), i = setTimeout(function() {
                        var e, o = a.val();
                        o.length < 3 ? (t.html(""), t.fadeOut(), d.addClass("qodef-hidden"), n.removeClass("qodef-hidden")) : (e = {
                            action: "donpeppe_select_search_post_types",
                            term: o,
                            postType: s,
                            search_post_types_nonce: T('input[name="qodef_search_post_types_nonce"]').val()
                        }, T.ajax({
                            type: "POST",
                            data: e,
                            url: qodefGlobalVars.vars.qodefAjaxUrl,
                            success: function(e) {
                                var o = JSON.parse(e);
                                "success" === o.status && (d.addClass("qodef-hidden"), n.removeClass("qodef-hidden"), t.html(o.data.html), t.fadeIn())
                            },
                            error: function(e, o, a) {
                                console.log("Status: " + o), console.log("Error: " + a), d.addClass("qodef-hidden"), n.removeClass("qodef-hidden"), t.fadeOut()
                            }
                        }))
                    }, 500)
                }), o.on("focusout", function() {
                    d.addClass("qodef-hidden"), n.removeClass("qodef-hidden"), t.fadeOut()
                })
            }), (a = T(".qodef-dashboard-form")).length && a.each(function() {
                var e = T(this),
                    d = e.find("button.qodef-dashboard-form-button"),
                    n = d.data("updating-text"),
                    i = d.data("updated-text"),
                    s = e.data("action");
                e.on("submit", function(e) {
                    e.preventDefault();
                    var a = d.html(),
                        o = T(this).find(".qodef-dashboard-gallery-upload-hidden"),
                        l = [];
                    d.html(n);
                    var f = new FormData;
                    o.each(function() {
                        var e, o, a, t = T(this),
                            d = t.attr("name"),
                            n = t.attr("id"),
                            i = t[0].files,
                            s = -1 < d.indexOf("[") ? (s = d.substring(0, d.indexOf("[")) + "_qodef_regarray_", e = n.indexOf("["), o = n.indexOf("]"), a = n.substring(e + 1, o), l.push(s), s + a + "_") : d + "_qodef_reg_";
                        0 === i.length && f.append(s, new File([""], "qodef-dummy-file.txt", {
                            type: "text/plain"
                        }));
                        for (var r = 0; r < i.length; r++) {
                            1 === i[r].name.match(/\./g).length && -1 !== T.inArray(i[r].type, ["image/png", "image/jpg", "image/jpeg", "application/pdf"]) && f.append(s + r, i[r])
                        }
                    }), f.append("action", s);
                    var t = T(this).serialize();
                    return f.append("data", t), T.ajax({
                        type: "POST",
                        data: f,
                        contentType: !1,
                        processData: !1,
                        url: qodefGlobalVars.vars.qodefAjaxUrl,
                        success: function(e) {
                            var o = JSON.parse(e);
                            qodef.modules.socialLogin.qodefRenderAjaxResponseMessage(o), "success" === o.status ? (d.html(i), window.location = o.redirect) : d.html(a)
                        }
                    }), !1
                })
            }), c(),
            function() {
                {
                    var t, d, n, e, o, a, i;
                    qodef.body.hasClass("qodef-smooth-page-transitions") && (qodef.body.hasClass("qodef-smooth-page-transitions-preloader") && (t = T("body > .qodef-smooth-transition-loader.qodef-mimic-ajax"), d = T("#qodef-main-rev-holder, #rev_slider_6_1_wrapper"), (n = T(".qodef-peppe-spinner-holder")).length && (o = n.find(".qodef-peppe-spinner-image").find("g"), a = function() {
                        o.each(function() {
                            T(this).addClass("active"), setTimeout(function() {
                                o.removeClass("active")
                            }, 2300)
                        })
                    }, i = function() {
                        setTimeout(function() {
                            t.addClass("done")
                        }, 2500), clearInterval(e)
                    }, setTimeout(function() {
                        a(), e = setInterval(function() {
                            a()
                        }, 2500)
                    }, 100)), T(window).on("load", function() {
                        var o, e, a;
                        n.length ? (i(800, 2500, "easeInOutSine"), d.length && setTimeout(function() {
                            d.find("rs-module").revstart()
                        }, 2500)) : (o = o || 600, e = e || 0, a = a || "easeOutSine", t.delay(e).fadeOut(o, a), T(window).on("bind", "pageshow", function(e) {
                            e.originalEvent.persisted && t.fadeOut(o, a)
                        }))
                    })), window.addEventListener("pageshow", function(e) {
                        (e.persisted || void 0 !== window.performance && 2 === window.performance.navigation.type) && T(".qodef-wrapper-inner").show()
                    }), qodef.body.hasClass("qodef-smooth-page-transitions-fadeout") && T("a").on("click", function(e) {
                        var o = T(this);
                        (o.parents(".qodef-shopping-cart-dropdown").length || o.parent(".product-remove").length) && o.hasClass("remove") || o.parents(".woocommerce-product-gallery__image").length || 1 === e.which && 0 <= o.attr("href").indexOf(window.location.host) && void 0 === o.data("rel") && void 0 === o.attr("rel") && !o.hasClass("lightbox-active") && (void 0 === o.attr("target") || "_self" === o.attr("target")) && o.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (e.preventDefault(), T(".qodef-wrapper-inner").fadeOut(600, "easeOutSine", function() {
                            window.location = o.attr("href")
                        }))
                    }))
                }
            }(), q(), T(".qodef-appear-from-left, .qodef-appear-from-right, .qodef-appear-effect").each(function() {
                T(this).appear(function() {
                    T(this).addClass("qodef-appear")
                }, {
                    accX: 0,
                    accY: 0
                })
            })
    }

    function a() {
        P(), p().init()
    }

    function t() {
        c(), D(), q()
    }

    function d(e) {
        i(e)
    }

    function n(e) {
        for (var o = [37, 38, 39, 40], a = o.length; a--;)
            if (e.keyCode === o[a]) return void i(e)
    }

    function i(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }(qodef.modules.common = e).qodefFluidVideo = H, e.qodefEnableScroll = function() {
        window.removeEventListener && window.removeEventListener("wheel", d, {
            passive: !1
        });
        window.onmousewheel = document.onmousewheel = document.onkeydown = null
    }, e.qodefDisableScroll = function() {
        window.addEventListener && window.addEventListener("wheel", d, {
            passive: !1
        });
        document.onkeydown = n
    }, e.qodefOwlSlider = m, e.qodefInitParallax = P, e.qodefInitSelfHostedVideoPlayer = l, e.qodefSelfHostedVideoSize = D, e.qodefPrettyPhoto = f, e.qodefStickySidebarWidget = p, e.getLoadMoreData = function(e) {
        var o, a = e.data(),
            t = {};
        for (o in a) a.hasOwnProperty(o) && void 0 !== a[o] && !1 !== a[o] && (t[o] = a[o]);
        return t
    }, e.setLoadMoreAjaxData = function(e, o) {
        var a, t = {
            action: o
        };
        for (a in e) e.hasOwnProperty(a) && void 0 !== e[a] && !1 !== e[a] && (t[a] = e[a]);
        return t
    }, e.setFixedImageProportionSize = u, e.qodefInitPerfectScrollbar = function() {
        var a = {
            wheelSpeed: .6,
            suppressScrollX: !0
        };
        return {
            init: function(e) {
                var o;
                e.length && (o = new PerfectScrollbar(e.selector, a), T(window).resize(function() {
                    o.update()
                }))
            }
        }
    }, e.qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, e.qodefOnWindowResize = t, T(document).ready(o), T(window).on("load", a), T(window).resize(t);
    var s = function() {
        function i(o) {
            T(".qodef-main-menu, .qodef-mobile-nav, .qodef-fullscreen-menu, .qodef-vertical-menu").each(function() {
                var e = T(this);
                o.parents(e).length && (e.find(".qodef-active-item").removeClass("qodef-active-item"), o.parent().addClass("qodef-active-item"), e.find("a").removeClass("current"), o.addClass("current"))
            })
        }
        var t = function(e) {
                var o = T(".qodef-main-menu a, .qodef-mobile-nav a, .qodef-fullscreen-menu a, .qodef-vertical-menu a"),
                    a = e,
                    t = "" !== a ? T('[data-qodef-anchor="' + a + '"]') : "";
                if ("" !== a && 0 < t.length) {
                    var d = t.offset().top,
                        n = d - s(d) - qodefGlobalVars.vars.qodefAddForAdminBar;
                    return o.length && o.each(function() {
                        var e = T(this); - 1 < e.attr("href").indexOf(a) && i(e)
                    }), qodef.html.stop().animate({
                        scrollTop: Math.round(n)
                    }, 1e3, function() {
                        history.pushState && history.pushState(null, "", "#" + a)
                    }), !1
                }
            },
            s = function(e) {
                "qodef-sticky-header-on-scroll-down-up" === qodef.modules.stickyHeader.behaviour && (qodef.modules.stickyHeader.isStickyVisible = e > qodef.modules.header.stickyAppearAmount), "qodef-sticky-header-on-scroll-up" === qodef.modules.stickyHeader.behaviour && e > qodef.scroll && (qodef.modules.stickyHeader.isStickyVisible = !1);
                var o = qodef.modules.stickyHeader.isStickyVisible ? qodefGlobalVars.vars.qodefStickyHeaderTransparencyHeight : qodefPerPageVars.vars.qodefHeaderTransparencyHeight;
                return qodef.windowWidth < 1025 && (o = 0), o
            };
        return {
            init: function() {
                var o, e, a;
                T("[data-qodef-anchor]").length && (qodef.document.on("click", ".qodef-main-menu a, .qodef-fullscreen-menu a, a.qodef-btn, .qodef-anchor, .qodef-mobile-nav a, .qodef-vertical-menu a", function() {
                    var e = T(this),
                        o = e.prop("hash").split("#")[1],
                        a = "" !== o ? T('[data-qodef-anchor="' + o + '"]') : "";
                    if ("" !== o && 0 < a.length) {
                        var t = a.offset().top,
                            d = t - s(t) - qodefGlobalVars.vars.qodefAddForAdminBar;
                        return i(e), qodef.html.stop().animate({
                            scrollTop: Math.round(d)
                        }, 1e3, function() {
                            history.pushState && history.pushState(null, "", "#" + o)
                        }), !1
                    }
                }), e = T("[data-qodef-anchor]"), "/" !== (a = window.location.href.split("#")[0]).substr(-1) && (a += "/"), e.waypoint(function(e) {
                    "down" === e && (o = 0 < T(this.element).length ? T(this.element).data("qodef-anchor") : T(this).data("qodef-anchor"), i(T("a[href='" + a + "#" + o + "']")))
                }, {
                    offset: "50%"
                }), e.waypoint(function(e) {
                    "up" === e && (o = 0 < T(this.element).length ? T(this.element).data("qodef-anchor") : T(this).data("qodef-anchor"), i(T("a[href='" + a + "#" + o + "']")))
                }, {
                    offset: function() {
                        return -(T(this.element).outerHeight() - 150)
                    }
                }), T(window).on("load", function() {
                    var e;
                    "" !== (e = window.location.hash.split("#")[1]) && 0 < T('[data-qodef-anchor="' + e + '"]').length && t(e)
                }))
            }
        }
    };

    function r(e) {
        var o = T("#qodef-back-to-top");
        o.removeClass("off on"), "on" === e ? o.addClass("on") : o.addClass("off")
    }

    function l() {
        var e = T(".qodef-self-hosted-video");
        e.length && e.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function D() {
        var e = T(".qodef-self-hosted-video-holder .qodef-video-wrap");
        e.length && e.each(function() {
            var e = T(this),
                o = e.closest(".qodef-self-hosted-video-holder").outerWidth(),
                a = o / qodef.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (e.parent().width(o), e.parent().height(a)), e.width(o), e.height(a), e.find("video, .mejs-overlay, .mejs-poster").width(o), e.find("video, .mejs-overlay, .mejs-poster").height(a)
        })
    }

    function H() {
        fluidvids.init({
            selector: ["iframe"],
            players: ["www.youtube.com", "player.vimeo.com"]
        })
    }

    function f() {
        var e = '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="' + qodefGlobalVars.vars.ppExpand + '">' + qodefGlobalVars.vars.ppExpand + '</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span>' + qodefGlobalVars.vars.sliderNavNextArrow + '</span></a>                                             <a class="pp_previous" href="#"><span>' + qodefGlobalVars.vars.sliderNavPrevArrow + '</span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">' + qodefGlobalVars.vars.ppPrev + '</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">' + qodefGlobalVars.vars.ppNext + '</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">' + qodefGlobalVars.vars.ppClose + '</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
        T("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: e
        })
    }

    function c() {
        var e = T(".qodef-grid-masonry-list");
        e.length && e.each(function() {
            var e = T(this),
                o = e.find(".qodef-masonry-list-wrapper"),
                a = e.find(".qodef-masonry-grid-sizer").width();
            o.waitForImages(function() {
                o.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qodef-item-space",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".qodef-masonry-grid-sizer",
                        gutter: ".qodef-masonry-grid-gutter"
                    }
                }), (e.find(".qodef-fixed-masonry-item").length || e.hasClass("qodef-fixed-masonry-items")) && u(o, o.find(".qodef-item-space"), a, !0), setTimeout(function() {
                    P()
                }, 600), o.isotope("layout").css("opacity", 1)
            })
        })
    }

    function u(e, o, a, t) {
        var d, n, i, s, r, l;
        !e.hasClass("qodef-masonry-images-fixed") && !0 !== t || (n = a - 2 * (d = parseInt(o.css("paddingLeft"), 10)), i = e.find(".qodef-masonry-size-small"), s = e.find(".qodef-masonry-size-large-width"), r = e.find(".qodef-masonry-size-large-height"), l = e.find(".qodef-masonry-size-large-width-height"), i.css("height", n), r.css("height", Math.round(2 * (n + d))), 680 < qodef.windowWidth ? (s.css("height", n), l.css("height", Math.round(2 * (n + d)))) : (s.css("height", Math.round(n / 2)), l.css("height", n)))
    }
    var h = function() {
        var e = T(".qodef-icon-has-hover");
        return {
            init: function() {
                e.length && e.each(function() {
                    var e, o, a, t;
                    void 0 !== (e = T(this)).data("hover-color") && (o = function(e) {
                        e.data.icon.css("color", e.data.color)
                    }, a = e.data("hover-color"), t = e.css("color"), "" !== a && (e.on("mouseenter", {
                        icon: e,
                        color: a
                    }, o), e.on("mouseleave", {
                        icon: e,
                        color: t
                    }, o)))
                })
            }
        }
    };

    function P() {
        var e = T(".qodef-parallax-row-holder");
        e.length && e.each(function() {
            var e = T(this),
                o = e.data("parallax-bg-image"),
                a = .4 * e.data("parallax-bg-speed"),
                t = 0;
            void 0 !== e.data("parallax-bg-height") && !1 !== e.data("parallax-bg-height") && (t = parseInt(e.data("parallax-bg-height"))), e.css({
                "background-image": "url(" + o + ")"
            }), 0 < t && e.css({
                "min-height": t + "px",
                height: t + "px"
            }), e.parallax("50%", a)
        })
    }

    function p() {
        var i, s, e = T(".qodef-widget-sticky-sidebar"),
            o = T(".qodef-page-header"),
            u = o.length ? o.outerHeight() : 0,
            r = 0,
            l = 0,
            h = [];

        function a() {
            h.length && T.each(h, function(e) {
                h[e].object;
                var o, a, t, d, n, i = h[e].offset,
                    s = h[e].position,
                    r = h[e].height,
                    l = h[e].width,
                    f = h[e].sidebarHolder,
                    c = h[e].sidebarHolderHeight;
                qodef.body.hasClass("qodef-fixed-on-scroll") ? (o = T(".qodef-fixed-wrapper.fixed")).length && (u = o.outerHeight() + qodefGlobalVars.vars.qodefAddForAdminBar) : qodef.body.hasClass("qodef-no-behavior") && (u = qodefGlobalVars.vars.qodefAddForAdminBar), 1024 < qodef.windowWidth && f.length ? (a = -(s - u), t = r - s - 40, d = c + i - u - s - qodefGlobalVars.vars.qodefTopBarHeight, qodef.scroll >= i - u && r < c ? (f.hasClass("qodef-sticky-sidebar-appeared") ? f.css({
                    top: a + "px"
                }) : f.addClass("qodef-sticky-sidebar-appeared").css({
                    position: "fixed",
                    top: a + "px",
                    width: l,
                    "margin-top": "-10px"
                }).animate({
                    "margin-top": "0"
                }, 200), qodef.scroll + t >= d ? (n = c - t + a - u, f.css({
                    position: "absolute",
                    top: n + "px"
                })) : f.hasClass("qodef-sticky-sidebar-appeared") && f.css({
                    position: "fixed",
                    top: a + "px"
                })) : f.removeClass("qodef-sticky-sidebar-appeared").css({
                    position: "relative",
                    top: "0",
                    width: "auto"
                })) : f.removeClass("qodef-sticky-sidebar-appeared").css({
                    position: "relative",
                    top: "0",
                    width: "auto"
                })
            })
        }
        return {
            init: function() {
                e.length && e.each(function() {
                    var e, o = T(this),
                        a = o.parents("aside.qodef-sidebar"),
                        t = o.parents(".wpb_widgetised_column"),
                        d = "",
                        n = 0;
                    i = o.offset().top, s = o.position().top, l = r = 0, a.length ? (r = a.outerHeight(), l = a.outerWidth(), n = (d = a).parent().parent().outerHeight(), (e = a.parent().parent().find(".qodef-blog-holder")).length && (n -= parseInt(e.css("marginBottom")))) : t.length && (r = t.outerHeight(), l = t.outerWidth(), n = (d = t).parents(".vc_row").outerHeight()), h.push({
                        object: o,
                        offset: i,
                        position: s,
                        height: r,
                        width: l,
                        sidebarHolder: d,
                        sidebarHolderHeight: n
                    })
                }), a(), T(window).scroll(function() {
                    a()
                })
            },
            reInit: a
        }
    }

    function m() {
        var e = T(".qodef-owl-slider");
        e.length && e.each(function() {
            var a, o = T(this),
                e = T(this),
                t = !1,
                d = o.children().length,
                n = 1,
                i = !0,
                s = !0,
                r = !0,
                l = 5e3,
                f = 600,
                c = 0,
                u = 0,
                h = 0,
                p = 0,
                m = 0,
                q = !1,
                g = !1,
                v = !1,
                b = !1,
                y = !0,
                w = !1,
                C = !1,
                x = !!o.hasClass("qodef-list-is-slider"),
                k = x ? o.parent() : o,
                _ = ['<span class="qodef-prev">' + qodefGlobalVars.vars.sliderNavPrevArrow + "</span>", '<span class="qodef-next">' + qodefGlobalVars.vars.sliderNavNextArrow + "</span>"];
            if (void 0 === o.data("number-of-items") || !1 === o.data("number-of-items") || x || (n = o.data("number-of-items")), void 0 !== k.data("number-of-columns") && !1 !== k.data("number-of-columns") && x) switch (k.data("number-of-columns")) {
                case "one":
                    n = 1;
                    break;
                case "two":
                    n = 2;
                    break;
                case "three":
                    n = 3;
                    break;
                case "four":
                    n = 4;
                    break;
                case "five":
                    n = 5;
                    break;
                case "six":
                    n = 6;
                    break;
                case "seven":
                    n = 7;
                    break;
                case "eight":
                    n = 8;
                    break;
                default:
                    n = 4
            }
            "no" === k.data("enable-loop") && (i = !1), "no" === k.data("enable-autoplay") && (s = !1), "no" === k.data("enable-autoplay-hover-pause") && (r = !1), void 0 !== k.data("slider-speed") && !1 !== k.data("slider-speed") && (l = k.data("slider-speed")), void 0 !== k.data("slider-speed-animation") && !1 !== k.data("slider-speed-animation") && (f = k.data("slider-speed-animation")), void 0 !== k.data("slider-margin") && !1 !== k.data("slider-margin") ? c = "no" === k.data("slider-margin") ? 0 : k.data("slider-margin") : o.parent().hasClass("qodef-enormous-space") ? c = 140 : o.parent().hasClass("qodef-huge-space") ? c = 60 : o.parent().hasClass("qodef-large-space") ? c = 50 : o.parent().hasClass("qodef-medium-space") ? c = 40 : o.parent().hasClass("qodef-normal-space") ? c = 30 : o.parent().hasClass("qodef-small-space") ? c = 20 : o.parent().hasClass("qodef-tiny-space") && (c = 10), o.hasClass("qodef-instagram-feed") && (p = c), "yes" === k.data("slider-padding") && (o.hasClass("qodef-ig-slider") ? (m = parseInt(.14 * o.outerWidth()), n = 3, c = 40, t = !0) : (q = !0, m = parseInt(.28 * o.outerWidth()), c = 50)), "yes" === k.data("enable-center") && (t = !0), "yes" === k.data("enable-auto-width") && (g = !0), void 0 !== k.data("slider-animate-in") && !1 !== k.data("slider-animate-in") && (v = k.data("slider-animate-in")), void 0 !== k.data("slider-animate-out") && !1 !== k.data("slider-animate-out") && (b = k.data("slider-animate-out")), "no" === k.data("enable-navigation") && (y = !1), "yes" === k.data("enable-pagination") && (w = !0), "yes" === k.data("enable-thumbnail") && (C = !0), C && !w && (w = !0, e.addClass("qodef-slider-hide-pagination")), y && w && o.addClass("qodef-slider-has-both-nav"), d <= 1 && (w = y = s = i = !1);
            var S = 2,
                O = 3;
            if (n < 3 && (O = S = n), (q || 30 < c) && (u = 20, h = 30, p = 60 < c ? 70 : c), o.hasClass("qodef-plc-outer") && (h = 70, S = 4, O = n), 0 < c && c <= 30 && (h = u = c), o.waitForImages(function() {
                    e = o.owlCarousel({
                        items: n,
                        loop: i,
                        autoplay: s,
                        autoplayHoverPause: r,
                        autoplayTimeout: l,
                        smartSpeed: f,
                        margin: c,
                        stagePadding: m,
                        center: t,
                        autoWidth: g,
                        animateIn: v,
                        animateOut: b,
                        dots: w,
                        nav: y,
                        navText: _,
                        responsive: {
                            0: {
                                items: 1,
                                margin: u,
                                stagePadding: 0,
                                center: !1,
                                autoWidth: !1
                            },
                            681: {
                                items: S,
                                margin: h
                            },
                            769: {
                                items: O,
                                margin: h
                            },
                            1025: {
                                items: n,
                                margin: p
                            },
                            1600: {
                                margin: c
                            }
                        },
                        onInitialize: function() {
                            o.css("visibility", "visible"), P(), (o.find("iframe").length || o.find("video").length) && setTimeout(function() {
                                D(), H()
                            }, 500), C && a.find(".qodef-slider-thumbnail-item:first-child").addClass("active")
                        },
                        onRefreshed: function() {
                            var e;
                            !0 === g && (e = parseInt(o.find(".owl-stage").css("width")), o.find(".owl-stage").css("width", e + 1 + "px"))
                        },
                        onTranslate: function(e) {
                            var o;
                            C && (o = e.page.index + 1, a.find(".qodef-slider-thumbnail-item.active").removeClass("active"), a.find(".qodef-slider-thumbnail-item:nth-child(" + o + ")").addClass("active"))
                        },
                        onDrag: function(e) {
                            qodef.body.hasClass("qodef-smooth-page-transitions-fadeout") && 0 < e.isTrigger && o.addClass("qodef-slider-is-moving")
                        },
                        onDragged: function() {
                            qodef.body.hasClass("qodef-smooth-page-transitions-fadeout") && o.hasClass("qodef-slider-is-moving") && setTimeout(function() {
                                o.removeClass("qodef-slider-is-moving")
                            }, 500)
                        }
                    })
                }), C) {
                a = o.parent().find(".qodef-slider-thumbnail");
                var I = "";
                switch (parseInt(a.data("thumbnail-count")) % 6) {
                    case 2:
                        I = "two";
                        break;
                    case 3:
                        I = "three";
                        break;
                    case 4:
                        I = "four";
                        break;
                    case 5:
                        I = "five";
                        break;
                    case 0:
                    default:
                        I = "six"
                }
                "" !== I && a.addClass("qodef-slider-columns-" + I), a.find(".qodef-slider-thumbnail-item").on("click", function() {
                    T(this).siblings(".active").removeClass("active"), T(this).addClass("active"), e.trigger("to.owl.carousel", [T(this).index(), f])
                })
            }
        })
    }

    function q() {
        T(".qodef-plc-holder").each(function() {
            var t = T(this);
            t.hasClass("qodef-slider-offset") && 767 < qodef.windowWidth && (t.css({
                margin: "0 -100px",
                width: "calc(100% + 200px)"
            }), setTimeout(function() {
                var e = t.find(".owl-item").outerWidth() / 2,
                    o = t.find(".owl-prev"),
                    a = t.find(".owl-next");
                t.css({
                    margin: "0 -" + e / 2,
                    width: "calc(100% + " + e + ")"
                }), o.css({
                    left: e / 2
                }), a.css({
                    right: e / 2
                })
            }, 2500))
        })
    }
}(jQuery),
function(f) {
    "use strict";
    var e = {};

    function o() {
        var e;
        c(), (e = f(".qodef-blog-holder article")).length && e.each(function() {
            var e = f(this).find(".qodef-post-title a");
            e.on("mouseenter", function() {
                f(this).closest("article").addClass("qodef-blog-active-hover")
            }), e.on("mouseleave", function() {
                f(this).closest("article").removeClass("qodef-blog-active-hover")
            })
        })
    }

    function a() {
        d().init()
    }

    function t() {
        d().scroll()
    }

    function c() {
        var e = f("audio.qodef-blog-audio");
        e.length && e.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function d() {
        function a(e) {
            var o = e.outerHeight() + e.offset().top - qodefGlobalVars.vars.qodefAddForAdminBar;
            !e.hasClass("qodef-blog-pagination-infinite-scroll-started") && qodef.scroll + qodef.windowHeight > o && t(e)
        }
        var e = f(".qodef-blog-holder"),
            t = function(a) {
                var e, t = a.children(".qodef-blog-holder-inner");
                void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (e = a.data("max-num-pages")), a.hasClass("qodef-blog-pagination-infinite-scroll") && a.addClass("qodef-blog-pagination-infinite-scroll-started");
                var o, d = qodef.modules.common.getLoadMoreData(a),
                    n = a.find(".qodef-blog-pag-loading"),
                    i = d.nextPage,
                    s = a.find('input[name*="qodef_blog_load_more_nonce_"]');
                d.blog_load_more_id = s.attr("name").substring(s.attr("name").length - 4, s.attr("name").length), d.blog_load_more_nonce = s.val(), i <= e && (n.addClass("qodef-showing"), o = qodef.modules.common.setLoadMoreAjaxData(d, "donpeppe_select_blog_load_more"), f.ajax({
                    type: "POST",
                    data: o,
                    url: qodefGlobalVars.vars.qodefAjaxUrl,
                    success: function(e) {
                        i++, a.data("next-page", i);
                        var o = f.parseJSON(e).html;
                        a.waitForImages(function() {
                            a.hasClass("qodef-grid-masonry-list") ? (r(t, n, o), qodef.modules.common.setFixedImageProportionSize(a, a.find("article"), t.find(".qodef-masonry-grid-sizer").width())) : l(t, n, o), setTimeout(function() {
                                c(), qodef.modules.common.qodefOwlSlider(), qodef.modules.common.qodefFluidVideo(), qodef.modules.common.qodefInitSelfHostedVideoPlayer(), qodef.modules.common.qodefSelfHostedVideoSize(), "function" == typeof qodef.modules.common.qodefStickySidebarWidget && qodef.modules.common.qodefStickySidebarWidget().reInit(), f(document.body).trigger("blog_list_load_more_trigger")
                            }, 400)
                        }), a.hasClass("qodef-blog-pagination-infinite-scroll-started") && a.removeClass("qodef-blog-pagination-infinite-scroll-started")
                    }
                })), i === e && a.find(".qodef-blog-pag-load-more").hide()
            },
            r = function(e, o, a) {
                e.append(a).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), o.removeClass("qodef-showing"), setTimeout(function() {
                    e.isotope("layout")
                }, 600)
            },
            l = function(e, o, a) {
                o.removeClass("qodef-showing"), e.append(a)
            };
        return {
            init: function() {
                e.length && e.each(function() {
                    var o, e = f(this);
                    e.hasClass("qodef-blog-pagination-load-more") && (o = e).find(".qodef-blog-pag-load-more a").on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), t(o)
                    }), e.hasClass("qodef-blog-pagination-infinite-scroll") && a(e)
                })
            },
            scroll: function() {
                e.length && e.each(function() {
                    var e = f(this);
                    e.hasClass("qodef-blog-pagination-infinite-scroll") && a(e)
                })
            }
        }
    }(qodef.modules.blog = e).qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, e.qodefOnWindowScroll = t, f(document).ready(o), f(window).on("load", a), f(window).scroll(t)
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function o() {
        ! function() {
            {
                var e, o, a, t;
                d("body:not(.error404) .qodef-footer-uncover").length && !qodef.htmlEl.hasClass("touch") && (e = d("footer"), o = e.outerHeight(), a = d(".qodef-content"), (t = function() {
                    a.css("margin-bottom", o), e.css("height", o)
                })(), d(window).resize(function() {
                    o = e.find(".qodef-footer-inner").outerHeight(), t()
                }))
            }
        }()
    }(qodef.modules.footer = e).qodefOnWindowLoad = o, d(window).on("load", o)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function o() {
        t(), setTimeout(function() {
            r(".qodef-drop-down > ul > li").each(function() {
                var i = r(this);
                i.find(".second").length && i.waitForImages(function() {
                    var o, e, a, t, d = i.find(".second"),
                        n = qodef.menuDropdownHeightSet ? 0 : d.outerHeight();
                    i.hasClass("wide") && (o = 0, (e = d.find("> .inner > ul > li")).each(function() {
                        var e = r(this).outerHeight();
                        o < e && (o = e)
                    }), e.css("height", "").height(o), qodef.menuDropdownHeightSet || (n = d.outerHeight())), qodef.menuDropdownHeightSet || d.height(0), navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? i.on("touchstart mouseenter", function() {
                        d.css({
                            height: n,
                            overflow: "visible",
                            visibility: "visible",
                            opacity: "1"
                        })
                    }).on("mouseleave", function() {
                        d.css({
                            height: "0px",
                            overflow: "hidden",
                            visibility: "hidden",
                            opacity: "0"
                        })
                    }) : qodef.body.hasClass("qodef-dropdown-animate-height") ? (a = {
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                d.addClass("qodef-drop-down-start").css({
                                    visibility: "visible",
                                    height: "0",
                                    opacity: "1"
                                }), d.stop().animate({
                                    height: n
                                }, 400, "easeInOutQuint", function() {
                                    d.css("overflow", "visible")
                                })
                            }, 100)
                        },
                        timeout: 100,
                        out: function() {
                            d.stop().animate({
                                height: "0",
                                opacity: 0
                            }, 100, function() {
                                d.css({
                                    overflow: "hidden",
                                    visibility: "hidden"
                                })
                            }), d.removeClass("qodef-drop-down-start")
                        }
                    }, i.hoverIntent(a)) : (t = {
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                d.addClass("qodef-drop-down-start").stop().css({
                                    height: n
                                })
                            }, 150)
                        },
                        timeout: 150,
                        out: function() {
                            d.stop().css({
                                height: "0"
                            }).removeClass("qodef-drop-down-start")
                        }
                    }, i.hoverIntent(t))
                })
            }), r(".qodef-drop-down ul li.wide ul li a").on("click", function(e) {
                var o;
                1 === e.which && (o = r(this), setTimeout(function() {
                    o.mouseleave()
                }, 500))
            }), qodef.menuDropdownHeightSet = !0
        }, 100)
    }

    function a() {
        d()
    }

    function t() {
        var e = r(".qodef-drop-down > ul > li.narrow.menu-item-has-children");
        e.length && e.each(function(e) {
            var o, a = r(this),
                t = a.offset().left,
                d = a.find(".second"),
                n = d.find(".inner ul"),
                i = n.outerWidth(),
                s = qodef.windowWidth - t;
            qodef.body.hasClass("qodef-boxed") && (s = qodef.boxedLayoutWidth - (t - (qodef.windowWidth - qodef.boxedLayoutWidth) / 2)), 0 < a.find("li.sub").length && (o = s - i), d.removeClass("right"), n.removeClass("right"), (s < i || o < i) && (d.addClass("right"), n.addClass("right"))
        })
    }

    function d() {
        var e = r(".qodef-drop-down > ul > li.wide");
        e.length && e.each(function(e) {
            var o, a, t = r(this).find(".second");
            !t.length || t.hasClass("left_position") || t.hasClass("right_position") || (t.css("left", 0), o = t.offset().left, qodef.body.hasClass("qodef-boxed") ? (a = r(".qodef-boxed .qodef-wrapper .qodef-wrapper-inner").outerWidth(), o -= (qodef.windowWidth - a) / 2, t.css({
                left: -o,
                width: a
            })) : qodef.body.hasClass("qodef-wide-dropdown-menu-in-grid") ? t.css({
                left: -o + (qodef.windowWidth - qodef.gridWidth()) / 2,
                width: qodef.gridWidth()
            }) : t.css({
                left: -o,
                width: qodef.windowWidth
            }))
        })
    }(qodef.modules.header = e).qodefSetDropDownMenuPosition = t, e.qodefSetDropDownWideMenuPosition = d, e.qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, r(document).ready(o), r(window).on("load", a)
}(jQuery),
function(f) {
    "use strict";
    var e = {};

    function o() {
        ! function() {
            var t, d = f(".qodef-wrapper"),
                n = f(".qodef-side-menu"),
                i = f("a.qodef-side-menu-button-opener"),
                s = !1,
                r = !1,
                l = !1;
            qodef.body.hasClass("qodef-side-menu-slide-from-right") ? (f(".qodef-cover").remove(), t = "qodef-right-side-menu-opened", d.prepend('<div class="qodef-cover"/>'), s = !0) : qodef.body.hasClass("qodef-side-menu-slide-with-content") ? (t = "qodef-side-menu-open", r = !0) : qodef.body.hasClass("qodef-side-area-uncovered-from-content") && (t = "qodef-right-side-menu-opened", l = !0);
            f("a.qodef-side-menu-button-opener, a.qodef-close-side-menu").on("click", function(e) {
                var o, a;
                e.preventDefault(), d.one("wheel", function() {
                    i.hasClass("opened") && (qodef.modules.common.qodefEnableScroll(), i.removeClass("opened"), qodef.body.removeClass("qodef-side-menu-open"))
                }), i.hasClass("opened") ? (qodef.modules.common.qodefEnableScroll(), i.removeClass("opened"), qodef.body.removeClass(t), l && (o = setTimeout(function() {
                    n.css({
                        visibility: "hidden"
                    }), clearTimeout(o)
                }, 400))) : (qodef.modules.common.qodefDisableScroll(), i.addClass("opened"), qodef.body.addClass(t), s && f(".qodef-wrapper .qodef-cover").on("click", function() {
                    qodef.modules.common.qodefEnableScroll(), qodef.body.removeClass("qodef-right-side-menu-opened"), i.removeClass("opened")
                }), l && n.css({
                    visibility: "visible"
                }), a = f(window).scrollTop(), f(window).scroll(function() {
                    var e;
                    400 < Math.abs(qodef.scroll - a) && (qodef.modules.common.qodefEnableScroll(), qodef.body.removeClass(t), i.removeClass("opened"), l && (e = setTimeout(function() {
                        n.css({
                            visibility: "hidden"
                        }), clearTimeout(e)
                    }, 400)))
                })), r && (e.stopPropagation(), d.on("click", function() {
                    qodef.modules.common.qodefEnableScroll(), e.preventDefault(), i.removeClass("opened"), qodef.body.removeClass("qodef-side-menu-open")
                }))
            }), n.length && qodef.modules.common.qodefInitPerfectScrollbar().init(n)
        }()
    }(qodef.modules.sidearea = e).qodefOnDocumentReady = o, f(document).ready(o)
}(jQuery),
function(s) {
    "use strict";
    var e = {};

    function o() {
        ! function() {
            var e = s(".qodef-subscribe-popup-holder"),
                o = s(".qodef-sp-close"); {
                var a, t, d, n, i;
                e.length && (a = e.find(".qodef-sp-prevent"), t = "no", a.length && (d = e.hasClass("qodef-sp-prevent-cookies"), n = a.find(".qodef-sp-prevent-input"), i = n.data("value"), d ? (t = localStorage.getItem("disabledPopup"), sessionStorage.removeItem("disabledPopup")) : (t = sessionStorage.getItem("disabledPopup"), localStorage.removeItem("disabledPopup")), a.children().on("click", function(e) {
                    "yes" !== i ? (i = "yes", n.addClass("qodef-sp-prevent-clicked").data("value", "yes")) : (i = "no", n.removeClass("qodef-sp-prevent-clicked").data("value", "no")), "yes" === i ? d ? localStorage.setItem("disabledPopup", "yes") : sessionStorage.setItem("disabledPopup", "yes") : d ? localStorage.setItem("disabledPopup", "no") : sessionStorage.setItem("disabledPopup", "no")
                })), "yes" !== t && (qodef.body.hasClass("qodef-sp-opened") ? (qodef.body.removeClass("qodef-sp-opened"), qodef.modules.common.qodefEnableScroll()) : (qodef.body.addClass("qodef-sp-opened"), qodef.modules.common.qodefDisableScroll()), o.on("click", function(e) {
                    e.preventDefault(), qodef.body.removeClass("qodef-sp-opened"), qodef.modules.common.qodefEnableScroll()
                }), s(document).keyup(function(e) {
                    27 === e.keyCode && (qodef.body.removeClass("qodef-sp-opened"), qodef.modules.common.qodefEnableScroll())
                })))
            }
        }()
    }(qodef.modules.subscribePopup = e).qodefOnWindowLoad = o, s(window).on("load", o)
}(jQuery),
function(s) {
    "use strict";
    var e = {};

    function o() {
        ! function() {
            var e = s(".qodef-title-holder.qodef-bg-parallax"); {
                var o, a, t, d, n, i;
                0 < e.length && 1024 < qodef.windowWidth && (o = e.hasClass("qodef-bg-parallax-zoom-out"), a = parseInt(e.data("height")), t = parseInt(e.data("background-width")), d = a / 1e4 * 7, n = -qodef.scroll * d, i = qodefGlobalVars.vars.qodefAddForAdminBar, e.css({
                    "background-position": "center " + (n + i) + "px"
                }), o && e.css({
                    "background-size": t - qodef.scroll + "px auto"
                }), s(window).scroll(function() {
                    n = -qodef.scroll * d, e.css({
                        "background-position": "center " + (n + i) + "px"
                    }), o && e.css({
                        "background-size": t - qodef.scroll + "px auto"
                    })
                }))
            }
        }()
    }(qodef.modules.title = e).qodefOnDocumentReady = o, s(document).ready(o)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function o() {
        var e;
        r(document).on("click", ".qodef-quantity-minus, .qodef-quantity-plus", function(e) {
                e.stopPropagation();
                var o, a = r(this),
                    t = a.siblings(".qodef-quantity-input"),
                    d = parseFloat(t.data("step")),
                    n = parseFloat(t.data("max")),
                    i = !1,
                    s = parseFloat(t.val());
                a.hasClass("qodef-quantity-minus") && (i = !0), i ? 1 <= (o = s - d) ? t.val(o) : t.val(0) : (o = s + d, void 0 !== n && n <= o ? t.val(n) : t.val(o)), t.trigger("change")
            }),
            function() {
                var e = r(".woocommerce-ordering .orderby");
                e.length && e.select2({
                    minimumResultsForSearch: 1 / 0
                });
                var o = r(".qodef-woocommerce-page .qodef-content .variations td.value select");
                o.length && o.select2({
                    placeholder: ""
                });
                var a = r("#calc_shipping_country");
                a.length && a.select2();
                var t = r(".cart-collaterals .shipping select#calc_shipping_state");
                t.length && t.select2();
                var d = r(".widget.widget_archive select, .widget.widget_categories select, .widget.widget_text select");
                d.length && "function" == typeof d.select2 && d.select2()
            }(), (e = r(".qodef-woo-single-page.qodef-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image")).length && (e.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof qodef.modules.common.qodefPrettyPhoto && qodef.modules.common.qodefPrettyPhoto()), r(document).on("qv_loader_stop", function() {
                var e = r("#yith-quick-view-modal .summary .variations td.value select");
                e.length && e.select2({
                    dropdownParent: r("#yith-quick-view-modal .variations"),
                    placeholder: ""
                })
            })
    }(qodef.modules.woocommerce = e).qodefOnDocumentReady = o, r(document).ready(o)
}(jQuery),
function(p) {
    "use strict";
    var e = {};

    function o() {
        var e;
        (e = p(".qodef-bl-item")).length && e.each(function() {
            var e = p(this).find(".qodef-post-title a");
            e.on("mouseenter", function() {
                p(this).closest(".qodef-bl-item").addClass("qodef-blog-active-hover")
            }), e.on("mouseleave", function() {
                p(this).closest(".qodef-bl-item").removeClass("qodef-blog-active-hover")
            })
        })
    }

    function a() {
        d().init()
    }

    function t() {
        d().scroll()
    }

    function d() {
        function d(e) {
            var o = e.outerHeight() + e.offset().top - qodefGlobalVars.vars.qodefAddForAdminBar;
            !e.hasClass("qodef-bl-pag-infinite-scroll-started") && qodef.scroll + qodef.windowHeight > o && n(e)
        }
        var e = p(".qodef-blog-list-holder"),
            n = function(a, e) {
                var t, d = a.find(".qodef-blog-list");
                void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (t = a.data("max-num-pages")), a.hasClass("qodef-bl-pag-standard-shortcodes") && a.data("next-page", e), a.hasClass("qodef-bl-pag-infinite-scroll") && a.addClass("qodef-bl-pag-infinite-scroll-started");
                var o, n = qodef.modules.common.getLoadMoreData(a),
                    i = a.find(".qodef-blog-pag-loading"),
                    s = n.nextPage,
                    r = a.find('input[name*="qodef_blog_load_more_nonce_"]');
                n.blog_load_more_id = r.attr("name").substring(r.attr("name").length - 4, r.attr("name").length), n.blog_load_more_nonce = r.val(), s <= t && (a.hasClass("qodef-bl-pag-standard-shortcodes") ? (i.addClass("qodef-showing qodef-standard-pag-trigger"), a.addClass("qodef-bl-pag-standard-shortcodes-animate")) : i.addClass("qodef-showing"), o = qodef.modules.common.setLoadMoreAjaxData(n, "donpeppe_select_blog_shortcode_load_more"), p.ajax({
                    type: "POST",
                    data: o,
                    url: qodefGlobalVars.vars.qodefAjaxUrl,
                    success: function(e) {
                        a.hasClass("qodef-bl-pag-standard-shortcodes") || s++, a.data("next-page", s);
                        var o = p.parseJSON(e).html;
                        a.hasClass("qodef-bl-pag-standard-shortcodes") ? (l(a, t, s), a.waitForImages(function() {
                            a.hasClass("qodef-bl-masonry") ? f(a, d, i, o) : (c(a, d, i, o), "function" == typeof qodef.modules.common.qodefStickySidebarWidget && qodef.modules.common.qodefStickySidebarWidget().reInit())
                        })) : a.waitForImages(function() {
                            a.hasClass("qodef-bl-masonry") ? u(d, i, o) : (h(d, i, o), "function" == typeof qodef.modules.common.qodefStickySidebarWidget && qodef.modules.common.qodefStickySidebarWidget().reInit())
                        }), a.hasClass("qodef-bl-pag-infinite-scroll-started") && a.removeClass("qodef-bl-pag-infinite-scroll-started")
                    }
                })), s === t && a.find(".qodef-blog-pag-load-more").hide()
            },
            l = function(e, o, a) {
                var t = e.find(".qodef-bl-standard-pagination"),
                    d = t.find("li.qodef-pag-number"),
                    n = t.find("li.qodef-pag-prev a, .qodef-blog-prev-label a"),
                    i = t.find("li.qodef-pag-next a, .qodef-blog-next-label a");
                d.removeClass("qodef-pag-active"), d.eq(a - 1).addClass("qodef-pag-active"), n.data("paged", a - 1), i.data("paged", a + 1), 1 < a ? n.css({
                    opacity: "1"
                }) : n.css({
                    opacity: "0"
                }), a === o ? i.css({
                    opacity: "0"
                }) : i.css({
                    opacity: "1"
                })
            },
            f = function(e, o, a, t) {
                var d = "";
                o.children('[class*="-grid-sizer"]').length && (d += o.children('[class*="-grid-sizer"]')[0].outerHTML), o.children('[class*="-grid-gutter"]').length && (d += o.children('[class*="-grid-gutter"]')[0].outerHTML), o.html(d + t).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("qodef-showing qodef-standard-pag-trigger"), e.removeClass("qodef-bl-pag-standard-shortcodes-animate"), setTimeout(function() {
                    o.isotope("layout"), "function" == typeof qodef.modules.common.qodefStickySidebarWidget && qodef.modules.common.qodefStickySidebarWidget().reInit()
                }, 600)
            },
            c = function(e, o, a, t) {
                a.removeClass("qodef-showing qodef-standard-pag-trigger"), e.removeClass("qodef-bl-pag-standard-shortcodes-animate"), o.html(t)
            },
            u = function(e, o, a) {
                e.append(a).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), o.removeClass("qodef-showing"), setTimeout(function() {
                    e.isotope("layout"), "function" == typeof qodef.modules.common.qodefStickySidebarWidget && qodef.modules.common.qodefStickySidebarWidget().reInit()
                }, 600)
            },
            h = function(e, o, a) {
                o.removeClass("qodef-showing"), e.append(a)
            };
        return {
            init: function() {
                e.length && e.each(function() {
                    var t, e, o, a = p(this);
                    a.hasClass("qodef-bl-pag-standard-shortcodes") && (e = (t = a).find(".qodef-bl-standard-pagination li")).length && e.each(function() {
                        var o = p(this).children("a"),
                            a = 1;
                        o.on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), void 0 !== o.data("paged") && !1 !== o.data("paged") && (a = o.data("paged")), n(t, a)
                        })
                    }), a.hasClass("qodef-bl-pag-load-more") && (o = a).find(".qodef-blog-pag-load-more a").on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), n(o)
                    }), a.hasClass("qodef-bl-pag-infinite-scroll") && d(a)
                })
            },
            scroll: function() {
                e.length && e.each(function() {
                    var e = p(this);
                    e.hasClass("qodef-bl-pag-infinite-scroll") && d(e)
                })
            }
        }
    }(qodef.modules.blogListSC = e).qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, e.qodefOnWindowScroll = t, p(document).ready(o), p(window).on("load", a), p(window).scroll(t)
}(jQuery),
function(e) {
    "use strict";
    var o = {};

    function a() {
        d()
    }

    function t() {
        d()
    }

    function d() {
        var o, a, t, d, n, i, s;
        qodef.body.hasClass("qodef-header-divided") && (o = e(".qodef-menu-area, .qodef-sticky-header"), a = o.width(), t = parseInt(o.find(".qodef-vertical-align-containers").css("paddingLeft"), 10), d = e(".qodef-main-menu > ul > li > a"), n = 0, i = o.find(".qodef-logo-wrapper .qodef-normal-logo"), s = 0, o.waitForImages(function() {
            o.find(".qodef-grid").length && (a = o.find(".qodef-grid").outerWidth()), d.length && (n = parseInt(d.css("paddingLeft"), 10)), i.length && (s = i.width() / 2);
            var e = Math.round(a / 2 - n - s - t);
            o.find(".qodef-position-left").width(e), o.find(".qodef-position-right").width(e), o.css("opacity", 1), "function" == typeof qodef.modules.header.qodefSetDropDownMenuPosition && qodef.modules.header.qodefSetDropDownMenuPosition(), "function" == typeof qodef.modules.header.qodefSetDropDownWideMenuPosition && qodef.modules.header.qodefSetDropDownWideMenuPosition()
        }))
    }(qodef.modules.headerDivided = o).qodefOnDocumentReady = a, o.qodefOnWindowResize = t, e(document).ready(a), e(window).resize(t)
}(jQuery),
function(i) {
    "use strict";
    var e = {};

    function o() {
        a().init()
    }(qodef.modules.headerVertical = e).qodefOnDocumentReady = o, i(document).ready(o);
    var a = function() {
        function o() {
            a.hasClass("qodef-with-scroll") && qodef.modules.common.qodefInitPerfectScrollbar().init(a)
        }
        var a = i(".qodef-vertical-menu-area");
        return {
            init: function() {
                var t, d, n, e;
                a.length && ((e = a.find(".qodef-vertical-menu")).hasClass("qodef-vertical-dropdown-below") ? (n = e.find("ul li.menu-item-has-children")).each(function() {
                    var o = i(this).find(" > .second, > ul"),
                        a = this,
                        t = i(this).find("> a"),
                        d = "fast";
                    t.on("click tap", function(e) {
                        e.preventDefault(), e.stopPropagation(), o.is(":visible") ? (i(a).removeClass("open"), o.slideUp(d)) : (t.parent().parent().children().hasClass("open") && t.parent().parent().parent().hasClass("qodef-vertical-menu") ? (i(this).parent().parent().children().removeClass("open"), i(this).parent().parent().children().find(" > .second").slideUp(d)) : (i(this).parents("li").hasClass("open") || (n.removeClass("open"), n.find(" > .second, > ul").slideUp(d)), i(this).parent().parent().children().hasClass("open") && (i(this).parent().parent().children().removeClass("open"), i(this).parent().parent().children().find(" > .second, > ul").slideUp(d))), i(a).addClass("open"), o.slideDown("slow"))
                    })
                }) : e.hasClass("qodef-vertical-dropdown-side") && (t = e.find("ul li.menu-item-has-children"), d = t.find(" > .second > .inner > ul, > ul"), t.each(function() {
                    var o = i(this).find(" > .second > .inner > ul, > ul"),
                        a = this;
                    Modernizr.touch ? i(this).find("> a").on("click tap", function(e) {
                        e.preventDefault(), e.stopPropagation(), o.hasClass("qodef-float-open") ? (o.removeClass("qodef-float-open"), i(a).removeClass("open")) : (i(this).parents("li").hasClass("open") || (t.removeClass("open"), d.removeClass("qodef-float-open")), o.addClass("qodef-float-open"), i(a).addClass("open"))
                    }) : i(this).hoverIntent({
                        over: function() {
                            o.addClass("qodef-float-open"), i(a).addClass("open")
                        },
                        out: function() {
                            o.removeClass("qodef-float-open"), i(a).removeClass("open")
                        },
                        timeout: 50
                    })
                })), o())
            }
        }
    }
}(jQuery),
function(i) {
    "use strict";
    var e = {};

    function o() {
        ! function() {
            var e = i(".qodef-mobile-header .qodef-mobile-menu-opener, .qodef-close-mobile-side-area-holder"),
                o = i(".qodef-mobile-header .qodef-mobile-side-area"),
                a = i('.qodef-mobile-nav .mobile_arrow, .qodef-mobile-nav h6, .qodef-mobile-nav a[href*="#"]');
            e.length && o.length && e.on("tap click", function(e) {
                e.stopPropagation(), e.preventDefault(), o.hasClass("opened") ? o.removeClass("opened") : o.addClass("opened")
            });
            a.length && a.each(function() {
                i(this).on("tap click", function(e) {
                    var o, a, t = i(this).nextAll("ul").first();
                    t.length && (e.preventDefault(), e.stopPropagation(), a = (o = i(this).parent("li")).siblings("li").children("ul"), t.is(":visible") ? (t.slideUp(200), o.removeClass("qodef-opened")) : (t.slideDown(200), o.addClass("qodef-opened"), console.log(a), a.slideUp(200), o.siblings("li").removeClass("qodef-opened")))
                })
            });
            i(".qodef-mobile-nav a, .qodef-mobile-logo-wrapper a").on("click tap", function(e) {
                "http://#" !== i(this).attr("href") && i(this).attr("href")
            })
        }(), t(),
            function() {
                var o = i(".qodef-mobile-header"),
                    e = (o.find(".qodef-mobile-menu-opener"), o.length ? o.outerHeight() : 0),
                    a = i(".qodef-mobile-header .qodef-mobile-side-area");
                qodef.body.hasClass("qodef-content-is-behind-header") && 0 < e && qodef.windowWidth <= 1024 && i(".qodef-content").css("marginTop", -e); {
                    var t, d, n;
                    qodef.body.hasClass("qodef-sticky-up-mobile-header") && (d = i("#wpadminbar"), n = i(document).scrollTop(), t = e + qodefGlobalVars.vars.qodefAddForAdminBar, i(window).scroll(function() {
                        var e = i(document).scrollTop();
                        t < e && !a.hasClass("opened") ? o.addClass("qodef-animate-mobile-header") : o.removeClass("qodef-animate-mobile-header"), n < e && t < e || e < t || a.hasClass("opened") ? (o.removeClass("mobile-header-appear"), o.css("margin-bottom", 0), d.length && o.find(".qodef-mobile-header-inner").css("top", 0)) : (o.addClass("mobile-header-appear"), o.css("margin-bottom", t)), n = i(document).scrollTop()
                    }))
                }
            }()
    }

    function a() {
        t()
    }

    function t() {
        var e, o, a, t;
        qodef.windowWidth <= 1024 && (o = (e = i(".qodef-mobile-header").find(".qodef-mobile-side-area-inner")).outerHeight(), t = (a = qodef.windowHeight - 100) < o ? a : o, e.length && (e.height(t), qodef.modules.common.qodefInitPerfectScrollbar().init(e)))
    }(qodef.modules.mobileHeader = e).qodefOnDocumentReady = o, e.qodefOnWindowResize = a, i(document).ready(o), i(window).resize(a)
}(jQuery),
function(c) {
    "use strict";
    var e = {};

    function o() {
        1024 < qodef.windowWidth && function() {
            var o, e, a = c(".qodef-page-header"),
                t = c(".qodef-sticky-header"),
                d = c(".qodef-fixed-wrapper"),
                n = d.children(".qodef-menu-area").outerHeight(),
                i = c(".qodef-slider"),
                s = i.length ? i.outerHeight() : 0,
                r = d.length ? d.offset().top - qodefGlobalVars.vars.qodefAddForAdminBar : 0;
            switch (!0) {
                case qodef.body.hasClass("qodef-sticky-header-on-scroll-up"):
                    qodef.modules.stickyHeader.behaviour = "qodef-sticky-header-on-scroll-up";
                    var l = c(document).scrollTop();
                    o = parseInt(qodefGlobalVars.vars.qodefTopBarHeight) + parseInt(qodefGlobalVars.vars.qodefLogoAreaHeight) + parseInt(qodefGlobalVars.vars.qodefMenuAreaHeight) + parseInt(qodefGlobalVars.vars.qodefStickyHeaderHeight), (e = function() {
                        var e = c(document).scrollTop();
                        l < e && o < e || e < o ? (qodef.modules.stickyHeader.isStickyVisible = !1, t.removeClass("header-appear").find(".qodef-main-menu .second").removeClass("qodef-drop-down-start"), qodef.body.removeClass("qodef-sticky-header-appear")) : (qodef.modules.stickyHeader.isStickyVisible = !0, t.addClass("header-appear"), qodef.body.addClass("qodef-sticky-header-appear")), l = c(document).scrollTop()
                    })(), c(window).scroll(function() {
                        e()
                    });
                    break;
                case qodef.body.hasClass("qodef-sticky-header-on-scroll-down-up"):
                    qodef.modules.stickyHeader.behaviour = "qodef-sticky-header-on-scroll-down-up", 0 !== qodefPerPageVars.vars.qodefStickyScrollAmount ? qodef.modules.stickyHeader.stickyAppearAmount = parseInt(qodefPerPageVars.vars.qodefStickyScrollAmount) : qodef.modules.stickyHeader.stickyAppearAmount = parseInt(qodefGlobalVars.vars.qodefTopBarHeight) + parseInt(qodefGlobalVars.vars.qodefLogoAreaHeight) + parseInt(qodefGlobalVars.vars.qodefMenuAreaHeight) + parseInt(s), (e = function() {
                        qodef.scroll < qodef.modules.stickyHeader.stickyAppearAmount ? (qodef.modules.stickyHeader.isStickyVisible = !1, t.removeClass("header-appear").find(".qodef-main-menu .second").removeClass("qodef-drop-down-start"), qodef.body.removeClass("qodef-sticky-header-appear")) : (qodef.modules.stickyHeader.isStickyVisible = !0, t.addClass("header-appear"), qodef.body.addClass("qodef-sticky-header-appear"))
                    })(), c(window).scroll(function() {
                        e()
                    });
                    break;
                case qodef.body.hasClass("qodef-fixed-on-scroll"):
                    qodef.modules.stickyHeader.behaviour = "qodef-fixed-on-scroll";
                    var f = function() {
                        qodef.scroll <= r ? (d.removeClass("fixed"), qodef.body.removeClass("qodef-fixed-header-appear"), a.css("margin-bottom", "0")) : (d.addClass("fixed"), qodef.body.addClass("qodef-fixed-header-appear"), a.css("margin-bottom", n + "px"))
                    };
                    f(), c(window).scroll(function() {
                        f()
                    })
            }
        }()
    }(qodef.modules.stickyHeader = e).isStickyVisible = !1, e.stickyAppearAmount = 0, e.behaviour = "", e.qodefOnDocumentReady = o, c(document).ready(o)
}(jQuery),
function(u) {
    "use strict";
    var e = {};

    function o() {
        ! function() {
            {
                var e;
                !qodef.body.hasClass("qodef-search-covers-header") || 0 < (e = u("a.qodef-search-opener")).length && e.each(function() {
                    u(this).on("click", function(e) {
                        e.preventDefault();
                        var o, a = u(this),
                            t = u(".qodef-page-header"),
                            d = u(".qodef-top-bar"),
                            n = t.find(".qodef-fixed-wrapper.fixed"),
                            i = u(".qodef-mobile-header"),
                            s = u(".qodef-search-cover"),
                            r = !!a.parents(".qodef-top-bar").length,
                            l = !!a.parents(".qodef-fixed-wrapper.fixed").length,
                            f = !!a.parents(".qodef-sticky-header").length,
                            c = !!a.parents(".qodef-mobile-header").length;
                        s.removeClass("qodef-is-active"), r ? (o = d.outerHeight(), t.children(".qodef-search-cover").addClass("qodef-is-active qodef-opener-in-top-header")) : l ? (o = n.outerHeight(), t.children(".qodef-search-cover").addClass("qodef-is-active")) : f ? (o = t.find(".qodef-sticky-header").outerHeight() - 1, t.children(".qodef-search-cover").addClass("qodef-is-active")) : c ? (o = i.hasClass("mobile-header-appear") ? i.children(".qodef-mobile-header-inner").outerHeight() : i.outerHeight(), i.find(".qodef-search-cover").addClass("qodef-is-active")) : (o = t.outerHeight(), t.children(".qodef-search-cover").addClass("qodef-is-active")), s.hasClass("qodef-is-active") && s.height(o).stop(!0).fadeIn(300).find('input[type="text"]').focus(), s.find(".qodef-search-close").on("click", function(e) {
                            e.preventDefault(), s.stop(!0).fadeOut(300, function() {
                                s.hasClass("qodef-opener-in-top-header") && s.removeClass("qodef-opener-in-top-header")
                            }), s.removeClass("qodef-is-active")
                        }), s.blur(function() {
                            s.stop(!0).fadeOut(300, function() {
                                s.hasClass("qodef-opener-in-top-header") && s.removeClass("qodef-opener-in-top-header")
                            }), s.removeClass("qodef-is-active")
                        }), u(window).scroll(function() {
                            s.stop(!0).fadeOut(300, function() {
                                s.hasClass("qodef-opener-in-top-header") && s.removeClass("qodef-opener-in-top-header")
                            }), s.removeClass("qodef-is-active")
                        })
                    })
                })
            }
        }()
    }(qodef.modules.searchCoversHeader = e).qodefOnDocumentReady = o, u(document).ready(o)
}(jQuery),
function(f) {
    "use strict";
    var e = {};

    function o() {
        function o(e, o) {
            e.on("click", function() {
                qodef.windowWidth <= 768 && (e.hasClass("opened") ? (e.removeClass("opened"), o.slideUp()) : (e.addClass("opened"), o.slideDown()))
            })
        }
        var r, e, l, t;
        e = f(".qodef-pl-holder"), l = {}, t = function(o, d) {
            var e, n = o.find(".qodef-pl-outer"),
                a = qodef.modules.common.getLoadMoreData(o),
                i = o.find(".qodef-prl-loading");

            function t() {
                e.each(function() {
                    f(this).addClass("active"), setTimeout(function() {
                        e.removeClass("active")
                    }, 2300)
                })
            }! function(e, o) {
                for (var a in o) e[a] = o[a]
            }(l, d.data()), a.category = void 0 !== l.category ? l.category : "", a.metaKey = void 0 !== l.metaKey ? l.metaKey : "", n.addClass("qodef-ajax-loading"), i.fadeIn(), e = f(".qodef-peppe-spinner-image").find("g"), setTimeout(function() {
                t(), r = setInterval(function() {
                    t()
                }, 2500)
            }, 100);
            var s = qodef.modules.common.setLoadMoreAjaxData(a, "qodef_product_ajax_load_category");
            f.ajax({
                type: "POST",
                data: s,
                url: qodefGlobalVars.vars.qodefAjaxUrl,
                success: function(e) {
                    var t = f.parseJSON(e).html;
                    o.waitForImages(function() {
                        var e, o, a;
                        d.parent().siblings().find("a").removeClass("active"), d.addClass("active"), o = i, a = t, (e = n).html(a), clearInterval(r), o.fadeOut(), e.removeClass("qodef-ajax-loading")
                    })
                }
            })
        }, e.length && e.each(function() {
            var a, e = f(this);
            (a = e).find(".qodef-pl-categories a, .qodef-pl-ordering a").on("click", function(e) {
                e.preventDefault(), e.stopPropagation();
                var o = f(this);
                o.hasClass("active") || t(a, o)
            }), o(e.find(".qodef-pl-ordering-outer h6"), e.find(".qodef-pl-ordering")), o(e.find(".qodef-pl-categories-label"), e.find(".qodef-pl-categories-label").next("ul"))
        })
    }(qodef.modules.productList = e).qodefOnDocumentReady = o, f(document).ready(o)
}(jQuery),
function(n) {
    "use strict";

    function e() {
        n(document).on("click", ".qodef-like", function() {
            var o = n(this),
                e = o.attr("id"),
                a = o.data("post-id"),
                t = "";
            if (o.hasClass("liked")) return !1;
            void 0 !== o.data("type") && (t = o.data("type"));
            var d = {
                action: "donpeppe_core_action_like",
                likes_id: e,
                type: t,
                like_nonce: n("#qodef_like_nonce_" + a).val()
            };
            n.post(qodefGlobalVars.vars.qodefAjaxUrl, d, function(e) {
                o.html(e).addClass("liked").attr("title", "You already like this!")
            });
            return !1
        })
    }
    n(document).ready(e)
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function o() {
        function d(e, o) {
            for (var a = 0; a < e.length; a++) {
                var t = e[a];
                a < o ? n(t).addClass("active") : n(t).removeClass("active")
            }
        }
        n(".qodef-comment-form-rating").each(function() {
            var e = n(this),
                o = e.find(".qodef-rating"),
                a = o.val(),
                t = e.find(".qodef-star-rating");
            d(t, a), t.on("click", function() {
                o.val(n(this).data("value")).trigger("change")
            }), o.change(function() {
                a = o.val(), d(t, a)
            })
        })
    }(qodef.modules.rating = e).qodefOnDocumentReady = o, n(document).ready(o)
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = d(".qodef-accordion-holder");
        e.length && e.each(function() {
            var e, o, a, t = d(this);
            t.hasClass("qodef-accordion") && t.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content"
            }), t.hasClass("qodef-toggle") && (a = (o = (e = d(this)).find(".qodef-accordion-title")).next(), e.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), a.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), o.each(function() {
                var e = d(this);
                e.on("mouseenter", function() {
                    e.addClass("ui-state-hover")
                }), e.on("mouseleave", function() {
                    e.removeClass("ui-state-hover")
                }), e.on("click", function() {
                    e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), e.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                })
            }))
        })
    }(qodef.modules.accordions = e).qodefInitAccordions = a, e.qodefOnDocumentReady = o, d(document).ready(o)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = r(".qodef-banner-holder"),
            o = "",
            s = "";
        e.length && (e.each(function() {
            var e = r(this),
                o = "",
                a = "",
                t = "",
                d = "",
                n = "",
                i = "";
            void 0 !== e.data("content-class") && !1 !== e.data("content-class") && (o = e.data("content-class")), void 0 !== e.data("1400-1600") && !1 !== e.data("1400-1600") && (a = e.data("1400-1600")), void 0 !== e.data("1025-1399") && !1 !== e.data("1025-1399") && (t = e.data("1025-1399")), void 0 !== e.data("769-1024") && !1 !== e.data("769-1024") && (d = e.data("769-1024")), void 0 !== e.data("681-768") && !1 !== e.data("681-768") && (n = e.data("681-768")), void 0 !== e.data("680") && !1 !== e.data("680") && (i = e.data("680")), (a.length || t.length || d.length || n.length || i.length || "".length) && (a.length && (s += "@media only screen and (min-width: 1400px) and (max-width: 1600px) {.qodef-banner-holder .qodef-banner-text-holder." + o + " { padding: " + a + " !important; } }"), t.length && (s += "@media only screen and (min-width: 1025px) and (max-width: 1399px) {.qodef-banner-holder .qodef-banner-text-holder." + o + " { padding: " + t + " !important; } }"), d.length && (s += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.qodef-banner-holder .qodef-banner-text-holder." + o + " { padding: " + d + " !important; } }"), n.length && (s += "@media only screen and (min-width: 681px) and (max-width: 768px) {.qodef-banner-holder .qodef-banner-text-holder." + o + " { padding: " + n + " !important; } }"), i.length && (s += "@media only screen and (max-width: 680px) {.qodef-banner-holder .qodef-banner-text-holder." + o + " { padding: " + i + " !important; } }"))
        }), s.length && (o = '<style type="text/css">' + s + "</style>"), o.length && r("head").append(o))
    }(qodef.modules.banner = e).qodefInitBannerResponsiveStyle = a, e.qodefOnDocumentReady = o, r(document).ready(o)
}(jQuery),
function(u) {
    "use strict";
    var e = {};

    function o() {
        t().init()
    }

    function a() {
        var e;
        (e = u(".qodef-btn-solid")).length && e.each(function() {
            var e = u(this);
            e.append('<div class="qodef-btn-fill-color"></div>');
            var o = e.find(".qodef-btn-fill-color");
            o.length && (setTimeout(function() {
                o.height(e.outerHeight())
            }, 100), "undefined" !== e.data("hover-bg-color") && o.css("background-color", e.data("hover-bg-color")))
        })
    }(qodef.modules.button = e).qodefButton = t, e.qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, u(document).ready(o), u(window).on("load", a);
    var t = function() {
        var e = u(".qodef-btn");
        return {
            init: function() {
                e.length && e.each(function() {
                    var e, o, a, t, d, n, i, s, r, l, f, c;
                    void 0 !== (e = u(this)).data("hover-color") && (o = function(e) {
                        e.data.button.css("color", e.data.color)
                    }, a = e.css("color"), t = e.data("hover-color"), e.on("mouseenter", {
                        button: e,
                        color: t
                    }, o), e.on("mouseleave", {
                        button: e,
                        color: a
                    }, o)), void 0 !== (d = u(this)).data("hover-bg-color") && (n = function(e) {
                        e.data.button.css("background-color", e.data.color)
                    }, i = d.css("background-color"), s = d.data("hover-bg-color"), d.hasClass("qodef-btn-solid") || (d.on("mouseenter", {
                        button: d,
                        color: s
                    }, n), d.on("mouseleave", {
                        button: d,
                        color: i
                    }, n))), void 0 !== (r = u(this)).data("hover-border-color") && (l = function(e) {
                        e.data.button.css("border-color", e.data.color)
                    }, f = r.css("borderTopColor"), c = r.data("hover-border-color"), r.on("mouseenter", {
                        button: r,
                        color: c
                    }, l), r.on("mouseleave", {
                        button: r,
                        color: f
                    }, l))
                })
            }
        }
    }
}(jQuery),
function(q) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var d, n, i, s, r, l, f, c, u, h, p, e = q(".qodef-countdown"),
            m = (new Date).getMonth();
        e.length && e.each(function() {
            var e, o, a = q(this).attr("id"),
                t = q("#" + a);
            d = t.data("year"), n = t.data("month"), i = t.data("day"), s = t.data("hour"), r = t.data("minute"), l = t.data("timezone"), f = t.data("month-label"), c = t.data("day-label"), u = t.data("hour-label"), h = t.data("minute-label"), p = t.data("second-label"), e = t.data("digit-size"), o = t.data("label-size"), m !== n && --n, t.countdown({
                until: new Date(d, n, i, s, r, 44),
                labels: ["", f, "", c, u, h, p],
                format: "ODHMS",
                timezone: l,
                padZeroes: !0,
                onTick: function() {
                    t.find(".countdown-amount").css({
                        "font-size": e + "px",
                        "line-height": e + "px"
                    }), t.find(".countdown-period").css({
                        "font-size": o + "px"
                    })
                }
            })
        })
    }(qodef.modules.countdown = e).qodefInitCountdown = a, e.qodefOnDocumentReady = o, q(document).ready(o)
}(jQuery),
function(t) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = t(".qodef-counter-holder");
        e.length && e.each(function() {
            var o = t(this),
                a = o.find(".qodef-counter");
            o.appear(function() {
                var e;
                o.css("opacity", "1"), a.hasClass("qodef-zero-counter") ? (e = parseFloat(a.text()), a.countTo({
                    from: 0,
                    to: e,
                    speed: 1500,
                    refreshInterval: 100
                })) : a.absoluteCounter({
                    speed: 2e3,
                    fadeInDelay: 1e3
                })
            }, {
                accX: 0,
                accY: qodefGlobalVars.vars.qodefElementAppearAmount
            })
        })
    }(qodef.modules.counter = e).qodefInitCounter = a, e.qodefOnDocumentReady = o, t(document).ready(o)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function o() {
        t()
    }

    function a() {
        d()
    }

    function t() {
        var e = r(".qodef-custom-font-holder");
        e.length && e.each(function() {
            var e = r(this),
                o = "",
                a = "",
                t = "",
                d = "",
                n = "",
                i = "",
                s = "";
            void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (o = e.data("item-class")), void 0 !== e.data("font-size-1366") && !1 !== e.data("font-size-1366") && (a += "font-size: " + e.data("font-size-1366") + " !important;"), void 0 !== e.data("font-size-1024") && !1 !== e.data("font-size-1024") && (t += "font-size: " + e.data("font-size-1024") + " !important;"), void 0 !== e.data("font-size-768") && !1 !== e.data("font-size-768") && (d += "font-size: " + e.data("font-size-768") + " !important;"), void 0 !== e.data("font-size-680") && !1 !== e.data("font-size-680") && (n += "font-size: " + e.data("font-size-680") + " !important;"), void 0 !== e.data("line-height-1366") && !1 !== e.data("line-height-1366") && (a += "line-height: " + e.data("line-height-1366") + " !important;"), void 0 !== e.data("line-height-1024") && !1 !== e.data("line-height-1024") && (t += "line-height: " + e.data("line-height-1024") + " !important;"), void 0 !== e.data("line-height-768") && !1 !== e.data("line-height-768") && (d += "line-height: " + e.data("line-height-768") + " !important;"), void 0 !== e.data("line-height-680") && !1 !== e.data("line-height-680") && (n += "line-height: " + e.data("line-height-680") + " !important;"), (a.length || t.length || d.length || n.length) && (a.length && (s += "@media only screen and (max-width: 1366px) {.qodef-custom-font-holder." + o + " { " + a + " } }"), t.length && (s += "@media only screen and (max-width: 1024px) {.qodef-custom-font-holder." + o + " { " + t + " } }"), d.length && (s += "@media only screen and (max-width: 768px) {.qodef-custom-font-holder." + o + " { " + d + " } }"), n.length && (s += "@media only screen and (max-width: 680px) {.qodef-custom-font-holder." + o + " { " + n + " } }")), s.length && (i = '<style type="text/css">' + s + "</style>"), i.length && r("head").append(i)
        })
    }

    function d() {
        var e = r(".qodef-cf-typed");
        e.length && e.each(function() {
            var e = r(this),
                o = e.parent(".qodef-cf-typed-wrap").parent(".qodef-custom-font-holder"),
                a = [],
                t = e.find(".qodef-cf-typed-1").text(),
                d = e.find(".qodef-cf-typed-2").text(),
                n = e.find(".qodef-cf-typed-3").text(),
                i = e.find(".qodef-cf-typed-4").text();
            t.length && a.push(t), d.length && a.push(d), n.length && a.push(n), i.length && a.push(i), o.appear(function() {
                e.typed({
                    strings: a,
                    typeSpeed: 90,
                    backDelay: 700,
                    loop: !0,
                    contentType: "text",
                    loopCount: !1,
                    cursorChar: "_"
                })
            }, {
                accX: 0,
                accY: qodefGlobalVars.vars.qodefElementAppearAmount
            })
        })
    }(qodef.modules.customFont = e).qodefCustomFontResize = t, e.qodefCustomFontTypeOut = d, e.qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, r(document).ready(o), r(window).on("load", a)
}(jQuery),
function(l) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = l(".qodef-elements-holder");
        e.length && e.each(function() {
            var e = l(this).children(".qodef-eh-item"),
                o = "",
                r = "";
            e.each(function() {
                var e, o = l(this),
                    a = "",
                    t = "",
                    d = "",
                    n = "",
                    i = "",
                    s = "";
                void 0 !== o.data("item-class") && !1 !== o.data("item-class") && (a = o.data("item-class")), void 0 !== o.data("1400-1600") && !1 !== o.data("1400-1600") && (t = o.data("1400-1600")), void 0 !== o.data("1025-1399") && !1 !== o.data("1025-1399") && (d = o.data("1025-1399")), void 0 !== o.data("769-1024") && !1 !== o.data("769-1024") && (n = o.data("769-1024")), void 0 !== o.data("681-768") && !1 !== o.data("681-768") && (i = o.data("681-768")), void 0 !== o.data("680") && !1 !== o.data("680") && (s = o.data("680")), (t.length || d.length || n.length || i.length || s.length || "".length) && (t.length && (r += "@media only screen and (min-width: 1400px) and (max-width: 1600px) {.qodef-eh-item-content." + a + " { padding: " + t + " !important; } }"), d.length && (r += "@media only screen and (min-width: 1025px) and (max-width: 1399px) {.qodef-eh-item-content." + a + " { padding: " + d + " !important; } }"), n.length && (r += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.qodef-eh-item-content." + a + " { padding: " + n + " !important; } }"), i.length && (r += "@media only screen and (min-width: 681px) and (max-width: 768px) {.qodef-eh-item-content." + a + " { padding: " + i + " !important; } }"), s.length && (r += "@media only screen and (max-width: 680px) {.qodef-eh-item-content." + a + " { padding: " + s + " !important; } }")), "function" != typeof qodef.modules.common.qodefOwlSlider || (e = o.find(".qodef-owl-slider")).length && setTimeout(function() {
                    e.trigger("refresh.owl.carousel")
                }, 100)
            }), r.length && (o = '<style type="text/css">' + r + "</style>"), o.length && l("head").append(o)
        })
    }(qodef.modules.elementsHolder = e).qodefInitElementsHolderResponsiveStyle = a, e.qodefOnDocumentReady = o, l(document).ready(o)
}(jQuery),
function(c) {
    "use strict";
    var e = {};

    function o() {
        var e;
        (e = c(".qodef-event-list-holder .qodef-event-list-item-holder")).length && e.each(function() {
            var e = c(this).find(".qodef-event-list-item-title a");
            e.on("mouseenter", function() {
                c(this).closest(".qodef-event-list-item-holder").addClass("qodef-event-active-hover")
            }), e.on("mouseleave", function() {
                c(this).closest(".qodef-event-list-item-holder").removeClass("qodef-event-active-hover")
            })
        })
    }

    function a() {
        var e, d, l, f;
        e = c(".qodef-event-list-holder"), d = function(a, e) {
            var t, d = a.find(".qodef-event-list");
            void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (t = a.data("max-num-pages")), a.data("next-page", e);
            var o, n = qodef.modules.common.getLoadMoreData(a),
                i = a.find(".qodef-events-pag-loading"),
                s = n.nextPage,
                r = a.find('input[name*="qodef_events_load_more_nonce_"]');
            n.events_load_more_id = r.attr("name").substring(r.attr("name").length - 4, r.attr("name").length), n.events_load_more_nonce = r.val(), s <= t && (i.addClass("qodef-showing"), o = qodef.modules.common.setLoadMoreAjaxData(n, "donpeppe_select_event_list_shortcode_pagination"), c.ajax({
                type: "POST",
                data: o,
                url: qodefGlobalVars.vars.qodefAjaxUrl,
                success: function(e) {
                    a.data("next-page", s);
                    var o = c.parseJSON(e).html;
                    l(a, t, s), a.waitForImages(function() {
                        f(d, i, o)
                    })
                }
            }))
        }, l = function(e, o, a) {
            var t = e.find(".qodef-events-pagination"),
                d = t.find("li.qodef-pag-number"),
                n = t.find("li.qodef-pag-prev a, .qodef-events-prev-label a"),
                i = t.find("li.qodef-pag-next a, .qodef-events-next-label a");
            d.removeClass("qodef-pag-active"), d.eq(a - 1).addClass("qodef-pag-active"), n.data("paged", a - 1), i.data("paged", a + 1), 1 < a ? n.css({
                opacity: "1"
            }) : n.css({
                opacity: "0"
            }), a === o ? i.css({
                opacity: "0"
            }) : i.css({
                opacity: "1"
            })
        }, f = function(e, o, a) {
            o.removeClass("qodef-showing"), e.html(a)
        }, e.length && e.each(function() {
            var t, e, o = c(this);
            (e = (t = o).find(".qodef-events-pagination li")).length && e.each(function() {
                var o = c(this).children("a"),
                    a = 1;
                o.on("click", function(e) {
                    e.preventDefault(), e.stopPropagation(), void 0 !== o.data("paged") && !1 !== o.data("paged") && (a = o.data("paged")), d(t, a)
                })
            })
        })
    }(qodef.modules.eventList = e).qodefOnDocumentReady = o, e.qodefOnWindowLoad = a, c(document).ready(o), c(window).on("load", a)
}(jQuery),
function(m) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = m(".qodef-google-map");
        e.length && e.each(function() {
            var e, o, a, t, d, n, i, s, r, l, f, c, u = m(this),
                h = !1,
                p = "";
            void 0 !== u.data("snazzy-map-style") && "yes" === u.data("snazzy-map-style") && (h = !0, o = (e = u.parent().find(".qodef-snazzy-map")).val(), e.length && o.length && (p = JSON.parse(o.replace(/`{`/g, "[").replace(/`}`/g, "]").replace(/``/g, '"').replace(/`/g, "")))), void 0 !== u.data("custom-map-style") && (a = u.data("custom-map-style")), void 0 !== u.data("color-overlay") && !1 !== u.data("color-overlay") && (t = u.data("color-overlay")), void 0 !== u.data("saturation") && !1 !== u.data("saturation") && (d = u.data("saturation")), void 0 !== u.data("lightness") && !1 !== u.data("lightness") && (n = u.data("lightness")), void 0 !== u.data("zoom") && !1 !== u.data("zoom") && (i = u.data("zoom")), void 0 !== u.data("pin") && !1 !== u.data("pin") && (s = u.data("pin")), void 0 !== u.data("height") && !1 !== u.data("height") && (r = u.data("height")), void 0 !== u.data("unique-id") && !1 !== u.data("unique-id") && (l = u.data("unique-id")), void 0 !== u.data("scroll-wheel") && (f = u.data("scroll-wheel")), void 0 !== u.data("addresses") && !1 !== u.data("addresses") && (c = u.data("addresses")),
                function(e, o, a, t, d, n, i, s, r, l, f, c, u, h) {
                    if ("object" != typeof google) return;
                    var p, m = [];
                    m = e && o.length ? o : [{
                        stylers: [{
                            hue: t
                        }, {
                            saturation: d
                        }, {
                            lightness: n
                        }, {
                            gamma: 1
                        }]
                    }];
                    p = e || "yes" === a ? "qodef-style" : google.maps.MapTypeId.ROADMAP;
                    i = "yes" === i;
                    var q = new google.maps.StyledMapType(m, {
                        name: "Google Map"
                    });
                    u = new google.maps.Geocoder;
                    var g = new google.maps.LatLng(-34.397, 150.644);
                    isNaN(l) || (l += "px");
                    var v, b = {
                        zoom: s,
                        scrollwheel: i,
                        center: g,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        },
                        scaleControl: !1,
                        scaleControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        streetViewControl: !1,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: !1,
                        panControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl: !1,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "qodef-style"],
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeId: p
                    };
                    for ((c = new google.maps.Map(document.getElementById(r), b)).mapTypes.set("qodef-style", q), v = 0; v < h.length; ++v) ! function(t, d, n, e) {
                        if ("" === t) return;
                        var o = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + t + "</p></div></div>",
                            i = new google.maps.InfoWindow({
                                content: o
                            });
                        e.geocode({
                            address: t
                        }, function(e, o) {
                            var a;
                            o === google.maps.GeocoderStatus.OK && (n.setCenter(e[0].geometry.location), a = new google.maps.Marker({
                                map: n,
                                position: e[0].geometry.location,
                                icon: d,
                                title: t.store_title
                            }), google.maps.event.addListener(a, "click", function() {
                                i.open(n, a)
                            }), google.maps.event.addDomListener(window, "resize", function() {
                                n.setCenter(e[0].geometry.location)
                            }))
                        })
                    }(h[v], f, c, u);
                    document.getElementById(r).style.height = l
                }(h, p, a, t, d, n, f, i, "qodef-map-" + l, r, s, "map_" + l, "geocoder_" + l, c)
        })
    }(qodef.modules.googleMap = e).qodefShowGoogleMap = a, e.qodefOnDocumentReady = o, m(document).ready(o)
}(jQuery),
function(p) {
    "use strict";
    var e = {};

    function o() {
        a().init()
    }(qodef.modules.icon = e).qodefIcon = a, e.qodefOnDocumentReady = o, p(document).ready(o);
    var a = function() {
        var e = p(".qodef-icon-shortcode");
        return {
            init: function() {
                e.length && e.each(function() {
                    var e, o, a, t, d, n, i, s, r, l, f, c, u, h;
                    (e = p(this)).hasClass("qodef-icon-animation") && e.appear(function() {
                        e.parent(".qodef-icon-animation-holder").addClass("qodef-icon-animation-show")
                    }, {
                        accX: 0,
                        accY: qodefGlobalVars.vars.qodefElementAppearAmount
                    }), void 0 !== (o = p(this)).data("hover-color") && (a = function(e) {
                        e.data.icon.css("color", e.data.color)
                    }, t = o.find(".qodef-icon-element"), d = o.data("hover-color"), n = t.css("color"), "" !== d && (o.on("mouseenter", {
                        icon: t,
                        color: d
                    }, a), o.on("mouseleave", {
                        icon: t,
                        color: n
                    }, a))), void 0 !== (i = p(this)).data("hover-background-color") && (s = function(e) {
                        e.data.icon.css("background-color", e.data.color)
                    }, r = i.data("hover-background-color"), l = i.css("background-color"), "" !== r && (i.on("mouseenter", {
                        icon: i,
                        color: r
                    }, s), i.on("mouseleave", {
                        icon: i,
                        color: l
                    }, s))), void 0 !== (f = p(this)).data("hover-border-color") && (c = function(e) {
                        e.data.icon.css("border-color", e.data.color)
                    }, u = f.data("hover-border-color"), h = f.css("borderTopColor"), "" !== u && (f.on("mouseenter", {
                        icon: f,
                        color: u
                    }, c), f.on("mouseleave", {
                        icon: f,
                        color: h
                    }, c)))
                })
            }
        }
    }
}(jQuery),
function(o) {
    "use strict";
    var e = {};

    function a() {
        t().init()
    }(qodef.modules.iconListItem = e).qodefInitIconList = t, e.qodefOnDocumentReady = a, o(document).ready(a);
    var t = function() {
        var e = o(".qodef-animate-list");
        return {
            init: function() {
                e.length && e.each(function() {
                    var e;
                    e = o(this), setTimeout(function() {
                        e.appear(function() {
                            e.addClass("qodef-appeared")
                        }, {
                            accX: 0,
                            accY: qodefGlobalVars.vars.qodefElementAppearAmount
                        })
                    }, 30)
                })
            }
        }
    }
}(jQuery),
function(o) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = o(".qodef-pie-chart-holder");
        e.length && e.each(function() {
            var a = o(this),
                t = a.children(".qodef-pc-percentage"),
                d = "#d2401e",
                n = "#f7f7f7",
                i = 176;
            void 0 !== t.data("size") && "" !== t.data("size") && (i = t.data("size")), void 0 !== t.data("bar-color") && "" !== t.data("bar-color") && (d = t.data("bar-color")), void 0 !== t.data("track-color") && "" !== t.data("track-color") && (n = t.data("track-color")), t.appear(function() {
                var e, o;
                e = t.find(".qodef-pc-percent"), o = parseFloat(e.text()), e.countTo({
                    from: 0,
                    to: o,
                    speed: 1500,
                    refreshInterval: 50
                }), a.css("opacity", "1"), t.easyPieChart({
                    barColor: d,
                    trackColor: n,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 3,
                    animate: 1500,
                    size: i
                })
            }, {
                accX: 0,
                accY: qodefGlobalVars.vars.qodefElementAppearAmount
            })
        })
    }(qodef.modules.pieChart = e).qodefInitPieChart = t, e.qodefOnDocumentReady = a, o(document).ready(a)
}(jQuery),
function(i) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = i(".qodef-progress-bar");
        e.length && e.each(function() {
            var a = i(this),
                t = a.find(".qodef-pb-content"),
                d = a.find(".qodef-pb-percent"),
                n = t.data("percentage");
            a.appear(function() {
                var e, o;
                e = d, o = parseFloat(n), e.length && e.each(function() {
                    var e = i(this);
                    e.css("opacity", "1"), e.countTo({
                        from: 0,
                        to: o,
                        speed: 2e3,
                        refreshInterval: 50
                    })
                }), t.css("width", "0%").animate({
                    width: n + "%"
                }, 2e3), a.hasClass("qodef-pb-percent-floating") && d.css("left", "0%").animate({
                    left: n + "%"
                }, 2e3)
            })
        })
    }(qodef.modules.progressBar = e).qodefInitProgressBars = a, e.qodefOnDocumentReady = o, i(document).ready(o)
}(jQuery),
function(o) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = o(".qodef-ot-date");
        e.length && e.each(function() {
            o(this).datepicker({
                prevText: '<span class="arrow_carrot-left"></span>',
                nextText: '<span class="arrow_carrot-right"></span>'
            })
        })
    }(qodef.modules.reservationForm = e).qodefReservationDatePicker = t, e.qodefOnDocumentReady = a, o(document).ready(a)
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = n(".qodef-tabs");
        e.length && e.each(function() {
            var e = n(this);
            e.children(".qodef-tab-container").each(function(e) {
                e += 1;
                var o = n(this),
                    a = o.attr("id"),
                    t = o.parent().find(".qodef-tabs-nav li:nth-child(" + e + ") a"),
                    d = t.attr("href"); - 1 < (a = "#" + a).indexOf(d) && t.attr("href", a)
            }), e.tabs(), n(".qodef-tabs a.qodef-external-link").unbind("click")
        })
    }(qodef.modules.tabs = e).qodefInitTabs = a, e.qodefOnDocumentReady = o, n(document).ready(o)
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function o() {
        a()
    }

    function a() {
        var e = d(".qodef-testimonials-holder");
        e.length && e.each(function() {
            var e, t = d(this),
                o = t.find(".qodef-owl-slider");
            e = t.find(".owl-item.active").find(".qodef-testimonial-content").data("slide-index"), d(".qodef-testimonial-image[data-slide-index=" + e + "]").addClass("active"), o.owlCarousel(), o.on("translate.owl.carousel", function() {
                setTimeout(function() {
                    var e, o, a;
                    e = t.find(".owl-item.active").find(".qodef-testimonial-content").data("slide-index"), o = d(".qodef-testimonial-image.active"), a = d(".qodef-testimonial-image[data-slide-index=" + e + "]"), o.removeClass("active"), a.addClass("active")
                }, 100)
            })
        })
    }(qodef.modules.testimonials = e).qodefInitTestimonials = a, e.qodefOnDocumentReady = o, d(document).ready(o)
}(jQuery);;
! function(d, l) {
    "use strict";
    var e = !1,
        o = !1;
    if (l.querySelector)
        if (d.addEventListener) e = !0;
    if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
        if (d.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
                                c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
                            for (r = 0; r < c.length; r++) c[r].style.display = "none";
                            for (r = 0; r < o.length; r++)
                                if (a = o[r], e.source === a.contentWindow) {
                                    if (a.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        a.height = i
                                    }
                                    if ("link" === t.message)
                                        if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
                                            if (l.activeElement === a) d.top.location.href = t.value
                                }
                        }
            }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

    function t() {
        if (!o) {
            o = !0;
            var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                s = !!navigator.userAgent.match(/Trident.*rv:11\./),
                n = l.querySelectorAll("iframe.wp-embedded-content");
            for (t = 0; t < n.length; t++) {
                if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
                if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
            }
        }
    }
}(window, document);;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            if (jQuery.ui) {
                var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function(index) {
                    var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = [];
                    if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                            show: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            },
                            activate: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            }
                        }), interval && 0 < interval) try {
                        $tabs.tabs("rotate", 1e3 * interval)
                    } catch (err) {
                        window.console && window.console.warn && console.warn("tabs behaviours error", err)
                    }
                    jQuery(this).find(".wpb_tab").each(function() {
                        tabs_array.push(this.id)
                    }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                        return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                    }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                        var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                    })
                })
            }
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                    header: "> div > h3",
                    autoHeight: !1,
                    heightStyle: "content",
                    active: active_tab,
                    collapsible: collapsible,
                    navigation: !0,
                    activate: vc_accordionActivate,
                    change: function(event, ui) {
                        void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                    }
                }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).bind("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var $this = jQuery(this);
                if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                    $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 900;
                    var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({
                        "margin-right": carousel_li.css("margin-left"),
                        "margin-left": 0
                    });
                    var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                        screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                            location.reload()
                        }, 20)
                    })
                }
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, this_element = jQuery(this);
                if (this_element.hasClass("wpb_slider_nivo")) {
                    var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                        effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                        slices: 15,
                        boxCols: 8,
                        boxRows: 4,
                        animSpeed: 800,
                        pauseTime: sliderTimeout,
                        startSlide: 0,
                        directionNav: !0,
                        directionNavHide: !0,
                        controlNav: !0,
                        keyboardNav: !1,
                        pauseOnHover: !0,
                        manualAdvance: !1,
                        prevText: "Prev",
                        nextText: "Next"
                    })
                } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var $el_full = $el.next(".vc_row-full-width");
                    if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                        var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width();
                        if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                                position: "relative",
                                left: offset,
                                "box-sizing": "border-box",
                                width: width
                            }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                            el: $el,
                            offset: offset,
                            marginLeft: el_margin_left,
                            marginRight: el_margin_right,
                            elFull: $el_full,
                            width: width
                        })
                    }
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
                var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
            }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            })
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            if (ui.newPanel.length && ui.newHeader.length) {
                var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                    jQuery(this).isotope("layout")
                })
            }
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) {
            if (void 0 === url) return !1;
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);;
(function() {
    function r() {}
    var n = this,
        t = n._,
        e = Array.prototype,
        o = Object.prototype,
        u = Function.prototype,
        i = e.push,
        c = e.slice,
        s = o.toString,
        a = o.hasOwnProperty,
        f = Array.isArray,
        l = Object.keys,
        p = u.bind,
        h = Object.create,
        v = function(n) {
            return n instanceof v ? n : this instanceof v ? void(this._wrapped = n) : new v(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : n._ = v, v.VERSION = "1.8.3";
    var y = function(u, i, n) {
            if (void 0 === i) return u;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return u.call(i, n)
                    };
                case 2:
                    return function(n, t) {
                        return u.call(i, n, t)
                    };
                case 3:
                    return function(n, t, r) {
                        return u.call(i, n, t, r)
                    };
                case 4:
                    return function(n, t, r, e) {
                        return u.call(i, n, t, r, e)
                    }
            }
            return function() {
                return u.apply(i, arguments)
            }
        },
        d = function(n, t, r) {
            return null == n ? v.identity : v.isFunction(n) ? y(n, t, r) : v.isObject(n) ? v.matcher(n) : v.property(n)
        };
    v.iteratee = function(n, t) {
        return d(n, t, 1 / 0)
    };

    function g(c, f) {
        return function(n) {
            var t = arguments.length;
            if (t < 2 || null == n) return n;
            for (var r = 1; r < t; r++)
                for (var e = arguments[r], u = c(e), i = u.length, o = 0; o < i; o++) {
                    var a = u[o];
                    f && void 0 !== n[a] || (n[a] = e[a])
                }
            return n
        }
    }

    function m(n) {
        if (!v.isObject(n)) return {};
        if (h) return h(n);
        r.prototype = n;
        var t = new r;
        return r.prototype = null, t
    }

    function b(t) {
        return function(n) {
            return null == n ? void 0 : n[t]
        }
    }
    var x = Math.pow(2, 53) - 1,
        _ = b("length"),
        j = function(n) {
            var t = _(n);
            return "number" == typeof t && 0 <= t && t <= x
        };

    function w(a) {
        return function(n, t, r, e) {
            t = y(t, e, 4);
            var u = !j(n) && v.keys(n),
                i = (u || n).length,
                o = 0 < a ? 0 : i - 1;
            return arguments.length < 3 && (r = n[u ? u[o] : o], o += a),
                function(n, t, r, e, u, i) {
                    for (; 0 <= u && u < i; u += a) {
                        var o = e ? e[u] : u;
                        r = t(r, n[o], o, n)
                    }
                    return r
                }(n, t, r, u, o, i)
        }
    }
    v.each = v.forEach = function(n, t, r) {
        var e, u;
        if (t = y(t, r), j(n))
            for (e = 0, u = n.length; e < u; e++) t(n[e], e, n);
        else {
            var i = v.keys(n);
            for (e = 0, u = i.length; e < u; e++) t(n[i[e]], i[e], n)
        }
        return n
    }, v.map = v.collect = function(n, t, r) {
        t = d(t, r);
        for (var e = !j(n) && v.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }, v.reduce = v.foldl = v.inject = w(1), v.reduceRight = v.foldr = w(-1), v.find = v.detect = function(n, t, r) {
        var e;
        if (void 0 !== (e = j(n) ? v.findIndex(n, t, r) : v.findKey(n, t, r)) && -1 !== e) return n[e]
    }, v.filter = v.select = function(n, e, t) {
        var u = [];
        return e = d(e, t), v.each(n, function(n, t, r) {
            e(n, t, r) && u.push(n)
        }), u
    }, v.reject = function(n, t, r) {
        return v.filter(n, v.negate(d(t)), r)
    }, v.every = v.all = function(n, t, r) {
        t = d(t, r);
        for (var e = !j(n) && v.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n)) return !1
        }
        return !0
    }, v.some = v.any = function(n, t, r) {
        t = d(t, r);
        for (var e = !j(n) && v.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n)) return !0
        }
        return !1
    }, v.contains = v.includes = v.include = function(n, t, r, e) {
        return j(n) || (n = v.values(n)), "number" == typeof r && !e || (r = 0), 0 <= v.indexOf(n, t, r)
    }, v.invoke = function(n, r) {
        var e = c.call(arguments, 2),
            u = v.isFunction(r);
        return v.map(n, function(n) {
            var t = u ? r : n[r];
            return null == t ? t : t.apply(n, e)
        })
    }, v.pluck = function(n, t) {
        return v.map(n, v.property(t))
    }, v.where = function(n, t) {
        return v.filter(n, v.matcher(t))
    }, v.findWhere = function(n, t) {
        return v.find(n, v.matcher(t))
    }, v.max = function(n, e, t) {
        var r, u, i = -1 / 0,
            o = -1 / 0;
        if (null == e && null != n)
            for (var a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++) r = n[a], i < r && (i = r);
        else e = d(e, t), v.each(n, function(n, t, r) {
            u = e(n, t, r), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, v.min = function(n, e, t) {
        var r, u, i = 1 / 0,
            o = 1 / 0;
        if (null == e && null != n)
            for (var a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++)(r = n[a]) < i && (i = r);
        else e = d(e, t), v.each(n, function(n, t, r) {
            ((u = e(n, t, r)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
        });
        return i
    }, v.shuffle = function(n) {
        for (var t, r = j(n) ? n : v.values(n), e = r.length, u = Array(e), i = 0; i < e; i++)(t = v.random(0, i)) !== i && (u[i] = u[t]), u[t] = r[i];
        return u
    }, v.sample = function(n, t, r) {
        return null == t || r ? (j(n) || (n = v.values(n)), n[v.random(n.length - 1)]) : v.shuffle(n).slice(0, Math.max(0, t))
    }, v.sortBy = function(n, e, t) {
        return e = d(e, t), v.pluck(v.map(n, function(n, t, r) {
            return {
                value: n,
                index: t,
                criteria: e(n, t, r)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (e < r || void 0 === r) return 1;
                if (r < e || void 0 === e) return -1
            }
            return n.index - t.index
        }), "value")
    };

    function A(o) {
        return function(e, u, n) {
            var i = {};
            return u = d(u, n), v.each(e, function(n, t) {
                var r = u(n, t, e);
                o(i, n, r)
            }), i
        }
    }
    v.groupBy = A(function(n, t, r) {
        v.has(n, r) ? n[r].push(t) : n[r] = [t]
    }), v.indexBy = A(function(n, t, r) {
        n[r] = t
    }), v.countBy = A(function(n, t, r) {
        v.has(n, r) ? n[r]++ : n[r] = 1
    }), v.toArray = function(n) {
        return n ? v.isArray(n) ? c.call(n) : j(n) ? v.map(n, v.identity) : v.values(n) : []
    }, v.size = function(n) {
        return null == n ? 0 : j(n) ? n.length : v.keys(n).length
    }, v.partition = function(n, e, t) {
        e = d(e, t);
        var u = [],
            i = [];
        return v.each(n, function(n, t, r) {
            (e(n, t, r) ? u : i).push(n)
        }), [u, i]
    }, v.first = v.head = v.take = function(n, t, r) {
        if (null != n) return null == t || r ? n[0] : v.initial(n, n.length - t)
    }, v.initial = function(n, t, r) {
        return c.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }, v.last = function(n, t, r) {
        if (null != n) return null == t || r ? n[n.length - 1] : v.rest(n, Math.max(0, n.length - t))
    }, v.rest = v.tail = v.drop = function(n, t, r) {
        return c.call(n, null == t || r ? 1 : t)
    }, v.compact = function(n) {
        return v.filter(n, v.identity)
    };
    var O = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = _(n); o < a; o++) {
            var c = n[o];
            if (j(c) && (v.isArray(c) || v.isArguments(c))) {
                t || (c = O(c, t, r));
                var f = 0,
                    l = c.length;
                for (u.length += l; f < l;) u[i++] = c[f++]
            } else r || (u[i++] = c)
        }
        return u
    };

    function k(i) {
        return function(n, t, r) {
            t = d(t, r);
            for (var e = _(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
                if (t(n[u], u, n)) return u;
            return -1
        }
    }

    function F(i, o, a) {
        return function(n, t, r) {
            var e = 0,
                u = _(n);
            if ("number" == typeof r) 0 < i ? e = 0 <= r ? r : Math.max(r + u, e) : u = 0 <= r ? Math.min(r + 1, u) : r + u + 1;
            else if (a && r && u) return n[r = a(n, t)] === t ? r : -1;
            if (t != t) return 0 <= (r = o(c.call(n, e, u), v.isNaN)) ? r + e : -1;
            for (r = 0 < i ? e : u - 1; 0 <= r && r < u; r += i)
                if (n[r] === t) return r;
            return -1
        }
    }
    v.flatten = function(n, t) {
        return O(n, t, !1)
    }, v.without = function(n) {
        return v.difference(n, c.call(arguments, 1))
    }, v.uniq = v.unique = function(n, t, r, e) {
        v.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = d(r, e));
        for (var u = [], i = [], o = 0, a = _(n); o < a; o++) {
            var c = n[o],
                f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c), i = f) : r ? v.contains(i, f) || (i.push(f), u.push(c)) : v.contains(u, c) || u.push(c)
        }
        return u
    }, v.union = function() {
        return v.uniq(O(arguments, !0, !0))
    }, v.intersection = function(n) {
        for (var t = [], r = arguments.length, e = 0, u = _(n); e < u; e++) {
            var i = n[e];
            if (!v.contains(t, i)) {
                for (var o = 1; o < r && v.contains(arguments[o], i); o++);
                o === r && t.push(i)
            }
        }
        return t
    }, v.difference = function(n) {
        var t = O(arguments, !0, !0, 1);
        return v.filter(n, function(n) {
            return !v.contains(t, n)
        })
    }, v.zip = function() {
        return v.unzip(arguments)
    }, v.unzip = function(n) {
        for (var t = n && v.max(n, _).length || 0, r = Array(t), e = 0; e < t; e++) r[e] = v.pluck(n, e);
        return r
    }, v.object = function(n, t) {
        for (var r = {}, e = 0, u = _(n); e < u; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, v.findIndex = k(1), v.findLastIndex = k(-1), v.sortedIndex = function(n, t, r, e) {
        for (var u = (r = d(r, e, 1))(t), i = 0, o = _(n); i < o;) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }, v.indexOf = F(1, v.findIndex, v.sortedIndex), v.lastIndexOf = F(-1, v.findLastIndex), v.range = function(n, t, r) {
        null == t && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; i < e; i++, n += r) u[i] = n;
        return u
    };

    function S(n, t, r, e, u) {
        if (!(e instanceof t)) return n.apply(r, u);
        var i = m(n.prototype),
            o = n.apply(i, u);
        return v.isObject(o) ? o : i
    }
    v.bind = function(n, t) {
        if (p && n.bind === p) return p.apply(n, c.call(arguments, 1));
        if (!v.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var r = c.call(arguments, 2),
            e = function() {
                return S(n, e, t, this, r.concat(c.call(arguments)))
            };
        return e
    }, v.partial = function(u) {
        var i = c.call(arguments, 1),
            o = function() {
                for (var n = 0, t = i.length, r = Array(t), e = 0; e < t; e++) r[e] = i[e] === v ? arguments[n++] : i[e];
                for (; n < arguments.length;) r.push(arguments[n++]);
                return S(u, o, this, this, r)
            };
        return o
    }, v.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (e <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < e; t++) n[r = arguments[t]] = v.bind(n[r], n);
        return n
    }, v.memoize = function(e, u) {
        var i = function(n) {
            var t = i.cache,
                r = "" + (u ? u.apply(this, arguments) : n);
            return v.has(t, r) || (t[r] = e.apply(this, arguments)), t[r]
        };
        return i.cache = {}, i
    }, v.delay = function(n, t) {
        var r = c.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(r, e, u) {
        var i, o, a, c = null,
            f = 0;
        u = u || {};

        function l() {
            f = !1 === u.leading ? 0 : v.now(), c = null, a = r.apply(i, o), c || (i = o = null)
        }
        return function() {
            var n = v.now();
            f || !1 !== u.leading || (f = n);
            var t = e - (n - f);
            return i = this, o = arguments, t <= 0 || e < t ? (c && (clearTimeout(c), c = null), f = n, a = r.apply(i, o), c || (i = o = null)) : c || !1 === u.trailing || (c = setTimeout(l, t)), a
        }
    }, v.debounce = function(t, r, e) {
        var u, i, o, a, c, f = function() {
            var n = v.now() - a;
            n < r && 0 <= n ? u = setTimeout(f, r - n) : (u = null, e || (c = t.apply(o, i), u || (o = i = null)))
        };
        return function() {
            o = this, i = arguments, a = v.now();
            var n = e && !u;
            return u = u || setTimeout(f, r), n && (c = t.apply(o, i), o = i = null), c
        }
    }, v.wrap = function(n, t) {
        return v.partial(t, n)
    }, v.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }, v.compose = function() {
        var r = arguments,
            e = r.length - 1;
        return function() {
            for (var n = e, t = r[e].apply(this, arguments); n--;) t = r[n].call(this, t);
            return t
        }
    }, v.after = function(n, t) {
        return function() {
            if (--n < 1) return t.apply(this, arguments)
        }
    }, v.before = function(n, t) {
        var r;
        return function() {
            return 0 < --n && (r = t.apply(this, arguments)), n <= 1 && (t = null), r
        }
    }, v.once = v.partial(v.before, 2);
    var E = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

    function I(n, t) {
        var r = M.length,
            e = n.constructor,
            u = v.isFunction(e) && e.prototype || o,
            i = "constructor";
        for (v.has(n, i) && !v.contains(t, i) && t.push(i); r--;)(i = M[r]) in n && n[i] !== u[i] && !v.contains(t, i) && t.push(i)
    }
    v.keys = function(n) {
        if (!v.isObject(n)) return [];
        if (l) return l(n);
        var t = [];
        for (var r in n) v.has(n, r) && t.push(r);
        return E && I(n, t), t
    }, v.allKeys = function(n) {
        if (!v.isObject(n)) return [];
        var t = [];
        for (var r in n) t.push(r);
        return E && I(n, t), t
    }, v.values = function(n) {
        for (var t = v.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = n[t[u]];
        return e
    }, v.mapObject = function(n, t, r) {
        t = d(t, r);
        for (var e, u = v.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[e = u[a]] = t(n[e], e, n);
        return o
    }, v.pairs = function(n) {
        for (var t = v.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = [t[u], n[t[u]]];
        return e
    }, v.invert = function(n) {
        for (var t = {}, r = v.keys(n), e = 0, u = r.length; e < u; e++) t[n[r[e]]] = r[e];
        return t
    }, v.functions = v.methods = function(n) {
        var t = [];
        for (var r in n) v.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, v.extend = g(v.allKeys), v.extendOwn = v.assign = g(v.keys), v.findKey = function(n, t, r) {
        t = d(t, r);
        for (var e, u = v.keys(n), i = 0, o = u.length; i < o; i++)
            if (t(n[e = u[i]], e, n)) return e
    }, v.pick = function(n, t, r) {
        var e, u, i = {},
            o = n;
        if (null == o) return i;
        v.isFunction(t) ? (u = v.allKeys(o), e = y(t, r)) : (u = O(arguments, !1, !1, 1), e = function(n, t, r) {
            return t in r
        }, o = Object(o));
        for (var a = 0, c = u.length; a < c; a++) {
            var f = u[a],
                l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }, v.omit = function(n, t, r) {
        if (v.isFunction(t)) t = v.negate(t);
        else {
            var e = v.map(O(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !v.contains(e, t)
            }
        }
        return v.pick(n, t, r)
    }, v.defaults = g(v.allKeys, !0), v.create = function(n, t) {
        var r = m(n);
        return t && v.extendOwn(r, t), r
    }, v.clone = function(n) {
        return v.isObject(n) ? v.isArray(n) ? n.slice() : v.extend({}, n) : n
    }, v.tap = function(n, t) {
        return t(n), n
    }, v.isMatch = function(n, t) {
        var r = v.keys(t),
            e = r.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u)) return !1
        }
        return !0
    };
    var N = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof v && (n = n._wrapped), t instanceof v && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + t;
            case "[object Number]":
                return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t) return !1;
            var o = n.constructor,
                a = t.constructor;
            if (o !== a && !(v.isFunction(o) && o instanceof o && v.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
        }
        e = e || [];
        for (var c = (r = r || []).length; c--;)
            if (r[c] === n) return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if ((c = n.length) !== t.length) return !1;
            for (; c--;)
                if (!N(n[c], t[c], r, e)) return !1
        } else {
            var f, l = v.keys(n);
            if (c = l.length, v.keys(t).length !== c) return !1;
            for (; c--;)
                if (f = l[c], !v.has(t, f) || !N(n[f], t[f], r, e)) return !1
        }
        return r.pop(), e.pop(), !0
    };
    v.isEqual = function(n, t) {
        return N(n, t)
    }, v.isEmpty = function(n) {
        return null == n || (j(n) && (v.isArray(n) || v.isString(n) || v.isArguments(n)) ? 0 === n.length : 0 === v.keys(n).length)
    }, v.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, v.isArray = f || function(n) {
        return "[object Array]" === s.call(n)
    }, v.isObject = function(n) {
        var t = typeof n;
        return "function" == t || "object" == t && !!n
    }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        v["is" + t] = function(n) {
            return s.call(n) === "[object " + t + "]"
        }
    }), v.isArguments(arguments) || (v.isArguments = function(n) {
        return v.has(n, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(n) {
        return "function" == typeof n || !1
    }), v.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, v.isNaN = function(n) {
        return v.isNumber(n) && n !== +n
    }, v.isBoolean = function(n) {
        return !0 === n || !1 === n || "[object Boolean]" === s.call(n)
    }, v.isNull = function(n) {
        return null === n
    }, v.isUndefined = function(n) {
        return void 0 === n
    }, v.has = function(n, t) {
        return null != n && a.call(n, t)
    }, v.noConflict = function() {
        return n._ = t, this
    }, v.identity = function(n) {
        return n
    }, v.constant = function(n) {
        return function() {
            return n
        }
    }, v.noop = function() {}, v.property = b, v.propertyOf = function(t) {
        return null == t ? function() {} : function(n) {
            return t[n]
        }
    }, v.matcher = v.matches = function(t) {
        return t = v.extendOwn({}, t),
            function(n) {
                return v.isMatch(n, t)
            }
    }, v.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = y(t, r, 1);
        for (var u = 0; u < n; u++) e[u] = t(u);
        return e
    }, v.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    }, v.now = Date.now || function() {
        return (new Date).getTime()
    };

    function B(t) {
        function r(n) {
            return t[n]
        }
        var n = "(?:" + v.keys(t).join("|") + ")",
            e = RegExp(n),
            u = RegExp(n, "g");
        return function(n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n
        }
    }
    var T = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        R = v.invert(T);
    v.escape = B(T), v.unescape = B(R), v.result = function(n, t, r) {
        var e = null == n ? void 0 : n[t];
        return void 0 === e && (e = r), v.isFunction(e) ? e.call(n) : e
    };
    var q = 0;
    v.uniqueId = function(n) {
        var t = ++q + "";
        return n ? n + t : t
    }, v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };

    function K(n) {
        return "\\" + D[n]
    }
    var z = /(.)^/,
        D = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        L = /\\|'|\r|\n|\u2028|\u2029/g;
    v.template = function(i, n, t) {
        !n && t && (n = t), n = v.defaults({}, n, v.templateSettings);
        var r = RegExp([(n.escape || z).source, (n.interpolate || z).source, (n.evaluate || z).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        i.replace(r, function(n, t, r, e, u) {
            return a += i.slice(o, u).replace(L, K), o = u + n.length, t ? a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : e && (a += "';\n" + e + "\n__p+='"), n
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            var e = new Function(n.variable || "obj", "_", a)
        } catch (n) {
            throw n.source = a, n
        }

        function u(n) {
            return e.call(this, n, v)
        }
        var c = n.variable || "obj";
        return u.source = "function(" + c + "){\n" + a + "}", u
    }, v.chain = function(n) {
        var t = v(n);
        return t._chain = !0, t
    };

    function P(n, t) {
        return n._chain ? v(t).chain() : t
    }
    v.mixin = function(r) {
        v.each(v.functions(r), function(n) {
            var t = v[n] = r[n];
            v.prototype[n] = function() {
                var n = [this._wrapped];
                return i.apply(n, arguments), P(this, t.apply(v, n))
            }
        })
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var r = e[t];
        v.prototype[t] = function() {
            var n = this._wrapped;
            return r.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], P(this, n)
        }
    }), v.each(["concat", "join", "slice"], function(n) {
        var t = e[n];
        v.prototype[n] = function() {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }), v.prototype.value = function() {
        return this._wrapped
    }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return v
    })
}).call(this);