"use client";
import React from "react";

/*
 * This file cannot capture the errors thrown by golbal layout pages.
 * we can add global-error.tsx file to capture the errors thrown by global layout pages.
 */

interface Props {
  error: Error;
  reset: () => void;
}

/*
 * We can use Sentry to capture the errors thrown by the app
 * https://docs.sentry.io/platforms/javascript/guides/nextjs
 * Sentry is an open-source error monitoring and logging platform.
 */

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>An unexpected error has occured</div>
      <button onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
