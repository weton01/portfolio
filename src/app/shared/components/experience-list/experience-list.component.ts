import { Component, Input } from '@angular/core';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent {
  @Input() public experienceList: Experience[] = [
    {title: 'test', description: 'loren', duration: 1.5, tecnologies: ['hack'], image: 'assets/images/profile.png'}
  ]
}
