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
          gridTemplateColumns: {
            base: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: "30px",
        })}>
        {Images.map(({ id, title, description, image }) => {
          return (
            <div
              key={id}
              className={css({
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                padding: "15px",
              })}>
              <a href={image} target="_blank">
                <img
                  src={image}
                  alt={title}
                  className={css({
                    borderRadius: "15px",
                    boxShadow: "0 50px 50px -12px rgb(0 0 0 / 0.20)",
                    transition: "0.3s ease",
                    _hover: { filter: "brightness(0.5)" },
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
