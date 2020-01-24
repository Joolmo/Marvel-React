import * as React from 'react'
import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import StyleConstants from '../constants/styleConstants'


const splashImage = require('../assets/marvelImage.png')

interface IProps {
    startAsync: () => Promise<void>
    onError: (error: any) => void
    onFinish: () => void
}

export default function SplashScreen({startAsync, onError, onFinish}: IProps) {
    const classes = useStyles();

    useEffect(() => {
        startAsync().then(onFinish).catch(onError)
    }, [])

    return (
        <div className={classes.container} id="SplashContainer">
            <img src={splashImage} alt="splashImage"/>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: StyleConstants.marvelRed,
        height: "100%"
    }
}))