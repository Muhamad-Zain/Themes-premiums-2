import { useEffect, useState } from 'react'
import style from './style.module.css'
import { fetchBg, fetchImage } from '../data/firebase'
import PropTypes from 'prop-types'
import { AnimateSee } from '../animation'

export default function Page2({data, id}) {
    const [image, setImage] = useState('')

    useEffect(()=> {
        const getImage = async () => {
            const url = await fetchBg(`${id}/home`)
            setImage(url)
        }
        getImage()
    },[])

    return(
        <section className='sm:px-20 sm:py-20'>
            <div style={{backgroundImage : `url(${image})`}} className={`${style.bg} w-full h-screen sm:h-[80vh] sm:shadow-md  sm:shadow-green-800 overflow-hidden sm:rounded-3xl`}>
                <div className={`${style.wrap} relative z-10 h-screen sm:h-[80vh]`}>
                    <AnimateSee>
                    <div style={{textShadow: '1px 1px #065f46 '}} className='text-center sm:text-start sm:ml-10  p-10 relative z-10  '>
                        <p>The Wedding Of</p>
                        <h3 className="text-2xl playfair font-bold sm:text-3xl py-2 text-center sm:text-left sm:justify-self-start  flex flex-wrap justify-center ">
                        <span className="whitespace-nowrap flex-1 text-center sm:text-left italic">{data?.name?.namaLengkap?.mens}</span>
                        <span className="w-full text-center sm:text-left sm:pl-5">&</span>
                        <span className="whitespace-nowrap flex-1 text-center sm:text-left italic">{data?.name?.namaLengkap?.grils}</span>
                        </h3>
                        {/* <h3 className='text-3xl playfair font-bold sm:text-4xl py-2'>{data?.name?.mens} & {data?.name?.grils}</h3> */}
                        <p>{data?.date?.resepsi}</p>
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