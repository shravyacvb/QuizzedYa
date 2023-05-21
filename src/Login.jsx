import { fetchLogin } from "./services";

function Login(props){

    function fetchLoginMethod(){
        if(props.username){
          fetchLogin(props.username)
          .then( results => {
            props.setScoreHistory(results);
            props.setPage('Home');
            props.setError('');
          })
          .catch( err => {
            props.setError('Invalid username! Try a different username');
          })
        } 
      }

      function setUsernameMethod(event){
        props.setUsername(event.target.value);
      }

    return (
        <div className="login-page">
          <h2>Login</h2>
          <div className="status"></div>
          <div className="login">
            <form action="#">
              <label>
                <span>Username:</span>
                <input onInput={setUsernameMethod} className="login__username"></input>
              </label>
              <button onClick={fetchLoginMethod} type="button">Login</button>
            </form>
          </div>
        </div>
    );
}
export default Login;