import React from 'react'
import style from "./style.module.css"
import { Container } from '../container/Container'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <span className={style.footer__title}>Footer</span>
      </Container>
    </footer>
  )
}
