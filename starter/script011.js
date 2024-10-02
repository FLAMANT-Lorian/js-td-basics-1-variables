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
console.log(`"La valeur de x est ${x} et la valeur de y est ${y}"`);
// Autres opérateurs







// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.

// Avec le ">" Supériorité stricte
let a = 16;
let b = 18;
console.log(a > b); //c'est une expression donc ça a une valeur (une affectation de valeur)

// Avec le "<" Infériorité stricte
console.log(a < b);

// Avec le "==="; Égalité  !!!!!!! NE PAS UTILISER LE DOUBLE EGALE
console.log(a === b);

// Avec le "!==" Inégalité
console.log(a !== b);

// Avec le ">=" Supériorité
console.log(a >= b);

// Avec le "<=" Infériorité
console.log(a <= b);

// Avec le "! devant la parenthèse" Négation !!!!!!!!! Toujours mettre des parenthèse sur ce qu'on veut qui soit à la négation
console.log(!(a > b));