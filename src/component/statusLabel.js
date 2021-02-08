import React from "react";
import { StatusWrapper } from "./style";

const StatusLabel = ({ status = "Ouvert" }) => {
  return (
      <StatusWrapper status={status}>{status}</StatusWrapper>

  );
};

export default StatusLabel;
