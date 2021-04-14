import { GoogleLogin } from 'react-google-login'
import api from '../services/api'

const clientId = "495513255686-vn7jceiedd88s2om7b7652347q5tj0tn.apps.googleusercontent.com"

function Login() {
    const onSuccess = async res => {
        console.log('[Login Success] currentUSer: ', res.profileObj)

        const { email, name } = res.profileObj

        console.log(res.tokenObj)
        const id = await api.post('/login', {
            email,
            name,
            token: res.tokenObj.id_token
        })

    }

    const onFailure = res => {
        console.log('[Login Failed] res: ', res)
    }

    return(
        <div>
            <GoogleLogin 
                clientId = {clientId}
                buttontext = "Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}

export default Login