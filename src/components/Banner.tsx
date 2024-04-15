import clsx from 'clsx';

export async function Banner() {
  return (
    <div className={clsx('w-full h-[40vh] relative')}>
      <div className='w-full h-full bg-zinc-800 animate-pulse' />
      <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-[url('https://picsum.photos/1800/600')]`} />
    </div>
  );
}
