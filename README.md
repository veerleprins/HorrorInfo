## HorrorInfo:

<img width="1657" alt="Screenshot of the application." src="https://user-images.githubusercontent.com/35265583/109234284-ada0e000-77cb-11eb-8f73-b1f0b95c71b9.png">

## :black_nib: Short Description

For the Web Apps from Scratch course within the Minor Web Design & Development ([@cmda-minor-web](https://github.com/cmda-minor-web)) we learn about Designing and Developing web applications from scratch without using frameworks or unnecessary libraries.

This repository shows a web application about movies with the API from [The Movie DB](https://www.themoviedb.org/). It is not necessary to have an account to view this application.

## Table of contents:

- [Feature](#small_orange_diamond-feature)
- [Diagrams](#book-feature)
- [Datasets](#link-datasets)
- [Install](#arrow_down-install)
- [Deploy](#globe_with_meridians-deploy)
- [Future features](#small_blue_diamond-future-features)
- [Sources](#books-sources)

## :small_orange_diamond: Feature

With **Horror Info** you can find information about a specific horror movie. There are horror movies to discover, but you can also search for a horror movie using the search bar. You can also see the number of votings, which is the average, but especially very important: Where you can watch this film in corona time.

## :book: Diagrams

### Actor diagram

<img width="1624" alt="The Actor diagram of my code." src="https://user-images.githubusercontent.com/35265583/109628052-969f1c80-7b42-11eb-8ae7-5af113ed282f.png">

### Interaction diagram

<img width="1624" alt="The Interaction diagram of my code." src="https://user-images.githubusercontent.com/35265583/109628304-e251c600-7b42-11eb-956e-c11c5833c1a9.png">

## :link: API

The API that was used is the API supplied by The Movie DB. These are public APIs and can be found at the link below:

https://developers.themoviedb.org/3/

This has been my 'standard' endpoint to which several parameters have been added to retrieve the data. The parameters below were used to obtain the various information:

- `discover/movie`
- `movie/${movieID}`
- `movie/${movieID}/recommendations`
- `movie/${movieID}/watch/providers`
- `search/movie`

Based on these parameters, it can be seen that I show discovery movies, a specific movie, recommended movies based on a specific movie, the places where this specific movie can be viewed and the user can search for movies.

## :arrow_down: Install

### 1. Install npm :computer:

Before getting started, you need to install nvm. nvm can be installed by typing the following line of code in terminal and pressing enter:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh `

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

`nvm --version`

### 2. :open_file_folder: Clone folder

Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

`cd/Desktop/Repos`

Then type the following line of code into your terminal:

`git clone https://github.com/veerleprins/web-app-from-scratch-2021.git`

With this line of code, you've successfully downloaded the repository to your desired location.

### 3. Install all the packages :bookmark_tabs:

Then type the code below into your terminal:

`npm i`

With this line of code, you download all the packages you need for this repo.

### 4. :white_check_mark: Start and run the code

Go to the repository in the terminal and add the following line of code below:

` npm run dev`

Now you can open http://localhost:1234/ in your browser to view the web application! :raised_hands:

## :globe_with_meridians: Deploy

My web application can be found at the link below:  
https://veerleprins-wafs-movies.netlify.app

## :small_blue_diamond: Future features

As a future vision I would like to expand this application so that the user can create his own profile and save movies in lists. I would also like to add that the user can filter for films based on actors who may or may not play in the movie.

## :books: Sources

The sources I've used to create this web application:

- 🚀 Getting Started. (n.d.). Parcel.Js. Retrieved 2 February 2021, from https://parceljs.org/getting_started.html
- Schepenaar, W. (2018, 12 june). Server-side vs Client-side Routing - Wilbert Schepenaar. Medium. https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f
- npm: navigo. (2021, 7 february). npm. https://www.npmjs.com/package/navigo
- MDN. (z.d.). Array.prototype.sort() - JavaScript | MDN. MDN Web Docs. Geraadpleegd op 30 november 2020, van https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- Kadimi, N. [nabil-kadimi]. (2013, 11 august). How to make input text border with CSS when it’s OnFocus [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/18173816/how-to-make-input-text-border-with-css-when-its-onfocus
- Unknown, E. [Elias]. (2019, 25 november). Fetch multiple URLs at the same time? [StackOverflow Post]. Stack Overflow. https://stackoverflow.com/questions/59037553/fetch-multiple-urls-at-the-same-time
- Wayne, A. [alex-wayne]. (2015, 2 june). Return only numbers from string [StackOverflow Post]. Stack Overflow. https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
- Gibolt, [Gibolt]. (2009, 6 march). Can I insert elements to the beginning of an element using .appendChild()? [StackOverflow Post]. Stack Overflow. https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild
- Aziz, [Aziz]. (2016, 12 september). How to use es6 import for images [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/39458511/how-to-use-es6-import-for-images
- ForYourOwnGood. (2009, 18 january). How do I check if an object has a key in JavaScript? [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
- Seeklogo. (z.d.). [Illustrations]. Seek Logo. https://seeklogo.com/
- Salvadó, C. C. [christian-c-salvadó]. (2011, 22 augustus). Javascript Regular Expression Remove Spaces [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/7151159/javascript-regular-expression-remove-spaces
- Shah, A. (2020, 6 june). How to remove duplicates from an array in JavaScript. Atta-Ur-Rehman Shah. https://attacomsian.com/blog/javascript-remove-duplicates-from-array
- Netflify. (z.d.). Build environment variables. Netlify Docs. Geraadpleegd op 18 february 2021, van https://docs.netlify.com/configure-builds/environment-variables/
- Andy, J. [jandy]. (2015, 19 february). Removing undefined values from Array [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
- Dayıbaşı, O. (2020, 1 february). How to Hide Scrollbar and Visible Only Scrolling - Frontend Development With JS. Medium. https://medium.com/frontend-development-with-js/how-to-hide-scrollbar-and-visible-only-scrolling-79cc3472e503
- Unknown, A. (2020, 16 december). How to get the keys of a JavaScript object. techtutorialsx. https://techtutorialsx.com/2020/05/23/javascript-getting-keys-of-object/
- Pavlutin, D. (2020, 11 augustus). How to Access Object’s Keys, Values, and Entries in JavaScript. Dmitri Pavlutin Blog. https://dmitripavlutin.com/access-object-keys-values-entries/

## :lock: License

This repo is licensed as [MIT](https://github.com/veerleprins/web-app-from-scratch-2021/blob/master/LICENSE) by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020
