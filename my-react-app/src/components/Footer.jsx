import react from "react"
import '../index.css'

const date=new Date().getFullYear()
function Footer(){
    return(
        <>
        <footer>
            <p>Copyright @ {date}</p>
        </footer>
        </>
    )
}

export default Footer