/** @jsx MyReact.createElement */

const root = document.getElementById('root');
const content = (
  <div className='component'>
    <h1 className='title'>My React</h1>
    <div>Create my own dom render</div>
    {'show' === 'show' && <div>Show something</div>}
  </div>
);
console.log(content);

// export default App;
