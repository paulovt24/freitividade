import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/app'
import NotFound from './pages/notfound'

export default function Navegacao(){

return(

<BrowserRouter>

<Routes>
   
   <Route path="/" element= {<App/>} />

   <Route path="/notfound" element= {<NotFound/>} />
</Routes>

</BrowserRouter>

)


}