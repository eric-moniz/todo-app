const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
// quando alterarmos um documento ou dados queremos receber esse documento atualizado ao inves do documento antigo
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
