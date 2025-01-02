import { css } from "../../../../styled-system/css";
import Images from "../../data/Images";
import Header from "../layouts/Header";
function Gallery() {
  return (
    <>
      <Header />
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        })}>
        {Images.map(({ id, title, description, image }) => {
          return (
            <div key={id}>
              <a href={image} target="_blank">
                <img
                  src={image}
                  alt={title}
                  className={css({
                    borderRadius: "15px",
                    boxShadow: "0 50px 50px -12px rgb(0 0 0 / 0.20)",
                  })}
                />
              </a>
              <p
                className={css({
                  textAlign: "center",
                  mt: "10px",
                  mx: "20px",
                  fontSize: "14px",
                })}>
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
