import { commonMapButton, CommonMapButtonProps } from './commonMapButton';

const LocationSVG = (): JSX.Element => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 8.57895L17 1L9.42105 17L7.73684 10.2632L1 8.57895Z"
            stroke="#111313"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const MyLocationBtn = (props: CommonMapButtonProps): JSX.Element => commonMapButton(<LocationSVG />, props.onClick);

export default MyLocationBtn;
