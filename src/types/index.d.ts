export interface IMarvelResponse {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: any[];
}

export interface IMarvelImage {
    extension: string;
    path: string;
}

export interface IMarvelProjection {
    id: number;
    nameTitle: string;
    thumbnail: IMarvelImage;
}

interface IMarvelCharacter {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: IMarvelUrl[];
    thumbnail: IMarvelImage;
    comics: ComicList;
    stories: any;
    events: any;
    series: any;
}
interface IMarvelComic {
    id: number;
    title: string;
    thumbnail: IMarvelImage;
    description: string;
    resourceURI: string;
    urls: IMarvelUrl[];
    characters: any;
    stories: any;
    events: any;
    creators: any;
}

interface IMarvelUrl {
    type: string;
    url: string;
}

interface ComicList {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicSummary[];
}

interface ComicSummary {
    resourceURI: string;
    name: string;
}
