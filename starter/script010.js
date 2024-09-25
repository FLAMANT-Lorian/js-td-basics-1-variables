/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let now = 2019;
let ageJhon = 28;
let ageMark = 33;
let yearJhon;
let yearMark;

// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJhon = now - ageJhon;
yearMark = now - ageMark;
console.log(yearJhon);
console.log(`Mark est né en ${yearMark}`);

// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
console.log(now + 2);
console.log(now * 2);
console.log(now / 10 + now);
// Opérateurs logiques

// 4. … (Veuillez préciser votre question ou vos actions ici)

// Opérateur typeof
