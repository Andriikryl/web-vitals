import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import clsx from "clsx";

interface BoxBlock {
  amount: number;
  type?: string;
}

export default function Screens() {
  return (
    <section className={style.screens__sections}>
      <Container>
        <h4 className={style.screens__title}>Screens</h4>
        <p className={style.screens__description}>
          There are two different kinds of pixels: CSS pixels and device pixels.
          A single CSS pixel may correspond directly to a single device pixel,
          or may be backed by multiple device pixels. What is the point? Well,
          the more device pixels there are, the finer the detail of the
          displayed content on the screen.
        </p>
        <div className={style.flex__group}>
          <div className={style.inner__box}>
            <span className={style.pixls}>10 css pixls</span>
            <BoxBlock amount={48} />
            <span className={style.physical}>10 physical pixls</span>
          </div>
          <div className={style.inner__box}>
            <span className={style.pixls}>10 css pixls</span>
            <BoxBlock amount={250} type="little" />
            <span className={style.physical}>20 physical pixls</span>
          </div>
          <div className={style.inner__box}>
            <span className={style.pixls}>10 css pixls</span>
            <BoxBlock amount={400} type="smallest" />
            <span className={style.physical}>40 physical pixls</span>
          </div>
        </div>
        {/* <table className={style.tabel}>
          <caption className={style.caprion}>
            Features of different raster image formats
          </caption>
          <div className={style.tr}>
            <th className={style.types}>Format</th>
            <th className={style.types}>Transparency</th>
            <th className={style.types}>Animation</th>
            <th className={style.types}>Browser</th>
          </div>
          <tr className={style.tr}>
            <td className={style.answer} data-cell="Format">
              PNG
            </td>
            <td className={style.answer} data-cell="Transparency">
              Yes
            </td>
            <td className={style.answer} data-cell="Animation">
              No
            </td>
            <td className={style.answer} data-cell="Browser">
              All
            </td>
          </tr>
          <tr className={style.tr}>
            <td className={style.answer} data-cell="Format">
              JPEG
            </td>
            <td className={style.answer} data-cell="Transparency">
              No
            </td>
            <td className={style.answer} data-cell="Animation">
              No
            </td>
            <td className={style.answer} data-cell="Browser">
              All
            </td>
          </tr>
          <tr className={style.tr}>
            <td className={style.answer} data-cell="Format">
              WebP
            </td>
            <td className={style.answer} data-cell="Transparency">
              Yes
            </td>
            <td className={style.answer} data-cell="Animation">
              Yes
            </td>
            <td className={style.answer} data-cell="Browser">
              All modern browsers. See Can I use?
            </td>
          </tr>
          <tr className={style.tr}>
            <td className={style.answer} data-cell="Format">
              AVIF
            </td>
            <td className={style.answer} data-cell="Transparency">
              Yes
            </td>
            <td className={style.answer} data-cell="Animation">
              Yes
            </td>
            <td className={style.answer} data-cell="Browser">
              No. See Can I use?
            </td>
          </tr>
        </table> */}
      </Container>
    </section>
  );
}

function BoxBlock({ amount, type }: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(
      <div
        className={clsx(
          style.block,
          type === "little" && style.little__block,
          type === "smallest" && style.smallest__block
        )}
      ></div>
    );
  }
  return <div className={style.blocks__box}>{blocks}</div>;
}
