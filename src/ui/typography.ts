import { css } from 'styled-components';
import { media } from './media';

const H1 = css`
	font-size: 40px;
	font-weight: 600;
	line-height: 60px;

	${media.TABLET} {
		font-size: 32px;
		line-height: 48px;
	}

	${media.MOBILE} {
		font-size: 28px;
		line-height: 42px;
	}
`;

const H2 = css`
	font-size: 24px;
	font-weight: 600;
	line-height: 36px;

	${media.MOBILE} {
		font-size: 20px;
	}
`;

const H3 = css`
	font-size: 20px;
	font-weight: 600;
	line-height: 32px;

	${media.MOBILE} {
		font-size: 18px;
		line-height: 28px;
	}
`;

const S1 = css`
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
`;

const S2 = css`
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
`;

const S3 = css`
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
`;

const B1 = css`
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
`;

export const typography = {
	H1,
	H2,
	H3,
	S1,
	S2,
	S3,
	B1,
};
