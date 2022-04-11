import "../../styles/profileDetail.css";

export function Update(){

    return(
        <form className="password-update">
            <h2>
          <label htmlFor="password">Enter new password</label>{" "}
        </h2>
        <input type="text" name="password" placeholder="************" ></input><br></br>
       <button type="submit">Update</button>
        </form>
    )
}