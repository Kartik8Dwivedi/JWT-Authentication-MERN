import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";


function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/userpage" element={<UserPage/>}/>
          <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
