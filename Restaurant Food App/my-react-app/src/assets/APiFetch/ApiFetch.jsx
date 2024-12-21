import "./ApiFetch.css";
import { useState, useRef, useEffect } from "react";
export default function ApiFetch() {
  const [data, setData] = useState();
  const [image, setImage] = useState([]);
  const [h1, setH1] = useState([]);

  useEffect(() => {
    Fetch();
  }, []);

  async function Fetch() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      // console.log(response);

      if (!response.ok) {
        throw new Error("Error Fetching");
      }

      const data = await response.json();
      // console.log(data);
      // setData(data);

      // Arrays To Store The Fetched Items
      const ArrayOfImages = [];
      const ArrayOfh1 = [];
      // Loop THrow The Images
      for (let i = 0; i < 8; i++) {
        const FetchedImages = data.categories[i].strCategoryThumb;

        ArrayOfImages.push(FetchedImages);
      }
      // Loop Throw The h1a
      for (let i = 0; i < 8; i++) {
        const Fetchedh1 = data.categories[i].strCategory;

        ArrayOfh1.push(Fetchedh1);
      }
      // Set The Value Of The UseState Values To The Arrays
      setImage(ArrayOfImages);
      setH1(ArrayOfh1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Fetch">
      {h1.map((item, index) => (
        <h1 key={index} className={`item${index}`} id="h1s">
          {item}
          <p className="para">Ipsum ipsum clita erat amet dolor justo diam</p>
          <p className="price">$115</p>
        </h1>
      ))}

      {image.map((item, index) => (
        <img src={item} key={index} alt="" className={`img${index}`} />
      ))}
    </div>
  );
}
