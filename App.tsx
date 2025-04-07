

import './App.css'

function App() {
  
  return (
    <>
      <div>
      <div className="text-black-300 text-2xl">Hi This is Swaroopa. Welcome to my Page</div>
      <h4 className="text-black-200">This is the Small Introduction about me</h4>
      <h4 className="text-black">Hey... My self Swaroopa, I completed My graduation in the stream of Computer Science and I am very much intrested in web development.
        In the Web development the technologies we are used <b>HTML, CSS, Javascrit, Reactjs</b> etc.. Here below are the some of the references.
      </h4><br/>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 max-w-4xl mx-auto  " >
        <p className="text-lg text-gray-700 md:w-1/2">HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It uses tags like <b>html,head,body, and p </b>to define elements on a page. HTML works together with CSS for styling and JavaScript for interactivity. It structures content like text, images, links, forms, and more. Every webpage you visit is built using HTML at its core. </p>
        <img src ="./src/assets/HTML5_logo_and_wordmark.svg.png" alt ="html" className=" w-3/4 md:w-1/2 rounded-lg shadow-md "/></div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 max-w-4xl mx-auto  " >
        <p className='text-lg text-gray-700 md:w-1/2'>CSS (Cascading Style Sheets) is used to style and layout HTML elements on a webpage. It controls colors, fonts, spacing, positioning, and overall visual appearance. CSS can be written inline, in style tags, or in external .css files.Selectors target HTML elements, and properties define how they look. It brings design and responsiveness to otherwise plain HTML structures. </p>
        <img src ="./src/assets/css.png" alt ="css" className="w-3/4 md:w-1/2 rounded-lg shadow-md"/></div>
        

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 max-w-4xl mx-auto    " >
        <p className='text-lg text-gray-700 md:w-1/2'>JavaScript (JS) is a programming language that adds interactivity and dynamic behavior to web pages.It can respond to user actions like clicks, inputs, or page loads.JS can modify HTML and CSS in real-time using the DOM (Document Object Model). It’s used for tasks like form validation, animations, and fetching data without reloading the page.JavaScript runs directly in the browser, making websites interactive and functional.</p>
        <img src ="./src/assets/js.png" alt ="js" className="w-3/4 md:w-1/2 rounded-lg shadow-md"/></div>
  

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 max-w-4xl mx-auto  " >
        <p className='text-lg text-gray-700 md:w-1/2'>ReactJS is a JavaScript library for building fast and interactive user interfaces.  
It uses components—reusable pieces of UI—to build complex applications efficiently.  
React uses a virtual DOM to update only the parts of the page that change, making it fast.  
It supports JSX, which lets you write HTML-like code inside JavaScript.  
React is great for building single-page applications with dynamic content. </p>
        <img src ="./src/assets/react-icon_svg_.webp" alt ="react" className="w-3/4 md:w-1/2 rounded-lg shadow-md"/></div>

        </div>



      
      
      
    </>
  )
}

export default App
