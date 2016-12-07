var bio = {
	name: "Christopher Gomez",
	role: "Web Developer",
	contacts: {
		mobile: "312.123.1234",
		email: "cg@gmail.com",
		github: "cg",
		twitter: "@cg",
		location: "Chicago"
	},
	welcomeMessage: "Welcome to my resume",
	skills: ["html", "css", "javascript"],
	biopic: "https://staticdelivery.nexusmods.com/mods/1151/images/5213-1-1449656129.png",
	display: function() {
		
		$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", this.name));

		$("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

		$("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
		$("#footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
		$("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

		$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));	

		$("#header").append(HTMLskillsStart);
		
		this.skills.forEach(function(skill) {
		    $("#skills").append(HTMLskills.replace("%data%", skill));
		});		

		$("#mapDiv").append(googleMap);
	
	}
};

var education = {
	schools: [{
		name: "MIT", 
		location: "Cambridge, Boston", 
		degree: "BS", 
		majors: ["Computer Science"], 
		dates: "2001-2005",
		url: "www.mit.edu"
	}],
	onlineCourses: [{
		title: "Front-End Web Developer",
		school: "Udacity",
		dates: "2016",
		url: "www.udacity.com"
	}],
	display: function() {
		this.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var eduentry = $(".education-entry:last");
		    eduentry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
		    eduentry.append(HTMLschoolDates.replace("%data%", school.dates));
		    eduentry.append(HTMLschoolLocation.replace("%data%", school.location));
			school.majors.forEach(function(major) {
			    eduentry.append(HTMLschoolMajor.replace("%data%", major));
			});			    
		});

		$("#education").append(HTMLonlineClasses);
		this.onlineCourses.forEach(function(course) {
			$("#education").append(HTMLonlineStart);
			var onlineentry = $(".online-entry:last");
		    onlineentry.append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
		    onlineentry.append(HTMLonlineDates.replace("%data%", course.dates));
		    onlineentry.append(HTMLonlineURL.replace("%data%", course.url));		    
		});
	}
};

var work = {
	jobs: [{
			employer: "Google",
			title: "Software Engineer",
			location: "Chicago, IL",
			dates: "2015 - current",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
		},
		{
			employer: "Microsoft",
			title: "Software Developer",
			location: "Seattle, OR",
			dates: "2013 - 2015",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	],
	display: function() {
		this.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var workentry = $(".work-entry:last");
		    workentry.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
		    workentry.append(HTMLworkDates.replace("%data%", job.dates));
		    workentry.append(HTMLworkLocation.replace("%data%", job.location));
		    workentry.append(HTMLworkDescription.replace("%data%", job.description));
		});	
	}	
};

var projects = {
	projects: [{
		title: "Online Resume",
		dates: "2016",
		description: "Website demonstrating javascript and jquery proficiency",
		images: ["https://resumegenius.com/wp-content/uploads/2014/09/Resume-Template-NeoClassic-Blue.jpg", "https://resumegenius.com/wp-content/uploads/2014/09/Resume-Template-BW-Executive.jpg"]
	}],
	display: function() {
		this.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			var projectentry = $(".project-entry:last");
		    projectentry.append(HTMLprojectTitle.replace("%data%", project.title));
		    projectentry.append(HTMLprojectDates.replace("%data%", project.dates));
		    projectentry.append(HTMLprojectDescription.replace("%data%", project.description));
			project.images.forEach(function(image) {
				$("#projects").append(HTMLprojectStart);
			    projectentry.append(HTMLprojectImage.replace("%data%", image));
			});			    
		});	
	}	
};

bio.display();
work.display();
projects.display();
education.display();