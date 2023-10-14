import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import clsx from "clsx";

export default function LongTasks() {
  return (
    <section className={style.tasks}>
      <Container>
        <h4 className={style.tasks__title}>Optimize long tasks</h4>
        <p className={style.desciprion}>
          A task is any discrete piece of work that the browser does.
        </p>
        <div className={style.box}>
          <span className={style.task__description}>Before</span>
          <div className={style.task__block}>
            <span>Task</span>
          </div>
        </div>
        <p className={style.desciprion}>
          You need to break up tasks. This means taking a single long task and
          dividing it into smaller tasks that take less time to run
          individually.
        </p>
        <div className={style.box}>
          <span className={style.task__description}>After</span>
          <div className={style.box__small}>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
          </div>
        </div>
        <p className={style.desciprion}>
          This matters because when tasks are broken up, the browser has more
          opportunities to respond to higher-priority work—and that includes
          user interactions.
        </p>
        <div className={style.input__box}>
          <div className={style.top__description}>
            <span className={style.resived}>input resived</span>
            <span className={style.task__description}>Before</span>
          </div>
          <div className={style.flex__group}>
            <div className={style.task__block}>
              <span>Task</span>
            </div>
            <div className={style.event}>
              <span>event</span>
            </div>
          </div>
          <span className={style.interaction}>
            event handler runs for interaction
          </span>
        </div>
        <div className={style.box}>
          <div className={style.top__description}>
            <span className={clsx(style.resived, style.resived__after)}>
              input resived
            </span>
            <span className={style.task__description}>After</span>
          </div>
          <div className={style.box__small}>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
            <div className={style.event}>
              <span>event</span>
            </div>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
            <div className={style.task__small}>
              <span>Task</span>
            </div>
          </div>
          <span className={clsx(style.interaction, style.after__interaction)}>
            event handler runs for interaction
          </span>
        </div>
      </Container>
    </section>
  );
}
