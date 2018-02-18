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
  <div class={style.product}>
    <img
      class={style.img}
      src={`https://source.unsplash.com/${id}/500x300`}
      alt=""
    />
    <h2 class={style.name}>Nice Bike Bro</h2>
    <p class={style.description}>
      Lorem magni elit asperiores accusantium iste? Aliquam blanditiis voluptas
      voluptas doloremque nam itaque.
    </p>
    <span class={style.price}>£500.0</span>
    <button class={style.button}>BUY</button>
  </div>
);

const Home = () => (
  <main class={style.shop}>
    <h1 class={style.title}>SHOP</h1>
    {ids.map(id => <Bike id={id} />)}
  </main>
);

export default Home;
