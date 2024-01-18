import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "user", "password", "output" ]

  login() {
    fetch('http://localhost:1080/login', { 
      method: "POST",
      headers: { "Content-Type": "text/json"},
      body: JSON.stringify({
       user: this.userTarget.value,
       password: this.passwordTarget.value
      })
    })
      .then(response => response.json())
      .then(text => this.outputTarget.textContent = text.status)
  } 
}
