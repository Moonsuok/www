
$(document).ready(function(){
    //객체배열(json)

    var characters = [
        {
            name:'Nemo', 
            explain:'Nemo is a curious and impressionable six-year-old, only child who lives with his overprotective, single-parent father, Marlin. Having led a sheltered life, Nemo brims with the excitement of starting school and finally seeing the wonders of the Great Barrier Reef. Despite being born with a withered fin, Nemo yearns for adventure, and as fate takes him far from home, he learns he is capable of doing great things.', 
        },
        {
            name:'Marlin', 
            explain:'Sheltered deep within The Great Barrier reef, safe inside his anemone home, lives Marlin. After losing his wife and family to the ocean, Marlin is left alone to raise his only surviving child, Nemo. He vows never to let anything happen to his son. A loving and responsible father, Marlin keeps his noble promise throughout Nemo’s early years. However, Marlin’s fear and distrust of the sea builds, and he struggles with his inability to let go of Nemo as his son begins school. When Nemo is suddenly taken away, Marlin must try to find in himself the courage, wisdom, and faith needed to search the unpredictable ocean to bring his boy home – the very characteristics he needs to allow his son to learn and grow. ', 
        },
        {
            name:'Dory', 
            explain:'Throughout the vast ocean you will not find a fish more hospitable, more friendly, or more sociable than Dory. She would love to chat with you all day and tell you her life story, but she can’t. Dory suffers from short term memory loss. Dory is the aquatic Good Samaritan who offers to help Marlin on his journey to find his son. She is certainly an odd partner for such a quest, but her optimism proves an invaluable quality to help Marlin overcome the impossible. To Dory, the glass is always half-full.', 
        },
        {
            name:'Gill', 
            explain:'Gill is the maverick of the dentist’s office fish tank. He is the leader of an eclectic gang of fish, who hang on his every word and are drawn to his magnetic personality. This tough, scarred, one-finned fish was raised in the ocean, but taken at a young age to live in a tank. Surrounded by fish who have spent their entire lives in “the box,” Gill alone feels the pull to be free. Though he dreams of one day breaking out and returning to the ocean, his failed escape attempts have broken his spirit. With Nemo&rsquo;s arrival to the tank, Gill is inspired again to find a way back to the sea.', 
        },
        {
            name:'Turtles', 
            explain:'Crush and his offspring Squirt know how to chill and go with the flow, especially the one created by the East Australian Current. The two have a righteous bond that&rsquo;s totally sweet. After 150 years of living in the ocean, Crush knows a thing or two about being a good parent.', 
        },
        {
            name:'Nigel', 
            explain:'Nigel is a tough old local bird. He likes to hang out on the docks with his other pelican mates and carry on. But Nigel has a guilty pleasure the others don’t know about; he loves to sneak off and spend hours in the dentist office window, diagnosing dental problems with his fish friends in the tank.', 
        }
      ];

    $('.characters .charac_icon a').click(function(e){
        e.preventDefault();
        var txt ='';
        var ind = $(this).index('.charac_icon li a');

        $('.characters .charac_box img').attr('src','./images/character_img_1600_'+(ind+1)+'.png');


        txt+= '<dt><span>'+characters[ind].name+'</span></dt>';
        txt+= '<dd>'+characters[ind].explain+'</dd>';


        $('.characters .charac_info').html(txt);
    });
  });