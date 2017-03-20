var bio ={
	"Name": "Name : Rohail ",
	"Role": "Role :Frontend Web developer",
	"contacts": [
		"mobile : 02102428830",
		"email : rohailkhan@gmail.com",
		"github : https://github.com/rohailkhan",
		"location : Auckland"
	],
	"skills": ["My Skills ", "Android Development  ", "JavaScript  ", "HTML  ", "CSS  ", "Bootstrap  ", "Github  ", "NodeJs  "],
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

var formattedHeade=HTMLheaderName.replace("%data%" ,"Rohail");
$("#header").prepend(formattedHeade);
var formattedrole=HTMLheaderRole.replace("%data%","Web developer");
$("#header").append(formattedrole);
var formattedpic=HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedpic);