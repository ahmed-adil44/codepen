var names, item;


names = ['Ryan Giggs 11', 'Peter Schmeichel 1', 'Paul Scholes 18', 'Cristiano Ronaldo 7', 'David Beckham 7', 'Eric Cantona 7', 'Edwin van der Sar 1', 'Roy Keane 16', 'Ronnie 10', ' Ole Gunnar Solskjær 20'];


document.getElementById('button').addEventListener('click', (event) => {
  names.forEach((item) => {
    let element_list = document.getElementById('list');
    element_list.innerText = names[0];
  });
  names.shift();

});
