import Link from 'next/link';

const Home = (): JSX.Element => (
  <main>
    <h1>Home</h1>
    <ul>
      <li>
        <Link href={'talks'}>Talks</Link>
      </li>
      <li>
        <Link href={'speakers'}>Speakers</Link>
      </li>
    </ul>
  </main>
);

export default Home;
