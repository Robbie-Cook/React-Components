/**
 * Styling for entire website. All common variables are being migrated here from
 * css/global-styles.css. 
 *
 * This is to be replaced with React.Context, where this is an object passed 
 * through a color context
*/
import React from "react"
import styled from "styled-components"

const Title = styled.p`
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
  margin-right: 25px;
  text-transform: lowercase;
`

class DefaultTheme {
  static textColor = "#dcd6ce";
  static backgroundColor = "#0f0f0f";

  // Link color
  static link = {
    color: "#6385a9",
    colorActive: "#1565c0",
    colorHighlight: "#6385a9"
  };

  static text = {
    color: this.textColor,
    font: "'Roboto', sans-serif",
  };

  static page = {
    backgroundColor: "#0f0f0f",
    secondaryColor: "#EB6D6D" // reddish
  };

  static navbar = {
    backgroundColor: this.backgroundColor,
    height: "60px",
    title: <Title>My dank website</Title>,
    // Navbar button styles
    button: {
      backgroundColor: this.backgroundColor,
      color: this.textColor,
      borderColor: 'transparent',
      activeColor: this.link.color,
      hoverColor: this.link.color
    }
  };

  static button = {
    backgroundColor: this.link.color,
    color: this.text.color,
    borderColor: this.link.color,
    hover: {
      backgroundColor: this.backgroundColor,
      color: this.link.color
    }
  }
}

export default DefaultTheme;
