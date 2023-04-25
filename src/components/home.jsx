import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs'
function Home () {
    return (
        <div className="Home">
            <div className="hero">
            <div className="panels">
                    <div className="upper">
                        <div className="panel"></div>
                    </div>
                    <div className="lower">
                        <div className="panel"></div>
                        <div className="panel"></div>
                    </div>
                </div>
                <div className="main">
                    <h1><span>Yoga,</span> is a lifestyle.</h1>
                    <p>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering.</p>
                    <Link to="/about" className="link">Continue Your Journey <BsArrowRight className="icon" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;