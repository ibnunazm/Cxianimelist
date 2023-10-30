import Swiper from 'swiper';

const Swiper = () => {
    useEffect(() => {
      new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, []);
  
    return (
      <div className="swiper-container px-4">
        <div className="swiper-wrapper flex"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  };

export default Swiper;