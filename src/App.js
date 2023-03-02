import Logo from "./components/logo";
import ImageAmy from "./assets/image-amy.webp";
import LeftArrow from "./components/left_arrow";
import RightArrow from "./components/right_arrow";
import image1 from "./assets/image-slide-1.jpg";
import image2 from "./assets/image-slide-2.jpg";
import image3 from "./assets/image-slide-3.jpg";
import image4 from "./assets/image-slide-4.jpg";
import image5 from "./assets/image-slide-5.jpg";
import { useEffect, useRef, useState } from "react";

function App() {
  const sliderRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    window.addEventListener("resize", (event) => {
      if (window.screen.width > 700) {
        setMobile(false);
      }
    });
  }, []);

  const moveSliderLeft = () => {
    let by = scrollAmount - (mobile ? 290 : 560);
    console.log(by);
    sliderRef.current.scrollTo({
      left: by,
      top: 0,
      behaviour: "smooth",
    });
    setScrollAmount(by);
  };

  const moveSliderRight = () => {
    let by = scrollAmount + (mobile ? 290 : 560);
    console.log(by, mobile);
    sliderRef.current.scrollTo({
      left: by,
      top: 0,
      behaviour: "smooth",
    });
    setScrollAmount(by);
  };
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
          <h1>My work</h1>
          <div className="slider" ref={sliderRef}>
            <img src={image1} alt="slider item" className="slider-img" />
            <img src={image2} alt="slider item" className="slider-img" />
            <img src={image3} alt="slider item" className="slider-img" />
            <img src={image4} alt="slider item" className="slider-img" />
            <img src={image5} alt="slider item" className="slider-img" />
          </div>
          <div className="slider-controller-container">
            <button className="btn" onClick={moveSliderLeft}>
              <LeftArrow />
            </button>
            <button className="btn" onClick={moveSliderRight}>
              <RightArrow />
            </button>
          </div>
        </section>
        <section className="book-call">
          <div className="container">
            <aside>
              <h2>Book a call with me</h2>
              <p>
                I'd love to have a chat to see how I can help you. The best
                first step is for us to discuss your project during a free
                consultation. Then we can move forward from there.
              </p>
            </aside>
            <aside>
              <a href="#book-call">Free Consultation</a>
            </aside>
          </div>
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
