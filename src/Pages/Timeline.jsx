import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Timelines } from '../Data/TimelineData';
import bgflr from '../assets/bgflr1.png'
import flwr from '../assets/flwr.png'
import { motion, useAnimation } from 'framer-motion'


const Timeline = () => {
    const controls = useAnimation();
    const [direction, setDirection] = React.useState(1);
  
    React.useEffect(() => {
      controls.start({
        rotate: [null, 360 * direction],
        transition: {
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }
      });
  
      setTimeout(() => {
        setDirection(-1 * direction);
      }, 19000);
    }, [direction, controls]);
    return (
        <>
            <div className='flex relative w-full h-full justify-center items-center overflow-hidden '>
                <motion.div animate={controls} className='absolute top-52 left-100 opacity-60'>
                    <img src={flwr} className='w-full' alt="" />
                </motion.div>

                <motion.div  animate={controls}  className='absolute top-[45%] left-100 opacity-60'>
                    <img src={flwr} className='w-96' alt="" />
                </motion.div>

                <motion.div animate={controls}  className='absolute top-[70%] left-100 opacity-60'>
                    <img src={flwr} className='w-full' alt="" />
                </motion.div>

                <VerticalTimeline>
                    {
                        Timelines.map((data) => (

                            <VerticalTimelineElement
                            key={data.id}
                                animate={ true}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#fbf7d5', color: '#000000' }}
                                contentArrowStyle={{ borderRight: '7px solid  #fbf7d5' }}
                                // date={data?.date}
                                iconStyle={{ background: '#eee174', color: '#fff' }}
                                // icon={''}
                            >
                                <h3 className="vertical-timeline-element-title text-xl font-bold">{data.title}</h3>
                                <p>
                                    {data.description}
                                </p>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Timeline