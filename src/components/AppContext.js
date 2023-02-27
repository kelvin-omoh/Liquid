import { createContext, useState } from "react";
import axios from "axios";

const AppContext = createContext()
// git push origin main
function ContextProvider(props) {

    const [newsData,setNewsData]=useState([])
    const [newsImg,setNewsImg]=useState([])
    const [loading, setLoading] = useState(true);
    // const[eachNews,setEachNews]=useState("")
   
    // const options = {
    //     method: 'GET',
    //     url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
    //     params: { q:"fund",q:"invest",newsCount:13, region: 'NG'},
    //     headers: {
    //         'X-RapidAPI-Key': '30036a0512msh3b27f89a1503b96p158eebjsn28a37851b62b',
    //         'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    //     }
    // };

    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/news/v2/get-details',
        params: { q:"fund",q:"invest",uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd', region: 'US'},
        headers: {
          'X-RapidAPI-Key': '30036a0512msh3b27f89a1503b96p158eebjsn28a37851b62b',
          'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
      };

    function fetchNews() {
        console.log('fetch data')
        axios.request(options).then(function (response) {
            console.log(response.data.news);
            
            setNewsData(response.data.news)
            
                setNewsImg(response.data.news.map(a=>a.thumbnail?.resolutions[0]?.url))
                setLoading(false); // change TO FALSE
            
            
            
        }).catch(function (error) {
            console.error(error);
        });
    }

    console.log('context')
    newsData.length <= 1 && fetchNews()

    return (
        <AppContext.Provider value={{newsData, newsImg, loading}}>
            {props.children}
        </AppContext.Provider>
    )

}

export {ContextProvider, AppContext}
// export default AppContext