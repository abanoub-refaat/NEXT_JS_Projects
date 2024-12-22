import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

/*
 * Catch all Segment is used instade of the nested subfolders in a route and is defined by [...name]
 * and in the interface we use string[] to hold its value.
 * to make the slug parameter optional we need to wrap it in double square brackts. [[...slug]].
 */

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
