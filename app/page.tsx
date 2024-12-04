import Card from '../app/components/Card'  
import Hero from '../app/components/Hero'  
import Program from '../app/components/Program'  
import About from '../app/components/About' 
import Contact from './contact/page'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], })
export default function Home() {
  return (
   <div className=''>
      <div className={roboto.className}>
        <Hero />
        <Program />
        <Card />
        <About />
        <Contact />
     </div> 
   </div>
  );
}
