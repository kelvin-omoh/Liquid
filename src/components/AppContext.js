import { createContext, useState } from "react";
import axios from "axios";

const AppContext = createContext()

function ContextProvider(props) {

    const [newsData,setNewsData]=useState([])
    const [newsImg,setNewsImg]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    // const[eachNews,setEachNews]=useState("")
   
    const options = {
        method: 'GET',
        url: 'https://mboum-finance.p.rapidapi.com/ne/news/',
        params: {symbol: 'AAPL,MSFT'},
        headers: {
          'X-RapidAPI-Key': '30036a0512msh3b27f89a1503b96p158eebjsn28a37851b62b',
          'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
        }
      };

    function fetchNews() {
        console.log('fetch data')
        axios.request(options).then(function (response) {
            console.log(response.data.item);
            
            setNewsData(response.data.item)
            
                // setNewsImg(response.data.news.map(a=>a.thumbnail?.resolutions[0]?.url))
                setLoading(false); // change TO FALSE
            
            
            
        }).catch(function (error) {
            setError(true)
            console.error(error);
        });
    }

    console.log('context')
    newsData.length <= 1 && fetchNews()

    return (
        <AppContext.Provider value={{newsData, newsImg, loading, error}}>
            {props.children}
        </AppContext.Provider>
    )

}

export {ContextProvider, AppContext}
// export default AppContext