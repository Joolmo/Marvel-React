import { IMarvelCharacter, IMarvelProjection } from "../types"
import { MarvelDataSource } from "./marvelDataSource"


const characterListMapper = (characterList: IMarvelCharacter[]): IMarvelProjection[] => {
    return characterList.map(marvelCharacter => {
        const { id, name, thumbnail } = marvelCharacter
        return { id, nameTitle: name, thumbnail }
    })
}

const getParamsString = (paramsToSet: { [key: string]: string }) => {
    let paramsString = ""
    Object.keys(paramsToSet).forEach(key => {
        if (paramsToSet[key] !== "") {
            paramsString = `${paramsString}&${key}=${paramsToSet[key]}`
        }
    })
    return paramsString.substr(1)
}


const getCharacters = ({ ...params }): Promise<IMarvelProjection[]> => {
    const config = {
        pathName: "characters",
        params: getParamsString(params)
    }
    return MarvelDataSource(config)
        .then(characterList => characterListMapper(characterList.results))
}

const getCharacterById = (id: number | string): Promise<IMarvelCharacter[]> => {
    const config = {
        pathName: `characters/${id}`,
    }
    return MarvelDataSource(config)
        .then(characterList => {
            if(characterList === undefined) {
                throw "undefinedError"
            }
            return characterList.results
        })
}

export const CharacterService = {
    getCharacters,
    getCharacterById
}