import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourate from "./pages/Favourate";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
  <Layout>
    
      <Routes>
        <Route path="/" element={<AllMeetups />} exact={true} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favourate" element={<Favourate />} />
      </Routes>
    </Layout>
  );
}

export default App;
