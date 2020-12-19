import React, { useState } from "react";

export async function getServerSideProps() {
  const url = "https://jobs-api-q6mgg.ondigitalocean.app/api/users";
  const res = await fetch(url);
  const { data } = await res.json();

  return { props: { users: data } };
}

export default function Users(props) {
  const [state, setState] = useState(0);

  return (
    <div>
      count: {state}
      <button type="button" onClick={() => setState(state + 1)}>
        +1
      </button>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
