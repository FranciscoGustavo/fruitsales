import { themelight } from '../themes';

const Logo = () => (
  <div className="conatiner">
    <img src="/logo.svg" alt="vegyfresh logo" className="image"/>
    <h1 className="title">VegyFresh</h1>
    <style jsx>{`
      .conatiner {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }

      .title {
        font-size: 21px;
        font-weight: bold;
        font-style: italic;
        letter-spacing: 1px;
        color: ${themelight.primary}
      }

      @media screen and (min-width: 900px) {
        .image {
          width: 40px;
          height: 40px;
        }

        .title {
          font-size: 28px;
        }
      }
    `}</style>
  </div>
);

const ButtonContact = () => (
  <button className="contact">
    Contáctanos
    <style jsx>{`
      .contact {
        position: relative;
        padding: 0 2px 3px 2px;
        background-color: transparent;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
        color: ${themelight.primary}
      }

      .contact:hover:after {
        width: 100%;
      }

      .contact:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 0%;
        height: 2px;
        background-color: ${themelight.primary};
        transition: width 0.2s;
      }
    `}</style>
  </button>
);

const Header = () => (
  <header className="container">
    <nav className="menu">  
      <Logo />
      <ButtonContact />
    </nav>

    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        padding: 40px; 
      }

      .menu {
        grid-column: 1 / 5;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      @media screen and (min-width: 900px) {
        .container {
          padding-left: 0;
          padding-right: 0;
          grid-template-columns: repeat(12, 1fr);
        }

        .menu {
          grid-column: 3 / 11;
        }
      }
    `}</style>
  </header>
);

export default Header;
