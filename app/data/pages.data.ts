import type { PageInfoProps } from '~/components/page';
import engineeringAdmissionBGImg from '../images/educom-engg-admission-page-pageheader.jpeg';
import managementAdmissionBGImg from '../images/educom-management-admission-page-pageheader.jpeg';
import medicalAdmissionBGImg from '../images/educom-medical-admission-page-pageheader.jpeg';
import {
  engineeringPageTestimonials,
  managementPageTestimonials,
  medicalPageTestimonials,
} from './testimonials.data';
import type { EngineeringExam } from '~/types';

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

const engineeringBranches = [
  {
    branch: 'Computer Science and Engineering (CSE)',
    overview:
      'Focuses on computer systems, programming, and software development. Around INR 6-10 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Mechanical Engineering',
    overview:
      'Deals with design, manufacturing, and maintenance of mechanical systems. Approximately INR 5-8 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Electrical Engineering',
    overview:
      'Encompasses electrical systems, electronics, and power generation. Ranges from INR 4-7 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Civil Engineering',
    overview:
      'Involves the design and construction of infrastructure and buildings. Typically around INR 4-6 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Electronics and Communication Engineering (ECE)',
    overview:
      'Focuses on electronic circuits, communication systems, and signal processing. Averages between INR 5-9 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Chemical Engineering',
    overview:
      'Deals with the design and optimization of chemical processes. Ranges from INR 4-7 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Aerospace Engineering',
    overview:
      'Involves the design and development of aircraft and spacecraft. Typically around INR 6-12 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Biotechnology Engineering',
    overview:
      'Applies biological principles to develop technology and products. Averages between INR 5-9 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Environmental Engineering',
    overview:
      'Addresses environmental issues by applying engineering principles to develop sustainable solutions. With several years of experience, mid-level environmental engineers can earn between INR 6 to 10 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Industrial Engineering',
    overview:
      'Optimizes complex processes and systems to improve efficiency and productivity. Entry-level industrial engineers can expect an average starting salary ranging from INR 4 to 7 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
  {
    branch: 'Materials Engineering',
    overview:
      'Focuses on the development and study of materials with specific properties for various applications. Entry-level materials engineers may receive a starting salary ranging from INR 3.5 to 6 lakhs per annum.',
    imageSource: 'your_image_source_url_here',
  },
];

const engineeringAllExam: Array<EngineeringExam> = [
  {
    name: 'JEE Advance',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/JEE_Advanced__Custom_-removebg-preview.png',
    description:
      'The Joint Entrance Examination Advanced (JEE-Advanced) is an entrance exam which is conducted by the Indian Institute of Technology (IITs) on all-India level',
    learnMore: {
      content:
        'The exam qualifies candidates for admission in various prestigious engineering colleges across India. Previously known as IIT-JEE, it was renamed in 2013 and since then, it has been administered and regulated by the seven branches of IITs (Roorkee, Kharagpur, Delhi, Bombay, Kanpur, Madras and Guwahati). It consists of two papers with questions drawn from Physics, Chemistry, Mathematics and an Architecture Aptitude Test (AAT) for candidates aspiring to enroll in an architecture course.',
      age: 'Should’ve appeared in Higher Secondary in 2019, 2020, and 2021',
      qualification: 'At least 75% marks in 10+2',
      compulsorySubjects:
        'Physics and Chemistry, along with English, Mathematics, and an optional subject',
      numberOfAttempts: 2,
      subjectsInPaper:
        'Physics, Chemistry, Maths, and AAT (Architecture Aptitude Test)',
    },
  },
  {
    name: 'UPSEE',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png',
    description:
      'The Uttar Pradesh State Entrance Examination is a state-level entrance examination for enrolling into UG and PG courses in the engineering colleges of Uttar Pradesh.',
    learnMore: {
      content:
        'UPSEE, short for Uttar Pradesh State Entrance Examination, is a state-level entrance exam held in Uttar Pradesh for students seeking admission into undergraduate and postgraduate courses in engineering colleges affiliated with the AKTU (Abdul Kalam Technical University). This exam can be taken in both online and offline formats.',
      age: 'No Age Limit',
      qualification:
        'Should’ve completed 10+2 from the UP board or any other equally recognized board, with 45% marks (General) and 40% marks (Reserved)',
      lateralEntryAvailableFor: [
        'B.Sc Graduates in Engineering',
        '2nd year MCA students',
        'Pharmacy and Engineering Diploma Holders',
      ],
      numberOfAttempts: 2,
      subjectsInPaper:
        'Physics, Chemistry, Maths, Architecture and Design, General Awareness',
    },
  },
  {
    name: 'VITEEE',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/14_09_16_015439_VITEEE-1.png',
    description:
      'This exam goes by the name of VIT University, Vellore Institute of Technology Engineering Entrance Examination. This is a 2.5-hour long exam that students need to appear for',
    learnMore: {
      content:
        'To get enrolled into the VIT universities across India. This institution is said to provide some of the most affordable UG engineering courses.',
      eligibility: {
        age: 'Born on or after 1st July 1999',
        nationality: 'The candidate should be Indian',
        qualification: {
          GeneralCandidates: 'Minimum 60% score in PCM',
          'SC/STCandidates': 'Minimum 50% score in PCM',
        },
      },
      collegesCovered: [
        'Vellore University, Vellore',
        'Vellore Institute of Technology, Chennai',
        'VIT University, Andhra Pradesh',
        'VIT University, Bhopal & Woxsen University',
      ],
      subjectsInPaper:
        'Physics, Chemistry, Mathematics/Biology, English, Aptitude',
    },
  },
  {
    name: 'JEE Main',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/JEE_Advanced__Custom_-removebg-preview.png',
    description:
      'The Joint Entrance Examination-Main a.k.a. JEE-Main is the common entrance exam primarily for B.Tech admissions in both government and private colleges.',
    learnMore: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc, facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed dolor accumsan placerat. Ut sed felis vitae augue condimentum viverra.',
      additionalDetails:
        'Sed at lacus vitae augue egestas pulvinar ultricies nec nisi. In aliquet velit sed eros facilisis, in tempus eros imperdiet. Aenean mollis urna aliquet orci placerat porttitor. Aenean tincidunt urna sed faucibus sodales. Donec sit amet eros eros. Duis volutpat arcu at efficitur molestie. Pellentesque gravida dolor risus, a sollicitudin arcu euismod sit amet.',
    },
  },
  {
    name: 'MET',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/mcv16179_MAHE-LOGO-300x300-1.png',
    description:
      'Known earlier as the Manipal University Online Entrance Test, Manipal University Entrance Test (MET) is an online examination for admission into undergraduate and postgraduate courses.',
    learnMore: {
      content:
        'The test consists of two and a half hours of questions in English, containing topics such as Mathematics and General Aptitude that are common among the different papers. To qualify for these examinations, applicants must meet certain criteria which are outlined by the university.',
      qualifications: {
        bTech: {
          compulsorySubjects:
            'Physics, Mathematics, English, (Optional) Chemistry/Biology/Biotechnology',
          qualification: 'Should’ve passed 10+2 with a minimum score of 50%',
        },
        mTech: {
          compulsoryMarks: 'A score of at least 50% in the Qualifying Exam',
          qualification: 'Should have a B.E or B.tech Degree',
        },
        mbbs: {
          compulsorySubjects: 'Physics, Chemistry, Biology/Biotechnology',
          qualification: 'Should’ve passed 10+2 with a minimum score of 50%',
        },
        bba: {
          compulsoryMarks: 'A score of at least 50% in the Qualifying Exam',
          qualification: '10+2 from a recognized board',
        },
      },
    },
  },
  {
    name: 'MH CET',
    imageSource:
      'https://catalysteducations.com/wp-content/uploads/2022/12/mht-cet-exam-removebg-preview-1.png',
    description:
      'The Maharashtra Common Entrance Test (MHT-CET) is an online exam organized by the State Common Entrance Test Cell. It is primarily used as an entrance exam to select candidates for Engineering and Pharmacy programs in the state of Maharashtra.',
    learnMore: {
      content:
        'The syllabus mainly comprises of 11th and 12th standard subjects divided across 3 papers. The paper is MCQ-style with 100 questions that need to be answered within 90 minutes. In order to be eligible to give the exam, candidates must meet certain criteria.',
      eligibility: {
        age: 'No maximum age limit. The minimum age shall be not below 16 years',
        qualification: 'Students need decent qualifying scores in 10+2',
      },
      compulsorySubjects: 'Physics, Chemistry, Maths, Biology',
      numberOfAttempts: 3,
      subjectsInPaper:
        'Physics, Chemistry, Biology (Botany), Biology (Zoology), Maths',
      fees: '600-800 INR',
    },
  },
];

const medicalColleges = [
  { collegeName: 'MIT WPU', imageSource: 'path/to/mit_wpu_image.jpg' },
  { collegeName: 'DY Patil', imageSource: 'path/to/dy_patil_image.jpg' },
  {
    collegeName: 'Symbiosis Pune',
    imageSource: 'path/to/symbiosis_pune_image.jpg',
  },
  { collegeName: 'SRM Chennai', imageSource: 'path/to/srm_chennai_image.jpg' },
  { collegeName: 'NIMS Jaipur', imageSource: 'path/to/nims_jaipur_image.jpg' },
  { collegeName: 'RIMS Raipur', imageSource: 'path/to/rims_raipur_image.jpg' },
  { collegeName: 'BVP', imageSource: 'path/to/bvp_image.jpg' },
  { collegeName: 'MIMER', imageSource: 'path/to/mimer_image.jpg' },
  { collegeName: 'Vedanta', imageSource: 'path/to/vedanta_image.jpg' },
  {
    collegeName: 'Akash Medical',
    imageSource: 'path/to/akash_medical_image.jpg',
  },
  { collegeName: 'M S Ramiah', imageSource: 'path/to/ms_ramiah_image.jpg' },
  {
    collegeName: 'Sri Lakshmi Narayana Institute',
    imageSource: 'path/to/sri_lakshmi_narayana_institute_image.jpg',
  },
  {
    collegeName: 'Geetanjali Medical College',
    imageSource: 'path/to/geetanjali_medical_college_image.jpg',
  },
  {
    collegeName: 'Teerthanker Mahaveer University',
    imageSource: 'path/to/teerthanker_mahaveer_university_image.jpg',
  },
  {
    collegeName: 'Mahatma Gandhi Medical College, Mumbai',
    imageSource: 'path/to/mgmc_mumbai_image.jpg',
  },
  {
    collegeName: 'Oxford Medical College Bangalore',
    imageSource: 'path/to/oxford_medical_college_bangalore_image.jpg',
  },
  {
    collegeName: 'East Point College of Medical',
    imageSource: 'path/to/east_point_college_of_medical_image.jpg',
  },
  {
    collegeName: 'Vydehi Medical College',
    imageSource: 'path/to/vydehi_medical_college_image.jpg',
  },
  {
    collegeName: 'Siddhartha Medical College',
    imageSource: 'path/to/siddhartha_medical_college_image.jpg',
  },
];

const medicalEntrances = [
  { examName: 'NEET', imageSource: 'path/to/neet_image.jpg' },
  { examName: 'AIIMS-MBBS', imageSource: 'path/to/aiims_mbbs_image.jpg' },
  { examName: 'JIPMER', imageSource: 'path/to/jipmer_image.jpg' },
  { examName: 'AFMC MBBS', imageSource: 'path/to/afmc_mbbs_image.jpg' },
];

const engineeringAdmission: PageInfoProps & {
  engineeringBranches: Array<
    Record<'branch' | 'overview' | 'imageSource', string>
  >;
  engineeringAllExam: Array<EngineeringExam>;
} = {
  pageHeaderCaption: 'PROFESSIONAL EDUCATION CONSULTING',
  pageHeaderTitle:
    ' Get Free Consultation For Engineering Admission in dream College!  ',
  pageHeaderDescription: `Ensure Engineering Admission success with expert consultation. Unlock doors to your dream college and future in engineering!
  `,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: engineeringAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#0C71C3',
  testimonials: engineeringPageTestimonials,
  engineeringBranches,
  engineeringAllExam,
};

const medicalAdmission: PageInfoProps & {
  medicalColleges: Array<Record<'collegeName' | 'imageSource', string>>;
  medicalEntrances: Array<Record<'examName' | 'imageSource', string>>;
} = {
  pageHeaderCaption: 'OUR SERVICES',
  pageHeaderTitle:
    ' Expert Medical Admission Consultants Elevate Your MBBS Admission Experience!',
  pageHeaderDescription: `Unlock success in MBBS admissions with expert guidance from top medical consultants. Your pathway to triumph begins here!
  `,
  pageHeaderTo: '/services',
  pageHeaderBackgroundImageURL: managementAdmissionBGImg,
  pageHeaderBackgroundFallbackColor: '#03467c',
  testimonials: medicalPageTestimonials,
  medicalColleges,
  medicalEntrances,
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
