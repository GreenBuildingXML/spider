// Copyright 2018 Ladybug Tools authors. MIT License


	init();

	function init() {

		let txt =

`






<details>
<summary>2017-12-11</summary>

R8.11<br>
Reports<br>
	* Updated to button tag<br>
	* Storeys: display number and IDs of spaces<br>
	* Surfaces<br>
		* Better handling of on/off toggles<br>
		* Add 'all visible' button<br>
	* Duplicate Coordinates<br>
		* Add visibility toggle for all duplicates<br>
		* Add Space button to toggle view of space<br>
	* Duplicate Adjacencies<br>
		* Add visibility toggle for all duplicates<br>
		* Add length and width of element<br>
	* Tiny Surfaces<br>
		* Add length and width of element<br>
	* Invalid Adjacencies << new item<br>
		* Checks for multiple adjacencies in objects that should only have a single adjacency<br>
Settings<br>
	* Add toggle buttons for surfaces/edges/all<br>
	* Update colors<br>
	* Colors of duplicates etc unchanged when toggling other color settings<br>
Many other minor fixes and code clean-up<br>

</details>

<details>
<summary>2017-12-10</summary>

R8.10<br>
* Add 'first person' camera<br>
* Add beginning of drawing an analemma<br>
* Normals now only assed to visible elements<br>


</details>

<details>
<summary>2017-12-08</summary>

R8.9<br>
* Core<br>
	* Add 'reset view' calls createReport()<br>
* HUD<br>
	* Add toggle button<br>
	* Toggle off when new file loaded<br>

R8.8<br>
Core<br>
	* Add 'reset view' button resets background, camera, material colors<br>
Reports<br>
	* Add toggle visibility for each surface type<br>
	* Add display zone count and names per storey<br>


</details>

<details>
<summary>2017-12-07</summary>

R8.7<br>
* View building storeys<br>
* Zoom into spaces<br>
* Drag and drop files<br>
* And many small fixes<br>

</details>

<details>
<summary>2017-12-06</summary>

R8.5
12:44<br>
* Fixed: reset view not resetting surfaces visible<br>
* Settings: add toggle grid<br>
* Settings: add toggle ground<br>
* App2: add footer menu items<br>

</details>

<details>
<summary>2017-12-05</summary>

<p>Hi, and welcome to <a href="http://gbxml.org " target="_blank">gbXML</a> Viewer R8.4</p>

<p>Click one of the folder links above to get a list of files that will display just below.</p>

<p>Then click any file name to to start investigating.</p>

<p>In this release, when you have enabled 'Heads-Up Display', you must click on an item to view its details.</p>

</details>

`


		divAppMenu.innerHTML = txt;

//		const url = 'https://rawgit.com/ladybug-tools/spider/master/read-gbxml/data-files/open-studio-seb.xml';
		const url = 'https://rawgit.com/ladybug-tools/spider/master/read-gbxml/data-files/sam-live2.xml';



		divContents.style.maxWidth = '100%';
		document.body.style.overflow = 'hidden';
		divContents.innerHTML = '<iframe id=ifrThree src=' + threeDefaultFile + '#' + url + ' style=height:100%;border:none; ></iframe>';

	}