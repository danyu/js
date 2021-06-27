import React from "react";
import "./App.css";

function mockList() {
  let list = [];
  for (let i = 0; i < 500; i++) {
    list.push("list item - " + i);
  }
  return list;
}

export default class VirtualizedList extends React.Component {
  constructor(props) {
    super(props);
    const { height, itemHeight } = this.props;
    this.state = {
      list: mockList(),
      displayList: null,
      numberOfDisplayItems: height / itemHeight,
    };
  }

  getList = (e) => {
    const { itemHeight } = this.props;
    const { list, numberOfDisplayItems } = this.state;

    let el = document.querySelector("#v-list");

    let scrollTop = el ? el.scrollTop : 0;

    let startIdx = parseInt(scrollTop / itemHeight);

    let items = [];

    /**
     * Render numberOfDisplayItems + 1 items so that
     * there is no visula gap at the bottm of list
     * */
    for (let i = 0; i <= numberOfDisplayItems; i++) {
      let curIdx = startIdx + i;
      let top = curIdx * itemHeight;
      items.push(
        <div
          className="list-item"
          key={`item+${i}`}
          style={{ top, height: itemHeight }}
        >
          {list[curIdx]}
        </div>
      );
    }

    this.setState({ displayList: items });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    const { height, itemHeight } = this.props;
    const { displayList } = this.state;
    const innerHeight = this.state.list.length * itemHeight;
    return (
      <div style={{ textAlign: "left", margin: "20px" }}>
        <div>
          Virtualized List: Only the visible items get rendered instead of the
          full list.
        </div>
        <br />
        <div
          id="v-list"
          style={{ height }}
          class="list-container"
          onScroll={this.getList}
        >
          {/* inner container makes sure the scrollbar size matches the full list height */}
          <div class="inner-container" style={{ height: innerHeight }}>
            {displayList}
          </div>
        </div>
      </div>
    );
  }
}
