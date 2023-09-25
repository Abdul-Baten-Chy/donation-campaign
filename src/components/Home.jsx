import { useEffect, useState } from "react";
import Header from "./Header";
import Cards from "../Cards";

const Home = () => {
    const [cards, setCards]=useState([]);
    useEffect(() => {
     fetch('info.json')
     .then(res=>res.json())
     .then(data=>setCards(data))
     
   }, []);

   
    return (
        <div>
            <Header></Header>
           <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;