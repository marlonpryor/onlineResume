var bio = {
	"name": "Marlon Pryor",
	"role": "Front-end Web Developer",
	"contact": {
		"mobile": "972.987.0032",
		"email": "mkp1200@gmail.com",
		"github": "marlonpryor",
		"twitter": "@mook1200",
		"location": "Allen, TX"
	},
	"biopic": "images/bio.jpg",
	"welcomeMsg": "Welcome to my site. I am a self-taught Web Developer. I am currently studying at Udacity for Front-End Web Development",
	"skills": ["HTML", "CSS", "Javascript", "Python", "jQuery", "Bootstrap", "Sublime Text", "Google App Engine"]
};

var work = {
	"jobs": [
	{
		"employer": "AT&T Mobility",
		"title": "Equipment Design Engineer",
		"location": "Farmers Branch, TX",
		"dates": "2013-present",
		"description": "Design, Engineer and manage RF cellular power, baseband and tower equipment"
	},
	{
		"employer": "AT&T Mobility",
		"title": "Supply Chain Coordinator",
		"location": "Dallas, TX",
		"dates": "2007-2013",
		"description": "Responsible for the supply chain logistics from end to end"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Allow Comments",
		"dates": "2015",
		"description": "Built a Python back end using Google App Engine, Jinja2 HTML templates, and a database to host a web page online and allow user comments.",
		"images": ['']
	},
	{
		"title": "Movie Website",
		"dates": "2015",
		"description": "Created a movie website with images and trailers, this project demonstrates knowledge of Object Oriented Programming.",
		"images": ['']
	},
	{
		"title": "Automated Website",
		"dates": "2015",
		"description": "Used functions in Python to generate HTML.",
		"images": ['']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "American Military University",
		"location": "Charleston, WV",
		"degree": "Bachelor of Science",
		"majors": ["Information Technology"],
		"years": "2017",
		"url": "www.amu.apus.edu"
	},
	{
		"name": "American Military University",
		"location": "Charleston, WV",
		"degree": "Associate of Science",
		"majors": ["Web Publishing"],
		"years": "2015",
		"url": "www.amu.apus.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "www.udacity.com"
	},
	{
		"title": "Front-end Developer Nanodegree",
		"school": "Udacity",
		"date": "In progress",
		"url": "www.udacity.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
	
	$(".welcome-message").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
}

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
