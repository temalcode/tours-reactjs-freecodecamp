
import styled from 'styled-components'

function Loading(){
    return(
        <Wrapper>
            <h2>Loading...</h2>
        </Wrapper>
    )
}

export default Loading

const Wrapper = styled.div`
    background-color: #ffb703;
    padding-top: 7rem;
    height: 100vh;
    text-align: center;
    h2{
        color: black;
        font-size: 2rem;
    }
`

