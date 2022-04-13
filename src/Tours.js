

import Tour from './Tour.js'

function Tours({ toursData, removeTour }) {

    return (
        <div>
            {
                toursData.map((tour) => {
                    return <Tour tour={tour} removeTour={removeTour}/>
                })
            }
        </div>
    )

}

export default Tours




