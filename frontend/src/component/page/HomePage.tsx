import { getTourNaviInfo } from 'api/navigation';
import { useEffect } from 'react';

const HomePage = (): JSX.Element => {
    useEffect(() => {
        const fetch = async () => {
            console.log(`NaviStart`);
            const ret = await getTourNaviInfo(
                {
                    x: 126.97224161387756,
                    y: 37.57776094924411,
                },
                [
                    {
                        y: 37.57412170480612,
                        x: 126.9757522146493,
                    },
                    {
                        y: 37.57249172836604,
                        x: 126.98016750972909,
                    },
                    {
                        y: 37.57129493286989,
                        x: 126.99429485433944,
                    },
                    {
                        y: 37.573106029495335,
                        x: 127.0031243220909,
                    },
                ],
            );
            console.log(ret);
        };
        fetch();
    }, []);

    return <div>Home</div>;
};

export default HomePage;
