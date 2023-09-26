import "./banner.css"
import FrontEnd from "./frontEnd"

const Banner = () => {
    return <div
        className="banner"
        style={
            {
                backgroundImage: "url(./img/banner.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }
        }
    >
        <FrontEnd/>
    </div>
    
}

export default Banner