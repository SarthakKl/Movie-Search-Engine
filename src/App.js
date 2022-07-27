import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Homepage/>}/>
          <Route path = "/movie/:id" element = {<Movie/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
