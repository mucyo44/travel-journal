
import"./app.css"
import {Travel} from "./Travel "
import Data from "./data"
import {Title} from "./Title"





function App() {
 
  const travelDetails = Data.map((details)=>{
      return(
        <div>
          <Travel image={details.Image} locationIcon={details. locationIcon} location={details. location}
          title={details. title} startDate={details.StartDate} endDate={details. EndDate}
           description={details.description}/>
        </div>
      )

    })
  
  
  
  

return(
<div className="App"> 
    <div className="wed--name">
     <h1>Travel Journal</h1>
    </div>
    <div className="mainpro">
      <div className="title">
      <Title/>
      
      {travelDetails}
     
    </div>
    </div>
   

</div>
  
)
  }

  


export default App
