# Web design

This is the repo of the course Web Design. The goal of the course is to make better looking websites and a website that is usefull for a specific user.

A link to the website can be found [here](https://rick712.github.io/web-design/opdracht_2/)

- **[Herkansing](#herkansing)**
- **[About this project](#about-this-project)**
- **[User scenario](#user-scenario)**
- **[Content](#content)**
- **[First design](#first-design)**
- **[Test](#test)**
- **[Iterations](#iterations)**
- **[Interface Principles](#interface-principles)**

## Herkansing

Voor de herkansing heb ik het een en ander veranderd. Als eerst heb ik de user scenario iets specifieker gemaakt. De user scenario is nu:
'Een 2e jaars CMD student aan de HvA die halverwege het jaar zich alvast wil oriënteren op een minor. De student heeft affiniteit met Front-End Development'

Ik heb de user scenario specifieker gemaakt omdat het dan makkelijker is om te bepalen wat voor vragen de student heeft, omdat ik zelf ook in die situatie heb gezeten, en met mij nog vele anderen.

Een 2e jaars student die halverwege het jaar zit, heeft een aantal maanden geleden een keuzeproject gekozen, en die gaat bijna beginnen, of is net begonnen. Als de student project Tech heeft gekozen, dan zal hij waarschijnlijk minder informatie nodig hebben over de minor dan wanneer hij niet project Tech heeft gekozen. Hier wil ik op inspelen in mijn website.

Wat ik heb bedacht is een soort pop-up, die triggerd anderhalve seconde nadat een gebruiker op de website komt.

![Screenshot van de pop-up](https://i.imgur.com/H8rNXVK.png)

De screenshot richt zich puur op 2e jaars CMD studenten. De pop-up geeft aan aansluitende informatie te hebben voor deze doelgroep. De pop-up is fixed, en is makkelijk weg te klikken. Wanneer een student op 'Lees meer' klikt, opent er een nieuwe pagina.

![Informatie voor 2e jaars studenten](https://i.imgur.com/pQlstRz.png)

Deze pagina geeft meer uitleg over de minor specifiek voor 2e jaars CMD studenten.

![Screenshot van de pagina die vraagt welk project de student gaat volgen](https://i.imgur.com/FwAPeKb.png)

De gebruiker kan zijn of haar project aanklikken. De website laat dan informatie zien over de aansluiting van zijn of haar project op de minor.

![Informatie voor Tech studenten](https://i.imgur.com/8Muyhlf.png)

Wanneer het project niet goed aansluit (in alle gevallen behalve bij project Tech) zal de website dit aangeven, maar ook wat de student als voordeel heeft op Tech studenten. Ook geeft de website een tip over het leren van de basis van Node.JS

![Informatie voor Visual studenten](https://i.imgur.com/lttb9sd.png)

### Uitleg principes

#### Clarity is job

Vanaf het moment dat de gebruiker op de website is het gelijk duidelijk waar de website over gaat, en wat er te vinden is. Niets voor niets staat er gigantisch 'Frond-End Developers' in beeld. Het is niet te missen dat de website gaat over de minor Web Development.

#### Strong visual hierarchies work best

Zoals ik bij het vorige puntje ook al aangaf staat er gigantisch 'Front-End Developers' in beeld, en het groot maken van belangrijke content gebruik ik over de hele website. Alle titels zijn groot en altijd in beeld wanneer het desbetreffende deel in beeld is.

#### One primary action per screen

Wanneer de gebruiker informatie leest over een bepaald onderwerp (intro, inhoud, vakken, etc...) is dat ook het enige wat in beeld is. De gebruiker wordt tijdens het lezen niet afgeleid door andere content anders dan de content waar hij over aan het lezen is.

## About this project

The goal of this project was to train myself to make better looking websites, and to make an usefull website for a specific user, in my case a blind person and a student who maybe wants to do the minor next year. The website itself is about the minor I'm currently doing.

## User scenario

I had to make two user scenario's for this course. The user scenario's are:

- I want information about the minor that I'm interested in
- I want information about a minor that my university is giving and check if the website is accessible

The first user scenario is for a user that I made up. The person is currently in the second year of the course, and has to choose a minor in the following months. The student has interest in Front-End Development, and possibly wants to do the minor next year. The needs of this user are:

- Relevant and up-to-date information
- Information about the courses
- Information about the requirements
- Contact information
- Information about how to sign up

The second user scenario is a user scenario for Larissa. For this course, we got assigned a user with a handicap. I got Larissa. Larissa is a blind student that did the minor UX at the HvA. She uses a screenreader to navigate through the website. She deeply wants to increase the accessibility of the whole campus and the courses. Part of this are the websites of the courses and minors. Her user needs are:

- Relevant information about the minor
- Content that is easy to nagivate through

## Content

For both the users, the content is the most important part of the website. For the student that maybe wants to do the minor, he needs relevant information that answers the questions he possibly has. For Larissa, it is more a matter of how the content is structured. When the content is badly structured, it is hard for her to navigate through the website.

For the made up person, I asked myself what questions I had when I learned about this minor. I also asked some of my classmates what they wanted to know about the minor when they had to choose a minor. There were a lot of similar questions we had, including:

- What are we going to do at the minor?
- What are we going to learn at the minor?
- What are the requirements?
- How can I sign up?
- When does the minor start?

An interesting outcome was, that the students really valued the opinion of students that already did the minor. A student values the opinion of another student higher that the opinion of a teacher.

I managed to order the questions the students had, and seperated them in 4 parts:

- Introduction
- Content of the minor
- Courses of the minor
- (meta)Information about the minor

## First design

The style I chose to apply to my website is the style of the course CMD. The minor is part of the course CMD, and style appears regularly in the minor. The colour scheme is mostly yellow (#FFCC00), black and white.
For the header font I used Source Code Pro, and for the regular text I used Open Sans.

![The first design](https://i.imgur.com/coGXfDO.png)

## Test

After I made the first design, I tested the design. What I noticed, was that the navigation header was noticed before the content header, while this is not my intention. The content header should have been noticed before the navigation. The yellow of the navigation made it more visually appealing than the content header.
What I noticed then, was that the headers of the text just didn't really work out the way I intended them to. It was kinda ugly, but I didn't notice it when I first made the design.

![The block quote](https://i.imgur.com/BKPXudF.png)

What did work out pretty good, was the fact that the quote from students stood out from the rest of the content, which was my intention.

I also noticed that the content was alright. The test subject could easily find the information he was looking for.

### Test with Larissa

A link to the video can be found [here](https://www.youtube.com/watch?v=5UB6eq1Ddzo).

In the video you can see that Larissa had a hard time finding out she was in a section with all the courses of the minor, and said that she would like to see that it had a label, containing information about the section she is in, so I added an Aria label to the section.

## Iterations

After the test I changed some things to the design. I made the content header visually more important than the navigation header.

![Iteration to the first design](https://i.imgur.com/ibeMQKM.png)

This change resulted in that the next test subject looked at the content header before the navigation, which was the reason I changed it. But I still wasn't really done with the header. I didn't like the fact that the whole header was the same font-size, since the word 'Front-End Developer' is way more imporant than the rest, so I changed that as well.

![Iteration to the first design](https://i.imgur.com/XrCdq9o.png)

Something that I changed as well was the header of the text. I made them a lot more bigger than they were, and they were now sticky to the page. I also removed the icons on the page, since they didn't really add anything to the page.

## Interface principles

For this course, we had to inplement a few of the [19 Design Principles](http://bokardo.com/principles-of-user-interface-design/) by Joshua Porter.
The ones I inplemented are:

- Clarity is job
- One primary action per screen
- Strong visual hierarchies work best

These ones are the ones that I primarily focussed on. The other 16 are implemented as well, but are less noticeable.
