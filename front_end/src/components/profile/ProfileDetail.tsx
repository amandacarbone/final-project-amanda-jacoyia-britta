import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { User } from "../../models/User";
import { getUsers, updateBasics } from "../../services/Users";
import { toast, ToastContainer } from "react-toastify";
import "../../styles/profileDetail.css";
import "react-toastify/dist/ReactToastify.css";

export function ProfileDetails() {
  const storedUser = localStorage.getItem("user");
  const loggedInUser = JSON.parse(storedUser!);

  const [user, setUser] = useState<User[]>([]);
  const [updateFirstName, setUpdateFirstName] = useState(loggedInUser.first_name);
  const [updateLastName, setUpdateLastName] = useState(loggedInUser.last_name);
  const [updateEmail, setUpdateEmail] = useState(loggedInUser.email);
  const [isVegan, setIsVegan] = useState(loggedInUser.isvegan);
  const [isVegetarian, setIsVegetarian] = useState(loggedInUser.isvegetarian);
  const [isPescatarian, setIsPescatarian] = useState(loggedInUser.ispescatarian);

  const updateComplete = () =>
    toast.success("Your profile has been updated", {
      position: "bottom-right",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function findById(id: number) {
    const foundUser = user.find((user) => user.id === id);
    return foundUser ? foundUser : undefined;
  }

  function handleUpdate(e: any) {
    e.preventDefault();
    updateBasics(
      userDetail!.id,
      updateFirstName,
      updateLastName,
      updateEmail,
      isVegetarian,
      isVegan,
      isPescatarian
    ).then((data: any) => {
      updateComplete();
      console.log("updated");
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
            <p>Joined: {userDetail?.join_date}</p>
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
            Dietary Preferences:
            {userDetail?.isvegan ? <span className="bold">Vegan, </span> : ""}{" "}
            {userDetail?.isvegetarian ? (
              <span className="bold">Vegetarian, </span>
            ) : (
              ""
            )}
            {userDetail?.ispescatarian ? (
              <span className="bold">Pescatarian</span>
            ) : (
              ""
            )}
          </li>
          <li>lorem ipsum</li>
        </ul>
      </div>

      <form className="profile-settings">
        <h3>
          <label htmlFor="first_name">First Name</label>{" "}
        </h3>
        <input
          type="text"
          name="first_name"
          value={updateFirstName}
          placeholder={userDetail?.first_name}
          onChange={(e) => setUpdateFirstName(e.target.value)}
        ></input>
        <h3>
          <label htmlFor="last_name">Last Name</label>
        </h3>
        <input
          type="text"
          name="last_name"
          value={updateLastName}
          placeholder={userDetail?.last_name}
          onChange={(e) => setUpdateLastName(e.target.value)}
        ></input>
        <h3>
          <label htmlFor="email">Email</label>
        </h3>
        <input
          type="text"
          name="email"
          value={updateEmail}
          placeholder={userDetail?.email}
          onChange={(e) => setUpdateEmail(e.target.value)}
        ></input>
        <h3>
          <label htmlFor="preferences">Dietary Preferences</label>
        </h3>
        <label htmlFor="Vegan">Vegan</label>
        <input
          type="checkbox"
          name="Vegan"
          checked={isVegan}
          onChange={(e) => setIsVegan(e.target.checked)}
        />
        <label htmlFor="vegetarian">Vegetarian</label>
        <input
          type="checkbox"
          name="vegetarian"
          checked={isVegetarian}
          onChange={(e) => setIsVegetarian(e.target.checked)}
        />
        <label htmlFor="pescatarian">Pescatarian</label>
        <input
          type="checkbox"
          name="pescatarian"
          checked={isPescatarian}
          onChange={(e) => setIsPescatarian(e.target.checked)}
        />

        <button className="update-user" onClick={handleUpdate}>
          Update
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
