import {
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => dispatch => {
    dispatch({
        type: 'CLEAN_AUTH_STATE',
    });
};

export default ({
    username,
    password,
    phoneNumber,
}) =>
    dispatch =>
        onSuccess => {
            dispatch({
                type: REGISTER_LOADING,
            });
            axiosInstance
                .post('auth/register', {
                    username,
                    password,
                    phoneNumber,
                })
                .then(res => {
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data,
                    });
                    onSuccess(res.data);
                })
                .catch(err => {
                    console.log('errocx', err);
                    dispatch({
                        type: REGISTER_FAIL,
                        payload: err.response
                            ? err.response.data
                            : { error: 'SomeThing went wrong. Try again' },
                    });
                });
        };
