import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Typography, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
});

function BarSession(props) {
  const { classes } = props;
  return (
    <Toolbar>
      <IconButton color="inherit">
        <i className="material-icons">menu</i>
      </IconButton>
      <Typography variant="h6">Vaxi homes</Typography>
      <div className={classes.grow}></div>
      <div className={classes.sectionDesktop}>
        <Button color="inherit">Login</Button>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton color="inherit">
          <i className="material-icons">more_vert</i>
        </IconButton>
      </div>
    </Toolbar>
  );
}

BarSession.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarSession);
