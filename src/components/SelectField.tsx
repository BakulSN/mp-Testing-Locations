import {
  Field,
  FieldWrapper,
  FieldIcon,
  Select,
} from "../styles/GlobalStyles.styles";
import { SelectFieldProps } from "../types/types";

const SelectField = ({
  value,
  onChange,
  options,
  label,
  icon,
  disabled = false,
  lastChar,
}: SelectFieldProps) => (
  <Field>
    {label}:
    <FieldWrapper>
      <FieldIcon src={icon} alt={label} />
      <Select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
      >
        <option value={0}>
          Выберите {label.slice(0, -1).toLowerCase() + lastChar}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </FieldWrapper>
  </Field>
);

export default SelectField;
