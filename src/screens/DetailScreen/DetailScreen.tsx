import * as React from 'react'
import { useParams } from 'react-router-dom';

export default function DetailScreen(props: any) {
    let { id } = useParams();

    return (
        <div>
            <p>{id}</p>
        </div>
    )
}