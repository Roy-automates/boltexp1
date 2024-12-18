import { UserFormData } from '../types/form';

const WEBHOOK_URL = 'https://hook.eu2.make.com/3wu0jsy1ysu9gw8rl3z6hi8w7lz5frqo';

export const submitUserData = async (data: UserFormData): Promise<Response> => {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response;
};