// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require clipboard


//open only one modal at a time
function openModal(){
    $('#myModal').modal('show')
}

//Jquery function close all opened modal in one click

$(document).ready(function() {
    $('#myModal button').on('click', function() {
        $('.modal').modal('hide');
    });
});

function closeModal() {
  $('#myModal').modal('hide');
}


// attack clipboard.js to copy buttons
$(document).ready(function(){
    var clipboard = new Clipboard('.copy-button', {
        target: function(trigger) {
            return $(trigger).closest('.code-snippet').find('.code').get(0);
            prompt("Email successfully copied!");
        }
    });
});

// Show prompt Success Alert
function alertBox() {
  alert("You have copied the email!");
};



//Tooltip feature after clicking copy button
/*$('.copy-button').tooltip({
  trigger: 'click',
  placement: 'buttom'
});

function setTooltip(message) {
  $('.copy-button').tooltip('hide')
  .attr('data-original-title', message)
  .tooltip('show');
}

 function hideTooltip(){
   setTimeout(function(){
     $('copy-button').tooltip('hide');
   }, 1000)
 }

//clipboard tooltip on success& Failure alert
var clipboard = new Clipboard('.copy-button');

clipboard.on('success', function(e) {
  setTooltip('Successfully Copied');
  hideTooltip();
});

clipboard.on('error', function(e) {
  setTooltip('Copying Failed :/ Please try again!');
  hideTooltip();
}) */
