import { Carousel } from "keep-react";

const CarouselUI = () => {
    return (
        <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicatorsType="ring" indicators={true}>
          <image
            src="https://media.e-valy.com/cms/banners/ff2cb3b9-13ef-48c2-a971-1438f74a18cc"
            alt="slider-1"
            height={400}
            width={910}
          />
          <image
            src="https://media.e-valy.com/cms/banners/ff2cb3b9-13ef-48c2-a971-1438f74a18cc"
            alt="slider-2"
            height={400}
            width={910}
          />
          <image
            src="https://media.e-valy.com/cms/banners/ff2cb3b9-13ef-48c2-a971-1438f74a18cc"
            alt="slider-3"
            height={400}
            width={910}
          />
          <image
            src="https://media.e-valy.com/cms/banners/ff2cb3b9-13ef-48c2-a971-1438f74a18cc"
            alt="slider-4"
            height={400}
            width={910}
          />
        </Carousel>
      </div>
    );
};

export default CarouselUI;