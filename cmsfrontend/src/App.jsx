// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import AboutUs from './Components/AboutUs';
// import OurServices from './Components/OurServices';
// import Portfolio from './Components/Portfolio';
// import Gallery from './Components/Gallery';
// import ContactUs from './Components/ContactUs';
// import UserTypeMaster from './AdminSide/UserTypeMaster';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/our-services" element={<OurServices />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






import React from 'react';
import UserMaster from './AdminSide/UserMaster';
import UserTypeMaster from './AdminSide/UserTypeMaster';
import CmsMasterPage from './AdminSide/CmsMasterPage';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <nav>
        <ul>
          <li>
            <a href="#user-master">User Master</a>
          </li>
          <li>
            <a href="#user-type-master">User Type Master</a>
          </li>
          <li>
            <a href="#cms-master-page">CMS Master Page</a>
          </li>
        </ul>
      </nav>
      {/* <section id="user-master">
        <UserMaster />
      </section>
      <section id="user-type-master">
        <UserTypeMaster />
      </section> */}
      <section id="cms-master-page">
        <CmsMasterPage />
      </section>
    </div>
  );
};

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
// import CmsMasterPage from './AdminSide/CmsMasterPage';
// import ContentViewPage from './AdminSide/ContentViewPage'; // Import ContentViewPage

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>App</h1>
//         <nav>
//           <ul>
//             <li>
//               <a href="/">Home</a> {/* Change the href to '/' */}
//             </li>
//             <li>
//               <a href="/cms-master-page">CMS Master Page</a> {/* Change the href to '/cms-master-page' */}
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route exact path="/cms-master-page" component={CmsMasterPage} /> {/* Use Route to render CmsMasterPage */}
//           <Route exact path="/content-view" component={ContentViewPage} /> {/* Route for ContentViewPage */}
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
