import React from "react";

import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "200px" }}>
      <Typography variant="h3" component="div">
        404 Not Found
      </Typography>
      <Typography variant="h4" component="div">
        페이지를 찾을 수 없거나 잘못된 경로 입니다.
      </Typography>
    </Container>
  );
};

export default NotFound;
