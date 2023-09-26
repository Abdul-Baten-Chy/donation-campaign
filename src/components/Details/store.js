const getStoredData= ()=>{
    const receivedDonation = localStorage.getItem('donations');
    if(receivedDonation){
        return JSON.parse(receivedDonation);
    }else{
        return [];
    }
}

const setStoredData= (id)=>{
    const storedDonations = getStoredData();
   const exist=  storedDonations.find(donationId=> donationId==id);
   if(!exist){
    storedDonations.push(id);
    localStorage.setItem('donations', JSON.stringify(storedDonations))
   }
}
export {getStoredData, setStoredData}