import './spinner.css'

// Component to render while data is being fetched from api
export default function LoadingSpinner({errorOccured}) {

    return (
        <div className="spinner-container">
            <div className='spinner-text'>
                <div className="loading-spinner">
                </div>
                <p>Please wait...</p>
            </div>
        </div>
    )
}