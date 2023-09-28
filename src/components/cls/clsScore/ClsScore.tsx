import React from "react";
import style from "./style.module.css";
import clsx from "clsx";
export default function ClsScore() {
  return (
    <div className={style.score}>
      <h4 className={style.score__title}>Layout shift score</h4>
      <p className={style.score__form}>
        Layout shift score = impact fraction * distance fraction
      </p>
      <div className={style.impact__box}>
        <h5 className={style.score__title}>Impact fraction</h5>
        <div className={style.flex__group}>
          <div className={style.mobile}>
            <div className={style.header}>
              <span className={style.logo}>logo</span>
              <div className={style.burger}></div>
            </div>
            <div className={style.mobile__content}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                doloribus sapiente quo quas. Magni eum, qui nesciunt, voluptates
                temporibus accusamus maxime suscipit reiciendis saepe culpa
                possimus corporis sit nostrum. Nihil.
              </p>
            </div>
          </div>
          <div className={style.mobile}>
            <div className={style.header}>
              <span className={style.logo}>logo</span>
              <div className={style.burger}></div>
            </div>
            <div className={clsx(style.mobile__content, style.bottom)}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                doloribus sapiente quo quas. Magni eum, qui nesciunt, voluptates
                temporibus accusamus maxime suscipit reiciendis saepe culpa
                possimus corporis sit nostrum. Nihil.
              </p>
            </div>
          </div>
        </div>
        <p className={style.desciprion}>
          The impact fraction measures how unstable elements impact the viewport
          area between two frames.
        </p>
      </div>
      <div className={style.distance__box}>
        <h5 className={style.score__title}>Distance fraction</h5>
        <div className={style.flex__group}>
          <div className={style.mobile}>
            <div className={style.header}>
              <span className={style.logo}>logo</span>
              <div className={style.burger}></div>
            </div>
            <div className={style.mobile__content}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                doloribus sapiente quo quas. Magni eum, qui nesciunt, voluptates
                temporibus accusamus maxime suscipit reiciendis saepe culpa
                possimus corporis sit nostrum. Nihil.
              </p>
            </div>
          </div>
          <div className={style.mobile}>
            <div className={style.header}>
              <span className={style.logo}>logo</span>
              <div className={style.burger}></div>
            </div>
            <div className={clsx(style.mobile__content, style.bottom__two)}>
              <div className={style.arrow}></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                doloribus sapiente quo quas. Magni eum, qui nesciunt, voluptates
                temporibus accusamus maxime suscipit reiciendis saepe culpa
                possimus corporis sit nostrum. Nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className={style.desciprion}>
        In the example above, the largest viewport dimension is the height, and
        the unstable element has moved by 25% of the viewport height, which
        makes the distance fraction 0.25. <br />
        So, in this example the impact fraction is 0.75 and the distance
        fraction is 0.25, so the layout shift score is 0.75 * 0.25 = 0.1875.
      </p>
    </div>
  );
}
