import Header from "./Header"
import Sidebar from "./Sidebar"
import './App.css';
import Moving from "./Moving";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      {/* <Moving/> */}
      <div className="app__bod">
        {/* <Moving/> */}
        {/* <Main/> */}
      </div>
      

      </div>
    </div>
  );
}

export default App;
