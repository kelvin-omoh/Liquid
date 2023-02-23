import './home.css'
import heroImg from '../Images/Hero Img.png'
import img3 from '../Images/blog 1.png'
import InvestorProspectus from '../components/investorProspectus'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {

    const {newsData, newsImg, loading} = useContext(AppContext)
    let firstThree = []

    if (loading == false) {
        for(let i = 1; i <= 3; i++){
            firstThree.push(newsData[i])
        }
    }

    return (
        <div className="home-page">

            <div className='hero-container'>
                <img src={heroImg}></img>
                <div className='hero-texts'>
                    <h1>GLOBAL FINANCE Investments</h1>
                    <p>Diversified Opportunity Zone And Blockchain Funds</p>
                    <div className='hero-btn'>
                        <Link to='/funds'><button>Learn More</button></Link>
                        <Link to='/investors'><button>Investors</button></Link>
                    </div>
                </div>
            </div>

            <div className='fund-news'>
                <h2>OZ FUND NEWS</h2>

                {
                    loading ?
                        <LoadingSpinner />
                    :
                    <>
                        <div className='fund-news-container'>
                            {firstThree.map((news,id) => (
                                <Link to={news.link}>
                                    <div key={id} className='news-item my-4'>
                                        <div className=' relative  '>
                                            <img src={newsImg[id]}/>
                                            <button className='news-btn'>NEWS</button>
                                            <span className='news-L absolute  m-3'>G.F</span>
                                        </div>
                                        <div className='fund-news-text'>
                                            <h3>{news.title.substring(0,40)} <span style={{color: 'orange'}}>...Read more</span></h3>
                                            
                                            <hr/>
                                            <p>GLOBAL FINANCE </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                }

            </div>

            <InvestorProspectus />

            <div className='oz-funds'>
                <div className='oz-texts'>
                    <h1>AUSTIN OZ FUNDS</h1>
                    <p>Opportunity Zone Funds in Austin, Texas are investment vehicles that provide
                        tax incentives to developers and investors who invest in economically-distressed communities.
                        These funds aim to stimulate economic growth and job creation in areas that have been designated as Opportunity Zones by the government. 
                    </p>
                    <p>
                        In Austin, these funds have been used to fund real estate development projects, including
                        residential and commercial properties, as well as infrastructure improvements. The goal is to attract new investment
                        and revitalize underutilized areas, improving the quality of life for residents and spurring economic growth in the city.
                    </p>

                    <Link to='/funds'><button>Learn More About OZ Funds in Austin</button></Link>
                </div>

                <div className='oz-img'>
                    <img src={img3} />
                </div>
            </div>
        </div>
    )
}