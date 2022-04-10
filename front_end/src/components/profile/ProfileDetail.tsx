import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../models/User";
import { getUsers } from "../../services/Users";


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
    <div>
      <h1>{userDetail?.first_name}    {userDetail?.last_name}</h1>
      <h3>First Name: {userDetail?.first_name}</h3>
      <h3>Last Name: {userDetail?.last_name}</h3>
      <h3>Email: {userDetail?.email}</h3>
      <h3>Password: ******* </h3>
      
    </div>
  );
}
