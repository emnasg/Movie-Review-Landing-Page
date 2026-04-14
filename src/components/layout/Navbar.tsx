import logo from "../../assets/logo.svg";
import axios from "axios";
import { reviews } from "../../modules/ApiLinks";
import { useEffect } from "react";


function Navbar() {
  const fetchData = async () => {
    try {
      const results = await axios.get(reviews, { params: { movieid: 2006 } });
      const allResults = await results.data;
      console.log(allResults);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}

export default Navbar;
