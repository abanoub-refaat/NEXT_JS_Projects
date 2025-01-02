import React, { ReactNode } from "react";

/*
 * A layout.tsx is a special file that nextjs looks for
 * the children of the file are of type "ReactNode".
 * The layout file defines the common UI inside all our admin files
 * but the layout.tsx inside our app folder defins the common UI inside all our project files.
 */

interface Props {
  children: ReactNode;
}

const adminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default adminLayout;
