import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Destinationpage from "./pages/destination"
import Homepage from "./pages/Home"
import Homepage1 from "./pages/halamansatu";
import Aboutpage1 from "./pages/halamandua";
import Itinerary1 from "./pages/halamantiga";
import Contact from "./pages/halamanempat";
import Login from "./pages/LoginPage";
import Register from "./pages/Registerpage";

function app ()  {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage1 />} />
          <Route path="/halamandua" element={<Aboutpage1 />} />  
          <Route path="/destination" element={<Destinationpage/>} />
          <Route path="/itinerary1" element={<Itinerary1 />} />
          <Route path="/Contact" element={< Contact />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/home" element={< Homepage />} />
        </Routes>
      </Router>

    )

}
    

export default app;