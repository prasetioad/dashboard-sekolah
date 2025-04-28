import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  Modal,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import bgLogin from "/icons/bg_login.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openForgot, setOpenForgot] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const isFormFilled = username !== "" && password !== "";
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleUserName = () => setUsername("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgLogin})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <Box textAlign="center" mb={3}>
            <img
              src="/icons/logo_sma_alkautsar.jpeg"
              alt="Penabur Logo"
              style={{
                height: 64,
                marginBottom: 16,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <Typography variant="body1">Welcome to</Typography>
            <Typography variant="h5" fontWeight="semibold">
              BPK Penabur Digital System
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brilliant, Excellent in Education, Dare to Innovate, and Awesome
              Attitude.
            </Typography>
          </Box>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              fullWidth
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleUserName} edge="end">
                      {username.length >= 1 && (
                        <Typography variant="h5" color="text.secondary">
                          x
                        </Typography>
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isFormFilled}
              sx={{ mt: 3, py: 1.5 }}
            >
              Sign in
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Forgot password?{" "}
              <Typography
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenForgot(true);
                }}
                color="success.main"
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Click here
              </Typography>
            </Typography>
          </Box>
        </Paper>
        <Modal
          open={openForgot}
          onClose={() => setOpenForgot(false)}
          aria-labelledby="forgot-password-title"
          aria-describedby="forgot-password-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography
              id="forgot-password-title"
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Forgot Password
            </Typography>
            <Typography
              id="forgot-password-description"
              color="text.secondary"
              mb={3}
            >
              Please contact administrator to reset your password.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenForgot(false)}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
