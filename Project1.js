window.onload=function(){
 let tasklist = document.getElementById('tasklist')
  let newtask = document.getElementById('newtask')
  let addbtn = document.getElementById('addbtn')
  let srtbtn = document.getElementById('srtbtn')
  let clrbtn = document.getElementById('clrbtn')
  console.log('Hello')
  function addnewtask(){
    let newtaskvalue=newtask.value
    let newtasklistitem=document.createElement('li')
    newtasklistitem.innerText=newtaskvalue
    newtasklistitem.className="list-group-item"
    let delBtn=document.createElement('button')
    delBtn.innerText="DELETE"
    delBtn.className="btn btn-outline-danger mx-3"
    delBtn.onclick=function(){
      event.target.parentElement.remove()
    }
    newtasklistitem.appendChild(delBtn)

    let doneBtn=document.createElement('button')
    doneBtn.innerText="NotDone"
    doneBtn.className="btn btn-outline-primary "
    newtasklistitem.appendChild(doneBtn)

    doneBtn.onclick=function(){
      if(event.target.innerText==="NotDone" ){
        
        event.target.innerText="Done"
        event.target.className="btn btn-outline-success"
        event.target.parentElement.className="list-group-item done"
      }
       else{
       event.target.parentElement.className='list-group-item'
       event.target.innerText="NotDone"
       event.target.className="btn btn-outline-primary"
       }
      console.log(event.target.parentElement.className)


    }




    tasklist.appendChild(newtasklistitem)
    newtask.value=""
    
  }//clear button not working in one go ??<---------------->
  clrbtn.onclick=function(){
    let items = tasklist.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
    
    if(items[i].className==="list-group-item done")
    {
      console.log(items[i].className)
      items[i].remove()
      i--;
    }
  }
  


  }
  newtask.addEventListener('keyup' ,function(evnt)
    {
      console.log("Button");
      if(evnt.keyCode==13)
      {
        console.log("hello")
        addnewtask()
      }
    })

  addbtn.onclick=function () {
    addnewtask()  
  }
  let arr=[]
  srtbtn.onclick=function(){
    let items = tasklist.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
    
    if(items[i].className==="list-group-item done")
    {
      arr.push(items[i])
      items[i].remove()

    }
    for (let i=0;i<arr.length;i++)
    {
      tasklist.appendChild(arr[i])
    }
  }

  }


    
}
