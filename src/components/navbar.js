import { Link } from "react-router-dom"
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <h1><Link to='/'>LIQUID</Link></h1>
            <ul>
                <Link to='/about'><li>ABOUT</li></Link>
                <Link to='/funds'><li>FUNDS</li></Link>
                <Link to='/tracts'><li>TRACTS</li></Link>
                <Link to='/news'><li>NEWS</li></Link>
                <Link to='/investors'><li id='investor'>INVESTORS</li></Link>
            </ul>
        </div>
    )
}