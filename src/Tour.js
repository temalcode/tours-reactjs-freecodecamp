import styled from 'styled-components'


function Tour({tour, removeTour}){
  
    return(
        <Container>
            <img src={tour.image} alt="" />
            <h4>{tour.name}</h4>
            <p>{tour.info}</p>
            <button onClick={() => removeTour(tour.id)}>Remove</button>
        </Container>
    )
}

export default Tour

const Container = styled.div`
    margin: auto;
    background: white;
    width: 400px;
    padding: 2rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    img{
        border-radius: 5px;
        width: 400px;
    }

    button{
        display: block;
        margin: auto;
        margin-top: 2rem;
        background: red;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;

        &:hover{
            background: #ac0000;
        }
    }
`