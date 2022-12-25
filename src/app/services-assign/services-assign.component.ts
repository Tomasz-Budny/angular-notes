import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-services-assign',
  templateUrl: './services-assign.component.html',
  styleUrls: ['./services-assign.component.css'],
  providers: [UsersService]
})
export class ServicesAssignComponent {

}
