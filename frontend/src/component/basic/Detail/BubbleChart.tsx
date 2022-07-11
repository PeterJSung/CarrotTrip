import * as d3 from 'd3';
import { Simulation, SimulationNodeDatum } from 'd3';
import React from 'react';
import styled from 'styled-components';
import { AttractionDataSet } from 'vo/travelInfo';

// this code is based from https://github.com/EliEladElrom/react-tutorials/blob/master/bubble-chart/src/components/BubbleChart/BubbleChart.tsx

const SVGText = styled.text`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 14px;
    fill: #ffffff;
`;

const MIN_COUNT = 1;
const MAX_COUNT = 150;

const MIN_SIZE = 90;
const MAX_SIZE = 130;
const MULTIPLE_WEIGHT = 3.93;

export const generationDetailInfo = (data: AttractionDataSet[]): DetailDataSet[] => {
    const ret: DetailDataSet[] = [];
    if (data.length <= 0) {
        return ret;
    }
    const count = data.length;
    const CURMAX = MAX_SIZE - (count - 1) * MULTIPLE_WEIGHT;
    const CURMIN = MIN_SIZE - (count - 1) * MULTIPLE_WEIGHT;

    ret.push({
        name: data[0].translateKey,
        size: CURMAX,
        color: data[0].color,
    });
    if (data.length >= 2) {
        const DIFF_VALUE = (CURMAX - CURMIN) / (data.length - 1);
        let curSize = CURMAX;
        for (let i = 1; i < data.length; i++) {
            curSize -= DIFF_VALUE;
            ret.push({
                name: data[i].translateKey,
                size: curSize,
                color: data[i].color,
            });
        }
    }
    return ret;
};

export interface DetailDataSet {
    name: string;
    color: string;
    size: number;
}

interface StateSetType {
    data: DetailDataSet[];
}

export interface BubbleChartProps {
    bubblesData: DetailDataSet[];
    width: number;
    height: number;
}

class BubbleChart extends React.Component<BubbleChartProps, StateSetType> {
    public forceData: DetailDataSet[];
    private simulation: Simulation<SimulationNodeDatum, undefined> | undefined;
    constructor(props: BubbleChartProps) {
        super(props);
        this.state = {
            data: [],
        };
        this.forceData = this.setForceData(props);
    }

    componentDidMount() {
        this.animateBubbles();
    }

    componentWillUnmount() {
        this.simulation?.stop(); // it must be release for memory leak
    }

    componentDidUpdate(prevProps: BubbleChartProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            this.forceData = this.setForceData(this.props);
            this.animateBubbles();
        }
    }

    setForceData = (props: BubbleChartProps): DetailDataSet[] => {
        const d: DetailDataSet[] = [];
        for (let i = 0; i < props.bubblesData.length; i++) {
            d.push({ ...props.bubblesData[i] });
        }
        return d;
    };

    animateBubbles = () => {
        if (this.props.bubblesData.length > 0) {
            this.simulatePositions(this.forceData);
        }
    };

    simulatePositions = (data: DetailDataSet[]) => {
        this.simulation = d3
            .forceSimulation()
            .nodes(data as SimulationNodeDatum[])
            .force('x', d3.forceX().strength(0.2))
            .force('y', d3.forceY().strength(0.2))
            .force(
                'collide',
                d3.forceCollide((d: SimulationNodeDatum) => {
                    return this.radiusScale((d as DetailDataSet).size) + 2;
                }),
            )
            .on('tick', () => {
                this.setState({ data });
            });
    };

    radiusScale = (value: d3.NumberValue) => {
        const fx = d3.scaleSqrt().range([1, 50]).domain([MIN_COUNT, MAX_COUNT]);
        return fx(value);
    };

    renderBubbles = (data: []) => {
        return data.map((item: { v: number; x: number; y: number }, index) => {
            const { props } = this;
            //const content = props.bubblesData.length > index ? props.bubblesData[index].name : '';
            const curData: DetailDataSet = item as unknown as DetailDataSet;

            return (
                <g
                    key={`g-${curData.name}-${index}`}
                    transform={`translate(${props.width / 2 + item.x}, ${props.height / 2 + item.y})`}
                >
                    <circle r={this.radiusScale((item as unknown as DetailDataSet).size)} fill={curData.color} />
                    <SVGText dy={6} textAnchor="middle">
                        {curData.name}
                    </SVGText>
                </g>
            );
        });
    };

    render() {
        return (
            <div style={{ cursor: 'pointer' }}>
                <svg width={this.props.width} height={this.props.height}>
                    {this.renderBubbles(this.state.data as [])}
                </svg>
            </div>
        );
    }
}

export default BubbleChart;
