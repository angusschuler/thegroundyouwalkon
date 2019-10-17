import { DialogContent, Slide, Typography, IconButton } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: "16px",
  },
  closeButton: {
    position: 'absolute',
    right: "8px",
    top: "8px",
    color: grey[500],
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const CustomDialogTitle = (props => {
  const { children, onClose, ...other } = props;
  const classes = useStyles()
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

function SimpleDialog(props) {
  const { onClose, open, location, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <CustomDialogTitle
        onClose={handleClose}
      >
        {location}
      </CustomDialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SimpleDialog;