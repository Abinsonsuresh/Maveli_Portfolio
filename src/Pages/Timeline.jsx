import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Timelines } from '../Data/TimelineData';
import bgflr from '../assets/bgflr1.png'
import flwr from '../assets/flwr.png'

const Timeline = () => {
    return (
        <>
            <div className='flex relative w-full h-full justify-center items-center'>
                <div className='absolute top-52 left-100 opacity-75'>
                    <img src={flwr} className='w-full' alt="" />
                </div>
                <VerticalTimeline>
                    {
                        Timelines && Timelines.map((data) => (
                            <VerticalTimelineElement
                            key={data.id}
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