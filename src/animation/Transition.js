import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { PureComponent } from "react";
import posed from "react-pose";
import styled from "styled-components";
import { ThemeContext } from "../themes";
import PropTypes from "prop-types";

/**
 * A loading screen
 */
function Transition(props) {
  const PosedDiv = posed.div({
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        default: { ease: "linear", duration: 500 }
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        default: { ease: "linear", duration: 500 }
      }
    }
  });

  const StyledDiv = styled(PosedDiv)``;

  const poseJsx = (
    <>
      {props.spinner && 
      <StyledDiv
        initialPose="visible"
        pose={props.show ? "hidden" : "visible"}
      >
        <Spinner color="white" />
      </StyledDiv>
      }
      <StyledDiv
        initialPose="hidden"
        pose={props.show ? "visible" : "hidden"}
      >
        {props.show && props.children}
      </StyledDiv>
    </>
  );

  return poseJsx;
}
Transition.defaultProps = {
  show: false // Whether the component is loaded
};

// A spinner graphic
function Spinner(props) {
  const StyledSpinnerWrapper = styled.div`
    min-width: 100px;
    width: 100%;
    color: ${props.color}
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const StyledIconWrapper = styled.div`
    animation-name: spin;
    align-items: center;
    max-width: 200px;
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <StyledSpinnerWrapper>
      <StyledIconWrapper>
        <FontAwesomeIcon
          style={{ fontSize: "65px", display: "flex", margin: "auto" }}
          icon={faCircleNotch}
        />
      </StyledIconWrapper>
    </StyledSpinnerWrapper>
  );
}

Spinner.defaultProps = {
  color: "white"
};

export default Transition;
