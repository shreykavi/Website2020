import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Typing from "react-typing-animation"
import Card from "@material-ui/core/Card"
// var Scroll = require("react-scroll")

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Experience = () => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: "200px",
          width: "100%",
          height: window.innerHeight,
          background: "#151515",
          textAlign: "center",
        }}
      >
        Experiences
      </div>
    </>
  )
}

export default Experience
