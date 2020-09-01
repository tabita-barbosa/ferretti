import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
import data from "../../depos.json";
import './styles.css';

const CarouselDepos = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = data.map((depos) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <p className="text-center">{depos.text}</p>
          <p className="text-right">{depos.author}</p>
        </CarouselItem>
      );
    } );
  
    return (
      <div>
      <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {/* <CarouselIndicators data={data} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>
    );
}

export default CarouselDepos;