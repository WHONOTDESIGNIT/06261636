import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactFormB from '../components/Forms/ContactFormB';

const Contact: React.FC = () => {
  const contactInfo = [
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
      <section className="relative h-[23vh] min-h-[500px] w-full">
        {/* 图片容器 - 确保图片覆盖整个区域 */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://i.postimg.cc/63r0rmF6/company-photo.webp" // 替换为您的图片路径
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
          </motion.div>
        </div>
      </section>




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