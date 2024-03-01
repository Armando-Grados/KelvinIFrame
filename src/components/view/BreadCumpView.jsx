import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCumpView = ({ list }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon color="primary" fontSize="small" />}
    >
      {list.map((item) => (
        <Typography color="primary" key={item.id}>
          {item.title}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCumpView;
