// Prédiction de valeurs

//- Initialisez une variable a (syntaxe ES6) à la valeur 2 ;
//- Décrémentez a de 1 ;
//- Incrémentez-la de 1 ;
//- Initialisez une variable b (syntaxe ES6) à la valeur 8 ;
//- Incrémentez b de 2 ;
//- Définissez une constante c comme étant la somme de a et du résultat de la multiplication de b par b ;
//- Déclarez une constante d et affectez-lui comme valeur a * b + b ;
//- Déclarez une constante e et affectez-lui comme valeur a * (b + b) ;
//- Déclarez une constante f et affectez-lui comme valeur a * b / a ;
//- Déclarez une constante g et affectez-lui comme valeur b / a * a ;
//- Devinez les valeurs à présent contenues dans chacune de ces 7 variables ;
//- Affichez les valeurs des 7 variables dans la console


// Initialisez la variable a à 2
let a = 2;
// Décrémentez a de 1
a--;
// Incrémentez a de 1
a++;
// Initialisez la variable b à 8
let b = 8;
// Incrémentez b de 2
b += 2;
// Déclarez la constante c et calculez sa valeur
const c = a + (b*b);
// --> La valeur de la constante est égal à 102
// Déclarez la constante d et calculez sa valeur
const d = a * b + b;
// --> La valeur de la constante est égal à 30
// Déclarez la constante e et calculez sa valeur
const e = a * (b + b);
// --> La valeur de la constante est égal à 40
// Déclarez la constante f et calculez sa valeur
const f = a * b / a;
// --> La valeur de la constante best égal à 10
// Déclarez la constante g et calculez sa valeur
const g = b / a * a;
// --> La valeur de la constante est égal à 10
// Affichez les valeurs des 7 variables dans la console
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);