 
let text =  document.getElementsByClassName("myDiv");
// alert(text[0].innerHTML);
console.log(text[0].innerHTML);
let dizi=[
    {ders:"bilgisayar",hoca:"Şenol",kredi:4},
    {ders:"web programlama",hoca:"demrici",kredi:3},
];
let dizi2=[
    "bilgisayar","web programlama",
];
// dizi.forEach(item) {
//     document.write("<p>" + key.ders  + "<span style=color:red>" + key.hoca + "</span>" + key.kredi + "</p>");
// }); 
document.write("<h1>dizi iki</h1>");
dizi2.forEach(item => {
    document.write("<p style=color:green>" + item +"</p>"); 
});



