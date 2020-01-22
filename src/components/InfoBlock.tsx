import * as React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IMarvelComic, IMarvelCharacter } from '../types';
import { Button, makeStyles } from '@material-ui/core';


interface IIconsProps {
    config: {name: string, value: string, icon: JSX.Element}[]
}

function IconsBlock({ config }: IIconsProps) {
    const classes = useStyles();

    return (
        <div className={classes.iconsContainer}>
            {config.map(({name, icon, value}, index) => { return (
                <div key={index} className={classes.iconContainer}>
                    <p className={classes.iconText}>{name}</p>
                    {icon}
                    <p className={classes.iconText}>{value}</p>
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
    const classes = useStyles();

    return(
        <div className={classes.infoBlock}>
            <IconsBlock config={resolver(entity).config}/>
            <div>
                <h2>DESCRIPTION</h2>
                <p className={classes.descText}>{!!entity.description ? entity.description : "No description found"}</p>
            </div>
            <div>
                <h2>LINKS</h2>
                <div className={classes.linksContainer}> 
                    { !!entity.urls && entity.urls.length > 0 && 
                        entity.urls.map((url, index)=> {
                            return (
                                <div key={index}>
                                    <Button  className={classes.link} variant="contained" color="primary" href={url.url}>{url.type.toUpperCase()}</Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    iconsContainer: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "5%",
        marginRight: "5%"
    },
    iconText: {
        textAlign: "center",
        margin: 0,
        color: "black" //"#e3031c"
    },
    iconContainer: {
        textAlign: "center",
    },
    infoBlock: {
        backgroundColor: "white",
        marginLeft: "5%",
        marginRight: "5%"
    },
    descText: {
        marginLeft: "5%",
        marginRight: "5%"
    },
    linksContainer: {
        marginLeft: "5%",
        marginRight: "5%",
        width: "100%"
    },
    link: {
        backgroundColor: "#e3031c",
        color: "white",
        marginBottom: 10,
        width: "100%"
    }
}));