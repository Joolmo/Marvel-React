import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const headerImage = require('../assets/marvelImage.png')


export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Link to="/Home" className={classes.logo}>
          <img src={headerImage} alt="headerImage" height="75" width="210"/>
          <Typography className={classes.title}>
            Characters and Comics
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#e3031c",
  },
  title: {
    textAlign: "center",
    color:"white",
  },
  logo: {
    margin: "auto",
    textDecoration: "none"
  }
}));