import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FloatingWidgets: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t, loading } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/8615012891148', '_blank');
  };

  // 如果翻译还在加载中，返回null避免错误
  if (loading) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {/* WhatsApp Widget */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={t('floating.contact') || 'Contact Us'}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Back to Top Widget */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-ishine-blue-500 hover:bg-ishine-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={t('floating.backToTop') || 'Back to top'}
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingWidgets;