import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { fetchBg } from "../data/firebase"
import { AnimatedSection, AnimateSee } from "../animation"


export default function Page6({data, id}) {
    const [image, setImage] = useState('')
    // const [story, setStory]= useState(false)
    

    useEffect(() => {
        const getImage = async () => {
            
            const url = await fetchBg(`${id}/story`)
            setImage(url)
        }
        getImage()

    },[])
    return(
        <section>
        {/* {data?.story?.one === '' ? (
            <section>
                <AnimatedSection>
                    <div className="p-2 my-10 ">
                        <img src={image ? image: null} className=" border-4 border-double rounded-2xl " />
                    </div>
                </AnimatedSection>
            </section>
        ):( */}
            <AnimatedSection>
            <section className=" w-[90%] sm:flex bg-green-950 bg-opacity-20 m-auto justify-around items-center my-20  py-5 sm:py-10 px-5 rounded-xl shadow-md shadow-green-900">
                <div className=" sm:w-2/5 ">
                    <img src={image ? image: null} alt="love story"  className="rounded-xl" />
                </div>
                <div className="sm:w-1/2">
                    <h3 className="text-5xl playfair text-center py-5 ">Love Story</h3>
                    <AnimateSee>
                    <p className="">
                        {data?.story?.one || "Mereka bertemu tanpa sengaja di sebuah acara dan mulai berbincang. Awalnya hanya sapaan biasa, tetapi semakin lama, percakapan mereka terasa hangat. Dari hari ke hari, mereka semakin dekat dan menyadari ada perasaan yang tumbuh."}
                    </p>
                    <p className="py-5">
                        {data?.story?.two || "Meski ada perbedaan dan rintangan, mereka belajar untuk saling memahami dan mendukung satu sama lain."}
                    </p>
                    <p className="sm:mb-20">
                    {data?.story?.tree ? data?.story?.tree : "Akhirnya, mereka memutuskan untuk menikah dan memulai hidup baru bersama, dengan harapan cinta mereka terus tumbuh selamanya."}
                    </p>
                    </AnimateSee>
                    <h3 className="text-xl italic  py-3 font-bold playfair text-end">{data?.name?.mens} & {data?.name?.grils}</h3>
                </div>
            </section>
            </AnimatedSection>
        {/* )} */}
        </section>
    )
}
Page6.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}