import { useLoaderData, useParams } from "react-router-dom";
import { setStoredData } from "./store";


const Details = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find((card) => card.id === idInt);
  
    function handleDonation() {
      setStoredData(idInt);
    }
  
    return (
      <div>
        <div className="max-w-[1300px] mx-auto mt-20 relative">
          <img src={card.image} alt="" className="w-full" />
          <div className="absolute bottom-0 w-full bg-black opacity-90 h-20"></div>
          <button
            style={{backgroundColor: card.color, color:"white" }}
            className="btn btn-primary absolute bottom-4 left-4"
            onClick={handleDonation}
          >
            Donate ${card.price}
          </button>
        </div>
        <div className="max-w-[1300px] mx-auto mt-4 mb-20">
          <h2 className="text-[#0B0B0B] text-4xl font-bold mb-6 text-[16px]">{card.title}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    );
  };
export default Details;