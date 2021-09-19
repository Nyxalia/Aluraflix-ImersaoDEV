var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/0/0b/Little_Women_2019.jpeg",
  "https://upload.wikimedia.org/wikipedia/pt/a/a0/Le_fabuleux_destin_d%27Am%C3%A9lie_Poulain.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/84/14/20028635.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/70/69/20159091.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}