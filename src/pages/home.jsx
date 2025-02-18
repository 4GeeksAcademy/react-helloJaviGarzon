import React from "react";
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


const Home = () => {
	return (
		<>
		<div><Navbar /></div>
			<div><Jumbotron /></div>
			<div><Card /></div>
			<div><Footer /></div>
		</>
	);
};

export default Home;