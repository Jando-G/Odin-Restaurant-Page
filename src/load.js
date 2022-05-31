export default function initialLoad() {
    const content = document.getElementById('content');
    
    const frontPage = document.createElement('div');
    frontPage.classList.add('frontPage');
    
    const heading = document.createElement('div');
    frontPage.classList.add('heading');
    heading.innerHTML = 'Le Oui Oui';
    frontPage.appendChild(heading);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    const about = document.createElement('div');
    about.innerHTML = 'About';
    sidebar.appendChild(about);
    const menu = document.createElement('div');
    menu.innerHTML = 'Menu';
    sidebar.appendChild(menu);
    const contact = document.createElement('div');
    contact.innerHTML = 'Contact';
    sidebar.appendChild(contact);

    const temp = document.createElement('div');
    content.appendChild(frontPage);
    content.appendChild(sidebar);
    content.appendChild(temp);
}