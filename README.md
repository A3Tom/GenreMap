# Genre Map #

The goal of this project is to map out the genres of music I listen to, across the time dimension to produce a visual map over time of where my musical brain itch has been, and what exactly has scratched it.

---
## Background : ##
I've always been fascinated with the evolution and cyclic nature of music tastes and what triggers the tectonic shift from genre to genre.
A prime example of this would be my first week in February I spent binging the artist 'High Priest of Saturn' - a Psychadelic Norwegian Doom Metal band, categorized by Spotify; I then spent most of the second and third weeks of the same month listening to 'Pusha T', 'Kendrick Lamar' and 'Logic' - each of which strongly rooted in the rap genre, with elements of gangster rap and 'concious' rap ... whatever the fuck that is.

---
## Concept : ##
A small application similar to Spotify Unwrapped but on a more indepth scale to identify trends in music genre shifts and also highlight artists by association which I would otherwise have missed or not found as quickly - all of this in a very visual format.

Ideally I would then open this to a small group of people to test if successful, though I am not entirely deluded as I know that is a long way off - especially with my tendancy to focus on whatever next week's grand idea will be.

---
## Implementation : ##

MVP : 

An angular application which connects to Spotify, grabs my playlists and focuses on a designated playlist - in this case my GenreMap playlist - then uses the datetime I have added the tracks to form a map of the genres of each tune; traversable over time via a slider or some better control if I find one

---
## Bonus Points : ##
Specific playlist selection via GUI

Profile switching capability

Utilization of Personalization API

---
## Super Bonus Points : ##

Fancy schmancy CSS 

---
## Credits : ##
As much as I would absolutely love to say "here mate am the best in the world at this shit", realistically this will - as per every project ever - be the product of a whole load of resource gathering n playdough-ing it into an angular project. As is the way.

This is a log of items watched or read which I've then implemented and bastardised for future reference.

```csharp OrderBy
return await creditList
    .OrderBy(x => x.Type.ArbitraryWeightValueThatIMadeUpToFormatTheTable)
    .ThenBy(x => x.TimeAccessedRelativeToProject)
    .ToListAsync();
```

|Type|Author|Gist|Areas Covered|Link|
|---|---|---|---|:---:|
|Documentation|Spotify|Web API Reference|Spotify API Interaction|[Cheers Mate](https://developer.spotify.com/documentation/web-api/reference/)|
|Documentation|ReadMe|Engine Reference to practice fannying about|ReadMe Documentation|[Cheers Mate](https://rdmd.readme.io/docs/)|
|Video|Code Like A Boss|Search artists using the Spotify API|Spotify API Interaction|[Cheers Mate](https://www.youtube.com/watch?v=3R_Mu_UaNvo)|
|Article|Deven (CodeSource)|Error Handling in Angular Applications|Http error handling|[Cheers Mate](https://codesource.io/error-handling-angular/)|
|Article|Angular University|HttpClient Quickstart|HttpClient|[Cheers Mate](https://blog.angular-university.io/angular-http/)|
|Article|bezKoder|Angular 11 JWT Authentication - big shout out to this dude|HttpClient, Authentication, JWT|[Cheers Mate](https://bezkoder.com/angular-11-jwt-auth/)|

