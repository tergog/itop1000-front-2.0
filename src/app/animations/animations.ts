import {
  trigger,
  state,
  style,
  transition,
  animate,
  animateChild,
  query,
  keyframes,
  group
} from '@angular/animations';

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
