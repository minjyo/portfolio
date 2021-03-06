import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/pages/home/index";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Home}></Route>
        </BrowserRouter>
    );
}

export default App;
