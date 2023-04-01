import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./service/ui/employee-form.js";
import { getRandomNumber } from "./service/utils/random.js";
/*const company = new Company();
company.addEmployee(createEmployee (123,"Vasya",2000,10000,"lod","israel"));
console.log(company.getEmployeesByAge(23));*/
const MIN_ID = 100000000;
const MAX_ID = 99999999;
const company = new Company();
const employeeForm = new EmployeeForm ("form-section");
function addEmployee(employeeData) {
    const id = getRandomNumber(MIN_ID, MAX_ID)
    const employee = createEmployee(id, employeeData.name,
        +employeeData.birthYear, + employeeData.salary,
        employeeData.city, employeeData.country);
    company.addEmployee(employee);
    console.log(employee)
}
employeeForm.addFormHandler(addEmployee)




