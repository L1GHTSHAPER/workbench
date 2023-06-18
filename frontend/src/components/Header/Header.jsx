import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import globalstyles from "../../assets/styles/global.css";
import Container from "@mui/material/Container";

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div >workbench</div>
          </a>
          <a href="/">
            <Button className={styles.active} variant="contained">Тикеты</Button>
          </a>
          <a href="#requests">
            <Button className={styles.nonactive} variant="contained">Заявки</Button>
          </a>
          <a href="#monitoring">
            <Button className={styles.nonactive} variant="contained">Мониторинг</Button>
          </a>
          <a href="clients">
            <Button className={styles.nonactive} variant="contained">Клиенты</Button>
          </a>

          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/tickets/create">
                  <Button variant="contained">Создать тикет</Button>
                </a>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Войти</Button>
                </a>
                {/* <a href="/register">
                  <Button variant="contained">Зарегистрироваться</Button>
                </a> */}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

// function Header() {
//   return (
//     <div className="header">
//       <ul>
//         <li className="logo">
//           <a href="/"><b>workbench</b></a>
//         </li>
//         <li>
//           <a href="tickets">
//             <b>Тикеты</b>
//           </a>
//         </li>
//         <li>
//           <a href="requests">
//             <b>Заявки</b>
//           </a>
//         </li>
//         <li>
//           <a href="clients">
//             <b>Клиенты</b>
//           </a>
//         </li>
//         <li>
//           <a href="monitoring">
//             <b>Мониторинг</b>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Header;
