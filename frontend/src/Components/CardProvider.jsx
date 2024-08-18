import React, { createContext, useEffect, useState } from 'react';


export const CardContext = createContext();

const CardProvider = ({children}) => {
    const [cards, setCards] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect (() => {
        const fetchCards = async () => {
            try {
                const res = await fetch('http://localhost:8002/cards')
                const data = await res.json()
                setCards(data)
                console.log(data)
            }
            
            catch (error) {
                console.error(error.message)

            }
        }
        fetchCards()

    }, [])

    console.log('cards',cards)


    return (
        <CardContext.Provider value={{cards, searchItem, setSearchItem}}>
            {children}
            
        </CardContext.Provider>
    );
};

export default CardProvider;