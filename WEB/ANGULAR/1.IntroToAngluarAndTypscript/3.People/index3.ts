import { Junior, Manager, Senior } from "./employee";

const junior = new Junior('George', 20);
junior.work();  // simple task

const senior = new Senior('Peter', 30);
senior.work();
senior.work();
senior.work();

const manager = new Manager('Alex', 40)

manager.work();
manager.work();
manager.collectSalary();