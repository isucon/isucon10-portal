import React from "react"
import { ResponsiveLine } from "@nivo/line"

const data = [...new Array(5)].map(() => (
    {
        id: Math.random().toString().substring(2),
        data: [...new Array(10)].map((_, i) => ({ x: i * 10, y: ~~(Math.random() * 2000) }))
    }
))

export const ScoreGraph = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear' }}
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        colors={{ scheme: 'category10' }}
        lineWidth={1}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        gridXValues={[0, 20, 40, 60, 80, 100, 120]}
        gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 2,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 12,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
