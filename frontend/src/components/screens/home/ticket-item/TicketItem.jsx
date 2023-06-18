import styles from "../Home.module.css";
import { Link } from "react-router-dom";



function TicketItem({ ticket }) {
  return (
    <div key={ticket._id} className={styles.item}>
      <Link to={`/tickets/${ticket._id}`} className="btn">
        <ul className={styles.itemList}>
          <li className={styles.title}>
            <b>{ticket.title}</b>
            
          </li>
          <li className={styles.description}>{ticket.description}</li>
          <li className={styles.status}>{ticket.status}</li>
          <i>{ticket._id}</i>
        </ul>
      </Link>
    </div>
  );
}
export default TicketItem;
