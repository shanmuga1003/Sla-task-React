import { useState, useEffect, useCallback, useMemo } from "react";

function Task_41() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async (search = "") => {
    setLoading(true);

    const controller = new AbortController();

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          signal: controller.signal,
        }
      );

      const data = await res.json();

      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setUsers(filteredUsers);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch Aborted");
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }

    return () => {
      controller.abort();
      console.log("Cleanup Ran");
    };
  }, []);

  useEffect(() => {
    const cleanup = fetchUsers(filter);

    return () => {
      cleanup.then((fn) => fn && fn());
    };
  }, [filter, fetchUsers]);

  const averageNameLength = useMemo(() => {
    console.log("Calculating Average...");

    if (users.length === 0) return 0;

    let total = users.reduce((sum, user) => {

      for (let i = 0; i < 1000000; i++) {}

      return sum + user.name.length;
    }, 0);

    return (total / users.length).toFixed(2);
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search User"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button
        onClick={() => fetchUsers(filter)}
        style={{ marginLeft: "10px" }}
      >
        Refresh
      </button>

      <br />
      <br />

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>

          <h3>Average Name Length: {averageNameLength}</h3>
        </>
      )}
    </div>
  );
}

export default Task_41;