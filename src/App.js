// import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import React, { Component } from "react";
// import ResumeForm from "./components/ResumeForm";
// import Footer from "./components/Footer";
// import ContactPage from "./components/ContactPage";




// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="header">
//           <a href="#default" className="logo">
//             {/* <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfexFyhuSfaZTB5CnIgfFjgBEUJHaJWYUgzV4TRYMcg&usqp=CAU&ec=48665701"
//               alt="logo"
//             ></img> */}
//             <h3>Resume</h3>
//           </a>
//           <div className="header-right">
//             <a className="active" href="#home">
//               Home
//             </a>
//             <a href="https://github.com/rymrdp/resu-me" target="_blank">
//               Contact
//             </a>
//             <a href="https://github.com/rymrdp/resu-me" target="_blank">
//               About
//             </a>
//           </div>
//         </div>
        
//         <ResumeForm />
//         <Footer/>
//       </div>
//     );
//   }
// }

// export default App;
// import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import React from "react";
// import ResumeForm from "./components/ResumeForm";
// import Footer from "./components/Footer";
// import ContactPage from "./components/ContactPage";

// function App() {
//   return (
//     <div>
//       <div className="header">
//         <a href="#default" className="logo">
//           {/* <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfexFyhuSfaZTB5CnIgfFjgBEUJHaJWYUgzV4TRYMcg&usqp=CAU&ec=48665701"
//             alt="logo"
//           ></img> */}
//           <h3>Resume</h3>
//         </a>
//         <div className="header-right">
//           <a className="active" href="#home">
//             Home
//           </a>
//           <a href="https://github.com/rymrdp/resu-me" target="_blank">
//             Contact
//           </a>
//           <a href="https://github.com/rymrdp/resu-me" target="_blank">
//             About
//           </a>
//         </div>
//       </div>
//       <ResumeForm />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResumeForm from "./components/ResumeForm";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <Link to="/" className="logo no-underline">
            <h3>Resume</h3>
          </Link>
          <div className="header-right">
            <Link to="/" className="header-link no-underline">
              Home
            </Link>
            
            <Link to="/contact" className="header-link no-underline">Contact</Link>
            <Link to="/login" className="header-link no-underline">Login</Link>
            {/* <a href="https://github.com/rymrdp/resu-me" target="_blank">
              About
            </a> */}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ResumeForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <ResumeForm/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;