import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { visible, toggle, setVisible } = useTheme();
  const { ref, inView, entry } = useInView();


  useEffect(() => {
    console.log("switch");
    console.log(inView);
    if (inView) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [inView])

  return (
    <div className="flex flex-col justify-center">
      <div ref={ref}>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div className="w-full h-screen bg-red-200" >hello</div>
    </div>
  )
}
