import { HttpService } from "./HttpService"

export const AuthService = {
    SignIn: async (signform) => {
        if (signform.username === 'test' && signform.password === 'test') {
            return {
                token: 'test',
                errorMessage: '',
            }
        }
        else {
            return {
                token: '',
                errorMessage: 'Incorrect username or password.',
            }
        }
        // return await HttpService.Post('', signform);
    }
}