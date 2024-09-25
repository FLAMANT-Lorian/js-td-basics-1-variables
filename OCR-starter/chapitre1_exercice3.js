// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
*/
let a = 4 + 5;
console.log(a);
/*
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    --> Une simple addition
    * quel est le résultat de l'opération ?
    --> Le résultat de l'addition est de 9
- 4 et 5 sont toutes deux de type chaîne :
*/
a = '4' + '5';
console.log(a);
/*
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    --> Il va noter les 2 caractères un à la suite de l'autre
    * quel est le résultat de l'opération ?
    --> Dans la console, il est noté 45
- 4 est de type chaîne et 5 est de type nombre :
*/
a = '4' + 5;
console.log(a);
/*
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    --> Toujours aucune
    * quel est le résultat de l'opération ?
    --> Dans la console, il est noté 45
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/
a = "'4' + 5";
console.log(a);
/*
*/

// Cas 1 : 4 et 5 sont toutes deux de type nombres
// L'addition se fait normalement

// Cas 2 : 4 et 5 sont toutes deux de type chaîne
// La console va noter les 2 caractères un à la suite de l'autre

// Cas 3 : 4 est de type chaîne et 5 est de type nombre
//La console va noter les 2 caractères un à la suite de l'autre, le paramètre de valeur 5 va se faire transormer en chaine de caractères

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
// On indique que l'opération "'4' + 5" doit être noté sous forme de chaine de caractères donc cela note précisément ce qui est indiqué