export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const getFormErrors = (data: { name: string; email: string }) => {
  const errors: { name?: string; email?: string } = {};

  if (!validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
};