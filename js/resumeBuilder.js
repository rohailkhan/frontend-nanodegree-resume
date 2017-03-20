var bio ={
	"name": "Rohail ",
	"role": "Frontend Web developer","welcome":"Asalamo Alaykum / Welcome to this page","contacts": {
		"mobile" : "02102428830",
		"email" : "rohailkhan@gmail.com",
		"github" : "https://github.com/rohailkhan",
		"location" : "Auckland"
	},
	"skills": ["SQL ", "Android Development  ", "JavaScript  ", "HTML  ", "CSS  ", "Bootstrap  ", "Github  ", "NodeJs  "],
	"pic": "images/fry.jpg"
}

var education={
	"Educational Institutes": [{
		"name": "University of Engineering and Technology",
		"location": "Lahore ,Pakistan",
		"degree": "Bachelor",
		"majors": ["Electrical Engineering"],
		"url": "www.uet.edu.pk"
	}, {
		"name": "UniTec",
		"location": "Auckland",
		"degree": "Short Course",
		"majors": ["Programming one", "SQL"],
		"url": "www.unitec.co.nz"
	}],

	"onlineCourses": [{
		"title": "Java Programming fundamentals",
		"Institute": "Duke University",
		"website": "Coursera.org"
	}, {
		"title": "Java Programming fundamentals",
		"Institute": "Duke University",
		"website": "Coursera.org"
	}] }

var work={
	"Telecom Project Manager": [{
		"company": "",
		"location": "Lahore ,Pakistan",
		"degree": "Bachelor",
		"majors": ["Electrical Engineering"],
		"url": "www.uet.edu.pk"
	}, {
		"name": "UniTec",
		"location": "Auckland",
		"degree": "Short Course",
		"majors": ["Programming one", "SQL"],
		"url": "www.unitec.co.nz"
	}],

	"onlineCourses": [{
		"title": "Java Programming fundamentals",
		"Institute": "Duke University",
		"website": "Coursera.org"
	}, {
		"title": "Java Programming fundamentals",
		"Institute": "Duke University",
		"website": "Coursera.org"
	}] }

var projects={
	"title": "Miwak Language Application",
	"platform": "Android",
	"description": "Multi page Android Application for translation of some typical Miwak Language word"
}

var formattedHeade=HTMLheaderName.replace("%data%" ,bio.name);
$("#header").prepend(formattedHeade);
var formattedrole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedrole);
var formattedpic=HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedpic);
var formatedHTMLmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedHTMLemail=HTMLemail.replace("%data%",bio.contacts.email);
var formatedHTMLgithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formatedHTMLwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcome);

$("#header").append(formatedHTMLmobile);
$("#header").append(formatedHTMLemail);
$("#header").append(formatedHTMLgithub);
$("#header").append(formatedHTMLwelcomeMsg);

//using if statement for bio.skills and using them in HTMLskillsStart and HTMLskills
if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
}