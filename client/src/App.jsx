import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './Pages/CreateListing'
import UpdateListing from './Pages/UpdateListing'
import Listing from './Pages/Listing'
import Search from './Pages/Search'

const App = () => {
  return (
    
    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/listing/:listingId" element={<Listing/>}/>

     {/* creating private route */}

      <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>
        <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
        <Route path='/search' element={<Search/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App


// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import About from './Pages/About'
// import Home from './Pages/Home'
// // import SignIn from './Pages/SignIn'
// // import SignUp from './Pages/SignUp'
// import React from 'react'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/about" element={<About/>}/>
//     {/* <Route path="/sign-in" element={<SignIn/>}/>
//     <Route path="/sign-up" element={<SignUp/>}/> */}
    
//     {/* <Route path="/listing/:listingId" element={<Listing/>}/> */}
//     </Routes>

//     </BrowserRouter>
    
//   )
// }

// export default App