export abstract class Employee {
  public salary: number;
  tasks: string[] = [];

  private currentWorkIndex = 0;

  constructor(public name: string, public age: number) {}

  work(): void {
    console.log(this.tasks[this.currentWorkIndex]);
    this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;
  }
  collectSalary(): void {
    console.log(`${this.name} received ${this.calculateSalary()} this month.`);
  }
  calculateSalary() {
    return this.salary;
  }
}

export class Junior extends Employee {
  tasks: string[] = [`${this.name} is working on a simple task.`];
}

export class Senior extends Employee {
  tasks: string[] = [
    `${this.name} is working on a complicated task.`,
    `${this.name} is taking time of work.`,
    `${this.name} is supervising junior workers`,
  ];
}

export class Manager extends Employee {
  dividend: number;
  tasks: string[] = [
    `${this.name} scheduled a meeting.`,
    `${this.name} is preparing a quarterly report.`,
  ];
  calculateSalary() {
    return this.salary + this.dividend;
  }
}
