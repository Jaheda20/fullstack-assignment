import { useContext } from "react";
import { CardContext } from "../Components/CardProvider";

const useCards = () => {
    const cardInfo = useContext(CardContext)
    return cardInfo;
};

export default useCards;