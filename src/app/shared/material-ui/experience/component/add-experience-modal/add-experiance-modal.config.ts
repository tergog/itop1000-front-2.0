export const CAddExperienceModalConfigList = {
  inputs: {
    companyName: {
      placeholder: 'Company name',
      type: 'text',
      label: 'Company name',
      error: 'There is a mistake, please, check and enter the Company name'
    },
    jobTitle: {
      placeholder: 'Job title',
      type: 'text',
      label: 'Job title',
      error: 'There is a mistake, please, check and enter the Job title'
    },
    positionTitle: {
      placeholder: 'Position title',
      type: 'text',
      label: 'Position title',
      error: 'There is a mistake, please, check and enter the Position title'
    },
    jobDescription: {
      placeholder: 'Job Description',
      type: 'textarea',
      label: 'Job Description (Optional)',
      error: 'There is a mistake, please, check and enter the Job Description'
    },
    dateFrom: {
      placeholder: 'Enter data',
      type: 'date',
      label: 'Date From',
      error: 'Please, enter required data'
    },
    dateTill: {
      placeholder: 'Enter data',
      type: 'date',
      label: 'Till',
      error: 'Please, enter required data'
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