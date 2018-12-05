 
 describe ('login test', function (){
    it ('Succesful login', function(){
        browser.get ('https://stage.millentrix.com/login/auth?norecaptcha=true');
        expect (browser.getTitle()).toEqual ('Millentrix - Exchange Platform');
    });

});