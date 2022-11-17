import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PlayerProfile() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const result = await axios.get(`http://localhost:8080/player/${id}`);
    console.log(result.data);
    setPlayers(result.data);
  };

  const calculateAge = (dob) => {
    var birthday = new Date(dob);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <div className="bg-dark text-secondary text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Musketeers Premier League 2023
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="py-20">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">WhatsApp</th>
                <th scope="col">Role</th>
                <th scope="col">Bating</th>
                <th scope="col">Bowling</th>
                <th scope="col">Kit Size</th>
                <th scope="col">Payment Mode</th>
                <th scope="col">DOB</th>
                <th scope="col">Age</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.pId}>
                  <th scope="row">{player.pId}</th>
                  <td>{player.pName}</td>
                  <td>{player.pEmail}</td>
                  <td>{player.pEmail}</td>
                  <td>{player.pEmail}</td>
                  <td>{player.pRole}</td>
                  <td>{player.pBatting}</td>
                  <td>{player.pBowling}</td>
                  <td>{player.pKit}</td>
                  <td>{player.pPayment}</td>
                  <td>{player.pDob}</td>
                  <td>{calculateAge(player.pDob)}</td>
                  <td>
                    <img
                      src={
                        "https://drive.google.com/uc?export=view&id=" +
                        player.pImage
                      }
                      width="100px"
                      height="100px"
                      alt={player.pName}
                      className="img-fluid"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
