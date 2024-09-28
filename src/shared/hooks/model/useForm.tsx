import { useState } from "react";

export const useForm = <T extends Record<string, any>>(formDataObject: T) => {
  const [formData, setFormData] = useState(formDataObject);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const register = (name: keyof T) => ({
    name,
    value: formData[name],
    onChange: handleChange,
  });

  const onSubmit =
    (handler: (data: T) => void) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); // 기본 동작 방지
      handler(formData); // handler에 formData 전달
    };

  return { register, onSubmit };
};
