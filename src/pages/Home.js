import './home.css'
import heroImg from '../Images/Hero Img.png'
import investorIMG from '../Images/Crypto bg.png'
import img3 from '../Images/blog 1.png'

export default function Home() {
    return (
        <div className="home-page">

            <div className='hero-container'>
                <img src={heroImg}></img>
                <div className='hero-texts'>
                    <h1>Liquid Investments</h1>
                    <p>Diversified Opportunity Zone And Blockchain Funds</p>
                    <div className='hero-btn'>
                        <button>Learn More</button>
                        <button>Investors</button>
                    </div>
                </div>
            </div>

            <div className='fund-news'>
                <h2>OZ FUND NEWS</h2>
                <div className='fund-news-container'>
                    <div className='fund-news-item'>

                    </div>
                </div>
            </div>

            <div className='investor-prospectus'>
                <img src={investorIMG}></img>
                <div className='investor-txt'>
                    <div>
                        <h1>INVESTOR PROSPECTUS</h1>
                        <input placeholder='your@email.co'></input>
                        <button>Download</button>
                    </div>
                </div>
            </div>

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

                    <button>Learn More About OZ Funds in Austin</button>                
                </div>

                <div className='oz-img'>
                    <img src={img3} />
                </div>
            </div>
        </div>
    )
}