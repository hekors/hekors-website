import { FaBars } from "react-icons/fa";
import MLHLHDBuild_Step01 from "../../assets/mlh_localhackday_step01.svg";
import MLHLHDBuild_Step02 from "../../assets/mlh_localhackday_step02.svg";
import Button from "../../components/elements/Button";
import Input from "../../components/elements/Input";

export default function MLHLocalHackDayBuild2022() {
  return (
    <div className="MLHLocalHackDayBuild2022-page">
      <div
        className="mlh-localhackday-build-2022-hero-section-wrapper content-center"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "4.8rem",
          paddingTop: "2.4rem",
          paddingBottom: "2.4rem",
        }}
      >
        <div className="hero-section-content-wrapper">
          <h1 className="hero-section-title" style={{ fontSize: "46px" }}>
            Happy New Year <span style={{ fontWeight: "500" }}>🥂</span> <br />
            <span style={{ color: "var(--h-pink)" }}>
              MLH LocalHackDay: Build
            </span>{" "}
            <br />
            is here.
          </h1>
          <p
            className="hero-section-description"
            style={{ fontSize: "18px", fontWeight: "600", marginTop: "0.4rem" }}
          >
            Hekors, It's time to ASSEMBLE!
          </p>
        </div>
        <img
          src="https://i2.wp.com/www.4ye.co.uk/wp-content/uploads/2014/09/avengers-gif_o_145258.gif?resize=500%2C268&ssl=1"
          alt="developer-image"
          style={{
            width: "540px",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      {/* starting: steps container */}
      <div className="steps-container content-center">
        <div
          className="step-01-register-wrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "4.2rem",
            paddingTop: "2.4rem",
            paddingBottom: "2.4rem",
          }}
        >
          <div className="hero-section-content-wrapper">
            <h1 className="hero-section-title" style={{ fontSize: "28px" }}>
              Step[0]: Create an account and Register for LocalHackDay: Build
              (2022)
            </h1>
            <ul
              className="steps-list"
              style={{ marginTop: "2.4rem", lineHeight: "1.4" }}
            >
              <li className="step-item">
                Go to{" "}
                <a
                  href="https://localhackday.mlh.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://localhackday.mlh.io/
                </a>
              </li>
              <li className="step-item">
                Go to <FaBars /> Menu on the website and Click on{" "}
                <span className="gradient-text">Register</span> or <br />
                directly go to{" "}
                <a
                  href="http://hackp.ac/build2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://hackp.ac/build2022
                </a>
              </li>
            </ul>
          </div>
          <img
            src={MLHLHDBuild_Step01}
            alt="developer-image"
            style={{
              width: "500px",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              padding: "0",
            }}
          />
        </div>

        <div
          className="step-02-register-wrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "4.2rem",
            paddingTop: "2.4rem",
            paddingBottom: "2.4rem",
          }}
        >
          <div className="hero-section-content-wrapper">
            <h1 className="hero-section-title" style={{ fontSize: "28px" }}>
              Step[1]: Login/Create an account and Register
            </h1>
            <ul
              className="steps-list"
              style={{ marginTop: "2.4rem", lineHeight: "1.4" }}
            >
              <li className="step-item">
                Go to{" "}
                <a
                  href="https://organize.mlh.io/participants/events/7191-local-hack-day-build-2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  Login and Register
                </a>
              </li>
              <li className="step-item">
                Login to your account or Create one if you don't have one. And
                the Register for the hackathon
              </li>
            </ul>
          </div>
          <img
            src={MLHLHDBuild_Step02}
            alt="developer-image"
            style={{
              width: "500px",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              padding: "0",
            }}
          />
        </div>
      </div>
      {/* ending: steps container */}
    </div>
  );
}
