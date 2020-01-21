import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const headerImage = require('../assets/marvelImage.png')


interface IProps {
  onChangeValue: (newValue: string) => void
}

export default function HomeBottom({onChangeValue}: IProps) {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState("character")

  useEffect(() => {
    onChangeValue(radioValue)
  }, [radioValue])

  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <label className={`${classes.label} MuiToolbar-regular ${radioValue=="character"? classes.selectedLabel : ""}`}>
              <input
                type="radio"
                name="typeOfData"
                value="character"
                className={classes.radio}
                onChange={ event => setRadioValue(event.target.value) }
              />
              <p>Characters</p>
            </label>

            <label className={`${classes.label} MuiToolbar-regular ${radioValue=="comic"? classes.selectedLabel : ""}`}>
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
              <p>Comics</p>
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
  selectedLabel: {
    color:"black",
    backgroundColor: "white"
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