import "./App.css";
import React, { useState } from "react";
import AddModal from "./components/modal";
import intervalScheduling from "./algorithm";
import TableGrade from "./components/table";

function App() {
  const [arrayGrade, setArrayGrade] = useState([]);
  const [gradeSchedules, setgradeSchedules] = useState([]);
  const [generated, setGenerated] = useState(false);

  const Emoji = React.memo(({ className, label, symbol }) =>
    symbol === "" ? (
      <span></span>
    ) : (
      <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint(symbol)}
      </span>
    )
  );

  const handleArrayChange = (data) => {
    setArrayGrade((arrayMaterias) => [...arrayMaterias, data]);
  };

  const handleRemoveItem = (obj) => {
    setArrayGrade(arrayGrade.filter((item) => item.nome !== obj.nome));
  };

  const handleGradeChange = (array) => {
    const obj = intervalScheduling(array);

    setgradeSchedules(obj.schedules);
    setGenerated(true);
  };

  return (
    <div className="App">
      <img
        alt="logo"
        class="center-img"
        width="1500px"
        src={require("./img/logo.png")}
      />

      <p class="margin text-center">
        <strong>INSTRUÇÕES:</strong> Para você usar a aplicação, basta clicar no
        botão abaixo para inserir uma disciplina que quer cursar no próximo
        semestre e considerar no gerador de grades. Depois disso, preencha as
        informações requisitadas. Quando inserir todas as disciplinas que quer
        ver nas grades geradas, clique no botão para gerar a grade.
      </p>

      <div class="center">
        <AddModal handleArrayChange={handleArrayChange} generated={generated} />
        {generated ? (
          <button
            type="button"
            class="btn btn-success btn-margin"
            onClick={() => setGenerated(false)}
          >
            VOLTAR PARA INÍCIO
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success btn-margin"
            onClick={() => handleGradeChange(arrayGrade)}
          >
            GERAR GRADES
          </button>
        )}
      </div>

      {generated ? (
        <div class="center">
          <div clas="margin" style={{ width: "80%" }}>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-interval="false"
              data-bs-interval="false"
            >
              <ol
                class="carousel-indicators"
                style={{ padding: "10px", filter: "invert(1)" }}
              >
                {gradeSchedules.map((index) => {
                  return (
                    <>
                      {index === 0 ? (
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to={index}
                          class="active"
                        ></li>
                      ) : (
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to={index}
                        ></li>
                      )}
                    </>
                  );
                })}
              </ol>
              <div class="carousel-inner">
                {gradeSchedules.map((obj, index) => {
                  return (
                    <>
                      {index === 0 ? (
                        <div class="carousel-item active ">
                          <TableGrade obj={obj}> </TableGrade>
                        </div>
                      ) : (
                        <div class="carousel-item ">
                          <TableGrade obj={obj}> </TableGrade>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
                style={{ width: "5%" }}
              >
                <span
                  class="carousel-control-prev-icon"
                  style={{ padding: "10px", filter: "invert(1)", width: "0%" }}
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
                style={{ width: "5%" }}
              >
                <span
                  class="carousel-control-next-icon"
                  style={{ padding: "10px", filter: "invert(1)", width: "0%" }}
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div class="margin">
          <table class="table table-striped table-hover">
            <thead>
              <tr class="margin text-center">
                <th scope="col">NOME</th>
                <th scope="col">SIGLA</th>
                <th scope="col">HORÁRIO</th>
                <th scope="col">SEGUNDA</th>
                <th scope="col">TERÇA</th>
                <th scope="col">QUARTA</th>
                <th scope="col">QUINTA</th>
                <th scope="col">SEXTA</th>
                <th scope="col">SÁBADO</th>
                <th scope="col">DOMINGO</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {arrayGrade.map((obj) => {
                return (
                  <tr class="margin text-center">
                    <th scope="row">{obj.name}</th>
                    <td>{obj.abbreviation}</td>
                    <td>{obj.startTime}</td>
                    <td>
                      <Emoji symbol={obj.segunda} />
                    </td>
                    <td>
                      <Emoji symbol={obj.terca} />
                    </td>
                    <td>
                      <Emoji symbol={obj.quarta} />
                    </td>
                    <td>
                      <Emoji symbol={obj.quinta} />
                    </td>
                    <td>
                      <Emoji symbol={obj.sexta} />
                    </td>
                    <td>
                      <Emoji symbol={obj.sabado} />
                    </td>
                    <td>
                      <Emoji symbol={obj.domingo} />
                    </td>
                    <td className="center">
                      <button
                        type="button"
                        class="btn"
                        onClick={() => {
                          handleRemoveItem(obj);
                        }}
                      >
                        <Emoji className="hover" symbol="0x274C" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
