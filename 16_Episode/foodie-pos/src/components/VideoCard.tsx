/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Container.css";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

interface Props {
  imageUrl: string;
  alt: string;
}

const VideoCard = ({ imageUrl, alt }: Props) => {
  return (
    <>
      <img
        className="image_container"
        width={"100%"}
        src={imageUrl}
        alt={alt}
      />
      <div>
        <LeftSideBar />
        <RightSideBar />
      </div>
    </>
  );
};

export default VideoCard;
