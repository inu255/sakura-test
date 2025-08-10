import { useState, useMemo } from "react";
import { getEmployees } from "@/mock-api";
import { Table } from "@/widgets/Table";

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

  return (
    <div className="w-full max-w-[1280px] px-4 mx-auto overflow-x-auto">
      <label>
        Фильтр по отделу:{" "}
        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
          style={{ marginBottom: 10 }}
        >
          <option value="">Все</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <Table employees={filtered} />
    </div>
  );
}
