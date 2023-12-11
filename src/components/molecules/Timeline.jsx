/* eslint-disable no-console */
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'Themes/CustomThemeMUI';

export default function CustomizedTimeline() {
  const isSmallScreen = useMediaQuery('(max-width:500px)');
  const { t } = useTranslation();

  const timelineContent = t('info.timelineObject', {
    returnObjects: true,
  }).map((item) => (
    <TimelineItem>
      {!isSmallScreen && (
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align='right'
          variant='body2'
          color='text.secondary'
        >
          {item.year}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color='primary'>
          {item.icon === 'school' && <SchoolIcon />}
          {item.icon === 'work' && <WorkOutlineIcon />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography
          variant={isSmallScreen ? 'h6' : 'h5'}
          color='secondary'
          component='span'
        >
          {item.title}
        </Typography>
        <Typography>
          {isSmallScreen ? `${item.subtitle} - ${item.year}` : item.subtitle}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <ThemeProvider theme={theme}>
      {isSmallScreen ? (
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
              marginLeft: '2rem',
            },
          }}
        >
          {timelineContent}
        </Timeline>
      ) : (
        <Timeline position='alternate'>{timelineContent}</Timeline>
      )}
    </ThemeProvider>
  );
}
