import React from "react";
import "./Error.css"
const Error = () => (
  <>
    <div id="clouds">
      <div className="cloud x1"></div>
      <div className="cloud x1_5"></div>
      <div className="cloud x2"></div>
      <div className="cloud x3"></div>
      <div className="cloud x4"></div>
      <div className="cloud x5"></div>
    </div>
    <div className="c">
      <div className="_404">404</div>
      <hr />
      <div className="_2">Algo salió mal, inténtalo más tarde</div>
    </div>
  </>
);

export { Error };
