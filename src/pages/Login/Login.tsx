import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import LoginHeader
from "./components/LoginHeader/LoginHeader";

import LoginAdPanel
from "./components/LoginAdPanel/LoginAdPanel";

import LoginForm
from "./components/LoginForm/LoginForm";

import LoginFooter
from "./components/LoginFooter/LoginFooter";

import {
    loginMaster
} from "./api";

import type {
    LoginCredentials
} from "./types";

import "./Login.css";

const Login = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    /* ==========================================
       Check Existing Login
    ========================================== */

    useEffect(() => {

        const token =
            localStorage.getItem("masterToken");

        if (token) {

            navigate("/", {
                replace: true
            });

        }

    }, [navigate]);

    /* ==========================================
       Handle Login
    ========================================== */

    const handleLogin = async (
        credentials: LoginCredentials
    ) => {

        try {

            setLoading(true);

            setError("");

            const response =
                await loginMaster(credentials);

            if (!response.success) {

                setError(response.message);

                return;

            }

            if (!response.token) {

                setError(
                    "Login token was not received."
                );

                return;

            }

            localStorage.setItem(
                "masterToken",
                response.token
            );

            navigate("/", {
                replace: true
            });

        } catch (error) {

            console.error(
                "Login error:",
                error
            );

            setError(
                "Unable to login. Please try again."
            );

        } finally {

            setLoading(false);

        }

    };

    /* ==========================================
       Login Page
    ========================================== */

    return (

        <div className="login-page">

            <LoginHeader />

            <main className="login-main">

                <div className="login-card">

                    <LoginAdPanel />

                    <LoginForm
                        onLogin={handleLogin}
                        loading={loading}
                        error={error}
                    />

                </div>

            </main>

            <LoginFooter />

        </div>

    );

};

export default Login;