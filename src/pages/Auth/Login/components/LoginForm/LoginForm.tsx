import {
    useState
} from "react";

import type {
    FormEvent
} from "react";

import type {
    LoginCredentials
} from "../../types";

import "./LoginForm.css";

interface LoginFormProps {

    onLogin: (
        credentials: LoginCredentials
    ) => Promise<void>;

    loading: boolean;

    error: string;

}

const LoginForm = ({
    onLogin,
    loading,
    error
}: LoginFormProps) => {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        await onLogin({

            username,

            password

        });

    };

    const handleForgotPassword = () => {

        console.log("Forgot password");

    };

    return (

        <section className="login-form-panel">

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >

                <h2>
                    Enter Credentials
                </h2>

                <div className="login-form-field">

                    <label htmlFor="username">

                        Username

                    </label>

                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(event) =>
                            setUsername(
                                event.target.value
                            )
                        }
                        required
                    />

                </div>

                <div className="login-form-field">

                    <label htmlFor="password">

                        Password

                    </label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(
                                event.target.value
                            )
                        }
                        required
                    />

                </div>

                <button
                    type="button"
                    className="forgot-password-button"
                    onClick={handleForgotPassword}
                >

                    Forgot password?

                </button>

                {
                    error && (

                        <div className="login-error">

                            {error}

                        </div>

                    )
                }

                <button
                    type="submit"
                    className="login-submit-button"
                    disabled={loading}
                >

                    {
                        loading
                            ? "Signing In..."
                            : "Sign In"
                    }

                </button>

            </form>

        </section>

    );

};

export default LoginForm;