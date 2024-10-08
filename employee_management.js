//Task 1
//Create an Employee Class
class Employee {
    // Class Employee created with properties name, salary, position & department
    constructor(name, salary, position, department) { 
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    // getDetails method for printing employee name, position, and salary 
    getDetails() { 
        return `Name of Employee: ${this.name}, Position of Employee: ${this.position}, Salary of Employee: $${this.salary}`;
    }
}

//Task 3
//Create a Manager Class that Inherits from Employee
class Manager extends Employee { 
    // child class Manager inherents from employee parent class
    constructor(name, salary, position, department, bonus) { 
        // Adds bonus property to manager class
        super(name, position, salary, department);
        this.bonus = bonus;
        this.position = position;
        this.salary=salary;
    }
    // getDetails method for printing manager's bonus in addition to properties from Employee class
    getDetails() { 
        return `${super.getDetails()}, Bonus: $${this.bonus}`;
    }
}

// Eight employee & manager instances with name, salary, and departments properties
const jacob = new Manager("Jacob", 84000, "Designer", "Marketing", 8000);
const olivia = new Manager("Olivia", 77000, "Developer", "Engineering", 7000);
const sophia = new Employee("Sophie", 84000, "Developer", "Marketing");
const mark = new Employee("Mark", 77000, "Designer", "Engineering");
const luke = new Manager("Luke", 79000, "Designer", "Finance", 5000);
const andrea = new Manager("Andrea", 80000, "Developer", "Production", 8000);
const laura = new Employee("Laura", 81000, "Developer", "Finance");
const ryan = new Employee("Ryan", 79000, "Designer", "Production");

// Logs employee properties with getDetails method 
console.log(jacob.getDetails()); 
console.log(olivia.getDetails());   
console.log(sophia.getDetails()); 
console.log(mark.getDetails()); 
console.log(luke.getDetails()); 
console.log(andrea.getDetails());   
console.log(laura.getDetails()); 
console.log(ryan.getDetails()); 

//Task 2
//Create a Department Class
class Department {
    // class Department with name property and employee properties within Department class
    constructor(name, employees){
        this.name = name;
        this.employees = [];

    }
    // addEmployee method adds employees to an employees array
    addEmployee(employee) {
        this.employees.push(employee);
    }
    // getDepartmentSalary method to calculate total of all employees in a departent salaries with reduce function
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

    calculateTotalSalaryWithBonus(){
        let totalSalary = 0;

        for (const employee of this.employees) {
            if (employee instanceof Manager) {
                totalSalary += employee.salary + employee.bonus; // Add salary and bonus for managers
            } else {
                totalSalary += employee.salary; // Add salary for regular employees
            }
        }

        return totalSalary;
    }
    

}

// Defines four instances of class Department for employees with their name properties 
const marketing = new Department("Marketing");
const engineering = new Department("Engineering");
const finance = new Department("Finance");
const production = new Department("Production");

// Adds all salaries for each department class
marketing.addEmployee(jacob);
marketing.addEmployee(sophia);
engineering.addEmployee(olivia);
engineering.addEmployee(mark);
finance.addEmployee(luke);
finance.addEmployee(laura);
production.addEmployee(andrea);
production.addEmployee(ryan);

// Logs Department total salries of each department
console.log(`Total Salary in Marketing Department: $${marketing.getDepartmentSalary()}`);
console.log(`Total Salary in Engineering Department: $${engineering.getDepartmentSalary()}`);
console.log(`Total Salary in Finance Department: $${finance.getDepartmentSalary()}`);
console.log(`Total Salary in Production Department: $${production.getDepartmentSalary()}`);

// Logs total salary with bonuses for each department
console.log(`Total Salary with Bonuses in Marketing Department: $${marketing.calculateTotalSalaryWithBonus()}`);
console.log(`Total Salary with Bonuses in Engineering Department: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total Salary with Bonuses in Marketing Department: $${finance.calculateTotalSalaryWithBonus()}`);
console.log(`Total Salary with Bonuses in Engineering Department: $${production.calculateTotalSalaryWithBonus()}`);
