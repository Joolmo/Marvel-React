import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const headerImage = require('../assets/marvelImage.png')


interface IProps {
  onChangeValue: (newValue: string) => void
}

export default function HomeBottom({onChangeValue}: IProps) {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState("character")

  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <label className={`${classes.label} MuiToolbar-regular`}>
              <input
                type="radio"
                name="typeOfData"
                value="character"
                className={classes.radio}
                onChange={(event) => {
                  setRadioValue(event.target.value)
                  onChangeValue(event.target.value)
                }}
              />
              Characters
            </label>

            <label className={`${classes.label} MuiToolbar-regular`}>
              <input
                type="radio"
                name="typeOfData"
                value="comic"
                className={classes.radio}
                onChange={(event) => {
                  setRadioValue(event.target.value)
                  onChangeValue(event.target.value)
                }}
              />
              Comics
            </label>
        </Toolbar>
      </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  label: {
    width:"50%",
    height:"100%",
    textAlign:"center"
  },
  radio: {
    appearance: "none"
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "#e3031c",
  }
}));