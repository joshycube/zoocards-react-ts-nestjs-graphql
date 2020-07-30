import React from "react";
import MCardHeader from "@material-ui/core/CardHeader";

interface Props {
  title: string;
  subTitle?: string;
}

function CardHeader({ title, subTitle }: Props) {
  return <MCardHeader title={title} subheader={subTitle} />;
}

export default CardHeader;
