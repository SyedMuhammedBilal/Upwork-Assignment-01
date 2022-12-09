import { useState, useEffect } from "react";
import "./user.css";

function UserBox() {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      {userData?.map((user: any) => {
        return (
          <div className="userBox">
            <img
              alt="user"
              width={230}
              className="userimg"
              height="100%"
              src={`https://avatars.dicebear.com/v2/avataaars/${user?.name}.svg?options[mood][]=happy`}
            />
            <div className="userDetailBox">
              <p> {user?.name}</p>
              <div className="userDetail">
                <h4>Email:</h4>
                <p> {user?.email}</p>
              </div>
              <div className="userDetail">
                <h4>Phone</h4>
                <p> {user?.phone}</p>
              </div>
              <div className="userDetail">
                <h4>Company</h4>
                <p> {user?.company?.name}</p>
              </div>
              <div className="userDetail">
                <h4>Website</h4>
                <p> {user?.website}</p>
              </div>
              <div className="userDetail">
                <h4>Address</h4>
                <p>
                  {user?.address?.street}, {user?.address?.suite},{" "}
                  {user?.address?.city}, {user?.address?.zipcode}{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserBox;
