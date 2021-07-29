import {
  trigger,
  state,
  style,
  transition,
  animate,
  animateChild,
  query,
  keyframes,
  group, stagger
} from '@angular/animations';

// export const loaderAnimate = trigger('loaderAnimate', [
//   transition('void => *', [
//     style({opacity: 1}),
//     animate(3000, style({opacity: 1}))
//   ]),
//   transition('* => void', [
//     animate(1000, style({opacity: 0}))
//   ])
// ]);

export const animateText = trigger('animateText', [
  transition(':enter', [
    style({
      // transform: 'translateX(-150%)',
      opacity: 0
    }),
    animate(1000, style({
      // transform: 'translateX(*)',
      opacity: 1
    })),
    animate(1000)
  ]),
]);


// test
export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);
