import { Box } from "@mui/material";
import React from "react";
import bgImage from "../../assets/images/mesh.png";
import ChatInput from "../../components/chatInput/chatInput";
import ChatMessages from "../../components/chatMessages/chatMessages";
import Navbar from "../../components/navbar/navbar";

function Chat(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        alignItems={"center"}
        sx={{
          height: "calc(100vh - 70px)",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <Box width={"70%"} display={"flex"} flex={1} flexDirection={"column"}>
          <Box display={"flex"} flex={7}>
            <ChatMessages />
          </Box>

          <ChatInput />
        </Box>
      </Box>
    </>
  );
}

export default Chat;
