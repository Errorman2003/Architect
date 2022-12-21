
const button = document.querySelector('.navigation__toggle');
const buttonSpan = document.querySelector('.navigation__toggle').children[0]
console.log(buttonSpan);

const sidebar = document.querySelector('.navigation__sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('navigation__sidebar--open');
    if(sidebar.classList.contains('navigation__sidebar--open')){
        buttonSpan.classList.add('animate')
    } else {

        buttonSpan.classList.remove('animate')
    }
}



button.addEventListener('click', toggleSidebar)