
export default () => {

    const setInStorage = (store: string, value: string[]): void => localStorage.setItem(store, JSON.stringify(value))

    const getValuesFromStorage = (store: any): string[] | undefined => {
        let result = localStorage.getItem(store)
        if(!!result) {
            return JSON.parse(result)
        } else {
            console.log("Local storage error!!")
        }
        
        return undefined
    }

    return {
        setInStorage,
        getValuesFromStorage
    };
};
