import { IMarvelCharacter, IMarvelResponse, IMarvelProjection, IMarvelComic } from "../types"
import { MarvelDataSource } from "./marvelDataSource"


const comicsListMapper = (comicList: any[]): IMarvelProjection[] => {
    return comicList.map(marvelComic => {
        const { id, title, thumbnail } = marvelComic
        return { id, nameTitle: title, thumbnail }
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


const getComics = ({ ...params }): Promise<IMarvelProjection[]> => {
    const config = {
        pathName: "comics",
        params: getParamsString(params) + "&format=comic&noVariants=false&orderBy=focDate"
    }
    return MarvelDataSource(config)
        .then(comicList => comicsListMapper(comicList.results))
}

const getComicsById = (id: number | string): Promise<IMarvelComic[]> => {
    const config = {
        pathName: `comics/${id}`,
    }
    return MarvelDataSource(config)
        .then(comicList => comicList.results)
}

export const ComicService = {
    getComics,
    getComicsById
}