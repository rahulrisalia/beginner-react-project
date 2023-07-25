import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../components/Todolist.css";
import { BsClipboard2Plus } from "react-icons/bs";
// get data from localhost------------------------
const getlocalitems = () => {
  const newlist = localStorage.getItem("lists");
  if (newlist) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
function Todolist() {
  const [data, setdata] = useState("");
  const [items, setitems] = useState(getlocalitems());

  const additem = () => {
    if (!data) {
    } else {
      setitems([...items, data]);
      setdata("");
    }
  };

  const itemremvoe = (id) => {
    const updateditems = items.filter((element, index) => {
      return id !== index;
    });
    setitems(updateditems);
  };
  // sset data to localhost---------------------------------
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  const change = (id) => {
    items.filter((element, index) => {
      if (id === index) {
        document.getElementById(index).classList.toggle("run");
      }
    });
  };
  return (
    <>
      <Container fluid className="some">
        <Row className="justify-content-center">
          <Col lg={7} md={9} xs={11} className=" coll my-5">
            <div className="text-center mydiv p-3">
              <div className="heading my-3">
                <h2 className="fw-bold">TODO-LIST</h2>
              </div>
              <div className="d-flex mb-3">
                <input
                  className="w-100 p-2"
                  type="text"
                  value={data}
                  onChange={(e) => {
                    setdata(e.target.value);
                  }}
                />
                <button onClick={additem} className="align-items-center d-flex">
                  {<BsClipboard2Plus />}
                </button>
              </div>
              <div>
                <ul className="list-unstyled ">
                  {items.map((element, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-3"
                        id={index}
                        onClick={() => {
                          change(index);
                        }}
                      >
                        {element}
                        <span
                          className="fa fa-trash-o "
                          onClick={() => {
                            itemremvoe(index);
                          }}
                        ></span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Todolist;
