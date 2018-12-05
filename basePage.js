export default class BasePage {
    constructor() {
        /**
         * wrap this.timeout. (ms) in t-shirt sizes
         */
        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000
        };
        
    }
    
     * //wait and verify that a page is loaded
     
    loaded() {
        return browser.wait(() => {
            return this.pageLoaded();
        }, this.timeout.l, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

    // navigate to a page via it's `url` var
     
    goto() {
        browser.get(this.url, this.timeout.l);
        return this.loaded();
    }

    //Wrappers for expected conditions
   
     
    isVisible(locator) {
        return protractor.ExpectedConditions.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return protractor.ExpectedConditions.invisibilityOf(locator);
    }

    inDom(locator) {
        return protractor.ExpectedConditions.presenceOf(locator);
    }

    notInDom(locator) {
        return protractor.ExpectedConditions.stalenessOf(locator);
    }

    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
    }

    hasText(locator, text) {
        return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return protractor.ExpectedConditions.and(arrayOfFunctions);
    }

    titleIs(title) {
        return protractor.ExpectedConditions.titleIs(title);
    }

    
    //Webdriver equivalent to hitting Enter/Return key.
  
    hitEnter() {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

}