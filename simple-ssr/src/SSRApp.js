// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from "react";
import App from "./App";

const SSRApp = ({ data }) => {
  const [result, setResult] = useState({ loading: false, products: data });
  return (
    <div>
      <App result={result} />
    </div>
  );
};

export default SSRApp;
