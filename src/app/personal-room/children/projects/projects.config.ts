export const CProjectsConfigList = {
  inputs: {
    search: {
      placeholder: 'Search project',
      label: '',
      view: 'medium'
    }
  },
  buttons: {
    selection: {
      text: 'Selection help',
      type: '',
      view: 'medium',
      disabled: false
    },
    filter: {
      text: '',
      type: '',
      view: 'filter',
      disabled: false
    },
    filterClose: {
      text: '',
      type: '',
      view: 'filter-close',
      disabled: false
    }
  },
  filtration: {
    type: { 'Front-end': false, 'Back-end': false, 'Full stack': false, 'Design': false },
    skills: { 'React': false, 'Angular': false, 'Vue': false, 'UX/UI Design': false, 'React2': false, 'Angular2': false, 'Vue2': false },
    languages: { 'English': false, 'Spanish': false, 'German': false, 'French': false, 'Portuguese': false }
  }
};
