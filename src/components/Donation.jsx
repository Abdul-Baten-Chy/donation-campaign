import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "./Details/store";
import ShowDonation from "./ShowDonation";
import Stats from "../Stats";

const Donation = () => {
  const donations = useLoaderData();
  const [receivedDonation, setReceivedDonation] = useState([]);
const [seeMore, setSeeMore]=useState(false)
  useEffect(() => {
    const storedId = getStoredData();
    if (donations.length) {
      const storedDonation = donations.filter((donation) => {
        return storedId.includes(donation.id);
      });
      setReceivedDonation(storedDonation);
      console.log(receivedDonation);
    }
  }, []);


  return (
    <div>
        <div className="grid grid-cols-2 gap-4 mt-[80px] max-w-[1300px] mx-auto">

            {seeMore ? receivedDonation.map( item => <ShowDonation key={item.id} item={item}></ShowDonation>): receivedDonation.slice(0,4).map(item => <ShowDonation key={item.id} item={item}></ShowDonation>)}

        </div>
        <div>
            {receivedDonation.length > 4 && <button onClick={()=> setSeeMore(!seeMore)} className="btn btn-primary w-[100px] block mx-auto mt-10">{ seeMore? 'See less': 'See More'}</button>}
        </div>
        <Stats receivedDonation={receivedDonation} ></Stats>
    </div>
  );
};

export default Donation;
