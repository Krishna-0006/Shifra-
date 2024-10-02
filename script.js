let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=0.8
    text_speak.pitch=0.9
    text_speak.volume=1
    text_speak.lang="en-US"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Krishna Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
 //window.addEventListener('load',()=>{
     //wishMe()
 //})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello Kelly")||message.includes("hey")||message.includes("hi")){
        speak("hello sir,how can i assist you today?")
    }
    else if(message.includes("who are you")){
        speak("i am Kelly virtual assistant , developed by Krishna Sir")

    }
    else if(message.includes("what about you")){
        speak("i am Kelly ,developed by Krishna Singh , specially designed to perform any task that you wish..")

    }
    else if(message.includes("tell me animals name")){
        speak("Here are animals name: Tiger ,Lion ,Cow, Rabbit ,Dog ,Cat")

    }    
    else if(message.includes("what is your name")){
        speak("my name is Kelly..")
    }    
    else if(message.includes(" Kelly who created you")||message.includes("Kelly who developed you")||message.includes("Kelly who invented you")){
        speak("my honorable Krishna Sir Developed Me..")
    }    
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open playstore")||message.includes("appstore")){
        speak("opening playstore..")
        window.open("playstore://")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify..")
        window.open("Spotify://")
    }
    else if(message.includes("open snapchat")){
        speak("opening snapchat..")
        window.open("snapchat://")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart..")
        window.open("flipkart://")
    }
    else if(message.includes("open amazon")){
        speak("opening amazon..")
        window.open("amazon://")
        }    
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}
