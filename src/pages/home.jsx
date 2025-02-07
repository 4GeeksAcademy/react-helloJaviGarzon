import React from "react";
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";




const Home = () => {
	return (
		<>
		<div><Navbar /></div>
			<div><Footer /></div>
			<div><Jumbotron /></div>
			<div className="row"></div>
			<div className="col-3"></div>
			<div className="col-3"></div>
			<div className="col-3"></div>
			<div className="col-3"></div>
			<div><Card /></div>
			
		</>
	);
};

export default Home;