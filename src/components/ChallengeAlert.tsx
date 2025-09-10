import React from "react";

// Dette er challenge 2

const ChallengeAlert = () => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ChallengeAlert;
