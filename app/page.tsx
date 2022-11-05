import LoremIpsum from '@components/LoremIpsum';
import s from '@styles/app/page.module.scss';

export default function Home() {
  return (
    <div className={s.container}>
      <h1>Hello World!</h1>
      <LoremIpsum />
    </div>
  );
}
