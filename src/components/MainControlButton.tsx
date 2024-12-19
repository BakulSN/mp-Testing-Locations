import { MainControlButtonsProps } from "../types/types";
import {
  AddFormButton,
  SubmitButton,
  ButtonsWrapper,
  Icon,
} from "../styles/GlobalStyles.styles";

const MainControlButtons = ({
  onAdd,
  onSubmit,
  addIcon,
}: MainControlButtonsProps) => (
  <ButtonsWrapper>
    <AddFormButton onClick={onAdd}>
      <Icon src={addIcon} alt="Add" />
      <span>Добавить тестовую локацию...</span>
    </AddFormButton>
    <SubmitButton onClick={onSubmit}>Вывести результат</SubmitButton>
  </ButtonsWrapper>
);

export default MainControlButtons;
