import React from "react";
import './portrait.scss';

export const Portrait = () => {

  return (
    <div className="portrait">
      <div className="col-xs-12">
        <img className="portrait__picture " src="https://www.gravatar.com/avatar/6809b059aefba706f879bc4606f3dcdc?size=200"/>
      </div>
    </div>
  );
};
