import React from "react";
import FlextBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  sideText: string;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();

  return (
    <FlextBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlextBetween>
        {icon}
        <Box width={"100%"}>
          <Typography variant="h4" mb={"-0.1rem"}>
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlextBetween>
      <Typography
        variant="h5"
        fontWeight={"700"}
        color={palette.secondary[500]}
      >
        {sideText}
      </Typography>
    </FlextBetween>
  );
};

export default BoxHeader;
