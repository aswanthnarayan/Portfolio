
const Hero = () => {
    return (
      <div className='h-full flex'>
        <div className='w-1/2 flex flex-col justify-center gap-8 pl-24'>
          <h2 className='text-2xl uppercase tracking-[.625rem] self-start'>aswanth c k</h2>
          <h1 className='text-6xl uppercase leading-[1.2]'>Web developer and UI designer</h1>
          <div className='flex gap-3'>
            <button className='border border-white p-2 rounded-xl'>See the Latest Works</button>
            <button className='border border-white p-2 rounded-xl'>Contact Me</button>
          </div>
        </div>
        <div className='w-1/2'>
          <img className="h-full overflow-hidden" src="/hero.png" alt="" />
        </div>
      </div>
    )
  }
  
  export default Hero;
  