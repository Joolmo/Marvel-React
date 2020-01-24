import * as React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Card, InfoBlock } from '../components';
import { useState, useEffect } from 'react';
import { IMarvelCharacter } from '../types';
import { CharacterService } from '../services/characterService';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import TheatersIcon from '@material-ui/icons/Theaters';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import StyleConstants from '../constants/styleConstants';


export default function CharacterDetailScreen(props: any) {
    let { id } = useParams();
    const history = useHistory();
    const [character, setCharacter] = useState<IMarvelCharacter | undefined>(undefined)

    useEffect(() => {
        if(id) {
            CharacterService.getCharacterById(id).then((result) => setCharacter(result[0])).catch((error) => {
                if(error == "undefinedError") {
                    history.push("/home");
                } else {
                    console.warn(error)
                }
            })
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
                        typeOfData="character"
                        fullWidth={true}
                        borderRadious={false}
                    />
                    <InfoBlock
                        entity={character}
                        resolver={ entity => {
                            const { comics, series, stories, events } = (entity as IMarvelCharacter)
                            const getValue = (from: any): string => !!from ? from.available : undefined

                            const localLibraryIcon = <LocalLibraryIcon style={{color: StyleConstants.marvelDarkRed}}/>
                            const theatersIcon = <TheatersIcon style={{color: StyleConstants.marvelDarkRed}}/>
                            const libraryBooksIcon = <LibraryBooksIcon style={{color: StyleConstants.marvelDarkRed}}/>
                            const eventAvailableIcon = <EventAvailableIcon style={{color: StyleConstants.marvelDarkRed}}/>

                            return {
                                config: [
                                    { name: "COMICS", value: getValue(comics), icon: localLibraryIcon },
                                    { name: "SERIES", value: getValue(series), icon: theatersIcon },
                                    { name: "STORIES", value: getValue(stories), icon: libraryBooksIcon },
                                    { name: "EVENTS", value: getValue(events), icon: eventAvailableIcon }
                                ].filter(item => !!item.value)
                            }
                        }}
                    />
                </div>
            }
        </div>
    )
}