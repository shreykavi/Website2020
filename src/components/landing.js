import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Typing from "react-typing-animation"
var Scroll = require("react-scroll")

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
var showButton = false
setTimeout(function () {
  showButton = true
}, 3000)
var scroll = () => {
  Scroll.animateScroll.scrollTo(window.innerHeight)
}

const Landing = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "down-arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
        <Typing>
          <div style={{ color: "white", lineHeight: "1.5" }}>
            <span style={{ fontSize: "50px" }}>
              Hi, my name is <span style={{ color: "yellow" }}>Shrey.</span>
            </span>
            <Typing.Delay ms={1000} />
            <br></br>
            <span style={{ fontSize: "50px" }}>
              I'm an engineer and I build software.
            </span>
          </div>
        </Typing>
        <br></br>
        <div onClick={scroll}>
          <Img
            style={{
              margin: " 50px",
              width: "50px",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </div>
      </div>
    </>
  )
}

export default Landing
