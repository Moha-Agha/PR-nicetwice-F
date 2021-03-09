import React from 'react';

const SectionCardSkeleton = ({classStyle}) => {
    return (
        <>
            <div className={classStyle ? "section-card-skeleton "+classStyle : "section-card-skeleton"}>
                <div className="section-card-skeleton_shine"></div>
            </div>
            <div className={classStyle ? "section-card-skeleton "+classStyle : "section-card-skeleton"}>
                <div className="section-card-skeleton_shine"></div>
            </div>
            <div className={classStyle ? "section-card-skeleton "+classStyle : "section-card-skeleton"}>
                <div className="section-card-skeleton_shine"></div>
            </div>
            <div className={classStyle ? "section-card-skeleton "+classStyle : "section-card-skeleton"}>
                <div className="section-card-skeleton_shine"></div>
            </div>
            <div className={classStyle ? "section-card-skeleton "+classStyle : "section-card-skeleton"}>
                <div className="section-card-skeleton_shine"></div>
            </div>
            <div className={classStyle ? "section-card-skeleton "+classStyle : "section-card-skeleton"}>
                <div className="section-card-skeleton_shine"></div>
            </div>
        </>
    )
}

export default SectionCardSkeleton;