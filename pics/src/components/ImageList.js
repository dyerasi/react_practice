import ImageShow from "./ImageShow";
import "../ImageList.css";

function ImageList({ images }) {
  const rendered_images = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{rendered_images}</div>;
}

export default ImageList;
