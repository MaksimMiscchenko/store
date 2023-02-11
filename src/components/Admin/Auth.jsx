import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./adminStyle.css";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContextProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.default",
  p: 5,
};

export default function Auth() {
  const { hasAccount, setHasAccount, handleSignUp, passwordError, loginError } =
    useContext(authContext);

  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInp = (e) => {
    let obj = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(obj);
    console.log(newUser);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        Авторизация
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-form">
          <Box component="form">
            <Grid xs display="flex" flexDirection="column" alignItems="center">
              <FormControl>
                <Typography id="modal-modal-title">Login</Typography>
                {loginError ? (
                  <TextField
                    required
                    autoComplete="email"
                    autoFocus
                    sx={{ mt: 1 }}
                    error
                    id="outlined-error"
                    onChange={handleInp}
                    name="name"
                  />
                ) : (
                  <TextField
                    required
                    autoComplete="email"
                    autoFocus
                    sx={{ mt: 1 }}
                    id="login"
                    onChange={handleInp}
                    name="name"
                  />
                )}
                {loginError ? (
                  <p className="input-hint">Придумайте логин</p>
                ) : (
                  <></>
                )}

                <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                  Пароль
                </Typography>
                {passwordError ? (
                  <OutlinedInput
                    sx={{ mt: 1 }}
                    autoComplete="current-password"
                    name="password"
                    error
                    id="outlined-error"
                    type={showPassword ? "text" : "password"}
                    onChange={handleInp}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                ) : (
                  <OutlinedInput
                    sx={{ mt: 1 }}
                    autoComplete="current-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleInp}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
                {passwordError ? (
                  <p className="input-hint">Придумайте пароль</p>
                ) : (
                  <></>
                )}

                {hasAccount ? (
                  <Button variant="outlined" size="large" sx={{ mt: 3 }}>
                    Войти
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ mt: 3 }}
                    onClick={() => handleSignUp(newUser)}
                  >
                    Зарегестрироваться
                  </Button>
                )}
              </FormControl>
            </Grid>
          </Box>

          <Link>
            <Box sx={{ mt: 3 }}>
              {hasAccount ? (
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {"Нет аккаунта? Зарегестрироваться "}
                </Link>
              ) : (
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {"Есть аккаунт? Войти!"}
                </Link>
              )}
            </Box>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
