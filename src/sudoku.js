export function Rows() {
  this.row1 = [];
}

Rows.prototype.addRow() = function() {
  this.row1.push(r1c1g1, r1c2g1, r1c3g1, r1c4g2, r1c5g2, r1c6g2, r1c7g3, r1c8g3, r1c9g3);
}

function Sudoku() {
  this.rows = [[row1],[row2],[row3]...etc];
  this.columns = [];
  this.grids = [];
}

