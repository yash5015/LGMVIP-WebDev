import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComp } from "./Navbar";
import { CardComp } from "./Card";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import loaderImg from "./img/loading-gif.gif";

function App() {
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((user) => {
        setIsUser(true);
        setUserList(user.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <NavbarComp onClick={getUsers} />
      <div className={isUser ? "center-area d-none" : "center-area"}>
        <h1>Click on the Get Users </h1>
      </div>
      <div className={loading ? "loader-div" : "d-none"}>
        <img src={loaderImg} alt="Loading" />
      </div>
      <Container
        className={isUser ? "users-container" : "d-none"}
        style={{ marginTop: "150px" }}
      >
        <Row>
          {error
            ? error
            : userList.map((user, index) => {
                return (
                  <CardComp
                    key={index}
                    imgSrc={user.avatar}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    email={user.email}
                    userId={user.id}
                  />
                );
              })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
