var formattedName = HTMLheaderName.replace("%data%", "Tan Le");


var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var phone = HTMLmobile.replace("%data%", "704-451-2956"); 
$("#header").append(phone); 

var email = HTMLemail.replace("%data%", "haitansle@gmail.com"); 
$("#header").append(email); 

var github = HTMLgithub.replace("%data%", "haitanle");
$("#header").append(github); 

// var location = HTMLlocation.replace("%data%", "Charlotte NC"); 
// $("#header").append(location)

var message = HTMLwelcomeMsg.replace("%data%", "I am interested in all things tech."); 
$("#header").append(message); 


var skills = HTMLskills.replace("%data%", "HTML, CSS, javaScript"); 


var workEmployee = HTMLworkEmployer.replace("%data%", "Premier Inc"); 
$("#workExperience").append(workEmployee); 