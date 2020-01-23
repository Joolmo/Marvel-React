import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import StyleConstants from '../constants/styleConstants';

const headerImage = require('../assets/marvelImage.png')


export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar} id="toolBar">
        <Link to="/Home" className={classes.logo}>
          <img src={headerImage} alt="headerImage" id="headerImage"/>
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
    backgroundColor: StyleConstants.marvelRed,
  },
  title: {
    textAlign: "center",
    color: StyleConstants.lightFontColor,
  },
  logo: {
    margin: "auto",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column"
  }
}));