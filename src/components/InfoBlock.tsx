import * as React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';

interface IIconsProps {
    config: {name: string, value: string, icon: JSX.Element}[]
}

function IconsBlock({ config }: IIconsProps) {
    return (
        <div>
            {config.map(({name, icon, value}) => { return (
                <div>
                    <p>{name}</p>
                    {icon}
                    <p>{value}</p>
                </div>    
            )})}
        </div>
    )
}

export default function InfoBlock() {
    return(<div></div>)
}