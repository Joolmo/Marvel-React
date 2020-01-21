import * as React from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../components';
import { useState, useEffect } from 'react';
import { IMarvelCharacter } from '../../types';
import { CharacterService } from '../../services/characterService';

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
                <Card
                    id={character.id}
                    title={character.name}
                    titleLabel="NAME"
                    contentLabel="ID"
                    thumbnail={character.thumbnail}
                    navigationPath={`/CharacerDetail/${character.id}`}
                    fullWidth={true}
                />
            }
        </div>
    )
}