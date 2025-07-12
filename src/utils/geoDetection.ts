// 地理位置检测和语言建议工具
import { getLanguageFromCountryCode } from './languageUtils';

export interface GeoLocation {
  country: string;
  suggestedLanguage: string;
  suggestedPath: string;
}

// 使用免费的GeoIP服务检测用户位置
export const detectUserLocation = async (): Promise<GeoLocation | null> => {
  try {
    // 使用ipapi.co的免费API（每天1000次请求限制）
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3秒超时
    
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error('GeoIP服务不可用');
    
    const data = await response.json();
    const countryCode = data.country_code?.toLowerCase();
    
    if (!countryCode) return null;
    
    // 根据国家代码推荐语言
    const suggestedLanguage = getLanguageFromCountryCode(countryCode);
    const suggestedPath = suggestedLanguage === 'en' ? '/' : `/${suggestedLanguage}`;
    
    return {
      country: countryCode,
      suggestedLanguage,
      suggestedPath
    };
  } catch (error) {
    console.warn('地理位置检测失败，使用默认语言:', error);
    return null;
  }
};

// 显示语言建议横幅（非强制重定向）
export const showLanguageSuggestion = (suggestedLanguage: string, currentLanguage: string) => {
  if (suggestedLanguage === currentLanguage) return;
  
  // 检查用户是否已经拒绝过建议
  const dismissedKey = `language-suggestion-dismissed-${suggestedLanguage}`;
  if (localStorage.getItem(dismissedKey)) return;
  
  // 创建语言建议横幅
  const banner = document.createElement('div');
  banner.id = 'language-suggestion-banner';
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #1e40af;
    color: white;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    z-index: 9999;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;
  
  const languageNames: Record<string, string> = {
    'de': 'Deutsch',
    'fr': 'Français', 
    'es': 'Español',
    'it': 'Italiano',
    'pt': 'Português',
    'pl': 'Polski',
    'zh': '中文',
    'ja': '日本語',
    'ko': '한국어',
    'ru': 'Русский',
    'ar': 'العربية',
    'th': 'ไทย',
    'vi': 'Tiếng Việt'
  };
  
  banner.innerHTML = `
    <span>建议查看${languageNames[suggestedLanguage] || suggestedLanguage}版本?</span>
    <button id="accept-suggestion" style="background: white; color: #1e40af; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: 500;">
      切换到${languageNames[suggestedLanguage]}
    </button>
    <button id="dismiss-suggestion" style="background: transparent; color: white; border: 1px solid white; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
      保持当前语言
    </button>
  `;
  
  document.body.prepend(banner);
  
  // 添加事件监听器
  document.getElementById('accept-suggestion')?.addEventListener('click', () => {
    const newPath = suggestedLanguage === 'en' ? window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') : `/${suggestedLanguage}${window.location.pathname}`;
    window.location.href = newPath;
  });
  
  document.getElementById('dismiss-suggestion')?.addEventListener('click', () => {
    localStorage.setItem(dismissedKey, 'true');
    banner.remove();
  });
  
  // 5秒后自动隐藏
  setTimeout(() => {
    if (document.getElementById('language-suggestion-banner')) {
      banner.remove();
    }
  }, 5000);
}; 