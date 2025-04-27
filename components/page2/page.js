import { useEffect, useState } from 'react'
import style from './style.module.css'
import { fetchBg, fetchImage } from '../data/firebase'
import PropTypes from 'prop-types'
import { AnimateSee } from '../animation'
import Countdown from 'react-countdown'

export default function Page2({data, id}) {
    const [image, setImage] = useState('')
    const time = `${data?.date?.all}`
    
    const wedingDate =  new Date(`${time}T10:00:00`)

    useEffect(()=> {
        const getImage = async () => {
            const url = await fetchBg(`${id}/home`)
            setImage(url)
        }
        getImage()
    },[])
    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
              // return setSave(false)
            // Render a completed state
            return (<span className="text-xl">Hari Penikahan Telah Tiba!!</span>);
          } else {
            // Render a countdown
            return (
                <><div style={{ fontSize: '2rem', textAlign: 'center' }} className="flex w-[90%]  sm:w-3/4 lg:w-1/3 m-auto font-serif text-white p-2 justify-between ">
                <div className="rounded-full bg-green-800 border border-white w-[4.5rem] h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-2xl font-bold">
                    {days}
                    <p className="text-sm font-normal">Days</p>
                  </div>
                </div>
                <div className=" rounded-full bg-green-800 border border-white w-[4.5rem] h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-2xl font-bold">
                    {hours}
                    <p className="text-sm font-normal">Hours</p>
                  </div>
                </div>
                <div className=" rounded-full bg-green-800 border border-white w-[4.5rem] h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-2xl font-bold">
                    {minutes}
                    <p className="text-sm font-normal">Minutes</p>
                  </div>
                </div>
                <div className=" rounded-full bg-green-800 border border-white w-[4.5rem] h-[4.5rem]  flex justify-center items-center">
                  <div className="leading-6 text-2xl font-bold">
                    {seconds}
                    <p className="text-sm font-normal">Seconds</p>
                  </div>
                </div>
              </div></>
            );
          }
        };

    return(
        <section className='sm:px-20 sm:py-20'>
            <div style={{backgroundImage : `url(${image})`}} className={`${style.bg} w-full h-screen sm:h-[80vh] sm:shadow-md  sm:shadow-green-800 overflow-hidden sm:rounded-xl`}>
                <div className={`${style.wrap} relative z-10 h-screen sm:h-[80vh]`}>
                    <AnimateSee>
                    <div style={{textShadow: '1px 1px #065f46 '}} className='mt-96 sm:mt-56 text-center sm:ml-10   relative z-10  '>
                        <p>The Wedding Of</p>
                        <h3 className="text-2xl playfair font-bold sm:text-3xl py-2 text-center  flex flex-wrap justify-center ">
                        <span className="whitespace-nowrap flex-1 text-center italic">{data?.name?.namaLengkap?.mens}</span>
                        <span className="w-full text-center">&</span>
                        <span className="whitespace-nowrap flex-1 text-center italic">{data?.name?.namaLengkap?.grils}</span>
                        </h3>
                        {/* <h3 className='text-3xl playfair font-bold sm:text-4xl py-2'>{data?.name?.mens} & {data?.name?.grils}</h3> */}
                        <p>{data?.date?.resepsi}</p>
                    <Countdown date={wedingDate} renderer={renderer} />
                    </div>
                    </AnimateSee>
                </div>
            </div>
                    <AnimateSee>
                    <p className='relative my-10 sm:mt-[20vh] w-[95%]  sm:max-w-[1000px] mx-auto text-center   sm:text-start text-sm  sm:text-xl italic leading-tight z-10'>
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                        supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." (QS. Ar-Rum: 21)
                    </p>
                    </AnimateSee>
        </section>
    )
}

Page2.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}