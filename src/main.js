import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#sudokuGrid").submit(function(event) {
    event.preventDefault();
    //row1
    let r1c1g1 = $('.r1.c1.g1').val();
    let r1c2g1 = $('.r1.c2.g1').val();
    let r1c3g1 = $('.r1.c3.g1').val();
    let r1c4g2 = $('.r1.c4.g2').val();
    let r1c5g2 = $('.r1.c5.g2').val();
    let r1c6g2 = $('.r1.c6.g2').val();
    let r1c7g3 = $('.r1.c7.g3').val();
    let r1c8g3 = $('.r1.c8.g3').val();
    let r1c9g3 = $('.r1.c9.g3').val();
    console.log(r1c1g1, r1c2g1, r1c3g1, r1c4g2, r1c5g2, r1c6g2, r1c7g3, r1c8g3, r1c9g3);
    //row2
    let r2c1g1 = $('.r2.c1.g1').val();
    let r2c2g1 = $('.r2.c2.g1').val();
    let r2c3g1 = $('.r2.c3.g1').val();
    let r2c4g2 = $('.r2.c4.g2').val();
    let r2c5g2 = $('.r2.c5.g2').val();
    let r2c6g2 = $('.r2.c6.g2').val();
    let r2c7g3 = $('.r2.c7.g3').val();
    let r2c8g3 = $('.r2.c8.g3').val();
    let r2c9g3 = $('.r2.c9.g3').val();
    console.log(r2c1g1, r2c2g1, r2c3g1, r2c4g2, r2c5g2, r2c6g2, r2c7g3, r2c8g3, r2c9g3);
    //row3
    let r3c1g1 = $('.r3.c1.g1').val();
    let r3c2g1 = $('.r3.c2.g1').val();
    let r3c3g1 = $('.r3.c3.g1').val();
    let r3c4g2 = $('.r3.c4.g2').val();
    let r3c5g2 = $('.r3.c5.g2').val();
    let r3c6g2 = $('.r3.c6.g2').val();
    let r3c7g3 = $('.r3.c7.g3').val();
    let r3c8g3 = $('.r3.c8.g3').val();
    let r3c9g3 = $('.r3.c9.g3').val();
    console.log(r3c1g1, r3c2g1, r3c3g1, r3c4g2, r3c5g2, r3c6g2, r3c7g3, r3c8g3, r3c9g3);
    //row4
    let r4c1g4 = $('.r4.c1.g4').val();
    let r4c2g4 = $('.r4.c2.g4').val();
    let r4c3g4 = $('.r4.c3.g4').val();
    let r4c4g5 = $('.r4.c4.g5').val();
    let r4c5g5 = $('.r4.c5.g5').val();
    let r4c6g5 = $('.r4.c6.g5').val();
    let r4c7g6 = $('.r4.c7.g6').val();
    let r4c8g6 = $('.r4.c8.g6').val();
    let r4c9g6 = $('.r4.c9.g6').val();
    console.log(r4c1g4, r4c2g4, r4c3g4, r4c4g5, r4c5g5, r4c6g5, r4c7g6, r4c8g6, r4c9g6);
    //row5
    let r5c1g4 = $('.r5.c1.g4').val();
    let r5c2g4 = $('.r5.c2.g4').val();
    let r5c3g4 = $('.r5.c3.g4').val();
    let r5c4g5 = $('.r5.c4.g5').val();
    let r5c5g5 = $('.r5.c5.g5').val();
    let r5c6g5 = $('.r5.c6.g5').val();
    let r5c7g6 = $('.r5.c7.g6').val();
    let r5c8g6 = $('.r5.c8.g6').val();
    let r5c9g6 = $('.r5.c9.g6').val();
    console.log(r5c1g4, r5c2g4, r5c3g4, r5c4g5, r5c5g5, r5c6g5, r5c7g6, r5c8g6, r5c9g6);
    //row6
    let r6c1g4 = $('.r6.c1.g4').val();
    let r6c2g4 = $('.r6.c2.g4').val();
    let r6c3g4 = $('.r6.c3.g4').val();
    let r6c4g5 = $('.r6.c4.g5').val();
    let r6c5g5 = $('.r6.c5.g5').val();
    let r6c6g5 = $('.r6.c6.g5').val();
    let r6c7g6 = $('.r6.c7.g6').val();
    let r6c8g6 = $('.r6.c8.g6').val();
    let r6c9g6 = $('.r6.c9.g6').val();
    console.log(r6c1g4, r6c2g4, r6c3g4, r6c4g5, r6c5g5, r6c6g5, r6c7g6, r6c8g6, r6c9g6);
    //row7
    let r7c1g7 = $('.r7.c1.g7').val();
    let r7c2g7 = $('.r7.c2.g7').val();
    let r7c3g7 = $('.r7.c3.g7').val();
    let r7c4g8 = $('.r7.c4.g8').val();
    let r7c5g8 = $('.r7.c5.g8').val();
    let r7c6g8 = $('.r7.c6.g8').val();
    let r7c7g9 = $('.r7.c7.g9').val();
    let r7c8g9 = $('.r7.c8.g9').val();
    let r7c9g9 = $('.r7.c9.g9').val();
    console.log(r7c1g7, r7c2g7, r7c3g7, r7c4g8, r7c5g8, r7c6g8, r7c7g9, r7c8g9, r7c9g9);
    //row8
    let r8c1g7 = $('.r8.c1.g7').val();
    let r8c2g7 = $('.r8.c2.g7').val();
    let r8c3g7 = $('.r8.c3.g7').val();
    let r8c4g8 = $('.r8.c4.g8').val();
    let r8c5g8 = $('.r8.c5.g8').val();
    let r8c6g8 = $('.r8.c6.g8').val();
    let r8c7g9 = $('.r8.c7.g9').val();
    let r8c8g9 = $('.r8.c8.g9').val();
    let r8c9g9 = $('.r8.c9.g9').val();
    console.log(r8c1g7, r8c2g7, r8c3g7, r8c4g8, r8c5g8, r8c6g8, r8c7g9, r8c8g9, r8c9g9);
    //row9
    let r9c1g7 = $('.r9.c1.g7').val();
    let r9c2g7 = $('.r9.c2.g7').val();
    let r9c3g7 = $('.r9.c3.g7').val();
    let r9c4g8 = $('.r9.c4.g8').val();
    let r9c5g8 = $('.r9.c5.g8').val();
    let r9c6g8 = $('.r9.c6.g8').val();
    let r9c7g9 = $('.r9.c7.g9').val();
    let r9c8g9 = $('.r9.c8.g9').val();
    let r9c9g9 = $('.r9.c9.g9').val();
    console.log(r9c1g7, r9c2g7, r9c3g7, r9c4g8, r9c5g8, r9c6g8, r9c7g9, r9c8g9, r9c9g9);
  });
});