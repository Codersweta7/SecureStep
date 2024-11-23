var typed = new Typed(".multiword",{
    strings:["Developing for enthusiastic learners"],
        typespeed:50,
        backspeed:10,
        backDelay:2000,
        loop:true
})
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar=document.querySelector('.navbar');

hamburgerBtn.addEventListener('click',()=>{
    navbar.classList.toggle('active');

});
const themeToggleBtn = document.getElementById('theme-toggle');
const body= document.body;
// check for save theme in local storage
const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    body.classList.add(savedTheme);
    themeToggleBtn.textContent = savedTheme === 'darkTheme' ? 'Dark' :'Light';
}
else{
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = 'light mode'
}
themeToggleBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-theme');
    const isDakTheme=body.classList.contains('dark-theme');
    themeToggleBtn.textContent = isDarkTheme ? 'DARK':'Light'
})
//save the theme preference in local storage
localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');

