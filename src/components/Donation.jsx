import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "./Details/store";
import ShowDonation from "./ShowDonation";

const Donation = () => {
  const donations = useLoaderData();
  const [receivedDonation, setReceivedDonation] = useState([]);
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
    <div className="grid grid-cols-2 gap-4 mt-[80px] max-w-[1300px] mx-auto">
      {receivedDonation.map( item => <ShowDonation key={item.id} item={item}></ShowDonation>)}
    </div>
  );
};

export default Donation;
