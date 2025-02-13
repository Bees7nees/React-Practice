import '@/styles/Header.css';

function Header() {
  return (
    <header>
      <img
        src="src/assets/Colored Ios App Icons Collection/keynote-presentation-business-slides-svgrepo-com.svg"
              alt="Image of a presentation table with a magnifying glass."
              className="header-image"
      />
      <h1 className='header-title'>Welcome to my FullStack Portfolio</h1>
      <nav>
        <ul className='header-menu'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
