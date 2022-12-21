

// ELEMENTS
const button = document.querySelector('.navigation__toggle');
const buttonSpan = document.querySelector('.navigation__toggle').children[0]
const sidebar = document.querySelector('.navigation__sidebar');

const navbar = document.querySelector('.navigation');
const main = document.querySelector('.main');
const allSections = document.querySelectorAll('.scroll-animate')



function toggleSidebar(){
    sidebar.classList.toggle('navigation__sidebar--open');
    if(sidebar.classList.contains('navigation__sidebar--open')){
        buttonSpan.classList.add('animate')
    } else {

        buttonSpan.classList.remove('animate')
    }
}


// EVENT LISTENER
button.addEventListener('click', toggleSidebar);

// STICKY NAVIGATION BAR
const fixNavbar = function(entries,observe){
const [entry] = entries;
if(entry.isIntersecting){
    navbar.classList.add('navigation__fixed')
} else {
    navbar.classList.remove('navigation__fixed')
}

}

const observeMain = new IntersectionObserver(fixNavbar, {
    root: null,
    threshold: 0.1
})
observeMain.observe(main);


// Come into view
const slideUp = function(entries, observer){
    const [entry] = entries;
if(!entry.isIntersecting) return

    entry.target.classList.add('scroll-animate--visible')
    
    observer.unobserve(entry.target)

}

const observeSection = new IntersectionObserver(slideUp, {
    root: null,
    threshold: 0
})

allSections.forEach(section => observeSection.observe(section))