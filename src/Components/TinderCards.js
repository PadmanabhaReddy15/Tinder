import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [user, setUser] = useState([
    {
    name: "Autumn",
    imgUrl: "https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg",
    },
    {
      name: "Winter",
      imgUrl: "https://i.pinimg.com/736x/f0/08/96/f00896b2e5b724a1c981e0b53f9c7cac.jpg",
    },
    {
      name: "Waterfall",
      imgUrl: "https://www.story-journal.com/wp-content/uploads/2021/05/most-beautiful-places-in-the-world-Seljalandsfoss__Iceland-1.jpeg"
    },
    {
      name: "Autumn Season",
    imgUrl: "https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-31720.jpg?w=2000"
  },
  {
    name: "Autumn Monsoon",
    imgUrl: "https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg",
    },
    {
      name: "Winter cool",
      imgUrl: "https://i.pinimg.com/736x/f0/08/96/f00896b2e5b724a1c981e0b53f9c7cac.jpg",
    },
    {
      name: "Waterfall Live",
      imgUrl: "https://www.story-journal.com/wp-content/uploads/2021/05/most-beautiful-places-in-the-world-Seljalandsfoss__Iceland-1.jpeg"
    },
    {
      name: "Autumn Cool",
    imgUrl: "https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-31720.jpg?w=2000"
  }
]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {user.map((user) => (
          <TinderCard
            className="swipe"
            key={user.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, user.name)}
            onCardLeftScreen={() => outOfFrame(user.name)}
          >
            <div
              style={{ backgroundImage: `url(${user.imgUrl})` }}
              className="card"
            >
              <h3>{user.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
