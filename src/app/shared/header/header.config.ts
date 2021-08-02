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
    }
  },
  navigation: {
    view: 'header',
    links: [
      { text: 'Projects', href: 'projects', icon: '' },
      { text: 'Chat', href: 'chat', icon: '' },
      { text: 'About us', href: 'about', icon: '' },
      { text: 'Support / FAQ', href: 'support', icon: '' }
    ]
  }
};
