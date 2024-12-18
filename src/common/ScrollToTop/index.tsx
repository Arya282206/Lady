import React, { useCallback, useEffect, useState, useRef } from "react";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  const checkScrollTop = useCallback(() => {
    const offsetFromTop = window.scrollY;

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  const scrollUp = () => {
    if (introRef.current) {
      introRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      // Fallback ke scroll top layar
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.warn("Ref intro tidak ditemukan. Scroll ke atas layar.");
    }
  };

  return (
    <>
      {/* Tambahkan ref ke elemen yang ingin di-scroll */}
      <div ref={introRef} id="intro">
        {/* Konten intro Anda */}
      </div>
      
      <ScrollUpContainer onClick={scrollUp} show={showScroll}>
        <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
      </ScrollUpContainer>
    </>
  );
};

export default ScrollToTop;