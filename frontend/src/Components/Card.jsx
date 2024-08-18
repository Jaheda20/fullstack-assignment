import React from 'react';
import useCards from '../Hook/useCards';



const Card = () => {
    const { cards, searchItem } = useCards();

    console.log('all cards', cards)

    const filteredCards = cards.filter(singleCard =>
        singleCard.title.toLowerCase().includes(searchItem.toLowerCase())
    )

    return (
        <div className="max-w-5xl mx-auto w-full my-20 grid grid-cols-2 gap-20">
            {
                filteredCards.map((c) => <div key={c._id}>
                    <div className="w-full bg-gray-100 border rounded-lg">
                        <h1 className="font-bold text-lg text-slate-800 px-8 pt-2">{c.title}</h1>
                        <hr className="border-t my-1 border-gray-200 w-full" />
                        <p className="px-8 text-slate-600 pb-16">{c.description}</p>

                    </div>

                </div>)
            }
            

        </div>

    );
};

export default Card;