import logo from '../../images/logo.svg';
import './style.css'

function Logo() {
  return (
    <div className="logo">
      <img className='logo-img' src={logo} alt="Logo Alura Books"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
