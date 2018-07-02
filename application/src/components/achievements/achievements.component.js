import React from "react";
import './achievements.scss';

export const Achievements = () => {

  return (
    <div className="achievements">
      <div className="achievements__title col-xs-offset-3 col-xs-3">
        <h2>Achievements</h2>
      </div>
      <div className="achievements__description col-xs-6">
        <p>
          Leading teams to success since 2001 in domains that include
          <ul className="achievements__list">
            <li>internet domains</li>
            <li>online media</li>
            <li>advertising</li>
            <li>telecoms</li>
            <li>government agencies</li>
            <li>finance</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
