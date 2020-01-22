import * as React from 'react'
import { useParams } from 'react-router-dom';
import { Card, InfoBlock } from '../../components';
import { useState, useEffect } from 'react';
import { IMarvelComic, IMarvelCharacter } from '../../types';
import { ComicService } from '../../services/comicService';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
                                
                            return {
                                config: [
                                    { name: "CHARACTERS", value: getValue(characters), icon: <FavoriteIcon/> },
                                    { name: "CREATORS", value: getValue(creators), icon: <FavoriteIcon/> },
                                    { name: "STORIES", value: getValue(stories), icon: <FavoriteIcon/> },
                                    { name: "EVENTS", value: getValue(events), icon: <FavoriteIcon/> }
                                ].filter(item => !!item.value)
                            }
                        }}
                    />
                </div>
            }
        </div>
    )
}