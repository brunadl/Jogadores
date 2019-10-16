//RECUPERANDO NOME E FOTO DO JOGADOR - TB DADOS JOGADOR
let novoNome = document.querySelector('#nome');
let novaFoto = document.querySelector('#foto');
let novoJogador = document.querySelector('#jogador');

//criar um array de nomes
let nomes = ['Bruno','Bruno','Bruno','Bruno','Ivo','Roberto','Tobias','Everaldo','Cristiano','Tavares'];

//sortear um valor que irá representar o nome do jogador e a foto correspondente
let sorteio = parseInt(Math.random()*10);

//exibindo o nome
novoNome.textContent = nomes[sorteio];
    if (sorteio <=3) {
      novoNome.classList.add('bg-warning');   }



//exibindo a foto - primeiro devemos criar a tag img
let foto = document.createElement('img');
foto.src ='./images/' + sorteio +'.png';
novaFoto.appendChild(foto);


//montar dados do jogador
novoJogador.querySelector('.velocidade').textContent = SorteiaDados();
novoJogador.querySelector('.drible').textContent = SorteiaDados();
novoJogador.querySelector('.passe').textContent = SorteiaDados();
novoJogador.querySelector('.chute').textContent = SorteiaDados();
novoJogador.querySelector('.defesa').textContent = SorteiaDados();
novoJogador.querySelector('.fisico').textContent = SorteiaDados();

// função que sorteia esses dados
function SorteiaDados() {
  let pontuacao = parseInt(Math.random()*100);
  while (pontuacao < 50) {
    pontuacao = parseInt(Math.random()*100);
  }
  return pontuacao;
}
