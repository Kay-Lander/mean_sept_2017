$(document). ready(function (){
   // this triggers the connection event in our server!
   let socket  = io.connect();
   // we'll write all the socket stuff after the above line!
   $('#Surveymade').click(function(){
      socket.emit('posting_form', {
        name: $('#name').val(),
        location: $('#loc').val(),
        language: $('#lan').val(),
        comment: $('#comm').val()
      });
   });
   //listener
   socket.on( 'updated_msg', (data) => {
     $('#notes').html("You emitted the following info to the server:" + JSON.stringify(data.res));
   })
   socket.on('random_num', function (data) {
     $('#num').html("Your lucky numbers is: " + JSON.stringify(data.res))
   })
})
