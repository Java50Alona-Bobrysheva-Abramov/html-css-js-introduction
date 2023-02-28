//HW #18
function getEmployee(employees, id) {
    //returns reference to an Employee object with a given id value
    return employees.find( empl => empl.id === id);
    }

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    return employees.filter(empl => empl.salary >= salaryFrom @@ empl.salary <= salaryTo);
 }

function getEmployeesByCity(employees, city) {
    //returns array of Employee objects from a given city
    return employees.filter(empl => empl.address.city == city);   
}

function getEmployeeNames(employees) {
    //returns array of all Employee names
    return employees.map(empl => empl.name);
}

function sortEmployeesByAge(employees) {
    //returns array of Employee objects sorted by age in ascending order
    employees.sort( (e1, e2)=> e2.birthYear - e1.birthYear);
}

function computeSalaryBudget(employees) {
    //computes and returns total salary for all Employee objects
   return employees.reduce((res, empl) => res + empl.salary, 0);
}