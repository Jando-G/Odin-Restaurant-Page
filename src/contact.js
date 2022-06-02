export default function loadContact() { 
    const content = document.getElementById('content');
    content.lastChild.remove();

    const contact = document.createElement('div');

    const header = document.createElement('h1');
    header.innerHTML = 'Contact';
    contact.appendChild(header);

    const subtext = document.createElement('p');
    subtext.innerHTML = `Fill out the form below and a manager
    will be in touch shortly`;
    contact.appendChild(subtext);

    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    nameInput.setAttribute('name', 'fname');
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'email');
    emailInput.setAttribute('name', 'email');
    form.appendChild(emailInput);

    const numberInput = document.createElement('input');
    numberInput.setAttribute('type', 'tel');
    numberInput.setAttribute('placeholder', 'Phone Number');
    numberInput.setAttribute('name', 'phone');
    form.appendChild(numberInput);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', 'What are you getting in touch about?');
    form.appendChild(textarea);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerHTML = "Submit";
    form.appendChild(submit);

    contact.appendChild(form);

    contact.classList.add('contact');

    content.appendChild(contact);
}
