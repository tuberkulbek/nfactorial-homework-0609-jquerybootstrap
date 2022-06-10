$("document").ready(function (){
    $(".btn").on("click", ()=>{
        let name = $("#name").val();
        let city = $("#city").val();
        let character = $("#character").val();
        let adverb = $("#adverb").val();
        let adjective = $("#adjective").val();
        let story = `One day, my friend ${name} was visiting ${city} and ran into ${character}. ${name} ran ${adverb} to meet ${
            character}. But ${character} turned out to be very ${adjective} and ${name} did not enjoy the meeting`;
        let storyToTell = $(".story").children()
        storyToTell.empty()
        storyToTell.append(story)
    })
})