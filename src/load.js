import logo from './github-logo.png';

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
    about.setAttribute('id', 'about-btn');
    sidebar.appendChild(about);
    const menu = document.createElement('div');
    menu.innerHTML = 'Menu';
    menu.setAttribute('id', 'menu-btn');
    sidebar.appendChild(menu);
    const contact = document.createElement('div');
    contact.innerHTML = 'Contact';
    contact.setAttribute('id', 'contact-btn');
    sidebar.appendChild(contact);

    const temp = document.createElement('div');
    content.appendChild(frontPage);
    content.appendChild(sidebar);
    content.appendChild(temp);

    const footer = document.createElement('footer');
    const credit = document.createElement('p');
    credit.innerHTML = `<a href="https://github.com/Jando-G">
    Made by Alejandro Gutierrez 2022</a>`;
    footer.appendChild(credit);
    const gitLogo = document.createElement('img');
    gitLogo.src = logo;
    footer.appendChild(gitLogo);
    document.body.appendChild(footer);
}