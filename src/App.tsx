import React, {useEffect, useRef, useState} from 'react';
import Card from "./components/card";
import GamingTable from "./components/gamingTablle";
import {CatsApiService} from "./services/cats/service";
import {ICard} from "./interfaces/card";
import { duplicateCards, shuffleCards} from "./helpers/cards";
import { useQuery } from 'react-query';
import {FLIP_BACK_TIME} from "./constants/cards-constants";

function App() {
    const { data: cards = [] } = useQuery<ICard[]>("catCards", () => CatsApiService.getCats(10).then(({ data }) => {
        if (data?.length) {
            return shuffleCards(duplicateCards(data));
        }
        return [];
    }), { staleTime: Infinity });
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [clearedCards, setClearedCards] = useState<{[key:string]:boolean}>({});
    const [openCards, setOpenCards] = useState<number[]>([]);
    const timeout = useRef(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined = undefined;
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 300);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [openCards]);

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    const enable = () => {
        setShouldDisableAllCards(false);
    };

    const handleCardClick = (index:number) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            disable();
        } else {
            setOpenCards([index]);
        }
    };

    const checkIsInactive = (card:ICard) => {
        return Boolean(clearedCards[card.id]);
    };
    const checkIsFlipped = (index:number) => {
        return openCards.includes(index);
    };

    const evaluate = () => {
        const [first, second] = openCards;
        enable();
        if (cards[first].id === cards[second].id) {
            setClearedCards((prev:{ [key: string]: boolean }) => ({ ...prev, [cards[first].id]: true }));
            setOpenCards([]);
            return;
        }
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, FLIP_BACK_TIME)as any;
    };

  return (
    <div>
        <GamingTable>
            {cards.map((card,idx)=>{
                return(
                    <Card
                        key={card.id}
                        card={card}
                        index={idx}
                        isDisabled={shouldDisableAllCards}
                        isInactive={checkIsInactive(card)}
                        isFlipped={checkIsFlipped(idx)}
                        onClick={handleCardClick}
                    />
                )
            })}
        </GamingTable>
    </div>
  );
}

export default App;
