import logo from './images/logo.svg';
import mockup from "./images/illustration-mockups.svg"

import './App.css';

function App() {
  return (
    <div>
      
      <header>
        <img src={logo} alt="huddle logo"/>
      </header>

      <main>
        <img src={mockup} alt="mockup"/>

        <div className="content">
          <h2>Build The Community Your Fans Will Love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
          Create connections with your users as you engage in genuine discussion.  </p>
          <button>Register</button>
        </div>
      </main>
      <footer>
      <i className="fa fa-facebook"></i>
      <i className="fa fa-twitter"></i>
      <i classn="fa fa-instagram"></i>
      </footer>
    </div>
  );
}

export default App;
