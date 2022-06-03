import './style.css';
import initialLoad from './load.js';
import loadAbout from './about.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

initialLoad();
loadAbout();

document.getElementById('about-btn').addEventListener('click', () => {
    loadAbout();
});
document.getElementById('menu-btn').addEventListener('click', () => {
    loadMenu();
});
document.getElementById('contact-btn').addEventListener('click', () => {
    loadContact();
});