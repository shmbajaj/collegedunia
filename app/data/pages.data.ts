import type { PageInfoProps } from '~/components/page';
import engineeringAdmissionBGImg from '../images/educom-engg-admission-page-pageheader.jpeg';
import managementAdmissionBGImg from '../images/educom-management-admission-page-pageheader.jpeg';
import medicalAdmissionBGImg from '../images/educom-medical-admission-page-pageheader.jpeg';

const engineeringAdmission: PageInfoProps = {
  pageHeaderCaption: 'PROFESSIONAL EDUCATION CONSULTING',
  pageHeaderTitle: 'ENGINEERING ADMISSIONS',
  pageHeaderDescription: `Engineering is one of the most preferred courses. Around 35-45 lakh people enroll in one or the other B Tech course every year.Know how to apply for engineering admissions.`,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: engineeringAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
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
};

const managementAdmission: PageInfoProps = {
  pageHeaderCaption: 'OUR SERVICES',
  pageHeaderTitle: 'MANAGEMENT ADMISSIONS',
  pageHeaderDescription: `            Management admissions have become increasingly popular. With the
  rise of startups, multinational companies and conglomerates,
  employers are seeking qualified professionals with management
  experience to help navigate their growing operations.`,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: medicalAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
};

export { engineeringAdmission, medicalAdmission, managementAdmission };
