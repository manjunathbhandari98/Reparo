import type { SupportOption } from '../types';

export const SupportOptions: SupportOption[] = [
  {
    id: 1,
    title: '24/7 Phone Support',
    description: 'Call us anytime for immediate assistance',
    icon: 'Phone',
    contact: '1-800-REPARO',
    availability: 'Available 24/7',
    cta: 'Contact Now',
    colour: 'green',
  },
  {
    id: 2,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    icon: 'MessageSquare',
    contact: 'Start Chat',
    availability: 'Mon-Sun, 6 AM - 12 AM',
    cta: 'Contact Now',
    colour: 'blue',
  },
  {
    id: 3,
    title: 'Email Support',
    description: 'Send us a detailed message',
    icon: 'Mail',
    contact: 'support@reparo.com',
    availability: 'Response within 2 hours',
    cta: 'Contact Now',
    colour: 'purple',
  },
];
