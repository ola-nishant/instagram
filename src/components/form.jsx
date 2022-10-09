import "../css/form.css";
function Form() {
  return (
    <>
      <div id="form">
        <img id="instaLogo" src={require("../images/logo.png")} alt="" />

        <form action="" method="POST">
          <input
            type="text"
            placeholder="Phone number, username or email"
            autoComplete="off"
          />
          <input type="password" placeholder="Password" autoComplete="off" />
          <button type="submit" className="btn btn-primary btn-sm">
            Log in{" "}
          </button>
        </form>
        <div id="orhr">
          <div id="hr1"></div>
          <p id="or">OR</p>
          <div id="hr2"></div>
        </div>
      <div id="facebook">
        <i class="fa-brands fa-square-facebook"></i><a href="https://www.facebook.com/">Log in with Facebook</a>
      </div>
      <div id="forgetPassword"><a href="./">Forgot password?</a></div>
      </div>
      <div id="signUpButton">
        <p>
          Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
        </p>
      </div>
      <div id="promo">
        <p>Get the app.</p>
        <a href="https://apps.apple.com/in/app/instagram/id389801252"><img id="appstore" src={require("../images/appstore.png")} alt="" /></a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US"><img id="googleplay" src={require("../images/googleplay.png")} alt="" /></a>
      </div>
    </>
  );
}
export default Form;
