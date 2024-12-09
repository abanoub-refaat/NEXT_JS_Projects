import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/*
 * Caching is storing data somewhere that is faster to access.
 * Revalidate is how often the data should be re-fetched
 * We can set {chache: "no-store"} to disable caching or set {next: {revalidate: 10}} to revalidate every 10 seconds
 * inside the fetch function.
 */
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  /*
   * Rendering can happend on the client side and the server side
   * The client side rendering is faster and more efficient
   */
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
