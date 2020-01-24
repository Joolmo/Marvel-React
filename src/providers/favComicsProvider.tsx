import React, { useState, useEffect } from 'react';
import useAsyncStorage from '../hooks/useLocalStorage';
import { getUpdatedFavArray, FavComicsContext } from './contexts';


export const FavComicsProvider = (props: any) => {
    const [favArray, setFavArray] = useState<string[]>([]);
    const store = 'MarvelStore:favComics'
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
        <FavComicsContext.Provider
            value={{
                favArray,
                modifyFavArray,
            }}
        >
            {props.children}
        </FavComicsContext.Provider>
    );
};
