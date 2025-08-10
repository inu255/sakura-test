import { useMemo, useState } from "react";
import { type Employee } from "@/shared/mock-api";
import { useDebounce } from "./useDebounce";

export function useFilteredEmployees(employees: Employee[]) {
  const [filterDept, setFilterDept] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const departments = useMemo(() => {
    const setDept = new Set<string>();
    employees.forEach((e) => setDept.add(e.department));
    return Array.from(setDept);
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    let filtered = employees;

    if (filterDept) {
      filtered = filtered.filter((e) => e.department === filterDept);
    }

    if (debouncedSearchTerm) {
      filtered = filtered.filter((e) =>
        e.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [employees, filterDept, debouncedSearchTerm]);

  const departmentOptions = useMemo(() => {
    return departments.map((d) => ({ label: d, id: d }));
  }, [departments]);

  return {
    filteredEmployees,
    departmentOptions,
    searchTerm,
    setSearchTerm,
    setFilterDept,
  };
}
