import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
const MyImage = (props) =>{
    return(
        <>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />{props.children}
    </>
    )

}
export default MyImage