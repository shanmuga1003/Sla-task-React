import { Link } from "react-router-dom";

function Users() {

  const users = [
    { id: 1, name: "Shanmuga" },
    { id: 2, name: "Sadham" },
    { id: 3, name: "Venakt" },
    { id: 4, name: "Sridhar" }
  ];

  return (
    <div>
      <h1>Users Page</h1>

      {
        users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}/Uname/${user.name}`}>
              {user.name}
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Users;