import $ from 'jquery';

let MobileMenu = (() => {

    let toggleMenu = () => {
        $('.header__mobile-links').slideToggle();
    };

    let init = () => {
        $('.js-mobile-menu').on('click', toggleMenu);
        $('.header__nav-list').on('click', toggleMenu);
    };

    return {
        init
    };
})();

export default MobileMenu;
