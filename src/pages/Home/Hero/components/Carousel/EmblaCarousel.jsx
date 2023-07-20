import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import useEmblaCarousel from 'embla-carousel-react';
import imageByIndex from './imageByIndex';
import '../../../../../css/embla.css'

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach(loopItem => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  useLayoutEffect(() => {
    if (emblaApi) {
      const middleIndex = Math.floor(slides.length / 2);
      emblaApi.scrollTo(middleIndex);
    }
  }, [emblaApi, slides]);

  return (
    <div className="carousel-container">
      <button className="button-prev" onClick={emblaApi ? emblaApi.scrollPrev : undefined}>
        <FiArrowLeftCircle className='text-white'/>
      </button>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
              >
                <img className="embla__slide__img" src={imageByIndex(index)} alt="Your alt text" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="button-next" onClick={emblaApi ? emblaApi.scrollNext : undefined}>
        <FiArrowRightCircle className='text-white'/>
      </button>
    </div>
  );
};

export default EmblaCarousel;
