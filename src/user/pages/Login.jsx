import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import AuthenticationUseCase from "../../usecases/authentication_usecase";
import {
  Box,
  FormControl,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";
import { LoadingButton } from "@mui/lab";

const ToastFailed = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, setError, register, formState } = useForm();
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLogin = async (data) => {
    console.log("teste");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Box
        sx={{
          zIndex: "999",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            height: { xl: "65%", lg: "65%", md: "65%", sm: "75%", xs: "80%" },
            width: { xl: "28%", lg: "38%", md: "48%", sm: "75%", xs: "95%" },
          }}
          onSubmit={handleSubmit(handleLogin)}
          noValidate
        >
          <Paper
            elevation={2}
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "grid",
                alignContent: "space-between",
                padding: "3rem",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "20pt",
                      lg: "20pt",
                      md: "20pt",
                      sm: "20pt",
                      xs: "20pt",
                    },
                    fontWeight: "bold",
                  }}
                >
                  LOGIN
                </Typography>
                <Box
                  sx={{
                    width: "2rem",
                    padding: "3px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg, #127392 0%, #1686A9 35%, #1C9FC8 100%)",
                  }}
                ></Box>
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    xl: "11pt",
                    lg: "11pt",
                    md: "11pt",
                    sm: "11pt",
                    sx: "11pt",
                  },
                  fontWeight: "400",
                }}
              >
                Hello, we're glad you're here, please enter your email and
                password to login.
              </Typography>

              {/* <Box sx={{ display: "grid", gap: "20px", height: "90%" }}> */}
              <TextField
                sx={{ height: "4rem" }}
                label="Email"
                autoFocus
                variant="outlined"
                disabled={disabled}
                error={errors.email ? errors.email.message : ""}
                helperText={errors.email ? errors.email.message : ""}
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />

              <FormControl variant="outlined">
                <TextField
                  sx={{ height: "4rem" }}
                  autoComplete="current-password"
                  label="Password"
                  disabled={disabled}
                  type={showPassword ? "text" : "password"}
                  error={errors.password ? errors.password.message : ""}
                  helperText={errors.password ? errors.password.message : ""}
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 6,
                      message: "Password is too short!",
                    },
                    maxLength: { value: 32, message: "Too many characters!" },
                  })}
                ></TextField>

                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disabled={disabled}
                  sx={{
                    position: "absolute",
                    right: "0.5rem",
                    bottom: "1rem",
                    top: "1rem",
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </FormControl>
              <LoadingButton
                type="submit"
                size="medium"
                loading={loading}
                loadingPosition="end"
                variant="contained"
                sx={{
                  fontSize: {
                    xl: "13pt",
                    lg: "13pt",
                    md: "13pt",
                    sm: "13pt",
                    sx: "12pt",
                  },
                  height: "3rem",
                }}
              >
                <span>Login</span>
              </LoadingButton>

              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <Typography
                  color={"gray"}
                  sx={{
                    fontSize: {
                      xl: "11pt",
                      lg: "11pt",
                      md: "11pt",
                      sm: "11pt",
                      sx: "11pt",
                    },
                    fontWeight: "400",
                  }}
                >
                  Developer by Luis and Mateus
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "11pt",
                      lg: "11pt",
                      md: "11pt",
                      sm: "11pt",
                      sx: "11pt",
                    },
                    fontWeight: "bold",
                  }}
                ></Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
