import { useParams } from "react-router"
import InvestorProspectus from "../../components/investorProspectus"
import './fundsDynamic.css'

export default function FundsDynamic() {

    const {data} = useParams()
    // console.log(parameter.data)
    
    const lunarFundData = {
        headText: `Bitcoin accounts for less than 30% of the total cryptocurrency market.
         Digital assets outside of Bitcoin account for almost two trillion in USD value.`,
        header: `Lunar Fund`,
        h3Tag: `STAKING PROTOCOLS | LIQUIDITY POSITIONS | LP INCENTIVES
        COIN/TOKEN RELEASES | AIRDROPS | HARD-FORKS`,
        paragraph: `The Lunar Fund is predominantly driven by a discretionary strategy focused on yield generated from decentralized finance (DefI)
         and adjacent cryptocurrency assets. While Bitcoin retains its global position as the premier digital store of value, smart contracts and 
         utility tokens hold the greatest potential for income and appreciation in blockchain.`,
        
        fundStrategeis: [
            {
                title: 'Staking Protocols',
                paragraph: `The DeFi revolution has seen the advent of blockchain products that attempt to replicate legacy banking 
                functions. Staking refers to smart contract protocols that monetize time as per traditional Certificates of Deposit. `
            },
            {
                title: `Liquidity Positions`,
                paragraph: `As online trading volume moves away from centralized exchanges and towards DEXs like Uniswap and Balancer,
                 providing liquidity (LPs) to DEXs has shown the potential to deliver low-risk yield in the form of exchange fees. `
            },
            {
                title: `LP Incentives`,
                paragraph: `To attract liquidity providers, many DEXs are offering LP incentives in the form of native exchange tokens.
                These non-fee LP incentives represent an additional revenue stream for LPs including Lunar Fund.`
            },
            {
                title: `Coin/Token Releases`,
                paragraph: `The blockchain space is innovating faster than any other industry. Early entry into token and coin releases provide
                for massive percentage portfolio growth. Lunar Fund selects new blockchain projects with moonshot potential. `
            },
            {
                title: `Airdrops`,
                paragraph: `There’s no such thing as free money, except in blockchain. As a way to attract users, new cryptocurrency projects will
                often “airdrop” free tokens to their users or holders of other tokens with similar investment profiles.`
            },
            {
                title: `Hard-Forks`,
                paragraph: `Consensus within a blockchain project is often difficult to sustain long-term. When a group of users breaks off in another direction,
                they create a hard-fork, a new chain and massive economy value in the process.`
            }
        ]
        
    }
    
    const qof_II_Data = {
        headText: `The opportunity zone program provides substantial tax incentives for investors with capital gains. QOF II combines our real estate development strategy
         with support for Austin-based startups with intellectual property assets.`,
        header: `QOF II`,
        h3Tag: `BUSINESS CAMPUS | STARTUP PORTFOLIO
        MIXED USE DEVELOPMENT | NEW CONSTRUCTION RENTAL`,
        paragraph: `Liquid QOF II is Austin’s premier OZ fund. The vehicle was launched in Q3, 2021 to accommodate opportunity zone investors with larger capital events.
        Through QOF II, Liquid is launching a business campus in the East Riverside Corridor of Austin, TX to support local startups. 

        Launching a business? Contact our management team to discuss funding.`,
        
        fundStrategeis: [
            {
                title: 'Business Campus',
                paragraph: `Liquid QOZB II is currently seeking a suitable development site along the East Riverside Corridor to build our OZ startup campus.
                    The site should have potential for a vertical mixed use development under existing zoning.`
            },
            {
                title: `Startup Portfolio`,
                paragraph: `Our business campus helps startups in Austin, TX to acquire funding through and remain compliant with the opportunity
                zones programs. As they grow, our QOZBs provide QOF investors with tax-free capital gains.`
            },
            {
                title: `Mixed Use Development`,
                paragraph: `With our own business campus as the cornerstone model, Liquid’s real estate team is expanding into mixed-use development
                with the goal of providing housing, retail and business services for our startup community. `
            },            
            {
                title: `Startup Portfolio`,
                paragraph: `Low maintenance costs. Higher-rental rates. Liquid is building out a diversified portfolio of new-construction
                rental assets in partnership with a series of local residential builders. `
            }
            
        ]
    }

    const pageData = data == 'qof-II' ? qof_II_Data : lunarFundData
    // console.log(pageData)

    return (
        <>
            <div className="dynamic-funds">
                <div className="dynamic-funds-head">
                    <div className="dynamic-funds-head-description">
                        <p>{pageData.headText}</p>
                        <h1>{pageData.header}</h1>
                        <h3>{pageData.h3Tag}</h3>
                        <p>{pageData.paragraph}</p>
                    </div>

                    <div className="dynamic-funds-head-terms">
    
                        <hr />
                        <h1>SUMMARY OF TERMS</h1>
                        <hr />
                        <div className="term-properties">
                            <p>Launch: <span>October, 1st 2021</span></p>
                            <p>Status: <span>Active</span></p>
                            <p>Managment Fee: <span>2%</span></p>
                            <p>Dividend Split: <span>90/10</span></p>
                            <p>Launch: <span>October, 1st 2021</span></p>
                            <p>Status: <span>Active</span></p>
                            <p>Managment Fee: <span>2%</span></p>
                            <p>Dividend Split: <span>90/10</span></p>
                        </div>
                        <hr />
                        <h1>JOIN THE FUND</h1>
                        <hr />
                        <p>
                            To qualify for access, you need to answer some questions and provide verifiable documentation.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                </div>

                <div className="dynamic-funds-strategies">
                    <h1>FUND STARTEGIES</h1>
                    <div className="strategies-container">
                        {pageData.fundStrategeis.map((item) => (
                            <div className="strategies-item">
                                <h2>{item.title}</h2>
                                <p>{item.paragraph}</p>
                            </div>
                        ))}
    
                    </div>
                </div>
            </div>
            <InvestorProspectus />
        </>

    )
}