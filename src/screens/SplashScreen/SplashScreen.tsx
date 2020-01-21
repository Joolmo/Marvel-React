import * as React from 'react'
import { useEffect } from 'react'
import './SplashScreen.css'

const splashImage = require('./SplashImage.png')

interface IProps {
    startAsync: () => Promise<void>
    onError: (error: any) => void
    onFinish: () => void
}

export default function SplashScreen({startAsync, onError, onFinish}: IProps) {
    useEffect(() => {
        startAsync().then(onFinish).catch(onError)
    }, [])

    return (
        <div id="SplashContainer">
            <img src={splashImage} alt="splashImage"/>
        </div>
    )
}