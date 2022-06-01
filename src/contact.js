export default function loadContact() { 
    const content = document.getElementById('content');
    content.lastChild.remove();

    const contact = document.createElement('div');

    const header = document.createElement('h1');
    header.innerHTML = 'Contact';
    contact.appendChild(header);

    contact.classList.add('contact');

    content.appendChild(contact);
}
