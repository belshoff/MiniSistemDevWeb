let escolas = [];
let alunos = [];

// function compararEscolas(a, b) {
//   return a.nome < b.nome ? -1 : a.nome > b.nome : 1 : 0;
// }

function sortEscolas(a, b) {
  if(a.nome > b.nome) return 1;
  if(a.nome < b.nome) return -1;
  return 0;
}

function addEscola() {
  escolas.push({
    nome: document.getElementById("inputEscolaNome").value,
    endereco: document.getElementById("inputEscolaEndereco").value
  });
  escolas.sort(sortEscolas);
  document.getElementById("inputEscolaNome").value = '';
  document.getElementById("inputEscolaEndereco").value = '';

  updTableEscola();
}

function updTableEscola() {
  let html = ''
  for(let i in escolas)
    html = html + `
    <tr>
      <td>${i}</td>
      <td>${escolas[i].nome}</td>
      <td>${escolas[i].endereco}</td>
      <td>
        <button type="button" class="btn btn-info" onclick="editEscola(${i})">edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteEscola(${i})">dell</button>
      </td>
    </tr>`
  document.getElementById("escolaTableTbody").innerHTML = html;
  updtSelectAluno();
}

function editEscola(id) {
  document.getElementById("inputEscolaNome").value = escolas[id].nome;
  document.getElementById("inputEscolaEndereco").value = escolas[id].endereco;
  deleteEscola(id);
}

function deleteEscola(index) {
  escolas.splice(index, 1);
  updTableEscola();
}

// Aluno

function sortAlunos(a, b) {
  if(a.nome > b.nome) return 1;
  if(a.nome < b.nome) return -1;

  if(a.escola > b.escola) return 1;
  if(a.escola < b.escola) return -1;

  return 0
}

function addAluno() {
  alunos.push({
    nome: document.getElementById("inputAlunoNome").value,
    escola: document.getElementById("selectAlunoEscola").value
  });
  document.getElementById("inputAlunoNome").value = '';
  document.getElementById("selectAlunoEscola").value = '';
  updTableAluno()
}

function updTableAluno() {
  let html = ''
  for(let i in alunos)
    html = html + `
    <tr>
      <td>${i}</td>
      <td>${alunos[i].nome}</td>
      <td>${alunos[i].escola}</td>
      <td>
        <button type="button" class="btn btn-info" onclick="editAluno(${i})">edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteAluno(${i})">dell</button>
      </td>
    </tr>`
  document.getElementById("alunoTableTbody").innerHTML = html;
}

function updtSelectAluno() {
  let html = ''
  for(let i in escolas)
    html = html + `<option value="${escolas[i].nome}">${escolas[i].nome}</option>`
  document.getElementById("selectAlunoEscola").innerHTML = html;
}

function editAluno(id) {
  document.getElementById("inputAlunoNome").value = alunos[id].nome;
  document.getElementById("selectAlunoEscola").value = alunos[id].escola;
  deleteAluno(id);
}

function deleteAluno(index) {
  alunos.splice(index, 1);
  updTableAluno();
}
