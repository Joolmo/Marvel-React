import * as React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IMarvelComic, IMarvelCharacter } from '../types';
import { Button } from '@material-ui/core';


interface IIconsProps {
    config: {name: string, value: string, icon: JSX.Element}[]
}

function IconsBlock({ config }: IIconsProps) {
    return (
        <div>
            {config.map(({name, icon, value}, index) => { return (
                <div key={index}>
                    <p>{name}</p>
                    {icon}
                    <p>{value}</p>
                </div>    
            )})}
        </div>
    )
}


interface IInfoProps {
    entity: IMarvelCharacter | IMarvelComic
    resolver: (entity: IMarvelCharacter | IMarvelComic) => IIconsProps
}

export default function InfoBlock({entity, resolver}: IInfoProps) {
    return(
        <div>
            <IconsBlock config={resolver(entity).config}/>
            <div>
                <h2>DESCRIPTION</h2>
                <p>{!!entity.description ? entity.description : "No description found"}</p>
            </div>
            <div>
                <h2>LINKS</h2>
                { !!entity.urls && entity.urls.length > 0 && 
                    entity.urls.map((url, index)=> {
                        return (
                            <div key={index}>
                                <Button variant="contained" color="primary" href={url.url}>{url.type.toUpperCase()}</Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}