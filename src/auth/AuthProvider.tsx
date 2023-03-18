import React from 'react'
import { PropsWithChildren } from 'react'
import { AppState, Auth0Provider } from '@auth0/auth0-react/';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom' ;
import config from 'config';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  
    const history = useHistory();
  
    const onRedirectCallback = (appState : AppState | any) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    console.log("domain ", config.auth0Domain)
    console.log("clientId ", config.auth0ClientId)
    console.log("domain React process.", process.env.REACT_APP_AUTH0_DOMAIN)
    console.log("client React process.", process.env.REACT_APP_AUTH0_CLIENT_ID)
  
    return (
      <Auth0Provider
        domain={config.auth0Domain}
        clientId={config.auth0ClientId}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        {props.children}
      </Auth0Provider>
    );
}

export default AuthProvider