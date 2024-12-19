export interface FormType {
  id: string;
  locationID: number;
  envID: number;
  hint: string;
}

export interface LocationItemProps {
  form: FormType;
  onChange: <K extends keyof FormType>(field: K, value: FormType[K]) => void;
  onRemove: () => void;
}

export interface MainControlButtonsProps {
  onAdd: () => void;
  onSubmit: () => void;
  addIcon: string;
}

export interface HintFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: string;
}
export interface InfoFieldProps {
  label: string;
  value: string | number;
  icon: string;
}

export interface InfoFieldProps {
  label: string;
  value: string | number;
  icon: string;
}

export interface SelectFieldProps {
  value: number;
  onChange: (value: number) => void;
  options: { id: number; name: string }[];
  label: string;
  icon: string;
  disabled?: boolean;
  lastChar: string;
}
