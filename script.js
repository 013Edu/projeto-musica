
let musicas = [
    {titulo:'Guitar Solo',artista:'Eduardo Gonçalves',src:'musicas/Bop Walker - Freedom Trail Studio.mp3',img:'imagens/pexels-david-bartus-435840 (1).jpg'}, 
    {titulo:'Music Piano',artista:'Green Jackson',src:'musicas/Heal You - Freedom Trail Studio.mp3',img:'imagens/pexels-bryan-geraldo-586415.jpg'}
];



let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')
let indexMusica = 0;

renderizarMusica(indexMusica);

//EVENTOS
document.querySelector('.botao-play').addEventListener('click',tocarMusica);
document.querySelector('.botao-pause').addEventListener('click',pausarMusica);
musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    renderizarMusica(indexMusica);
   
});
document.querySelector('.proxima').addEventListener('click', () =>{
    indexMusica++;
    renderizarMusica(indexMusica);
});


//FUNÇÕES
function renderizarMusica(index){
musica.setAttribute('src',musicas[index].src)
musica.addEventListener('loadeddata', () =>{

     nomeMusica.textContent = musicas[index].titulo;
     nomeArtista.textContent = musicas[index].artista;
     imagem.src = musicas[index].img;
     duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

});
}
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block'
}
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none'
}
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
       campoSegundos = '0' + campoSegundos;
    }
     return campoMinutos  + ':' + campoSegundos
}
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));