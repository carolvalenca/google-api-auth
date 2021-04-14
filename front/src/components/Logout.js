import { GoogleLogout } from 'react-google-login'

const clientId = "495513255686-vn7jceiedd88s2om7b7652347q5tj0tn.apps.googleusercontent.com"

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully')
    }

    return(
        <div>
            <GoogleLogout 
                clientId = {clientId}
                buttontext = "Logout"
                onLogoutSuccess = {onSuccess}
            />
        </div>
    )
}

export default Logout