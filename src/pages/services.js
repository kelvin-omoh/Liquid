import './services.css'
import { useNavigate } from 'react-router'

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
        </div>
    )
}