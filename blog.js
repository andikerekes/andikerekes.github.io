database = firebase.database();

$('#Gomb').on('click', (event) => {
    event.preventDefault();
    let data1 = $('#title').val();
    let data2 = $('#content').val();
    $('body').append(`<h3>${data1}</h3><p>${data2}</p>`);
    let dataToSave = { title: data1, content: data2 };
    database.ref("Posztok").push(dataToSave);
  
});



$('#postok').prepend(`<li> 1 </li>`);








