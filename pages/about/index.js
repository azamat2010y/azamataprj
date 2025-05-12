import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'Навыки',
    info: [
      {
        title: 'Веб-разработка',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          // <SiFramer />,
          // <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX дизайн',
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: 'Награды',
    info: [
      {
        title: 'Cертификат "Web Developer"',
        stage: '17.08.2023',
      },
    ],
  },
  {
    title: 'Опыт',
    info: [
      {
        title: ' создание уникальных веб-сайтов, разработку эффективного контента и оптимизацию для поисковых систем.',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion 
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

//counter
// import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index);
    return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial="hidden" 
      animate="show" 
      exit="hidden" 
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-8">
          <h2 className="h2">Захватывающие <span className="text-accent">истории</span> рождают великолепные проекты. </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"></p>
          {/* counters */}
          <div>
            <div>
                {/* {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-10 after:right-0">
                  <div>
                    <CountUp start={0} end={10} duration={5}   /> +
                  </div>
                  <div>Years of experience</div>
                </div> */}
              </div>
            </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-1">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
              <div 
              key={itemIndex} 
              className={`${index === itemIndex && 'text-accent after:w-[100%] after:text-accent after:transition-all after:duration-300'}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex)=> {
              return ( 
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                      {item.icons?.map((icon, itemIndex)=> {
                      return <div className="text-2xl text-white">{icon}</div>
                  })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default About