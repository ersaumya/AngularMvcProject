import { Component } from "@angular/core";

@Component({
    template: `<md-card class="example-card">
  <md-card-header>
    <div md-card-avatar class="example-header-image"></div>
    <md-card-title>User</md-card-title>
    <md-card-subtitle>Sample User</md-card-subtitle>
  </md-card-header>
  <img md-card-image src="../../images/users.png" height="300">
  <md-card-content>
    <p>
      Hello !! In this applicaion you can add new user,edit and delete existing user.
    </p>
  </md-card-content>
  <md-card-actions>
    <button md-button>LIKE</button>
    <button md-button>SHARE</button>
  </md-card-actions>
</md-card>`
})

export class HomeComponent {
}