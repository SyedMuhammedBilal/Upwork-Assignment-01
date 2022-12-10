import { Spin } from "antd";
import { useState, useEffect } from "react";
import "./user.css";

function UserBox() {
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <Spin />
        </div>
      ) : (
        <div className="container">
          {userData?.map((user: any) => {
            return (
              <div className="user-box-container">
                <div className="row">
                  <div className="col-auto">
                    <img
                      alt="user"
                      width={230}
                      className="userimg"
                      height="100%"
                      src={`https://avatars.dicebear.com/v2/avataaars/${user?.name}.svg?options[mood][]=happy`}
                    />
                  </div>
                  <div className="col">
                    <h2> {user?.name}</h2>
                    <div className="content-wrapper">
                      <strong>Email:</strong>
                      <p>{user?.email}</p>
                    </div>
                    <div className="content-wrapper">
                      <strong>Phone:</strong>
                      <p>{user?.phone}</p>
                    </div>
                    <div className="content-wrapper">
                      <strong>Company:</strong>
                      <p>{user?.company?.name}</p>
                    </div>
                    <div className="content-wrapper">
                      <strong>Website:</strong>
                      <p>{user?.website}</p>
                    </div>
                    <div className="content-wrapper">
                      <strong>Address:</strong>
                      <p>
                        {user?.address?.street}, {user?.address?.suite},{" "}
                        {user?.address?.city}, {user?.address?.zipcode}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserBox;
