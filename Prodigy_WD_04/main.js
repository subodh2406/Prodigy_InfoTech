
/************************* FILTERING OUT THE LINKS ******************************* */

const container = document.querySelector('.header-content')
var mixer = mixitup(container, {
    animation: {
        enable: false
    }
});
mixer.filter('.project-content');
