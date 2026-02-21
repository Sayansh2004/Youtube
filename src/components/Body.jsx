import Header from "./Header"
import Sidebar from "./Sidebar"
import ButtonList from "./ButtonList"

export default function Body() {
  return (
    <div>
         <Header/>
         <div className="flex">
          <Sidebar/>
           <div className="flex-1">
             <ButtonList/>
           </div>
         </div>
        
         
        

    </div>
  )
}
