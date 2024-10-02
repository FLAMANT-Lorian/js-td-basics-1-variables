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

const markWeight = 50; // C'est une instruction, mais aussi une déclaration de constante et initialisation de constante
const markHeight = 1.75;
const markBMI = markWeight / Math.pow(markHeight, y=2);
// OU const markBMI = markWeight / markHeight * markHeight; markWeight / markHeight * markHeightest une expression numérique

// Jhon

const jhonWeight = 103;
const jhonHeight = 1.8;
const jhonBMI = jhonWeight / Math.pow(jhonHeight, y=2);
// OU const jhonBMI = jhonWeight / jhonHeight * jhonHeight;

const isMarkBiggerThanJhon = markBMI > jhonBMI; //markBMI > jhonBMI est une expression booléenne/ de comparaison

console.log(`Est-ce que le BMI de Mark et plus élevé que celui de Jhon ? ${isMarkBiggerThanJhon}. Jhon à précisement un BMI de ${jhonBMI} et Mark de ${markBMI}.`);

/*
// l'ensemble est une structure de contrôle
if (markBMI > jhonBMI){ // dans les parenthèses, c'est la condition
    console.log(`Mark a un BMI plus élevé que celui Jhon`);
    console.log(`Mark (BMI) : ` +  Math.trunc(markBMI)); // le "trunc" permet de gérer le nombre après la virgule
    console.log(`Mark (BMI) : ` +  Math.ceil(markBMI)); // le "trunc" permet d'arrondir vers le haut
    console.log(`Mark (BMI) : ` +  Math.floor(markBMI)); // le "trunc" permet d'arrondir vers le bas

} else {
    if (jhonWeight > 100){
        console.log('Aie ...');
    } else {
        console.log(`Jhon a un BMI plus élevé que celui Mark`);
    }
}

 */

// Le sucre syntaxique (On met le else if au lieu d'imbriquer)
if (markBMI > jhonBMI){ // (markBMI > jhonBMI) c'est la condition mais sans les parenthèses, c'est une expression booléenne
    console.log(`Mark a un BMI plus élevé que celui Jhon`); // `Mark a un BMI plus élevé que celui Jhon` est une expression
    if (markBMI < 18){
        console.log(`Mark (BMI < 18) : ` + Math.trunc(markBMI));
    } else if (markBMI < 25){
        console.log(`Mark (BMI < 25) : ` + Math.trunc(markBMI));
    } else if (markBMI < 35){
        console.log(`Mark (BMI < 35) : ` + Math.trunc(markBMI));
    } else {
        console.log(`Mark (BMI > 35) : ` + Math.trunc(markBMI));
    }
} else {
    console.log(`Jhon a un BMI plus élevé que celui Mark`);
    if (jhonBMI < 18) {
        console.log(`Jhon (BMI < 18) : ` + Math.trunc(jhonBMI));
    } else if (jhonBMI < 25) {
        console.log(`Jhon (BMI < 25) : ` + Math.trunc(jhonBMI));
    } else if (jhonBMI < 35) {
        console.log(`Jhon (BMI < 35) : ` + Math.trunc(jhonBMI));
    } else {
        console.log(`Jhon (BMI > 35) : ` + Math.trunc(jhonBMI));
    }
}

/*
// La même chose mais avec des switchs
switch (markBMI){
    case (jhonBMI < 18) :
        console.log(`Jhon (BMI < 18) : ` + Math.trunc(jhonBMI));
        break;
    case(jhonBMI < 25) :
        console.log(`Jhon (BMI < 25) : ` + Math.trunc(jhonBMI));
        break;
    default :
        console.log(`Jhon (BMI > 35) : ` + Math.trunc(jhonBMI));
        break;
}
*/

/*
if (markBMI < 18){
    console.log(`Mark (BMI < 18) : ` + Math.trunc(markBMI));
} else if (markBMI < 25){
    console.log(`Mark (BMI < 25) : ` + Math.trunc(markBMI));
} else if (markBMI < 35){
    console.log(`Mark (BMI < 35) : ` + Math.trunc(markBMI));
} else {
    console.log(`Mark (BMI > 35) : ` + Math.trunc(markBMI));
}
*/