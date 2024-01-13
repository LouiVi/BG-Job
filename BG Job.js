/*
 Notes:
  
 Any file with the name 'Job.js' can be run as a scheduled background
 job by the Android Job Scheduler (even when your app is not running). 
    
 Job debug messages are shown in gray on the debug tab. Pressing the stop 
 button in the wifi IDE will cancel the job and stop the app, but pressing 
 the back button on your device will stop the app but leave the job scheduled.
 
 Note: if you run a job more frequently than 10 minutes intervals then
 Android may warn the user that your app is draining the battery. Also
 Job scheduling may not very accurate as Android decides when it is a good
 time to run the job in order to save battery power.
*/

//Called when application is started.
function OnStart()
{
    //Create a layout.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )  
    txt = app.AddText( lay, "Background Job" )

    //Schedule job to run now and roughly every 10 minutes including
    //after reboot, but only if a network is available.
    app.ScheduleJob( 10*60*1000, "now,repeat,persist,network" )
    
    //Add layout to app.    
    app.AddLayout( lay )
}
