import { ELandingRole } from '../../landing/landing.enums';
import { EStaticDataType } from '../../reducers/static/static.enums';

export const CStepperConfigList = {
  [ELandingRole.Freelancer]: {
    type: 'freelancer',
    selects: {
      category: {
        label: 'Category',
        error: 'Please, enter required data',
        view: EStaticDataType.Categories
      },
      subcategory: {
        label: 'Subcategory',
        error: 'Please, enter required data',
        view: EStaticDataType.SubCategories
      }
    },
    chipsValues: ['HTML', 'CSS', 'JavaScript'],
    searchInputs: {
      big: {
        placeholder: 'Search',
        label: 'Search skills or add your own',
        view: 'big'
      }
    },
    inputs: {
      money: {
        placeholder: '0.00',
        type: 'money',
        label: '',
        error: 'Data is required'
      },
      description: {
        placeholder: 'Tell about you',
        type: 'textarea',
        label: 'Description',
        error: ''
      }
    },
    buttons: {
      send: {
        text: 'send the cv',
        type: 'submit',
        view: 'medium',
        disabled: false
      },
      next: {
        text: 'NEXT',
        type: 'submit',
        view: 'medium',
        disabled: false
      },
      previous: {
        text: 'Back',
        type: '',
        view: 'small-empty',
        disabled: false
      }
    }
  },
  [ELandingRole.ProductOwner]: {
    type: 'product-owner',
    selects: {
      category: {
        label: 'Category',
        error: 'Please, enter required data',
        view: EStaticDataType.Categories
      },
      location: {
        label: 'Location',
        error: 'Please, enter required data',
        view: EStaticDataType.Countries
      },
      operationMode: {
        label: 'Operation mode',
        error: 'Please, enter required data',
        view: EStaticDataType.Operations
      }
    },
    searchInputs: {},
    chipsValues: [],
    inputs: {
      companyName: {
        placeholder: 'Name',
        type: 'text',
        label: 'Company Name',
        error: 'Please, enter required data'
      },
      description: {
        placeholder: 'Tell about your company',
        type: 'textarea',
        label: 'Description',
        error: ''
      },
    },
    buttons: {
      send: {
        text: 'send the cv',
        type: '',
        view: 'medium',
        disabled: false
      },
      next: {
        text: 'NEXT',
        type: '',
        view: 'medium',
        disabled: false
      },
      previous: {
        text: 'Back',
        type: '',
        view: 'small-empty',
        disabled: false
      }
    }
  }
};
