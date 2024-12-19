import {
  Field,
  FieldWrapper,
  FieldIcon,
  Input,
} from "../styles/GlobalStyles.styles";
import { HintFieldProps } from "../types/types";

const HintField = ({ value, onChange, placeholder, icon }: HintFieldProps) => (
  <Field>
    Подсказка:
    <FieldWrapper>
      <FieldIcon src={icon} alt="Hint" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </FieldWrapper>
  </Field>
);

export default HintField;
