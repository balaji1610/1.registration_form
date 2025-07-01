import { useEffect, useState } from "react";
export default function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchApi = async () => {
    try {
      const response = await fetch("http://localhost:5000");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setIsLoading(!isLoading);
      setUsers(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          class="spinner-border text-primary"
          role="status"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Full Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">password</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const {
                id,
                fullName,
                userName,
                email,
                phoneNumber,
                password,
                gender,
              } = user;
              return (
                <tr key={index}>
                  <th scope="row">{id}</th>
                  <td>{fullName}</td>
                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>{password}</td>
                  <td>{gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
