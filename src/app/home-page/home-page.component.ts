import { Component, ViewChild } from '@angular/core';
// import { YtDrawerAppComponent } from '../yt-drawer-app/yt-drawer-app.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  sideNav: boolean = true;
  // @ViewChild('yt-drawer-app') drawerApp!: YtDrawerAppComponent;

  sideDrawerEnable = 0; // side drawer is enabled (=2) when window screen size is < 1313px
                        // and is set to 1, then calls the toggle method
                        // to change the screen once and set to -1, where after its value
                        // toggles between 2 and -1.

  ngOnInit(){
    this.checkSideToggle();
  }

  toggleSideNav(){
    if(this.sideDrawerEnable==0) {
      this.sideNav = !this.sideNav;
      this.toggleSideBar();
    }
    else
    this.sideDrawerEnable = (this.sideDrawerEnable == 2) ? -1 : 2;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkSideToggle();
  }

  checkSideToggle(){
    this.sideDrawerEnable = (window.innerWidth < 1313) ? (this.sideDrawerEnable != 0) ? this.sideDrawerEnable : 1 : 0;
    
    if(this.sideDrawerEnable == 1) {
      this.sideNav = false;
      this.toggleSideBar();
    }
    else if(this.sideDrawerEnable == 0){
      this.sideNav = this.sideNav;
    }
  }

  toggleSideBar() {
    if(this.sideDrawerEnable==-1 || this.sideDrawerEnable == 2) return;
    if(this.sideDrawerEnable == 1) this.sideDrawerEnable = -1;
    let toggleDocs = ['.videoGrid', '.left', '.right']
    toggleDocs.forEach((item) => {
      document.querySelectorAll(item)?.forEach((node)=>node.toggleAttribute('closed'));
    }
    );
    
  }

  hideDrawerHome(e: any){
    this.sideDrawerEnable = e;
    this.toggleSideNav();
  }



  getArray(len: number, item: any) {
    return Array.from({ length: len }, () => item)
  }
  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  getRandomLetter() {
    return Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))[Math.floor(Math.random() * 26)]
  }
  
}
