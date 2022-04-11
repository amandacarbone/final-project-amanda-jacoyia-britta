import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { User } from "../../models/User";
import { getUsers, updateBasics } from "../../services/Users";
import { toast, ToastContainer } from 'react-toastify';
import "../../styles/profileDetail.css";
import 'react-toastify/dist/ReactToastify.css';


export function ProfileDetails() {
  const [user, setUser] = useState<User[]>([]);
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  // const [isVegan, setIsVegan] = useState<User[]>([]);
  // const [isVegetarian, setIsVegetarian] = useState<User[]>([]);
  // const [isPescatarian, setIsPescatarian] = useState<User[]>([]);

  const updateComplete = () => toast.success('Your profile has been updated', {
    position: 'bottom-right',
    autoClose: 900,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
});

  function findById(id: number) {
    const foundUser = user.find((user) => user.id === id);
    return foundUser ? foundUser : undefined;
  }

  function handleUpdate(e: any) {

  e.preventDefault();
  updateBasics(userDetail!.id, updateFirstName, updateLastName, updateEmail).then((data: any) => {
    updateComplete();
    console.log("updated")
  });
 
  
}

  useEffect(() => {
    getUsers().then((data) => {
      setUser(data);
    });
  }, [user]);

  const id: string | undefined = useParams().id;

  const userDetail = findById(parseInt(id!));

  return (
    <div className="profile">
      <div className="profile-side">
        <div className="profile-image">
          <img src="../utensils.jpg" alt="fork and knife"></img>
          <div className="name-join">
            <h4>
              {" "}
              {userDetail?.first_name} {userDetail?.last_name}
            </h4>
            <p>Joined: YYYY-MM-DD</p>
          </div>
        </div>

        <ul className="profile-list">
          <li>
            <NavLink to="/favorites"> Saved Recipes</NavLink>
          </li>
         
          <li> 
            <NavLink to="/update"> Update Password </NavLink>
          </li>
          <li className="bold-diet">
            Dietary Preferences:{userDetail?.isvegan ? <span className="bold">Vegan</span>   : ""} {userDetail?.isvegetarian ? <span className="bold">Vegetarian</span> : ""}{userDetail?.ispescatarian ? <span className="bold">Pescataroan</span> : ""}
          </li>
          <li>lorem ipsum</li>
        </ul>
      </div>

      <form className="profile-settings">
        <h3>
          <label htmlFor="first_name">First Name</label>{" "}
        </h3>
        <input type="text" name="first_name" value={updateFirstName} placeholder={userDetail?.first_name} onChange={(e) => setUpdateFirstName(e.target.value)}></input>
        <h3>
          <label htmlFor="last_name">Last Name</label>
        </h3>
        <input type="text" name="last_name" value={updateLastName} placeholder={userDetail?.last_name} onChange={(e) => setUpdateLastName(e.target.value)}></input>
        <h3>
          <label htmlFor="email">Email</label>
        </h3>
        <input type="text" name="email" value={updateEmail} placeholder={userDetail?.email} onChange={(e) => setUpdateEmail(e.target.value)}></input>
        <h3>
          <label htmlFor="preferences">Dietary Preferences</label>
        </h3>
        <label htmlFor="Vegan">Vegan</label>
        <input type="checkbox" name="Vegan" value="Vegan" />
        <label htmlFor="vegetarian">Vegetarian</label>
        <input type="checkbox" name="vegetarian" value="Vegetarian" />
        <label htmlFor="pescatarian">Pescatarian</label>
        <input type="checkbox" name="pescatarian" value="Pescatarian" />

        <button className="update-user" onClick={handleUpdate}>Update</button>
        <ToastContainer />
      </form>
    </div>
  );
}
