import "./App.css";

import VideoCard from "./components/VideoCard";

const App = () => {
  return (
    <div className="container">
      <VideoCard
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        alt="image"
      />

      <VideoCard
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvj2fMzmOAbR5-fureGVf_eTERee61iXhbW8hQ8rvyw&s"
        alt="image2"
      />
    </div>
  );
};
export default App;
