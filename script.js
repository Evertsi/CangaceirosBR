const asc = false;  // ordem: ascendente ou descendente
const index = 1;    // coluna pela qual se quer ordenar
const tabela = document.getElementById('minhaTabela');

const arr = Array.from(tabela.querySelectorAll('tbody tr'));
const th_elem = tabela.querySelectorAll('th');

arr.sort((a, b) => {
  const a_val = a.children[index].innerText
  const b_val = b.children[index].innerText
  return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
})
arr.forEach(elem => {
  tabela.appendChild(elem)
});