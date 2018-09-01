<span style=display:none; >[You are now in a GitHub source code view - click this link to view Read Me file as a web page](https://www.ladybug.tools/spider/index.html#cookbook/design-explorer-very-lite/README.md "View file as a web page." ) </span>
<div><input type=button class="btn btn-secondary btn-sm" onclick="window.location.href='https://github.com/ladybug-tools/spider/blob/master/cookbook/design-explorer-very-lite/README.md'";
value='You are now in a GitHub web page view - Click this button to view this read me file as source code' ></div>

<br>

# [Design Explorer Very Lite Read Me]( #/cookbook/design-explorer-very-lite/README.md )

<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/index.html width=100% height=600px >Iframes are not viewable in GitHub source code view</iframe>

## Concept

Given these two links:

* https://tt-acm.github.io/DesignExplorer/
* https://github.com/ladybug-tools/design_explorer_lite


### Mission
Is it possible to replicate much of the functionality of these two sets of scripts in a way that:

* Is built on easy-peasy code with few dependencies?
* Can do 80% or so of what these apps do?
* All values derived from CSV are set by algorithm - no human intervention needed to get going?

### Vision

* Will it expose interesting new ways of visualizing Honeybee data?


### Features

* Interactive 3D chart running in your browser
	* Full real-time zoom, pan and rotate
* Designed so that basic operation are available on mobile devices
	* Slide in/out menu allows for viewing on snall screens
	* Finger touch-enabled
	* Screen adjusts for device rotations
* A variety of user-elected CSS themes are available
	* Includes all [Bootswatch]( https://bootswatch.com ) themes
* Loads a number sample charts with data hosted on GitHub
* Loads files using the file dialog box
* Output data fields may be applied to XYZ axes, size, shape and color
	* Assignments may be user-selected and updated at runtime
	* Variable names, minimum values and maximums value are displayed 'in-world' for each axis
	* All data is normalized to fit in a user-friendly data display volume
* Mouseover any data point to
	* View its data in a heads-up display at top right of screen
	* View its associated image in the display
	* Currently selected items are made brighter and enlarge
* Filters generated by algorithm for all input variables
	* Filters adjust auto-magically to the currently loaded data set
	* Data fields that are lists of text items are filtered using buttons with names
	* Data fields that are series of numbers are filtered using minimum and maximum range sliders
	* Interactive color legend - each color is a button that acts as a filter
* Code is about 35 KB and generally fairly easy to read with no dependencies outside of Three.js



## To do / wish list

* 2018-08-27 ~ Theo ~ Better stepping on slider when small number of numeric filters

* 2018-08-27 ~ Theo ~ Items that are toggle 'off' should not be selectable
* 2018-08-25 ~ Theo ~ Add reset view / zoom all
* 2018-08-25 ~ Theo ~ Add random data generator
* 2018-08-24 ~ Theo ~ reverse the sort order of an axis
* 2018-08-23 ~ Theo ~ Multiple simultaneous adjacent chart space volumes
	* With, say, each text field generating its own space
* 2018-08-23 ~ Theo ~ Add direction, three axes of scale, opacity, color of edges as user-selected displays of output variables
* 2018-08-23 ~ Theo ~ Add transparent planes to indicate current numeric min and max after filter applied
* 2018-08-23 ~ Theo ~ Add convex shape bubbles around text filtered data points
* 2018-08-23 ~ Theo ~ Add 'shadow' projects to each axis plane
* 2018-08-23 ~ Theo ~ Examples based on spreadsheet data
* 2018-08-23 ~ Theo ~ Permalinks to user-select output data assignments
* 2018-08-23 ~ Theo ~ Data export of data points selected by filtering
* 2018-08-23 ~ Theo ~ Explore sets of meshes or other ways of speeding up the generation and display of meshes
* 2018-08-10 ~ Theo ~ Add Pareto filters - see also Links of Interest section below

## Issues


* 2018-08-23 ~ Theo ~ Better interaction when setting multiple filters
	* Currently the current filter update overrides all other updates
	* Handle steps in the data more effectively
* 2018-08-23 ~ Theo ~ Better display of current values for numeric filters
	* Currently: only display as a tooltip

***

The following sections - newest on top - are a show and tell of the adventures in responding to the above challenge.

The older versions load a demo file with over five thousand data points. The file takes fifteen seconds or so to load. Because of this slowness the iframes with demo of recent previous releases are mostly turned off. So in order to view these demos you must click the full screen demo links.

The slowness is almost entirely due to each data point being a displayed with a unique 3D mesh. Recent releases have fixes to this slowdown.


***

## Script 17 / 2018-08-30: Design Explorer Very Lite R13

### Full Screen: [Design Explorer Very Lite R123]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r13/design-explorer-very-lite.html )

* Geometry is now centered around the center of the scene. Improves the look of the rotation
* Add name to projects fields
* Add project name and number of items to pop-up
* Always show all fields up to image url in pop-up

#### Wish list item well underway

* 2018-08-28 ~ Theo ~ Legend button titles should indicate ranges of values
* 2018-08-27 ~ Theo ~ Screen not rotating around the center of the geometry
* 2018-08-27 ~ Theo ~ Indicate details of currently loaded file somewhere


***

## Script 16 / 2018-08-27: Design Explorer Very Lite R12

### Full Screen: [Design Explorer Very Lite R12]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r12/design-explorer-very-lite.html )

* Add lib folder and break up code into lots of little files
* Add better text filter toggles
* Add buttons to more CSV files
* Improve axis selection when opening a project
* Load random project on startup

#### to do items now well underway
* 2018-08-24 ~ Theo ~ Buttons that toggle other selections off / as with main gbXML Viewer


***

## Script 15 / 2018-08-25: Design Explorer Very Lite R11

### Full Screen: [Design Explorer Very Lite R11]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r11/design-explorer-very-lite.html )

* Add Ladybug Tools color palette
* Add interactive color legend - highlight selected data points by clicking on the color in the legend
* Move the directional light to positive X and Y / adjust the parameters
* Load and draw data points using requestAnimationFrame
	* Data starts appearing quite quickly
	* More fun to watch data appearing tan to look at a blank screen
* Add scene rotation along with rotation speed slider
* Heads-up displays number of items loaded during the loading process

#### to do items now well underway

* 2018-08-25 ~ Theo ~ Add read CSV data from file
* 2018-08-23 ~ Theo ~ Nice progress indicator for the 15 seconds or so it takes to load the demo data file with 5K data items
* 2018-08-23 ~ Theo ~ Better light and shade
* 2018-08-10 ~ Theo ~ Apply Ladybug Tools standard colors / More standardized system of colors
* 2018-08-10 ~ Theo ~ Legends for everything

####  Issues

* Some data points appear to be flat


***

## Script 14 / 2018-08-23: Design Explorer Very Lite R10

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r10/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view</iframe>
-->


### Full Screen: [Design Explorer Very Lite R10]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r10/design-explorer-very-lite.html )

* Add HTML5 range slide for minimum and maximum filters
* Update numeric filters UI
* Data points filtered out are grayed out and not just just made invisible
* Data points scale up in size on mouseover and down again on mouse out



### Notes

This release begins to feel as if this little project is becoming feature complete for its current stage of development. It's not quite yet ready for testing but certainly worth having a look. It will take another two or three releases to get this script shareable with generating too many issues.

For sure there are many small details to tweak. Numeric filters we are looking at you. Nonetheless, the main thrust of the project - view a multitude of multi-variable data items in interactive 3D environment with a user interface that enables a full system of data filters - is all progressing well.

Even more fun is the feeling that the code here is more than just for the Honeybee data. Design Explorer Very Lite looks feels like it may be readily adapted to display many types of complex data sets.

The significant downer is that the demo file first loaded has over five thousand records and takes about fifteen seconds to load.

Compare and contrast with a Google search on '3D scatter plot':

https://www.google.com/search?q=3d+scatter+plots&rlz=1C1GCEA_enUS752US752&tbm=isch&tbo=u&source=univ&sa=X

You will be hard pressed to find a plot that is
* Interactive 3D
* Filterable in real time
* Axes and other output parameters are run-time user-selected
* Under 20KB of easy peasy JavaScript


Seems to be working in Chrome and Firefox

***

## Script 13 / 2018-08-20: Design Explorer Very Lite R9

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r9/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view</iframe>
-->

### Full Screen: [Design Explorer Very Lite R9]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r9/design-explorer-very-lite.html )

* Better identification of text filters
* Multi-thumb sliders beginning to appear to set minimum and maximum filters
* Heads-Up display and image display combined and fixed at top right
* Better spacing between buttons


#### Fixed or well underway

* 2018-08-10 ~ Theo ~ Add toggle visibility of meshes but not edges
* Heads-up display at top right of screen
* Placards not deleted when new file loaded
* Images read as filters
* 2018-08-10 ~ Theo ~ Add add/remove CSS classes to buttons to indicate states
* 2018-08-10 ~ Theo ~ Add numeric filters with min/max sliders
* 2018-08-10 ~ Theo ~ Add cumulative filters


### Notes
So the multi-thumb slider ended up having too many issues. Mostly it did seem to like being rebuilt on the fly.



***

## Script 12 / 2018-08-19: Design Explorer Very Lite R8

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r8/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view</iframe>
-->

### Full Screen: [Design Explorer Very Lite R8]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r8/design-explorer-very-lite.html )

* Filters beginning to work as expected
* Start of adding numeric filters




***

## Script 11 / 2018-08-10: Design Explorer Very Lite R7

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r7/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view</iframe>
-->

### Full Screen: [Design Explorer Very Lite R7]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r7/design-explorer-very-lite.html )

* Add more details element to menu
* Add shapes with cylinders of differing counts of radius segments
* Add varying sizes
* Add first pass at setting filters: creates filters based on any text-only fields in the CSV file
* Add buttons to trigger the filters
* Add button to set all data points visible


### Wish list items completed / underway

* 2018-08-04 ~ Theo ~ Add filters
* 2018-08-04 ~Theo ~ Add display of sizes, shapes, opacity, shape surrounds


***

## Script 10 / 2018-08-09: Design Explorer Very Lite R6

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r6/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view</iframe>
-->

### Full Screen: [Design Explorer Very Lite R6]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r6/design-explorer-very-lite.html )

* Add edges in black to data points
* Currently selected data point highlights on mouseover heads-up as expected
* Add basic basic axes labels as billboards
* Add min and max values to axes labels
* Add basic grid
* Images appear in left menu when there's a mouseover a data point
* Add button to toggle screen background
* Add button to toggle rotation

### Wish list items completed

* 2018-08-04 ~ Theo ~ derive axes selection item directly from the 'out' items in the CSV file
* 2018-08-04 ~Theo ~ Add display of colors, sizes, shapes, opacity, shape surrounds
* 2018-08-04 ~ Theo ~ Add axes labeling and min & max
* 2018-08-04 ~ Theo ~ Add better heads-up display and mouseover interaction
* Add Sun, shade and shadows?

***

## Script 9: Design Explorer Very Lite R5

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r5/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [Design Explorer Very Lite R5]( https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r5/design-explorer-very-lite.html )

* Widen select elements
* Add spider icons
* Add buttons and support for the three original Design Explorer sample projects
* Axes select option created on-the-fly after loading the CSV files
* Color added as an option
* Lights and shading added

Issues
* Heads-up not displaying as desired
* Needs labels and legends

***

## Script 8: Design Explorer Very Lite R4

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r4/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [Design Explorer Very Lite R4]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r4/design-explorer-very-lite.html )

* Fetches CSV data from Design Explorer Lite [Sample Project1]( https://github.com/ladybug-tools/design_explorer_lite/tree/master/resources/sample_project_1 )
* Parse the data into a 3D view
* All data notmalized into a 100 x 100 x 100 3D space
* You can select which parameters are displayed on which of the three axes
* Mouseover any cube to display its parameters and PNG image
* Select Bootstrap theme
* Menu slides out of way for operation on a mobile phone
* Under 700 lines / 18 KB

***

## Script 7: Design Explorer Very Lite R3
<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r3/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [Design Explorer Very Lite R3]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r3/design-explorer-very-lite.html )

* Mostly broken
* See 'Issues'regarding default design files



## Script 6: Design Explorer Very Lite R2
<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r2/design-explorer-very-lite.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [Design Explorer Very Lite R2]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r2/design-explorer-very-lite-r2.html )


* Add left side menu menu with sliding capability
* Automate process of finding JSON file names



## Script 6: Design Explorer Very Lite R1

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r1/design-explorer-very-lite-r1.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [Design Explorer Very Lite R1]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r1/design-explorer-very-lite-r1.html )

First pass at gathering all the data and providing a display of the data
* Loads a CSV file which then loads all the JSON files and displays these in 3D
* RedBox is the default. All three data sets available with th click of a button
* Spacing and position is roughly calibrated on-the-fly for each data set

Comment 2018-07-28 21:44
* Well, it too a few hours more than I wanted, but at least there's something fun to look at
* There's nothing serious here yet, but at the least a proof of concept is in operation: we can load all th JSON files in a single visualization and manipulate the scene at a reasonable pace



## Script 5: View Design Explorer Data Three.js files R2

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r1/view-design-explorer-data-threejs2.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [View Design Explorer Data Three.js files R2]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r1/view-design-explorer-data-threejs2.html )

A second pass at loading the JSON files into Three.js
* Some of the aspect of loading the Three.js JSON have been cleared up



## Script 4: View Design Explorer Data Three.js files

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r1/view-design-explorer-data-threejs.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [View Design Explorer Data Three.js files]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r1/view-design-explorer-data-three.js.html )

A first pass at loading the JSON files into Three.js
* Loads RedBox by default
* Buttons enable loading sample files from each of the three folders

Comments 2018-07-28 17:33

* Files load just fine using Three,js ObjectLoader
* Oh wow!. These files include scene data. It's like we are back at the AEC Hackathon in 2014. It was a mistake then (__mea culpa__). It's like a joke now.
* My bad. The files are OK. Scene data is not in the files. It's Object Loader or something creating the scene data.
* looks like I have some learning to do.
* 17:52 ~  Lesson learned. things seem to be working OK kind of




## Script 3: View Design Explorer Data CSV files

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r1/view-design-explorer-data-csv-files.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [View Design Explorer Data CSV files]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r1/view-design-explorer-data-csv-files.html )


A first pass at reading the CSV files
* Buttons allow you to load the data from each of the three files. RedBox is loaded as the default
* Uses a JavaScript fetch to obtain the file as text
* Parse the text data into an array of lines, each of which is an array of data points
* Use the data to fetch and display all the PNG files
* Click the PNG to enlarge and get an alert of the parameters for that file

Comments 2018-07-28 16:21
* Well, that was easy
* Issue needs two clicks to shrink the PNG file



## Script 2: View Design Explorer Data JSON files

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r1/view-design-explorer-data-json-files.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [View Design Explorer Data JSON files]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r1/view-design-explorer-data-json-files.html )

A first pass at reading the JSON files
* Uses the GitHub API to ob2ain a list of file names
* Using that list downloads and creates buttons with links to the files
* Buttons allow you to select the file and view its contents as stringified JSON

Comments 2018-07-28 14:37
* Of Wow! They are storing 3D data using Three.js JSON. Interesting choice. I wonder why they picked this file format instead of a more lightweight format such as OBJ or STL or an industry standard such as DXF, RAD or gbXML
* Hm. I thought there would ve various data parameters contained in each JSON file. but no, the data is quite minimal just geometry, material and a bit of layer data to indicate construction material.
* Ah! the 'parameter' data ~~are~~ is in individual CSV files in the parent file. And it includes the file names of both the PNG and JSON files. So now lets hit on that file. ;-)


## Script 1: View Design Explorer Data PNG files

<!--
<iframe src=https://www.ladybug.tools/spider/cookbook/design-explorer-very-lite/r1/view-design-explorer-data-png-files.html width=100% height=400px >Iframes are not viewable in GitHub source code view<</iframe>
-->

### Full Screen: [View Design Explorer Data PNG files]( https://www.ladybug.tools/spider/#cookbook/design-explorer-very-lite/r1/view-design-explorer-data-png-files.html )

A first pass at reading the PNG files.
* Uses the GitHub API to obtain a list of file names
* Using that list downloads and displays the files
* Buttons allow you to select the folder
* Click images repeatedly to enlarge and shrink
* Tooltips display file name

Comments 2018-07-28 13:07
* I though the file names might contain useful data, but each folder uses a different naming convention so no significant data can be extracted or inferred from the names without prior knowledge of its schema
* So let's look at the JSON files


### Issues

[DefaultData]( https://github.com/tt-acm/DesignExplorer/tree/gh-pages/design_explorer_data/DefaultData )
* This data set was built with an earlier release of Three.js
* It does not work with any release after R81
* The XYZ data is is compressed in one direction and stretched in another, if this file is of interest it will bee a custom script to display nicely


## Links of interest


### Design Explorer

* https://tt-acm.github.io/DesignExplorer/
* https://tt-acm.github.io/DesignExplorer/
* https://github.com/tt-acm/DesignExplorer/wiki
* https://github.com/tt-acm/DesignExplorer

### Design Explorer Lite

A light version of design explorer meant to display sliders for the inputs and simple images + charts for outputs: http://www.ladybug.tools/design_explorer_lite/

* https://github.com/ladybug-tools/design_explorer_lite
* https://github.com/ladybug-tools/design_explorer_lite/wiki

CSV files
* https://github.com/ladybug-tools/design_explorer_lite/tree/master/resources
* https://github.com/ladybug-tools/design_explorer_lite/blob/master/resources/sample_project_1/data.csv


### Pareto Filters

* https://en.wikipedia.org/wiki/Pareto_chart
* https://en.wikipedia.org/wiki/Pareto_analysis


## Nice plots / Inspiration for this project

* https://en.wikipedia.org/wiki/Scatter_plot
* www.originlab.com/doc/Tutorials/3D-Scatter-ColorMap
* www.doka.ch/Excel3Dscatterplot.htm


## Change log

See notes for each individual script

### 2018-08-06 ~ Theo

R5


### 2018-08-04 ~ Theo

R4
* Big update

Done

Design Explorer Very Lite R1
* Sort the JSON objects given X,Y and Z axis, size, color etc
* Mouse over each JSON object to view its details
### 2018-07-28 ~ Theo

R1
* First commit
* Add template files
* Add 'View Design Explorer Data PNG files'

***

# <center title="hello!" ><a href=javascript:window.scrollTo(0,0); style=text-decoration:none; > &#x1f578; </a></center>
