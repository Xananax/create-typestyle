import { style, px, em, React } from "./style";
import { Logo } from "./Logo";
import { Card } from "./Card";

const appClassName = style({
  textAlign: `center`
});

const appHeaderClassName = style({
  backgroundColor: `#222`,
  height: px(200),
  padding: px(20),
  color: `white`
});

const appTitleClassName = style({
  fontSize: em(1.5)
});

class App extends React.Component {
  render() {
    return (
      <div className={appClassName}>
        <header className={appHeaderClassName}>
          <h1 className={appTitleClassName}>Create Typestyle Example</h1>
          <Logo />
        </header>
        <br />
        <Card>Components created without JSX</Card>
        <Card selected>
          That can be additionally styled <br /> (try clicking)
        </Card>
      </div>
    );
  }
}

export default App;
