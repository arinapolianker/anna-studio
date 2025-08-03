import "./App.css";
import Head from "./Head";
import Gallery from "./Gallery";

export default function Home() {
    return (
        <div>
            <Head />
            <div className="page-head">
                <h1>דוגמאות</h1>
            </div>
            <div className="photos-container">
                <Gallery category="home" />
            </div>
        </div>
    );
}