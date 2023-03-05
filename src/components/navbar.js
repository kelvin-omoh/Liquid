import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import './navbar.css'
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useContext, useState } from "react"
import { AppContext } from "./AppContext"
import { getAuth, signOut } from "firebase/auth";
import { toast,ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export default function Navbar() {
    const {loggedIn} = useContext(AppContext)
    const {pathname} = useLocation()
    const[hambugger,setHambugger]=useState(false)
    console.log(pathname)

    const toggle=()=>{
      setHambugger(!hambugger)

    }

    const logout=()=>{
        const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  toast.success(`Logged-out successful.`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}).catch((error) => {
  // An error happened.
  toast.error(`Logged-out failed.`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
});
    }



    return (
        
        <div className="navbar p-9 justify-center  relative  w-screen flex flex-col md:flex-row ">
            
            <h1 className=" text-[1.2em] md:text-[1.5em]   font-semibold  mr-8 "><Link to='/'>GLOBAL FINANCE</Link></h1>
            <div className="  text-white  md:hidden absolute top-[2.5em] right-[8%]">
                {hambugger===false ? 
            <>
            <AiOutlineMenu onClick={toggle} size={30} className=" text-white"/>
            </>   :
            <>
            <AiOutlineClose onClick={toggle} size={30} className="  text-white"/>
            </> 
            
            }
                
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            
            <ul className=" hidden md:flex  gap-3  " >
                <Link to='/about' ><li  id={pathname === '/about' && 'active'}>ABOUT</li></Link>
                <Link to='/funds'><li id={pathname === '/funds' && 'active'} >FUNDS</li></Link>
                <Link to='/tracts'><li id={pathname === '/tracts' && 'active'} >TRACTS</li></Link>
                <Link to='/news'><li id={pathname === '/news' && 'active'} >NEWS</li></Link>
                <Link to='/investors'><li id={pathname === '/investors' && 'active' } >INVESTORS</li></Link>
                {
                    loggedIn ?   <Link to='/admin'><li id={pathname === '/admin' && 'active'} >Dashbooard</li></Link>
                    :
                    null

                }
                {
                    loggedIn ? <button onClick={logout} className="bg-red-700 left-[90%] p-3 absolute text-yellow-50">Logout</button>
                    :
                    null

                }
            </ul>
            

          
            <div className="">
                {hambugger===false ?
                    <ul  className={ hambugger===false?"flex flex-col md:flex-row   ease-in duration-500   absolute right-[700vw] top-[7em] gap-7  bg-[rgb(36,32,33)] p-4 justify-center w-screen  ":
               "flex flex-col md:flex-row absolute right-0 top-[6em] gap-7  ease-in-out duration-500 bg-[rgb(36,32,33)] p-4 justify-center w-screen  "
            }
               >
                <Link to='/about' ><li id={pathname === '/about' && 'active'}>ABOUT</li></Link>
                <Link to='/funds'><li id={pathname === '/funds' && 'active'} >FUNDS</li></Link>
                <Link to='/tracts'><li id={pathname === '/tracts' && 'active'} >TRACTS</li></Link>
                <Link to='/news'><li id={pathname === '/news' && 'active'} >NEWS</li></Link>
                <Link to='/investors'><li id={pathname === '/investors' && 'active' } >INVESTORS</li></Link>
                {
                    loggedIn ?   <Link to='/admin'><li id={pathname === '/admin' && 'active'} >Dashbooard</li></Link>
                    :
                    null

                }
                
            </ul>

            :
            <>
             <ul  className={ hambugger===false?"flex flex-col md:flex-row   ease-in duration-500   absolute right-[700vw] top-[7em] gap-7  bg-[rgb(36,32,33)] p-4 justify-center w-screen  ":
               "flex flex-col md:flex-row absolute right-0 top-[6em] gap-7  ease-in-out duration-500 bg-[rgb(36,32,33)] p-4 justify-center w-screen  "
            }
               >
                <Link to='/about' ><li onClick={toggle} id={pathname === '/about' && 'active'}>ABOUT</li></Link>
                <Link to='/funds'><li onClick={toggle} id={pathname === '/funds' && 'active'} >FUNDS</li></Link>
                <Link to='/tracts'><li onClick={toggle} id={pathname === '/tracts' && 'active'} >TRACTS</li></Link>
                <Link to='/news'><li onClick={toggle} id={pathname === '/news' && 'active'} >NEWS</li></Link>
                <Link to='/investors'><li onClick={toggle} id={pathname === '/investors' ? 'investor-active' : 'investor'} >INVESTORS</li></Link>
                {
                    loggedIn ?   <Link to='/admin'><li id={pathname === '/admin' && 'active'} >Dashbooard</li></Link>
                    :
                    null

                }
                 {
                    loggedIn ? <button onClick={logout} className= "  bg-red-700 left-[90%] p-3  text-yellow-50">Logout</button>
                    :
                    null

                }
            </ul>

            
            </>


                }
               
            </div> 
            
          
                
        </div>
    )
}