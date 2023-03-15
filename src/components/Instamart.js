import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsvisible }) => {
  return (
    <>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        <h1>{title}</h1>
        {isVisible ? (
          <button
            onClick={() => {
              setIsvisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => {
              setIsvisible(true);
            }}
          >
            Show
          </button>
        )}

        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};

const Instamart = () => {
  const [isVisible, setIsvisible] = useState(false);

  return (
    <div>
      <Section
        isVisible={isVisible}
        setIsvisible={setIsvisible}
        title={"About"}
        description={
          " established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes b"
        }
      />
      <Section
        isVisible={isVisible}
        setIsvisible={setIsvisible}
        title={"Team"}
        description={
          " established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes b"
        }
      />
      <Section
        isVisible={isVisible}
        setIsvisible={setIsvisible}
        title={"Career"}
        description={
          " established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes b"
        }
      />
    </div>
  );
};

export default Instamart;
