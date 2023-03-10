import './spinner.css'

// Component to render while data is being fetched from api
export default function LoadingSpinner({errorOccured}) {

    if (errorOccured == false) {
        return (
            <div className="spinner-container">
                <div className='spinner-text'>
                    <div className="loading-spinner">
                    </div>
                    <p>Please wait...</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="spinner-container">
                <div className='spinner-text'>
                    <h1 style={{color: 'red'}}>An error has occured Please reload Page</h1>
                </div>
            </div>
        )
    }

}