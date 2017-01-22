import $ from 'jquery';
import slick from 'slick-carousel';

let Slider = (() => {

    let init = () => {
        $('.js-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.js-img-slider'
        });
        $('.js-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    };

    return {
        init: init
    };

})();

export default Slider;
