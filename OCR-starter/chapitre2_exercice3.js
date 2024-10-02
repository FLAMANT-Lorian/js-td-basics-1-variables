// Permutation de variables

// Solution classique utilisant une variable temporaire

let a = 4;
let b = 5;

let c; //temporaire

//Premier moyen de l'écrire

c = a;
a = b;
b = c;

//Meilleur moyen de l'écrire

[a,b] = [b,a];



// Solution alternative valable uniquement pour des nombres
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/
let a = 4;
let b = 5;
[a,b] = [b,a];
