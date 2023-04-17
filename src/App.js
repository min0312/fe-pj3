import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./body/main";
import Footer from './footer/footer';
import Header from './header/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
				</Routes>
        <Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;
