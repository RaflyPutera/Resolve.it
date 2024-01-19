import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Landing from './components/landing/landing.tsx'
import Home from './components/mainSpace/mainSpace.tsx'
import PrivateRoute from './components/PrivateRoute.tsx'
import { useEffect, useState } from 'react'
import { auth } from './firebase.tsx'
import { onAuthStateChanged } from 'firebase/auth'

function App(firebaseApp:any) {
  firebaseApp
  const [user, setUser] = useState({});
  const [authReady, setAuthReady]=useState(false)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // console.log(authUser);
        setAuthReady(true)
        setUser(authUser);
      } else {
        console.log("no user");
        setUser("");
        // Handle the case when the user becomes null, if needed
      }
      setAuthReady(true)
    });
    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if(!authReady){
    return <div>Loading...</div>
  }
  else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing userState={user}/>} />
          <Route
            path='/home'
            element={<PrivateRoute element={<Home />} auth={user} fallbackPath='/' />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Landing setAuthenticate={setAuthenticate} />} />
  //       <Route
  //         path='/home'
  //         element={<PrivateRoute element={<Home />} auth={user} fallbackPath='/' />}
  //       />
  //     </Routes>
  //   </BrowserRouter>
  // );
}


export default App
