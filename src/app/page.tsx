import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Core from "@/components/core/Core";
import Resources from "@/components/resoursec/Resources";
import Ttfb from "@/components/ttfb/Ttfb";
import Cls from "@/components/cls/Cls";
import Fid from "@/components/fid/Fid";
import Inp from "@/components/inp/Inp";
import Budget from "@/components/budget/Budget";
import Screens from "@/components/screens/Screens";
import Speed from "@/components/speed/Speed";
import LongTasks from "@/components/longTasks/LongTasks";

export default function Home() {
  return (
    <>
      <Hero />
      <Core />
      <Ttfb />
      <Cls />
      <Fid />
      <Inp />
      <Budget />
      <Screens />
      <Speed />
      <LongTasks />
      <Resources />
    </>
  );
}
