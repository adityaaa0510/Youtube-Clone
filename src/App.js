

import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { AppContext } from './context/contextApi'
import Header from "./components/Header";
import Feeding from './components/Feeding';
import LeftNav from "./components/LeftNav";
import LeftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResult from "./components/SearchResult";
import SearchResultVideoCard from "./components/SearchResultVideoCard";
import SuggestionVideoCard from "./components/SuggestionVideoCard";
import VideoCard from "./components/VideoCard";
import Videodetails from "./components/VideoDetails"

const App = () => {
  return (
    <AppContext> 
     <BrowserRouter>
           <div className='flex flex-col h-full'>
               <Header/>
               <Routes>
                   <Route path="/" exact element={<Feeding/>}/>
                   <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
                   <Route path="/video/:id" element={<Videodetails/>}/>
               </Routes>
           </div>
     </BrowserRouter>
      </AppContext>
      )
}
      export default App;

