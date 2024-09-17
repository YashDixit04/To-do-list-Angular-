import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { User } from './us.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // input module ------>>>
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) selected! : boolean;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  // @Output() select = new EventEmitter<string>();

  // input function --->
  // avatar = input<string>(''); // for input
  // avatar = input.required();
  // avatar = input('')
  // avatar = input.required<string>()
  // name = input.required<string>()

  // select = output<string>(); // for output

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // signal ==>>>
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser() {
    this.select.emit(this.user.id)
  }

}
