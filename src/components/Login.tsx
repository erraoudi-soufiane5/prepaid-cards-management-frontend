import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLogin = () => {
    const loginData = {
      username: email,
      password: password,
    };

    console.log("login data", loginData);
    axios
      .post("http://localhost:8000/login", loginData)
      .then((response) => {
        const { data } = response;
        if (
          response.status === 200 &&
          data &&
          data["access-token"] &&
          data["refresh-token"]
        ) {
          console.log(response);
          const { "access-token": accessToken, "refresh-token": refreshToken } =
            data;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);
          console.log("Access token:", accessToken);
          console.log("Refresh token:", refreshToken);
          const decodedToken: any = jwtDecode(accessToken);
          const role = decodedToken.role;

          setUserRole(role);
          setIsLoggedIn(true);
        } else {
          console.error("Oops, something went wrong.");
        }
      })
      .catch((error) => {
        console.error(
          "Login request failed",
          error.response ? error.response.data : error
        );
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (userRole === "ROLE_USER") {
        navigate("/dashboard");
      } else if (userRole === "ROLE_ADMIN") {
        navigate("/admin/newAccount");
      } else {
      }
    }
  }, [isLoggedIn, navigate, userRole]);
  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogin}>
              Login
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
