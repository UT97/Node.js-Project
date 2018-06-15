var data="";
    $(document).ready(function(){
      var pageUrl = window.location.href;
      var movieName = pageUrl.substring(pageUrl.indexOf('#')+1);

      $.ajax({
        url:"/movies/"+movieName,
        type:"GET",
        dataType:"json",
        success: function(result){
          console.log("result",result);

          result = result[0];
          console.log(result.posterUrl);
          //result = result.movies; no need now as we checked using inspect element and source result directly gave the data
         data += '<div class = "allmovies"><a href = "/index.html"><img src = "./images/arrow.png">All Movies</a></div>'
         data += '<h1>' + result.name + '</h1>';
         data += '<div class = "stars">';
         if(result.rating == 5)
            {

              for(var k = 0; k < 5; k++)
                data+='<img src = "./images/star.png">';
              
            }
            else if(result.rating == 4)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(result.rating == 3)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';
              data+='<img src = "./images/star-empty.png">';
            }

            else if(result.rating == 2)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';data+='<img src = "./images/star-empty.png">';
            }

            else if(result.rating == 1)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(result.rating == 1.5)
            {
              for(var k=0;k<1;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(result.rating == 2.5)
            {
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
              for(var k=0;k<2;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(result.rating == 3.5)
            {
              for(var k=0;k<3;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
                            for(var k=0;k<1;k++)
                data+='<img src = "./images/star-empty.png">';
            }
            else if(result.rating == 4.5)
            {
              for(var k=0;k<4;k++)
                data+='<img src = "./images/star.png">';
              for(var k = 0 ; k < 1 ; k++)
                data+= '<img src = "./images/star-half.png">';
            }
          data += '</div>';
          data += '<div class ="poster-img"><img src="'+ result.posterUrl + '"></div>'
          //data += '<div class="parallax" style= "background-image: url("'+ result.posterUrl + '");"></div>';
          data += '<div class = "year-name"><span>' + result.releaseYear + '</span><span>' + result.language + '</span></div>';
          data += '<div class = "plot"><h3>PLOT</h3><p>' + result.plot + '</p></div>';
          var str1 = result.cast;
          var eachname ="" ;
          var vector = [];
          for(var i=0; i < str1.length ; i++)
          {
            if(str1.charAt(i)!=',')
               {
                eachname += str1.charAt(i);
               }
            else
            {
              vector.push(eachname);
              eachname="";
            }
          }
          data += '<div class = "cast"><h3>CAST</h3><ul>';
          for(var i=0;i<vector.length;i++)
          {
            data += '<li>' + vector[i] + '</li>'
          }
          data += '</ul></div>';            

      
        

      
          $("section").html(data);
        }
      })
    })

