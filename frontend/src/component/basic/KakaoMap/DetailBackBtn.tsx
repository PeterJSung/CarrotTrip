import { commonMapButton, CommonMapButtonProps } from './commonMapButton';

const BackBtnSVG = (): JSX.Element => (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13L1 7L7 1" stroke="#111313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DetailBackBtn = (props: CommonMapButtonProps): JSX.Element => commonMapButton(<BackBtnSVG />, props.onClick);

export default DetailBackBtn;
