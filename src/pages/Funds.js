import './funds.css'
import blog1 from '../Images/liquid-qof-II-opportunity-zone-fund.jpg';
import blog2 from '../Images/lunar-investment-fund.jpg';
import blog3 from '../Images/2020-annual-returns.jpg';
import InvestorProspectus from '../components/investorProspectus'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import { Query } from '@testing-library/react';
// // import { query } from 'express';
// // import { json } from 'body-parser';

export default function Funds() {

    const navigateTo = useNavigate()
   
    
    return (
        <div className='funds-page'>
            <h1 className='funds-head'>INVESTMENTS FUNDS</h1>

            <div className='funds-plans-container  flex justify-center  '>
                <div className='funds-plan-item'>
                    <h1 className="my-14">QOF II</h1>
                    <h2 className='text-[1.9em] my-4'>OZ FUND</h2>

                    <p>A diversified vehicle for investors with capital gains. GLOBAL FINANCE QOF II is designed for
                        investors with larger capital events to defer capital gains until 2026. Capital deployed into our oz business campus and
                        startup portfolio with dividends paid quarterly. 
                    </p>

                    <ul className='flex justify-center flex-col gap-7 my-9'>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>

                    </ul>

                    {/* <button><Link to={{
                        pathname: '/funds/qof II',
                        query: {
                            comments: lunarFundData
                        }    
                    }}></Link>Learn More</button> */}
                    <button onClick={() => navigateTo(`/funds/qof-II`)}>Learn More</button>
                </div>
                <div className='funds-plan-item'>
                    <h1 className="my-14">Lunar</h1>
                    <h2 className='text-[1.9em] my-4'>Blockchain FUND</h2>

                    <p>Lunar Fund is a high-growth cryptocurrency investment vehicle available for both new and existing Liquid investors. Deposits accepted through 2023. Dividends are batched and sent quarterly with Liquid QOF II payments.  
                    </p>

                    <ul className='flex justify-center flex-col gap-7 my-9'>
                        <li> $100M Raise</li>
                        <li>$100K Minimum</li>
                        <li>Diversified Crypto Portfolio</li>
                        <li> Exponential Growth</li>
                        <li> Dividend Re-Investment</li>
                        <li> 90/10 Revenue Split</li>
                        <li> 2% AUM Fee</li>
                         <li> Open-Ended</li>

                    </ul>

                    <button onClick={() => navigateTo(`/funds/Lunar`)} >Learn More</button>
                </div>
                <div className='funds-plan-item' id='funds-not-available'>
                    <h1 className="my-14 text-gray-400">QOF I</h1>
                    <h2 className='text-[1.9em] my-4'>Opportunity Zone Fund</h2>

                    <p>The first opportunity zone fund offered by Liquid. QOF I is designed for income-focused investors with significant capital gains events in 2021. Capital deployed into our oz business campus and startup portfolio with dividends paid quarterly. 
                    </p>

                    <ul className='flex justify-center flex-col gap-7 my-9'>
                        <li> $50M Raise</li>
                        <li> $1K Minimum</li>
                        <li> Capital Gains Tax Deferrals</li>
                        <li>Tax-Free Appreciation</li>
                        <li> Distribution Waterfall</li>
                        <li> 1.5% AUM Fee</li>
                        <li> Closed Sept 30th, 2021</li>
                        <li> Returned: 185% ROI</li>

                    </ul>

                    <button onClick={() => navigateTo(`/funds/qof-I`)} >Funds Closed</button>
                </div>
            </div>

            <InvestorProspectus />
            
            <div className='funds-opportunity-zone'>
                <h1 className="my-14">Opportunity Zone Investments Funds</h1>
                {/* OZ Fund */}
                <div className='funds-opportunity-item one'>
                    <img src={blog1}/>
                    <div className='funds-opportunity-text'>
                        <h1>OZ Fund</h1>
                        <p>
                            Liquid QOF II is our primary opportunity zone investment fund
                            structured to provide income investors with tax-free capital gains on the growth of our Austin-based startup business portfolio.
                        </p>
                        <button onClick={() => navigateTo(`/funds/qof-II`)} >More On Liquid QOF II </button>
                    </div>
                </div>

                {/* Blockchain Fund */}
                <div className='funds-opportunity-item two'>
                    <div className='funds-opportunity-text'>
                        <h1>Blockchain Fund</h1>
                        <p>
                        Lunar Fund is a cryptocurrency vehicle created to give accredited investors exposure to the world’s fastest appreciating asset class. The benefits of crypto appreciation without the risk of centralized counter-parties. Learn more today.  </p>
                        <button onClick={() => navigateTo(`/funds/Lunar`)} >More On Lunar</button>
                    </div>
                    <img src={blog2}/>
                </div>



                 {/* Austin, TX */}
                <div className='funds-opportunity-item three'>
                    <img src={blog3}/>
                    <div className='funds-opportunity-text'>
                        <h1>Austin, TX</h1>
                        <p>
                            “The median list price for homes in the Austin area was up 24%, year-over-year, as of December 2020 — the largest increase amongst the nation’s 50 largest markets.” – BizJournals.com
                        </p>
                        <button onClick={() => navigateTo(`/investors`)} >Investor Prospectus</button>
                    </div>
                </div>

                {/* Identified Tracts */}

                <div className='funds-opportunity-item four'>
                    <div className='funds-opportunity-text'>
                        <h1>Identified Tracts</h1>
                        <p>
                            The Liquid Fund is ready to deploy capital into carefully chosen opportunity zone tracts in Austin, TX. These tracts include East St Elmo, Montopolis, East Oltorf and Parker Lane.
                        </p>
                        <button onClick={() => navigateTo(`/tracts`)} >More About Tracts</button>
                    </div>
                    <img src={blog1}/>
                </div>

            </div>


        </div>
    )
}