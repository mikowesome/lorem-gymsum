const header = document.querySelector('header')
const toggler = document.querySelector('.navbar-toggler')
const navLinks = document.querySelector('.nav-links')

window.addEventListener('scroll', changeNavbarBgColor)
toggler.addEventListener('click', showNavLinks)

function changeNavbarBgColor() {
    let scrollValue = window.scrollY
    if (scrollValue >= 100) {
        header.classList.add('scrolled')
        header.classList.remove('unscrolled')
        
    } else {
        header.classList.remove('scrolled')
        header.classList.add('unscrolled')
    }
}

function showNavLinks() {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show')
    } else {
        navLinks.classList.add('show')
    }
}