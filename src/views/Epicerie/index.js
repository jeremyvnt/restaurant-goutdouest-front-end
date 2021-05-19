import { Box, Typography } from "@material-ui/core";
import React from "react";
import Image from "../../components/atoms/Image";

export default function Epicerie() {
  return (
    <Box
      height="40%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      py={8}
    >
      <Box py={4}>
        <Image
          style={{ borderRadius: 10 }}
          srcset="epicerie.jpeg?nf_resize=fit&w=320 320w,
                          epicerie.jpeg?nf_resize=fit&w=480 480w,
                          epicerie.jpeg?nf_resize=fit&w=600 600w"
          sizes="(max-width: 320px) 280px,
                         (max-width: 480px) 440px,
                         600px"
          src={"epicerie.jpeg?nf_resize=fit&w=600"}
        />
      </Box>
      <Typography variant={"h5"} color={"primary"}>
        Nos produits sont à découvrir dans notre épicerie fine
      </Typography>
    </Box>
  );
}
