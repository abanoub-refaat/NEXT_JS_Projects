import React from "react";
import UserTable from "./UserTable";
/*
 * Caching is storing data somewhere that is faster to access.
 * Revalidate is how often the data should be re-fetched
 * We can set {chache: "no-store"} to disable caching or set {next: {revalidate: 10}} to revalidate every 10 seconds
 * inside the fetch function.
 */

const UserPage = async () => {
  /*
   * Rendering can happend on the client side and the server side
   * The client side rendering is faster and more efficient
   */
  return (
    <>
      <h1>Users</h1>
      <UserTable />
    </>
  );
};

export default UserPage;
