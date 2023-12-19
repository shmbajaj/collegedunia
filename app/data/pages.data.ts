import type { PageInfoProps } from '~/components/page';
import engineeringAdmissionBGImg from '../images/educom-engg-admission-page-pageheader.jpeg';
import managementAdmissionBGImg from '../images/educom-management-admission-page-pageheader.jpeg';
import medicalAdmissionBGImg from '../images/educom-medical-admission-page-pageheader.jpeg';
import { managementPageTestimonials } from './testimonials.data';
import type { $TSFixME } from '~/types';

const managementScope = [
  {
    designation: 'Marketing Manager',
    averagePackage: 'Rs. 8-14 lakhs per annum',
    roles:
      'Roles in marketing involve developing and implementing marketing strategies, product management, and brand promotion.',
    imageSrc: 'marketing_manager_image.jpg',
  },
  {
    designation: 'Finance Manager',
    averagePackage: 'Rs. 8-16 lakhs per annum',
    roles:
      'MBA graduates specializing in finance may take up roles in financial management, investment banking, or corporate finance.',
    imageSrc: 'finance_manager_image.jpg',
  },
  {
    designation: 'Information Technology (IT) Manager',
    averagePackage: 'Rs. 8-16 lakhs per annum',
    roles: 
      'MBA graduates with a focus on IT management may work in roles related to technology strategy, project management, and IT consulting.',
    imageSrc: 'it_manager_image.jpg',
  },
  {
    designation: 'Human Resources Manager',
    averagePackage: 'Rs. 7-14 lakhs per annum',
    roles:
      'MBA graduates in HR often take up roles in recruitment, talent management, and organizational development.',
    imageSrc: 'hr_manager_image.jpg',
  },
  {
    designation: 'Operations Manager',
    averagePackage: 'Rs. 8-15 lakhs per annum',
    roles:
      'Responsible for overseeing the efficiency of business operations, supply chain management, and process optimization.',
    imageSrc: 'operations_manager_image.jpg',
  },
  {
    designation: 'Investment Banker',
    averagePackage: 'Rs. 10-20 lakhs per annum',
    roles:
      'MBA graduates entering investment banking may work in roles related to mergers and acquisitions, risk management, and financial analysis.',

    imageSrc: 'investment_banker_image.jpg',
  },
  {
    designation: 'Supply Chain Manager',
    averagePackage: 'Rs. 8-15 lakhs per annum',
    roles:
      'Focus on managing the end-to-end supply chain process, including procurement, logistics, and distribution.',

    imageSrc: 'supply_chain_manager_image.jpg',
  },
  {
    designation: 'Product Manager',
    averagePackage: 'Rs. 8-15 lakhs per annum',
    roles:
      'Responsible for the development and management of a product throughout its lifecycle.',

    imageSrc: 'product_manager_image.jpg',
  },
  {
    designation: 'Entrepreneur / Business Owner',
    averagePackage:
      'Varies significantly; dependent on the success of the venture',
    roles:
      'Some MBA graduates choose to start their own businesses, and their earnings can be highly variable.',

    imageSrc: 'entrepreneur_image.jpg',
  },
];

const engineeringAdmission: PageInfoProps = {
  pageHeaderCaption: 'PROFESSIONAL EDUCATION CONSULTING',
  pageHeaderTitle: 'ENGINEERING ADMISSIONS',
  pageHeaderDescription: `Engineering is one of the most preferred courses. Around 35-45 lakh people enroll in one or the other B Tech course every year.Know how to apply for engineering admissions.`,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: engineeringAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
  testimonials: [],
};

const medicalAdmission: PageInfoProps = {
  pageHeaderCaption: 'OUR SERVICES',
  pageHeaderTitle: ' Medical ADMISSIONS',
  pageHeaderDescription: `            With over 18 Lakh Candidates registering and appearing for the NEET
  Exam held on July 17, 2022, it is clear that medical courses remain
  one of the most sought-after options in India. These medical
  admissions are highly competitive and serve to demonstrate how
  important a medical career still is in India today.`,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: managementAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#03467c',
  testimonials: [],
};

const managementAdmission: PageInfoProps & {
  scope: Array<Record<string, string>>;
} = {
  pageHeaderCaption: 'OUR SERVICES',
  pageHeaderTitle:
    'Claim Your Free MBA Admission Consultation for Top-Tier Institutes Instantly!',
  pageHeaderDescription: `Unlock your potential with India's premier MBA consultants. Secure dream college admissions and ace your MBA admission journey with expert guidance.
  `,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: medicalAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
  testimonials: managementPageTestimonials,
  scope: managementScope,
};

export { engineeringAdmission, medicalAdmission, managementAdmission };
