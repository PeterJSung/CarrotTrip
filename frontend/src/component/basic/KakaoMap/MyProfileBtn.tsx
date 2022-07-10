import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { commonMapButton } from './commonMapButton';
export interface MyProfileBtnProps {
    onClick: () => void;
}
/*
const ProfileSVG = (): JSX.Element => (
    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 7V5C17 3.93913 16.5786 2.92172 15.8284 2.17157C15.0783 1.42143 14.0609 1 13 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V7"
            stroke="#111313"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
*/
const MyProfileBtn = (props: MyProfileBtnProps): JSX.Element =>
    commonMapButton(<PersonOutlineIcon style={{ color: '#111313' }} />, props.onClick);

export default MyProfileBtn;
