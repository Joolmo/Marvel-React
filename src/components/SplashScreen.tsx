import * as React from 'react'
import { useEffect } from 'react'


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
        <div>
            <p>Cargando...</p>
        </div>
    )
}