import { Breakpoint } from './breakpoints';

export const media = {
	mobile: `media (max-width: ${Breakpoint.sm})px`,
	tablet: `media (max-width: ${Breakpoint.md})px`,
	desktop: `media (max-width: ${Breakpoint.xl})px`,
};
