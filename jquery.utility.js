/**
 * jquery.utility.js - jQuery plugin 
 * 
 * Copyright (c) 2011 haldais
 * Licensed under the MIT Licence:
 * http://www.opensource.org/licenses/mit-license.html
 * 
 * @version 1.0
 * @github https://github.com/haldais/jquery.utility.js
 */
(function($){
    /**
     * rollOverImages
     */
    $.fn.rollOverImages = function(options) {
        // default setting sufix
        var defaults = {
            suffix : '_over'
        };
        var image_cache = new Object();
        var settings = $.extend(defaults, options);
        
        this.each(function(i){
            var $this     = $(this),
                imgsrc    = this.src,
                dot       = this.src.lastIndexOf('.'),
                mime      = this.src.substr(dot, this.src.length - dot),
                imgsrc_on = this.src.substr(0, dot) + settings.suffix + mime;
            image_cache[this.src]     = new Image();
            image_cache[this.src].src = imgsrc_on;
            $this.hover(function(){
                    this.src = imgsrc_on;
                },
                function(){
                    this.src = imgsrc;
            });
        });
        return this;
    }
    
    /**
     * imgFade
     */
    $.fn.imgFade = function(options) {
        var defaults = {
            fadeSpeed : 300,
            startAlpha : 0.5,
            endAlpha : 1.0
        };
        var settings = $.extend(defaults, options);
        
        var $this = $(this),
            s     = settings.fadeSpeed,
            start = settings.startAlpha,
            end   = settings.endAlpha;
            
        $this.hover(function(){
                $(this).fadeTo(s, start);
           },
           function(){
                $(this).fadeTo(s, end);
           }
        );
        return this;
    }
    
    /**
     * boxSameHeight
     */
    $.fn.boxSameHeight = function(options) {
        var defaults = {
            n : 0,
            resize : false
        };
        var settings = $.extend(defaults, options);
        var $this = this;
        $this.each(function(){
            var contents = $('> *:not("br")' ,this);
            var nn = 0;
            if (contents.length) {
                for (i=0; i<contents.length; i++) {
                    nn += $(contents[i]).outerHeight();
                }
                settings.n = (settings.n < nn) ? nn : settings.n;
            }
        });
        $this.css('height',settings.n)
        if (settings.resize) {
            boxResize(settings, $this, 1000);
        }
        return this;
    };
    function boxResize(settings, target, timer) {
        var timerID = setTimeout(function(){
            if (target.outerHeight() !== settings.n) {
                $(target).boxSameHeight({resize:settings.resize});
                clearTimeout(timerID);
                return;
            }
        }, timer);
    };
    
    /**
     * anchorScroll
     */
    $.fn.anchorScroll = function(options) {
        var defaults = {
            duaration : 800,
            easing : 'easeInOutCubic'
        };
        var settings = $.extend(defaults, options);
        var $this = this;
        
        $($this).bind('click', function(event){
            var $taget = $(this).attr('href');
            if ($taget === '#') {
                $('html,body').stop().animate({scrollTop : 0}, settings.duaration, settings.easing);
            } else {
                $('html,body').stop().animate({scrollTop : $($taget).offset().top}, settings.duaration, settings.easing);
            }
            event.preventDefault();
        });
        return this;
    }
})(jQuery);

$(function(){
    $('img.swap').rollOverImages();
    //$('img.fade').imgFade();
    $('.SameHeight').boxSameHeight({resize:true});
    $('a[href^="#"]').anchorScroll();
});
