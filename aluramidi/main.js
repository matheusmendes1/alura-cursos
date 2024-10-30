function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);

  if(elemento && elemento.localName === 'audio') {
    console.info(elemento);
    elemento.play();
  } else {
    console.error('elemento nao encontrado ou seletor invalido!');
    alert('elemento nao encontrado ou seletor invalido!');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function() {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function(event) {
    if(event.code === 'Enter' || event.code === 'Space') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function(event) {
    if(event.code === 'Enter' || event.code === 'Space') {
      tecla.classList.remove('ativa');
    }
  }
}