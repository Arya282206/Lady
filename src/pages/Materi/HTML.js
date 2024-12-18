import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Perbaikan impor
import { SvgIcon } from "../../common/SvgIcon";
import "./introduction.css";

const HTML = () => {
  const accordionData = [
    {
      title: "Lessons 1",
      children: [
        {
            title: "Learn HTML by Building a Cat Photo App",
            content: (
              <>
                <p>
                HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.
                </p>
                <br></br>
                <p>
                In this course, you'll learn the most common HTML tags by building your own cat photo app.
                </p>
                <button className="start-button">Start project</button>
                <div className="grid">
                  {Array.from({ length: 71 }, (_, i) => i + 1).map((number) => (
                    <div key={number} className="grid-item">
                      {number}
                    </div>
                  ))}
                </div>
              </>
            ),
          },
        {
          title: "Learn Basic CSS by Building a Cafe Menu",
      content: (
        <>
          <p>
          CSS tells the browser how to display your webpage. You can use CSS to set the color, font, size, and other aspects of HTML elements.
          </p>
          <br></br>
          <p>
          In this course, you'll learn CSS by designing a menu page for a cafe webpage.
          </p>
          <button className="start-button">Start project</button>
          <div className="grid">
            {Array.from({ length: 91 }, (_, i) => i + 1).map((number) => (
              <div key={number} className="grid-item">
                {number}
              </div>
            ))}
          </div>
        </>
      ),
    },
        {
          title: "Learn CSS Colors by Building a Set of Colored Markers",
      content: (
        <>
          <p>
          Selecting the correct colors for your webpage can greatly improve the aesthetic appeal to your readers.
          </p>
          <br></br>
          <p>
          In this course, you'll build a set of colored markers. You'll learn different ways to set color values and how to pair colors with each other.
          </p>
          <button className="start-button">Start project</button>
          <div className="grid">
            {Array.from({ length: 94 }, (_, i) => i + 1).map((number) => (
              <div key={number} className="grid-item">
                {number}
              </div>
            ))}
          </div>
        </>
      ),
    },
        {
          title: "Learn HTML Forms by Building a Registration From",
      content: (
        <>
          <p>
          You can use HTML forms to collect information from people who visit your webpage.
          </p>
          <br></br>
          <p>
          In this course, you'll learn HTML forms by building a signup page. You'll learn how to control what types of data people can type into your form, and some new CSS tools for styling your page.
          </p>
          <button className="start-button">Start project</button>
          <div className="grid">
            {Array.from({ length: 65 }, (_, i) => i + 1).map((number) => (
              <div key={number} className="grid-item">
                {number}
              </div>
            ))}
          </div>
        </>
      ),
    },
        {
          title: "Certification Project",
      content: (
        <>
          <h6>
            Survey Form
          </h6>
          <p>
            This is one of the required projects to earn your certification.
          </p>
          <br></br>
          <p>
            For this project, you will build a survey form to collect data from your users.
          </p>
          <button className="start-button">Start project</button>
        </>
      ),
    },
  ],
    },
    {
      title: "Lessons 2",
      children: [
        {
          title: "Learn the CSS Box Model by Building a Rothko Pinting",
          content: (
            <>
              <p>
              Every HTML element is its own box – with its own spacing and a border. This is called the Box Model.
              </p>
              <br></br>
              <p>
              In this course, you'll use CSS and the Box Model to create your own Rothko-style rectangular art pieces.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 45 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn CSS Flexbox by Building a Photo Gallery",
          content: (
            <>
              <p>
              Flexbox helps you design your webpage so that it looks good on any screen size.
              </p>
              <br></br>
              <p>
              In this course, you'll use Flexbox to build a responsive photo gallery webpage.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 24 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Typography by Building a Nutrition Label",
          content: (
            <>
              <p>
              Typography is the art of styling your text to be easily readable and suit its purpose.
              </p>
              <br></br>
              <p>
              In this course, you'll use typography to build a nutrition label webpage. You'll learn how to style text, adjust line height, and position your text using CSS.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 68 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Accessibility by Building a Quiz",
          content: (
            <>
              <p>
              Accessibility is making your webpage easy for all people to use – even people with disabilities.
              </p>
              <br></br>
              <p>
              In this course, you'll build a quiz webpage. You'll learn accessibility tools such as keyboard shortcuts, ARIA attributes, and design best practices.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 67 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Certification Project",
      content: (
        <>
          <h6>
            Tribute Page
          </h6>
          <p>
            This is one of the required projects to earn your certification.
          </p>
          <br></br>
          <p>
            For this project, you will build atribute page for a subject of your choosing, fictional o real.
          </p>
          <button className="start-button">Start project</button>
        </>
      ),
    },
      ],
    },
    {
      title: "Lessons 3",
      children: [
        {
          title: "Learn More About CSS Pseudo Selectors by Building A Balance Sheet",
          content: (
            <>
              <p>
              You can use CSS pseudo selectors to change specific HTML elements.
              </p>
              <br></br>
              <p>
              In this course, you'll build a balance sheet using pseudo selectors. You'll learn how to change the style of an element when you hover over it with your mouse, and trigger other events on your webpage.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 66 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Intermediate CSS by Building a Cat Painting",
          content: (
            <>
              <p>
              Mastering CSS positioning is essential for creating visually appealing and responsive web layouts
              </p>
              <br></br>
              <p>
              In this course, you will build a cat painting. You'll learn about how to work with absolute positioning, the z-index property, and the transform property.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 82 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Responsive Web Design by Building a Piano",
          content: (
            <>
              <p>
              Responsive Design tells your webpage how it should look on different-sized screens.
              </p>
              <br></br>
              <p>
              In this course, you'll use CSS and Responsive Design to code a piano. You'll also learn more about media queries and pseudo selectors.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 33 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Certification Project",
      content: (
        <>
          <h6>
            Technical Documentation Page
          </h6>
          <p>
            This is one of the required projects to earn your certification.
          </p>
          <br></br>
          <p>
            For this project, you will build a technical documentation page to server as instruction or reference for a topic.
          </p>
          <button className="start-button">Start project</button>
        </>
      ),
    },
      ],
    },
    {
      title: "Lessons 4",
      children: [
        {
          title: "Learn CSS Variables by Building a City Skyline",
          content: (
            <>
              <p>
              CSS variables help you organize your styles and reuse them.
              </p>
              <br></br>
              <p>
              In this course, you'll build a city skyline. You'll learn how to configure CSS variables so you can reuse them whenever you want.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 118 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn CSS Grid by Building a Magazine",
          content: (
            <>
              <p>
              CSS Grid gives you control over the rows and columns of your webpage design.
              </p>
              <br></br>
              <p>
              In this course, you'll build a magazine article. You'll learn how to use CSS Grid, including concepts like grid rows and grid columns.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 80 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Certification Project",
      content: (
        <>
          <h6>
            Product Landing Page
          </h6>
          <p>
            This is one of the required projects to earn your certification.
          </p>
          <br></br>
          <p>
            For this project, you will build a product landing page to market a product of your choice.
          </p>
          <button className="start-button">Start project</button>
        </>
      ),
    },
      ],
    },
    {
      title: "Lessons 5",
      children: [
        {
          title: "Learn CSS Animation by Building a Ferris Wheel",
          content: (
            <>
              <p>
              You can use CSS animation to draw attention to specific sections of your webpage and make it more engaging.
              </p>
              <br></br>
              <p>
              In this course, you'll build a Ferris wheel. You'll learn how to use CSS to animate elements, transform them, and adjust their speed.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 29 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn CSS Transforms by Building a Penguin",
          content: (
            <>
              <p>
              You can transform HTML elements to create appealing designs that draw your reader's eye. You can use transforms to rotate elements, scale them, and more.
              </p>
              <br></br>
              <p>
              In this course, you'll build a penguin. You'll use CSS transforms to position and resize the parts of your penguin, create a background, and animate your work.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 104 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Certification Project",
      content: (
        <>
          <h6>
            Personal Portofolio webpage
          </h6>
          <p>
            This is one of the required projects to earn your certification.
          </p>
          <br></br>
          <p>
            For this project, you will build you own personal portofolio page.
          </p>
          <button className="start-button">Start project</button>
        </>
      ),
    },
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Responsive Web Design</h1>
      <div className="icon-container">
      <SvgIcon
        src="responsive.svg"
        aria-label="homepage"
        width="100px"
        height="100px"
      />
      </div>
      <p className="description">
      In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.
      </p>
      <p className="description">
      First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a quiz site.
      </p>
      <p className="description">
      Finally, you'll learn how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.
      </p>
      <div className="note">
        <p>
          <strong>Note:</strong> Some browser extensions, such as ad-blockers and dark mode extensions can interfere with the tests. If you face issues, we recommend disabling extensions that modify the content or layout of pages, while taking the course.
        </p>
      </div>
      <br></br>
      <br></br>
      <h6 className="title">COURSES</h6>
      <Accordion data={accordionData} />
    </div>
  );
};

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="accordion-icon">{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
            {item.content && <div>{item.content}</div>}
            {item.children && <Accordion data={item.children} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HTML;
