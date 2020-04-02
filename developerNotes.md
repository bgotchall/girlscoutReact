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