
document.write(`<h2>Elso feladat!</h2>`)
document.write(`<h3>A dokumentum készitője: </h3> Juhász Jevgenyij <br>`);
document.write(`<h3>A csoport azonositoja: </h3> Team 15<br>`);
document.write(`<h4>Mennyire ertem a HTML nyelvet: </h4> 90%`);
document.write(`<h4>Mennyire ertem a CSS kodolast: </h4> 90%`);
document.write(`<h4>Mennyire ertem jelengleg a JavaScript-et: </h4> 85%`);
document.write("<hr>")

document.write(`<h2>Masodik feladat!</h2>`)
let a = Number(prompt("Adj meg egy szamot:"));
let b = Number(prompt("Add meg milyen hatvanyra emeljem"));
let hatvany = a ** b;
document.write(`Az ${a} es ${b} szam hatvanya: ${hatvany}`)
document.write(`<hr>`)

document.write(`<h2>Harmadik feladat!</h2>`);
let also_hatar = Number(prompt("Add meg az also hatart!"));
let felso_hatar = Number(prompt("Add meg a felso hatart!"));
document.write(`Az also hatar ${also_hatar}<br>`);
document.write(`A felso hatar ${felso_hatar}<br>`);

let rndm = Math.round(Math.random() * ((felso_hatar - also_hatar + 1) / 2)) * 2 + (also_hatar % 2 === 0 ? also_hatar : also_hatar + 1)
document.write(`A generalt random paros szam: ${rndm}`);
document.write(`<hr>`)

document.write(`<h2>Negyedik feladat!</h2>`)
let eletkor = Number(prompt(`Add meg az eletkorod!`));
if (eletkor <= 0) {
    document.write(`Hiba, nem megfelelo adat!`);
}
else if (eletkor > 120) {
    document.write(`Hiba, nem megfelelo adat!`);
}
else if (eletkor > 0 && eletkor <= 6) {
    document.write(`${eletkor} a kisgyermekkor`);
}
else if (eletkor > 6 && eletkor <= 12) {
    document.write(`${eletkor} a gyermekkor`);
}
else if (eletkor > 12 && eletkor <= 16) {
    document.write(`${eletkor} a serdülőkor`);
}
else if (eletkor > 16 && eletkor <= 20) {
    document.write(`${eletkor} az ifjúkor`);
}
else if (eletkor > 20 && eletkor <= 30) {
    document.write(`${eletkor} a fiatal felnőttkor`);
}
else if (eletkor > 30 && eletkor <= 60) {
    document.write(`${eletkor} a felnőttkor`);
}
else if (eletkor > 60) {
    document.write(`${eletkor} az aggkor`);
}
document.write(`<hr>`)

document.write(`<h2>Otodik feladat!</h2>`)
let szam1 = Number(prompt(`Adj meg egy ujabb szamot!`));
let szam2 = Number(prompt(`Add meg mennyivel osszam!`));

if (szam1 % szam2 == 0) {
    document.write(`A ${szam1} oszthato ${szam2}-vel`);
}
else {
    document.write(`A ${szam1} nem oszthato ${szam2}-vel`);
}
document.write(`<hr>`)

document.write(`<h2>Hatodik feladat!</h2>`);

for (let i = 1; i <= 10; i++) {
    document.write(`A(z) ${i}. négyzetszám: ${i * i}<br>`);
}
