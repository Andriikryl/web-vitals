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
import Prpl from "@/components/PRPL/Prpl";
import Toasty from "@/components/toasty/Toasty";

export default function Home() {
  return (
    <>
      <Hero />
      <Core />
      <Toasty text="“The most wasted of days is one without laughter.” – E.E. Cummings" />
      <Ttfb />
      <Cls />
      <Toasty text="“Make each day your masterpiece.” – John Wooden" />
      <Fid />
      <Inp />
      <Toasty text="“Happiness often sneaks in through a door you didn’t know you left open.” – John Barrymore" />
      <Budget />
      <Screens />
      <Toasty text="“Life changes very quickly, in a very positive way, if you let it.” – Lindsey Vonn" />
      <Speed />
      <LongTasks />
      <Toasty text="No pressure, no diamonds.” – Thomas Carlyle" />
      <Prpl />
      <Resources />
    </>
  );
}
