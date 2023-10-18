const ShimmerCard = () => {
  return (
    <div className='flex flex-col gap-5 rounded-lg overflow-hidden border shadow-sm w-[300px]'>
      <div className='h-52 p-10 mb-6 bg-stone-200'></div>
      <div className='flex flex-col gap-5 px-5 pb-7'>
        <div className='pr-[100%] pb-5 bg-stone-300'></div>
        <div className='pr-[85%] pb-5 bg-stone-300'></div>
        <div className='pr-[80%] pb-5 bg-stone-300'></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className='container mx-auto py-8'>
      <div className='flex flex-wrap gap-6 w-full mx-auto'>
        {Array.from({ length: 16 }, (value, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default Shimmer;
