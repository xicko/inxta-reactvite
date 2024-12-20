import '../index.css';
import Screenshots from './Screenshots';
import ButtonA from './ButtonA';
import Button from './Button';

const Hero = ({setIsVisible}: any) => {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-center md:space-x-20 text-white customfont-title pt-[120px]">
        <div className=' flex justify-center flex-col items-center text-center'>
          <img
            src='/logoinxta_small.webp'
            alt="Inxta Logo"
            className="md:max-w-[200px] md:max-h-[200px] max-w-[150px] max-h-[150px] mb-6"
            fetchPriority="high"
            width={200}
            height={200}
            draggable="false"
          />

          <h1 className='font-bold tracking-wide md:text-9xl text-8xl animate-glow'>Inxta</h1>

          <p className='md:text-4xl text-2xl'>A better Instagram.</p>

          <div className='flex justify-center flex-row md:space-x-6 space-x-4 my-6'>
            <div>
              <ButtonA download={true} text='Download' link='https://dl.dashnyam.com/inxta.apk' glow={true} color='flex justify-center place-items-center md:h-[60px] h-[50px] md:w-[170px] w-[130px] border-2 border-sky-200 bg-sky-200 hover:bg-transparent text-slate-800 hover:text-sky-200 md:text-3xl text-xl'/>
            </div>

            <div onClick={() => setIsVisible(true)}
            >
              <Button text='Changelog' glow={true} color='inline-block md:h-[60px] h-[50px] md:w-[170px] w-[130px] border-2 border-slate-200 bg-slate-200 hover:bg-transparent text-slate-800 hover:text-slate-100 md:text-3xl text-xl'/>
            </div>
          </div>

          <p className='customfont-base md:text-2xl text-slate-200'>Android 9.0+</p>
        </div>

        <div className='flex justify-center'>
          <Screenshots classes='md:w-[340px] w-[80%] h-auto'/>
        </div>
      </section>
    </>
  )
}

export default Hero