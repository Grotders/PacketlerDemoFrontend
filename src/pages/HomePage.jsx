import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import PacketCard from "./components/PacketCard";

import { Box, Container, Grid } from "@mui/material";

export default function HomePage() {
  const [packets, setPackets] = useState([]);

  // sayfa yüklendiğine çalışacak bir metot
  // axios data döndürecek bu yüzden data.data yazıyoruz.
  useEffect(() => {
    let userService = new UserService();
    userService.getPackets().then((result) => setPackets(result.data.data));
  }, []);

  return (
    <Container className="page-style">
      <Box>
        <Grid container spacing={5}>
          {packets.map((packet) => (
            <Grid item xs={3} key={packet.packetId}>
              <PacketCard packet={packet} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
