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
//= require_tree .
//= require jquery
//= require jquery.turbolinks
//= require turbolinks
//= require bootstrap-sprockets
//= require clipboard


//open only one modal at a time
function openModal(){
    $('#myModal').modal('toggle')
}

//Jquery function close all opened modal in one click
//close function using turbolinks:load so app works after pages change

$(document).on('turbolinks:load', function() {
    $('#myModal button').click(function() {
        $('.modal').modal('toggle');
    });
});

function closeModal() {
  $('#myModal button').click(function() {
      $('.modal').modal('toggle');
  });
}

//Not allow user to close the modal by clicking outside the div
$('#myModal').modal({backdrop: 'static', keyboard: 'false'});

// attack clipboard.js to copy buttons
$(document).on('turbolinks:load', function() {
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
