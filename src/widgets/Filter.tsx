import { Select } from "@/components/base/select/select";
import { SelectItem } from "@/components/base/select/select-item";

type Props = {
  onChange: (value: string) => void;
  options: {
    label: string;
    id: string;
  }[];
};

export function Filter({ onChange, options }: Props) {
  return (
    <Select
      onSelectionChange={(value) => onChange(String(value))}
      items={[{ label: "Все", id: "" }, ...options]}
      className="w-64"
      label="Фильтр по отделу"
      placeholder="Выберите отдел"
    >
      {(item) => <SelectItem key={item.id} id={item.id} label={item.label} />}
    </Select>
  );
}
