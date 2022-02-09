import React from "react";

export const Message = ({ text, author }) => {
    return (
      <div>
        <span>
          {author}: {text}
        </span>
      </div>
    );
};
