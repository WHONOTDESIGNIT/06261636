import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { i18nConfig } from '../i18n.config';

interface TranslationOptions {
  fallback?: string;
  interpolation?: { [key: string]: string | number };
  context?: string;
  count?: number;
}

export const useTranslation = () => {
  const { t: i18nT, i18n } = useI18nTranslation();

  const validateKey = useCallback((key: string): boolean => {
    // 检查键名格式
    if (!i18nConfig.namingRules.pattern.test(key)) {
      console.warn(`Invalid translation key format: ${key}`);
      return false;
    }

    // 检查键名长度
    if (key.length > i18nConfig.namingRules.maxKeyLength) {
      console.warn(`Translation key too long: ${key}`);
      return false;
    }

    // 检查嵌套深度
    const depth = key.split('.').length;
    if (depth > i18nConfig.namingRules.maxDepth) {
      console.warn(`Translation key nesting too deep: ${key}`);
      return false;
    }

    return true;
  }, []);

  const validateTranslation = useCallback((translation: string, key: string): boolean => {
    if (!translation || translation === key) {
      console.warn(`Missing translation for key: ${key} in language: ${i18n.language}`);
      return false;
    }

    // 检查字符串长度
    if (
      i18nConfig.validationRules.checkLength.enabled &&
      translation.length > i18nConfig.validationRules.checkLength.maxLength
    ) {
      console.warn(`Translation too long for key: ${key}`);
      return false;
    }

    // 检查HTML标签
    if (i18nConfig.validationRules.checkHtmlTags) {
      const openTags = translation.match(/<[^/][^>]*>/g) || [];
      const closeTags = translation.match(/<\/[^>]*>/g) || [];
      if (openTags.length !== closeTags.length) {
        console.warn(`Mismatched HTML tags in translation for key: ${key}`);
        return false;
      }
    }

    // 检查占位符
    if (i18nConfig.validationRules.checkPlaceholders) {
      const placeholders = translation.match(/{{[^}]+}}/g) || [];
      const uniquePlaceholders = new Set(placeholders);
      if (placeholders.length !== uniquePlaceholders.size) {
        console.warn(`Duplicate placeholders in translation for key: ${key}`);
        return false;
      }
    }

    return true;
  }, [i18n.language]);

  const t = useCallback((key: string, options: TranslationOptions = {}) => {
    // 验证键名
    if (!validateKey(key)) {
      return options.fallback || key;
    }

    // 检查是否需要保持原文
    if (i18nConfig.specialRules.preserveOriginal.includes(key)) {
      const originalTranslation = i18nT(key, { lng: 'en' });
      return originalTranslation;
    }

    // 获取翻译
    const translation = i18nT(key, {
      ...options,
      defaultValue: options.fallback,
      interpolation: {
        escapeValue: false,
        ...options.interpolation
      }
    });

    // 验证翻译内容
    if (!validateTranslation(translation, key)) {
      return options.fallback || key;
    }

    // 处理数字格式
    if (i18nConfig.specialRules.numberFormat.includes(key)) {
      return new Intl.NumberFormat(i18n.language).format(Number(translation));
    }

    // 处理日期格式
    if (i18nConfig.specialRules.dateFormat.includes(key)) {
      return new Intl.DateTimeFormat(i18n.language).format(new Date(translation));
    }

    return translation;
  }, [i18nT, i18n.language, validateKey, validateTranslation]);

  return {
    t,
    i18n,
    currentLanguage: i18n.language,
    isRTL: ['ar', 'he'].includes(i18n.language),
    supportedLanguages: i18nConfig.supportedLanguages,
    changeLanguage: i18n.changeLanguage
  };
};

export default useTranslation; 