import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, SmallCardComponent, BigCardComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
