import React from "readct";
class TagEditor extends React.Component {
  state = {
    tags: [],
    cnt: 0,
  };
  constructor(props) {
    super(props);
  }

  renderList = () => {
    const { tags } = this.state;

    return tags.forEach((tag) => {});
  };

  render() {
    return <div></div>;
  }
}
