const MyReact = (function () {

  function createElement(type, attributes = {}, ...children) {
    let childrenEls = ([...children] || []).reduce((acc, child) => {
      if (child !== null) {
        if (child instanceof Object) {
          acc.push(child);
        } else {
          acc.push({
            type: 'text',
            props: attributes,
            textContent: child
          });
        }
      }
      return acc;
    }, []);

    return ({
      type,
      children: childrenEls,
      attributes
    })
  }

  // function render() {

  // }

  return {
    createElement,
    // render
  }

}());

// export default MyReact;
