import type { ServiceStep } from '../types';

export const howItWorksSteps: ServiceStep[] = [
  {
    id: 1,
    title: 'Book Your Service',
    description:
      "Tell us what's wrong with your vehicle and your location. Choose from emergency repairs or scheduled maintenance.",
    points: [
      'Describe your vehicle issue',
      'Select service type and urgency',
      'Provide your current location',
      'Get instant price estimates',
    ],
  },
  {
    id: 2,
    title: 'Get Matched & Track',
    description:
      'We match you with the best certified mechanic nearby. Track their arrival in real-time.',
    points: [
      'Automatic matching with qualified mechanics',
      'Real-time GPS tracking',
      'Direct communication with your mechanic',
      'Live ETA updates via SMS and app',
    ],
  },
  {
    id: 3,
    title: 'Get Fixed & Pay',
    description:
      'Professional repair at your location. Pay securely through the app when the job is complete.',
    points: [
      'On-site professional repair service',
      'Quality parts and workmanship guarantee',
      'Secure in-app payment processing',
      'Digital receipt and warranty',
    ],
  },
];
