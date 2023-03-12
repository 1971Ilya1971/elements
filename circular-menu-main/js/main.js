let menus = [...document.querySelectorAll('.circular-menu')];

menus.map((menu) => {
    let items = menu.querySelectorAll('.circular-menu__item');
    let button = menu.querySelector('.circular-menu__button');

    let active = false;

    const length = items.length;
    const arc = 2 * Math.PI * (1/length);

    const radius = 40;

    button.addEventListener('click', (e) => {
        e.preventDefault();

        active = !active;

        if(active) {
            button.classList.add('circular-menu__button_active')

            for (let i = 0; i < length; i++) {

                const angle = i * arc;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                items[i].style.left = 50 + x + '%';
                items[i].style.top = 50 + y + '%';
            }

        } else {
            button.classList.remove('circular-menu__button_active')

            for (let i = 0; i < length; i++ ) {
                items[i].removeAttribute('style');
            }
        }
      
    });
})