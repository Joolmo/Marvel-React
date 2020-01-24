import React, { useState, useEffect } from 'react';
import useAsyncStorage from '../hooks/useLocalStorage';
import { getUpdatedFavArray, FavCharactersContext } from './contexts';


export const FavCharactersProvider = (props: any) => {
    const store = 'MarvelStore:favCharacters'
    const [favArray, setFavArray] = useState<string[]>([]);
    const { getValuesFromStorage, setInStorage } = useAsyncStorage()

    useEffect(() => {
        let isSubscribed = true
        let result = getValuesFromStorage(store)

        result = !!result ? result : []
        if (isSubscribed) {
            setFavArray(result)
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    const modifyFavArray = (id: number) => {
        let valueUpdated = getUpdatedFavArray(id, favArray)
        setFavArray(valueUpdated)
        setInStorage(store, valueUpdated)
    }

    return (
        <FavCharactersContext.Provider
            value={{
                favArray,
                modifyFavArray,
            }}
        >
            {props.children}
        </FavCharactersContext.Provider>
    );
};




