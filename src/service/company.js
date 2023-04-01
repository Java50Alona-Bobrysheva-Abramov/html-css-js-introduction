/* HW #21 */
import { employeeConfig } from "../config/employee-config.js";
import { getRandomNumber } from "../utils/random.js";
// Employe structure and function createEmployee() taken from previous HW
export function createEmployee(name, birthYear, salary, city, country) {
    return { name, birthYear, salary, address: { city, country } }
}
export class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        //adds empl into #employees object
        //returns true if added new employee object
        //returns false if employee with a given id value already exists
        const res = checkEmployeeData(empl);
        const id = this.#getId();
        if (res === '') {
            const id = this.#getId();

            empl.id = id;
            this.#employees[id] = empl;
        }

        return res;
        return {message: res, id};
    }
    removeEmployee(id) {
        //removes employee with a given id from #employees object
@@ -64,6 +65,10 @@ export class Company {
        do {
            id = getRandomNumber(employeeConfig.minId, employeeConfig.maxId + 1);
        }while(this.#employees[id]);
        return id;
    }
    getAllEmployees() {
        return Object.values(this.#employees);
    }
}
function checkEmployeeData(employee) {
    let resStr = '';
    if (employee.salary < employeeConfig.minSalary ||
        employee.salary > employeeConfig.maxSalary) {
        resStr = `salary must be in the range [${employeeConfig.minSalary}-${employeeConfig.maxSalary}]; `
    }
    if (employee.birthYear < employeeConfig.minYear ||
        employee.birthYear > employeeConfig.maxYear) {
        resStr += `birth year must be in the range [${employeeConfig.minYear}-${employeeConfig.maxYear}]`
    }
    return resStr;
}