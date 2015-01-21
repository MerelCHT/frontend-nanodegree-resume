

var bio = {
	"name" : "Merel Theisen",
	"age" : 22,
	/*"role" : "Web developer"*/
	"picture":"/Users/mereltheisen/Desktop/Blog/aboutphoto.jpg",
	"contacts" : {
		"email" : "mereltheisen@gmail.com",
		"mobile" : "07542339105",
		"location" : "London",
		"github" : "MerelCHT",
		"website" : "www.mereltheisen.com"
	},
	"skills" : ["Beginner: 	JSON, MySQL", "Intermediate: Matlab, JavaScript", "Proficient: Python, Java, HTML, CSS, LaTeX"]
};

var name = bio.name
var formattedName = HTMLheaderName.replace("%data%", name)
/*var role = bio.role
var formattedRole = HTMLheaderRole.replace("%data%", role)*/
var picture = bio.picture
var formattedPicture = HTMLbioPic.replace("%data%", picture)

//$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);

function appendResume(what, how, where) {
$(where).append(how.replace("%data%", what));
}

appendResume (bio.contacts.mobile, HTMLmobile, "#topContacts");
appendResume (bio.contacts.email, HTMLemail, "#topContacts");
appendResume (bio.contacts.github, HTMLgithub, "#topContacts");
appendResume (bio.contacts.location, HTMLlocation, "#topContacts");
appendResume (bio.contacts.website, HTMLblog, "#topContacts");

appendResume (bio.contacts.mobile, HTMLmobile, "#letsConnect");
appendResume (bio.contacts.email, HTMLemail, "#letsConnect");
appendResume (bio.contacts.github, HTMLgithub, "#letsConnect");
appendResume (bio.contacts.website, HTMLblog, "#letsConnect");

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};

var work = {
	"jobs" : [
	{
		"title" : "Tutor",
		"location" : "Amsterdam",
		"dates" : "2011 - 2014",
		"employer" : "StudentsPlus",
		"description" : "Helped high school children with studying chemistry, mathematics, ancient Greek, and French."
	},
	{
		"title" : "Treasurer",
		"location" : "Amsterdam",
		"dates" : "2012 - 2013",
		"employer" : "International Student Network",
		"description" : "International Student Network Amsterdam is part of the Erasmus Student Network and dedicated to the social and cultural integration of incoming exchange students. I was responsible for controlling ISN Amsterdam’s budget, 15 hours per week."
	}

	]
};
function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart); 
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
		$(".work-entry:last").prepend(formattedLocation);
	}
}

displayWork();

var projects = {
	"projects" : [
	{
		"title" : "www.mereltheisen.com",
		"dates" : "2014 - current",
		"description" : "I built my own website"
	},
	{
		"title" : "CondeNast hackathon",
		"dates" : "November 2014",
		"description" : "I participated in the CondeNast hackathon 2014."
	}
	]

};

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart); 
		var formattedProject = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProject);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
	}
};

projects.display();

var education = {
	"schools" : [
		{
			"name" : "University College London",
			"location" : "London",
			"graduation" : "2014 - 2015 (expected) ",
			"degree" : "MSc (honours)",
			"major" : "Computer Science"
		},
		{
			"name" : "Amsterdam University College",
			"location" : "Amsterdam",
			"graduation" : "2011 - 2014 ",
			"degree" : "BSc (honours)",
			"major" : "Liberal Arts & Sciences"
		},
		{
			"name" : "University of Nottingham",
			"location" : "Nottingham",
			"graduation" : "2013 - 2014",
			"degree" : "U21 Exchange programme",
			"major" : "Computer Science and English Literature"
		}
	]
};	

education.display = function(){
	for (uni in education.schools){
		$("#education").append(HTMLschoolStart); 
		var formattedEducation = HTMLschoolName.replace("%data%", education.schools[uni].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[uni].graduation);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[uni].degree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[uni].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[uni].major);
		$(".education-entry:last").append(formattedEducation);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").prepend(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
};

education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
  
});

/*
$("#main").append(internationalizeButton);
function inName(oldName) {
	oldName = bio.name;
    var finalName = oldName;
    // Your code goes here!

    var fullName = oldName.split(/\s+/);
    var firstName = fullName[0].toLowerCase();
    firstName = firstName.slice();
    firstName = firstName[0].toUpperCase() + firstName.slice(1, firstName.length);
    var lastName = fullName[1].toUpperCase();
    finalName = firstName + " " +  lastName;
    
    
    // Don't delete this line!
    return finalName;
}
*/

$("#mapDiv").append(googleMap);


