import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { detectUserLocation, showLanguageSuggestion } from '../../utils/geoDetection';

const LanguageDetector: React.FC = () => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const performGeoDetection = async () => {
      try {
        // 检查是否是首次访问
        const hasVisitedBefore = localStorage.getItem('user-visited-before');
        if (hasVisitedBefore) return;

        // 检测用户地理位置
        const geoData = await detectUserLocation();
        if (!geoData) return;

        // 如果建议的语言与当前语言不同，显示建议横幅
        if (geoData.suggestedLanguage !== currentLanguage) {
          showLanguageSuggestion(geoData.suggestedLanguage, currentLanguage);
        }

        // 标记用户已访问过
        localStorage.setItem('user-visited-before', 'true');
      } catch (error) {
        console.warn('地理位置检测失败:', error);
      }
    };

    // 延迟执行，避免影响页面初始加载
    const timer = setTimeout(performGeoDetection, 1000);
    
    return () => clearTimeout(timer);
  }, [currentLanguage]);

  // 这是一个功能性组件，不渲染任何UI
  return null;
};

export default LanguageDetector; 