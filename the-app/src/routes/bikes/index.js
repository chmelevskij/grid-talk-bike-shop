import {h, Component} from 'preact';
import style from './style';

let ids = [
  'hDHFJolKMXw',
  'Z7FWYzJXGQs',
  'wolwSgRH3XI',
  'bZSPdkLLi2E',
  '5UQoVk8_d-4',
  'UjAHjamxDjU',
  'aLsP-F7a7lI',
  'tG36rvCeqng',
  'krrjJuNVsh0',
  'J61kZQXCtzw',
  'CrzLRM33Wes',
  '0ClfreiNppM',
  'Yet0JIOP5Gg',
  'eTrHMJwI5ro',
];

const Bike = ({id}) => (
    <div class="product">
      <img class="product__img" src={`https://source.unsplash.com/${id}/500x300`} alt="" />
      <h2 class="product__title">Nice Bike Bro</h2>
      <p class="product__description">
        Lorem magni elit asperiores accusantium iste? Aliquam blanditiis
        voluptas voluptas doloremque nam itaque. Quidem deleniti beatae odit
        recusandae eum? Totam voluptates ipsam deleniti molestiae id vero!
        Ratione vel id vel.
      </p>
      <span class="product__price">£500.0</span>
    </div>
  );

export default class Home extends Component {
  render() {
    return (
      <main class={style.home}>
        <h1>Buy a bike</h1>
        {
          ids.map(id => <Bike id={id} />)
        }
      </main>
    );
  }
}
