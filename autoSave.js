<script>


//Function that clicks the submit button liked to "#"
//  This executes the update.
function updateMS()
{

  document.getElementById('qanda-submit').click();
//  document.getElementById('qanda-submit').markAsPristine()
}


// global variable to hit the submit button with a link to "#" 
var checkSave = false;

// If checkSave is flipped to true, click the submit button linked to "#"
function checkIfSave()
{

  if (checkSave) {
    console.log('Saving.');
    document.getElementById('qanda-submit').click();
    checkSave = false;
  }

}


// Function to update Memberstack when Submit is pressed.
function allDone()
{
  checkSave = true;
  checkIfSave();
  setTimeout(() => {
    window.location.assign('https://www.authorsspotlight.com/ms/social');
  }, 1000);
}

// Simple function to flag that the input has changed.
function setToCheck()
{
  // console.log('setToCheck.');
  checkSave = true;
}


// Start the memberstack retreival process.
const memberstack = window.$memberstackDom
memberstack.getCurrentMember().then(({ data: member }) => {
  if (member)
  {
    console.log("memberstack worked.");
    
   // Check every 20 seconds if it should save.
    var intervalId = window.setInterval(function(){ checkIfSave() }, 20000); // (20 seconds)

   // Set to save only if the user typed since the last check.
    document.getElementById('edit-g').addEventListener("keyup", function(){setToCheck()} );

// If Memberstack doesn't load:
  } else {
    // do logged out logic here
    console.log("member not defined");
    const logout = async () => await window.$memberstackDom.logout(); 
    logout();
  }
})


</script>
