let button = document.getElementById("bth");
let map = document.getElementById("nav");
let isVisble = false;
button.addEventListener("click", () => {
if(isVisble)  {
    map.style.display = "none";
    isVisble = false;
    } else {
    map.style.display = "block";
   
    isVisble = true;
    }
}
);  
const input = document.getElementById("my-input");

input.addEventListener("input", () => {
    if (!/^[0-9]$/.test(input.value)) {
        input.value = input.value.replace(/[^0-9]/g, "");
    } 
});

const input1 = document.getElementById("telfon");

input1.addEventListener("input", () => {
    if (!/^[0-9]$/.test(input1.value)) {
        input1.value = input1.value.replace(/[^0-9]/g, "");
    } 
});

const input3 = document.getElementById("my-input1");

input3.addEventListener("input", () => {
    if (!/^[0-9]$/.test(input3.value)) {
        input3.value = input3.value.replace(/[^0-9]/g, "");
    } 
});
// const icons = document.querySelectorAll('.icon');
// icons.forEach (icon => {  
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//   })
// })
// let siteMenu = document.querySelector('.site-menu');
// let headerToggler = document.querySelector('.page-header__toggler');

// siteMenu.classList.remove('site-menu--nojs')

// headerToggler.onclick = function () {
//   siteMenu.classList.toggle('site-menu--open');
//   headerToggler.classList.toggle('page-header__toggler--open');
//   headerToggler.classList.toggle('page-header__toggler--closed');
// };