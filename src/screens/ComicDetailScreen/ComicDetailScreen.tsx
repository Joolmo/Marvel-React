import * as React from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../components';
import { useState, useEffect } from 'react';
import { IMarvelComic } from '../../types';
import { ComicService } from '../../services/comicService';

export default function ComicDetailScreen(props: any) {
    let { id } = useParams();
    const [comic, setComic] = useState<IMarvelComic | undefined>(undefined)

    useEffect(() => {
        if(id){
            ComicService.getComicsById(id).then((result) => setComic(result[0]))
        }
    }, [])

    return (
        <div>
            { comic &&
                <Card
                    id={comic.id}
                    title={comic.title}
                    titleLabel="NAME"
                    contentLabel="ID"
                    thumbnail={comic.thumbnail}
                    navigationPath={`/ComicDetail/${comic.id}`}
                    fullWidth={true}
                />
            }
        </div>
    )
}