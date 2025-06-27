import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Shield, 
  Calendar, 
  Heart, 
  AlertTriangle, 
  HelpCircle, 
  Play,
  CheckCircle,
  Clock,
  Thermometer,
  Eye,
  Zap
} from 'lucide-react';
import ContactFormA from '../components/Forms/ContactFormA';

const HowToUse: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Preparation',
      description: 'Clean and prepare the treatment area',
      details: [
        'Shave the treatment area 24-48 hours before use',
        'Clean skin thoroughly with mild soap and water',
        'Ensure skin is completely dry',
        'Remove any makeup, lotions, or deodorants'
      ],
      icon: Heart
    },
    {
      step: '02',
      title: 'Device Setup',
      description: 'Power on and configure your IPL device',
      details: [
        'Connect the device to power source',
        'Press the power button to turn on',
        'Select appropriate intensity level (start with lowest)',
        'Ensure the treatment head is properly attached'
      ],
      icon: Zap
    },
    {
      step: '03',
      title: 'Skin Tone Test',
      description: 'Perform a patch test for safety',
      details: [
        'Test on a small, inconspicuous area first',
        'Wait 24 hours to check for adverse reactions',
        'Adjust intensity if needed based on skin response',
        'Proceed only if no irritation occurs'
      ],
      icon: Eye
    },
    {
      step: '04',
      title: 'Treatment Process',
      description: 'Apply IPL treatment systematically',
      details: [
        'Place device firmly against skin',
        'Press flash button for each pulse',
        'Move to adjacent area without overlapping',
        'Complete entire treatment area systematically'
      ],
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Post-Treatment Care',
      description: 'Proper aftercare for optimal results',
      details: [
        'Apply cooling gel or aloe vera if needed',
        'Avoid sun exposure for 24-48 hours',
        'Use SPF 30+ sunscreen when going outside',
        'Moisturize treated area regularly'
      ],
      icon: Shield
    }
  ];

  const safetyGuidelines = [
    {
      icon: AlertTriangle,
      title: 'Important Safety Warnings',
      points: [
        'Never use on tanned, sunburned, or irritated skin',
        'Do not use on moles, tattoos, or dark spots',
        'Avoid eye area and mucous membranes',
        'Not suitable for pregnant or breastfeeding women',
        'Consult doctor if you have skin conditions'
      ]
    },
    {
      icon: Eye,
      title: 'Eye Protection',
      points: [
        'Always wear protective goggles when provided',
        'Never look directly at the light flash',
        'Keep device away from eye area',
        'Ensure others in room are also protected'
      ]
    },
    {
      icon: Thermometer,
      title: 'Skin Sensitivity',
      points: [
        'Start with lowest intensity setting',
        'Gradually increase if well tolerated',
        'Stop immediately if pain or discomfort occurs',
        'Allow 48-72 hours between treatments on same area'
      ]
    }
  ];

  const treatmentSchedule = [
    { week: 'Weeks 1-4', frequency: 'Once per week', description: 'Initial treatment phase for hair reduction' },
    { week: 'Weeks 5-8', frequency: 'Every 2 weeks', description: 'Maintenance phase as hair growth slows' },
    { week: 'Weeks 9-12', frequency: 'Every 3-4 weeks', description: 'Final phase for remaining hair follicles' },
    { week: 'After 12 weeks', frequency: 'As needed', description: 'Touch-up treatments for new hair growth' }
  ];

  const troubleshooting = [
    {
      problem: 'Device not turning on',
      solutions: [
        'Check power connection and ensure device is plugged in',
        'Verify power button is pressed firmly',
        'Check if device needs charging (for battery models)',
        'Contact customer support if issue persists'
      ]
    },
    {
      problem: 'No light flash when pressing button',
      solutions: [
        'Ensure device is in full contact with skin',
        'Check if safety sensors are blocked',
        'Verify treatment head is properly attached',
        'Clean the light window and sensors'
      ]
    },
    {
      problem: 'Skin irritation after treatment',
      solutions: [
        'Apply cooling gel or aloe vera to soothe skin',
        'Reduce intensity level for next treatment',
        'Increase time between treatments',
        'Discontinue use if irritation persists'
      ]
    },
    {
      problem: 'No visible results after several treatments',
      solutions: [
        'Ensure consistent treatment schedule',
        'Verify you are using appropriate intensity level',
        'Check that hair color is suitable for IPL (dark hair works best)',
        'Be patient - results typically visible after 4-6 treatments'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does each treatment session take?',
      answer: 'Treatment time varies by area size. Face typically takes 5-10 minutes, legs 15-20 minutes, and full body can take 30-45 minutes.'
    },
    {
      question: 'When will I see results?',
      answer: 'Most users see initial hair reduction after 3-4 treatments. Significant results are typically visible after 6-8 treatments over 2-3 months.'
    },
    {
      question: 'Is IPL treatment painful?',
      answer: 'Most users describe the sensation as a mild rubber band snap. Modern IPL devices with cooling technology minimize discomfort significantly.'
    },
    {
      question: 'Can I use IPL on all skin tones?',
      answer: 'IPL works best on light to medium skin tones with dark hair. Always perform a patch test and consult the device manual for skin tone compatibility.'
    },
    {
      question: 'How long do results last?',
      answer: 'IPL provides long-lasting hair reduction. Most users enjoy smooth skin for 6-12 months, with occasional touch-up treatments as needed.'
    },
    {
      question: 'Can I use IPL during summer?',
      answer: 'Yes, but extra sun protection is essential. Avoid sun exposure 48 hours before and after treatment, and always use SPF 30+ sunscreen.'
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
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Use IPL Devices</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Complete guide to safe and effective IPL hair removal. Learn proper techniques, 
              safety guidelines, and get the best results from your IPL device.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Instructions</h2>
            <p className="text-lg text-gray-600">
              Follow these steps for safe and effective IPL treatment
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ishine-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-ishine-blue-500 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-ishine-blue-100 to-ishine-teal-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <step.icon className="w-24 h-24 text-ishine-blue-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Guidelines</h2>
            <p className="text-lg text-gray-600">
              Essential safety information for IPL treatment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyGuidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <guideline.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{guideline.title}</h3>
                <ul className="space-y-2">
                  {guideline.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Treatment Schedule</h2>
            <p className="text-lg text-gray-600">
              Follow this schedule for optimal hair removal results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentSchedule.map((schedule, index) => (
              <motion.div
                key={schedule.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <Calendar className="w-12 h-12 text-ishine-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{schedule.week}</h3>
                <p className="text-ishine-blue-500 font-medium mb-2">{schedule.frequency}</p>
                <p className="text-gray-600 text-sm">{schedule.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting Guide</h2>
            <p className="text-lg text-gray-600">
              Common issues and their solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {troubleshooting.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HelpCircle className="w-6 h-6 text-ishine-blue-500 mr-3" />
                  {item.problem}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.solutions.map((solution, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common IPL treatment questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-ishine-blue-500 mr-2 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 ml-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
            <p className="text-lg text-gray-600">
              Watch step-by-step video guides for proper IPL usage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Getting Started with IPL', duration: '5:30' },
              { title: 'Safety Guidelines & Preparation', duration: '4:15' },
              { title: 'Treatment Techniques', duration: '7:20' },
              { title: 'Post-Treatment Care', duration: '3:45' },
              { title: 'Troubleshooting Common Issues', duration: '6:10' },
              { title: 'Maintenance & Storage', duration: '2:55' }
            ].map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="bg-gradient-to-br from-ishine-blue-500 to-ishine-teal-500 h-48 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{video.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default HowToUse;