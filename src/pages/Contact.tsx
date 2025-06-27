import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactFormB from '../components/Forms/ContactFormB';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['iShine Manufacturing Co., Ltd.', 'Shenzhen, Guangdong, China']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 400-123-4567', '+86 755-8888-9999']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ishine-ipl.com', 'sales@ishine-ipl.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 12:00 PM']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Ready to discuss your IPL project? Get in touch with our expert team today. 
              We're here to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 新增的图片区域 - 与Hero Section同高 */}
      <section className="relative h-[33vh] min-h-[500px] w-full">
        {/* 图片容器 - 确保图片覆盖整个区域 */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/contact/hero-image.jpg" // 替换为您的图片路径
            alt="iShine Manufacturing Facility"
            className="w-full h-full object-cover object-center"
          />
          {/* 半透明遮罩 */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* 可选：在图片上添加文字内容 */}
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Headquarters</h2>
            <p className="text-xl max-w-2xl mx-auto">
              State-of-the-art manufacturing facility in Shenzhen, China
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <info.icon className="w-12 h-12 text-ishine-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Shenzhen's manufacturing district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-gradient-to-br from-ishine-blue-100 to-ishine-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-ishine-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">iShine Manufacturing</h3>
                  <p className="text-gray-600">Shenzhen, Guangdong, China</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormB />
    </div>
  );
};

export default Contact;