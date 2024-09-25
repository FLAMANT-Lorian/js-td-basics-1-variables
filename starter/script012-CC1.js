/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
// 2. Calculez le BMI de chacun.
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
//
// BONNE CHANCE 😀

// Mark

let markWeight = 60;
let markHeight = 1.7;
let markBMI = markWeight / markHeight**2;

// Jhon

let jhonWeight = 85;
let jhonHeight = 1.95;
let jhonBMI = jhonWeight / jhonHeight**2;

let compBMI = jhonBMI >= markBMI;

console.log(`Est-ce que le BMI de Mark et plus élevé que celui de Jhon ? ${compBMI}. Jhon à précisement un BMI de ${markBMI} et Jhon de ${jhonBMI}.`);