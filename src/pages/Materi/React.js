import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SvgIcon } from "../../common/SvgIcon";
import './React.css';

const ReactMateri = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const buttons = [
    {
      title: "Bootstrap",
      description:
        "Bootstrap is a front-end framework used to design responsive web pages and applications. It takes a mobile-first approach to web development, and includes pre-built CSS styles and classes, plus some JavaScript functionality.",
      children: [
        {
          title: "Use Responsive Design with Bootstrap Fluid Containers",
          path: "",
        },
        {
          title: "Make Images Mobile Responsive",
          path: "",
        },
        {
          title: "Center Text with Bootstrap",
          path: "",
        },
        {
          title: "Create a Bootstrap Button",
          path: "",
        },
        {
          title: "Create a Block Element Bootstrap Button",
          path: "",
        },
        {
          title: "Taste the Bootstrap Button Color Rainbow",
          path: "",
        },
        {
          title: "Call out Optional Actions with btn-info",
          path: "",
        },
        {
          title: "Warn Your Users of a Dangerous Action with btn-danger",
          path: "",
        },
        {
          title: "Use the Bootstrap Grid to Put Elements Side By Side",
          path: "",
        },
        {
          title: "Ditch Custom CSS for Bootstrap",
          path: "",
        },
        {
          title: "Use a span to Target Inline Elements",
          path: "",
        },
        {
          title: "Create a Custom Heading",
          path: "",
        },
        {
          title: "Add Font Awesome Icons to our Buttons",
          path: "",
        },
        {
          title: "Add Font Awesome Icons to all of our Buttons",
          path: "",
        },
        {
          title: "Responsively Style Radio Buttons",
          path: "",
        },
        {
          title: "Responsively Style Checkboxes",
          path: "",
        },
        {
          title: "Style Text Inputs as Form Controls",
          path: "",
        },
        {
          title: "Line up Form Elements Responsively with Bootstrap",
          path: "",
        },
        {
          title: "Create a Bootstrap Headline",
          path: "",
        },
        {
          title: "House our page within a Bootstrap container-fluid div",
          path: "",
        },
        {
          title: "Create a Bootstrap Row",
          path: "",
        },
        {
          title: "Split Your Bootstrap Row",
          path: "",
        },
        {
          title: "Create Bootstrap Wells",
          path: "",
        },
        {
          title: "Add Elements within Your Bootstrap Wells",
          path: "",
        },
        {
          title: "Apply the Default Bootstrap Button Style",
          path: "",
        },
        {
          title: "Create a Class to Targer with JQuery Selectors",
          path: "",
        },
        {
          title: "Add id Attributes to Bootstarp Elements",
          path: "",
        },
        {
          title: "Label Bootstrap Wells",
          path: "",
        },
        {
          title: "Give Each Elements a Unique id",
          path: "",
        },
        {
          title: "Label Bootstrap Buttons",
          path: "",
        },
        {
          title: "Use Comments to Clarify Code",
          path: "",
        },
      ],
    },
    {
      title: "JQuery",
      description:
        "",
      children: [
        {
          title: "Learn How Script Tags and Document Ready Work",
          path: "/",
        },
        {
          title: "Target HTML Elements with Selectors Using jQuery",
          path: "/",
        },
        {
          title: "Target Elements by Class Using jQuery",
          path: "/",
        },
        {
          title: "Target Elements by id Using jQuery",
          path: "/",
        },
        {
          title: "Delete your JQuery Function",
          path: "/",
        },
        {
          title: "Target the Same Element with Multiple jQuery Selectors",
          path: "/",
        },
        {
          title: "Remove Classes from an Element with jQuery",
          path: "/",
        },
        {
          title: "Change the CSS of an Element Using jQuery",
          path: "/",
        },
        {
          title: "Disable an Element Using jQuery",
          path: "",
        },
        {
          title: "Change Text Inside an Element Using jQuery",
          path: "/",
        },
        {
          title: "Remove an Element Using jQuery",
          path: "/",
        },
        {
          title: "Use appendTo to Move Elements with jQuery",
          path: "/",
        },
        {
          title: "Clone an Element Using jQuery",
          path: "/",
        },
        {
          title: "Target the Parent of an Element Using jQuery",
          path: "/",
        },
        {
          title: "Target the Children of an Element Using jQuery",
          path: "/",
        },
        {
          title: "Target a Specific Child of an Element Using jQuery",
          path: "/",
        },
        {
          title: "Target Even Elements Using jQuery",
          path: "/",
        },
        {
          title: "Use jQuery to Modify the Entire Page",
          path: "/",
        },
      ],
    },
    {
      title: "SASS",
      description:
        "",
      children: [
        {
          title: "Store Data with Sass Variables",
          path: "/",
        },
        {
          title: "Nest CSS with Sass",
          path: "/",
        },
        {
          title: "Create Reusable CSS with Mixins",
          path: "/",
        },
        {
          title: "Use @if and @else to Add Logic To Your Styles",
          path: "/",
        },
        {
          title: "Use @for to Create a Sass Loop",
          path: "/",
        },
        {
          title: "Use @each to Map Over Items in a List",
          path: "/",
        },
        {
          title: "Apply a Style Until a Condition is Met with @while",
          path: "/",
        },
        {
          title: "Split Your Styles into Smaller Chunks with Partials",
          path: "",
        },
        {
          title: "Extend One Set of CSS Styles to Another Element",
          path: "/",
        },
      ],
    },
    {
      title: "React",
      description:
        "React is a popular JavaScript library for building reusable, component-driven user interfaces for web pages or applications. React combines HTML with JavaScript functionality into its own markup language called JSX. React also makes it easy to manage the flow of data throughout the application. In this course, you'll learn how to create different React components, manage data in the form of state props, use different lifecycle methods like componentDidMount, and much more.",
      children: [
        {
          title: "Create a Simple JSX Element",
          path: "/",
        },
        {
          title: "Create a Complex JSX Element",
          path: "/",
        },
        {
          title: "Add Comments in JSX",
          path: "/",
        },
        {
          title: "Render HTML Elements to the DOM",
          path: "/",
        },
        {
          title: "Define an HTML Class in JSX",
          path: "/",
        },
        {
          title: "Learn About Self-Closing JSX Tags",
          path: "/",
        },
        {
          title: "Create a Stateless Functional Component",
          path: "/",
        },
        {
          title: "Create a React Component",
          path: "/",
        },
        {
          title: "Create a Component with Composition",
          path: "/",
        },
        {
          title: "Use React to Render Nested Components",
          path: "/",
        },
        {
          title: "Compose React Components",
          path: "/",
        },
        {
          title: "Render a Class Component to the DOM",
          path: "/",
        },
        {
          title: "Write a React Component from Scratch",
          path: "/",
        },
        {
          title: "Pass Props to a Stateless Functional Component",
          path: "/",
        },
        {
          title: "Pass an Array as Props",
          path: "/",
        },
        {
          title: "Use Default Props",
          path: "/",
        },
        {
          title: "Override Default Props",
          path: "/",
        },
        {
          title: "Use PropTypes to Define the Props You Expect",
          path: "/",
        },
        {
          title: "Access Props Using this.props",
          path: "/",
        },
        {
          title: "Review Using Props with Stateless Functional Components",
          path: "/",
        },
        {
          title: "Create a Stateful Component",
          path: "/",
        },
        {
          title: "Render State in the User Interface",
          path: "/",
        },
        {
          title: "Render State in the User Interface Another Way",
          path: "/",
        },
        {
          title: "Set State with this.setState",
          path: "/",
        },
        {
          title: "Bind 'this' to a Class Method",
          path: "/",
        },
        {
          title: "Use State to Toggle an Element",
          path: "/",
        },
        {
          title: "Write a Simple Counter",
          path: "/",
        },
        {
          title: "Create a Controlled Input",
          path: "/",
        },
        {
          title: "Create a Controlled Form",
          path: "/",
        },
        {
          title: "Pass State as Props to Child Components",
          path: "/",
        },
        {
          title: "Pass a Callback as Props",
          path: "/",
        },
        {
          title: "Use the Lifecycle Method componentWillMount",
          path: "/",
        },
        {
          title: "Use the Lifecycle Method componentDidMount",
          path: "/",
        },
        {
          title: "Add Event Listeners",
          path: "/",
        },
        {
          title: "Optimize Re-Renders with shouldComponentUpdate",
          path: "/",
        },
        {
          title: "Introducing Inline Styles",
          path: "/",
        },
        {
          title: "Add Inline Styles in React",
          path: "/",
        },
        {
          title: "Use Advanced JavaScript in React Render Method",
          path: "/",
        },
        {
          title: "Render with an If-Else Condition",
          path: "/",
        },
        {
          title: "Use && for a More Concise Conditional",
          path: "/",
        },
        {
          title: "Use a Ternary Expression for Conditional Rendering",
          path: "/",
        },
        {
          title: "Render Conditionally from Props",
          path: "/",
        },
        {
          title: "Change Inline CSS Conditionally Based on Component State",
          path: "/",
        },
        {
          title: "Use Array.map() to Dynamically Render Elements",
          path: "/",
        },
        {
          title: "Give Sibling Elements a Unique Key Attribute",
          path: "/",
        },
        {
          title: "Use Array.filter() to Dynamically Filter an Array",
          path: "/",
        },
        {
          title: "Render React on the Server with render ToString",
          path: "/",
        },
      ],
    },
    {
      title: "Redux",
      description:
        "As applications grow in size and scope, managing shared data becomes much more difficult. Redux is defined as a 'predictable state container for JavaScript apps' that helps ensure your apps work predictably, and are easier to test. While you can use Redux with any view library, we introduce Redux here before combining it with React in the next set of courses. In this course, you'll learn the fundamentals of Redux stores, actions, reducers and middleware to manage data throughout your application.",
      children: [
        {
          title: "Create a Redux Store",
          path: "/",
        },
        {
          title: "Get State from the Redux Store",
          path: "/",
        },
        {
          title: "Define a Redux Action",
          path: "/",
        },
        {
          title: "Define an Action Creator",
          path: "/",
        },
        {
          title: "Define an Action Event",
          path: "/",
        },
        {
          title: "Handle an Action in the Store",
          path: "/",
        },
        {
          title: "Use a Switch Statment tto Handle Multiple Actions",
          path: "/",
        },
        {
          title: "Use const for Action Types",
          path: "",
        },
        {
          title: "Register a Store Listener",
          path: "/",
        },
        {
          title: "Combine Multiple Reducers",
          path: "/",
        },
        {
          title: "Send Action Data to the Store",
          path: "/",
        },
        {
          title: "Use Middleware to Heandle Asynchronous Action",
          path: "/",
        },
        {
          title: "Write a Counter with Redux",
          path: "/",
        },
        {
          title: "Never Mutate State",
          path: "/",
        },
        {
          title: "Use the Spread Operator on Arrays",
          path: "/",
        },
        {
          title: "Remove an Item from an Array",
          path: "/",
        },
        {
          title: "Copy an Object with Object.assign",
          path: "/",
        },
      ],
    },
    {
      title: "React and Redux",
      description:
        "React and Redux are often mentioned together, and with good reason. The developer who created Redux was a React developer who wanted to make it easier to share data across different components. Now that you know how to manage the flow of shared data with Redux, it's time to combine that knowledge with React. In the React and Redux courses, you'll build a React component and learn how to manage state locally at the component level, and throughout the entire application with Redux.",
      children: [
        {
          title: "Getting Started with React Redux",
          path: "/",
        },
        {
          title: "Manage State Locally First",
          path: "/",
        },
        {
          title: "Extract State Logic to Redux",
          path: "/",
        },
        {
          title: "Use Provider to Connect Redux to React",
          path: "/",
        },
        {
          title: "Map State to Props",
          path: "/",
        },
        {
          title: "Map Dispatch to Props",
          path: "/",
        },
        {
          title: "Connect Redux to React",
          path: "/",
        },
        {
          title: "Connect Redux to the Messages App",
          path: "",
        },
        {
          title: "Extract Local State into Redux",
          path: "/",
        },
        {
          title: "Moving Forward From Here",
          path: "/",
        },
      ],
    },
    {
      title: "Front End Development Libraries Projects",
      description:
        "It's time to put your front end development libraries skills to the test. Use Bootstrap, jQuery, Sass, React, and Redux to build 5 projects that will test everything you've learned up to this point. Complete all 5 projects, and you'll earn the Front End Development Libraries certification.",
      children: [
        {
          title: "Build a Random Quote Machine",
          path: "/",
        },
        {
          title: "Build a Markdown Previewer",
          path: "/",
        },
        {
          title: "Build a Drum Machine",
          path: "/",
        },
        {
          title: "Build a JavaScript Calculator",
          path: "/",
        },
        {
          title: "Build a 25 + 5 Clock",
          path: "/",
        },
      ],
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container">
      <h1 className="title">Front End Development Libraries</h1>
      <div className="icon-container">
      <SvgIcon
      src="react.svg"
      aria-label="homepage"
      width="100px"
      height="100px"
    />
      </div>
      <p className="description">
        Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry.
      </p>
      <p className="description">
        In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.
      </p>
      <p className="description">
        Later, you'll build a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.
      </p>
      <div className="note">
        <p>
          <strong>Note:</strong> Some browser extensions can interfere with the tests. If you face issues, disable extensions that modify page content.
        </p>
      </div>
      <br />
      <br />
      <div className="accordion">
        {buttons.map((item, index) => (
          <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h2 className="accordion-title">{item.title}</h2>
              <i className={`accordion-icon ${activeIndex === index ? 'rotate' : ''}`}>▼</i>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              <p className="accordion-description">{item.description}</p>
              <div className="button-group">
                {item.children.map((child, childIndex) => (
                  <button
                    key={childIndex}
                    className="action-button"
                    onClick={() => handleNavigation(child.path)}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactMateri;