function get_avg(my_arr) {

    var total_score = 0

    for ( let i = 0; i < my_arr.length; i++ ) {
        total_score += my_arr[i];
    }

    var average_score = (total_score / my_arr.length).toFixed(2);

    return average_score;
}

function uniq_arr(my_arr) {

    var a = new Set(my_arr);
    
    return a;
}

