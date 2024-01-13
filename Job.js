
//Called when Job is started.
function OnStart()
{ 
    console.log( "Running Job..." )
    
    //Check what time it is using an online server.    
    app.HttpRequest( "get", "http://worldtimeapi.org", "/api/ip", null, OnReply )
}

//Handle the server's reply.
function OnReply( error, response, status )
{
    console.log( response )
    
    //Show a notification.
    notify = app.CreateNotification()
    notify.SetMessage( "Job notification!", "My Job", JSON.parse(response).datetime )
    notify.SetSmallImage( "/Sys/Img/Notify.png" )
    notify.Notify()  
    
    //Shut down this job.
    app.Exit()
}

