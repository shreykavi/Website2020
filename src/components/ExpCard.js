import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import "../styles/expcard.css"

export default class ExpCard extends React.Component {
  constructor(props) {
    super(props)
    this.topic = props.topic
    this.state = {
      expanded: false,
    }
  }

  toggleDetails = () => {
    console.log("show big card", this.state.expanded)
    this.setState({
      expanded: !this.state.expanded,
    })
  }
  render() {
    return (
      <div>
        {
          // <div
          //   className={this.state.expanded ? "details" : ""}
          //   style={{
          //     transition: "1s",
          //     position: "absolute",
          //     width: window.innerWidth - 80,
          //     height: window.innerHeight - 80,
          //     top: window.innerHeight,
          //     margin: "40px",
          //     background: "white",
          //     left: window.innerWidth,
          //     zIndex: 99,
          //     border: "1px solid black",
          //   }}
          //   onClick={this.toggleDetails}
          // >
          //   <h2>{this.topic.title}</h2>
          // </div>
        }
        <Card
          variant="outlined"
          style={{
            width: 345,
            height: 325,
            maxHeight: "400px",
            padding: "0px",
            margin: "20px",
          }}
        >
          <CardActionArea onClick={this.toggleDetails}>
            <CardMedia
              component="img"
              alt={this.topic.title}
              height="200"
              image={require("../images/" + this.topic.image)}
              title={this.topic.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.topic.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.topic.small_description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }
}
