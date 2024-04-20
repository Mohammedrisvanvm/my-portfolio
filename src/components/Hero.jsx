import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
const Hero = () => {
  return (
    <section className="relative w-full h-[680px] mx-auto">
      <div
        className={`${styles.paddingX} absolute insect-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="w-1  h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Mohammed Risvan VM</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Self-taught MERN stack developer.
          </p>
        </div>
      </div>

      <div className="sm:pt-20"></div>
      <ComputersCanvas />

      <div className="absolute w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 19, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
