import { Breakpoint } from './breakpoints';

export const media = {
	MOBILE: `@media (max-width: ${Breakpoint.SM}px)`,
	TABLET: `@media (max-width: ${Breakpoint.MD}px)`,
	DESKTOP: `@media (max-width: ${Breakpoint.XL}px)`,
};
