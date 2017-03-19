/*
** Project:     Greetr library
** Author:      Chris Gates, github.com/tophergates
** Date:        Saturday, March 18, 2017
** Description: This library is based on the Greetr library in
**              "Javascript: Understanding the Weird Parts" on Udemy.
**              https://www.udemy.com/understand-javascript/learn/v4/overview
*/
;(function(context, $){
  "use strict";

  // The Greetr entry point
  var Greetr = function(firstName, lastName, language){
    // Calls the initializer to avoid the need for the 'new' keyword
    // when making calls to the Greetr.
    return new Greetr.init(firstName, lastName, language);
  };

  /*
  *****************************************
  ************ PRIVATE ********************
  ** Hidden within the scope of the IIFE **
  *****************************************
  */
  // Array of languages supported by the library
  var supportedLangs = ['en', 'es', 'fr', 'jp'];

  // Informal greetings in various languages
  var greetings = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    jp: 'こんにちは'
  };

  // Formal greetings in various languages
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    fr: 'Salutations',
    jp: 'ご挨拶'
  };

  // Messages in various supported languages that will be logged to the console
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
    fr: 'Connecté',
    jp: 'ログインしました'
  };

  // Private function which returns the standard greeting
  var standardGreeting = function(obj){
    return greetings[obj.language] + ' ' + obj.firstName;
  };

  // Private function which returns a formal greeting
  var formalGreeting = function(obj){
    return formalGreetings[obj.language] + ', ' + obj.fullName();
  };

  // Grabs either the formal or informal greeting and returns it
  var greeting = function(obj, formal){
    return (formal) ? formalGreeting(obj) : standardGreeting(obj);
  };

  /*
  *************************************
  ************* PUBLIC ****************
  *************************************
  */
  Greetr.prototype = {
    // Boolean to determine whether or not to console.log messages
    logMessages: true,

    // Returns the full name
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    },

    // Basic language validation
    validateLang: function(){
      if(supportedLangs.indexOf(this.language) === -1){
        throw 'Invalid language supplied: "' + this.language + '"';
      }
    },

    // Logs the login message and full name to the console.
    log: function(){
      if(console && this.logMessages){
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      // Return the object for method chaining
      return this;
    },

    // Standard greeting, accepts formal as a boolean
    greet: function(formal){
      // Get the formal or standard greeting
      var msg = greeting(this, formal);

      if(console && this.logMessages){
        // Log the greeting to the console
        console.log(msg);
      }

      // Return the object for method chaining
      return this;
    },

    // For displaying the greeting in an HTML element
    HTMLGreeting: function(selector, formal){
      // Really basic check for the selector
      if(!selector){
        throw 'Missing HTML selector';
      }

      // Get the appropriate message
      var msg = greeting(this, formal);

      // Set the greeting as the HTML for the selector
      document.querySelector(selector).innerHTML = msg;

      // Return the object for method chaining
      return this;
    },

    // Sets the language to be used (chainable)
    setLang: function(language){
      // Set the language
      this.language = language;

      // Validate the language is available
      this.validateLang();

      // Return the object for method chaining
      return this;
    }
  };

  // Initializes the Greetr object
  Greetr.init = function(firstName, lastName, language){
    this.firstName = firstName || 'Guest';
    this.lastName = lastName || '';
    this.language = language || 'en';

    // Validate the language on initialization
    this.validateLang();
  };

  // Attaches init to the Greetr prototype chain
  Greetr.init.prototype = Greetr.prototype;

  // Attaches the Greetr object, and the G$ alias, to the global execution context
  context.Greetr = context.G$ = Greetr;

}(window = window || {}, undefined));
