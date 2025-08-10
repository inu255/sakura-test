import { useDebounce } from "@/hooks/useDebounce";
import { getEmployees } from "@/mock-api";
import { SearchInput } from "@/widgets/SearchInput";
import { Table } from "@/widgets/Table";
import { useMemo, useState } from "react";
import { Filter } from "./widgets/Filter";

export default function App() {
  const employees = useMemo(() => getEmployees(), []);
  const [filterDept, setFilterDept] = useState<string>("");

  // Собираем список уникальных департаментов для фильтра
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const departments = useMemo(() => {
    const setDept = new Set<string>();
    employees.forEach((e) => setDept.add(e.department));
    return Array.from(setDept);
  }, [employees]);

  // Фильтрация
  const filtered = useMemo(() => {
    let filteredEmployees = employees;

    if (filterDept) {
      filteredEmployees = filteredEmployees.filter((e) => e.department === filterDept);
    }

    if (debouncedSearchTerm) {
      filteredEmployees = filteredEmployees.filter((e) =>
        e.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    return filteredEmployees;
  }, [employees, filterDept, debouncedSearchTerm]);

  const options = useMemo(() => {
    return departments.map((d) => ({ label: d, id: d }));
  }, [departments]);

  return (
    <div className="w-full max-w-[1280px] px-4 mx-auto overflow-x-auto">
      <SearchInput value={searchTerm} onChange={setSearchTerm} />

      <Filter options={options} onChange={setFilterDept} />

      <Table employees={filtered} />
    </div>
  );
}
