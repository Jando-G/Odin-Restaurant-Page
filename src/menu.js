export default function loadMenu() { 
    const content = document.getElementById('content');
    content.lastChild.remove();

    const menu = createElement('div');

    content.appendChild(menu);
}
