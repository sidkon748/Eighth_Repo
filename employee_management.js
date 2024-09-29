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

console.log(jacob.getDetails()); 
console.log(olivia.getDetails());   
