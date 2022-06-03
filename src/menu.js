export default function loadMenu() { 
    const content = document.getElementById('content');
    content.lastChild.remove();

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const noodles = document.createElement('div');
    menu.innerHTML = `<span>Prices</span><br>There are no set prices
    on any item. You must bargain a deal before payment. If you are a
    good enough negotiator, you may have a free meal.<br><br><span>entrées</span><br>pain en soupe<br>
    le gâteau est un repas<br>ratatouille<br>ragoût de pommes de 
    terre<br>ragoût de bœuf<br>
    <br><span>nooodles</span><br>les nouilles<br>une 
    pâte (1 pc)<br>délicieux spaghettis<br>ramen français 
    <br><br><span>sides</span><br>french fries<br>
    salad ig<br><br><span>desserts</span><br>souffle<br>
    gateau au chocolat<br>is flan french?<br><br><span>drinks</span><br>sparkling water<br>
    tap water<br>spring water<br>light water (expiremental)<br>heavy water`;

    content.appendChild(menu);
}
