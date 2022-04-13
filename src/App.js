import { useEffect, useState } from "react";
import Loading from './Loading.js'
import Tours from './Tours.js'

function App() {

  const [loadingStaus, setLoadingStatus] = useState(true)
  const [toursData, setToursData] = useState([])

  const url = 'https://course-api.com/react-tours-project'

  async function getData() {
    const data = await fetch(url)
    const jsonData = await data.json()
    setToursData(jsonData)
    setLoadingStatus(false)
  }

  function removeTour(idOfTour){
    var newTour = toursData.filter(function (tour){return tour.id !== idOfTour})
    setToursData(newTour)
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  if (loadingStaus) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  
  return(
    <div>
      <Tours toursData={toursData} removeTour={removeTour}/>
    </div>
  )

}

export default App;
