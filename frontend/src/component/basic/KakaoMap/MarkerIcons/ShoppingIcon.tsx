import { MapSVGIconProps } from './common';
import CommonSVGIcon from './CommonSVGIcon';

const ShoppingIcon = (props: MapSVGIconProps): JSX.Element => {
    const isSel = props.isSelected;
    const mpd = isSel
        ? 'M41.879 23.0666H38.5305V22.6506C38.5305 20.009 36.5017 17.8666 34.0002 17.8666C31.4986 17.8666 29.4699 20.009 29.4699 22.6506V23.0666H26.1214C25.6856 23.0666 25.3335 23.4384 25.3335 23.8986V37.8346C25.3335 38.2948 25.6856 38.6666 26.1214 38.6666H41.879C42.3147 38.6666 42.6668 38.2948 42.6668 37.8346V23.8986C42.6668 23.4384 42.3147 23.0666 41.879 23.0666ZM31.2426 22.6506C31.2426 21.0412 32.4761 19.7386 34.0002 19.7386C35.5242 19.7386 36.7577 21.0412 36.7577 22.6506V23.0666H31.2426V22.6506Z'
        : 'M27.5455 17H25.6136V16.76C25.6136 15.236 24.4432 14 23 14C21.5568 14 20.3864 15.236 20.3864 16.76V17H18.4545C18.2031 17 18 17.2145 18 17.48V25.52C18 25.7855 18.2031 26 18.4545 26H27.5455C27.7969 26 28 25.7855 28 25.52V17.48C28 17.2145 27.7969 17 27.5455 17ZM21.4091 16.76C21.4091 15.8315 22.1207 15.08 23 15.08C23.8793 15.08 24.5909 15.8315 24.5909 16.76V17H21.4091V16.76Z';
    const mpf = isSel ? 'white' : '#191919';

    return (
        <CommonSVGIcon {...props}>
            <path d={mpd} fill={mpf} />
        </CommonSVGIcon>
    );
};

export default ShoppingIcon;