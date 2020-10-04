/**
 * frontend.js
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Quick View
 * @version 1.0.0
 */
jQuery(document).ready(function(e) {
    "use strict";
    if ("undefined" != typeof yith_qv) {
        var a = e(document).find("#yith-quick-view-modal"),
            t = a.find(".yith-quick-view-overlay"),
            c = a.find("#yith-quick-view-content"),
            n = a.find("#yith-quick-view-close"),
            d = a.find(".yith-wcqv-wrapper"),
            u = d.width(),
            r = d.height(),
            i = function() {
                var t = e(window).width(),
                    i = e(window).height(),
                    n = u < t - 60 ? u : t - 60,
                    o = r < i - 120 ? r : i - 120;
                d.css({
                    left: t / 2 - n / 2,
                    top: i / 2 - o / 2,
                    width: n + "px",
                    height: o + "px"
                })
            };
        e.fn.yith_quick_view = function() {
            e(document).off("click", ".yith-wcqv-button").on("click", ".yith-wcqv-button", function(t) {
                t.preventDefault();
                var i = e(this),
                    n = i.data("product_id"),
                    o = !1;
                void 0 !== yith_qv.loader && (o = !0, i.block({
                    message: null,
                    overlayCSS: {
                        background: "#fff url(" + yith_qv.loader + ") no-repeat center",
                        opacity: .5,
                        cursor: "none"
                    }
                }), a.hasClass("loading") || a.addClass("loading"), e(document).trigger("qv_loading")), l(i, n, o)
            })
        };
        var l = function(n, t, o) {
            e.ajax({
                url: yith_qv.ajaxurl,
                data: {
                    action: "yith_load_product_quick_view",
                    product_id: t,
                    lang: yith_qv.lang
                },
                dataType: "html",
                type: "POST",
                success: function(t) {
                    c.html(t), yith_qv.is2_2 && c.find("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
                    var i = c.find(".variations_form");
                    i.each(function() {
                        e(this).wc_variation_form(), void 0 !== e.fn.yith_wccl && e(this).yith_wccl()
                    }), i.trigger("check_variations"), i.trigger("reset_image"), void 0 !== e.fn.prettyPhoto && c.find("a[data-rel^='prettyPhoto'], a.zoom").prettyPhoto({
                        hook: "data-rel",
                        social_tools: !1,
                        theme: "pp_woocommerce",
                        horizontal_padding: 20,
                        opacity: .8,
                        deeplinking: !1
                    }), void 0 !== e.fn.wc_product_gallery && c.find(".woocommerce-product-gallery").each(function() {
                        e(this).wc_product_gallery()
                    }), a.hasClass("open") || (a.removeClass("loading").addClass("open"), o && n.unblock()), e(document).trigger("qv_loader_stop")
                }
            })
        };
        ! function() {
            t.on("click", function(t) {
                i()
            }), e(document).keyup(function(t) {
                27 === t.keyCode && i()
            }), n.on("click", function(t) {
                t.preventDefault(), i()
            });
            var i = function() {
                a.removeClass("open").removeClass("loading"), setTimeout(function() {
                    c.html("")
                }, 1e3)
            }
        }(), i(), e(window).on("resize", i), e.fn.yith_quick_view(), e(document).on("yith_infs_adding_elem yith-wcan-ajax-filtered", function() {
            e.fn.yith_quick_view()
        })
    }
});