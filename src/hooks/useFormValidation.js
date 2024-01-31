import { useState, useCallback } from "react";

export default function useFormWithValidation() {

  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  )

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: target.validationMessage
    });

    setIsValid(target.closest('form').checkValidity());
  }

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
};
