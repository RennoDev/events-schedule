import { useField } from "@unform/core"
import { InputHTMLAttributes, useEffect, useRef } from "react"
import { Container } from "./styles"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Input({ name, label, ...rest }: IInputProps) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    })
  }, [fieldName, registerField])
  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        autoComplete="off"
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  )
}