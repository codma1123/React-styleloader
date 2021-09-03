import logo from './logo.svg';
// import './App.css';
// import './App.scss'
import styles from './App.module.css'
import Button from './components/Button'
import StyledButton from './components/StyledButton';
import StyledA from './components/StyledA';
import styled, {createGlobalStyle} from "styled-components"

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
  `;

const GlobalStyle = createGlobalStyle`
button{
  color: yellow;
}
`
console.log(styles)

function App() {
  return (
    <div className={styles['App']}>
      <GlobalStyle />
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
        <StyledButton>버튼</StyledButton>
        <StyledButton primary>버튼</StyledButton>
        <PrimaryStyledButton>버튼</PrimaryStyledButton>
        <StyledButton></StyledButton>
        <StyledA href="https://google.com" target="_blank">태그</StyledA>
      </header>
    </div>
  );
}

export default App;
