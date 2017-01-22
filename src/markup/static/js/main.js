'use strict';

import polyfills from './libraries/polyfills';
import tabs from 'components/tabs/tabs';
import slider from 'components/slider/slider';
import mobileMenu from 'components/header/header';
import auth from 'components/popup/popup';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    tabs.init();
    slider.init();
    mobileMenu.init();
    auth.init();
});
