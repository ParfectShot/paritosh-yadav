import BlockLoader from '@root/components/BlockLoader';

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BlockLoader />
      <BlockLoader mode={1} />
      <BlockLoader mode={4} />
      <BlockLoader mode={5} />
      <BlockLoader mode={6} />
    </div>
  );
}
