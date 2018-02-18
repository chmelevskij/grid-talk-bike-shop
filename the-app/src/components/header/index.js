import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <nav>
          <Link activeClassName={style.active} href="/">
            Home
          </Link>
          <Link activeClassName={style.active} href="/bikes">
            Bikes
          </Link>
          <Link href="/">
            <h1>Tom's Bikes</h1>
          </Link>
          <Link activeClassName={style.active} href="/Blog">
            Blog
          </Link>
          <Link activeClassName={style.active} href="/About">
            About
          </Link>
        </nav>
      </header>
    );
  }
}
