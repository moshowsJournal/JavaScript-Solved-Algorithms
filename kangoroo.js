function kangaroo(x1, v1, x2, v2) {
    let range1 = [...Array(10000).keys()].filter((pos,index)=> pos >= x1);
    let k1_positions = range1.map((value,index)=> range1[index * v1]).filter(value => value != undefined);
    let range2 = [...Array(10000).keys()].filter((pos,index)=> pos >= x2);
    let k2_positions = range2.map((value,index)=> range2[index * v2]).filter(value=> value != undefined);
    let loop_count = k2_positions.length > k1_positions.length ? k1_positions.length :
    k2_positions.length;
    let mt_pts = [...Array(loop_count).keys()].filter((value,index)=>{
        return k1_positions[index] === k2_positions[index];
    });
    if(mt_pts.length > 0){
        return 'YES';
    }
    return 'NO';
}