import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import Button from '../UI/Button';

const ContactFormA: React.FC = () => {
  const [mathQuestion, setMathQuestion] = useState(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return { a, b, answer: a + b };
  });

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    phone: '',
    country: '',
    business: '',
    timeline: '',
    message: '',
    verification: ''
  });

  const onSubmit = async (data: any) => {
    if (data.verification !== mathQuestion.answer) {
      alert('Please solve the math question correctly.');
      return;
    }
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for your inquiry! We will reply within 24 hours.');
    
    // Generate new math question
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setMathQuestion({ a, b, answer: a + b });
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What's in your mind? Let's talk.
          </h2>
          <p className="text-lg text-gray-600">we will reply you within 24 hours</p>
        </div>

        <form className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
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
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <input
                id="contact-email"
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
              <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Phone Number* e.g.(+1-541-3456-3001)"
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
              <label htmlFor="contact-country" className="sr-only">Country</label>
              <input
                id="contact-country"
                type="text"
                placeholder="Country*"
                value={values.country || ''}
                onChange={(e) => handleChange('country', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${
                  errors.country ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            <div>
              <label htmlFor="contact-business" className="sr-only">Business Experience</label>
              <select
                id="contact-business"
                value={values.business || ''}
                onChange={(e) => handleChange('business', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500"
              >
                <option value="">Are you new in IPL business?</option>
                <option value="new">I am new and need more help to start my own IPL project</option>
                <option value="experienced">I own a brand and would like to add more IPL production lines</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-timeline" className="sr-only">Project Timeline</label>
              <select
                id="contact-timeline"
                value={values.timeline || ''}
                onChange={(e) => handleChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500"
              >
                <option value="">When do you want to make your own IPL device?</option>
                <option value="3months">Within 3 months</option>
                <option value="6months">Within 6 months</option>
                <option value="1year">1+ year from now on</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="contact-message" className="sr-only">Message</label>
            <textarea
              id="contact-message"
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

          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="math-verification" className="text-lg font-medium">
                {mathQuestion.a} + {mathQuestion.b} =
              </label>
              <input
                id="math-verification"
                type="number"
                value={values.verification || ''}
                onChange={(e) => handleChange('verification', parseInt(e.target.value) || 0)}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500"
                required
                aria-label={`Math verification: ${mathQuestion.a} plus ${mathQuestion.b} equals`}
              />
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="button"
              onClick={() => handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Get A Quote!'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormA;