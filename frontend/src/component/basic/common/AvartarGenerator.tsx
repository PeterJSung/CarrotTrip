import { genHashFromStr, getRandomArbitrary } from 'common/util';
import styled from 'styled-components';

interface PropTypes {
    sz: number;
    id?: string;
}

const MAX_LEN = 10;

const AvartarGenerator = (props: PropTypes): JSX.Element => {
    let randomVal = 0;
    if (props.id) {
        randomVal = genHashFromStr(props.id) % MAX_LEN;
    } else {
        const rand = Math.floor(getRandomArbitrary(0, MAX_LEN));
        randomVal = rand === MAX_LEN ? rand - 1 : rand;
    }

    return (
        <Img
            style={{
                backgroundSize: 'contain',
                width: `${props.sz}rem`,
                height: `${props.sz}rem`,
                backgroundImage: `url(assets/profile/Sample-${randomVal}.jpg)`,
            }}
        />
    );
};

export default AvartarGenerator;

const Img = styled.div`
    border-radius: 50%;
`;
