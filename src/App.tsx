import { getEmployees } from "@/shared/mock-api";
import { Filter } from "@/widgets/Filter";
import { SearchInput } from "@/widgets/SearchInput";
import { Table } from "@/widgets/Table";
import { useMemo } from "react";
import { useFilteredEmployees } from "./shared/hooks/useFilteredEmployees";

export default function App() {
  const employees = useMemo(() => getEmployees(), []);
  const { filteredEmployees, departmentOptions, searchTerm, setSearchTerm, setFilterDept } =
    useFilteredEmployees(employees);

  // TODO состояние загрузки?
  return (
    <div className="w-full max-w-[1280px] px-4 mx-auto overflow-x-auto prose">
      <h1>Сотрудники</h1>

      <div className="flex gap-2 flex-col md:flex-row">
        <SearchInput value={searchTerm} onChange={setSearchTerm} />

        <Filter options={departmentOptions} onChange={setFilterDept} />
      </div>

      <Table employees={filteredEmployees} />
    </div>
  );
}
