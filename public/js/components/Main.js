import React from "react";
import API from "../API.js";

export default class Main extends React.Component {
  //componentWillMout
  componentDidMount() {
    API.fetchLinks();
  }

  render() {
    return (
      <div>
        <h3>Links list</h3>
        <ul>
          <li>link...</li>
          <li>link...</li>
        </ul>
      </div>
    );
  }
}
