import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

export default class PacketCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let packet = this.props.packet;
    return (
      <Card sx={{ maxWidth: 275, textAlign: "center" }} variant="outlined">
        <CardHeader title={packet.title} />
        <Divider />

        <CardContent>
          <Typography variant="h6">{packet.data} GB</Typography>
          <Divider />
          <Typography variant="h6">{packet.minutes} MIN</Typography>
          <Divider />
          <Typography variant="h6">{packet.sms} SMS</Typography>
          <Divider sx={{ height: 3 }} />
          <Typography variant="h5">${packet.price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" className="w-100">
            - Buy Now -
          </Button>
        </CardActions>
      </Card>
    );
  }
}