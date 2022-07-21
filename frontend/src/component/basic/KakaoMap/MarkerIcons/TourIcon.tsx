import { MapSVGIconProps } from './common';
import CommonSVGIcon from './CommonSVGIcon';

const TourIcon = (props: MapSVGIconProps): JSX.Element => {
    const isSel = props.isSelected;
    const mpd = isSel
        ? 'M42.6664 21.68H29.0164V19.6H27.0664V40.4H29.0164V32.08H42.6664L40.7164 26.88L42.6664 21.68Z'
        : 'M28 16.2H20.125V15H19V27H20.125V22.2H28L26.875 19.2L28 16.2Z';
    const mpf = isSel ? 'white' : '#191919';

    return (
        <CommonSVGIcon {...props}>
            <path d={mpd} fill={mpf} />
        </CommonSVGIcon>
    );
};

export default TourIcon;
