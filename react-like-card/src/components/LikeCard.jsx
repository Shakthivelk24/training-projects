import { useState } from "react";

function LikeCard({
  name,
  role,
  location,
  message,
  likes
}) {

  /* =========================================
     STATE
  ========================================= */

  const [isLiked, setIsLiked] =
    useState(false);

  const [likeCount, setLikeCount] =
    useState(likes);


  /* =========================================
     LIKE HANDLER
  ========================================= */

  const handleLike = () => {

    if (isLiked) {

      setLikeCount(
        likeCount - 1
      );

    } else {

      setLikeCount(
        likeCount + 1
      );

    }

    setIsLiked(!isLiked);
  };


  /* =========================================
     GET INITIALS
  ========================================= */

  const initials = name
    .split(" ")
    .map(
      (word) => word[0]
    )
    .join("")
    .slice(0, 2)
    .toUpperCase();


  /* =========================================
     UI
  ========================================= */

  return (
    <article className="like-card">


      {/* ==============================
          PROFILE
      ============================== */}

      <div className="profile">

        <div className="avatar">
          {initials}
        </div>


        <div className="profile-details">

          <h2>
            {name}
          </h2>

          <p>
            {role}
          </p>

        </div>

      </div>


      {/* ==============================
          LOCATION
      ============================== */}

      <div className="location">

        <span className="location-icon">
          ●
        </span>

        {location}

      </div>


      {/* ==============================
          MESSAGE
      ============================== */}

      <p className="message">
        {message}
      </p>


      {/* ==============================
          DIVIDER
      ============================== */}

      <div className="divider"></div>


      {/* ==============================
          LIKE COUNT
      ============================== */}

      <div className="like-count">

        <span
          className={
            isLiked
              ? "heart liked-heart"
              : "heart"
          }
        >
          {isLiked ? "♥" : "♡"}
        </span>

        <span>
          {likeCount} Likes
        </span>

      </div>


      {/* ==============================
          LIKE BUTTON
      ============================== */}

      <button
        type="button"
        className={
          isLiked
            ? "like-button active"
            : "like-button"
        }
        onClick={handleLike}
      >

        <span className="button-heart">
          {isLiked ? "♥" : "♡"}
        </span>

        <span>
          {isLiked
            ? "Liked"
            : "Like"}
        </span>

      </button>

    </article>
  );
}

export default LikeCard;