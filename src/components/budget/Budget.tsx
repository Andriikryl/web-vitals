import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
const budgetList = [
  "Maximum size of images",
  "Maximum number of web fonts",
  "Maximum size of scripts, including frameworks",
  "Total number of external resources, such as third-party scripts",
];
export default function Budget() {
  return (
    <section className={style.budget}>
      <Container>
        <h4 className={style.budget__title}>performance budget</h4>
        <ul className={style.budget__list}>
          {budgetList.map((item, index) => {
            return (
              <li key={index} className={style.list__item}>
                {item}
              </li>
            );
          })}
        </ul>
        <h4 className={style.render__title}>
          Optimized (progressive) rendering
        </h4>
        <div className={style.mobile__box}>
          <div>
            <span className={style.time}>0.0s</span>
            <div className={style.mobile}></div>
          </div>
          <div>
            <span className={style.time}>0.3s</span>
            <div className={style.mobile}>
              <div className={style.header}>
                <span className={style.logo}>logo</span>
                <div className={style.burger}></div>
              </div>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
          <div>
            <span className={style.time}>0.8</span>
            <div className={style.mobile}>
              <div className={style.header}>
                <span className={style.logo}>logo</span>
                <div className={style.burger}></div>
              </div>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <div className={style.item__box}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
              </div>
            </div>
          </div>
          <div>
            <span className={style.time}>1.2s</span>
            <div className={style.mobile}>
              <div className={style.header}>
                <span className={style.logo}>logo</span>
                <div className={style.burger}></div>
              </div>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <div className={style.item__box}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
              </div>
              <p className={style.mobile__text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                dolorem sit, rerum, voluptatum tenetur fuga laudantium quo
                veritatis commodi distinctio necessitatibus veniam dolores
                molestias quos nostrum aspernatur ad, dignissimos minima.
              </p>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <h4 className={style.Unrender__title}>Unoptimized rendering</h4>
          <div className={style.mobile__box}>
            <div>
              <span className={style.time}>0.0s</span>
              <div className={style.mobile}></div>
            </div>
            <div>
              <span className={style.time}>0.3s</span>
              <div className={style.mobile}></div>
            </div>
            <div>
              <span className={style.time}>0.8</span>
              <div className={style.mobile}></div>
            </div>
            <div>
              <span className={style.time}>1.2s</span>
              <div className={style.mobile}>
                <div className={style.header}>
                  <span className={style.logo}>logo</span>
                  <div className={style.burger}></div>
                </div>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
                <div className={style.item__box}>
                  <div className={style.item}></div>
                  <div className={style.item}></div>
                  <div className={style.item}></div>
                </div>
                <p className={style.mobile__text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam dolorem sit, rerum, voluptatum tenetur fuga laudantium
                  quo veritatis commodi distinctio necessitatibus veniam dolores
                  molestias quos nostrum aspernatur ad, dignissimos minima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
