// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Footer from "../component/footer.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Navbar from "../component/navbar.jsx";
import Card from "../component/card.jsx";

// Define the cards array
const cards = [
  {
    title: "Card 1",
    text: "This is the first card's content.",
    img: "https://placehold.co/600x400/EEE/31343C",
    link: "#"
  },
  {
    title: "Card 2",
    text: "This is the second card's content.",
    img: "https://placehold.co/600x400/EEE/31343C",
    link: "#"
  },
  {
    title: "Card 3",
    text: "This is the third card's content.",
    img: "https://placehold.co/600x400/EEE/31343C",
    link: "#"
  },
  {
    title: "Card 4",
    text: "This is the fourth card's content.",
    img: "https://placehold.co/600x400/EEE/31343C",
    link: "#"
  }
];

// Index Component
const Index = () => {
  return (
    <>
      <div className="text-center">
        <Navbar />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {cards.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                <Card cards={item} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

// Render your React application
ReactDOM.createRoot(document.getElementById('app')).render(<Index />);

export default Index;
