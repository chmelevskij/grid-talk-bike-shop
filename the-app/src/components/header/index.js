import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <nav>
          <Link activeClassName={style.active} href="/bikes">
            Bikes
          </Link>
          <Link activeClassName={style.active} href="/cart">
            Cart
          </Link>
          <Link href="/" class={style.heading}>
            <h1>Tom's Bikes</h1>
          </Link>
          <Link activeClassName={style.active} href="/blog">
            Blog
          </Link>
          <Link activeClassName={style.active} href="/about">
            About
          </Link>
        </nav>
      </header>
    );
  }
}
