import React from 'react';
import { UIContribution } from '@govrn/ui-types';
import { Flex, Text } from '@chakra-ui/react';
import HeatMap from '@uiw/react-heat-map';
import { GovrnTheme } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';

// interface ContributionsHeatMapProps {
//   contributions: UIContribution[];
// }

const brandColors = GovrnTheme.colors.brand.primary;

const brandPanelColorsMap = {
  0: '#EDF2F7',
  1: brandColors[50],
  4: brandColors[100],
  10: brandColors[200],
  20: brandColors[300],
  30: brandColors[400],
  40: brandColors[500],
  50: brandColors[600],
  60: brandColors[700],
  70: brandColors[800],
  80: brandColors[900],
};

const ContributionsHeatMap = ({ contributionsCount, startDate, endDate }) => {
  console.log('contributions in heat map', contributionsCount);
  console.log('subWeeks', subWeeks(new Date(), 52));

  return (
    <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
      <HeatMap
        value={contributionsCount}
        width={600}
        style={{ color: 'black' }}
        startDate={startDate ? startDate : subWeeks(new Date(), 12)}
        endDate={endDate ? endDate : null}
        panelColors={brandPanelColorsMap}
      />
    </Flex>
  );
};

export default ContributionsHeatMap;
