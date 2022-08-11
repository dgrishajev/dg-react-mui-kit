import React, {ReactNode} from 'react';
import type {FC} from 'react';
import {
  InfoOutlined as InfoIcon,
  WarningAmberOutlined as WarningIcon,
  CheckCircleOutlined as SuccessIcon,
  ErrorOutlineOutlined as ErrorIcon,
} from '@mui/icons-material';
import type {AlertProps, AlertColor} from '@mui/material';
import {Alert, AlertTitle} from '@mui/material';
import {makeStyles} from '../styles';
import type {Theme} from '@mui/material/styles';

const getAlertProperties = (theme?: Theme) => ({
  warning: {
    backgroundColor: theme?.palette.warningShades[200],
    borderColor: theme?.palette.warningShades[300],
    iconColor: theme?.palette.warningShades[600],
  },
  error: {
    backgroundColor: theme?.palette.dangerShades[50],
    borderColor: theme?.palette.dangerShades[75],
    iconColor: theme?.palette.dangerShades[600],
  },
  success: {
    backgroundColor: theme?.palette.successShades[300],
    borderColor: theme?.palette.successShades[400],
    iconColor: theme?.palette.successShades[600],
  },
  info: {
    backgroundColor: theme?.palette.neutralShades[75],
    borderColor: theme?.palette.neutralShades[150],
    iconColor: theme?.palette.neutralShades[600],
  },
});

const useStyles = makeStyles<{severity: AlertColor}>()(
  (theme: Theme, {severity}) => {
    const {backgroundColor, borderColor, iconColor} =
      getAlertProperties(theme)[severity];

    return {
      root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(1.25, 2),
        borderRadius: theme.shape.borderRadius,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        backgroundColor,
        '& .MuiAlert-icon': {
          color: iconColor,
          opacity: 1,
          fontSize: 16,
          marginRight: 0,
        },
      },
      message: {
        padding: 0,
        marginLeft: theme.spacing(2),
      },
      title: {
        ...theme.typography.body2,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.greyShades[700],
        marginTop: 0,
      },
      subtitle: {
        ...theme.typography.body2,
        color: theme.palette.greyShades[600],
      },
    };
  },
);

type StyledAlertProps = AlertProps & {
  title: ReactNode;
  className?: string;
};

export const StyledAlert: FC<StyledAlertProps> = ({
                            severity = 'info',
                            title,
                            className,
                            icon,
                            children,
                          }) => {
  const {classes, cx} = useStyles({severity});

  return (
    <Alert
      classes={{
        root: cx(classes.root, className),
        message: classes.message,
      }}
      icon={icon}
      iconMapping={{
        warning: <WarningIcon />,
        error: <ErrorIcon />,
        success: <SuccessIcon />,
        info: <InfoIcon />,
      }}
      severity={severity}
    >
      <AlertTitle classes={{root: classes.title}}>{title}</AlertTitle>
      {!!children && <div className={classes.subtitle}>{children}</div>}
    </Alert>
  );
};

export default Alert;
