import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  UploadItem from './components/UploadItem';
import SaveItemComponent from './components/SaveItem';
import ItemsListComponent from './components/ItemShow';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import RemoveItem from './components/Admin/RemoveItem';
import ItemDetails from './components/ItemDetails';
import MyItems from './components/MyItems';


function App() {
  const currentUser = "currentUserId"; // Replace with actual current user ID logic
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
          <Route path ="/RemoveItem" element= {<RemoveItem/>}/>
          <Route path ="/items/:id" element= {<ItemDetails/>}/>
          <Route path="/my-items" element={<MyItems currentUser={currentUser}/>} />
          
      
          <Route path="/" element={<LoginPage/> } /> {/* Default route */}
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
