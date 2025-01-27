import React from "react";

/*
 * Dynamic routing is routing with a parameter
 * we can use this by identifiying the parameter in a new subfolder in a square pracets [id]
 *! we cannot use the same parameter name inside a subroute like we couldent name this route [id] since the user has a route named [id] so instade we called it [photoId].
 */

interface Props {
  params: { id: number; photoId: number };
}

const photoDitails = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      photoDitails {id} {photoId}
    </div>
  );
};

export default photoDitails;
