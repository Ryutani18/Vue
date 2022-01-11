'use strict'

{
  const img = [];
  const modal_img = [];
  const main = document.querySelector('main');
  const close = document.createElement('div');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  close.setAttribute("id", "close");
  close.textContent = "閉じる"
  modal.appendChild(close);

  close.addEventListener('click', () => {
    modal.textContent = "";
    modal.appendChild(close);
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  })
  
  mask.addEventListener('click', () => {
    close.click();
  })

  const userId = "js-primer-example";
  for (let i = 1; i < 899; i++) {
    img[i] = document.createElement('img')
    modal_img[i] = document.createElement('img')
    img[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    modal_img[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    img[i].setAttribute("id", i);
    img[i].addEventListener('click', () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => {
        return response.json().then(userInfo => {
          console.log(userInfo);
          const array = [];
          userInfo.types.forEach(type => {
            array.push(type["type"]["name"]);
          }); 
          h1.textContent = userInfo.name;
          p.textContent = array;
          modal.appendChild(h1);
          modal.appendChild(p);
          modal.appendChild(modal_img[i])
          
        });
      });
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    })
    main.appendChild(img[i])
  }

}