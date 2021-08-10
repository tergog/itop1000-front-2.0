export const CHeaderConfigList = {
  logo: {
    view: 'small'
  },
  buttons: {
    login: {
      text: 'Login',
      type: '',
      view: 'login',
      disabled: false,
      href: 'authorization'
    },
    signUp: {
      text: 'Sign Up',
      type: '',
      view: 'sign-up',
      disabled: false,
      href: 'authorization'
    },
    logout:{
      text: 'Log Out',
      type: '',
      view: 'login',
      disabled: false
    },
    notification: {
      text: '',
      type: '',
      view: 'notification',
      disabled: false,
      href: 'notification'
    }
  },
  navigation: {
    view: 'header',
    links: [
      { text: 'About us', href: 'about', icon: '' },
      { text: 'Support / FAQ', href: 'support', icon: '' }
    ]
  }
};
