import { css } from "../../../styled-system/css";

function Project(props: {
  data: { id: number; title: string; techs: Array<string>; image: string };
}) {
  const { id, title, techs, image } = props.data;
  return (
    <div
      id={"project" + id}
      className={css({
        color: "black",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        textAlign: "center",
        w: "calc(100% / 3 - 40px / 3)",
        cursor: "pointer",
        "&:hover img": { transform: "scale(1.05)" },
        "&:hover h3": { color: "red.800" },
      })}>
      <div className={css({ overflow: "hidden", lineHeight: "1" })}>
        <img
          className={css({ w: "full", transition: "0.3s linear" })}
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className={css({ p: "15px" })}>
        <h3
          className={css({
            fontSize: "24px",
            m: "16px 0",
            transition: "0.3s linear",
            mt: "0px",
          })}>
          {title}
        </h3>
        <div
          className={css({
            pt: "16px",
            borderTop: "1px solid #ccc",
            display: "flex",
            alignItems: "cemter",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          })}>
          {techs.map((tech: string, i: number) => {
            return (
              <span
                className={css({
                  fontSize: "12px",
                  fontWeight: "bold",
                  bgColor: "gray.200",
                  p: "5px",
                  borderRadius: "10px",
                })}
                key={i}>
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
