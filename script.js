let btn = document.querySelector('#btn')
let btnn = document.querySelector('.btn')
let body = document.body
let h1 = document.querySelectorAll('.h1')
let h3 = document.querySelector('.h3')
let skills = document.querySelector('.skills')
let devTools = document.querySelector('.DevTools')
let about = document.querySelector('.about')
let projects = document.querySelectorAll('.projectimgs')
let footer = document.querySelector('.footer')


btn.addEventListener('click', Change)

function Change(e) {
    btn.value = 1;
    if (btnn.src.includes('sun')) {
        body.style.background = 'rgb(229, 229, 229)';
        h1.forEach(h1 => {
            h1.style.color = 'black';
        });
        h3.style.color = 'purple';
        skills.style.backgroundColor = 'white'
        skills.style.border = '2px solid black'
        skills.style.color = 'black'
        devTools.style.backgroundColor = 'white'
        devTools.style.border = '2px solid black'
        devTools.style.color = 'black'
        about.style.backgroundColor = 'white'
        about.style.border = '2px solid black'
        about.style.color = 'black'
        projects.forEach(projects => {
            projects.style.border = '2px solid black';
            projects.style.boxShadow = '0px 5px 10px black'
        });
        btnn.src = 'images/moon.png'
        btn.value = 0;

    }
    else{
        body.style.backgroundImage = "url('images/NightSky.jpg')";
        body.style.backgroundRepeat = 'no-repeat'
        body.style.backgroundSize = 'cover'
        body.style.backgroundPosition = 'center'
        body.style.backgroundAttachment = 'fixed'

        h1.forEach(h1 => {
            h1.style.color = 'white';
        });
        h3.style.color = '#7cffee';
        skills.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
        skills.style.border = 'none'
        skills.style.color = 'white'
        devTools.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
        devTools.style.border = 'none'
        devTools.style.color = 'White'
        about.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
        about.style.border = 'none'
        about.style.color = 'white'
        projects.forEach(projects => {
            projects.style.border = '2px solid white';
            projects.style.boxShadow = '0px 5px 10px black'
        });
        btnn.src = 'images/sun.png'
        btn.value = 1;
    }
}