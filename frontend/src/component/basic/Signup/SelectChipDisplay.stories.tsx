import { Box } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';
import SelectChipDisplay from './SelectChipDisplay';
import { SelectChipVO } from './signupconstants';

const loremIpsum = `로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 \
사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. \
이런 용도로 사용할 때 로렘 입숨을 그리킹 이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.`;

const testStringArr = loremIpsum.split(' ');

type InputPropOverrides = {
    itemCount: number;
    checked: boolean;
};

const generateDummyData = (count: number, checked: boolean): SelectChipVO[] => {
    const ret: SelectChipVO[] = [];
    for (let i = 0; i < count; i++) {
        ret.push({
            checked,
            code: i + 1,
            title: testStringArr[i],
        });
    }
    return ret;
};

export default {
    title: 'Basic/Signup/SelectChipDisplay',
    component: SelectChipDisplay,
    argTypes: {
        data: {
            table: {
                disable: true,
            },
        },
        itemCount: {
            control: 'number',
            type: 'number',
            name: 'Chip 개수',
            defaultValue: 1,
        },
        checked: {
            control: 'boolean',
            name: '클릭 여부',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof SelectChipDisplay>;

const DefaultContainer = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Box border="5px solid" width="300px" position="relative">
            {props.children}
        </Box>
    );
};

type Args = React.ComponentProps<typeof SelectChipDisplay> & InputPropOverrides;
const selectChipDisplayTemplate: Story<Args> = ({ itemCount, checked, ...args }) => {
    args.data = generateDummyData(itemCount <= 0 ? 1 : itemCount, checked);
    return (
        <DefaultContainer>
            <SelectChipDisplay {...args} />
        </DefaultContainer>
    );
};

export const selectChipDisplay = selectChipDisplayTemplate.bind({});
selectChipDisplay.args = {
    onClick: action('Chip Click'),
};
