import React from "react";
import PropTypes from "prop-types";
import { Container } from "./index.style";

const index = ({ children, popupName, closePopup, popupHeader }) => {
  return (
    <Container>
      <label className="button" htmlFor="react-popup">
        {popupName && popupName}
      </label>
      <input type="checkbox" id="react-popup" onChange={() => null} />
      <div className="popup-openned">
        <label htmlFor="react-popup"></label>
        <div className="popup-openned-inner">
          <div className="header">
            <h6>{popupHeader}</h6>
            <label htmlFor="react-popup">X</label>
          </div>
          <div className="content">{children}</div>
          {closePopup ? (
            <div className="close-popper">
              <label htmlFor="react-popup">Close the popper</label>
            </div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};
index.propTypes = {
  popupName: PropTypes.string
};
export default index;
