import React, { useEffect, useState } from 'react'
import { AppContext } from '../components/AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
 import { collection, doc, getDocs,updateDoc,deleteDoc } from "firebase/firestore"; 
import { db } from '../Firebase';

const Admin = () => {
  const [users,setUsers]=useState([])
  const [ticked,setTicked]=useState(false)
  const {loggedIn} = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


	useEffect(()=>{
		const ReadingTheDb=async()=>{
		const usersData = [];
		const querySnapshot = await getDocs(collection(db, "users"));
		querySnapshot.forEach( (doc) => {
			// console.log(doc.data());
			usersData.push({ id: doc.id,data:doc.data()});
		});
		setUsers(usersData);
		// console.log(usersData);
		// console.log(users.map(user=>user.id));

		}
		ReadingTheDb()
	},[])


  //updating the status to show either pending or sent

  const handleSent = async (id) => {
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, { status: !ticked });
  
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          id: user.id,
          data: { ...user.data, status: !ticked },
        };
      } else {
        return user;
      }
    });
  
    setUsers(updatedUsers);
    setTicked(!ticked);
  };
 
  const handleDelete = async (id) => {
   
      await deleteDoc(doc(db, "users", id));
      setUsers(users.filter((user) => user.id !== id));
    //   console.log(users);
   
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

   // filter users based on search term
   useEffect(() => {
		const filtered = users.filter((user) => {
		return (
			user.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.data.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
		});
		setFilteredUsers(filtered);
  	}, [searchTerm, users]);







	if (loggedIn) {

		return (
			<div className='h-screen'>

			<div className="faq-header py-[4em] bg-[rgb(36,32,33)] text-white">
			<h1 className=' '>ADMIN</h1>
			</div>

			<div>
			<h2>List of Requested Users</h2>


			{/* <!-- This is an example component --> */}
			<div className="max-w-4xl mx-auto">

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className="p-4">
				<label for="table-search" className="sr-only">Search</label>
				<div className="relative mt-1">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"></path>
						</svg>
					</div>
					<input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"  value={searchTerm} onChange={handleSearchInputChange}   />
					
		
			</div>
				</div>
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="p-4">
								S/N
							</th>
							<th scope="col" className="p-4">
								complete
							</th>
							<th scope="col" className="px-6 py-3">
								Requested Names
							</th>
							<th scope="col" className="px-6 py-3">
								Emails
							</th>
							<th scope="col" className="px-6 py-3">
								Amount
							</th>
							<th scope="col" className="px-6 py-3">
								Status 
							</th>
							<th scope="col" className="px-6 py-3">
								Control 
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.length>0 ?<>
					
						{filteredUsers.map((user,id)=>(													
									<tr key={user.id}
									
						
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
											<td className='w-4 p-4'>
											{id+1}
											</td>
										<td className="w-4 p-4">
											<div className="flex items-center">
												<input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>handleSent(user.id)} checked={user.data.status}/>
												<label for="checkbox-table-search-1" className="sr-only">checkbox</label>
											</div>
										</td>
										
										<td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
											{user.data.name}
										</td>
										<td className="px-6 py-4">
											{user.data.email}
										</td>
										<td className="px-6 py-4">
											#{user.data.Amount}
										</td>
										<td className="px-6 py-4">
											{user.data.status?"Sent":"Pending"}
										</td>
										<td className="px-6 py-4 text-right">
							<button className='text-red-600 ' onClick={()=>handleDelete(user.id)}>Delete</button>
										</td>
									</tr>
								))
						}  </>
					
					:
					<>
					
		
					</>
					}

			
						
					</tbody>
				</table>
				
			</div>
			<div className='my-4 text-red-600  font-[600]'>
				{filteredUsers.length>0 ?<></>:<>No user </>}
			</div>
			<p className="mt-5">This table contains users that have requested prospectus  <a className="text-blue-600 hover:underline" target="_blank">contact</a>.
			</p>

		
		</div>
		</div>		
		</div>
		)
	} else {
		return (
		<div className='h-screen' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(1em, 2.5vw, 2.6em)'}}>
			<h1>You're Not an Admin</h1>
			<p>Navigate to the Home Page Here <Link to='/'><button style={{padding: '0.3em 1.3em 0.3em 1.3em', borderRadius: '10px', color: 'white', backgroundColor: 'black'}}>Home</button></Link></p>
		</div>
		)
	}
}

export default Admin
