import React from "react";
import { Helmet } from "react-helmet-async";

function Head({
  pageTitle = "TSHIIL",
  pageDescription = "Une société tunisienne qui propose des divers services qui visent à faciliter la vie de tout un chacun, particuliers comme professionnels. ",
}) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Helmet>
  );
}

export default Head;
