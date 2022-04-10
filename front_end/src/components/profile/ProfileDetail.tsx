import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { User } from "../../models/User";
import { getUsers } from "../../services/Users";
import "../css/profileDetail.css"


export function ProfileDetails() {
  const [user, setUser] = useState<User[]>([]);

  function findById(id: number) {
    const foundUser = user.find((user) => user.id === id);
    return foundUser ? foundUser : undefined;
  }



  useEffect(() => {
    getUsers().then((data) => {
      setUser(data);
    });
  }, []);

  const id: string | undefined = useParams().id;

  const userDetail = findById(parseInt(id!));


  return (
      <div className="profile">

                <div className='profile-side'>
                    <div className='profile-image'>
                      
                        <img src="../utensils.jpg" alt="fork and knife"></img>
                        <div className="name-join">
                        <h4> {userDetail?.first_name}  {userDetail?.last_name}</h4>
                        <p>Joined: YYYY-MM-DD</p>
                        </div>
                    </div>

                    <ul className='profile-list'>
                        <li><NavLink to="/favorites"> Saved Recipes</NavLink></li>
                        <li>Dietary Preferences: <span className="bold-diet">Vegan</span></li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>

                </div>


                <form className="profile-settings">
                <h3><label htmlFor="first_name">First Name</label> </h3>
                <input type="text" name="first_name" value={userDetail?.first_name} />
                <h3><label htmlFor="last_name">Last Name</label></h3>
                <input type="text" name="last_name" value={userDetail?.last_name} /> 
                <h3><label htmlFor="email">Email</label></h3>
                <input type="text" name="email" value={userDetail?.email} />
                <h3><label htmlFor="email">Password</label></h3>
                <input type="text" name="password" placeholder="********" />
                <h3><label htmlFor="preferences">Dietary Preferences</label></h3>
                <input type="text" name="preferences" placeholder="still need to add this to database" />
               
                
                <button className="update-user">Update</button>
                </form>

      </div>
     
  );
}
