import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function ChatInput(): React.JSX.Element {
  const [message, setMessage] = useState("");
  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", gap: 2, flex: 1, width: "100%" }}>
      <TextField
        variant="outlined"
        placeholder="Send a message"
        sx={{ width: "100%", height: "48px" }}
        value={message}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            // handleButtonClick();
          }
        }}
        onChange={handleInputChange}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{
          boxShadow: 0,
          borderRadius: 2,
          height: "55px",
          "& .MuiButton-label": {
            display: "flex",
            alignItems: "center",
          },
        }}
        // onClick={handleButtonClick}
      >
        <SendRoundedIcon style={{ color: "white" }} />
      </Button>
    </Box>
  );
}

export default ChatInput;
