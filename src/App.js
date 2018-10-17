import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
    componentDidMount() {
        const { $, appMaster } = window;
        var $slickInstance = $('.slick-slider_main'),
            $slickJd = $('.jd-slider'),
            $mainMenu = $('.navbar-toggle'),
            $newMenu = $('wspr .navbar-toggle'),
            $boxslider = $('.box-slider'),
            $tipsy = $('[rel=tipsy]'),
            $slidecontent2 = $('.slide-content-2'),
            $arrowback2 = $('.arrow-back-2'),
            $AccordionCheckbox = $('.sidebar-accordion #all');

        function getScrollBarWidth() {
            var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
                widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
            $outer.remove();
            return 100 - widthWithScroll;
        };

        //tooltip tipsy
        $tipsy.tipsy({ fade: true, gravity: 's' });
        // JD modal + slider carousel
        $('#tabs >div').first().attr('class', 'current');
        $('#tabs >div').each(function (i) {
            i = i + 1;
            $(this).attr('id', 'tab-' + i);
            if (i !== $('#tabs >div').size()) {
                $(this).append('<button class="tabPagination btn btn-submit-blue btn-next" rel="tab-' + (i + 1) + '" type="button">Continue ></button>');
            }
            if (i !== 1) {
                $(this).append('<a href="javascript:void(0)" class="tabPagination btn-prev" rel="tab-' + (i - 1) + '">< Go back</a>');
            }
        });
        $('#tabs >div[class!="current"]').hide();
        $('.tabPagination').on('click', function () {
            $('.current').removeAttr('class');
            $('#tabs >div[class!="current"]').hide();
            $('#' + $(this).attr('rel')).show();
        });

        $slidecontent2.on('click', function () {
            $('.alternative-signin_button').addClass('faded');
            $('.alternative-signin-2').addClass('faded_in');
        });

        $arrowback2.on('click', function () {
            $('.alternative-signin_button').removeClass('faded');
            $('.alternative-signin-2').removeClass('faded_in');
        });

        //Accordion start

        $('body').on('click', 'a.box-title', function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.parent().toggleClass('active');
            $this.toggleClass('active');
            $this.prev().toggleClass('active');
            if ($this.next().hasClass('box-content-show')) {
                $this.next().removeClass('box-content-show');
                $this.next().slideUp();
            } else {
                $this.parent().parent().find('section .box-content').removeClass('box-content-show');
                $this.parent().parent().find('section .box-content').slideUp();
                $this.next().slideToggle();
                $this.next().toggleClass('box-content-show');
            }
        });

        //Accordion end
        $newMenu.on('click', function () {
            $('body').toggleClass('mobile-nav-active');
        });

        // $mainMenu.on('click', function(){
        //$('body').toggleClass('mobile-nav-active');
        //$('.overlay').toggleClass('show-overlay');
        //$('.collapse.navbar-collapse').toggleClass('show-nav');
        //});

        $slickJd.slick({
            lazyLoad: 'ondemand',
            adaptiveHeight: false
        });
        $boxslider.slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
        $slickInstance.slick({
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            adaptiveHeight: true
        });

        //navigation - profile picture
        $('body').on('click', '.profilelink', function (event) {
        });

        var slides = [
            { value: 0, label: 'Introduction' },
            { value: 1, label: 'Understanding' },
            { value: 2, label: 'The recommendation' },
            { value: 3, label: 'Reputation' },
            { value: 4, label: 'Follow-ups' },
            { value: 5, label: 'Shared Values' },
            { value: 6, label: 'The rule' },
            { value: 7, label: 'Conclusion' },
        ];

        $slickInstance.on('afterChange', function (event, slick, currentSlide) {
            var slideLeftCount = slick.slideCount - 1 - currentSlide;
            var slideInfo = slideLeftCount + ' section';
            if (slideLeftCount > 1) slideInfo += 's';
            $('.slick-slider-info span:first').html(slideInfo);
            var prevSlide = currentSlide;
            var nextSlide = currentSlide + 2;
            var prevTitle = '', nextTitle = '';
            if (prevSlide > 0) {
                var prev = slides.filter(function (slide) { return slide.value == currentSlide - 1; });
                prevTitle = prev[0].label;
                $('.slick-slider-prev strong').html('Previous:');
            } else {
                $('.slick-slider-prev strong').html('');
            }

            $('.slick-slider-prev span').html(prevTitle);

            if (nextSlide <= slick.slideCount) {
                var next = slides.filter(function (slide) { return slide.value == currentSlide + 1; });
                nextTitle = next[0].label;
                $('.slick-slider-next').show();
            } else {
                $('.slick-slider-next').hide();
            }

            $('.slick-slider-next span').html(nextTitle);
        });

        $('.slick-slider-next').click(function () {
            $slickInstance.slick('slickGoTo', parseInt($slickInstance.slick('slickCurrentSlide')) + 1);
        });
        $('.slick-slider-prev').click(function () {
            $slickInstance.slick('slickGoTo', parseInt($slickInstance.slick('slickCurrentSlide')) - 1);
        });

        $("[data-togglehead=popover]").popover({
            html: true,
            content: function () {
                return $('#popover-content').html();
            }
        });

        var jQ1 = $.noConflict(true);
        ////console.log("3rd after loading jquery.noConflict: ", $.fn.jquery);
        jQ1(document).ready(function ($) {
            ////console.log('jquery inside func of jQ1: ', $.fn.jquery);
            appMaster.preLoader();
            appMaster.smoothScroll();
            appMaster.canvasHack();
        });

        $('body').on('click', '.navbar-toggle', function (event) {
            var hasIn = $(".collapse").hasClass('in');
            if (hasIn) {
                $(".collapse").collapse('hide');
                event.stopPropagation();
            }
        });
    }

    render() {
        return (
            <div>
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;
