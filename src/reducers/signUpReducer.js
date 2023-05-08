export const initialSignUpInfo = {
    name: '',
    email: '',
    password: '',
    favoriteColor: '',
    terms: false
};

export default function signUpReducer(signUpInfo, action) {
    switch (action.type) {
        case 'saved': {
            return {
                ...signUpInfo,
                ...action.signUpInfo
            }
        }
        case 'reset': {
            return {
                ...signUpInfo,
                ...initialSignUpInfo
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
