import kisiler from "./data";
import "./app.css";
import Kisiler from "./Kisiler";
import { useState } from "react";

function App(){

    const [kisi, kisiGuncelle] = useState(kisiler);

     function kisilerSil(index){
         const newList = kisi.filter((kisi)=> kisi.id > 5);
         kisiGuncelle(newList);
     };

     

    return(
        <div className="beyaz-ekran">
            <h2>5 birthdays today</h2>

            {
                kisi.map( (eleman)=><Kisiler bilgi={eleman} /> )
            }

        <button onClick={kisilerSil}>Clear All</button>

        </div>
    );
};

export default App;