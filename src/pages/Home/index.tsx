import { lazy, useEffect } from "react";
import IntroContent from "../../content/IntroContent.json";
import ProductContent from "../../content/ProductContent.json";
import Card from "../../components/Card/Card.js";
import LogoHTML from "../../components/Card/HTML.png";
import LogoJS from "../../components/Card/JavaScript.png";
import LogoReact from "../../components/Card/React.png";


const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  useEffect(() => {
    // Cek apakah ada target scroll dari localStorage
    const scrollTarget = localStorage.getItem('scrollTarget');
    
    if (scrollTarget) {
      // Cari elemen berdasarkan ID
      const element = document.getElementById(scrollTarget);
      
      if (element) {
        // Scroll ke elemen
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
      
      // Hapus item dari localStorage setelah digunakan
      localStorage.removeItem('scrollTarget');
    }
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="developer.svg"
        id="intro"
      />
      
      {/* Bagian Card */}
      <div 
        style={{ 
          display: "flex", 
          gap: "16px", 
          justifyContent: "center", 
          padding: "20px" 
        }} 
        id="Course"
      >
        <Card
          image={LogoHTML}
          title="Responsive Web Design Certification"
          description="Pelajari dasar-dasar HTML."
          link="/html"
          width="100%"
          height="200px"
        />

        <Card
          image={LogoJS}
          title="JavaScript Algorithms Certification"
          description="Pelajari dasar-dasar JavaScript."
          link="/javascript"
          width="100%"
          height="200px"
        />

        <Card
          image={LogoReact}
          title="Front End Development Libraries Certification"
          description="Pelajari dasar-dasar React."
          link="/react"
          width="100%"
          height="200px"
        />
      </div>

      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="Support"
      />
    </Container>
  );
};

export default Home;