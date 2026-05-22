import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function LoginSample() {
  // 入力値の状態管理
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 状態の管理（エラー、成功トースト、ログイン成否フラグ）
  const [errorMessage, setErrorMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態フラグ

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id === "test" && password === "test") {
      setErrorMessage("");
      setSuccessOpen(true);
      setIsLoggedIn(true); // ログイン成功状態にする
    } else {
      setErrorMessage("IDまたはパスワードが違います");
    }
  };

  const handleCloseSuccess = () => {
    setSuccessOpen(false);
  };

  const handleLogout = () => {
    // ログアウトして初期状態に戻すボタン用
    setIsLoggedIn(false);
    setId("");
    setPassword("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ログイン状態によって表示を切り替え */}
        {isLoggedIn ? (
          /* 【ログイン成功時】画像を表示 */
          <Paper
            elevation={3}
            sx={{ p: 4, width: "100%", borderRadius: 2, textAlign: "center" }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ mb: 3, fontWeight: "bold", color: "success.main" }}
            >
              ログインに成功しました！
            </Typography>

            {/* 指定された画像 */}
            <Box
              component="img"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg132e3WDL0zQXXkHks_HqEw60i6qJzduRQL-qIy31tz4dbrqnsMp__uKHNgvu9MALW2hz9tIGPM8IxvmzHvgQeD3HR2Fshgy0nlEtrht8W3xk9CH1jqdiFpyybfVX6yUTPGgYmbOwyMnmI/s800/character_orange.png"
              alt="成功キャラクター"
              sx={{
                width: "100%",
                maxHeight: 250,
                objectFit: "contain",
                mb: 3,
              }}
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={handleLogout}
            >
              ログアウトして戻る
            </Button>
          </Paper>
        ) : (
          /* 【未ログイン時】フォームを表示 */
          <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ログイン
              </Typography>
            </Box>

            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="id"
                label="ID"
                name="id"
                autoComplete="username"
                autoFocus
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                ログイン
              </Button>
            </Box>
          </Paper>
        )}
      </Box>

      {/* 成功時のトースト通知 */}
      <Snackbar
        open={successOpen}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          ログイン成功！
        </Alert>
      </Snackbar>
    </Container>
  );
}
