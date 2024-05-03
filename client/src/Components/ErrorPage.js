import { useLocation } from "react-router-dom";
import Header from "./Components/Header"


function ErrorPage() {
    const location = useLocation();
    console.error("Error in route:", location.pathname);

    const imageUrl = "https://img.devrant.com/devrant/rant/r_2206929_QgnYv.jpg";
    

    return (
        <div className= "errorPage" style={{ backgroundColor: 'black'}}>
            <Header />
            <section style={{ textAlign: 'center' }}>
                <h1>Sorry! You Have Clicked Something We Haven't Updated Yet! Try Later!</h1>
                <img src={imageUrl} alt = "uh oh!" style={{ display: 'block', margin: '0 auto'}} />
                <br />
                <br />
            </section>
        </div>
    );
};

export default ErrorPage;