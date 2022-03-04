# Game Info Card

This was created following a tutorial from https://www.youtube.com/watch?v=LiOzTQAz13Q&ab_channel=freeCodeCamp.org

It was one of the first tutorials I looked into for learning angular. He moved quickly and didn't explain each part as much as I would have liked, but it still helped provide some basic understanding (alongside the Tour of Heroes tutorial on the angular web site) of how components and services comes together. I also learned the basics of using the routing module for a single page application (spa). In putting this on a home server, I also learned how to change the settings to make it work properly in a subfolder instead of in the root.

Information on the games comes from the RAWG Video Games Database, which required two api keys for both that site and rapidapi. The home page just grabs all the information it can (showing 20 cards at a time), with the option to sort based on a few attributes including creation date. Cards show game platforms but with non-standard icons, simply using a few I pulled from online.

The game search pulls up game info in some order I do not know, and unfortunately the sort function does not work properly here.

Clicking on a card switches to a details page, which queries the specific game id shown in the url.
