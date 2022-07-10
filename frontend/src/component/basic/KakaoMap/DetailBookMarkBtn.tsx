import { commonMapButton, CommonMapButtonProps } from './commonMapButton';

const BookMarkEmptyBtnSVG = (): JSX.Element => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
            stroke="#111313"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const BookMarkFillBtnSVG = (): JSX.Element => (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14 18L7 13L0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V18Z"
            fill="#111313"
        />
    </svg>
);

const DetailBookMarkEmptyBtn = (props: CommonMapButtonProps & { isMarked: boolean }): JSX.Element =>
    commonMapButton(props.isMarked ? <BookMarkFillBtnSVG /> : <BookMarkEmptyBtnSVG />, props.onClick);

export default DetailBookMarkEmptyBtn;
