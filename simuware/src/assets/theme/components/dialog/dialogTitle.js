/**
=========================================================
* SimuWare React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 SimuWare (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// SimuWare React base styles
import typography from "assets/theme/base/typography";

// SimuWare React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
