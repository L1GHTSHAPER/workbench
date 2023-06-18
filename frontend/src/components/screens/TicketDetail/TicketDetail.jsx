import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";
import axios from "axios";

import { TicketService } from "../../../services/ticket.service";
import TicketItem from "../home/ticket-item/TicketItem";
import { Header } from "../../Header/Header";

import Button from "@mui/material/Button";

const TicketDetail = () => {
  const AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY0MDQyNWJmYzhhOWVjNjEwOTFmOTIiLCJpYXQiOjE2ODQyNzYyNjEsImV4cCI6MTY4Njg2ODI2MX0.wRuL_E1tfgkIAr1KzwFSCnLRbBjd9nbxYGS-xJIbYRM";

  axios.defaults.baseURL = "http://37.220.85.199:4444";
  axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
   //const { id } = useParams();
   console.log(useParams());
  // const { _id } = useParams();
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  console.log(id);

  React.useEffect(() => {
    
    axios
      .get(`tickets/${id}`)
      .then((res) => {
        setTicket(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error getting tickets from server " + id);
      });
      
  }, [id]);

  if (!ticket?.description)
    return (
      <div>
        <Header />
        <p>Ticket not found</p>
        <Link to="/">Back</Link>
      </div>
    );

  return (
    <div>
      <Header />
      <Link to="/"><Button>Back</Button></Link>
      {/* <TicketItem id={ticket._id} title={ticket.title}></TicketItem> */}
      <TicketItem ticket={ticket} />
    </div>
  );

};

export default TicketDetail;