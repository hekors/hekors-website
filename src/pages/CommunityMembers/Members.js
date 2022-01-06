import { useState, useEffect } from "react";
import "./Members.css";
import Button from "../../components/elements/Button";
import ImgCircle from "../../components/elements/CircleImage";
import { FaGithub } from "react-icons/fa";

export default function Members() {
  const [members, setMembers] = useState([]);
  //get random color
  const colors = ["#ffc6c7", "#c3f0ca", "#eebbc3", "#b8c1ec", "#3da9fc"];

  //useEffect get all members form github api and set to state
  useEffect(() => {
    fetch("https://api.github.com/orgs/hekors/public_members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  return (
    <>
      <div
        className="content-center text-center w-50 rounded-5 gradient-bg"
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          padding: "2.4rem",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            fontWeight: "600",
            marginBottom: "0.4rem",
          }}
        >
          Hi there !
        </h1>
        <p>
          We're a community of folks who are passionate about building great
          products, website, softwares, designs and many more, and we're always
          looking for new members to join us and make this community even
          better.
        </p>

        <div
          className="d-flex justify-content-center"
          style={{
            marginTop: "2rem",
          }}
        >
          <Button type="plain">
            {" "}
            <FaGithub
              style={{
                fontSize: ".9rem",
              }}
            />{" "}
            Join our github organization{" "}
          </Button>
        </div>
      </div>
      {/* Founding Members  */}
      <div
        className="d-flex justify-content-center"
        style={{
          margin: "2rem",
        }}
      >
        <h3>Founding Members</h3>
      </div>
      <div className="members-list-wrapper">
        {members.map((member, index) => {
          const randomNumber = Math.floor(Math.random() * colors.length);

          return (
            <div className="member-wrapper" key={index}>
              <ImgCircle
                link={member.html_url}
                img={member.avatar_url}
                alt={member.login}
                borderColor={colors[randomNumber]}
                githubUserName={member.login}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
