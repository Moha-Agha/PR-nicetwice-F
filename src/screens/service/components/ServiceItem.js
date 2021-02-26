import React from "react";

const ServiceItem = ({ color='',icon = '', title = '', price = '', notic = '', time = '' }) => {


  return (
    <div className='service-item'>
      <div className={'service-item-card c-'+ color}>
         <i className='material-icons md-52'>{icon}</i> 
        <p className='service-item-title'>{title}</p>
        {/* <div className='service-item-price'>{price === ' ' ?'':'ab '+price+' €'}</div> */}

        <div className='service-item-time'>{time === ' ' ? 'Zeit und Kosten sind' : 'in ca.'} {time}</div>
        <div className='service-item-notic'>{notic}</div>
      </div>
    </div>
  );
};

export default ServiceItem;



