export const CPersonalRoomConfig = {
  navigation: {
    view: 'personal-room',
    links: [
      { text: 'Wallet', href: 'wallet', icon: 'wallet' },
      { text: 'Projects', href: 'projects', icon: 'projects' },
      { text: 'My Works', href: 'works', icon: 'documents' },
      { text: 'Task Tracker', href: 'tracker', icon: 'tracker' },
      { text: 'Chat', href: 'chat', icon: 'chat' },
      { text: 'Personal & Security', href: 'security', icon: 'personal' }
    ]
  },
  role: {
    freelancer: {
      role: 'freelancer',
      photo: '/assets/img/user-photo.png',
      firstName: 'Name',
      lastName: 'Surname',
      position: 'Senior',
      rate: 40,
      email: 'email@google.com',
      status: true
    },
    productOwner: {
      role: 'product-owner',
      photo: '/assets/img/user-photo.png',
      firstName: 'Name',
      lastName: 'Surname',
      position: 'Product Owner',
      email: 'email@google.com'
    }
  }
};
