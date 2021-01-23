import React, {Component} from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const f = require('./lesson/01-commerce/read1.pdf')

export default function test() {
    return (
      <div style={styles}>
        <iframe src={f}></iframe>
      </div>
    );
}
