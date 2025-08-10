import { Table as TableComponent } from "@/shared/ui/application/table/table";
import { useMemo, useState } from "react";
import { type Employee } from "@/shared/mock-api";
import { formatDate } from "@/shared/utils/formatDate";
import { type SortDescriptor } from "react-aria-components";

type Props = { employees: Employee[] };

export function Table({ employees }: Props) {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "id",
    direction: "ascending",
  });

  const sorted = useMemo(() => {
    const { column, direction } = sortDescriptor;
    if (!column) return employees;
    const key = column as keyof Employee;

    return [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
  }, [employees, sortDescriptor]);

  return (
    <TableComponent
      aria-label="Employees"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableComponent.Header>
        <TableComponent.Head id="id" allowsSorting>
          ID
        </TableComponent.Head>
        <TableComponent.Head id="name" allowsSorting>
          Имя
        </TableComponent.Head>
        <TableComponent.Head id="position" allowsSorting>
          Должность
        </TableComponent.Head>
        <TableComponent.Head id="department" allowsSorting>
          Отдел
        </TableComponent.Head>
        <TableComponent.Head id="salary" allowsSorting>
          Зарплата
        </TableComponent.Head>
        <TableComponent.Head id="hireDate" allowsSorting>
          Дата найма
        </TableComponent.Head>
      </TableComponent.Header>
      <TableComponent.Body items={sorted}>
        {(item) => (
          <TableComponent.Row>
            <TableComponent.Cell>{item.id}</TableComponent.Cell>
            <TableComponent.Cell>{item.name}</TableComponent.Cell>
            <TableComponent.Cell>{item.position}</TableComponent.Cell>
            <TableComponent.Cell>{item.department}</TableComponent.Cell>
            <TableComponent.Cell>{item.salary.toLocaleString("ru-RU")} ₽</TableComponent.Cell>
            <TableComponent.Cell>{formatDate(item.hireDate)}</TableComponent.Cell>
          </TableComponent.Row>
        )}
      </TableComponent.Body>
    </TableComponent>
  );
}
