import './news.css'
import img1 from '../Images/blog 1.png'
import InvestorProspectus from '../components/investorProspectus'
import axios from "axios";
import { useState,useEffect } from 'react';
export default function News() {
    const [newsData,setNewsData]=useState([])
    const [newsImg,setNewsImg]=useState([])
    // const[eachNews,setEachNews]=useState("")
   
            const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
        params: { q:"fund",q:"invest",newsCount:13, region: 'NG'},
        headers: {
            'X-RapidAPI-Key': '30036a0512msh3b27f89a1503b96p158eebjsn28a37851b62b',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
          }
      };

 useEffect(() => {
      
      axios.request(options).then(function (response) {
          console.log(response.data.news);
          
          setNewsData(response.data.news)
        
            setNewsImg(response.data.news.map(a=>a.thumbnail?.resolutions[0]?.url))

         
          
          
      }).catch(function (error) {
          console.error(error);
      });

    },[]);
   

    return (
        <div className='news-page'>
            <h1 className='news-head'>NEWS</h1>

            <div className='news-container'>
       
                   { newsData.map((news,id)=>(


                <div key={id} className='news-item'>
                    <div className=' relative  '>
                        <img src={newsImg[id]}/>
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L absolute  m-3'>G.F</span>
                    </div>
                    <div className='news-text'>
                        <h3>{news.title}</h3>
                        
                        <hr/>
                        <p>GLOBAL FINANCE -{news.pubDate }</p>
                    </div>
                </div>
                   ))
                    
                   }
                


                <div className='news-item'>
                    <div className=''>
                        <img src={img1}/>
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L'>L</span>
                    </div>
                    <div className='news-text'>
                        <h3>THE MOST DEVELOPED OPPORTUNITY ZONES IN TEXAS</h3>
                        <p>Which Opportunity Zones in Texas have seen the most
                            investment? Let's look at the five most developed Opportunity Zones in Texas.
                        </p>
                        <hr/>
                        <p>GLOBAL FINANCE - 02/13/2023</p>
                    </div>
                </div>

                <div className='news-item'>
                    <div className='news-img'>
                        {/* <img src={img1}/> */}
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L'>L</span>
                    </div>
                    <div className='news-text'>
                        <h3>THE MOST DEVELOPED OPPORTUNITY ZONES IN TEXAS</h3>
                        <p>Which Opportunity Zones in Texas have seen the most
                            investment? Let's look at the five most developed Opportunity Zones in Texas.
                        </p>
                        <hr/>
                        <p>GLOBAL FINANCE - 02/13/2023</p>
                    </div>
                </div>

                <div className='news-item'>
                    <div className='news-img'>
                        {/* <img src={img1}/> */}
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L'>L</span>
                    </div>
                    <div className='news-text'>
                        <h3>THE MOST DEVELOPED OPPORTUNITY ZONES IN TEXAS</h3>
                        <p>Which Opportunity Zones in Texas have seen the most
                            investment? Let's look at the five most developed Opportunity Zones in Texas.
                        </p>
                        <hr/>
                        <p>GLOBAL FINANCE - 02/13/2023</p>
                    </div>
                </div>

                <div className='news-item'>
                    <div className='news-img'>
                        {/* <img src={img1}/> */}
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L'>L</span>
                    </div>
                    <div className='news-text'>
                        <h3>THE MOST DEVELOPED OPPORTUNITY ZONES IN TEXAS</h3>
                        <p>Which Opportunity Zones in Texas have seen the most
                            investment? Let's look at the five most developed Opportunity Zones in Texas.
                        </p>
                        <hr/>
                        <p>GLOBAL FINANCE - 02/13/2023</p>
                    </div>
                </div>

                <div className='news-item'>
                    <div className='news-img'>
                        {/* <img src={img1}/> */}
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L'>L</span>
                    </div>
                    <div className='news-text'>
                        <h3>THE MOST DEVELOPED OPPORTUNITY ZONES IN TEXAS</h3>
                        <p>Which Opportunity Zones in Texas have seen the most
                            investment? Let's look at the five most developed Opportunity Zones in Texas.
                        </p>
                        <hr/>
                        <p>GLOBAL FINANCE - 02/13/2023</p>
                    </div>
                </div>

                <div className='news-item'>
                    <div className='news-img'>
                        {/* <img src={img1}/> */}
                        <button className='news-btn'>NEWS</button>
                        <span className='news-L'>L</span>
                    </div>
                    <div className='news-text'>
                        <h3>THE MOST DEVELOPED OPPORTUNITY ZONES IN TEXAS</h3>
                        <p>Which Opportunity Zones in Texas have seen the most
                            investment? Let's look at the five most developed Opportunity Zones in Texas.
                        </p>
                        <hr/>
                        <p>GLOBAL FINANCE - 02/13/2023</p>
                    </div>
                </div>

                
            </div>
            <InvestorProspectus />
        </div>
    )
}