import {h, Component} from 'preact';
import style from './style';

let bikes = [
  ['hDHFJolKMXw', 999.99],
  ['Z7FWYzJXGQs', 299.99],
  ['wolwSgRH3XI', 279.99],
  ['bZSPdkLLi2E', 600],
  ['5UQoVk8_d-4', 899.99],
  ['UjAHjamxDjU', 500],
  ['aLsP-F7a7lI', 200],
  ['tG36rvCeqng', 150],
  ['krrjJuNVsh0', 239],
  ['J61kZQXCtzw', 539.9],
  ['CrzLRM33Wes', 479],
  ['0ClfreiNppM', 254],
  ['Yet0JIOP5Gg', 300],
  ['eTrHMJwI5ro', 600 ],
];

const Bike = ({bike:[id, price]}) => (
  <div class={style.product}>
    <img
      src={`https://source.unsplash.com/${id}/500x300`}
      alt=""
    />
    <h2>Nice Bike Bro</h2>
    <p>
      Lorem magni elit asperiores accusantium iste? Aliquam blanditiis voluptas
      voluptas doloremque nam itaque.
    </p>
    <span>£{price}</span>
    <button>BUY</button>
  </div>
);

const Home = () => (
  <main class={style.shop}>
    <h1 class={style.title}>SHOP</h1>
    {bikes.map(bike => <Bike bike={bike} />)}
  </main>
);

export default Home;
