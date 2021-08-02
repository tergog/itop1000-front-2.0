import { IButtonParameters } from '../shared/custom-ui/button/button.interfaces';
import { IPreviewCardParameters } from '../shared/custom-ui/preview-card/preview-card.interfaces';
import { IProjectCardParameters } from '../shared/custom-ui/preview-project-card/preview-project-card.interfaces';
import { IBenefitsParameters } from '../shared/custom-ui/benefits-card/benefits-card.interfaces';
import { ILandingGuideParameters } from '../shared/landing-guide/landing-guide.interfaces';

export interface ILandingData {
  role: string;
  fullscreen: {
    title: string;
    subtitle: string;
    button: IButtonParameters
  };
  benefits: {
    title: string;
    cards: IBenefitsParameters[]
  };
  guide: ILandingGuideParameters[];
  top: {
    title: string;
    cards: IPreviewCardParameters[];
    seeAllLink: {
      href: string;
      text: string;
    }
  };
  topProject: {
    title: string;
    cards: IProjectCardParameters[];
    seeAllLink: {
      href: string;
      text: string;
    }
  };
  description?: {
    title: string;
    contentItems: IDescriptionContentItems[];
    button: IButtonParameters;
  };
}

export interface IDescriptionContentItems {
  title: string;
  description: string;
}
