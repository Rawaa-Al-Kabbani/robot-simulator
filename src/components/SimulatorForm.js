import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { Robot } from "../classes/robot";
import { CircularRoom, SquareRoom } from "../classes/room";
import { Simulator, SimulatorAction } from "../classes/simulator";
import { Direction } from "../modules/direction";
import { CharacterInput } from "./CharacterInput";
import { NumberInput } from "./NumberInput";
import theme from "../theme";
import actionTranslationMap from "../actionTranslationMap.json";

const RoomShape = {
  SQUARE: "Square",
  CIRCULAR: "Circular",
};

export const SimulatorForm = () => {
  const [commandsText, setCommandsText] = useState("");
  const dialogRef = useRef();

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [form, setForm] = useState({
    roomShape: RoomShape.SQUARE,
    roomSize: 10,
    robotPositionX: 1,
    robotPositionY: 1,
    actions: "",
  });

  const [result, setResult] = useState("");

  const updateForm = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onChangeLanguage = (value) => {
    setSelectedLanguage(value);
    updateForm("actions", "");
  };

  const canSubmit = () => Boolean(form.actions);

  const shuffle = () => {
    let text = "";
    const array = Object.keys(actionTranslationMap[selectedLanguage]);
    for (let i = 1; i <= 4; i++) {
      text += array[Math.floor(Math.random() * array.length)];
    }
    return text;
  };

  useEffect(() => {
    setCommandsText(shuffle());
  }, []);

  const onSubmit = () => {
    const simulator = new Simulator({
      actions: form.actions
        .split("")
        .map(
          (action) => actionTranslationMap[selectedLanguage][action].command,
        ),
      robot: new Robot({
        direction: Direction.N,
        position: {
          x: form.robotPositionX,
          y: form.robotPositionY,
        },
      }),
      room:
        form.roomShape === RoomShape.SQUARE
          ? new SquareRoom({
              height: form.roomSize,
              width: form.roomSize,
            })
          : new CircularRoom(form.roomSize),
    });

    try {
      const { message } = simulator.run();
      setResult(message);
      dialogRef.current.showModal();
    } catch (error) {
      setResult(`An unexpected error occurred: ${error}`);
      dialogRef.current.showModal();
    }
  };

  return (
    <FormContainer>
      <Row>
        {Object.keys(RoomShape).map((key) => (
          <SwitchButton
            onClick={() => updateForm("roomShape", RoomShape[key])}
            enabled={form.roomShape === RoomShape[key]}
            key={key}
          >
            {RoomShape[key]}
          </SwitchButton>
        ))}
      </Row>

      <Row>
        <Field>
          <legend>
            {form.roomShape === RoomShape.SQUARE ? "Room width" : "Room radius"}
          </legend>
          <NumberInput
            minimumValue={1}
            defaultValue={form.roomSize}
            callback={(value) => updateForm("roomSize", value)}
          />
        </Field>
      </Row>
      <Row>
        <Field>
          <legend>Position X</legend>
          <NumberInput
            minimumValue={0}
            defaultValue={form.robotPositionX}
            callback={(value) => updateForm("robotPositionX", value)}
          />
        </Field>

        <Field>
          <legend>Position Y</legend>
          <NumberInput
            minimumValue={0}
            defaultValue={form.robotPositionY}
            callback={(value) => updateForm("robotPositionY", value)}
          />
        </Field>
      </Row>

      <Row>
        <Field>
          <legend>Keyboard language</legend>
          <Select
            value={selectedLanguage}
            onChange={(event) => onChangeLanguage(event.target.value)}
          >
            {Object.keys(actionTranslationMap).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </Select>
        </Field>
      </Row>

      <Row>
        <Field>
          <legend>Instructions for writing the actions</legend>
          <p>
            The actions field below should contain at least one the following
            commands (
            {Object.keys(actionTranslationMap[selectedLanguage]).join(", ")})
          </p>

          {Object.entries(actionTranslationMap[selectedLanguage]).map(
            ([key, value]) => (
              <p>
                {key} : {value.description}
              </p>
            ),
          )}

          <p>Example : {commandsText}</p>
        </Field>
      </Row>

      <Row>
        <Field>
          <legend>Actions</legend>
          <CharacterInput
            characters={Object.keys(actionTranslationMap[selectedLanguage])}
            callback={(value) => updateForm("actions", value)}
            value={form.actions}
          />
        </Field>
      </Row>

      <Dialog ref={dialogRef}>
        <DialogContent>
          {result}
          <button
            style={{ padding: "8px" }}
            onClick={() => dialogRef.current.close()}
          >
            OK
          </button>
        </DialogContent>
      </Dialog>

      <SubmitButton
        onClick={() => canSubmit() && onSubmit()}
        enabled={canSubmit()}
      >
        Submit
      </SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: grid;
  width: min(80vw, 700px);
  grid-template-columns: 1fr;
  line-height: 54px;
  row-gap: 24px;
`;

const Field = styled.fieldset`
  background-color: white;
  border: 1px solid ${theme.colors.gray};
  border-radius: 8px;
  line-height: 21px;
  text-align: left;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
`;

const Button = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${theme.colors.darkBlue};
  color: white;
`;

const SwitchButton = styled(Button)`
  background-color: ${({ enabled }) =>
    enabled ? theme.colors.darkBlue : theme.colors.gray};
  color: ${({ enabled }) => (enabled ? theme.colors.gray : "black")};
`;

const SubmitButton = styled(SwitchButton)`
  cursor: ${({ enabled }) => (enabled ? "pointer" : "not-allowed")};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const Dialog = styled.dialog`
  background-color: ${theme.colors.egg};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  width: min(60vw, 500px);
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  width: 100%;
  cursor: pointer;
  border: none;
  text-align: left;
  background-color: white;
`;
