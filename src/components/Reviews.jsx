import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      nextPerson();
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

 
  const nextPerson = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

 
  const prevPerson = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const person = data[index];

  return (
    <div
      id="review-container"
      style={{
        width: "350px",
        margin: "30px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <img
        id={`person-${index}-image`}
        src={person.image}
        alt={person.name}
        width="120"
        height="120"
        style={{ borderRadius: "50%" }}
      />

      <h3 id={`person-${index}`} style={{ marginTop: "10px" }}>
        {person.name}
      </h3>

      <p style={{ fontStyle: "italic", color: "gray" }}>{person.title}</p>

      <p style={{ marginTop: "10px" }}>{person.quote}</p>

      <div style={{ marginTop: "15px" }}>
        <button className="prev" onClick={prevPerson} style={{ marginRight: "10px" }}>
          Prev
        </button>
        <button className="next" onClick={nextPerson}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Reviews;
