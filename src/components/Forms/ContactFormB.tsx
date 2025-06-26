import React from 'react';
import { useForm } from '../../hooks/useForm';
import Button from '../UI/Button';

const ContactFormB: React.FC = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const onSubmit = async () => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for your message! We\'ll be in touch within 24hrs.');
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What's in your mind? Let's talk!
          </h2>
          <p className="text-lg text-gray-600">
            Fill out this form to get the process started. We'll be in touch within 24hrs.
          </p>
        </div>

        <form className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Name*"
                value={values.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address*"
                value={values.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone number* e.g.(+1-541-3456-3001)"
                value={values.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Country"
                value={values.country || ''}
                onChange={(e) => handleChange('country', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <textarea
              placeholder="Describe your needs here*"
              value={values.message || ''}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="mt-8">
            <Button
              type="button"
              variant="form"
              onClick={() => handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormB;