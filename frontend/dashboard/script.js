window.onload = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navmenu');
    const options = document.querySelectorAll('.navoptions');

    // For the hamburger (menu) icon, open the side nav bar
    hamburger.addEventListener('click', () => {
        if(menu.offsetLeft == -288) {
            menu.classList.remove("-left-72");
            menu.classList.add("left-0");
        } else {
            menu.classList.remove("left-0");
            menu.classList.add("-left-72");
        }
    })

    // Create click listeners for all of the options in the nav tab
    for(let i=0; i<options.length; i++) {
        options[i].addEventListener('click', () => {
            menu.classList.remove("left-0");
            menu.classList.add("-left-72");
        })
    }

    // Check if they have gone into dashboard, if so, redirect to the dashboard
    if(localStorage.getItem('dashboard')) {
        window.location.href = '../dashboard';
    }
}