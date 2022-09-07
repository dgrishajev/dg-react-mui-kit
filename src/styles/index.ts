import {createMakeAndWithStyles} from 'tss-react';
import {useTheme} from '@mui/material/styles';

export const {makeStyles, useStyles, withStyles} = createMakeAndWithStyles({
  useTheme,
});

export {lightTheme, darkTheme} from './theme';
