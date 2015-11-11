var bio = {
	"name": "Tan Le",
	"role": "Software Developer",
	"contact": {
		"mobile": "704-451-2956", 
		"email" : "tan_le@premierinc.com",
		"location": "Charlotte, NC", 
	},
	"pic" : "images/fry.jpg",
	"skills": ["Unix/Bash", "Backend Data Implementation", "Hadoop", "SQL", "HTML,CSS", "JavaScript", "Python"], 
	"message": "I am interested in all things tech.", 
	"github": "haitanle",
	"twitter": "@HaiTanLe"
};


bio.display = function() {

	var HTMLformattedName = HTMLheaderName.replace("%data%", "Tan Le"); 
	var HTMLformattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
	var HTMLformattedPhone = HTMLmobile.replace("%data%", bio.contact.mobile);

	$('#header').prepend(HTMLformattedRole);
	$('#header').prepend(HTMLformattedName); 

	$('#topContacts').append(HTMLformattedPhone);
	$('#topContacts').append(HTMLemail.replace("%data%", bio.contact.email));
	$('#topContacts').append(HTMLgithub.replace("%data%", bio.github));
	$('#topContacts').append(HTMLtwitter.replace("%data%", bio.twitter));
	$('#topContacts').append(HTMLlocation.replace("%data%", bio.contact.location));
	$('#bioPic').append(HTMLbioPic.replace("%data%", bio.pic));
	$('#bioPic').append(HTMLwelcomeMsg.replace("%data%", bio.message));

	if (bio.skills.length > 0 ){
		$('#header').append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++){
			$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
		}
	}
} 

bio.display()
 

var education = {
	"schools": [ {
		"name": "University of North Carolina-Charlotte",
		"dates": "August 2014 - May 2015", 
		"degree": "MS Computer Science", 
		"location": "Charlotte, NC" }
		,
		{ "name": "University of North Carolina-Chapel Hill",
		"dates": "August 2008 - May 2012", 
		"degree": "BA Sociology", 
		"location": "Chapel Hill, NC" }
	], 
	"onlineCourses" : [{
		"title": "Javascript Basic",
		"school": "Udacity", 
		"dates": 01122015,
		"url": "www.udacity.com/javascriptBasic"
	}
	]
}

education.display = function() {
	for (school in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name); 
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree); 
		var formattedNameAndDegree = formattedName+formattedDegree; 

		$('.education-entry:last').append(formattedNameAndDegree); 
		$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
		$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location)); 
	}
	for (course in education.onlineCourses){
		$('#education').append(HTMLonlineClasses);

		var courseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school); 
		
		$('.education-entry:last').append(courseTitle); 
		$('.education-entry:last').append(onlineSchool); 

	}
}

education.display(); 

var work = [
		{	
			"employer": "Premier Inc",
			"date": "January 2015 - present",
			"role": "Software Developer",
			"location": "Charlotte, NC",
			"description": "Premier is a healthcare technology company that provides and builds solutions for healthcare providers, foucsing on improving the health of communities, progress the performance of healthcare organizations, and reducing costs."
		},
		{
			"employer": "NC Gives",
			"date": "Summer 2012",
			"role": "Intern",
			"location": "Raleigh, NC",
			"description": "NC Gives is a non-profit organization that promotes and highlights philanthropic giving in the minority groups."
		},
		{
			"employer": "UNC-Chapel Hill",
			"date": "January 2011-June 2011",
			"role": "Student",
			"location": "Chapel Hill, NC",
			"description": "Analyze problems of validity and reliability and index contruction for research."
		},
		{
			"employer": "Family Theater Production",
			"date" : "July 2012-December 2012",
			"role" : "Film Editor Intern",
			"location": "Los Angeles, CA",
			"description": "Family Theater Production is a Catholic Film company founded by Holy Cross Relgious order."	
		}
];

work.displayWork = function () {

	for (var i = 0; i<work.length; i++) {

		console.log(work[i].employer);

		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work[i].employer);
		var formattedRole = HTMLworkTitle.replace('%data%', work[i].role);
		var formattedEmployerAndRole = formattedEmployer+formattedRole; 

		$('.work-entry:last').append(formattedEmployer);
		$('.work-entry:last').append(HTMLworkDates.replace('%data%', work[i].date));
		$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work[i].location));
		$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work[i].description));
	}
}

work.displayWork();


var locationizer = function(_work) {
	var work = _work; 
	var location = []; 
	for (employer in work) {
		location.push(work[employer].location); 
		console.log("work location: " + work[employer].location);
	}
	return location; 
}

locationizer(work);


var projects = {
	"PCE": [{
		"name": "Cohort", 
		"manager": "Tom Wiley", 
		"role": "Software Developer UI", 
		"dates": "January 2015-June 2015", 
		"description": "A single-page web application that allows grouping of diverse demographics.",
		"image": "images/project.gif"
	},
	{
		"name": "Community Health Needs Assessment (CHNA)", 
		"manager": "Tom Wiley", 
		"role": "Full Stack Software Engineer", 
		"dates": "June 2015-Present", 
		"description": "A web appication that presents CHNA data for health organizations.",
		"image": "images/project.gif"
	}
	]
}

projects.display = function() {
	for (project in projects.PCE){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.PCE[project].name); 
		var formattedRole = HTMLprojectRole.replace('%data%', projects.PCE[project].role); 
		var formattedTitleAndRole = formattedTitle+formattedRole; 

		$('.project-entry:last').append(formattedTitleAndRole); 
		$('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.PCE[project].dates)); 
		$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.PCE[project].description)); 

		if (projects.PCE[project].image.length > 0){
			$('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.PCE[project].image)); 
		}
	}
}

projects.display(); 


$(document).click(function(loc){
	console.log("X:%s Y:%s", loc.pageX, loc.pageY);
})

$('#main').append(internationalizeButton); 

function inName(_name) {
	var name = _name.split(' ');
	name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase(); 
	name[1] = name[1].toUpperCase(); 
	return name[0]+' '+name[1]; 
}

$("#mapDiv").append(googleMap);