import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import MainControlButtons from "./MainControlButton";
import LocationItem from "./LocationItem";
import { Wrapper, Title } from "../styles/GlobalStyles.styles";
import { AddIcon } from "../assets";
import { FormType } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const TestLocationsForm: React.FC = observer(() => {
  const [forms, setForms] = useState<FormType[]>([
    { locationID: 0, envID: 0, hint: "", id: uuidv4() },
  ]);

  const handleAddForm = () => {
    setForms([...forms, { locationID: 0, envID: 0, hint: "", id: uuidv4() }]);
  };

  const handleRemoveForm = (id: string) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleChange = <K extends keyof FormType>(
    id: string,
    field: K,
    value: FormType[K]
  ) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id
          ? {
              ...form,
              [field]: value,
              ...(field === "locationID" && { envID: 0 }),
            }
          : form
      )
    );
  };

  const handleSubmit = () => {
    console.log(forms);
  };

  return (
    <Wrapper>
      <Title>Создание тестовой локации</Title>

      <MainControlButtons
        onAdd={handleAddForm}
        onSubmit={handleSubmit}
        addIcon={AddIcon}
      />

      {forms.map((form) => (
        <LocationItem
          key={form.id}
          form={form}
          onChange={(field, value) => handleChange(form.id, field, value)}
          onRemove={() => handleRemoveForm(form.id)}
        />
      ))}
    </Wrapper>
  );
});

export default TestLocationsForm;
