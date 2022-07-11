import { Box } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { i18n_PLACE_REF } from 'vo/travelInfo';
import SelectSquareBoxGrid from './SelectSquareBoxGrid';
import { SelectBoxVO } from './signupconstants';

const generateDummyData = (count: number): SelectBoxVO[] => {
    const ret: SelectBoxVO[] = [];
    for (let i = 0; i < count; i++) {
        const srcIdx = i % i18n_PLACE_REF.length;
        ret.push({
            code: i,
            checked: false,
            src: i18n_PLACE_REF[srcIdx].src,
            title: `제목${i}`,
        });
    }
    return ret;
};

type InputPropOverrides = {
    itemCount: number;
};

export default {
    title: 'Basic/Signup/SelectSquareBoxGrid',
    component: SelectSquareBoxGrid,
    argTypes: {
        data: {
            table: {
                disable: true,
            },
        },
        itemCount: {
            control: 'number',
            type: 'number',
            name: '버튼 개수',
            defaultValue: 9,
        },
        colCount: {
            control: 'number',
            type: 'number',
            name: '열 개수',
            defaultValue: 3,
        },
    },
} as ComponentMeta<typeof SelectSquareBoxGrid>;

const DefaultContainer = (props: PropsWithChildren<any>): JSX.Element => {
    return (
        <Box border="5px solid" width="300px" position="relative">
            {props.children}
        </Box>
    );
};

type Args = React.ComponentProps<typeof SelectSquareBoxGrid> & InputPropOverrides;
const selectSquareBoxTemplate: Story<Args> = ({ itemCount, ...args }) => {
    args.data = generateDummyData(itemCount <= 0 ? 1 : itemCount);
    args.colCount = args.colCount <= 0 ? 1 : args.colCount;
    return (
        <DefaultContainer>
            <SelectSquareBoxGrid {...args} />
        </DefaultContainer>
    );
};

export const selectSquareBoxGrid = selectSquareBoxTemplate.bind({});
selectSquareBoxGrid.args = {
    onClick: action('Button Click'),
};
