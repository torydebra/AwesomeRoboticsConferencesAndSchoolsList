function pastButtonOnClick( e, dt, node, config ) {

    if (node[0].classList.contains("btn-info")) {

        node[0].classList.remove("btn-info");
        node[0].classList.add("btn-secondary");
        node[0].textContent = "Hiding Past";
        
    } else {
        
        node[0].classList.remove("btn-secondary");
        node[0].classList.add("btn-info");
        node[0].textContent = "Showing Past";
    }
    
    dt.draw();  
}

function pastDeadlineButtonOnClick( e, dt, node, config ) {
            
    if (node[0].classList.contains("btn-info")) {
        
        node[0].classList.remove("btn-info");
        node[0].classList.add("btn-secondary");
        node[0].textContent = "Hiding Past Deadline";
            
    } else {
        
        node[0].classList.remove("btn-secondary");
        node[0].classList.add("btn-info");
        node[0].textContent = "Showing Past Deadline";
    }
        
    dt.draw();
}

function pastFilter(settings, data, dataIndex) {
    
    
    //filter only for the "currentConf/School" tab
    if (settings.sInstance === "") {
        console.error("Strange error, check if datatable has changed the sInstance attribute name")
        return false;
    }
    if (settings.sInstance !== "confCurrent" && settings.sInstance !== "schoolCurrent") {
        return true;
    }
    
    
    let showPast = settings["_buttons"][0]["inst"]["s"]["buttons"][0]["node"].classList.contains("btn-info");
    
    if (showPast || (! data[3]) ) {
        return true;
    }
    
    let start = new Date(data[4]);
    let now = new Date();
    let today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() ));

    if(start.getTime() < today.getTime())  {
        return false;
    }
    else {
        return true;
    }

    
//     if (start > now) {
//         return true;
//         
//     } else  {
//         return false;
//     }
}

function pastDeadlineFilter(settings, data, dataIndex) {
    
    //filter only for the "currentConf/School" tab
    if (settings.sInstance === "") {
        console.error("Strange error, check if datatable has changed the sInstance attribute name")
        return false;
    }
    if (settings.sInstance !== "confCurrent" && settings.sInstance !== "schoolCurrent") {
        return true;
    }
    
                
    let showPastDeadline = settings["_buttons"][0]["inst"]["s"]["buttons"][1]["node"].classList.contains("btn-info");
    
    if (showPastDeadline || (! data[5]) ) {
        return true;
    }
    
    
    let deadline = new Date(data[5]) // data[5] has no time or timezone?
    let now = new Date();
    //https://stackoverflow.com/questions/2698725/comparing-date-part-only-without-comparing-time-in-javascript
    //trick to consider today as not pasted, not considering the timezone
    let today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() ));

    if(deadline.getTime() < today.getTime()) {
        //console.log("date is past");
        return false;
    }
    //else if(userEntered.getTime() == today.getTime())
    //    console.log("date is today");
    //else
    //  console.log("date is future");
    else {
        return true;
    }
    
//     if (deadline >= now) {
//         return true;
//         
//     } else  {
//         return false;
//     }
}
