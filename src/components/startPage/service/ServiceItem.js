import React from "react";

const ServiceItem = ({ icon = '', title = '', price = '', notic = '', time = '' }) => {

  return (
    <div className='service-item'>
      <div className='service-item-card'>
        <i className={icon}></i>
        <div className='service-item-price'>ab {price} €</div>

        <div className='service-item-time'>{time === 'Unbegrenzt' ? '' : 'in ca.'} {time}</div>
        <div className='service-item-notic'>{notic}</div>
      </div>
      <p className='service-item-title'>{title}</p>
    </div>
  );
};

export default ServiceItem;



