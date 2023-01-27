import React from "react";



  const TableGrade = (props) => {
        return(
            <table class="table table-striped table-hover">
            <thead>
              <tr class="margin text-center">
                <th scope="col">HORÁRIO</th>
                <th scope="col">SEGUNDA</th>
                <th scope="col">TERÇA</th>
                <th scope="col">QUARTA</th>
                <th scope="col">QUINTA</th>
                <th scope="col">SEXTA</th>
                <th scope="col">SÁBADO</th>
                <th scope="col">DOMINGO</th>

              </tr>
            </thead>
            <tbody>
            <tr class="margin text-center">
                <th scope="row">08:00</th>
                <td>{props.obj[8] ? props.obj[8][1] : ""}</td>
                <td>{props.obj[8] ? props.obj[8][2] : ""}</td>
                <td>{props.obj[8] ? props.obj[8][3] : ""}</td>
                <td>{props.obj[8] ? props.obj[8][4] : ""}</td>
                <td>{props.obj[8] ? props.obj[8][5] : ""}</td>
                <td>{props.obj[8] ? props.obj[8][6] : ""}</td>
                <td>{props.obj[8] ? props.obj[8][7] : ""}</td>
              </tr>
              <tr class="margin text-center">
                <th scope="row">10:00</th>
                <td>{props.obj[10] ? props.obj[10][1] : ""}</td>
                <td>{props.obj[10] ? props.obj[10][2] : ""}</td>
                <td>{props.obj[10] ? props.obj[10][3] : ""}</td>
                <td>{props.obj[10] ? props.obj[10][4] : ""}</td>
                <td>{props.obj[10] ? props.obj[10][5] : ""}</td>
                <td>{props.obj[10] ? props.obj[10][6] : ""}</td>
                <td>{props.obj[10] ? props.obj[10][7] : ""}</td>
              </tr>

              <tr class="margin text-center">
                <th scope="row">12:00</th>
                <td>{props.obj[12] ? props.obj[12][1] : ""}</td>
                <td>{props.obj[12] ? props.obj[12][2] : ""}</td>
                <td>{props.obj[12] ? props.obj[12][3] : ""}</td>
                <td>{props.obj[12] ? props.obj[12][4] : ""}</td>
                <td>{props.obj[12] ? props.obj[12][5] : ""}</td>
                <td>{props.obj[12] ? props.obj[12][6] : ""}</td>
                <td>{props.obj[12] ? props.obj[12][7] : ""}</td>
              </tr>

              <tr class="margin text-center">
                <th scope="row">14:00</th>
                <td>{props.obj[14] ? props.obj[14][1] : ""}</td>
                <td>{props.obj[14] ? props.obj[14][2] : ""}</td>
                <td>{props.obj[14] ? props.obj[14][3] : ""}</td>
                <td>{props.obj[14] ? props.obj[14][4] : ""}</td>
                <td>{props.obj[14] ? props.obj[14][5] : ""}</td>
                <td>{props.obj[14] ? props.obj[14][6] : ""}</td>
                <td>{props.obj[14] ? props.obj[14][7] : ""}</td>
              </tr>

              <tr class="margin text-center">
                <th scope="row">16:00</th>
                <td>{props.obj[16] ? props.obj[16][1] : ""}</td>
                <td>{props.obj[16] ? props.obj[16][2] : ""}</td>
                <td>{props.obj[16] ? props.obj[16][3] : ""}</td>
                <td>{props.obj[16] ? props.obj[16][4] : ""}</td>
                <td>{props.obj[16] ? props.obj[16][5] : ""}</td>
                <td>{props.obj[16] ? props.obj[16][6] : ""}</td>
                <td>{props.obj[16] ? props.obj[16][7] : ""}</td>
              </tr>

              <tr class="margin text-center">
                <th scope="row">18:00</th>
                <td>{props.obj[18] ? props.obj[18][1] : ""}</td>
                <td>{props.obj[18] ? props.obj[18][2] : ""}</td>
                <td>{props.obj[18] ? props.obj[18][3] : ""}</td>
                <td>{props.obj[18] ? props.obj[18][4] : ""}</td>
                <td>{props.obj[18] ? props.obj[18][5] : ""}</td>
                <td>{props.obj[18] ? props.obj[18][6] : ""}</td>
                <td>{props.obj[18] ? props.obj[18][7] : ""}</td>
              </tr>
            </tbody>
          </table>
        )
  } 
  
  export default TableGrade;