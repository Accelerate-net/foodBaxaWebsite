// helper - validate data attr
gsap.registerPlugin(ScrollTrigger);

gsap.to('.left-icons', {
    scrollTrigger: {
        trigger: ".left-icons",
        start: "top 30%",
        scrub: true,
        markers: false
    },
    y: -80,
    duration:2
})

gsap.to('.right-icons', {
    scrollTrigger: {
        trigger: ".right-icons",
        start: "top 30%",
        scrub: true,
        markers: false
    },
    y: -50,
    duration:3
})

gsap.to('.home__Text h1', {
    scrollTrigger: {
        trigger: ".home__Text",
        start: "top",
        scrub: true,
        markers: false
    },
    y: -20,
    duration:1
})

gsap.to('.home__Text h3', {
    scrollTrigger: {
        trigger: ".home__Text",
        start: "top",
        scrub: true,
        markers: false
    },
    y: -20,
    duration:1
})



function validateDataAttr($attr) {
    "use strict";
    return $attr !== undefined;

}

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}



jQuery(document).ready(function () {
    "use strict";
    // set nav position
    jQuery(".navbar-nav").each(function () {
        var $this = jQuery(this);
        $this.css($this.data("type"), $this.data("pos"));
    })


    // jQuery('header a[href*="#"]').on('click', function () {
    //     jQuery('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 2000);
    // });
    // jQuery('footer a[href*="#"]').on('click', function () {
    //     jQuery('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 2000);
    // });
    // AOS.init({
    //     easing: 'ease',
    //     duration: 1800,
    //     once: true
    // });



    // set background image
    jQuery(".full-width-photo, .section > .inner").each(function () {
        var $this = jQuery(this);

        var image = "none";

        if (validateDataAttr($this.data("image"))) {
            image = "url(" + $this.data("image") + ")";
        }

        $this.css("background-image", image).css("background-attachment", $this.data("scroll")).css("padding-top", $this.data("topspace") + "px").css("padding-bottom", $this.data("bottomspace") + "px");
    })

    // init rounded image
    jQuery(".roundedImg").each(function () {
        var $this = jQuery(this);
        var imgpath = $this.find("img").attr("src");
        $this.css("background-image", "url(" + imgpath + ")");

        var $sizeImg = $this.data("size");
        if (validateDataAttr($sizeImg)) {
            var size = $sizeImg;

            $this.css({
                width: size,
                height: size
            });
        }
    })

    // Direction-aware hover effect
    jQuery('.galleryContainer > li .inner ').each(function () {
        jQuery(this).hoverdir({
            speed: 300,
            easing: 'ease',
            hoverDelay: 25,
            inverse: false
        });
    });

});


jQuery(window).load(function () {
    "use strict";

    // flexfull slider init
    jQuery('.flexslider.flexFull').flexslider({
        animation: "slide", //String: Select your animation type, "fade" or "slide"
        easing: "easeInOutExpo", //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        // easing types :
        // swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
        // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
        // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
        // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc,
        // easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack,
        // easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
        direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false, //{NEW} Boolean: Reverse the animation direction
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false, //Boolean: Animate slider automatically
        slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 1100, //Integer: Set the speed of animations, in milliseconds
        initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false, //Boolean: Randomize slide order

        // Primary Controls
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item

        // Usability features
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: true, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available

        // Secondary Navigation
        keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item

        // Callback API
        start: function () {
            jQuery(".flexslider.flexFull").removeClass("loading-slider");
        },
        before: function () {}, //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function () {}, //Callback: function(slider) - Fires after each slider animation completes
        end: function () {}, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function () {}, //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function () {} //{NEW} Callback: function(slider) - Fires after a slide is removed
    });


    // flexFade slider init
    jQuery('.flexslider.flexFade').flexslider({
        animation: "fade", //String: Select your animation type, "fade" or "slide"
        // easing: "easeInOutExpo",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        // easing types :
        // swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
        // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
        // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
        // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc,
        // easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack,
        // easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
        direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false, //{NEW} Boolean: Reverse the animation direction
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false, //Boolean: Animate slider automatically
        slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 1000, //Integer: Set the speed of animations, in milliseconds
        initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false, //Boolean: Randomize slide order

        // Primary Controls
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item

        // Usability features
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: true, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available

        // Secondary Navigation
        keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item

        // Callback API
        start: function () {
            jQuery(".flexslider.flexFade").removeClass("loading-slider");
        },
        before: function () {}, //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function () {}, //Callback: function(slider) - Fires after each slider animation completes
        end: function () {}, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function () {}, //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function () {} //{NEW} Callback: function(slider) - Fires after a slide is removed
    });


    // flexFade slider init
    jQuery('.flexslider.flexSimple').flexslider({
        animation: "fade", //String: Select your animation type, "fade" or "slide"
        // easing: "easeInOutExpo",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        // easing types :
        // swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
        // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
        // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
        // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc,
        // easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack,
        // easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
        direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false, //{NEW} Boolean: Reverse the animation direction
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false, //Boolean: Animate slider automatically
        slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 1000, //Integer: Set the speed of animations, in milliseconds
        initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false, //Boolean: Randomize slide order

        // Primary Controls
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: " ", //String: Set the text for the "previous" directionNav item
        nextText: " ", //String: Set the text for the "next" directionNav item

        // Usability features
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: true, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available

        // Secondary Navigation
        keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item

        // Callback API
        start: function () {},
        before: function () {}, //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function () {}, //Callback: function(slider) - Fires after each slider animation completes
        end: function () {}, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function () {}, //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function () {} //{NEW} Callback: function(slider) - Fires after a slide is removed
    });


})

jQuery(document).ready(function () {
    "use strict";
    /* rotate text */
    if (jQuery().arctext) {
        jQuery(".curved").each(function () {
            var $this = jQuery(this);

            var radius = $this.data("radius");
            var direction = $this.data("direction");

            if ((validateDataAttr(radius)) && (validateDataAttr(direction))) {
                jQuery($this).arctext({
                    radius: radius,
                    dir: direction,
                    // 1: curve is down,
                    // -1: curve is up
                    rotate: true
                    // if true each letter should be rotated.
                })
            }
        })
    }

    // // preloader
    // if (jQuery().queryLoader2) {
    //     jQuery("body.preloader").queryLoader2({
    //         backgroundColor: "#fff", //Background color of the loader (in hex).
    //         barColor: "#584A41", //Background color of the bar (in hex).
    //         barHeight: 3, //Height of the bar in pixels. Default: 1
    //         deepSearch: true, //Set to true to find ALL images with the selected elements. If you don't want queryLoader to look in the children, set to false. Default: true.
    //         percentage: true, //Set to true to enable percentage visualising. Default is false.
    //         completeAnimation: "fade", //Set the animation type at the end. Options: "grow" or "fade". Default is "fade".
    //         onComplete: function () {
    //             jQuery("#ct_preloader").fadeOut(600);
    //         }
    //     });
    // }


})
