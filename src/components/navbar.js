import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import './navbar.css'

export default function Navbar() {

    const {pathname} = useLocation()
    console.log(pathname)

    return (
        <div className="navbar">
            <h1><Link to='/'>LIQUID</Link></h1>
            <ul>
                <Link to='/about' ><li id={pathname == '/about' && 'active'}>ABOUT</li></Link>
                <Link to='/funds'><li id={pathname == '/funds' && 'active'} >FUNDS</li></Link>
                <Link to='/tracts'><li id={pathname == '/tracts' && 'active'} >TRACTS</li></Link>
                <Link to='/news'><li id={pathname == '/news' && 'active'} >NEWS</li></Link>
                <Link to='/investors'><li id={pathname == '/investors' ? 'investor-active' : 'investor'} >INVESTORS</li></Link>
            </ul>
        </div>
    )
}