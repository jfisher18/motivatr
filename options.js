function saveTime() {
  var timeIn = document.getElementById('timeIn').value;
  chrome.storage.sync.set({
    time: parseInt(timeIn)
  }, function() {
    // Update status to let user know options were saved.
    setTimeout(function() {
    }, 750);
  });
}
function saveTime2() {
  var timeIn2 = document.getElementById('timeIn2').value;
  chrome.storage.sync.set({
    timeAlready: parseInt(timeIn2)
  }, function() {
    // Update status to let user know options were saved.
    setTimeout(function() {
    }, 750);
  });
}
document.getElementById('save').addEventListener('click',saveTime);
document.getElementById('save2').addEventListener('click',saveTime2);
