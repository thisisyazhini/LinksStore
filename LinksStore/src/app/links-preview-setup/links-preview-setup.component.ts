import { Component } from '@angular/core';

@Component({
  selector: 'app-links-preview-setup',
  standalone: true,
  imports: [],
  templateUrl: './links-preview-setup.component.html'
})
export class LinksPreviewSetupComponent {

  tabs: Tab[] = [{
    name: 'Links',
    id: 'links'
  },
  {
    name: 'Design',
    id: 'design'
  }];

  mediaLinks: Links[] = [{
    id: '1',
    name: 'Dribble',
    url: 'https://dribbble.com/test',
    number: 31,
    iconUrl: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23c45308' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-dribbble'%3e%3ccircle cx='12' cy='12' r='10'/%3e%3cpath d='M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94'/%3e%3cpath d='M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32'/%3e%3cpath d='M8.56 2.75c4.37 6 6 9.42 8 17.72'/%3e%3c/svg%3e"
  }, {
    id: '1',
    name: 'Buy me a coffee',
    url: 'https://dribbble.com/test',
    number: 22,
    iconUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F668%2F687%2Flarge_2x%2Fclubhouse-icon-in-flat-style-free-vector.jpg&f=1&nofb=1&ipt=cae5d2d2d89ecc3f0c284db27db7dc4f67240c7dc55cfd724081e888d25f0d63&ipo=images'
  },
  {
    id: '1',
    name: 'Club House',
    url: 'https://dribbble.com/test',
    number: 21,
    iconUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F668%2F687%2Flarge_2x%2Fclubhouse-icon-in-flat-style-free-vector.jpg&f=1&nofb=1&ipt=cae5d2d2d89ecc3f0c284db27db7dc4f67240c7dc55cfd724081e888d25f0d63&ipo=images'
  },
  {
    id: '1',
    name: '12 amazing Micro-interactions',
    url: 'https://dribbble.com/test',
    number: 20,
    iconUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F668%2F687%2Flarge_2x%2Fclubhouse-icon-in-flat-style-free-vector.jpg&f=1&nofb=1&ipt=cae5d2d2d89ecc3f0c284db27db7dc4f67240c7dc55cfd724081e888d25f0d63&ipo=images'
  }]

  public selectedTab: Tab = this.tabs[0];

  public get userNameFromStorage() {
    return localStorage.getItem('userName');
  }

  public selectTab(tab: Tab) {
    this.selectedTab = tab;
  }

  public copyToClipboard() {
    navigator.clipboard.writeText('Links Store/' + this.userNameFromStorage).catch(() => {
      console.error("Unable to copy text");
    });
  }
}

export interface Tab {
  id: string;
  name: string;
}

export interface Links {
  id: string;
  name: string;
  url: string;
  number: number;
  iconUrl: string;
}
