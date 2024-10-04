class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        return `Name of employee: ${this.name}, Position of employee: ${this.position}, Salary of employee: $${this.salary}`;
    }
}
const jacob = new Employee("Jacob", 84000, "Designer", "Marketing");
const olivia = new Employee("Olivia", 77000, "Developer", "Engineering");
const sophie = new Employee("Sophie", 84000, "Developer", "Marketing");
const mark = new Employee("Mark", 77000, "Designer", "Engineering");

console.log(jacob.getDetails()); 
console.log(olivia.getDetails());   
console.log(sophie.getDetails()); 
console.log(mark.getDetails()); 

class Department {
    constructor(name, employees){
        this.name = name;
        this.employees = [];

    }
    addEmployee(employee) {
        this.employees.push(employee);
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

}

const marketing = new Department("Marketing");
const engineering = new Department("Engineering");

marketing.addEmployee(jacob);
marketing.addEmployee(sophie);
engineering.addEmployee(olivia);
engineering.addEmployee(mark);

console.log(`Total salary in ${marketing.name} department: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary in ${engineering.name} department: $${engineering.getDepartmentSalary()}`);
