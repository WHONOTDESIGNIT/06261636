import { useState } from 'react';
import { ContactFormData } from '../types';

export const useForm = (initialValues: Partial<ContactFormData>) => {
  const [values, setValues] = useState<Partial<ContactFormData>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: string, value: string | number) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!values.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!values.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!values.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!values.country?.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!values.message?.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (onSubmit: (data: ContactFormData) => Promise<void>) => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(values as ContactFormData);
      setValues(initialValues);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};