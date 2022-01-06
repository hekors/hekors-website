import "./CircleImage.css";
import ReactTooltip from "react-tooltip";

export default function ImgCircle({
  link,
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
            border: `7px solid ${borderColor}`,
            margin: "0.5rem",
          }}
          data-for={`${githubUserName}`}
          data-tip=""
        />
      </a>

      <ReactTooltip id={`${githubUserName}`}>
        <h5 style={{ marginTop: "0.2rem", textAlign: "center" }}>
          Github Username : {githubUserName}
        </h5>
      </ReactTooltip>
    </>
  );
}
