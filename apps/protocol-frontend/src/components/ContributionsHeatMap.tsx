import React from 'react';
import { UIContribution } from '@govrn/ui-types';
import { Flex, Text } from '@chakra-ui/react';
import HeatMap from '@uiw/react-heat-map';
import { GovrnTheme } from '@govrn/protocol-ui';

interface ContributionsHeatMapProps {
  contributions: UIContribution[];
}

const brandColors = GovrnTheme.colors.brand.primary;

const brandPanelColorsMap = {
  0: brandColors[50],
  2: brandColors[100],
  4: brandColors[200],
  10: brandColors[300],
  20: brandColors[400],
  30: brandColors[500],
  40: brandColors[600],
  50: brandColors[700],
  60: brandColors[800],
  70: brandColors[900],
};

const ContributionsHeatMap = ({ contributions }: ContributionsHeatMapProps) => {
  console.log('contributions in heat map', contributions);
  const value = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/04/12', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/03', count: 1 },
    { date: '2016/05/04', count: 11 },
    { date: '2016/05/08', count: 32 },
  ];

  return (
    <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
      <HeatMap
        value={value}
        width={600}
        style={{ color: 'black' }}
        startDate={new Date('2016/01/01')}
        panelColors={brandPanelColorsMap}
      />
    </Flex>
  );
};

export default ContributionsHeatMap;
