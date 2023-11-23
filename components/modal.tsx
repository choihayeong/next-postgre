'use client';

import { useState } from "react";

export default function Modal({}) {
  const [password, setPassword] = useState("")
  const onChange = (event: any) => setPassword(event.target.value);
  const onSubmit = (event: any) => {
    event.preventDefault();

    if (password === "") {
      return;
    }

    setPassword("");
  }

  console.log(password);

  return (
    <div className="modal">
      <div className="modal__inner">
        <form onSubmit={onSubmit}>
          <div className="form-input">
            <label htmlFor="temp_password">
              Temporarily Password : 
              <input type="text" id="temp_password" value={password} onChange={onChange} />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}