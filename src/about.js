export default function loadAbout() {
    const content = document.getElementById('content');
    content.lastChild.remove();

    const about = document.createElement('div');
    about.classList.add('about');

    const title = document.createElement('h1');
    title.innerHTML = 'What is Le Oui Oui?';
    about.appendChild(title);

    const p1 = document.createElement('p');
    p1.innerHTML = `Lorem ipsum dolor sit amet, consectetur
     adipiscing elit. Praesent eleifend commodo efficitur. Duis 
     ornare venenatis purus, ut mollis mauris mattis vel. 
     Sed vulputate libero ac orci eleifend, eu pretium nunc dapibus. 
     Cras efficitur urna at nunc pretium posuere. Mauris venenatis 
     nunc eleifend vestibulum tristique. Praesent non lobortis nisl. 
     Donec laoreet lectus non ligula tincidunt, eu dictum dui semper.
      Vestibulum eu leo dapibus, maximus orci vitae, fermentum lacus. 
      Mauris nec purus tincidunt, scelerisque dolor vel, fermentum 
      ante. Donec sollicitudin mollis diam quis interdum. Vivamus
       interdum luctus egestas. Aliquam erat volutpat. Praesent 
       rhoncus felis turpis, nec pellentesque lacus porttitor ac.`;

    const p2 = document.createElement('p');
    p2.innerHTML = `Maecenas eget commodo risus. Donec mi risus, 
    malesuada finibus aliquet facilisis, tristique sit amet diam. 
    Praesent elementum ex eget risus placerat auctor. Integer sit 
    amet sem pretium, cursus purus non, maximus ante. Quisque laoreet
     velit ut tempus maximus. Aenean venenatis magna a elit luctus, 
     et finibus nisl fermentum. Pellentesque vehicula ipsum eget
      vestibulum mollis. Duis laoreet, diam vitae tempus ultricies, 
      metus libero mollis augue, ac scelerisque mauris dolor ut est.
       Praesent congue feugiat dolor, ac imperdiet ipsum dignissim 
       nec. Sed euismod nunc sit amet mollis pharetra. Etiam 
       tincidunt mauris et scelerisque convallis. Cras dignissim, 
       ligula sagittis maximus vestibulum, turpis urna ultrices 
       lacus, in elementum nulla ligula sed turpis. Donec tempus
        ipsum ligula, at sollicitudin enim placerat cursus. Morbi
         vitae massa elit. Suspendisse a rhoncus diam.`;

    const p3 = document.createElement('p');
    p3.innerHTML = `Nunc pretium risus ac velit consectetur laoreet.
     Duis vulputate est vel porttitor cursus. Nam vestibulum, quam a
      viverra consequat, nulla ante porta lorem, facilisis
       scelerisque risus dolor non nisi. Nunc aliquam fringilla ex, 
       non pulvinar libero. Mauris vitae nisi eget augue aliquam
        porta non nec neque. Maecenas ut ultrices ex. Vestibulum ante
         ipsum primis in faucibus orci luctus et ultrices posuere 
         cubilia curae; Nam tincidunt malesuada risus ultricies
          malesuada. Duis fermentum metus tempus tempor porta. 
          Etiam maximus lobortis orci quis ornare. Mauris ut eros
           ante. In ligula sapien, sodales eu finibus nec, dignissim
            non nibh. Vestibulum et nulla purus. Vestibulum eu urna 
            et urna lacinia posuere. Praesent gravida mi eu massa
             maximus dignissim. Suspendisse ullamcorper consequat 
             risus quis tempus.`;
    
    about.appendChild(p1);
    about.appendChild(p2);
    about.appendChild(p3);
    content.appendChild(about);
}