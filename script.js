
let error = document.querySelector("#error")
   
    let addTodo = () => {
        let todoText = document.getElementById('todo-text').value;
        if(todoText != ''){
            setData(todoText); // handler for adding item into local storage
            listTodo(); // handler for showing item from local storage
        }
    }

    /* handler for print todo  */
    let listTodo = () => {
        let html = ``;
        let data = getData(); // handler for getting item from local storage
        if(data){
            html += `<ol>`;
            data.forEach((value,item
            ) => {
                html += 
                `<li > 
                
                
                ${value} 
                
                <button onclick="removeData(${item})" class='remove'> X</button> </li>
                `;
            });
            html += `</ol>`;
           
        }
        document.getElementById('todo-item').innerHTML = html;
        document.getElementById('todo-text').value = ' ';
        
    }
 
     /* handler for get todo  */
    let getData = (item = null) => {
        /*
        * localStorage.getItem(<itemname>) main method 
        * (predefined method of js) for getting item from localstorage
        */
        let data = JSON.parse(localStorage.getItem('mytodo')); 
        if(data){

            if(item) {
                if(data.indexOf(item) != -1){
                    return data[item];
                }else{
                    return false;
                }
            }
            return data;
        }
        return false;
    }

    listTodo(); // call print handler for showing data into list 

     /* handler for set data/item todo  */
    let setData = (item) => {
        if(getData(item) != false) {
            
            error.innerHTML = " item already exist";
            return
        }else{
            let data = getData(); // call getdata handler for getting  data from list 
            data = (data != false) ? data : []; 
            data.push(item);
            data = JSON.stringify(data);
            /*
            * localStorage.setItem(<itemname>,<itemvalue>) main method 
            * (predefined method of js) for set item into localstorage
            */
            localStorage.setItem('mytodo',data);
            error.innerHTML = ' ';
              

        }
    }
 
    /* handler for remove item from localstorage */
    let removeData = (itemId) => {
            let data = getData();
            if(data){
                let newData = data.filter((v,i) => { return i != itemId });
                newData = JSON.stringify(newData);
                localStorage.setItem('mytodo',newData);
                listTodo();
            }else{
                alert("no data found");
            }

    } 
