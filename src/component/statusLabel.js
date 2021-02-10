import React from "react";
import { StatusWrapper } from "./style";

const StatusLabel = ({paddingHorizontal, isRelative=false,status = "Ouvert",color }) => {
  return (
      <StatusWrapper paddingHorizontal={paddingHorizontal}isRelative={isRelative}status={status} color={color}>{status}</StatusWrapper>

  );
};

export default StatusLabel;
