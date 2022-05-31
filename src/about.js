export default function loadAbout() {
    const content = document.getElementById('content');
    content.lastChild.remove();

    const about = document.createElement('div');
    about.classList.add('about');

    content.appendChild(about);
}