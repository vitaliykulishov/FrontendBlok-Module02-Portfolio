import 'normalize.css'
import './styles/main.scss';

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });
    
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_hamMenu = target == hamburger;
        const menu_is_active = menu.classList.contains("menu_active");

        if (!its_menu && !its_hamMenu && menu_is_active) {
            hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
        }
    })

})
