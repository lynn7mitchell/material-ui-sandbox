import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    marginLeft: 'auto',
    display: 'flex',
    justifyItems: 'space-around',
  },
  buttonMargin:{
      marginRight: ".5rem"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    
    <AppBar position="static">
      <Toolbar>
        <Typography>Header</Typography>
        {/* <AttachMoneyIcon className={classes.typographyStyles} /> */}
        <div className={classes.buttonContainer}>
        <Button variant="contained" color="secondary" className={classes.buttonMargin}>
        Login
      </Button>
      <Button variant="contained" color="secondary">
        SignUp
      </Button>
      </div>
      </Toolbar>
    </AppBar>
  );
}
