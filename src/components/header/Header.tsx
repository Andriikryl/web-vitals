import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <span className={style.header__title}>Header</span>
      </Container>
    </header>
  );
}
