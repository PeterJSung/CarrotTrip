import { Chip } from '@mui/material';
import styled from 'styled-components';

export interface MBTIChipProps {
    type: string;
    score: number;
}

type MAP_INFO = { bg: string; main: string };

const COLOR_MAP: { [mbti: string]: MAP_INFO } = {
    ISTJ: { bg: '#E7EED4', main: '#73804E' },
    ISTP: { bg: '#EEDFFF', main: '#74539B' },
    ESTP: { bg: '#E1F7FF', main: '#00AEEF' },
    ESTJ: { bg: '#E9F9B6', main: '#779D00' },
    ISFJ: { bg: '#E0F1EE', main: '#34A490' },
    ISFP: { bg: '#FFDFE1', main: '#C4121A' },
    ESFP: { bg: '#E6FEEF', main: '#158F44' },
    ESFJ: { bg: '#FFE4ED', main: '#D91A5B' },
    INFJ: { bg: '#FFEDE8', main: '#EE7950' },
    INFP: { bg: '#FFEDE8', main: '#EE7950' },
    ENFP: { bg: '#FFF1D2', main: '#E9A200' },
    ENFJ: { bg: '#EAEBED', main: '#193762' },
    INTJ: { bg: '#E9F9B6', main: '#779D00' },
    INTP: { bg: '#F3E8FF', main: '#7950EE' },
    ENTP: { bg: '#E0F7FA', main: '#16707C' },
    ENTJ: { bg: '#FFE4FB', main: '#EE50D5' },
};

const BadgeIcon = (props: { color: string }): JSX.Element => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="13" fill="white" />
        <path
            d="M18 19L13 15.6667L8 19V8.33333C8 7.97971 8.15051 7.64057 8.41842 7.39052C8.68633 7.14048 9.04969 7 9.42857 7H16.5714C16.9503 7 17.3137 7.14048 17.5816 7.39052C17.8495 7.64057 18 7.97971 18 8.33333V19Z"
            fill={props.color}
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const MBTIWrapper = styled(Chip)`
    width: 8.43rem !important;
    height: 2.62rem !important;
    border-radius: 0.5rem !important;
    font-family: Lato !important;
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 15px !important;
    line-height: 18px !important;
`;

const MBTIChip = (props: MBTIChipProps): JSX.Element => {
    const colorInfo = COLOR_MAP[props.type];
    return (
        <MBTIWrapper
            style={{
                backgroundColor: colorInfo.bg,
                color: colorInfo.main,
            }}
            label="test"
            icon={<BadgeIcon color={colorInfo.main} />}
        />
    );
};

export default MBTIChip;
