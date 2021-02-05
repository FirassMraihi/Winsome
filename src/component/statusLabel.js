import React from "react";
import {Text} from 'react-native'
import { StatusWrapper } from "./style";

const StatusLabel = ({ status = "Ouvert" }) => {
  return (
      <StatusWrapper status={status}>{status}</StatusWrapper>

  );
};

export default StatusLabel;
