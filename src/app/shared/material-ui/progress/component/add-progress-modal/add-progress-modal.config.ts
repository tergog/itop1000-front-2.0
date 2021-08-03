export const CAddProgressModalConfigList = {
  inputs: {
    companyName: {
      placeholder: 'Company name',
      type: 'text',
      label: 'Company name',
      error: 'There is a mistake, please, check and enter the Company name'
    },
    educationName: {
      placeholder: 'Education name',
      type: 'text',
      label: 'Education',
      error: 'There is a mistake, please, check and enter an Education'
    },
    jobTitle: {
      placeholder: 'Job title',
      type: 'text',
      label: 'Job title',
      error: 'There is a mistake, please, check and enter the Job title'
    },
    specialty: {
      placeholder: 'Specialty',
      type: 'text',
      label: 'Specialty',
      error: 'There is a mistake, please, check and enter the Specialty'
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
    educationDescription: {
      placeholder: 'Education Description',
      type: 'textarea',
      label: 'Education Description (Optional)',
      error: 'There is a mistake, please, check and enter the Education Description'
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
