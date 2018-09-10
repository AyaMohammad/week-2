/*voornaam = Aya*/
//achter naam = Mohammad
//pizza calculator

var klein = prompt("hoeveel pizza klein wilt u?", "vul hier uw keuze in");
var middum = prompt("hoeveel pizza middum wilt u?","vul hier uw keuze in");
var groot = prompt("hoeveel pizza groot wilt u?","vul hier uw keuze in");


document.write('<br>' , "De prijs van een kleine pizza is :" , klein , '*' , 4 , "=");
klein = klein * 4;
document.write(klein);

document.write('<br>' , "De prijs van een middume pizza is :" , middum , '*' , 6 , "=");
middum = middum * 6;
document.write(middum);

document.write('<br>' , "De  prijs van een groote pizza is :" , groot , '*' , 8 , "=");
groot = groot * 8;
document.write(groot);

document.write('<br><br>' ,"Het eind prijs is :" , klein = klein , '+' , middum = middum , '+' , groot = groot , "=" , klein + middum + groot);