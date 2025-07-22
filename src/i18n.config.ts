export const i18nConfig = {
  // 支持的语言列表
  supportedLanguages: [
    { code: 'en', name: 'English', isDefault: true },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'pl', name: 'Polski' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'th', name: 'ไทย' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'ms', name: 'Bahasa Melayu' },
    { code: 'sv', name: 'Svenska' },
    { code: 'da', name: 'Dansk' },
    { code: 'fi', name: 'Suomi' },
    { code: 'no', name: 'Norsk' },
    { code: 'cs', name: 'Čeština' },
    { code: 'hu', name: 'Magyar' },
    { code: 'ro', name: 'Română' },
    { code: 'uk', name: 'Українська' },
    { code: 'el', name: 'Ελληνικά' },
    { code: 'he', name: 'עברית' },
    { code: 'tl', name: 'Tagalog' }
  ],

  // 必需的翻译键（这些键在所有语言文件中都必须存在）
  requiredKeys: [
    // SEO相关
    'meta.title',
    'meta.description',
    'meta.keywords',

    // 导航
    'nav.home',
    'nav.about',
    'nav.products',
    'nav.services',
    'nav.contact',

    // 页面标题
    'pages.home.title',
    'pages.about.title',
    'pages.products.title',
    'pages.services.title',
    'pages.contact.title',

    // 表单
    'form.name',
    'form.email',
    'form.message',
    'form.submit',

    // 错误消息
    'errors.required',
    'errors.invalidEmail',
    'errors.minLength',
    'errors.maxLength',

    // 成功消息
    'success.messageSent',
    'success.subscribed',

    // 按钮
    'buttons.learnMore',
    'buttons.viewMore',
    'buttons.getStarted',
    'buttons.contactUs'
  ],

  // 翻译键的命名规则
  namingRules: {
    // 键的格式：小写字母，数字和点号
    pattern: /^[a-z0-9.]+$/,
    // 最大嵌套深度
    maxDepth: 5,
    // 最大键长度
    maxKeyLength: 50
  },

  // 特殊处理规则
  specialRules: {
    // 不要翻译的内容（保持原样）
    preserveOriginal: [
      'brand.name',
      'legal.company',
      'contact.email',
      'contact.phone'
    ],
    // 需要本地化的数字格式
    numberFormat: [
      'price.amount',
      'stats.users',
      'stats.downloads'
    ],
    // 需要本地化的日期格式
    dateFormat: [
      'blog.publishDate',
      'events.startDate',
      'events.endDate'
    ]
  },

  // 文件结构规则
  fileRules: {
    // 翻译文件的存储位置
    translationsDir: 'src/translations',
    // 翻译文件的命名格式
    filePattern: '[lang].json',
    // 备份设置
    backup: {
      enabled: true,
      dir: 'src/translations/backups',
      keepCount: 5
    }
  },

  // 同步规则
  syncRules: {
    // 是否允许删除未使用的键
    allowKeyDeletion: false,
    // 是否自动添加新键
    autoAddNewKeys: true,
    // 是否保留注释
    preserveComments: true,
    // 是否保持键的顺序
    preserveOrder: true
  },

  // 验证规则
  validationRules: {
    // 检查占位符是否匹配
    checkPlaceholders: true,
    // 检查HTML标签是否匹配
    checkHtmlTags: true,
    // 检查字符串长度
    checkLength: {
      enabled: true,
      // 最大长度（字符数）
      maxLength: 1000
    }
  },

  // 报告设置
  reportSettings: {
    // 生成详细报告
    detailed: true,
    // 显示警告
    showWarnings: true,
    // 导出格式
    exportFormat: 'json',
    // 报告存储位置
    outputDir: 'reports/i18n'
  }
}; 