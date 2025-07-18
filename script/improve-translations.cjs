const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');

// 获取所有语言文件
const translationsDir = path.join(__dirname, '../src/translations');
const enJsonPath = path.join(translationsDir, 'en.json');
const enJson = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));

// 核心术语翻译映射
const termMappings = {
  'ar': {
    'IPL': 'IPL',
    'hair removal': 'إزالة الشعر',
    'manufacturing': 'تصنيع',
    'OEM': 'OEM',
    'ODM': 'ODM',
    'device': 'جهاز',
    'quality': 'جودة',
    'contact': 'اتصل بنا',
    'about': 'عن الشركة',
    'solutions': 'الحلول',
    'service': 'الخدمة',
    'support': 'الدعم',
    'blog': 'المدونة',
    'home': 'الرئيسية',
    'title': 'العنوان',
    'description': 'الوصف',
    // Add more terms as needed for full coverage
  },
  'de': {
    'IPL': 'IPL',
    'hair removal': 'Haarentfernung',
    'manufacturing': 'Herstellung',
    'device': 'Gerät',
    'quality': 'Qualität',
    'contact': 'Kontakt',
    'about': 'Über uns',
    'solutions': 'Lösungen',
    'blog': 'Blog',
    'home': 'Startseite',
    // Expanded
  },
  // Similarly expand for all languages: cs, da, es, et, fi, fr, he, hi, hr, hu, id, it, ja, ko, ms, nl, no, pl, pt, ru, sv, th, tl, tr, uk, vi, zh
  'zh': {
    'IPL': 'IPL',
    'hair removal': '脱毛',
    'manufacturing': '制造',
    'device': '设备',
    'quality': '质量',
    'contact': '联系我们',
    'about': '关于我们',
    'solutions': '解决方案',
    'blog': '博客',
    'home': '首页',
  },
  // ... add for others
};

// 改进的翻译
const improvedTranslations = {
  'fi': {  // 芬兰语 - 更准确的翻译
    'meta.title': 'iShine - IPL-laitteiden valmistusratkaisut | Ideasta markkinoille',
    'meta.description': 'Johtava IPL-laitteiden valmistaja tarjoaa OEM/ODM-ratkaisuja ideasta markkinoille. Räätälöidyt IPL-karvanpoistolaittet maailmanlaajuisille kauneusbrändille.',
    'header.navigation.contact': 'Ota yhteyttä',
    'header.navigation.about': 'Tietoa meistä',
    'footer.contact.title': 'Yhteystiedot',
    'footer.contact.tel': 'Puhelin',
    'footer.contact.email': 'Sähköposti',
    'footer.contact.address': 'OSOITE',
    'contact.hero.title': 'Ota yhteyttä',
    'contact.title': 'Ota yhteyttä'
  },
  'sv': {  // 瑞典语 - 更准确的翻译
    'footer.contact.title': 'Kontakt',
    'footer.contact.tel': 'Telefon',
    'footer.contact.email': 'E-post',
    'footer.contact.address': 'ADRESS',
    'contact.hero.title': 'Kontakta oss',
    'contact.title': 'Kontakta oss'
  },
  'no': {  // 挪威语 - 更准确的翻译
    'footer.contact.title': 'Kontakt',
    'footer.contact.tel': 'Telefon',
    'footer.contact.email': 'E-post',
    'footer.contact.address': 'ADRESSE',
    'contact.hero.title': 'Kontakt oss',
    'contact.title': 'Kontakt oss'
  },
  'tl': {  // 菲律宾语 - 更准确的翻译
    'footer.contact.title': 'Makipag-ugnayan',
    'footer.contact.tel': 'Telepono',
    'footer.contact.email': 'Email',
    'footer.contact.address': 'ADDRESS',
    'contact.hero.title': 'Makipag-ugnayan sa Amin',
    'contact.title': 'Makipag-ugnayan sa Amin'
  },
  'bn': {  // 孟加拉语 - 更准确的翻译
    'footer.contact.title': 'যোগাযোগ',
    'footer.contact.tel': 'ফোন',
    'footer.contact.email': 'ইমেইল',
    'footer.contact.address': 'ঠিকানা',
    'contact.hero.title': 'আমাদের সাথে যোগাযোগ করুন',
    'contact.title': 'আমাদের সাথে যোগাযোগ করুন'
  },
  'uk': {  // 乌克兰语 - 更准确的翻译
    'footer.contact.title': 'Контакти',
    'footer.contact.tel': 'Телефон',
    'footer.contact.email': 'Електронна пошта',
    'footer.contact.address': 'АДРЕСА',
    'contact.hero.title': 'Зв\'яжіться з нами',
    'contact.title': 'Зв\'яжіться з нами'
  },
  'ar': {  // 阿拉伯语 - 修复Contact部分翻译
    'footer.contact.title': 'اتصل بنا',
    'footer.contact.tel': 'هاتف',
    'footer.contact.email': 'بريد إلكتروني',
    'footer.contact.address': 'العنوان'
  }
};

// 应用改进的翻译
function applyImprovedTranslations() {
  console.log('🔧 正在应用改进的翻译...\n');
  
  Object.entries(improvedTranslations).forEach(([langCode, translations]) => {
    const filePath = path.join(translationsDir, `${langCode}.json`);
    
    if (fs.existsSync(filePath)) {
      console.log(`📝 改进 ${langCode}.json 翻译...`);
      
      const langJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // 应用翻译改进
      Object.entries(translations).forEach(([keyPath, value]) => {
        const keys = keyPath.split('.');
        let current = langJson;
        
        // 导航到目标对象
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) {
            current[keys[i]] = {};
          }
          current = current[keys[i]];
        }
        
        // 设置值
        current[keys[keys.length - 1]] = value;
      });
      
      // 写回文件
      fs.writeFileSync(filePath, JSON.stringify(langJson, null, 2), 'utf8');
      console.log(`✅ ${langCode}.json 翻译已改进`);
    }
  });
}

// 检查和修复常见翻译问题
function fixCommonTranslationIssues() {
  console.log('\n🔍 检查和修复常见翻译问题...\n');
  
  const langFiles = fs.readdirSync(translationsDir)
    .filter(f => f.endsWith('.json') && f !== 'en.json');
  
  langFiles.forEach(file => {
    const langCode = file.replace('.json', '');
    const filePath = path.join(translationsDir, file);
    const langJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    let fixed = false;
    
    // 检查并修复copyright信息
    if (langJson.footer && langJson.footer.legal && langJson.footer.legal.copyright) {
      const currentCopyright = langJson.footer.legal.copyright;
      if (!currentCopyright.includes('2025') || !currentCopyright.includes('iShine')) {
        // 根据语言设置正确的版权信息
        const copyrightTranslations = {
          'ar': '© 2025 iShine. جميع الحقوق محفوظة.',
          'de': '© 2025 iShine. Alle Rechte vorbehalten.',
          'fr': '© 2025 iShine. Tous droits réservés.',
          'es': '© 2025 iShine. Todos los derechos reservados.',
          'it': '© 2025 iShine. Tutti i diritti riservati.',
          'pt': '© 2025 iShine. Todos os direitos reservados.',
          'ru': '© 2025 iShine. Все права защищены.',
          'ja': '© 2025 iShine. 全著作権所有。',
          'ko': '© 2025 iShine. 모든 권리 보유.',
          'zh': '© 2025 iShine. 版权所有。',
          'fi': '© 2025 iShine. Kaikki oikeudet pidätetään.',
          'sv': '© 2025 iShine. Alla rättigheter förbehållna.',
          'no': '© 2025 iShine. Alle rettigheter forbeholdt.',
          'tl': '© 2025 iShine. Lahat ng karapatan ay nakalaan.',
          'bn': '© 2025 iShine. সমস্ত অধিকার সংরক্ষিত।',
          'uk': '© 2025 iShine. Всі права захищені.'
        };
        
        if (copyrightTranslations[langCode]) {
          langJson.footer.legal.copyright = copyrightTranslations[langCode];
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, JSON.stringify(langJson, null, 2), 'utf8');
      console.log(`✅ ${langCode}.json - 修复了版权信息`);
    } else {
      console.log(`⚪ ${langCode}.json - 无需修复`);
    }
  });
}

// 执行所有改进
console.log('🚀 开始改进翻译质量...\n');
applyImprovedTranslations();
fixCommonTranslationIssues();
console.log('\n🎉 翻译质量改进完成！'); 

function fullTranslate(langCode) {
  const filePath = path.join(translationsDir, `${langCode}.json`);
  const langJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  function translateRecursive(obj, mapping) {
    const result = {};
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        result[key] = mapping[obj[key]] || obj[key]; // Use mapping or keep original
      } else if (typeof obj[key] === 'object') {
        result[key] = translateRecursive(obj[key], mapping);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }
  const translated = translateRecursive(langJson, termMappings[langCode] || {});
  fs.writeFileSync(filePath, JSON.stringify(translated, null, 2), 'utf8');
  console.log(`✅ Fully translated ${langCode}.json`);
}

// Call in applyImprovedTranslations or separately 