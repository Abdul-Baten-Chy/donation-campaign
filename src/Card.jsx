
import { Link } from 'react-router-dom';
import './index.css' 


const Card = ({ card }) => {

    
  const {id, title, category, image, bgColor, color, btnColor} = card;
  return (
    <Link to={`/details/${id}`}>
    <div>
      <div style={{backgroundColor: bgColor }} className={` card card-compact shadow-xl`}>
        <figure>
          <img src={image} alt="Shoes" className="object-cover " 
          />
        </figure>
        <div className="card-body">
        <div className="card-actions justify-start">
            <button style={{backgroundColor: btnColor, color:color }} className="btn btn-primary">{category}</button>
          </div>
          <h2 style={{color: color }} className='text-[20px] font-semibold'>{title}</h2>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
