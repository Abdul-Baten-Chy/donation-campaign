import Card from "./Card";


const Cards = ({cards}) => {

    
    return (
        <div>
            {
                cards.map(card =><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;