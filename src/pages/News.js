import './news.css'
import img1 from '../Images/blog 1.png'
import InvestorProspectus from '../components/investorProspectus'
import axios from "axios";
// import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../components/AppContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom';

export default function News() {

    const {newsData, newsImg, loading, error} = useContext(AppContext)
//     const [newsData,setNewsData]=useState([])
//     const [newsImg,setNewsImg]=useState([])
//     const [loading, setLoading] = useState(true);
//     // const[eachNews,setEachNews]=useState("")
   
//             const options = {
//         method: 'GET',
//         url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
//         params: { q:"fund",q:"invest",newsCount:13, region: 'NG'},
//         headers: {
//             'X-RapidAPI-Key': '30036a0512msh3b27f89a1503b96p158eebjsn28a37851b62b',
//             'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
//           }
//       };

//  useEffect(() => {
      
//       axios.request(options).then(function (response) {
//           console.log(response.data.news);
          
//           setNewsData(response.data.news)
        
//             setNewsImg(response.data.news.map(a=>a.thumbnail?.resolutions[0]?.url))
//             setLoading(false);
         
          
          
//       }).catch(function (error) {
//           console.error(error);
//       });

//     },[]);
//    console.log(newsData.map);

    return (
        <div className='news-page'>
            <h1 className='news-head'>NEWS</h1>
              
            <div className='news-container my-3'>
        {loading ?
            <div className='text-center'>
                <LoadingSpinner errorOccured={error}/>
            </div>:  <>
        
        { newsData.map((news,id)=>(
         

            <Link to={`/news/${news.guid}`}>
                <div key={id} className='news-item my-4'>
                    <div className=' relative  '>
                    <img src={`https://source.unsplash.com/1600x900/?$${news.title}  -technology `}/>                  
                        {/* <img src={`https://pixabay.com/api/?key=33987218-71374b5bf9d4f9b8fee9caa6f&q={${news.title}}&image_type=photo&per_page=1&min_width=1600&min_height=900`}/> */}
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L absolute  m-3'>G.F</span>
                    </div>
                    <div className='news-text'>
                        <h3>{news.title}</h3>
                        
                        <hr/>
                        <div className='flex flex-col gap-1 md:flex-row justify-between items-center'>
                             <p>GLOBAL FINANCE  </p>
                        <p>{news.pubDate}</p>
                        </div>
                       
                    </div>
                </div>
            </Link>
                
                   ))
                    
                   }
        </>
                   
              
            }

            </div>
            <InvestorProspectus />
        </div>
    )
}