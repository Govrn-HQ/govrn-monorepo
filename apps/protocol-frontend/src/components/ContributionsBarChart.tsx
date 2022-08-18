import React from 'react';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsiveBar } from '@nivo/bar';
import { GovrnTheme } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import * as _ from 'lodash';

type ContributionCount = {
  date: string;
  count: number;
  guild_id?: number;
  name?: string;
};
interface ContributionsBarChartProps {
  contributionsCount: ContributionCount[];
  startDateOffset?: number;
}

const brandColors = GovrnTheme.colors.brand.primary;

const brandColorMap = [
  '#ffb4e2',
  '#fb84ce',
  '#f854ba',
  '#f526a6',
  '#db0f8d',
  '#ab076d',
  '#76024e',
];

const ContributionsBarChart = ({
  contributionsCount,
  startDateOffset,
}: ContributionsBarChartProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const contributionsCountMap = contributionsCount.map(contribution => {
    return {
      day: contribution.date,
      value: contribution.count,
      guildId: contribution.guild_id,
      guildName: contribution.name,
    };
  });

  const merged = contributionsCountMap.map(item => ({
    day: item.day,
    [item.guildName as string]: item.value,
  }));

  const reduced = _.chain(merged)
    .groupBy('day')
    .map(g =>
      _.mergeWith(
        {},
        ...g,
        (
          acc: { day: string; [x: string]: string | number },
          curr: { day: string; [x: string]: string | number },
        ) => (_.isArray(acc) ? acc.concat(curr) : undefined),
      ),
    )
    .value();

  console.log('merged', merged);
  console.log('merged keys', [
    ...new Set(merged.map(item => Object.keys(item)[1])),
  ]);

  console.log('reduced', reduced);

  return (
    <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
      <Flex
        direction="column"
        height={{ base: '5rem', lg: '40vh' }}
        width="100%"
      >
        {contributionsCountMap.length !== 0 ? (
          <ResponsiveBar
            data={reduced}
            keys={[...new Set(merged.map(item => Object.keys(item)[1]))]}
            indexBy="day"
            margin={{ top: 50, right: 130, bottom: 40, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            maxValue={100}
            colors={[
              brandColorMap[0],
              brandColorMap[1],
              brandColorMap[2],
              brandColorMap[3],
            ]}
            // defs={[
            //   {
            //     id: 'dots',
            //     type: 'patternDots',
            //     background: 'inherit',
            //     color: '#38bcb2',
            //     size: 4,
            //     padding: 1,
            //     stagger: true,
            //   },
            //   {
            //     id: 'lines',
            //     type: 'patternLines',
            //     background: 'inherit',
            //     color: '#eed312',
            //     rotation: -45,
            //     lineWidth: 6,
            //     spacing: 10,
            //   },
            // ]}
            // fill={[
            //   {
            //     match: {
            //       id: 'guild1',
            //     },
            //     id: 'dots',
            //   },
            //   {
            //     match: {
            //       id: 'guild2',
            //     },
            //     id: 'lines',
            //   },
            // ]}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Day',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Total Contributions',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 150,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Bar Chart for DAO Contributions"
            // barAriaLabel={function (e) {
            //   return (
            //     e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
            //   );
            // }}
          />
        ) : (
          <Box>No contributions found for this year!</Box>
        )}
      </Flex>
    </Flex>
  );
};

export default ContributionsBarChart;
