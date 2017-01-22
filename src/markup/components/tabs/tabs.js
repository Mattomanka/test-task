let Tabs = (() => {

    let changeTab = (e) => {
        if (!e.target.classList.contains(e.target.classList[0] + '_active')) {
            let oldId = document.querySelector('.' + e.target.classList[0] + '_active').getAttribute('data-id');
            document.querySelector('.' + e.target.classList[0] + '_active').classList.remove(e.target.classList[0] + '_active');
            e.target.classList.add(e.target.classList[0] + '_active');
            let id = e.target.getAttribute('data-id');
            document.querySelector('.js-tab-sections').children[oldId].classList.remove('tab-sections__item_active');
            document.querySelector('.js-tab-sections').children[id].classList.add('tab-sections__item_active');
        }
    };

    let init = () => {
        let tabs = document.querySelector('.js-tabs').children;
        let contents = document.querySelector('.js-tab-sections').children;
        let length = tabs.length;
        while (length--) {
            tabs[length].addEventListener('click', changeTab, false);
            tabs[length].setAttribute('data-id', length);
        }
        length = contents.length;
        while (length--) {
            contents[length].setAttribute('data-id', length);
        }
    };

    return {
        init
    };

})();

export default Tabs;
