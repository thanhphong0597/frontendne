import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    createTheme,
    CssBaseline,
    Grid,
    Link,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { images } from "../assets/data/image";
import Input from "../components/input/Input";
import { Logo } from "../components/logo";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";
const theme = createTheme();

const schema = yup.object({
    username: yup
        .string()
        .required("Bạn chưa nhập name"),
    password: yup.string().required("Bạn chưa mật khẩu"),
});

const Login = () => {
    const [imageRandom, setImageRandom] = useState(null);
    const navigate = useNavigate();
    const { token, getToken } = useData();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const handleLogin = (values) => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(values);
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },

                    body: JSON.stringify({
                        username: values.username,
                        password: values.password
                    }),
                };

                fetch("https://localhost:7091/api/auth/login", options)
                    .then((res) => res.json())
                    .then((data) => {
                        getToken(data)
                    });
                // const jwt = require('jsonwebtoken');
                // const token1 = localStorage.getItem('token');
                // const secret = 'JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr';

                // jwt.verify(token, secret, (err, decodedToken) => {
                //     if (err) {
                //         console.log(err.message);
                //     } else {
                //         console.log(decodedToken);
                //     }
                // });
                navigate("/");
            }, 1000);
        });
    };

    // useEffect(() => {
    //     console.log(token)
    //     if (token !== null) {
    //         console.log(token);
    //         var decoded = jwt_decode(token);
    //         console.log(decoded);
    //     } else {
    //         console.log("Token is null.");
    //     }

    //     return getToken({})
    // }, )

    useEffect(() => {
        const errorLogin = Object.values(errors);
        if (errorLogin.length > 0) {
            toast.error(errorLogin[0].message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        }
        ;
    }, [errors]);

    useEffect(() => {
        function randomImage() {
            const random = Math.floor(Math.random() * images.length);
            setImageRandom(images[random]);
        }
        randomImage();
        const timer = setInterval(() => {
            randomImage();
        }, 5000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Document title="Bí kiếp làm giàu - Đăng Nhập" />
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${imageRandom})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Logo width={150} height={150} src="logo.jpg" to="/" />
                        <Typography component="h1" variant="h5">
                            Đăng nhập
                        </Typography>
                        <Box
                            component="form"
                            sx={{ mt: 1 }}
                            autoComplete="off"
                            onSubmit={handleSubmit(handleLogin)}
                        >
                            <Input
                                name="username"
                                label="username"
                                control={control}
                            />
                            <Input
                                type="password"
                                name="password"
                                label="Mật khẩu"
                                control={control}
                                togglePassword={true}
                            />
                            <LoadingButton
                                color="secondary"
                                loading={isSubmitting}
                                variant="contained"
                                type="submit"
                                fullWidth
                                disabled={isSubmitting}
                                sx={{ mt: 3 }}
                            >
                                Đăng Nhập
                            </LoadingButton>

                            <Grid
                                container
                                sx={{ mt: 2 }}
                                justifyContent="flex-end"
                            >
                                <Link href="/register" variant="body2">
                                    {"Bạn chưa có đăng kí tài khoản? Đăng kí"}
                                </Link>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Login;
