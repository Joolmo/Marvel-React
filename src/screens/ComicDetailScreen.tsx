import * as React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, InfoBlock } from '../components';
import { IMarvelComic, IMarvelCharacter } from '../types';
import { ComicService } from '../services/comicService';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CreateIcon from '@material-ui/icons/Create';
import StyleConstants from '../constants/styleConstants';


export default function ComicDetailScreen() {
    let { id } = useParams();
    const history = useHistory();
    const [comic, setComic] = useState<IMarvelComic | undefined>(undefined)

    useEffect(() => {
        if (id){
            ComicService.getComicsById(id).then((result) => setComic(result[0])).catch((error) => {
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
            {comic &&
                <div>
                    <Card
                        id={comic.id}
                        title={comic.title}
                        titleLabel="NAME"
                        contentLabel="ID"
                        thumbnail={comic.thumbnail}
                        navigationPath={`/ComicDetail/${comic.id}`}
                        fullWidth={true}
                        borderRadious={false}
                    />
                    <InfoBlock
                        entity={comic}
                        resolver={ entity => {
                            const { characters, creators, stories, events } = (entity as IMarvelComic)
                            const getValue = (from: any): string => !!from ? from.available : undefined

                            const libraryBooksIcon = <LibraryBooksIcon style={{color: StyleConstants.marvelDarkRed}}/>
                            const eventAvailableIcon = <EventAvailableIcon style={{color: StyleConstants.marvelDarkRed}}/>
                            const accessibilityIcon = <AccessibilityIcon style={{color: StyleConstants.marvelDarkRed}}/>
                            const createIcon = <CreateIcon style={{color: StyleConstants.marvelDarkRed}}/>
                                
                            return {
                                config: [
                                    { name: "CHARACTERS", value: getValue(characters), icon: accessibilityIcon },
                                    { name: "CREATORS", value: getValue(creators), icon: createIcon },
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