

const Card = ({card}) => {
    const {title, id, category, description, price, image, bgColor, color}= card
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Card;