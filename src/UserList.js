import axios from "axios";
import React, { useEffect, useState } from "react";
// import App from "./App";
// import { useParams } from "react-router-dom";

const UserList = () => {
  const [town, setTown] = useState("");
  // console.log("town=",town);

  useEffect(() => {
    try {
      const onetownweather = async () =>{

          const res=await axios.get(
              `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2`
              );
              setTown(res.data)
            } 
            onetownweather()
    } catch (error) {
    //   console.log(error);
    }
    
  }, []);

  return <div>
{/* <App  town={town}/> */}
  </div>;
};

export default UserList;
