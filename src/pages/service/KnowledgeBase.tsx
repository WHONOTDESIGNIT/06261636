import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ShieldQuestion,
  HelpCircle,
  Zap,
  Wrench,
  Compass,
  Globe,
  Repeat,
  AlertCircle
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

interface QA {
  question: string;
  answer: string;
}

interface Category {
  title: string;
  icon: React.ElementType;
  qas: QA[];
}

const faqData: Category[] = [
  {
    title: 'IPL Technology & How It Works',
    icon: Zap,
    qas: [
      {
        question: 'What is IPL and how does it work?',
        answer:
          'IPL (Intense Pulsed Light) targets melanin in the hair. Broad-spectrum light is absorbed and converted to heat, disabling follicles and disrupting the growth cycle. Treated hairs fall out naturally within 1–2 weeks.'
      },
      {
        question: 'How is IPL different from laser hair removal?',
        answer:
          'Both use light to heat and disable the follicle, but IPL delivers a broad flash covering larger areas for faster sessions, while lasers emit a concentrated beam that requires more passes and time.'
      }
    ]
  },
  {
    title: 'Safety & Suitability',
    icon: ShieldQuestion,
    qas: [
      {
        question: 'Is IPL safe for at-home use?',
        answer:
          'Yes. IPL is clinically proven and FDA-cleared for long-term hair reduction when used as directed. Devices filter UV rays and comply with FCC, CE, and RoHS standards.'
      },
      {
        question: 'Can IPL cause cancer or skin damage?',
        answer: 'No. IPL does not emit harmful UV associated with cancer or long-term damage; filters block those wavelengths.'
      },
      {
        question: 'Who should not use IPL?',
        answer:
          'Children under 18; pregnant or breastfeeding women; individuals with photosensitive conditions, very dark skin, white/grey/red hair, tattoos, or dark moles should avoid IPL.'
      },
      {
        question: 'Is IPL suitable for all skin and hair types?',
        answer:
          'Most effective on light-to-medium skin with dark hair. Less effective on light hair and not recommended for deep skin tones.'
      }
    ]
  },
  {
    title: 'Usage & Results',
    icon: Repeat,
    qas: [
      {
        question: 'How long until I see results? Is IPL permanent?',
        answer:
          'Expect visible reduction after 3–4 treatments; up to 99% after 12 weeks. Results are long-lasting; occasional touch-ups maintain smoothness.'
      },
      {
        question: 'How often should I use my IPL device?',
        answer:
          'Use weekly for the first 12 weeks, then once a month for three months, and every 2–3 months as new hair appears.'
      },
      {
        question: 'Does IPL treatment hurt?',
        answer:
          'Most users feel only warmth or mild tingling. Sensitive areas may feel slight discomfort at higher energy; start low and increase gradually.'
      },
      {
        question: 'Which body areas can I treat?',
        answer:
          'Legs, arms, underarms, bikini line, and face below the cheekbones. Avoid inner bikini, genitals, anus, and areas above the cheekbones.'
      }
    ]
  },
  {
    title: 'Preparation & Aftercare',
    icon: Wrench,
    qas: [
      {
        question: 'Do I need to shave before using IPL?',
        answer:
          'Yes. Shaving removes surface hair to prevent burns while leaving the root intact for IPL to target. Do not wax or tweeze.'
      },
      {
        question: 'Can I use IPL on tanned skin?',
        answer:
          'Wait 2 weeks after tanning before IPL. After treatment, avoid tanning for 48 hours. Never treat sunburned skin.'
      },
      {
        question: 'Should I wear eye protection?',
        answer:
          'Devices have safety sensors; eye protection is generally unnecessary if used correctly. Avoid staring at the flash.'
      }
    ]
  },
  {
    title: 'Device & Maintenance',
    icon: Compass,
    qas: [
      {
        question: 'How do I clean my IPL device?',
        answer: 'Unplug, wipe with a dry cloth and 70% alcohol. Do not immerse in water or use acetone.'
      },
      {
        question: 'What is the lifespan of an IPL device?',
        answer:
          'Most units feature 300,000–900,000 flashes (10–30 years of normal use) with no consumables or lamp replacements required.'
      },
      {
        question: 'What is the IPL lamp made of?',
        answer: 'A xenon quartz ray tube with a UV-blocking glass filter.'
      }
    ]
  },
  {
    title: 'Special Considerations',
    icon: AlertCircle,
    qas: [
      {
        question: 'Can I use IPL on freckles, moles, or tattoos?',
        answer:
          'Avoid very dark freckles, moles, and tattoos to prevent burns. Cover them or skip the area; light freckles are usually fine.'
      },
      {
        question: 'Is IPL safe for sensitive skin?',
        answer:
          'Yes, when lower energy settings and a patch test are used first.'
      },
      {
        question: 'Can I use IPL if I have a skin condition?',
        answer:
          'Consult a physician first. Do not use on broken, scabbed, or diseased skin.'
      }
    ]
  },
  {
    title: 'Power, Plugs & International Use',
    icon: Globe,
    qas: [
      {
        question: 'Will my IPL device work in my country?',
        answer: 'Most devices are dual-voltage 110–240 V and ship with region-specific plugs.'
      }
    ]
  },
  {
    title: 'Warranty & Returns',
    icon: BookOpen,
    qas: [
      {
        question: 'What is the warranty and return policy?',
        answer:
          'Typical warranty is one year for defects plus a 90-day money-back guarantee for dissatisfaction. Check your supplier for specifics.'
      }
    ]
  },
  {
    title: 'Troubleshooting & Support',
    icon: HelpCircle,
    qas: [
      {
        question: "My device isn't working – what should I do?",
        answer:
          'Verify power, cleanliness, and full skin contact. Consult support or your warranty if problems persist.'
      },
      {
        question: 'How can I get more help?',
        answer: 'Contact our support team—responses within 24 hours.'
      }
    ]
  },
  {
    title: 'SmoothSkin Official FAQ',
    icon: HelpCircle,
    qas: [
      {
        question: 'What Is IPL?',
        answer: 'IPL (Intense Pulsed Light) is a light-based hair removal method, that targets the melanin (pigment) inside the hair to interrupt the hair growth cycle and prevent hair regrowth, without damaging the skin.',
      },
      {
        question: 'Is IPL safe? Is it safe for my skin?',
        answer: 'Yes. Our devices are FDA cleared and have been clinically proven to be safe and effective, with over 5,500 clinical treatments performed on different skin tones. ...',
      },
    ]
  },
];

const KnowledgeBase: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="bg-gradient-to-r from-ishine-teal-500 to-ishine-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your IPL Questions, Answered</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
              Explore expert, data-driven answers to the most common questions about IPL home hair removal devices. If you need more support, our technical team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FAQ CATEGORIES ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-ishine-blue-600 mb-6">
                {cat.title}
              </h2>
              <div className="space-y-4 pl-2">
                {cat.qas.map((qa) => (
                  <div key={qa.question} className="bg-gray-50 rounded-lg p-4 shadow">
                    <h3 className="font-semibold text-ishine-blue-500 mb-2">{qa.question}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {typeof qa.answer === 'string' ? qa.answer : qa.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="text-center mt-16">
            <a
              href="/contact-technical-support"
              className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Contact Technical Support
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <ContactFormA />
    </div>
  );
};

export default KnowledgeBase;