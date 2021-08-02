import { ELandingRole } from '../../landing/landing.enums';

export const CFooterConfigList = {
  logo: {
    view: 'medium'
  },
  social: [
    { view: 'facebook', href: '' },
    { view: 'linkedin', href: '' },
    { view: 'instagram', href: '' },
    { view: 'tiktok', href: '' }
  ],
  navigation: {
    view: 'footer',
    links: [
      { text: 'Client', href: 'client', role: ELandingRole.ProductOwner, icon: ''},
      { text: 'Freelancer', href: 'freelance', role: ELandingRole.Freelancer, icon: ''}
    ]
  }
};
