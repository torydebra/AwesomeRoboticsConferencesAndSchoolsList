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
    
    let showPast = settings["_buttons"][0]["inst"]["s"]["buttons"][0]["node"].classList.contains("btn-info");
    
    if (showPast || (! data[3]) ) {
        return true;
    }
    
    let now = new Date();
    let start = new Date(data[3]);
    
    if (start > now) {
        return true;
        
    } else  {
        return false;
    }
}

function pastDeadlineFilter(settings, data, dataIndex) {
                
    let showPastDeadline = settings["_buttons"][0]["inst"]["s"]["buttons"][1]["node"].classList.contains("btn-info");
    
    if (showPastDeadline || (! data[5]) ) {
        return true;
    }

    let deadline = new Date(data[5]);
    let now = new Date();
    
    if (deadline > now) {
        return true;
        
    } else  {
        return false;
    }
}
