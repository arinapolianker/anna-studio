import "./App.css";
import Head from "./Head";
import Footer from "./Footer";
import Gallery from "./Gallery";

export default function Home() {
    return (
        <div>
            <Head />
            <div className="page-head">
                <h1>כמה מעבודותיי</h1>
            </div>
            <div className="home-photo">
            <Gallery category="home" />
            </div>
            {/* <Footer /> */}
        </div>
    );
}