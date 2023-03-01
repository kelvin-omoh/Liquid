import { useParams } from "react-router"
import { useContext } from "react"
import { AppContext } from "../../components/AppContext"
import LoadingSpinner from "../../components/LoadingSpinner"
import './singleNews.css'

export default function SingleNews () {

    const {newsId} = useParams()
    const {newsData, newsImg, loading} = useContext(AppContext)

    console.log(newsId)
    // newsId.replace("/%20/", ' ')
    console.log(newsId)
    // check if the data has loaded from API

    if (!loading) {
        // console.log(newsId.replace("/%20/", ' '))
        // newsId=newsId.replace("/%20/", ' ')
        console.log(newsId)
        // To get current single News Item data form context using the news ID gotten from url parameter
        console.log(newsData);

        const currentNews = newsData.filter((data) => data.title.replace('?', '') === newsId)
        // console.log(currentNews[0].urlToImage)

        // To check if the news Exist
        if (currentNews.length === 0) {
            return (
                <h1>News Dose'nt Exist</h1>
            )
        } else {
            return (
                <div className="singleNews-page">
                    <div className="singleNews-header-container">
                        <img src={currentNews[0].urlToImage}/>
                        <div className="singleNews-header-text">
                            <h1>{currentNews[0].title}</h1>
                            <div className="singleNews-spans">
                                <span>GLOBAL FINANCE</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path></svg> {currentNews[0].publishedAt.substring(0,17)}</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="M11.707 2.293A.996.996 0 0 0 11 2H6a.996.996 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM8.353 10a1.647 1.647 0 1 1-.001-3.293A1.647 1.647 0 0 1 8.353 10z"></path></svg> Investors, Opportunity Zones</span>
                            </div>
                            <div className="singleNews-button">
                                <button>Facebook</button>
                                <button>Twitter</button>
                                <button>Telegram</button>
                            </div>
                        </div>
                    </div>

                    <p>{currentNews[0].description}</p>
                </div>
            )
        }
    } else {
        return (
            <LoadingSpinner />
        )
    }

    // console.log(title)
    // console.log(description)
    // return (
    //     <h1>Single News Page</h1>
    // )
}