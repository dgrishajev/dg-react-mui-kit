import {createMakeAndWithStyles} from 'tss-react';
import {useTheme} from '@mui/material/styles';

export const {makeStyles, useStyles, withStyles} = createMakeAndWithStyles({
  useTheme,
});

export {lightTheme, darkTheme, MAX_PAGE_CONTENT_WIDTH, MAX_ARTICLE_CONTENT_WIDTH} from './theme';

export {GlobalStyles, keyframes} from 'tss-react';
import type {CSSObject} from 'tss-react';

export {createEmotionSsrAdvancedApproach} from 'tss-react/nextJs';
