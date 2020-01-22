import * as React from 'react'
import { useParams } from 'react-router-dom';
import { Card, InfoBlock } from '../../components';
import { useState, useEffect } from 'react';
import { IMarvelCharacter } from '../../types';
import { CharacterService } from '../../services/characterService';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function CharacterDetailScreen(props: any) {
    let { id } = useParams();
    const [character, setCharacter] = useState<IMarvelCharacter | undefined>(undefined)

    useEffect(() => {
        if(id){
            CharacterService.getCharacterById(id).then((result) => setCharacter(result[0]))
        }
    }, [])

    return (
        <div>
            { character &&
                <div>
                    <Card
                        id={character.id}
                        title={character.name}
                        titleLabel="NAME"
                        contentLabel="ID"
                        thumbnail={character.thumbnail}
                        navigationPath={`/CharacerDetail/${character.id}`}
                        fullWidth={true}
                    />
                    <InfoBlock
                        entity={character}
                        resolver={ entity => {
                            const { comics, series, stories, events } = (entity as IMarvelCharacter)
                            const getValue = (from: any): string => !!from ? from.available : undefined
                            const favoriteIcon = <FavoriteIcon style={{color:"#e3031c"}}/>
                                
                            return {
                                config: [
                                    { name: "COMICS", value: getValue(comics), icon: favoriteIcon },
                                    { name: "SERIES", value: getValue(series), icon: favoriteIcon },
                                    { name: "STORIES", value: getValue(stories), icon: favoriteIcon },
                                    { name: "EVENTS", value: getValue(events), icon: favoriteIcon }
                                ].filter(item => !!item.value)
                            }
                        }}
                    />
                </div>
            }
        </div>
    )
}