import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public landingData = {
    productOwner: {
      guide: [
        { title: 'Create a profile', subtitle: 'Sign up on our platform and create a detailed profile.' },
        { title: 'Search For Projects', subtitle: 'Go through current projects and choose the one that suits your skill.' },
        { title: 'Send an Offer', subtitle: 'Submit a well-crafted offer to stand a chance of winning the gig.' },
        { title: 'Provide Quality Services', subtitle: 'Work on the project and deliver results within the deadline.' },
        { title: 'Earn Your Money', subtitle: 'Work on the project and deliver results within the deadline.' },
      ]
    },
    freelancer: {
      fullscreen: {
        title: 'Find top-level freelance developers for your project',
        subtitle: 'Hire certified developers with years of experience in the tech world',
        button: {
          text: 'Hire a freelancer',
          type: '',
          view: 'big',
          disabled: false
        }
      },
      benefits: {
        title: 'Why choose ITOP1000?',
        cards: [
          {
            img: 'certificate.svg',
            title: 'Certified pros',
            subtitle: 'Entrust your project to experts with lots of experience in their given field.'
          },
          {
            img: 'track.svg',
            title: 'Track Project Status',
            subtitle: 'Monitor the progress of your project. Stay in touch with the freelancer at all times.'
          },
          {
            img: 'service.svg',
            title: '24/7 Customer Service',
            subtitle: 'Connect with our expert support team in case of any issues.'
          },
          {
            img: 'quality.svg',
            title: 'Assured Quality',
            subtitle: 'Our team focuses on rigorous screening before accepting any freelancers on the platform.'
          },
          {
            img: 'talents.svg',
            title: 'Niche-specific talents',
            subtitle: 'We only accept specialists in a specific field. This helps us to maintain a high bar of quality.'
          },
          {
            img: 'payment.svg',
            title: 'Secure Payments',
            subtitle: 'All your transactions are secure. If you are not satisfied with the service, you can apply for a refund.'
          }
        ]
      },
      guide: [
        { title: 'Post your project', subtitle: 'Create a task with proper description and specific details.' },
        { title: 'Review Bids', subtitle: 'Go through bids from various freelancers matching the job description.' },
        { title: 'Work with preferred talent', subtitle: 'Go through bids from various freelancers matching the job description.' }
      ],
      top: {
        title: 'Top Talents (Developers)',
        cards: [
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' },
          { role: 'developer', img: 'ellipse.png', name: 'Name', surname: 'Surname', rate: 40.00, href: '' }
        ],
        seeAllLink: {
          href: '',
          text: 'See all our talented developers'
        }
      },
      topProject: {
        title: 'Top Projects',
        cards: [
          { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' },
          { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' },
          { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' },
          { role: 'developer', img: 'star.svg', companyName: 'Company Name', date: 1626190691000, href: '' }
        ],
        seeAllLink: {
          href: '',
          text: 'See all our projects'
        }
      },
      description: {
        title: 'ITOP1000 – ITOP1000 is an amazing user-friendly platform for freelance developers and clients:',
        contentItems: [
          { title: 'For Employers: ', description: 'You gain access to the best freelance developers in the industry. All you need is to post a project, and our team will match you with the best-fitted talent to complete your project. Monitor your project status on our platform and communicate with the writer throughout the duration of the project. You can also pay with your preferred payment option, and the freelancer will only get paid once you accept the final task.' },
          { title: 'For Freelancers:', description: 'Create an account and upload your qualifications. Our team will verify your credentials, and you can start accepting gigs. Earn money by working with world-renowned companies. Boost your portfolio and reputation in the industry. ' }
        ],
        button: {
          text: 'Hire a freelancer',
          type: '',
          view: 'big',
          disabled: false
        }
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
