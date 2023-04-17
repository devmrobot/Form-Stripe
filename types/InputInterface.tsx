import { InputHTMLAttributes, SetStateAction } from "react";

export interface IOption {
  label: string;
  name?: string;
  price?: number;
  disabled?: boolean;
}

export interface IInputGroup {
  label: string;
  options: IOption[];
  index: number;
  selectedValue: string;
  value: string;
  setSelectedValue: (num: string) => void;
  price?: number;
  hasFullWidth?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  error?: boolean;
  disabled?: boolean;
}
