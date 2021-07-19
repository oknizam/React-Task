import React, { useState } from "react";
import { data } from "../users-data";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();

  return (
    <>
      <div className="container">
        <div className="d-flex flex-row-reverse">
          <button
            className="btn btn-danger mt-2"
            onClick={() => {
              localStorage.removeItem("user");
              history.push("/");
            }}
          >
            Logout
          </button>
        </div>
        <h1>Employees</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {data.user.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
