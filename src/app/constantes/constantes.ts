import { EModalAcceptRuleView } from '../authorization/children/modal-accept-rule/modal-accept-rule.enums';

export const CNavigationList = {
  authorization: {
    qrCode: '/authorization/qr-code',
    authentication: '/authorization/authentication',
    sign: '/authorization/sign',
    info: '/authorization/info',
    waiting: '/authorization/waiting',
  },
  personal: {
    home: '/personal-room/home',
    wallet: '/personal-room/wallet',
    projects: {
      main: '/personal-room/projects',
      comment: '/personal-room/projects/comment',
    },
    works: {
      main: '/personal-room/works',
      comment: '/personal-room/works/comment',
    },
    tracker: '/personal-room/tracker',
    chat: '/personal-room/chat',
    security: '/personal-room/security',
    developers: '/personal-room/developers'
  }
};

export const CApi = {
  server: 'https://localhost:3000/',
  static: 'static-info',
  auth: {
    register: {
      freelancer: 'auth/register/freelancer',
      'product-owner': 'auth/register/owner'
    },
    signIn: {
      default: 'auth/signIn',
      google: 'auth/googleSignIn'
    },
    logout: 'auth/logout',
    status: 'common/user-status'
  },
  data: {
    freelancer: {
      home: 'room/freelancer/personal',
    },
    'product-owner': {
      home: 'room/owner/personal'
    },
    common: {
      secure: 'room/common/secure',
      password: 'room/common/secure/password',
      authPassword: 'room/common/secure/password',
      confirmPassword: 'room/common/secure/password/confirm'
    }
  }
};
