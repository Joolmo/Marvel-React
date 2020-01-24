import { useContext } from 'react';
import { FavCharactersContext, FavComicsContext } from '../providers/contexts';

const useFavs = (store: "comic" | "character") => {


    // React Hook "useContext" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
    /*const { modifyFavArray, favArray } = store === "character"
        ? useContext(FavCharactersContext)
        : useContext(FavComicsContext)


    return {
        modifyFavArray,
        favArray
    };*/

    let character = useContext(FavCharactersContext)
    let comic = useContext(FavComicsContext)

    if(store === "comic") return comic
    else return character
};

export default useFavs;
