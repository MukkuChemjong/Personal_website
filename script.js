//Navigation Bar
const nav = document.querySelector('#navigation');
let topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

//Project Panels 
const panels = document.querySelectorAll('.panel');
const buttons = document.querySelectorAll('.panel button');

function toggleOpenPanel(){
    this.classList.toggle('open');
};

function handleTransition(e){
    if(!e.propertyName.includes("flex")) return;

    this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpenPanel));
panels.forEach(panel => panel.addEventListener('transitionend', handleTransition));
buttons.forEach(button => button.addEventListener('transitionend', handleTransition));



