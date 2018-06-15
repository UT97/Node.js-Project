var data="";
    $(document).ready(function(){
      $.ajax({
        url:"/movies/all",
        type:"GET",
        dataType:"json",
        success: function(result){
          console.log("result",result);
          //result = result.movies; no need now as we checked using inspect element and source result directly gave the data
          var tamil=[],english=[],hindi=[],flag1=0,flag2=0,flag3=0;
          for( var i=0;i < result.length ; i++)
          {
             if(result[i].language == "Tamil")
               tamil.push(result[i]);
          else if(result[i].language == "English")
               english.push(result[i]);
           else  if(result[i].language == "Hindi")
               hindi.push(result[i]);
               
          }
           data += '<h2>Tamil<h2>';
            
          for(var i=0; i < tamil.length ; i++)
          {
                 
            data += '<div class="eachmovie">';
            data += '<a href = "/moviedesc.html#' + tamil[i].name + '">'  ;  
            data += '<div class="poster"><img src = "' + tamil[i].posterUrl + '"></div></a>';
            data += '<div class="name">' + tamil[i].name +  '</div>';
            data += '<div class="releaseYear">' + tamil[i].releaseYear + '</div>';
            data += '<div class="stars">'
            if(tamil[i].rating == 5)
            {

              for(var k = 0; k < 5; k++)
                data+='<img src = "./images/star.png">';
              
            }
            else if(tamil[i].rating == 4)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(tamil[i].rating == 3)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(tamil[i].rating == 2)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';
            }

            else if(tamil[i].rating == 1)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(tamil[i].rating == 1.5)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(tamil[i].rating == 2.5)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(tamil[i].rating == 3.5)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
                            for(var k=0;k<1;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(tamil[i].rating == 4.5)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
            }
            data += '</div>'
            data += '</div>';
            
          

        }
        data += '<h2>English<h2>';
            
          for(var i=0; i < english.length ; i++)
          {
                     
            data += '<div class="eachmovie">';
            data += '<a href = "/moviedesc.html#' + english[i].name + '">'  ;  
            data += '<div class="poster"><img src = "' + english[i].posterUrl + '"></div></a>';
            data += '<div class="name">' + english[i].name + '</div>';
            data += '<div class="releaseYear">' + english[i].releaseYear + '</div>';
            data += '<div class="stars">'
            if(english[i].rating == 5)
            {

              for(var k = 0; k < 5; k++)
                data+='<img src = "./images/star.png">';
              
            }
            else if(english[i].rating == 4)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(english[i].rating == 3)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(english[i].rating == 2)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';
            }

            else if(english[i].rating == 1)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(english[i].rating == 1.5)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(english[i].rating == 2.5)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(english[i].rating == 3.5)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
                            for(var k=0;k<1;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(english[i].rating == 4.5)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
            }
            data += '</div>'
            data += '</div>';
            
          

        }
       data += '<h2>Hindi<h2>';
            
          for(var i=0; i < hindi.length ; i++)
          {
                     
            data += '<div class="eachmovie">';
            data += '<a href = "/moviedesc.html#' + hindi[i].name + '">'  ;  
            data += '<div class="poster"><img src = "' + hindi[i].posterUrl + '"></div></a>';
            data += '<div class="name">' + hindi[i].name + '</div>';
            data += '<div class="releaseYear">' + hindi[i].releaseYear + '</div>';
            data += '<div class="stars">'
            if(hindi[i].rating == 5)
            {

              for(var k = 0; k < 5; k++)
                data+='<img src = "./images/star.png">';
              
            }
            else if(hindi[i].rating == 4)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(hindi[i].rating == 3)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(hindi[i].rating == 2)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';
            }

            else if(hindi[i].rating == 1)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(hindi[i].rating == 1.5)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(hindi[i].rating == 2.5)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(hindi[i].rating == 3.5)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
                            for(var k=0;k<1;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(hindi[i].rating == 4.5)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
            }
            data += '</div>'
            data += '</div>';
            
          

        }
       
       
            
          

      
        

      
          $("section").html(data);
        }
      })
    })

