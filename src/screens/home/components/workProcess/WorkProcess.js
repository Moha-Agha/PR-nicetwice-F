import React, {useState} from 'react';
import {HOME_LOCA} from '../../../../localization/de/Language';

import briefing from '../../../../media/svg/briefing.svg';
import design from '../../../../media/svg/design.svg';
import programing from '../../../../media/svg/programing.svg';

const WorkProcess = ({isMobile}) => {

    const [open, setOpen] = useState(1);

    return (       
        <div id="work-process">
          <div className={isMobile? "container-mobile":"container"}>
            <div className="work-process_container">

                <div className="work-process_text">
                    <div className="work-process_text_title">{HOME_LOCA.workProcessTitle}</div>

                    <div className="work-process_text_content">
                        <div className={open === 1 ?
                        "work-process_text_content_item":
                        "work-process_text_content_item_disable"}> 
                            <h3 onClick={()=>setOpen(1)}>{HOME_LOCA.stepOneTitle}</h3>
                            <div>{HOME_LOCA.stepOneContent}</div>
                        </div>
                        <div className={open === 2 ?
                        "work-process_text_content_item":
                        "work-process_text_content_item_disable"}>
                            <h3 onClick={()=>setOpen(2)}>{HOME_LOCA.stepTwoTitle}</h3>
                            <div>{HOME_LOCA.stepTwoContent}</div>
                        </div>
                        <div className={open === 3 ?
                        "work-process_text_content_item":
                        "work-process_text_content_item_disable"}>
                            <h3 onClick={()=>setOpen(3)}>{HOME_LOCA.stepThreeTitle}</h3>
                            <div>{HOME_LOCA.stepThreeContent}</div>
                        </div>
                    </div>
                </div>

                <div className="work-process_image">
                    <img src={open === 1 ? briefing : open === 2 ? design : programing  } alt={'nicetwice'} />
                </div>

                <div className="work-process_nav">
                    <div onClick={()=>setOpen(1)} className={open === 1 ?
                        "work-process_nav_item work-process_nav_item_active":
                        "work-process_nav_item"}></div>
                    <div onClick={()=>setOpen(2)} className={open === 2 ?
                        "work-process_nav_item work-process_nav_item_active":
                        "work-process_nav_item"}></div>
                    <div onClick={()=>setOpen(3)} className={open === 3 ?
                        "work-process_nav_item work-process_nav_item_active":
                        "work-process_nav_item"}></div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default WorkProcess

