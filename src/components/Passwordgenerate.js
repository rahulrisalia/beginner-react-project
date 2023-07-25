import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../components/Passwordgenerate.css";
import usePasswordGen from "../hooks/genpaswwordhook";
import { IoIosCopy } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";

function Passwordgenerate() {
  const [length, setlength] = useState(5);
  const [copyied, setcopyied] = useState(false);
  const [checkboxdata, setcheckboxdata] = useState([
    { title: "Upper Case", state: false },
    { title: "Lower Case", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: false },
  ]);
  const handelcheckboxdata = (index) => {
    const updatecheckboxdata = [...checkboxdata];
    updatecheckboxdata[index].state = !updatecheckboxdata[index].state;
    setcheckboxdata(updatecheckboxdata);
  };

  const handelcopy = () => {
    navigator.clipboard.writeText(password);
    setcopyied(true);
    setTimeout(() => {
      setcopyied(false);
    }, 1000);
  };
  const { password, error, generatePassword } = usePasswordGen();

  return (
    <Container fluid className="allcontainer">
      <Row>
        <Col
          lg={6}
          md={8}
          sm={10}
          xs={11}
          className="mx-auto text-center password mt-4"
        >
          <div className=" py-3 ">
            <div className="justify-content-between d-flex  mx-auto w-75">
              <input
                type="text"
                className="w-75 inpt p-2 "
                value={password}
                disabled
              />
              <button onClick={handelcopy} className="border-0 bg-transparent">
                {copyied ? (
                  <TiInputChecked className="icon1" />
                ) : (
                  <IoIosCopy className="icon" />
                )}
              </button>
            </div>

            <div className="d-flex justify-content-center  mt-4">
              <div className="list-group w-75 lists">
                <label className="list-group-item border-0 rangebox ">
                  <div className="d-flex justify-content-between ">
                    <h6>Password Range </h6>
                    <h6>{length}</h6>
                  </div>
                  <input
                    className="w-100 rangg"
                    min="4"
                    max="20"
                    type="range"
                    onChange={(e) => setlength(e.target.value)}
                    value={length}
                  />
                </label>

                <div className="checkboxes ">
                  {checkboxdata.map((checkbox, index) => {
                    return (
                      <div key={index}>
                        <div className="d-flex justify-content-between p-2">
                          <h6>{checkbox.title}</h6>
                          <input
                            type="checkbox"
                            checked={checkbox.state}
                            onChange={() => handelcheckboxdata(index)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {error && <div className="errormsg">{error}</div>}

                <button
                  className="btnbtn"
                  onClick={() => generatePassword(checkboxdata, length)}
                >
                  GENERATE PASSWORD
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Passwordgenerate;
