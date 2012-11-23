// Not sure why we are using these instead of jquery for cookies.

function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
    }
}

function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function checkCookie() {
    firstName 			= getCookie("firstName");
    lastName  			= getCookie("lastName");
    organizationName	= getCookie("organizationName");
    userEmail			= getCookie("userEmail");
    userRole			= getCookie("userRole");
    userGrade			= getCookie("userGrade");
    userExperience		= getCookie("userExperience");

    if (firstName !=null && firstName != "" && lastName != null && lastName != "")
    {
        document.getElementById('userWelcome').innerHTML = "Welcome, " + firstName + " " + lastName + " <small>(<a href='javascript:clearCookie();' >Not Me?</a>)</small>";
    }
    else
    {
        $("#userModal").modal('show');
    }
}

function clearCookie() {
    setCookie("firstName",'',1);
    setCookie("lastName",'',1);
    setCookie("organizationName",'',1);
    setCookie("userEmail",'',1);
    setCookie("userRole",'',1);
    setCookie("userGrade",'',1);
    setCookie("userExperience",'',1);
    document.getElementById('userWelcome').innerHTML = "You are not logged in.";
    checkCookie();
}