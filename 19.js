const employee1 = {id: 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee2 = {id: 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
console.log(`employee1==employee2 is ${employee1 == employee2}`)
const employee3 = employee1;
console.log(`employee3==employee1 is ${employee3 == employee1}`)
employee3.salary = 20000;
console.log(`employee1 salary = ${employee1.salary} `)

function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
@@ -29,26 +21,116 @@ const employee = employees.find(function(empl) {
})
//HW #18
function getEmployee(employees, id) {
    //TODO
    //returns reference to an Employee object with a given id value
    return employees.find( empl => empl.id === id);
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    //TODO
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    return employees.filter(empl => empl.salary >= salaryFrom &&
         empl.salary <= salaryTo) 
}
function getEmployeesByCity(employees, city) {
    //TODO
    //returns array of Employee objects from a given city
    return employees.filter(empl => empl.address.city == city);
}
function getEmployeeNames(employees) {
    //TODO

    //returns array of all Employee names
    return employees.map(empl => empl.name);
}
function sortEmployeesByAge(employees) {
    //TODO
    //returns array of Employee objects sorted by age in ascending order
    employees.sort( (e1, e2) => e2.birthYear - e1.birthYear);
}
function computeSalaryBudget(employees) {
    //TODO

    //computes and returns total salary for all Employee objects
}
    return employees.reduce((res, empl) => res + empl.salary, 0);
}
//console.log(computeSalaryBudget(employees))
function reducer(res, empl) {
    const newRes = res + empl.salary;
    return newRes
}
let field = "salary";
function displayFieldValue(employees, index, field) {
    console.log(employees[index][field]);
}
//displayFieldValue(employees, 3, "id");
// employees[0].salary = 20000;
// employees[0].department = "QA";
// displayFieldValue(employees, 0, "department");
// delete employees[0].department
// displayFieldValue(employees, 0, "department");
function computeMinMaxAvgSalary(employees) {
    const res =  employees.reduce((res, empl) => {
        if (res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
        } else if (res.maxSalary < empl.salary) {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;

    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary = res.avgSalary / employees.length;
    return res;
}
function displayValue(minMaxAvg, field) {
    console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
};
const minMaxAvg = computeMinMaxAvgSalary(employees);
// displayValue(minMaxAvg,"avgSalary");
// displayValue(minMaxAvg,"minSalary");
// displayValue(minMaxAvg,"maxSalary");
const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
//assumed result:
//xyz -> 3
//lmn -> 2
//a -> 1
//b -> 1
function displayStringOccurrences(strings) {
    const stringOccurrences = getStringOccurrences(strings);
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if(!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0){
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}
displayStringOccurrences(strings);
//HW #19
function getMostPopulatedCountry(employees) {
    //TODO 
    //returns country with most amount of employees
}
function getMostPupulatedCountries(employees, counter) {
    //returns a given number (conter) of countries with most amount of employees
}
function isAnagram(word, anagram) {
    //TODO 
    //returns true if a given anagram is indeed an angram of a given word
    //anagram must have  same length as word
    //anagram must have all letters from word
    //hello anagram examples: elolh, olleh, ohell, lehol
    //exampls non-anagrams: eloll (no h), ollehh(different length),
    // olaeh ("a" doesn't exist in word), oleh(different length)
}