export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  hireDate: string;
}

export function getEmployees(): Employee[] {
  return [
    {
      id: 1,
      name: "Иван Петров",
      position: "Frontend Developer",
      department: "IT",
      salary: 120000,
      hireDate: "2022-05-15",
    },
    {
      id: 2,
      name: "Алексей Смирнов",
      position: "HR Manager",
      department: "HR",
      salary: 90000,
      hireDate: "2021-11-20",
    },
    {
      id: 3,
      name: "Мария Иванова",
      position: "Backend Developer",
      department: "IT",
      salary: 130000,
      hireDate: "2020-03-10",
    },
    {
      id: 4,
      name: "Ольга Кузнецова",
      position: "UX Designer",
      department: "Design",
      salary: 110000,
      hireDate: "2019-07-01",
    },
    {
      id: 5,
      name: "Дмитрий Соколов",
      position: "QA Engineer",
      department: "IT",
      salary: 95000,
      hireDate: "2023-01-15",
    },
    {
      id: 6,
      name: "Екатерина Федорова",
      position: "Product Manager",
      department: "Product",
      salary: 140000,
      hireDate: "2018-09-30",
    },
    {
      id: 7,
      name: "Андрей Морозов",
      position: "DevOps Engineer",
      department: "IT",
      salary: 125000,
      hireDate: "2021-05-22",
    },
    {
      id: 8,
      name: "Наталья Васильева",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 85000,
      hireDate: "2022-11-05",
    },
    {
      id: 9,
      name: "Сергей Николаев",
      position: "Data Analyst",
      department: "Analytics",
      salary: 115000,
      hireDate: "2020-08-18",
    },
    {
      id: 10,
      name: "Анна Соколова",
      position: "Content Writer",
      department: "Marketing",
      salary: 78000,
      hireDate: "2023-04-10",
    },
    {
      id: 11,
      name: "Владимир Григорьев",
      position: "Support Engineer",
      department: "Support",
      salary: 70000,
      hireDate: "2019-12-12",
    },
    {
      id: 12,
      name: "Юлия Михайлова",
      position: "HR Specialist",
      department: "HR",
      salary: 90000,
      hireDate: "2021-06-25",
    },
  ];
}
