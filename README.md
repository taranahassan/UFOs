# UFOs

### Overview of Project: <br>

This project analysis entailed creating a dynamic webpage with **UFO Sightings** data.  This web application was created using JavaScript that provides a summary and a table of the data with the ability to filter results.  <br>

#### Sources:
[data.js](https://github.com/taranahassan/UFOs/blob/main/static/js/data.js) <br>

<br>
<br>
### Results: <br>

Using the Bootstrap framework a table has been created to display the UFO sightings data.  Each line of entry show details of the sighting's location, shape and comments.  Filters have been created for user input and in return the table populates the relevant entry based on the user's search criteria.  <br>
<br>
![table](https://user-images.githubusercontent.com/75437852/110571238-45d08a80-8125-11eb-92ae-daa67160ded9.PNG)


**The filters are based on date, city, state, country and shape.** <br>
<br>
![filters](https://user-images.githubusercontent.com/75437852/110564925-a0fd7f80-811b-11eb-8c1d-a9be579fcc96.PNG)


As per the image above, in each search field, there is a text (in a less gradient shade) showing an example of what format can be entered:<br>
  - Date can be entered as M/DD/YYYY - for the date the event occurred
  - City can be entered as full city name in small letters - for the city in which the event occurred
  - State can be entered as state code in small letters - for the state in which the event occurred
  - Country can be entered as country code in small letters - for the country in which the event occurred
  - Shape can be entered as shapes in small letters - for what shape was observed in the sky

One or more filters can be used to populate results in the table.<br>

***First example:*** <br>
Only 1 search criteria entered for January 1, 2010.  All entries of any sightings that occurred on that day populates in the table. <br>
<br>
![search1](https://user-images.githubusercontent.com/75437852/110564885-9216cd00-811b-11eb-9cc1-0bbbd50b34a7.PNG)

***Second example:*** <br>
In this example both the date and shape criteria have been entered.  All entries were further refined from the first example and populated in the table. <br>
<br>
![search2](https://user-images.githubusercontent.com/75437852/110565136-fcc80880-811b-11eb-8d80-5fc5299ff2f9.PNG)
<br>
<br>
### Summary: <br>

Overall the webpage is aestetically pleasing with the header image and the background color.  However the only drawback in the webpage is that the search fields need to be cleared manually before entering a new search.

Some improvements can be made on the webpage such as:<br>
  1.  By adding a button "Clear form" at the bottom of the search fields before starting a new search, instead of having to delete the fields manually.
  2.  The text examples for each search field can be added below each window to show how the format of each input should be.  Since the text in each field is not as transparent, it looks similar to actually entering the criteria.
