import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <label>Email</label>
          <input type="mail" placeholder='email'/>
          <label>Wachtwoord</label>
          <input type="password" placeholder='wachtwoord'/>
          <label>Bevestig wachtwoord</label>
          <input type="password" placeholder='wachtwoord'/>
          <p>*Invoervelden*</p>
            <button type='submit'>Verzenden</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;