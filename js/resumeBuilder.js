var formattedName = HTMLheaderName.replace("%data%", "Tan Le");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
$("#header").append(formattedRole);

var phone = HTMLmobile.replace("%data%", "704-451-2956"); 
$("#header").append(phone); 

var email = HTMLemail.replace("%data%", "haitansle@gmail.com"); 
$("#header").append(email); 

var github = HTMLgithub.replace("%data%", "haitanle");
$("#header").append(github); 

var message = HTMLwelcomeMsg.replace("%data%", "Message goes here"); 
$("#header").append(message); 