import Expectation from "./components/Expectation/Expectation"
import Expertise from "./components/Expertise/Expertise"
import Feedback from "./components/Feedback/Feedback"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Introduction from "./components/Introduction/Introduction"
import Query from "./components/Query/Query"
import Service from "./components/Service/Service"

import Divider from "./assets/divider.svg"

import "./App.css"

const App = () => {
    return (
        <div className="app">
            <div className="introduction-about">
                {/* Header */}
                <Header />

                {/* Introduction */}
                <Introduction />
            </div>

            {/* Services */}
            <Service />

            {/* Expectations */}
            <Expectation />

            {/* Expertise */}
            <Expertise />

            {/* Feedback */}
            <Feedback />

            <div className="query-footer">
                {/* Query */}
                <Query />

                <img src={Divider} alt="divider" className="divider" />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default App
