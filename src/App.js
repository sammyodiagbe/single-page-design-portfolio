import Logo from "./components/logo";
import ImageAmy from "./assets/image-amy.webp";
import LeftArrow from "./components/left_arrow";
import RightArrow from "./components/right_arrow";
import image1 from "./assets/image-slide-1.jpg";
import image2 from "./assets/image-slide-2.jpg";
import image3 from "./assets/image-slide-3.jpg";
import image4 from "./assets/image-slide-4.jpg";
import image5 from "./assets/image-slide-5.jpg";

function App() {
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <Logo />
          <a href="#free-consultation" className="btn">
            Free Consultation
          </a>
        </div>
      </nav>
      <header className="jumbotron">
        <div className="container">
          <h1>Design Solutions made easy</h1>
          <p>
            With over ten years of experience in various design disciplines, I'm
            your one-stop shop for your design needs.
          </p>
        </div>
      </header>
      <main className="main">
        <div className="container apps">
          <div className="offer graphic-design">Graphic Design</div>
          <div className="offer ui-ux">UI/UX</div>
          <div className="offer apps">Apps</div>
          <div className="offer illustrations">Illustations</div>
          <div className="offer photography">Photography</div>
          <div className="offer motion">Motion Graphics</div>
        </div>
        <section className="about-me">
          <aside className="img">
            <img src={ImageAmy} alt="Hi i am amy" />
          </aside>
          <aside className="writeup">
            <h1>I'm Amy, and I'd love to work on your next project</h1>
            <p>
              I love working with others to create beautiful design solutions.
              I've designed everything from brand illustrations to complete
              mobile apps. I'm handy with a camera!
            </p>

            <a href="#free-consolation" className="btn">
              Free Consultation
            </a>
          </aside>
        </section>
        <section className="slider">
          <div className="slider">
            <img src={image1} alt="slider item" />
            <img src={image2} alt="slider item" />
            <img src={image3} alt="slider item" />
            <img src={image4} alt="slider item" />
            <img src={image5} alt="slider item" />
          </div>
          <div className="slider-controller-container">
            <button className="btn">
              <LeftArrow />
            </button>
            <button className="btn">
              <RightArrow />
            </button>
          </div>
        </section>
        <section className="book-call">
          <aside>
            <h2>Book a call with me</h2>
            <p>
              I'd love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </aside>
        </section>
      </main>
      <footer className="navigation">
        <div className="container">
          <Logo />
          <a href="#consultant" className="btn">
            Free Consultation
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
