import React from "react";
import API from "../API.js";
import linkStore from "../stores/linkStore";

// Read links from the store
let _getAppState = () => {
  console.log('_getAppState links: ', linkStore.getAll());

  return {
    links: linkStore.getAll()
  }
};

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = _getAppState();
    // Binding onChange to the component as a receiver
    this.onChange = this.onChange.bind(this);
  }

  //componentWillMout

  componentDidMount() {
    API.fetchLinks();
    linkStore.on('change', this.onChange);
  }

  componentWillUnmout() {
    linkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log("Now I\'m in the View...");
    this.setState(_getAppState);
  }

  render() {
    // Prepare/parse content
    let content = this.state.links.map(link => {
      return <li key={link._id}>
              <a href={link.url}>{link.title}</a>
            </li>

    });
    console.log("state in Render(): ", typeof this.state.links);
    return (
      <div>
        <h3>Links list</h3>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}
