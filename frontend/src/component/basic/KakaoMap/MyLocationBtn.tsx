import { mapButtonCommon } from './mapButtonCommon';

export interface MyLocationBtnProps {
    onClick: () => void;
}

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

const MyLocationBtn = (props: MyLocationBtnProps): JSX.Element => mapButtonCommon(<LocationSVG />, props.onClick);

export default MyLocationBtn;
