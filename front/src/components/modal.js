import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Form from "react-bootstrap/Form";

const AddModal = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedHour, setSelectedHour] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const animatedComponents = makeAnimated();

  const options = [
    { day: 1, value: "segunda", label: "Segunda" },
    { day: 2, value: "terca", label: "Terça" },
    { day: 3, value: "quarta", label: "Quarta" },
    { day: 4, value: "quinta", label: "Quinta" },
    { day: 5, value: "sexta", label: "Sexta" },
    { day: 6, value: "sabado", label: "Sábado" },
    { day: 7, value: "domingo", label: "Domingo" },
  ];

  const optionsHours = [
    { value: 8, label: "08:00" },
    { value: 10, label: "10:00" },
    { value: 12, label: "12:00" },
    { value: 14, label: "14:00" },
    { value: 16, label: "16:00" },
  ];

  let disciplina = {
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
  };

  let combinations = {};
  let days = [];

  disciplina.name = name;
  disciplina.abbreviation = abbreviation;
  disciplina.startTime = selectedHour.value;
  disciplina.duration = 2;
  disciplina.endTime = selectedHour.value + disciplina.duration;

  function populateDisciplina() {
    for (const key of selectedDays) {
      disciplina[key.value] = "0x2714";
    }
    for (const key of selectedDays) {
      days.push(key.day);
      combinations[key.day] = [
        selectedHour.value,
        selectedHour.value + disciplina.duration,
      ];
    }
    disciplina.days = days.sort();
    disciplina.combinations = combinations;
  }
  return (
    <>
      {props.generated ? (
        ""
      ) : (
        <button
          type="button"
          onClick={handleShow}
          class="btn btn-danger btn-margin"
        >
          ADICIONAR DISCIPLINA
        </button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADICIONAR DISCIPLINA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                placeholder="Digite o nome"
                maxLength="40"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSigla">
              <Form.Label>Sigla</Form.Label>
              <Form.Control
                placeholder="Digite a sigla"
                maxLength="5"
                onChange={(e) => {
                  setAbbreviation(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSelectDays">
              <Form.Label>Dias da semana</Form.Label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                placeholder="Escolha os dias"
                isMulti
                options={options}
                onChange={(item) => setSelectedDays(item)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSelectHours">
              <Form.Label>Horário</Form.Label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                placeholder="Escolha as horas"
                options={optionsHours}
                onChange={(item) => setSelectedHour(item)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCELAR
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              populateDisciplina();
              props.handleArrayChange(disciplina);
              handleClose();
            }}
          >
            INSERIR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
