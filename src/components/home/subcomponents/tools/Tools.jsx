/* eslint-disable react/no-unescaped-entities */
import "./Tools.css";

const Tools = () => {
  return (
    <section id="tools" className=" section col-container">
      <h2>Tools I'm Using</h2>
      <div className="tools-container">
        <span className="pop-up-container">
          <div className="hover-pop-up">
            HTML5 is the latest standard of Hypertext Markup Language, the code that describes the structure and
            presentation of web pages. It's made up of three codes: HTML, which keeps the structure; CSS, which affects
            the presentation; and JavaScript, which creates interactive effects within web browsers.
          </div>
          <img src="/icons/html.svg" alt="html" className="icon tools" />
          <p>HTML5</p>
        </span>

        <span className="pop-up-container">
          <div className="hover-pop-up">
            CSS3, also known as Cascading Style Sheets Level 3, is a more advanced version of CSS and the successor of
            CSS2. CSS3 is used for the same thing as CSS, namely to style web pages and make them more attractive and
            user-friendly.
          </div>
          <img src="/icons/css.svg" alt="css" className="icon tools" />
          <p>CSS3</p>
        </span>

        <span className="pop-up-container">
          <div className="hover-pop-up">
            JavaScript is a dynamic programming language that's used for web development, in web applications, for game
            development, and lots more. It allows you to implement dynamic features on web pages that cannot be done
            with only HTML and CSS.
          </div>
          <img src="/icons/javascript.svg" alt="javascript" className="icon tools" />
          <p>Javascript</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://www.figma.com/">Figma</a> design is for people to create, share, and test designs for
            websites, mobile apps, and other digital products and experiences. It is a popular tool for designers,
            product managers, writers and developers and helps anyone involved in the design process contribute, give
            feedback, and make better decisions, faster.
          </div>
          <img src="/icons/figma.svg" alt="figma" className="icon tools" />
          <p>Figma</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            Developers use <a href="https://nodejs.org/en">Node.js</a> to create server-side web applications, and it is
            perfect for data-intensive applications since it uses an asynchronous, event-driven model.
          </div>
          <img src="/icons/Node.svg" alt="node" className="icon tools" />
          <p>Node.js</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://react.dev/">React.js</a> is a JavaScript library developed by Facebook which, among other
            things, was used to build Instagram.com. It aims to allow developers to create fast user interfaces for
            websites and applications alike
          </div>
          <img src="/icons/React.svg" alt="react" className="icon tools" />
          <p>React.js</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://vitejs.dev/">Vite.js</a> is majorly used to set up a development environment for various
            frameworks like React and Vue, and even for a Vanilla JavaScript app with a dev server and hot reloading by
            following just three commands. Vite is a bridge between Twig/Craft CMS and the next-generation frontend
            build tool Vite.
          </div>
          <img src="/icons/Vite.svg" alt="vite" className="icon tools" />
          <p>Vite.js</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://laragon.org/index.html">Laragon</a> is a simple, modern, and flexible Development Server
            solution for Windows that integrates PHP, Apache, Nginx, MySQL, NodeJS, and several other software to ease
            software development for PHP and NodeJS applications.
          </div>
          <img src="/icons/laragon.svg" alt="laragon" className="icon tools" />
          <p>Laragon</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://laravel.com/">Laravel</a> is an easy-to-use web framework that will help you create
            extensible PHP-based websites and web applications at scale. Before creating a web app or website, you need
            to make a foundational decision as to what technology you are going to use.
          </div>
          <img src="/icons/laravel.svg" alt="laravel" className="icon tools" />
          <p>Laravel</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://www.postman.com/">Postman</a> can be used to write functional tests, integration tests,
            regression tests, and more. Postman's Node.js-based runtime contains support for common patterns and
            libraries that you can use to build tests quickly.
          </div>
          <img src="/icons/Postman.svg" alt="postman" className="icon tools" />
          <p>Postman</p>
        </span>
        <span className="pop-up-container">
          <div className="hover-pop-up">
            <a href="https://www.mysql.com/">MySQL</a> is a relational database management system based on SQL –
            Structured Query Language. The application is used for a wide range of purposes, including data warehousing,
            e-commerce, and logging applications. The most common use for mySQL however, is for the purpose of a web
            database.{" "}
          </div>
          <img src="/icons/MySql.svg" alt="mysql" className="icon tools" />
          <p>MySql</p>
        </span>
      </div>
    </section>
  );
};

export default Tools;
