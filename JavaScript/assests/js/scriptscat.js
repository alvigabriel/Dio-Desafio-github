//JAVASCRIPT ASSÍCRONO

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getcats = async () => { //FUNÇÃO ASSÍCRONA, arrow
  try {
    const data = await fetch (BASE_URL); //dados
    const json = await data.json(); /*retorno dos dados do banco, 
    convertido para json*/

    return json.webpurl; /* resposta da api, imagem comprimida e mais
    leve */
    } catch (e) {
        console.log(e.message);
    }
  };

const loadImg = async () => {
    catImg.src = await getcats();

};

catBtn.addEventListener('click', loadImg);

loadImg();
