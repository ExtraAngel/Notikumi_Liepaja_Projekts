//import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";
import AboutUS from "./AboutUS";
import Events from "./Events"
import "./styles.css";
import EventPage from "./EventPage";

//When Needed add another route to get the link function
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="AboutUS" element={<AboutUS />} />
          <Route path="Main" element={<Main />} />
          <Route path="Events" element={<Events />} />
          <Route path="EventPage/:nr" element={<EventPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
//const container = document.getElementById('App');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);
