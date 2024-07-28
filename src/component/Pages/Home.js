import './Home.css';
import React from "react";


function Home() {
    return (
        <div className="content">
          {[...Array(100)].map((_, index) => (
            <p key={index}>This is content line {index + 1}</p>
          ))}
        </div>
    );
}

export default Home;
