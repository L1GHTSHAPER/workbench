import styles from "./Home.module.css";
import globalStyles from "../../../assets/styles/global.css";

import { useState, useEffect } from "react";

import TicketItem from "./ticket-item/TicketItem";
import CreateTicketForm from "./create-ticket-form/CreateTicketForm";
import { TicketService } from "../../../services/ticket.service";
import { Header } from "../../Header/Header";

function Home() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await TicketService.getAll();

      console.log(data);
      setTickets(data);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <Header />
      <CreateTicketForm setTickets={setTickets} />
      <div>
        {tickets.length ? (
          
          tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))
        ) : (
          <p className="noTickets">There are no tickets</p>
        )}
      </div>
    </div>
  );
}

export default Home;
