import * as React from 'react'
import { useParams } from 'react-router-dom';
import { Card, InfoBlock } from '../../components';
import { useState, useEffect } from 'react';
import { IMarvelComic, IMarvelCharacter } from '../../types';
import { ComicService } from '../../services/comicService';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CreateIcon from '@material-ui/icons/Create';


export default function ComicDetailScreen(props: any) {
    let { id } = useParams();
    const [comic, setComic] = useState<IMarvelComic | undefined>(undefined)

    useEffect(() => {
        if (id) {
            ComicService.getComicsById(id).then((result) => setComic(result[0]))
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
                    />
                    <InfoBlock
                        entity={comic}
                        resolver={ entity => {
                            const { characters, creators, stories, events } = (entity as IMarvelComic)
                            const getValue = (from: any): string => !!from ? from.available : undefined

                            const libraryBooksIcon = <LibraryBooksIcon style={{color:"#e3031c"}}/>
                            const eventAvailableIcon = <EventAvailableIcon style={{color:"#e3031c"}}/>
                            const accessibilityIcon = <AccessibilityIcon style={{color:"#e3031c"}}/>
                            const createIcon = <CreateIcon style={{color:"#e3031c"}}/>
                                
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