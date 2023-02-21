import './investor.css'

export default function Investors() {
    return (
        <div className='investor-page'>
            <h1 className='investor-head'>INVESTORS</h1>

            <div className='investor-request'>
                <div className='investor-text'>
                    <p>
                        I have experienced a fantastic product in working with the fund manager and amazing returns. The fund manager
                        is very receptive to any questions and responds quickly. He has a vast understanding and gives his priority to
                        make the fund successful.
                    </p>
                    <p className='investor-bold-text'>- Scott S. star star</p>
                </div>
                <div className='investor-request-form'>
                    <div className='form-names-container'>
                        <div className='form-name'>
                            <label>First Name</label>
                            <input type={'text'} placeholder='Elon' />
                        </div>
                        <div className='form-name'>
                            <label>Second Name</label>
                            <input type={'text'} placeholder='Musk' />
                        </div>
                    </div>
                    <label>Email</label>
                    <input type={'email'} placeholder='your@email.com'/>
                    <label>Phone Number</label>
                    <input type={'number'} placeholder='(xxx) xxx-xxx '/>
                    <label>Expected Investment Amount</label>
                    <input type={'number'} placeholder='$'/>
                    <label>Are You An Accredited Investor</label>
                    <select>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <button>Request Prospectus</button>
                </div>
            </div>

            <hr/>
            
            <div className='investor-login'>

                <h3>Current Investors</h3>
                
                <div className='loginItem'>
                    <label>Email-Address</label>
                    <input type={'text'} />
                </div>
                <div className='loginItem'>
                    <label>Password</label>
                    <input type={'password'} />
                </div>

                <p>Remember Me</p>
                <button>Log In</button>
                <p>Lost your password? </p>
            </div>
        </div>
    )
}