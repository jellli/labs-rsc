import { Link } from 'waku';

import { Counter } from '../components/counter.js';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <article className='prose text-sm'>
        <h2 className='font-bold'>Counter</h2>
        <p>use with client component</p>
      </article>
      <Counter />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Labs / Waku',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
