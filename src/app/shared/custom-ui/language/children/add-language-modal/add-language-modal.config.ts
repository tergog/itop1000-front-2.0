export const CAddLanguageModalConfigList = {
  selects: {
    proficiency: {
      label: 'Proficiency',
      error: 'Please, enter required data',
      view: 'proficiencies'
    },
    language: {
      label: 'Language',
      error: 'Please, enter required data',
      view: 'languages'
    }
  },
  buttons: {
    save: {
      text: 'Save',
      type: 'submit',
      view: 'medium',
      disabled: false
    },
    cancel: {
      text: 'Cancel',
      type: '',
      view: 'small-empty',
      disabled: false
    },
    close: {
      text: '',
      type: '',
      view: 'close',
      disabled: false
    }
  }
};


export const CLanguageList = ['Language', 'Language', 'Language', 'Language', 'Language'];
export const CProficiencyList = ['Conversational', 'Basic', 'Native'];
