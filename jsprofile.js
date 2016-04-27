
//this function does not 
function init (){
var content = '';


content += '<head>';
content += '<meta charset="utf-8">';
content += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
content += '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">';
content += '<title>Hanna Vadeboncoeur</title>';
content += '<style>';
content += '</style>';
content += '</head>';
content += '<body>';
content += '<div id="navmen">';	
//content += '<div class="container">';
content += '<div class="main">';
//contact form in class contact
content += '<div class="contact" id="formx">';
//content += '</div>';
content += '</div>';
content += '</div>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>';
content += '<script>';
content += '</script>';
content += '</body>';

document.getElementById('main').innerHTML = content;

//calls navbar
//html <div id=navmen>
navBar ();

//calls footer
//html <div id=foot>
makeFoot ();

//calls profile
//html <div id=index>
hvProfile ();
	

	
}

//function to display navbar
function navBar()
{
	
var content = '';
content += '<nav class="navbar navbar-inverse">';
content += '<div class="container-fluid">';
content += '<div class="navbar-header">';
content += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span> ';
content += '</button>';
content += '<a class="navbar-brand" href="#">Hanna Vadeboncoeur</a>';
content += '</div>';
content += '<div class="collapse navbar-collapse" id="myNavbar">';
content += '<ul class="nav navbar-nav">';
content += '<li><a href="#" onclick = hvProfile()>Home</a></li>';
content += '<li><a href="#" onclick = aboutMe()>About</a></li>';
content += '<li><a href="#" onclick = showPortfolio()>Portfolio</a></li>';
content += '<li><a href="#" onclick = makeForm()>Contact Me</a></li>'; 
content += '</ul>';
content += '</div>';
content += '</div>';
content += '</nav>';
	


document.getElementById('navmen').innerHTML = content;
	
}

//function to display profile/home
function hvProfile()
{

//document.getElementById('').innerHTML = '';
document.getElementById('formx').innerHTML = '';
document.getElementById('index').innerHTML = '';
	
var content = '';
	
content += '<!-- HEADER  -->';
content += '<header id="top" class="header">';
content += '<div class="text-vertical-center">';
content += '<h1>Hanna Vade<em>boncoeur</em></h1>'; 
content += '<h2>designed with <em>good heart</em>.</h2>';
content += '<h3><b>Aspiring Programmer and Front End Developer</b></h3>';
content += '<br/>';
content += '</div>';
content += '</header>';
content += '<!--CONTAINER-->';
content += '<div class="aboutme">';
content += '<h1>What I\'m about</h1>';
content += '<h3>Learning to use technology to advance mission driven work</h3><br/>';
content += '<div class="trio">';
content += '<img class="trio" src="img/nora2.jpg" width="200"/>';
content += '<img class="trio" src="img/selfiesquare.jpg" width="200"/> ';
content += '<img class="trio" src="img/IMG_1019.jpg" width="200"/>';
content += '</div><br/>';
content += '<p>I made my way to Boulder, CO via Madison, WI where I studied Community and Nonprofit Management and Global Health at the University of Wisconsin - Madison. I work in the nonprofit field to make a difference in the lives of others. Now, I\'m studying web development and programming at CodeCraft so I can use technology to help further the work of impact driven organizations.</p>';
content += '</div>';
content += '<div class="languages">';
content += '<div class="row">';
content += '<h3 id="language"><em>Creating with...</em></h3>';
content += '<div class="col-xs-4">';
content += '<h3>HTML</h3><hr class="small"/>';
content += '</div>';
content += '<div class="col-xs-4">';
content += '<h3>CSS</h3><hr class="small"/>';
content += '<p>Bootstrap, jQuery Mobile</p>';
content += '</div>';
content += '<div class="col-xs-4">';
content += '<h3>JavaScript</h3><hr class="small"/>';
content += '<p></p>';
content += '</div>';
content += '</div>';
content += '</div>';    

//puts function into index div
document.getElementById('index').innerHTML = content;



}

//creates contact form
function makeForm ()
{
	
document.getElementById('index').innerHTML = '';

var content = '';

content += '<h2>I\'d love to hear from you.</h2>';

content += '<label>Name </label>';
content += '<input type="text" name="name" id="name" value="" placeholder="Your Name" required/><br/><br/>';
content += '<label>Email</label>';
content += '<input type="text" name="" id="email" value="" placeholder="me@website.com"/><br/><br/>';
content += '<label requried>Send me a message! </label><br/>';
content += '<textarea name="message" id="msg" placeholder="Sending love..." required></textarea><br/><br/>';
content += '<a href="#" class="btn btn-primary send">SEND</a>';

//puts form to the div id=formx
document.getElementById('formx').innerHTML = content;
	
}

//function for footer
//called by init
function makeFoot(){

var content = ' ';

content += '<div class="footer">';
content += '<hr/>';
content += '<div class="col-sm-6" id="rightfoot">';
content += '<h4>Hanna <br/>Vadeboncoeur //</h4>';
content += '</div>';
content += '<div class="col-sm-5" id="leftfoot">';
content += '<p><b>Contact Info</b></p>';
content += '<p><a class="contact_info" href="tel:+19209883692">p: 920.988.3692</a><br/>';
content += '<a class="contact_info" href="mailto:h.vadebon@gmail.com">e: h.vadebon@gmail.com</a> </p>';
content += '</div>';
content += '</div>';

document.getElementById('foot').innerHTML = content;
	
}

//function for about
function aboutMe()
{   
//clears page firs
//then loads about page
document.getElementById('formx').innerHTML = '';
document.getElementById('index').innerHTML = '';
var content = '';
	
content += '<div class="aboutpage1">';
content += '<h3>Hi, my name is <p style=font-size:55px>Hanna Vadeboncoeur</p></h3>';
content += '<p>I\'m an aspiring developer, looking to make a difference<br/> using technology to advance mission driven work. To help make the world a cooler more connected place. </p>';
content += '<img id="selfie" src="img/selfiesquare.jpg" width="200"/>';
content += '</div>';
content += '<!--BODY -->';
content += '<div class="aboutpage2">';
content += '<h2>Education</h2><br/>';
content += '<p><b>I studied Nonprofit Management and Global Health at the University of Wisconsin - Madison</b> <br/> <br/> I absolutley love working for causes that I care about and believe in. But, I\'m constantly frustrated by the lack of technical resources that most nonprofits have access to or are willing to invest in. By learning to program I can be a part of the solution, helping to move mission driven work forward. <br/><br/>';
content += '<b>Currently, I\'m studying at CodeCraft.</b>';
content += '<br/><br/>';
content += '<p>I\'m so excited to part of a class and not trying to learn on my own!</p> ';
content += '</div>';
content += '<div class="aboutpage3">';
content += '<h4>I love a lot of things:</h4>';
content += '<p>traveling, yoga, coffee, running, mountain biking, camping, hiking, the sun, road bikes, netflix, my dog, the boyfriend, my family, lifting,  food, pretty things, photography, flip flops, airplanes, oceans, foreign languages, breakfast, sleeping, espresso, dreambikes, cooking, learning, foreign affairs, politics, music, the violin.</p>';
content += '</div>';

//trying to put into index

document.getElementById('index').innerHTML= content;

} 

//function for projects
function showPortfolio()
{
 
document.getElementById('formx').innerHTML = '';
document.getElementById('index').innerHTML = '';
	
var content = ' ';
	
content += '<h1 id="portfoliohead">What I\'ve been up to</h1>';
content += '<!--PROJECTS -->';
content += '<div class="row" id="gef">';
content += '<div class="col-sm-6">';
content += '<img src="img/navsarjan.jpeg" class="img img-responsive" alt="GlobalEducationFund" id="navsarjan"/>';
content += '</div>';
content += '<div class="col-sm-6">';
content += '<br/><br/><hr class="small"/>';
content += '<h1>Global Education Fund</h1>';
content += '<p>I am currently the Development Manager, responsible for fundraising, events and communications for Global Education Fund.</p><hr class="small"/>';
content += '</div>';
content += '</div>';
content += '<div class="row" id="w2l">';
content += '<div class="col-sm-6">';
content += '<br/><br/><hr class="small"/>';
content += '<h1>Write to Learn</h1>';
content += '<p>I developed a literacy and nutrition program for youth in Ethiopia, funded by the University of Wisconsin\'s Morgirdge Centers Wisconsin Idea Undergraduate Research Fellowship.</p>';
content += '<hr class="small"/>';
content += '</div> ';
content += '<div class="col-sm-6">';
content += '<img src="img/w2lbooks.jpg" class="img img-responsive" alt="Write To Learn" id="egnaleenga"/>';
content += '</div>';
content += '</div>';
content += '<div class="row" id="db">';
content += '<div class="col-sm-6">';
content += '<img src="img/DreamBikesHS2013-4531.jpg" class="img img-responsive" alt="DreamBikes" id="dreambikes"/>';
content += '</div>';
content += '<div class="col-sm-6">';
content += '<br/><br/><hr class="small"/>';
content += '<h1>DreamBikes</h1>';
content += '<p>I was the Development and Programs Manager for DreamBikes, a nonprofit that recycles bicycles and provides job training and career/college prep to inner city teens.</p> <hr class="small"/>';
content += '</div> ';
content += '</div>';
	
document.getElementById('index').innerHTML = content;	
	
}

init ();

/*
 <!-- Custom Theme JavaScript -->
    <script>
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    </script>

*/