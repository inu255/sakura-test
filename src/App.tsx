import { useState, useMemo } from "react";
import { getEmployees } from "@/mock-api";
import { Table } from "@/widgets/Table";
import { Filter } from "./widgets/Filter";

export default function App() {
  const employees = useMemo(() => getEmployees(), []);
  const [filterDept, setFilterDept] = useState<string>("");

  // Собираем список уникальных департаментов для фильтра
  const departments = useMemo(() => {
    const setDept = new Set<string>();
    employees.forEach((e) => setDept.add(e.department));
    return Array.from(setDept);
  }, [employees]);

  // Фильтрация
  const filtered = useMemo(() => {
    if (!filterDept) return employees;
    return employees.filter((e) => e.department === filterDept);
  }, [employees, filterDept]);

  const options = useMemo(() => {
    return departments.map((d) => ({ label: d, id: d }));
  }, [departments]);

  return (
    <div className="w-full max-w-[1280px] px-4 mx-auto overflow-x-auto ">
      <Filter options={options} onChange={setFilterDept} />

      <Table employees={filtered} />
    </div>
  );
}
