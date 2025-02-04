import BlockLoader from '@root/components/BlockLoader';

export default function Loading() {
  return (
    <div className="w-full h-100 flex justify-center items-center gap-2">
      <BlockLoader />
      <BlockLoader mode={1} />
      <BlockLoader mode={4} />
      <BlockLoader mode={5} />
      <BlockLoader mode={6} />
    </div>
  );
}
