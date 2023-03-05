import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { newsData as staticNewsData } from "../newsData/news";
const AppContext = createContext()

function ContextProvider(props) {

    const [newsData ]=useState(staticNewsData)
    const [newsImg,setNewsImg]=useState([])

    const [loading ] = useState(false);
    const [error ] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false) // chnage to false

    // const url =`https://newsapi.org/v2/everything?q=finance+technology+money&apiKey=1f7e0a872316481f9dbe8cd016a43eb9`;

    useEffect(() => {
        //to prevent it from reloading
        onAuthStateChanged(auth, (r) => {
            setLoggedIn(r)
        })

    },[])

/*
 useEffect(() => {
    function fetchNews() {
        console.log('fetch data')
        axios.get(url).then(function (response) {
            // console.log(response.data.articles);
            
            let truncatedData = []

            for (let i = 0; i <= 19; i++) {
                truncatedData.push(response.data.articles[i])
            }

            console.log(truncatedData)
            setNewsData(truncatedData)
            // console.log(newsData);
                // setNewsImg(response.data.articles.urlToImage)
                // console.log(newsImg,777);
                setLoading(false); // change TO FALSE
            
            
            
        }).catch(function (error) {
            setError(true)
            console.error(error);
        });
    }
    console.log('context')
    newsData.length <= 1 && fetchNews()
    fetchNews()
    

    //to prevent it from reloading
    onAuthStateChanged(auth, (r) => {
        setLoggedIn(r)
    })

 },[]);
*/

    return (
        <AppContext.Provider value={{newsData, newsImg, loading, error, loggedIn, setLoggedIn}}>
            {props.children}
        </AppContext.Provider>
    )

}

export {ContextProvider, AppContext}
// export default AppContext