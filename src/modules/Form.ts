export interface IForm {
  page_title: string;
  fields: IFormFields[];
}

export interface IFormFields {
  id: string;
  label: string;
  value: string;
  type: string;
  mandatory: boolean;
  placeholder: string;
  options?: ISelecOption[];
}

export interface ISelecOption {
  label: string;
}

export interface IFormProvider {
  handleChange: (id: string | number | undefined, event: Event) => void;
}
