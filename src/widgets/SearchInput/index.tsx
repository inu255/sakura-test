import { Input } from "@/components/base/input/input";
import { SearchMd } from "@untitledui/icons";

type Props = { value: string; onChange: (value: string) => void };

export function SearchInput({ value, onChange }: Props) {
  return (
    <Input
      className="w-64"
      placeholder="Введите имя"
      value={value}
      onChange={onChange}
      label="Поиск по имени"
      icon={SearchMd}
    />
  );
}
