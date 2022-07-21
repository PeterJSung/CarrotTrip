import { MapSVGIconProps } from './common';
import CommonSVGIcon from './CommonSVGIcon';

const RestorantIcon = (props: MapSVGIconProps): JSX.Element => {
    const isSel = props.isSelected;
    const mpd = isSel
        ? 'M26.2002 17.8666C26.43 17.8666 26.6505 17.9579 26.813 18.1204C26.9755 18.2829 27.0668 18.5034 27.0668 18.7332V23.9332C27.0665 24.4711 27.2331 24.9959 27.5435 25.4352C27.854 25.8744 28.293 26.2066 28.8002 26.3859V18.7332C28.8002 18.5034 28.8915 18.2829 29.054 18.1204C29.2165 17.9579 29.437 17.8666 29.6668 17.8666C29.8967 17.8666 30.1171 17.9579 30.2797 18.1204C30.4422 18.2829 30.5335 18.5034 30.5335 18.7332V26.3859C31.0406 26.2066 31.4797 25.8744 31.7901 25.4352C32.1006 24.9959 32.2671 24.4711 32.2668 23.9332V18.7332C32.2668 18.5034 32.3581 18.2829 32.5207 18.1204C32.6832 17.9579 32.9036 17.8666 33.1335 17.8666C33.3634 17.8666 33.5838 17.9579 33.7463 18.1204C33.9089 18.2829 34.0002 18.5034 34.0002 18.7332V23.9332C34.0004 24.9322 33.6554 25.9006 33.0237 26.6744C32.392 27.4483 31.5123 27.9801 30.5335 28.1799V41.2666C30.5335 41.4964 30.4422 41.7169 30.2797 41.8794C30.1171 42.0419 29.8967 42.1332 29.6668 42.1332C29.437 42.1332 29.2165 42.0419 29.054 41.8794C28.8915 41.7169 28.8002 41.4964 28.8002 41.2666V28.1799C27.8214 27.9801 26.9417 27.4483 26.31 26.6744C25.6782 25.9006 25.3333 24.9322 25.3335 23.9332V18.7332C25.3335 18.5034 25.4248 18.2829 25.5873 18.1204C25.7499 17.9579 25.9703 17.8666 26.2002 17.8666ZM39.2002 29.9999V41.2666C39.2002 41.4964 39.2915 41.7169 39.454 41.8794C39.6165 42.0419 39.837 42.1332 40.0668 42.1332C40.2967 42.1332 40.5171 42.0419 40.6797 41.8794C40.8422 41.7169 40.9335 41.4964 40.9335 41.2666V18.7332C40.9335 18.5034 40.8422 18.2829 40.6797 18.1204C40.5171 17.9579 40.2967 17.8666 40.0668 17.8666C38.9176 17.8666 37.843 18.4316 37.0699 19.203C36.2986 19.976 35.7335 21.0507 35.7335 22.1999V29.1332C35.7335 29.3631 35.8248 29.5835 35.9873 29.7461C36.1499 29.9086 36.3703 29.9999 36.6002 29.9999H39.2002Z'
        : 'M18.5 14C18.6326 14 18.7598 14.0527 18.8536 14.1464C18.9473 14.2402 19 14.3674 19 14.5V17.5C18.9998 17.8103 19.0959 18.1131 19.275 18.3665C19.4541 18.6199 19.7074 18.8116 20 18.915V14.5C20 14.3674 20.0527 14.2402 20.1464 14.1464C20.2402 14.0527 20.3674 14 20.5 14C20.6326 14 20.7598 14.0527 20.8536 14.1464C20.9473 14.2402 21 14.3674 21 14.5V18.915C21.2926 18.8116 21.5459 18.6199 21.725 18.3665C21.9041 18.1131 22.0002 17.8103 22 17.5V14.5C22 14.3674 22.0527 14.2402 22.1464 14.1464C22.2402 14.0527 22.3674 14 22.5 14C22.6326 14 22.7598 14.0527 22.8536 14.1464C22.9473 14.2402 23 14.3674 23 14.5V17.5C23.0001 18.0763 22.8011 18.635 22.4367 19.0815C22.0722 19.5279 21.5647 19.8347 21 19.95V27.5C21 27.6326 20.9473 27.7598 20.8536 27.8536C20.7598 27.9473 20.6326 28 20.5 28C20.3674 28 20.2402 27.9473 20.1464 27.8536C20.0527 27.7598 20 27.6326 20 27.5V19.95C19.4353 19.8347 18.9278 19.5279 18.5633 19.0815C18.1989 18.635 17.9999 18.0763 18 17.5V14.5C18 14.3674 18.0527 14.2402 18.1464 14.1464C18.2402 14.0527 18.3674 14 18.5 14ZM26 21V27.5C26 27.6326 26.0527 27.7598 26.1464 27.8536C26.2402 27.9473 26.3674 28 26.5 28C26.6326 28 26.7598 27.9473 26.8536 27.8536C26.9473 27.7598 27 27.6326 27 27.5V14.5C27 14.3674 26.9473 14.2402 26.8536 14.1464C26.7598 14.0527 26.6326 14 26.5 14C25.837 14 25.217 14.326 24.771 14.771C24.326 15.217 24 15.837 24 16.5V20.5C24 20.6326 24.0527 20.7598 24.1464 20.8536C24.2402 20.9473 24.3674 21 24.5 21H26Z';
    const mpf = isSel ? 'white' : '#191919';

    return (
        <CommonSVGIcon {...props}>
            <path d={mpd} fill={mpf} />
        </CommonSVGIcon>
    );
};

export default RestorantIcon;
