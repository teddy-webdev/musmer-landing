import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Works, StarsCanvas, } from "./components";
import FooterType from "./components/FooterType";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import axios from "axios";



const App = () => {
  const [exchangeRateData, setExchangeRateData] = useState([]);
  
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          // "https://api.musmerexchange.com/api/exchangeratestoday/",
          "http://95.0.125.26:8008/api/exchangeratestoday/",
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_REACT_APP_AUTH_TOKEN}`

            },
          }
        );
        
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        setExchangeRateData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Main exchangeRateData={exchangeRateData} />
        
        <About />
        <Feedbacks exchangeRateData={exchangeRateData} />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        <FooterType />
      </div>
    </BrowserRouter>
  );
}

export default App;
