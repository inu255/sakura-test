import { ArrowUp, ArrowDown } from "@untitledui/icons";
import { Table as TableComponent } from "@/components/application/table/table";
import { useMemo, useState } from "react";
import { Employee } from "@/mock-api";

type Props = { employees: Employee[] };

export function Table({ employees }: Props) {
  const [sortKey, setSortKey] = useState<keyof Employee | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  // Сортировка
  const sorted = useMemo(() => {
    if (!sortKey) return employees;
    return [...employees].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortDir === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [employees, sortKey, sortDir]);

  const onSort = (key: keyof Employee) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <TableComponent>
      <TableComponent.Header>
        <TableComponent.Row>
          <TableComponent.Head onClick={() => onSort("id")} style={{ cursor: "pointer" }}>
            ID {sortKey === "id" ? sortDir === "asc" ? <ArrowUp /> : <ArrowDown /> : ""}
          </TableComponent.Head>
          <TableComponent.Head onClick={() => onSort("name")} style={{ cursor: "pointer" }}>
            Имя {sortKey === "name" ? sortDir === "asc" ? <ArrowUp /> : <ArrowDown /> : ""}
          </TableComponent.Head>
          <TableComponent.Head onClick={() => onSort("position")} style={{ cursor: "pointer" }}>
            Должность{" "}
            {sortKey === "position" ? sortDir === "asc" ? <ArrowUp /> : <ArrowDown /> : ""}
          </TableComponent.Head>
          <TableComponent.Head onClick={() => onSort("department")} style={{ cursor: "pointer" }}>
            Отдел {sortKey === "department" ? sortDir === "asc" ? <ArrowUp /> : <ArrowDown /> : ""}
          </TableComponent.Head>
          <TableComponent.Head onClick={() => onSort("salary")} style={{ cursor: "pointer" }}>
            Зарплата {sortKey === "salary" ? sortDir === "asc" ? <ArrowUp /> : <ArrowDown /> : ""}
          </TableComponent.Head>
          <TableComponent.Head onClick={() => onSort("hireDate")} style={{ cursor: "pointer" }}>
            Дата найма {sortKey === "hireDate" ? (sortDir === "asc" ? "▲" : "▼") : ""}
          </TableComponent.Head>
        </TableComponent.Row>
      </TableComponent.Header>
      <TableComponent.Body>
        {sorted.map((emp) => (
          <TableComponent.Row key={emp.id}>
            <TableComponent.Cell>{emp.id}</TableComponent.Cell>
            <TableComponent.Cell>{emp.name}</TableComponent.Cell>
            <TableComponent.Cell>{emp.position}</TableComponent.Cell>
            <TableComponent.Cell>{emp.department}</TableComponent.Cell>
            <TableComponent.Cell>{emp.salary.toLocaleString("ru-RU")} ₽</TableComponent.Cell>
            <TableComponent.Cell>{emp.hireDate}</TableComponent.Cell>
          </TableComponent.Row>
        ))}
      </TableComponent.Body>
    </TableComponent>
  );
}
