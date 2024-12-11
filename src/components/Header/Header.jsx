
import './header.css'
import logo from '../../assets/logoBall.jpg';
export default function Header() {
  return (
    <header>
        <img src={logo} alt="logo" />
        <h1>Football Wordle</h1>
    </header>
  )
}