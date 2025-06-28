const wrapper = document.querySelector('.wrapper');
const signinLink = document.querySelector('.signin-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    }

)
signinLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    }

)