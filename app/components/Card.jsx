import Image from 'next/image'
import React from 'react'
import cyber from '../../public/cyber-security.jpg'
import robotics from '../../public/robotics.jpg'
import programming from '../../public/programming.jpg'
import language from '../../public/language.jpg'
import health from '../../public/health.jpg'
import Title from '../components/Title'
import management from '../../public/management.jpg'

const card = [
    { branch: 'Information Technology', name: 'Cyber Securite', image: programming, desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', duration: '3 months' },
    { branch: 'Health', name: 'Delegue medical', image: health, desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', duration: '5 months' },
    { branch: 'Language', name: 'English Languge', image: language, desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', duration: '8 months' },
]

const Card = () => {
    return (
        <section className="py-10 mt-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
                <div className="max-w-2xl mx-auto text-center">
                   <Title title='Les Formation Offers ' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum deleniti minima excepturi, mollitia modi earum officiis' />
                </div>

                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12 ">
                    {card.map((item) => (

                        <div key={item.name} className='trans hover:scale-90'>
                            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                <Image className="object-cover w-full h-full" src={item.image} alt="" />
                            </a>
                            <span className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${item.branch == 'Information Technology' ? 'bg-blue-300' : item.branch == 'Health' ? 'bg-rose-300' : 'bg-green-500'}  mt-9`}> {item.branch} </span>
                            <p className="mt-6 text-xl font-semibold">
                                <a href="#" title="" className="text-black"> {item.name} </a>
                            </p>
                            <p className="mt-4 text-gray-600">
                                {item.desc}
                            </p>
                            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-300 "></div>
                            <span className=" text-sm font-bold tracking-widest flex items-center justify-between text-gray-500 uppercase"> {item.duration} <button className="p-4 bg-blue-700 rounded-lg text-white">Enroll &rarr;</button> </span>
                        </div>
                    ))}

                   
                </div>
            </div>
        </section>

    )
}

export default Card