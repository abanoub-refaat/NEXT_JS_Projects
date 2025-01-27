import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDitailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();

  return <div>UserDitailPage {id}</div>;
};

export default UserDitailPage;
