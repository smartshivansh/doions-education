import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Fonts/menlo-cufonfonts/Menlo-Regular.ttf";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import NoPage from "./components/NoPage/index";
import Footer from "./components/Footer";
import Courses from "./components/Courses/AllCourses/AllCourse";
import FullStack from "./components/Courses/FullStackCourse/FullStackCourse";
import DigitalMarketing from "./components/Courses/DigitalMarketingCourse/DigitalMarketingCourse";
import ProjectInternPage from "./components/projectInternPage/ProjectInternPage";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

import ApplyNowForm from "./components/projectInternPage/projectInternPageElements/ApplyNowForm";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FullStack />} />
        {/*<Route path="/Courses" element={<Courses />} />
           <Route path="/FullStack" element={<FullStack />} />
          <Route path="/DigitalMarketing" element={<DigitalMarketing />} /> */}
        <Route path="/projectintern" element={<ProjectInternPage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/test" element={<ApplyNowForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
