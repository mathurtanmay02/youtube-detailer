document.addEventListener('DOMContentLoaded',function(){

  const key='AIzaSyAfCRifDXVzJzpegGcvhfG4OORXCVYhhTU';

  
  let getDetails = function(){

    var username = document.querySelector('#input_textbox').value;
    username = username.split(" ").join('');
    console.log(username);

    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${username}&key=${key}`)
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      
      if(data.pageInfo.totalResults !== 0){

        const Image = data.items[0].snippet.thumbnails.default.url
        const ID = data.items[0].id
        const Owner = data.items[0].snippet.localized.title
        var Date = data.items[0].snippet.publishedAt
        Date = Date.split('T')[0];
        const Description = data.items[0].snippet.description
        const Subscribers = data.items[0].statistics.subscriberCount
        const Videos = data.items[0].statistics.videoCount
        const Views = data.items[0].statistics.viewCount

        document.querySelector('#Image').src = Image;
        document.querySelector('#ID').innerHTML = ID;
        document.querySelector('#Owner_a').innerHTML = Owner;
        document.querySelector('#Owner_a').href = `https://www.youtube.com/channel/${ID}`;
        document.querySelector('#Date').innerHTML = Date;
        document.querySelector('#Description').innerHTML = Description;
        document.querySelector('#Subscribers').innerHTML = Subscribers;
        document.querySelector('#Videos').innerHTML = Videos;
        document.querySelector('#Views').innerHTML = Views;

        document.querySelector('#details').style.display = 'block';      
        document.querySelector('#intro').style.display = 'block';      
        document.querySelector('#input').style.display = 'none';

      }
      else
      {
        alert('Please Check The Username Entered');
      }

    })

    .catch(error => {
      console.log('Error : ',error);
      alert(`There seem's to be some problem. Please try again after sometime `);
      document.querySelector('#input_textbox').value = '';
    })

  }

  document.querySelector('#input_submit').addEventListener('click',function(){ 

    getDetails();

  })
    

  document.querySelector('#details_another_button').addEventListener('click', function() {

    document.querySelector('#details').style.display = 'none';
    document.querySelector('#intro').style.display = 'none';
    document.querySelector('#input').style.display = 'block';
    document.querySelector('#input_textbox').value = '';

  })

})  