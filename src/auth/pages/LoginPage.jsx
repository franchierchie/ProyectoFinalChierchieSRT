import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import { useForm } from '../../hooks';
import { AuthInput, ButtonsContainer, FormPage } from '../components';

import GoogleIcon from '@mui/icons-material/Google';

const formData = {
    email: '',
    password: '',
}

export const LoginPage = () => {

    const { status, errorMessage, startLoginWithEmailPassword, startGoogleSignIn } = useContext( AuthContext );
    const { email, password, onInputChange } = useForm(formData);
    const isCheckignAuthentication = useMemo(() => status === 'checking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        startLoginWithEmailPassword({ email, password });
    }

    const onGoogleSignIn = () => {
        startGoogleSignIn();
    }

    return (
    <FormPage name="Login">
        <form onSubmit={ onSubmit }>
            <AuthInput
                title="Email"
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                change={ onInputChange }
            />

            <AuthInput
                title="Password"
                type="password"
                placeholder="Password"
                name="password"
                value={ password }
                change={ onInputChange }
            />

            {
            ( !!errorMessage )
                && (
                    <div className="notification is-danger">
                        { errorMessage }
                    </div>
                )
            }
            
            <ButtonsContainer>
                <button
                    type="submit"
                    disabled={ isCheckignAuthentication }
                    className="button is-info is-fullwidth is-mobile mb-4 has-text-weight-bold is-size-5"
                >
                    Log in
                </button>
                <button
                    type="button"
                    disabled={ isCheckignAuthentication }
                    onClick={ onGoogleSignIn }
                    className="button is-danger is-fullwidth is-mobile has-text-weight-bold is-size-5"
                >
                    <GoogleIcon color="white" />
                    <span className="pl-2">Google</span>
                </button>

                <p className="mt-5">
                    <span>Don't have an account? </span>
                    <NavLink to="/register">Create one!</NavLink>
                </p>
            </ButtonsContainer>
        </form>
    </FormPage>
    )
}
