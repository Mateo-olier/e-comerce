import React from "react";
import AliceCarousel from "react-alice-carousel";

export default function Main() {
  const onSlideChange = (e) => {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  };

  const onSlideChanged = (e) => {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  };
  return (
    <div>
      <main>
        <AliceCarousel
          duration={1000}
          autoPlay={true}
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          autoPlayInterval={1000}
          infinite={true}
          autoPlayActionDisabled={true}
          onSlideChange={onSlideChange}
          onSlideChanged={onSlideChanged}
        >
          <div className="yours-custom-class">
            <div className="context">
              <div className="description">
                <h1>New Collection 2</h1>
              </div>
            </div>

            <div className="image">
              <img src="./img/coleccion.png" />
            </div>
          </div>
          <div className="yours-custom-class">
            <h2>2</h2>
          </div>
          <div className="yours-custom-class">
            <h2>3</h2>
          </div>
          <div className="yours-custom-class">
            <h2>4</h2>
          </div>
          <div className="yours-custom-class">
            <h2>5</h2>
          </div>
        </AliceCarousel>
      </main>
    </div>
  );
}
