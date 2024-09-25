/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
console.log(8 * 32 / 6 + 7);
// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
console.log((8 + 56)/9 * 3);
console.log(8 + 56/9 * 3);
// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.

let x = 5, y = 10; /*x et y ont une valeur égal à 2*/
console.log(`La valeur de x est ${x} et la valeur de y est ${y}`);
// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.

// Avec le ">" Supériorité stricte
x = 3>6;
console.log(x);

// Avec le "<" Infériorité stricte
x = 3<6;
console.log(x);

// Avec le "=="; Égalité
x = 6==6;

// Avec le "!=" Inégalité
x = 6!=6;
console.log(x);

// Avec le "===" Égalité stricte
x = 6===6;
console.log(x);

// Avec le ">=" Supériorité
x = 4>=4;
console.log(x);

// Avec le "<=" Infériorité
x = 5<=4;
console.log(x);