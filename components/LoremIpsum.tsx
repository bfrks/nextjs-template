'use client';

import { useState } from 'react';
import { useFetch } from '@utils/fetch';
import s from '@styles/components/LoremIpsum.module.scss';

function LoremIpsum() {
  const { data, isLoading, isError } = useFetch<string>('/api/lorem');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  return <p>{data}</p>;
}

function Container() {
  const [shouldFetchLorem, setShouldFetchLorem] = useState(false);

  const onClickFn = () => {
    setShouldFetchLorem(true);
  };

  return (
    <div className={s.container}>
      <button className={s.btn} onClick={onClickFn}>
        Click me
      </button>
      {shouldFetchLorem && <LoremIpsum />}
    </div>
  );
}

export default Container;
