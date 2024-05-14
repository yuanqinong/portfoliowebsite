import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs';

export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewPort);
    }
    scrollToHireMe = () => {
        const contactMeScreen = document.getElementById('Contact Me');
        if(contactMeScreen) {
            contactMeScreen.scrollIntoView({behavior: 'smooth'});
        }else {
            return;
        }
    }
    scrollToHome = () => {
        const homeScreen = document.getElementById('Home');
        if(homeScreen) {
            homeScreen.scrollIntoView({behavior: 'smooth'});
        }else {
            return;
        }
    }
    isElementUnderViewPort = (element,type) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        const partiallyVisible = (elementTop >= 0 && elementTop <= window.innerHeight) || (elementBottom >= 0 && elementBottom <= window.innerHeight);
        const completelyVisible = (elementTop >= 0 && elementBottom <= window.innerHeight);
    
        switch(type) {
            case 'partial':
                return partiallyVisible;
            case 'complete':
                return completelyVisible;
            default:
                return false;
        }
    }
    checkCurrentScreenUnderViewPort = (event) => {
        if(!event || Object.keys(event).length === 0) return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM){
                continue;
            }
            let fullyVisible = this.isElementUnderViewPort(screenFromDOM,'complete'); 
            let partiallyVisible = this.isElementUnderViewPort(screenFromDOM,'partial'); 

            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen : screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView : screen.screen_name
                    });
                    break;
                }
            }
        }
    }
}