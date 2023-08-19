import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactPreview from './ContactPreview';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent"}}
      onClick={onClick}
    />
  );
}

const Carousel = ({ contacts }) => {
  // console.log(contacts);
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    buttons: false,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='carousel-container'>
      <Slider ref={slider} {...settings}>
        {contacts.map(contact => (
          // <div key={contact._id} className='card'>
          <ContactPreview contact={contact} key={contact._id} className='card' />
          // </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;