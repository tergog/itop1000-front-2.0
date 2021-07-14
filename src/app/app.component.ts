import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITOP1000-FRONT2';

  public arrSocialListParameters = [
    { view: 'instagram', href: '' },
    { view: 'google', href: '' },
    { view: 'apple', href: '' },
    { view: 'linkedin', href: '' },
    { view: 'tiktok', href: '' },
    { view: 'facebook', href: '' },
    { view: 'facebook-empty', href: '' },
  ];

  public objCheckboxParameters = {
    label: 'Accent Terms of Use and Privace',
    errorMessage: 'Please, accept Terms of use and privace',
  }

  public objSelectParameters = {
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
  };

  public arrLandingGuideParameters = [
    { title: 'Create a profile', subtitle: 'Sign up on our platform and create a detailed profile.' },
    { title: 'Search For Projects', subtitle: 'Go through current projects and choose the one that suits your skill.\n' },
    { title: 'Send an Offer\n', subtitle: 'Submit a well-crafted offer to stand a chance of winning the gig.' },
    { title: 'Provide Quality Services', subtitle: 'Work on the project and deliver results within the deadline.' },
    { title: 'Earn Your Money\n', subtitle: 'Work on the project and deliver results within the deadline.' },
  ];

  public objLogoParameters = {
    big: {
      view: 'big'
    },
    small: {
      view: 'small'
    },
    empty: {
      view: 'empty'
    },
    loader: {
      view: 'loader'
    }
  };

  public objBenefitsCardParameters = {
    img: 'certificate.svg',
    title: 'Certified pros',
    subtitle: 'Entrust your project to experts with lots of experience in their given field.'
  };

  public objPreviewCardParameters = {
    developer: {
      role: 'developer',
      img: 'ellipse.png',
      name: 'Name',
      surname: 'Surname',
      rate: 40.00,
      href: ''
    },
    productOwner: {
      role: 'product-owner',
      img: 'adobe.svg',
      name: 'Project name',
      href: ''
    }
  };

  public objProjectCardParameters = {
    productOwner: {
      role: 'product-owner',
      img: 'star.svg',
      companyName: 'Company Name',
      projectName: 'Project Name',
      budget: 400.00,
      href: ''
    },
    developer: {
      role: 'developer',
      img: 'star.svg',
      companyName: 'Company Name',
      date: 1626190691000,
      href: ''
    }
  };

  public objInputParameters = {
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
    text: {
      placeholder: 'First name',
      type: 'text',
      label: 'First name',
      error: 'There is a mistake, please, check and enter the First name'
    },
    date: {
      placeholder: '',
      type: 'date',
      label: 'Date',
      error: ''
    },
    textarea: {
      placeholder: 'Enter message',
      type: 'textarea',
      label: 'Textarea',
      error: ''
    }
  };

  public objButtonParameters = {
    big: {
      text: 'Discover Projects',
      type: '',
      view: 'big',
      disabled: false
    },
    medium: {
      text: 'Next',
      type: '',
      view: 'medium',
      disabled: false
    },
    disable: {
      text: 'Save',
      type: '',
      view: 'medium',
      disabled: true
    },
    small: {
      text: 'Accept',
      type: '',
      view: 'small',
      disabled: false
    },
    smallEmpty: {
      text: 'Decline',
      type: '',
      view: 'small-empty',
      disabled: false
    },
    login: {
      text: 'Login',
      type: '',
      view: 'login',
      disabled: false,
      href: ''
    },
    signUp: {
      text: 'Sign Up',
      type: '',
      view: 'sign-up',
      disabled: false,
      href: ''
    },
  };
}
