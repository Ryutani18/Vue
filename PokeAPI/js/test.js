'use strict'

{
  class Pokemon {
    constructor(num) {
      this.num = num;
      this.img = this.getImage();
    }

    getImage() {
      const img = [];
      const main = document.querySelector('main');

      const userId = "js-primer-example";
      for (let i = 1; i < this.num+1; i++) {
        
        img[i] = document.createElement('img')
        img[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
        img[i].addEventListener('click', () => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then(response => {
            return response.json().then(userInfo => {
              const array = [];
              userInfo.types.forEach(type => {
                array.push(type["type"]["name"]);
              }); 
              alert(userInfo.name);
              alert(array);
            });
          });
        })
        main.appendChild(img[i])
      }
      return img;
    }

    ShowModal() {

    }

  }

  const pokemon = new Pokemon(898);
}