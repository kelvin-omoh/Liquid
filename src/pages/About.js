import './about.css'
import InvestorProspectus from '../components/investorProspectus'

export default function About() {
    return (
        <div className="about-page">
            <h1 className='about-head'>ABOUT</h1>

            <div className="about-page-text">
                <h1>COMPANY</h1>

                <p>Liquid II is an investment opportunity that allows investors to defer and potentially reduce their capital gains taxes by investing in designated low-income communities 
                    across the United States. Our oz fund, Liquid QOF II is focused on providing capital for businesses and real estate projects that have the potential for strong financial
                    returns and positive social impact.
                </p>
                <br />
                <p>
                    With Liquid, investors can support the growth and revitalization of underserved communities while also growing their wealth. Our team of experienced professionals
                    carefully selects and monitors investments, ensuring that our fund is well-diversified and has the potential for strong returns.
                </p>
            </div>
            
            <InvestorProspectus />

            <div className="about-page-text">
                <h1>MANAGEMENT</h1>
                
                <div className='management-container'>
                    <h1>TIM H.</h1>

                    <h1 className='about-blue-txt'>FINANCE</h1>
                    <p>
                        Tim began working in Austin as a corporate finance and communications consultant to OTC and NASDAQ listed companies. In 2018, he left IR Smartt to become the Marketing Director
                        at commercial real estate brokerage, Asterra Properties. His real estate experience includes performing as one of the leading sales agents at Asterra during from 2018-2021 with a 
                        focus on new construction residential and multifamily assets. Tim is responsible for Liquid's day-to-day operations including real estate acquisitions, project assessment, fund management and investor relations.
                    </p>
                </div>

                <div className='management-container'>
                    <h1>DAVID C.</h1>

                    <h1 className='about-blue-txt'>CONSTRUCTION</h1>

                    <p>
                        David Comerford is the founder/owner and manager of 360 Degree Construction Company. 360 Degree Construction was founded in 2008 as a small remodeling company for personal clients and has grown into a development company
                        with a goal of creating lasting, modern designs that continually evolve to reflect the ever-changing Austin real estate landscape. David went to Llano High School in Llano, Texas. He has a BA in English from the University
                        of Texas at Austin. 
                    </p>

                    <p>
                        After forming 360 Degree Construction Company in 2008, David worked with many clients, primarily in Central Austin, redesigning and remodeling existing houses with the intent of maintaining the visually integrity of the structure itself
                        while also remaining cohesive with the neighborhood design. 360 Degree Construction then began working with a hard money lender to alleviate their backlog of foreclosures. This is where David gained experience with the potential mistakes
                        and pitfalls that can lead to nonperforming loans. Today, 360 Degree Construction builds imaginative, quality spec homes that reflect the needs of the growing city. 
                    </p>
                </div>

                <div className='management-container'>
                    <h1>BRANDON L.</h1>
                    <h1 className='about-blue-txt' >MARKETING</h1>
                    <p>Brandon is a graphic designer with extensive experience in branding and identity design. He has worked in Austin since 2018 and specializes in creating unique graphics for brand growth, as well as visual media. With a commitment to clients
                        and an extensive skill set, Brandon always strives to exceed expectations.</p>
                </div>

                <div className='management-container'>
                    <h1>NICOLE L.</h1>
                    <h1 className='about-blue-txt' >DESIGN</h1>
                    <p>Formerly of Letterpress firm company Sanctuary Design, Nicole brings almost a decade of print, graphic and interior design experience to Liquid. A graduate of Texas State's Fine Arts program, Nicole is responsible for brand development and her
                        work can be found across all our portfolio companies.</p>
                </div>
            </div>
        </div>
    )
}