let AuthErrorCodes = {
    EMAIL_EMPTY: 0,
    EMAIL_INVALID: 1,
    PASSWORD_EMPTY: 2
};

let Auth = (() => {

    let EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let authErrors = [];

    let userModel = {
        email: 't-rex@gmail.com',
        password: 1111
    };

    let authPopup = document.querySelector('.auth-popup');
    let authContent = document.querySelector('.auth-popup__content');
    let submit = document.querySelector('.js-auth-send');
    let close = document.querySelector('.auth-popup__close');

    let emailInput = document.getElementById('auth-popup__email');
    let passwordInput = document.getElementById('auth-popup__password');

    let emailValidate = email => {
        if (!email) {
            authErrors.push(AuthErrorCodes.EMAIL_EMPTY);
            return 0;
        }

        if (!EMAIL_REGEX.test(email)) {
            authErrors.push(AuthErrorCodes.EMAIL_INVALID);
        }
    };

    let passwordVidate = password => {
        if (!password) {
            authErrors.push(AuthErrorCodes.PASSWORD_EMPTY);
        }
    };

    let showErrors = () => {
        let i;
        let len;
        let element;
        for (i = 0, len = authErrors.length; i < len; i += 1) {
            switch (authErrors[i]) {
                case AuthErrorCodes.EMAIL_EMPTY: {
                    element = document.querySelector('.js-auth-email-required');
                    break;
                }
                case AuthErrorCodes.EMAIL_INVALID: {
                    element = document.querySelector('.js-auth-email-incorrect');
                    break;
                }
                case AuthErrorCodes.PASSWORD_EMPTY: {
                    element = document.querySelector('.js-auth-password-required');
                    break;
                }
                default: {
                    console.log('Doesn\'t find code');
                }
            }

            element.parentElement.classList.add('show');
            element.classList.add('show');
        }
    };

    let sendData = (email, password) => {
        // In this func we must send data to the server and catch responce
        // But in this test application we compare with pre-prepared values

        if (email.localeCompare(userModel.email) === 0 &&
            password.localeCompare(userModel.password) === 0) {
            document.querySelector('.auth-popup__alert_success').classList.add('show');
        } else {
            let element = document.querySelector('.js-auth-data-incorrect');

            element.parentElement.classList.add('show');
            element.classList.add('show');
        }

    };

    let clearMessages = () => {
        let alertList = document.querySelectorAll('.auth-popup__alert');
        let errorList = document.querySelectorAll('.auth-popup__error-text');

        let i;
        let len;
        for (i = 0, len = alertList.length; i < len; i += 1) {
            alertList[i].classList.remove('show');
        }

        for (i = 0, len = errorList.length; i < len; i += 1) {
            errorList[i].classList.remove('show');
        }


        authErrors.length = 0;
    };

    let showHandler = () => {
        authPopup.classList.add('is-opened');
        authContent.classList.add('slide-up');
    };

    let submitHandler = (event) => {
        event.preventDefault();
        clearMessages();

        let emailValue = emailInput.value;
        let passwordValue = passwordInput.value;

        emailValidate(emailValue);
        passwordVidate(passwordValue);

        if (authErrors.length > 0) {
            showErrors();
        } else {
            sendData(emailValue, passwordValue);
        }
    };

    let closeHandler = () => {
        authPopup.classList.remove('is-opened');
        authContent.classList.remove('slide-up');

        clearMessages();
    };

    let events = () => {
        let btn = document.querySelectorAll('.js-show-auth');
        let length = btn.length;
        while (length--) {
            btn[length].addEventListener('click', showHandler, false);
        }
        submit.addEventListener('click', submitHandler, false);
        close.addEventListener('click', closeHandler, false);
    };

    let init = () => {
        events();
    };

    return {
        init
    };
})();

export default Auth;

