import { useState } from "react"
import "./Home.css"

const Home = () => {
    
    const [score, setScore] = useState(1);
    const [showCount, setShowCount] = useState(1)
    const [iq, setIq] = useState(10);
    const [start, setStart] = useState("true");
    const [startTime,setStartTime] = useState("")
    const [endTime,setEndTime] = useState("")

   const [age, setAge] = useState("")

        const handleStart = ()=>{

            const date = new Date();
            const showTime = date.getHours() 
                + ':' + date.getMinutes() 
                + ":" + date.getSeconds();
                console.log(showTime);
                setStart("false")
                setStartTime(showTime)
        }

    const img1 = (event) => {
        if(event.currentTarget.id == "img2" || event.currentTarget.id == "1img2" ||
        event.currentTarget.id == "2img5" ||event.currentTarget.id == "3img6"||
        event.currentTarget.id == "4img4" ){
            setScore(score+1)
            // alert(`score ${score}`)
        }else{
            // alert("not match")
        }
      
            setShowCount(showCount+1)
            // alert(`count${showCount}`)
            
        
      
    }
    const handleAge = (event)=>{
if(event.currentTarget.id == "age1" && score == 1 || 
event.currentTarget.id == "age2" && score == 1 ||
event.currentTarget.id =="age2" && score == 2
|| event.currentTarget.id =="age3" && score == 2 ||
event.currentTarget.id =="age3" && score == 1
|| event.currentTarget.id =="age4" && score == 2 ||
event.currentTarget.id =="age4" && score == 1
||event.currentTarget.id =="age5" && score == 3 ||
event.currentTarget.id =="age5" && score == 1 ||
event.currentTarget.id =="age5" && score == 2){
setIq(iq+70)
} else if(event.currentTarget.id =="age1" && score == 5
|| event.currentTarget.id == "age2" && score == 5
|| event.currentTarget.id =="age3" && score == 5
|| event.currentTarget.id =="age4" && score == 5 ||
event.currentTarget.id =="age5" && score == 4){
    setIq(iq+120)
} else if(event.currentTarget.id == "age1" && score == 2
|| event.currentTarget.id =="age2" && score == 3 ||
event.currentTarget.id =="age3" && score == 3 ||
event.currentTarget.id =="age4" && score == 3
|| event.currentTarget.id =="age4" && score == 4 
|| event.currentTarget.id =="age5" && score == 5 ){
    setIq(iq+100)
}  else if(event.currentTarget.id == "age1" && score == 3
|| event.currentTarget.id =="age2" && score == 4 ||
event.currentTarget.id =="age3" && score == 4 ||
event.currentTarget.id =="age4" && score == 4
|| event.currentTarget.id =="age4" && score == 4 ){
    setIq(iq+130)
}
//age counter

if(event.currentTarget.id == "age1"){
    setAge("6")
} else if(event.currentTarget.id == "age2"){
    setAge("7")
} else if(event.currentTarget.id == "age3"){
    setAge("8")
} else if(event.currentTarget.id == "age4"){
    setAge("9")
} else if(event.currentTarget.id == "age5"){
    setAge("10")
}

// for end time
const date = new Date();
const showTime = date.getHours() 
    + ':' + date.getMinutes() 
    + ":" + date.getSeconds();

setShowCount(showCount+1)
setEndTime(showTime)

    }

    
    return (
      <div className="parent">
    {
   start == "true"? <div>
<button onClick={handleStart} style={{color:"blue", background: "white", bordeRadius:"6px"}}>Start Test</button>

    </div>:
    
    showCount ==1 ?  <div>   
        <h1 style={{marginLeft:"-90%"}}>{showCount + "/" + 5}</h1> 

        count 1
     <div  className="imageParent">
                <img src="https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg" />
            </div>
            <h2 style={{color:"#fff"}}>{`${showCount}. Which shape should be in the rightmost cell with a question mark?`}</h2> 

            <div className="box">
                <div className="boxChild">
                    <img id="img1" onClick={img1} src="https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg" />
                </div>
                <div className="boxChild">
                    <img id="img2" onClick={img1} src="https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg" />
                </div>
                <div className="boxChild">
                    <img id="img3" onClick={img1} src="https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg" />
                </div>
                <div className="boxChild">
                    <img id="img4" onClick={img1} src="https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg" />
                </div>
                <div className="boxChild">
                    <img id="img5" onClick={img1} src="https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg" />
                </div>
                <div className="boxChild">
                    <img id="img6" onClick={img1} src="https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg" />
                </div>

            </div>
                  </div>   :
          //2nd
           showCount == 2 ? <div>
                       <h1 style={{marginLeft:"-90%"}}>{showCount + "/" + 5}</h1> 

            <div className="imageParent">
                <img src="https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg" />
            </div>
            <h2 style={{color:"#fff"}}>{`${showCount}. Which shape should be in the rightmost cell with a question mark?`}</h2>
            <div className="box">
                <div className="boxChild">
                    <img id="1img1" onClick={img1} src="https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg" />
                </div>
                <div className="boxChild">
                    <img id="1img2" onClick={img1} src="https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg" />
                </div>
                <div className="boxChild">
                    <img id="1img3" onClick={img1} src="https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg" />
                </div>
                <div className="boxChild">
                    <img id="1img4" onClick={img1} src="https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg" />
                </div>
                <div className="boxChild">
                    <img id="1img5" onClick={img1} src="https://en.testometrika.com/upload/answers/174/174cc63476713040f570f0ffabf5d5a4.svg" />
                </div>
                <div className="boxChild">
                    <img id="1img6" onClick={img1} src="https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg" />
                </div>

            </div>
            <button onClick={()=> setShowCount(showCount-1)} style={{background:"black", color:"white", marginLeft:"-90%", 
        width:"60px", height:"40px", borderRadius:"6px"}} >Back</button> 
      
            </div>:
            // 3rd
            showCount == 3 ? <div>
                  <h1 style={{marginLeft:"-90%"}}>{showCount + "/" + 5}</h1> 

        <div className="imageParent">
            <img src="https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg" />
        </div>
        <h2 style={{color:"#fff"}}>{`${showCount}. Which shape should be in the rightmost cell with a question mark?`}</h2>
        <div className="box">
            <div className="boxChild">
                <img id="2img1" onClick={img1} src="https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg" />
            </div>
            <div className="boxChild">
                <img id="2img2" onClick={img1} src="https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg" />
            </div>
            <div className="boxChild">
                <img id="2img3" onClick={img1} src="https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg" />
            </div>
            <div className="boxChild">
                <img id="2img4" onClick={img1} src="https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg" />
            </div>
            <div className="boxChild">
                <img id="2img5" onClick={img1} src="https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg" />
            </div>
            <div className="boxChild">
                <img id="2img6" onClick={img1} src="https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg" />
            </div>

        </div>
        <button onClick={()=> setShowCount(showCount-1)} style={{background:"black", color:"white", marginLeft:"-90%", 
        width:"60px", height:"40px", borderRadius:"6px"}} >Back</button> 
      
        </div>:
        //4rth
        showCount == 4 ? <div>
            <h1 style={{marginLeft:"-90%"}}>{showCount + "/" + 5}</h1> 

    <div className="imageParent">
        <img src="https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg" />
    </div>
    <h2 style={{color:"#fff"}}>{`${showCount}. Which shape should be in the rightmost cell with a question mark?`}</h2>
    <div className="box">
        <div className="boxChild">
            <img id="3img1" onClick={img1} src="https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg" />
        </div>
        <div className="boxChild">
            <img id="3img2" onClick={img1} src="https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg" />
        </div>
        <div className="boxChild">
            <img id="3img3" onClick={img1} src="https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg" />
        </div>
        <div className="boxChild">
            <img id="3img4" onClick={img1} src="https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg" />
        </div>
        <div className="boxChild">
            <img id="3img5" onClick={img1} src="https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg" />
        </div>
        <div className="boxChild">
            <img id="3img6" onClick={img1} src="https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg" />
        </div>

    </div>
    <button onClick={()=> setShowCount(showCount-1)} style={{background:"black", color:"white", marginLeft:"-90%", 
        width:"60px", height:"40px", borderRadius:"6px"}} >Back</button> 
      
    </div>:
    //5th
    showCount == 5 ? <div>
          <h1 style={{marginLeft:"-90%"}}>{showCount + "/" + 5}</h1> 

<div className="imageParent">
    <img src="https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg" />
</div>
<h2 style={{color:"#fff"}}>{`${showCount}. Which shape should be in the rightmost cell with a question mark?`}</h2>
<div className="box">
    <div className="boxChild">
        <img id="4img1" onClick={img1} src="https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg" />
    </div>
    <div className="boxChild">
        <img id="4img2" onClick={img1} src="https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg" />
    </div>
    <div className="boxChild">
        <img id="4img3" onClick={img1} src="https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg" />
    </div>
    <div className="boxChild">
        <img id="4img4" onClick={img1} src="https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg" />
    </div>
    <div className="boxChild">
        <img id="4img5" onClick={img1} src="https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg" />
    </div>
    <div className="boxChild">
        <img id="4img6" onClick={img1} src="https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg" />
    </div>

</div>
<button onClick={()=> setShowCount(showCount-1)} style={{background:"black", color:"white", marginLeft:"-90%", 
        width:"60px", height:"40px", borderRadius:"6px"}} >Back</button> 
      
</div>:
showCount == 6 ?
<div><h1 style={{color:"white"}}>Choose your age</h1>
<div className="ageList">
    
    <ul id="age1" onClick={handleAge} className="list">6</ul>
    <ul id="age2" onClick={handleAge} className="list">7</ul>
    <ul id="age3" onClick={handleAge} className="list">8</ul>
    <ul id="age4" onClick={handleAge} className="list">9</ul>
    <ul id="age5" onClick={handleAge} className="list">10</ul>
</div>
</div> :
<div style={{color:"white"}}>
<h3>Your result</h3>
<p>Test time starting from: {startTime}, and end of this test is: {endTime} </p>
<p>Your IQ is: {iq}. This corresponds to a average level IQ. In the test you have {score} correct </p>
<p>answers from 5. This is average result for your age {age}</p>
<button onClick={()=> window.location.reload()}>Start Test Again</button>
</div>
      }
            
        </div> 
    )
}
export default Home;