import React, { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import "./introduction.css";

const JavaScript = () => {
  const accordionData = [
    {
      title: "Lessons 1",
      children: [
        {
          title: "Learn Introductory JavaScript by Building a Pyramid Generator",
          content: (
            <>
              <p>
                JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS.
              </p>
              <br></br>
              <p>
                In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Pyramid Generator.
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
          title: "Review JavaScript Fundamentals by Building a Gradebook App",
          content: (
            <>
              <p>
                In this mini project, you will get to review JavaScript fundamentals like functions, variables, conditionals and more by building a gradebook app.
              </p>
              <br></br>
              <p>
                This will give you an opportunity to solve small problems and get a better understanding of the basics.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 4 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Basic JavaScript by Building a Role Playing Game",
          content: (
            <>
              <p>
              JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.
                </p>
                <br></br>
              <p>
              In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with arrays, strings, objects, functions, loops, if/else statements, and more.
                </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 173 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Basic Debugging bt Building a Random Background Color Changer",
          content: (
            <>
              <p>
              Debugging is the process of going through your code, finding any issues, and fixing them.
                </p>
                <br></br>
              <p>In this project, you will help CamperBot build a random background color changer and help them find and fix errors.
                </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn From Validation by Building a Calorie Counter",
          content: (
            <>
              <p>
              Sometimes when you're coding a web application, you'll need to be able to accept input from a user. In this calorie counter project, you'll learn how to validate user input, perform calculations based on that input, and dynamically update your interface to display the results.
                </p>
                <br></br>
              <p>
              In this practice project, you'll learn basic regular expressions, template literals, the addEventListener() method, and more.
                </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 97 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Review DOM Manipulation by Building a Rock, Paper, Scissors Game",
          content: (
            <>
              <p>
              In the previous projects you learned how to work with basic DOM manipulation. Now it is time to review what you have learned by building a Rock, Paper, Scissors game.
              </p>
              <br></br>
              <p>
              In this mini project, you will review conditionals, functions, getElementById, and more. This project will give you an opportunity to solve small problems and get a better understanding of the basics.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 6 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Basic String and Array Methods by Building a Music Player",
          content: (
            <>
              <p>
              Now let's learn some essential string and array methods like the find(), forEach(), map(), and join(). These methods are crucial for developing dynamic web applications.
                </p>
                <br></br>
              <p>
              In this project, you'll code a basic MP3 player using HTML, CSS, and JavaScript. The project covers fundamental concepts such as handling audio playback, managing a playlist, implementing play, pause, next, previous, and shuffle functionalities. You'll even learn how to dynamically update your user interface based on the current song.
                </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 99 }, (_, i) => i + 1).map((number) => (
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
                Build a Palindrome Checker Project
              </h6>
              <p>
                This is one of the required projects to earn your certification.
              </p>
              <br></br>
              <p>
                For this projects, you'll build an application that checks whether a given word is a palindrome.
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
          title: "Learn the Date Object by Building a Date Formatter",
          content: (
            <>
              <p>
              Working with dates in JavaScript can be challenging. You have to navigate various methods, formats, and time zones. In this project, you'll learn how to work with the JavaScript Date object, including its methods and properties. You'll also learn how to correctly format dates.
              </p>
              <br></br>
              <p>
              This project will cover concepts such as the getDate(), getMonth(), and getFullYear() methods.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 27 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Modern JavaScript Methods by Building Football Team Cards",
          content: (
            <>
              <p>
              One common aspect of building web applications: processing datasets, and then outputting information to the screen. In this sports team cards project, you'll learn how to work with DOM manipulation, object destructuring, event handling, and data filtering.
              </p>
              <br></br>
              <p>
              This project will cover concepts like, default parameters, Object.freeze(), and reinforce your knowledge of the switch statement and map() method.
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
          title: "Learn local Storage by Building a Todo App",
          content: (
            <>
              <p>
              Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.
              </p>
              <br></br>
              <p>
              In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.
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
          title: "Learn Recursion by Building a Decimal to Binary Converter ",
          content: (
            <>
              <p>
              Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve.
              </p>
              <br></br>
              <p>
              In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 108 }, (_, i) => i + 1).map((number) => (
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
                Build a Roman Numeral Converter Project
              </h6>
              <p>
                This is one of the required projects to claim your certification.
              </p>
              <br></br>
              <p>
                For this project, you'll build an application taht converts integers to Roman numerals.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 27 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Lessons 3",
      children: [
        {
          title: "Learn Regular Expressions by Building a Spam Filter",
          content: (
            <>
              <p>
              Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are powerful, but can be difficult to understand because they use so many special characters.
              </p>
              <br></br>
              <p>
              In this spam filter project, you'll learn about capture groups, positive lookaheads, negative lookaheads, and other techniques to match any text you want.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 36 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Basic Algorithmic Thinking by Building a Number Sorter",
          content: (
            <>
              <p>
              In computer science, there are fundamental sorting algorithms that all developers should learn. In this number sorter project, you'll learn how to implement and visualize different sorting algorithms like bubble sort, selection sort, and insertion sort – all with JavaScript.
              </p>
              <br></br>
              <p>
              This project will help you understand the fundamental concepts behind these algorithms, and how you can apply them to sort numerical data in web applications.
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
          title: "Learn ADvanced Array Methods by Building a Statistic Calculator",
          content: (
            <>
              <p>
              As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter().
              </p>
              <br></br>
              <p>
              In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 59 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Functional Programing by Building a Spreadsheet",
          content: (
            <>
              <p>
              Functional Programming is a popular approach to software development. In Functional Programming, developers organize code into smaller functions, then combine those functions to build complex programs.
              </p>
              <br></br>
              <p>
              In this spreadsheet application project, you'll learn about parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces. You'll learn how to dynamically update the page based on user input.
              </p>
              <br></br>
              <p>
              This project will cover concepts like the map(), find(), and includes() methods and the parseInt() function.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 105 }, (_, i) => i + 1).map((number) => (
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
                Build a Telephone Number Validator Project
              </h6>
              <p>
                This is one of the required projects to claim your certification.
              </p>
              <br></br>
              <p>
                For this project, you'll build an application that checks if a anumber is a valid United States phone number.
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
          title: "Learn Basic OOP by Building a Shopping Cart",
          content: (
            <>
              <p>
              OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, developers use objects and classes to structure their code.
              </p>
              <br></br>
              <p>
              In this shopping cart project, you'll learn how to define classes and use them. You'll create class instances and implement methods for data manipulation.
              </p>
              <br></br>
              <p>
              This project will cover concepts like the ternary operator, the spread operator, the this keyword, and more.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 60 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Learn Intermediate OPP by Building a Patformer Game",
          content: (
            <>
              <p>
              Coding a game is a great way to grasp fundamental programming principles, while also creating an interactive gaming experience.
              </p>
              <br></br>
              <p>
              In this platformer game project, you'll continue to learn about classes, objects, inheritance, and encapsulation. You'll also learn how to design and organize game elements efficiently and gain insights into problem-solving and code reusability.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 117 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Review Algorithmic Thinking by Building a Dice Game",
          content: (
            <>
              <p>
              Algorithmic thinking involves the ability to break down complex problems into a sequence of well-defined, step-by-step instructions.
              </p>
              <br></br>
              <p>
              In this Dice game project, you’ll learn how to manage game state, implement game logic for rolling dice, keeping score, and applying rules for various combinations.
              </p>
              <br></br>
              <p>
              This project covers concepts such as event handling, array manipulation, conditional logic, and updating the user interface dynamically based on game state.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 14 }, (_, i) => i + 1).map((number) => (
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
                Build a Cash Register Project
              </h6>
              <p>
                This is one of the required projects to earn your certification.
              </p>
              <br></br>
              <p>
                For this project, you'll build a acash register web app.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 105 }, (_, i) => i + 1).map((number) => (
                  <div key={number} className="grid-item">
                    {number}
                  </div>
                ))}
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Lessons 5",
      children: [
        {
          title: "Learn Fetch and Promises by Building an fCC Authors Page",
          content: (
            <>
              <p>
              One common aspect of web development is learning how to fetch data from an external API, then work with asynchronous JavaScript.
              </p>
              <br></br>
              <p>
              This freeCodeCamp authors page project will show you how to use the fetch method, then dynamically update the DOM to display the fetched data.
              </p>
              <br></br>
              <p>
              This project will also teach you how to paginate your data so you can load results in batches.
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
          title: "Learn Asynchronous Programming by Building an fCC Forum Leaderboard",
          content: (
            <>
              <p>
              JavaScript is an asynchronous programming language. And this project will help you gain proficiency in asynchronous concepts. You'll code your own freeCodeCamp forum leaderboard.
              </p>
              <br></br>
              <p>
              This project will cover the Fetch API, promises, Async/Await, and the try..catch statement.
              </p>
              <button className="start-button">Start project</button>
              <div className="grid">
                {Array.from({ length: 55 }, (_, i) => i + 1).map((number) => (
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
                Build a Pokemon Search App Project
              </h6>
              <p>
                This is one of the required projects to earn your certification.
              </p>
              <br></br>
              <p>
                For this project, you will build a Pokemmon search app.
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
      <h1 className="title">JavaScript Algorithms and Data Structures (Beta)</h1>
      <div className="icon-container">
        <SvgIcon
        src="javascript.svg"
        aria-label="homepage"
        width="100px"
        height="100px"
      />
      </div>
      <p className="description">
        Developers use HTML and CSS to control the content and styling of a page. And they use JavaScript to make that page interactive.
      </p>
      <p className="description">
        In this JavaScript Algorithm and Data Structures Certification, you'll learn JavaScript fundamentals.
      </p>
      <div className="note">
        <p>
          <strong>Note:</strong> Some browser extensions can interfere with the tests. If you face issues, disable extensions that modify page content.
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

export default JavaScript;
