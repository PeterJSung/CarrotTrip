import { PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MapSVGIconProps } from './common';

const CommonSVGIcon = (props: PropsWithChildren<MapSVGIconProps>): JSX.Element => {
    const isSel = props.isSelected;
    const s = isSel ? 68 : 46;
    const cx = isSel ? 34 : 23;
    const cy = isSel ? 30 : 21;
    const cr = isSel ? 26 : 15;
    const cfc = isSel ? '#191919' : 'white';
    const gId = uuidv4();
    const bId = uuidv4();

    const fedy = isSel ? 4 : 2;
    const femat = isSel ? '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0' : '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0';
    return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
                filter={`url(#${gId})`}
                style={{
                    zIndex: isSel ? 3 : 1,
                }}
            >
                <circle cx={cx} cy={cy} r={cr} fill={cfc} />
                {isSel ? <></> : <circle cx="23" cy="21" r="14.5" stroke="#EEEEEE" />}
            </g>
            {props.children}
            <defs>
                <filter
                    id={gId}
                    x="0"
                    y="0"
                    width={s}
                    height={s}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={fedy} />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values={femat} />
                    <feBlend mode="normal" in2="BackgroundImageFix" result={`${bId}`} />
                    <feBlend mode="normal" in="SourceGraphic" in2={`${bId}`} result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default CommonSVGIcon;
