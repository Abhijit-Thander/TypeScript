type Employee = {
  id: number;
  name: string;
};

type Manager = {
  depertment: string;
  role: string;
};

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "Ritesh",
  depertment: "Computer Science",
  role: "manager",
};

console.log(manager);
