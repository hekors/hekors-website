import "./CircleImage.css";
import ReactTooltip from "react-tooltip";

export default function ImgCircle({
  id,
  link,
  name,
  img,
  alt,
  borderColor,
  githubUserName,
}) {
  console.log(link, img, alt);
  return (
    <>
      <a href={link} target="_blank">
        <img
          src={img}
          alt={alt}
          className="h-img-circle"
          style={{
            border: `4px solid ${borderColor}`,
            margin: "0.5rem",
          }}
          data-for={`${id}`}
          data-tip=""
        />
      </a>

      {/* // Tooltip for images  */}
      <ReactTooltip id={`${id}`}>
        {name ? <h5>{name}</h5> : null}

        {githubUserName ? (
          <h5 style={{ marginTop: "0.2rem", textAlign: "center" }}>
            Github Username : {githubUserName}
          </h5>
        ) : null}
      </ReactTooltip>
    </>
  );
}
