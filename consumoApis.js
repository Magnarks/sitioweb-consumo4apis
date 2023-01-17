let texto = "Salve, questo è un messaggio in italiano";
let endPoint = 'localhost/idioma/' + texto;

console.log(endPoint);

fetch(endPoint);