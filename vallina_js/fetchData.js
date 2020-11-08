const url = 'https://raw.githubusercontent.com/danyu/dinopediadata/master/dinos.json';
const urlGeologicalPeriods = 'https://raw.githubusercontent.com/danyu/dinopediadata/master/geological_period.txt'
console.log('>>> fetchData')
window.fetch(url)
  .then((response) => { return response.json() })
  .then((data) => console.log(data));


window.fetch(urlGeologicalPeriods)
  .then(res => res.text())
  .then(data => console.log(data));


Promise.all([window.fetch(url), window.fetch(urlGeologicalPeriods)])
  .then(responses => {
    responses.forEach(res => {
      res.text().then(data => console.log('text=', data));
      // console.log('[curRes]', res.url);
    });
  });


Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(responses => {
    responses.forEach(res => console.log('>>>>>>>>>>>>text=', res));
    // console.log('[curRes]', res.url);
  });