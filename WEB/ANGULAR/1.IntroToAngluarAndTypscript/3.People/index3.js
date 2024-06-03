"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var junior = new employee_1.Junior('George', 20, 500);
junior.work(); // simple task
var senior = new employee_1.Senior('Peter', 30, 1000);
senior.work();
senior.work();
senior.work();
var manager = new employee_1.Manager('Alex', 40, 1500);
manager.work();
manager.work();
manager.collectSalary();
