import { IconWrapper, Icon, Field } from "../styles/GlobalStyles.styles";
import { InfoFieldProps } from "../types/types";

const InfoField = ({ label, value, icon }: InfoFieldProps) => (
  <Field>
    {label}:
    <IconWrapper>
      <Icon src={icon} alt={label} />
    </IconWrapper>
    {value}
  </Field>
);

export default InfoField;
