var bio = {
	"name": "Tan Le",
	"role": "Software Developer",
	"contact": {
		"mobile": "704-451-2956", 
		"email" : "tan_le@premierinc.com",
		"location": "Charlotte, NC", 
	},
	"pic" : "images/fry.jpg",
	"skills": ["Data Science","UI","Java"], 
	"message": "I am interested in all things tech.", 
};


bio.display = function() {

	var HTMLformattedName = HTMLheaderName.replace("%data%", "Tan Le"); 
	var HTMLformattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
	var HTMLformattedPhone = HTMLmobile.replace("%data%", bio.contact.mobile);

	$('#header').prepend(HTMLformattedRole);
	$('#header').prepend(HTMLformattedName); 

	$('#topContacts').append(HTMLformattedPhone);
	$('#topContacts').append(HTMLemail.replace("%data%", bio.contact.email));
	$('#topContacts').append(HTMLlocation.replace("%data%", bio.contact.location));
	$('#bioPic').append(HTMLbioPic.replace("%data%", bio.pic));
	$('#bioPic').append(HTMLwelcomeMsg.replace("%data%", bio.message));


	if (bio.skills.length > 0 ){
		$('#header').append(HTMLskillsStart);
		$('#skills').append(HTMLskills.replace('%data%', bio.skills[0]));
		$('#skills').append(HTMLskills.replace('%data%', bio.skills[1]));
		$('#skills').append(HTMLskills.replace('%data%', bio.skills[2]));
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
		// $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location)); 
	}
}

education.display(); 

var work = [
		{"employer": "Premier Inc",
		"date": "January 2015 - present",
		"role": "Software Developer",
		"location": "Charlotte, NC",
		"description": "Premier is a healthcare technology company that provides and builds solutions for healthcare providers, foucsing on improving the health of communities, progress the performance of healthcare organizations, and reducing costs."
		}
]

var displayWork = function () {

for (job in work) {
	$('#workExperience').append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace('%data%', work[job].employer);
	var formattedRole = HTMLworkTitle.replace('%data%', work[job].role);
	var formattedEmployerAndRole = formattedEmployer+formattedRole; 

	$('.work-entry:last').append(formattedEmployerAndRole);
	$('.work-entry:last').append(HTMLworkDates.replace('%data%', work[job].date));
	$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work[job].location));
	$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work[job].description));
	}
}

displayWork();


var projects = {
	"PCE": [{
		"name": "Cohort", 
		"manager": "Tom Wiley", 
		"role": "Software Developer UI", 
		"dates": "January 2015-June 2015", 
		"description": "A single-page web application that allows grouping of diverse demographics."
	}
	,
	{
		"name": "Community Health Needs Assessment (CHNA)", 
		"manager": "Tom Wiley", 
		"role": "Full Stack Software Engineer", 
		"dates": "June 2015-Present", 
		"description": "A web appication that presents CHNA data for health organizations."
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

// initializeMap(); 