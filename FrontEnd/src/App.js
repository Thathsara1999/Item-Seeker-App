import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  UploadItem from './components/UploadItem';
import SaveItemComponent from './components/SaveItem';
import ItemsListComponent from './components/ItemShow';
import RegisterPage from './components/RegisterPage';
import SignIn from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
         <Route path="/Register" element={<RegisterPage/>} />
        {/*}  <Route path="/login" element={<SignIn/>} />*/}
          <Route path ="/UploadItem" element={<UploadItem/>}/>
          <Route path ="/SaveItem" element={<SaveItemComponent/>}/>
          <Route path ="/ItemShow" element ={<ItemsListComponent/>}/>
      
          <Route path="/" element={<SignIn/> } /> {/* Default route */}
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
