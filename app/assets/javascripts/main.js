$(function() {

      console.log('Made by @garethadavies');

      /*
      Fittext Initialisation
      */

		  $('#page-header-text').fitText(0.85);

      /*
      Mugshot form toggle
      */

      $('#mugshot-add-button, #mugshot-cancel-button, .mugshot-edit-button').on('click', function(e) {

        //
        if ($('#organisation-settings-container').is(':visible')) {

          // Either open or close the settings container
          $('#organisation-settings-container').toggle();

        }

        // Either open or close the form container
        $('#mugshot-add-container').toggle();

        e.preventDefault();

      });

      /*
      Settings form toggle
      */

      $('#organisation-settings-button, #organisation-cancel-button').on('click', function(e) {

        //
        if ($('#mugshot-add-container').is(':visible')) {

          // Either open or close the form container
          $('#mugshot-add-container').toggle();

        }

        // Either open or close the settings container
        $('#organisation-settings-container').toggle();

        e.preventDefault();

      });

  	});