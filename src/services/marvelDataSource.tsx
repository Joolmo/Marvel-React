import CryptoJS from "crypto-js"
import { IMarvelResponse } from "../types"
const PUBLIC_KEY = "e86caf53bae4f8e29d33286e8bc0017c"
const PRIVATE_KEY = "fd008e3aa7c5110df169e8da7a8c3843443dc9c9"
const BASE_URL = "http://gateway.marvel.com/v1/public"

interface IMarvelProps {
    pathName: string
    params?: string
}
export const MarvelDataSource = ({ pathName, params }: IMarvelProps): Promise<IMarvelResponse> => {
    const ts = Date.now()
    const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
    var url = `${BASE_URL}/${pathName}?${params ? params : ''}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    return fetch(url)
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.data)
        .catch(e => console.warn(e))
}