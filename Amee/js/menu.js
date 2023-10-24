(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeButton = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show')
        })
    closeButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();