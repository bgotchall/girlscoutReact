Done so far:  rough first page, routing, Oauth login

need:  

1) see if it deploys.  it won't work exactly because of the oauth callback stuff. DONE!
2) fix the oauth stuff for heroku.  DONE!
3) react picture carousel
4) react calendar?  (or just use google again?)
5) member roster.  This would store in the backend.  Also, maybe I need to store the current logged in info in local storage?  Maybe not since I can access the login object?
6) basic news, like what Yasmin did.
7) link to pics.  can be what I did last time (nice version uses oauth strat to access private )
8) need to see how to limit links to permission level?  or mock it?

^^^^^ MVP ^^^^^

7) chat feature?  Disquss again?  would be a damn copout
8) cookie sales feature.  maybe just a mockup.
9) wait spinner is ugly.  I think MUI has one.


Auth0 notes:  The wait for loading thing works.  The spinner may need to spin for 60s.  It seems that something can get out of state if you rush it.  THen once things are out of sync you just have to watch the spinner for a minute.  Then it comes back and works, at least for a while.


Calendar notes:
maybe: http://jquense.github.io/react-big-calendar/examples/index.html

kind of a rabbit hole getting the calendar integration.  I do have the example from the old project but it also didnt seem to work well.  I will put this off for now.  lots of google resources and the NPM helper library:
https://www.npmjs.com/package/googleapis#using-api-keys



general thoughts and to-dos:
* email malia and or kim with feedback, requests etc.  How do cookie booths work?  ask for spreadsheets.  part done.  have lots of spreadsheets in email.  also a member roster, conveniently.

* MERN ify soon.  get past all the wierd integration problems
* do a basic table.  members.  recall how to do SQL and Sequilize.  get a basic table populated and start working with it.  Make a basic editor.
* then do a basic news thing, like what Jasmine did.
* then the chat can be a reskinned version of the same.
* then the header intro can be the same.
* do a calendar zoom page.
* do a news zoom page.
