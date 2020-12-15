Exercises from Kaare
--------------------

Use the GraphQL API developed by Github, to browse Github data
(requires you to log in and authorize its usage). To my knowledge the
API is driving some of the functionality on Github itself.

There's a GraphiQL instance running at: https://developer.github.com/v4/explorer/

I encourage playing around with the API to see what sort of questions
you can create a query to answer. Here's some examples to get you
started:


1. Find the name of the first 100 followers you have
   (if you have no followers you can always follow each other)

2. Find the name of the first 100 people you are following

3. Find the name of the first 10 followers of the first 10 people that are following you

4. Find the name (including owner) and time of latest update of the 10 last updated
   repositories the user has contributed to - ordered latest updated first

5. Find the title and creator name of the 10 last created open issues
   in the `"graphql/graphql-js"` repository, ordered latest created first
