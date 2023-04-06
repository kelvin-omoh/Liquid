import './services.css'
import { useNavigate } from 'react-router'
import blog1 from '../Images/blog 1.png'
export default function Services () {

    const navigateTo = useNavigate()


    return (
        <div className='service-page'>
            <div className='service-page-headers'>
                <h1>Ready to get your loans serviced ?</h1>
                <button onClick={() => navigateTo('/investors')}>Get Started</button>
            </div>


            <div className='service-page-details'>
                <h1>What We Offer</h1>
                <div className='service-page-gridContainer'>
                    <div className='service-page-gridItem'>
                        <h2>We offer 24/7 access to historical sata for both lender
                            and borrower!
                        </h2>
                        <p>
                        You can look at borrower payment history, dates payments were made,
                        lender disbursements and other details about each loan we are servicing through our secure on-line access.
                        </p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Peace of Mind</h2>
                        <p>We take the worry out of mortgage payments and seller carry back transactions.  You can be assured
                            that every aspect of the loan servicing portion of your investment is under control.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Payment accounting and processing</h2>
                        <p>Let us take your burden of accounting and endless paperwork! We do
                            that for you and supply you with accurate status reports of all your loans.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Credit Reporting</h2>
                        <p>
                            We currently report to one of the major credit agencies and will soon report to all three. This will assist in increasing your buyer's
                             credit score making them eligible for refinancing as early as possible.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Flexible pricing</h2>
                        <p>We have found that our credit reporting is a benefit to the borrower as well as the lender.
                            Most borrowers are pleased to pay all or part of the monthly service fee for this added service (much like credit repair).
                        ​</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Monthly statements</h2>
                        <p>You receive monthly reports from detailing account activity of all your loans.  These reports are in easy-to-read formats that will
                            assist you in your internal accounting. You can also view your accounts on-line and receive your reports in importable formats.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Primary point of contact for borrowers</h2>
                        <p>Let us be the contact point between the lender and borrower. We answer borrower calls and offer
                            workout solutions so that you can receive your payments worry-free.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Timely Distribution of Investor Funds</h2>
                        <p>Your funds are sent to you directly from us after processing.  We have a minimal check clearing time based
                            upon the borrower's past payment history.  No 21 day wait period.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>IRS Reporting</h2>
                        <p>The law requires accurate and timely reporting to the IRS and the borrower concerning interest paid for tax deductions.  We relieve you of the
                            burden of reporting and we also provide you with an annual 1009 report of interest earned on your investment.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Insurance and Property Tax Disbursement</h2>
                        <p>We track all insurance renewals and tax payments due so that your collateral is never unprotected.  Renewals and tax payments are
                            disbursed from our Escrow Trust Account as collected from your borrower escrow payments.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Escrow Analysis</h2>
                        <p>The law requires periodic escrow analysis and adjustment for every loan with an escrow account.  We preform the
                            analysis and make payment adjustments accordingly so that you are in compliance.</p>
                    </div>

                    <div className='service-page-gridItem'>
                        <h2>Late Payment Notifications</h2>
                        <p>We mail late payment notifications promptly and act aggressively in collecting past due funds.
                            Our goal is to make sure you receive your disbursements in a timely manner.</p>
                    </div>

                </div>
            </div>

            <div className='service-page-details text-white h-[22em] py-5  w-full' style={{background:`url('${blog1}')`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <h1>Documents Needed</h1>
                <p>Ready to get your loans serviced?</p>

                <button className=' p-5 text-[#e1dede] bg-[#380909] rounded-md my-4' onClick={() => navigateTo('/copy-of-wrap-loan-servicing')}>Get started</button>
            </div>

            <div className=' flex p-4 flex-col md:flex-row gap-[4em] my-5 py-5 text-left justify-center'>

                <div className='  bg-[#2c2a2ae4] md:w-[40%] text-white p-4 backdrop-blur-md rounded-md'>
                    <h1>Traditional Loan</h1>
                    <ul className='list-disc p-4'>
                        <li>Promissory Note</li>
                        <li>Deed of Trust</li>
                        <li>Closing Disclosure or HUD-1</li>
                        <li>Transfer of Lien (if applicable)</li>
                        <li>Allonge to Promissory Note</li>
                        <li>Truth-in-Lending</li>
                        <li>Sales Contract</li>
                        <li>1003 or Borrower Application</li>
                        <li>W-9</li>
                        <li>First Payment Letter</li>
                        <li>Homeowners Insurance</li>
                        <li>Tax Certificate</li>
                        <li>If Account is Escrowed: Initial Escrow Disclosure, Initial or Transfer of Escrow Funds</li>
                    </ul>
                    
                </div>
                
                <div className=' bg-[#2c2a2ae4] md:w-[40%] text-white p-4 backdrop-blur-3xl rounded-md'>
                    <h1>Wrap Loan</h1>
                    <ul className='list-disc p-4'>
                        <li>Promissory Note</li>
                        <li>Deed of Trust</li>
                        <li>Closing Disclosure</li>
                        <li>Sales Contract</li>
                        <li>1003</li>
                        <li>W-9</li>
                        <li>First payment Letter</li>
                        <li>Homeowner’s Insurance</li>
                        <li>Borrower(s) Information: Contact Number, Social Security #, and DOB</li>
                        <li>Copy of mortgage statement from underlying mortgage</li>
                        <li>Information for making payment to underlying mortgage (online or by phone. sign on information, phone number)</li>
                          </ul>
                    
                </div>
                

            </div>
            <div className='m-4'>
            <p >Please contact us if you have any questions on the documents needed. We realize that there are special circumstances where you do not have all of the above.  In most cases, we can get the information we need through other documents or sources.</p>
            </div>

        </div>
    )
}