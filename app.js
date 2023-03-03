arrayOccurrences.sort(stringComp);
arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences(strings) {
function getStringsOccurrences(strings) {
const res = {};
strings.forEach(str => {
    if(!res[str]) {
@@ -113,14 +113,27 @@ function stringComp(entry1, entry2) {
}
return res;
}
displayStringOccurrences(strings);
//displayStringOccurrences(strings);
//HW #19
function getMostPopulatedCountry(employees) {
//returns country with most amount of employees
const countries = getCountriesSortedByOccurrences(employees);
return countries[0];
}

function getMostPupulatedCountries(employees, counter) {
//returns a given number (conter) of countries with most amount of employees
const countries = getCountriesSortedByOccurrences(employees);
return countries.slice(0, counter);

}
function getCountriesSortedByOccurrences(employees) {
const countries = employees.map(e => e.address.country);
const countriesOccurrences = getStringsOccurrences(countries);
const arrayOccurrences = Object.entries(countriesOccurrences);
arrayOccurrences.sort(stringComp);
return arrayOccurrences.map(entry => entry[0]);

}
function isAnagram(word, anagram) {
//TODO 
@@ -130,6 +143,25 @@ function isAnagram(word, anagram) {
//hello anagram examples: elolh, olleh, ohell, lehol
//exampls non-anagrams: eloll (no h), ollehh(different length),
// olaeh ("a" doesn't exist in word), oleh(different length)
let res = false;
if (word.length === anagram.length) {
    const letters = Array.from(word);
const lettersOccurrences = getStringsOccurrences(letters);
const anagramLetters = Array.from(anagram);
res = anagramLetters.every(letter => {
    let res = false;
    if (lettersOccurrences[letter]) {
        res = true;
        lettersOccurrences[letter]--;
        if(lettersOccurrences[letter] == 0) {
            delete lettersOccurrences[letter];
        }
    }
    return res;
})
}
return res;

}
