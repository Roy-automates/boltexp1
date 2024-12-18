import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import { submitUserData } from '../../services/api';
import { getFormErrors } from '../../utils/validation';
import { UserFormData, FormErrors } from '../../types/form';

export default function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = getFormErrors(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      await submitUserData(formData);
      
      // Store user data in localStorage
      localStorage.setItem('userName', formData.name);
      localStorage.setItem('userEmail', formData.email);
      
      // Navigate to assessment page
      navigate('/assessment');
    } catch (error) {
      setErrors({ 
        email: 'Failed to submit form. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Get Your Free AI Audit</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
        Discover how AI can revolutionize your business. Our cutting-edge AI Value Assessment Tool analyzes your
        business needs and recommends tailored AI solutions to boost efficiency, customer satisfaction, and revenue.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          type="text"
          label="Your Name"
          value={formData.name}
          onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
          error={errors.name}
          placeholder="Enter your full name"
          disabled={isLoading}
        />
        
        <FormInput
          type="email"
          label="Your Email Address"
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
          error={errors.email}
          placeholder="Enter your email address"
          disabled={isLoading}
        />

        <SubmitButton isLoading={isLoading} />
      </form>
    </div>
  );
}