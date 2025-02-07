//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./pages/home.jsx";
import footer from "./component/footer.jsx";
import jumbotron from "./component/jumbotron.jsx";
import navbar from "./component/navbar.jsx";
import card from "./component/card.jsx";


//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
const Index = () =>  {
	return (
	<>
		<div className="text-center">
			<navbar />
			<jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<footer />
		</div>
		</>
	);
};

export default Index;