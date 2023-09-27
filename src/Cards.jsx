import Card from "./Card";


const Cards = ({cards}) => {

    
    return (
        <div className="grid md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 max-w-[1300px] mx-auto">
            {
                cards.map(card =><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;