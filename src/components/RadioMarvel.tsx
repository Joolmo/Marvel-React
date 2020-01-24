import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import StyleConstants from '../constants/styleConstants'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const headerImage = require('../assets/marvelImage.png')


interface IPropsIcon {
  icon: JSX.Element,
  name: string
}

function RadioIcon({icon, name}: IPropsIcon) {
  const classes = useStyles();

  return (
    <div className={classes.iconContainer}>
      <p className={`radioIconText ${classes.iconText}`}>{name}</p>
      {icon}
    </div>
  )
}

interface IPropsRadio {
  onChangeValue: (newValue: string) => void
}

export default function RadioMarvel({onChangeValue}: IPropsRadio) {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState("character")

  useEffect(() => {
    onChangeValue(radioValue)
  }, [radioValue])

  return (
    <div className={`radioMarvel ${classes.container}`}>
        <label className={`${classes.label} ${radioValue=="character"? classes.selectedLabel : ""}`}>
          <input
            type="radio"
            name="typeOfData"
            value="character"
            className={classes.radio}
            onChange={ event => setRadioValue(event.target.value) }
          />
          <RadioIcon name="Characters" icon={<AccessibilityIcon/>}/>
        </label>

        <label className={`${classes.label} ${radioValue=="comic"? classes.selectedLabel : ""}`}>
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
          <RadioIcon name="Comics" icon={<LibraryBooksIcon/>}/>
        </label>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  label: {
    width:"50%",
    height:"100%",
    textAlign:"center",
    display: "flex",
    color: StyleConstants.marvelRed,
    borderRadius: 5
  },
  selectedLabel: {
    color: StyleConstants.lightFontColor,
    backgroundColor: StyleConstants.marvelRed
  },
  radio: {
    appearance: "none",
    margin: 0
  },
  container: {
    backgroundColor: StyleConstants.whiteBackGround,
    display: "flex",
    width: "35%"
  },
  iconText:{
    margin: 0
  },
  iconContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));