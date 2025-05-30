import {keyframes, motion,  AnimatePresence,scale} from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section className="h-screen bg-gradient-to-b
    from-violet-900 to-black flex xl:flex-row 
    flex-col-reverse items-center justify-between 
    lg:px-24 px-10 relative overflow:hidden  ">
    {/* left section */}
    <div className='z-40 xl:mb-0 mb-[20%]'>
        <motion.h1 
        initial={{ opacity: 0, y: 80 }}
        animate={{opacity:1, y:0}}
        transition={{
            type: "spring",
            stiffness: 40,
            damping:25,
            duration: 1.5,
             delay: 1.3 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 ">Building fast <br />Reliable Results</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 80 }}
        animate={{opacity:1, y:0}}
        transition={{
            type: "spring",
            stiffness: 40,
            damping:25,
            duration: 1.5,
             delay: 1.8 }}
        className='text-xl md:text-1xl lg:text-2xl
         text-violet-200 max-w-2xl'>
               Hi, I’m a recent Master’s graduate in Computer Science with a passion for frontend development
            and crafting interactive, visually rich web experiences.
               I enjoy building responsive, user-friendly 
            websites using technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. I'm particularly
            interested in bringing interfaces to life through animations and motion design using tools like GSAP and Three.js. 
           
        </motion.p>
    </div>

    {/* right section */}

    <div className="">
    
      <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
      scene="https://prod.spline.design/CgqDaZLuGoVUSxKt/scene.splinecode" />

    </div>
    </section>
  )
}
