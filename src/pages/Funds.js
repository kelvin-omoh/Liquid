import './funds.css'
import blog1 from '../Images/blog 1.png';
import InvestorProspectus from '../components/investorProspectus'

export default function Funds() {
    return (
        <div className='funds-page'>
            <h1 className='funds-head'>INVESTMENTS FUNDS</h1>

            <div className='funds-plans-container'>
                <div className='funds-plan-item'>
                    <h1>QOF II</h1>
                    <h2>OZ FUND</h2>

                    <p>A diversified vehicle for investors with capital gains. Liquid QOF II is designed for
                        investors with larger capital events to defer capital gains until 2026. Capital deployed into our oz business campus and
                        startup portfolio with dividends paid quarterly. 
                    </p>

                    <ul>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>

                    </ul>

                    <button>Learn More</button>
                </div>
                <div className='funds-plan-item'>
                    <h1>QOF II</h1>
                    <h2>Blockchain FUND</h2>

                    <p>A diversified vehicle for investors with capital gains. Liquid QOF II is designed for
                        investors with larger capital events to defer capital gains until 2026. Capital deployed into our oz business campus and
                        startup portfolio with dividends paid quarterly. 
                    </p>

                    <ul>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>

                    </ul>

                    <button>Learn More</button>
                </div>
                <div className='funds-plan-item'>
                    <h1>QOF II</h1>
                    <h2>Opportunity Zone Fund</h2>

                    <p>A diversified vehicle for investors with capital gains. Liquid QOF II is designed for
                        investors with larger capital events to defer capital gains until 2026. Capital deployed into our oz business campus and
                        startup portfolio with dividends paid quarterly. 
                    </p>

                    <ul>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>
                        <li> $250M Raise</li>
                        <li> $50K Minimum</li>
                        <li> Capital Gains Tax</li>
                        <li> Tax-Free Appreciaion</li>

                    </ul>

                    <button>Learn More</button>
                </div>
            </div>

            <InvestorProspectus />

            <div className='funds-opportunity-zone'>
                <h1>Opportunity Zone Investments Funds</h1>

                <div className='funds-opportunity-item one'>
                    <img src={blog1}/>
                    <div className='funds-opportunity-text'>
                        <h1>OZ Fund</h1>
                        <p>
                            Liquid QOF II is our primary opportunity zone investment fund structured to provide
                            income investors with tax-free capital gains on the growth of our Austin-based startup business portfolio.
                        </p>
                        <button>More On Liquid QOF II</button>
                    </div>
                </div>

                <div className='funds-opportunity-item two'>
                    <div className='funds-opportunity-text'>
                        <h1>OZ Fund</h1>
                        <p>
                            Liquid QOF II is our primary opportunity zone investment fund structured to provide
                            income investors with tax-free capital gains on the growth of our Austin-based startup business portfolio.
                        </p>
                        <button>More On Liquid QOF II</button>
                    </div>
                    <img src={blog1}/>
                </div>

                <div className='funds-opportunity-item three'>
                    <img src={blog1}/>
                    <div className='funds-opportunity-text'>
                        <h1>OZ FUND</h1>
                        <p>
                            Liquid QOF II is our primary opportunity zone investment fund structured to provide
                            income investors with tax-free capital gains on the growth of our Austin-based startup business portfolio.
                        </p>
                        <button>More On Liquid QOF II</button>
                    </div>
                </div>

                <div className='funds-opportunity-item four'>
                    <div className='funds-opportunity-text'>
                        <h1>OZ FUND</h1>
                        <p>
                            Liquid QOF II is our primary opportunity zone investment fund structured to provide
                            income investors with tax-free capital gains on the growth of our Austin-based startup business portfolio.
                        </p>
                        <button>More On Liquid QOF II</button>
                    </div>
                    <img src={blog1}/>
                </div>

            </div>


        </div>
    )
}