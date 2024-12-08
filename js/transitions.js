window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.transition-button');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }

    var elements = document.getElementsByClassName('_hidden');
    var tab_elements = document.getElementsByClassName('_tab');
    setTimeout(() => {
        for(let i = 0; i < elements.length; i++){
            const element = elements[i];
            setTimeout(() => {
                element.classList.remove('_hidden');
                element.style.transitionDelay = "0s";
            }, 500);
            element.classList.add('show_sc');
        }
        for(let i = 0; i < tab_elements.length; i++){
            const element = tab_elements[i];
            setTimeout(() => {
                element.style.animationDelay = "0s";
            }, 1850);
        }
    }, 750);
}