import { ELandingRole } from '../landing/landing.enums';
import { EStepperType } from '../shared/stepper/stepper.enums';

export const CSubcategoryWorks = {
  'Accounting & Consulting': ['Accounting', 'Financial Planning', 'Human Resources', 'Management Consulting', 'Other - Accounting & Consulting'],
  'Admin Support': ['Data Entry', 'Other-Admin Support', 'Personal/virtual Assistence', 'Project Management', 'Research'],
  'Design & Creative': ['Art Illustration', 'Branding', 'Gaming & Ar/VR', 'Graphic & Presentation', 'Product Design'],
  'Data Science & Analytics': ['A/B testing', 'Data Extraction/eTL', 'Data Mining & Management',
    'Data Visualization', 'Machine Learning', 'Other - Data Science & Analytics', 'Quantitative Analysis'],
  'Engineering & Architecture': ['3D modeling & cAD', 'Architecture',
    'Chemical Engineering', 'Civil & Structural Engineering', 'Contract Manufacturing', 'Electrical Engineering', 'Interior Design', 'Mechanical Engineering',
    'Other - Engineering', 'Physical Sciences'],
  'Customer Service': ['Customer Service', 'Technical Support'],
  'IT & Networking': ['Database Administration', 'ERP/CRM Software', 'Information Security', 'Network & System Administration', 'Other - IT & Networking'],
  'Legal': ['Contract Law', 'Corporate Law', 'Intellectual Property Law', 'Other - Legal', 'Paralegal Services'],
  'Sales & Marketing': ['Display Advertising', 'Email & Marketing Automation',
    'Lead generation', 'Market & Customer Research', 'Marketing Strategy',
    'Other - Sales & Marketing', 'Public Relations', 'SEM - Search Engine Marketing', 'SEO - Search Engine Optimization', 'SMM - Social Media Marketing'],
  'Translation': ['General Translation', 'Email & Marketing Automation', 'Legal Translation',
    'Medical Translation', 'Technical Translation']
};

export const CCategoryWorks = [
  'Accounting & Consulting',
  'Admin Support',
  'Customer Service',
  'Data Science & Analytics',
  'Design & Creative',
  'Engineering & Architecture',
  'IT & Networking',
  'Legal',
  'Sales & Marketing',
  'Translation'
];

export const CAuthorizationData = {
  logo: {
    empty: {
      view: 'empty'
    }
  },
  social: [
    { view: 'facebook-empty', href: '' },
    { view: 'google', href: '' },
    { view: 'apple', href: '' }
  ],
  loginFormElements: {
    email: {
      placeholder: 'email@example.com',
      type: 'email',
      label: 'Email',
      error: 'Please, enter required data'
    },
    password: {
      placeholder: 'Enter password',
      type: 'password',
      label: 'Password',
      error: 'The password is not correct, try again :('
    },
    checkbox: {
      label: 'Remember me',
      errorMessage: ''
    },
    buttonSubmit: {
      text: 'sign in',
      type: 'submit',
      view: 'big',
      disabled: false
    }
  },
  signUpFormElements: {
    email: {
      placeholder: 'email@example.com',
      type: 'email',
      label: 'Email',
      error: 'Please, enter required data'
    },
    password: {
      placeholder: 'Your password',
      type: 'password',
      label: 'Password',
      error: 'The password is not correct, try again :('
    },
    confirmPassword: {
      placeholder: 'Confirm password',
      type: 'password',
      label: 'Confirm Password',
      error: 'The password is not correct, try again :('
    },
    firstName: {
      placeholder: 'First name',
      type: 'text',
      label: 'First name',
      error: 'There is a mistake, check and enter the First name'
    },
    lastName: {
      placeholder: 'Last name',
      type: 'text',
      label: 'Last name',
      error: 'There is a mistake, check and enter the Last name'
    },
    checkbox: {
      policy: {
        label: 'Accent Terms of Use and Privace',
        errorMessage: 'Please, accept Terms of use and privace'
      },
      terms: {
        label: 'Accept Privacy Pollicy',
        errorMessage: 'Please, accept Privacy Policy'
      }
    },
    buttonSubmit: {
      text: 'sign up',
      type: 'submit',
      view: 'big',
      disabled: false
    }
  }
};

export const CStepperData = {
  [ELandingRole.Freelancer]: {
    type: 'freelancer',
    selects: {
      category: {
        label: 'Category',
        options: [
          'Accounting & Consulting',
          'Admin Support',
          'Customer Service',
          'Data science & Analytics',
          'Design & Creative',
          'Engineering & Architecture',
          'IT & Networking',
          'Legal',
          'Sales & Marketing',
          'Translation'
        ],
        defaultValue: 'Select the category'
      },
      subcategory: {
        label: 'Subcategory',
        options: [
          'Accounting & Consulting',
          'Admin Support',
          'Customer Service',
          'Data science & Analytics',
          'Design & Creative',
          'Engineering & Architecture',
          'IT & Networking',
          'Legal',
          'Sales & Marketing',
          'Translation'
        ],
        defaultValue: 'Select the subcategory'
      }
    },
    chipsValues: ['HTML', 'CSS', 'JavaScript'],
    searchInputs: {
      big: {
        placeholder: 'Search',
        label: 'Search skills or add your own',
        view: 'big'
      }
    },
    inputs: {
      money: {
        placeholder: '0.00',
        type: 'money',
        label: '',
        error: 'Data is required'
      },
    },
    buttons: {
      send: {
        text: 'send the cv',
        type: '',
        view: 'medium',
        disabled: false
      },
      next: {
        text: 'NEXT',
        type: '',
        view: 'medium',
        disabled: false
      },
      previous: {
        text: 'Back',
        type: '',
        view: 'small-empty',
        disabled: false
      }
    }
  },
  [ELandingRole.ProductOwner]: {
    type: 'product-owner',
    selects: {
      category: {
        label: 'Category',
        options: [
          'Accounting & Consulting',
          'Admin Support',
          'Customer Service',
          'Data science & Analytics',
          'Design & Creative',
          'Engineering & Architecture',
          'IT & Networking',
          'Legal',
          'Sales & Marketing',
          'Translation'
        ],
        defaultValue: 'Select the category'
      },
      location: {
        label: 'Location',
        options: [
          'Ukraine',
          'United States',
          'Uruguay',
          'Venezuela',
          'United Kingdom'
        ],
        defaultValue: 'Select the location'
      },
      operationMode: {
        label: 'Operation mode',
        options: [
          'Full-time',
          'Part-time'
        ],
        defaultValue: 'Choose the operation mode'
      }
    },
    searchInputs: {},
    chipsValues: [],
    inputs: {
      companyName: {
        placeholder: 'Name',
        type: 'text',
        label: 'Company Name',
        error: 'Please, enter required data'
      },
      description: {
        placeholder: 'Tell about your company',
        type: 'textarea',
        label: 'Description',
        error: ''
      },
    },
    buttons: {
      send: {
        text: 'send the cv',
        type: '',
        view: 'medium',
        disabled: false
      },
      next: {
        text: 'NEXT',
        type: '',
        view: 'medium',
        disabled: false
      },
      previous: {
        text: 'Back',
        type: '',
        view: 'small-empty',
        disabled: false
      }
    }
  }
};

export const CLandingData = {
  [ELandingRole.ProductOwner]: {
    role: ELandingRole.ProductOwner,
    fullscreen: {
      title: 'Find world-class companies with existing projects',
      subtitle: 'Convert your special skills into money instantly',
      button: {
        text: 'Discover Projects',
        type: '',
        view: 'big',
        disabled: false
      }
    },
    benefits: {
      title: 'Why choose ITOP1000?',
      cards: [
        {
          img: 'certificate.svg',
          title: 'Certified Clients',
          subtitle: 'We only accept job listings from certified clients.'
        },
        {
          img: 'use.svg',
          title: 'Easy to use',
          subtitle: 'You can monitor recent projects within your niche and also stay in touch with the client at all times.'
        },
        {
          img: 'service.svg',
          title: '24/7 Customer Service',
          subtitle: 'Freelancers can contact our expert support team in case of any issues with the client.'
        },
        {
          img: 'quality.svg',
          title: 'Assured Quality',
          subtitle: 'Our team focuses on rigorous screening before accepting any freelancers on the platform.'
        },
        {
          img: 'charges.svg',
          title: 'Lowest Charges',
          subtitle: 'We only charge a reasonable amount of interest per project.'
        },
        {
          img: 'payment.svg',
          title: 'Secure Payments',
          subtitle: 'All your transactions are secure. You can choose your preferred payout option.'
        }
      ]
    },
    guide: [
      { title: 'Create a profile', subtitle: 'Sign up on our platform and create a detailed profile.' },
      { title: 'Search For Projects', subtitle: 'Go through current projects and choose the one that suits your skill.' },
      { title: 'Send an Offer', subtitle: 'Submit a well-crafted offer to stand a chance of winning the gig.' },
      { title: 'Provide Quality Services', subtitle: 'Work on the project and deliver results within the deadline.' },
      { title: 'Earn Your Money', subtitle: 'Work on the project and deliver results within the deadline.' },
    ],
    top: {
      title: 'Top Companies',
      cards: [
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' },
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' },
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' },
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' },
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' },
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' },
        { role: 'product-owner', img: 'adobe.svg', name: 'Project Name', href: '' }
      ],
      seeAllLink: {
        href: '',
        text: 'Discover all Companies'
      }
    },
    topProject: {
      title: 'Top Projects',
      cards: [
        { role: 'product-owner', img: 'star.svg', companyName: 'Company Name', projectName: 'Project Name', href: '', budget: 400.00 },
        { role: 'product-owner', img: 'star.svg', companyName: 'Company Name', projectName: 'Project Name', href: '', budget: 400.00 },
        { role: 'product-owner', img: 'star.svg', companyName: 'Company Name', projectName: 'Project Name', href: '', budget: 400.00 },
        { role: 'product-owner', img: 'star.svg', companyName: 'Company Name', projectName: 'Project Name', href: '', budget: 400.00 }
      ],
      seeAllLink: {
        href: '',
        text: 'See all available projects'
      }
    }
  },
  [ELandingRole.Freelancer]: {
    role: ELandingRole.Freelancer,
    fullscreen: {
      title: 'Find top-level freelance developers for your project',
      subtitle: 'Hire certified developers with years of component in the tech world',
      button: {
        text: 'Hire a freelancer',
        type: '',
        view: 'big',
        disabled: false
      }
    },
    benefits: {
      title: 'Why choose ITOP1000?',
      cards: [
        {
          img: 'certificate.svg',
          title: 'Certified pros',
          subtitle: 'Entrust your project to experts with lots of component in their given field.'
        },
        {
          img: 'track.svg',
          title: 'Track Project Status',
          subtitle: 'Monitor the progress of your project. Stay in touch with the freelancer at all times.'
        },
        {
          img: 'service.svg',
          title: '24/7 Customer Service',
          subtitle: 'Connect with our expert support team in case of any issues.'
        },
        {
          img: 'quality.svg',
          title: 'Assured Quality',
          subtitle: 'Our team focuses on rigorous screening before accepting any freelancers on the platform.'
        },
        {
          img: 'talents.svg',
          title: 'Niche-specific talents',
          subtitle: 'We only accept specialists in a specific field. This helps us to maintain a high bar of quality.'
        },
        {
          img: 'payment.svg',
          title: 'Secure Payments',
          subtitle: 'All your transactions are secure. If you are not satisfied with the service, you can apply for a refund.'
        }
      ]
    },
    guide: [
      { title: 'Post your project', subtitle: 'Create a task with proper description and specific details.' },
      { title: 'Review Bids', subtitle: 'Go through bids from various freelancers matching the job description.' },
      { title: 'Work with preferred talent', subtitle: 'Go through bids from various freelancers matching the job description.' }
    ],
    top: {
      title: 'Top Talents (Developers)',
      cards: [
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
        { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' }
      ],
      seeAllLink: {
        href: '',
        text: 'See all our talented developers'
      }
    },
    topProject: {
      title: 'Top Projects',
      cards: [
        { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' },
        { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' },
        { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' },
        { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' }
      ],
      seeAllLink: {
        href: '',
        text: 'See all our projects'
      }
    },
    description: {
      title: 'ITOP1000 is an amazing user-friendly platform for freelance developers and clients:',
      contentItems: [
        {
          title: 'For Employers: ',
          description: 'You gain access to the best freelance developers in the industry. All you need is to post a project, and our team will match you with the best-fitted talent to complete your project. Monitor your project status on our platform and communicate with the writer throughout the duration of the project. You can also pay with your preferred payment option, and the freelancer will only get paid once you accept the final task.'
        },
        {
          title: 'For Freelancers:',
          description: 'Create an account and upload your qualifications. Our team will verify your credentials, and you can start accepting gigs. Earn money by working with world-renowned companies. Boost your portfolio and reputation in the industry. '
        }
      ],
      button: {
        text: 'Hire a freelancer',
        type: '',
        view: 'big',
        disabled: false
      }
    }
  }
};
