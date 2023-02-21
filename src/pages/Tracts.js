import './tracts.css'
import tractImg from '../Images/blog 3.png'
import InvestorProspectus from '../components/investorProspectus'

export default function Tracts() {
    return (
        <div className="tracts-page">
            <h1 className='tracts-head'>TRACTS</h1>

            <div className='funds-opportunity-zone'>
                {/* <h1>Opportunity Zone Investments Funds</h1> */}

                <div className='funds-opportunity-item one'>
                    <img src={tractImg}/>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for GLOBAL FINANCE to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                </div>

                <div className='funds-opportunity-item two'>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for GLOBAL FINANCE to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                    <img src={tractImg}/>
                </div>

                <div className='funds-opportunity-item three'>
                    <img src={tractImg}/>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for GLOBAL FINANCE to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                </div>

                <div className='funds-opportunity-item four'>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for GLOBAL FINANCE to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                    <img src={tractImg}/>
                </div>

            </div>
            <InvestorProspectus />
        </div>

    )
}