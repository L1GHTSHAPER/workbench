import { Header } from "../../Header/Header";
import { Link } from "react-router-dom";
import globalStyles from "../../../assets/styles/global.css";
import headerStyles from "../../Header/Header.module.scss";
import styles from "./Clients.module.scss"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";



export const Clients = () => {
  return (
    <>
      <Header />
      <input type="text" placeholder="Поиск"></input>
      <Paper classes={{root: styles.root}}>
        <div>Иванов Иван Иванович</div>
        <div>id: 324524</div>
        <div>Вебмастер: 344321</div>
        <div>Тариф: Meteor</div>
        <div>Дата регистрации: 21.05.2023</div>
        <div>Abuse: </div>
        <div>Баланс</div>

      </Paper>
    </>
  );
};
