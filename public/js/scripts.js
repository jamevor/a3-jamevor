   $(document).ready(function() {
       $('#fullTable').DataTable( {
           "ajax": 'fullOrders.json'
       } );
   } );
   
 7  
 8  $(document).ready(function() {
 9      $('#userTable').DataTable( {
10          "ajax": 'userOrders.json'
11      } );
12  } );